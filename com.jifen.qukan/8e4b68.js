//com.jifen.framework.core.utils.NameValueUtils:?
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
    var com_jifen_framework_core_utils_NameValueUtils_clz = Java.use('com.jifen.framework.core.utils.NameValueUtils');
    var com_jifen_framework_core_utils_NameValueUtils_clz_method_append_7gvt = com_jifen_framework_core_utils_NameValueUtils_clz.append.overload('java.lang.String', 'java.lang.String');
    com_jifen_framework_core_utils_NameValueUtils_clz_method_append_7gvt.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_framework_core_utils_NameValueUtils_clz_method_append_7gvt.call(this, v0, v1);
        log(v0);
        log(v1);
        methodInBeat(invokeId, startTime, 'public com.jifen.framework.core.utils.NameValueUtils com.jifen.framework.core.utils.NameValueUtils.append(java.lang.String,java.lang.String)', executor);
        return ret;
    };
    var com_jifen_framework_core_utils_NameValueUtils_clz_method_append_wn0h = com_jifen_framework_core_utils_NameValueUtils_clz.append.overload('java.lang.String', 'float');
    com_jifen_framework_core_utils_NameValueUtils_clz_method_append_wn0h.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_framework_core_utils_NameValueUtils_clz_method_append_wn0h.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public com.jifen.framework.core.utils.NameValueUtils com.jifen.framework.core.utils.NameValueUtils.append(java.lang.String,float)', executor);
        return ret;
    };
    var com_jifen_framework_core_utils_NameValueUtils_clz_method_append_ngeu = com_jifen_framework_core_utils_NameValueUtils_clz.append.overload('java.lang.String', 'double');
    com_jifen_framework_core_utils_NameValueUtils_clz_method_append_ngeu.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_framework_core_utils_NameValueUtils_clz_method_append_ngeu.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public com.jifen.framework.core.utils.NameValueUtils com.jifen.framework.core.utils.NameValueUtils.append(java.lang.String,double)', executor);
        return ret;
    };
    var com_jifen_framework_core_utils_NameValueUtils_clz_method_append_jzl6 = com_jifen_framework_core_utils_NameValueUtils_clz.append.overload('java.lang.String', 'int');
    com_jifen_framework_core_utils_NameValueUtils_clz_method_append_jzl6.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_framework_core_utils_NameValueUtils_clz_method_append_jzl6.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public com.jifen.framework.core.utils.NameValueUtils com.jifen.framework.core.utils.NameValueUtils.append(java.lang.String,int)', executor);
        return ret;
    };
    var com_jifen_framework_core_utils_NameValueUtils_clz_method_append_pqmk = com_jifen_framework_core_utils_NameValueUtils_clz.append.overload('java.lang.String', 'long');
    com_jifen_framework_core_utils_NameValueUtils_clz_method_append_pqmk.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_framework_core_utils_NameValueUtils_clz_method_append_pqmk.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public com.jifen.framework.core.utils.NameValueUtils com.jifen.framework.core.utils.NameValueUtils.append(java.lang.String,long)', executor);
        return ret;
    };
    var com_jifen_framework_core_utils_NameValueUtils_clz_method_build_0ymb = com_jifen_framework_core_utils_NameValueUtils_clz.build.overload();
    com_jifen_framework_core_utils_NameValueUtils_clz_method_build_0ymb.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_framework_core_utils_NameValueUtils_clz_method_build_0ymb.call(this);
        methodInBeat(invokeId, startTime, 'public java.util.List com.jifen.framework.core.utils.NameValueUtils.build()', executor);
        return ret;
    };
    var com_jifen_framework_core_utils_NameValueUtils_clz_method_init_gkss = com_jifen_framework_core_utils_NameValueUtils_clz.init.overload();
    com_jifen_framework_core_utils_NameValueUtils_clz_method_init_gkss.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_framework_core_utils_NameValueUtils_clz_method_init_gkss.call(com_jifen_framework_core_utils_NameValueUtils_clz);
        methodInBeat(invokeId, startTime, 'public static com.jifen.framework.core.utils.NameValueUtils com.jifen.framework.core.utils.NameValueUtils.init()', executor);
        return ret;
    };
});