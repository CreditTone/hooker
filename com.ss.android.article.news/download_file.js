
function printStacks(methodName) {
    var stackInfo = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new());
    console.log(methodName);
    console.log(stackInfo.substring(20));
};

Java.perform(function() {
    var com_ss_android_common_weboffline_NetworkImpl_clz = Java.use('com.ss.android.common.weboffline.NetworkImpl');
    com_ss_android_common_weboffline_NetworkImpl_clz.downloadFile.overload('java.lang.String', 'java.lang.String').implementation = function(v0, v1) {
        console.log("v0:"+v0);
        console.log("v1:"+v1);
        printStacks('public boolean com.ss.android.common.weboffline.NetworkImpl.downloadFile(java.lang.String,java.lang.String) throws java.lang.Exception');
        return this.downloadFile(v0, v1);
    };
});