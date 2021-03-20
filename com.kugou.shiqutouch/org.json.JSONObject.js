//org.json.JSONObject:_
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

var containRegExps = new Array(RegExp(/17岁/))

var notContainRegExps = new Array(RegExp(/\.jpg$/))

function check(stringJavaObject) {
    var str = stringJavaObject.toString();
    if (! (str && str.match)) {
        return false;
    }
    for (var i = 0; i < containRegExps.length; i++) {
        if (!str.match(containRegExps[i])) {
            return false;
        }
    }
    for (var i = 0; i < notContainRegExps.length; i++) {
        if (str.match(notContainRegExps[i])) {
            return false;
        }
    }
    return true;
}

Java.perform(function() {
    var org_json_JSONObject_clz = Java.use('org.json.JSONObject');
    var org_json_JSONObject_clz_init_3nte = org_json_JSONObject_clz.$init.overload();
    org_json_JSONObject_clz_init_3nte.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var obj = org_json_JSONObject_clz_init_3nte.call(this);
        methodInBeat(invokeId, startTime, 'public org.json.JSONObject()', executor);
        return obj;
    };
    var org_json_JSONObject_clz_init_ppyl = org_json_JSONObject_clz.$init.overload('java.util.Map');
    org_json_JSONObject_clz_init_ppyl.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var obj = org_json_JSONObject_clz_init_ppyl.call(this, v0);
        methodInBeat(invokeId, startTime, 'public org.json.JSONObject(java.util.Map)', executor);
        return obj;
    };
    var org_json_JSONObject_clz_init_ovu5 = org_json_JSONObject_clz.$init.overload('org.json.JSONObject', '[Ljava.lang.String;');
    org_json_JSONObject_clz_init_ovu5.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var obj = org_json_JSONObject_clz_init_ovu5.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public org.json.JSONObject(org.json.JSONObject,java.lang.String[]) throws org.json.JSONException', executor);
        return obj;
    };
    var org_json_JSONObject_clz_init_0004 = org_json_JSONObject_clz.$init.overload('org.json.JSONTokener');
    org_json_JSONObject_clz_init_0004.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var obj = org_json_JSONObject_clz_init_0004.call(this, v0);
        methodInBeat(invokeId, startTime, 'public org.json.JSONObject(org.json.JSONTokener) throws org.json.JSONException', executor);
        return obj;
    };
    var org_json_JSONObject_clz_init_p4nq = org_json_JSONObject_clz.$init.overload('java.lang.String');
    org_json_JSONObject_clz_init_p4nq.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var obj = org_json_JSONObject_clz_init_p4nq.call(this, v0);
        if (check(v0)) {
               log(v0);
               methodInBeat(invokeId, startTime, 'public org.json.JSONObject(java.lang.String) throws org.json.JSONException', executor);
            }
        //
        return obj;
    };
});