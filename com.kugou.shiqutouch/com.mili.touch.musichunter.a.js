//com.mili.touch.musichunter.a:?
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
    console.log("------------startFlag:" + invokeId + ",objectHash:"+executor+",thread(id,name:" + currentThread.getId() +"," + currentThread.getName() + "),timestamp:" + startTime+"---------------");
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
    var com_mili_touch_musichunter_a_clz = Java.use('com.mili.touch.musichunter.a');
    var com_mili_touch_musichunter_a_clz_method_x_jajs = com_mili_touch_musichunter_a_clz.x.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_x_jajs.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_mili_touch_musichunter_a_clz_method_x_jajs.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static void com.mili.touch.musichunter.a.x(com.mili.touch.musichunter.a)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_w_2wkw = com_mili_touch_musichunter_a_clz.w.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_w_2wkw.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_w_2wkw.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static int com.mili.touch.musichunter.a.w(com.mili.touch.musichunter.a)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_z_isvf = com_mili_touch_musichunter_a_clz.z.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_z_isvf.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_mili_touch_musichunter_a_clz_method_z_isvf.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static void com.mili.touch.musichunter.a.z(com.mili.touch.musichunter.a)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_y_l6wh = com_mili_touch_musichunter_a_clz.y.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_y_l6wh.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_y_l6wh.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static com.mili.touch.musichunter.a$c com.mili.touch.musichunter.a.y(com.mili.touch.musichunter.a)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_t_w27n = com_mili_touch_musichunter_a_clz.t.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_t_w27n.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_t_w27n.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static int com.mili.touch.musichunter.a.t(com.mili.touch.musichunter.a)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_s_7jgm = com_mili_touch_musichunter_a_clz.s.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_s_7jgm.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_s_7jgm.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static boolean com.mili.touch.musichunter.a.s(com.mili.touch.musichunter.a)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_v_ow5r = com_mili_touch_musichunter_a_clz.v.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_v_ow5r.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_v_ow5r.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static boolean com.mili.touch.musichunter.a.v(com.mili.touch.musichunter.a)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_u_mk5a = com_mili_touch_musichunter_a_clz.u.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_u_mk5a.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_u_mk5a.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static int com.mili.touch.musichunter.a.u(com.mili.touch.musichunter.a)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_p_1wdc = com_mili_touch_musichunter_a_clz.p.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_p_1wdc.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_p_1wdc.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static int com.mili.touch.musichunter.a.p(com.mili.touch.musichunter.a)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_a_yaqg = com_mili_touch_musichunter_a_clz.a.overload('com.mili.touch.musichunter.a$e');
    com_mili_touch_musichunter_a_clz_method_a_yaqg.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_a_yaqg.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a.a(com.mili.touch.musichunter.a$e)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_o_bdmo = com_mili_touch_musichunter_a_clz.o.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_o_bdmo.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_o_bdmo.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static long com.mili.touch.musichunter.a.o(com.mili.touch.musichunter.a)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_r_jk5f = com_mili_touch_musichunter_a_clz.r.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_r_jk5f.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_mili_touch_musichunter_a_clz_method_r_jk5f.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static void com.mili.touch.musichunter.a.r(com.mili.touch.musichunter.a)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_q_smv5 = com_mili_touch_musichunter_a_clz.q.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_q_smv5.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_q_smv5.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static boolean com.mili.touch.musichunter.a.q(com.mili.touch.musichunter.a)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_l_lvtd = com_mili_touch_musichunter_a_clz.l.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_l_lvtd.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_l_lvtd.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static double com.mili.touch.musichunter.a.l(com.mili.touch.musichunter.a)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_k_3nun = com_mili_touch_musichunter_a_clz.k.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_k_3nun.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_k_3nun.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static java.lang.Object com.mili.touch.musichunter.a.k(com.mili.touch.musichunter.a)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_n_bi0a = com_mili_touch_musichunter_a_clz.n.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_n_bi0a.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_n_bi0a.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static boolean com.mili.touch.musichunter.a.n(com.mili.touch.musichunter.a)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_m_28fx = com_mili_touch_musichunter_a_clz.m.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_m_28fx.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_mili_touch_musichunter_a_clz_method_m_28fx.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static void com.mili.touch.musichunter.a.m(com.mili.touch.musichunter.a)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_h_ehu6 = com_mili_touch_musichunter_a_clz.h.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_h_ehu6.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_h_ehu6.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static com.kugou.framework.musichunter.b com.mili.touch.musichunter.a.h(com.mili.touch.musichunter.a)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_g_4ogc = com_mili_touch_musichunter_a_clz.g.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_g_4ogc.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_g_4ogc.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static android.content.Context com.mili.touch.musichunter.a.g(com.mili.touch.musichunter.a)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_j_7qyn = com_mili_touch_musichunter_a_clz.j.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_j_7qyn.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_j_7qyn.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static long com.mili.touch.musichunter.a.j(com.mili.touch.musichunter.a)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_i_emd8 = com_mili_touch_musichunter_a_clz.i.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_i_emd8.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_i_emd8.call(com_mili_touch_musichunter_a_clz, v0);
        log("回调");
        methodInBeat(invokeId, startTime, 'static com.mili.touch.musichunter.MusicHunterListCallback com.mili.touch.musichunter.a.i(com.mili.touch.musichunter.a)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_d_pbko = com_mili_touch_musichunter_a_clz.d.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_d_pbko.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_d_pbko.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static java.util.concurrent.ExecutorService com.mili.touch.musichunter.a.d(com.mili.touch.musichunter.a)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_c_wnb4 = com_mili_touch_musichunter_a_clz.c.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_c_wnb4.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_mili_touch_musichunter_a_clz_method_c_wnb4.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static void com.mili.touch.musichunter.a.c(com.mili.touch.musichunter.a)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_f_ogv6 = com_mili_touch_musichunter_a_clz.f.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_f_ogv6.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_f_ogv6.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static com.mili.touch.musichunter.a$j com.mili.touch.musichunter.a.f(com.mili.touch.musichunter.a)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_e_inxs = com_mili_touch_musichunter_a_clz.e.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_e_inxs.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_e_inxs.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static android.os.Handler com.mili.touch.musichunter.a.e(com.mili.touch.musichunter.a)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_b_5gv6 = com_mili_touch_musichunter_a_clz.b.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_b_5gv6.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_b_5gv6.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static android.util.SparseArray com.mili.touch.musichunter.a.b(com.mili.touch.musichunter.a)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_a_l7dg = com_mili_touch_musichunter_a_clz.a.overload('com.mili.touch.musichunter.a');
    com_mili_touch_musichunter_a_clz_method_a_l7dg.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_a_l7dg.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static int com.mili.touch.musichunter.a.a(com.mili.touch.musichunter.a)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_a_aapq = com_mili_touch_musichunter_a_clz.a.overload('android.os.Message');
    com_mili_touch_musichunter_a_clz_method_a_aapq.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_a_aapq.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void com.mili.touch.musichunter.a.a(android.os.Message)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_a_y5j9 = com_mili_touch_musichunter_a_clz.a.overload('int', 'java.lang.String', 'int', 'int');
    com_mili_touch_musichunter_a_clz_method_a_y5j9.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        log(v1);
        com_mili_touch_musichunter_a_clz_method_a_y5j9.call(this, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public synchronized void com.mili.touch.musichunter.a.a(int,java.lang.String,int,int)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_a_py1n = com_mili_touch_musichunter_a_clz.a.overload('java.util.List', 'long');
    com_mili_touch_musichunter_a_clz_method_a_py1n.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_a_py1n.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a.a(java.util.List,long)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_a_kkrx = com_mili_touch_musichunter_a_clz.a.overload('com.mili.touch.musichunter.a', 'com.kugou.android.common.entity.KGSong', 'boolean', 'java.lang.String', 'int', 'java.lang.String', 'java.lang.String');
    com_mili_touch_musichunter_a_clz_method_a_kkrx.implementation = function(v0, v1, v2, v3, v4, v5, v6) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_mili_touch_musichunter_a_clz_method_a_kkrx.call(com_mili_touch_musichunter_a_clz, v0, v1, v2, v3, v4, v5, v6);
        methodInBeat(invokeId, startTime, 'static void com.mili.touch.musichunter.a.a(com.mili.touch.musichunter.a,com.kugou.android.common.entity.KGSong,boolean,java.lang.String,int,java.lang.String,java.lang.String)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_A_12ge = com_mili_touch_musichunter_a_clz.A.overload();
    com_mili_touch_musichunter_a_clz_method_A_12ge.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_mili_touch_musichunter_a_clz_method_A_12ge.call(this);
        methodInBeat(invokeId, startTime, 'private boolean com.mili.touch.musichunter.a.A()', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_B_n8hd = com_mili_touch_musichunter_a_clz.B.overload();
    com_mili_touch_musichunter_a_clz_method_B_n8hd.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_B_n8hd.call(this);
        methodInBeat(invokeId, startTime, 'private void com.mili.touch.musichunter.a.B()', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_C_ph9j = com_mili_touch_musichunter_a_clz.C.overload();
    com_mili_touch_musichunter_a_clz_method_C_ph9j.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_C_ph9j.call(this);
        methodInBeat(invokeId, startTime, 'private void com.mili.touch.musichunter.a.C()', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_D_mgvv = com_mili_touch_musichunter_a_clz.D.overload();
    com_mili_touch_musichunter_a_clz_method_D_mgvv.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_D_mgvv.call(this);
        methodInBeat(invokeId, startTime, 'private void com.mili.touch.musichunter.a.D()', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_E_fppk = com_mili_touch_musichunter_a_clz.E.overload();
    com_mili_touch_musichunter_a_clz_method_E_fppk.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_E_fppk.call(this);
        methodInBeat(invokeId, startTime, 'private void com.mili.touch.musichunter.a.E()', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_F_cmw9 = com_mili_touch_musichunter_a_clz.F.overload();
    com_mili_touch_musichunter_a_clz_method_F_cmw9.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_F_cmw9.call(this);
        methodInBeat(invokeId, startTime, 'private void com.mili.touch.musichunter.a.F()', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_a_kr2e = com_mili_touch_musichunter_a_clz.a.overload('com.kugou.android.common.entity.KGSong', 'boolean', 'java.lang.String', 'int', 'java.lang.String', 'java.lang.String');
    com_mili_touch_musichunter_a_clz_method_a_kr2e.implementation = function(v0, v1, v2, v3, v4, v5) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_a_kr2e.call(this, v0, v1, v2, v3, v4, v5);
        methodInBeat(invokeId, startTime, 'private void com.mili.touch.musichunter.a.a(com.kugou.android.common.entity.KGSong,boolean,java.lang.String,int,java.lang.String,java.lang.String)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_a_g4u1 = com_mili_touch_musichunter_a_clz.a.overload('java.lang.String', 'com.mili.touch.musichunter.IMusicHunterListener');
    com_mili_touch_musichunter_a_clz_method_a_g4u1.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_a_g4u1.call(this, v0, v1);
        log(v0);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a.a(java.lang.String,com.mili.touch.musichunter.IMusicHunterListener)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_a_67mz = com_mili_touch_musichunter_a_clz.a.overload();
    com_mili_touch_musichunter_a_clz_method_a_67mz.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_mili_touch_musichunter_a_clz_method_a_67mz.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.mili.touch.musichunter.a.a()', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_b_w2e9 = com_mili_touch_musichunter_a_clz.b.overload();
    com_mili_touch_musichunter_a_clz_method_b_w2e9.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_b_w2e9.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a.b()', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_c_bajm = com_mili_touch_musichunter_a_clz.c.overload();
    com_mili_touch_musichunter_a_clz_method_c_bajm.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_c_bajm.call(com_mili_touch_musichunter_a_clz);
        methodInBeat(invokeId, startTime, 'public static boolean com.mili.touch.musichunter.a.c()', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_d_5med = com_mili_touch_musichunter_a_clz.d.overload();
    com_mili_touch_musichunter_a_clz_method_d_5med.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_d_5med.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a.d()', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_e_1fs9 = com_mili_touch_musichunter_a_clz.e.overload();
    com_mili_touch_musichunter_a_clz_method_e_1fs9.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_e_1fs9.call(this);
        methodInBeat(invokeId, startTime, 'public synchronized void com.mili.touch.musichunter.a.e()', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_f_4wek = com_mili_touch_musichunter_a_clz.f.overload();
    com_mili_touch_musichunter_a_clz_method_f_4wek.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_f_4wek.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a.f()', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_a_yoe8 = com_mili_touch_musichunter_a_clz.a.overload('java.util.List', 'java.lang.Runnable', '[I');
    com_mili_touch_musichunter_a_clz_method_a_yoe8.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_a_yoe8.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'private void com.mili.touch.musichunter.a.a(java.util.List,java.lang.Runnable,int[])', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_g_athd = com_mili_touch_musichunter_a_clz.g.overload();
    com_mili_touch_musichunter_a_clz_method_g_athd.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_g_athd.call(this);
        methodInBeat(invokeId, startTime, 'public synchronized void com.mili.touch.musichunter.a.g()', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_b_4s5p = com_mili_touch_musichunter_a_clz.b.overload('java.util.List', 'java.lang.Runnable', '[I');
    com_mili_touch_musichunter_a_clz_method_b_4s5p.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_b_4s5p.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'private void com.mili.touch.musichunter.a.b(java.util.List,java.lang.Runnable,int[])', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_a_x8cr = com_mili_touch_musichunter_a_clz.a.overload('int', 'com.mili.touch.musichunter.a$e');
    com_mili_touch_musichunter_a_clz_method_a_x8cr.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_a_x8cr.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a.a(int,com.mili.touch.musichunter.a$e)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_h_nzuc = com_mili_touch_musichunter_a_clz.h.overload();
    com_mili_touch_musichunter_a_clz_method_h_nzuc.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_mili_touch_musichunter_a_clz_method_h_nzuc.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.mili.touch.musichunter.a.h()', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_i_xuze = com_mili_touch_musichunter_a_clz.i.overload();
    com_mili_touch_musichunter_a_clz_method_i_xuze.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_mili_touch_musichunter_a_clz_method_i_xuze.call(this);
        methodInBeat(invokeId, startTime, 'public com.mili.touch.musichunter.a$e com.mili.touch.musichunter.a.i()', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_j_eahg = com_mili_touch_musichunter_a_clz.j.overload();
    com_mili_touch_musichunter_a_clz_method_j_eahg.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_j_eahg.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a.j()', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_k_iade = com_mili_touch_musichunter_a_clz.k.overload();
    com_mili_touch_musichunter_a_clz_method_k_iade.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_mili_touch_musichunter_a_clz_method_k_iade.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.mili.touch.musichunter.a.k()', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_l_loyp = com_mili_touch_musichunter_a_clz.l.overload();
    com_mili_touch_musichunter_a_clz_method_l_loyp.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_mili_touch_musichunter_a_clz_method_l_loyp.call(this);
        methodInBeat(invokeId, startTime, 'public double com.mili.touch.musichunter.a.l()', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_m_bkyq = com_mili_touch_musichunter_a_clz.m.overload();
    com_mili_touch_musichunter_a_clz_method_m_bkyq.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_mili_touch_musichunter_a_clz_method_m_bkyq.call(this);
        log(ret);
        methodInBeat(invokeId, startTime, 'public com.kugou.android.common.entity.KGSong com.mili.touch.musichunter.a.m()', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_n_vwrp = com_mili_touch_musichunter_a_clz.n.overload();
    com_mili_touch_musichunter_a_clz_method_n_vwrp.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_n_vwrp.call(this);
        methodInBeat(invokeId, startTime, 'public synchronized void com.mili.touch.musichunter.a.n()', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_o_qnv7 = com_mili_touch_musichunter_a_clz.o.overload();
    com_mili_touch_musichunter_a_clz_method_o_qnv7.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_o_qnv7.call(this);
        methodInBeat(invokeId, startTime, 'public synchronized void com.mili.touch.musichunter.a.o()', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_p_runy = com_mili_touch_musichunter_a_clz.p.overload();
    com_mili_touch_musichunter_a_clz_method_p_runy.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_p_runy.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a.p()', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_q_r718 = com_mili_touch_musichunter_a_clz.q.overload();
    com_mili_touch_musichunter_a_clz_method_q_r718.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_mili_touch_musichunter_a_clz_method_q_r718.call(this);
        methodInBeat(invokeId, startTime, 'public com.mili.touch.musichunter.HunterStateInfo com.mili.touch.musichunter.a.q()', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_r_g05t = com_mili_touch_musichunter_a_clz.r.overload();
    com_mili_touch_musichunter_a_clz_method_r_g05t.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_mili_touch_musichunter_a_clz_method_r_g05t.call(this);
        methodInBeat(invokeId, startTime, 'public long com.mili.touch.musichunter.a.r()', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_s_6d59 = com_mili_touch_musichunter_a_clz.s.overload();
    com_mili_touch_musichunter_a_clz_method_s_6d59.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_mili_touch_musichunter_a_clz_method_s_6d59.call(this);
        methodInBeat(invokeId, startTime, 'public long com.mili.touch.musichunter.a.s()', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_t_23yo = com_mili_touch_musichunter_a_clz.t.overload();
    com_mili_touch_musichunter_a_clz_method_t_23yo.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_mili_touch_musichunter_a_clz_method_t_23yo.call(this);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.mili.touch.musichunter.a.t()', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_u_ch3h = com_mili_touch_musichunter_a_clz.u.overload();
    com_mili_touch_musichunter_a_clz_method_u_ch3h.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_u_ch3h.call(this);
        methodInBeat(invokeId, startTime, 'private void com.mili.touch.musichunter.a.u()', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_v_y7vj = com_mili_touch_musichunter_a_clz.v.overload();
    com_mili_touch_musichunter_a_clz_method_v_y7vj.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_v_y7vj.call(this);
        methodInBeat(invokeId, startTime, 'private void com.mili.touch.musichunter.a.v()', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_w_pl8l = com_mili_touch_musichunter_a_clz.w.overload();
    com_mili_touch_musichunter_a_clz_method_w_pl8l.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_w_pl8l.call(this);
        methodInBeat(invokeId, startTime, 'private void com.mili.touch.musichunter.a.w()', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_a_u73p = com_mili_touch_musichunter_a_clz.a.overload('java.lang.String');
    com_mili_touch_musichunter_a_clz_method_a_u73p.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_a_u73p.call(this, v0);
        log("呵呵:"+v0);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a.a(java.lang.String)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_x_m52y = com_mili_touch_musichunter_a_clz.x.overload();
    com_mili_touch_musichunter_a_clz_method_x_m52y.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_x_m52y.call(this);
        methodInBeat(invokeId, startTime, 'private void com.mili.touch.musichunter.a.x()', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_b_xi2j = com_mili_touch_musichunter_a_clz.b.overload('java.lang.String');
    com_mili_touch_musichunter_a_clz_method_b_xi2j.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_b_xi2j.call(this, v0);
        log(v0);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a.b(java.lang.String)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_y_5dsi = com_mili_touch_musichunter_a_clz.y.overload();
    com_mili_touch_musichunter_a_clz_method_y_5dsi.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_mili_touch_musichunter_a_clz_method_y_5dsi.call(this);
        methodInBeat(invokeId, startTime, 'private boolean com.mili.touch.musichunter.a.y()', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_z_tk79 = com_mili_touch_musichunter_a_clz.z.overload();
    com_mili_touch_musichunter_a_clz_method_z_tk79.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_mili_touch_musichunter_a_clz_method_z_tk79.call(this);
        methodInBeat(invokeId, startTime, 'private int com.mili.touch.musichunter.a.z()', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_c_mcea = com_mili_touch_musichunter_a_clz.c.overload('java.lang.String');
    com_mili_touch_musichunter_a_clz_method_c_mcea.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_c_mcea.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a.c(java.lang.String)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_a_1tge = com_mili_touch_musichunter_a_clz.a.overload('android.content.Context');
    com_mili_touch_musichunter_a_clz_method_a_1tge.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_a_1tge.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'public static com.mili.touch.musichunter.a com.mili.touch.musichunter.a.a(android.content.Context)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_a_83kd = com_mili_touch_musichunter_a_clz.a.overload('java.lang.String', 'int', 'boolean', 'java.lang.String', 'java.lang.String');
    com_mili_touch_musichunter_a_clz_method_a_83kd.implementation = function(v0, v1, v2, v3, v4) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_a_83kd.call(this, v0, v1, v2, v3, v4);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a.a(java.lang.String,int,boolean,java.lang.String,java.lang.String)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_b_3mk7 = com_mili_touch_musichunter_a_clz.b.overload('com.mili.touch.musichunter.a', 'boolean');
    com_mili_touch_musichunter_a_clz_method_b_3mk7.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_b_3mk7.call(com_mili_touch_musichunter_a_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static boolean com.mili.touch.musichunter.a.b(com.mili.touch.musichunter.a,boolean)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_c_olcr = com_mili_touch_musichunter_a_clz.c.overload('com.mili.touch.musichunter.a', 'boolean');
    com_mili_touch_musichunter_a_clz_method_c_olcr.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_c_olcr.call(com_mili_touch_musichunter_a_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static boolean com.mili.touch.musichunter.a.c(com.mili.touch.musichunter.a,boolean)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_a_ubbd = com_mili_touch_musichunter_a_clz.a.overload('com.mili.touch.musichunter.a', 'com.mili.touch.musichunter.a$c');
    com_mili_touch_musichunter_a_clz_method_a_ubbd.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_a_ubbd.call(com_mili_touch_musichunter_a_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static com.mili.touch.musichunter.a$c com.mili.touch.musichunter.a.a(com.mili.touch.musichunter.a,com.mili.touch.musichunter.a$c)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_a_gff5 = com_mili_touch_musichunter_a_clz.a.overload('com.mili.touch.musichunter.a', 'boolean');
    com_mili_touch_musichunter_a_clz_method_a_gff5.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_a_gff5.call(com_mili_touch_musichunter_a_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static boolean com.mili.touch.musichunter.a.a(com.mili.touch.musichunter.a,boolean)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_b_k9rj = com_mili_touch_musichunter_a_clz.b.overload('com.kugou.android.common.entity.KGSong');
    com_mili_touch_musichunter_a_clz_method_b_k9rj.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_b_k9rj.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a.b(com.kugou.android.common.entity.KGSong)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_c_1lre = com_mili_touch_musichunter_a_clz.c.overload('com.kugou.android.common.entity.KGSong');
    com_mili_touch_musichunter_a_clz_method_c_1lre.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_c_1lre.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void com.mili.touch.musichunter.a.c(com.kugou.android.common.entity.KGSong)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_a_01fv = com_mili_touch_musichunter_a_clz.a.overload('com.kugou.android.common.entity.KGSong');
    com_mili_touch_musichunter_a_clz_method_a_01fv.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_a_01fv.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a.a(com.kugou.android.common.entity.KGSong)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_a_8w8u = com_mili_touch_musichunter_a_clz.a.overload('com.mili.touch.musichunter.a', 'android.os.Message');
    com_mili_touch_musichunter_a_clz_method_a_8w8u.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_mili_touch_musichunter_a_clz_method_a_8w8u.call(com_mili_touch_musichunter_a_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static void com.mili.touch.musichunter.a.a(com.mili.touch.musichunter.a,android.os.Message)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_a_54fn = com_mili_touch_musichunter_a_clz.a.overload('int', 'java.lang.String', 'long', 'long');
    com_mili_touch_musichunter_a_clz_method_a_54fn.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_a_54fn.call(this, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public synchronized void com.mili.touch.musichunter.a.a(int,java.lang.String,long,long)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_a_ki0f = com_mili_touch_musichunter_a_clz.a.overload('com.mili.touch.musichunter.a', 'double');
    com_mili_touch_musichunter_a_clz_method_a_ki0f.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_a_ki0f.call(com_mili_touch_musichunter_a_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static double com.mili.touch.musichunter.a.a(com.mili.touch.musichunter.a,double)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_a_fbnp = com_mili_touch_musichunter_a_clz.a.overload('com.mili.touch.musichunter.IUrlIdentifyListener');
    com_mili_touch_musichunter_a_clz_method_a_fbnp.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_a_fbnp.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a.a(com.mili.touch.musichunter.IUrlIdentifyListener)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_a_n3zk = com_mili_touch_musichunter_a_clz.a.overload('java.lang.String', 'int');
    com_mili_touch_musichunter_a_clz_method_a_n3zk.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_a_n3zk.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a.a(java.lang.String,int)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_b_h34j = com_mili_touch_musichunter_a_clz.b.overload('int');
    com_mili_touch_musichunter_a_clz_method_b_h34j.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_b_h34j.call(this, v0);
        methodInBeat(invokeId, startTime, 'public synchronized void com.mili.touch.musichunter.a.b(int)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_a_mgrq = com_mili_touch_musichunter_a_clz.a.overload('int');
    com_mili_touch_musichunter_a_clz_method_a_mgrq.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_a_mgrq.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a.a(int)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_d_mjvo = com_mili_touch_musichunter_a_clz.d.overload('int');
    com_mili_touch_musichunter_a_clz_method_d_mjvo.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_d_mjvo.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a.d(int)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_c_6w2v = com_mili_touch_musichunter_a_clz.c.overload('int');
    com_mili_touch_musichunter_a_clz_method_c_6w2v.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_mili_touch_musichunter_a_clz_method_c_6w2v.call(this, v0);
        methodInBeat(invokeId, startTime, 'public com.mili.touch.musichunter.a$e com.mili.touch.musichunter.a.c(int)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_f_qp4d = com_mili_touch_musichunter_a_clz.f.overload('int');
    com_mili_touch_musichunter_a_clz_method_f_qp4d.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_f_qp4d.call(com_mili_touch_musichunter_a_clz, v0);
        methodInBeat(invokeId, startTime, 'public static com.mili.touch.musichunter.a$e com.mili.touch.musichunter.a.f(int)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_e_178x = com_mili_touch_musichunter_a_clz.e.overload('int');
    com_mili_touch_musichunter_a_clz_method_e_178x.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_e_178x.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a.e(int)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_h_ziel = com_mili_touch_musichunter_a_clz.h.overload('int');
    com_mili_touch_musichunter_a_clz_method_h_ziel.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_h_ziel.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void com.mili.touch.musichunter.a.h(int)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_g_72r8 = com_mili_touch_musichunter_a_clz.g.overload('int');
    com_mili_touch_musichunter_a_clz_method_g_72r8.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_clz_method_g_72r8.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void com.mili.touch.musichunter.a.g(int)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_i_yy9p = com_mili_touch_musichunter_a_clz.i.overload('int');
    com_mili_touch_musichunter_a_clz_method_i_yy9p.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_mili_touch_musichunter_a_clz_method_i_yy9p.call(this, v0);
        methodInBeat(invokeId, startTime, 'private java.lang.String com.mili.touch.musichunter.a.i(int)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_b_wmao = com_mili_touch_musichunter_a_clz.b.overload('com.mili.touch.musichunter.a', 'long');
    com_mili_touch_musichunter_a_clz_method_b_wmao.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_b_wmao.call(com_mili_touch_musichunter_a_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static long com.mili.touch.musichunter.a.b(com.mili.touch.musichunter.a,long)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_c_wbk8 = com_mili_touch_musichunter_a_clz.c.overload('com.mili.touch.musichunter.a', 'long');
    com_mili_touch_musichunter_a_clz_method_c_wbk8.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_c_wbk8.call(com_mili_touch_musichunter_a_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static long com.mili.touch.musichunter.a.c(com.mili.touch.musichunter.a,long)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_b_7j4s = com_mili_touch_musichunter_a_clz.b.overload('com.mili.touch.musichunter.a', 'java.util.List', 'java.lang.Runnable', '[I');
    com_mili_touch_musichunter_a_clz_method_b_7j4s.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_mili_touch_musichunter_a_clz_method_b_7j4s.call(com_mili_touch_musichunter_a_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'static void com.mili.touch.musichunter.a.b(com.mili.touch.musichunter.a,java.util.List,java.lang.Runnable,int[])', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_d_n2rf = com_mili_touch_musichunter_a_clz.d.overload('com.mili.touch.musichunter.a', 'long');
    com_mili_touch_musichunter_a_clz_method_d_n2rf.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_d_n2rf.call(com_mili_touch_musichunter_a_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static long com.mili.touch.musichunter.a.d(com.mili.touch.musichunter.a,long)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_a_dwdh = com_mili_touch_musichunter_a_clz.a.overload('com.mili.touch.musichunter.a', 'java.util.List', 'java.lang.Runnable', '[I');
    com_mili_touch_musichunter_a_clz_method_a_dwdh.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_mili_touch_musichunter_a_clz_method_a_dwdh.call(com_mili_touch_musichunter_a_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'static void com.mili.touch.musichunter.a.a(com.mili.touch.musichunter.a,java.util.List,java.lang.Runnable,int[])', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_d_d7qj = com_mili_touch_musichunter_a_clz.d.overload('com.mili.touch.musichunter.a', 'int');
    com_mili_touch_musichunter_a_clz_method_d_d7qj.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_d_d7qj.call(com_mili_touch_musichunter_a_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static int com.mili.touch.musichunter.a.d(com.mili.touch.musichunter.a,int)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_c_6wam = com_mili_touch_musichunter_a_clz.c.overload('com.mili.touch.musichunter.a', 'int');
    com_mili_touch_musichunter_a_clz_method_c_6wam.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_mili_touch_musichunter_a_clz_method_c_6wam.call(com_mili_touch_musichunter_a_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static void com.mili.touch.musichunter.a.c(com.mili.touch.musichunter.a,int)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_b_k1un = com_mili_touch_musichunter_a_clz.b.overload('com.mili.touch.musichunter.a', 'int');
    com_mili_touch_musichunter_a_clz_method_b_k1un.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_mili_touch_musichunter_a_clz_method_b_k1un.call(com_mili_touch_musichunter_a_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static void com.mili.touch.musichunter.a.b(com.mili.touch.musichunter.a,int)', executor);
    };
    var com_mili_touch_musichunter_a_clz_method_a_v8hq = com_mili_touch_musichunter_a_clz.a.overload('com.mili.touch.musichunter.a', 'int');
    com_mili_touch_musichunter_a_clz_method_a_v8hq.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_a_v8hq.call(com_mili_touch_musichunter_a_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static int com.mili.touch.musichunter.a.a(com.mili.touch.musichunter.a,int)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_e_ctwk = com_mili_touch_musichunter_a_clz.e.overload('com.mili.touch.musichunter.a', 'int');
    com_mili_touch_musichunter_a_clz_method_e_ctwk.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_e_ctwk.call(com_mili_touch_musichunter_a_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static java.lang.String com.mili.touch.musichunter.a.e(com.mili.touch.musichunter.a,int)', executor);
        return ret;
    };
    var com_mili_touch_musichunter_a_clz_method_a_3pvw = com_mili_touch_musichunter_a_clz.a.overload('com.mili.touch.musichunter.a', 'long');
    com_mili_touch_musichunter_a_clz_method_a_3pvw.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_mili_touch_musichunter_a_clz_method_a_3pvw.call(com_mili_touch_musichunter_a_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static long com.mili.touch.musichunter.a.a(com.mili.touch.musichunter.a,long)', executor);
        return ret;
    };
});