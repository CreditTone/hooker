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
            printStacks(androidLogClz, exceptionClz, 'com.android.okhttp.Request.Builder.build(java.lang.String:' + url + ')');
            return okRequestResult
        };
    }

    //本地依赖
    var builderClz = tryGetClass('okhttp3.Request$Builder');
    if (builderClz) {
    	var buildFunc = builderClz.d.overload();
        buildFunc.implementation = function() {
            var okRequestResult = buildFunc.call(this);
            var httpUrl = okRequestResult.a();
            var url = httpUrl.toString();
            printStacks(androidLogClz, exceptionClz, 'okhttp3.Request.Builder.build(java.lang.String:' + url + ')');
            return okRequestResult
        };
    }
});