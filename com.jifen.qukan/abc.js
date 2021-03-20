//com.jifen.qkbase.web.webbridge.H5LocaleBridge:askAsynData
function classExists(className) {
    var exists = false;
    try {
        var clz = Java.use(className);
        exists = true;
    } catch(err) {
        //console.log(err);
    }
    return exists;
};

function checkLoadDex(className, dexfile) {
    Java.perform(function() {
        if (!classExists(className)) {
            Java.openClassFile(dexfile).load();
            console.log("load " + dexfile);
        }
    });
};

//str1是否包含str2，str2可用正则表示
function contains(str1, str2) {
    var reg = RegExp(eval("/"+str2+"/"));
    if(str1 && str1.match && str1.match(reg)){
        return true;
    }else{
        return false;
    }
};

//创建ArrayList对象用这个方法就好了
function newArrayList() {
    var ArrayListClz = Java.use('java.util.ArrayList');
    return ArrayListClz.$new();
}

//创建HashSet对象用这个方法就好了
function newHashSet() {
    var HashSetClz = Java.use('java.util.HashSet');
    return HashSetClz.$new();
}

//创建HashMap对象用这个方法就好了
function newHashMap() {
    var HashMapClz = Java.use('java.util.HashMap');
    return HashMapClz.$new();
}

function methodInBeat(invokeId, timestamp, methodName, executor) {
	var startTime = timestamp;
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var threadClz = Java.use("java.lang.Thread");
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    console.log("------------start:" + invokeId + ",objectHash:"+executor+",thread:" + threadClz.currentThread().getId() + ",timestamp:" + startTime+"---------------");
    console.log(methodName);
    console.log(stackInfo.substring(20));
    console.log("------------end:" + invokeId + ",usedtime:" + (new Date().getTime() - startTime) +"---------------\n");
};

function log(str) {
    console.log(str);
};

function getBaseContext() {
    var currentApplication = Java.use('android.app.ActivityThread').currentApplication();
    var context = currentApplication.getApplicationContext();
    return context; //Java.scheduleOnMainThread(fn):
};

function sleep(time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while(new Date().getTime() < startTime) {}
};

Java.perform(function() {
    var com_jifen_qkbase_web_webbridge_H5LocaleBridge_clz = Java.use('com.jifen.qkbase.web.webbridge.H5LocaleBridge');
    var com_jifen_qkbase_web_webbridge_H5LocaleBridge_clz_method_askAsynData_nbj8 = com_jifen_qkbase_web_webbridge_H5LocaleBridge_clz.askAsynData.overload('java.lang.String', 'java.lang.String', 'java.lang.String');
    com_jifen_qkbase_web_webbridge_H5LocaleBridge_clz_method_askAsynData_nbj8.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qkbase_web_webbridge_H5LocaleBridge_clz_method_askAsynData_nbj8.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.jifen.qkbase.web.webbridge.H5LocaleBridge.askAsynData(java.lang.String,java.lang.String,java.lang.String)', executor);
        return ret;
    };
    var com_jifen_qkbase_web_webbridge_H5LocaleBridge_clz_method_askAsynData_05iy = com_jifen_qkbase_web_webbridge_H5LocaleBridge_clz.askAsynData.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String');
    com_jifen_qkbase_web_webbridge_H5LocaleBridge_clz_method_askAsynData_05iy.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qkbase_web_webbridge_H5LocaleBridge_clz_method_askAsynData_05iy.call(this, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qkbase.web.webbridge.H5LocaleBridge.askAsynData(java.lang.String,java.lang.String,java.lang.String,java.lang.String)', executor);
    };
});