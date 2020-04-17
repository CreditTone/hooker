'''
Created on 2020年3月23日

@author: stephen
'''
import frida, sys
import os
import __init__
import getopt
import uuid
import traceback 


def checkRadarDex():
    files = os.popen('adb shell ls /data/local/tmp/').readlines()
    for dexFile in files:
        if "radar.dex" in dexFile:
            return
    pushCmd = 'adb push radar.dex /data/local/tmp/'
    print(pushCmd)
    os.popen(pushCmd)
       

def on_message(message, data):
    print("message",message)


def attach(packageName):
    #print("to attach",packageName)
    online_session = None
    online_script = None
    try:
        rdev = frida.get_usb_device()
        #online_session = rdev.spawn([packageName])
        online_session = rdev.attach(packageName)
        if online_session == None:
            print("attaching fail to " + packageName)
        online_script = online_session.create_script(__init__.classes_hooker_js)
        online_script.on('message', on_message)
        online_script.load()
    except Exception:
        print(traceback.format_exc())   
    return online_session,online_script
    

def detach(online_session):
    if online_session != None:
        online_session.detach()

def existsClass(packageName,className):
    online_session = None
    online_script = None
    ret = False
    try:
        online_session,online_script = attach(packageName);
        ret = online_script.exports.containsclass(className);
    except Exception:
        print(traceback.format_exc())  
    finally:    
        detach(online_session)
    return ret

def discover(packageName, scanTargetName):
    checkRadarDex()
    online_session = None
    online_script = None
    try:
        online_session,online_script = attach(packageName);
        online_script.exports.discover(scanTargetName);
    except Exception:
        print(traceback.format_exc())  
    finally:    
        detach(online_session)
        

def writingFile(filename, text):
    file = None
    try:
        file = open(filename, mode='w+')
        file.write(text)
    except Exception:
        print(traceback.format_exc())  
    finally:
        if file != None:
            file.close()

def createHookingEnverment(packageName):
    if not os.path.exists(packageName):
        os.makedirs(packageName)
        writingFile(packageName+"/hooking", "#!/bin/bash\n" + "frida -U -l $1 " + packageName)
        os.popen('chmod 777 ' + packageName +'/hooking').readlines()
        writingFile(packageName + "/java_net_url.js", __init__.hooking_java_net_url_js)
        writingFile(packageName + "/okhttp3.js", __init__.hooking_okhttp_3_js)
        writingFile(packageName + "/kill", "frida-kill -U "+packageName)
        os.popen('chmod 777 ' + packageName +'/kill').readlines()
               

def hookJs(packageName, hookCmdArg, savePath = None):
    checkRadarDex()
    online_session = None
    online_script = None
    try:
        online_session,online_script = attach(packageName);
        print("execute hookjs",hookCmdArg)
        jscode = online_script.exports.hookjs(hookCmdArg);
        if savePath == None:
            savePath = packageName+"/"+str(uuid.uuid1())[0:6]+".js";
        else:
            savePath = packageName+"/"+savePath;
        createHookingEnverment(packageName)
        writingFile(savePath, "//"+hookCmdArg + "\n"+__init__.print_stacks_js + __init__.check_radar_dex_js + jscode)
        print("Hooking js code have generated. Path is " + savePath+".")
    except Exception:
        print(traceback.format_exc())  
    finally:    
        detach(online_session)
        
def hookOnClick(packageName):
    checkRadarDex()
    online_session = None
    online_script = None
    try:
        online_session,online_script = attach(packageName);
        jscode = online_script.exports.hookonclick();
        savePath = packageName+"/onclick.js";
        createHookingEnverment(packageName)
        writingFile(savePath, __init__.print_stacks_js + jscode)
        print("Hooking js code have generated. Path is " + savePath+".")
    except Exception:
        print(traceback.format_exc())  
    finally:    
        detach(online_session)
        

def checkHookLine(hooklinea):
    a = hooklinea.split(":");
    if a[len(a) - 1] == "":
        return False
    return len(a) > 1


if __name__ == '__main__':
    #print(__init__.classes_hooker_js)
    try:    
        opts, args = getopt.getopt(sys.argv[1:], "hp:s:l:e:j:c:g:o:",["help", "package=", "scan=", "exist=", "hookjs=","click=","genarate="])
    except getopt.GetoptError:    
        sys.exit(2);
    packageName = None
    e = None
    scanTargetName = None
    JhookLine = None
    hookClick = False
    genarateEnv = False
    out = None
    for op, value in opts:    
        if op in ("-p", "--package"):        
            packageName = value    
        elif op in ("-s", "--scan"):      
            scanTargetName = value
        elif op in ("-e", "--exist"):       
            e = value
        elif op in ("-j", "--hookjs"):     
            JhookLine = value
        elif op in ("-k"):     
            KhookLine = value
        elif op in ("-c", "--click"):     
            hookClick = True
        elif op in ("-g"):     
            genarateEnv = True;
        elif op in ("-o", "--out"):
            out = value;
    if packageName == None:
        print("packageName is none")
        sys.exit(2);
     
    if genarateEnv:
        createHookingEnverment(packageName)
    elif e != None:
        print(existsClass(packageName, e))
    elif scanTargetName != None:
        discover(packageName, scanTargetName)
    elif JhookLine != None and checkHookLine(JhookLine):
        hookJs(packageName, JhookLine, out)
    elif hookClick:
        hookOnClick(packageName)
    else:
        print("错误指令")
        sys.exit(2);
    