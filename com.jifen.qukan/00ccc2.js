//com.jifen.qukan.utils.http.i:?
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
    var com_jifen_qukan_utils_http_i_clz = Java.use('com.jifen.qukan.utils.http.i');
    var com_jifen_qukan_utils_http_i_clz_method_a_5z34 = com_jifen_qukan_utils_http_i_clz.a.overload();
    com_jifen_qukan_utils_http_i_clz_method_a_5z34.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_5z34.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'public static boolean com.jifen.qukan.utils.http.i.a()', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_oseq = com_jifen_qukan_utils_http_i_clz.b.overload();
    com_jifen_qukan_utils_http_i_clz_method_b_oseq.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_b_oseq.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.b()', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_v8s7 = com_jifen_qukan_utils_http_i_clz.b.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.qukan.utils.http.i$i', 'boolean');
    com_jifen_qukan_utils_http_i_clz_method_b_v8s7.implementation = function(v0, v1, v2, v3, v4) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_b_v8s7.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.b(android.content.Context,int,java.util.List,com.jifen.qukan.utils.http.i$i,boolean)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_c_s2ze = com_jifen_qukan_utils_http_i_clz.c.overload();
    com_jifen_qukan_utils_http_i_clz_method_c_s2ze.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_c_s2ze.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'public static synchronized void com.jifen.qukan.utils.http.i.c()', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_d_hkvg = com_jifen_qukan_utils_http_i_clz.d.overload();
    com_jifen_qukan_utils_http_i_clz_method_d_hkvg.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_d_hkvg.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.d()', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_e_avtn = com_jifen_qukan_utils_http_i_clz.e.overload();
    com_jifen_qukan_utils_http_i_clz_method_e_avtn.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_e_avtn.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'public static boolean com.jifen.qukan.utils.http.i.e()', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_3k5a = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.framework.http.napi.Configure', 'com.jifen.qukan.utils.http.i$i', 'boolean', 'com.jifen.qukan.utils.http.i$a', 'boolean');
    com_jifen_qukan_utils_http_i_clz_method_a_3k5a.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_3k5a.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5, v6, v7);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,int,java.util.List,com.jifen.framework.http.napi.Configure,com.jifen.qukan.utils.http.i$i,boolean,com.jifen.qukan.utils.http.i$a,boolean)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_f_ugyd = com_jifen_qukan_utils_http_i_clz.f.overload();
    com_jifen_qukan_utils_http_i_clz_method_f_ugyd.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_f_ugyd.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'static void com.jifen.qukan.utils.http.i.f()', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_g_7e2u = com_jifen_qukan_utils_http_i_clz.g.overload();
    com_jifen_qukan_utils_http_i_clz_method_g_7e2u.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_g_7e2u.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'static java.util.List com.jifen.qukan.utils.http.i.g()', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_h_58lo = com_jifen_qukan_utils_http_i_clz.h.overload();
    com_jifen_qukan_utils_http_i_clz_method_h_58lo.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_h_58lo.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'static void com.jifen.qukan.utils.http.i.h()', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_yh2o = com_jifen_qukan_utils_http_i_clz.b.overload('java.lang.String', 'java.lang.String', 'java.util.concurrent.atomic.AtomicInteger');
    com_jifen_qukan_utils_http_i_clz_method_b_yh2o.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_b_yh2o.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public static java.lang.String com.jifen.qukan.utils.http.i.b(java.lang.String,java.lang.String,java.util.concurrent.atomic.AtomicInteger)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_i_skxo = com_jifen_qukan_utils_http_i_clz.i.overload();
    com_jifen_qukan_utils_http_i_clz_method_i_skxo.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_i_skxo.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'static int com.jifen.qukan.utils.http.i.i()', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_2f3u = com_jifen_qukan_utils_http_i_clz.a.overload('java.lang.String', 'java.lang.String', 'java.util.concurrent.atomic.AtomicInteger');
    com_jifen_qukan_utils_http_i_clz_method_a_2f3u.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_2f3u.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public static java.lang.String com.jifen.qukan.utils.http.i.a(java.lang.String,java.lang.String,java.util.concurrent.atomic.AtomicInteger) throws java.lang.Throwable', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_j_cxj6 = com_jifen_qukan_utils_http_i_clz.j.overload();
    com_jifen_qukan_utils_http_i_clz_method_j_cxj6.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_j_cxj6.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'static int com.jifen.qukan.utils.http.i.j()', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_k_e8ic = com_jifen_qukan_utils_http_i_clz.k.overload();
    com_jifen_qukan_utils_http_i_clz_method_k_e8ic.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_k_e8ic.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'static java.util.List com.jifen.qukan.utils.http.i.k()', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_l_883s = com_jifen_qukan_utils_http_i_clz.l.overload();
    com_jifen_qukan_utils_http_i_clz_method_l_883s.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_l_883s.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'private static com.jifen.framework.http.napi.e com.jifen.qukan.utils.http.i.l()', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_m_i322 = com_jifen_qukan_utils_http_i_clz.m.overload();
    com_jifen_qukan_utils_http_i_clz_method_m_i322.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_m_i322.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'private static java.lang.String com.jifen.qukan.utils.http.i.m()', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_n_2u7o = com_jifen_qukan_utils_http_i_clz.n.overload();
    com_jifen_qukan_utils_http_i_clz_method_n_2u7o.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_n_2u7o.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'private static java.lang.String com.jifen.qukan.utils.http.i.n()', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_o_p2ys = com_jifen_qukan_utils_http_i_clz.o.overload();
    com_jifen_qukan_utils_http_i_clz_method_o_p2ys.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_o_p2ys.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'private static java.lang.String com.jifen.qukan.utils.http.i.o()', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_0uij = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.qukan.utils.http.i$i', 'com.jifen.qukan.utils.http.i$h', 'boolean', 'boolean');
    com_jifen_qukan_utils_http_i_clz_method_a_0uij.implementation = function(v0, v1, v2, v3, v4, v5, v6) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_0uij.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5, v6);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,int,java.util.List,com.jifen.qukan.utils.http.i$i,com.jifen.qukan.utils.http.i$h,boolean,boolean)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_p_j5ml = com_jifen_qukan_utils_http_i_clz.p.overload();
    com_jifen_qukan_utils_http_i_clz_method_p_j5ml.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_p_j5ml.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'private static boolean com.jifen.qukan.utils.http.i.p()', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_q_pzty = com_jifen_qukan_utils_http_i_clz.q.overload();
    com_jifen_qukan_utils_http_i_clz_method_q_pzty.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_q_pzty.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.q()', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_r_k7ab = com_jifen_qukan_utils_http_i_clz.r.overload();
    com_jifen_qukan_utils_http_i_clz_method_r_k7ab.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_r_k7ab.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.r()', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_s_wxfo = com_jifen_qukan_utils_http_i_clz.s.overload();
    com_jifen_qukan_utils_http_i_clz_method_s_wxfo.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_s_wxfo.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.s()', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_p1we = com_jifen_qukan_utils_http_i_clz.a.overload('java.lang.String', 'com.jifen.framework.http.napi.Method', 'java.util.List', 'boolean');
    com_jifen_qukan_utils_http_i_clz_method_a_p1we.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_p1we.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        log(v0);
        log(v1);
        var len = v2.size();
        log("len:"+len);
        for (var i = 0; i < len; i++) {
            log(i+">>>"+v2.get(i));
        }
        log(v3);
        methodInBeat(invokeId, startTime, 'public static java.lang.String com.jifen.qukan.utils.http.i.a(java.lang.String,com.jifen.framework.http.napi.Method,java.util.List,boolean)', executor);
        log(ret);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_0ttn = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'java.util.Map', 'java.util.List', 'com.jifen.qukan.utils.http.i$i', 'boolean');
    com_jifen_qukan_utils_http_i_clz_method_a_0ttn.implementation = function(v0, v1, v2, v3, v4, v5) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_0ttn.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,int,java.util.Map,java.util.List,com.jifen.qukan.utils.http.i$i,boolean)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_s92d = com_jifen_qukan_utils_http_i_clz.a.overload('java.lang.String');
    com_jifen_qukan_utils_http_i_clz_method_a_s92d.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_s92d.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'private static boolean com.jifen.qukan.utils.http.i.a(java.lang.String)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_domc = com_jifen_qukan_utils_http_i_clz.a.overload('java.lang.String', 'com.jifen.framework.http.napi.Method', 'java.util.List');
    com_jifen_qukan_utils_http_i_clz_method_a_domc.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_domc.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2);
        
        methodInBeat(invokeId, startTime, 'public static java.lang.String com.jifen.qukan.utils.http.i.a(java.lang.String,com.jifen.framework.http.napi.Method,java.util.List)', executor);
        
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_mhfl = com_jifen_qukan_utils_http_i_clz.a.overload('java.lang.String', 'com.jifen.framework.http.napi.HttpRequestHandler');
    com_jifen_qukan_utils_http_i_clz_method_a_mhfl.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_mhfl.call(com_jifen_qukan_utils_http_i_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static boolean com.jifen.qukan.utils.http.i.a(java.lang.String,com.jifen.framework.http.napi.HttpRequestHandler)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_1pyr = com_jifen_qukan_utils_http_i_clz.b.overload('android.content.Context', 'java.lang.Throwable');
    com_jifen_qukan_utils_http_i_clz_method_b_1pyr.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_b_1pyr.call(com_jifen_qukan_utils_http_i_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'private static java.lang.String com.jifen.qukan.utils.http.i.b(android.content.Context,java.lang.Throwable)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_g8ec = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'java.lang.Throwable');
    com_jifen_qukan_utils_http_i_clz_method_a_g8ec.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_g8ec.call(com_jifen_qukan_utils_http_i_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static java.lang.String com.jifen.qukan.utils.http.i.a(android.content.Context,java.lang.Throwable)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_mu9s = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'java.util.Map', 'java.util.List', 'com.jifen.qukan.utils.http.i$i', 'boolean', 'com.jifen.qukan.utils.http.i$a');
    com_jifen_qukan_utils_http_i_clz_method_a_mu9s.implementation = function(v0, v1, v2, v3, v4, v5, v6) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_mu9s.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5, v6);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,int,java.util.Map,java.util.List,com.jifen.qukan.utils.http.i$i,boolean,com.jifen.qukan.utils.http.i$a)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_2vqv = com_jifen_qukan_utils_http_i_clz.b.overload('android.content.Context');
    com_jifen_qukan_utils_http_i_clz_method_b_2vqv.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_b_2vqv.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'public static com.jifen.framework.http.napi.d com.jifen.qukan.utils.http.i.b(android.content.Context) throws java.io.IOException,java.lang.ClassCastException', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_fx2e = com_jifen_qukan_utils_http_i_clz.a.overload('java.util.List', 'boolean');
    com_jifen_qukan_utils_http_i_clz_method_a_fx2e.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_fx2e.call(com_jifen_qukan_utils_http_i_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static java.lang.String com.jifen.qukan.utils.http.i.a(java.util.List,boolean)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_clma = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context');
    com_jifen_qukan_utils_http_i_clz_method_a_clma.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_clma.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'public static synchronized void com.jifen.qukan.utils.http.i.a(android.content.Context)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_c_pxa3 = com_jifen_qukan_utils_http_i_clz.c.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.qukan.utils.http.i$i');
    com_jifen_qukan_utils_http_i_clz_method_c_pxa3.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_c_pxa3.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.c(android.content.Context,int,java.util.List,com.jifen.qukan.utils.http.i$i)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_6zja = com_jifen_qukan_utils_http_i_clz.b.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.qukan.utils.http.i$i');
    com_jifen_qukan_utils_http_i_clz_method_b_6zja.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_b_6zja.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public static boolean com.jifen.qukan.utils.http.i.b(android.content.Context,int,java.util.List,com.jifen.qukan.utils.http.i$i)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_d_a1zo = com_jifen_qukan_utils_http_i_clz.d.overload('android.content.Context');
    com_jifen_qukan_utils_http_i_clz_method_d_a1zo.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_d_a1zo.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'static void com.jifen.qukan.utils.http.i.d(android.content.Context)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_e33u = com_jifen_qukan_utils_http_i_clz.a.overload('java.util.Map');
    com_jifen_qukan_utils_http_i_clz_method_a_e33u.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_e33u.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'public static java.util.Map com.jifen.qukan.utils.http.i.a(java.util.Map)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_ze9n = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.qukan.utils.http.i$i');
    com_jifen_qukan_utils_http_i_clz_method_a_ze9n.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_ze9n.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,int,java.util.List,com.jifen.qukan.utils.http.i$i)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_5rfe = com_jifen_qukan_utils_http_i_clz.a.overload('java.lang.String', 'com.jifen.qukan.utils.http.i$d', 'com.jifen.qukan.utils.http.i$h', 'java.io.File');
    com_jifen_qukan_utils_http_i_clz_method_a_5rfe.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_5rfe.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(java.lang.String,com.jifen.qukan.utils.http.i$d,com.jifen.qukan.utils.http.i$h,java.io.File)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_c_lso5 = com_jifen_qukan_utils_http_i_clz.c.overload('android.content.Context');
    com_jifen_qukan_utils_http_i_clz_method_c_lso5.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_c_lso5.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.c(android.content.Context)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_f_znwo = com_jifen_qukan_utils_http_i_clz.f.overload('android.content.Context');
    com_jifen_qukan_utils_http_i_clz_method_f_znwo.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_f_znwo.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.f(android.content.Context)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_e_fwip = com_jifen_qukan_utils_http_i_clz.e.overload('android.content.Context');
    com_jifen_qukan_utils_http_i_clz_method_e_fwip.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_e_fwip.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'private static com.jifen.framework.http.napi.e com.jifen.qukan.utils.http.i.e(android.content.Context)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_g_xxym = com_jifen_qukan_utils_http_i_clz.g.overload('android.content.Context');
    com_jifen_qukan_utils_http_i_clz_method_g_xxym.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_g_xxym.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.g(android.content.Context)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_mdbl = com_jifen_qukan_utils_http_i_clz.a.overload('java.lang.Object', 'java.lang.ref.WeakReference');
    com_jifen_qukan_utils_http_i_clz_method_a_mdbl.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_mdbl.call(com_jifen_qukan_utils_http_i_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.a(java.lang.Object,java.lang.ref.WeakReference)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_xu9l = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.framework.http.napi.Configure', 'com.jifen.qukan.utils.http.i$i', 'boolean');
    com_jifen_qukan_utils_http_i_clz_method_a_xu9l.implementation = function(v0, v1, v2, v3, v4, v5) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_xu9l.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,int,java.util.List,com.jifen.framework.http.napi.Configure,com.jifen.qukan.utils.http.i$i,boolean)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_znu5 = com_jifen_qukan_utils_http_i_clz.b.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.qukan.utils.http.i$i', 'com.jifen.qukan.utils.http.i$h', 'boolean');
    com_jifen_qukan_utils_http_i_clz_method_b_znu5.implementation = function(v0, v1, v2, v3, v4, v5) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_b_znu5.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.b(android.content.Context,int,java.util.List,com.jifen.qukan.utils.http.i$i,com.jifen.qukan.utils.http.i$h,boolean)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_l637 = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'java.lang.String', 'com.jifen.qukan.utils.http.i$d', 'com.jifen.qukan.utils.http.i$h');
    com_jifen_qukan_utils_http_i_clz_method_a_l637.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_l637.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,java.lang.String,com.jifen.qukan.utils.http.i$d,com.jifen.qukan.utils.http.i$h)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_3t4j = com_jifen_qukan_utils_http_i_clz.b.overload('android.content.Context', 'java.lang.String', 'com.jifen.qukan.utils.http.i$d', 'com.jifen.qukan.utils.http.i$h');
    com_jifen_qukan_utils_http_i_clz_method_b_3t4j.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_b_3t4j.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.b(android.content.Context,java.lang.String,com.jifen.qukan.utils.http.i$d,com.jifen.qukan.utils.http.i$h)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_l41s = com_jifen_qukan_utils_http_i_clz.b.overload('android.content.Context', 'com.jifen.framework.http.napi.HttpRequest', 'int');
    com_jifen_qukan_utils_http_i_clz_method_b_l41s.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_b_l41s.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.b(android.content.Context,com.jifen.framework.http.napi.HttpRequest,int)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_mcm7 = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.qukan.utils.http.i$i', 'com.jifen.qukan.utils.http.i$h', 'boolean');
    com_jifen_qukan_utils_http_i_clz_method_a_mcm7.implementation = function(v0, v1, v2, v3, v4, v5) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_mcm7.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,int,java.util.List,com.jifen.qukan.utils.http.i$i,com.jifen.qukan.utils.http.i$h,boolean)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_ps85 = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'com.jifen.framework.http.napi.HttpRequest', 'int');
    com_jifen_qukan_utils_http_i_clz_method_a_ps85.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_ps85.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'static void com.jifen.qukan.utils.http.i.a(android.content.Context,com.jifen.framework.http.napi.HttpRequest,int)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_drpb = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.qukan.utils.http.i$i', 'com.jifen.qukan.utils.http.i$h');
    com_jifen_qukan_utils_http_i_clz_method_a_drpb.implementation = function(v0, v1, v2, v3, v4) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_drpb.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,int,java.util.List,com.jifen.qukan.utils.http.i$i,com.jifen.qukan.utils.http.i$h)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_26no = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'java.util.List');
    com_jifen_qukan_utils_http_i_clz_method_a_26no.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_26no.call(com_jifen_qukan_utils_http_i_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,java.util.List)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_rj6e = com_jifen_qukan_utils_http_i_clz.b.overload('android.content.Context', 'int', 'com.jifen.framework.http.napi.Configure', 'com.jifen.qukan.utils.http.i$i', 'boolean', 'java.util.List', 'com.jifen.qukan.utils.http.i$a', 'java.lang.String');
    com_jifen_qukan_utils_http_i_clz_method_b_rj6e.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_b_rj6e.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5, v6, v7);
        methodInBeat(invokeId, startTime, 'static void com.jifen.qukan.utils.http.i.b(android.content.Context,int,com.jifen.framework.http.napi.Configure,com.jifen.qukan.utils.http.i$i,boolean,java.util.List,com.jifen.qukan.utils.http.i$a,java.lang.String)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_qyad = com_jifen_qukan_utils_http_i_clz.b.overload('android.content.Context', 'java.util.List');
    com_jifen_qukan_utils_http_i_clz_method_b_qyad.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_b_qyad.call(com_jifen_qukan_utils_http_i_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static void com.jifen.qukan.utils.http.i.b(android.content.Context,java.util.List)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_kpg5 = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'com.jifen.framework.http.napi.Configure', 'com.jifen.qukan.utils.http.i$i', 'boolean', 'java.util.List', 'com.jifen.qukan.utils.http.i$a', 'java.lang.String');
    com_jifen_qukan_utils_http_i_clz_method_a_kpg5.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_kpg5.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5, v6, v7);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,int,com.jifen.framework.http.napi.Configure,com.jifen.qukan.utils.http.i$i,boolean,java.util.List,com.jifen.qukan.utils.http.i$a,java.lang.String)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_c_zncn = com_jifen_qukan_utils_http_i_clz.c.overload('android.content.Context', 'java.util.List');
    com_jifen_qukan_utils_http_i_clz_method_c_zncn.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_c_zncn.call(com_jifen_qukan_utils_http_i_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.c(android.content.Context,java.util.List)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_c_4rnq = com_jifen_qukan_utils_http_i_clz.c.overload('android.content.Context', 'int', 'com.jifen.framework.http.napi.Configure', 'com.jifen.qukan.utils.http.i$i', 'boolean', 'java.util.List', 'com.jifen.qukan.utils.http.i$a', 'java.lang.String');
    com_jifen_qukan_utils_http_i_clz_method_c_4rnq.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_c_4rnq.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5, v6, v7);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.c(android.content.Context,int,com.jifen.framework.http.napi.Configure,com.jifen.qukan.utils.http.i$i,boolean,java.util.List,com.jifen.qukan.utils.http.i$a,java.lang.String)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_so8f = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.qukan.utils.http.i$i', 'boolean', 'com.jifen.qukan.utils.http.i$a');
    com_jifen_qukan_utils_http_i_clz_method_a_so8f.implementation = function(v0, v1, v2, v3, v4, v5) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_so8f.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5);
        methodInBeat(invokeId, startTime, 'public static boolean com.jifen.qukan.utils.http.i.a(android.content.Context,int,java.util.List,com.jifen.qukan.utils.http.i$i,boolean,com.jifen.qukan.utils.http.i$a)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_zs8q = com_jifen_qukan_utils_http_i_clz.b.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.qukan.utils.http.i$i', 'boolean', 'com.jifen.qukan.utils.http.i$a');
    com_jifen_qukan_utils_http_i_clz_method_b_zs8q.implementation = function(v0, v1, v2, v3, v4, v5) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_b_zs8q.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.b(android.content.Context,int,java.util.List,com.jifen.qukan.utils.http.i$i,boolean,com.jifen.qukan.utils.http.i$a)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_va8y = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'java.lang.String', 'java.lang.String', 'com.jifen.qukan.utils.http.i$i');
    com_jifen_qukan_utils_http_i_clz_method_a_va8y.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_va8y.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,java.lang.String,java.lang.String,com.jifen.qukan.utils.http.i$i)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_9la4 = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'com.jifen.qukan.utils.http.p');
    com_jifen_qukan_utils_http_i_clz_method_a_9la4.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_9la4.call(com_jifen_qukan_utils_http_i_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static com.jifen.framework.http.napi.b com.jifen.qukan.utils.http.i.a(android.content.Context,com.jifen.qukan.utils.http.p)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_9n37 = com_jifen_qukan_utils_http_i_clz.b.overload('android.content.Context', 'com.jifen.qukan.utils.http.p');
    com_jifen_qukan_utils_http_i_clz_method_b_9n37.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_b_9n37.call(com_jifen_qukan_utils_http_i_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static java.lang.Object com.jifen.qukan.utils.http.i.b(android.content.Context,com.jifen.qukan.utils.http.p) throws java.io.IOException,java.lang.ClassCastException', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_f06b = com_jifen_qukan_utils_http_i_clz.a.overload('java.util.List');
    com_jifen_qukan_utils_http_i_clz_method_a_f06b.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_f06b.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(java.util.List)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_30y6 = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.framework.http.napi.Configure', 'com.jifen.qukan.utils.http.i$i', 'boolean', 'com.jifen.qukan.utils.http.i$a', 'boolean', 'java.lang.String');
    com_jifen_qukan_utils_http_i_clz_method_a_30y6.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7, v8) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_30y6.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5, v6, v7, v8);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,int,java.util.List,com.jifen.framework.http.napi.Configure,com.jifen.qukan.utils.http.i$i,boolean,com.jifen.qukan.utils.http.i$a,boolean,java.lang.String)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_25f7 = com_jifen_qukan_utils_http_i_clz.b.overload('int');
    com_jifen_qukan_utils_http_i_clz_method_b_25f7.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_b_25f7.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'private static boolean com.jifen.qukan.utils.http.i.b(int)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_d_gd3c = com_jifen_qukan_utils_http_i_clz.d.overload('com.jifen.framework.http.napi.Method', 'int', 'com.jifen.qkbase.main.utils.c', 'com.jifen.qukan.utils.http.i$i');
    com_jifen_qukan_utils_http_i_clz_method_d_gd3c.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_d_gd3c.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'static void com.jifen.qukan.utils.http.i.d(com.jifen.framework.http.napi.Method,int,com.jifen.qkbase.main.utils.c,com.jifen.qukan.utils.http.i$i)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_o0f3 = com_jifen_qukan_utils_http_i_clz.a.overload('int');
    com_jifen_qukan_utils_http_i_clz_method_a_o0f3.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_o0f3.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'private static boolean com.jifen.qukan.utils.http.i.a(int)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_c_qk07 = com_jifen_qukan_utils_http_i_clz.c.overload('com.jifen.framework.http.napi.Method', 'int', 'com.jifen.qkbase.main.utils.c', 'com.jifen.qukan.utils.http.i$i');
    com_jifen_qukan_utils_http_i_clz_method_c_qk07.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_c_qk07.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'static void com.jifen.qukan.utils.http.i.c(com.jifen.framework.http.napi.Method,int,com.jifen.qkbase.main.utils.c,com.jifen.qukan.utils.http.i$i)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_00mu = com_jifen_qukan_utils_http_i_clz.b.overload('com.jifen.framework.http.napi.Method', 'int', 'com.jifen.qkbase.main.utils.c', 'com.jifen.qukan.utils.http.i$i');
    com_jifen_qukan_utils_http_i_clz_method_b_00mu.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_b_00mu.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.b(com.jifen.framework.http.napi.Method,int,com.jifen.qkbase.main.utils.c,com.jifen.qukan.utils.http.i$i)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_kwg4 = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'java.util.Map', 'java.util.List', 'com.jifen.qukan.utils.http.i$i', 'com.jifen.qukan.utils.http.i$a', 'boolean', 'boolean');
    com_jifen_qukan_utils_http_i_clz_method_a_kwg4.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_kwg4.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5, v6, v7);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,int,java.util.Map,java.util.List,com.jifen.qukan.utils.http.i$i,com.jifen.qukan.utils.http.i$a,boolean,boolean)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_xcls = com_jifen_qukan_utils_http_i_clz.a.overload('com.jifen.framework.http.napi.Method', 'int', 'com.jifen.qkbase.main.utils.c', 'com.jifen.qukan.utils.http.i$i');
    com_jifen_qukan_utils_http_i_clz_method_a_xcls.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_xcls.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(com.jifen.framework.http.napi.Method,int,com.jifen.qkbase.main.utils.c,com.jifen.qukan.utils.http.i$i)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_ddh2 = com_jifen_qukan_utils_http_i_clz.a.overload('java.lang.String', 'com.jifen.framework.http.napi.Configure');
    com_jifen_qukan_utils_http_i_clz_method_a_ddh2.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_ddh2.call(com_jifen_qukan_utils_http_i_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static com.jifen.framework.http.napi.d com.jifen.qukan.utils.http.i.a(java.lang.String,com.jifen.framework.http.napi.Configure) throws java.io.IOException', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_3wpn = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'java.lang.String');
    com_jifen_qukan_utils_http_i_clz_method_a_3wpn.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_3wpn.call(com_jifen_qukan_utils_http_i_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,java.lang.String)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_d92r = com_jifen_qukan_utils_http_i_clz.b.overload('java.lang.Object');
    com_jifen_qukan_utils_http_i_clz_method_b_d92r.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_b_d92r.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.b(java.lang.Object)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_g6f8 = com_jifen_qukan_utils_http_i_clz.a.overload('java.lang.Object');
    com_jifen_qukan_utils_http_i_clz_method_a_g6f8.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_g6f8.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(java.lang.Object)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_f_px7z = com_jifen_qukan_utils_http_i_clz.f.overload('com.jifen.framework.http.napi.Method', 'int', 'com.jifen.qkbase.main.utils.c', 'com.jifen.qukan.utils.http.i$i');
    com_jifen_qukan_utils_http_i_clz_method_f_px7z.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_f_px7z.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.f(com.jifen.framework.http.napi.Method,int,com.jifen.qkbase.main.utils.c,com.jifen.qukan.utils.http.i$i)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_pcas = com_jifen_qukan_utils_http_i_clz.a.overload('java.lang.String', 'java.lang.String', 'boolean');
    com_jifen_qukan_utils_http_i_clz_method_a_pcas.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_pcas.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public static java.lang.String com.jifen.qukan.utils.http.i.a(java.lang.String,java.lang.String,boolean)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_e_8u4q = com_jifen_qukan_utils_http_i_clz.e.overload('com.jifen.framework.http.napi.Method', 'int', 'com.jifen.qkbase.main.utils.c', 'com.jifen.qukan.utils.http.i$i');
    com_jifen_qukan_utils_http_i_clz_method_e_8u4q.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_e_8u4q.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.e(com.jifen.framework.http.napi.Method,int,com.jifen.qkbase.main.utils.c,com.jifen.qukan.utils.http.i$i)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_rddd = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.qukan.utils.http.i$i', 'boolean');
    com_jifen_qukan_utils_http_i_clz_method_a_rddd.implementation = function(v0, v1, v2, v3, v4) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_rddd.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,int,java.util.List,com.jifen.qukan.utils.http.i$i,boolean)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_v7fc = com_jifen_qukan_utils_http_i_clz.a.overload('com.jifen.framework.http.napi.Method', 'int', 'java.util.List', 'com.jifen.qukan.utils.http.i$i');
    com_jifen_qukan_utils_http_i_clz_method_a_v7fc.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_v7fc.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.a(com.jifen.framework.http.napi.Method,int,java.util.List,com.jifen.qukan.utils.http.i$i)', executor);
    };
});