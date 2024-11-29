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

jscode = io.open('wxspider.js', 'r', encoding= 'utf8').read()

jscode += """
rpc.exports = {
    log: function(str) {
        console.log(str);
    },
};
"""

def runCommand(cmd):
    print(cmd);
    lines = os.popen(cmd).readlines();
    for line in lines:
        print(line);

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
        for i in range(1, runningTime):
            if i % 2 == 0:
                online_script.exports.log(mobileIP + " spider has running been " + str(i) + " seconds.");
            time.sleep(1)
    except Exception:
        hasException = True
        warn(traceback.format_exc())
    finally:
        if online_session != None and hasException == False:
            online_session.detach()
    return online_session,online_script
    
def restartApp(packageName, mobileIP, adb):
    try:
        runCommand(adb + " connect "+mobileIP);
        time.sleep(3)
        runCommand(adb + " -s "+mobileIP+" shell am force-stop " + appPackageName);
        time.sleep(5)
        runCommand(adb + " -s "+mobileIP+" shell am start " + appPackageName + "/" + mainActivity);
        time.sleep(20)
        runCommand(adb + " disconnect "+mobileIP);
    except Exception:
        warn(traceback.format_exc())
    
appPackageName = "com.tencent.mm"
mainActivity = "com.tencent.mm.ui.LauncherUI"
#手机ip
mobileIP = "192.168.0.102"
#重启周期 秒
runningTime = 3600

adb="adb"

while True:
    restartApp(appPackageName, mobileIP, adb)
    print("inject spider.js");
    print(jscode);
    attach(appPackageName, mobileIP + ":27042", runningTime)
    print("restarting spider.", appPackageName, mainActivity, mobileIP, runningTime)
    
    