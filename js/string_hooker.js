function methodInBeat(invokeId, timestamp, methodName, executor) {
	var startTime = timestamp;
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var threadClz = Java.use("java.lang.Thread");
    var currentThread = threadClz.currentThread();
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    var str = ("------------startFlag:" + invokeId + ",objectHash:"+executor+",thread(id:" + currentThread.getId() +",name:" + currentThread.getName() + "),timestamp:" + startTime+"---------------\n");
    str += methodName + "\n";
    str += stackInfo.substring(20);
    str += ("------------endFlag:" + invokeId + ",usedtime:" + (new Date().getTime() - startTime) +"---------------\n");
	console.log(str);
};

function log(str) {console.log(str);};

//https://github.com/frida/frida/issues/503 bug补丁
function stringBuilderToStringPatch(stringBuilderObj) {
    var str = '';
    var length = stringBuilderObj.length();
    for (var i = 0; i < length; i++) {
        str += stringBuilderObj.charAt(i);
    }
    return str;
}

function getHead(str, len) {
    if (str.length > len) {
        return str.substring(0, len) + "......   length:" + str.length;
    } else {
        return str;
    }
}

var containRegExps = new Array(RegExp(/惊雷/))

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
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var java_lang_StringBuilder_clz = Java.use('java.lang.StringBuilder');
    var java_lang_StringBuilder_clz_toString_9ogt = java_lang_StringBuilder_clz.toString.overload();
    java_lang_StringBuilder_clz_toString_9ogt.implementation = function() {
        var thErr = undefined;
        var stringJavaObject = undefined;
        try {
            var startTime = new Date().getTime();
            stringJavaObject = java_lang_StringBuilder_clz_toString_9ogt.call(this);
            if (check(stringJavaObject)) {
                var headTxt = getHead(stringJavaObject, 500);
                var invokeId = Math.random().toString(36).slice( - 8);
                var executor = this.hashCode();
                methodInBeat(invokeId, startTime, "Detecting " + headTxt + " in stacks:", executor);
            }
        } catch(err) {
            thErr = err;
        } finally {
            if (thErr) {
                stringJavaObject = stringBuilderToStringPatch(this);
            }
            return stringJavaObject;
        }
    };
});