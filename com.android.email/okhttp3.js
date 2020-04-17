
function printStacks(methodName) {
    var stackInfo = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new());
    console.log(methodName);
    console.log(stackInfo.substring(20));
};



Java.perform(function () {
    var RequestClz = Java.use('okhttp3.Request');
    var builderClz = Java.use('okhttp3.Request$Builder');
    builderClz.build.implementation = function() {
        var okRequestResult = this.build();
        var httpUrl = okRequestResult.url();
        var url = httpUrl.toString();
        printStacks('okhttp3.Request.Builder.build(java.lang.String:'+url+')');
        return okRequestResult
    };
});
