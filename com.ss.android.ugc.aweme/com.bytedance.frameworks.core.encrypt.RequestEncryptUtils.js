//crack by com.ss.android.ugc.aweme 15.0.0
//com.bytedance.frameworks.core.encrypt.RequestEncryptUtils
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

function getBaseContext() {
    var currentApplication = Java.use('android.app.ActivityThread').currentApplication();
    var context = currentApplication.getApplicationContext();
    return context; //Java.scheduleOnMainThread(fn):
};

function sleep(time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while(new Date().getTime() < startTime) {}
};

var loadedXRadar = false;

function loadXinitDexfile(dexfile) {
    loadDexfile('/data/user/0/com.ss.android.ugc.aweme/xinit/'+dexfile);
};

function loadXRadarDexfile() {
    loadedXRadar = true;
    loadDexfile('/data/user/0/com.ss.android.ugc.aweme/radar.dex');
};

function fastTojson(javaObject) {
    var JSONClz = Java.use("gz.com.alibaba.fastjson.JSON");
    return JSONClz.toJSONString(javaObject);
};

function getPrettyString(javaObject) {
    var XPretty = Java.use("gz.util.XPretty");
    return XPretty.getPrettyString(javaObject);
};

function xPretty(javaObject) {
    var str = getPrettyString(javaObject);
    console.log(str);
};

function getField(javaObject, fieldName) {
    var X = Java.use("gz.util.X");
    return X.getField(javaObject, fieldName);
};

function storeObjectAndLog(javaObject) {
    var className = getClassName(javaObject);
    var ObjectsStore = Java.use("gz.radar.objects.ObjectsStore");
    var objectId = ObjectsStore.storeObject(javaObject);
    console.log(className + " ObjectsStoreId: " +objectId);
};



//com.bytedance.frameworks.core.encrypt.RequestEncryptUtils
Java.perform(function() {
    
    var com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz = Java
        .use('com.bytedance.frameworks.core.encrypt.RequestEncryptUtils');

    var com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_setDebug_9337 = 
        com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz.setDebug.overload('boolean');

    com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_setDebug_9337.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static void com.bytedance.frameworks.core.encrypt.RequestEncryptUtils.setDebug(boolean)';
        var beat = newMethodBeat(beatText, executor);
        com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_setDebug_9337
        .call(com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz, v0);
        printBeat(beat);
    };

    var com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_setEncryptConfig_2345 = com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz.setEncryptConfig.overload('com.bytedance.frameworks.core.encrypt.RequestEncryptUtils$a');
    com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_setEncryptConfig_2345.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static void com.bytedance.frameworks.core.encrypt.RequestEncryptUtils.setEncryptConfig(com.bytedance.frameworks.core.encrypt.RequestEncryptUtils$a)';
        var beat = newMethodBeat(beatText, executor);
        com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_setEncryptConfig_2345.call(com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz, v0);
        printBeat(beat);
    };
    var com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_tryEncryptRequest_2985 = com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz.tryEncryptRequest.overload('java.lang.String', 'java.util.List');
    com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_tryEncryptRequest_2985.implementation = function(v0, v1) {
        var executor = 'Class';
        var beatText = 'public static java.lang.String com.bytedance.frameworks.core.encrypt.RequestEncryptUtils.tryEncryptRequest(java.lang.String,java.util.List)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_tryEncryptRequest_2985.call(com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz, v0, v1);
        printBeat(beat);
        return ret;
    };
    var com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_tryEncryptRequestBody_5472 = com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz.tryEncryptRequestBody.overload('[B');
    com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_tryEncryptRequestBody_5472.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static byte[] com.bytedance.frameworks.core.encrypt.RequestEncryptUtils.tryEncryptRequestBody(byte[])';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_tryEncryptRequestBody_5472.call(com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_format_0847 = com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz.format.overload('java.util.List', 'boolean', 'java.lang.String');
    com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_format_0847.implementation = function(v0, v1, v2) {
        var executor = 'Class';
        var beatText = 'public static java.lang.String com.bytedance.frameworks.core.encrypt.RequestEncryptUtils.format(java.util.List,boolean,java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_format_0847.call(com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz, v0, v1, v2);
        printBeat(beat);
        return ret;
    };
    var com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_parseQueries_4865 = com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz.parseQueries.overload('android.net.Uri', 'java.util.Map');
    com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_parseQueries_4865.implementation = function(v0, v1) {
        var executor = 'Class';
        var beatText = 'public static void com.bytedance.frameworks.core.encrypt.RequestEncryptUtils.parseQueries(android.net.Uri,java.util.Map) throws java.io.IOException';
        var beat = newMethodBeat(beatText, executor);
        com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_parseQueries_4865.call(com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz, v0, v1);
        printBeat(beat);
    };
    var com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_tryAddQuery_7937 = com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz.tryAddQuery.overload('java.util.Map', 'java.util.List', 'java.lang.String');
    com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_tryAddQuery_7937.implementation = function(v0, v1, v2) {
        var executor = 'Class';
        var beatText = 'public static boolean com.bytedance.frameworks.core.encrypt.RequestEncryptUtils.tryAddQuery(java.util.Map,java.util.List,java.lang.String) throws java.io.UnsupportedEncodingException';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_tryAddQuery_7937.call(com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz, v0, v1, v2);
        printBeat(beat);
        return ret;
    };
    var com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_encode_4323 = com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz.encode.overload('java.lang.String', 'java.lang.String');
    com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_encode_4323.implementation = function(v0, v1) {
        var executor = 'Class';
        var beatText = 'public static java.lang.String com.bytedance.frameworks.core.encrypt.RequestEncryptUtils.encode(java.lang.String,java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_encode_4323.call(com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz, v0, v1);
        printBeat(beat);
        return ret;
    };
    var com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_createUri_3204 = com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz.createUri.overload('java.lang.String', 'java.lang.String', 'int', 'java.lang.String', 'java.lang.String', 'java.lang.String');
    com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_createUri_3204.implementation = function(v0, v1, v2, v3, v4, v5) {
        var executor = 'Class';
        var beatText = 'public static android.net.Uri com.bytedance.frameworks.core.encrypt.RequestEncryptUtils.createUri(java.lang.String,java.lang.String,int,java.lang.String,java.lang.String,java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_method_createUri_3204.call(com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz, v0, v1, v2, v3, v4, v5);
        printBeat(beat);
        return ret;
    };
    var com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_init_7112 = com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz.$init.overload();
    com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_init_7112.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public com.bytedance.frameworks.core.encrypt.RequestEncryptUtils()';
        var beat = newMethodBeat(beatText, executor);
        var returnObj = com_bytedance_frameworks_core_encrypt_RequestEncryptUtils_clz_init_7112.call(this);
        printBeat(beat);
        return returnObj;
    };
});