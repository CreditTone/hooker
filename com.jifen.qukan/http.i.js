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
    var com_jifen_qukan_utils_http_i_clz_method_a_yfdj = com_jifen_qukan_utils_http_i_clz.a.overload();
    com_jifen_qukan_utils_http_i_clz_method_a_yfdj.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_yfdj.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'public static boolean com.jifen.qukan.utils.http.i.a()', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_ozqc = com_jifen_qukan_utils_http_i_clz.b.overload();
    com_jifen_qukan_utils_http_i_clz_method_b_ozqc.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_b_ozqc.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.b()', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_4bpt = com_jifen_qukan_utils_http_i_clz.b.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.qukan.utils.http.i$i', 'boolean');
    com_jifen_qukan_utils_http_i_clz_method_b_4bpt.implementation = function(v0, v1, v2, v3, v4) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_b_4bpt.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.b(android.content.Context,int,java.util.List,com.jifen.qukan.utils.http.i$i,boolean)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_c_vsue = com_jifen_qukan_utils_http_i_clz.c.overload();
    com_jifen_qukan_utils_http_i_clz_method_c_vsue.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_c_vsue.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'public static synchronized void com.jifen.qukan.utils.http.i.c()', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_d_17yp = com_jifen_qukan_utils_http_i_clz.d.overload();
    com_jifen_qukan_utils_http_i_clz_method_d_17yp.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_d_17yp.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.d()', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_e_78zr = com_jifen_qukan_utils_http_i_clz.e.overload();
    com_jifen_qukan_utils_http_i_clz_method_e_78zr.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_e_78zr.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'public static boolean com.jifen.qukan.utils.http.i.e()', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_fw3t = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.framework.http.napi.Configure', 'com.jifen.qukan.utils.http.i$i', 'boolean', 'com.jifen.qukan.utils.http.i$a', 'boolean');
    com_jifen_qukan_utils_http_i_clz_method_a_fw3t.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_fw3t.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5, v6, v7);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,int,java.util.List,com.jifen.framework.http.napi.Configure,com.jifen.qukan.utils.http.i$i,boolean,com.jifen.qukan.utils.http.i$a,boolean)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_f_tgtd = com_jifen_qukan_utils_http_i_clz.f.overload();
    com_jifen_qukan_utils_http_i_clz_method_f_tgtd.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_f_tgtd.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'static void com.jifen.qukan.utils.http.i.f()', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_g_4269 = com_jifen_qukan_utils_http_i_clz.g.overload();
    com_jifen_qukan_utils_http_i_clz_method_g_4269.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_g_4269.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'static java.util.List com.jifen.qukan.utils.http.i.g()', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_h_dt53 = com_jifen_qukan_utils_http_i_clz.h.overload();
    com_jifen_qukan_utils_http_i_clz_method_h_dt53.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_h_dt53.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'static void com.jifen.qukan.utils.http.i.h()', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_njfa = com_jifen_qukan_utils_http_i_clz.b.overload('java.lang.String', 'java.lang.String', 'java.util.concurrent.atomic.AtomicInteger');
    com_jifen_qukan_utils_http_i_clz_method_b_njfa.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_b_njfa.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public static java.lang.String com.jifen.qukan.utils.http.i.b(java.lang.String,java.lang.String,java.util.concurrent.atomic.AtomicInteger)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_i_w4h8 = com_jifen_qukan_utils_http_i_clz.i.overload();
    com_jifen_qukan_utils_http_i_clz_method_i_w4h8.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_i_w4h8.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'static int com.jifen.qukan.utils.http.i.i()', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_hfw7 = com_jifen_qukan_utils_http_i_clz.a.overload('java.lang.String', 'java.lang.String', 'java.util.concurrent.atomic.AtomicInteger');
    com_jifen_qukan_utils_http_i_clz_method_a_hfw7.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_hfw7.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public static java.lang.String com.jifen.qukan.utils.http.i.a(java.lang.String,java.lang.String,java.util.concurrent.atomic.AtomicInteger) throws java.lang.Throwable', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_j_v545 = com_jifen_qukan_utils_http_i_clz.j.overload();
    com_jifen_qukan_utils_http_i_clz_method_j_v545.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_j_v545.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'static int com.jifen.qukan.utils.http.i.j()', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_k_0pco = com_jifen_qukan_utils_http_i_clz.k.overload();
    com_jifen_qukan_utils_http_i_clz_method_k_0pco.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_k_0pco.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'static java.util.List com.jifen.qukan.utils.http.i.k()', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_l_5xwc = com_jifen_qukan_utils_http_i_clz.l.overload();
    com_jifen_qukan_utils_http_i_clz_method_l_5xwc.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_l_5xwc.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'private static com.jifen.framework.http.napi.e com.jifen.qukan.utils.http.i.l()', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_m_dgjc = com_jifen_qukan_utils_http_i_clz.m.overload();
    com_jifen_qukan_utils_http_i_clz_method_m_dgjc.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_m_dgjc.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'private static java.lang.String com.jifen.qukan.utils.http.i.m()', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_n_tuf7 = com_jifen_qukan_utils_http_i_clz.n.overload();
    com_jifen_qukan_utils_http_i_clz_method_n_tuf7.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_n_tuf7.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'private static java.lang.String com.jifen.qukan.utils.http.i.n()', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_o_irey = com_jifen_qukan_utils_http_i_clz.o.overload();
    com_jifen_qukan_utils_http_i_clz_method_o_irey.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_o_irey.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'private static java.lang.String com.jifen.qukan.utils.http.i.o()', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_c5wb = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.qukan.utils.http.i$i', 'com.jifen.qukan.utils.http.i$h', 'boolean', 'boolean');
    com_jifen_qukan_utils_http_i_clz_method_a_c5wb.implementation = function(v0, v1, v2, v3, v4, v5, v6) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_c5wb.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5, v6);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,int,java.util.List,com.jifen.qukan.utils.http.i$i,com.jifen.qukan.utils.http.i$h,boolean,boolean)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_p_nvmr = com_jifen_qukan_utils_http_i_clz.p.overload();
    com_jifen_qukan_utils_http_i_clz_method_p_nvmr.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_p_nvmr.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'private static boolean com.jifen.qukan.utils.http.i.p()', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_q_n73g = com_jifen_qukan_utils_http_i_clz.q.overload();
    com_jifen_qukan_utils_http_i_clz_method_q_n73g.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_q_n73g.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.q()', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_r_cane = com_jifen_qukan_utils_http_i_clz.r.overload();
    com_jifen_qukan_utils_http_i_clz_method_r_cane.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_r_cane.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.r()', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_s_ate8 = com_jifen_qukan_utils_http_i_clz.s.overload();
    com_jifen_qukan_utils_http_i_clz_method_s_ate8.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_s_ate8.call(com_jifen_qukan_utils_http_i_clz);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.s()', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_2l18 = com_jifen_qukan_utils_http_i_clz.a.overload('java.lang.String', 'com.jifen.framework.http.napi.Method', 'java.util.List', 'boolean');
    com_jifen_qukan_utils_http_i_clz_method_a_2l18.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_2l18.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        log(v0);
        log(v1);
        log(v2);
        log(v3);
        methodInBeat(invokeId, startTime, 'public static java.lang.String com.jifen.qukan.utils.http.i.a(java.lang.String,com.jifen.framework.http.napi.Method,java.util.List,boolean)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_pio8 = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'java.util.Map', 'java.util.List', 'com.jifen.qukan.utils.http.i$i', 'boolean');
    com_jifen_qukan_utils_http_i_clz_method_a_pio8.implementation = function(v0, v1, v2, v3, v4, v5) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_pio8.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,int,java.util.Map,java.util.List,com.jifen.qukan.utils.http.i$i,boolean)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_u6ci = com_jifen_qukan_utils_http_i_clz.a.overload('java.lang.String');
    com_jifen_qukan_utils_http_i_clz_method_a_u6ci.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_u6ci.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'private static boolean com.jifen.qukan.utils.http.i.a(java.lang.String)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_k5b9 = com_jifen_qukan_utils_http_i_clz.a.overload('java.lang.String', 'com.jifen.framework.http.napi.Method', 'java.util.List');
    com_jifen_qukan_utils_http_i_clz_method_a_k5b9.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_k5b9.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public static java.lang.String com.jifen.qukan.utils.http.i.a(java.lang.String,com.jifen.framework.http.napi.Method,java.util.List)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_ro18 = com_jifen_qukan_utils_http_i_clz.a.overload('java.lang.String', 'com.jifen.framework.http.napi.HttpRequestHandler');
    com_jifen_qukan_utils_http_i_clz_method_a_ro18.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_ro18.call(com_jifen_qukan_utils_http_i_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static boolean com.jifen.qukan.utils.http.i.a(java.lang.String,com.jifen.framework.http.napi.HttpRequestHandler)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_faf4 = com_jifen_qukan_utils_http_i_clz.b.overload('android.content.Context', 'java.lang.Throwable');
    com_jifen_qukan_utils_http_i_clz_method_b_faf4.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_b_faf4.call(com_jifen_qukan_utils_http_i_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'private static java.lang.String com.jifen.qukan.utils.http.i.b(android.content.Context,java.lang.Throwable)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_11ay = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'java.lang.Throwable');
    com_jifen_qukan_utils_http_i_clz_method_a_11ay.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_11ay.call(com_jifen_qukan_utils_http_i_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static java.lang.String com.jifen.qukan.utils.http.i.a(android.content.Context,java.lang.Throwable)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_025s = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'java.util.Map', 'java.util.List', 'com.jifen.qukan.utils.http.i$i', 'boolean', 'com.jifen.qukan.utils.http.i$a');
    com_jifen_qukan_utils_http_i_clz_method_a_025s.implementation = function(v0, v1, v2, v3, v4, v5, v6) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_025s.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5, v6);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,int,java.util.Map,java.util.List,com.jifen.qukan.utils.http.i$i,boolean,com.jifen.qukan.utils.http.i$a)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_w6zk = com_jifen_qukan_utils_http_i_clz.b.overload('android.content.Context');
    com_jifen_qukan_utils_http_i_clz_method_b_w6zk.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_b_w6zk.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'public static com.jifen.framework.http.napi.d com.jifen.qukan.utils.http.i.b(android.content.Context) throws java.io.IOException,java.lang.ClassCastException', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_pci8 = com_jifen_qukan_utils_http_i_clz.a.overload('java.util.List', 'boolean');
    com_jifen_qukan_utils_http_i_clz_method_a_pci8.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_pci8.call(com_jifen_qukan_utils_http_i_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static java.lang.String com.jifen.qukan.utils.http.i.a(java.util.List,boolean)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_hn47 = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context');
    com_jifen_qukan_utils_http_i_clz_method_a_hn47.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_hn47.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'public static synchronized void com.jifen.qukan.utils.http.i.a(android.content.Context)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_c_jv46 = com_jifen_qukan_utils_http_i_clz.c.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.qukan.utils.http.i$i');
    com_jifen_qukan_utils_http_i_clz_method_c_jv46.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_c_jv46.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.c(android.content.Context,int,java.util.List,com.jifen.qukan.utils.http.i$i)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_majn = com_jifen_qukan_utils_http_i_clz.b.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.qukan.utils.http.i$i');
    com_jifen_qukan_utils_http_i_clz_method_b_majn.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_b_majn.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public static boolean com.jifen.qukan.utils.http.i.b(android.content.Context,int,java.util.List,com.jifen.qukan.utils.http.i$i)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_d_89yh = com_jifen_qukan_utils_http_i_clz.d.overload('android.content.Context');
    com_jifen_qukan_utils_http_i_clz_method_d_89yh.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_d_89yh.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'static void com.jifen.qukan.utils.http.i.d(android.content.Context)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_qa49 = com_jifen_qukan_utils_http_i_clz.a.overload('java.util.Map');
    com_jifen_qukan_utils_http_i_clz_method_a_qa49.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_qa49.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'public static java.util.Map com.jifen.qukan.utils.http.i.a(java.util.Map)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_q0sw = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.qukan.utils.http.i$i');
    com_jifen_qukan_utils_http_i_clz_method_a_q0sw.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_q0sw.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,int,java.util.List,com.jifen.qukan.utils.http.i$i)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_itoq = com_jifen_qukan_utils_http_i_clz.a.overload('java.lang.String', 'com.jifen.qukan.utils.http.i$d', 'com.jifen.qukan.utils.http.i$h', 'java.io.File');
    com_jifen_qukan_utils_http_i_clz_method_a_itoq.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_itoq.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(java.lang.String,com.jifen.qukan.utils.http.i$d,com.jifen.qukan.utils.http.i$h,java.io.File)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_c_0yyk = com_jifen_qukan_utils_http_i_clz.c.overload('android.content.Context');
    com_jifen_qukan_utils_http_i_clz_method_c_0yyk.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_c_0yyk.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.c(android.content.Context)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_f_zdeu = com_jifen_qukan_utils_http_i_clz.f.overload('android.content.Context');
    com_jifen_qukan_utils_http_i_clz_method_f_zdeu.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_f_zdeu.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.f(android.content.Context)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_e_c5jx = com_jifen_qukan_utils_http_i_clz.e.overload('android.content.Context');
    com_jifen_qukan_utils_http_i_clz_method_e_c5jx.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_e_c5jx.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'private static com.jifen.framework.http.napi.e com.jifen.qukan.utils.http.i.e(android.content.Context)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_g_lxyi = com_jifen_qukan_utils_http_i_clz.g.overload('android.content.Context');
    com_jifen_qukan_utils_http_i_clz_method_g_lxyi.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_g_lxyi.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.g(android.content.Context)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_6s5h = com_jifen_qukan_utils_http_i_clz.a.overload('java.lang.Object', 'java.lang.ref.WeakReference');
    com_jifen_qukan_utils_http_i_clz_method_a_6s5h.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_6s5h.call(com_jifen_qukan_utils_http_i_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.a(java.lang.Object,java.lang.ref.WeakReference)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_94j4 = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.framework.http.napi.Configure', 'com.jifen.qukan.utils.http.i$i', 'boolean');
    com_jifen_qukan_utils_http_i_clz_method_a_94j4.implementation = function(v0, v1, v2, v3, v4, v5) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_94j4.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,int,java.util.List,com.jifen.framework.http.napi.Configure,com.jifen.qukan.utils.http.i$i,boolean)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_lyar = com_jifen_qukan_utils_http_i_clz.b.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.qukan.utils.http.i$i', 'com.jifen.qukan.utils.http.i$h', 'boolean');
    com_jifen_qukan_utils_http_i_clz_method_b_lyar.implementation = function(v0, v1, v2, v3, v4, v5) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_b_lyar.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.b(android.content.Context,int,java.util.List,com.jifen.qukan.utils.http.i$i,com.jifen.qukan.utils.http.i$h,boolean)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_e7bj = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'java.lang.String', 'com.jifen.qukan.utils.http.i$d', 'com.jifen.qukan.utils.http.i$h');
    com_jifen_qukan_utils_http_i_clz_method_a_e7bj.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_e7bj.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,java.lang.String,com.jifen.qukan.utils.http.i$d,com.jifen.qukan.utils.http.i$h)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_27yy = com_jifen_qukan_utils_http_i_clz.b.overload('android.content.Context', 'java.lang.String', 'com.jifen.qukan.utils.http.i$d', 'com.jifen.qukan.utils.http.i$h');
    com_jifen_qukan_utils_http_i_clz_method_b_27yy.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_b_27yy.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.b(android.content.Context,java.lang.String,com.jifen.qukan.utils.http.i$d,com.jifen.qukan.utils.http.i$h)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_78rr = com_jifen_qukan_utils_http_i_clz.b.overload('android.content.Context', 'com.jifen.framework.http.napi.HttpRequest', 'int');
    com_jifen_qukan_utils_http_i_clz_method_b_78rr.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_b_78rr.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.b(android.content.Context,com.jifen.framework.http.napi.HttpRequest,int)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_bjkd = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.qukan.utils.http.i$i', 'com.jifen.qukan.utils.http.i$h', 'boolean');
    com_jifen_qukan_utils_http_i_clz_method_a_bjkd.implementation = function(v0, v1, v2, v3, v4, v5) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_bjkd.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,int,java.util.List,com.jifen.qukan.utils.http.i$i,com.jifen.qukan.utils.http.i$h,boolean)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_7ng7 = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'com.jifen.framework.http.napi.HttpRequest', 'int');
    com_jifen_qukan_utils_http_i_clz_method_a_7ng7.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_7ng7.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'static void com.jifen.qukan.utils.http.i.a(android.content.Context,com.jifen.framework.http.napi.HttpRequest,int)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_w2n9 = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.qukan.utils.http.i$i', 'com.jifen.qukan.utils.http.i$h');
    com_jifen_qukan_utils_http_i_clz_method_a_w2n9.implementation = function(v0, v1, v2, v3, v4) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_w2n9.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,int,java.util.List,com.jifen.qukan.utils.http.i$i,com.jifen.qukan.utils.http.i$h)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_89u8 = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'java.util.List');
    com_jifen_qukan_utils_http_i_clz_method_a_89u8.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_89u8.call(com_jifen_qukan_utils_http_i_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,java.util.List)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_y6dj = com_jifen_qukan_utils_http_i_clz.b.overload('android.content.Context', 'int', 'com.jifen.framework.http.napi.Configure', 'com.jifen.qukan.utils.http.i$i', 'boolean', 'java.util.List', 'com.jifen.qukan.utils.http.i$a', 'java.lang.String');
    com_jifen_qukan_utils_http_i_clz_method_b_y6dj.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_b_y6dj.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5, v6, v7);
        methodInBeat(invokeId, startTime, 'static void com.jifen.qukan.utils.http.i.b(android.content.Context,int,com.jifen.framework.http.napi.Configure,com.jifen.qukan.utils.http.i$i,boolean,java.util.List,com.jifen.qukan.utils.http.i$a,java.lang.String)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_0qn7 = com_jifen_qukan_utils_http_i_clz.b.overload('android.content.Context', 'java.util.List');
    com_jifen_qukan_utils_http_i_clz_method_b_0qn7.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_b_0qn7.call(com_jifen_qukan_utils_http_i_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static void com.jifen.qukan.utils.http.i.b(android.content.Context,java.util.List)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_sn1c = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'com.jifen.framework.http.napi.Configure', 'com.jifen.qukan.utils.http.i$i', 'boolean', 'java.util.List', 'com.jifen.qukan.utils.http.i$a', 'java.lang.String');
    com_jifen_qukan_utils_http_i_clz_method_a_sn1c.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_sn1c.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5, v6, v7);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,int,com.jifen.framework.http.napi.Configure,com.jifen.qukan.utils.http.i$i,boolean,java.util.List,com.jifen.qukan.utils.http.i$a,java.lang.String)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_c_l2eb = com_jifen_qukan_utils_http_i_clz.c.overload('android.content.Context', 'java.util.List');
    com_jifen_qukan_utils_http_i_clz_method_c_l2eb.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_c_l2eb.call(com_jifen_qukan_utils_http_i_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.c(android.content.Context,java.util.List)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_c_41ie = com_jifen_qukan_utils_http_i_clz.c.overload('android.content.Context', 'int', 'com.jifen.framework.http.napi.Configure', 'com.jifen.qukan.utils.http.i$i', 'boolean', 'java.util.List', 'com.jifen.qukan.utils.http.i$a', 'java.lang.String');
    com_jifen_qukan_utils_http_i_clz_method_c_41ie.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_c_41ie.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5, v6, v7);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.c(android.content.Context,int,com.jifen.framework.http.napi.Configure,com.jifen.qukan.utils.http.i$i,boolean,java.util.List,com.jifen.qukan.utils.http.i$a,java.lang.String)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_qpag = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.qukan.utils.http.i$i', 'boolean', 'com.jifen.qukan.utils.http.i$a');
    com_jifen_qukan_utils_http_i_clz_method_a_qpag.implementation = function(v0, v1, v2, v3, v4, v5) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_qpag.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5);
        methodInBeat(invokeId, startTime, 'public static boolean com.jifen.qukan.utils.http.i.a(android.content.Context,int,java.util.List,com.jifen.qukan.utils.http.i$i,boolean,com.jifen.qukan.utils.http.i$a)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_i9j6 = com_jifen_qukan_utils_http_i_clz.b.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.qukan.utils.http.i$i', 'boolean', 'com.jifen.qukan.utils.http.i$a');
    com_jifen_qukan_utils_http_i_clz_method_b_i9j6.implementation = function(v0, v1, v2, v3, v4, v5) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_b_i9j6.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.b(android.content.Context,int,java.util.List,com.jifen.qukan.utils.http.i$i,boolean,com.jifen.qukan.utils.http.i$a)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_m9k6 = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'java.lang.String', 'java.lang.String', 'com.jifen.qukan.utils.http.i$i');
    com_jifen_qukan_utils_http_i_clz_method_a_m9k6.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_m9k6.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,java.lang.String,java.lang.String,com.jifen.qukan.utils.http.i$i)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_lujn = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'com.jifen.qukan.utils.http.p');
    com_jifen_qukan_utils_http_i_clz_method_a_lujn.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_lujn.call(com_jifen_qukan_utils_http_i_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static com.jifen.framework.http.napi.b com.jifen.qukan.utils.http.i.a(android.content.Context,com.jifen.qukan.utils.http.p)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_ghiw = com_jifen_qukan_utils_http_i_clz.b.overload('android.content.Context', 'com.jifen.qukan.utils.http.p');
    com_jifen_qukan_utils_http_i_clz_method_b_ghiw.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_b_ghiw.call(com_jifen_qukan_utils_http_i_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static java.lang.Object com.jifen.qukan.utils.http.i.b(android.content.Context,com.jifen.qukan.utils.http.p) throws java.io.IOException,java.lang.ClassCastException', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_5v7z = com_jifen_qukan_utils_http_i_clz.a.overload('java.util.List');
    com_jifen_qukan_utils_http_i_clz_method_a_5v7z.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_5v7z.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(java.util.List)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_obfh = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.framework.http.napi.Configure', 'com.jifen.qukan.utils.http.i$i', 'boolean', 'com.jifen.qukan.utils.http.i$a', 'boolean', 'java.lang.String');
    com_jifen_qukan_utils_http_i_clz_method_a_obfh.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7, v8) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_obfh.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5, v6, v7, v8);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,int,java.util.List,com.jifen.framework.http.napi.Configure,com.jifen.qukan.utils.http.i$i,boolean,com.jifen.qukan.utils.http.i$a,boolean,java.lang.String)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_z1qb = com_jifen_qukan_utils_http_i_clz.b.overload('int');
    com_jifen_qukan_utils_http_i_clz_method_b_z1qb.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_b_z1qb.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'private static boolean com.jifen.qukan.utils.http.i.b(int)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_d_8q98 = com_jifen_qukan_utils_http_i_clz.d.overload('com.jifen.framework.http.napi.Method', 'int', 'com.jifen.qkbase.main.utils.c', 'com.jifen.qukan.utils.http.i$i');
    com_jifen_qukan_utils_http_i_clz_method_d_8q98.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_d_8q98.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'static void com.jifen.qukan.utils.http.i.d(com.jifen.framework.http.napi.Method,int,com.jifen.qkbase.main.utils.c,com.jifen.qukan.utils.http.i$i)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_qqdp = com_jifen_qukan_utils_http_i_clz.a.overload('int');
    com_jifen_qukan_utils_http_i_clz_method_a_qqdp.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_qqdp.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'private static boolean com.jifen.qukan.utils.http.i.a(int)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_c_96mm = com_jifen_qukan_utils_http_i_clz.c.overload('com.jifen.framework.http.napi.Method', 'int', 'com.jifen.qkbase.main.utils.c', 'com.jifen.qukan.utils.http.i$i');
    com_jifen_qukan_utils_http_i_clz_method_c_96mm.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_c_96mm.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'static void com.jifen.qukan.utils.http.i.c(com.jifen.framework.http.napi.Method,int,com.jifen.qkbase.main.utils.c,com.jifen.qukan.utils.http.i$i)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_lnnb = com_jifen_qukan_utils_http_i_clz.b.overload('com.jifen.framework.http.napi.Method', 'int', 'com.jifen.qkbase.main.utils.c', 'com.jifen.qukan.utils.http.i$i');
    com_jifen_qukan_utils_http_i_clz_method_b_lnnb.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_b_lnnb.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.b(com.jifen.framework.http.napi.Method,int,com.jifen.qkbase.main.utils.c,com.jifen.qukan.utils.http.i$i)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_afbd = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'java.util.Map', 'java.util.List', 'com.jifen.qukan.utils.http.i$i', 'com.jifen.qukan.utils.http.i$a', 'boolean', 'boolean');
    com_jifen_qukan_utils_http_i_clz_method_a_afbd.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_afbd.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4, v5, v6, v7);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,int,java.util.Map,java.util.List,com.jifen.qukan.utils.http.i$i,com.jifen.qukan.utils.http.i$a,boolean,boolean)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_9qtw = com_jifen_qukan_utils_http_i_clz.a.overload('com.jifen.framework.http.napi.Method', 'int', 'com.jifen.qkbase.main.utils.c', 'com.jifen.qukan.utils.http.i$i');
    com_jifen_qukan_utils_http_i_clz_method_a_9qtw.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_9qtw.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(com.jifen.framework.http.napi.Method,int,com.jifen.qkbase.main.utils.c,com.jifen.qukan.utils.http.i$i)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_q02m = com_jifen_qukan_utils_http_i_clz.a.overload('java.lang.String', 'com.jifen.framework.http.napi.Configure');
    com_jifen_qukan_utils_http_i_clz_method_a_q02m.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_q02m.call(com_jifen_qukan_utils_http_i_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static com.jifen.framework.http.napi.d com.jifen.qukan.utils.http.i.a(java.lang.String,com.jifen.framework.http.napi.Configure) throws java.io.IOException', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_8wj6 = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'java.lang.String');
    com_jifen_qukan_utils_http_i_clz_method_a_8wj6.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_8wj6.call(com_jifen_qukan_utils_http_i_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,java.lang.String)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_b_0mpi = com_jifen_qukan_utils_http_i_clz.b.overload('java.lang.Object');
    com_jifen_qukan_utils_http_i_clz_method_b_0mpi.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_b_0mpi.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.b(java.lang.Object)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_99w8 = com_jifen_qukan_utils_http_i_clz.a.overload('java.lang.Object');
    com_jifen_qukan_utils_http_i_clz_method_a_99w8.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_99w8.call(com_jifen_qukan_utils_http_i_clz, v0);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(java.lang.Object)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_f_c35e = com_jifen_qukan_utils_http_i_clz.f.overload('com.jifen.framework.http.napi.Method', 'int', 'com.jifen.qkbase.main.utils.c', 'com.jifen.qukan.utils.http.i$i');
    com_jifen_qukan_utils_http_i_clz_method_f_c35e.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_f_c35e.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.f(com.jifen.framework.http.napi.Method,int,com.jifen.qkbase.main.utils.c,com.jifen.qukan.utils.http.i$i)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_urzi = com_jifen_qukan_utils_http_i_clz.a.overload('java.lang.String', 'java.lang.String', 'boolean');
    com_jifen_qukan_utils_http_i_clz_method_a_urzi.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_utils_http_i_clz_method_a_urzi.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public static java.lang.String com.jifen.qukan.utils.http.i.a(java.lang.String,java.lang.String,boolean)', executor);
        return ret;
    };
    var com_jifen_qukan_utils_http_i_clz_method_e_filq = com_jifen_qukan_utils_http_i_clz.e.overload('com.jifen.framework.http.napi.Method', 'int', 'com.jifen.qkbase.main.utils.c', 'com.jifen.qukan.utils.http.i$i');
    com_jifen_qukan_utils_http_i_clz_method_e_filq.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_e_filq.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.e(com.jifen.framework.http.napi.Method,int,com.jifen.qkbase.main.utils.c,com.jifen.qukan.utils.http.i$i)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_8gdi = com_jifen_qukan_utils_http_i_clz.a.overload('android.content.Context', 'int', 'java.util.List', 'com.jifen.qukan.utils.http.i$i', 'boolean');
    com_jifen_qukan_utils_http_i_clz_method_a_8gdi.implementation = function(v0, v1, v2, v3, v4) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_8gdi.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3, v4);
        methodInBeat(invokeId, startTime, 'public static void com.jifen.qukan.utils.http.i.a(android.content.Context,int,java.util.List,com.jifen.qukan.utils.http.i$i,boolean)', executor);
    };
    var com_jifen_qukan_utils_http_i_clz_method_a_s1rh = com_jifen_qukan_utils_http_i_clz.a.overload('com.jifen.framework.http.napi.Method', 'int', 'java.util.List', 'com.jifen.qukan.utils.http.i$i');
    com_jifen_qukan_utils_http_i_clz_method_a_s1rh.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_jifen_qukan_utils_http_i_clz_method_a_s1rh.call(com_jifen_qukan_utils_http_i_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'private static void com.jifen.qukan.utils.http.i.a(com.jifen.framework.http.napi.Method,int,java.util.List,com.jifen.qukan.utils.http.i$i)', executor);
    };
});