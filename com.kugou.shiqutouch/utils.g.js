//com.kugou.common.utils.g:?
function loadDexfile(dexfile) {
    Java.perform(function() {
          Java.openClassFile(dexfile).load();
          console.log("load " + dexfile);
    });
};

function checkLoadDex(className, dexfile) {
    Java.perform(function() {
        if (!classExists(className)) {
            Java.openClassFile(dexfile).load();
            console.log("load " + dexfile);
        }
    });
};

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


function loadXinitDexfile(dexfile) {
    loadDexfile('/data/user/0/com.kugou.shiqutouch/xinit/'+dexfile);
};

function getClassName(obj) {
    if (obj.getClass) {
        return obj.getClass().getName();
    }
    var javaObject = Java.use("java.lang.Object");
    return Java.cast(obj, javaObject).getClass().getName();
}

Java.perform(function() {
    var com_kugou_common_utils_g_clz = Java.use('com.kugou.common.utils.g');
    var com_kugou_common_utils_g_clz_method_a_htof = com_kugou_common_utils_g_clz.a.overload();
    com_kugou_common_utils_g_clz_method_a_htof.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_common_utils_g_clz_method_a_htof.call(this);
        methodInBeat(invokeId, startTime, 'private void com.kugou.common.utils.g.a()', executor);
    };
    var com_kugou_common_utils_g_clz_method_a_ft3n = com_kugou_common_utils_g_clz.a.overload('java.lang.Runnable');
    com_kugou_common_utils_g_clz_method_a_ft3n.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_kugou_common_utils_g_clz_method_a_ft3n.call(com_kugou_common_utils_g_clz, v0);
        methodInBeat(invokeId, startTime, 'private static java.lang.String com.kugou.common.utils.g.a(java.lang.Runnable)', executor);
        return ret;
    };
    var com_kugou_common_utils_g_clz_method_run_xd5q = com_kugou_common_utils_g_clz.run.overload();
    com_kugou_common_utils_g_clz_method_run_xd5q.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_common_utils_g_clz_method_run_xd5q.call(this);
        log(getClassName(this.c.value));
        methodInBeat(invokeId, startTime, 'public void com.kugou.common.utils.g.run()', executor);
    };
    var com_kugou_common_utils_g_clz_method_a_0dpv = com_kugou_common_utils_g_clz.a.overload('java.lang.String');
    com_kugou_common_utils_g_clz_method_a_0dpv.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_kugou_common_utils_g_clz_method_a_0dpv.call(com_kugou_common_utils_g_clz, v0);
        methodInBeat(invokeId, startTime, 'private static void com.kugou.common.utils.g.a(java.lang.String)', executor);
    };
});