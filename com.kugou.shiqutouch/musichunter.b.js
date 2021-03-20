//com.kugou.framework.musichunter.b:?
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
    console.log("------------startFlag:" + invokeId + ",objectHash:"+executor+",thread(id,name):(" + currentThread.getId() +"," + currentThread.getName() + "),timestamp:" + startTime+"---------------");
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
    loadDexfile('/data/user/0/com.kugou.shiqutouch/xinit/'+dexfile);
};

Java.perform(function() {
    var com_kugou_framework_musichunter_b_clz = Java.use('com.kugou.framework.musichunter.b');
    var com_kugou_framework_musichunter_b_clz_method_a_gph5 = com_kugou_framework_musichunter_b_clz.a.overload('com.kugou.framework.musichunter.fp2013.b', 'int', '[B', 'boolean', 'int');
    com_kugou_framework_musichunter_b_clz_method_a_gph5.implementation = function(v0, v1, v2, v3, v4) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_a_gph5.call(this, v0, v1, v2, v3, v4);
        methodInBeat(invokeId, startTime, 'private void com.kugou.framework.musichunter.b.a(com.kugou.framework.musichunter.fp2013.b,int,byte[],boolean,int)', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_a_1hv4 = com_kugou_framework_musichunter_b_clz.a.overload();
    com_kugou_framework_musichunter_b_clz_method_a_1hv4.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_a_1hv4.call(this);
        methodInBeat(invokeId, startTime, 'public void com.kugou.framework.musichunter.b.a()', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_b_4lbn = com_kugou_framework_musichunter_b_clz.b.overload();
    com_kugou_framework_musichunter_b_clz_method_b_4lbn.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_b_4lbn.call(this);
        methodInBeat(invokeId, startTime, 'public void com.kugou.framework.musichunter.b.b()', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_c_mkae = com_kugou_framework_musichunter_b_clz.c.overload();
    com_kugou_framework_musichunter_b_clz_method_c_mkae.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_c_mkae.call(this);
        methodInBeat(invokeId, startTime, 'public void com.kugou.framework.musichunter.b.c()', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_d_8ymi = com_kugou_framework_musichunter_b_clz.d.overload();
    com_kugou_framework_musichunter_b_clz_method_d_8ymi.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_d_8ymi.call(this);
        methodInBeat(invokeId, startTime, 'public void com.kugou.framework.musichunter.b.d()', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_e_ygnj = com_kugou_framework_musichunter_b_clz.e.overload();
    com_kugou_framework_musichunter_b_clz_method_e_ygnj.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_kugou_framework_musichunter_b_clz_method_e_ygnj.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.kugou.framework.musichunter.b.e()', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_f_3fg7 = com_kugou_framework_musichunter_b_clz.f.overload();
    com_kugou_framework_musichunter_b_clz_method_f_3fg7.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_f_3fg7.call(this);
        methodInBeat(invokeId, startTime, 'public void com.kugou.framework.musichunter.b.f()', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_g_he9l = com_kugou_framework_musichunter_b_clz.g.overload();
    com_kugou_framework_musichunter_b_clz_method_g_he9l.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_kugou_framework_musichunter_b_clz_method_g_he9l.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.kugou.framework.musichunter.b.g()', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_h_mnko = com_kugou_framework_musichunter_b_clz.h.overload();
    com_kugou_framework_musichunter_b_clz_method_h_mnko.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_kugou_framework_musichunter_b_clz_method_h_mnko.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.kugou.framework.musichunter.b.h()', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_o_6z2k = com_kugou_framework_musichunter_b_clz.o.overload('com.kugou.framework.musichunter.b');
    com_kugou_framework_musichunter_b_clz_method_o_6z2k.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_kugou_framework_musichunter_b_clz_method_o_6z2k.call(com_kugou_framework_musichunter_b_clz, v0);
        methodInBeat(invokeId, startTime, 'static int com.kugou.framework.musichunter.b.o(com.kugou.framework.musichunter.b)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_i_b7q4 = com_kugou_framework_musichunter_b_clz.i.overload();
    com_kugou_framework_musichunter_b_clz_method_i_b7q4.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_i_b7q4.call(this);
        methodInBeat(invokeId, startTime, 'public void com.kugou.framework.musichunter.b.i()', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_p_kie8 = com_kugou_framework_musichunter_b_clz.p.overload('com.kugou.framework.musichunter.b');
    com_kugou_framework_musichunter_b_clz_method_p_kie8.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_kugou_framework_musichunter_b_clz_method_p_kie8.call(com_kugou_framework_musichunter_b_clz, v0);
        methodInBeat(invokeId, startTime, 'static java.lang.String com.kugou.framework.musichunter.b.p(com.kugou.framework.musichunter.b)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_j_yyqs = com_kugou_framework_musichunter_b_clz.j.overload();
    com_kugou_framework_musichunter_b_clz_method_j_yyqs.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_kugou_framework_musichunter_b_clz_method_j_yyqs.call(this);
        methodInBeat(invokeId, startTime, 'public int com.kugou.framework.musichunter.b.j()', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_k_k00s = com_kugou_framework_musichunter_b_clz.k.overload();
    com_kugou_framework_musichunter_b_clz_method_k_k00s.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_kugou_framework_musichunter_b_clz_method_k_k00s.call(com_kugou_framework_musichunter_b_clz);
        methodInBeat(invokeId, startTime, 'static int com.kugou.framework.musichunter.b.k()', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_q_se4k = com_kugou_framework_musichunter_b_clz.q.overload('com.kugou.framework.musichunter.b');
    com_kugou_framework_musichunter_b_clz_method_q_se4k.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_kugou_framework_musichunter_b_clz_method_q_se4k.call(com_kugou_framework_musichunter_b_clz, v0);
        methodInBeat(invokeId, startTime, 'static boolean com.kugou.framework.musichunter.b.q(com.kugou.framework.musichunter.b)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_l_6bz1 = com_kugou_framework_musichunter_b_clz.l.overload();
    com_kugou_framework_musichunter_b_clz_method_l_6bz1.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_l_6bz1.call(this);
        methodInBeat(invokeId, startTime, 'private void com.kugou.framework.musichunter.b.l()', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_m_kodd = com_kugou_framework_musichunter_b_clz.m.overload();
    com_kugou_framework_musichunter_b_clz_method_m_kodd.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_m_kodd.call(this);
        methodInBeat(invokeId, startTime, 'private void com.kugou.framework.musichunter.b.m()', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_n_9wy9 = com_kugou_framework_musichunter_b_clz.n.overload();
    com_kugou_framework_musichunter_b_clz_method_n_9wy9.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_n_9wy9.call(this);
        methodInBeat(invokeId, startTime, 'private void com.kugou.framework.musichunter.b.n()', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_o_4ylp = com_kugou_framework_musichunter_b_clz.o.overload();
    com_kugou_framework_musichunter_b_clz_method_o_4ylp.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_o_4ylp.call(this);
        methodInBeat(invokeId, startTime, 'private void com.kugou.framework.musichunter.b.o()', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_p_scbb = com_kugou_framework_musichunter_b_clz.p.overload();
    com_kugou_framework_musichunter_b_clz_method_p_scbb.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_p_scbb.call(this);
        methodInBeat(invokeId, startTime, 'private void com.kugou.framework.musichunter.b.p()', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_q_x3wc = com_kugou_framework_musichunter_b_clz.q.overload();
    com_kugou_framework_musichunter_b_clz_method_q_x3wc.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_q_x3wc.call(this);
        methodInBeat(invokeId, startTime, 'private void com.kugou.framework.musichunter.b.q()', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_r_u5lu = com_kugou_framework_musichunter_b_clz.r.overload();
    com_kugou_framework_musichunter_b_clz_method_r_u5lu.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_kugou_framework_musichunter_b_clz_method_r_u5lu.call(this);
        methodInBeat(invokeId, startTime, 'private java.lang.String com.kugou.framework.musichunter.b.r()', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_s_sn58 = com_kugou_framework_musichunter_b_clz.s.overload();
    com_kugou_framework_musichunter_b_clz_method_s_sn58.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_kugou_framework_musichunter_b_clz_method_s_sn58.call(this);
        methodInBeat(invokeId, startTime, 'private long com.kugou.framework.musichunter.b.s()', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_t_6zqr = com_kugou_framework_musichunter_b_clz.t.overload();
    com_kugou_framework_musichunter_b_clz_method_t_6zqr.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_kugou_framework_musichunter_b_clz_method_t_6zqr.call(this);
        methodInBeat(invokeId, startTime, 'private long com.kugou.framework.musichunter.b.t()', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_u_xj43 = com_kugou_framework_musichunter_b_clz.u.overload();
    com_kugou_framework_musichunter_b_clz_method_u_xj43.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_kugou_framework_musichunter_b_clz_method_u_xj43.call(this);
        methodInBeat(invokeId, startTime, 'private long com.kugou.framework.musichunter.b.u()', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_v_4s7b = com_kugou_framework_musichunter_b_clz.v.overload();
    com_kugou_framework_musichunter_b_clz_method_v_4s7b.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_kugou_framework_musichunter_b_clz_method_v_4s7b.call(this);
        methodInBeat(invokeId, startTime, 'private byte[] com.kugou.framework.musichunter.b.v()', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_a_5p6i = com_kugou_framework_musichunter_b_clz.a.overload('java.lang.String');
    com_kugou_framework_musichunter_b_clz_method_a_5p6i.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_a_5p6i.call(this, v0);
        log("呵呵:"+v0);
        methodInBeat(invokeId, startTime, 'public void com.kugou.framework.musichunter.b.a(java.lang.String)', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_b_owdp = com_kugou_framework_musichunter_b_clz.b.overload('java.lang.String');
    com_kugou_framework_musichunter_b_clz_method_b_owdp.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_b_owdp.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void com.kugou.framework.musichunter.b.b(java.lang.String)', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_a_jy2g = com_kugou_framework_musichunter_b_clz.a.overload('com.kugou.framework.musichunter.c');
    com_kugou_framework_musichunter_b_clz_method_a_jy2g.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_a_jy2g.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void com.kugou.framework.musichunter.b.a(com.kugou.framework.musichunter.c)', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_b_u9je = com_kugou_framework_musichunter_b_clz.b.overload('com.kugou.framework.musichunter.b', 'boolean');
    com_kugou_framework_musichunter_b_clz_method_b_u9je.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_kugou_framework_musichunter_b_clz_method_b_u9je.call(com_kugou_framework_musichunter_b_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static boolean com.kugou.framework.musichunter.b.b(com.kugou.framework.musichunter.b,boolean)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_a_07ev = com_kugou_framework_musichunter_b_clz.a.overload('com.kugou.framework.musichunter.b', 'com.kugou.framework.musichunter.fp2013.protocol.RecognizeResult');
    com_kugou_framework_musichunter_b_clz_method_a_07ev.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_kugou_framework_musichunter_b_clz_method_a_07ev.call(com_kugou_framework_musichunter_b_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static com.kugou.framework.musichunter.fp2013.protocol.RecognizeResult com.kugou.framework.musichunter.b.a(com.kugou.framework.musichunter.b,com.kugou.framework.musichunter.fp2013.protocol.RecognizeResult)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_a_vpio = com_kugou_framework_musichunter_b_clz.a.overload('com.kugou.framework.musichunter.b', 'boolean');
    com_kugou_framework_musichunter_b_clz_method_a_vpio.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_kugou_framework_musichunter_b_clz_method_a_vpio.call(com_kugou_framework_musichunter_b_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static boolean com.kugou.framework.musichunter.b.a(com.kugou.framework.musichunter.b,boolean)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_c_fbac = com_kugou_framework_musichunter_b_clz.c.overload('java.lang.String');
    com_kugou_framework_musichunter_b_clz_method_c_fbac.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_c_fbac.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void com.kugou.framework.musichunter.b.c(java.lang.String)', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_a_ah6l = com_kugou_framework_musichunter_b_clz.a.overload('boolean');
    com_kugou_framework_musichunter_b_clz_method_a_ah6l.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_a_ah6l.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.kugou.framework.musichunter.b.a(boolean)', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_b_jkkh = com_kugou_framework_musichunter_b_clz.b.overload('boolean');
    com_kugou_framework_musichunter_b_clz_method_b_jkkh.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_b_jkkh.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.kugou.framework.musichunter.b.b(boolean)', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_c_cmyg = com_kugou_framework_musichunter_b_clz.c.overload('boolean');
    com_kugou_framework_musichunter_b_clz_method_c_cmyg.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_c_cmyg.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.kugou.framework.musichunter.b.c(boolean)', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_g_miiz = com_kugou_framework_musichunter_b_clz.g.overload('com.kugou.framework.musichunter.b');
    com_kugou_framework_musichunter_b_clz_method_g_miiz.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_kugou_framework_musichunter_b_clz_method_g_miiz.call(com_kugou_framework_musichunter_b_clz, v0);
        methodInBeat(invokeId, startTime, 'static java.lang.Object com.kugou.framework.musichunter.b.g(com.kugou.framework.musichunter.b)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_h_nq2l = com_kugou_framework_musichunter_b_clz.h.overload('com.kugou.framework.musichunter.b');
    com_kugou_framework_musichunter_b_clz_method_h_nq2l.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_kugou_framework_musichunter_b_clz_method_h_nq2l.call(com_kugou_framework_musichunter_b_clz, v0);
        methodInBeat(invokeId, startTime, 'static boolean com.kugou.framework.musichunter.b.h(com.kugou.framework.musichunter.b)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_i_psxd = com_kugou_framework_musichunter_b_clz.i.overload('com.kugou.framework.musichunter.b');
    com_kugou_framework_musichunter_b_clz_method_i_psxd.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_kugou_framework_musichunter_b_clz_method_i_psxd.call(com_kugou_framework_musichunter_b_clz, v0);
        methodInBeat(invokeId, startTime, 'static byte[] com.kugou.framework.musichunter.b.i(com.kugou.framework.musichunter.b)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_j_pu7r = com_kugou_framework_musichunter_b_clz.j.overload('com.kugou.framework.musichunter.b');
    com_kugou_framework_musichunter_b_clz_method_j_pu7r.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_kugou_framework_musichunter_b_clz_method_j_pu7r.call(com_kugou_framework_musichunter_b_clz, v0);
        methodInBeat(invokeId, startTime, 'static android.os.Handler com.kugou.framework.musichunter.b.j(com.kugou.framework.musichunter.b)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_k_jx0u = com_kugou_framework_musichunter_b_clz.k.overload('com.kugou.framework.musichunter.b');
    com_kugou_framework_musichunter_b_clz_method_k_jx0u.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_kugou_framework_musichunter_b_clz_method_k_jx0u.call(com_kugou_framework_musichunter_b_clz, v0);
        methodInBeat(invokeId, startTime, 'static void com.kugou.framework.musichunter.b.k(com.kugou.framework.musichunter.b)', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_l_herk = com_kugou_framework_musichunter_b_clz.l.overload('com.kugou.framework.musichunter.b');
    com_kugou_framework_musichunter_b_clz_method_l_herk.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_kugou_framework_musichunter_b_clz_method_l_herk.call(com_kugou_framework_musichunter_b_clz, v0);
        methodInBeat(invokeId, startTime, 'static int com.kugou.framework.musichunter.b.l(com.kugou.framework.musichunter.b)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_m_mdtk = com_kugou_framework_musichunter_b_clz.m.overload('com.kugou.framework.musichunter.b');
    com_kugou_framework_musichunter_b_clz_method_m_mdtk.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_kugou_framework_musichunter_b_clz_method_m_mdtk.call(com_kugou_framework_musichunter_b_clz, v0);
        methodInBeat(invokeId, startTime, 'static int com.kugou.framework.musichunter.b.m(com.kugou.framework.musichunter.b)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_n_35cv = com_kugou_framework_musichunter_b_clz.n.overload('com.kugou.framework.musichunter.b');
    com_kugou_framework_musichunter_b_clz_method_n_35cv.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_kugou_framework_musichunter_b_clz_method_n_35cv.call(com_kugou_framework_musichunter_b_clz, v0);
        methodInBeat(invokeId, startTime, 'static boolean com.kugou.framework.musichunter.b.n(com.kugou.framework.musichunter.b)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_a_2sy9 = com_kugou_framework_musichunter_b_clz.a.overload('com.kugou.framework.musichunter.b');
    com_kugou_framework_musichunter_b_clz_method_a_2sy9.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_kugou_framework_musichunter_b_clz_method_a_2sy9.call(com_kugou_framework_musichunter_b_clz, v0);
        methodInBeat(invokeId, startTime, 'static com.kugou.framework.musichunter.fp2013.b com.kugou.framework.musichunter.b.a(com.kugou.framework.musichunter.b)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_b_40z8 = com_kugou_framework_musichunter_b_clz.b.overload('com.kugou.framework.musichunter.b');
    com_kugou_framework_musichunter_b_clz_method_b_40z8.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_kugou_framework_musichunter_b_clz_method_b_40z8.call(com_kugou_framework_musichunter_b_clz, v0);
        methodInBeat(invokeId, startTime, 'static java.util.concurrent.atomic.AtomicInteger com.kugou.framework.musichunter.b.b(com.kugou.framework.musichunter.b)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_c_a79s = com_kugou_framework_musichunter_b_clz.c.overload('com.kugou.framework.musichunter.b');
    com_kugou_framework_musichunter_b_clz_method_c_a79s.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_kugou_framework_musichunter_b_clz_method_c_a79s.call(com_kugou_framework_musichunter_b_clz, v0);
        methodInBeat(invokeId, startTime, 'static com.kugou.framework.musichunter.a com.kugou.framework.musichunter.b.c(com.kugou.framework.musichunter.b)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_d_3pco = com_kugou_framework_musichunter_b_clz.d.overload('com.kugou.framework.musichunter.b');
    com_kugou_framework_musichunter_b_clz_method_d_3pco.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_kugou_framework_musichunter_b_clz_method_d_3pco.call(com_kugou_framework_musichunter_b_clz, v0);
        methodInBeat(invokeId, startTime, 'static com.kugou.framework.musichunter.fp2013.protocol.b com.kugou.framework.musichunter.b.d(com.kugou.framework.musichunter.b)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_e_cg8i = com_kugou_framework_musichunter_b_clz.e.overload('com.kugou.framework.musichunter.b');
    com_kugou_framework_musichunter_b_clz_method_e_cg8i.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_kugou_framework_musichunter_b_clz_method_e_cg8i.call(com_kugou_framework_musichunter_b_clz, v0);
        methodInBeat(invokeId, startTime, 'static com.kugou.framework.musichunter.fp2013.BufferedResampler com.kugou.framework.musichunter.b.e(com.kugou.framework.musichunter.b)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_f_trjd = com_kugou_framework_musichunter_b_clz.f.overload('com.kugou.framework.musichunter.b');
    com_kugou_framework_musichunter_b_clz_method_f_trjd.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_kugou_framework_musichunter_b_clz_method_f_trjd.call(com_kugou_framework_musichunter_b_clz, v0);
        methodInBeat(invokeId, startTime, 'static java.lang.String com.kugou.framework.musichunter.b.f(com.kugou.framework.musichunter.b)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_a_ru6w = com_kugou_framework_musichunter_b_clz.a.overload('long');
    com_kugou_framework_musichunter_b_clz_method_a_ru6w.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_kugou_framework_musichunter_b_clz_method_a_ru6w.call(this, v0);
        methodInBeat(invokeId, startTime, 'private java.lang.String com.kugou.framework.musichunter.b.a(long)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_a_ytgx = com_kugou_framework_musichunter_b_clz.a.overload('com.kugou.framework.musichunter.b', 'int', '[B', 'boolean', 'int');
    com_kugou_framework_musichunter_b_clz_method_a_ytgx.implementation = function(v0, v1, v2, v3, v4) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_kugou_framework_musichunter_b_clz_method_a_ytgx.call(com_kugou_framework_musichunter_b_clz, v0, v1, v2, v3, v4);
        methodInBeat(invokeId, startTime, 'static void com.kugou.framework.musichunter.b.a(com.kugou.framework.musichunter.b,int,byte[],boolean,int)', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_a_8hrm = com_kugou_framework_musichunter_b_clz.a.overload('[B', 'int', 'int');
    com_kugou_framework_musichunter_b_clz_method_a_8hrm.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_kugou_framework_musichunter_b_clz_method_a_8hrm.call(com_kugou_framework_musichunter_b_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'private static byte[] com.kugou.framework.musichunter.b.a(byte[],int,int)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_a_jdxm = com_kugou_framework_musichunter_b_clz.a.overload('double');
    com_kugou_framework_musichunter_b_clz_method_a_jdxm.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_a_jdxm.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.kugou.framework.musichunter.b.a(double)', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_a_77ek = com_kugou_framework_musichunter_b_clz.a.overload('com.kugou.framework.musichunter.b', 'java.lang.String');
    com_kugou_framework_musichunter_b_clz_method_a_77ek.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_kugou_framework_musichunter_b_clz_method_a_77ek.call(com_kugou_framework_musichunter_b_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static void com.kugou.framework.musichunter.b.a(com.kugou.framework.musichunter.b,java.lang.String)', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_b_lwzq = com_kugou_framework_musichunter_b_clz.b.overload('double');
    com_kugou_framework_musichunter_b_clz_method_b_lwzq.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_b_lwzq.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void com.kugou.framework.musichunter.b.b(double)', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_a_2rf5 = com_kugou_framework_musichunter_b_clz.a.overload('int', 'int');
    com_kugou_framework_musichunter_b_clz_method_a_2rf5.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_a_2rf5.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.kugou.framework.musichunter.b.a(int,int)', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_a_azi3 = com_kugou_framework_musichunter_b_clz.a.overload('int', 'java.lang.String', 'long', 'long');
    com_kugou_framework_musichunter_b_clz_method_a_azi3.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_a_azi3.call(this, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public void com.kugou.framework.musichunter.b.a(int,java.lang.String,long,long)', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_a_15jt = com_kugou_framework_musichunter_b_clz.a.overload('int', '[B', 'boolean', 'int');
    com_kugou_framework_musichunter_b_clz_method_a_15jt.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_a_15jt.call(this, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'private void com.kugou.framework.musichunter.b.a(int,byte[],boolean,int)', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_a_ak9p = com_kugou_framework_musichunter_b_clz.a.overload('java.lang.String', 'long');
    com_kugou_framework_musichunter_b_clz_method_a_ak9p.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_a_ak9p.call(this, v0, v1);
        log(v0);
        methodInBeat(invokeId, startTime, 'private void com.kugou.framework.musichunter.b.a(java.lang.String,long)', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_a_tvlp = com_kugou_framework_musichunter_b_clz.a.overload('int', 'int', 'int');
    com_kugou_framework_musichunter_b_clz_method_a_tvlp.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_a_tvlp.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public void com.kugou.framework.musichunter.b.a(int,int,int)', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_b_vxaa = com_kugou_framework_musichunter_b_clz.b.overload('int');
    com_kugou_framework_musichunter_b_clz_method_b_vxaa.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_b_vxaa.call(this, v0);
        log(v0);
        methodInBeat(invokeId, startTime, 'public void com.kugou.framework.musichunter.b.b(int)', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_a_cjdc = com_kugou_framework_musichunter_b_clz.a.overload('com.kugou.framework.musichunter.b', 'com.kugou.framework.musichunter.fp2013.b', 'int', '[B', 'boolean', 'int');
    com_kugou_framework_musichunter_b_clz_method_a_cjdc.implementation = function(v0, v1, v2, v3, v4, v5) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_kugou_framework_musichunter_b_clz_method_a_cjdc.call(com_kugou_framework_musichunter_b_clz, v0, v1, v2, v3, v4, v5);
        methodInBeat(invokeId, startTime, 'static void com.kugou.framework.musichunter.b.a(com.kugou.framework.musichunter.b,com.kugou.framework.musichunter.fp2013.b,int,byte[],boolean,int)', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_a_237h = com_kugou_framework_musichunter_b_clz.a.overload('int');
    com_kugou_framework_musichunter_b_clz_method_a_237h.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_a_237h.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.kugou.framework.musichunter.b.a(int)', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_d_r3is = com_kugou_framework_musichunter_b_clz.d.overload('int');
    com_kugou_framework_musichunter_b_clz_method_d_r3is.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_kugou_framework_musichunter_b_clz_method_d_r3is.call(this, v0);
        methodInBeat(invokeId, startTime, 'private boolean com.kugou.framework.musichunter.b.d(int)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_a_xd7i = com_kugou_framework_musichunter_b_clz.a.overload('[B', 'int');
    com_kugou_framework_musichunter_b_clz_method_a_xd7i.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_a_xd7i.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.kugou.framework.musichunter.b.a(byte[],int)', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_b_j6i9 = com_kugou_framework_musichunter_b_clz.b.overload('[B', 'int');
    com_kugou_framework_musichunter_b_clz_method_b_j6i9.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_b_j6i9.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'private void com.kugou.framework.musichunter.b.b(byte[],int)', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_c_l5tn = com_kugou_framework_musichunter_b_clz.c.overload('int');
    com_kugou_framework_musichunter_b_clz_method_c_l5tn.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_c_l5tn.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.kugou.framework.musichunter.b.c(int)', executor);
    };
    var com_kugou_framework_musichunter_b_clz_method_b_7c7j = com_kugou_framework_musichunter_b_clz.b.overload('com.kugou.framework.musichunter.b', 'int');
    com_kugou_framework_musichunter_b_clz_method_b_7c7j.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_kugou_framework_musichunter_b_clz_method_b_7c7j.call(com_kugou_framework_musichunter_b_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static int com.kugou.framework.musichunter.b.b(com.kugou.framework.musichunter.b,int)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_a_lfcv = com_kugou_framework_musichunter_b_clz.a.overload('com.kugou.framework.musichunter.b', 'int');
    com_kugou_framework_musichunter_b_clz_method_a_lfcv.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_kugou_framework_musichunter_b_clz_method_a_lfcv.call(com_kugou_framework_musichunter_b_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static int com.kugou.framework.musichunter.b.a(com.kugou.framework.musichunter.b,int)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_e_3bwq = com_kugou_framework_musichunter_b_clz.e.overload('int');
    com_kugou_framework_musichunter_b_clz_method_e_3bwq.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_kugou_framework_musichunter_b_clz_method_e_3bwq.call(this, v0);
        methodInBeat(invokeId, startTime, 'private boolean com.kugou.framework.musichunter.b.e(int)', executor);
        return ret;
    };
    var com_kugou_framework_musichunter_b_clz_method_a_1mra = com_kugou_framework_musichunter_b_clz.a.overload('[B', 'java.lang.String', 'int', 'int', 'boolean', 'int');
    com_kugou_framework_musichunter_b_clz_method_a_1mra.implementation = function(v0, v1, v2, v3, v4, v5) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_kugou_framework_musichunter_b_clz_method_a_1mra.call(this, v0, v1, v2, v3, v4, v5);
        methodInBeat(invokeId, startTime, 'private void com.kugou.framework.musichunter.b.a(byte[],java.lang.String,int,int,boolean,int)', executor);
    };
});