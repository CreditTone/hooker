function printStacks(androidLogClz, exceptionClz, methodName) {
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    console.log(new Date().getTime()+":"+methodName);
    console.log(stackInfo.substring(20));
};

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
    // Function to hook is defined here
    var clz = Java.use('java.net.URL');
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var urlConstruct = clz.$init.overload("java.lang.String");
    urlConstruct.implementation = function(url) {
        var result = urlConstruct.call(this, url);
        if (check(url)) {
            printStacks(androidLogClz, exceptionClz, "java.net.URL.new(java.lang.String:"+ url +")");
        }
        return result;
    };
});