
function printStacks(methodName) {
    var stackInfo = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new());
    console.log(methodName);
    console.log(stackInfo.substring(20));
};

Java.perform(function() {
    var okhttp3_Request_Builder_clz = Java.use('okhttp3.Request$Builder');
    okhttp3_Request_Builder_clz.build.overload().implementation = function() {
    	//.......
        printStacks('public okhttp3.Request okhttp3.Request$Builder.build()');
        return this.build();
    };
});