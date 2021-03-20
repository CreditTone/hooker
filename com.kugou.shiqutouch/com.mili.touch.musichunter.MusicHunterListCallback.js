//com.mili.touch.musichunter.MusicHunterListCallback:?
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
    var com_mili_touch_musichunter_MusicHunterListCallback_clz = Java.use('com.mili.touch.musichunter.MusicHunterListCallback');
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_wi3j = com_mili_touch_musichunter_MusicHunterListCallback_clz.a.overload();
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_wi3j.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_wi3j.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.a()', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_3cuo = com_mili_touch_musichunter_MusicHunterListCallback_clz.a.overload('int', 'long', 'boolean', 'float', 'double', 'java.lang.String');
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_3cuo.implementation = function(v0, v1, v2, v3, v4, v5) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_3cuo.call(this, v0, v1, v2, v3, v4, v5);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.a(int,long,boolean,float,double,java.lang.String)', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_b_ce3l = com_mili_touch_musichunter_MusicHunterListCallback_clz.b.overload();
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_b_ce3l.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_b_ce3l.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.b()', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_asBinder_5u18 = com_mili_touch_musichunter_MusicHunterListCallback_clz.asBinder.overload();
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_asBinder_5u18.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_mili_touch_musichunter_MusicHunterListCallback_clz_method_asBinder_5u18.call(this);
        methodInBeat(invokeId, startTime, 'public android.os.IBinder com.mili.touch.musichunter.MusicHunterListCallback.asBinder()', executor);
        return ret;
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_c_k8i7 = com_mili_touch_musichunter_MusicHunterListCallback_clz.c.overload();
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_c_k8i7.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_c_k8i7.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.c()', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_d_165r = com_mili_touch_musichunter_MusicHunterListCallback_clz.d.overload();
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_d_165r.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_d_165r.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.d()', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_e_inep = com_mili_touch_musichunter_MusicHunterListCallback_clz.e.overload();
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_e_inep.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_e_inep.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.e()', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_f_r4gx = com_mili_touch_musichunter_MusicHunterListCallback_clz.f.overload();
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_f_r4gx.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_f_r4gx.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.f()', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_g_chk9 = com_mili_touch_musichunter_MusicHunterListCallback_clz.g.overload();
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_g_chk9.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_g_chk9.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.g()', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_h_4tma = com_mili_touch_musichunter_MusicHunterListCallback_clz.h.overload();
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_h_4tma.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_h_4tma.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.h()', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_i_jd4c = com_mili_touch_musichunter_MusicHunterListCallback_clz.i.overload();
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_i_jd4c.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_i_jd4c.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.i()', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_j_6afi = com_mili_touch_musichunter_MusicHunterListCallback_clz.j.overload();
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_j_6afi.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_j_6afi.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.j()', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_gemb = com_mili_touch_musichunter_MusicHunterListCallback_clz.a.overload('double');
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_gemb.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_gemb.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.a(double)', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_k_okps = com_mili_touch_musichunter_MusicHunterListCallback_clz.k.overload();
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_k_okps.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_k_okps.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.k()', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_q9bf = com_mili_touch_musichunter_MusicHunterListCallback_clz.a.overload('com.kugou.shiqutouch.server.bean.LinksInfo');
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_q9bf.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_q9bf.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.a(com.kugou.shiqutouch.server.bean.LinksInfo)', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_l_4poa = com_mili_touch_musichunter_MusicHunterListCallback_clz.l.overload();
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_l_4poa.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_l_4poa.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.l()', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_m_lfqk = com_mili_touch_musichunter_MusicHunterListCallback_clz.m.overload();
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_m_lfqk.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_m_lfqk.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.m()', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_n_9b6q = com_mili_touch_musichunter_MusicHunterListCallback_clz.n.overload();
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_n_9b6q.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_n_9b6q.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.n()', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_o_2hnh = com_mili_touch_musichunter_MusicHunterListCallback_clz.o.overload();
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_o_2hnh.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_o_2hnh.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.o()', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_n__txg8 = com_mili_touch_musichunter_MusicHunterListCallback_clz.n_.overload();
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_n__txg8.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_n__txg8.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.n_()', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_d7ya = com_mili_touch_musichunter_MusicHunterListCallback_clz.a.overload('java.lang.String');
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_d7ya.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_d7ya.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.a(java.lang.String)', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_b_lbbs = com_mili_touch_musichunter_MusicHunterListCallback_clz.b.overload('java.lang.String');
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_b_lbbs.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_b_lbbs.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.b(java.lang.String)', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_slg1 = com_mili_touch_musichunter_MusicHunterListCallback_clz.a.overload('boolean', 'java.util.List', 'long', 'java.lang.String', 'int', 'int', 'java.lang.String', 'java.lang.String');
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_slg1.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_slg1.call(this, v0, v1, v2, v3, v4, v5, v6, v7);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.a(boolean,java.util.List,long,java.lang.String,int,int,java.lang.String,java.lang.String)', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_onCancel_mzui = com_mili_touch_musichunter_MusicHunterListCallback_clz.onCancel.overload('java.lang.String', 'int');
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_onCancel_mzui.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_onCancel_mzui.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.onCancel(java.lang.String,int)', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_crbg = com_mili_touch_musichunter_MusicHunterListCallback_clz.a.overload('java.lang.String', 'int');
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_crbg.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_crbg.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.a(java.lang.String,int)', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_b_ueoj = com_mili_touch_musichunter_MusicHunterListCallback_clz.b.overload('int');
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_b_ueoj.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_b_ueoj.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.b(int)', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_vmja = com_mili_touch_musichunter_MusicHunterListCallback_clz.a.overload('int');
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_vmja.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_vmja.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.a(int)', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_nfq5 = com_mili_touch_musichunter_MusicHunterListCallback_clz.a.overload('int', 'java.lang.String');
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_nfq5.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_nfq5.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.a(int,java.lang.String)', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_c_v8l5 = com_mili_touch_musichunter_MusicHunterListCallback_clz.c.overload('java.lang.String');
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_c_v8l5.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_c_v8l5.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.c(java.lang.String)', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_xgrm = com_mili_touch_musichunter_MusicHunterListCallback_clz.a.overload('boolean');
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_xgrm.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_xgrm.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.a(boolean)', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_abm9 = com_mili_touch_musichunter_MusicHunterListCallback_clz.a.overload('java.lang.String', 'int', 'boolean', 'java.lang.String', 'java.lang.String');
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_abm9.implementation = function(v0, v1, v2, v3, v4) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_abm9.call(this, v0, v1, v2, v3, v4);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.a(java.lang.String,int,boolean,java.lang.String,java.lang.String)', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_areu = com_mili_touch_musichunter_MusicHunterListCallback_clz.a.overload('java.lang.String', 'com.mili.touch.musichunter.IMusicHunterListener');
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_areu.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_areu.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.a(java.lang.String,com.mili.touch.musichunter.IMusicHunterListener)', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_tg1p = com_mili_touch_musichunter_MusicHunterListCallback_clz.a.overload('java.util.List', 'long', 'int');
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_tg1p.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_tg1p.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.a(java.util.List,long,int)', executor);
    };
    var com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_a7dn = com_mili_touch_musichunter_MusicHunterListCallback_clz.a.overload('com.kugou.android.common.entity.KGSong', 'long');
    com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_a7dn.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_MusicHunterListCallback_clz_method_a_a7dn.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.MusicHunterListCallback.a(com.kugou.android.common.entity.KGSong,long)', executor);
    };
});