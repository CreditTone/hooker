#!/usr/bin/env python3

'''
Created on 2020年3月23日

@author: stephen
'''
from _ast import In


default_frida_server_arm = "frida-server-16.7.19-android-arm"
default_frida_server_arm64 = "frida-server-16.7.19-android-arm64"


import frida, sys
import os
import io
import re
import stat
import pwd
import grp
import time
import json
import getopt
import traceback
import base64
import time
import platform
import threading
import adbutils
import hashlib
import shutil
import textwrap
import zipfile
import queue
import sqlite3
import itertools
import jsbeautifier
from datetime import datetime
from collections import Counter
from androguard.core.bytecodes import apk
from androguard.core.bytecodes import dvm
from androguard.core.analysis.analysis import MethodAnalysis
from androguard.core import androconf

from prompt_toolkit import PromptSession
from prompt_toolkit.completion import Completer, Completion
from prompt_toolkit.completion import WordCompleter
from prompt_toolkit.completion import NestedCompleter
from prompt_toolkit.patch_stdout import patch_stdout
from wcwidth import wcswidth

def withColor(string, fg, bg=49):
    print("\33[0m\33[%d;%dm%s\33[0m" % (fg, bg, string))
#front color
Red = 1
Green = 2
Yellow = 3
Blue = 4
Magenta = 5
Cyan = 6
White = 7
 
def red(string):
    return withColor(string, Red+30) # Red
def green(string):
    return withColor(string, Green+30) # Green
def yellow(string):
    return withColor(string, Yellow+30) # Yellow
def blue(string):
    return withColor(string, Blue+30) # Blue
def magenta(string):
    return withColor(string, Magenta+30) # Magenta
def cyan(string):
    return withColor(string, Cyan+30) # Cyan
def white(string):
    return withColor(string, White+30) # White

def print_js_file(filenames :list):
    if not filenames:
        return
    GREEN = "\033[32m"
    RESET = "\033[0m"
    columns, _ = shutil.get_terminal_size()
    # 计算每个字段宽度
    max_len = max(len(name) for name in filenames) + 2
    items_per_line = max(1, columns // max_len)
    # 输出带颜色的文件名
    for i in range(0, len(filenames), items_per_line):
        line = "".join(f"{GREEN}{name.ljust(max_len)}{RESET}" for name in filenames[i:i + items_per_line])
        print(line)

def read_js_resource(filename):
    return io.open('./js/' + filename,'r',encoding= 'utf8').read()
        
cmd_session = None

warn = red
info = yellow

adb_device = None

def _init_adb_device():
    global adb_device
    adb_device = adbutils.adb.device()
_init_adb_device()

def run_su_command(cmd, not_read=False):
    #print("run_su_command:", cmd)
    conn = adb_device.shell(["su", "-c", cmd], stream=True)
    try:
        if not_read:
            time.sleep(1)
            return
        output = conn.read_until_close()
        return output.strip()
    finally:
        try:
            conn.close()
        except Exception as e:
            pass

#初始化frida运行环境
def is_frida_working_via_attach(target_package="com.android.systemui"):
    try:
        __device = frida.get_usb_device(timeout=3)  # or use add_remote_device(ip)
        pid = __device.get_process(target_package).pid  # 先确认包是否存在
        _session = __device.attach(pid)
        _session.detach()
        return True
    except frida.ServerNotRunningError:
        return False
    except frida.ProcessNotFoundError:
        #info("⚠️ 找不到进程，说明包名可能错误，但 frida 正常")
        return True  # 仍然说明 frida-server 已连通
    except frida.TimedOutError:
        #info("❌ 连接超时，frida-server 可能未运行或设备未连接")
        return False
    except Exception as e:
        #print("其他异常:", e)
        return False

def check_remote_file_exists(path):
    result = adb_device.shell(f"test -f {path} && echo exists || echo missing")
    return result.strip() == "exists"

def check_remote_dir_exists(path):
    result = adb_device.shell(f"[ -d {path} ] && echo exists || echo not_exists")
    return result.strip() == "exists"

def get_cpu_arch():
    abi = adb_device.shell("getprop ro.product.cpu.abi").strip()
    if "arm64" in abi:
        return "arm64"
    elif "armeabi" in abi:
        return "arm"
    elif "x86_64" in abi:
        return "x86_64"
    elif "x86" in abi:
        return "x86"
    return "arm64"

def choose_frida_server():
    cpu_arch = get_cpu_arch()
    if "arm64" == cpu_arch:
        return default_frida_server_arm64
    elif "arm" == cpu_arch:
        return default_frida_server_arm
    info("For simulator, please start frida-server manually first. Thank you")
    sys.exit(2)
    
def pull_file_to_local(remote_file, local_path, is_debug=True):
    adb_device.sync.pull(remote_file, local_path)
    if is_debug:
        info(f"pull {remote_file} to {local_path} successful")

def push_file_to_remote(local_path, remote_path, is_debug=True):
    # info(f"push {local_path} to {remote_path}")
    adb_device.sync.push(local_path, remote_path)
    if is_debug:
        info(f"push {local_path} to {remote_path} successful")
    
def is_root():
    return "system" in run_su_command("ls /data/")

def ensure_root():
    if is_root():
        return True
    else:
        try:
            adb_device.root()  # adbutils 内置封装
            if is_root():
                info("Switched to root successfully ✅")
                return True
            else:
                info("❌ Failed to switch: device does not support root")
                return False
        except Exception as e:
            info(f"❌ Failed to switch to root: {e}")
            return False


# 自动化部署frida-server    
if not is_frida_working_via_attach():
    if not ensure_root():
        info("❌ Cannot auto-deploy frida-server. Please start frida-server manually and try again.")
        sys.exit(2)
    frida_server_file = choose_frida_server()
    remote_frida_server_file = f"/data/mobile-deploy/{frida_server_file}"
    if not check_remote_dir_exists("/data/mobile-deploy/"):
        run_su_command("mkdir /data/mobile-deploy/")
    if not check_remote_file_exists(remote_frida_server_file):
        push_file_to_remote(f"mobile-deploy/{frida_server_file}", "/sdcard/")
        run_su_command(f"mv /sdcard/{frida_server_file} {remote_frida_server_file}")
        run_su_command(f"chmod +x {remote_frida_server_file}")
    run_su_command(f"cd /data/mobile-deploy/ && ./{choose_frida_server()} > /sdcard/f_server.log 2>&1 &", True)
    success = False
    for index in range(20):
        if is_frida_working_via_attach():
            info("frida-server started successfully ✅")
            success = True
            break
        time.sleep(0.5)
    if not success:
        info("❌ Failed to start frida-server automatically. Please start it manually and try again.")
        sys.exit(2)

# 全局变量        
current_identifier = None
current_identifier_name = None
current_identifier_version = None
current_identifier_pid = None
current_identifier_install_path = None
current_identifier_uid = None
current_local_apk_path = None
current_identifier_cache_db = None
current_identifier_cache_readonly_db = None

frida_device = None

resource_rpc_jscode = None
resource_hook_js_prepare_jscode = None
resource_hook_js_enhance_jscode = None



def _init_resource_jscode():
    global resource_rpc_jscode
    global resource_hook_js_prepare_jscode
    global resource_hook_js_enhance_jscode
    resource_rpc_jscode = read_js_resource("rpc.js")
    resource_hook_js_prepare_jscode = read_js_resource("_hook_js_prepare.js")
    resource_hook_js_enhance_jscode = read_js_resource("_hook_js_enhance.js")

_init_resource_jscode()

#print(f"resource_rpc_jscode:{resource_rpc_jscode}")

def _init_frida_device():
    global frida_device
    def getRemoteDriver():
        text = io.open(".hooker_driver",'r',encoding= 'utf8').read()
        if not text:
            return None
        searchResult = re.search('\d+\.\d+\.\d+\.\d+:\d+', text)
        if searchResult:
            return searchResult.group()
        return None
    if frida_device:
        return
    remoteDriver = getRemoteDriver() #ip:port
    if remoteDriver:
        frida_device = frida.get_device_manager().add_remote_device(remoteDriver)
    else:
        frida_device = frida.get_usb_device(1000)

_init_frida_device()

def start_app(package_name):
    global current_identifier_pid
    shell_result = adb_device.shell(f"dumpsys package {package_name} | grep -A 1 MAIN | grep {package_name}").strip()
    m = re.search(r"\s+([^\s]+)\s+filter", shell_result)
    if m:
        main_activity = m.group(1)
        #print(f"am start -n {main_activity}")
        adb_device.shell(f"am start -n {main_activity}")
    else:
        adb_device.shell(f"monkey -p {package_name} -c android.intent.category.LAUNCHER 1")
    for j in range(100):
        time.sleep(0.5)
        if package_name in adb_device.shell("dumpsys activity activities | grep mResumedActivity"):
            break
    apps = frida_device.enumerate_applications()
    for app in sorted(apps, key=lambda x: x.pid or 0):
        if app.pid != 0 and app.identifier == package_name:
            current_identifier_pid = app.pid
            return app.pid, app.name
    return None, None

def restart_app(package_name):
    global current_identifier_pid
    info(f"restarts {package_name}")
    adb_device.app_stop(package_name)
    time.sleep(3)
    app_pid, app_name = start_app(package_name)
    current_identifier_pid = app_pid

def ensure_app_in_foreground(package_name):
    uid = None
    shell_result = adb_device.shell(f"dumpsys package {package_name} | grep userId=").strip()
    matchx = re.search(r"userId=(\d+)", shell_result)
    if matchx:
        uid = int(matchx.group(1))
    else:
        warn("UID not found.")
    apk_path = adb_device.shell(f"pm path {package_name}").strip().replace("package:", "")
    apk_path = re.search(r"/data/app/[^/]+/base.apk", apk_path).group(0)
    #print(f"apk_path:{apk_path}")
    appinstall_path = apk_path.rsplit("/", 1)[0]
    appinfo = None
    version_name = None
    if 'app_info' in dir(adb_device):
        appinfo = adb_device.app_info(package_name)
        version_name = appinfo.version_name
    else:
        appinfo = adb_device.package_info(package_name)
        version_name = appinfo["version_name"]
    # 获取当前正在运行的所有进程
    proc_map = {}
    apps = frida_device.enumerate_applications()
    for app in sorted(apps, key=lambda x: x.pid or 0):
        if app.pid != 0:  # 只列出运行中的
            proc_map[app.identifier] = (app.pid, app.name)
    is_running = package_name in proc_map
    # 获取当前前台 activity
    foreground_output = adb_device.shell("dumpsys activity activities | grep mResumedActivity")
    is_foreground = package_name in foreground_output
    if is_running:
        if is_foreground:
            info(f"✅ App {package_name} is already in the foreground")
        else:
            info(f"📲 App {package_name} is running in the background, bringing it to the foreground...")
            # 通过 am 启动主 Activity，会自动 bring 到前台
            adb_device.shell(f"monkey -p {package_name} -c android.intent.category.LAUNCHER 1")
        return proc_map[package_name][0], proc_map[package_name][1], version_name, appinstall_path, uid
    else:
        info(f"🚀 App {package_name} is not running, starting it now...")
        #adb_device.shell(f"monkey -p {package_name} -c android.intent.category.LAUNCHER 1")
        app_pid, app_name = start_app(package_name)
        return app_pid, app_name, version_name, appinstall_path, uid

def get_remote_file_md5(file_path):
    # 检查文件是否存在并获取长度
    check_cmd = f"md5sum {file_path}"
    result = run_su_command(check_cmd).strip()
    if "No such file" in result or "Permission denied" in result or not result:
        #warn("No such file")
        return ""
    try:
        # 56cf2745f4884b4dfcc1e193d0118c05  radar.dex
        m = re.search("[\w]{32}", result)
        if m:
            return m.group()
        else:
            return ""
    except Exception:
        return ""
    
def get_local_file_md5(filepath, chunk_size=8192):
    md5 = hashlib.md5()
    try:
        with open(filepath, 'rb') as f:
            while True:
                chunk = f.read(chunk_size)
                if not chunk:
                    break
                md5.update(chunk)
        return md5.hexdigest()
    except FileNotFoundError:
        warn(f"File Not Found: {filepath}")
        return None
    
def read_local_file(filename):
    return io.open(filename,'r',encoding= 'utf8').read()
    
def check_dependency_files():
    def process_dex_dependency_files():
        compara_and_update_file("mobile-deploy/radar.dex", "/data/local/tmp/radar.dex")
        compara_and_update_file("mobile-deploy/libext64.so", f"/data/data/{current_identifier}/files/libext64.so")
        compara_and_update_file("mobile-deploy/libext.so", f"/data/data/{current_identifier}/files/libext.so")
    t = threading.Thread(target=process_dex_dependency_files)
    t.daemon = True
    t.start()
             
def compara_and_update_file(local_file, remote_file):
    local_md5 = get_local_file_md5(local_file)
    filename = remote_file.split("/")[-1]
    sdcard_remote_md5 = get_remote_file_md5(f"/sdcard/{filename}")
    #先把radar.dex拷贝到sdcard，后期更新radar.dex直接从sdcard拷过去
    if local_md5 != sdcard_remote_md5:
        push_file_to_remote(local_file, "/sdcard/", False)
    remote_md5 = get_remote_file_md5(remote_file)
    #print(f"local_md5:{local_md5} remote_md5:{remote_md5}")
    if local_md5 != remote_md5:
        #info(f"update {filename} into {remote_file}")
        run_su_command(f"cp /sdcard/{filename} {remote_file}", True)
        run_su_command(f"chmod 777 {remote_file}", True)
        

    

def on_message(message, data):
    pass

def is_number(s):
    try:
        int(s)
        return True
    except ValueError:
        pass
    try:
        import unicodedata
        unicodedata.numeric(s)
        return True
    except (TypeError, ValueError):
        pass
    return False

def _get_min_pid_by_name(process_name):
    # 获取所有进程
    processes = frida_device.enumerate_processes()
    # 存储符合条件的进程 ID
    matching_pids = []
    for process in processes:
        # 如果进程名包含目标进程名
        if process_name in process.name:
            matching_pids.append(process.pid)
    # 如果找到符合条件的进程，返回最小的进程 ID
    if matching_pids:
        return min(matching_pids)
    else:
        # 如果没有找到匹配的进程，返回 None
        return None

def attach_rpc(use_v8=False):
    global frida_device
    online_session = None
    online_script = None
    online_session = frida_device.attach(current_identifier_pid)
    if online_session == None:
        warn("attaching fail to device")
        return None, None
    if use_v8:
        online_script = online_session.create_script(resource_rpc_jscode, runtime="v8")
    else:
        online_script = online_session.create_script(resource_rpc_jscode)
    # print(f"rpc_jscode:{resource_rpc_jscode}")
    online_script.on('message', on_message)
    online_script.load()
    online_script.exports_sync.loadradardex()
    return online_session, online_script

def attach(script_file, use_v8=False):
    if not os.path.isfile(script_file):
        warn(f"attach {script_file} File Not found")
        return None, None
    script_jscode = read_local_file(script_file)
    global frida_device
    online_session = None
    online_script = None
    online_session = frida_device.attach(current_identifier_pid)
    if online_session == None:
        warn("attaching fail to device")
        return None, None
    if use_v8:
        #info("use v8 js engine")
        online_script = online_session.create_script(script_jscode, runtime="v8")
    else:
        online_script = online_session.create_script(script_jscode)
    online_script.on('message', on_message)
    online_script.load()
    #sys.stdin.read()
    return online_session, online_script

def spawn(script_file, use_v8=False):
    if not os.path.isfile(script_file):
        warn(f"{script_file} File Not found")
        return None, None
    script_jscode = read_local_file(script_file)
    global frida_device
    current_identifier_pid = frida_device.spawn([current_identifier])
    online_script = None
    online_session = frida_device.attach(current_identifier_pid)
    if online_session == None:
        warn("attaching fail to device")
        return None, None
    if use_v8:
        online_script = online_session.create_script(script_jscode, runtime="v8")
    else:
        online_script = online_session.create_script(script_jscode)
    # online_script.on('message', on_message)
    online_script.load()
    frida_device.resume(current_identifier_pid)
    #sys.stdin.read()
    return online_session, online_script
    

def detach(online_session):
    if online_session != None:
        online_session.detach()
 
def existsClass(target,className):
    online_session = None
    online_script = None
    try:
        online_session, online_script,_ = attach_rpc(target);
        info(online_script.exports_sync.containsclass(className))
    except Exception:
        warn(traceback.format_exc())  
    finally:    
        detach(online_session)

def create_workingdir_file(filename, text):
    file = None
    try:
        file = open(filename, mode='w+')
        file.write(text)
    except Exception:
        warn(traceback.format_exc())  
    finally:
        if file != None:
            file.close()
            
def create_working_dir_enverment():
    global current_identifier
    global frida_device
    global current_identifier_name
    global current_identifier_version
    packageName = current_identifier
    if not os.path.exists(packageName):
        os.makedirs(packageName)
        info(f"Creating working directory: {packageName}")
        info(f"Generating frida shortcut command...")
        os.makedirs(packageName+"/xinit")
        shellPrefix = "#!/bin/bash\nHOOKER_DRIVER=$(cat ../.hooker_driver)\n"
        logHooking = shellPrefix + "echo \"hooking $1\" > log\ndate | tee -ai log\n" + "frida $HOOKER_DRIVER -l $1 -N " + packageName + " | tee -ai log"
        attach_shell = shellPrefix + "frida $HOOKER_DRIVER -l $1 -N " + packageName
        spawn_shell = f"{shellPrefix}\nfrida $HOOKER_DRIVER --runtime=v8 -f {packageName} -l $1"
        create_workingdir_file(packageName+"/hooking", logHooking)
        create_workingdir_file(packageName+"/attach", attach_shell)
        create_workingdir_file(packageName+"/spawn", spawn_shell)
        create_workingdir_file(packageName + "/kill", shellPrefix + "frida-kill $HOOKER_DRIVER "+packageName)
        create_workingdir_file(packageName+"/objection", shellPrefix + "objection -d -g "+packageName+" explore")
        os.popen('chmod 777 ' + packageName +'/hooking').readlines()
        os.popen('chmod 777 ' + packageName +'/attach').readlines()
        os.popen('chmod 777 ' + packageName +'/kill').readlines()
        os.popen('chmod 777 ' + packageName +'/objection').readlines()
        os.popen('chmod 777 ' + packageName +'/spawn').readlines()
        info(f"Generating built-in frida script...")
        create_workingdir_file(packageName + "/empty.js", "")
        hook_js_prepare_jscode = read_js_resource("_hook_js_prepare.js")
        hook_js_enhance_jscode = read_js_resource("_hook_js_enhance.js")
        rpc_jscode = read_js_resource("rpc.js")
        url_jscode = read_js_resource("url.js")
        android_ui_jscode = read_js_resource("android_ui.js")
        edit_text_jscode = read_js_resource("edit_text.js")
        text_view_jscode = read_js_resource("text_view.js")
        click_jscode = read_js_resource("click.js")
        activity_events_jscode = read_js_resource("activity_events.js")
        object_store_jscode = read_js_resource("object_store.js")
        keystore_dump_jscode = read_js_resource("keystore_dump.js")
        ssl_log_jscode = read_js_resource("ssl_log.js")
        just_trust_me_jscode = read_js_resource("just_trust_me.js")
        just_trust_me_okhttp_hook_finder_jscode = read_js_resource("just_trust_me_okhttp_hook_finder.js")
        just_trust_me_for_ios_jscode = read_js_resource("just_trust_me_for_ios.js")
        hook_RN_jscode = read_js_resource("hook_register_natives.js")
        dump_dex_jscode = read_js_resource("dump_dex.js")
        trace_initproc_jscode = read_js_resource("trace_initproc.js")
        hook_artmethod_register_jscode = read_js_resource("hook_artmethod_register.js")
        find_anit_frida_so_jscode = read_js_resource("find_anit_frida_so.js")
        hook_jni_method_trace_jscode = read_js_resource("hook_jni_method_trace.js")
        replace_dlsym_get_pthread_create_jscode = read_js_resource("replace_dlsym_get_pthread_create.js")
        find_boringssl_custom_verify_func_jscode = read_js_resource("find_boringssl_custom_verify_func.js")
        get_device_info_jscode = read_js_resource("get_device_info.js")
        apk_shell_scanner_jscode = read_js_resource("apk_shell_scanner.js")
        create_workingdir_file(packageName + "/ssl_log.js", ssl_log_jscode)
        create_workingdir_file(packageName + "/url.js", url_jscode)
        create_workingdir_file(packageName + "/edit_text.js", edit_text_jscode)
        create_workingdir_file(packageName + "/text_view.js", text_view_jscode)
        create_workingdir_file(packageName + "/click.js", click_jscode)
        create_workingdir_file(packageName + "/hook_register_natives.js", hook_RN_jscode)
        create_workingdir_file(packageName + "/keystore_dump.js", keystore_dump_jscode)
        create_workingdir_file(packageName + "/dump_dex.js", dump_dex_jscode)
        create_workingdir_file(packageName + "/android_ui.js", android_ui_jscode.replace("com.smile.gifmaker", packageName))
        create_workingdir_file(packageName + "/activity_events.js", activity_events_jscode.replace("com.smile.gifmaker", packageName))
        create_workingdir_file(packageName + "/object_store.js", object_store_jscode.replace("com.smile.gifmaker", packageName))
        create_workingdir_file(packageName + "/just_trust_me.js", just_trust_me_jscode.replace("com.smile.gifmaker", packageName))
        create_workingdir_file(packageName + "/just_trust_me_okhttp_hook_finder_for_android.js", just_trust_me_okhttp_hook_finder_jscode.replace("com.smile.gifmaker", packageName))
        create_workingdir_file(packageName + "/just_trust_me_for_ios.js", just_trust_me_for_ios_jscode.replace("com.smile.gifmaker", packageName))
        create_workingdir_file(packageName + "/hook_artmethod_register.js", hook_artmethod_register_jscode.replace("com.smile.gifmaker", packageName))
        create_workingdir_file(packageName + "/get_device_info.js", get_device_info_jscode.replace("com.smile.gifmaker", packageName))
        create_workingdir_file(packageName + "/trace_initproc.js", trace_initproc_jscode)
        create_workingdir_file(packageName + "/find_anit_frida_so.js", find_anit_frida_so_jscode)
        create_workingdir_file(packageName + "/hook_jni_method_trace.js", hook_jni_method_trace_jscode)
        create_workingdir_file(packageName + "/replace_dlsym_get_pthread_create.js", replace_dlsym_get_pthread_create_jscode)
        create_workingdir_file(packageName + "/find_boringssl_custom_verify_func.js", find_boringssl_custom_verify_func_jscode)
        create_workingdir_file(packageName + "/apk_shell_scanner.js", apk_shell_scanner_jscode)
        info(f"Copying APK {current_identifier_install_path}/base.apk to working directory please waiting for a few seconds")
        global current_local_apk_path
        current_local_apk_path = f"{packageName}/{current_identifier_name.replace(' ', '')}_{current_identifier_version}.apk"
        pull_file_to_local(f"{current_identifier_install_path}/base.apk", current_local_apk_path)
        info(f"Working directory create successful")
        
def init_working_dir_enverment():
    global current_local_apk_path
    current_local_apk_path = f"{current_identifier}/{current_identifier_name.replace(' ', '')}_{current_identifier_version}.apk"
    if os.path.isfile(current_local_apk_path):
        return
    if os.path.isdir(current_local_apk_path):
        os.popen(f'rm -rf {current_local_apk_path}').readlines()
    #print(f"current_identifier_install_path:{current_identifier_install_path}")
    pull_file_to_local(f"{current_identifier_install_path}/base.apk", current_local_apk_path)
    info(f"Working directory init successful")
        

def hook_js(hookCmdArg, savePath = None):
    online_session = None
    online_script = None
    packageName = current_identifier
    try:
        ganaretoionJscode = ""
        online_session, online_script = attach_rpc(use_v8=True);
        appversion = current_identifier_version
        spaceSpatrater = hookCmdArg.find(":")
        className = hookCmdArg
        toSpace = "*"
        file_method_name = "allfunc"
        if spaceSpatrater > 0:
            className = hookCmdArg[:spaceSpatrater]
            toSpace = hookCmdArg[spaceSpatrater+1:]
            if "<init>" in toSpace:
                toSpace = "_"
                file_method_name = "_init"
            else:
                toSpace = toSpace.split("(")[0]
                file_method_name = toSpace
        if not online_script.exports_sync.containsclass(className):
            warn(f"Class Not Found {className}")
            return
        jscode = online_script.exports_sync.hookjs(className, toSpace);
        ganaretoionJscode += ("\n//"+hookCmdArg+"\n")
        ganaretoionJscode += jscode
        if savePath == None:
            defaultFilename = className.replace(":", ".").replace("$", ".").replace("__", ".")+ "." + file_method_name + ".js"
            savePath = packageName+"/"+defaultFilename;
        else:
            defaultFilename = savePath
            savePath = packageName+"/"+savePath;
        if len(ganaretoionJscode):
            ganaretoionJscode = resource_hook_js_prepare_jscode + "\n" + ganaretoionJscode + "\n\n\n\n\n//---------------------may be you need--------------------\n\n" + resource_hook_js_enhance_jscode
            warpExtraInfo = f"//cracked by {current_identifier_name} {appversion}\n"
            warpExtraInfo += "//"+hookCmdArg + "\n\n"
            warpExtraInfo += ganaretoionJscode
            create_workingdir_file(savePath, jsbeautifier.beautify(warpExtraInfo))
            info("frida hook script: " + defaultFilename)
        else:
            warn("Not found any classes by pattern "+hookCmdArg+".")
    except Exception:
        warn(traceback.format_exc())  
    finally:    
        detach(online_session)
        
def print_activitys():
    online_session = None
    online_script = None
    try:
        online_session,online_script = attach_rpc();
        info(online_script.exports_sync.activitys())
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)
        
def print_services():
    online_session = None
    online_script = None
    try:
        online_session, online_script = attach_rpc();
        info(online_script.exports_sync.services())
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)

def print_object(objectId):
    online_session = None
    online_script = None
    try:
        online_session, online_script = attach_rpc();
        info(online_script.exports_sync.objectinfo(objectId))
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)
        
def object_to_explain(objectId):
    online_session = None
    online_script = None
    try:
        online_session, online_script = attach_rpc();
        info(online_script.exports_sync.objecttoexplain(objectId))
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)

def print_view(viewId):
    online_session = None
    online_script = None
    try:
        online_session, online_script = attach_rpc();
        report = online_script.exports_sync.viewinfo(viewId)
        info(report);
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)
        

def list_working_dir():
    js_files = {
        filename: None
        for filename in os.listdir(current_identifier)
        if filename.endswith(".js")
    }
    print_js_file(list(js_files.keys()))
                
                
def execute_script(script_file, is_spawn=False):
    if not os.path.isfile(f"{current_identifier}/{script_file}"):
        warn(f"{current_identifier}/{script_file} File Not found")
        return
    online_session = None
    online_script = None
    try:
        if is_spawn:
            online_session, online_script = spawn(f"{current_identifier}/{script_file}", True)
        else:
            online_session, online_script = attach(f"{current_identifier}/{script_file}", True)
        while online_session != None:
            try:
                with patch_stdout():
                    text = cmd_session.prompt("CTRL + C to stop > ", handle_sigint=True)
            except KeyboardInterrupt:
                info(f"Interrupting {script_file}")
                break
            except EOFError:
                warn("Exiting...")
                break
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)
        info(f"{script_file} exits successful")
        if is_spawn:
            restart_app(current_identifier)
            
def just_trust_me():
    execute_script("just_trust_me.js", True)
        

def un_proxy():
    run_su_command("for i in $(iptables -t nat -L OUTPUT --line-numbers | grep REDIRECT |grep 12345 | awk \"{print \$1}\" | sort -rn); do iptables -t nat -D OUTPUT $i; done")
    run_su_command("iptables -t nat -F REDSOCKS")
    run_su_command("iptables -t nat -D OUTPUT -p tcp -j REDSOCKS")
    run_su_command("iptables -t nat -X REDSOCKS")
    run_su_command("killall redsocks")
    run_su_command("pid=$(ps -ef | grep '[r]edsocks' | awk '{print $2}'); [ -n \"$pid\" ] && kill -9 $pid")
        
def set_proxy(proxy):
    pattern = r'(http|socks5)://(\d{2,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}):(\d+)$'
    m = re.search(pattern, proxy.strip())
    if not m:
        warn(f"proxy scheme error: {proxy}")
        return
    proxy_type = m.group(1)
    if proxy_type == "http":
        proxy_type = "http-relay"
    proxy_ip = m.group(2)
    proxy_port = m.group(3)
    config = (
        "base {\n"
        "    log_debug = on;\n"
        "    log_info = on;\n"
        "    daemon = on;\n"
        "    redirector = iptables;\n"
        "}\n\n"
    )
    if proxy_type == "http-relay":
        config += (
            "redsocks {\n"
            "    local_ip = 127.0.0.1;\n"
            "    local_port = 12345;\n"
            f"    ip = {proxy_ip};\n"
            f"    port = {proxy_port};\n"
            f"    type = http-relay;\n"
            "}"
        )
    else:
        config += (
            "redsocks {\n"
            "    local_ip = 127.0.0.1;\n"
            "    local_port = 12345;\n"
            f"    ip = {proxy_ip};\n"
            f"    port = {proxy_port};\n"
            f"    type = {proxy_type};\n"
            "}"
        )
    if not check_remote_file_exists("/sdcard/redsocks"):
        push_file_to_remote(f"mobile-deploy/redsocks", "/sdcard/redsocks")
        run_su_command(f"cp /sdcard/redsocks /data/local/tmp/redsocks")
        run_su_command(f"chmod 700 /data/local/tmp/redsocks")
    if not check_remote_file_exists("/sdcard/libevent-2.1.so"):
        push_file_to_remote(f"mobile-deploy/libevent-2.1.so", "/sdcard/libevent-2.1.so")
        run_su_command(f"cp /sdcard/libevent-2.1.so /data/local/tmp/libevent-2.1.so")
    if not check_remote_file_exists("/data/local/tmp/redsocks"):
        run_su_command(f"cp /sdcard/redsocks /data/local/tmp/redsocks")
        run_su_command(f"cp /sdcard/libevent-2.1.so /data/local/tmp/libevent-2.1.so")
        run_su_command(f"chmod 700 /data/local/tmp/redsocks")
    un_proxy()
    adb_device.shell(f"rm -f /data/local/tmp/redsocks.conf")
    adb_device.shell(f"echo '{config}' > /data/local/tmp/redsocks.conf")
    time.sleep(1)
    run_su_command(f"LD_LIBRARY_PATH=/data/local/tmp/ /data/local/tmp/redsocks -c /data/local/tmp/redsocks.conf")
    if proxy_type == "http-relay":
        run_su_command(f"iptables -t nat -N REDSOCKS")
        run_su_command(f"iptables -t nat -A REDSOCKS -d 0.0.0.0/8 -j RETURN")
        run_su_command(f"iptables -t nat -A REDSOCKS -d 127.0.0.0/8 -j RETURN")
        run_su_command(f"iptables -t nat -A REDSOCKS -d 192.168.1.0/24 -j RETURN")
        run_su_command(f"iptables -t nat -A REDSOCKS -p tcp -j REDIRECT --to-ports 12345")
        # run_su_command(f"iptables -t nat -L -nv")
        # run_su_command(f"iptables -t nat -A OUTPUT -p tcp  --dport 80 -j REDIRECT --to 12345")
        # run_su_command(f"iptables -t nat -A OUTPUT -p tcp  --dport 443 -j REDIRECT --to 12345")
    elif proxy_type.startswith("socks"):
        run_su_command(f"iptables -t nat -A OUTPUT -p tcp -m owner --uid-owner {current_identifier_uid} -j REDIRECT --to-ports 12345")
        info(f"proxy {proxy} OK")
    else:
        warn(f"Cannot set proxy {proxy}")
        return
    
if not os.path.exists('.cache'):
    os.makedirs('.cache')
    
def open_or_create_db():
    global current_identifier_cache_db
    if current_identifier_cache_db:
        return current_identifier_cache_db
    db_path=f'.cache/{current_identifier}_{current_identifier_version}_class_methods.db'
    conn = sqlite3.connect(db_path, check_same_thread=False)
    current_identifier_cache_db = conn
    cursor = conn.cursor()
    # 检查是否存在 app_methods 表
    cursor.execute('''
        SELECT name FROM sqlite_master 
        WHERE type='table' AND name='app_methods'
    ''')
    table_exists = cursor.fetchone()
    if not table_exists:
        # 创建表
        cursor.execute('''
            CREATE TABLE app_methods (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                app_package_name TEXT NOT NULL,
                app_version TEXT NOT NULL,
                class_package_name TEXT NOT NULL,
                class_name TEXT NOT NULL,
                method_name TEXT NOT NULL,
                readable_proto_list TEXT
            )
        ''')
        # 创建索引
        cursor.execute('CREATE INDEX idx_class_package_prefix ON app_methods(class_package_name)')
        cursor.execute('CREATE INDEX idx_class_name ON app_methods(class_name)')
        conn.commit()
    return current_identifier_cache_db

def insert_if_not_exists(cursor, class_package_name, class_name,
                         method_name, readable_proto_list):
    # 查询是否存在相同 class_package_name 和 class_name 的记录
    cursor.execute('''
        SELECT 1 FROM app_methods
        WHERE class_package_name = ? AND class_name = ?
        LIMIT 1
    ''', (class_package_name, class_name))
    exists = cursor.fetchone()
    if not exists:
        cursor.execute('''
            INSERT INTO app_methods (
                app_package_name, app_version,
                class_package_name, class_name,
                method_name, readable_proto_list
            ) VALUES (?, ?, ?, ?, ?, ?)
        ''', (
            current_identifier, current_identifier_version,
            class_package_name, class_name,
            method_name, readable_proto_list
        ))
        current_identifier_cache_db.commit()
        
def ensure_readonly_copy_fresh():
    """
    确保只读数据库副本是最新的，如果过旧或主库有更新则拷贝。
    设置 current_identifier_cache_readonly_db 为连接对象。
    """
    global current_identifier_cache_readonly_db  # 注意声明为全局变量
    base_path = f'.cache/{current_identifier}_{current_identifier_version}_class_methods.db'
    readonly_path = f'.cache/{current_identifier}_{current_identifier_version}_tmp_readonly_class_methods.db'
    # 主库不存在直接报错
    if not os.path.exists(base_path):
        raise FileNotFoundError(f"主数据库不存在: {base_path}")
    now = time.time()
    # 如果只读文件不存在，则直接拷贝
    if not os.path.exists(readonly_path):
        shutil.copy2(base_path, readonly_path)
    else:
        readonly_ctime = os.path.getctime(readonly_path)
        # 如果只读副本距现在小于5分钟，则不更新
        if now - readonly_ctime < 5 * 60:
            pass  # 不拷贝
        else:
            base_ctime = os.path.getctime(base_path)
            if base_ctime > readonly_ctime:
                shutil.copy2(base_path, readonly_path)

    # 连接（无论是否拷贝，都会使用只读副本连接）
    readonly_uri = f'file:{readonly_path}?mode=ro'
    current_identifier_cache_readonly_db = sqlite3.connect(readonly_uri, uri=True, check_same_thread=False)

        
def count_methods_by_app_version():
    ensure_readonly_copy_fresh()
    cursor = current_identifier_cache_readonly_db.cursor()
    cursor.execute('''
        SELECT COUNT(*) FROM app_methods
        WHERE app_package_name = ? AND app_version = ?
    ''', (current_identifier, current_identifier_version))
    count = cursor.fetchone()[0]
    return count

def query_class_name_by_prefix(class_name_prefix, class_name, limit=15):
    # 拷贝最新主库文件（如果需要）
    ensure_readonly_copy_fresh()
    cursor = current_identifier_cache_readonly_db.cursor()
    if class_name and not "." in class_name:
        if class_name_prefix:
            cursor.execute('''
                SELECT class_package_name, class_name, readable_proto_list FROM app_methods
                WHERE class_name = ? AND class_package_name LIKE ?
                LIMIT ?
            ''', (class_name, f'%{class_name_prefix}%', limit))
            #print("1")
            results = cursor.fetchall()
            if results:
                return results
            cursor.execute('''
                SELECT class_package_name, class_name, readable_proto_list FROM app_methods
                WHERE class_name LIKE ? AND class_package_name LIKE ?
                LIMIT ?
            ''', (f'{class_name}%', f'%{class_name_prefix}%', limit))
            #print("2")
            results = cursor.fetchall()
            if results:
                return results
        else:
            cursor.execute('''
                SELECT class_package_name, class_name, readable_proto_list FROM app_methods
                WHERE class_name = ?
                LIMIT ?
            ''', (class_name, limit))
            #print("3")
            results = cursor.fetchall()
            if results:
                return results
            cursor.execute('''
                SELECT class_package_name, class_name, readable_proto_list FROM app_methods
                WHERE class_name LIKE ?
                LIMIT ?
            ''', (f'{class_name}%', limit))
            #print("4")
            results = cursor.fetchall()
            if results:
                return results
        return []
    cursor.execute('''
        SELECT class_package_name, class_name, readable_proto_list FROM app_methods
        WHERE class_package_name LIKE ?
        LIMIT ?
    ''', (f'{class_name_prefix}%', limit))
    #print("5")
    results = cursor.fetchall()
    if results:
        return results
    cursor.execute('''
        SELECT class_package_name, class_name, readable_proto_list FROM app_methods
        WHERE class_package_name LIKE ?
        LIMIT ?
    ''', (f'%{class_name_prefix}%', limit))
    #print("6")
    return cursor.fetchall()

def get_need_to_cache_pkg_prefix():
    a = apk.APK(current_local_apk_path)
    activities = a.get_activities()
    # 取每个activity包名前两段
    prefixes = []
    for activity in activities:
        parts = activity.split('.')
        if len(parts) >= 2:
            prefix = '.'.join(parts[:2])
        else:
            prefix = activity
        prefixes.append(prefix)
    # 统计出现次数
    counter = Counter(prefixes)
    # 找出现次数最多的前两个
    most_common_two = counter.most_common(2)
    results = ["okhttp3", "retrofit2", "javax.crypto", "java.security"]
    for prefix, count in most_common_two:
        results.append(prefix)
    return results
    
def load_dexes_to_cache():
    open_or_create_db()
    def process_dex():
        need_to_cache_pkg_prefix = get_need_to_cache_pkg_prefix()
        #info(f"need_to_cache_pkg_prefix:{need_to_cache_pkg_prefix}")
        with zipfile.ZipFile(current_local_apk_path, 'r') as zip_ref:
            for file_info in zip_ref.infolist():
                if file_info.filename.endswith('.dex'):
                    with zip_ref.open(file_info.filename) as dex_file:
                        dex_data = dex_file.read()  # 读取为 bytes
                        load_classes_and_methods_to_db(dex_data, need_to_cache_pkg_prefix)
                        if count_methods_by_app_version() > 300000:
                            break
    t = threading.Thread(target=process_dex)
    t.daemon = True
    t.start()
    
def load_classes_and_methods_to_db(dex_bytes, need_to_cache_pkg_prefix):
    if not current_identifier_cache_db:
        return
    cursor = current_identifier_cache_db.cursor()
    need_to_cache_pkg = tuple(need_to_cache_pkg_prefix)
    def should_skip_class(class_package_name):
        if not class_package_name.startswith(need_to_cache_pkg):
            return True
        return False
    loaded_count = 0
    try:
        dex = dvm.DalvikVMFormat(dex_bytes)
        for cls in dex.get_classes():
            access_flags = cls.get_access_flags()
            # （0x200 = ACC_INTERFACE）（0x400 = ACC_ABSTRACT）
            if (cls.get_access_flags() & 0x200) or (cls.get_access_flags() & 0x400):
                continue
            class_name = cls.get_name().strip('L;').replace('/', '.')
            temp = class_name.rsplit(".", 1)
            class_package_name = temp[0]
            if should_skip_class(class_package_name):
                continue
            class_name = temp[1]
            readable_proto_list = ""
            for method in cls.get_methods():
                method_name = method.get_name()
                proto = method.get_descriptor()  # e.g., (Ljava/lang/String;)V
                # 转换描述符为更易读格式
                readable_proto = convert_descriptor_to_readable(proto)
                readable_proto_list += f"|{method_name}{readable_proto}"
                loaded_count += 1
            insert_if_not_exists(cursor, class_package_name, class_name, "", readable_proto_list)
    except Exception as e:
        print(traceback.format_exc())  
        print(f"[!] Error processing {dex_path}: {e}")

def convert_descriptor_to_readable(descriptor):
    def type_map(d):
        mapping = {
            'I': 'int', 'Z': 'boolean', 'B': 'byte',
            'S': 'short', 'J': 'long', 'F': 'float',
            'D': 'double', 'C': 'char', 'V': 'void',
        }
        if d.startswith('L') and d.endswith(';'):
            return d[1:-1].replace('/', '.').split('.')[-1]
        return mapping.get(d, d)
    args, ret = descriptor.split(')')
    args = args[1:]  # remove opening '('
    i = 0
    parsed = []
    while i < len(args):
        if args[i] == 'L':
            j = i
            while args[j] != ';':
                j += 1
            parsed.append(type_map(args[i:j+1]))
            i = j + 1
        elif args[i] in "ZBSCIJFD":
            parsed.append(type_map(args[i]))
            i += 1
        elif args[i] == '[':
            dim = 0
            while args[i] == '[':
                dim += 1
                i += 1
            if args[i] == 'L':
                j = i
                while args[j] != ';':
                    j += 1
                base = type_map(args[i:j+1])
                i = j + 1
            else:
                base = type_map(args[i])
                i += 1
            parsed.append(base + '[]' * dim)
        else:
            i += 1  # unknown type, skip
    return f"({', '.join(parsed)})"


class ClassNameCompleter(Completer):
    def __init__(self):
        js_files = {
            filename: None
            for filename in os.listdir(current_identifier)
            if filename.endswith(".js")
        }
        self.nested_dict = {
            'help': None,
            'h': None,
            'activitys': None,
            'a': None,
            'services': None,
            's': None,
            'object': None,
            'o': None,
            'view': None,
            'v': None,
            'generatescript': None,
            'gs': None,
            'proxy': {"socks5://": None},
            'p': {"socks5://": None},
            'unproxy': None,
            'up': None,
            'justtrustme': None,
            'trust': None,
            'ls': None,
            'attach': js_files,
            'frida': js_files,
            'spawn': js_files,
            'fridaf': js_files,
            'restart': None,
            'pid': None,
            'uid': None,
            'exit': None,
        }
        self.debug_completer = NestedCompleter.from_nested_dict(self.nested_dict)
        
    def update_js_files(self):
        js_files = {
            filename: None
            for filename in os.listdir(current_identifier)
            if filename.endswith(".js")
        }
        self.nested_dict["attach"] = js_files
        self.nested_dict["frida"] = js_files
        self.nested_dict["spawn"] = js_files
        self.nested_dict["fridaf"] = js_files
        self.debug_completer = NestedCompleter.from_nested_dict(self.nested_dict)
        
    def get_completions(self, document, complete_event):
        text = document.text_before_cursor.strip()
        #print("\nget_completions:"+text)
        generatescript_cmd_match = re.search(r"(generatescript|gs)\s+([^\s]+)", text)
        if generatescript_cmd_match:
            try:
                value = generatescript_cmd_match.group(2)
                max_items = 15
                count = 0
                full_class_name = None
                class_name_prefix = None
                class_name = None
                method_prefix = None
                if ":" in value:
                    full_class_name, method_prefix = value.split(":", 1)
                else:
                    full_class_name = value
                if "." in full_class_name:
                    class_name_prefix, class_name = full_class_name.rsplit(".", 1)
                else:
                    class_name_prefix = full_class_name
                # print("\nclass_name_prefix:"+class_name_prefix)
                results = query_class_name_by_prefix(class_name_prefix, class_name, limit=max_items)
                # print(f"{len(results)}")
                if len(results) == 0:
                    #info(f"query_class_name_by_prefix class_name_prefix:{class_name_prefix} class_name:{class_name}")
                    pass
                for row in results:
                    count += 1
                    class_package_name = row[0]
                    class_name = row[1]
                    yield Completion(f"{class_package_name}.{class_name}", start_position=-len(value))
                if count >= max_items:
                    return
                for row in results:
                    class_package_name = row[0]
                    class_name = row[1]
                    readable_proto_list = row[2]
                    readable_proto_mehtod_list = readable_proto_list.split("|")[1:]
                    for readable_proto_mehtod in readable_proto_mehtod_list:
                        count += 1
                        yield Completion(f"{class_package_name}.{class_name}:{readable_proto_mehtod}", start_position=-len(value))
                        if count > max_items:
                            return
            except Exception as e:
                traceback.print_exc()
                #yield Completion(f"[ERROR: {e}]", start_position=0)
                pass
        else:
            # 其他命令提示
            for c in self.debug_completer.get_completions(document, complete_event):
                yield c
                        
cmd_session = PromptSession()
classNameCompleter = None
    
def entry_debug_mode():    
    def handle_command(cmd):
        cmd = cmd.strip()
        if cmd.startswith("activitys") or "a" == cmd:
            print_activitys()
            return True
        elif cmd.startswith("services") or "s" == cmd:
            print_services()
            return True
        elif (cmd.startswith("object ") or cmd.startswith("o ")) and re.search(r"(object|o)\s+([^\s]+)", cmd):
            m = re.search(r"(object|o)\s+([^\s]+)", cmd)
            if m:
                print_object(m.group(2))
                return True
        elif (cmd.startswith("view ") or cmd.startswith("v ")) and re.search(r"(view|v)\s+([^\s]+)", cmd):
            m = re.search(r"(view|v)\s+([^\s]+)", cmd)
            if m:
                print_view(m.group(2))
                return True
        elif cmd == "ls":
            list_working_dir()
            classNameCompleter.update_js_files()
            return True
        elif cmd == "justtrustme" or cmd == "trust":
            just_trust_me()
            return True
        elif (cmd.startswith("proxy ") or cmd.startswith("p ")) and re.search(r"(proxy|p)\s+([^\s]+)", cmd):
            m = re.search(r"(proxy|p)\s+([^\s]+)", cmd)
            if m:
                set_proxy(m.group(2))
                return True
        elif cmd == "unproxy" or cmd == "up":
            un_proxy()
            info("un_proxy OK")
            return True
        elif (cmd.startswith("attach ") or cmd.startswith("frida ")) and re.search(r"(attach|frida)\s+([^\s]+\.js)", cmd):
            m = re.search(r"(attach|frida)\s+([^\s]+)", cmd)
            if m:
                execute_script(m.group(1), False)
                return True
        elif (cmd.startswith("spawn ") or cmd.startswith("fridaf ")) and re.search(r"(spawn|fridaf)\s+([^\s]+\.js)", cmd):
            m = re.search(r"(spawn|fridaf)\s+([^\s]+)", cmd)
            if m:
                execute_script(m.group(1), True)
                return True
        elif cmd == "restart":
            restart_app(current_identifier)
            return True
        elif cmd == "pid":
            info(current_identifier_pid)
            return True
        elif cmd == "uid":
            info(current_identifier_uid)
            return True
        elif (cmd.startswith("generatescript ") or cmd.startswith("gs ")) and re.search(r"(generatescript|gs)\s+([^\s]+)", cmd):
            m = re.search(r"(generatescript|gs)\s+([^\s]+)", cmd)
            if m:
                info("Generating frida script, please wait for a few seconds")
                hook_js(m.group(2), None)
                classNameCompleter.update_js_files()
            else:
                warn(f"Can not parse class and method: {cmd}")
            return True
        return False
    help_msg = [
        ("h, help", "show this help message"),
        ("a, activitys", "show the activity stack"),
        ("s, services", "show the service stack"),
        ("o, object [object_id]", "show object info by object_id"),
        ("v, view [view_id]", "show view info by view_id of view"),
        ("gs, generatescript [class_name:method_name]", "specify the class name and method name to generate a frida hook java script file. For example: generatescript okhttp3.Request$Builder:addHeader"),
        ("p, proxy [socks5_proxy_server]", "set up a socks5 proxy for this app. For example: proxy socks5://192.168.0.100:9998"),
        ("up, unproxy", "remove socks5 proxy for this app"),
        ("trust, justtrustme", "quickly spawn just_trust_me.js script to kill all ssl pinning"),
        ("ls", "list all the frida scripts of the current app"),
        ("attach, frida [script_file_name]", "quickly execute a frida script, similar to executing the command \"frida -U com.example.app -l xxx.js\". For example: attach url.js"),
        ("spawn, fridaf [script_file_name]", "quickly spawn a frida script, similar to executing the command \"frida -U -f -n com.example.app -l xxx.js\". For example: spawn just_trust_me.js"),
        ("restart", "restart this app"),
        ("pid", "get pid of this app main process"),
        ("uid", "get pid of this app"),
        ("exit", "return to the previous level"),
    ]
    def print_help_msg():
        GREEN = "\033[32m"
        YELLOW = "\033[33m"
        RESET = "\033[0m"
        # 获取终端宽度，默认宽度 80
        term_width = shutil.get_terminal_size((80, 20)).columns
        max_cmd_len = max(len(cmd) for cmd, _ in help_msg) + 2
        for cmd, desc in help_msg:
            cmd_part = f"{GREEN}{cmd.ljust(max_cmd_len)}{RESET}"
            desc_lines = textwrap.wrap(desc, width=term_width - max_cmd_len)
            if desc_lines:
                print(cmd_part + f"{YELLOW}{desc_lines[0]}{RESET}")
                for line in desc_lines[1:]:
                    print(" " * max_cmd_len + f"{YELLOW}{line}{RESET}")
            else:
                print(cmd_part)
    hooker_cmd = ""
    list_working_dir()
    classNameCompleter = ClassNameCompleter()
    while True:
        try:
            hooker_cmd = cmd_session.prompt(f'{current_identifier_name} > ', completer=classNameCompleter)
            hooker_cmd = hooker_cmd.strip()
            if hooker_cmd == 'exit' or hooker_cmd == 'quit':
                break
            if hooker_cmd == 'h' or hooker_cmd == 'help':
                print_help_msg()
                continue
            is_handled = handle_command(hooker_cmd)
            if not is_handled and hooker_cmd:
                warn(f"hooker command not found: {hooker_cmd}")
                continue
            elif not hooker_cmd:
                continue
        except (EOFError, KeyboardInterrupt):
            break        



def pad_display(text, width):
    """按显示宽度对齐文本"""
    text = str(text)
    padding = width - wcswidth(text)
    return text + ' ' * max(padding, 0)

def list_third_party_apps():
    identifier_list = []
    apps = frida_device.enumerate_applications()
    print(f"{pad_display('PID', 6)}\t{pad_display('APP', 20)}\t{pad_display('IDENTIFIER', 35)}\tEXIST_REVERSE_DIRECTORY")
    for app in sorted(apps, key=lambda x: x.pid or 0):
        if app.pid is not None:  # 只列出运行中的
            reverse_directory_exist = os.path.isdir(app.identifier)
            print(f"{pad_display(app.pid, 6)}\t{pad_display(app.name, 20)}\t{pad_display(app.identifier, 35)}\t{'✅' if reverse_directory_exist else '❌'}")
            identifier_list.append(app.identifier)
    return identifier_list
        
while True:
    try:
        info("hooker Let's enjoy reverse engineering together")
        info("-----------------------------------------------------------------------------------------------")
        identifier_list = list_third_party_apps()
        identifier_list.append("exit")
        identifier_list.append("quit")
        print("Please enter the identifier that needs to be reversed")
        identifier = cmd_session.prompt('hooker(Identifier): ', completer=WordCompleter(identifier_list, ignore_case=False, match_middle=True, WORD=True))  
        if identifier == 'exit' or identifier == 'exit()' or identifier == 'quit':
            info('ByeBye!')
            sys.exit(2);
            break
        if identifier not in identifier_list:
            warn("The application does not exist. Please enter an existing application")
            continue
        current_identifier = None
        current_identifier_name = None
        current_identifier_version = None
        current_identifier_pid = None
        current_identifier_install_path = None
        current_identifier_uid = None
        current_local_apk_path = None
        current_identifier_cache_db = None
        current_identifier_cache_readonly_db = None
        current_identifier = identifier
        current_identifier_pid, current_identifier_name, current_identifier_version, current_identifier_install_path, current_identifier_uid  = ensure_app_in_foreground(current_identifier)
        if not os.path.isdir(identifier):
            create_working_dir_enverment()
        else:
            init_working_dir_enverment()
        load_dexes_to_cache()
        check_dependency_files()
        entry_debug_mode()
    except (EOFError, KeyboardInterrupt):
        sys.exit(2);
    

