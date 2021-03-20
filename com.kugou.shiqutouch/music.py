import frida, sys
import os
import io
import getopt
import uuid
import traceback
import base64
import time

jscode = io.open('spider.js','r',encoding= 'utf8').read()

def on_message(message, data):
    pass

def attach(packageName):
    online_session = None
    online_script = None
    try:
        rdev = frida.get_usb_device()
        #online_session = rdev.spawn([packageName])
        online_session = rdev.attach(packageName)
        if online_session == None:
            print("attaching fail to " + packageName)
        online_script = online_session.create_script(jscode)
        online_script.on('message', on_message)
        online_script.load()
        while True:
            online_script.exports.log(time.localtime());
            time.sleep(3)
    except Exception:
        print(traceback.format_exc())
    finally:
        if online_session != None:
            print("进程崩溃")
            online_session.detach()
    return online_session,online_script

while True:
    attach("com.kugou.shiqutouch")
    print("重新启动进程")
    files = os.popen('adb shell /data/fff &').readlines()
    time.sleep(10)
    
    

    