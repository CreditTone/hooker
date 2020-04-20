//com.tencent.mm.plugin.finder.search.i:?
function printStacks(methodName) {
    var stackInfo = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new());
    console.log(methodName);
    console.log(stackInfo.substring(20));
};

function log(str) {
    console.log(str);
};

function checkRadarDex() {
    if (!classExists("gz.radar.ClassRadar")) {
        Java.perform(function() {
            Java.openClassFile("/data/local/tmp/radar.dex").load();
        });
    }
};

Java.perform(function() {
    var com_tencent_mm_plugin_finder_search_i_clz = Java.use('com.tencent.mm.plugin.finder.search.i');
    var com_tencent_mm_plugin_finder_search_i_clz_method_cdV_mudk = com_tencent_mm_plugin_finder_search_i_clz.cdV.overload();
    com_tencent_mm_plugin_finder_search_i_clz_method_cdV_mudk.implementation = function() {
        //printStacks('public static com.tencent.mm.protocal.protobuf.ahf com.tencent.mm.plugin.finder.search.i.cdV()');
        return com_tencent_mm_plugin_finder_search_i_clz_method_cdV_mudk.call(com_tencent_mm_plugin_finder_search_i_clz);
    };
    var com_tencent_mm_plugin_finder_search_i_clz_method_cdU_7y27 = com_tencent_mm_plugin_finder_search_i_clz.cdU.overload();
    com_tencent_mm_plugin_finder_search_i_clz_method_cdU_7y27.implementation = function() {
        //printStacks('public static int com.tencent.mm.plugin.finder.search.i.cdU()');
        return com_tencent_mm_plugin_finder_search_i_clz_method_cdU_7y27.call(com_tencent_mm_plugin_finder_search_i_clz);
    };
    var com_tencent_mm_plugin_finder_search_i_clz_method_cdW_a9v3 = com_tencent_mm_plugin_finder_search_i_clz.cdW.overload();
    com_tencent_mm_plugin_finder_search_i_clz_method_cdW_a9v3.implementation = function() {
        //printStacks('public static java.util.concurrent.ConcurrentHashMap com.tencent.mm.plugin.finder.search.i.cdW()');
        return com_tencent_mm_plugin_finder_search_i_clz_method_cdW_a9v3.call(com_tencent_mm_plugin_finder_search_i_clz);
    };
    var com_tencent_mm_plugin_finder_search_i_clz_method_a_7htv = com_tencent_mm_plugin_finder_search_i_clz.a.overload('com.tencent.mm.protocal.protobuf.ahf');
    com_tencent_mm_plugin_finder_search_i_clz_method_a_7htv.implementation = function(v0) {
        //printStacks('public static void com.tencent.mm.plugin.finder.search.i.a(com.tencent.mm.protocal.protobuf.ahf)');
        com_tencent_mm_plugin_finder_search_i_clz_method_a_7htv.call(com_tencent_mm_plugin_finder_search_i_clz, v0);
    };
    var com_tencent_mm_plugin_finder_search_i_clz_method_a_5nd7 = com_tencent_mm_plugin_finder_search_i_clz.a.overload('java.lang.String', 'android.text.TextPaint', 'int');
    com_tencent_mm_plugin_finder_search_i_clz_method_a_5nd7.implementation = function(v0, v1, v2) {
        //printStacks('public static android.text.Spanned com.tencent.mm.plugin.finder.search.i.a(java.lang.String,android.text.TextPaint,int)');
        return com_tencent_mm_plugin_finder_search_i_clz_method_a_5nd7.call(com_tencent_mm_plugin_finder_search_i_clz, v0, v1, v2);
    };
    var com_tencent_mm_plugin_finder_search_i_clz_method_Vc_vf27 = com_tencent_mm_plugin_finder_search_i_clz.Vc.overload('java.lang.String');
    com_tencent_mm_plugin_finder_search_i_clz_method_Vc_vf27.implementation = function(v0) {
        var ret = com_tencent_mm_plugin_finder_search_i_clz_method_Vc_vf27.call(com_tencent_mm_plugin_finder_search_i_clz, v0);
        log(ret);
        printStacks('public static java.lang.String com.tencent.mm.plugin.finder.search.i.Vc(java.lang.String)');
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_i_clz_method_Vd_9gp6 = com_tencent_mm_plugin_finder_search_i_clz.Vd.overload('java.lang.String');
    com_tencent_mm_plugin_finder_search_i_clz_method_Vd_9gp6.implementation = function(v0) {
       // printStacks('public static android.text.Spanned com.tencent.mm.plugin.finder.search.i.Vd(java.lang.String)');
        return com_tencent_mm_plugin_finder_search_i_clz_method_Vd_9gp6.call(com_tencent_mm_plugin_finder_search_i_clz, v0);
    };
});