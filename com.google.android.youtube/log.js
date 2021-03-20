Java.perform(function() {
	var androidLog = Java.use("android.util.Log");
	var dMethod = androidLog.d.overload("java.lang.String", "java.lang.String");
	dMethod.implementation = function(tag, message) {
        var ret = dMethod.call(androidLog, tag, message);
        console.log("androidLog.d:"+tag+" message:"+message);
        return ret;
    };
});