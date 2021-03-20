//crack by com.smile.gifmaker 7.5.50.14809
//com.yxcorp.plugin.search.SearchActivity
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


//com.yxcorp.plugin.search.SearchActivity
Java.perform(function() {
    var com_yxcorp_plugin_search_SearchActivity_clz = Java.use('com.yxcorp.plugin.search.SearchActivity');
    var com_yxcorp_plugin_search_SearchActivity_clz_method_onBackPressed_l70t = com_yxcorp_plugin_search_SearchActivity_clz.onBackPressed.overload();
    com_yxcorp_plugin_search_SearchActivity_clz_method_onBackPressed_l70t.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_yxcorp_plugin_search_SearchActivity_clz_method_onBackPressed_l70t.call(this);
        methodInBeat(invokeId, startTime, 'public void com.yxcorp.plugin.search.SearchActivity.onBackPressed()', executor);
    };
    var com_yxcorp_plugin_search_SearchActivity_clz_method_getCategory_ssrj = com_yxcorp_plugin_search_SearchActivity_clz.getCategory.overload();
    com_yxcorp_plugin_search_SearchActivity_clz_method_getCategory_ssrj.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_plugin_search_SearchActivity_clz_method_getCategory_ssrj.call(this);
        //methodInBeat(invokeId, startTime, 'public int com.yxcorp.plugin.search.SearchActivity.getCategory()', executor);
        return ret;
    };
    var com_yxcorp_plugin_search_SearchActivity_clz_method_C_5y27 = com_yxcorp_plugin_search_SearchActivity_clz.C.overload();
    com_yxcorp_plugin_search_SearchActivity_clz_method_C_5y27.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_plugin_search_SearchActivity_clz_method_C_5y27.call(this);
        methodInBeat(invokeId, startTime, 'public androidx.fragment.app.Fragment com.yxcorp.plugin.search.SearchActivity.C()', executor);
        console.log(ret.getClass());
        return ret;
    };
    var com_yxcorp_plugin_search_SearchActivity_clz_method_isCustomImmersiveMode_pn3i = com_yxcorp_plugin_search_SearchActivity_clz.isCustomImmersiveMode.overload();
    com_yxcorp_plugin_search_SearchActivity_clz_method_isCustomImmersiveMode_pn3i.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_plugin_search_SearchActivity_clz_method_isCustomImmersiveMode_pn3i.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.yxcorp.plugin.search.SearchActivity.isCustomImmersiveMode()', executor);
        return ret;
    };
    var com_yxcorp_plugin_search_SearchActivity_clz_method_a_2g7x = com_yxcorp_plugin_search_SearchActivity_clz.a.overload('android.app.Activity', 'java.lang.String', 'k.a.b.o.c0', 'java.lang.String');
    com_yxcorp_plugin_search_SearchActivity_clz_method_a_2g7x.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_yxcorp_plugin_search_SearchActivity_clz_method_a_2g7x.call(com_yxcorp_plugin_search_SearchActivity_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public static void com.yxcorp.plugin.search.SearchActivity.a(android.app.Activity,java.lang.String,k.a.b.o.c0,java.lang.String)', executor);
    };
    var com_yxcorp_plugin_search_SearchActivity_clz_method_onDestroy_laqs = com_yxcorp_plugin_search_SearchActivity_clz.onDestroy.overload();
    com_yxcorp_plugin_search_SearchActivity_clz_method_onDestroy_laqs.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_yxcorp_plugin_search_SearchActivity_clz_method_onDestroy_laqs.call(this);
        methodInBeat(invokeId, startTime, 'public void com.yxcorp.plugin.search.SearchActivity.onDestroy()', executor);
    };
    var com_yxcorp_plugin_search_SearchActivity_clz_method_a_cpiy = com_yxcorp_plugin_search_SearchActivity_clz.a.overload('com.yxcorp.gifshow.activity.GifshowActivity', 'java.lang.String', 'k.a.b.o.c0', 'java.lang.String', 'int', 'k.a.w.a.a');
    com_yxcorp_plugin_search_SearchActivity_clz_method_a_cpiy.implementation = function(v0, v1, v2, v3, v4, v5) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_yxcorp_plugin_search_SearchActivity_clz_method_a_cpiy.call(com_yxcorp_plugin_search_SearchActivity_clz, v0, v1, v2, v3, v4, v5);
        methodInBeat(invokeId, startTime, 'public static void com.yxcorp.plugin.search.SearchActivity.a(com.yxcorp.gifshow.activity.GifshowActivity,java.lang.String,k.a.b.o.c0,java.lang.String,int,k.a.w.a.a)', executor);
    };
    var com_yxcorp_plugin_search_SearchActivity_clz_method_getPageId_lxxh = com_yxcorp_plugin_search_SearchActivity_clz.getPageId.overload();
    com_yxcorp_plugin_search_SearchActivity_clz_method_getPageId_lxxh.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_plugin_search_SearchActivity_clz_method_getPageId_lxxh.call(this);
        methodInBeat(invokeId, startTime, 'public int com.yxcorp.plugin.search.SearchActivity.getPageId()', executor);
        return ret;
    };
    var com_yxcorp_plugin_search_SearchActivity_clz_method_onCreate_87ye = com_yxcorp_plugin_search_SearchActivity_clz.onCreate.overload('android.os.Bundle');
    com_yxcorp_plugin_search_SearchActivity_clz_method_onCreate_87ye.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_yxcorp_plugin_search_SearchActivity_clz_method_onCreate_87ye.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.yxcorp.plugin.search.SearchActivity.onCreate(android.os.Bundle)', executor);
    };
    var com_yxcorp_plugin_search_SearchActivity_clz_method_a_4btp = com_yxcorp_plugin_search_SearchActivity_clz.a.overload('com.yxcorp.gifshow.activity.GifshowActivity', 'com.yxcorp.gifshow.plugin.impl.search.SearchPlugin$a');
    com_yxcorp_plugin_search_SearchActivity_clz_method_a_4btp.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_yxcorp_plugin_search_SearchActivity_clz_method_a_4btp.call(com_yxcorp_plugin_search_SearchActivity_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static android.content.Intent com.yxcorp.plugin.search.SearchActivity.a(com.yxcorp.gifshow.activity.GifshowActivity,com.yxcorp.gifshow.plugin.impl.search.SearchPlugin$a)', executor);
        return ret;
    };
});