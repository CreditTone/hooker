//java.io.File:_
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


function loadXinitDexfile(dexfile) {
    loadDexfile('/data/user/0/com.kugou.shiqutouch/xinit/'+dexfile);
};

Java.perform(function() {
    // var java_io_File_clz = Java.use('java.io.File');
    // var java_io_File_clz_init_0383 = java_io_File_clz.$init.overload('java.lang.String', 'int');
    // java_io_File_clz_init_0383.implementation = function(v0, v1) {
    //     var invokeId = Math.random().toString(36).slice( - 8);
    //     var startTime = new Date().getTime();
    //     var executor = this.hashCode();
    //     var obj = java_io_File_clz_init_0383.call(this, v0, v1);
        
    //     methodInBeat(invokeId, startTime, 'private java.io.File(java.lang.String,int)', executor);
    //     return obj;
    // };
    // var java_io_File_clz_init_s7hc = java_io_File_clz.$init.overload('java.lang.String', 'java.lang.String');
    // java_io_File_clz_init_s7hc.implementation = function(v0, v1) {
    //     var invokeId = Math.random().toString(36).slice( - 8);
    //     var startTime = new Date().getTime();
    //     var executor = this.hashCode();
    //     var obj = java_io_File_clz_init_s7hc.call(this, v0, v1);

    //     methodInBeat(invokeId, startTime, 'public java.io.File(java.lang.String,java.lang.String)', executor);
    //     return obj;
    // };
    // var java_io_File_clz_init_4d9e = java_io_File_clz.$init.overload('java.net.URI');
    // java_io_File_clz_init_4d9e.implementation = function(v0) {
    //     var invokeId = Math.random().toString(36).slice( - 8);
    //     var startTime = new Date().getTime();
    //     var executor = this.hashCode();
    //     var obj = java_io_File_clz_init_4d9e.call(this, v0);
    //     log(v0);
    //     methodInBeat(invokeId, startTime, 'public java.io.File(java.net.URI)', executor);
    //     return obj;
    // };
    // var java_io_File_clz_init_vybt = java_io_File_clz.$init.overload('java.lang.String', 'java.io.File');
    // java_io_File_clz_init_vybt.implementation = function(v0, v1) {
    //     var invokeId = Math.random().toString(36).slice( - 8);
    //     var startTime = new Date().getTime();
    //     var executor = this.hashCode();
    //     var obj = java_io_File_clz_init_vybt.call(this, v0, v1);
    //     log(v0);
    //     methodInBeat(invokeId, startTime, 'private java.io.File(java.lang.String,java.io.File)', executor);
    //     return obj;
    // };
    // var java_io_File_clz_init_ka7f = java_io_File_clz.$init.overload('java.lang.String');
    // java_io_File_clz_init_ka7f.implementation = function(v0) {
    //     var invokeId = Math.random().toString(36).slice( - 8);
    //     var startTime = new Date().getTime();
    //     var executor = this.hashCode();
    //     var obj = java_io_File_clz_init_ka7f.call(this, v0);
    //     log(v0);
    //     methodInBeat(invokeId, startTime, 'public java.io.File(java.lang.String)', executor);
    //     return obj;
    // };
    // var java_io_File_clz_init_euri = java_io_File_clz.$init.overload('java.io.File', 'java.lang.String');
    // java_io_File_clz_init_euri.implementation = function(v0, v1) {
    //     var invokeId = Math.random().toString(36).slice( - 8);
    //     var startTime = new Date().getTime();
    //     var executor = this.hashCode();
    //     var obj = java_io_File_clz_init_euri.call(this, v0, v1);
    //     log(v1);
    //     methodInBeat(invokeId, startTime, 'public java.io.File(java.io.File,java.lang.String)', executor);
    //     return obj;
    // };
});