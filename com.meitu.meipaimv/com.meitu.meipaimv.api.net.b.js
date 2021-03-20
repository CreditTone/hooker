//crack by com.meitu.meipaimv 8.8.5
//com.meitu.meipaimv.api.net.b
function loadDexfile(dexfile) {
    Java.perform(function() {
          Java.openClassFile(dexfile).load();
          //console.log("load " + dexfile);
    });
};

function checkLoadDex(className, dexfile) {
    Java.perform(function() {
        if (!classExists(className)) {
            Java.openClassFile(dexfile).load();
            //console.log("load " + dexfile);
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
    var processClz = Java.use("android.os.Process");
    var currentThread = threadClz.currentThread();
    var beat = new Object();
    beat.invokeId = Math.random().toString(36).slice( - 8);
    beat.executor = executor;
    beat.myPid = processClz.myPid();
    beat.threadId = currentThread.getId();
    beat.threadName = currentThread.getName();
    beat.text = text;
    beat.startTime = new Date().getTime();
    beat.stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new()).substring(20);
    return beat;
};

function printBeat(beat) {
    var str = ("------------pid:" + beat.myPid + ",startFlag:" + beat.invokeId + ",objectHash:"+beat.executor+",thread(id:" + beat.threadId +",name:" + beat.threadName + "),timestamp:" + beat.startTime+"---------------\n");
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
    loadDexfile('/data/user/0/com.meitu.meipaimv/xinit/'+dexfile);
};

function loadXRadarDexfile() {
    loadDexfile('/data/user/0/com.meitu.meipaimv/radar.dex');
};

function fastTojson(javaObject) {
    var JSONClz = Java.use("gz.com.alibaba.fastjson.JSON");
    return JSONClz.toJSONString(javaObject);
};


//com.meitu.meipaimv.api.net.b
Java.perform(function() {
    var com_meitu_meipaimv_api_net_b_clz = Java.use('com.meitu.meipaimv.api.net.b');
    var com_meitu_meipaimv_api_net_b_clz_method_chg_4334 = com_meitu_meipaimv_api_net_b_clz.chg.overload();
    com_meitu_meipaimv_api_net_b_clz_method_chg_4334.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public java.util.concurrent.ThreadPoolExecutor com.meitu.meipaimv.api.net.b.chg()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_meitu_meipaimv_api_net_b_clz_method_chg_4334.call(this);
        printBeat(beat);
        return ret;
    };
    var com_meitu_meipaimv_api_net_b_clz_method_cancelAll_2129 = com_meitu_meipaimv_api_net_b_clz.cancelAll.overload();
    com_meitu_meipaimv_api_net_b_clz_method_cancelAll_2129.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public void com.meitu.meipaimv.api.net.b.cancelAll()';
        var beat = newMethodBeat(beatText, executor);
        com_meitu_meipaimv_api_net_b_clz_method_cancelAll_2129.call(this);
        printBeat(beat);
    };
    var com_meitu_meipaimv_api_net_b_clz_method_chf_0098 = com_meitu_meipaimv_api_net_b_clz.chf.overload();
    com_meitu_meipaimv_api_net_b_clz_method_chf_0098.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public void com.meitu.meipaimv.api.net.b.chf()';
        var beat = newMethodBeat(beatText, executor);
        com_meitu_meipaimv_api_net_b_clz_method_chf_0098.call(this);
        printBeat(beat);
    };
    var com_meitu_meipaimv_api_net_b_clz_method_lambda$BceDuacCOM3cCZYGQqQ86n9koAM_0028 = com_meitu_meipaimv_api_net_b_clz.lambda$BceDuacCOM3cCZYGQqQ86n9koAM.overload('com.meitu.meipaimv.api.net.b', 'java.lang.String', 'java.util.HashMap', 'java.util.HashMap', 'java.util.HashMap', 'com.meitu.meipaimv.api.net.d');
    com_meitu_meipaimv_api_net_b_clz_method_lambda$BceDuacCOM3cCZYGQqQ86n9koAM_0028.implementation = function(v0, v1, v2, v3, v4, v5) {
        var executor = 'Class';
        var beatText = 'public static void com.meitu.meipaimv.api.net.b.lambda$BceDuacCOM3cCZYGQqQ86n9koAM(com.meitu.meipaimv.api.net.b,java.lang.String,java.util.HashMap,java.util.HashMap,java.util.HashMap,com.meitu.meipaimv.api.net.d)';
        var beat = newMethodBeat(beatText, executor);
        com_meitu_meipaimv_api_net_b_clz_method_lambda$BceDuacCOM3cCZYGQqQ86n9koAM_0028.call(com_meitu_meipaimv_api_net_b_clz, v0, v1, v2, v3, v4, v5);
        printBeat(beat);
    };
    var com_meitu_meipaimv_api_net_b_clz_method_a_8971 = com_meitu_meipaimv_api_net_b_clz.a.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'boolean', 'com.meitu.meipaimv.api.net.c');
    com_meitu_meipaimv_api_net_b_clz_method_a_8971.implementation = function(v0, v1, v2, v3, v4) {
        var executor = this.hashCode();
        var beatText = 'public void com.meitu.meipaimv.api.net.b.a(java.lang.String,java.lang.String,java.lang.String,boolean,com.meitu.meipaimv.api.net.c)';
        var beat = newMethodBeat(beatText, executor);
        com_meitu_meipaimv_api_net_b_clz_method_a_8971.call(this, v0, v1, v2, v3, v4);
        printBeat(beat);
    };
    var com_meitu_meipaimv_api_net_b_clz_method_a_0181 = com_meitu_meipaimv_api_net_b_clz.a.overload('java.lang.String', 'java.util.HashMap', 'java.util.HashMap', 'java.util.HashMap', 'com.meitu.meipaimv.api.net.d');
    com_meitu_meipaimv_api_net_b_clz_method_a_0181.implementation = function(v0, v1, v2, v3, v4) {
        var executor = 'Class';
        var beatText = 'private static com.meitu.grace.http.c com.meitu.meipaimv.api.net.b.a(java.lang.String,java.util.HashMap,java.util.HashMap,java.util.HashMap,com.meitu.meipaimv.api.net.d)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_meitu_meipaimv_api_net_b_clz_method_a_0181.call(com_meitu_meipaimv_api_net_b_clz, v0, v1, v2, v3, v4);
        printBeat(beat);
        return ret;
    };
    var com_meitu_meipaimv_api_net_b_clz_method_b_6458 = com_meitu_meipaimv_api_net_b_clz.b.overload('java.lang.String', 'java.util.HashMap', 'java.util.HashMap', 'java.util.HashMap', 'com.meitu.meipaimv.api.net.d');
    com_meitu_meipaimv_api_net_b_clz_method_b_6458.implementation = function(v0, v1, v2, v3, v4) {
        var executor = this.hashCode();
        var beatText = 'public void com.meitu.meipaimv.api.net.b.b(java.lang.String,java.util.HashMap,java.util.HashMap,java.util.HashMap,com.meitu.meipaimv.api.net.d)';
        var beat = newMethodBeat(beatText, executor);
        com_meitu_meipaimv_api_net_b_clz_method_b_6458.call(this, v0, v1, v2, v3, v4);
        printBeat(beat);
    };
    var com_meitu_meipaimv_api_net_b_clz_method_Cf_1444 = com_meitu_meipaimv_api_net_b_clz.Cf.overload('java.lang.String');
    com_meitu_meipaimv_api_net_b_clz_method_Cf_1444.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'private static void com.meitu.meipaimv.api.net.b.Cf(java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        com_meitu_meipaimv_api_net_b_clz_method_Cf_1444.call(com_meitu_meipaimv_api_net_b_clz, v0);
        printBeat(beat);
    };
    var com_meitu_meipaimv_api_net_b_clz_method_c_3404 = com_meitu_meipaimv_api_net_b_clz.c.overload('java.lang.String', 'java.util.HashMap', 'java.util.HashMap', 'java.util.HashMap', 'com.meitu.meipaimv.api.net.d');
    com_meitu_meipaimv_api_net_b_clz_method_c_3404.implementation = function(v0, v1, v2, v3, v4) {
        var executor = this.hashCode();
        var beatText = 'private void com.meitu.meipaimv.api.net.b.c(java.lang.String,java.util.HashMap,java.util.HashMap,java.util.HashMap,com.meitu.meipaimv.api.net.d)';
        var beat = newMethodBeat(beatText, executor);
        com_meitu_meipaimv_api_net_b_clz_method_c_3404.call(this, v0, v1, v2, v3, v4);
        printBeat(beat);
    };
    var com_meitu_meipaimv_api_net_b_clz_method_Cg_9986 = com_meitu_meipaimv_api_net_b_clz.Cg.overload('java.lang.String');
    com_meitu_meipaimv_api_net_b_clz_method_Cg_9986.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static com.meitu.grace.http.c com.meitu.meipaimv.api.net.b.Cg(java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_meitu_meipaimv_api_net_b_clz_method_Cg_9986.call(com_meitu_meipaimv_api_net_b_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_meitu_meipaimv_api_net_b_clz_method_d_3504 = com_meitu_meipaimv_api_net_b_clz.d.overload('java.lang.String', 'java.util.HashMap', 'java.util.HashMap', 'java.util.HashMap', 'com.meitu.meipaimv.api.net.d');
    com_meitu_meipaimv_api_net_b_clz_method_d_3504.implementation = function(v0, v1, v2, v3, v4) {
        var executor = 'Class';
        var beatText = 'static com.meitu.grace.http.c com.meitu.meipaimv.api.net.b.d(java.lang.String,java.util.HashMap,java.util.HashMap,java.util.HashMap,com.meitu.meipaimv.api.net.d)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_meitu_meipaimv_api_net_b_clz_method_d_3504.call(com_meitu_meipaimv_api_net_b_clz, v0, v1, v2, v3, v4);
        printBeat(beat);
        return ret;
    };
    var com_meitu_meipaimv_api_net_b_clz_method_Ch_0311 = com_meitu_meipaimv_api_net_b_clz.Ch.overload('java.lang.String');
    com_meitu_meipaimv_api_net_b_clz_method_Ch_0311.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'private static boolean com.meitu.meipaimv.api.net.b.Ch(java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_meitu_meipaimv_api_net_b_clz_method_Ch_0311.call(com_meitu_meipaimv_api_net_b_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_meitu_meipaimv_api_net_b_clz_method_Ci_7121 = com_meitu_meipaimv_api_net_b_clz.Ci.overload('java.lang.String');
    com_meitu_meipaimv_api_net_b_clz_method_Ci_7121.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'private static void com.meitu.meipaimv.api.net.b.Ci(java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        com_meitu_meipaimv_api_net_b_clz_method_Ci_7121.call(com_meitu_meipaimv_api_net_b_clz, v0);
        printBeat(beat);
    };
    var com_meitu_meipaimv_api_net_b_clz_method_aYC_9667 = com_meitu_meipaimv_api_net_b_clz.aYC.overload();
    com_meitu_meipaimv_api_net_b_clz_method_aYC_9667.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public com.meitu.grace.http.a com.meitu.meipaimv.api.net.b.aYC()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_meitu_meipaimv_api_net_b_clz_method_aYC_9667.call(this);
        printBeat(beat);
        return ret;
    };
    var com_meitu_meipaimv_api_net_b_clz_method_Cj_2657 = com_meitu_meipaimv_api_net_b_clz.Cj.overload('java.lang.String');
    com_meitu_meipaimv_api_net_b_clz_method_Cj_2657.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'static void com.meitu.meipaimv.api.net.b.Cj(java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        com_meitu_meipaimv_api_net_b_clz_method_Cj_2657.call(com_meitu_meipaimv_api_net_b_clz, v0);
        printBeat(beat);
    };
    var com_meitu_meipaimv_api_net_b_clz_method_Ck_7726 = com_meitu_meipaimv_api_net_b_clz.Ck.overload('java.lang.String');
    com_meitu_meipaimv_api_net_b_clz_method_Ck_7726.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'static void com.meitu.meipaimv.api.net.b.Ck(java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        com_meitu_meipaimv_api_net_b_clz_method_Ck_7726.call(com_meitu_meipaimv_api_net_b_clz, v0);
        printBeat(beat);
    };
    var com_meitu_meipaimv_api_net_b_clz_method_a_7425 = com_meitu_meipaimv_api_net_b_clz.a.overload('com.meitu.grace.http.c', 'com.meitu.meipaimv.api.net.d', 'com.meitu.grace.http.b');
    com_meitu_meipaimv_api_net_b_clz_method_a_7425.implementation = function(v0, v1, v2) {
        var executor = this.hashCode();
        var beatText = 'private void com.meitu.meipaimv.api.net.b.a(com.meitu.grace.http.c,com.meitu.meipaimv.api.net.d,com.meitu.grace.http.b)';
        var beat = newMethodBeat(beatText, executor);
        com_meitu_meipaimv_api_net_b_clz_method_a_7425.call(this, v0, v1, v2);
        printBeat(beat);
    };
    var com_meitu_meipaimv_api_net_b_clz_method_a_8683 = com_meitu_meipaimv_api_net_b_clz.a.overload('com.meitu.grace.http.c', 'com.meitu.grace.http.d');
    com_meitu_meipaimv_api_net_b_clz_method_a_8683.implementation = function(v0, v1) {
        var executor = this.hashCode();
        var beatText = 'private void com.meitu.meipaimv.api.net.b.a(com.meitu.grace.http.c,com.meitu.grace.http.d)';
        var beat = newMethodBeat(beatText, executor);
        com_meitu_meipaimv_api_net_b_clz_method_a_8683.call(this, v0, v1);
        printBeat(beat);
    };
    var com_meitu_meipaimv_api_net_b_clz_method_b_3655 = com_meitu_meipaimv_api_net_b_clz.b.overload('java.lang.String', 'java.util.HashMap', 'java.util.HashMap', 'java.util.HashMap', 'com.meitu.meipaimv.api.net.d', 'com.meitu.grace.http.b');
    com_meitu_meipaimv_api_net_b_clz_method_b_3655.implementation = function(v0, v1, v2, v3, v4, v5) {
        var executor = this.hashCode();
        var beatText = 'public void com.meitu.meipaimv.api.net.b.b(java.lang.String,java.util.HashMap,java.util.HashMap,java.util.HashMap,com.meitu.meipaimv.api.net.d,com.meitu.grace.http.b)';
        var beat = newMethodBeat(beatText, executor);
        com_meitu_meipaimv_api_net_b_clz_method_b_3655.call(this, v0, v1, v2, v3, v4, v5);
        printBeat(beat);
    };
    var com_meitu_meipaimv_api_net_b_clz_method_a_5969 = com_meitu_meipaimv_api_net_b_clz.a.overload('java.lang.String', 'java.util.HashMap', 'java.util.HashMap', 'java.util.HashMap', 'com.meitu.meipaimv.api.net.d', 'com.meitu.grace.http.b');
    com_meitu_meipaimv_api_net_b_clz_method_a_5969.implementation = function(v0, v1, v2, v3, v4, v5) {
        var executor = this.hashCode();
        var beatText = 'public void com.meitu.meipaimv.api.net.b.a(java.lang.String,java.util.HashMap,java.util.HashMap,java.util.HashMap,com.meitu.meipaimv.api.net.d,com.meitu.grace.http.b)';
        var beat = newMethodBeat(beatText, executor);
        com_meitu_meipaimv_api_net_b_clz_method_a_5969.call(this, v0, v1, v2, v3, v4, v5);
        printBeat(beat);
    };
    var com_meitu_meipaimv_api_net_b_clz_method_a_6777 = com_meitu_meipaimv_api_net_b_clz.a.overload('java.lang.String', 'com.meitu.grace.http.c');
    com_meitu_meipaimv_api_net_b_clz_method_a_6777.implementation = function(v0, v1) {
        var executor = this.hashCode();
        var beatText = 'private void com.meitu.meipaimv.api.net.b.a(java.lang.String,com.meitu.grace.http.c)';
        var beat = newMethodBeat(beatText, executor);
        com_meitu_meipaimv_api_net_b_clz_method_a_6777.call(this, v0, v1);
        printBeat(beat);
    };
    var com_meitu_meipaimv_api_net_b_clz_method_vN_1134 = com_meitu_meipaimv_api_net_b_clz.vN.overload('java.lang.String');
    com_meitu_meipaimv_api_net_b_clz_method_vN_1134.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public void com.meitu.meipaimv.api.net.b.vN(java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        com_meitu_meipaimv_api_net_b_clz_method_vN_1134.call(this, v0);
        printBeat(beat);
    };
    var com_meitu_meipaimv_api_net_b_clz_method_ai_3158 = com_meitu_meipaimv_api_net_b_clz.ai.overload('java.io.InputStream');
    com_meitu_meipaimv_api_net_b_clz_method_ai_3158.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static java.lang.String com.meitu.meipaimv.api.net.b.ai(java.io.InputStream) throws java.io.IOException';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_meitu_meipaimv_api_net_b_clz_method_ai_3158.call(com_meitu_meipaimv_api_net_b_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_meitu_meipaimv_api_net_b_clz_method_b_0378 = com_meitu_meipaimv_api_net_b_clz.b.overload('java.lang.String', 'com.meitu.grace.http.c');
    com_meitu_meipaimv_api_net_b_clz_method_b_0378.implementation = function(v0, v1) {
        var executor = this.hashCode();
        var beatText = 'private void com.meitu.meipaimv.api.net.b.b(java.lang.String,com.meitu.grace.http.c)';
        var beat = newMethodBeat(beatText, executor);
        com_meitu_meipaimv_api_net_b_clz_method_b_0378.call(this, v0, v1);
        printBeat(beat);
    };
    var com_meitu_meipaimv_api_net_b_clz_method_getUserAgent_9605 = com_meitu_meipaimv_api_net_b_clz.getUserAgent.overload();
    com_meitu_meipaimv_api_net_b_clz_method_getUserAgent_9605.implementation = function() {
        var executor = 'Class';
        var beatText = 'public static java.lang.String com.meitu.meipaimv.api.net.b.getUserAgent()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_meitu_meipaimv_api_net_b_clz_method_getUserAgent_9605.call(com_meitu_meipaimv_api_net_b_clz);
        printBeat(beat);
        return ret;
    };
    var com_meitu_meipaimv_api_net_b_clz_method_a_8522 = com_meitu_meipaimv_api_net_b_clz.a.overload('com.meitu.meipaimv.api.net.a');
    com_meitu_meipaimv_api_net_b_clz_method_a_8522.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public java.lang.String com.meitu.meipaimv.api.net.b.a(com.meitu.meipaimv.api.net.a)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_meitu_meipaimv_api_net_b_clz_method_a_8522.call(this, v0);
        printBeat(beat);
        return ret;
    };
    var com_meitu_meipaimv_api_net_b_clz_method_a_6322 = com_meitu_meipaimv_api_net_b_clz.a.overload('java.lang.String', 'java.lang.String', 'boolean', 'com.meitu.meipaimv.api.net.c');
    com_meitu_meipaimv_api_net_b_clz_method_a_6322.implementation = function(v0, v1, v2, v3) {
        var executor = this.hashCode();
        var beatText = 'public void com.meitu.meipaimv.api.net.b.a(java.lang.String,java.lang.String,boolean,com.meitu.meipaimv.api.net.c)';
        var beat = newMethodBeat(beatText, executor);
        com_meitu_meipaimv_api_net_b_clz_method_a_6322.call(this, v0, v1, v2, v3);
        printBeat(beat);
    };
    var com_meitu_meipaimv_api_net_b_clz_method_a_0553 = com_meitu_meipaimv_api_net_b_clz.a.overload('com.meitu.meipaimv.api.net.a', 'java.lang.String');
    com_meitu_meipaimv_api_net_b_clz_method_a_0553.implementation = function(v0, v1) {
        var executor = this.hashCode();
        var beatText = 'private boolean com.meitu.meipaimv.api.net.b.a(com.meitu.meipaimv.api.net.a,java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_meitu_meipaimv_api_net_b_clz_method_a_0553.call(this, v0, v1);
        printBeat(beat);
        return ret;
    };
    var com_meitu_meipaimv_api_net_b_clz_method_a_6763 = com_meitu_meipaimv_api_net_b_clz.a.overload('java.lang.String', 'java.lang.String', 'boolean', 'com.meitu.meipaimv.api.net.c', 'java.lang.String');
    com_meitu_meipaimv_api_net_b_clz_method_a_6763.implementation = function(v0, v1, v2, v3, v4) {
        var executor = this.hashCode();
        var beatText = 'public void com.meitu.meipaimv.api.net.b.a(java.lang.String,java.lang.String,boolean,com.meitu.meipaimv.api.net.c,java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        com_meitu_meipaimv_api_net_b_clz_method_a_6763.call(this, v0, v1, v2, v3, v4);
        printBeat(beat);
    };
    var com_meitu_meipaimv_api_net_b_clz_method_c_1125 = com_meitu_meipaimv_api_net_b_clz.c.overload('java.io.InputStream', 'long');
    com_meitu_meipaimv_api_net_b_clz_method_c_1125.implementation = function(v0, v1) {
        var executor = 'Class';
        var beatText = 'public static java.lang.String com.meitu.meipaimv.api.net.b.c(java.io.InputStream,long) throws java.io.IOException';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_meitu_meipaimv_api_net_b_clz_method_c_1125.call(com_meitu_meipaimv_api_net_b_clz, v0, v1);
        printBeat(beat);
        return ret;
    };
    var com_meitu_meipaimv_api_net_b_clz_method_a_3888 = com_meitu_meipaimv_api_net_b_clz.a.overload('com.meitu.meipaimv.api.net.b$a');
    com_meitu_meipaimv_api_net_b_clz_method_a_3888.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public void com.meitu.meipaimv.api.net.b.a(com.meitu.meipaimv.api.net.b$a)';
        var beat = newMethodBeat(beatText, executor);
        com_meitu_meipaimv_api_net_b_clz_method_a_3888.call(this, v0);
        printBeat(beat);
    };
    var com_meitu_meipaimv_api_net_b_clz_method_eg_4502 = com_meitu_meipaimv_api_net_b_clz.eg.overload('java.lang.Object');
    com_meitu_meipaimv_api_net_b_clz_method_eg_4502.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public void com.meitu.meipaimv.api.net.b.eg(java.lang.Object)';
        var beat = newMethodBeat(beatText, executor);
        com_meitu_meipaimv_api_net_b_clz_method_eg_4502.call(this, v0);
        printBeat(beat);
    };
    var com_meitu_meipaimv_api_net_b_clz_method_che_4581 = com_meitu_meipaimv_api_net_b_clz.che.overload();
    com_meitu_meipaimv_api_net_b_clz_method_che_4581.implementation = function() {
        var executor = 'Class';
        var beatText = 'public static com.meitu.meipaimv.api.net.b com.meitu.meipaimv.api.net.b.che()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_meitu_meipaimv_api_net_b_clz_method_che_4581.call(com_meitu_meipaimv_api_net_b_clz);
        printBeat(beat);
        return ret;
    };
    var com_meitu_meipaimv_api_net_b_clz_init_9193 = com_meitu_meipaimv_api_net_b_clz.$init.overload();
    com_meitu_meipaimv_api_net_b_clz_init_9193.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'private com.meitu.meipaimv.api.net.b()';
        var beat = newMethodBeat(beatText, executor);
        var returnObj = com_meitu_meipaimv_api_net_b_clz_init_9193.call(this);
        printBeat(beat);
        return returnObj;
    };
});