//crack by com.smile.gifmaker 7.5.50.14809
//com.yxcorp.gifshow.activity.SingleFragmentActivity
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

//虽然我们习惯用fastjson一行将对象转成json字符串，但是Android Library里面自带了一个gson可以做到 只是sdk没有暴露出来，很多人不知道。在frida中所有代码都是透明的，你随便调......
function toJson(javaObject) {
    var gsonClz = Java.use("com.google.gson.Gson");
    var toJsonMethod = gsonClz.toJson.overload("java.lang.Object");
    return toJsonMethod.call(gsonClz.$new(),javaObject);
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
    loadDexfile('/data/user/0/com.smile.gifmaker/xinit/'+dexfile);
};


//com.yxcorp.gifshow.activity.SingleFragmentActivity
Java.perform(function() {
    var com_yxcorp_gifshow_activity_SingleFragmentActivity_clz = Java.use('com.yxcorp.gifshow.activity.SingleFragmentActivity');
    var com_yxcorp_gifshow_activity_SingleFragmentActivity_clz_method_C_t8x8 = com_yxcorp_gifshow_activity_SingleFragmentActivity_clz.C.overload();
    com_yxcorp_gifshow_activity_SingleFragmentActivity_clz_method_C_t8x8.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_gifshow_activity_SingleFragmentActivity_clz_method_C_t8x8.call(this);
        methodInBeat(invokeId, startTime, 'public abstract androidx.fragment.app.Fragment com.yxcorp.gifshow.activity.SingleFragmentActivity.C()', executor);
        
        return ret;
    };
    var com_yxcorp_gifshow_activity_SingleFragmentActivity_clz_method_F_ko9w = com_yxcorp_gifshow_activity_SingleFragmentActivity_clz.F.overload();
    com_yxcorp_gifshow_activity_SingleFragmentActivity_clz_method_F_ko9w.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_yxcorp_gifshow_activity_SingleFragmentActivity_clz_method_F_ko9w.call(this);
        methodInBeat(invokeId, startTime, 'public void com.yxcorp.gifshow.activity.SingleFragmentActivity.F()', executor);
    };
    var com_yxcorp_gifshow_activity_SingleFragmentActivity_clz_method_getLayoutId_lifk = com_yxcorp_gifshow_activity_SingleFragmentActivity_clz.getLayoutId.overload();
    com_yxcorp_gifshow_activity_SingleFragmentActivity_clz_method_getLayoutId_lifk.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_gifshow_activity_SingleFragmentActivity_clz_method_getLayoutId_lifk.call(this);
        methodInBeat(invokeId, startTime, 'public int com.yxcorp.gifshow.activity.SingleFragmentActivity.getLayoutId()', executor);
        return ret;
    };
    var com_yxcorp_gifshow_activity_SingleFragmentActivity_clz_method_getContainerId_6v04 = com_yxcorp_gifshow_activity_SingleFragmentActivity_clz.getContainerId.overload();
    com_yxcorp_gifshow_activity_SingleFragmentActivity_clz_method_getContainerId_6v04.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_gifshow_activity_SingleFragmentActivity_clz_method_getContainerId_6v04.call(this);
        methodInBeat(invokeId, startTime, 'public int com.yxcorp.gifshow.activity.SingleFragmentActivity.getContainerId()', executor);
        return ret;
    };
    var com_yxcorp_gifshow_activity_SingleFragmentActivity_clz_method_getFragment_2x69 = com_yxcorp_gifshow_activity_SingleFragmentActivity_clz.getFragment.overload();
    com_yxcorp_gifshow_activity_SingleFragmentActivity_clz_method_getFragment_2x69.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_gifshow_activity_SingleFragmentActivity_clz_method_getFragment_2x69.call(this);
        methodInBeat(invokeId, startTime, 'public androidx.fragment.app.Fragment com.yxcorp.gifshow.activity.SingleFragmentActivity.getFragment()', executor);
        return ret;
    };
    var com_yxcorp_gifshow_activity_SingleFragmentActivity_clz_method_onCreate_ofp5 = com_yxcorp_gifshow_activity_SingleFragmentActivity_clz.onCreate.overload('android.os.Bundle');
    com_yxcorp_gifshow_activity_SingleFragmentActivity_clz_method_onCreate_ofp5.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_yxcorp_gifshow_activity_SingleFragmentActivity_clz_method_onCreate_ofp5.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.yxcorp.gifshow.activity.SingleFragmentActivity.onCreate(android.os.Bundle)', executor);
    };
    var com_yxcorp_gifshow_activity_SingleFragmentActivity_clz_method_installSwipeBack_1rcl = com_yxcorp_gifshow_activity_SingleFragmentActivity_clz.installSwipeBack.overload();
    com_yxcorp_gifshow_activity_SingleFragmentActivity_clz_method_installSwipeBack_1rcl.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_gifshow_activity_SingleFragmentActivity_clz_method_installSwipeBack_1rcl.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.yxcorp.gifshow.activity.SingleFragmentActivity.installSwipeBack()', executor);
        return ret;
    };
});