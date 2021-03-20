//crack by com.tencent.mm 7.0.12
//com.tencent.mm.app.WorkerProfile
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

function newMethodBeat(text, executor) {
    var threadClz = Java.use("java.lang.Thread");
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var currentThread = threadClz.currentThread();
    var beat = new Object();
    beat.invokeId = Math.random().toString(36).slice( - 8);
    beat.executor = executor;
    beat.threadId = currentThread.getId();
    beat.threadName = currentThread.getName();
    beat.text = text;
    beat.startTime = new Date().getTime();
    beat.stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new()).substring(20);
    return beat;
};

function printBeat(beat) {
    var str = ("------------startFlag:" + beat.invokeId + ",objectHash:"+beat.executor+",thread(id:" + beat.threadId +",name:" + beat.threadName + "),timestamp:" + beat.startTime+"---------------\n");
    str += beat.text + "\n";
    str += beat.stackInfo;
    str += ("------------endFlag:" + beat.invokeId + ",usedtime:" + (new Date().getTime() - beat.startTime) +"---------------\n");
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
    loadDexfile('/data/user/0/com.tencent.mm/xinit/'+dexfile);
};

function loadXRadarDexfile() {
    loadDexfile('/data/user/0/com.tencent.mm/radar.dex');
};

function fastTojson(javaObject) {
    var JSONClz = Java.use("gz.com.alibaba.fastjson.JSON");
    return JSONClz.toJSONString(javaObject);
};


//com.tencent.mm.app.WorkerProfile
Java.perform(function() {
    var com_tencent_mm_app_WorkerProfile_clz = Java.use('com.tencent.mm.app.WorkerProfile');
    var com_tencent_mm_app_WorkerProfile_clz_method_onCreate_6usc = com_tencent_mm_app_WorkerProfile_clz.onCreate.overload();
    com_tencent_mm_app_WorkerProfile_clz_method_onCreate_6usc.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.app.WorkerProfile.onCreate()';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_app_WorkerProfile_clz_method_onCreate_6usc.call(this);
        printBeat(beat);
    };
    var com_tencent_mm_app_WorkerProfile_clz_method_a_rdmi = com_tencent_mm_app_WorkerProfile_clz.a.overload('com.tencent.mm.app.WorkerProfile', 'com.tencent.mm.booter.notification.a.g');
    com_tencent_mm_app_WorkerProfile_clz_method_a_rdmi.implementation = function(v0, v1) {
        var executor = 'Class';
        var beatText = 'static com.tencent.mm.booter.notification.a.g com.tencent.mm.app.WorkerProfile.a(com.tencent.mm.app.WorkerProfile,com.tencent.mm.booter.notification.a.g)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_app_WorkerProfile_clz_method_a_rdmi.call(com_tencent_mm_app_WorkerProfile_clz, v0, v1);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_app_WorkerProfile_clz_method_b_67cs = com_tencent_mm_app_WorkerProfile_clz.b.overload('com.tencent.mm.app.WorkerProfile');
    com_tencent_mm_app_WorkerProfile_clz_method_b_67cs.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'static com.tencent.mm.booter.notification.a.g com.tencent.mm.app.WorkerProfile.b(com.tencent.mm.app.WorkerProfile)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_app_WorkerProfile_clz_method_b_67cs.call(com_tencent_mm_app_WorkerProfile_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_app_WorkerProfile_clz_method_KX_0nhf = com_tencent_mm_app_WorkerProfile_clz.KX.overload();
    com_tencent_mm_app_WorkerProfile_clz_method_KX_0nhf.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.app.WorkerProfile.KX()';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_app_WorkerProfile_clz_method_KX_0nhf.call(this);
        printBeat(beat);
    };
    var com_tencent_mm_app_WorkerProfile_clz_method_fm_fxf6 = com_tencent_mm_app_WorkerProfile_clz.fm.overload('java.lang.String');
    com_tencent_mm_app_WorkerProfile_clz_method_fm_fxf6.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.app.WorkerProfile.fm(java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_app_WorkerProfile_clz_method_fm_fxf6.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_app_WorkerProfile_clz_method_c_bp3f = com_tencent_mm_app_WorkerProfile_clz.c.overload('com.tencent.mm.app.WorkerProfile');
    com_tencent_mm_app_WorkerProfile_clz_method_c_bp3f.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'static int com.tencent.mm.app.WorkerProfile.c(com.tencent.mm.app.WorkerProfile)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_app_WorkerProfile_clz_method_c_bp3f.call(com_tencent_mm_app_WorkerProfile_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_app_WorkerProfile_clz_method_KY_rjrr = com_tencent_mm_app_WorkerProfile_clz.KY.overload();
    com_tencent_mm_app_WorkerProfile_clz_method_KY_rjrr.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.app.WorkerProfile.KY()';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_app_WorkerProfile_clz_method_KY_rjrr.call(this);
        printBeat(beat);
    };
    var com_tencent_mm_app_WorkerProfile_clz_method_fn_kibq = com_tencent_mm_app_WorkerProfile_clz.fn.overload('java.lang.String');
    com_tencent_mm_app_WorkerProfile_clz_method_fn_kibq.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.app.WorkerProfile.fn(java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_app_WorkerProfile_clz_method_fn_kibq.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_app_WorkerProfile_clz_method_a_rcvo = com_tencent_mm_app_WorkerProfile_clz.a.overload('com.tencent.mm.app.WorkerProfile');
    com_tencent_mm_app_WorkerProfile_clz_method_a_rcvo.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'static boolean com.tencent.mm.app.WorkerProfile.a(com.tencent.mm.app.WorkerProfile)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_app_WorkerProfile_clz_method_a_rcvo.call(com_tencent_mm_app_WorkerProfile_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_app_WorkerProfile_clz_method_a_a711 = com_tencent_mm_app_WorkerProfile_clz.a.overload('com.tencent.mm.app.WorkerProfile', 'int');
    com_tencent_mm_app_WorkerProfile_clz_method_a_a711.implementation = function(v0, v1) {
        var executor = 'Class';
        var beatText = 'static int com.tencent.mm.app.WorkerProfile.a(com.tencent.mm.app.WorkerProfile,int)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_app_WorkerProfile_clz_method_a_a711.call(com_tencent_mm_app_WorkerProfile_clz, v0, v1);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_app_WorkerProfile_clz_method_LJ_9535 = com_tencent_mm_app_WorkerProfile_clz.LJ.overload();
    com_tencent_mm_app_WorkerProfile_clz_method_LJ_9535.implementation = function() {
        var executor = 'Class';
        var beatText = 'public static com.tencent.mm.app.WorkerProfile com.tencent.mm.app.WorkerProfile.LJ()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_app_WorkerProfile_clz_method_LJ_9535.call(com_tencent_mm_app_WorkerProfile_clz);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_app_WorkerProfile_clz_method_toString_cczc = com_tencent_mm_app_WorkerProfile_clz.toString.overload();
    com_tencent_mm_app_WorkerProfile_clz_method_toString_cczc.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final java.lang.String com.tencent.mm.app.WorkerProfile.toString()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_app_WorkerProfile_clz_method_toString_cczc.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_app_WorkerProfile_clz_method_LK_2pnv = com_tencent_mm_app_WorkerProfile_clz.LK.overload();
    com_tencent_mm_app_WorkerProfile_clz_method_LK_2pnv.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final com.tencent.mm.storage.be$b com.tencent.mm.app.WorkerProfile.LK()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_app_WorkerProfile_clz_method_LK_2pnv.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_app_WorkerProfile_clz_method_LL_8dmp = com_tencent_mm_app_WorkerProfile_clz.LL.overload();
    com_tencent_mm_app_WorkerProfile_clz_method_LL_8dmp.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final com.tencent.mm.model.ah com.tencent.mm.app.WorkerProfile.LL()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_app_WorkerProfile_clz_method_LL_8dmp.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_app_WorkerProfile_clz_method_onTerminate_07a7 = com_tencent_mm_app_WorkerProfile_clz.onTerminate.overload();
    com_tencent_mm_app_WorkerProfile_clz_method_onTerminate_07a7.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.app.WorkerProfile.onTerminate()';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_app_WorkerProfile_clz_method_onTerminate_07a7.call(this);
        printBeat(beat);
    };
    var com_tencent_mm_app_WorkerProfile_clz_method_getNotification_qifp = com_tencent_mm_app_WorkerProfile_clz.getNotification.overload();
    com_tencent_mm_app_WorkerProfile_clz_method_getNotification_qifp.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final com.tencent.mm.model.aq com.tencent.mm.app.WorkerProfile.getNotification()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_app_WorkerProfile_clz_method_getNotification_qifp.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_app_WorkerProfile_clz_method_d_sphd = com_tencent_mm_app_WorkerProfile_clz.d.overload('com.tencent.mm.app.WorkerProfile');
    com_tencent_mm_app_WorkerProfile_clz_method_d_sphd.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'static java.lang.StringBuilder com.tencent.mm.app.WorkerProfile.d(com.tencent.mm.app.WorkerProfile)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_app_WorkerProfile_clz_method_d_sphd.call(com_tencent_mm_app_WorkerProfile_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_app_WorkerProfile_clz_method_onConfigurationChanged_ct8w = com_tencent_mm_app_WorkerProfile_clz.onConfigurationChanged.overload('android.content.res.Configuration');
    com_tencent_mm_app_WorkerProfile_clz_method_onConfigurationChanged_ct8w.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.app.WorkerProfile.onConfigurationChanged(android.content.res.Configuration)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_app_WorkerProfile_clz_method_onConfigurationChanged_ct8w.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_app_WorkerProfile_clz_method_onReportKVDataReady_0avf = com_tencent_mm_app_WorkerProfile_clz.onReportKVDataReady.overload('[B', '[B', 'int');
    com_tencent_mm_app_WorkerProfile_clz_method_onReportKVDataReady_0avf.implementation = function(v0, v1, v2) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.app.WorkerProfile.onReportKVDataReady(byte[],byte[],int)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_app_WorkerProfile_clz_method_onReportKVDataReady_0avf.call(this, v0, v1, v2);
        printBeat(beat);
    };
    var com_tencent_mm_app_WorkerProfile_clz_method_onSceneEnd_8zgk = com_tencent_mm_app_WorkerProfile_clz.onSceneEnd.overload('int', 'int', 'java.lang.String', 'com.tencent.mm.ak.m');
    com_tencent_mm_app_WorkerProfile_clz_method_onSceneEnd_8zgk.implementation = function(v0, v1, v2, v3) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.app.WorkerProfile.onSceneEnd(int,int,java.lang.String,com.tencent.mm.ak.m)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_app_WorkerProfile_clz_method_onSceneEnd_8zgk.call(this, v0, v1, v2, v3);
        printBeat(beat);
    };
    var com_tencent_mm_app_WorkerProfile_clz_init_feb5 = com_tencent_mm_app_WorkerProfile_clz.$init.overload();
    com_tencent_mm_app_WorkerProfile_clz_init_feb5.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public com.tencent.mm.app.WorkerProfile()';
        var beat = newMethodBeat(beatText, executor);
        var returnObj = com_tencent_mm_app_WorkerProfile_clz_init_feb5.call(this);
        printBeat(beat);
        return returnObj;
    };
});