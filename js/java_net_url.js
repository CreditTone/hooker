function printStacks(androidLogClz, exceptionClz, methodName) {
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    console.log(methodName);
    console.log(stackInfo.substring(20));
};

Java.perform(function() {
    // Function to hook is defined here
    var clz = Java.use('java.net.URL');
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var urlConstruct = clz.$init.overload("java.lang.String");
    urlConstruct.implementation = function(url) {
        var result = urlConstruct.call(this, url);
        printStacks(androidLogClz, exceptionClz, "java.net.URL.new(java.lang.String:"+ url +")");
        return result;
    };
});