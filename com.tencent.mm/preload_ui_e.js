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
    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz = Java.use('com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e');
    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_Mb_sago = com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz.Mb.overload('java.lang.String');
    com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_Mb_sago.implementation = function(v0) {
        printStacks('protected void com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e.Mb(java.lang.String)');
        com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_Mb_sago.call(this, v0);
    };
    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_isReady_b6er = com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz.isReady.overload();
    com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_isReady_b6er.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e.isReady()');
        return com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_isReady_b6er.call(this);
    };
    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_getPageString_vst4 = com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz.getPageString.overload();
    com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_getPageString_vst4.implementation = function() {
        printStacks('protected java.lang.String com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e.getPageString()');
        return com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_getPageString_vst4.call(this);
    };
    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_beA_pyzl = com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz.beA.overload();
    com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_beA_pyzl.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e.beA()');
        com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_beA_pyzl.call(this);
    };
    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_bye_jz38 = com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz.bye.overload();
    com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_bye_jz38.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e.bye()');
        com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_bye_jz38.call(this);
    };
    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_getTagName_fy9n = com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz.getTagName.overload();
    com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_getTagName_fy9n.implementation = function() {
        printStacks('private java.lang.String com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e.getTagName()');
        return com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_getTagName_fy9n.call(this);
    };
    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_getInterceptHandler_ps35 = com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz.getInterceptHandler.overload();
    com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_getInterceptHandler_ps35.implementation = function() {
        printStacks('protected com.tencent.mm.plugin.webview.ui.tools.jsapi.j$a com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e.getInterceptHandler()');
        return com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_getInterceptHandler_ps35.call(this);
    };
    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_byE_8giq = com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz.byE.overload();
    com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_byE_8giq.implementation = function() {
        printStacks('private synchronized void com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e.byE()');
        com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_byE_8giq.call(this);
    };
    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_getInjectAPI_qzxq = com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz.getInjectAPI.overload();
    com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_getInjectAPI_qzxq.implementation = function() {
        printStacks('protected final java.lang.String com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e.getInjectAPI()');
        return com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_getInjectAPI_qzxq.call(this);
    };
    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_getTmplWebViewId_dv1c = com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz.getTmplWebViewId.overload();
    com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_getTmplWebViewId_dv1c.implementation = function() {
        printStacks('protected int com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e.getTmplWebViewId()');
        return com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_getTmplWebViewId_dv1c.call(this);
    };
    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_getFirstScreenCompletedAPI_4hz7 = com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz.getFirstScreenCompletedAPI.overload();
    com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_getFirstScreenCompletedAPI_4hz7.implementation = function() {
        printStacks('protected final java.lang.String com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e.getFirstScreenCompletedAPI()');
        return com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_getFirstScreenCompletedAPI_4hz7.call(this);
    };
    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_b_6hsc = com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz.b.overload('com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e');
    com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_b_6hsc.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e.b(com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e)');
        return com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_b_6hsc.call(com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz, v0);
    };
    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_getWebViewClient_3e7k = com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz.getWebViewClient.overload();
    com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_getWebViewClient_3e7k.implementation = function() {
        printStacks('public com.tencent.xweb.y com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e.getWebViewClient()');
        return com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_getWebViewClient_3e7k.call(this);
    };
    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_evaluateJavascript_jy2g = com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz.evaluateJavascript.overload('java.lang.String', 'android.webkit.ValueCallback');
    com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_evaluateJavascript_jy2g.implementation = function(v0, v1) {
        printStacks('public synchronized void com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e.evaluateJavascript(java.lang.String,android.webkit.ValueCallback)');
        com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_evaluateJavascript_jy2g.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_Mi_ff6m = com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz.Mi.overload('java.lang.String');
    com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_Mi_ff6m.implementation = function(v0) {
        printStacks('protected static java.lang.String com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e.Mi(java.lang.String)');
        return com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_Mi_ff6m.call(com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz, v0);
    };
    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_getJsApiHandler_27co = com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz.getJsApiHandler.overload();
    com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_getJsApiHandler_27co.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.jsapi.j com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e.getJsApiHandler()');
        return com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_getJsApiHandler_27co.call(this);
    };
    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_byd_ydp4 = com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz.byd.overload();
    com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_byd_ydp4.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e.byd()');
        com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_byd_ydp4.call(this);
    };
    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_a_kw9k = com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz.a.overload('com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e', 'java.lang.String', 'android.webkit.ValueCallback');
    com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_a_kw9k.implementation = function(v0, v1, v2) {
        printStacks('static void com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e.a(com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e,java.lang.String,android.webkit.ValueCallback)');
        com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_a_kw9k.call(com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz, v0, v1, v2);
    };
    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_byc_b8qo = com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz.byc.overload();
    com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_byc_b8qo.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e.byc()');
        com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_byc_b8qo.call(this);
    };
    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_byf_he2g = com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz.byf.overload();
    com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_byf_he2g.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e.byf()');
        com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_byf_he2g.call(this);
    };
    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_a_oodh = com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz.a.overload('com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e');
    com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_a_oodh.implementation = function(v0) {
        printStacks('static java.lang.String com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e.a(com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e)');
        return com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_a_oodh.call(com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz, v0);
    };
    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_init_dlof = com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz.$init.overload('android.content.Context', 'com.tencent.mm.plugin.webview.preload.TmplParams');
    com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_init_dlof.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e(android.content.Context,com.tencent.mm.plugin.webview.preload.TmplParams)');
        return com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_init_dlof.call(this, v0, v1);
    };
});