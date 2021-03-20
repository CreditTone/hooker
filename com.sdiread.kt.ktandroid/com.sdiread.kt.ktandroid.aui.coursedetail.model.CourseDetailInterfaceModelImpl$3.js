//com.sdiread.kt.ktandroid.aui.coursedetail.model.CourseDetailInterfaceModelImpl$3:?
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

function getClassName(obj) {
    if (obj.getClass) {
        return obj.getClass().getName();
    }
    var javaObject = Java.use("java.lang.Object");
    return Java.cast(obj, javaObject).getClass().getName();
}

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
    var currentThread = threadClz.currentThread();
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    console.log("------------startFlag:" + invokeId + ",objectHash:"+executor+",thread(id:" + currentThread.getId() +",name:" + currentThread.getName() + "),timestamp:" + startTime+"---------------");
    console.log(methodName);
    console.log(stackInfo.substring(20));
    console.log("------------endFlag:" + invokeId + ",usedtime:" + (new Date().getTime() - startTime) +"---------------\n");
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
    loadDexfile('/data/user/0/com.sdiread.kt.ktandroid/xinit/'+dexfile);
};

function toJson(javaObject) {
    var gsonClz = Java.use("com.google.gson.Gson");
    var toJsonMethod = gsonClz.toJson.overload("java.lang.Object");
    return toJsonMethod.call(gsonClz.$new(),javaObject);
}


//com.sdiread.kt.ktandroid.aui.coursedetail.model.CourseDetailInterfaceModelImpl$3:?
/**
Java.perform(function() {
    var com_sdiread_kt_ktandroid_aui_coursedetail_model_CourseDetailInterfaceModelImpl_3_clz = Java.use('com.sdiread.kt.ktandroid.aui.coursedetail.model.CourseDetailInterfaceModelImpl$3');
    var com_sdiread_kt_ktandroid_aui_coursedetail_model_CourseDetailInterfaceModelImpl_3_clz_method_onError_84u6 = com_sdiread_kt_ktandroid_aui_coursedetail_model_CourseDetailInterfaceModelImpl_3_clz.onError.overload();
    com_sdiread_kt_ktandroid_aui_coursedetail_model_CourseDetailInterfaceModelImpl_3_clz_method_onError_84u6.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_sdiread_kt_ktandroid_aui_coursedetail_model_CourseDetailInterfaceModelImpl_3_clz_method_onError_84u6.call(this);
        methodInBeat(invokeId, startTime, 'public void com.sdiread.kt.ktandroid.aui.coursedetail.model.CourseDetailInterfaceModelImpl$3.onError()', executor);
    };
    var com_sdiread_kt_ktandroid_aui_coursedetail_model_CourseDetailInterfaceModelImpl_3_clz_method_onException_lu1n = com_sdiread_kt_ktandroid_aui_coursedetail_model_CourseDetailInterfaceModelImpl_3_clz.onException.overload('java.util.List');
    com_sdiread_kt_ktandroid_aui_coursedetail_model_CourseDetailInterfaceModelImpl_3_clz_method_onException_lu1n.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_sdiread_kt_ktandroid_aui_coursedetail_model_CourseDetailInterfaceModelImpl_3_clz_method_onException_lu1n.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.sdiread.kt.ktandroid.aui.coursedetail.model.CourseDetailInterfaceModelImpl$3.onException(java.util.List)', executor);
    };
    var com_sdiread_kt_ktandroid_aui_coursedetail_model_CourseDetailInterfaceModelImpl_3_clz_method_onSuccess_4rtt = com_sdiread_kt_ktandroid_aui_coursedetail_model_CourseDetailInterfaceModelImpl_3_clz.onSuccess.overload('java.util.Map');
    com_sdiread_kt_ktandroid_aui_coursedetail_model_CourseDetailInterfaceModelImpl_3_clz_method_onSuccess_4rtt.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_sdiread_kt_ktandroid_aui_coursedetail_model_CourseDetailInterfaceModelImpl_3_clz_method_onSuccess_4rtt.call(this, v0);
        console.log(toJson(v0));
        methodInBeat(invokeId, startTime, 'public void com.sdiread.kt.ktandroid.aui.coursedetail.model.CourseDetailInterfaceModelImpl$3.onSuccess(java.util.Map)', executor);
    };
    var com_sdiread_kt_ktandroid_aui_coursedetail_model_CourseDetailInterfaceModelImpl_3_clz_method_onStart_599o = com_sdiread_kt_ktandroid_aui_coursedetail_model_CourseDetailInterfaceModelImpl_3_clz.onStart.overload();
    com_sdiread_kt_ktandroid_aui_coursedetail_model_CourseDetailInterfaceModelImpl_3_clz_method_onStart_599o.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_sdiread_kt_ktandroid_aui_coursedetail_model_CourseDetailInterfaceModelImpl_3_clz_method_onStart_599o.call(this);
        methodInBeat(invokeId, startTime, 'public void com.sdiread.kt.ktandroid.aui.coursedetail.model.CourseDetailInterfaceModelImpl$3.onStart()', executor);
    };
});
*/

Java.perform(function() {
	
});