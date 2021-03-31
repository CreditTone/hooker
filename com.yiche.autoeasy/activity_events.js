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

function fastTojson(javaObject) {
    var JSONClz = Java.use("gz.com.alibaba.fastjson.JSON");
    return JSONClz.toJSONString(javaObject);
};

loadDexfile('/data/user/0/com.yiche.autoeasy/radar.dex');

Java.perform(function() {
    var radarAndroidClz = Java.use("gz.radar.Android");
    var android_content_ContextWrapper_clz = Java.use('android.content.ContextWrapper');
    var android_content_ContextWrapper_clz_method_startActivity_r7jq = android_content_ContextWrapper_clz.startActivity.overload('android.content.Intent', 'android.os.Bundle');
    android_content_ContextWrapper_clz_method_startActivity_r7jq.implementation = function(v0, v1) { 
        log("Intent>>>>>>>"+radarAndroidClz.getIntentProfile(v0));
        log("Bundle>>>>>>>"+radarAndroidClz.getBundleProfile(v1));
        var executor = this.hashCode();
        var beatText = 'public void android.content.ContextWrapper.startActivity(android.content.Intent,android.os.Bundle)';
        var beat = newMethodBeat(beatText, executor);
        android_content_ContextWrapper_clz_method_startActivity_r7jq.call(this, v0, v1);
        printBeat(beat);
    };
    var android_content_ContextWrapper_clz_method_startActivity_auep = android_content_ContextWrapper_clz.startActivity.overload('android.content.Intent');
    android_content_ContextWrapper_clz_method_startActivity_auep.implementation = function(v0) {
        log("Intent>>>>>>>"+radarAndroidClz.getIntentProfile(v0));
        var executor = this.hashCode();
        var beatText = 'public void android.content.ContextWrapper.startActivity(android.content.Intent)';
        var beat = newMethodBeat(beatText, executor);
        android_content_ContextWrapper_clz_method_startActivity_auep.call(this, v0);
        printBeat(beat);
    };
    var android_content_ContextWrapper_clz_method_startActivityAsUser_adh6 = android_content_ContextWrapper_clz.startActivityAsUser.overload('android.content.Intent', 'android.os.UserHandle');
    android_content_ContextWrapper_clz_method_startActivityAsUser_adh6.implementation = function(v0, v1) {
        log("Intent>>>>>>>"+radarAndroidClz.getIntentProfile(v0));
        var executor = this.hashCode();
        var beatText = 'public void android.content.ContextWrapper.startActivityAsUser(android.content.Intent,android.os.UserHandle)';
        var beat = newMethodBeat(beatText, executor);
        android_content_ContextWrapper_clz_method_startActivityAsUser_adh6.call(this, v0, v1);
        printBeat(beat);
    };
    var android_content_ContextWrapper_clz_method_startActivityAsUser_ilkk = android_content_ContextWrapper_clz.startActivityAsUser.overload('android.content.Intent', 'android.os.Bundle', 'android.os.UserHandle');
    android_content_ContextWrapper_clz_method_startActivityAsUser_ilkk.implementation = function(v0, v1, v2) {
        log("Intent>>>>>>>"+radarAndroidClz.getIntentProfile(v0));
        log("Bundle>>>>>>>"+radarAndroidClz.getBundleProfile(v1));
        var executor = this.hashCode();
        var beatText = 'public void android.content.ContextWrapper.startActivityAsUser(android.content.Intent,android.os.Bundle,android.os.UserHandle)';
        var beat = newMethodBeat(beatText, executor);
        android_content_ContextWrapper_clz_method_startActivityAsUser_ilkk.call(this, v0, v1, v2);
        printBeat(beat);
    };
    var android_app_Activity_clz = Java.use('android.app.Activity');
    var android_app_Activity_clz_method_startActivityForResult_6mkb = android_app_Activity_clz.startActivityForResult.overload('android.content.Intent', 'int', 'android.os.Bundle');
    android_app_Activity_clz_method_startActivityForResult_6mkb.implementation = function(v0, v1, v2) {
        log("Intent>>>>>>>"+radarAndroidClz.getIntentProfile(v0));
        log("Flags>>>>>>>"+v1);
        log("Bundle>>>>>>>"+radarAndroidClz.getBundleProfile(v2));
        var executor = this.hashCode();
        var beatText = 'public void android.app.Activity.startActivityForResult(android.content.Intent,int,android.os.Bundle)';
        var beat = newMethodBeat(beatText, executor);
        android_app_Activity_clz_method_startActivityForResult_6mkb.call(this, v0, v1, v2);
        printBeat(beat);
    };
});