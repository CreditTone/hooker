
function printStacks(methodName) {
    var stackInfo = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new());
    console.log(methodName);
    console.log(stackInfo.substring(20));
};

function log(str) {
    console.log(str);
};



Java.perform(function () {
    var com_tencent_mm_network_ae_clz = Java.use('com.tencent.mm.network.ae');
    var com_tencent_mm_network_ae_clz_method_cE_4bwi = com_tencent_mm_network_ae_clz.cE.overload('android.content.Context');
    com_tencent_mm_network_ae_clz_method_cE_4bwi.implementation = function(v0) {
        printStacks('public static boolean com.tencent.mm.network.ae.cE(android.content.Context)');
        return com_tencent_mm_network_ae_clz_method_cE_4bwi.call(com_tencent_mm_network_ae_clz, v0);
    };
    var com_tencent_mm_network_ae_clz_method_cD_5hu5 = com_tencent_mm_network_ae_clz.cD.overload('android.content.Context');
    com_tencent_mm_network_ae_clz_method_cD_5hu5.implementation = function(v0) {
        printStacks('public static boolean com.tencent.mm.network.ae.cD(android.content.Context)');
        return com_tencent_mm_network_ae_clz_method_cD_5hu5.call(com_tencent_mm_network_ae_clz, v0);
    };
});
