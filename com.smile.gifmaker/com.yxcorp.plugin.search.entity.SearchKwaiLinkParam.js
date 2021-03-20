//crack by com.smile.gifmaker 7.5.50.14809
//com.yxcorp.plugin.search.entity.SearchKwaiLinkParam
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
    var str = ("------------startFlag:" + invokeId + ",objectHash:"+executor+",thread(id:" + currentThread.getId() +",name:" + currentThread.getName() + "),timestamp:" + startTime+"---------------");
    str += methodName;
    str += stackInfo.substring(20);
    str += ("------------endFlag:" + invokeId + ",usedtime:" + (new Date().getTime() - startTime) +"---------------\n");
	console.log(str);
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


//com.yxcorp.plugin.search.entity.SearchKwaiLinkParam
Java.perform(function() {
    var com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz = Java.use('com.yxcorp.plugin.search.entity.SearchKwaiLinkParam');
    var com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_getFromPage_9z1t = com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz.getFromPage.overload();
    com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_getFromPage_9z1t.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_getFromPage_9z1t.call(this);
        methodInBeat(invokeId, startTime, 'public k.a.b.o.c0 com.yxcorp.plugin.search.entity.SearchKwaiLinkParam.getFromPage()', executor);
        return ret;
    };
    var com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_getSearchPlaceholder_t3r8 = com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz.getSearchPlaceholder.overload();
    com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_getSearchPlaceholder_t3r8.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_getSearchPlaceholder_t3r8.call(this);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.yxcorp.plugin.search.entity.SearchKwaiLinkParam.getSearchPlaceholder()', executor);
        return ret;
    };
    var com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_fromUri_brav = com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz.fromUri.overload('android.net.Uri');
    com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_fromUri_brav.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_fromUri_brav.call(com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz, v0);
        methodInBeat(invokeId, startTime, 'public static com.yxcorp.plugin.search.entity.SearchKwaiLinkParam com.yxcorp.plugin.search.entity.SearchKwaiLinkParam.fromUri(android.net.Uri)', executor);
        return ret;
    };
    var com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_getKwaiFromPage_u9m5 = com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz.getKwaiFromPage.overload();
    com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_getKwaiFromPage_u9m5.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_getKwaiFromPage_u9m5.call(this);
        methodInBeat(invokeId, startTime, 'public int com.yxcorp.plugin.search.entity.SearchKwaiLinkParam.getKwaiFromPage()', executor);
        return ret;
    };
    var com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_getSearchSceneSource_1bfk = com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz.getSearchSceneSource.overload();
    com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_getSearchSceneSource_1bfk.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_getSearchSceneSource_1bfk.call(this);
        methodInBeat(invokeId, startTime, 'public k.b.d.c.b.h4 com.yxcorp.plugin.search.entity.SearchKwaiLinkParam.getSearchSceneSource()', executor);
        return ret;
    };
    var com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_getKeyword_a16t = com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz.getKeyword.overload();
    com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_getKeyword_a16t.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_getKeyword_a16t.call(this);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.yxcorp.plugin.search.entity.SearchKwaiLinkParam.getKeyword()', executor);
        return ret;
    };
    var com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_getPlaceholderKeyword_w4mi = com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz.getPlaceholderKeyword.overload();
    com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_getPlaceholderKeyword_w4mi.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_getPlaceholderKeyword_w4mi.call(this);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.yxcorp.plugin.search.entity.SearchKwaiLinkParam.getPlaceholderKeyword()', executor);
        return ret;
    };
    var com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_getFromSessionId_heg9 = com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz.getFromSessionId.overload();
    com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_getFromSessionId_heg9.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_getFromSessionId_heg9.call(this);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.yxcorp.plugin.search.entity.SearchKwaiLinkParam.getFromSessionId()', executor);
        return ret;
    };
    var com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_getSourceText_p6ns = com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz.getSourceText.overload();
    com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_getSourceText_p6ns.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_getSourceText_p6ns.call(this);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.yxcorp.plugin.search.entity.SearchKwaiLinkParam.getSourceText()', executor);
        return ret;
    };
    var com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_isEnableSearchHome_hd4h = com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz.isEnableSearchHome.overload();
    com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_isEnableSearchHome_hd4h.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_isEnableSearchHome_hd4h.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.yxcorp.plugin.search.entity.SearchKwaiLinkParam.isEnableSearchHome()', executor);
        return ret;
    };
    var com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_fromVerticalUri_q3vv = com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz.fromVerticalUri.overload('android.net.Uri');
    com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_fromVerticalUri_q3vv.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_fromVerticalUri_q3vv.call(com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz, v0);
        methodInBeat(invokeId, startTime, 'public static com.yxcorp.plugin.search.entity.SearchKwaiLinkParam com.yxcorp.plugin.search.entity.SearchKwaiLinkParam.fromVerticalUri(android.net.Uri)', executor);
        return ret;
    };
    var com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_isNeedRequestPreset_pyf4 = com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz.isNeedRequestPreset.overload();
    com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_isNeedRequestPreset_pyf4.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_plugin_search_entity_SearchKwaiLinkParam_clz_method_isNeedRequestPreset_pyf4.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.yxcorp.plugin.search.entity.SearchKwaiLinkParam.isNeedRequestPreset()', executor);
        return ret;
    };
});