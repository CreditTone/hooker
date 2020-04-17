
function printStacks(methodName) {
    var stackInfo = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new());
    console.log(methodName);
    console.log(stackInfo.substring(20));
};

function classExists(className) {
    var exists = false;
    try {
            var clz = Java.use(className);
            exists = true;
        } catch(err) {
            //console.log(err);
        }
    return exists;
}

Java.perform(function() {
    if (!classExists("gz.radar.ClassRadar")) {
           Java.openClassFile("/data/local/tmp/radar.dex").load();
       }
    var radarClz = Java.use("gz.radar.ClassRadar");
    var com_bytedance_frameworks_baselib_network_dispatcher_a_clz = Java.use('com.bytedance.frameworks.baselib.network.dispatcher.a');
    var com_bytedance_frameworks_baselib_network_dispatcher_a_clz_init_5qfn = com_bytedance_frameworks_baselib_network_dispatcher_a_clz.$init.overload('java.lang.String', 'com.bytedance.frameworks.baselib.network.dispatcher.IRequest$Priority', 'int', 'java.lang.Runnable', 'boolean');
    com_bytedance_frameworks_baselib_network_dispatcher_a_clz_init_5qfn.implementation = function(v0, v1, v2, v3, v4) {
        console.log(v0);
        console.log(v1);
        console.log(v2);
        console.log(radarClz.discoverObject(v3).className.value);
        console.log(v4);
        console.log(this.getClass());
        printStacks('public com.bytedance.frameworks.baselib.network.dispatcher.a(java.lang.String,com.bytedance.frameworks.baselib.network.dispatcher.IRequest$Priority,int,java.lang.Runnable,boolean)');
        return com_bytedance_frameworks_baselib_network_dispatcher_a_clz_init_5qfn.call(this, v0, v1, v2, v3, v4);
    };
});