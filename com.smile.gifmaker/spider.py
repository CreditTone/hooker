import frida
import os
import io
import traceback
import time

def withColor(string, fg, bg=49):
    print("\33[0m\33[%d;%dm%s\33[0m" % (fg, bg, string))
    
Red = 1
Green = 2
Yellow = 3
Blue = 4
Magenta = 5
Cyan = 6
White = 7
 
def red(string):
    return withColor(string, Red+30) # Red
def yellow(string):
    return withColor(string, Yellow+30) # Yellow

warn = red
info = yellow

jscode = io.open('spider.js', 'r', encoding= 'utf8').read()

jscode += """
rpc.exports = {
    log: function(str) {
        console.log(str);
    },
};
"""

def on_message(message, data):
    pass

def attach(packageName, hookerDriverFridaServer, runningTime):
    hasException = False
    online_session = None
    online_script = None
    try:
        rdev = frida.get_device_manager().add_remote_device(hookerDriverFridaServer)
        online_session = rdev.attach(packageName)
        if online_session == None:
            warn("attaching fail to " + packageName)
        online_script = online_session.create_script(jscode)
        online_script.on('message', on_message)
        online_script.load()
        
        for i in range(1, int(runningTime/3)):
            online_script.exports.log("spider has running been " + str(i * 3) + " seconds.");
            time.sleep(3)
    except Exception:
        hasException = True
        warn(traceback.format_exc())
    finally:
        if online_session != None and hasException == False:
            detach(online_session)
    return online_session,online_script
    

def detach(online_session):
    if online_session != None:
        online_session.detach()
 

appPackageName = "com.smile.gifmaker"
mainActivity = "com.smile.gifshow.HomeActivity"
#手机ip
mobileIP = "10.0.2.11"
#重启周期 秒
runningTime = 3600 * 12

while True:
    attach(appPackageName, mobileIP+":27043", runningTime)
    print("restarting spider.", appPackageName, mainActivity, mobileIP, runningTime)
    os.popen("adb connect "+mobileIP).readlines()
    time.sleep(3)
    os.popen("adb -s "+mobileIP+":5555 shell am force-stop " + appPackageName).readlines()
    time.sleep(3)
    os.popen("adb -s "+mobileIP+":5555 shell am start " + appPackageName + "/" + mainActivity).readlines()
    time.sleep(10)