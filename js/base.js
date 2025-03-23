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

var log = console.log;

var print = console.log;

function getBaseContext() {
    var currentApplication = Java.use('android.app.ActivityThread').currentApplication();
    var context = currentApplication.getApplicationContext();
    return context; //Java.scheduleOnMainThread(fn):
};

function sleep(time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while(new Date().getTime() < startTime) {}
};



// 当Okhttp3Request对象是post的时候，你读取body会消耗一次，使后面的请求不成功，这时候我们就要克隆一个新的Request
function printAndCloneOkhttp3Request(ok3ReqObj) {
    var logObj = {};
    // 类名
    logObj.class = ok3ReqObj.getClass().getName();
    // URL
    logObj.url = ok3ReqObj.url().toString();
    // 方法
    logObj.method = ok3ReqObj.method();
    // 请求头
    var headers = {};
    var headerList = ok3ReqObj.headers();
    for (var i = 0; i < headerList.size(); i++) {
        headers[headerList.name(i)] = headerList.value(i);
    }
    logObj.headers = headers;
    // Tag
    var tag = ok3ReqObj.tag();
    logObj.tag = tag ? tag.toString() : null;
    // 请求体克隆
    var body = ok3ReqObj.body();
    var newRequest = null;
    var bodyContent = null;
    if (body) {
        var BufferClz = Java.use("okio.Buffer");
        var buffer = BufferClz.$new();
        body.writeTo(buffer);  // 第一次读取到流
        bodyContent = buffer.readUtf8();  // 保存内容
        var RequestBodyClz = Java.use("okhttp3.RequestBody");
        var newBody = RequestBodyClz.create(body.contentType(), bodyContent);
        // 克隆新请求体
        newRequest = ok3ReqObj.newBuilder()
            .method(ok3ReqObj.method(), newBody)
            .build();
    } else {
        newRequest = ok3ReqObj.newBuilder().build();
    }
    logObj.body = bodyContent;
    // 打印 JSON 格式
    console.log(JSON.stringify(logObj, null, 4));
    return newRequest;
}


// loadXRadarDexfile if you want to ued func fastTojson or storeObjectAndLog  
//loadXRadarDexfile();
