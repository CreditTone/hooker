function printStacks(androidLogClz, exceptionClz, methodName) {
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    console.log(methodName);
    console.log(stackInfo.substring(20));
};

Java.perform(function () {
    var RequestClz = Java.use('okhttp3.Request');
    var builderClz = Java.use('okhttp3.Request$Builder');
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    builderClz.build.implementation = function() {
        var okRequestResult = this.build();
        var httpUrl = okRequestResult.url();
        var url = httpUrl.toString();
        printStacks(androidLogClz, exceptionClz,'okhttp3.Request.Builder.build(java.lang.String:'+url+')');
        return okRequestResult
    };
});