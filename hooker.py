#!/usr/bin/env python3

'''
Created on 2020年3月23日

@author: stephen
'''
from _warnings import warn

default_frida_server_arm = "frida-server-16.7.19-android-arm"
default_frida_server_arm64 = "frida-server-16.7.19-android-arm64"

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


import frida, sys
import os
import io
import re
import getopt
import traceback
import run_env
import base64
import time
import platform
import threading
import adbutils
import hashlib
from run_env import xinitPyScript

from prompt_toolkit import PromptSession
from prompt_toolkit.completion import WordCompleter
from prompt_toolkit.completion import NestedCompleter
from wcwidth import wcswidth

warn = red
info = yellow

adb_device = None

def _init_adb_device():
    global adb_device
    adb_device = adbutils.adb.device()
_init_adb_device()

def run_su_command(cmd, not_read=False):
    print("run_su_command:", cmd)
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

def check_file_exists(path):
    result = adb_device.shell(f"test -f {path} && echo exists || echo missing")
    return result.strip() == "exists"

def check_dir_exists(path):
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
    
def pull_file_to_local(remote_file, local_path):
    adb_device.sync.pull(remote_file, local_path)
    #info(f"Working directory create successful")
    info(f"pull {remote_file} to {local_path} successful")

def push_file_to_remote(local_path, remote_path):
    # info(f"push {local_path} to {remote_path}")
    adb_device.sync.push(local_path, remote_path)
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
    if not check_dir_exists("/data/mobile-deploy/"):
        run_su_command("mkdir /data/mobile-deploy/")
    if not check_file_exists(remote_frida_server_file):
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
        
current_identifier = None
current_identifier_name = None
current_identifier_version = None
current_identifier_pid = None
current_identifier_install_path = None
frida_device = None

def _init_frida_device():
    global frida_device
    if frida_device:
        return
    remoteDriver = run_env.getRemoteDriver() #ip:port
    if remoteDriver:
        frida_device = frida.get_device_manager().add_remote_device(remoteDriver)
    else:
        frida_device = frida.get_usb_device(1000)

_init_frida_device()

def ensure_app_in_foreground(package_name):
    appinfo = adb_device.package_info(package_name)
    appinstall_path = appinfo["path"].rsplit("/", 1)[0]
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
        return proc_map[package_name][0], proc_map[package_name][1], appinfo["version_name"], appinstall_path
    else:
        info(f"🚀 App {package_name} is not running, starting it now...")
        #adb_device.shell(f"monkey -p {package_name} -c android.intent.category.LAUNCHER 1")
        shell_result = adb_device.shell(f"dumpsys package {package_name} | grep -A 1 MAIN | grep {package_name}").strip()
        m = re.search(r"\s+([^\s]+)\s+filter", shell_result)
        if m:
            main_activity = m.group(1)
            print(f"am start -n {main_activity}")
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
                return app.pid, app.name, appinfo["version_name"], appinstall_path
    return None

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
    
def check_dependency_files():
    compara_and_update_file("mobile-deploy/radar.dex", "/data/local/tmp/radar.dex")
    compara_and_update_file("mobile-deploy/libext64.so", f"/data/data/{current_identifier}/files/libext64.so")
    compara_and_update_file("mobile-deploy/libext.so", f"/data/data/{current_identifier}/files/libext.so")
             
def compara_and_update_file(local_file, remote_file):
    local_md5 = get_local_file_md5(local_file)
    filename = remote_file.split("/")[-1]
    sdcard_remote_md5 = get_remote_file_md5(f"/sdcard/{filename}")
    #先把radar.dex拷贝到sdcard，后期更新radar.dex直接从sdcard拷过去
    if local_md5 != sdcard_remote_md5:
        push_file_to_remote(local_file, "/sdcard/")
    remote_md5 = get_remote_file_md5(remote_file)
    #print(f"local_md5:{local_md5} remote_md5:{remote_md5}")
    if local_md5 != remote_md5:
        info(f"update {filename} into {remote_file}")
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

def attach():
    global frida_device
    online_session = None
    online_script = None
    online_session = frida_device.attach(current_identifier_pid)
    if online_session == None:
        warn("attaching fail to " + target)
    online_script = online_session.create_script(run_env.rpc_jscode)
    online_script.on('message', on_message)
    online_script.load()
    online_script.exports_sync.loadradardex()
    return online_session, online_script
    

def detach(online_session):
    if online_session != None:
        online_session.detach()
 
def existsClass(target,className):
    online_session = None
    online_script = None
    try:
        online_session,online_script,_ = attach(target);
        info(online_script.exports_sync.containsclass(className))
    except Exception:
        warn(traceback.format_exc())  
    finally:    
        detach(online_session)

def findclasses(target, classRegex):
    online_session = None
    online_script = None
    try:
        online_session, online_script,_ = attach(target);
        info(online_script.exports_sync.findclasses(classRegex));
    except Exception:
        warn(traceback.format_exc())  
    finally:    
        detach(online_session)

def findclasses2(target, className):
    online_session = None
    online_script = None
    try:
        online_session, online_script,_ = attach(target);
        info(online_script.exports_sync.findclasses2(className));
    except Exception:
        warn(traceback.format_exc())  
    finally:    
        detach(online_session)        

def createFile(filename, text):
    file = None
    try:
        file = open(filename, mode='w+')
        file.write(text)
    except Exception:
        warn(traceback.format_exc())  
    finally:
        if file != None:
            file.close()
            
def onlyCheckHookingEnverment(target):
    online_session = None
    try:
        online_session,_,_ = attach(target);
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)
        
pull_so_python_code = """
#!/usr/bin/env python3

import adbutils
import argparse
import os

# 命令行参数解析
parser = argparse.ArgumentParser(description="从设备中提取指定 .so 文件")
parser.add_argument("so_name", help="要提取的 .so 文件名（如 libnative-lib.so）")
parser.add_argument("output_name", nargs='?', help="输出保存的文件名（可选）")

args = parser.parse_args()
so_name = args.so_name
output_name = args.output_name if args.output_name else so_name

# 连接设备
adb = adbutils.AdbClient(host="127.0.0.1", port=5037)
device = adb.device()

# 应用包名
package_name = "com.smile.gifmaker"

# 获取 APK 安装目录
cmd = f"pm path {package_name}"
result = device.shell(cmd).strip()
if not result.startswith("package:"):
    raise RuntimeError(f"未找到包 {package_name}，pm path 返回：{result}")

apk_path = result.replace("package:", "")
base_dir = apk_path.rsplit('/', 1)[0]  # e.g., /data/app/com.example.app-abc123==

# 构造 lib 目录路径
lib_root = f"{base_dir}/lib/"
abi_dirs = device.shell(f"ls {lib_root}").strip().splitlines()

# 遍历所有 ABI 目录，查找 so 文件
found = False
for abi in abi_dirs:
    full_lib_dir = f"{lib_root}{abi}/"
    file_list = device.shell(f"ls -1 {full_lib_dir}").strip().splitlines()
    file_list
    
    if so_name in file_list:
        remote_path = f"{full_lib_dir}{so_name}"
        local_path = os.path.abspath(output_name)
        print(f"正在从设备中拉取: {remote_path} 到本地: {local_path}")
        device.sync.pull(remote_path, local_path)
        print("拉取成功")
        found = True
        break

if not found:
    print(f"未找到 {so_name}，请确认它是否存在于任何 ABI 子目录中")
"""

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
        xinitPyScript = run_env.xinitPyScript + "xinitDeploy('"+packageName+"')"
        createFile(packageName+"/hooking", logHooking)
        createFile(packageName+"/attach", attach_shell)
        createFile(packageName+"/spawn", spawn_shell)
        createFile(packageName+"/xinitdeploy", xinitPyScript)
        createFile(packageName + "/kill", shellPrefix + "frida-kill $HOOKER_DRIVER "+packageName)
        createFile(packageName + "/pull_so", pull_so_python_code.replace("com.smile.gifmaker", packageName))
        createFile(packageName+"/objection", shellPrefix + "objection -d -g "+packageName+" explore")
        os.popen('chmod 777 ' + packageName +'/hooking').readlines()
        os.popen('chmod 777 ' + packageName +'/attach').readlines()
        os.popen('chmod 777 ' + packageName +'/xinitdeploy').readlines()
        os.popen('chmod 777 ' + packageName +'/kill').readlines()
        os.popen('chmod 777 ' + packageName +'/objection').readlines()
        os.popen('chmod 777 ' + packageName +'/spawn').readlines()
        os.popen('chmod 777 ' + packageName +'/pull_so').readlines()
        info(f"Generating built-in frida script...")
        createFile(packageName + "/empty.js", "")
        createFile(packageName + "/ssl_log.js", run_env.ssl_log_jscode)
        createFile(packageName + "/url.js", run_env.url_jscode)
        createFile(packageName + "/edit_text.js", run_env.edit_text_jscode)
        createFile(packageName + "/text_view.js", run_env.text_view_jscode)
        createFile(packageName + "/click.js", run_env.click_jscode)
        createFile(packageName + "/hook_register_natives.js", run_env.hook_RN_jscode)
        createFile(packageName + "/keystore_dump.js", run_env.keystore_dump_jscode)
        createFile(packageName + "/dump_dex.js", run_env.dump_dex_jscode)
        createFile(packageName + "/android_ui.js", run_env.android_ui_jscode.replace("com.smile.gifmaker", packageName))
        createFile(packageName + "/activity_events.js", run_env.activity_events_jscode.replace("com.smile.gifmaker", packageName))
        createFile(packageName + "/object_store.js", run_env.object_store_jscode.replace("com.smile.gifmaker", packageName))
        createFile(packageName + "/just_trust_me.js", run_env.just_trust_me_jscode.replace("com.smile.gifmaker", packageName))
        createFile(packageName + "/just_trust_me_okhttp_hook_finder_for_android.js", run_env.just_trust_me_okhttp_hook_finder_jscode.replace("com.smile.gifmaker", packageName))
        createFile(packageName + "/just_trust_me_for_ios.js", run_env.just_trust_me_for_ios_jscode.replace("com.smile.gifmaker", packageName))
        createFile(packageName + "/hook_artmethod_register.js", run_env.hook_artmethod_register_jscode.replace("com.smile.gifmaker", packageName))
        createFile(packageName + "/get_device_info.js", run_env.get_device_info_jscode.replace("com.smile.gifmaker", packageName))
        createFile(packageName + "/trace_initproc.js", run_env.trace_initproc_jscode)
        createFile(packageName + "/find_anit_frida_so.js", run_env.find_anit_frida_so_jscode)
        createFile(packageName + "/hook_jni_method_trace.js", run_env.hook_jni_method_trace_jscode)
        createFile(packageName + "/replace_dlsym_get_pthread_create.js", run_env.replace_dlsym_get_pthread_create_jscode)
        createFile(packageName + "/find_boringssl_custom_verify_func.js", run_env.find_boringssl_custom_verify_func_jscode)
        createFile(packageName + "/apk_shell_scanner.js", run_env.apk_shell_scanner_jscode)
        #info(f"Copying APK {current_identifier_install_path}/base.apk to working directory please waiting for a few seconds")
        pull_file_to_local(f"{current_identifier_install_path}/base.apk", f"./{packageName}/{current_identifier_name}_{current_identifier_version}.apk")
        info(f"Working directory create successful")

def hook_js(hookCmdArg, savePath = None):
    online_session = None
    online_script = None
    packageName = current_identifier
    try:
        ganaretoionJscode = ""
        online_session, online_script = attach();
        appversion = online_script.exports_sync.appversion();
        spaceSpatrater = hookCmdArg.find(":")
        className = hookCmdArg
        toSpace = "*"
        if spaceSpatrater > 0:
            className = hookCmdArg[:spaceSpatrater]
            toSpace = hookCmdArg[spaceSpatrater+1:]
        if not online_script.exports_sync.containsclass(className):
            warn(f"Class Not Found {className}")
            return
        jscode = online_script.exports_sync.hookjs(className, toSpace);
        ganaretoionJscode += ("\n//"+hookCmdArg+"\n")
        ganaretoionJscode += jscode
        if savePath == None:
            defaultFilename = hookCmdArg.replace(".", "_").replace(":", "_").replace("$", "_").replace("__", "_") + ".js"
            savePath = packageName+"/"+defaultFilename;
        else:
            savePath = packageName+"/"+savePath;
        if len(ganaretoionJscode):
            ganaretoionJscode = run_env.loadxinit_dexfile_template_jscode.replace("{PACKAGENAME}", packageName) + "\n" + ganaretoionJscode
            warpExtraInfo = f"//cracked by {current_identifier_name} {appversion}\n"
            warpExtraInfo += "//"+hookCmdArg + "\n"
            warpExtraInfo += run_env.base_jscode
            warpExtraInfo += ganaretoionJscode
            createFile(savePath, warpExtraInfo)
            info("frida hook script: " + savePath)
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
        online_session,online_script = attach();
        info(online_script.exports_sync.activitys())
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)
        
def print_services():
    online_session = None
    online_script = None
    try:
        online_session, online_script = attach();
        info(online_script.exports_sync.services())
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)

def print_object(objectId):
    online_session = None
    online_script = None
    try:
        online_session, online_script = attach();
        info(online_script.exports_sync.objectinfo(objectId))
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)
        
def object_to_explain(objectId):
    online_session = None
    online_script = None
    try:
        online_session, online_script = attach();
        info(online_script.exports_sync.objecttoexplain(objectId))
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)

def print_view(viewId):
    online_session = None
    online_script = None
    try:
        online_session, online_script = attach();
        report = online_script.exports_sync.viewinfo(viewId)
        info(report);
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)

cmd_session = PromptSession()

def entry_debug_mode():    
    completer = NestedCompleter.from_nested_dict({
        'activitys': None,
        'a': None,
        'services': None,
        'b': None,
        'object': None,
        'c': None,
        'view': None,
        'v': None,
        'hook': None,
        'j': None,
        'scanshell': None,
        'proxy_http': None,
        'proxy_socks5': None,
        'exit': None,
    })
    
    def handle_command(cmd):
        cmd = cmd.strip()
        if cmd.startswith("activitys") or "a" == cmd:
            print_activitys()
            return True
        elif cmd.startswith("services") or "b" == cmd:
            print_services()
            return True
        elif (cmd.startswith("object ") or cmd.startswith("c ")) and re.search(r"(object|c)\s+([\w]+)", cmd):
            m = re.search(r"(object|c)\s+([\w]+)", cmd)
            if m:
                object_to_explain(m.group(2))
            return True
        elif (cmd.startswith("hook ") or cmd.startswith("j ")) and re.search(r"(hook|j)\s+([\w]+)", cmd):
            m = re.search(r"(hook|j)\s+([\w]+)", cmd)
            if m:
                info("Generating frida script, please wait for a few seconds")
                hook_js(m.group(2), None)
            else:
                warn(f"Can not parse class and method: {cmd}")
            return True
        return False
    help_text = (
        "help >\n"
        "show activity \n"
        "\tobtains the information of the activity stack\n"
        "show service\n"
        "\tobtains the servic stack information\n"
        "show object \n"
        "\tviews the internal information of the object according to objectId\n"
        "hook {className}:{method}\n"
        "\tGenerate frida hook script for example: hook okhttp3.Request$Builder:addHeader"
    )
    print(help_text)
    hooker_cmd = ""
    while True:
        try:
            hooker_cmd = cmd_session.prompt('hooker > ', completer=completer)
            if hooker_cmd == 'exit' or hooker_cmd == 'quit':
                break
            is_handled = handle_command(hooker_cmd)
            if not is_handled and hooker_cmd:
                warn(f"hooker command not found: {hooker_cmd}")
                print(help_text)
                continue
            elif not hooker_cmd.strip():
                continue
            print(help_text)
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
        print("Please enter the identifier that needs to be reversed")
        identifier = cmd_session.prompt('hooker(Identifier): ', completer=WordCompleter(identifier_list, ignore_case=False, match_middle=True, WORD=True))  
        if identifier == 'exit' or identifier == 'exit()' or identifier == 'quit':
            info('ByeBye!')
            sys.exit(2);
            break
        if identifier not in identifier_list:
            warn("The application does not exist. Please enter an existing application")
            continue
        # global current_identifier_pid
        # global current_identifier
        # global current_identifier_name
        # global current_identifier_version
        current_identifier = identifier
        current_identifier_pid, current_identifier_name, current_identifier_version, current_identifier_install_path  = ensure_app_in_foreground(current_identifier)
        if not os.path.isdir(identifier):
            run_env.init(current_identifier)
            create_working_dir_enverment()
        check_dependency_files()
        entry_debug_mode()
    except (EOFError, KeyboardInterrupt):
        sys.exit(2);
    

