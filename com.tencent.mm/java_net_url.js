
function printStacks(methodName) {
    var stackInfo = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new());
    console.log(methodName);
    console.log(stackInfo.substring(20));
};

function log(str) {
    console.log(str);
};



Java.perform(function() {
    // Function to hook is defined here
    var clz = Java.use('java.net.URL');
    var urlConstruct = clz.$init.overload("java.lang.String");
    urlConstruct.implementation = function(url) {
        var result = urlConstruct.call(this, url);
        printStacks("java.net.URL.new(java.lang.String:"+ url +")");
        return result;
    };
});
