//com.bytedance.article.common.monitor.TLog,com.bytedance.ugc.LLog
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
	// var startTime = timestamp;
 //    var androidLogClz = Java.use("android.util.Log");
 //    var exceptionClz = Java.use("java.lang.Exception");
 //    var threadClz = Java.use("java.lang.Thread");
 //    var currentThread = threadClz.currentThread();
 //    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
 //    console.log("------------startFlag:" + invokeId + ",objectHash:"+executor+",thread(id:" + currentThread.getId() +",name:" + currentThread.getName() + "),timestamp:" + startTime+"---------------");
 //    console.log(methodName);
 //    console.log(stackInfo.substring(20));
 //    console.log("------------endFlag:" + invokeId + ",usedtime:" + (new Date().getTime() - startTime) +"---------------\n");
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
    loadDexfile('/data/user/0/com.ss.android.article.news/xinit/'+dexfile);
};

Java.perform(function() {
    var com_bytedance_article_common_monitor_TLog_clz = Java.use('com.bytedance.article.common.monitor.TLog');
    var com_bytedance_article_common_monitor_TLog_clz_method_i_5png = com_bytedance_article_common_monitor_TLog_clz.i.overload('java.lang.String', 'java.lang.String');
    com_bytedance_article_common_monitor_TLog_clz_method_i_5png.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_bytedance_article_common_monitor_TLog_clz_method_i_5png.call(com_bytedance_article_common_monitor_TLog_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static void com.bytedance.article.common.monitor.TLog.i(java.lang.String,java.lang.String)', executor);
        log(v0+"------"+v1);
    };
    var com_bytedance_article_common_monitor_TLog_clz_method_e_wc07 = com_bytedance_article_common_monitor_TLog_clz.e.overload('java.lang.String', 'java.lang.String', 'java.lang.Throwable');
    com_bytedance_article_common_monitor_TLog_clz_method_e_wc07.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_bytedance_article_common_monitor_TLog_clz_method_e_wc07.call(com_bytedance_article_common_monitor_TLog_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public static void com.bytedance.article.common.monitor.TLog.e(java.lang.String,java.lang.String,java.lang.Throwable)', executor);
        log(v0+"------"+v1);
    };
    var com_bytedance_article_common_monitor_TLog_clz_method_d_p9ea = com_bytedance_article_common_monitor_TLog_clz.d.overload('java.lang.String', 'java.lang.String');
    com_bytedance_article_common_monitor_TLog_clz_method_d_p9ea.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_bytedance_article_common_monitor_TLog_clz_method_d_p9ea.call(com_bytedance_article_common_monitor_TLog_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static void com.bytedance.article.common.monitor.TLog.d(java.lang.String,java.lang.String)', executor);
        log(v0+"------"+v1);
    };
    var com_bytedance_article_common_monitor_TLog_clz_method_bundle_yu0l = com_bytedance_article_common_monitor_TLog_clz.bundle.overload('int', 'java.lang.String', 'android.os.Bundle');
    com_bytedance_article_common_monitor_TLog_clz_method_bundle_yu0l.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_bytedance_article_common_monitor_TLog_clz_method_bundle_yu0l.call(com_bytedance_article_common_monitor_TLog_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public static void com.bytedance.article.common.monitor.TLog.bundle(int,java.lang.String,android.os.Bundle)', executor);
        log(v0+"------"+v1);
    };
    var com_bytedance_article_common_monitor_TLog_clz_method_header_8evi = com_bytedance_article_common_monitor_TLog_clz.header.overload('int', 'java.lang.String', 'java.lang.String');
    com_bytedance_article_common_monitor_TLog_clz_method_header_8evi.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_bytedance_article_common_monitor_TLog_clz_method_header_8evi.call(com_bytedance_article_common_monitor_TLog_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public static void com.bytedance.article.common.monitor.TLog.header(int,java.lang.String,java.lang.String)', executor);
        log(v1+"------"+v2);
    };

   
    var com_bytedance_article_common_monitor_TLog_clz_method_json_w1y8 = com_bytedance_article_common_monitor_TLog_clz.json.overload('int', 'java.lang.String', 'com.bytedance.article.common.monitor.TLog$b');
    com_bytedance_article_common_monitor_TLog_clz_method_json_w1y8.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_bytedance_article_common_monitor_TLog_clz_method_json_w1y8.call(com_bytedance_article_common_monitor_TLog_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public static void com.bytedance.article.common.monitor.TLog.json(int,java.lang.String,com.bytedance.article.common.monitor.TLog$b)', executor);
        log(v0+"------"+v1);
    };
   
    var com_bytedance_article_common_monitor_TLog_clz_method_w_wc68 = com_bytedance_article_common_monitor_TLog_clz.w.overload('java.lang.String', 'com.bytedance.article.common.monitor.TLog$a');
    com_bytedance_article_common_monitor_TLog_clz_method_w_wc68.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_bytedance_article_common_monitor_TLog_clz_method_w_wc68.call(com_bytedance_article_common_monitor_TLog_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static void com.bytedance.article.common.monitor.TLog.w(java.lang.String,com.bytedance.article.common.monitor.TLog$a)', executor);
        log(v0);
    };
  
    var com_bytedance_article_common_monitor_TLog_clz_method_w_3yes = com_bytedance_article_common_monitor_TLog_clz.w.overload('java.lang.String', 'android.os.Bundle');
    com_bytedance_article_common_monitor_TLog_clz_method_w_3yes.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_bytedance_article_common_monitor_TLog_clz_method_w_3yes.call(com_bytedance_article_common_monitor_TLog_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static void com.bytedance.article.common.monitor.TLog.w(java.lang.String,android.os.Bundle)', executor);
        log(v0);
    };
    
    var com_bytedance_article_common_monitor_TLog_clz_method_println_9xx4 = com_bytedance_article_common_monitor_TLog_clz.println.overload('int', 'java.lang.String', 'java.lang.String');
    com_bytedance_article_common_monitor_TLog_clz_method_println_9xx4.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_bytedance_article_common_monitor_TLog_clz_method_println_9xx4.call(com_bytedance_article_common_monitor_TLog_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public static void com.bytedance.article.common.monitor.TLog.println(int,java.lang.String,java.lang.String)', executor);
        log(v0+"------"+v1);
    };
    var com_bytedance_article_common_monitor_TLog_clz_method_w_xhjt = com_bytedance_article_common_monitor_TLog_clz.w.overload('java.lang.String', 'com.bytedance.article.common.monitor.TLog$b');
    com_bytedance_article_common_monitor_TLog_clz_method_w_xhjt.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_bytedance_article_common_monitor_TLog_clz_method_w_xhjt.call(com_bytedance_article_common_monitor_TLog_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static void com.bytedance.article.common.monitor.TLog.w(java.lang.String,com.bytedance.article.common.monitor.TLog$b)', executor);
        log(v0);
    };
    var com_bytedance_article_common_monitor_TLog_clz_method_w_gcrm = com_bytedance_article_common_monitor_TLog_clz.w.overload('java.lang.String', 'java.lang.String');
    com_bytedance_article_common_monitor_TLog_clz_method_w_gcrm.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_bytedance_article_common_monitor_TLog_clz_method_w_gcrm.call(com_bytedance_article_common_monitor_TLog_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static void com.bytedance.article.common.monitor.TLog.w(java.lang.String,java.lang.String)', executor);
        log(v0+"------"+v1);
    };

    var com_bytedance_article_common_monitor_TLog_clz_method_w_s4q9 = com_bytedance_article_common_monitor_TLog_clz.w.overload('java.lang.String', 'java.lang.String', 'java.lang.Throwable');
    com_bytedance_article_common_monitor_TLog_clz_method_w_s4q9.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_bytedance_article_common_monitor_TLog_clz_method_w_s4q9.call(com_bytedance_article_common_monitor_TLog_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public static void com.bytedance.article.common.monitor.TLog.w(java.lang.String,java.lang.String,java.lang.Throwable)', executor);
        log(v0+"------"+v1);
    };

    var com_bytedance_article_common_monitor_TLog_clz_method_e_asux = com_bytedance_article_common_monitor_TLog_clz.e.overload('java.lang.String', 'java.lang.Throwable');
    com_bytedance_article_common_monitor_TLog_clz_method_e_asux.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_bytedance_article_common_monitor_TLog_clz_method_e_asux.call(com_bytedance_article_common_monitor_TLog_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static void com.bytedance.article.common.monitor.TLog.e(java.lang.String,java.lang.Throwable)', executor);
        log(v0+"------"+v1);
    };

    var com_bytedance_article_common_monitor_TLog_clz_method_intent_n5xq = com_bytedance_article_common_monitor_TLog_clz.intent.overload('int', 'java.lang.String', 'android.content.Intent');
    com_bytedance_article_common_monitor_TLog_clz_method_intent_n5xq.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_bytedance_article_common_monitor_TLog_clz_method_intent_n5xq.call(com_bytedance_article_common_monitor_TLog_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public static void com.bytedance.article.common.monitor.TLog.intent(int,java.lang.String,android.content.Intent)', executor);
        log(v0+"------"+v1);
    };
    var com_bytedance_article_common_monitor_TLog_clz_method_v_330j = com_bytedance_article_common_monitor_TLog_clz.v.overload('java.lang.String', 'java.lang.String');
    com_bytedance_article_common_monitor_TLog_clz_method_v_330j.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_bytedance_article_common_monitor_TLog_clz_method_v_330j.call(com_bytedance_article_common_monitor_TLog_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static void com.bytedance.article.common.monitor.TLog.v(java.lang.String,java.lang.String)', executor);
        log(v0+"------"+v1);
    };
    var com_bytedance_article_common_monitor_TLog_clz_method_w_zfok = com_bytedance_article_common_monitor_TLog_clz.w.overload('java.lang.String', 'java.lang.Throwable');
    com_bytedance_article_common_monitor_TLog_clz_method_w_zfok.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_bytedance_article_common_monitor_TLog_clz_method_w_zfok.call(com_bytedance_article_common_monitor_TLog_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static void com.bytedance.article.common.monitor.TLog.w(java.lang.String,java.lang.Throwable)', executor);
        log(v0+"------"+v1);
    };
    var com_bytedance_article_common_monitor_TLog_clz_method_thread_pstu = com_bytedance_article_common_monitor_TLog_clz.thread.overload('int', 'java.lang.String', 'java.lang.Thread');
    com_bytedance_article_common_monitor_TLog_clz_method_thread_pstu.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_bytedance_article_common_monitor_TLog_clz_method_thread_pstu.call(com_bytedance_article_common_monitor_TLog_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public static void com.bytedance.article.common.monitor.TLog.thread(int,java.lang.String,java.lang.Thread)', executor);
        log(v0+"------"+v1);
    };
    var com_bytedance_article_common_monitor_TLog_clz_method_json_ykeh = com_bytedance_article_common_monitor_TLog_clz.json.overload('int', 'java.lang.String', 'java.lang.String');
    com_bytedance_article_common_monitor_TLog_clz_method_json_ykeh.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_bytedance_article_common_monitor_TLog_clz_method_json_ykeh.call(com_bytedance_article_common_monitor_TLog_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public static void com.bytedance.article.common.monitor.TLog.json(int,java.lang.String,java.lang.String)', executor);
        log(v1+"------"+v2);
    };


    var com_bytedance_article_common_monitor_TLog_clz_method_e_ct5l = com_bytedance_article_common_monitor_TLog_clz.e.overload('java.lang.String', 'java.lang.String');
    com_bytedance_article_common_monitor_TLog_clz_method_e_ct5l.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_bytedance_article_common_monitor_TLog_clz_method_e_ct5l.call(com_bytedance_article_common_monitor_TLog_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static void com.bytedance.article.common.monitor.TLog.e(java.lang.String,java.lang.String)', executor);
        log(v0+"------"+v1);
    };
    var com_bytedance_article_common_monitor_TLog_clz_method_w_f30f = com_bytedance_article_common_monitor_TLog_clz.w.overload('java.lang.String', 'org.json.JSONObject');
    com_bytedance_article_common_monitor_TLog_clz_method_w_f30f.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_bytedance_article_common_monitor_TLog_clz_method_w_f30f.call(com_bytedance_article_common_monitor_TLog_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static void com.bytedance.article.common.monitor.TLog.w(java.lang.String,org.json.JSONObject)', executor);
        log(v0+"------"+v1);
    };
    
});