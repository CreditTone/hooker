'''
Created on 2020年3月23日

@author: stephen
'''
import frida, sys
import os
import io
import getopt
import uuid
import traceback
import run_env
import base64
import time
import colorful
import platform
from run_env import xinitPyScript


warn = colorful.red
info = colorful.yellow

def readRadarDexfile():
    f = open("radar.dex","rb")
    data = f.read()
    f.close()
    return data

def checkRadarDex(packageName, online_script):
    radarClass = "gz.radar.ClassRadar"
    if online_script.exports.containsclass(radarClass):
        return
    data = readRadarDexfile()
    radarDexPath = '/data/user/0/'+packageName+'/radar.dex';
    if not online_script.exports.checkfile(radarDexPath, len(data)):
        radarDexBase64 = base64.b64encode(data).decode()
        #info("updating radar.dex......"+str(len(radarDexBase64)))
        online_script.exports.write(radarDexPath, radarDexBase64)
        time.sleep(1)
    online_script.exports.loaddex('gz.radar.ClassRadar', radarDexPath)
    if not online_script.exports.containsclass(radarClass):
        warn("injecting radar.dex failure.")

def on_message(message, data):
    pass

def attach(packageName):
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
        online_session = rdev.attach(packageName)
        if online_session == None:
            warn("attaching fail to " + packageName)
        online_script = online_session.create_script(run_env.rpc_jscode)
        online_script.on('message', on_message)
        online_script.load()
        checkRadarDex(packageName, online_script)
        createHookingEnverment(packageName, online_script.exports.mainactivity())
    except Exception:
        warn(traceback.format_exc())   
    return online_session,online_script
    

def detach(online_session):
    if online_session != None:
        online_session.detach()
 
def existsClass(packageName,className):
    online_session = None
    online_script = None
    try:
        online_session,online_script = attach(packageName);
        info(online_script.exports.containsclass(className))
    except Exception:
        warn(traceback.format_exc())  
    finally:    
        detach(online_session)

def findclasses(packageName, classRegex):
    online_session = None
    online_script = None
    try:
        online_session,online_script = attach(packageName);
        info(online_script.exports.findclasses(classRegex));
    except Exception:
        warn(traceback.format_exc())  
    finally:    
        detach(online_session)

def findclasses2(packageName, className):
    online_session = None
    online_script = None
    try:
        online_session,online_script = attach(packageName);
        info(online_script.exports.findclasses2(className));
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
            
def onlyCheckHookingEnverment(packageName):
    if os.path.exists(packageName):
        return
    online_session = None
    try:
        online_session,_ = attach(packageName);
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)

def createHookingEnverment(packageName, mainActivity):
    if not os.path.exists(packageName):
        os.makedirs(packageName)
        os.makedirs(packageName+"/xinit")
        shellPrefix = "#!/bin/bash\nHOOKER_DRIVER=$(cat ../.hooker_driver)\n"
        logHooking = shellPrefix + "echo \"hooking $1\" > log\ndate | tee -ai log\n" + "frida $HOOKER_DRIVER -l $1 " + packageName + " | tee -ai log"
        attachjs = shellPrefix + "frida $HOOKER_DRIVER -l $1 " + packageName
        xinitPyScript = run_env.xinitPyScript + "xinitDeploy('"+packageName+"')"
        spiderPyScript = run_env.spiderPyScript.replace("{appPackageName}", packageName).replace("{mainActivity}", mainActivity) 
        createFile(packageName+"/hooking", logHooking)
        createFile(packageName+"/attach", attachjs)
        createFile(packageName+"/xinitdeploy", xinitPyScript)
        createFile(packageName+"/spider.py", spiderPyScript)
        createFile(packageName + "/kill", shellPrefix + "frida-kill $HOOKER_DRIVER "+packageName)
        createFile(packageName+"/objection", shellPrefix + "objection -d -g "+packageName+" explore")
        os.popen('chmod 777 ' + packageName +'/hooking').readlines()
        os.popen('chmod 777 ' + packageName +'/attach').readlines()
        os.popen('chmod 777 ' + packageName +'/xinitdeploy').readlines()
        os.popen('chmod 777 ' + packageName +'/kill').readlines()
        os.popen('chmod 777 ' + packageName +'/objection').readlines()
        createFile(packageName + "/url.js", run_env.url_jscode)
        createFile(packageName + "/edit_text.js", run_env.edit_text_jscode)
        createFile(packageName + "/text_view.js", run_env.text_view_jscode)
        createFile(packageName + "/click.js", run_env.click_jscode)
        createFile(packageName + "/android_ui.js", run_env.android_ui_jscode.replace("com.smile.gifmaker", packageName))
        createFile(packageName + "/activity_events.js", run_env.activity_events_jscode.replace("com.smile.gifmaker", packageName))
        createFile(packageName + "/object_store.js", run_env.object_store_jscode.replace("com.smile.gifmaker", packageName))

def hookJs(packageName, hookCmdArg, savePath = None):
    online_session = None
    online_script = None
    try:
        ganaretoionJscode = ""
        online_session,online_script = attach(packageName);
        appversion = online_script.exports.appversion();
        classes = hookCmdArg.split(",")
        for classN in classes:
            spaceSpatrater = classN.find(":")
            className = classN
            toSpace = "*"
            if spaceSpatrater > 0:
                className = classN[:spaceSpatrater]
                toSpace = classN[spaceSpatrater+1:]
            jscode = online_script.exports.hookjs(className, toSpace);
            ganaretoionJscode += ("\n//"+classN+"\n")
            ganaretoionJscode += jscode
        
        if savePath == None:
            savePath = packageName+"/"+str(uuid.uuid1())[0:6]+".js";
        else:
            savePath = packageName+"/"+savePath;
        if len(ganaretoionJscode):
            ganaretoionJscode = run_env.loadxinit_dexfile_template_jscode.replace("{PACKAGENAME}", packageName) + "\n" + ganaretoionJscode
            warpExtraInfo = "//crack by " + packageName + " " + appversion + "\n"
            warpExtraInfo += "//"+hookCmdArg + "\n"
            warpExtraInfo += run_env.base_jscode
            warpExtraInfo += ganaretoionJscode
            createFile(savePath, warpExtraInfo)
            info("Hooking js code have generated. Path is " + savePath+".")
        else:
            warn("Not found any classes by pattern "+hookCmdArg+".")
    except Exception:
        warn(traceback.format_exc())  
    finally:    
        detach(online_session)
        
def hookStr(packageName, keyword):
    online_session = None
    online_script = None
    try:
        online_session,online_script = attach(packageName);
        jscode = io.open('./js/string_hooker.js','r',encoding= 'utf8').read()
        jscode = jscode.replace("惊雷", keyword)
        savePath = packageName+"/str_"+keyword+".js";
        createFile(savePath, jscode)
        info("Hooking js code have generated. Path is " + savePath+".")
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)
        
        
def hookParma(packageName, keyword):
    online_session = None
    online_script = None
    try:
        online_session,online_script = attach(packageName);
        jscode = io.open('./js/param_hook.js','r',encoding= 'utf8').read()
        jscode = jscode.replace("NStokensig", keyword)
        savePath = packageName+"/param_"+keyword+".js";
        createFile(savePath, jscode)
        info("Hooking js code have generated. Path is " + savePath+".")
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)
        

def printActivitys(packageName):
    online_session = None
    online_script = None
    try:
        online_session,online_script = attach(packageName);
        info(online_script.exports.activitys())
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)
        
def printServices(packageName):
    online_session = None
    online_script = None
    try:
        online_session,online_script = attach(packageName);
        info(online_script.exports.services())
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)

def printObject(packageName, objectId):
    online_session = None
    online_script = None
    try:
        online_session,online_script = attach(packageName);
        info(online_script.exports.objectinfo(objectId))
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)
        
def object2Explain(packageName, objectId):
    online_session = None
    online_script = None
    try:
        online_session,online_script = attach(packageName);
        info(online_script.exports.objecttoexplain(objectId))
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)

def printView(packageName, viewId):
    online_session = None
    online_script = None
    try:
        online_session,online_script = attach(packageName);
        report = online_script.exports.viewinfo(viewId)
        info(report);
    except Exception:
        print(traceback.format_exc())  
    finally:
        detach(online_session)
        


def printModuleName(packageName, moduleName):
    online_session = None
    online_script = None
    try:
        online_session,online_script = attach(packageName);
        info(online_script.exports.so(moduleName))
    except Exception:
        print(traceback.format_exc())
    finally:
        detach(online_session)

if __name__ == '__main__':
    try:    
        opts, args = getopt.getopt(sys.argv[1:], "hp:x:a:b:c:d:v:s:t:l:e:j:k:l:g:o:m:",[])
    except getopt.GetoptError:    
        sys.exit(2);
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
    run_env.init(packageName);
    
    #初始化应用目录
    if genarateEnv and packageName:
        onlyCheckHookingEnverment(packageName)
    
    if e != None:
        existsClass(packageName, e)
    elif findclassesClassRegex:
        findclasses(packageName, findclassesClassRegex)
    elif findclasses2ClassName:
        findclasses2(packageName, findclasses2ClassName)
    elif JhookLine:
        hookJs(packageName, JhookLine, out)
    elif KhookLine != None:
        hookStr(packageName, KhookLine)
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
    