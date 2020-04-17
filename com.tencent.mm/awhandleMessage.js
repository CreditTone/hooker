function printStacks(methodName) {
    var stackInfo = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new());
    console.log(methodName);
    console.log(stackInfo.substring(20));
};

function log(str) {
    console.log(str);
};

function checkRadarDex() {
    try {
            var clz = Java.use("gz.radar.ClassRadar");
        } catch(err) {
            //console.log(err);
            Java.openClassFile("/data/local/tmp/radar.dex").load();
        }
};

function toJSONString(obj) {
	var wejsonClz = Java.use('com.tencent.youtu.ytcommon.tools.wejson.WeJson');
	var wejson = wejsonClz.$new();
	var toJsonMethod = wejsonClz.toJson.overload('java.lang.Object');
	return toJsonMethod.call(wejson, obj);
};

function bundleToJSONString(obj) {
	checkRadarDex();
	var utilClz = Java.use('gz.radar.Util');
	var toJsonMethod = utilClz.toJSONString.overload('java.lang.Object');
	return toJsonMethod.call(utilClz, obj);
};

Java.perform(function() {
    var com_tencent_mm_sdk_platformtools_aw_clz = Java.use('com.tencent.mm.sdk.platformtools.aw');
    var com_tencent_mm_sdk_platformtools_aw_clz_method_handleMessage_ssmq = com_tencent_mm_sdk_platformtools_aw_clz.handleMessage.overload('android.os.Message');
    com_tencent_mm_sdk_platformtools_aw_clz_method_handleMessage_ssmq.implementation = function(v0) {
        printStacks('public void com.tencent.mm.sdk.platformtools.aw.handleMessage(android.os.Message)');
        log("bundleToJSONString:"+bundleToJSONString(v0.peekData()));
        com_tencent_mm_sdk_platformtools_aw_clz_method_handleMessage_ssmq.call(this, v0);
    };
    var com_tencent_mm_plugin_emoji_f_a_clz = Java.use('com.tencent.mm.plugin.emoji.f.a');
});