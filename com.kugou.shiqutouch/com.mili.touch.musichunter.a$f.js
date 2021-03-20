//com.mili.touch.musichunter.a$f:?
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
    var com_mili_touch_musichunter_a_f_clz = Java.use('com.mili.touch.musichunter.a$f');
    var com_mili_touch_musichunter_a_f_clz_method_a_8fy7 = com_mili_touch_musichunter_a_f_clz.a.overload();
    com_mili_touch_musichunter_a_f_clz_method_a_8fy7.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_f_clz_method_a_8fy7.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a$f.a()', executor);
    };
    var com_mili_touch_musichunter_a_f_clz_method_b_lyh2 = com_mili_touch_musichunter_a_f_clz.b.overload();
    com_mili_touch_musichunter_a_f_clz_method_b_lyh2.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_f_clz_method_b_lyh2.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a$f.b()', executor);
    };
    var com_mili_touch_musichunter_a_f_clz_method_c_qymd = com_mili_touch_musichunter_a_f_clz.c.overload();
    com_mili_touch_musichunter_a_f_clz_method_c_qymd.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_f_clz_method_c_qymd.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a$f.c()', executor);
    };
    var com_mili_touch_musichunter_a_f_clz_method_d_wons = com_mili_touch_musichunter_a_f_clz.d.overload();
    com_mili_touch_musichunter_a_f_clz_method_d_wons.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_f_clz_method_d_wons.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a$f.d()', executor);
    };
    var com_mili_touch_musichunter_a_f_clz_method_a_fgmu = com_mili_touch_musichunter_a_f_clz.a.overload('java.lang.String', 'int');
    com_mili_touch_musichunter_a_f_clz_method_a_fgmu.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_f_clz_method_a_fgmu.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a$f.a(java.lang.String,int)', executor);
    };
    var com_mili_touch_musichunter_a_f_clz_method_e_ucae = com_mili_touch_musichunter_a_f_clz.e.overload();
    com_mili_touch_musichunter_a_f_clz_method_e_ucae.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_f_clz_method_e_ucae.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a$f.e()', executor);
    };
    var com_mili_touch_musichunter_a_f_clz_method_a_mwvr = com_mili_touch_musichunter_a_f_clz.a.overload('int');
    com_mili_touch_musichunter_a_f_clz_method_a_mwvr.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_f_clz_method_a_mwvr.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a$f.a(int)', executor);
    };
    var com_mili_touch_musichunter_a_f_clz_method_f_2y6p = com_mili_touch_musichunter_a_f_clz.f.overload();
    com_mili_touch_musichunter_a_f_clz_method_f_2y6p.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_f_clz_method_f_2y6p.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a$f.f()', executor);
    };
    var com_mili_touch_musichunter_a_f_clz_method_g_7qrk = com_mili_touch_musichunter_a_f_clz.g.overload();
    com_mili_touch_musichunter_a_f_clz_method_g_7qrk.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_f_clz_method_g_7qrk.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a$f.g()', executor);
    };
    var com_mili_touch_musichunter_a_f_clz_method_h_zgb4 = com_mili_touch_musichunter_a_f_clz.h.overload();
    com_mili_touch_musichunter_a_f_clz_method_h_zgb4.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_f_clz_method_h_zgb4.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a$f.h()', executor);
    };
    var com_mili_touch_musichunter_a_f_clz_method_i_c0rp = com_mili_touch_musichunter_a_f_clz.i.overload();
    com_mili_touch_musichunter_a_f_clz_method_i_c0rp.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_f_clz_method_i_c0rp.call(this);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a$f.i()', executor);
    };
    var com_mili_touch_musichunter_a_f_clz_method_a_2iuh = com_mili_touch_musichunter_a_f_clz.a.overload('double');
    com_mili_touch_musichunter_a_f_clz_method_a_2iuh.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_f_clz_method_a_2iuh.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a$f.a(double)', executor);
    };
    var com_mili_touch_musichunter_a_f_clz_method_a_wer8 = com_mili_touch_musichunter_a_f_clz.a.overload('java.lang.String', 'int', 'boolean', 'java.lang.String', 'java.lang.String');
    com_mili_touch_musichunter_a_f_clz_method_a_wer8.implementation = function(v0, v1, v2, v3, v4) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_f_clz_method_a_wer8.call(this, v0, v1, v2, v3, v4);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a$f.a(java.lang.String,int,boolean,java.lang.String,java.lang.String)', executor);
    };
    var com_mili_touch_musichunter_a_f_clz_method_a_7myw = com_mili_touch_musichunter_a_f_clz.a.overload('boolean', 'com.kugou.framework.musichunter.c', 'long', 'java.lang.String', 'int', 'int', 'java.lang.String');
    com_mili_touch_musichunter_a_f_clz_method_a_7myw.implementation = function(v0, v1, v2, v3, v4, v5, v6) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_f_clz_method_a_7myw.call(this, v0, v1, v2, v3, v4, v5, v6);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a$f.a(boolean,com.kugou.framework.musichunter.c,long,java.lang.String,int,int,java.lang.String)', executor);
    };
    var com_mili_touch_musichunter_a_f_clz_method_onCancel_kkr4 = com_mili_touch_musichunter_a_f_clz.onCancel.overload('java.lang.String', 'int');
    com_mili_touch_musichunter_a_f_clz_method_onCancel_kkr4.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_mili_touch_musichunter_a_f_clz_method_onCancel_kkr4.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.mili.touch.musichunter.a$f.onCancel(java.lang.String,int)', executor);
    };
});