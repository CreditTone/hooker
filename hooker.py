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
from run_env import xinitPyScript


warn = colorful.red
info = colorful.yellow
device = adbutils.adb.device()


def copyApk2Local(apkPath, localPath):
    device.sync.pull(apkPath, localPath)
    print(f"Working directory create successful")

def pushFile2Local(filepath, localPath):
    device.sync.push(filepath, localPath)
    print(f"push {filepath} to {localPath} successful")

def get_remote_file_length(package_name, file_path):
    # 检查文件是否存在
    check_cmd = f"ls {file_path}"
    result = device.shell(check_cmd).strip()
    if "No such file" in result or "Permission denied" in result:
        return None
    # 检查文件是否存在并获取长度
    check_cmd = f"ls -l {file_path}"
    result = device.shell(check_cmd).strip()
    if "No such file" in result or "Permission denied" in result or not result:
        return None
    try:
        # ls -l 输出格式通常为: -rw-rw---- 1 u0_a123 u0_a123 2592 2024-05-11 14:00 radar.dex
        parts = result.split()
        if len(parts) >= 5 and parts[4].isdigit():
            return int(parts[4])
        else:
            return 0
    except Exception:
        return 0

def checkRadarDex(packageName):
    radarDexPath = '/data/user/0/'+packageName+'/radar.dex';
    if os.path.getsize("radar.dex") != get_remote_file_length(packageName, radarDexPath):
        print("更新radar.dex")
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

def getPidMap():
    pidMap = {}
    lines = os.popen("frida-ps -U").readlines();
    for line in lines:
        result = re.search("(\d+)\s+([a-z\d\.]+)($|:)", line.strip())
        if not result:
            continue
        pidMap[result.group(1)] = result.group(2)
    return pidMap

def get_min_pid_by_name(session, process_name):
    # 获取所有进程
    processes = session.enumerate_processes()
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

#target可以是pid或者packageName    
def attach(target):
    packageName = target
    if is_number(target):#pid
        packageName = getPidMap()[target]
    online_session = None
    online_script = None
    rdev = None
    remoteDriver = run_env.getRemoteDriver() #ip:port
    try:
        if remoteDriver:
            rdev = frida.get_device_manager().add_remote_device(remoteDriver)
        elif platform.system().find("Windows") != -1:
            warn("推荐使用linux或mac操作系统获得更好的兼容性.")
            rdev = frida.get_remote_device()
        else:
            rdev = frida.get_usb_device(1000)
        
        #print(f"attach {target}")
        if is_number(target):
            pid = int(target)
            online_session = frida.core.Session(rdev._impl.attach(pid))
        else:
            min_pid = get_min_pid_by_name(rdev, target)
            online_session = rdev.attach(int(min_pid))
        if online_session == None:
            warn("attaching fail to " + target)
        online_script = online_session.create_script(run_env.rpc_jscode)
        online_script.on('message', on_message)
        online_script.load()
        online_script.exports_sync.loadradardex()
    except Exception:
        warn(traceback.format_exc())   
    return online_session,online_script,packageName
    

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
        online_session,online_script,_ = attach(target);
        info(online_script.exports_sync.findclasses(classRegex));
    except Exception:
        warn(traceback.format_exc())  
    finally:    
        detach(online_session)

def findclasses2(target, className):
    online_session = None
    online_script = None
    try:
        online_session,online_script,_ = attach(target);
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
    if not os.path.exists(packageName):
        os.makedirs(packageName)
        print(f"Creating working directory: {packageName}")
        apkPathRaw = device.shell(f"pm path {packageName}")
        match = re.search(r'package:(.*\.apk)', apkPathRaw)
        apkPath = None
        if match:
            apkPath = match.group(1).strip()
            thread = threading.Thread(target=copyApk2Local, args=(apkPath, f"./{packageName}/base.apk",))
            thread.start()
        print(f"Generating frida shortcut command...")
        os.makedirs(packageName+"/xinit")
        shellPrefix = "#!/bin/bash\nHOOKER_DRIVER=$(cat ../.hooker_driver)\n"
        logHooking = shellPrefix + "echo \"hooking $1\" > log\ndate | tee -ai log\n" + "frida $HOOKER_DRIVER -l $1 " + packageName + " | tee -ai log"
        attach_shell = shellPrefix + "frida $HOOKER_DRIVER -l $1 " + packageName
        spawn_shell = f"{shellPrefix}\nfrida $HOOKER_DRIVER -f {packageName} -l $1"
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
        print(f"Generating built-in frida script...")
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
            print(f"Copying APK {apkPath} to working directory please waiting for a few seconds")
        else:
            print(f"Working directory create successful")

def hookJs(target, hookCmdArg, savePath = None):
    online_session = None
    online_script = None
    packageName = None
    try:
        ganaretoionJscode = ""
        online_session,online_script,packageName = attach(target);
        appversion = online_script.exports_sync.appversion();
        classes = hookCmdArg.split(",")
        for classN in classes:
            spaceSpatrater = classN.find(":")
            className = classN
            toSpace = "*"
            if spaceSpatrater > 0:
                className = classN[:spaceSpatrater]
                toSpace = classN[spaceSpatrater+1:]
            jscode = online_script.exports_sync.hookjs(className, toSpace);
            ganaretoionJscode += ("\n//"+classN+"\n")
            ganaretoionJscode += jscode
        
        if savePath == None:
            defaultFilename = hookCmdArg.replace(".", "_").replace(":", "_").replace("$", "_").replace("__", "_") + ".js"
            savePath = packageName+"/"+defaultFilename;
        else:
            savePath = packageName+"/"+savePath;
        if len(ganaretoionJscode):
            ganaretoionJscode = run_env.loadxinit_dexfile_template_jscode.replace("{PACKAGENAME}", packageName) + "\n" + ganaretoionJscode
            warpExtraInfo = "//cracked by " + packageName + " " + appversion + "\n"
            warpExtraInfo += "//"+hookCmdArg + "\n"
            warpExtraInfo += run_env.base_jscode
            warpExtraInfo += ganaretoionJscode
            createFile(savePath, warpExtraInfo)
            info("frida hook script:" + savePath)
        else:
            warn("Not found any classes by pattern "+hookCmdArg+".")
    except Exception:
        warn(traceback.format_exc())  
    finally:    
        detach(online_session)
        
def hookStr(target, keyword):
    online_session = None
    packageName = None
    try:
        online_session,_,packageName = attach(target);
        jscode = io.open('./js/string_hooker.js','r',encoding= 'utf8').read()
        jscode = jscode.replace("惊雷", keyword)
        savePath = packageName+"/str_"+keyword+".js";
        createFile(savePath, jscode)
        info("frida hook script:" + savePath)
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)
        
        
def hookParma(target, keyword):
    online_session = None
    packageName = None
    try:
        online_session,_,packageName = attach(target);
        jscode = io.open('./js/param_hook.js','r',encoding= 'utf8').read()
        jscode = jscode.replace("NStokensig", keyword)
        savePath = packageName+"/param_"+keyword+".js";
        createFile(savePath, jscode)
        info("Hooking js code have generated. Path is " + savePath+".")
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)
        

def printActivitys(target):
    online_session = None
    online_script = None
    try:
        online_session,online_script,_ = attach(target);
        info(online_script.exports_sync.activitys())
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)
        
def printServices(target):
    online_session = None
    online_script = None
    try:
        online_session,online_script,_ = attach(target);
        info(online_script.exports_sync.services())
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)

def printObject(target, objectId):
    online_session = None
    online_script = None
    try:
        online_session,online_script,_ = attach(target);
        info(online_script.exports_sync.objectinfo(objectId))
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)
        
def object2Explain(target, objectId):
    online_session = None
    online_script = None
    try:
        online_session,online_script,_ = attach(target);
        info(online_script.exports_sync.objecttoexplain(objectId))
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)

def printView(target, viewId):
    online_session = None
    online_script = None
    try:
        online_session,online_script,_ = attach(target);
        report = online_script.exports_sync.viewinfo(viewId)
        info(report);
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)
        


def printModuleName(target, moduleName):
    online_session = None
    online_script = None
    try:
        online_session,online_script,_ = attach(target);
        info(online_script.exports_sync.so(moduleName))
    except Exception:
        print(traceback.format_exc())
    finally:
        detach(online_session)

if __name__ == '__main__':
    try:    
        opts, args = getopt.getopt(sys.argv[1:], "hp:x:a:b:c:d:v:s:t:l:e:j:k:l:g:o:m:",[])
    except getopt.GetoptError:    
        sys.exit(2);
    #这个packageName可以是进程名也可以是进程号
    packageName = None
    e = None
    findclassesClassRegex = None
    findclasses2ClassName = None
    JhookLine = None
    KhookLine = None
    LhookLine = None
    genarateEnv = False
    out = None
    activity = False
    service = False
    objectId = None
    object2ExplainObjectId = None
    viewId = None
    moduleName = False
    #print(opts)
    for op, value in opts:    
        if op in ("-p", "--package"):
            packageName = value  
        elif op in ("-s", "--scan"):      
            findclassesClassRegex = value
        elif op in ("-t"):      
            findclasses2ClassName = value
        elif op in ("-e", "--exist"):       
            e = value
        elif op in ("-j", "--hookjs"):     
            JhookLine = value
        elif op in ("-k", "--hookstr"):     
            KhookLine = value
        elif op in ("-l"):     
            LhookLine = value
        elif op in ("-g"):     
            genarateEnv = True;
        elif op in ("-o", "--out"):
            out = value;
        elif op in ("-a"):
            activity = True;
        elif op in ("-b"):
            service = True;
        elif op in ("-c"):
            objectId = value;
        elif op in ("-d"):
            object2ExplainObjectId = value;
        elif op in ("-v"):
            viewId = value;
        elif op in ("-m"):
            moduleName = value;
    if packageName == None:
        warn("packageName is none")
        sys.exit(2);
    
    #初始化应用目录
    if genarateEnv and packageName:
        run_env.init(packageName)
        checkRadarDex(packageName)
        createHookingEnverment(packageName)
        sys.exit(2);

    if e != None:
        existsClass(packageName, e)
    elif findclassesClassRegex:
        findclasses(packageName, findclassesClassRegex)
    elif findclasses2ClassName:
        findclasses2(packageName, findclasses2ClassName)
    elif JhookLine:
        hookJs(packageName, JhookLine, out)
    elif LhookLine != None:
        hookParma(packageName, LhookLine)
    elif activity:
        printActivitys(packageName)
    elif service:
        printServices(packageName)
    elif objectId:
        printObject(packageName, objectId)
    elif object2ExplainObjectId:
        object2Explain(packageName, object2ExplainObjectId)
    elif viewId:
        printView(packageName, viewId)
    elif moduleName:
        printModuleName(packageName, moduleName)
    elif not genarateEnv:
        warn(opts)
        sys.exit(2);
    
