function printStacks(androidLogClz, exceptionClz, methodName) {
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    console.log(new Date().getTime()+":"+methodName);
    console.log(stackInfo.substring(20));
};

function tryGetClass(className) {
    var clz = undefined;
    try {
        clz = Java.use(className);
    } catch(e) {}
    return clz;
}

var containRegExps = new Array()

var notContainRegExps = new Array(RegExp(/\.jpg$/))

function check(str) {
    if (!(str && str.match)) {
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
    //系统原生支持
    var sysBuilderClz = tryGetClass('com.android.okhttp.Request$Builder');
    if (sysBuilderClz) {
        sysBuilderClz.build.implementation = function() {
            var okRequestResult = this.build();
            var httpUrl = okRequestResult.url();
            var url = httpUrl.toString();
            if (check(url)) {
            	printStacks(androidLogClz, exceptionClz, 'com.android.okhttp.Request.Builder.build(java.lang.String:' + url + ')');
            }
            return okRequestResult
        };
    }

    //本地依赖
    var builderClz = tryGetClass('okhttp3.Request$Builder');
    if (builderClz) {
    	var buildFunc = builderClz.build.overload();
        buildFunc.implementation = function() {
            var okRequestResult = buildFunc.call(this);
            var httpUrl = okRequestResult.url();
            var url = httpUrl.toString();
            if (check(url)) {
            	printStacks(androidLogClz, exceptionClz, 'okhttp3.Request.Builder.build(java.lang.String:' + url + ')');
            }
            return okRequestResult
        };
    }
});