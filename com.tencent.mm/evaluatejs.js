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
    var com_tencent_mm_plugin_webview_luggage_d_a_clz = Java.use('com.tencent.mm.plugin.webview.luggage.d.a');
    var com_tencent_mm_plugin_webview_luggage_d_a_clz_method_evaluateJavascript_pavi = com_tencent_mm_plugin_webview_luggage_d_a_clz.evaluateJavascript.overload('java.lang.String', 'android.webkit.ValueCallback');
    com_tencent_mm_plugin_webview_luggage_d_a_clz_method_evaluateJavascript_pavi.implementation = function(v0, v1) {
        printStacks('public void com.tencent.mm.plugin.webview.luggage.d.a.evaluateJavascript(java.lang.String,android.webkit.ValueCallback)');
        com_tencent_mm_plugin_webview_luggage_d_a_clz_method_evaluateJavascript_pavi.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_jsapi_j_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.jsapi.j');
    var com_tencent_mm_plugin_webview_ui_tools_jsapi_j_clz_method_evaluateJavascript_767h = com_tencent_mm_plugin_webview_ui_tools_jsapi_j_clz.evaluateJavascript.overload('java.lang.String', 'android.webkit.ValueCallback');
    com_tencent_mm_plugin_webview_ui_tools_jsapi_j_clz_method_evaluateJavascript_767h.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.jsapi.j.evaluateJavascript(java.lang.String,android.webkit.ValueCallback)');
        com_tencent_mm_plugin_webview_ui_tools_jsapi_j_clz_method_evaluateJavascript_767h.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView');
    var com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz = Java.use('com.tencent.mm.plugin.topstory.ui.webview.TopStoryWebView');
    var com_tencent_mm_plugin_game_luggage_d_e_clz = Java.use('com.tencent.mm.plugin.game.luggage.d.e');
    var com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.widget.MMWebViewWithJsApi');
    var com_tencent_mm_plugin_game_luggage_g_clz = Java.use('com.tencent.mm.plugin.game.luggage.g');


    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz = Java.use('com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e');
    var com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_evaluateJavascript_jy2g = com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz.evaluateJavascript.overload('java.lang.String', 'android.webkit.ValueCallback');
    com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_evaluateJavascript_jy2g.implementation = function(v0, v1) {
        printStacks('public synchronized void com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.e.evaluateJavascript(java.lang.String,android.webkit.ValueCallback)');
        com_tencent_mm_plugin_brandservice_ui_timeline_preload_ui_e_clz_method_evaluateJavascript_jy2g.call(this, v0, v1);
    };
});