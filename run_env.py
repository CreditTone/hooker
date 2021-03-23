'''
Created on 2020年4月20日

@author: stephen
'''

import io
import os
import re

def readJs(filename):
    return io.open('./js/' + filename,'r',encoding= 'utf8').read()

def readFile(filename):
    return io.open(filename,'r',encoding= 'utf8').read()

base_jscode = readJs("base.js")

loadxinit_dexfile_template_jscode = """

var loadedXRadar = false;

function loadXinitDexfile(dexfile) {
    loadDexfile('/data/user/0/{PACKAGENAME}/xinit/'+dexfile);
};

function loadXRadarDexfile() {
    loadedXRadar = true;
    loadDexfile('/data/user/0/{PACKAGENAME}/radar.dex');
};

function fastTojson(javaObject) {
    var JSONClz = Java.use("gz.com.alibaba.fastjson.JSON");
    return JSONClz.toJSONString(javaObject);
};

function getPrettyString(javaObject) {
    var XPretty = Java.use("gz.util.XPretty");
    return XPretty.getPrettyString(javaObject);
};

function xPretty(javaObject) {
    var str = getPrettyString(javaObject);
    console.log(str);
};

function getField(javaObject, fieldName) {
    var X = Java.use("gz.util.X");
    return X.getField(javaObject, fieldName);
};

function storeObjectAndLog(javaObject) {
    var className = getClassName(javaObject);
    var ObjectsStore = Java.use("gz.radar.objects.ObjectsStore");
    var objectId = ObjectsStore.storeObject(javaObject);
    console.log(className + " ObjectsStoreId: " +objectId);
};

"""

radar_jscode = readJs("radar.js")

jsfmt_jscode = readJs("jsfmt.js")

string_hooker_jscode = readJs("string_hooker.js")

rpc_jscode = base_jscode + radar_jscode + jsfmt_jscode + readJs("rpc.js")

url_jscode = readJs("url.js")

webview_jscode = readJs("web_view.js")

android_jscode = readJs("android_ui.js")

edit_text_jscode = readJs("edit_text.js")

text_view_jscode = readJs("text_view.js")

cipher_jscode = readJs("cipher.js")

ipc_jscode = readJs("ipc.js")

click_jscode = readJs("click.js")

view_pager_jscode = readJs("view_pager.js")

activity_jscode = readJs("activity.js")

object_store_jscode = readJs("object_store.js")

def getPythonLaucher():
    pythonLaucher = os.environ.get("__PYVENV_LAUNCHER__")
    if not pythonLaucher:
        pythonLaucher = os.environ.get("_", "/usr/bin/python3")
    return pythonLaucher
        

xinitPyScript = "#! " + getPythonLaucher() + "\n\n" + readFile("xinitdeploy.py")
spiderPyScript = readFile("spider.py")

def getRemoteDriver():
    text = readFile(".hooker_driver")
    if not text:
        return None
    searchResult = re.search('\d+\.\d+\.\d+\.\d+:\d+', text)
    if searchResult:
        return searchResult.group()
    return None

def init(packageName):
    if packageName == None:
        return

