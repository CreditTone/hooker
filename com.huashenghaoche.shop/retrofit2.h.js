//crack by com.huashenghaoche.shop 3.1.1
//retrofit2.h:a
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
    loadDexfile('/data/user/0/com.huashenghaoche.shop/xinit/'+dexfile);
};

function loadXRadarDexfile() {
    loadDexfile('/data/user/0/com.huashenghaoche.shop/radar.dex');
};

function fastTojson(javaObject) {
    var JSONClz = Java.use("gz.com.alibaba.fastjson.JSON");
    var method = JSONClz.toJSONString.overload('java.lang.Object');
    return method.call(JSONClz, javaObject);
};

loadXRadarDexfile();
loadXinitDexfile("hshc-patch.dex");

//retrofit2.h:a
Java.perform(function() {
    var myOkHttpClient = Java.use('hshc.patch.MyOkHttpClient');
    var retrofit2_n_clz = Java.use('retrofit2.n');
    var retrofit2_n_clz_method_a_6121 = retrofit2_n_clz.a.overload('[Ljava.lang.Object;');
    var retrofit2_h_clz = Java.use('retrofit2.h');
    var retrofit2_h_clz_method_a_1488 = retrofit2_h_clz.a.overload();
    retrofit2_h_clz_method_a_1488.implementation = function() {
        //log("this.a.a:" + this.a.value);
        var executor = this.hashCode();
        var beatText = 'private okhttp3.e retrofit2.h.a() throws java.io.IOException';
        var beat = newMethodBeat(beatText, executor);
        var retrofit2nObj = myOkHttpClient.getRetrofit2n(this);
        var arrObjs = myOkHttpClient.getArrObjs(this);
        log(myOkHttpClient.getClassx(retrofit2nObj));
        //log(myOkHttpClient.getClassx(arrObjs));//err...
        var ad = retrofit2_n_clz_method_a_6121.call(retrofit2nObj, arrObjs);
        log(myOkHttpClient.getClassx(ad));
        //var ret = retrofit2_h_clz_method_a_1488.call(this);
        
        var ret = myOkHttpClient.newCall2(ad);
        log(myOkHttpClient.getClassx(ret));
        printBeat(beat);
        return ret;
    };
});