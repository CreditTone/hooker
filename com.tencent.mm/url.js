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

function tryGetClass(className) {
    var clz = undefined;
    try {
        clz = Java.use(className);
    } catch(e) {}
    return clz;
}

var containRegExps = new Array()

var notContainRegExps = new Array(RegExp(/\.jpg/))

function check(str) {
    str = str.toString();
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
	var uriParseClz = Java.use('java.net.URI');
    var uriParseClzConstruct = uriParseClz.$init.overload("java.lang.String");
    uriParseClzConstruct.implementation = function(url) {
        var startTime = new Date().getTime();
        var result = uriParseClzConstruct.call(this, url);
        if (check(url)) {
            console.log("url:" + url);
            var invokeId = Math.random().toString(36).slice( - 8);
            var executor = this.hashCode();
            methodInBeat(invokeId, startTime, "java.net.URI.$new()", executor);
        }
        return result;
    };
    
    
    // URL
    var URLClz = Java.use('java.net.URL');
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var urlConstruct = URLClz.$init.overload("java.lang.String");
    urlConstruct.implementation = function(url) {
        var startTime = new Date().getTime();
        var result = urlConstruct.call(this, url);
        if (check(url)) {
            console.log("url:" + url);
            var invokeId = Math.random().toString(36).slice( - 8);
            var executor = this.hashCode();
            methodInBeat(invokeId, startTime, "java.net.URL.$new()", executor);
        }
        return result;
    };

    //ok系统原生支持
    var sysBuilderClz = tryGetClass('com.android.okhttp.Request$Builder');
    if (sysBuilderClz) {
        sysBuilderClz.build.implementation = function() {
            var startTime = new Date().getTime();
            var okRequestResult = this.build();
            var httpUrl = okRequestResult.url();
            var url = httpUrl.toString();
            if (check(url)) {
                console.log("url:" + url);
                var invokeId = Math.random().toString(36).slice( - 8);
                var executor = this.hashCode();
                methodInBeat(invokeId, startTime, "com.android.okhttp.Request.Builder.build()", executor);
            }
            return okRequestResult
        };
    }

    //ok本地依赖
    var builderClz = tryGetClass('okhttp3.Request$Builder');
    if (builderClz) {
        var buildFunc = builderClz.build.overload();
        buildFunc.implementation = function() {
            var startTime = new Date().getTime();
            var okRequestResult = buildFunc.call(this);
            var httpUrl = okRequestResult.url();
            var url = httpUrl.toString();
            if (check(url)) {
                console.log("url:" + url);
                var invokeId = Math.random().toString(36).slice( - 8);
                var executor = this.hashCode();
                methodInBeat(invokeId, startTime, "okhttp3.Request.Builder.build()", executor);
            }
            return okRequestResult
        };
    }
});