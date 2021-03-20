//crack by com.ttpc.bidding_hall 3.4.9
//consumer.ttpc.com.httpmodule.d.d.a
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
    loadDexfile('/data/user/0/com.ttpc.bidding_hall/xinit/'+dexfile);
};

function loadXRadarDexfile() {
    loadDexfile('/data/user/0/com.ttpc.bidding_hall/radar.dex');
};

function fastTojson(javaObject) {
    var JSONClz = Java.use("gz.com.alibaba.fastjson.JSON");
    return JSONClz.toJSONString(javaObject);
};

function getPrettyString(javaObject) {
    var XPretty = Java.use("gz.util.XPretty");
    return XPretty.getPrettyString(javaObject);
};

function getField(javaObject, fieldName) {
    var X = Java.use("gz.util.X");
    return X.getField(javaObject, fieldName);
};

loadXRadarDexfile();
//loadXinitDexfile("ttpai-patch.dex");


Java.perform(function() {
    var biddingHall = Java.use("com.ttpc.bidding_hall.a");
    log("加密so库:"+biddingHall.a("PhoZLAYQARwE"));
    log("Base64加密格式:"+biddingHall.a("AQAWTFE="));
    log("MDEj解密:"+biddingHall.a("MDEj"));
    log("MDEjTio2N18xIjcnRTEIEBAZDw4=:"+biddingHall.a("MDEjTio2N18xIjcnRTEIEBAZDw4="));
    log("ISA2TFE=:"+biddingHall.a("ISA2TFE="));
    log("TU0=:"+biddingHall.a("TU0="));
});

//consumer.ttpc.com.httpmodule.d.d.a
Java.perform(function() {
    var consumer_ttpc_com_httpmodule_d_d_a_clz = Java.use('consumer.ttpc.com.httpmodule.d.d.a');
    var consumer_ttpc_com_httpmodule_d_d_a_clz_method_b_9547 = consumer_ttpc_com_httpmodule_d_d_a_clz.b.overload('java.lang.Object');
    consumer_ttpc_com_httpmodule_d_d_a_clz_method_b_9547.implementation = function(v0) {
        var inputClass = getClassName(v0);
        var ret = consumer_ttpc_com_httpmodule_d_d_a_clz_method_b_9547.call(this, v0);
        log("输入参数:"+inputClass + " tojson:" + fastTojson(v0));
        if (inputClass == "com.ttp.data.bean.request.BiddingHallRequest") {
            var executor = this.hashCode();
            var beatText = 'public okhttp3.RequestBody consumer.ttpc.com.httpmodule.d.d.a.b(java.lang.Object) throws java.io.IOException';
            var beat = newMethodBeat(beatText, executor);
            printBeat(beat);
        }
        return ret;
    };
    
});
