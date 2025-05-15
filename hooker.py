#!/usr/bin/env python3

'''
Created on 2020年3月23日

@author: stephen
'''
import frida, sys
import os
import io
import re
import getopt
import traceback
import run_env
import base64
import time
import colorful
import platform
import threading
import adbutils
import hashlib
from run_env import xinitPyScript

from prompt_toolkit import PromptSession
from prompt_toolkit.completion import WordCompleter
from prompt_toolkit.completion import NestedCompleter
from wcwidth import wcswidth
from _warnings import warn

warn = colorful.red
info = colorful.yellow
current_identifier = None
current_identifier_name = None
current_identifier_pid = None
frida_device = None
adb_device = None

def _init():
    global frida_device
    global adb_device
    adb_device = adbutils.adb.device()
    if frida_device:
        return
    remoteDriver = run_env.getRemoteDriver() #ip:port
    if remoteDriver:
        frida_device = frida.get_device_manager().add_remote_device(remoteDriver)
    else:
        frida_device = frida.get_usb_device(1000)

_init();

def ensure_app_in_foreground(package_name):
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
        return proc_map[package_name][0], proc_map[package_name][1]
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
                return app.pid, app.name
    return None

def copyApk2Local(apkPath, localPath):
    adb_device.sync.pull(apkPath, localPath)
    info(f"Working directory create successful")

def pushFile2Local(filepath, localPath):
    adb_device.sync.push(filepath, localPath)
    info(f"push {filepath} to {localPath} successful")

def get_remote_file_md5(package_name, file_path):
    # 检查文件是否存在
    check_cmd = f"ls {file_path}"
    result = adb_device.shell(check_cmd).strip()
    if "No such file" in result or "Permission denied" in result:
        #warn("No such file")
        return ""
    # 检查文件是否存在并获取长度
    check_cmd = f"md5sum {file_path}"
    result = adb_device.shell(check_cmd).strip()
    if "No such file" in result or "Permission denied" in result or not result:
        #warn("No such file2")
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
    
def checkRadarDex(packageName):
    radarDexPath = '/data/user/0/'+packageName+'/radar.dex';
    local_md5 = get_local_file_md5("radar.dex")
    remote_md5 = get_remote_file_md5(packageName, radarDexPath)
    #print(f"local_md5:{local_md5} remote_md5:{remote_md5}")
    if local_md5 != remote_md5:
        info(f"update radar.dex into {radarDexPath}")
        pushFile2Local("radar.dex", radarDexPath)

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

def createHookingEnverment(packageName):
    global frida_device
    if not os.path.exists(packageName):
        os.makedirs(packageName)
        info(f"Creating working directory: {packageName}")
        apkPathRaw = adb_device.shell(f"pm path {packageName}")
        match = re.search(r'package:(.*\.apk)', apkPathRaw)
        apkPath = None
        if match:
            apkPath = match.group(1).strip()
            thread = threading.Thread(target=copyApk2Local, args=(apkPath, f"./{packageName}/base.apk",))
            thread.start()
        info(f"Generating frida shortcut command...")
        os.makedirs(packageName+"/xinit")
        shellPrefix = "#!/bin/bash\nHOOKER_DRIVER=$(cat ../.hooker_driver)\n"
        logHooking = shellPrefix + "echo \"hooking $1\" > log\ndate | tee -ai log\n" + "frida $HOOKER_DRIVER -l $1 -N " + packageName + " | tee -ai log"
        attach_shell = shellPrefix + "frida $HOOKER_DRIVER -l $1 -N " + packageName
        spawn_shell = f"{shellPrefix}\nfrida $HOOKER_DRIVER -f -N {packageName} -l $1"
        xinitPyScript = run_env.xinitPyScript + "xinitDeploy('"+packageName+"')"
        disableSslPinningPyScript = run_env.disableSslPinningPyScript.replace("{appPackageName}", packageName)
        createFile(packageName+"/hooking", logHooking)
        createFile(packageName+"/attach", attach_shell)
        createFile(packageName+"/spawn", spawn_shell)
        createFile(packageName+"/xinitdeploy", xinitPyScript)
        createFile(packageName+"/disable_sslpinning", disableSslPinningPyScript)
        createFile(packageName + "/kill", shellPrefix + "frida-kill $HOOKER_DRIVER "+packageName)
        createFile(packageName + "/pull_so.py", pull_so_python_code.replace("com.smile.gifmaker", packageName))
        createFile(packageName+"/objection", shellPrefix + "objection -d -g "+packageName+" explore")
        os.popen('chmod 777 ' + packageName +'/hooking').readlines()
        os.popen('chmod 777 ' + packageName +'/attach').readlines()
        os.popen('chmod 777 ' + packageName +'/xinitdeploy').readlines()
        os.popen('chmod 777 ' + packageName +'/disable_sslpinning').readlines()
        os.popen('chmod 777 ' + packageName +'/kill').readlines()
        os.popen('chmod 777 ' + packageName +'/objection').readlines()
        os.popen('chmod 777 ' + packageName +'/spawn').readlines()
        os.popen('cp *.so ' + packageName +'/xinit/').readlines()
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
        if apkPath:
            info(f"Copying APK {apkPath} to working directory please waiting for a few seconds")
        else:
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
        'show': {
            'activity': None,
            'service': None,
            'object': None,
        },
        'hook': None,
        'exit': None,
    })
    
    def handle_command(cmd):
        if cmd.startswith("show ") and " activity" in cmd:
            print_activitys()
            return True
        elif cmd.startswith("show ") and " service" in cmd:
            print_services()
            return True
        elif cmd.startswith("show ") and " object" in cmd:
            m = re.search(r"show\s+object\s+([\w]+)", cmd)
            if m:
                object_to_explain(m.group(1))
            return True
        elif cmd.startswith("hook "):
            m = re.search(r"hook\s+([^\s]+)", cmd)
            if m:
                info("Generating frida script, please wait for a few seconds")
                hook_js(m.group(1), None)
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
    print(f"{pad_display('PID', 6)}\t{pad_display('APP', 10)}\t{pad_display('IDENTIFIER', 35)}\tEXIST_REVERSE_DIRECTORY")
    for app in sorted(apps, key=lambda x: x.pid or 0):
        if app.pid is not None:  # 只列出运行中的
            reverse_directory_exist = os.path.isdir(app.identifier)
            print(f"{pad_display(app.pid, 6)}\t{pad_display(app.name, 10)}\t{pad_display(app.identifier, 35)}\t{'✅' if reverse_directory_exist else '❌'}")
            identifier_list.append(app.identifier)
    return identifier_list
        
while True:
    try:
        identifier_list = list_third_party_apps()
        print("Please enter the identifier that needs to be reversed")
        identifier = cmd_session.prompt('hooker(Identifier): ', completer=WordCompleter(identifier_list, ignore_case=False, match_middle=True, WORD=True))  
        if identifier == 'exit' or identifier == 'quit':
            info('Bye!')
            sys.exit(2);
            break
        if identifier not in identifier_list:
            warn("The application does not exist. Please enter an existing application")
            continue
        current_identifier = identifier
        if not os.path.isdir(identifier):
            run_env.init(current_identifier)
            createHookingEnverment(current_identifier)
        checkRadarDex(current_identifier)
        current_identifier_pid, current_identifier_name = ensure_app_in_foreground(current_identifier)
        entry_debug_mode()
    except (EOFError, KeyboardInterrupt):
        sys.exit(2);
    

