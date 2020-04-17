
function printStacks(methodName) {
    var stackInfo = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new());
    console.log(methodName);
    console.log(stackInfo.substring(20));
};

Java.perform(function() {
    var com_ttnet_org_chromium_net_impl_CronetUrlRequestContext_5_clz = Java.use('com.ttnet.org.chromium.net.impl.CronetUrlRequestContext$5');
    var com_ttnet_org_chromium_net_impl_CronetUrlRequestContext_5_clz_init_5r3d = com_ttnet_org_chromium_net_impl_CronetUrlRequestContext_5_clz.$init.overload('com.ttnet.org.chromium.net.impl.CronetUrlRequestContext', 'com.ttnet.org.chromium.net.impl.VersionSafeCallbacks$RequestFinishedInfoListener', 'com.ttnet.org.chromium.net.RequestFinishedInfo');
    com_ttnet_org_chromium_net_impl_CronetUrlRequestContext_5_clz_init_5r3d.implementation = function(v0, v1, v2) {
        printStacks('com.ttnet.org.chromium.net.impl.CronetUrlRequestContext$5(com.ttnet.org.chromium.net.impl.CronetUrlRequestContext,com.ttnet.org.chromium.net.impl.VersionSafeCallbacks$RequestFinishedInfoListener,com.ttnet.org.chromium.net.RequestFinishedInfo)');
        return com_ttnet_org_chromium_net_impl_CronetUrlRequestContext_5_clz_init_5r3d.call(this, v0, v1, v2);
    };
});