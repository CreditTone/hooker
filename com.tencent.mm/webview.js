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
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$b');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_getErrCode_0anf = com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz.getErrCode.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_getErrCode_0anf.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.stub.WebViewStubService$b.getErrCode()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_getErrCode_0anf.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_dWe_yl1k = com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz.dWe.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_dWe_yl1k.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.stub.WebViewStubService$b.dWe()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_dWe_yl1k.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_getErrMsg_rtqo = com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz.getErrMsg.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_getErrMsg_rtqo.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$b.getErrMsg()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_getErrMsg_rtqo.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_getData_ojxa = com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz.getData.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_getData_ojxa.implementation = function() {
        printStacks('public final android.os.Bundle com.tencent.mm.plugin.webview.stub.WebViewStubService$b.getData()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_getData_ojxa.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_getType_m2q6 = com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz.getType.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_getType_m2q6.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.stub.WebViewStubService$b.getType()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_getType_m2q6.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_init_o8kk = com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz.$init.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_init_o8kk.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.stub.WebViewStubService$b()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_init_o8kk.call(this);
    };
    var com_tencent_mm_plugin_webview_PluginWebView_clz = Java.use('com.tencent.mm.plugin.webview.PluginWebView');
    var com_tencent_mm_plugin_webview_PluginWebView_clz_method_preInitWebViewSafeDuringMMKernelStage_wdrb = com_tencent_mm_plugin_webview_PluginWebView_clz.preInitWebViewSafeDuringMMKernelStage.overload('com.tencent.xweb.WebView$PreInitCallback');
    com_tencent_mm_plugin_webview_PluginWebView_clz_method_preInitWebViewSafeDuringMMKernelStage_wdrb.implementation = function(v0) {
        printStacks('private static void com.tencent.mm.plugin.webview.PluginWebView.preInitWebViewSafeDuringMMKernelStage(com.tencent.xweb.WebView$PreInitCallback)');
        com_tencent_mm_plugin_webview_PluginWebView_clz_method_preInitWebViewSafeDuringMMKernelStage_wdrb.call(com_tencent_mm_plugin_webview_PluginWebView_clz, v0);
    };
    var com_tencent_mm_plugin_webview_PluginWebView_clz_method_abi64WebViewCompat_qysf = com_tencent_mm_plugin_webview_PluginWebView_clz.abi64WebViewCompat.overload('com.tencent.mm.kernel.b.g');
    com_tencent_mm_plugin_webview_PluginWebView_clz_method_abi64WebViewCompat_qysf.implementation = function(v0) {
        printStacks('private void com.tencent.mm.plugin.webview.PluginWebView.abi64WebViewCompat(com.tencent.mm.kernel.b.g)');
        com_tencent_mm_plugin_webview_PluginWebView_clz_method_abi64WebViewCompat_qysf.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_PluginWebView_clz_method_name_eojm = com_tencent_mm_plugin_webview_PluginWebView_clz.name.overload();
    com_tencent_mm_plugin_webview_PluginWebView_clz_method_name_eojm.implementation = function() {
        printStacks('public java.lang.String com.tencent.mm.plugin.webview.PluginWebView.name()');
        return com_tencent_mm_plugin_webview_PluginWebView_clz_method_name_eojm.call(this);
    };
    var com_tencent_mm_plugin_webview_PluginWebView_clz_method_execute_t3c8 = com_tencent_mm_plugin_webview_PluginWebView_clz.execute.overload('com.tencent.mm.kernel.b.g');
    com_tencent_mm_plugin_webview_PluginWebView_clz_method_execute_t3c8.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.PluginWebView.execute(com.tencent.mm.kernel.b.g)');
        com_tencent_mm_plugin_webview_PluginWebView_clz_method_execute_t3c8.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_PluginWebView_clz_method_configure_85dw = com_tencent_mm_plugin_webview_PluginWebView_clz.configure.overload('com.tencent.mm.kernel.b.g');
    com_tencent_mm_plugin_webview_PluginWebView_clz_method_configure_85dw.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.PluginWebView.configure(com.tencent.mm.kernel.b.g)');
        com_tencent_mm_plugin_webview_PluginWebView_clz_method_configure_85dw.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_PluginWebView_clz_init_qhr8 = com_tencent_mm_plugin_webview_PluginWebView_clz.$init.overload();
    com_tencent_mm_plugin_webview_PluginWebView_clz_init_qhr8.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.PluginWebView()');
        return com_tencent_mm_plugin_webview_PluginWebView_clz_init_qhr8.call(this);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz = Java.use('com.tencent.mm.ui.widget.MMWebView');
    var com_tencent_mm_ui_widget_MMWebView_clz_method_getRandomStr_3ekl = com_tencent_mm_ui_widget_MMWebView_clz.getRandomStr.overload();
    com_tencent_mm_ui_widget_MMWebView_clz_method_getRandomStr_3ekl.implementation = function() {
        printStacks('public java.lang.String com.tencent.mm.ui.widget.MMWebView.getRandomStr()');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_getRandomStr_3ekl.call(this);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_e_66hf = com_tencent_mm_ui_widget_MMWebView_clz.e.overload('com.tencent.mm.ui.widget.MMWebView', 'boolean');
    com_tencent_mm_ui_widget_MMWebView_clz_method_e_66hf.implementation = function(v0, v1) {
        printStacks('static boolean com.tencent.mm.ui.widget.MMWebView.e(com.tencent.mm.ui.widget.MMWebView,boolean)');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_e_66hf.call(com_tencent_mm_ui_widget_MMWebView_clz, v0, v1);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_getIsX5Kernel_f8k9 = com_tencent_mm_ui_widget_MMWebView_clz.getIsX5Kernel.overload();
    com_tencent_mm_ui_widget_MMWebView_clz_method_getIsX5Kernel_f8k9.implementation = function() {
        printStacks('public boolean com.tencent.mm.ui.widget.MMWebView.getIsX5Kernel()');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_getIsX5Kernel_f8k9.call(this);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_g_j1kn = com_tencent_mm_ui_widget_MMWebView_clz.g.overload('int', 'int', 'boolean', 'boolean');
    com_tencent_mm_ui_widget_MMWebView_clz_method_g_j1kn.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.ui.widget.MMWebView.g(int,int,boolean,boolean)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_g_j1kn.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_eOw_grjn = com_tencent_mm_ui_widget_MMWebView_clz.eOw.overload();
    com_tencent_mm_ui_widget_MMWebView_clz_method_eOw_grjn.implementation = function() {
        printStacks('protected final void com.tencent.mm.ui.widget.MMWebView.eOw()');
        com_tencent_mm_ui_widget_MMWebView_clz_method_eOw_grjn.call(this);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_a_x7a9 = com_tencent_mm_ui_widget_MMWebView_clz.a.overload('com.tencent.mm.ui.widget.MMWebView$d');
    com_tencent_mm_ui_widget_MMWebView_clz_method_a_x7a9.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.ui.widget.MMWebView.a(com.tencent.mm.ui.widget.MMWebView$d)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_a_x7a9.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_af_tiaf = com_tencent_mm_ui_widget_MMWebView_clz.af.overload('android.view.MotionEvent');
    com_tencent_mm_ui_widget_MMWebView_clz_method_af_tiaf.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.ui.widget.MMWebView.af(android.view.MotionEvent)');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_af_tiaf.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_onWebViewScrollChanged_pwkn = com_tencent_mm_ui_widget_MMWebView_clz.onWebViewScrollChanged.overload('int', 'int', 'int', 'int');
    com_tencent_mm_ui_widget_MMWebView_clz_method_onWebViewScrollChanged_pwkn.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.mm.ui.widget.MMWebView.onWebViewScrollChanged(int,int,int,int)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_onWebViewScrollChanged_pwkn.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_setCompetitorView_3a9e = com_tencent_mm_ui_widget_MMWebView_clz.setCompetitorView.overload('android.view.ViewGroup');
    com_tencent_mm_ui_widget_MMWebView_clz_method_setCompetitorView_3a9e.implementation = function(v0) {
        printStacks('public void com.tencent.mm.ui.widget.MMWebView.setCompetitorView(android.view.ViewGroup)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_setCompetitorView_3a9e.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_ag_4kif = com_tencent_mm_ui_widget_MMWebView_clz.ag.overload('android.view.MotionEvent');
    com_tencent_mm_ui_widget_MMWebView_clz_method_ag_4kif.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.ui.widget.MMWebView.ag(android.view.MotionEvent)');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_ag_4kif.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_jK_kwdl = com_tencent_mm_ui_widget_MMWebView_clz.jK.overload('android.content.Context');
    com_tencent_mm_ui_widget_MMWebView_clz_method_jK_kwdl.implementation = function(v0) {
        printStacks('public static void com.tencent.mm.ui.widget.MMWebView.jK(android.content.Context)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_jK_kwdl.call(com_tencent_mm_ui_widget_MMWebView_clz, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_eOy_t0kg = com_tencent_mm_ui_widget_MMWebView_clz.eOy.overload();
    com_tencent_mm_ui_widget_MMWebView_clz_method_eOy_t0kg.implementation = function() {
        printStacks('public final void com.tencent.mm.ui.widget.MMWebView.eOy()');
        com_tencent_mm_ui_widget_MMWebView_clz_method_eOy_t0kg.call(this);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_onShow_uqxm = com_tencent_mm_ui_widget_MMWebView_clz.onShow.overload();
    com_tencent_mm_ui_widget_MMWebView_clz_method_onShow_uqxm.implementation = function() {
        printStacks('public final void com.tencent.mm.ui.widget.MMWebView.onShow()');
        com_tencent_mm_ui_widget_MMWebView_clz_method_onShow_uqxm.call(this);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_g_1och = com_tencent_mm_ui_widget_MMWebView_clz.g.overload('com.tencent.mm.ui.widget.MMWebView');
    com_tencent_mm_ui_widget_MMWebView_clz_method_g_1och.implementation = function(v0) {
        printStacks('static android.view.View$OnTouchListener com.tencent.mm.ui.widget.MMWebView.g(com.tencent.mm.ui.widget.MMWebView)');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_g_1och.call(com_tencent_mm_ui_widget_MMWebView_clz, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_a_4rl8 = com_tencent_mm_ui_widget_MMWebView_clz.a.overload('com.tencent.mm.ui.widget.MMWebView', 'java.lang.String');
    com_tencent_mm_ui_widget_MMWebView_clz_method_a_4rl8.implementation = function(v0, v1) {
        printStacks('private static boolean com.tencent.mm.ui.widget.MMWebView.a(com.tencent.mm.ui.widget.MMWebView,java.lang.String)');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_a_4rl8.call(com_tencent_mm_ui_widget_MMWebView_clz, v0, v1);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_b_b98q = com_tencent_mm_ui_widget_MMWebView_clz.b.overload('com.tencent.mm.ui.widget.MMWebView', 'boolean');
    com_tencent_mm_ui_widget_MMWebView_clz_method_b_b98q.implementation = function(v0, v1) {
        printStacks('static boolean com.tencent.mm.ui.widget.MMWebView.b(com.tencent.mm.ui.widget.MMWebView,boolean)');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_b_b98q.call(com_tencent_mm_ui_widget_MMWebView_clz, v0, v1);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_loadUrl_7byg = com_tencent_mm_ui_widget_MMWebView_clz.loadUrl.overload('java.lang.String');
    com_tencent_mm_ui_widget_MMWebView_clz_method_loadUrl_7byg.implementation = function(v0) {
        printStacks('public void com.tencent.mm.ui.widget.MMWebView.loadUrl(java.lang.String)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_loadUrl_7byg.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_setRandomStr_4tbr = com_tencent_mm_ui_widget_MMWebView_clz.setRandomStr.overload('java.lang.String');
    com_tencent_mm_ui_widget_MMWebView_clz_method_setRandomStr_4tbr.implementation = function(v0) {
        printStacks('public void com.tencent.mm.ui.widget.MMWebView.setRandomStr(java.lang.String)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_setRandomStr_4tbr.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_e_wuzd = com_tencent_mm_ui_widget_MMWebView_clz.e.overload('com.tencent.mm.ui.widget.MMWebView');
    com_tencent_mm_ui_widget_MMWebView_clz_method_e_wuzd.implementation = function(v0) {
        printStacks('static android.view.ViewGroup com.tencent.mm.ui.widget.MMWebView.e(com.tencent.mm.ui.widget.MMWebView)');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_e_wuzd.call(com_tencent_mm_ui_widget_MMWebView_clz, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_onHide_7mli = com_tencent_mm_ui_widget_MMWebView_clz.onHide.overload();
    com_tencent_mm_ui_widget_MMWebView_clz_method_onHide_7mli.implementation = function() {
        printStacks('public final void com.tencent.mm.ui.widget.MMWebView.onHide()');
        com_tencent_mm_ui_widget_MMWebView_clz_method_onHide_7mli.call(this);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_ah_l97q = com_tencent_mm_ui_widget_MMWebView_clz.ah.overload('android.view.MotionEvent');
    com_tencent_mm_ui_widget_MMWebView_clz_method_ah_l97q.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.ui.widget.MMWebView.ah(android.view.MotionEvent)');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_ah_l97q.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_eOx_aecj = com_tencent_mm_ui_widget_MMWebView_clz.eOx.overload();
    com_tencent_mm_ui_widget_MMWebView_clz_method_eOx_aecj.implementation = function() {
        printStacks('public final void com.tencent.mm.ui.widget.MMWebView.eOx()');
        com_tencent_mm_ui_widget_MMWebView_clz_method_eOx_aecj.call(this);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_setPreload_l4n6 = com_tencent_mm_ui_widget_MMWebView_clz.setPreload.overload('boolean');
    com_tencent_mm_ui_widget_MMWebView_clz_method_setPreload_l4n6.implementation = function(v0) {
        printStacks('public void com.tencent.mm.ui.widget.MMWebView.setPreload(boolean)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_setPreload_l4n6.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_f_vyad = com_tencent_mm_ui_widget_MMWebView_clz.f.overload('com.tencent.mm.ui.widget.MMWebView');
    com_tencent_mm_ui_widget_MMWebView_clz_method_f_vyad.implementation = function(v0) {
        printStacks('static android.view.View$OnTouchListener com.tencent.mm.ui.widget.MMWebView.f(com.tencent.mm.ui.widget.MMWebView)');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_f_vyad.call(com_tencent_mm_ui_widget_MMWebView_clz, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_a_dogh = com_tencent_mm_ui_widget_MMWebView_clz.a.overload('java.net.URL', 'java.lang.String', 'android.webkit.ValueCallback');
    com_tencent_mm_ui_widget_MMWebView_clz_method_a_dogh.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.mm.ui.widget.MMWebView.a(java.net.URL,java.lang.String,android.webkit.ValueCallback)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_a_dogh.call(this, v0, v1, v2);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_R_3955 = com_tencent_mm_ui_widget_MMWebView_clz.R.overload('int', 'int', 'int', 'int');
    com_tencent_mm_ui_widget_MMWebView_clz_method_R_3955.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.ui.widget.MMWebView.R(int,int,int,int)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_R_3955.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_c_28lr = com_tencent_mm_ui_widget_MMWebView_clz.c.overload('com.tencent.mm.ui.widget.MMWebView', 'boolean');
    com_tencent_mm_ui_widget_MMWebView_clz_method_c_28lr.implementation = function(v0, v1) {
        printStacks('static boolean com.tencent.mm.ui.widget.MMWebView.c(com.tencent.mm.ui.widget.MMWebView,boolean)');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_c_28lr.call(com_tencent_mm_ui_widget_MMWebView_clz, v0, v1);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_getPerformanceHelper_laor = com_tencent_mm_ui_widget_MMWebView_clz.getPerformanceHelper.overload();
    com_tencent_mm_ui_widget_MMWebView_clz_method_getPerformanceHelper_laor.implementation = function() {
        printStacks('public com.tencent.mm.pluginsdk.q com.tencent.mm.ui.widget.MMWebView.getPerformanceHelper()');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_getPerformanceHelper_laor.call(this);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_destroy_lnpe = com_tencent_mm_ui_widget_MMWebView_clz.destroy.overload();
    com_tencent_mm_ui_widget_MMWebView_clz_method_destroy_lnpe.implementation = function() {
        printStacks('public void com.tencent.mm.ui.widget.MMWebView.destroy()');
        com_tencent_mm_ui_widget_MMWebView_clz_method_destroy_lnpe.call(this);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_evaluateJavascript_utr9 = com_tencent_mm_ui_widget_MMWebView_clz.evaluateJavascript.overload('java.lang.String', 'android.webkit.ValueCallback');
    com_tencent_mm_ui_widget_MMWebView_clz_method_evaluateJavascript_utr9.implementation = function(v0, v1) {
        printStacks('public void com.tencent.mm.ui.widget.MMWebView.evaluateJavascript(java.lang.String,android.webkit.ValueCallback)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_evaluateJavascript_utr9.call(this, v0, v1);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_d_8109 = com_tencent_mm_ui_widget_MMWebView_clz.d.overload('com.tencent.mm.ui.widget.MMWebView', 'boolean');
    com_tencent_mm_ui_widget_MMWebView_clz_method_d_8109.implementation = function(v0, v1) {
        printStacks('static boolean com.tencent.mm.ui.widget.MMWebView.d(com.tencent.mm.ui.widget.MMWebView,boolean)');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_d_8109.call(com_tencent_mm_ui_widget_MMWebView_clz, v0, v1);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_c_6ofh = com_tencent_mm_ui_widget_MMWebView_clz.c.overload('int', 'int', 'int', 'int', 'int', 'int', 'int', 'int', 'boolean');
    com_tencent_mm_ui_widget_MMWebView_clz_method_c_6ofh.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7, v8) {
        printStacks('public final boolean com.tencent.mm.ui.widget.MMWebView.c(int,int,int,int,int,int,int,int,boolean)');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_c_6ofh.call(this, v0, v1, v2, v3, v4, v5, v6, v7, v8);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_setOnTouchListener_yo0a = com_tencent_mm_ui_widget_MMWebView_clz.setOnTouchListener.overload('android.view.View$OnTouchListener');
    com_tencent_mm_ui_widget_MMWebView_clz_method_setOnTouchListener_yo0a.implementation = function(v0) {
        printStacks('public void com.tencent.mm.ui.widget.MMWebView.setOnTouchListener(android.view.View$OnTouchListener)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_setOnTouchListener_yo0a.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_eOz_by7e = com_tencent_mm_ui_widget_MMWebView_clz.eOz.overload();
    com_tencent_mm_ui_widget_MMWebView_clz_method_eOz_by7e.implementation = function() {
        printStacks('public final void com.tencent.mm.ui.widget.MMWebView.eOz()');
        com_tencent_mm_ui_widget_MMWebView_clz_method_eOz_by7e.call(this);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_setOnCustomTouchListener_e8ri = com_tencent_mm_ui_widget_MMWebView_clz.setOnCustomTouchListener.overload('android.view.View$OnTouchListener');
    com_tencent_mm_ui_widget_MMWebView_clz_method_setOnCustomTouchListener_e8ri.implementation = function(v0) {
        printStacks('public void com.tencent.mm.ui.widget.MMWebView.setOnCustomTouchListener(android.view.View$OnTouchListener)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_setOnCustomTouchListener_e8ri.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_init_5v1e = com_tencent_mm_ui_widget_MMWebView_clz.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int');
    com_tencent_mm_ui_widget_MMWebView_clz_init_5v1e.implementation = function(v0, v1, v2) {
        printStacks('public com.tencent.mm.ui.widget.MMWebView(android.content.Context,android.util.AttributeSet,int)');
        return com_tencent_mm_ui_widget_MMWebView_clz_init_5v1e.call(this, v0, v1, v2);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_init_jkoe = com_tencent_mm_ui_widget_MMWebView_clz.$init.overload('android.content.Context');
    com_tencent_mm_ui_widget_MMWebView_clz_init_jkoe.implementation = function(v0) {
        printStacks('public com.tencent.mm.ui.widget.MMWebView(android.content.Context)');
        return com_tencent_mm_ui_widget_MMWebView_clz_init_jkoe.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_init_5s9a = com_tencent_mm_ui_widget_MMWebView_clz.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int', 'com.tencent.xweb.WebView$c');
    com_tencent_mm_ui_widget_MMWebView_clz_init_5s9a.implementation = function(v0, v1, v2, v3) {
        printStacks('public com.tencent.mm.ui.widget.MMWebView(android.content.Context,android.util.AttributeSet,int,com.tencent.xweb.WebView$c)');
        return com_tencent_mm_ui_widget_MMWebView_clz_init_5s9a.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_init_zhps = com_tencent_mm_ui_widget_MMWebView_clz.$init.overload('android.content.Context', 'android.util.AttributeSet');
    com_tencent_mm_ui_widget_MMWebView_clz_init_zhps.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.ui.widget.MMWebView(android.content.Context,android.util.AttributeSet)');
        return com_tencent_mm_ui_widget_MMWebView_clz_init_zhps.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI');
    var com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dWR_xnrn = com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz.dWR.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dWR_xnrn.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI.dWR()');
        com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dWR_xnrn.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dZf_yi5u = com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz.dZf.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dZf_yi5u.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI.dZf()');
        com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dZf_yi5u.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_b_ijbs = com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_b_ijbs.implementation = function(v0) {
        printStacks('static java.util.concurrent.CountDownLatch com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI.b(com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_b_ijbs.call(com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dZk_90hh = com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz.dZk.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dZk_90hh.implementation = function() {
        printStacks('public int com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI.dZk()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dZk_90hh.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dZl_0qxv = com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz.dZl.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dZl_0qxv.implementation = function() {
        printStacks('protected java.util.Map com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI.dZl()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dZl_0qxv.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_bxM_2obn = com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz.bxM.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_bxM_2obn.implementation = function() {
        printStacks('public final com.tencent.mm.ui.widget.MMWebView com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI.bxM()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_bxM_2obn.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dZp_gtud = com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz.dZp.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dZp_gtud.implementation = function() {
        printStacks('public final java.util.Map com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI.dZp()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dZp_gtud.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dZo_oh9a = com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz.dZo.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dZo_oh9a.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI.dZo()');
        com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dZo_oh9a.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_onResume_ndt6 = com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz.onResume.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_onResume_ndt6.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI.onResume()');
        com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_onResume_ndt6.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_byv_an4w = com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz.byv.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_byv_an4w.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI.byv()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_byv_an4w.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dXQ_6r4c = com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz.dXQ.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dXQ_6r4c.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI.dXQ()');
        com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dXQ_6r4c.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dXP_6lz7 = com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz.dXP.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dXP_6lz7.implementation = function() {
        printStacks('public final com.tencent.mm.plugin.websearch.api.ag com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI.dXP()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dXP_6lz7.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_c_3jam = com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz.c.overload('com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_c_3jam.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI.c(com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_c_3jam.call(com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dYg_ecol = com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz.dYg.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dYg_ecol.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI.dYg()');
        com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_dYg_ecol.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_getJsapi_ss7u = com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz.getJsapi.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_getJsapi_ss7u.implementation = function() {
        printStacks('protected com.tencent.mm.plugin.webview.ui.tools.jsapi.j com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI.getJsapi()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_getJsapi_ss7u.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_bja_p0xj = com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz.bja.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_bja_p0xj.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI.bja()');
        com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_bja_p0xj.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_onCreate_g8dh = com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz.onCreate.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_onCreate_g8dh.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI.onCreate(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_onCreate_g8dh.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_a_w5rt = com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_a_w5rt.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI)');
        com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_a_w5rt.call(com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_onWindowFocusChanged_ohvu = com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz.onWindowFocusChanged.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_onWindowFocusChanged_ohvu.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI.onWindowFocusChanged(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_method_onWindowFocusChanged_ohvu.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_init_p4fn = com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz.$init.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_init_p4fn.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.fts.PreLoadWebViewUI()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_PreLoadWebViewUI_clz_init_p4fn.call(this);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_DeepImageData_clz = Java.use('com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult$DeepImageData');
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_DeepImageData_clz_method_getBitmap_17sr = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_DeepImageData_clz.getBitmap.overload();
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_DeepImageData_clz_method_getBitmap_17sr.implementation = function() {
        printStacks('public android.graphics.Bitmap com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult$DeepImageData.getBitmap()');
        return com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_DeepImageData_clz_method_getBitmap_17sr.call(this);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_DeepImageData_clz_init_4zs9 = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_DeepImageData_clz.$init.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult');
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_DeepImageData_clz_init_4zs9.implementation = function(v0) {
        printStacks('public com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult$DeepImageData(com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult)');
        return com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_DeepImageData_clz_init_4zs9.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter');
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_setActionDelegate_abus = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.setActionDelegate.overload('com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter$a');
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_setActionDelegate_abus.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter.setActionDelegate(com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter$a)');
        com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_setActionDelegate_abus.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_show_f2ee = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.show.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_show_f2ee.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter.show()');
        com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_show_f2ee.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_init_72gx = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.init.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_init_72gx.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter.init()');
        com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_init_72gx.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_isShown_tqe4 = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.isShown.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_isShown_tqe4.implementation = function() {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter.isShown()');
        return com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_isShown_tqe4.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_e_54hy = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.e.overload('com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_e_54hy.implementation = function(v0) {
        printStacks('static android.view.View com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter.e(com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_e_54hy.call(com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_eaY_a4q7 = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.eaY.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_eaY_a4q7.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter.eaY()');
        com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_eaY_a4q7.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_d_rcog = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.d.overload('com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_d_rcog.implementation = function(v0) {
        printStacks('static android.widget.EditText com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter.d(com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_d_rcog.call(com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_D_a5ln = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.D.overload('int', 'int', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_D_a5ln.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter.D(int,int,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_D_a5ln.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_hide_4x7o = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.hide.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_hide_4x7o.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter.hide()');
        com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_hide_4x7o.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_getSearchContent_zws8 = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.getSearchContent.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_getSearchContent_zws8.implementation = function() {
        printStacks('public java.lang.String com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter.getSearchContent()');
        return com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_getSearchContent_zws8.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_reset_ac4l = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.reset.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_reset_ac4l.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter.reset()');
        com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_reset_ac4l.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_c_b16u = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.c.overload('com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_c_b16u.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter$a com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter.c(com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_c_b16u.call(com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_init_22w8 = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int');
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_init_22w8.implementation = function(v0, v1, v2) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter(android.content.Context,android.util.AttributeSet,int)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_init_22w8.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_init_71ma = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.$init.overload('android.content.Context', 'android.util.AttributeSet');
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_init_71ma.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter(android.content.Context,android.util.AttributeSet)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_init_71ma.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz = Java.use('com.tencent.smtt.sdk.WebViewClient');
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedClientCertRequest_i7gi = com_tencent_smtt_sdk_WebViewClient_clz.onReceivedClientCertRequest.overload('com.tencent.smtt.sdk.WebView', 'com.tencent.smtt.export.external.interfaces.ClientCertRequest');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedClientCertRequest_i7gi.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onReceivedClientCertRequest(com.tencent.smtt.sdk.WebView,com.tencent.smtt.export.external.interfaces.ClientCertRequest)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedClientCertRequest_i7gi.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_shouldInterceptRequest_ish2 = com_tencent_smtt_sdk_WebViewClient_clz.shouldInterceptRequest.overload('com.tencent.smtt.sdk.WebView', 'com.tencent.smtt.export.external.interfaces.WebResourceRequest');
    com_tencent_smtt_sdk_WebViewClient_clz_method_shouldInterceptRequest_ish2.implementation = function(v0, v1) {
        printStacks('public com.tencent.smtt.export.external.interfaces.WebResourceResponse com.tencent.smtt.sdk.WebViewClient.shouldInterceptRequest(com.tencent.smtt.sdk.WebView,com.tencent.smtt.export.external.interfaces.WebResourceRequest)');
        return com_tencent_smtt_sdk_WebViewClient_clz_method_shouldInterceptRequest_ish2.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_shouldInterceptRequest_hx0u = com_tencent_smtt_sdk_WebViewClient_clz.shouldInterceptRequest.overload('com.tencent.smtt.sdk.WebView', 'java.lang.String');
    com_tencent_smtt_sdk_WebViewClient_clz_method_shouldInterceptRequest_hx0u.implementation = function(v0, v1) {
        printStacks('public com.tencent.smtt.export.external.interfaces.WebResourceResponse com.tencent.smtt.sdk.WebViewClient.shouldInterceptRequest(com.tencent.smtt.sdk.WebView,java.lang.String)');
        return com_tencent_smtt_sdk_WebViewClient_clz_method_shouldInterceptRequest_hx0u.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedSslError_s3co = com_tencent_smtt_sdk_WebViewClient_clz.onReceivedSslError.overload('com.tencent.smtt.sdk.WebView', 'com.tencent.smtt.export.external.interfaces.SslErrorHandler', 'com.tencent.smtt.export.external.interfaces.SslError');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedSslError_s3co.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onReceivedSslError(com.tencent.smtt.sdk.WebView,com.tencent.smtt.export.external.interfaces.SslErrorHandler,com.tencent.smtt.export.external.interfaces.SslError)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedSslError_s3co.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_doUpdateVisitedHistory_5fse = com_tencent_smtt_sdk_WebViewClient_clz.doUpdateVisitedHistory.overload('com.tencent.smtt.sdk.WebView', 'java.lang.String', 'boolean');
    com_tencent_smtt_sdk_WebViewClient_clz_method_doUpdateVisitedHistory_5fse.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.doUpdateVisitedHistory(com.tencent.smtt.sdk.WebView,java.lang.String,boolean)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_doUpdateVisitedHistory_5fse.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onDetectedBlankScreen_6t3l = com_tencent_smtt_sdk_WebViewClient_clz.onDetectedBlankScreen.overload('java.lang.String', 'int');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onDetectedBlankScreen_6t3l.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onDetectedBlankScreen(java.lang.String,int)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onDetectedBlankScreen_6t3l.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onUnhandledKeyEvent_6sbd = com_tencent_smtt_sdk_WebViewClient_clz.onUnhandledKeyEvent.overload('com.tencent.smtt.sdk.WebView', 'android.view.KeyEvent');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onUnhandledKeyEvent_6sbd.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onUnhandledKeyEvent(com.tencent.smtt.sdk.WebView,android.view.KeyEvent)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onUnhandledKeyEvent_6sbd.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_shouldOverrideUrlLoading_izds = com_tencent_smtt_sdk_WebViewClient_clz.shouldOverrideUrlLoading.overload('com.tencent.smtt.sdk.WebView', 'com.tencent.smtt.export.external.interfaces.WebResourceRequest');
    com_tencent_smtt_sdk_WebViewClient_clz_method_shouldOverrideUrlLoading_izds.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.sdk.WebViewClient.shouldOverrideUrlLoading(com.tencent.smtt.sdk.WebView,com.tencent.smtt.export.external.interfaces.WebResourceRequest)');
        return com_tencent_smtt_sdk_WebViewClient_clz_method_shouldOverrideUrlLoading_izds.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onFormResubmission_095s = com_tencent_smtt_sdk_WebViewClient_clz.onFormResubmission.overload('com.tencent.smtt.sdk.WebView', 'android.os.Message', 'android.os.Message');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onFormResubmission_095s.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onFormResubmission(com.tencent.smtt.sdk.WebView,android.os.Message,android.os.Message)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onFormResubmission_095s.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onLoadResource_hy66 = com_tencent_smtt_sdk_WebViewClient_clz.onLoadResource.overload('com.tencent.smtt.sdk.WebView', 'java.lang.String');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onLoadResource_hy66.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onLoadResource(com.tencent.smtt.sdk.WebView,java.lang.String)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onLoadResource_hy66.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedError_swmh = com_tencent_smtt_sdk_WebViewClient_clz.onReceivedError.overload('com.tencent.smtt.sdk.WebView', 'com.tencent.smtt.export.external.interfaces.WebResourceRequest', 'com.tencent.smtt.export.external.interfaces.WebResourceError');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedError_swmh.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onReceivedError(com.tencent.smtt.sdk.WebView,com.tencent.smtt.export.external.interfaces.WebResourceRequest,com.tencent.smtt.export.external.interfaces.WebResourceError)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedError_swmh.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onTooManyRedirects_qf1j = com_tencent_smtt_sdk_WebViewClient_clz.onTooManyRedirects.overload('com.tencent.smtt.sdk.WebView', 'android.os.Message', 'android.os.Message');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onTooManyRedirects_qf1j.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onTooManyRedirects(com.tencent.smtt.sdk.WebView,android.os.Message,android.os.Message)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onTooManyRedirects_qf1j.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_shouldOverrideUrlLoading_zyfj = com_tencent_smtt_sdk_WebViewClient_clz.shouldOverrideUrlLoading.overload('com.tencent.smtt.sdk.WebView', 'java.lang.String');
    com_tencent_smtt_sdk_WebViewClient_clz_method_shouldOverrideUrlLoading_zyfj.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.sdk.WebViewClient.shouldOverrideUrlLoading(com.tencent.smtt.sdk.WebView,java.lang.String)');
        return com_tencent_smtt_sdk_WebViewClient_clz_method_shouldOverrideUrlLoading_zyfj.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedHttpAuthRequest_5y69 = com_tencent_smtt_sdk_WebViewClient_clz.onReceivedHttpAuthRequest.overload('com.tencent.smtt.sdk.WebView', 'com.tencent.smtt.export.external.interfaces.HttpAuthHandler', 'java.lang.String', 'java.lang.String');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedHttpAuthRequest_5y69.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onReceivedHttpAuthRequest(com.tencent.smtt.sdk.WebView,com.tencent.smtt.export.external.interfaces.HttpAuthHandler,java.lang.String,java.lang.String)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedHttpAuthRequest_5y69.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedError_oi6u = com_tencent_smtt_sdk_WebViewClient_clz.onReceivedError.overload('com.tencent.smtt.sdk.WebView', 'int', 'java.lang.String', 'java.lang.String');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedError_oi6u.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onReceivedError(com.tencent.smtt.sdk.WebView,int,java.lang.String,java.lang.String)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedError_oi6u.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_shouldInterceptRequest_df1f = com_tencent_smtt_sdk_WebViewClient_clz.shouldInterceptRequest.overload('com.tencent.smtt.sdk.WebView', 'com.tencent.smtt.export.external.interfaces.WebResourceRequest', 'android.os.Bundle');
    com_tencent_smtt_sdk_WebViewClient_clz_method_shouldInterceptRequest_df1f.implementation = function(v0, v1, v2) {
        printStacks('public com.tencent.smtt.export.external.interfaces.WebResourceResponse com.tencent.smtt.sdk.WebViewClient.shouldInterceptRequest(com.tencent.smtt.sdk.WebView,com.tencent.smtt.export.external.interfaces.WebResourceRequest,android.os.Bundle)');
        return com_tencent_smtt_sdk_WebViewClient_clz_method_shouldInterceptRequest_df1f.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedHttpError_cqm5 = com_tencent_smtt_sdk_WebViewClient_clz.onReceivedHttpError.overload('com.tencent.smtt.sdk.WebView', 'com.tencent.smtt.export.external.interfaces.WebResourceRequest', 'com.tencent.smtt.export.external.interfaces.WebResourceResponse');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedHttpError_cqm5.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onReceivedHttpError(com.tencent.smtt.sdk.WebView,com.tencent.smtt.export.external.interfaces.WebResourceRequest,com.tencent.smtt.export.external.interfaces.WebResourceResponse)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedHttpError_cqm5.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onPageStarted_q5ah = com_tencent_smtt_sdk_WebViewClient_clz.onPageStarted.overload('com.tencent.smtt.sdk.WebView', 'java.lang.String', 'android.graphics.Bitmap');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onPageStarted_q5ah.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onPageStarted(com.tencent.smtt.sdk.WebView,java.lang.String,android.graphics.Bitmap)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onPageStarted_q5ah.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onPageCommitVisible_uqxu = com_tencent_smtt_sdk_WebViewClient_clz.onPageCommitVisible.overload('com.tencent.smtt.sdk.WebView', 'java.lang.String');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onPageCommitVisible_uqxu.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onPageCommitVisible(com.tencent.smtt.sdk.WebView,java.lang.String)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onPageCommitVisible_uqxu.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onPageFinished_1m6a = com_tencent_smtt_sdk_WebViewClient_clz.onPageFinished.overload('com.tencent.smtt.sdk.WebView', 'java.lang.String');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onPageFinished_1m6a.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onPageFinished(com.tencent.smtt.sdk.WebView,java.lang.String)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onPageFinished_1m6a.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedLoginRequest_1v9a = com_tencent_smtt_sdk_WebViewClient_clz.onReceivedLoginRequest.overload('com.tencent.smtt.sdk.WebView', 'java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedLoginRequest_1v9a.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onReceivedLoginRequest(com.tencent.smtt.sdk.WebView,java.lang.String,java.lang.String,java.lang.String)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedLoginRequest_1v9a.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_shouldOverrideKeyEvent_ps4f = com_tencent_smtt_sdk_WebViewClient_clz.shouldOverrideKeyEvent.overload('com.tencent.smtt.sdk.WebView', 'android.view.KeyEvent');
    com_tencent_smtt_sdk_WebViewClient_clz_method_shouldOverrideKeyEvent_ps4f.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.sdk.WebViewClient.shouldOverrideKeyEvent(com.tencent.smtt.sdk.WebView,android.view.KeyEvent)');
        return com_tencent_smtt_sdk_WebViewClient_clz_method_shouldOverrideKeyEvent_ps4f.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onScaleChanged_7kzr = com_tencent_smtt_sdk_WebViewClient_clz.onScaleChanged.overload('com.tencent.smtt.sdk.WebView', 'float', 'float');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onScaleChanged_7kzr.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onScaleChanged(com.tencent.smtt.sdk.WebView,float,float)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onScaleChanged_7kzr.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_init_v51o = com_tencent_smtt_sdk_WebViewClient_clz.$init.overload();
    com_tencent_smtt_sdk_WebViewClient_clz_init_v51o.implementation = function() {
        printStacks('public com.tencent.smtt.sdk.WebViewClient()');
        return com_tencent_smtt_sdk_WebViewClient_clz_init_v51o.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewStubCallbackWrapper');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_method_equals_xwtq = com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz.equals.overload('java.lang.Object');
    com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_method_equals_xwtq.implementation = function(v0) {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.WebViewStubCallbackWrapper.equals(java.lang.Object)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_method_equals_xwtq.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_method_writeToParcel_0gag = com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz.writeToParcel.overload('android.os.Parcel', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_method_writeToParcel_0gag.implementation = function(v0, v1) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewStubCallbackWrapper.writeToParcel(android.os.Parcel,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_method_writeToParcel_0gag.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_method_describeContents_slxl = com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz.describeContents.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_method_describeContents_slxl.implementation = function() {
        printStacks('public int com.tencent.mm.plugin.webview.ui.tools.WebViewStubCallbackWrapper.describeContents()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_method_describeContents_slxl.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_init_xhkf = com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz.$init.overload('com.tencent.mm.plugin.webview.stub.e', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_init_xhkf.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.WebViewStubCallbackWrapper(com.tencent.mm.plugin.webview.stub.e,int)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_init_xhkf.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_init_0vse = com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_init_0vse.implementation = function(v0) {
        printStacks('private com.tencent.mm.plugin.webview.ui.tools.WebViewStubCallbackWrapper(android.os.IBinder)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_init_0vse.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_init_s1rk = com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz.$init.overload('android.os.IBinder', 'byte');
    com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_init_s1rk.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewStubCallbackWrapper(android.os.IBinder,byte)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_init_s1rk.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_Rf_yvmd = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.Rf.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_Rf_yvmd.implementation = function(v0) {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.Rf(int)');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_Rf_yvmd.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_e_sx3b = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.e.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_e_sx3b.implementation = function(v0) {
        printStacks('static com.tencent.mm.ui.widget.MMWebView com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.e(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_e_sx3b.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_bjb_7gz9 = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.bjb.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_bjb_7gz9.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.bjb()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_bjb_7gz9.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_a_jwqm = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI', 'int', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_a_jwqm.implementation = function(v0, v1, v2) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI,int,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_a_jwqm.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_C_g2hr = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.C.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_C_g2hr.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.fts.d com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.C(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_C_g2hr.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dYY_x14l = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.dYY.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dYY_x14l.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.dYY()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dYY_x14l.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dZe_41cp = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.dZe.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dZe_41cp.implementation = function() {
        printStacks('protected final boolean com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.dZe()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dZe_41cp.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_onPause_5wq4 = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.onPause.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_onPause_5wq4.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.onPause()');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_onPause_5wq4.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_c_0uii = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.c.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI', 'int', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_c_0uii.implementation = function(v0, v1, v2) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.c(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI,int,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_c_0uii.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_v_dsoq = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.v.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_v_dsoq.implementation = function(v0) {
        printStacks('static android.view.View com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.v(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_v_dsoq.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_r_xrcp = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.r.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_r_xrcp.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.r(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_r_xrcp.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_a_avm7 = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_a_avm7.implementation = function(v0, v1) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI,java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_a_avm7.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_l_ejz6 = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.l.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_l_ejz6.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.fts.WeappWebSearchFragment com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.l(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_l_ejz6.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_e_qxdh = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.e.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI', 'int');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_e_qxdh.implementation = function(v0, v1) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.e(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI,int)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_e_qxdh.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dYT_fx37 = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.dYT.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dYT_fx37.implementation = function() {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.dYT()');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dYT_fx37.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dWI_wl0t = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.dWI.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dWI_wl0t.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.dWI()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dWI_wl0t.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_s_ub5m = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.s.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_s_ub5m.implementation = function(v0) {
        printStacks('static android.view.View com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.s(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_s_ub5m.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_h_0lvl = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.h.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_h_0lvl.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.h(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_h_0lvl.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_m_6bz7 = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.m.overload('int', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_m_6bz7.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.m(int,android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_m_6bz7.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dZk_6gxd = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.dZk.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dZk_6gxd.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.dZk()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dZk_6gxd.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_d_7r9s = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.d.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI', 'int');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_d_7r9s.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.d(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI,int)');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_d_7r9s.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_B_8sdc = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.B.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_B_8sdc.implementation = function(v0) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.B(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_B_8sdc.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_k_rt3e = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.k.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_k_rt3e.implementation = function(v0) {
        printStacks('static android.view.View com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.k(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_k_rt3e.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dZl_61xk = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.dZl.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dZl_61xk.implementation = function() {
        printStacks('protected final java.util.Map com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.dZl()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dZl_61xk.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_a_0f9k = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI', 'com.tencent.mm.plugin.webview.ui.tools.fts.a$b');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_a_0f9k.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI,com.tencent.mm.plugin.webview.ui.tools.fts.a$b)');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_a_0f9k.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_Ra_8b7h = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.Ra.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_Ra_8b7h.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.Ra(int)');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_Ra_8b7h.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_c_xte4 = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.c.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_c_xte4.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.fts.ui.widget.FTSMainUIEducationLayout com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.c(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_c_xte4.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_Re_k07c = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.Re.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_Re_k07c.implementation = function(v0) {
        printStacks('private java.lang.String com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.Re(int)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_Re_k07c.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dYU_2exg = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.dYU.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dYU_2exg.implementation = function() {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.dYU()');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dYU_2exg.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dYX_h5zq = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.dYX.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dYX_h5zq.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.dYX()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dYX_h5zq.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_jY_lo08 = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.jY.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_jY_lo08.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.jY(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_jY_lo08.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_x_f1ai = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.x.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_x_f1ai.implementation = function(v0) {
        printStacks('static android.view.View com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.x(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_x_f1ai.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_a_q0ea = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.a.overload('org.json.JSONObject', 'java.lang.String', 'android.content.Context');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_a_q0ea.implementation = function(v0, v1, v2) {
        printStacks('public static int com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.a(org.json.JSONObject,java.lang.String,android.content.Context)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_a_q0ea.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dZj_r53j = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.dZj.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dZj_r53j.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.dZj()');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dZj_r53j.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_onResume_21ht = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.onResume.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_onResume_21ht.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.onResume()');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_onResume_21ht.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_n_z5j7 = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.n.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_n_z5j7.implementation = function(v0) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.n(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_n_z5j7.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_t_ii5h = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.t.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_t_ii5h.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.fts.b com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.t(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_t_ii5h.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_u_ilam = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.u.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_u_ilam.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.fts.c com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.u(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_u_ilam.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_a_zhp8 = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI', 'float');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_a_zhp8.implementation = function(v0, v1) {
        printStacks('static float com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI,float)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_a_zhp8.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_w_vxzo = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.w.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_w_vxzo.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.w(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_w_vxzo.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dZi_q586 = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.dZi.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dZi_q586.implementation = function() {
        printStacks('private boolean com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.dZi()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dZi_q586.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_onWebViewScrollChanged_h4op = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.onWebViewScrollChanged.overload('int', 'int', 'int', 'int');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_onWebViewScrollChanged_h4op.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.onWebViewScrollChanged(int,int,int,int)');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_onWebViewScrollChanged_h4op.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_b_yz9m = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI', 'int');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_b_yz9m.implementation = function(v0, v1) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.b(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI,int)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_b_yz9m.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dYW_did9 = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.dYW.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dYW_did9.implementation = function() {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.dYW()');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dYW_did9.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_asG_jaqa = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.asG.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_asG_jaqa.implementation = function(v0) {
        printStacks('private static java.lang.String com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.asG(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_asG_jaqa.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_d_01qn = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.d.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_d_01qn.implementation = function(v0) {
        printStacks('static com.tencent.mm.ui.widget.MMWebView com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.d(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_d_01qn.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_f_lh9m = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.f.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_f_lh9m.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.f(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_f_lh9m.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_z_za4p = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.z.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_z_za4p.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.z(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_z_za4p.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_b_73x2 = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_b_73x2.implementation = function(v0) {
        printStacks('static android.view.View com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.b(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_b_73x2.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_i_5ake = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.i.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_i_5ake.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.i(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_i_5ake.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_a_uik9 = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.a.overload('java.lang.String', 'java.lang.String', 'java.util.List', 'com.tencent.mm.ui.search.FTSEditTextView$b');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_a_uik9.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.a(java.lang.String,java.lang.String,java.util.List,com.tencent.mm.ui.search.FTSEditTextView$b)');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_a_uik9.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_g_tp3i = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.g.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_g_tp3i.implementation = function(v0) {
        printStacks('static com.tencent.mm.ui.widget.MMWebView com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.g(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_g_tp3i.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_j_il5x = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.j.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_j_il5x.implementation = function(v0) {
        printStacks('static android.view.View com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.j(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_j_il5x.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_getLayoutId_e038 = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.getLayoutId.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_getLayoutId_e038.implementation = function() {
        printStacks('public int com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.getLayoutId()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_getLayoutId_e038.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_o_zj8i = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.o.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_o_zj8i.implementation = function(v0) {
        printStacks('static com.tencent.mm.sdk.platformtools.ap com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.o(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_o_zj8i.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_b_2ngl = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI', 'int', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_b_2ngl.implementation = function(v0, v1, v2) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.b(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI,int,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_b_2ngl.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dYV_x931 = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.dYV.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dYV_x931.implementation = function() {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.dYV()');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dYV_x931.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_onDestroy_fgbk = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.onDestroy.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_onDestroy_fgbk.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.onDestroy()');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_onDestroy_fgbk.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_q_mhdo = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.q.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_q_mhdo.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.q(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_q_mhdo.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_getHint_hwea = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.getHint.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_getHint_hwea.implementation = function() {
        printStacks('protected final java.lang.String com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.getHint()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_getHint_hwea.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_y_wl7j = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.y.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_y_wl7j.implementation = function(v0) {
        printStacks('static android.view.View com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.y(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_y_wl7j.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_getJsapi_dtif = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.getJsapi.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_getJsapi_dtif.implementation = function() {
        printStacks('protected final com.tencent.mm.plugin.webview.ui.tools.jsapi.j com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.getJsapi()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_getJsapi_dtif.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_onActivityResult_w9gf = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.onActivityResult.overload('int', 'int', 'android.content.Intent');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_onActivityResult_w9gf.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.onActivityResult(int,int,android.content.Intent)');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_onActivityResult_w9gf.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_bja_wqig = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.bja.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_bja_wqig.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.bja()');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_bja_wqig.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_m_sg0f = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.m.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_m_sg0f.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.m(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_m_sg0f.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_a_izqp = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI', 'int');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_a_izqp.implementation = function(v0, v1) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI,int)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_a_izqp.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_c_tz6k = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.c.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI', 'int');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_c_tz6k.implementation = function(v0, v1) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.c(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI,int)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_c_tz6k.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_bjl_j4dj = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.bjl.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_bjl_j4dj.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.bjl()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_bjl_j4dj.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_a_wmgr = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_a_wmgr.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI$a com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_a_wmgr.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_onBackPressed_b9uk = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.onBackPressed.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_onBackPressed_b9uk.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.onBackPressed()');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_onBackPressed_b9uk.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_p_cphl = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.p.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_p_cphl.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.p(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_p_cphl.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_onCreate_smvp = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.onCreate.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_onCreate_smvp.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.onCreate(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_onCreate_smvp.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_onWindowFocusChanged_r1y8 = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.onWindowFocusChanged.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_onWindowFocusChanged_r1y8.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.onWindowFocusChanged(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_onWindowFocusChanged_r1y8.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dZd_vzcv = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.dZd.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dZd_vzcv.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.dZd()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_dZd_vzcv.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_A_31yb = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.A.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_A_31yb.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI.A(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_method_A_31yb.call(com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_init_t1us = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz.$init.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_init_t1us.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_clz_init_t1us.call(this);
    };
    var com_tencent_xweb_WebView_b_clz = Java.use('com.tencent.xweb.WebView$b');
    var com_tencent_xweb_WebView_b_clz_init_gax8 = com_tencent_xweb_WebView_b_clz.$init.overload();
    com_tencent_xweb_WebView_b_clz_init_gax8.implementation = function() {
        printStacks('public com.tencent.xweb.WebView$b()');
        return com_tencent_xweb_WebView_b_clz_init_gax8.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewStubCallbackWrapper$1');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz_method_createFromParcel_ddib = com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz.createFromParcel.overload('android.os.Parcel');
    com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz_method_createFromParcel_ddib.implementation = function(v0) {
        printStacks('public final java.lang.Object com.tencent.mm.plugin.webview.ui.tools.WebViewStubCallbackWrapper$1.createFromParcel(android.os.Parcel)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz_method_createFromParcel_ddib.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz_method_newArray_8wzp = com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz.newArray.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz_method_newArray_8wzp.implementation = function(v0) {
        printStacks('public final java.lang.Object[] com.tencent.mm.plugin.webview.ui.tools.WebViewStubCallbackWrapper$1.newArray(int)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz_method_newArray_8wzp.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz_init_lw6n = com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz.$init.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz_init_lw6n.implementation = function() {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewStubCallbackWrapper$1()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz_init_lw6n.call(this);
    };
    var com_tencent_smtt_sdk_WebView_HitTestResult_clz = Java.use('com.tencent.smtt.sdk.WebView$HitTestResult');
    var com_tencent_smtt_sdk_WebView_HitTestResult_clz_method_getExtra_0bb2 = com_tencent_smtt_sdk_WebView_HitTestResult_clz.getExtra.overload();
    com_tencent_smtt_sdk_WebView_HitTestResult_clz_method_getExtra_0bb2.implementation = function() {
        printStacks('public java.lang.String com.tencent.smtt.sdk.WebView$HitTestResult.getExtra()');
        return com_tencent_smtt_sdk_WebView_HitTestResult_clz_method_getExtra_0bb2.call(this);
    };
    var com_tencent_smtt_sdk_WebView_HitTestResult_clz_method_getType_weda = com_tencent_smtt_sdk_WebView_HitTestResult_clz.getType.overload();
    com_tencent_smtt_sdk_WebView_HitTestResult_clz_method_getType_weda.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView$HitTestResult.getType()');
        return com_tencent_smtt_sdk_WebView_HitTestResult_clz_method_getType_weda.call(this);
    };
    var com_tencent_smtt_sdk_WebView_HitTestResult_clz_init_u53r = com_tencent_smtt_sdk_WebView_HitTestResult_clz.$init.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult');
    com_tencent_smtt_sdk_WebView_HitTestResult_clz_init_u53r.implementation = function(v0) {
        printStacks('public com.tencent.smtt.sdk.WebView$HitTestResult(com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult)');
        return com_tencent_smtt_sdk_WebView_HitTestResult_clz_init_u53r.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_HitTestResult_clz_init_hmcf = com_tencent_smtt_sdk_WebView_HitTestResult_clz.$init.overload('android.webkit.WebView$HitTestResult');
    com_tencent_smtt_sdk_WebView_HitTestResult_clz_init_hmcf.implementation = function(v0) {
        printStacks('public com.tencent.smtt.sdk.WebView$HitTestResult(android.webkit.WebView$HitTestResult)');
        return com_tencent_smtt_sdk_WebView_HitTestResult_clz_init_hmcf.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_HitTestResult_clz_init_45e8 = com_tencent_smtt_sdk_WebView_HitTestResult_clz.$init.overload();
    com_tencent_smtt_sdk_WebView_HitTestResult_clz_init_45e8.implementation = function() {
        printStacks('public com.tencent.smtt.sdk.WebView$HitTestResult()');
        return com_tencent_smtt_sdk_WebView_HitTestResult_clz_init_45e8.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyViewPager_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyViewPager');
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyViewPager_clz_method_onSizeChanged_v3zu = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyViewPager_clz.onSizeChanged.overload('int', 'int', 'int', 'int');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyViewPager_clz_method_onSizeChanged_v3zu.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyViewPager.onSizeChanged(int,int,int,int)');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyViewPager_clz_method_onSizeChanged_v3zu.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyViewPager_clz_method_setPanelManager_gdai = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyViewPager_clz.setPanelManager.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.c');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyViewPager_clz_method_setPanelManager_gdai.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyViewPager.setPanelManager(com.tencent.mm.plugin.webview.ui.tools.widget.input.c)');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyViewPager_clz_method_setPanelManager_gdai.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyViewPager_clz_method_setOnSizeChangedListener_ygfu = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyViewPager_clz.setOnSizeChangedListener.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyViewPager$a');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyViewPager_clz_method_setOnSizeChangedListener_ygfu.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyViewPager.setOnSizeChangedListener(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyViewPager$a)');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyViewPager_clz_method_setOnSizeChangedListener_ygfu.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyViewPager_clz_init_i7rb = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyViewPager_clz.$init.overload('android.content.Context', 'android.util.AttributeSet');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyViewPager_clz_init_i7rb.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyViewPager(android.content.Context,android.util.AttributeSet)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyViewPager_clz_init_i7rb.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewKeyboardLinearLayout');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_QQ_bndv = com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz.QQ.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_QQ_bndv.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewKeyboardLinearLayout.QQ(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_QQ_bndv.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_onMeasure_o4gz = com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz.onMeasure.overload('int', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_onMeasure_o4gz.implementation = function(v0, v1) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewKeyboardLinearLayout.onMeasure(int,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_onMeasure_o4gz.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_getKeyBoardHeight_jnre = com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz.getKeyBoardHeight.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_getKeyBoardHeight_jnre.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.ui.tools.WebViewKeyboardLinearLayout.getKeyBoardHeight()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_getKeyBoardHeight_jnre.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_onLayout_7w38 = com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz.onLayout.overload('boolean', 'int', 'int', 'int', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_onLayout_7w38.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewKeyboardLinearLayout.onLayout(boolean,int,int,int,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_onLayout_7w38.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_dWU_roil = com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz.dWU.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_dWU_roil.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewKeyboardLinearLayout.dWU()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_dWU_roil.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_Cc_3k2x = com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz.Cc.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_Cc_3k2x.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewKeyboardLinearLayout.Cc(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_Cc_3k2x.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_init_gw5e = com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_init_gw5e.implementation = function(v0, v1, v2) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.WebViewKeyboardLinearLayout(android.content.Context,android.util.AttributeSet,int)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_init_gw5e.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_init_920f = com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz.$init.overload('android.content.Context', 'android.util.AttributeSet');
    com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_init_920f.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.WebViewKeyboardLinearLayout(android.content.Context,android.util.AttributeSet)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_init_920f.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_modeltools_WebViewClipBoardHelper_clz = Java.use('com.tencent.mm.plugin.webview.modeltools.WebViewClipBoardHelper');
    var com_tencent_mm_plugin_webview_modeltools_WebViewClipBoardHelper_clz_method_onPrimaryClipChanged_fote = com_tencent_mm_plugin_webview_modeltools_WebViewClipBoardHelper_clz.onPrimaryClipChanged.overload();
    com_tencent_mm_plugin_webview_modeltools_WebViewClipBoardHelper_clz_method_onPrimaryClipChanged_fote.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.modeltools.WebViewClipBoardHelper.onPrimaryClipChanged()');
        com_tencent_mm_plugin_webview_modeltools_WebViewClipBoardHelper_clz_method_onPrimaryClipChanged_fote.call(this);
    };
    var com_tencent_mm_plugin_webview_modeltools_WebViewClipBoardHelper_clz_init_gghp = com_tencent_mm_plugin_webview_modeltools_WebViewClipBoardHelper_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_modeltools_WebViewClipBoardHelper_clz_init_gghp.implementation = function(v0) {
        printStacks('public com.tencent.mm.plugin.webview.modeltools.WebViewClipBoardHelper(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_modeltools_WebViewClipBoardHelper_clz_init_gghp.call(this, v0);
    };
    var com_tencent_smtt_export_external_proxy_X5ProxyWebViewClient_clz = Java.use('com.tencent.smtt.export.external.proxy.X5ProxyWebViewClient');
    var com_tencent_smtt_export_external_proxy_X5ProxyWebViewClient_clz_init_5hc7 = com_tencent_smtt_export_external_proxy_X5ProxyWebViewClient_clz.$init.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewClient');
    com_tencent_smtt_export_external_proxy_X5ProxyWebViewClient_clz_init_5hc7.implementation = function(v0) {
        printStacks('public com.tencent.smtt.export.external.proxy.X5ProxyWebViewClient(com.tencent.smtt.export.external.interfaces.IX5WebViewClient)');
        return com_tencent_smtt_export_external_proxy_X5ProxyWebViewClient_clz_init_5hc7.call(this, v0);
    };
    var com_tencent_smtt_export_external_proxy_X5ProxyWebViewClient_clz_init_a3in = com_tencent_smtt_export_external_proxy_X5ProxyWebViewClient_clz.$init.overload('com.tencent.smtt.export.external.WebViewWizardBase');
    com_tencent_smtt_export_external_proxy_X5ProxyWebViewClient_clz_init_a3in.implementation = function(v0) {
        printStacks('public com.tencent.smtt.export.external.proxy.X5ProxyWebViewClient(com.tencent.smtt.export.external.WebViewWizardBase)');
        return com_tencent_smtt_export_external_proxy_X5ProxyWebViewClient_clz_init_a3in.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_a_0gjq = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_a_0gjq.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.a(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_a_0gjq.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_ebb_pnfi = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.ebb.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_ebb_pnfi.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.ebb()');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_ebb_pnfi.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_i_ul19 = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.i.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_i_ul19.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyPanel com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.i(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_i_ul19.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_bnX_hqj5 = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.bnX.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_bnX_hqj5.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.bnX()');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_bnX_hqj5.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_onDetachedFromWindow_lmuc = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.onDetachedFromWindow.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_onDetachedFromWindow_lmuc.implementation = function() {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.onDetachedFromWindow()');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_onDetachedFromWindow_lmuc.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_a_lycq = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter', 'int');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_a_lycq.implementation = function(v0, v1) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.a(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter,int)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_a_lycq.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_dXI_2d5u = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.dXI.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_dXI_2d5u.implementation = function() {
        printStacks('private int com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.dXI()');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_dXI_2d5u.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_isShown_m11n = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.isShown.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_isShown_m11n.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.isShown()');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_isShown_m11n.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_e_4bge = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.e.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_e_4bge.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.e(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_e_4bge.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_c_rn5p = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.c.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_c_rn5p.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.c(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_c_rn5p.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_a_g8ec = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_a_g8ec.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.a(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_a_g8ec.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_g_0a4g = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.g.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_g_0a4g.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.g(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_g_0a4g.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_j_g4ui = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.j.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_j_g4ui.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter$a com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.j(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_j_g4ui.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_d_3b6h = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.d.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_d_3b6h.implementation = function(v0) {
        printStacks('static com.tencent.mm.ui.widget.MMEditText com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.d(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_d_3b6h.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setText_kf3s = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.setText.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setText_kf3s.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.setText(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setText_kf3s.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_b_y6f8 = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_b_y6f8.implementation = function(v0) {
        printStacks('static com.tencent.mm.ui.MMActivity com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.b(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_b_y6f8.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setMaxCount_fxlt = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.setMaxCount.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setMaxCount_fxlt.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.setMaxCount(int)');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setMaxCount_fxlt.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_eba_cjug = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.eba.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_eba_cjug.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.eba()');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_eba_cjug.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_f_01mb = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.f.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_f_01mb.implementation = function(v0) {
        printStacks('static android.widget.ImageButton com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.f(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_f_01mb.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setOnSmileyPanelVisibilityChangedListener_cqfa = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.setOnSmileyPanelVisibilityChangedListener.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter$b');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setOnSmileyPanelVisibilityChangedListener_cqfa.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.setOnSmileyPanelVisibilityChangedListener(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter$b)');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setOnSmileyPanelVisibilityChangedListener_cqfa.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_hide_9i6a = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.hide.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_hide_9i6a.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.hide()');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_hide_9i6a.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_l_zs07 = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.l.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_l_zs07.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.l(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_l_zs07.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setOnSmileyChosenListener_dfcj = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.setOnSmileyChosenListener.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter$a');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setOnSmileyChosenListener_dfcj.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.setOnSmileyChosenListener(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter$a)');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setOnSmileyChosenListener_dfcj.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_k_5bgi = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.k.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_k_5bgi.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter$c com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.k(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_k_5bgi.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setOnTextSendListener_ixn4 = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.setOnTextSendListener.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter$c');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setOnTextSendListener_ixn4.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.setOnTextSendListener(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter$c)');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setOnTextSendListener_ixn4.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_h_zj8q = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.h.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_h_zj8q.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.h(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter)');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_h_zj8q.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_eaZ_p3dh = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.eaZ.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_eaZ_p3dh.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.eaZ()');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_eaZ_p3dh.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_init_n9hc = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.$init.overload('android.content.Context', 'android.util.AttributeSet');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_init_n9hc.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter(android.content.Context,android.util.AttributeSet)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_init_n9hc.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_a_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI$a');
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_a_clz_method_dZm_zfzi = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_a_clz.dZm.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_a_clz_method_dZm_zfzi.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI$a.dZm()');
        com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_a_clz_method_dZm_zfzi.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_a_clz_method_dZd_do7b = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_a_clz.dZd.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_a_clz_method_dZd_do7b.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI$a.dZd()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_a_clz_method_dZd_do7b.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_a_clz_init_994g = com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_a_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI', 'java.lang.String', 'android.os.Looper');
    com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_a_clz_init_994g.implementation = function(v0, v1, v2) {
        printStacks('protected com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI$a(com.tencent.mm.plugin.webview.ui.tools.fts.FTSSOSHomeWebViewUI,java.lang.String,android.os.Looper)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_FTSSOSHomeWebViewUI_a_clz_init_994g.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_f_1ffl = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.f.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_f_1ffl.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.f(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_f_1ffl.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYj_rbzs = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYj.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYj_rbzs.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYj()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYj_rbzs.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxP_tp9y = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bxP.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxP_tp9y.implementation = function() {
        printStacks('protected com.tencent.xweb.y com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bxP()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxP_tp9y.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXZ_5cvq = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXZ.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXZ_5cvq.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXZ()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXZ_5cvq.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bjb_mwtl = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bjb.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bjb_mwtl.implementation = function() {
        printStacks('protected int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bjb()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bjb_mwtl.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_T_04pd = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.T.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_T_04pd.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.T(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_T_04pd.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ar_7bc9 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.ar.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ar_7bc9.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.ar(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ar_7bc9.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setActionbarColor_5v7n = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.setActionbarColor.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setActionbarColor_5v7n.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.setActionbarColor(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setActionbarColor_5v7n.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_convertActivityFromTranslucent_ega8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.convertActivityFromTranslucent.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_convertActivityFromTranslucent_ega8.implementation = function() {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.convertActivityFromTranslucent()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_convertActivityFromTranslucent_ega8.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onKeyUp_ofig = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onKeyUp.overload('int', 'android.view.KeyEvent');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onKeyUp_ofig.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onKeyUp(int,android.view.KeyEvent)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onKeyUp_ofig.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_m_3o7r = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.m.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_m_3o7r.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.m(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_m_3o7r.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxR_ic4t = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bxR.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxR_ic4t.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bxR()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxR_ic4t.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_w_ba7c = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.w.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_w_ba7c.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.w(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_w_ba7c.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QZ_elpe = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.QZ.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QZ_elpe.implementation = function(v0) {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.QZ(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QZ_elpe.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dWI_9jy8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dWI.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dWI_9jy8.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dWI()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dWI_9jy8.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dTY_25t7 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dTY.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dTY_25t7.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dTY()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dTY_25t7.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_srni = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.b.overload('com.tencent.xweb.WebView', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_srni.implementation = function(v0, v1) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.b(com.tencent.xweb.WebView,java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_srni.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_l_5pma = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.l.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_l_5pma.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.k com.tencent.mm.plugin.webview.ui.tools.WebViewUI.l(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_l_5pma.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_7lba = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.b.overload('java.lang.String', 'java.lang.String', 'java.util.Map');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_7lba.implementation = function(v0, v1, v2) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.b(java.lang.String,java.lang.String,java.util.Map)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_7lba.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYl_8bog = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYl.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYl_8bog.implementation = function() {
        printStacks('static java.util.regex.Pattern com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYl()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYl_8bog.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byt_9nt7 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.byt.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byt_9nt7.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.byt()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byt_9nt7.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_rN_f1k8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.rN.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_rN_f1k8.implementation = function(v0) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.rN(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_rN_f1k8.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QY_29hn = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.QY.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QY_29hn.implementation = function(v0) {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.QY(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QY_29hn.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_K_vyg2 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.K.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_K_vyg2.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.f com.tencent.mm.plugin.webview.ui.tools.WebViewUI.K(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_K_vyg2.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_m_lk6r = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.m.overload('int', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_m_lk6r.implementation = function(v0, v1) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.m(int,android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_m_lk6r.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXE_2xbq = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXE.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXE_2xbq.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXE()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXE_2xbq.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_at_aav1 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.at.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_at_aav1.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.at(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_at_aav1.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_70o8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_70o8.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_70o8.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Li_1e2y = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.Li.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Li_1e2y.implementation = function(v0) {
        printStacks('private static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.Li(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Li_1e2y.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_getActionBarHeight_rukr = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.getActionBarHeight.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_getActionBarHeight_rukr.implementation = function() {
        printStacks('protected final int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.getActionBarHeight()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_getActionBarHeight_rukr.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dVW_jorl = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dVW.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dVW_jorl.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dVW()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dVW_jorl.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_f1zg = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_f1zg.implementation = function(v0, v1) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.b(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,boolean)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_f1zg.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_c3a4 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.c.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_c3a4.implementation = function(v0, v1) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.c(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_c3a4.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asp_2o43 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asp.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asp_2o43.implementation = function(v0) {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asp(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asp_2o43.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_wc5v = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.jsapi.d', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_wc5v.implementation = function(v0, v1) {
        printStacks('private static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.jsapi.d,java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_wc5v.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_rmkj = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.Runnable');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_rmkj.implementation = function(v0, v1) {
        printStacks('static java.lang.Runnable com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.Runnable)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_rmkj.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_x_cz6s = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.x.overload('int', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_x_cz6s.implementation = function(v0, v1) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.x(int,android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_x_cz6s.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_673f = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'long');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_673f.implementation = function(v0, v1) {
        printStacks('static long com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,long)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_673f.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXI_hj9l = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXI.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXI_hj9l.implementation = function() {
        printStacks('protected int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXI()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXI_hj9l.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asj_l3cp = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asj.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asj_l3cp.implementation = function(v0) {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asj(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asj_l3cp.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_az_2lsg = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.az.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_az_2lsg.implementation = function(v0) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.az(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_az_2lsg.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Ra_smqi = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.Ra.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Ra_smqi.implementation = function(v0) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.Ra(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Ra_smqi.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QX_ihlm = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.QX.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QX_ihlm.implementation = function(v0) {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.QX(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QX_ihlm.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_mlqg = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'com.tencent.mm.ui.base.p');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_mlqg.implementation = function(v0, v1) {
        printStacks('static com.tencent.mm.ui.base.p com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,com.tencent.mm.ui.base.p)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_mlqg.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_jO_umoi = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.jO.overload('java.lang.String', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_jO_umoi.implementation = function(v0, v1) {
        printStacks('private boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.jO(java.lang.String,java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_jO_umoi.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXt_58ji = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXt.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXt_58ji.implementation = function() {
        printStacks('public final com.tencent.mm.plugin.webview.ui.tools.media.MPVideoPlayFullScreenView com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXt()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXt_58ji.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXw_0ezf = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXw.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXw_0ezf.implementation = function() {
        printStacks('private static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXw()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXw_0ezf.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onCreateBeforeSetContentView_5quj = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onCreateBeforeSetContentView.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onCreateBeforeSetContentView_5quj.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onCreateBeforeSetContentView()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onCreateBeforeSetContentView_5quj.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ask_v1gf = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.ask.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ask_v1gf.implementation = function(v0) {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.ask(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ask_v1gf.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_g_pvo1 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.g.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_g_pvo1.implementation = function(v0) {
        printStacks('static java.util.Set com.tencent.mm.plugin.webview.ui.tools.WebViewUI.g(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_g_pvo1.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_initSwipeBack_schi = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.initSwipeBack.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_initSwipeBack_schi.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.initSwipeBack()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_initSwipeBack_schi.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_showOptionMenu_vaxy = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.showOptionMenu.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_showOptionMenu_vaxy.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.showOptionMenu(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_showOptionMenu_vaxy.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onCancel_1ohh = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onCancel.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onCancel_1ohh.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onCancel()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onCancel_1ohh.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXq_aeyw = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXq.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXq_aeyw.implementation = function() {
        printStacks('public final com.tencent.mm.plugin.webview.f.g com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXq()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXq_aeyw.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_h31k = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'android.webkit.WebChromeClient$CustomViewCallback');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_h31k.implementation = function(v0, v1) {
        printStacks('static android.webkit.WebChromeClient$CustomViewCallback com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,android.webkit.WebChromeClient$CustomViewCallback)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_h31k.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onResume_9yux = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onResume.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onResume_9yux.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onResume()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onResume_9yux.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_ce6f = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'long');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_ce6f.implementation = function(v0, v1) {
        printStacks('static long com.tencent.mm.plugin.webview.ui.tools.WebViewUI.b(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,long)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_ce6f.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asq_z8jw = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asq.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asq_z8jw.implementation = function(v0) {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asq(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asq_z8jw.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXV_86xr = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXV.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXV_86xr.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXV()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXV_86xr.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_as_k887 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.as.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_as_k887.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.as(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_as_k887.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onWebViewScrollChanged_4eta = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onWebViewScrollChanged.overload('int', 'int', 'int', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onWebViewScrollChanged_4eta.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onWebViewScrollChanged(int,int,int,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onWebViewScrollChanged_4eta.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byv_hkm3 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.byv.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byv_hkm3.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.byv()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byv_hkm3.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ap_86b8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.ap.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ap_86b8.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.ap(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ap_86b8.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_n_jqta = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.n.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_n_jqta.implementation = function(v0) {
        printStacks('static android.webkit.WebChromeClient$CustomViewCallback com.tencent.mm.plugin.webview.ui.tools.WebViewUI.n(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_n_jqta.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_V_lzlo = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.V.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_V_lzlo.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.model.ai$d com.tencent.mm.plugin.webview.ui.tools.WebViewUI.V(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_V_lzlo.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_541a = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.c.overload('android.os.Bundle', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_541a.implementation = function(v0, v1) {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.c(android.os.Bundle,boolean)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_541a.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dTU_p46z = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dTU.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dTU_p46z.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dTU()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dTU_p46z.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXQ_8w8p = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXQ.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXQ_8w8p.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXQ()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXQ_8w8p.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_t_v0sw = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.t.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_t_v0sw.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.t(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_t_v0sw.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_b7vl = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.c.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_b7vl.implementation = function(v0) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.c(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_b7vl.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_baM_rkr9 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.baM.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_baM_rkr9.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.baM()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_baM_rkr9.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setStatusBarColor_m3co = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.setStatusBarColor.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setStatusBarColor_m3co.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.setStatusBarColor(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setStatusBarColor_m3co.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXv_uat9 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXv.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXv_uat9.implementation = function() {
        printStacks('public final com.tencent.mm.ui.base.p com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXv()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXv_uat9.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setMMTitle_zf1j = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.setMMTitle.overload('java.lang.CharSequence');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setMMTitle_zf1j.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.setMMTitle(java.lang.CharSequence)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setMMTitle_zf1j.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_H_a92m = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.H.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_H_a92m.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.H(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_H_a92m.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxU_r5oc = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bxU.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxU_r5oc.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bxU()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxU_r5oc.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXP_3qcr = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXP.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXP_3qcr.implementation = function() {
        printStacks('protected com.tencent.mm.plugin.websearch.api.ag com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXP()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXP_3qcr.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXR_45qm = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXR.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXR_45qm.implementation = function() {
        printStacks('protected final java.util.LinkedList com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXR()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXR_45qm.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxO_fhop = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bxO.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxO_fhop.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bxO()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxO_fhop.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXS_r4om = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXS.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXS_r4om.implementation = function() {
        printStacks('protected final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXS()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXS_r4om.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_e7uq = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_e7uq.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.b(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_e7uq.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byX_opb5 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.byX.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byX_opb5.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.byX()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byX_opb5.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_rL_t0ck = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.rL.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_rL_t0ck.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.rL(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_rL_t0ck.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onKeyDown_qs8e = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onKeyDown.overload('int', 'android.view.KeyEvent');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onKeyDown_qs8e.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onKeyDown(int,android.view.KeyEvent)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onKeyDown_qs8e.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byz_5v5z = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.byz.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byz_5v5z.implementation = function() {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.byz()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byz_5v5z.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setBackBtn_0lxk = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.setBackBtn.overload('android.view.MenuItem$OnMenuItemClickListener', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setBackBtn_0lxk.implementation = function(v0, v1) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.setBackBtn(android.view.MenuItem$OnMenuItemClickListener,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setBackBtn_0lxk.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asr_nbvn = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asr.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asr_nbvn.implementation = function(v0) {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asr(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asr_nbvn.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_R_cpfi = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.R.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_R_cpfi.implementation = function(v0) {
        printStacks('static java.lang.Runnable com.tencent.mm.plugin.webview.ui.tools.WebViewUI.R(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_R_cpfi.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_hideVKB_3dpt = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.hideVKB.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_hideVKB_3dpt.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.hideVKB()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_hideVKB_3dpt.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_mK_ov8l = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.mK.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_mK_ov8l.implementation = function(v0) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.mK(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_mK_ov8l.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_j_uze7 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.j.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_j_uze7.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.j(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_j_uze7.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXF_c4mo = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXF.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXF_c4mo.implementation = function() {
        printStacks('private android.view.View com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXF()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXF_c4mo.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_x_uu61 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.x.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_x_uu61.implementation = function(v0) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.x(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_x_uu61.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bkX_ouuv = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bkX.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bkX_ouuv.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bkX()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bkX_ouuv.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXu_leqn = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXu.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXu_leqn.implementation = function() {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXu()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXu_leqn.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byb_40ik = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.byb.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byb_40ik.implementation = function() {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.byb()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byb_40ik.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byq_u9zd = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.byq.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byq_u9zd.implementation = function() {
        printStacks('protected synchronized com.tencent.xweb.t com.tencent.mm.plugin.webview.ui.tools.WebViewUI.byq()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byq_u9zd.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXH_n9wp = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXH.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXH_n9wp.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXH()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXH_n9wp.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setMMTitle_nczw = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.setMMTitle.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setMMTitle_nczw.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.setMMTitle(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setMMTitle_nczw.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onDestroy_bev8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onDestroy.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onDestroy_bev8.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onDestroy()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onDestroy_bev8.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_v_fmfs = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.v.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_v_fmfs.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.f.g com.tencent.mm.plugin.webview.ui.tools.WebViewUI.v(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_v_fmfs.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_U_08h8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.U.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_U_08h8.implementation = function(v0) {
        printStacks('static com.tencent.mm.ui.base.p com.tencent.mm.plugin.webview.ui.tools.WebViewUI.U(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_U_08h8.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYh_vtxe = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYh.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYh_vtxe.implementation = function() {
        printStacks('public final com.tencent.mm.ui.widget.MMWebView com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYh()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYh_vtxe.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_d_3p2g = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.d.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_d_3p2g.implementation = function(v0, v1) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.d(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_d_3p2g.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_C_q6da = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.C.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_C_q6da.implementation = function(v0) {
        printStacks('static java.util.Map com.tencent.mm.plugin.webview.ui.tools.WebViewUI.C(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_C_q6da.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onActivityResult_l67i = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onActivityResult.overload('int', 'int', 'android.content.Intent');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onActivityResult_l67i.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onActivityResult(int,int,android.content.Intent)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onActivityResult_l67i.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bja_jukd = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bja.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bja_jukd.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bja()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bja_jukd.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_finish_zvid = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.finish.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_finish_zvid.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.finish()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_finish_zvid.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onRequestPermissionsResult_f4hr = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onRequestPermissionsResult.overload('int', '[Ljava.lang.String;', '[I');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onRequestPermissionsResult_f4hr.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onRequestPermissionsResult(int,java.lang.String[],int[])');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onRequestPermissionsResult_f4hr.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXy_jhfw = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXy.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXy_jhfw.implementation = function() {
        printStacks('private boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXy()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXy_jhfw.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXB_x7ib = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXB.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXB_x7ib.implementation = function() {
        printStacks('final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXB()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXB_x7ib.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_N_8tm8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.N.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_N_8tm8.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.N(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_N_8tm8.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXK_6nqh = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXK.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXK_6nqh.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXK()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXK_6nqh.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXM_yk5c = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXM.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXM_yk5c.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXM()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXM_yk5c.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_showVKB_7iaj = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.showVKB.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_showVKB_7iaj.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.showVKB()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_showVKB_7iaj.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_56r7 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_56r7.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.b(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_56r7.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_o_jl8c = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.o.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_o_jl8c.implementation = function(v0) {
        printStacks('static android.view.View com.tencent.mm.plugin.webview.ui.tools.WebViewUI.o(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_o_jl8c.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onCreate_wwqe = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onCreate.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onCreate_wwqe.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onCreate(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onCreate_wwqe.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_J_8h0l = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.J.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_J_8h0l.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.J(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_J_8h0l.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setMMOrientation_ylbw = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.setMMOrientation.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setMMOrientation_ylbw.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.setMMOrientation()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setMMOrientation_ylbw.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_B_5fz7 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.B.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_B_5fz7.implementation = function(v0) {
        printStacks('static java.util.Map com.tencent.mm.plugin.webview.ui.tools.WebViewUI.B(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_B_5fz7.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byx_6u0e = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.byx.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byx_6u0e.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.byx()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byx_6u0e.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_6xrl = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'android.webkit.WebChromeClient$CustomViewCallback');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_6xrl.implementation = function(v0, v1) {
        printStacks('static android.webkit.WebChromeClient$CustomViewCallback com.tencent.mm.plugin.webview.ui.tools.WebViewUI.b(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,android.webkit.WebChromeClient$CustomViewCallback)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_6xrl.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_loadUrl_k39z = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.loadUrl.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_loadUrl_k39z.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.loadUrl(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_loadUrl_k39z.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_eX_zltf = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.eX.overload('android.view.View');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_eX_zltf.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.eX(android.view.View)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_eX_zltf.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXX_kyvg = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXX.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXX_kyvg.implementation = function() {
        printStacks('private boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXX()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXX_kyvg.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXe_zgg9 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXe.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXe_zgg9.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXe()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXe_zgg9.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_am_kv5b = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.am.overload('boolean', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_am_kv5b.implementation = function(v0, v1) {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.am(boolean,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_am_kv5b.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_F_b9pk = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.F.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_F_b9pk.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.F(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_F_b9pk.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QV_phif = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.QV.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QV_phif.implementation = function(v0) {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.QV(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QV_phif.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXx_ri3e = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXx.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXx_ri3e.implementation = function() {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXx()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXx_ri3e.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_i_agbp = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.i.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_i_agbp.implementation = function(v0) {
        printStacks('static android.view.View$OnLongClickListener com.tencent.mm.plugin.webview.ui.tools.WebViewUI.i(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_i_agbp.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byu_dy3p = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.byu.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byu_dy3p.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.byu()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byu_dy3p.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onPause_3c82 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onPause.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onPause_3c82.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onPause()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onPause_3c82.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_an_ahhk = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.an.overload('boolean', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_an_ahhk.implementation = function(v0, v1) {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.an(boolean,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_an_ahhk.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dWR_xrgz = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dWR.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dWR_xrgz.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dWR()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dWR_xrgz.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_8exr = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_8exr.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_8exr.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byr_lc65 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.byr.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byr_lc65.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.byr()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byr_lc65.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXY_fhek = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXY.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXY_fhek.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXY()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXY_fhek.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ON_y0qm = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.ON.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ON_y0qm.implementation = function(v0) {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.ON(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ON_y0qm.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXA_n23k = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXA.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXA_n23k.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXA()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXA_n23k.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXs_vkni = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXs.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXs_vkni.implementation = function() {
        printStacks('protected final com.tencent.mm.plugin.webview.ui.tools.widget.n com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXs()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXs_vkni.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ass_1jdk = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.ass.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ass_1jdk.implementation = function(v0) {
        printStacks('private boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.ass(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ass_1jdk.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dUb_8glv = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dUb.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dUb_8glv.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dUb()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dUb_8glv.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXT_dus8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXT.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXT_dus8.implementation = function() {
        printStacks('protected final int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXT()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXT_dus8.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_g_rsio = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.g.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_g_rsio.implementation = function(v0, v1) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.g(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_g_rsio.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_p8f4 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.String', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_p8f4.implementation = function(v0, v1, v2) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.WebViewUI$w com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.String,int)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_p8f4.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYe_4can = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYe.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYe_4can.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYe()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYe_4can.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onConfigurationChanged_xu2q = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onConfigurationChanged.overload('android.content.res.Configuration');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onConfigurationChanged_xu2q.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onConfigurationChanged(android.content.res.Configuration)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onConfigurationChanged_xu2q.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_ik68 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'com.tencent.mm.plugin.webview.ui.tools.d');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_ik68.implementation = function(v0, v1) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.d com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,com.tencent.mm.plugin.webview.ui.tools.d)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_ik68.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_o_r4t9 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.o.overload('java.lang.String', 'boolean', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_o_r4t9.implementation = function(v0, v1, v2) {
        printStacks('private com.tencent.mm.plugin.webview.ui.tools.WebViewUI$w com.tencent.mm.plugin.webview.ui.tools.WebViewUI.o(java.lang.String,boolean,int)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_o_r4t9.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onDrag_jqrd = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onDrag.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onDrag_jqrd.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onDrag()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onDrag_jqrd.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_lhbc = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_lhbc.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.b(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_lhbc.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxN_y91y = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bxN.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxN_y91y.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bxN()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxN_y91y.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYm_b9ij = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYm.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYm_b9ij.implementation = function() {
        printStacks('static java.util.regex.Pattern com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYm()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYm_b9ij.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_6c0r = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'android.widget.ProgressBar');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_6c0r.implementation = function(v0, v1) {
        printStacks('static android.widget.ProgressBar com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,android.widget.ProgressBar)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_6c0r.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aA_bskk = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.aA.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aA_bskk.implementation = function(v0) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.aA(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aA_bskk.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_q_i4pi = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.q.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_q_i4pi.implementation = function(v0) {
        printStacks('static android.webkit.WebChromeClient$CustomViewCallback com.tencent.mm.plugin.webview.ui.tools.WebViewUI.q(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_q_i4pi.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_rO_d2y6 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.rO.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_rO_d2y6.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.rO(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_rO_d2y6.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_f_nqas = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.f.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_f_nqas.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.f(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_f_nqas.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QW_dvug = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.QW.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QW_dvug.implementation = function(v0) {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.QW(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QW_dvug.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byA_bxik = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.byA.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byA_bxik.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.byA()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byA_bxik.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_ej59 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.c.overload('java.lang.String', 'android.graphics.drawable.Drawable');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_ej59.implementation = function(v0, v1) {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.c(java.lang.String,android.graphics.drawable.Drawable)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_ej59.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ao_9eu9 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.ao.overload('boolean', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ao_9eu9.implementation = function(v0, v1) {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.ao(boolean,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ao_9eu9.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_W_41o6 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.W.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_W_41o6.implementation = function(v0) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.W(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_W_41o6.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Q_hb62 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.Q.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Q_hb62.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.Q(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Q_hb62.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxM_x8le = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bxM.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxM_x8le.implementation = function() {
        printStacks('protected com.tencent.mm.ui.widget.MMWebView com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bxM()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxM_x8le.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_rM_14zc = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.rM.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_rM_14zc.implementation = function(v0) {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.rM(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_rM_14zc.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXO_mshc = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXO.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXO_mshc.implementation = function() {
        printStacks('protected final com.tencent.mm.plugin.webview.ui.tools.o com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXO()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXO_mshc.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asg_sbw9 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asg.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asg_sbw9.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asg(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asg_sbw9.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Mk_6nbj = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.Mk.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Mk_6nbj.implementation = function(v0) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.Mk(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Mk_6nbj.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bur_8djq = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bur.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bur_8djq.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bur()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bur_8djq.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxT_yim7 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bxT.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxT_yim7.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bxT()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxT_yim7.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_k_ly7b = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.k.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_k_ly7b.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter com.tencent.mm.plugin.webview.ui.tools.WebViewUI.k(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_k_ly7b.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXC_rlt1 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXC.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXC_rlt1.implementation = function() {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXC()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXC_rlt1.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_r_10ff = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.r.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_r_10ff.implementation = function(v0) {
        printStacks('static android.widget.ProgressBar com.tencent.mm.plugin.webview.ui.tools.WebViewUI.r(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_r_10ff.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_goem = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.String', 'boolean', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_goem.implementation = function(v0, v1, v2, v3) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.String,boolean,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_goem.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Vw_vztc = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.Vw.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Vw_vztc.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.Vw()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Vw_vztc.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_93r8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.c.overload('android.app.Dialog');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_93r8.implementation = function(v0) {
        printStacks('public static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.c(android.app.Dialog)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_93r8.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_p_uhwa = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.p.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_p_uhwa.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.p(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_p_uhwa.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXJ_lcka = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXJ.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXJ_lcka.implementation = function() {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXJ()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXJ_lcka.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_M_yz1j = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.M.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_M_yz1j.implementation = function(v0) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.M(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_M_yz1j.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asv_8sqq = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asv.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asv_8sqq.implementation = function(v0) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asv(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asv_8sqq.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXG_hht8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXG.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXG_hht8.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXG()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXG_hht8.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_O_3h0g = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.O.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_O_3h0g.implementation = function(v0) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.O(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_O_3h0g.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXD_m9ga = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXD.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXD_m9ga.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXD()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXD_m9ga.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_7219 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('android.view.ViewGroup', 'android.view.WindowInsets');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_7219.implementation = function(v0, v1) {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(android.view.ViewGroup,android.view.WindowInsets)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_7219.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_2ry7 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'com.tencent.mm.plugin.webview.ui.tools.f');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_2ry7.implementation = function(v0, v1) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.f com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,com.tencent.mm.plugin.webview.ui.tools.f)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_2ry7.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXr_tw06 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXr.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXr_tw06.implementation = function() {
        printStacks('public final com.tencent.mm.plugin.webview.ui.tools.b.a com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXr()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXr_tw06.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_L_skuq = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.L.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_L_skuq.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.L(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_L_skuq.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_h_mh7j = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.h.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_h_mh7j.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.h(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_h_mh7j.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_initView_jjea = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.initView.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_initView_jjea.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.initView()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_initView_jjea.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asu_lvt6 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asu.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asu_lvt6.implementation = function(v0) {
        printStacks('private final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asu(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asu_lvt6.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXz_av3r = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXz.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXz_av3r.implementation = function() {
        printStacks('private int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXz()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXz_av3r.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_deF_9trc = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.deF.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_deF_9trc.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.deF()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_deF_9trc.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxG_mfth = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bxG.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxG_mfth.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bxG()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxG_mfth.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_e_z068 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.e.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_e_z068.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.e(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_e_z068.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asx_4x43 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asx.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asx_4x43.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asx(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asx_4x43.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_x6hg = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_x6hg.implementation = function(v0, v1) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,boolean)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_x6hg.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_needShowIdcError_tbve = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.needShowIdcError.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_needShowIdcError_tbve.implementation = function() {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.needShowIdcError()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_needShowIdcError_tbve.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ar_3ny7 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.ar.overload('android.view.View', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ar_3ny7.implementation = function(v0, v1) {
        printStacks('private static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.ar(android.view.View,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ar_3ny7.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_i_ltye = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.i.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_i_ltye.implementation = function(v0, v1) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.i(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_i_ltye.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_P_tqme = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.P.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_P_tqme.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.P(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_P_tqme.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXN_xbwf = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXN.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXN_xbwf.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXN()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXN_xbwf.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_y_4hut = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.y.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_y_4hut.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.y(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_y_4hut.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_f2j8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('java.lang.String', 'java.lang.String', 'java.util.Map', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_f2j8.implementation = function(v0, v1, v2, v3) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(java.lang.String,java.lang.String,java.util.Map,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_f2j8.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_D_k4ic = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.D.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_D_k4ic.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.D(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_D_k4ic.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYd_rt96 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYd.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYd_rt96.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYd()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYd_rt96.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_m_mgpa = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.m.overload('java.lang.String', 'long', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_m_mgpa.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.m(java.lang.String,long,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_m_mgpa.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onSwipeBackFinish_6gza = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onSwipeBackFinish.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onSwipeBackFinish_6gza.implementation = function() {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onSwipeBackFinish()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onSwipeBackFinish_6gza.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_f_37u7 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.f.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_f_37u7.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.f(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_f_37u7.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_eM_sv2v = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.eM.overload('java.lang.String', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_eM_sv2v.implementation = function(v0, v1) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.eM(java.lang.String,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_eM_sv2v.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byy_255e = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.byy.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byy_255e.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.byy()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byy_255e.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_w66u = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'android.view.View');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_w66u.implementation = function(v0, v1) {
        printStacks('static android.view.View com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,android.view.View)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_w66u.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Y_z9bf = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.Y.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Y_z9bf.implementation = function(v0) {
        printStacks('static long com.tencent.mm.plugin.webview.ui.tools.WebViewUI.Y(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Y_z9bf.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_A_b4rn = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.A.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_A_b4rn.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.b.a com.tencent.mm.plugin.webview.ui.tools.WebViewUI.A(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_A_b4rn.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXL_gs7t = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXL.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXL_gs7t.implementation = function() {
        printStacks('protected int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXL()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXL_gs7t.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bza_yh0b = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bza.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bza_yh0b.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bza()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bza_yh0b.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aso_wac1 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.aso.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aso_wac1.implementation = function(v0) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.aso(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aso_wac1.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asw_sweu = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asw.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asw_sweu.implementation = function(v0) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asw(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asw_sweu.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_h_mdwx = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.h.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_h_mdwx.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.h(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_h_mdwx.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aB_dtpm = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.aB.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aB_dtpm.implementation = function(v0) {
        printStacks('protected final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.aB(android.os.Bundle)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aB_dtpm.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aK_lkfg = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.aK.overload('int', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aK_lkfg.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.aK(int,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aK_lkfg.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_nvre = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'com.tencent.mm.plugin.webview.ui.tools.WebViewKeyboardLinearLayout', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_nvre.implementation = function(v0, v1, v2) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,com.tencent.mm.plugin.webview.ui.tools.WebViewKeyboardLinearLayout,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_nvre.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_S_cu0r = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.S.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_S_cu0r.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.S(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_S_cu0r.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_getLayoutId_k8va = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.getLayoutId.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_getLayoutId_k8va.implementation = function() {
        printStacks('public int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.getLayoutId()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_getLayoutId_k8va.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_I_p5p9 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.I.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_I_p5p9.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.I(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_I_p5p9.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_M_ftd3 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.M.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_M_ftd3.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.M(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_M_ftd3.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_d_9cxq = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.d.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_d_9cxq.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.d(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_d_9cxq.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_loadUrl_c05q = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.loadUrl.overload('java.lang.String', 'java.util.Map', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_loadUrl_c05q.implementation = function(v0, v1, v2) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.loadUrl(java.lang.String,java.util.Map,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_loadUrl_c05q.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Lh_v1w6 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.Lh.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Lh_v1w6.implementation = function(v0) {
        printStacks('private static java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.Lh(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Lh_v1w6.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXU_7af6 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXU.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXU_7af6.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXU()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXU_7af6.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYg_9djh = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYg.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYg_9djh.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYg()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYg_9djh.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYb_b6e8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYb.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYb_b6e8.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYb()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYb_b6e8.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_d_gtpb = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.d.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_d_gtpb.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.d(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_d_gtpb.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_7sgp = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.c.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_7sgp.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.c(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_7sgp.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_s_0ac4 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.s.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_s_0ac4.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.modeltools.d com.tencent.mm.plugin.webview.ui.tools.WebViewUI.s(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_s_0ac4.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_u_t4dv = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.u.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_u_t4dv.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.u(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_u_t4dv.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asn_8buq = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asn.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asn_8buq.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asn(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asn_8buq.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_X_tjql = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.X.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_X_tjql.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.X(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_X_tjql.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYc_t6no = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYc.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYc_t6no.implementation = function() {
        printStacks('private boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYc()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYc_t6no.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onReset_xr0u = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onReset.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onReset_xr0u.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onReset()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onReset_xr0u.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXW_mzqz = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXW.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXW_mzqz.implementation = function() {
        printStacks('public final com.tencent.mm.plugin.webview.ui.tools.media.a com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXW()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXW_mzqz.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_getForceOrientation_25lr = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.getForceOrientation.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_getForceOrientation_25lr.implementation = function() {
        printStacks('public int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.getForceOrientation()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_getForceOrientation_25lr.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_addIconOptionMenu_41zq = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.addIconOptionMenu.overload('int', 'int', 'android.view.MenuItem$OnMenuItemClickListener');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_addIconOptionMenu_41zq.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.addIconOptionMenu(int,int,android.view.MenuItem$OnMenuItemClickListener)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_addIconOptionMenu_41zq.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asi_663c = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asi.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asi_663c.implementation = function(v0) {
        printStacks('protected final int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asi(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asi_663c.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bjc_7hgw = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bjc.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bjc_7hgw.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bjc()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bjc_7hgw.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_e_xbgc = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.e.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_e_xbgc.implementation = function(v0, v1) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.e(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_e_xbgc.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYk_wgrz = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYk.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYk_wgrz.implementation = function() {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYk()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYk_wgrz.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dWz_wbi9 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dWz.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dWz_wbi9.implementation = function() {
        printStacks('private boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dWz()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dWz_wbi9.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_showOptionMenu_bqja = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.showOptionMenu.overload('int', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_showOptionMenu_bqja.implementation = function(v0, v1) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.showOptionMenu(int,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_showOptionMenu_bqja.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_G_jn8w = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.G.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_G_jn8w.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.G(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_G_jn8w.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onStop_lk8b = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onStop.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onStop_lk8b.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onStop()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onStop_lk8b.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYa_9dte = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYa.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYa_9dte.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYa()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYa_9dte.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxX_wy9p = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bxX.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxX_wy9p.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bxX()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxX_wy9p.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aC_7q0r = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.aC.overload('java.lang.String', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aC_7q0r.implementation = function(v0, v1) {
        printStacks('protected com.tencent.mm.plugin.webview.ui.tools.WebViewUI$w com.tencent.mm.plugin.webview.ui.tools.WebViewUI.aC(java.lang.String,boolean)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aC_7q0r.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aq_ooom = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.aq.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aq_ooom.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.aq(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aq_ooom.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_eW_vxso = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.eW.overload('android.view.View');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_eW_vxso.implementation = function(v0) {
        printStacks('private static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.eW(android.view.View)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_eW_vxso.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_startActivity_sqx3 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.startActivity.overload('android.content.Intent');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_startActivity_sqx3.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.startActivity(android.content.Intent)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_startActivity_sqx3.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_E_2t7k = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.E.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_E_2t7k.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.E(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_E_2t7k.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYi_4snx = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYi.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYi_4snx.implementation = function() {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYi()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYi_4snx.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_91bl = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.ui.base.p');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_91bl.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.ui.base.p)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_91bl.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_qimj = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_qimj.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_qimj.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_z_3ryr = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.z.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_z_3ryr.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.z(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_z_3ryr.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byw_79gc = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.byw.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byw_79gc.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.byw()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byw_79gc.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onStart_c2ra = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onStart.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onStart_c2ra.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onStart()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onStart_c2ra.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_e_i7hi = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.e.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_e_i7hi.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.e(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_e_i7hi.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxV_7zpr = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bxV.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxV_7zpr.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bxV()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxV_7zpr.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asl_5fjy = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asl.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asl_5fjy.implementation = function(v0) {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asl(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asl_5fjy.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bys_9h9y = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bys.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bys_9h9y.implementation = function() {
        printStacks('protected com.tencent.mm.plugin.webview.ui.tools.jsapi.j com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bys()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bys_9h9y.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onSwipeBack_cs0f = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onSwipeBack.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onSwipeBack_cs0f.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onSwipeBack()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onSwipeBack_cs0f.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ast_tqvg = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.ast.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ast_tqvg.implementation = function(v0) {
        printStacks('private boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.ast(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ast_tqvg.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_46rl = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('java.lang.String', 'java.lang.String', 'com.tencent.mm.protocal.JsapiPermissionWrapper', 'com.tencent.mm.protocal.GeneralControlWrapper', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_46rl.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(java.lang.String,java.lang.String,com.tencent.mm.protocal.JsapiPermissionWrapper,com.tencent.mm.protocal.GeneralControlWrapper,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_46rl.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_ijor = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.b.overload('com.tencent.mm.plugin.webview.stub.c');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_ijor.implementation = function(v0) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.b(com.tencent.mm.plugin.webview.stub.c)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_ijor.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asm_zh1n = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asm.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asm_zh1n.implementation = function(v0) {
        printStacks('private static java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asm(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asm_zh1n.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYf_ywr9 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYf.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYf_ywr9.implementation = function() {
        printStacks('protected final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYf()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYf_ywr9.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_7odu = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.xweb.WebView', 'java.lang.String', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_7odu.implementation = function(v0, v1, v2) {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.xweb.WebView,java.lang.String,java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_7odu.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onWindowFocusChanged_j84n = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onWindowFocusChanged.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onWindowFocusChanged_j84n.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onWindowFocusChanged(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onWindowFocusChanged_j84n.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_init_b25o = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.$init.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_init_b25o.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.WebViewUI()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_init_b25o.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$1');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_clz_method_run_8k1m = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_clz.run.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_clz_method_run_8k1m.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1$1.run()');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_clz_method_run_8k1m.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_clz_init_svmw = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService$1', 'int', 'android.os.Bundle', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_clz_init_svmw.implementation = function(v0, v1, v2, v3) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$1(com.tencent.mm.plugin.webview.stub.WebViewStubService$1,int,android.os.Bundle,int)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_clz_init_svmw.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$7');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_clz_method_run_4dpb = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_clz.run.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_clz_method_run_4dpb.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1$7.run()');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_clz_method_run_4dpb.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_clz_init_oilf = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService$1');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_clz_init_oilf.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$7(com.tencent.mm.plugin.webview.stub.WebViewStubService$1)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_clz_init_oilf.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz = Java.use('com.tencent.smtt.sdk.WebView');
    var com_tencent_smtt_sdk_WebView_clz_method_getRendererRequestedPriority_npjb = com_tencent_smtt_sdk_WebView_clz.getRendererRequestedPriority.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getRendererRequestedPriority_npjb.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.getRendererRequestedPriority()');
        return com_tencent_smtt_sdk_WebView_clz_method_getRendererRequestedPriority_npjb.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_enablePlatformNotifications_cdp7 = com_tencent_smtt_sdk_WebView_clz.enablePlatformNotifications.overload();
    com_tencent_smtt_sdk_WebView_clz_method_enablePlatformNotifications_cdp7.implementation = function() {
        printStacks('public static void com.tencent.smtt.sdk.WebView.enablePlatformNotifications()');
        com_tencent_smtt_sdk_WebView_clz_method_enablePlatformNotifications_cdp7.call(com_tencent_smtt_sdk_WebView_clz);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_canZoomOut_ctdb = com_tencent_smtt_sdk_WebView_clz.canZoomOut.overload();
    com_tencent_smtt_sdk_WebView_clz_method_canZoomOut_ctdb.implementation = function() {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.canZoomOut()');
        return com_tencent_smtt_sdk_WebView_clz_method_canZoomOut_ctdb.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_isPrivateBrowsingEnabled_p1fg = com_tencent_smtt_sdk_WebView_clz.isPrivateBrowsingEnabled.overload();
    com_tencent_smtt_sdk_WebView_clz_method_isPrivateBrowsingEnabled_p1fg.implementation = function() {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.isPrivateBrowsingEnabled()');
        return com_tencent_smtt_sdk_WebView_clz_method_isPrivateBrowsingEnabled_p1fg.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getTitle_kg9u = com_tencent_smtt_sdk_WebView_clz.getTitle.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getTitle_kg9u.implementation = function() {
        printStacks('public java.lang.String com.tencent.smtt.sdk.WebView.getTitle()');
        return com_tencent_smtt_sdk_WebView_clz_method_getTitle_kg9u.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getHitTestResult_ukoj = com_tencent_smtt_sdk_WebView_clz.getHitTestResult.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getHitTestResult_ukoj.implementation = function() {
        printStacks('public com.tencent.smtt.sdk.WebView$HitTestResult com.tencent.smtt.sdk.WebView.getHitTestResult()');
        return com_tencent_smtt_sdk_WebView_clz_method_getHitTestResult_ukoj.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_computeHorizontalScrollRange_e32l = com_tencent_smtt_sdk_WebView_clz.computeHorizontalScrollRange.overload();
    com_tencent_smtt_sdk_WebView_clz_method_computeHorizontalScrollRange_e32l.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.computeHorizontalScrollRange()');
        return com_tencent_smtt_sdk_WebView_clz_method_computeHorizontalScrollRange_e32l.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_c_3zpj = com_tencent_smtt_sdk_WebView_clz.c.overload('android.content.Context');
    com_tencent_smtt_sdk_WebView_clz_method_c_3zpj.implementation = function(v0) {
        printStacks('private boolean com.tencent.smtt.sdk.WebView.c(android.content.Context)');
        return com_tencent_smtt_sdk_WebView_clz_method_c_3zpj.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_requestImageRef_z6h7 = com_tencent_smtt_sdk_WebView_clz.requestImageRef.overload('android.os.Message');
    com_tencent_smtt_sdk_WebView_clz_method_requestImageRef_z6h7.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.requestImageRef(android.os.Message)');
        com_tencent_smtt_sdk_WebView_clz_method_requestImageRef_z6h7.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_switchToNightMode_4qal = com_tencent_smtt_sdk_WebView_clz.switchToNightMode.overload();
    com_tencent_smtt_sdk_WebView_clz_method_switchToNightMode_4qal.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.switchToNightMode()');
        com_tencent_smtt_sdk_WebView_clz_method_switchToNightMode_4qal.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_goBack_jf6g = com_tencent_smtt_sdk_WebView_clz.goBack.overload();
    com_tencent_smtt_sdk_WebView_clz_method_goBack_jf6g.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.goBack()');
        com_tencent_smtt_sdk_WebView_clz_method_goBack_jf6g.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_findHierarchyView_nf56 = com_tencent_smtt_sdk_WebView_clz.findHierarchyView.overload('java.lang.String', 'int');
    com_tencent_smtt_sdk_WebView_clz_method_findHierarchyView_nf56.implementation = function(v0, v1) {
        printStacks('public android.view.View com.tencent.smtt.sdk.WebView.findHierarchyView(java.lang.String,int)');
        return com_tencent_smtt_sdk_WebView_clz_method_findHierarchyView_nf56.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_onSizeChanged_2rs4 = com_tencent_smtt_sdk_WebView_clz.onSizeChanged.overload('int', 'int', 'int', 'int');
    com_tencent_smtt_sdk_WebView_clz_method_onSizeChanged_2rs4.implementation = function(v0, v1, v2, v3) {
        printStacks('protected void com.tencent.smtt.sdk.WebView.onSizeChanged(int,int,int,int)');
        com_tencent_smtt_sdk_WebView_clz_method_onSizeChanged_2rs4.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_removeJavascriptInterface_z6u5 = com_tencent_smtt_sdk_WebView_clz.removeJavascriptInterface.overload('java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_removeJavascriptInterface_z6u5.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.removeJavascriptInterface(java.lang.String)');
        com_tencent_smtt_sdk_WebView_clz_method_removeJavascriptInterface_z6u5.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setSysDayOrNight_p9x6 = com_tencent_smtt_sdk_WebView_clz.setSysDayOrNight.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_setSysDayOrNight_p9x6.implementation = function(v0) {
        printStacks('public static synchronized void com.tencent.smtt.sdk.WebView.setSysDayOrNight(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_setSysDayOrNight_p9x6.call(com_tencent_smtt_sdk_WebView_clz, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_clearHistory_2vt9 = com_tencent_smtt_sdk_WebView_clz.clearHistory.overload();
    com_tencent_smtt_sdk_WebView_clz_method_clearHistory_2vt9.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.clearHistory()');
        com_tencent_smtt_sdk_WebView_clz_method_clearHistory_2vt9.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_onLongClick_wx1d = com_tencent_smtt_sdk_WebView_clz.onLongClick.overload('android.view.View');
    com_tencent_smtt_sdk_WebView_clz_method_onLongClick_wx1d.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.onLongClick(android.view.View)');
        return com_tencent_smtt_sdk_WebView_clz_method_onLongClick_wx1d.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setPictureListener_fes5 = com_tencent_smtt_sdk_WebView_clz.setPictureListener.overload('com.tencent.smtt.sdk.WebView$PictureListener');
    com_tencent_smtt_sdk_WebView_clz_method_setPictureListener_fes5.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setPictureListener(com.tencent.smtt.sdk.WebView$PictureListener)');
        com_tencent_smtt_sdk_WebView_clz_method_setPictureListener_fes5.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getSettingsExtension_q0m9 = com_tencent_smtt_sdk_WebView_clz.getSettingsExtension.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getSettingsExtension_q0m9.implementation = function() {
        printStacks('public com.tencent.smtt.export.external.extension.interfaces.IX5WebSettingsExtension com.tencent.smtt.sdk.WebView.getSettingsExtension()');
        return com_tencent_smtt_sdk_WebView_clz_method_getSettingsExtension_q0m9.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_canZoomIn_6pzn = com_tencent_smtt_sdk_WebView_clz.canZoomIn.overload();
    com_tencent_smtt_sdk_WebView_clz_method_canZoomIn_6pzn.implementation = function() {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.canZoomIn()');
        return com_tencent_smtt_sdk_WebView_clz_method_canZoomIn_6pzn.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setVisibility_mcfl = com_tencent_smtt_sdk_WebView_clz.setVisibility.overload('int');
    com_tencent_smtt_sdk_WebView_clz_method_setVisibility_mcfl.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setVisibility(int)');
        com_tencent_smtt_sdk_WebView_clz_method_setVisibility_mcfl.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getScrollBarFadeDuration_09i8 = com_tencent_smtt_sdk_WebView_clz.getScrollBarFadeDuration.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getScrollBarFadeDuration_09i8.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.getScrollBarFadeDuration()');
        return com_tencent_smtt_sdk_WebView_clz_method_getScrollBarFadeDuration_09i8.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_a_6rfp = com_tencent_smtt_sdk_WebView_clz.a.overload('com.tencent.smtt.sdk.WebView', 'int', 'int', 'int', 'int');
    com_tencent_smtt_sdk_WebView_clz_method_a_6rfp.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('static void com.tencent.smtt.sdk.WebView.a(com.tencent.smtt.sdk.WebView,int,int,int,int)');
        com_tencent_smtt_sdk_WebView_clz_method_a_6rfp.call(com_tencent_smtt_sdk_WebView_clz, v0, v1, v2, v3, v4);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_clearFormData_majf = com_tencent_smtt_sdk_WebView_clz.clearFormData.overload();
    com_tencent_smtt_sdk_WebView_clz_method_clearFormData_majf.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.clearFormData()');
        com_tencent_smtt_sdk_WebView_clz_method_clearFormData_majf.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setWebChromeClient_jpl9 = com_tencent_smtt_sdk_WebView_clz.setWebChromeClient.overload('com.tencent.smtt.sdk.WebChromeClient');
    com_tencent_smtt_sdk_WebView_clz_method_setWebChromeClient_jpl9.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setWebChromeClient(com.tencent.smtt.sdk.WebChromeClient)');
        com_tencent_smtt_sdk_WebView_clz_method_setWebChromeClient_jpl9.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_disablePlatformNotifications_09ar = com_tencent_smtt_sdk_WebView_clz.disablePlatformNotifications.overload();
    com_tencent_smtt_sdk_WebView_clz_method_disablePlatformNotifications_09ar.implementation = function() {
        printStacks('public static void com.tencent.smtt.sdk.WebView.disablePlatformNotifications()');
        com_tencent_smtt_sdk_WebView_clz_method_disablePlatformNotifications_09ar.call(com_tencent_smtt_sdk_WebView_clz);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_addJavascriptInterface_kvua = com_tencent_smtt_sdk_WebView_clz.addJavascriptInterface.overload('java.lang.Object', 'java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_addJavascriptInterface_kvua.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebView.addJavascriptInterface(java.lang.Object,java.lang.String)');
        com_tencent_smtt_sdk_WebView_clz_method_addJavascriptInterface_kvua.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_super_overScrollBy_znsu = com_tencent_smtt_sdk_WebView_clz.super_overScrollBy.overload('int', 'int', 'int', 'int', 'int', 'int', 'int', 'int', 'boolean');
    com_tencent_smtt_sdk_WebView_clz_method_super_overScrollBy_znsu.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7, v8) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.super_overScrollBy(int,int,int,int,int,int,int,int,boolean)');
        return com_tencent_smtt_sdk_WebView_clz_method_super_overScrollBy_znsu.call(this, v0, v1, v2, v3, v4, v5, v6, v7, v8);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getRendererPriorityWaivedWhenNotVisible_j7kl = com_tencent_smtt_sdk_WebView_clz.getRendererPriorityWaivedWhenNotVisible.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getRendererPriorityWaivedWhenNotVisible_j7kl.implementation = function() {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.getRendererPriorityWaivedWhenNotVisible()');
        return com_tencent_smtt_sdk_WebView_clz_method_getRendererPriorityWaivedWhenNotVisible_j7kl.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getContentWidth_jon8 = com_tencent_smtt_sdk_WebView_clz.getContentWidth.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getContentWidth_jon8.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.getContentWidth()');
        return com_tencent_smtt_sdk_WebView_clz_method_getContentWidth_jon8.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_showFindDialog_65se = com_tencent_smtt_sdk_WebView_clz.showFindDialog.overload('java.lang.String', 'boolean');
    com_tencent_smtt_sdk_WebView_clz_method_showFindDialog_65se.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.showFindDialog(java.lang.String,boolean)');
        return com_tencent_smtt_sdk_WebView_clz_method_showFindDialog_65se.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setFindListener_ftbi = com_tencent_smtt_sdk_WebView_clz.setFindListener.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase$FindListener');
    com_tencent_smtt_sdk_WebView_clz_method_setFindListener_ftbi.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setFindListener(com.tencent.smtt.export.external.interfaces.IX5WebViewBase$FindListener)');
        com_tencent_smtt_sdk_WebView_clz_method_setFindListener_ftbi.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_b_j8zp = com_tencent_smtt_sdk_WebView_clz.b.overload();
    com_tencent_smtt_sdk_WebView_clz_method_b_j8zp.implementation = function() {
        printStacks('android.webkit.WebView com.tencent.smtt.sdk.WebView.b()');
        return com_tencent_smtt_sdk_WebView_clz_method_b_j8zp.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getTbsNeedReboot_d7hb = com_tencent_smtt_sdk_WebView_clz.getTbsNeedReboot.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getTbsNeedReboot_d7hb.implementation = function() {
        printStacks('public static boolean com.tencent.smtt.sdk.WebView.getTbsNeedReboot()');
        return com_tencent_smtt_sdk_WebView_clz_method_getTbsNeedReboot_d7hb.call(com_tencent_smtt_sdk_WebView_clz);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getUrl_jaxa = com_tencent_smtt_sdk_WebView_clz.getUrl.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getUrl_jaxa.implementation = function() {
        printStacks('public java.lang.String com.tencent.smtt.sdk.WebView.getUrl()');
        return com_tencent_smtt_sdk_WebView_clz_method_getUrl_jaxa.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setDownloadListener_d4u9 = com_tencent_smtt_sdk_WebView_clz.setDownloadListener.overload('com.tencent.smtt.sdk.DownloadListener');
    com_tencent_smtt_sdk_WebView_clz_method_setDownloadListener_d4u9.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setDownloadListener(com.tencent.smtt.sdk.DownloadListener)');
        com_tencent_smtt_sdk_WebView_clz_method_setDownloadListener_d4u9.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_d_htur = com_tencent_smtt_sdk_WebView_clz.d.overload();
    com_tencent_smtt_sdk_WebView_clz_method_d_htur.implementation = function() {
        printStacks('static void com.tencent.smtt.sdk.WebView.d()');
        com_tencent_smtt_sdk_WebView_clz_method_d_htur.call(com_tencent_smtt_sdk_WebView_clz);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getOriginalUrl_9wn2 = com_tencent_smtt_sdk_WebView_clz.getOriginalUrl.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getOriginalUrl_9wn2.implementation = function() {
        printStacks('public java.lang.String com.tencent.smtt.sdk.WebView.getOriginalUrl()');
        return com_tencent_smtt_sdk_WebView_clz_method_getOriginalUrl_9wn2.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_onResume_auke = com_tencent_smtt_sdk_WebView_clz.onResume.overload();
    com_tencent_smtt_sdk_WebView_clz_method_onResume_auke.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.onResume()');
        com_tencent_smtt_sdk_WebView_clz_method_onResume_auke.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getScrollBarDefaultDelayBeforeFade_6zik = com_tencent_smtt_sdk_WebView_clz.getScrollBarDefaultDelayBeforeFade.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getScrollBarDefaultDelayBeforeFade_6zik.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.getScrollBarDefaultDelayBeforeFade()');
        return com_tencent_smtt_sdk_WebView_clz_method_getScrollBarDefaultDelayBeforeFade_6zik.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_goForward_kroj = com_tencent_smtt_sdk_WebView_clz.goForward.overload();
    com_tencent_smtt_sdk_WebView_clz_method_goForward_kroj.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.goForward()');
        com_tencent_smtt_sdk_WebView_clz_method_goForward_kroj.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_stopLoading_nq5u = com_tencent_smtt_sdk_WebView_clz.stopLoading.overload();
    com_tencent_smtt_sdk_WebView_clz_method_stopLoading_nq5u.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.stopLoading()');
        com_tencent_smtt_sdk_WebView_clz_method_stopLoading_nq5u.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_canGoForward_21rl = com_tencent_smtt_sdk_WebView_clz.canGoForward.overload();
    com_tencent_smtt_sdk_WebView_clz_method_canGoForward_21rl.implementation = function() {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.canGoForward()');
        return com_tencent_smtt_sdk_WebView_clz_method_canGoForward_21rl.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_zoomOut_aeiq = com_tencent_smtt_sdk_WebView_clz.zoomOut.overload();
    com_tencent_smtt_sdk_WebView_clz_method_zoomOut_aeiq.implementation = function() {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.zoomOut()');
        return com_tencent_smtt_sdk_WebView_clz_method_zoomOut_aeiq.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_b_sfno = com_tencent_smtt_sdk_WebView_clz.b.overload('android.content.Context');
    com_tencent_smtt_sdk_WebView_clz_method_b_sfno.implementation = function(v0) {
        printStacks('private void com.tencent.smtt.sdk.WebView.b(android.content.Context)');
        com_tencent_smtt_sdk_WebView_clz_method_b_sfno.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_g_kzq5 = com_tencent_smtt_sdk_WebView_clz.g.overload();
    com_tencent_smtt_sdk_WebView_clz_method_g_kzq5.implementation = function() {
        printStacks('static android.graphics.Paint com.tencent.smtt.sdk.WebView.g()');
        return com_tencent_smtt_sdk_WebView_clz_method_g_kzq5.call(com_tencent_smtt_sdk_WebView_clz);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_a_0d6h = com_tencent_smtt_sdk_WebView_clz.a.overload('com.tencent.smtt.sdk.WebView');
    com_tencent_smtt_sdk_WebView_clz_method_a_0d6h.implementation = function(v0) {
        printStacks('static android.content.Context com.tencent.smtt.sdk.WebView.a(com.tencent.smtt.sdk.WebView)');
        return com_tencent_smtt_sdk_WebView_clz_method_a_0d6h.call(com_tencent_smtt_sdk_WebView_clz, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getWebScrollX_k9cd = com_tencent_smtt_sdk_WebView_clz.getWebScrollX.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getWebScrollX_k9cd.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.getWebScrollX()');
        return com_tencent_smtt_sdk_WebView_clz_method_getWebScrollX_k9cd.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_d_4blx = com_tencent_smtt_sdk_WebView_clz.d.overload('android.content.Context');
    com_tencent_smtt_sdk_WebView_clz_method_d_4blx.implementation = function(v0) {
        printStacks('private int com.tencent.smtt.sdk.WebView.d(android.content.Context)');
        return com_tencent_smtt_sdk_WebView_clz_method_d_4blx.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_computeVerticalScrollRange_nedk = com_tencent_smtt_sdk_WebView_clz.computeVerticalScrollRange.overload();
    com_tencent_smtt_sdk_WebView_clz_method_computeVerticalScrollRange_nedk.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.computeVerticalScrollRange()');
        return com_tencent_smtt_sdk_WebView_clz_method_computeVerticalScrollRange_nedk.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_e_vzxm = com_tencent_smtt_sdk_WebView_clz.e.overload();
    com_tencent_smtt_sdk_WebView_clz_method_e_vzxm.implementation = function() {
        printStacks('static android.content.BroadcastReceiver com.tencent.smtt.sdk.WebView.e()');
        return com_tencent_smtt_sdk_WebView_clz_method_e_vzxm.call(com_tencent_smtt_sdk_WebView_clz);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_pageUp_ygzo = com_tencent_smtt_sdk_WebView_clz.pageUp.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_pageUp_ygzo.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.pageUp(boolean)');
        return com_tencent_smtt_sdk_WebView_clz_method_pageUp_ygzo.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getSysNightModeAlpha_hviq = com_tencent_smtt_sdk_WebView_clz.getSysNightModeAlpha.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getSysNightModeAlpha_hviq.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.getSysNightModeAlpha()');
        return com_tencent_smtt_sdk_WebView_clz_method_getSysNightModeAlpha_hviq.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_canGoBack_467n = com_tencent_smtt_sdk_WebView_clz.canGoBack.overload();
    com_tencent_smtt_sdk_WebView_clz_method_canGoBack_467n.implementation = function() {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.canGoBack()');
        return com_tencent_smtt_sdk_WebView_clz_method_canGoBack_467n.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setSysNightModeAlpha_966h = com_tencent_smtt_sdk_WebView_clz.setSysNightModeAlpha.overload('int');
    com_tencent_smtt_sdk_WebView_clz_method_setSysNightModeAlpha_966h.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setSysNightModeAlpha(int)');
        com_tencent_smtt_sdk_WebView_clz_method_setSysNightModeAlpha_966h.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_evaluateJavascript_hfbs = com_tencent_smtt_sdk_WebView_clz.evaluateJavascript.overload('java.lang.String', 'com.tencent.smtt.sdk.ValueCallback');
    com_tencent_smtt_sdk_WebView_clz_method_evaluateJavascript_hfbs.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebView.evaluateJavascript(java.lang.String,com.tencent.smtt.sdk.ValueCallback)');
        com_tencent_smtt_sdk_WebView_clz_method_evaluateJavascript_hfbs.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setInitialScale_kmye = com_tencent_smtt_sdk_WebView_clz.setInitialScale.overload('int');
    com_tencent_smtt_sdk_WebView_clz_method_setInitialScale_kmye.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setInitialScale(int)');
        com_tencent_smtt_sdk_WebView_clz_method_setInitialScale_kmye.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setBackgroundColor_hrm1 = com_tencent_smtt_sdk_WebView_clz.setBackgroundColor.overload('int');
    com_tencent_smtt_sdk_WebView_clz_method_setBackgroundColor_hrm1.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setBackgroundColor(int)');
        com_tencent_smtt_sdk_WebView_clz_method_setBackgroundColor_hrm1.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getWebChromeClient_0fci = com_tencent_smtt_sdk_WebView_clz.getWebChromeClient.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getWebChromeClient_0fci.implementation = function() {
        printStacks('public com.tencent.smtt.sdk.WebChromeClient com.tencent.smtt.sdk.WebView.getWebChromeClient()');
        return com_tencent_smtt_sdk_WebView_clz_method_getWebChromeClient_0fci.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_dumpViewHierarchyWithProperties_p2u3 = com_tencent_smtt_sdk_WebView_clz.dumpViewHierarchyWithProperties.overload('java.io.BufferedWriter', 'int');
    com_tencent_smtt_sdk_WebView_clz_method_dumpViewHierarchyWithProperties_p2u3.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebView.dumpViewHierarchyWithProperties(java.io.BufferedWriter,int)');
        com_tencent_smtt_sdk_WebView_clz_method_dumpViewHierarchyWithProperties_p2u3.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getX5WebViewExtension_xbom = com_tencent_smtt_sdk_WebView_clz.getX5WebViewExtension.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getX5WebViewExtension_xbom.implementation = function() {
        printStacks('public com.tencent.smtt.export.external.extension.interfaces.IX5WebViewExtension com.tencent.smtt.sdk.WebView.getX5WebViewExtension()');
        return com_tencent_smtt_sdk_WebView_clz_method_getX5WebViewExtension_xbom.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_super_onOverScrolled_s12m = com_tencent_smtt_sdk_WebView_clz.super_onOverScrolled.overload('int', 'int', 'boolean', 'boolean');
    com_tencent_smtt_sdk_WebView_clz_method_super_onOverScrolled_s12m.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.sdk.WebView.super_onOverScrolled(int,int,boolean,boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_super_onOverScrolled_s12m.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getWebChromeClientExtension_wqwf = com_tencent_smtt_sdk_WebView_clz.getWebChromeClientExtension.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getWebChromeClientExtension_wqwf.implementation = function() {
        printStacks('public com.tencent.smtt.export.external.extension.interfaces.IX5WebChromeClientExtension com.tencent.smtt.sdk.WebView.getWebChromeClientExtension()');
        return com_tencent_smtt_sdk_WebView_clz_method_getWebChromeClientExtension_wqwf.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_documentHasImages_nppn = com_tencent_smtt_sdk_WebView_clz.documentHasImages.overload('android.os.Message');
    com_tencent_smtt_sdk_WebView_clz_method_documentHasImages_nppn.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.documentHasImages(android.os.Message)');
        com_tencent_smtt_sdk_WebView_clz_method_documentHasImages_nppn.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getWebScrollY_adqu = com_tencent_smtt_sdk_WebView_clz.getWebScrollY.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getWebScrollY_adqu.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.getWebScrollY()');
        return com_tencent_smtt_sdk_WebView_clz_method_getWebScrollY_adqu.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getZoomControls_2ghm = com_tencent_smtt_sdk_WebView_clz.getZoomControls.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getZoomControls_2ghm.implementation = function() {
        printStacks('public android.view.View com.tencent.smtt.sdk.WebView.getZoomControls()');
        return com_tencent_smtt_sdk_WebView_clz_method_getZoomControls_2ghm.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getCertificate_17al = com_tencent_smtt_sdk_WebView_clz.getCertificate.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getCertificate_17al.implementation = function() {
        printStacks('public android.net.http.SslCertificate com.tencent.smtt.sdk.WebView.getCertificate()');
        return com_tencent_smtt_sdk_WebView_clz_method_getCertificate_17al.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setNetworkAvailable_spf7 = com_tencent_smtt_sdk_WebView_clz.setNetworkAvailable.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_setNetworkAvailable_spf7.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setNetworkAvailable(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_setNetworkAvailable_spf7.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_findAll_et3n = com_tencent_smtt_sdk_WebView_clz.findAll.overload('java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_findAll_et3n.implementation = function(v0) {
        printStacks('public int com.tencent.smtt.sdk.WebView.findAll(java.lang.String)');
        return com_tencent_smtt_sdk_WebView_clz_method_findAll_et3n.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_flingScroll_xjwt = com_tencent_smtt_sdk_WebView_clz.flingScroll.overload('int', 'int');
    com_tencent_smtt_sdk_WebView_clz_method_flingScroll_xjwt.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebView.flingScroll(int,int)');
        com_tencent_smtt_sdk_WebView_clz_method_flingScroll_xjwt.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_super_onTouchEvent_8s5e = com_tencent_smtt_sdk_WebView_clz.super_onTouchEvent.overload('android.view.MotionEvent');
    com_tencent_smtt_sdk_WebView_clz_method_super_onTouchEvent_8s5e.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.super_onTouchEvent(android.view.MotionEvent)');
        return com_tencent_smtt_sdk_WebView_clz_method_super_onTouchEvent_8s5e.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_clearView_0uke = com_tencent_smtt_sdk_WebView_clz.clearView.overload();
    com_tencent_smtt_sdk_WebView_clz_method_clearView_0uke.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.clearView()');
        com_tencent_smtt_sdk_WebView_clz_method_clearView_0uke.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_canGoBackOrForward_uca8 = com_tencent_smtt_sdk_WebView_clz.canGoBackOrForward.overload('int');
    com_tencent_smtt_sdk_WebView_clz_method_canGoBackOrForward_uca8.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.canGoBackOrForward(int)');
        return com_tencent_smtt_sdk_WebView_clz_method_canGoBackOrForward_uca8.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setVerticalScrollbarOverlay_kkp4 = com_tencent_smtt_sdk_WebView_clz.setVerticalScrollbarOverlay.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_setVerticalScrollbarOverlay_kkp4.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setVerticalScrollbarOverlay(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_setVerticalScrollbarOverlay_kkp4.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setMapTrackballToArrowKeys_4guz = com_tencent_smtt_sdk_WebView_clz.setMapTrackballToArrowKeys.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_setMapTrackballToArrowKeys_4guz.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setMapTrackballToArrowKeys(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_setMapTrackballToArrowKeys_4guz.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getTbsSDKVersion_5h95 = com_tencent_smtt_sdk_WebView_clz.getTbsSDKVersion.overload('android.content.Context');
    com_tencent_smtt_sdk_WebView_clz_method_getTbsSDKVersion_5h95.implementation = function(v0) {
        printStacks('public static int com.tencent.smtt.sdk.WebView.getTbsSDKVersion(android.content.Context)');
        return com_tencent_smtt_sdk_WebView_clz_method_getTbsSDKVersion_5h95.call(com_tencent_smtt_sdk_WebView_clz, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_computeVerticalScrollExtent_w2ia = com_tencent_smtt_sdk_WebView_clz.computeVerticalScrollExtent.overload();
    com_tencent_smtt_sdk_WebView_clz_method_computeVerticalScrollExtent_w2ia.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.computeVerticalScrollExtent()');
        return com_tencent_smtt_sdk_WebView_clz_method_computeVerticalScrollExtent_w2ia.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_a_z3vc = com_tencent_smtt_sdk_WebView_clz.a.overload('android.view.View');
    com_tencent_smtt_sdk_WebView_clz_method_a_z3vc.implementation = function(v0) {
        printStacks('private boolean com.tencent.smtt.sdk.WebView.a(android.view.View)');
        return com_tencent_smtt_sdk_WebView_clz_method_a_z3vc.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getScrollBarStyle_ye9p = com_tencent_smtt_sdk_WebView_clz.getScrollBarStyle.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getScrollBarStyle_ye9p.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.getScrollBarStyle()');
        return com_tencent_smtt_sdk_WebView_clz_method_getScrollBarStyle_ye9p.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_super_onInterceptTouchEvent_dbxk = com_tencent_smtt_sdk_WebView_clz.super_onInterceptTouchEvent.overload('android.view.MotionEvent');
    com_tencent_smtt_sdk_WebView_clz_method_super_onInterceptTouchEvent_dbxk.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.super_onInterceptTouchEvent(android.view.MotionEvent)');
        return com_tencent_smtt_sdk_WebView_clz_method_super_onInterceptTouchEvent_dbxk.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getCurrentWebViewPackage_4mjd = com_tencent_smtt_sdk_WebView_clz.getCurrentWebViewPackage.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getCurrentWebViewPackage_4mjd.implementation = function() {
        printStacks('public static android.content.pm.PackageInfo com.tencent.smtt.sdk.WebView.getCurrentWebViewPackage()');
        return com_tencent_smtt_sdk_WebView_clz_method_getCurrentWebViewPackage_4mjd.call(com_tencent_smtt_sdk_WebView_clz);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_addView_46ks = com_tencent_smtt_sdk_WebView_clz.addView.overload('android.view.View');
    com_tencent_smtt_sdk_WebView_clz_method_addView_46ks.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.addView(android.view.View)');
        com_tencent_smtt_sdk_WebView_clz_method_addView_46ks.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setVideoFullScreen_c5ys = com_tencent_smtt_sdk_WebView_clz.setVideoFullScreen.overload('android.content.Context', 'boolean');
    com_tencent_smtt_sdk_WebView_clz_method_setVideoFullScreen_c5ys.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.setVideoFullScreen(android.content.Context,boolean)');
        return com_tencent_smtt_sdk_WebView_clz_method_setVideoFullScreen_c5ys.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_loadUrl_06zk = com_tencent_smtt_sdk_WebView_clz.loadUrl.overload('java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_loadUrl_06zk.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.loadUrl(java.lang.String)');
        com_tencent_smtt_sdk_WebView_clz_method_loadUrl_06zk.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_restoreState_dr4f = com_tencent_smtt_sdk_WebView_clz.restoreState.overload('android.os.Bundle');
    com_tencent_smtt_sdk_WebView_clz_method_restoreState_dr4f.implementation = function(v0) {
        printStacks('public com.tencent.smtt.sdk.WebBackForwardList com.tencent.smtt.sdk.WebView.restoreState(android.os.Bundle)');
        return com_tencent_smtt_sdk_WebView_clz_method_restoreState_dr4f.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_a_okat = com_tencent_smtt_sdk_WebView_clz.a.overload('android.webkit.WebView');
    com_tencent_smtt_sdk_WebView_clz_method_a_okat.implementation = function(v0) {
        printStacks('void com.tencent.smtt.sdk.WebView.a(android.webkit.WebView)');
        com_tencent_smtt_sdk_WebView_clz_method_a_okat.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_removeView_9ul6 = com_tencent_smtt_sdk_WebView_clz.removeView.overload('android.view.View');
    com_tencent_smtt_sdk_WebView_clz_method_removeView_9ul6.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.removeView(android.view.View)');
        com_tencent_smtt_sdk_WebView_clz_method_removeView_9ul6.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_e_qkt4 = com_tencent_smtt_sdk_WebView_clz.e.overload('android.content.Context');
    com_tencent_smtt_sdk_WebView_clz_method_e_qkt4.implementation = function(v0) {
        printStacks('private void com.tencent.smtt.sdk.WebView.e(android.content.Context)');
        com_tencent_smtt_sdk_WebView_clz_method_e_qkt4.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setOnLongClickListener_68f6 = com_tencent_smtt_sdk_WebView_clz.setOnLongClickListener.overload('android.view.View$OnLongClickListener');
    com_tencent_smtt_sdk_WebView_clz_method_setOnLongClickListener_68f6.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setOnLongClickListener(android.view.View$OnLongClickListener)');
        com_tencent_smtt_sdk_WebView_clz_method_setOnLongClickListener_68f6.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getTbsCoreVersion_6wzh = com_tencent_smtt_sdk_WebView_clz.getTbsCoreVersion.overload('android.content.Context');
    com_tencent_smtt_sdk_WebView_clz_method_getTbsCoreVersion_6wzh.implementation = function(v0) {
        printStacks('public static int com.tencent.smtt.sdk.WebView.getTbsCoreVersion(android.content.Context)');
        return com_tencent_smtt_sdk_WebView_clz_method_getTbsCoreVersion_6wzh.call(com_tencent_smtt_sdk_WebView_clz, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getWebViewClientExtension_gag8 = com_tencent_smtt_sdk_WebView_clz.getWebViewClientExtension.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getWebViewClientExtension_gag8.implementation = function() {
        printStacks('public com.tencent.smtt.export.external.extension.interfaces.IX5WebViewClientExtension com.tencent.smtt.sdk.WebView.getWebViewClientExtension()');
        return com_tencent_smtt_sdk_WebView_clz_method_getWebViewClientExtension_gag8.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_loadUrl_bbzs = com_tencent_smtt_sdk_WebView_clz.loadUrl.overload('java.lang.String', 'java.util.Map');
    com_tencent_smtt_sdk_WebView_clz_method_loadUrl_bbzs.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebView.loadUrl(java.lang.String,java.util.Map)');
        com_tencent_smtt_sdk_WebView_clz_method_loadUrl_bbzs.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_switchNightMode_0aci = com_tencent_smtt_sdk_WebView_clz.switchNightMode.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_switchNightMode_0aci.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.switchNightMode(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_switchNightMode_0aci.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_a_ofks = com_tencent_smtt_sdk_WebView_clz.a.overload('android.content.Context');
    com_tencent_smtt_sdk_WebView_clz_method_a_ofks.implementation = function(v0) {
        printStacks('void com.tencent.smtt.sdk.WebView.a(android.content.Context)');
        com_tencent_smtt_sdk_WebView_clz_method_a_ofks.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_onPause_j95a = com_tencent_smtt_sdk_WebView_clz.onPause.overload();
    com_tencent_smtt_sdk_WebView_clz_method_onPause_j95a.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.onPause()');
        com_tencent_smtt_sdk_WebView_clz_method_onPause_j95a.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_i_6i4p = com_tencent_smtt_sdk_WebView_clz.i.overload();
    com_tencent_smtt_sdk_WebView_clz_method_i_6i4p.implementation = function() {
        printStacks('private long com.tencent.smtt.sdk.WebView.i()');
        return com_tencent_smtt_sdk_WebView_clz_method_i_6i4p.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_onDetachedFromWindow_cxs8 = com_tencent_smtt_sdk_WebView_clz.onDetachedFromWindow.overload();
    com_tencent_smtt_sdk_WebView_clz_method_onDetachedFromWindow_cxs8.implementation = function() {
        printStacks('protected void com.tencent.smtt.sdk.WebView.onDetachedFromWindow()');
        com_tencent_smtt_sdk_WebView_clz_method_onDetachedFromWindow_cxs8.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setWebViewClient_9w4k = com_tencent_smtt_sdk_WebView_clz.setWebViewClient.overload('com.tencent.smtt.sdk.WebViewClient');
    com_tencent_smtt_sdk_WebView_clz_method_setWebViewClient_9w4k.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setWebViewClient(com.tencent.smtt.sdk.WebViewClient)');
        com_tencent_smtt_sdk_WebView_clz_method_setWebViewClient_9w4k.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setWebViewClientExtension_u2rr = com_tencent_smtt_sdk_WebView_clz.setWebViewClientExtension.overload('com.tencent.smtt.export.external.extension.interfaces.IX5WebViewClientExtension');
    com_tencent_smtt_sdk_WebView_clz_method_setWebViewClientExtension_u2rr.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setWebViewClientExtension(com.tencent.smtt.export.external.extension.interfaces.IX5WebViewClientExtension)');
        com_tencent_smtt_sdk_WebView_clz_method_setWebViewClientExtension_u2rr.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getContentHeight_6f2j = com_tencent_smtt_sdk_WebView_clz.getContentHeight.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getContentHeight_6f2j.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.getContentHeight()');
        return com_tencent_smtt_sdk_WebView_clz_method_getContentHeight_6f2j.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_onVisibilityChanged_82em = com_tencent_smtt_sdk_WebView_clz.onVisibilityChanged.overload('android.view.View', 'int');
    com_tencent_smtt_sdk_WebView_clz_method_onVisibilityChanged_82em.implementation = function(v0, v1) {
        printStacks('protected void com.tencent.smtt.sdk.WebView.onVisibilityChanged(android.view.View,int)');
        com_tencent_smtt_sdk_WebView_clz_method_onVisibilityChanged_82em.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_findNext_ge3e = com_tencent_smtt_sdk_WebView_clz.findNext.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_findNext_ge3e.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.findNext(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_findNext_ge3e.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setDayOrNight_35a4 = com_tencent_smtt_sdk_WebView_clz.setDayOrNight.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_setDayOrNight_35a4.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setDayOrNight(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_setDayOrNight_35a4.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_overlayVerticalScrollbar_a5i1 = com_tencent_smtt_sdk_WebView_clz.overlayVerticalScrollbar.overload();
    com_tencent_smtt_sdk_WebView_clz_method_overlayVerticalScrollbar_a5i1.implementation = function() {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.overlayVerticalScrollbar()');
        return com_tencent_smtt_sdk_WebView_clz_method_overlayVerticalScrollbar_a5i1.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_freeMemory_56hs = com_tencent_smtt_sdk_WebView_clz.freeMemory.overload();
    com_tencent_smtt_sdk_WebView_clz_method_freeMemory_56hs.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.freeMemory()');
        com_tencent_smtt_sdk_WebView_clz_method_freeMemory_56hs.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_pageDown_wv2t = com_tencent_smtt_sdk_WebView_clz.pageDown.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_pageDown_wv2t.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.pageDown(boolean)');
        return com_tencent_smtt_sdk_WebView_clz_method_pageDown_wv2t.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_super_dispatchTouchEvent_7rvw = com_tencent_smtt_sdk_WebView_clz.super_dispatchTouchEvent.overload('android.view.MotionEvent');
    com_tencent_smtt_sdk_WebView_clz_method_super_dispatchTouchEvent_7rvw.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.super_dispatchTouchEvent(android.view.MotionEvent)');
        return com_tencent_smtt_sdk_WebView_clz_method_super_dispatchTouchEvent_7rvw.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_clearMatches_86fd = com_tencent_smtt_sdk_WebView_clz.clearMatches.overload();
    com_tencent_smtt_sdk_WebView_clz_method_clearMatches_86fd.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.clearMatches()');
        com_tencent_smtt_sdk_WebView_clz_method_clearMatches_86fd.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setHttpAuthUsernamePassword_fqdu = com_tencent_smtt_sdk_WebView_clz.setHttpAuthUsernamePassword.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_setHttpAuthUsernamePassword_fqdu.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setHttpAuthUsernamePassword(java.lang.String,java.lang.String,java.lang.String,java.lang.String)');
        com_tencent_smtt_sdk_WebView_clz_method_setHttpAuthUsernamePassword_fqdu.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_saveWebArchive_tvmp = com_tencent_smtt_sdk_WebView_clz.saveWebArchive.overload('java.lang.String', 'boolean', 'com.tencent.smtt.sdk.ValueCallback');
    com_tencent_smtt_sdk_WebView_clz_method_saveWebArchive_tvmp.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.WebView.saveWebArchive(java.lang.String,boolean,com.tencent.smtt.sdk.ValueCallback)');
        com_tencent_smtt_sdk_WebView_clz_method_saveWebArchive_tvmp.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_f_v24z = com_tencent_smtt_sdk_WebView_clz.f.overload();
    com_tencent_smtt_sdk_WebView_clz_method_f_v24z.implementation = function() {
        printStacks('static boolean com.tencent.smtt.sdk.WebView.f()');
        return com_tencent_smtt_sdk_WebView_clz_method_f_v24z.call(com_tencent_smtt_sdk_WebView_clz);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_restorePicture_kxlc = com_tencent_smtt_sdk_WebView_clz.restorePicture.overload('android.os.Bundle', 'java.io.File');
    com_tencent_smtt_sdk_WebView_clz_method_restorePicture_kxlc.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.restorePicture(android.os.Bundle,java.io.File)');
        return com_tencent_smtt_sdk_WebView_clz_method_restorePicture_kxlc.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_b_echs = com_tencent_smtt_sdk_WebView_clz.b.overload('com.tencent.smtt.sdk.WebView', 'int', 'int', 'int', 'int');
    com_tencent_smtt_sdk_WebView_clz_method_b_echs.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('static void com.tencent.smtt.sdk.WebView.b(com.tencent.smtt.sdk.WebView,int,int,int,int)');
        com_tencent_smtt_sdk_WebView_clz_method_b_echs.call(com_tencent_smtt_sdk_WebView_clz, v0, v1, v2, v3, v4);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_clearSslPreferences_hkba = com_tencent_smtt_sdk_WebView_clz.clearSslPreferences.overload();
    com_tencent_smtt_sdk_WebView_clz_method_clearSslPreferences_hkba.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.clearSslPreferences()');
        com_tencent_smtt_sdk_WebView_clz_method_clearSslPreferences_hkba.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_saveState_fsxf = com_tencent_smtt_sdk_WebView_clz.saveState.overload('android.os.Bundle');
    com_tencent_smtt_sdk_WebView_clz_method_saveState_fsxf.implementation = function(v0) {
        printStacks('public com.tencent.smtt.sdk.WebBackForwardList com.tencent.smtt.sdk.WebView.saveState(android.os.Bundle)');
        return com_tencent_smtt_sdk_WebView_clz_method_saveState_fsxf.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_copyBackForwardList_ko4j = com_tencent_smtt_sdk_WebView_clz.copyBackForwardList.overload();
    com_tencent_smtt_sdk_WebView_clz_method_copyBackForwardList_ko4j.implementation = function() {
        printStacks('public com.tencent.smtt.sdk.WebBackForwardList com.tencent.smtt.sdk.WebView.copyBackForwardList()');
        return com_tencent_smtt_sdk_WebView_clz_method_copyBackForwardList_ko4j.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_h_xd4k = com_tencent_smtt_sdk_WebView_clz.h.overload();
    com_tencent_smtt_sdk_WebView_clz_method_h_xd4k.implementation = function() {
        printStacks('static android.content.Context com.tencent.smtt.sdk.WebView.h()');
        return com_tencent_smtt_sdk_WebView_clz_method_h_xd4k.call(com_tencent_smtt_sdk_WebView_clz);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_requestFocusNodeHref_yd7o = com_tencent_smtt_sdk_WebView_clz.requestFocusNodeHref.overload('android.os.Message');
    com_tencent_smtt_sdk_WebView_clz_method_requestFocusNodeHref_yd7o.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.requestFocusNodeHref(android.os.Message)');
        com_tencent_smtt_sdk_WebView_clz_method_requestFocusNodeHref_yd7o.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_showDebugView_xc8k = com_tencent_smtt_sdk_WebView_clz.showDebugView.overload('java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_showDebugView_xc8k.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.showDebugView(java.lang.String)');
        return com_tencent_smtt_sdk_WebView_clz_method_showDebugView_xc8k.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_overlayHorizontalScrollbar_2ml4 = com_tencent_smtt_sdk_WebView_clz.overlayHorizontalScrollbar.overload();
    com_tencent_smtt_sdk_WebView_clz_method_overlayHorizontalScrollbar_2ml4.implementation = function() {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.overlayHorizontalScrollbar()');
        return com_tencent_smtt_sdk_WebView_clz_method_overlayHorizontalScrollbar_2ml4.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getPluginList_fcbe = com_tencent_smtt_sdk_WebView_clz.getPluginList.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getPluginList_fcbe.implementation = function() {
        printStacks('public static synchronized java.lang.Object com.tencent.smtt.sdk.WebView.getPluginList()');
        return com_tencent_smtt_sdk_WebView_clz_method_getPluginList_fcbe.call(com_tencent_smtt_sdk_WebView_clz);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_goBackOrForward_0sl1 = com_tencent_smtt_sdk_WebView_clz.goBackOrForward.overload('int');
    com_tencent_smtt_sdk_WebView_clz_method_goBackOrForward_0sl1.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.goBackOrForward(int)');
        com_tencent_smtt_sdk_WebView_clz_method_goBackOrForward_0sl1.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_computeScroll_4aym = com_tencent_smtt_sdk_WebView_clz.computeScroll.overload();
    com_tencent_smtt_sdk_WebView_clz_method_computeScroll_4aym.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.computeScroll()');
        com_tencent_smtt_sdk_WebView_clz_method_computeScroll_4aym.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_invokeZoomPicker_zfsf = com_tencent_smtt_sdk_WebView_clz.invokeZoomPicker.overload();
    com_tencent_smtt_sdk_WebView_clz_method_invokeZoomPicker_zfsf.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.invokeZoomPicker()');
        com_tencent_smtt_sdk_WebView_clz_method_invokeZoomPicker_zfsf.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getScale_vayb = com_tencent_smtt_sdk_WebView_clz.getScale.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getScale_vayb.implementation = function() {
        printStacks('public float com.tencent.smtt.sdk.WebView.getScale()');
        return com_tencent_smtt_sdk_WebView_clz_method_getScale_vayb.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setWebContentsDebuggingEnabled_jy02 = com_tencent_smtt_sdk_WebView_clz.setWebContentsDebuggingEnabled.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_setWebContentsDebuggingEnabled_jy02.implementation = function(v0) {
        printStacks('public static void com.tencent.smtt.sdk.WebView.setWebContentsDebuggingEnabled(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_setWebContentsDebuggingEnabled_jy02.call(com_tencent_smtt_sdk_WebView_clz, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_reload_linb = com_tencent_smtt_sdk_WebView_clz.reload.overload();
    com_tencent_smtt_sdk_WebView_clz_method_reload_linb.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.reload()');
        com_tencent_smtt_sdk_WebView_clz_method_reload_linb.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getProgress_fcug = com_tencent_smtt_sdk_WebView_clz.getProgress.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getProgress_fcug.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.getProgress()');
        return com_tencent_smtt_sdk_WebView_clz_method_getProgress_fcug.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_isDayMode_yvlp = com_tencent_smtt_sdk_WebView_clz.isDayMode.overload();
    com_tencent_smtt_sdk_WebView_clz_method_isDayMode_yvlp.implementation = function() {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.isDayMode()');
        return com_tencent_smtt_sdk_WebView_clz_method_isDayMode_yvlp.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getCrashExtraMessage_7f9s = com_tencent_smtt_sdk_WebView_clz.getCrashExtraMessage.overload('android.content.Context');
    com_tencent_smtt_sdk_WebView_clz_method_getCrashExtraMessage_7f9s.implementation = function(v0) {
        printStacks('public static java.lang.String com.tencent.smtt.sdk.WebView.getCrashExtraMessage(android.content.Context)');
        return com_tencent_smtt_sdk_WebView_clz_method_getCrashExtraMessage_7f9s.call(com_tencent_smtt_sdk_WebView_clz, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_clearCache_1xef = com_tencent_smtt_sdk_WebView_clz.clearCache.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_clearCache_1xef.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.clearCache(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_clearCache_1xef.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_a_9c4j = com_tencent_smtt_sdk_WebView_clz.a.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase');
    com_tencent_smtt_sdk_WebView_clz_method_a_9c4j.implementation = function(v0) {
        printStacks('void com.tencent.smtt.sdk.WebView.a(com.tencent.smtt.export.external.interfaces.IX5WebViewBase)');
        com_tencent_smtt_sdk_WebView_clz_method_a_9c4j.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_requestChildRectangleOnScreen_nnaf = com_tencent_smtt_sdk_WebView_clz.requestChildRectangleOnScreen.overload('android.view.View', 'android.graphics.Rect', 'boolean');
    com_tencent_smtt_sdk_WebView_clz_method_requestChildRectangleOnScreen_nnaf.implementation = function(v0, v1, v2) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.requestChildRectangleOnScreen(android.view.View,android.graphics.Rect,boolean)');
        return com_tencent_smtt_sdk_WebView_clz_method_requestChildRectangleOnScreen_nnaf.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_computeHorizontalScrollOffset_a9w5 = com_tencent_smtt_sdk_WebView_clz.computeHorizontalScrollOffset.overload();
    com_tencent_smtt_sdk_WebView_clz_method_computeHorizontalScrollOffset_a9w5.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.computeHorizontalScrollOffset()');
        return com_tencent_smtt_sdk_WebView_clz_method_computeHorizontalScrollOffset_a9w5.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_postUrl_frjw = com_tencent_smtt_sdk_WebView_clz.postUrl.overload('java.lang.String', '[B');
    com_tencent_smtt_sdk_WebView_clz_method_postUrl_frjw.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebView.postUrl(java.lang.String,byte[])');
        com_tencent_smtt_sdk_WebView_clz_method_postUrl_frjw.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_a_tzjf = com_tencent_smtt_sdk_WebView_clz.a.overload();
    com_tencent_smtt_sdk_WebView_clz_method_a_tzjf.implementation = function() {
        printStacks('protected void com.tencent.smtt.sdk.WebView.a()');
        com_tencent_smtt_sdk_WebView_clz_method_a_tzjf.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_customDiskCachePathEnabled_3iev = com_tencent_smtt_sdk_WebView_clz.customDiskCachePathEnabled.overload('boolean', 'java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_customDiskCachePathEnabled_3iev.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebView.customDiskCachePathEnabled(boolean,java.lang.String)');
        com_tencent_smtt_sdk_WebView_clz_method_customDiskCachePathEnabled_3iev.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_destroy_l09d = com_tencent_smtt_sdk_WebView_clz.destroy.overload();
    com_tencent_smtt_sdk_WebView_clz_method_destroy_l09d.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.destroy()');
        com_tencent_smtt_sdk_WebView_clz_method_destroy_l09d.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getWebViewClient_v01i = com_tencent_smtt_sdk_WebView_clz.getWebViewClient.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getWebViewClient_v01i.implementation = function() {
        printStacks('public com.tencent.smtt.sdk.WebViewClient com.tencent.smtt.sdk.WebView.getWebViewClient()');
        return com_tencent_smtt_sdk_WebView_clz_method_getWebViewClient_v01i.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setWebChromeClientExtension_0t75 = com_tencent_smtt_sdk_WebView_clz.setWebChromeClientExtension.overload('com.tencent.smtt.export.external.extension.interfaces.IX5WebChromeClientExtension');
    com_tencent_smtt_sdk_WebView_clz_method_setWebChromeClientExtension_0t75.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setWebChromeClientExtension(com.tencent.smtt.export.external.extension.interfaces.IX5WebChromeClientExtension)');
        com_tencent_smtt_sdk_WebView_clz_method_setWebChromeClientExtension_0t75.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setCertificate_qwr4 = com_tencent_smtt_sdk_WebView_clz.setCertificate.overload('android.net.http.SslCertificate');
    com_tencent_smtt_sdk_WebView_clz_method_setCertificate_qwr4.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setCertificate(android.net.http.SslCertificate)');
        com_tencent_smtt_sdk_WebView_clz_method_setCertificate_qwr4.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setScrollBarStyle_o09j = com_tencent_smtt_sdk_WebView_clz.setScrollBarStyle.overload('int');
    com_tencent_smtt_sdk_WebView_clz_method_setScrollBarStyle_o09j.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setScrollBarStyle(int)');
        com_tencent_smtt_sdk_WebView_clz_method_setScrollBarStyle_o09j.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setWebViewCallbackClient_adpe = com_tencent_smtt_sdk_WebView_clz.setWebViewCallbackClient.overload('com.tencent.smtt.sdk.WebViewCallbackClient');
    com_tencent_smtt_sdk_WebView_clz_method_setWebViewCallbackClient_adpe.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setWebViewCallbackClient(com.tencent.smtt.sdk.WebViewCallbackClient)');
        com_tencent_smtt_sdk_WebView_clz_method_setWebViewCallbackClient_adpe.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_computeHorizontalScrollExtent_a4do = com_tencent_smtt_sdk_WebView_clz.computeHorizontalScrollExtent.overload();
    com_tencent_smtt_sdk_WebView_clz_method_computeHorizontalScrollExtent_a4do.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.computeHorizontalScrollExtent()');
        return com_tencent_smtt_sdk_WebView_clz_method_computeHorizontalScrollExtent_a4do.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_computeVerticalScrollOffset_7zhq = com_tencent_smtt_sdk_WebView_clz.computeVerticalScrollOffset.overload();
    com_tencent_smtt_sdk_WebView_clz_method_computeVerticalScrollOffset_7zhq.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.computeVerticalScrollOffset()');
        return com_tencent_smtt_sdk_WebView_clz_method_computeVerticalScrollOffset_7zhq.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_tbsWebviewDestroy_9hng = com_tencent_smtt_sdk_WebView_clz.tbsWebviewDestroy.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_tbsWebviewDestroy_9hng.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.tbsWebviewDestroy(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_tbsWebviewDestroy_9hng.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_resumeTimers_hqn6 = com_tencent_smtt_sdk_WebView_clz.resumeTimers.overload();
    com_tencent_smtt_sdk_WebView_clz_method_resumeTimers_hqn6.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.resumeTimers()');
        com_tencent_smtt_sdk_WebView_clz_method_resumeTimers_hqn6.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_a_tomw = com_tencent_smtt_sdk_WebView_clz.a.overload('android.content.Context', 'com.tencent.smtt.sdk.n');
    com_tencent_smtt_sdk_WebView_clz_method_a_tomw.implementation = function(v0, v1) {
        printStacks('private void com.tencent.smtt.sdk.WebView.a(android.content.Context,com.tencent.smtt.sdk.n)');
        com_tencent_smtt_sdk_WebView_clz_method_a_tomw.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setHorizontalScrollbarOverlay_2kts = com_tencent_smtt_sdk_WebView_clz.setHorizontalScrollbarOverlay.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_setHorizontalScrollbarOverlay_2kts.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setHorizontalScrollbarOverlay(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_setHorizontalScrollbarOverlay_2kts.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_refreshPlugins_88i7 = com_tencent_smtt_sdk_WebView_clz.refreshPlugins.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_refreshPlugins_88i7.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.refreshPlugins(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_refreshPlugins_88i7.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_super_onScrollChanged_ty39 = com_tencent_smtt_sdk_WebView_clz.super_onScrollChanged.overload('int', 'int', 'int', 'int');
    com_tencent_smtt_sdk_WebView_clz_method_super_onScrollChanged_ty39.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.sdk.WebView.super_onScrollChanged(int,int,int,int)');
        com_tencent_smtt_sdk_WebView_clz_method_super_onScrollChanged_ty39.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getView_wfv5 = com_tencent_smtt_sdk_WebView_clz.getView.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getView_wfv5.implementation = function() {
        printStacks('public android.view.View com.tencent.smtt.sdk.WebView.getView()');
        return com_tencent_smtt_sdk_WebView_clz_method_getView_wfv5.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_pauseTimers_9ch5 = com_tencent_smtt_sdk_WebView_clz.pauseTimers.overload();
    com_tencent_smtt_sdk_WebView_clz_method_pauseTimers_9ch5.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.pauseTimers()');
        com_tencent_smtt_sdk_WebView_clz_method_pauseTimers_9ch5.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getFavicon_kt8n = com_tencent_smtt_sdk_WebView_clz.getFavicon.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getFavicon_kt8n.implementation = function() {
        printStacks('public android.graphics.Bitmap com.tencent.smtt.sdk.WebView.getFavicon()');
        return com_tencent_smtt_sdk_WebView_clz_method_getFavicon_kt8n.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getHttpAuthUsernamePassword_4e3d = com_tencent_smtt_sdk_WebView_clz.getHttpAuthUsernamePassword.overload('java.lang.String', 'java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_getHttpAuthUsernamePassword_4e3d.implementation = function(v0, v1) {
        printStacks('public java.lang.String[] com.tencent.smtt.sdk.WebView.getHttpAuthUsernamePassword(java.lang.String,java.lang.String)');
        return com_tencent_smtt_sdk_WebView_clz_method_getHttpAuthUsernamePassword_4e3d.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_loadDataWithBaseURL_m9a8 = com_tencent_smtt_sdk_WebView_clz.loadDataWithBaseURL.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_loadDataWithBaseURL_m9a8.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('public void com.tencent.smtt.sdk.WebView.loadDataWithBaseURL(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)');
        com_tencent_smtt_sdk_WebView_clz_method_loadDataWithBaseURL_m9a8.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getSettings_j2rj = com_tencent_smtt_sdk_WebView_clz.getSettings.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getSettings_j2rj.implementation = function() {
        printStacks('public com.tencent.smtt.sdk.WebSettings com.tencent.smtt.sdk.WebView.getSettings()');
        return com_tencent_smtt_sdk_WebView_clz_method_getSettings_j2rj.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_findAllAsync_p8ch = com_tencent_smtt_sdk_WebView_clz.findAllAsync.overload('java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_findAllAsync_p8ch.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.findAllAsync(java.lang.String)');
        com_tencent_smtt_sdk_WebView_clz_method_findAllAsync_p8ch.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setRendererPriorityPolicy_0fvc = com_tencent_smtt_sdk_WebView_clz.setRendererPriorityPolicy.overload('int', 'boolean');
    com_tencent_smtt_sdk_WebView_clz_method_setRendererPriorityPolicy_0fvc.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setRendererPriorityPolicy(int,boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_setRendererPriorityPolicy_0fvc.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_saveWebArchive_7sea = com_tencent_smtt_sdk_WebView_clz.saveWebArchive.overload('java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_saveWebArchive_7sea.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.saveWebArchive(java.lang.String)');
        com_tencent_smtt_sdk_WebView_clz_method_saveWebArchive_7sea.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_c_4lw3 = com_tencent_smtt_sdk_WebView_clz.c.overload();
    com_tencent_smtt_sdk_WebView_clz_method_c_4lw3.implementation = function() {
        printStacks('com.tencent.smtt.export.external.interfaces.IX5WebViewBase com.tencent.smtt.sdk.WebView.c()');
        return com_tencent_smtt_sdk_WebView_clz_method_c_4lw3.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_findAddress_kofn = com_tencent_smtt_sdk_WebView_clz.findAddress.overload('java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_findAddress_kofn.implementation = function(v0) {
        printStacks('public static java.lang.String com.tencent.smtt.sdk.WebView.findAddress(java.lang.String)');
        return com_tencent_smtt_sdk_WebView_clz_method_findAddress_kofn.call(com_tencent_smtt_sdk_WebView_clz, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getScrollBarSize_16j5 = com_tencent_smtt_sdk_WebView_clz.getScrollBarSize.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getScrollBarSize_16j5.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.getScrollBarSize()');
        return com_tencent_smtt_sdk_WebView_clz_method_getScrollBarSize_16j5.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_zoomIn_l19o = com_tencent_smtt_sdk_WebView_clz.zoomIn.overload();
    com_tencent_smtt_sdk_WebView_clz_method_zoomIn_l19o.implementation = function() {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.zoomIn()');
        return com_tencent_smtt_sdk_WebView_clz_method_zoomIn_l19o.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setOnTouchListener_lj6r = com_tencent_smtt_sdk_WebView_clz.setOnTouchListener.overload('android.view.View$OnTouchListener');
    com_tencent_smtt_sdk_WebView_clz_method_setOnTouchListener_lj6r.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setOnTouchListener(android.view.View$OnTouchListener)');
        com_tencent_smtt_sdk_WebView_clz_method_setOnTouchListener_lj6r.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_savePicture_kggt = com_tencent_smtt_sdk_WebView_clz.savePicture.overload('android.os.Bundle', 'java.io.File');
    com_tencent_smtt_sdk_WebView_clz_method_savePicture_kggt.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.savePicture(android.os.Bundle,java.io.File)');
        return com_tencent_smtt_sdk_WebView_clz_method_savePicture_kggt.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_savePassword_w525 = com_tencent_smtt_sdk_WebView_clz.savePassword.overload('java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_savePassword_w525.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.WebView.savePassword(java.lang.String,java.lang.String,java.lang.String)');
        com_tencent_smtt_sdk_WebView_clz_method_savePassword_w525.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_loadData_97ug = com_tencent_smtt_sdk_WebView_clz.loadData.overload('java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_loadData_97ug.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.WebView.loadData(java.lang.String,java.lang.String,java.lang.String)');
        com_tencent_smtt_sdk_WebView_clz_method_loadData_97ug.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_capturePicture_nb6d = com_tencent_smtt_sdk_WebView_clz.capturePicture.overload();
    com_tencent_smtt_sdk_WebView_clz_method_capturePicture_nb6d.implementation = function() {
        printStacks('public android.graphics.Picture com.tencent.smtt.sdk.WebView.capturePicture()');
        return com_tencent_smtt_sdk_WebView_clz_method_capturePicture_nb6d.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getVisibleTitleHeight_u2je = com_tencent_smtt_sdk_WebView_clz.getVisibleTitleHeight.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getVisibleTitleHeight_u2je.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.getVisibleTitleHeight()');
        return com_tencent_smtt_sdk_WebView_clz_method_getVisibleTitleHeight_u2je.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getX5HitTestResult_uisv = com_tencent_smtt_sdk_WebView_clz.getX5HitTestResult.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getX5HitTestResult_uisv.implementation = function() {
        printStacks('public com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult com.tencent.smtt.sdk.WebView.getX5HitTestResult()');
        return com_tencent_smtt_sdk_WebView_clz_method_getX5HitTestResult_uisv.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_super_computeScroll_3hyh = com_tencent_smtt_sdk_WebView_clz.super_computeScroll.overload();
    com_tencent_smtt_sdk_WebView_clz_method_super_computeScroll_3hyh.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.super_computeScroll()');
        com_tencent_smtt_sdk_WebView_clz_method_super_computeScroll_3hyh.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_createPrintDocumentAdapter_48ng = com_tencent_smtt_sdk_WebView_clz.createPrintDocumentAdapter.overload('java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_createPrintDocumentAdapter_48ng.implementation = function(v0) {
        printStacks('public java.lang.Object com.tencent.smtt.sdk.WebView.createPrintDocumentAdapter(java.lang.String)');
        return com_tencent_smtt_sdk_WebView_clz_method_createPrintDocumentAdapter_48ng.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_a_f8xy = com_tencent_smtt_sdk_WebView_clz.a.overload('android.util.AttributeSet');
    com_tencent_smtt_sdk_WebView_clz_method_a_f8xy.implementation = function(v0) {
        printStacks('private void com.tencent.smtt.sdk.WebView.a(android.util.AttributeSet)');
        com_tencent_smtt_sdk_WebView_clz_method_a_f8xy.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setARModeEnable_6449 = com_tencent_smtt_sdk_WebView_clz.setARModeEnable.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_setARModeEnable_6449.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setARModeEnable(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_setARModeEnable_6449.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_reportInitPerformance_aqmd = com_tencent_smtt_sdk_WebView_clz.reportInitPerformance.overload('long', 'int', 'long', 'long');
    com_tencent_smtt_sdk_WebView_clz_method_reportInitPerformance_aqmd.implementation = function(v0, v1, v2, v3) {
        printStacks('public org.json.JSONObject com.tencent.smtt.sdk.WebView.reportInitPerformance(long,int,long,long)');
        return com_tencent_smtt_sdk_WebView_clz_method_reportInitPerformance_aqmd.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebView_clz_init_3i7f = com_tencent_smtt_sdk_WebView_clz.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int', 'boolean');
    com_tencent_smtt_sdk_WebView_clz_init_3i7f.implementation = function(v0, v1, v2, v3) {
        printStacks('public com.tencent.smtt.sdk.WebView(android.content.Context,android.util.AttributeSet,int,boolean)');
        return com_tencent_smtt_sdk_WebView_clz_init_3i7f.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebView_clz_init_vcf6 = com_tencent_smtt_sdk_WebView_clz.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int');
    com_tencent_smtt_sdk_WebView_clz_init_vcf6.implementation = function(v0, v1, v2) {
        printStacks('public com.tencent.smtt.sdk.WebView(android.content.Context,android.util.AttributeSet,int)');
        return com_tencent_smtt_sdk_WebView_clz_init_vcf6.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebView_clz_init_e854 = com_tencent_smtt_sdk_WebView_clz.$init.overload('android.content.Context');
    com_tencent_smtt_sdk_WebView_clz_init_e854.implementation = function(v0) {
        printStacks('public com.tencent.smtt.sdk.WebView(android.content.Context)');
        return com_tencent_smtt_sdk_WebView_clz_init_e854.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_init_5znb = com_tencent_smtt_sdk_WebView_clz.$init.overload('android.content.Context', 'boolean');
    com_tencent_smtt_sdk_WebView_clz_init_5znb.implementation = function(v0, v1) {
        printStacks('public com.tencent.smtt.sdk.WebView(android.content.Context,boolean)');
        return com_tencent_smtt_sdk_WebView_clz_init_5znb.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_init_3wwl = com_tencent_smtt_sdk_WebView_clz.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int', 'java.util.Map', 'boolean');
    com_tencent_smtt_sdk_WebView_clz_init_3wwl.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('public com.tencent.smtt.sdk.WebView(android.content.Context,android.util.AttributeSet,int,java.util.Map,boolean)');
        return com_tencent_smtt_sdk_WebView_clz_init_3wwl.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_smtt_sdk_WebView_clz_init_3vyh = com_tencent_smtt_sdk_WebView_clz.$init.overload('android.content.Context', 'android.util.AttributeSet');
    com_tencent_smtt_sdk_WebView_clz_init_3vyh.implementation = function(v0, v1) {
        printStacks('public com.tencent.smtt.sdk.WebView(android.content.Context,android.util.AttributeSet)');
        return com_tencent_smtt_sdk_WebView_clz_init_3vyh.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$d');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_aC_507r = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz.aC.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_aC_507r.implementation = function(v0) {
        printStacks('public static com.tencent.mm.plugin.webview.ui.tools.WebViewUI$d com.tencent.mm.plugin.webview.ui.tools.WebViewUI$d.aC(android.os.Bundle)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_aC_507r.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_dYp_3r79 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz.dYp.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_dYp_3r79.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI$d.dYp()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_dYp_3r79.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_dUC_o1qa = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz.dUC.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_dUC_o1qa.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI$d.dUC()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_dUC_o1qa.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_dUD_5xg8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz.dUD.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_dUD_5xg8.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI$d.dUD()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_dUD_5xg8.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_dUA_tuj5 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz.dUA.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_dUA_tuj5.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$d.dUA()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_dUA_tuj5.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_init_f7dg = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz.$init.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_init_f7dg.implementation = function(v0) {
        printStacks('private com.tencent.mm.plugin.webview.ui.tools.WebViewUI$d(android.os.Bundle)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_init_f7dg.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$l');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz_method_asB_7qna = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz.asB.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz_method_asB_7qna.implementation = function(v0) {
        printStacks('private boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$l.asB(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz_method_asB_7qna.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz_method_aqI_4phy = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz.aqI.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz_method_aqI_4phy.implementation = function(v0) {
        printStacks('public final int com.tencent.mm.plugin.webview.ui.tools.WebViewUI$l.aqI(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz_method_aqI_4phy.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz_init_zw1j = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz.$init.overload('java.lang.String', 'com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz_init_zw1j.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.WebViewUI$l(java.lang.String,com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz_init_zw1j.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$m');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz_method_dYt_xnfh = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz.dYt.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz_method_dYt_xnfh.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$m.dYt()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz_method_dYt_xnfh.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz_method_dYv_yqyk = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz.dYv.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz_method_dYv_yqyk.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$m.dYv()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz_method_dYv_yqyk.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz_method_dYu_6lnt = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz.dYu.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz_method_dYu_6lnt.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$m.dYu()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz_method_dYu_6lnt.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz_init_roj9 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz_init_roj9.implementation = function(v0) {
        printStacks('protected com.tencent.mm.plugin.webview.ui.tools.WebViewUI$m(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz_init_roj9.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_o_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$o');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_o_clz_method_dYv_vlmh = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_o_clz.dYv.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_o_clz_method_dYv_vlmh.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$o.dYv()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_o_clz_method_dYv_vlmh.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_o_clz_init_9ldg = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_o_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_o_clz_init_9ldg.implementation = function(v0) {
        printStacks('protected com.tencent.mm.plugin.webview.ui.tools.WebViewUI$o(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_o_clz_init_9ldg.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_q_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$q');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_q_clz_method_dYv_2ccj = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_q_clz.dYv.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_q_clz_method_dYv_2ccj.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$q.dYv()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_q_clz_method_dYv_2ccj.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_q_clz_init_pp3c = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_q_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_q_clz_init_pp3c.implementation = function(v0) {
        printStacks('protected com.tencent.mm.plugin.webview.ui.tools.WebViewUI$q(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_q_clz_init_pp3c.call(this, v0);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz = Java.use('com.tencent.smtt.export.external.proxy.ProxyWebViewClient');
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onDetectedBlankScreen_clfr = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onDetectedBlankScreen.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'java.lang.String', 'int');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onDetectedBlankScreen_clfr.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onDetectedBlankScreen(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,java.lang.String,int)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onDetectedBlankScreen_clfr.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageStarted_9btn = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onPageStarted.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'int', 'int', 'java.lang.String', 'android.graphics.Bitmap');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageStarted_9btn.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onPageStarted(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,int,int,java.lang.String,android.graphics.Bitmap)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageStarted_9btn.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageStarted_r5ua = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onPageStarted.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'java.lang.String', 'android.graphics.Bitmap');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageStarted_r5ua.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onPageStarted(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,java.lang.String,android.graphics.Bitmap)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageStarted_r5ua.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageFinished_i4i4 = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onPageFinished.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'int', 'int', 'java.lang.String');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageFinished_i4i4.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onPageFinished(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,int,int,java.lang.String)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageFinished_i4i4.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageCommitVisible_6189 = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onPageCommitVisible.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'java.lang.String');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageCommitVisible_6189.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onPageCommitVisible(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,java.lang.String)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageCommitVisible_6189.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onContentSizeChanged_v14l = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onContentSizeChanged.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'int', 'int');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onContentSizeChanged_v14l.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onContentSizeChanged(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,int,int)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onContentSizeChanged_v14l.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_setWebViewClient_4yln = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.setWebViewClient.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewClient');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_setWebViewClient_4yln.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.setWebViewClient(com.tencent.smtt.export.external.interfaces.IX5WebViewClient)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_setWebViewClient_4yln.call(this, v0);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onScaleChanged_gi7b = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onScaleChanged.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'float', 'float');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onScaleChanged_gi7b.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onScaleChanged(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,float,float)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onScaleChanged_gi7b.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedSslError_soq7 = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onReceivedSslError.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'com.tencent.smtt.export.external.interfaces.SslErrorHandler', 'com.tencent.smtt.export.external.interfaces.SslError');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedSslError_soq7.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onReceivedSslError(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,com.tencent.smtt.export.external.interfaces.SslErrorHandler,com.tencent.smtt.export.external.interfaces.SslError)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedSslError_soq7.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_doUpdateVisitedHistory_r1cd = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.doUpdateVisitedHistory.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'java.lang.String', 'boolean');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_doUpdateVisitedHistory_r1cd.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.doUpdateVisitedHistory(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,java.lang.String,boolean)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_doUpdateVisitedHistory_r1cd.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onTooManyRedirects_skbh = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onTooManyRedirects.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'android.os.Message', 'android.os.Message');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onTooManyRedirects_skbh.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onTooManyRedirects(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,android.os.Message,android.os.Message)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onTooManyRedirects_skbh.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldInterceptRequest_5lxp = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.shouldInterceptRequest.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'com.tencent.smtt.export.external.interfaces.WebResourceRequest', 'android.os.Bundle');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldInterceptRequest_5lxp.implementation = function(v0, v1, v2) {
        printStacks('public com.tencent.smtt.export.external.interfaces.WebResourceResponse com.tencent.smtt.export.external.proxy.ProxyWebViewClient.shouldInterceptRequest(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,com.tencent.smtt.export.external.interfaces.WebResourceRequest,android.os.Bundle)');
        return com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldInterceptRequest_5lxp.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onFormResubmission_f51b = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onFormResubmission.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'android.os.Message', 'android.os.Message');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onFormResubmission_f51b.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onFormResubmission(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,android.os.Message,android.os.Message)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onFormResubmission_f51b.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedHttpError_03wk = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onReceivedHttpError.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'com.tencent.smtt.export.external.interfaces.WebResourceRequest', 'com.tencent.smtt.export.external.interfaces.WebResourceResponse');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedHttpError_03wk.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onReceivedHttpError(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,com.tencent.smtt.export.external.interfaces.WebResourceRequest,com.tencent.smtt.export.external.interfaces.WebResourceResponse)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedHttpError_03wk.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedError_0w3s = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onReceivedError.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'int', 'java.lang.String', 'java.lang.String');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedError_0w3s.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onReceivedError(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,int,java.lang.String,java.lang.String)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedError_0w3s.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldOverrideKeyEvent_q34d = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.shouldOverrideKeyEvent.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'android.view.KeyEvent');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldOverrideKeyEvent_q34d.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.export.external.proxy.ProxyWebViewClient.shouldOverrideKeyEvent(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,android.view.KeyEvent)');
        return com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldOverrideKeyEvent_q34d.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedClientCertRequest_mqck = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onReceivedClientCertRequest.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'com.tencent.smtt.export.external.interfaces.ClientCertRequest');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedClientCertRequest_mqck.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onReceivedClientCertRequest(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,com.tencent.smtt.export.external.interfaces.ClientCertRequest)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedClientCertRequest_mqck.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldOverrideUrlLoading_ytty = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.shouldOverrideUrlLoading.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'java.lang.String');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldOverrideUrlLoading_ytty.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.export.external.proxy.ProxyWebViewClient.shouldOverrideUrlLoading(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,java.lang.String)');
        return com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldOverrideUrlLoading_ytty.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onLoadResource_04or = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onLoadResource.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'java.lang.String');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onLoadResource_04or.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onLoadResource(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,java.lang.String)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onLoadResource_04or.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedError_gr0f = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onReceivedError.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'com.tencent.smtt.export.external.interfaces.WebResourceRequest', 'com.tencent.smtt.export.external.interfaces.WebResourceError');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedError_gr0f.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onReceivedError(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,com.tencent.smtt.export.external.interfaces.WebResourceRequest,com.tencent.smtt.export.external.interfaces.WebResourceError)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedError_gr0f.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onUnhandledKeyEvent_bqdt = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onUnhandledKeyEvent.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'android.view.KeyEvent');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onUnhandledKeyEvent_bqdt.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onUnhandledKeyEvent(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,android.view.KeyEvent)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onUnhandledKeyEvent_bqdt.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldInterceptRequest_rv0n = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.shouldInterceptRequest.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'com.tencent.smtt.export.external.interfaces.WebResourceRequest');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldInterceptRequest_rv0n.implementation = function(v0, v1) {
        printStacks('public com.tencent.smtt.export.external.interfaces.WebResourceResponse com.tencent.smtt.export.external.proxy.ProxyWebViewClient.shouldInterceptRequest(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,com.tencent.smtt.export.external.interfaces.WebResourceRequest)');
        return com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldInterceptRequest_rv0n.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedLoginRequest_tovc = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onReceivedLoginRequest.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedLoginRequest_tovc.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onReceivedLoginRequest(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,java.lang.String,java.lang.String,java.lang.String)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedLoginRequest_tovc.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_countPVContentCacheCallBack_xfkl = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.countPVContentCacheCallBack.overload('java.lang.String');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_countPVContentCacheCallBack_xfkl.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.countPVContentCacheCallBack(java.lang.String)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_countPVContentCacheCallBack_xfkl.call(this, v0);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageFinished_mo8d = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onPageFinished.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'java.lang.String');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageFinished_mo8d.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onPageFinished(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,java.lang.String)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageFinished_mo8d.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldInterceptRequest_j80z = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.shouldInterceptRequest.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'java.lang.String');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldInterceptRequest_j80z.implementation = function(v0, v1) {
        printStacks('public com.tencent.smtt.export.external.interfaces.WebResourceResponse com.tencent.smtt.export.external.proxy.ProxyWebViewClient.shouldInterceptRequest(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,java.lang.String)');
        return com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldInterceptRequest_j80z.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldOverrideUrlLoading_cdah = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.shouldOverrideUrlLoading.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'com.tencent.smtt.export.external.interfaces.WebResourceRequest');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldOverrideUrlLoading_cdah.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.export.external.proxy.ProxyWebViewClient.shouldOverrideUrlLoading(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,com.tencent.smtt.export.external.interfaces.WebResourceRequest)');
        return com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldOverrideUrlLoading_cdah.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedHttpAuthRequest_1tvn = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onReceivedHttpAuthRequest.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'com.tencent.smtt.export.external.interfaces.HttpAuthHandler', 'java.lang.String', 'java.lang.String');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedHttpAuthRequest_1tvn.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onReceivedHttpAuthRequest(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,com.tencent.smtt.export.external.interfaces.HttpAuthHandler,java.lang.String,java.lang.String)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedHttpAuthRequest_1tvn.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_init_j2oo = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.$init.overload();
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_init_j2oo.implementation = function() {
        printStacks('public com.tencent.smtt.export.external.proxy.ProxyWebViewClient()');
        return com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_init_j2oo.call(this);
    };
    var com_tencent_smtt_sdk_WebView_b_clz = Java.use('com.tencent.smtt.sdk.WebView$b');
    var com_tencent_smtt_sdk_WebView_b_clz_method_c_904o = com_tencent_smtt_sdk_WebView_b_clz.c.overload('android.view.MotionEvent');
    com_tencent_smtt_sdk_WebView_b_clz_method_c_904o.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView$b.c(android.view.MotionEvent)');
        return com_tencent_smtt_sdk_WebView_b_clz_method_c_904o.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_setOverScrollMode_6ecw = com_tencent_smtt_sdk_WebView_b_clz.setOverScrollMode.overload('int');
    com_tencent_smtt_sdk_WebView_b_clz_method_setOverScrollMode_6ecw.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView$b.setOverScrollMode(int)');
        com_tencent_smtt_sdk_WebView_b_clz_method_setOverScrollMode_6ecw.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_a_5ntb = com_tencent_smtt_sdk_WebView_b_clz.a.overload('android.view.MotionEvent');
    com_tencent_smtt_sdk_WebView_b_clz_method_a_5ntb.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView$b.a(android.view.MotionEvent)');
        return com_tencent_smtt_sdk_WebView_b_clz_method_a_5ntb.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_onOverScrolled_5lh8 = com_tencent_smtt_sdk_WebView_b_clz.onOverScrolled.overload('int', 'int', 'boolean', 'boolean');
    com_tencent_smtt_sdk_WebView_b_clz_method_onOverScrolled_5lh8.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.sdk.WebView$b.onOverScrolled(int,int,boolean,boolean)');
        com_tencent_smtt_sdk_WebView_b_clz_method_onOverScrolled_5lh8.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_onTouchEvent_pgil = com_tencent_smtt_sdk_WebView_b_clz.onTouchEvent.overload('android.view.MotionEvent');
    com_tencent_smtt_sdk_WebView_b_clz_method_onTouchEvent_pgil.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView$b.onTouchEvent(android.view.MotionEvent)');
        return com_tencent_smtt_sdk_WebView_b_clz_method_onTouchEvent_pgil.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_b_nkcb = com_tencent_smtt_sdk_WebView_b_clz.b.overload('android.view.MotionEvent');
    com_tencent_smtt_sdk_WebView_b_clz_method_b_nkcb.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView$b.b(android.view.MotionEvent)');
        return com_tencent_smtt_sdk_WebView_b_clz_method_b_nkcb.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_a_mtrv = com_tencent_smtt_sdk_WebView_b_clz.a.overload('int', 'int', 'int', 'int');
    com_tencent_smtt_sdk_WebView_b_clz_method_a_mtrv.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.sdk.WebView$b.a(int,int,int,int)');
        com_tencent_smtt_sdk_WebView_b_clz_method_a_mtrv.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_computeScroll_81en = com_tencent_smtt_sdk_WebView_b_clz.computeScroll.overload();
    com_tencent_smtt_sdk_WebView_b_clz_method_computeScroll_81en.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView$b.computeScroll()');
        com_tencent_smtt_sdk_WebView_b_clz_method_computeScroll_81en.call(this);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_dispatchDraw_ke5y = com_tencent_smtt_sdk_WebView_b_clz.dispatchDraw.overload('android.graphics.Canvas');
    com_tencent_smtt_sdk_WebView_b_clz_method_dispatchDraw_ke5y.implementation = function(v0) {
        printStacks('protected void com.tencent.smtt.sdk.WebView$b.dispatchDraw(android.graphics.Canvas)');
        com_tencent_smtt_sdk_WebView_b_clz_method_dispatchDraw_ke5y.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_onScrollChanged_3cqo = com_tencent_smtt_sdk_WebView_b_clz.onScrollChanged.overload('int', 'int', 'int', 'int');
    com_tencent_smtt_sdk_WebView_b_clz_method_onScrollChanged_3cqo.implementation = function(v0, v1, v2, v3) {
        printStacks('protected void com.tencent.smtt.sdk.WebView$b.onScrollChanged(int,int,int,int)');
        com_tencent_smtt_sdk_WebView_b_clz_method_onScrollChanged_3cqo.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_a_58ef = com_tencent_smtt_sdk_WebView_b_clz.a.overload();
    com_tencent_smtt_sdk_WebView_b_clz_method_a_58ef.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView$b.a()');
        com_tencent_smtt_sdk_WebView_b_clz_method_a_58ef.call(this);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_onInterceptTouchEvent_wmre = com_tencent_smtt_sdk_WebView_b_clz.onInterceptTouchEvent.overload('android.view.MotionEvent');
    com_tencent_smtt_sdk_WebView_b_clz_method_onInterceptTouchEvent_wmre.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView$b.onInterceptTouchEvent(android.view.MotionEvent)');
        return com_tencent_smtt_sdk_WebView_b_clz_method_onInterceptTouchEvent_wmre.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_invalidate_jpb9 = com_tencent_smtt_sdk_WebView_b_clz.invalidate.overload();
    com_tencent_smtt_sdk_WebView_b_clz_method_invalidate_jpb9.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView$b.invalidate()');
        com_tencent_smtt_sdk_WebView_b_clz_method_invalidate_jpb9.call(this);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_overScrollBy_yb0d = com_tencent_smtt_sdk_WebView_b_clz.overScrollBy.overload('int', 'int', 'int', 'int', 'int', 'int', 'int', 'int', 'boolean');
    com_tencent_smtt_sdk_WebView_b_clz_method_overScrollBy_yb0d.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7, v8) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView$b.overScrollBy(int,int,int,int,int,int,int,int,boolean)');
        return com_tencent_smtt_sdk_WebView_b_clz_method_overScrollBy_yb0d.call(this, v0, v1, v2, v3, v4, v5, v6, v7, v8);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_dispatchTouchEvent_v08k = com_tencent_smtt_sdk_WebView_b_clz.dispatchTouchEvent.overload('android.view.MotionEvent');
    com_tencent_smtt_sdk_WebView_b_clz_method_dispatchTouchEvent_v08k.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView$b.dispatchTouchEvent(android.view.MotionEvent)');
        return com_tencent_smtt_sdk_WebView_b_clz_method_dispatchTouchEvent_v08k.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_a_4x1w = com_tencent_smtt_sdk_WebView_b_clz.a.overload('int', 'int', 'boolean', 'boolean');
    com_tencent_smtt_sdk_WebView_b_clz_method_a_4x1w.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.sdk.WebView$b.a(int,int,boolean,boolean)');
        com_tencent_smtt_sdk_WebView_b_clz_method_a_4x1w.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_getSettings_13a8 = com_tencent_smtt_sdk_WebView_b_clz.getSettings.overload();
    com_tencent_smtt_sdk_WebView_b_clz_method_getSettings_13a8.implementation = function() {
        printStacks('public android.webkit.WebSettings com.tencent.smtt.sdk.WebView$b.getSettings()');
        return com_tencent_smtt_sdk_WebView_b_clz_method_getSettings_13a8.call(this);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_a_ujba = com_tencent_smtt_sdk_WebView_b_clz.a.overload('int', 'int', 'int', 'int', 'int', 'int', 'int', 'int', 'boolean');
    com_tencent_smtt_sdk_WebView_b_clz_method_a_ujba.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7, v8) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView$b.a(int,int,int,int,int,int,int,int,boolean)');
        return com_tencent_smtt_sdk_WebView_b_clz_method_a_ujba.call(this, v0, v1, v2, v3, v4, v5, v6, v7, v8);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_init_yarb = com_tencent_smtt_sdk_WebView_b_clz.$init.overload('com.tencent.smtt.sdk.WebView', 'android.content.Context', 'android.util.AttributeSet');
    com_tencent_smtt_sdk_WebView_b_clz_init_yarb.implementation = function(v0, v1, v2) {
        printStacks('public com.tencent.smtt.sdk.WebView$b(com.tencent.smtt.sdk.WebView,android.content.Context,android.util.AttributeSet)');
        return com_tencent_smtt_sdk_WebView_b_clz_init_yarb.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_init_daj3 = com_tencent_smtt_sdk_WebView_b_clz.$init.overload('com.tencent.smtt.sdk.WebView', 'android.content.Context');
    com_tencent_smtt_sdk_WebView_b_clz_init_daj3.implementation = function(v0, v1) {
        printStacks('public com.tencent.smtt.sdk.WebView$b(com.tencent.smtt.sdk.WebView,android.content.Context)');
        return com_tencent_smtt_sdk_WebView_b_clz_init_daj3.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz = Java.use('com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult');
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setData_gom4 = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.setData.overload('java.lang.Object');
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setData_gom4.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.setData(java.lang.Object)');
        com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setData_gom4.call(this, v0);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setType_2frj = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.setType.overload('int');
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setType_2frj.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.setType(int)');
        com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setType_2frj.call(this, v0);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setHitTestPoint_fia3 = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.setHitTestPoint.overload('android.graphics.Point');
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setHitTestPoint_fia3.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.setHitTestPoint(android.graphics.Point)');
        com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setHitTestPoint_fia3.call(this, v0);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getBitmapData_7706 = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.getBitmapData.overload();
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getBitmapData_7706.implementation = function() {
        printStacks('protected android.graphics.Bitmap com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.getBitmapData()');
        return com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getBitmapData_7706.call(this);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_isFromSinglePress_ug9d = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.isFromSinglePress.overload();
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_isFromSinglePress_ug9d.implementation = function() {
        printStacks('public boolean com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.isFromSinglePress()');
        return com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_isFromSinglePress_ug9d.call(this);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getDeepImageData_pkvc = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.getDeepImageData.overload();
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getDeepImageData_pkvc.implementation = function() {
        printStacks('public com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult$DeepImageData com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.getDeepImageData()');
        return com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getDeepImageData_pkvc.call(this);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getExtra_klcj = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.getExtra.overload();
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getExtra_klcj.implementation = function() {
        printStacks('public java.lang.String com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.getExtra()');
        return com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getExtra_klcj.call(this);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getHitTestPoint_mkvg = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.getHitTestPoint.overload();
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getHitTestPoint_mkvg.implementation = function() {
        printStacks('public android.graphics.Point com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.getHitTestPoint()');
        return com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getHitTestPoint_mkvg.call(this);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getData_d3mr = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.getData.overload();
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getData_d3mr.implementation = function() {
        printStacks('public java.lang.Object com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.getData()');
        return com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getData_d3mr.call(this);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setDeepImageData_0bol = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.setDeepImageData.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult$DeepImageData');
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setDeepImageData_0bol.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.setDeepImageData(com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult$DeepImageData)');
        com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setDeepImageData_0bol.call(this, v0);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setIsFromSinglePress_gxkm = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.setIsFromSinglePress.overload('boolean');
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setIsFromSinglePress_gxkm.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.setIsFromSinglePress(boolean)');
        com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setIsFromSinglePress_gxkm.call(this, v0);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getType_e6uy = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.getType.overload();
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getType_e6uy.implementation = function() {
        printStacks('public int com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.getType()');
        return com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getType_e6uy.call(this);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setExtra_ygtq = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.setExtra.overload('java.lang.String');
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setExtra_ygtq.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.setExtra(java.lang.String)');
        com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setExtra_ygtq.call(this, v0);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_init_3ts1 = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.$init.overload();
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_init_3ts1.implementation = function() {
        printStacks('public com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult()');
        return com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_init_3ts1.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI');
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_dZa_1fsj = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.dZa.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_dZa_1fsj.implementation = function() {
        printStacks('protected com.tencent.mm.plugin.webview.ui.tools.fts.e com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.dZa()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_dZa_1fsj.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_cqF_h44d = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.cqF.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_cqF_h44d.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.cqF()');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_cqF_h44d.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_onPause_c3ui = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.onPause.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_onPause_c3ui.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.onPause()');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_onPause_c3ui.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_Rd_r5tq = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.Rd.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_Rd_r5tq.implementation = function(v0) {
        printStacks('protected final android.graphics.drawable.Drawable com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.Rd(int)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_Rd_r5tq.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_dZf_y69p = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.dZf.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_dZf_y69p.implementation = function() {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.dZf()');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_dZf_y69p.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_C_a0ib = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.C.overload('com.tencent.mm.storage.emotion.EmojiInfo');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_C_a0ib.implementation = function(v0) {
        printStacks('private java.lang.String com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.C(com.tencent.mm.storage.emotion.EmojiInfo)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_C_a0ib.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_c_l1pe = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.c.overload('int', 'java.lang.String', 'java.util.Map');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_c_l1pe.implementation = function(v0, v1, v2) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.c(int,java.lang.String,java.util.Map)');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_c_l1pe.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_aG_djjo = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.aG.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_aG_djjo.implementation = function(v0) {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.aG(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_aG_djjo.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_m_h3tp = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.m.overload('int', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_m_h3tp.implementation = function(v0, v1) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.m(int,android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_m_h3tp.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_ak_h3hr = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.ak.overload('java.lang.Runnable');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_ak_h3hr.implementation = function(v0) {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.ak(java.lang.Runnable)');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_ak_h3hr.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_dZh_u3kd = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.dZh.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_dZh_u3kd.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.dZh()');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_dZh_u3kd.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_onResume_z6cl = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.onResume.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_onResume_z6cl.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.onResume()');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_onResume_z6cl.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_b_lt3k = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_b_lt3k.implementation = function(v0) {
        printStacks('static com.tencent.mm.api.SmileyPanel com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.b(com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_b_lt3k.call(com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_t_jyza = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.t.overload('android.view.View', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_t_jyza.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.t(android.view.View,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_t_jyza.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_a_25el = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.fts.c.b$a');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_a_25el.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.a(com.tencent.mm.plugin.webview.fts.c.b$a)');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_a_25el.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_a_9lnw = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI', 'com.tencent.mm.storage.emotion.EmojiInfo');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_a_9lnw.implementation = function(v0, v1) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI,com.tencent.mm.storage.emotion.EmojiInfo)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_a_9lnw.call(com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_onKeyDown_wa5f = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.onKeyDown.overload('int', 'android.view.KeyEvent');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_onKeyDown_wa5f.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.onKeyDown(int,android.view.KeyEvent)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_onKeyDown_wa5f.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_dZg_aoym = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.dZg.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_dZg_aoym.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.dZg()');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_dZg_aoym.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_aF_f76y = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.aF.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_aF_f76y.implementation = function(v0) {
        printStacks('private static int com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.aF(android.os.Bundle)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_aF_f76y.call(com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_onDestroy_e6fc = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.onDestroy.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_onDestroy_e6fc.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.onDestroy()');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_onDestroy_e6fc.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_c_4ibq = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.c.overload('com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_c_4ibq.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.c(com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI)');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_c_4ibq.call(com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_bja_ecfs = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.bja.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_bja_ecfs.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.bja()');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_bja_ecfs.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_bjc_rrhf = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.bjc.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_bjc_rrhf.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.bjc()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_bjc_rrhf.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_dTO_t6hv = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.dTO.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_dTO_t6hv.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.dTO()');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_dTO_t6hv.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_dYk_7clg = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.dYk.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_dYk_7clg.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.dYk()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_dYk_7clg.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_a_o10w = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI', 'java.lang.String', 'java.lang.String', 'int', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_a_o10w.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI,java.lang.String,java.lang.String,int,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_a_o10w.call(com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz, v0, v1, v2, v3, v4);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_onRequestPermissionsResult_qt9m = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.onRequestPermissionsResult.overload('int', '[Ljava.lang.String;', '[I');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_onRequestPermissionsResult_qt9m.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.onRequestPermissionsResult(int,java.lang.String[],int[])');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_onRequestPermissionsResult_qt9m.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_a_66fj = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_a_66fj.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI)');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_a_66fj.call(com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_onBackPressed_ru9p = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.onBackPressed.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_onBackPressed_ru9p.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.onBackPressed()');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_onBackPressed_ru9p.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_onCreate_0yaa = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.onCreate.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_onCreate_0yaa.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.onCreate(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_onCreate_0yaa.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_onWindowFocusChanged_f11o = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.onWindowFocusChanged.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_onWindowFocusChanged_f11o.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI.onWindowFocusChanged(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_method_onWindowFocusChanged_f11o.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_init_z2v4 = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz.$init.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_init_z2v4.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.fts.BaseSearchWebViewUI()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSearchWebViewUI_clz_init_z2v4.call(this);
    };
    var com_tencent_xweb_WebView_clz = Java.use('com.tencent.xweb.WebView');
    var com_tencent_xweb_WebView_clz_method_initWebviewCore_kamg = com_tencent_xweb_WebView_clz.initWebviewCore.overload('android.content.Context', 'com.tencent.xweb.WebView$c', 'java.lang.String', 'com.tencent.xweb.WebView$PreInitCallback');
    com_tencent_xweb_WebView_clz_method_initWebviewCore_kamg.implementation = function(v0, v1, v2, v3) {
        printStacks('public static void com.tencent.xweb.WebView.initWebviewCore(android.content.Context,com.tencent.xweb.WebView$c,java.lang.String,com.tencent.xweb.WebView$PreInitCallback)');
        com_tencent_xweb_WebView_clz_method_initWebviewCore_kamg.call(com_tencent_xweb_WebView_clz, v0, v1, v2, v3);
    };
    var com_tencent_xweb_WebView_clz_method_getCookieManager_3ml1 = com_tencent_xweb_WebView_clz.getCookieManager.overload();
    com_tencent_xweb_WebView_clz_method_getCookieManager_3ml1.implementation = function() {
        printStacks('public com.tencent.xweb.internal.CookieInternal$ICookieManagerInternal com.tencent.xweb.WebView.getCookieManager()');
        return com_tencent_xweb_WebView_clz_method_getCookieManager_3ml1.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_getFullscreenVideoKind_gkq9 = com_tencent_xweb_WebView_clz.getFullscreenVideoKind.overload();
    com_tencent_xweb_WebView_clz_method_getFullscreenVideoKind_gkq9.implementation = function() {
        printStacks('public com.tencent.xweb.WebView$a com.tencent.xweb.WebView.getFullscreenVideoKind()');
        return com_tencent_xweb_WebView_clz_method_getFullscreenVideoKind_gkq9.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_enablePlatformNotifications_9f6d = com_tencent_xweb_WebView_clz.enablePlatformNotifications.overload();
    com_tencent_xweb_WebView_clz_method_enablePlatformNotifications_9f6d.implementation = function() {
        printStacks('public static void com.tencent.xweb.WebView.enablePlatformNotifications()');
        com_tencent_xweb_WebView_clz_method_enablePlatformNotifications_9f6d.call(com_tencent_xweb_WebView_clz);
    };
    var com_tencent_xweb_WebView_clz_method_getTitle_wd2l = com_tencent_xweb_WebView_clz.getTitle.overload();
    com_tencent_xweb_WebView_clz_method_getTitle_wd2l.implementation = function() {
        printStacks('public java.lang.String com.tencent.xweb.WebView.getTitle()');
        return com_tencent_xweb_WebView_clz_method_getTitle_wd2l.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_getHitTestResult_6ojf = com_tencent_xweb_WebView_clz.getHitTestResult.overload();
    com_tencent_xweb_WebView_clz_method_getHitTestResult_6ojf.implementation = function() {
        printStacks('public com.tencent.xweb.WebView$b com.tencent.xweb.WebView.getHitTestResult()');
        return com_tencent_xweb_WebView_clz_method_getHitTestResult_6ojf.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_drawChild_xfgb = com_tencent_xweb_WebView_clz.drawChild.overload('android.graphics.Canvas', 'android.view.View', 'long');
    com_tencent_xweb_WebView_clz_method_drawChild_xfgb.implementation = function(v0, v1, v2) {
        printStacks('protected boolean com.tencent.xweb.WebView.drawChild(android.graphics.Canvas,android.view.View,long)');
        return com_tencent_xweb_WebView_clz_method_drawChild_xfgb.call(this, v0, v1, v2);
    };
    var com_tencent_xweb_WebView_clz_method_getCurStrModule_tggm = com_tencent_xweb_WebView_clz.getCurStrModule.overload();
    com_tencent_xweb_WebView_clz_method_getCurStrModule_tggm.implementation = function() {
        printStacks('public static java.lang.String com.tencent.xweb.WebView.getCurStrModule()');
        return com_tencent_xweb_WebView_clz_method_getCurStrModule_tggm.call(com_tencent_xweb_WebView_clz);
    };
    var com_tencent_xweb_WebView_clz_method_goBack_ye0k = com_tencent_xweb_WebView_clz.goBack.overload();
    com_tencent_xweb_WebView_clz_method_goBack_ye0k.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.goBack()');
        com_tencent_xweb_WebView_clz_method_goBack_ye0k.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_disableVideoJsCallback_yu1i = com_tencent_xweb_WebView_clz.disableVideoJsCallback.overload('boolean');
    com_tencent_xweb_WebView_clz_method_disableVideoJsCallback_yu1i.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.disableVideoJsCallback(boolean)');
        com_tencent_xweb_WebView_clz_method_disableVideoJsCallback_yu1i.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_removeJavascriptInterface_8eyi = com_tencent_xweb_WebView_clz.removeJavascriptInterface.overload('java.lang.String');
    com_tencent_xweb_WebView_clz_method_removeJavascriptInterface_8eyi.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.removeJavascriptInterface(java.lang.String)');
        com_tencent_xweb_WebView_clz_method_removeJavascriptInterface_8eyi.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_clearHistory_8dgk = com_tencent_xweb_WebView_clz.clearHistory.overload();
    com_tencent_xweb_WebView_clz_method_clearHistory_8dgk.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.clearHistory()');
        com_tencent_xweb_WebView_clz_method_clearHistory_8dgk.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_isX5WrappedSysKernel_tvml = com_tencent_xweb_WebView_clz.isX5WrappedSysKernel.overload();
    com_tencent_xweb_WebView_clz_method_isX5WrappedSysKernel_tvml.implementation = function() {
        printStacks('public boolean com.tencent.xweb.WebView.isX5WrappedSysKernel()');
        return com_tencent_xweb_WebView_clz_method_isX5WrappedSysKernel_tvml.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_setVideoJsCallback_w21k = com_tencent_xweb_WebView_clz.setVideoJsCallback.overload('com.tencent.xweb.r');
    com_tencent_xweb_WebView_clz_method_setVideoJsCallback_w21k.implementation = function(v0) {
        printStacks('public com.tencent.xweb.q com.tencent.xweb.WebView.setVideoJsCallback(com.tencent.xweb.r)');
        return com_tencent_xweb_WebView_clz_method_setVideoJsCallback_w21k.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_setJSExceptionListener_2j1q = com_tencent_xweb_WebView_clz.setJSExceptionListener.overload('com.tencent.xweb.z');
    com_tencent_xweb_WebView_clz_method_setJSExceptionListener_2j1q.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setJSExceptionListener(com.tencent.xweb.z)');
        com_tencent_xweb_WebView_clz_method_setJSExceptionListener_2j1q.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_a_24i5 = com_tencent_xweb_WebView_clz.a.overload('com.tencent.xweb.WebView$c', 'android.content.Context', 'com.tencent.xweb.WebView$PreInitCallback', 'boolean');
    com_tencent_xweb_WebView_clz_method_a_24i5.implementation = function(v0, v1, v2, v3) {
        printStacks('private static boolean com.tencent.xweb.WebView.a(com.tencent.xweb.WebView$c,android.content.Context,com.tencent.xweb.WebView$PreInitCallback,boolean)');
        return com_tencent_xweb_WebView_clz_method_a_24i5.call(com_tencent_xweb_WebView_clz, v0, v1, v2, v3);
    };
    var com_tencent_xweb_WebView_clz_method_getCanReboot_876o = com_tencent_xweb_WebView_clz.getCanReboot.overload();
    com_tencent_xweb_WebView_clz_method_getCanReboot_876o.implementation = function() {
        printStacks('public static boolean com.tencent.xweb.WebView.getCanReboot()');
        return com_tencent_xweb_WebView_clz_method_getCanReboot_876o.call(com_tencent_xweb_WebView_clz);
    };
    var com_tencent_xweb_WebView_clz_method__disablePlatformNotifications_34yi = com_tencent_xweb_WebView_clz._disablePlatformNotifications.overload();
    com_tencent_xweb_WebView_clz_method__disablePlatformNotifications_34yi.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView._disablePlatformNotifications()');
        com_tencent_xweb_WebView_clz_method__disablePlatformNotifications_34yi.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_disablePlatformNotifications_e7ga = com_tencent_xweb_WebView_clz.disablePlatformNotifications.overload();
    com_tencent_xweb_WebView_clz_method_disablePlatformNotifications_e7ga.implementation = function() {
        printStacks('public static void com.tencent.xweb.WebView.disablePlatformNotifications()');
        com_tencent_xweb_WebView_clz_method_disablePlatformNotifications_e7ga.call(com_tencent_xweb_WebView_clz);
    };
    var com_tencent_xweb_WebView_clz_method_startLongScreenshot_eii9 = com_tencent_xweb_WebView_clz.startLongScreenshot.overload('com.tencent.xweb.n', 'boolean');
    com_tencent_xweb_WebView_clz_method_startLongScreenshot_eii9.implementation = function(v0, v1) {
        printStacks('public void com.tencent.xweb.WebView.startLongScreenshot(com.tencent.xweb.n,boolean)');
        com_tencent_xweb_WebView_clz_method_startLongScreenshot_eii9.call(this, v0, v1);
    };
    var com_tencent_xweb_WebView_clz_method_setFocusableInTouchMode_f437 = com_tencent_xweb_WebView_clz.setFocusableInTouchMode.overload('boolean');
    com_tencent_xweb_WebView_clz_method_setFocusableInTouchMode_f437.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setFocusableInTouchMode(boolean)');
        com_tencent_xweb_WebView_clz_method_setFocusableInTouchMode_f437.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_addJavascriptInterface_09wm = com_tencent_xweb_WebView_clz.addJavascriptInterface.overload('java.lang.Object', 'java.lang.String');
    com_tencent_xweb_WebView_clz_method_addJavascriptInterface_09wm.implementation = function(v0, v1) {
        printStacks('public void com.tencent.xweb.WebView.addJavascriptInterface(java.lang.Object,java.lang.String)');
        com_tencent_xweb_WebView_clz_method_addJavascriptInterface_09wm.call(this, v0, v1);
    };
    var com_tencent_xweb_WebView_clz_method_leaveFullscreen_arna = com_tencent_xweb_WebView_clz.leaveFullscreen.overload();
    com_tencent_xweb_WebView_clz_method_leaveFullscreen_arna.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.leaveFullscreen()');
        com_tencent_xweb_WebView_clz_method_leaveFullscreen_arna.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_super_overScrollBy_uoug = com_tencent_xweb_WebView_clz.super_overScrollBy.overload('int', 'int', 'int', 'int', 'int', 'int', 'int', 'int', 'boolean');
    com_tencent_xweb_WebView_clz_method_super_overScrollBy_uoug.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7, v8) {
        printStacks('public boolean com.tencent.xweb.WebView.super_overScrollBy(int,int,int,int,int,int,int,int,boolean)');
        return com_tencent_xweb_WebView_clz_method_super_overScrollBy_uoug.call(this, v0, v1, v2, v3, v4, v5, v6, v7, v8);
    };
    var com_tencent_xweb_WebView_clz_method_getBitmap_tvk9 = com_tencent_xweb_WebView_clz.getBitmap.overload();
    com_tencent_xweb_WebView_clz_method_getBitmap_tvk9.implementation = function() {
        printStacks('public android.graphics.Bitmap com.tencent.xweb.WebView.getBitmap()');
        return com_tencent_xweb_WebView_clz_method_getBitmap_tvk9.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_reportLoadByReason_p0y7 = com_tencent_xweb_WebView_clz.reportLoadByReason.overload();
    com_tencent_xweb_WebView_clz_method_reportLoadByReason_p0y7.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.reportLoadByReason()');
        com_tencent_xweb_WebView_clz_method_reportLoadByReason_p0y7.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_isXWalk_ddeu = com_tencent_xweb_WebView_clz.isXWalk.overload();
    com_tencent_xweb_WebView_clz_method_isXWalk_ddeu.implementation = function() {
        printStacks('public static boolean com.tencent.xweb.WebView.isXWalk()');
        return com_tencent_xweb_WebView_clz_method_isXWalk_ddeu.call(com_tencent_xweb_WebView_clz);
    };
    var com_tencent_xweb_WebView_clz_method_getCookieSyncManager_1a2i = com_tencent_xweb_WebView_clz.getCookieSyncManager.overload();
    com_tencent_xweb_WebView_clz_method_getCookieSyncManager_1a2i.implementation = function() {
        printStacks('public com.tencent.xweb.internal.CookieInternal$ICookieSyncManagerInternal com.tencent.xweb.WebView.getCookieSyncManager()');
        return com_tencent_xweb_WebView_clz_method_getCookieSyncManager_1a2i.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_getUrl_kh9d = com_tencent_xweb_WebView_clz.getUrl.overload();
    com_tencent_xweb_WebView_clz_method_getUrl_kh9d.implementation = function() {
        printStacks('public java.lang.String com.tencent.xweb.WebView.getUrl()');
        return com_tencent_xweb_WebView_clz_method_getUrl_kh9d.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_onResume_69dq = com_tencent_xweb_WebView_clz.onResume.overload();
    com_tencent_xweb_WebView_clz_method_onResume_69dq.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.onResume()');
        com_tencent_xweb_WebView_clz_method_onResume_69dq.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_getPreferedWebviewType_pf6w = com_tencent_xweb_WebView_clz.getPreferedWebviewType.overload('android.content.Context', 'java.lang.String');
    com_tencent_xweb_WebView_clz_method_getPreferedWebviewType_pf6w.implementation = function(v0, v1) {
        printStacks('public static com.tencent.xweb.WebView$c com.tencent.xweb.WebView.getPreferedWebviewType(android.content.Context,java.lang.String)');
        return com_tencent_xweb_WebView_clz_method_getPreferedWebviewType_pf6w.call(com_tencent_xweb_WebView_clz, v0, v1);
    };
    var com_tencent_xweb_WebView_clz_method_goForward_ni5i = com_tencent_xweb_WebView_clz.goForward.overload();
    com_tencent_xweb_WebView_clz_method_goForward_ni5i.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.goForward()');
        com_tencent_xweb_WebView_clz_method_goForward_ni5i.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_getUsingTbsCoreVersion_sybc = com_tencent_xweb_WebView_clz.getUsingTbsCoreVersion.overload('android.content.Context');
    com_tencent_xweb_WebView_clz_method_getUsingTbsCoreVersion_sybc.implementation = function(v0) {
        printStacks('public static int com.tencent.xweb.WebView.getUsingTbsCoreVersion(android.content.Context)');
        return com_tencent_xweb_WebView_clz_method_getUsingTbsCoreVersion_sybc.call(com_tencent_xweb_WebView_clz, v0);
    };
    var com_tencent_xweb_WebView_clz_method_stopLoading_948c = com_tencent_xweb_WebView_clz.stopLoading.overload();
    com_tencent_xweb_WebView_clz_method_stopLoading_948c.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.stopLoading()');
        com_tencent_xweb_WebView_clz_method_stopLoading_948c.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_getScrollHeight_jmqj = com_tencent_xweb_WebView_clz.getScrollHeight.overload();
    com_tencent_xweb_WebView_clz_method_getScrollHeight_jmqj.implementation = function() {
        printStacks('public int com.tencent.xweb.WebView.getScrollHeight()');
        return com_tencent_xweb_WebView_clz_method_getScrollHeight_jmqj.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_canGoForward_wgla = com_tencent_xweb_WebView_clz.canGoForward.overload();
    com_tencent_xweb_WebView_clz_method_canGoForward_wgla.implementation = function() {
        printStacks('public boolean com.tencent.xweb.WebView.canGoForward()');
        return com_tencent_xweb_WebView_clz_method_canGoForward_wgla.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_zoomOut_ibc2 = com_tencent_xweb_WebView_clz.zoomOut.overload();
    com_tencent_xweb_WebView_clz_method_zoomOut_ibc2.implementation = function() {
        printStacks('public boolean com.tencent.xweb.WebView.zoomOut()');
        return com_tencent_xweb_WebView_clz_method_zoomOut_ibc2.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_drawCanvas_8x92 = com_tencent_xweb_WebView_clz.drawCanvas.overload('android.graphics.Canvas');
    com_tencent_xweb_WebView_clz_method_drawCanvas_8x92.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.drawCanvas(android.graphics.Canvas)');
        com_tencent_xweb_WebView_clz_method_drawCanvas_8x92.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_onWebViewScrollChanged_c1gp = com_tencent_xweb_WebView_clz.onWebViewScrollChanged.overload('int', 'int', 'int', 'int');
    com_tencent_xweb_WebView_clz_method_onWebViewScrollChanged_c1gp.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.xweb.WebView.onWebViewScrollChanged(int,int,int,int)');
        com_tencent_xweb_WebView_clz_method_onWebViewScrollChanged_c1gp.call(this, v0, v1, v2, v3);
    };
    var com_tencent_xweb_WebView_clz_method_getWebScrollX_1834 = com_tencent_xweb_WebView_clz.getWebScrollX.overload();
    com_tencent_xweb_WebView_clz_method_getWebScrollX_1834.implementation = function() {
        printStacks('public int com.tencent.xweb.WebView.getWebScrollX()');
        return com_tencent_xweb_WebView_clz_method_getWebScrollX_1834.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_canGoBack_g58l = com_tencent_xweb_WebView_clz.canGoBack.overload();
    com_tencent_xweb_WebView_clz_method_canGoBack_g58l.implementation = function() {
        printStacks('public boolean com.tencent.xweb.WebView.canGoBack()');
        return com_tencent_xweb_WebView_clz_method_canGoBack_g58l.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_setX5Interface_2z86 = com_tencent_xweb_WebView_clz.setX5Interface.overload('com.tencent.xweb.x5.sdk.c');
    com_tencent_xweb_WebView_clz_method_setX5Interface_2z86.implementation = function(v0) {
        printStacks('public static void com.tencent.xweb.WebView.setX5Interface(com.tencent.xweb.x5.sdk.c)');
        com_tencent_xweb_WebView_clz_method_setX5Interface_2z86.call(com_tencent_xweb_WebView_clz, v0);
    };
    var com_tencent_xweb_WebView_clz_method_getWebCoreType_0w5t = com_tencent_xweb_WebView_clz.getWebCoreType.overload();
    com_tencent_xweb_WebView_clz_method_getWebCoreType_0w5t.implementation = function() {
        printStacks('public com.tencent.xweb.WebView$c com.tencent.xweb.WebView.getWebCoreType()');
        return com_tencent_xweb_WebView_clz_method_getWebCoreType_0w5t.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_setA8keyReason_cedp = com_tencent_xweb_WebView_clz.setA8keyReason.overload('int');
    com_tencent_xweb_WebView_clz_method_setA8keyReason_cedp.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setA8keyReason(int)');
        com_tencent_xweb_WebView_clz_method_setA8keyReason_cedp.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_getImageBitmapToFile_sjtn = com_tencent_xweb_WebView_clz.getImageBitmapToFile.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'com.tencent.xweb.i');
    com_tencent_xweb_WebView_clz_method_getImageBitmapToFile_sjtn.implementation = function(v0, v1, v2, v3) {
        printStacks('public boolean com.tencent.xweb.WebView.getImageBitmapToFile(java.lang.String,java.lang.String,java.lang.String,com.tencent.xweb.i)');
        return com_tencent_xweb_WebView_clz_method_getImageBitmapToFile_sjtn.call(this, v0, v1, v2, v3);
    };
    var com_tencent_xweb_WebView_clz_method_isSys_u5k2 = com_tencent_xweb_WebView_clz.isSys.overload();
    com_tencent_xweb_WebView_clz_method_isSys_u5k2.implementation = function() {
        printStacks('public static boolean com.tencent.xweb.WebView.isSys()');
        return com_tencent_xweb_WebView_clz_method_isSys_u5k2.call(com_tencent_xweb_WebView_clz);
    };
    var com_tencent_xweb_WebView_clz_method_getCurWebType_37nr = com_tencent_xweb_WebView_clz.getCurWebType.overload();
    com_tencent_xweb_WebView_clz_method_getCurWebType_37nr.implementation = function() {
        printStacks('public static com.tencent.xweb.WebView$c com.tencent.xweb.WebView.getCurWebType()');
        return com_tencent_xweb_WebView_clz_method_getCurWebType_37nr.call(com_tencent_xweb_WebView_clz);
    };
    var com_tencent_xweb_WebView_clz_method_setBackgroundColor_bgv7 = com_tencent_xweb_WebView_clz.setBackgroundColor.overload('int');
    com_tencent_xweb_WebView_clz_method_setBackgroundColor_bgv7.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setBackgroundColor(int)');
        com_tencent_xweb_WebView_clz_method_setBackgroundColor_bgv7.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_getAbstractInfo_2lg8 = com_tencent_xweb_WebView_clz.getAbstractInfo.overload();
    com_tencent_xweb_WebView_clz_method_getAbstractInfo_2lg8.implementation = function() {
        printStacks('public java.lang.String com.tencent.xweb.WebView.getAbstractInfo()');
        return com_tencent_xweb_WebView_clz_method_getAbstractInfo_2lg8.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_getX5WebViewExtension_te1m = com_tencent_xweb_WebView_clz.getX5WebViewExtension.overload();
    com_tencent_xweb_WebView_clz_method_getX5WebViewExtension_te1m.implementation = function() {
        printStacks('public java.lang.Object com.tencent.xweb.WebView.getX5WebViewExtension()');
        return com_tencent_xweb_WebView_clz_method_getX5WebViewExtension_te1m.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_super_onOverScrolled_c1db = com_tencent_xweb_WebView_clz.super_onOverScrolled.overload('int', 'int', 'boolean', 'boolean');
    com_tencent_xweb_WebView_clz_method_super_onOverScrolled_c1db.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.xweb.WebView.super_onOverScrolled(int,int,boolean,boolean)');
        com_tencent_xweb_WebView_clz_method_super_onOverScrolled_c1db.call(this, v0, v1, v2, v3);
    };
    var com_tencent_xweb_WebView_clz_method_setWebViewClientExtension_ok1m = com_tencent_xweb_WebView_clz.setWebViewClientExtension.overload('com.tencent.xweb.x5.export.external.extension.proxy.a');
    com_tencent_xweb_WebView_clz_method_setWebViewClientExtension_ok1m.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setWebViewClientExtension(com.tencent.xweb.x5.export.external.extension.proxy.a)');
        com_tencent_xweb_WebView_clz_method_setWebViewClientExtension_ok1m.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_setVerticalScrollBarEnabled_51cn = com_tencent_xweb_WebView_clz.setVerticalScrollBarEnabled.overload('boolean');
    com_tencent_xweb_WebView_clz_method_setVerticalScrollBarEnabled_51cn.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setVerticalScrollBarEnabled(boolean)');
        com_tencent_xweb_WebView_clz_method_setVerticalScrollBarEnabled_51cn.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_setFocusable_ejzb = com_tencent_xweb_WebView_clz.setFocusable.overload('boolean');
    com_tencent_xweb_WebView_clz_method_setFocusable_ejzb.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setFocusable(boolean)');
        com_tencent_xweb_WebView_clz_method_setFocusable_ejzb.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_getWebScrollY_0c6o = com_tencent_xweb_WebView_clz.getWebScrollY.overload();
    com_tencent_xweb_WebView_clz_method_getWebScrollY_0c6o.implementation = function() {
        printStacks('public int com.tencent.xweb.WebView.getWebScrollY()');
        return com_tencent_xweb_WebView_clz_method_getWebScrollY_0c6o.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_onShow_wl8w = com_tencent_xweb_WebView_clz.onShow.overload();
    com_tencent_xweb_WebView_clz_method_onShow_wl8w.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.onShow()');
        com_tencent_xweb_WebView_clz_method_onShow_wl8w.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_super_onTouchEvent_ubjx = com_tencent_xweb_WebView_clz.super_onTouchEvent.overload('android.view.MotionEvent');
    com_tencent_xweb_WebView_clz_method_super_onTouchEvent_ubjx.implementation = function(v0) {
        printStacks('public boolean com.tencent.xweb.WebView.super_onTouchEvent(android.view.MotionEvent)');
        return com_tencent_xweb_WebView_clz_method_super_onTouchEvent_ubjx.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_clearView_mkyd = com_tencent_xweb_WebView_clz.clearView.overload();
    com_tencent_xweb_WebView_clz_method_clearView_mkyd.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.clearView()');
        com_tencent_xweb_WebView_clz_method_clearView_mkyd.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_supportFeature_gslt = com_tencent_xweb_WebView_clz.supportFeature.overload('int');
    com_tencent_xweb_WebView_clz_method_supportFeature_gslt.implementation = function(v0) {
        printStacks('public boolean com.tencent.xweb.WebView.supportFeature(int)');
        return com_tencent_xweb_WebView_clz_method_supportFeature_gslt.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_getTbsSDKVersion_r0qr = com_tencent_xweb_WebView_clz.getTbsSDKVersion.overload('android.content.Context');
    com_tencent_xweb_WebView_clz_method_getTbsSDKVersion_r0qr.implementation = function(v0) {
        printStacks('public static int com.tencent.xweb.WebView.getTbsSDKVersion(android.content.Context)');
        return com_tencent_xweb_WebView_clz_method_getTbsSDKVersion_r0qr.call(com_tencent_xweb_WebView_clz, v0);
    };
    var com_tencent_xweb_WebView_clz_method_hasInited_bmj6 = com_tencent_xweb_WebView_clz.hasInited.overload();
    com_tencent_xweb_WebView_clz_method_hasInited_bmj6.implementation = function() {
        printStacks('public static boolean com.tencent.xweb.WebView.hasInited()');
        return com_tencent_xweb_WebView_clz_method_hasInited_bmj6.call(com_tencent_xweb_WebView_clz);
    };
    var com_tencent_xweb_WebView_clz_method_super_onInterceptTouchEvent_hhwj = com_tencent_xweb_WebView_clz.super_onInterceptTouchEvent.overload('android.view.MotionEvent');
    com_tencent_xweb_WebView_clz_method_super_onInterceptTouchEvent_hhwj.implementation = function(v0) {
        printStacks('public boolean com.tencent.xweb.WebView.super_onInterceptTouchEvent(android.view.MotionEvent)');
        return com_tencent_xweb_WebView_clz_method_super_onInterceptTouchEvent_hhwj.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_setDownloadListener_6d2l = com_tencent_xweb_WebView_clz.setDownloadListener.overload('android.webkit.DownloadListener');
    com_tencent_xweb_WebView_clz_method_setDownloadListener_6d2l.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setDownloadListener(android.webkit.DownloadListener)');
        com_tencent_xweb_WebView_clz_method_setDownloadListener_6d2l.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_loadUrl_w2a9 = com_tencent_xweb_WebView_clz.loadUrl.overload('java.lang.String');
    com_tencent_xweb_WebView_clz_method_loadUrl_w2a9.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.loadUrl(java.lang.String)');
        com_tencent_xweb_WebView_clz_method_loadUrl_w2a9.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_manualStartFrameCostProfiler_vvjf = com_tencent_xweb_WebView_clz.manualStartFrameCostProfiler.overload();
    com_tencent_xweb_WebView_clz_method_manualStartFrameCostProfiler_vvjf.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.manualStartFrameCostProfiler()');
        com_tencent_xweb_WebView_clz_method_manualStartFrameCostProfiler_vvjf.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_manualStopFrameCostProfiler_5dak = com_tencent_xweb_WebView_clz.manualStopFrameCostProfiler.overload('com.tencent.xweb.j');
    com_tencent_xweb_WebView_clz_method_manualStopFrameCostProfiler_5dak.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.manualStopFrameCostProfiler(com.tencent.xweb.j)');
        com_tencent_xweb_WebView_clz_method_manualStopFrameCostProfiler_5dak.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_smoothScroll_hehn = com_tencent_xweb_WebView_clz.smoothScroll.overload('int', 'int', 'long');
    com_tencent_xweb_WebView_clz_method_smoothScroll_hehn.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.xweb.WebView.smoothScroll(int,int,long)');
        com_tencent_xweb_WebView_clz_method_smoothScroll_hehn.call(this, v0, v1, v2);
    };
    var com_tencent_xweb_WebView_clz_method__enablePlatformNotifications_46dd = com_tencent_xweb_WebView_clz._enablePlatformNotifications.overload();
    com_tencent_xweb_WebView_clz_method__enablePlatformNotifications_46dd.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView._enablePlatformNotifications()');
        com_tencent_xweb_WebView_clz_method__enablePlatformNotifications_46dd.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_onHide_ajd3 = com_tencent_xweb_WebView_clz.onHide.overload();
    com_tencent_xweb_WebView_clz_method_onHide_ajd3.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.onHide()');
        com_tencent_xweb_WebView_clz_method_onHide_ajd3.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_hasEnteredFullscreen_iien = com_tencent_xweb_WebView_clz.hasEnteredFullscreen.overload();
    com_tencent_xweb_WebView_clz_method_hasEnteredFullscreen_iien.implementation = function() {
        printStacks('public boolean com.tencent.xweb.WebView.hasEnteredFullscreen()');
        return com_tencent_xweb_WebView_clz_method_hasEnteredFullscreen_iien.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_setOnLongClickListener_2mdt = com_tencent_xweb_WebView_clz.setOnLongClickListener.overload('android.view.View$OnLongClickListener');
    com_tencent_xweb_WebView_clz_method_setOnLongClickListener_2mdt.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setOnLongClickListener(android.view.View$OnLongClickListener)');
        com_tencent_xweb_WebView_clz_method_setOnLongClickListener_2mdt.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_getTbsCoreVersion_4riv = com_tencent_xweb_WebView_clz.getTbsCoreVersion.overload('android.content.Context');
    com_tencent_xweb_WebView_clz_method_getTbsCoreVersion_4riv.implementation = function(v0) {
        printStacks('public static int com.tencent.xweb.WebView.getTbsCoreVersion(android.content.Context)');
        return com_tencent_xweb_WebView_clz_method_getTbsCoreVersion_4riv.call(com_tencent_xweb_WebView_clz, v0);
    };
    var com_tencent_xweb_WebView_clz_method_isOverScrollStart_g7oy = com_tencent_xweb_WebView_clz.isOverScrollStart.overload();
    com_tencent_xweb_WebView_clz_method_isOverScrollStart_g7oy.implementation = function() {
        printStacks('public boolean com.tencent.xweb.WebView.isOverScrollStart()');
        return com_tencent_xweb_WebView_clz_method_isOverScrollStart_g7oy.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_loadUrl_w7ge = com_tencent_xweb_WebView_clz.loadUrl.overload('java.lang.String', 'java.util.Map');
    com_tencent_xweb_WebView_clz_method_loadUrl_w7ge.implementation = function(v0, v1) {
        printStacks('public void com.tencent.xweb.WebView.loadUrl(java.lang.String,java.util.Map)');
        com_tencent_xweb_WebView_clz_method_loadUrl_w7ge.call(this, v0, v1);
    };
    var com_tencent_xweb_WebView_clz_method_onPause_ryoa = com_tencent_xweb_WebView_clz.onPause.overload();
    com_tencent_xweb_WebView_clz_method_onPause_ryoa.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.onPause()');
        com_tencent_xweb_WebView_clz_method_onPause_ryoa.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_getContentHeight_wcr6 = com_tencent_xweb_WebView_clz.getContentHeight.overload();
    com_tencent_xweb_WebView_clz_method_getContentHeight_wcr6.implementation = function() {
        printStacks('public int com.tencent.xweb.WebView.getContentHeight()');
        return com_tencent_xweb_WebView_clz_method_getContentHeight_wcr6.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_onVisibilityChanged_vbs3 = com_tencent_xweb_WebView_clz.onVisibilityChanged.overload('android.view.View', 'int');
    com_tencent_xweb_WebView_clz_method_onVisibilityChanged_vbs3.implementation = function(v0, v1) {
        printStacks('protected void com.tencent.xweb.WebView.onVisibilityChanged(android.view.View,int)');
        com_tencent_xweb_WebView_clz_method_onVisibilityChanged_vbs3.call(this, v0, v1);
    };
    var com_tencent_xweb_WebView_clz_method_findNext_tmgl = com_tencent_xweb_WebView_clz.findNext.overload('boolean');
    com_tencent_xweb_WebView_clz_method_findNext_tmgl.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.findNext(boolean)');
        com_tencent_xweb_WebView_clz_method_findNext_tmgl.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_gq_vj5j = com_tencent_xweb_WebView_clz.gq.overload('android.view.View');
    com_tencent_xweb_WebView_clz_method_gq_vj5j.implementation = function(v0) {
        printStacks('private java.util.List com.tencent.xweb.WebView.gq(android.view.View)');
        return com_tencent_xweb_WebView_clz_method_gq_vj5j.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_a_lqul = com_tencent_xweb_WebView_clz.a.overload('com.tencent.xweb.WebView$c');
    com_tencent_xweb_WebView_clz_method_a_lqul.implementation = function(v0) {
        printStacks('private void com.tencent.xweb.WebView.a(com.tencent.xweb.WebView$c)');
        com_tencent_xweb_WebView_clz_method_a_lqul.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_super_dispatchTouchEvent_j9bw = com_tencent_xweb_WebView_clz.super_dispatchTouchEvent.overload('android.view.MotionEvent');
    com_tencent_xweb_WebView_clz_method_super_dispatchTouchEvent_j9bw.implementation = function(v0) {
        printStacks('public boolean com.tencent.xweb.WebView.super_dispatchTouchEvent(android.view.MotionEvent)');
        return com_tencent_xweb_WebView_clz_method_super_dispatchTouchEvent_j9bw.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_clearMatches_3lsd = com_tencent_xweb_WebView_clz.clearMatches.overload();
    com_tencent_xweb_WebView_clz_method_clearMatches_3lsd.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.clearMatches()');
        com_tencent_xweb_WebView_clz_method_clearMatches_3lsd.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_isSupportExtendPluginForAppbrand_e2pl = com_tencent_xweb_WebView_clz.isSupportExtendPluginForAppbrand.overload();
    com_tencent_xweb_WebView_clz_method_isSupportExtendPluginForAppbrand_e2pl.implementation = function() {
        printStacks('public boolean com.tencent.xweb.WebView.isSupportExtendPluginForAppbrand()');
        return com_tencent_xweb_WebView_clz_method_isSupportExtendPluginForAppbrand_e2pl.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_clearSslPreferences_hfsr = com_tencent_xweb_WebView_clz.clearSslPreferences.overload();
    com_tencent_xweb_WebView_clz_method_clearSslPreferences_hfsr.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.clearSslPreferences()');
        com_tencent_xweb_WebView_clz_method_clearSslPreferences_hfsr.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_getCurWebChromeClient_h8fc = com_tencent_xweb_WebView_clz.getCurWebChromeClient.overload();
    com_tencent_xweb_WebView_clz_method_getCurWebChromeClient_h8fc.implementation = function() {
        printStacks('public com.tencent.xweb.t com.tencent.xweb.WebView.getCurWebChromeClient()');
        return com_tencent_xweb_WebView_clz_method_getCurWebChromeClient_h8fc.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_getDefalutOpProvider_w0lg = com_tencent_xweb_WebView_clz.getDefalutOpProvider.overload();
    com_tencent_xweb_WebView_clz_method_getDefalutOpProvider_w0lg.implementation = function() {
        printStacks('public com.tencent.xweb.internal.e com.tencent.xweb.WebView.getDefalutOpProvider()');
        return com_tencent_xweb_WebView_clz_method_getDefalutOpProvider_w0lg.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_overlayHorizontalScrollbar_7hot = com_tencent_xweb_WebView_clz.overlayHorizontalScrollbar.overload();
    com_tencent_xweb_WebView_clz_method_overlayHorizontalScrollbar_7hot.implementation = function() {
        printStacks('public boolean com.tencent.xweb.WebView.overlayHorizontalScrollbar()');
        return com_tencent_xweb_WebView_clz_method_overlayHorizontalScrollbar_7hot.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_captureBitmap_y96m = com_tencent_xweb_WebView_clz.captureBitmap.overload('com.tencent.xweb.internal.IWebView$a');
    com_tencent_xweb_WebView_clz_method_captureBitmap_y96m.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.captureBitmap(com.tencent.xweb.internal.IWebView$a)');
        com_tencent_xweb_WebView_clz_method_captureBitmap_y96m.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_savePage_iom9 = com_tencent_xweb_WebView_clz.savePage.overload('java.lang.String', 'java.lang.String', 'int');
    com_tencent_xweb_WebView_clz_method_savePage_iom9.implementation = function(v0, v1, v2) {
        printStacks('public boolean com.tencent.xweb.WebView.savePage(java.lang.String,java.lang.String,int)');
        return com_tencent_xweb_WebView_clz_method_savePage_iom9.call(this, v0, v1, v2);
    };
    var com_tencent_xweb_WebView_clz_method_setBottomHeight_f4r5 = com_tencent_xweb_WebView_clz.setBottomHeight.overload('int');
    com_tencent_xweb_WebView_clz_method_setBottomHeight_f4r5.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setBottomHeight(int)');
        com_tencent_xweb_WebView_clz_method_setBottomHeight_f4r5.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_getScale_0tqd = com_tencent_xweb_WebView_clz.getScale.overload();
    com_tencent_xweb_WebView_clz_method_getScale_0tqd.implementation = function() {
        printStacks('public float com.tencent.xweb.WebView.getScale()');
        return com_tencent_xweb_WebView_clz_method_getScale_0tqd.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_reload_ec1i = com_tencent_xweb_WebView_clz.reload.overload();
    com_tencent_xweb_WebView_clz_method_reload_ec1i.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.reload()');
        com_tencent_xweb_WebView_clz_method_reload_ec1i.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_dispatchDraw_6n4b = com_tencent_xweb_WebView_clz.dispatchDraw.overload('android.graphics.Canvas');
    com_tencent_xweb_WebView_clz_method_dispatchDraw_6n4b.implementation = function(v0) {
        printStacks('protected void com.tencent.xweb.WebView.dispatchDraw(android.graphics.Canvas)');
        com_tencent_xweb_WebView_clz_method_dispatchDraw_6n4b.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_getCrashExtraMessage_l40h = com_tencent_xweb_WebView_clz.getCrashExtraMessage.overload('android.content.Context');
    com_tencent_xweb_WebView_clz_method_getCrashExtraMessage_l40h.implementation = function(v0) {
        printStacks('public static java.lang.String com.tencent.xweb.WebView.getCrashExtraMessage(android.content.Context)');
        return com_tencent_xweb_WebView_clz_method_getCrashExtraMessage_l40h.call(com_tencent_xweb_WebView_clz, v0);
    };
    var com_tencent_xweb_WebView_clz_method_getInstalledTbsCoreVersion_q3qk = com_tencent_xweb_WebView_clz.getInstalledTbsCoreVersion.overload('android.content.Context');
    com_tencent_xweb_WebView_clz_method_getInstalledTbsCoreVersion_q3qk.implementation = function(v0) {
        printStacks('public static int com.tencent.xweb.WebView.getInstalledTbsCoreVersion(android.content.Context)');
        return com_tencent_xweb_WebView_clz_method_getInstalledTbsCoreVersion_q3qk.call(com_tencent_xweb_WebView_clz, v0);
    };
    var com_tencent_xweb_WebView_clz_method_setFindListener_lbau = com_tencent_xweb_WebView_clz.setFindListener.overload('android.webkit.WebView$FindListener');
    com_tencent_xweb_WebView_clz_method_setFindListener_lbau.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setFindListener(android.webkit.WebView$FindListener)');
        com_tencent_xweb_WebView_clz_method_setFindListener_lbau.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_isXWalkKernel_8xw9 = com_tencent_xweb_WebView_clz.isXWalkKernel.overload();
    com_tencent_xweb_WebView_clz_method_isXWalkKernel_8xw9.implementation = function() {
        printStacks('public boolean com.tencent.xweb.WebView.isXWalkKernel()');
        return com_tencent_xweb_WebView_clz_method_isXWalkKernel_8xw9.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_a_kc97 = com_tencent_xweb_WebView_clz.a.overload('android.content.Context', 'com.tencent.xweb.WebView$c', 'com.tencent.xweb.WebView$PreInitCallback', 'boolean', 'boolean');
    com_tencent_xweb_WebView_clz_method_a_kc97.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('private static synchronized boolean com.tencent.xweb.WebView.a(android.content.Context,com.tencent.xweb.WebView$c,com.tencent.xweb.WebView$PreInitCallback,boolean,boolean)');
        return com_tencent_xweb_WebView_clz_method_a_kc97.call(com_tencent_xweb_WebView_clz, v0, v1, v2, v3, v4);
    };
    var com_tencent_xweb_WebView_clz_method_setWebViewCallbackClient_kbjg = com_tencent_xweb_WebView_clz.setWebViewCallbackClient.overload('com.tencent.xweb.x');
    com_tencent_xweb_WebView_clz_method_setWebViewCallbackClient_kbjg.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setWebViewCallbackClient(com.tencent.xweb.x)');
        com_tencent_xweb_WebView_clz_method_setWebViewCallbackClient_kbjg.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_destroy_r87y = com_tencent_xweb_WebView_clz.destroy.overload();
    com_tencent_xweb_WebView_clz_method_destroy_r87y.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.destroy()');
        com_tencent_xweb_WebView_clz_method_destroy_r87y.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_getCurWebviewClient_robn = com_tencent_xweb_WebView_clz.getCurWebviewClient.overload();
    com_tencent_xweb_WebView_clz_method_getCurWebviewClient_robn.implementation = function() {
        printStacks('public com.tencent.xweb.y com.tencent.xweb.WebView.getCurWebviewClient()');
        return com_tencent_xweb_WebView_clz_method_getCurWebviewClient_robn.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_evaluateJavascript_r92l = com_tencent_xweb_WebView_clz.evaluateJavascript.overload('java.lang.String', 'android.webkit.ValueCallback');
    com_tencent_xweb_WebView_clz_method_evaluateJavascript_r92l.implementation = function(v0, v1) {
        printStacks('public void com.tencent.xweb.WebView.evaluateJavascript(java.lang.String,android.webkit.ValueCallback)');
        com_tencent_xweb_WebView_clz_method_evaluateJavascript_r92l.call(this, v0, v1);
    };
    var com_tencent_xweb_WebView_clz_method_isX5_6j45 = com_tencent_xweb_WebView_clz.isX5.overload();
    com_tencent_xweb_WebView_clz_method_isX5_6j45.implementation = function() {
        printStacks('public static boolean com.tencent.xweb.WebView.isX5()');
        return com_tencent_xweb_WebView_clz_method_isX5_6j45.call(com_tencent_xweb_WebView_clz);
    };
    var com_tencent_xweb_WebView_clz_method_invokeMiscMethod_byl2 = com_tencent_xweb_WebView_clz.invokeMiscMethod.overload('java.lang.String', 'android.os.Bundle');
    com_tencent_xweb_WebView_clz_method_invokeMiscMethod_byl2.implementation = function(v0, v1) {
        printStacks('public android.os.Bundle com.tencent.xweb.WebView.invokeMiscMethod(java.lang.String,android.os.Bundle)');
        return com_tencent_xweb_WebView_clz_method_invokeMiscMethod_byl2.call(this, v0, v1);
    };
    var com_tencent_xweb_WebView_clz_method_super_onScrollChanged_9dw2 = com_tencent_xweb_WebView_clz.super_onScrollChanged.overload('int', 'int', 'int', 'int');
    com_tencent_xweb_WebView_clz_method_super_onScrollChanged_9dw2.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.xweb.WebView.super_onScrollChanged(int,int,int,int)');
        com_tencent_xweb_WebView_clz_method_super_onScrollChanged_9dw2.call(this, v0, v1, v2, v3);
    };
    var com_tencent_xweb_WebView_clz_method_setWebChromeClient_9pfv = com_tencent_xweb_WebView_clz.setWebChromeClient.overload('com.tencent.xweb.t');
    com_tencent_xweb_WebView_clz_method_setWebChromeClient_9pfv.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setWebChromeClient(com.tencent.xweb.t)');
        com_tencent_xweb_WebView_clz_method_setWebChromeClient_9pfv.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_getView_ujcd = com_tencent_xweb_WebView_clz.getView.overload();
    com_tencent_xweb_WebView_clz_method_getView_ujcd.implementation = function() {
        printStacks('public android.view.View com.tencent.xweb.WebView.getView()');
        return com_tencent_xweb_WebView_clz_method_getView_ujcd.call(this);
    };
    var com_tencent_xweb_WebView_clz_method__initWebviewCore_a4uf = com_tencent_xweb_WebView_clz._initWebviewCore.overload('android.content.Context', 'com.tencent.xweb.WebView$c', 'com.tencent.xweb.WebView$PreInitCallback', 'boolean');
    com_tencent_xweb_WebView_clz_method__initWebviewCore_a4uf.implementation = function(v0, v1, v2, v3) {
        printStacks('public static synchronized boolean com.tencent.xweb.WebView._initWebviewCore(android.content.Context,com.tencent.xweb.WebView$c,com.tencent.xweb.WebView$PreInitCallback,boolean)');
        return com_tencent_xweb_WebView_clz_method__initWebviewCore_a4uf.call(com_tencent_xweb_WebView_clz, v0, v1, v2, v3);
    };
    var com_tencent_xweb_WebView_clz_method_getTopView_bsje = com_tencent_xweb_WebView_clz.getTopView.overload();
    com_tencent_xweb_WebView_clz_method_getTopView_bsje.implementation = function() {
        printStacks('public android.view.ViewGroup com.tencent.xweb.WebView.getTopView()');
        return com_tencent_xweb_WebView_clz_method_getTopView_bsje.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_getPreferedWebviewType_26tz = com_tencent_xweb_WebView_clz.getPreferedWebviewType.overload('android.content.Context', 'com.tencent.xweb.WebView$c', 'java.lang.String');
    com_tencent_xweb_WebView_clz_method_getPreferedWebviewType_26tz.implementation = function(v0, v1, v2) {
        printStacks('public static com.tencent.xweb.WebView$c com.tencent.xweb.WebView.getPreferedWebviewType(android.content.Context,com.tencent.xweb.WebView$c,java.lang.String)');
        return com_tencent_xweb_WebView_clz_method_getPreferedWebviewType_26tz.call(com_tencent_xweb_WebView_clz, v0, v1, v2);
    };
    var com_tencent_xweb_WebView_clz_method_isSysKernel_fnrh = com_tencent_xweb_WebView_clz.isSysKernel.overload();
    com_tencent_xweb_WebView_clz_method_isSysKernel_fnrh.implementation = function() {
        printStacks('public boolean com.tencent.xweb.WebView.isSysKernel()');
        return com_tencent_xweb_WebView_clz_method_isSysKernel_fnrh.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_loadDataWithBaseURL_2qll = com_tencent_xweb_WebView_clz.loadDataWithBaseURL.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_xweb_WebView_clz_method_loadDataWithBaseURL_2qll.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('public void com.tencent.xweb.WebView.loadDataWithBaseURL(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)');
        com_tencent_xweb_WebView_clz_method_loadDataWithBaseURL_2qll.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_xweb_WebView_clz_method_getSettings_j7nq = com_tencent_xweb_WebView_clz.getSettings.overload();
    com_tencent_xweb_WebView_clz_method_getSettings_j7nq.implementation = function() {
        printStacks('public com.tencent.xweb.v com.tencent.xweb.WebView.getSettings()');
        return com_tencent_xweb_WebView_clz_method_getSettings_j7nq.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_findAllAsync_rgxm = com_tencent_xweb_WebView_clz.findAllAsync.overload('java.lang.String');
    com_tencent_xweb_WebView_clz_method_findAllAsync_rgxm.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.findAllAsync(java.lang.String)');
        com_tencent_xweb_WebView_clz_method_findAllAsync_rgxm.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_getWebViewUI_0gej = com_tencent_xweb_WebView_clz.getWebViewUI.overload();
    com_tencent_xweb_WebView_clz_method_getWebViewUI_0gej.implementation = function() {
        printStacks('public android.view.View com.tencent.xweb.WebView.getWebViewUI()');
        return com_tencent_xweb_WebView_clz_method_getWebViewUI_0gej.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_setWebViewClient_yq95 = com_tencent_xweb_WebView_clz.setWebViewClient.overload('com.tencent.xweb.y');
    com_tencent_xweb_WebView_clz_method_setWebViewClient_yq95.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setWebViewClient(com.tencent.xweb.y)');
        com_tencent_xweb_WebView_clz_method_setWebViewClient_yq95.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_zoomIn_vlrq = com_tencent_xweb_WebView_clz.zoomIn.overload();
    com_tencent_xweb_WebView_clz_method_zoomIn_vlrq.implementation = function() {
        printStacks('public boolean com.tencent.xweb.WebView.zoomIn()');
        return com_tencent_xweb_WebView_clz_method_zoomIn_vlrq.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_setHorizontalScrollBarEnabled_31zm = com_tencent_xweb_WebView_clz.setHorizontalScrollBarEnabled.overload('boolean');
    com_tencent_xweb_WebView_clz_method_setHorizontalScrollBarEnabled_31zm.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setHorizontalScrollBarEnabled(boolean)');
        com_tencent_xweb_WebView_clz_method_setHorizontalScrollBarEnabled_31zm.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_getVersionInfo_opg6 = com_tencent_xweb_WebView_clz.getVersionInfo.overload();
    com_tencent_xweb_WebView_clz_method_getVersionInfo_opg6.implementation = function() {
        printStacks('public java.lang.String com.tencent.xweb.WebView.getVersionInfo()');
        return com_tencent_xweb_WebView_clz_method_getVersionInfo_opg6.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_setOnTouchListener_wiwn = com_tencent_xweb_WebView_clz.setOnTouchListener.overload('android.view.View$OnTouchListener');
    com_tencent_xweb_WebView_clz_method_setOnTouchListener_wiwn.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setOnTouchListener(android.view.View$OnTouchListener)');
        com_tencent_xweb_WebView_clz_method_setOnTouchListener_wiwn.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_loadData_g58c = com_tencent_xweb_WebView_clz.loadData.overload('java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_xweb_WebView_clz_method_loadData_g58c.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.xweb.WebView.loadData(java.lang.String,java.lang.String,java.lang.String)');
        com_tencent_xweb_WebView_clz_method_loadData_g58c.call(this, v0, v1, v2);
    };
    var com_tencent_xweb_WebView_clz_method_getVisibleTitleHeight_hbbu = com_tencent_xweb_WebView_clz.getVisibleTitleHeight.overload();
    com_tencent_xweb_WebView_clz_method_getVisibleTitleHeight_hbbu.implementation = function() {
        printStacks('public int com.tencent.xweb.WebView.getVisibleTitleHeight()');
        return com_tencent_xweb_WebView_clz_method_getVisibleTitleHeight_hbbu.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_super_computeScroll_juno = com_tencent_xweb_WebView_clz.super_computeScroll.overload();
    com_tencent_xweb_WebView_clz_method_super_computeScroll_juno.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.super_computeScroll()');
        com_tencent_xweb_WebView_clz_method_super_computeScroll_juno.call(this);
    };
    var com_tencent_xweb_WebView_clz_init_f6r9 = com_tencent_xweb_WebView_clz.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int');
    com_tencent_xweb_WebView_clz_init_f6r9.implementation = function(v0, v1, v2) {
        printStacks('public com.tencent.xweb.WebView(android.content.Context,android.util.AttributeSet,int)');
        return com_tencent_xweb_WebView_clz_init_f6r9.call(this, v0, v1, v2);
    };
    var com_tencent_xweb_WebView_clz_init_nbxn = com_tencent_xweb_WebView_clz.$init.overload('android.content.Context');
    com_tencent_xweb_WebView_clz_init_nbxn.implementation = function(v0) {
        printStacks('public com.tencent.xweb.WebView(android.content.Context)');
        return com_tencent_xweb_WebView_clz_init_nbxn.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_init_opgz = com_tencent_xweb_WebView_clz.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int', 'com.tencent.xweb.WebView$c');
    com_tencent_xweb_WebView_clz_init_opgz.implementation = function(v0, v1, v2, v3) {
        printStacks('public com.tencent.xweb.WebView(android.content.Context,android.util.AttributeSet,int,com.tencent.xweb.WebView$c)');
        return com_tencent_xweb_WebView_clz_init_opgz.call(this, v0, v1, v2, v3);
    };
    var com_tencent_xweb_WebView_clz_init_cz7n = com_tencent_xweb_WebView_clz.$init.overload('android.content.Context', 'android.util.AttributeSet');
    com_tencent_xweb_WebView_clz_init_cz7n.implementation = function(v0, v1) {
        printStacks('public com.tencent.xweb.WebView(android.content.Context,android.util.AttributeSet)');
        return com_tencent_xweb_WebView_clz_init_cz7n.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyPanel');
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_onSizeChanged_l9ok = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz.onSizeChanged.overload('int', 'int', 'int', 'int');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_onSizeChanged_l9ok.implementation = function(v0, v1, v2, v3) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyPanel.onSizeChanged(int,int,int,int)');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_onSizeChanged_l9ok.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_onPageSelected_bya8 = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz.onPageSelected.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_onPageSelected_bya8.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyPanel.onPageSelected(int)');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_onPageSelected_bya8.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_a_wkuz = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyPanel');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_a_wkuz.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyViewPager com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyPanel.a(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyPanel)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_a_wkuz.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_onMeasure_5jdk = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz.onMeasure.overload('int', 'int');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_onMeasure_5jdk.implementation = function(v0, v1) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyPanel.onMeasure(int,int)');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_onMeasure_5jdk.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_bou_6ujc = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz.bou.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_bou_6ujc.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyPanel.bou()');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_bou_6ujc.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_setVisibility_97yb = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz.setVisibility.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_setVisibility_97yb.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyPanel.setVisibility(int)');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_setVisibility_97yb.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_init_ya45 = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz.init.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_init_ya45.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyPanel.init()');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_init_ya45.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_setOnTextOperationListener_ch9o = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz.setOnTextOperationListener.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyPanel$a');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_setOnTextOperationListener_ch9o.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyPanel.setOnTextOperationListener(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyPanel$a)');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_setOnTextOperationListener_ch9o.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_getManager_x6ha = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz.getManager.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_getManager_x6ha.implementation = function() {
        printStacks('protected final com.tencent.mm.plugin.webview.ui.tools.widget.input.c com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyPanel.getManager()');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_getManager_x6ha.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_onPageScrollStateChanged_vkrk = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz.onPageScrollStateChanged.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_onPageScrollStateChanged_vkrk.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyPanel.onPageScrollStateChanged(int)');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_onPageScrollStateChanged_vkrk.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_onPageScrolled_q7qr = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz.onPageScrolled.overload('int', 'float', 'int');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_onPageScrolled_q7qr.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyPanel.onPageScrolled(int,float,int)');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_onPageScrolled_q7qr.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_boy_8fek = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz.boy.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_boy_8fek.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyPanel.boy()');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_method_boy_8fek.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_init_7zek = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz.$init.overload('android.content.Context', 'android.util.AttributeSet');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_init_7zek.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyPanel(android.content.Context,android.util.AttributeSet)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_init_7zek.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_init_pamb = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz.$init.overload('android.content.Context');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_init_pamb.implementation = function(v0) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyPanel(android.content.Context)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewSmileyPanel_clz_init_pamb.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_1_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$7$1');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_1_clz_method_a_ijj6 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_1_clz.a.overload('boolean', 'float', 'float', 'int', 'double', 'double');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_1_clz_method_a_ijj6.implementation = function(v0, v1, v2, v3, v4, v5) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1$7$1.a(boolean,float,float,int,double,double)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_1_clz_method_a_ijj6.call(this, v0, v1, v2, v3, v4, v5);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_1_clz_init_dgdo = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_1_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$7');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_1_clz_init_dgdo.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$7$1(com.tencent.mm.plugin.webview.stub.WebViewStubService$1$7)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_1_clz_init_dgdo.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$1');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_ax_2chz = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.ax.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_ax_2chz.implementation = function(v0) {
        printStacks('public final com.tencent.mm.plugin.webview.stub.b com.tencent.mm.plugin.webview.stub.WebViewStubService$1.ax(android.os.Bundle)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_ax_2chz.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWw_j5am = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWw.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWw_j5am.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWw()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWw_j5am.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_getLanguage_ho5w = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.getLanguage.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_getLanguage_ho5w.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.getLanguage()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_getLanguage_ho5w.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_qe_b1ul = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.qe.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_qe_b1ul.implementation = function(v0) {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.qe(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_qe_b1ul.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWu_kpun = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWu.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWu_kpun.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWu()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWu_kpun.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWt_5rze = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWt.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWt_5rze.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWt()');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWt_5rze.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QB_9xgt = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.QB.overload('int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QB_9xgt.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.QB(int)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QB_9xgt.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arL_hcyy = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.arL.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arL_hcyy.implementation = function(v0) {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.arL(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arL_hcyy.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWy_yg9f = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWy.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWy_yg9f.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWy()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWy_yg9f.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_F_tsx8 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.F.overload('long', 'java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_F_tsx8.implementation = function(v0, v1) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.F(long,java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_F_tsx8.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_io_0xo8 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.io.overload('int', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_io_0xo8.implementation = function(v0, v1) {
        printStacks('public final int com.tencent.mm.plugin.webview.stub.WebViewStubService$1.io(int,int)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_io_0xo8.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arP_60u6 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.arP.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arP_60u6.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.arP(java.lang.String)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arP_60u6.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWm_9ed1 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWm.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWm_9ed1.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWm()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWm_9ed1.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QG_7r69 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.QG.overload('int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QG_7r69.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.QG(int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QG_7r69.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_cq_6tnp = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.cq.overload('int', 'java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_cq_6tnp.implementation = function(v0, v1) {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.cq(int,java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_cq_6tnp.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_6qos = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.a.overload('android.os.Bundle', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_6qos.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.a(android.os.Bundle,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_6qos.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_3k92 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.a.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'int', 'int', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_3k92.implementation = function(v0, v1, v2, v3, v4, v5) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.a(java.lang.String:'+v0+',java.lang.String:'+v1+',java.lang.String:'+v2+',int,int,android.os.Bundle)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_3k92.call(this, v0, v1, v2, v3, v4, v5);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arO_siki = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.arO.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arO_siki.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.arO(java.lang.String:'+v0+')');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arO_siki.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_yT_rize = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.yT.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_yT_rize.implementation = function(v0) {
        printStacks('private static int com.tencent.mm.plugin.webview.stub.WebViewStubService$1.yT(java.lang.String:'+v0+')');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_yT_rize.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_ip_1ke2 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.ip.overload('int', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_ip_1ke2.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.ip(int,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_ip_1ke2.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWn_n8gg = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWn.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWn_n8gg.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWn()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWn_n8gg.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_w_3omf = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.w.overload('int', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_w_3omf.implementation = function(v0, v1) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.w(int,android.os.Bundle)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_w_3omf.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_aw_ri9a = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.aw.overload('int', 'int', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_aw_ri9a.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.aw(int,int,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_aw_ri9a.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWp_gfxj = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWp.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWp_gfxj.implementation = function() {
        printStacks('public final java.util.Map com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWp()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWp_gfxj.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_bX_4a0i = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.bX.overload('java.lang.String', 'boolean');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_bX_4a0i.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.bX(java.lang.String,boolean)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_bX_4a0i.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWv_ahym = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWv.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWv_ahym.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWv()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWv_ahym.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_jM_pv2c = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.jM.overload('java.lang.String', 'java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_jM_pv2c.implementation = function(v0, v1) {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.jM(java.lang.String'+v0+',java.lang.String:'+v1+')');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_jM_pv2c.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_n_7xa8 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.n.overload('java.lang.String', 'boolean', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_n_7xa8.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.n(java.lang.String:'+v0+',boolean,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_n_7xa8.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_aqy_b1zm = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.aqy.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_aqy_b1zm.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.aqy()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_aqy_b1zm.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_M_vxpx = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.M.overload('int', 'java.lang.String', 'java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_M_vxpx.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.M(int,java.lang.String,java.lang.String)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_M_vxpx.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_eK_pfiw = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.eK.overload('java.lang.String', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_eK_pfiw.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.eK(java.lang.String,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_eK_pfiw.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_qv_g5bu = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.qv.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_qv_g5bu.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.qv(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_qv_g5bu.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_v_ye8l = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.v.overload('int', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_v_ye8l.implementation = function(v0, v1) {
        printStacks('public final android.os.Bundle com.tencent.mm.plugin.webview.stub.WebViewStubService$1.v(int,android.os.Bundle)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_v_ye8l.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arG_enrh = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.arG.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arG_enrh.implementation = function(v0) {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.arG(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arG_enrh.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_2uzp = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.a.overload('java.lang.String', '[I', 'int', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_2uzp.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.a(java.lang.String,int[],int,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_2uzp.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWA_xld3 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWA.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWA_xld3.implementation = function() {
        printStacks('public final java.lang.String[] com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWA()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWA_xld3.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWz_3s49 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWz.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWz_3s49.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWz()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWz_3s49.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_fq_aqyb = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.fq.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_fq_aqyb.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.fq(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_fq_aqyb.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_aqH_xadw = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.aqH.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_aqH_xadw.implementation = function(v0) {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.aqH(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_aqH_xadw.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_q1ve = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.a.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'android.os.Bundle', 'android.os.Bundle', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_q1ve.implementation = function(v0, v1, v2, v3, v4, v5) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.a(java.lang.String:'+v0+',java.lang.String:'+v1+',java.lang.String:'+v2+',android.os.Bundle,android.os.Bundle,int)');
        log("v3:"+bundleToJSONString(v3));
        if (v4.containsKey('compatParams')) {
        	log("v4.compatParams:"+bundleToJSONString(v4.get('compatParams')));
        }
        
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_q1ve.call(this, v0, v1, v2, v3, v4, v5);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_yjce = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.a.overload('int', 'android.os.Bundle', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_yjce.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.a(int,android.os.Bundle,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_yjce.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arH_7rch = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.arH.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arH_7rch.implementation = function(v0) {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.arH(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arH_7rch.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_u_as4o = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.u.overload('int', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_u_as4o.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.u(int,android.os.Bundle)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_u_as4o.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_3hra = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.a.overload('com.tencent.mm.plugin.webview.stub.e', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_3hra.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.a(com.tencent.mm.plugin.webview.stub.e,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_3hra.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWx_c013 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWx.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWx_c013.implementation = function() {
        printStacks('public final java.util.List com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWx()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWx_c013.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arJ_y8ip = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.arJ.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arJ_y8ip.implementation = function(v0) {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.arJ(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arJ_y8ip.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_o8am = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.a.overload('java.lang.String', 'boolean', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_o8am.implementation = function(v0, v1, v2) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.a(java.lang.String,boolean,android.os.Bundle)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_o8am.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWk_wvsr = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWk.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWk_wvsr.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWk()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWk_wvsr.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QE_shc9 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.QE.overload('int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QE_shc9.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.QE(int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QE_shc9.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWo_2559 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWo.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWo_2559.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWo()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWo_2559.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWq_x1pg = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWq.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWq_x1pg.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWq()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWq_x1pg.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWr_3p5f = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWr.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWr_3p5f.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWr()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWr_3p5f.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_auS_51bw = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.auS.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_auS_51bw.implementation = function() {
        printStacks('public final java.util.List com.tencent.mm.plugin.webview.stub.WebViewStubService$1.auS()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_auS_51bw.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_auT_k4lq = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.auT.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_auT_k4lq.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.auT()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_auT_k4lq.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QC_5n7w = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.QC.overload('int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QC_5n7w.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.QC(int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QC_5n7w.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWs_ne59 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWs.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWs_ne59.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWs()');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWs_ne59.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_j_h8te = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.j.overload('int', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_j_h8te.implementation = function(v0, v1) {
        printStacks('public final android.os.Bundle com.tencent.mm.plugin.webview.stub.WebViewStubService$1.j(int,android.os.Bundle)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_j_h8te.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWl_hgqs = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWl.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWl_hgqs.implementation = function() {
        printStacks('public final java.lang.String[] com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWl()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWl_hgqs.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_Xz_mher = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.Xz.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_Xz_mher.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.Xz()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_Xz_mher.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arI_h31u = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.arI.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arI_h31u.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.arI(java.lang.String)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arI_h31u.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_l_q8zs = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.l.overload('int', 'java.util.List');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_l_q8zs.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.l(int,java.util.List)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_l_q8zs.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arM_xhta = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.arM.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arM_xhta.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.arM(java.lang.String)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arM_xhta.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QD_omm8 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.QD.overload('int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QD_omm8.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.QD(int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QD_omm8.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_qw_namh = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.qw.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_qw_namh.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.qw(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_qw_namh.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_eI_md0t = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.eI.overload('java.lang.String', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_eI_md0t.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.eI(java.lang.String,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_eI_md0t.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_8ads = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.a.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService$1', 'android.os.Bundle', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_8ads.implementation = function(v0, v1, v2) {
        printStacks('static void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.a(com.tencent.mm.plugin.webview.stub.WebViewStubService$1,android.os.Bundle,android.os.Bundle)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_8ads.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QA_fhid = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.QA.overload('int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QA_fhid.implementation = function(v0) {
        printStacks('public final android.os.Bundle com.tencent.mm.plugin.webview.stub.WebViewStubService$1.QA(int)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QA_fhid.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_eJ_a7ku = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.eJ.overload('java.lang.String', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_eJ_a7ku.implementation = function(v0, v1) {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.eJ(java.lang.String,int)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_eJ_a7ku.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_s_277d = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.s.overload('int', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_s_277d.implementation = function(v0, v1) {
        printStacks('public final android.os.Bundle com.tencent.mm.plugin.webview.stub.WebViewStubService$1.s(int,android.os.Bundle)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_s_277d.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arK_qve9 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.arK.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arK_qve9.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.arK(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arK_qve9.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_Y_ch7a = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.Y.overload('java.lang.String', 'java.lang.String', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_Y_ch7a.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.Y(java.lang.String,java.lang.String,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_Y_ch7a.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_jptv = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.a.overload('java.lang.String', 'android.os.Bundle', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_jptv.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.a(java.lang.String,android.os.Bundle,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_jptv.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_ay_n8kb = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.ay.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_ay_n8kb.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.ay(android.os.Bundle)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_ay_n8kb.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arQ_3se1 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.arQ.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arQ_3se1.implementation = function(v0) {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.arQ(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arQ_3se1.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_favEditTag_qbt7 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.favEditTag.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_favEditTag_qbt7.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.favEditTag()');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_favEditTag_qbt7.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_rf_47ue = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.rf.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_rf_47ue.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.rf(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_rf_47ue.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arN_oc9l = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.arN.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arN_oc9l.implementation = function(v0) {
        printStacks('public final int com.tencent.mm.plugin.webview.stub.WebViewStubService$1.arN(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arN_oc9l.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_aH_p76w = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.aH.overload('android.content.Intent');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_aH_p76w.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.aH(android.content.Intent)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_aH_p76w.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_isSDCardAvailable_mylq = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.isSDCardAvailable.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_isSDCardAvailable_mylq.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.isSDCardAvailable()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_isSDCardAvailable_mylq.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QF_wb3o = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.QF.overload('int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QF_wb3o.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.QF(int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QF_wb3o.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_init_9je6 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_init_9je6.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$1(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_init_9je6.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$3');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz_method_callback_zyvm = com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz.callback.overload('com.tencent.mm.sdk.b.b');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz_method_callback_zyvm.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$3.callback(com.tencent.mm.sdk.b.b)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz_method_callback_zyvm.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz_method_a_xmbq = com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz.a.overload('com.tencent.mm.f.a.pc');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz_method_a_xmbq.implementation = function(v0) {
        printStacks('private boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$3.a(com.tencent.mm.f.a.pc)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz_method_a_xmbq.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz_init_romr = com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz_init_romr.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$3(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz_init_romr.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_4_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$4');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_4_clz_method_callback_hiuj = com_tencent_mm_plugin_webview_stub_WebViewStubService_4_clz.callback.overload('com.tencent.mm.sdk.b.b');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_4_clz_method_callback_hiuj.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$4.callback(com.tencent.mm.sdk.b.b)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_4_clz_method_callback_hiuj.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_4_clz_init_hey4 = com_tencent_mm_plugin_webview_stub_WebViewStubService_4_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_4_clz_init_hey4.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$4(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_4_clz_init_hey4.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$5');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_b_drzl = com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz.b.overload('long', 'java.lang.String', 'boolean');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_b_drzl.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$5.b(long,java.lang.String,boolean)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_b_drzl.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_b_5tr6 = com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz.b.overload('long', 'int', 'boolean');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_b_5tr6.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$5.b(long,int,boolean)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_b_5tr6.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_kP_12yg = com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz.kP.overload('long');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_kP_12yg.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$5.kP(long)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_kP_12yg.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_onTaskRemoved_ukuq = com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz.onTaskRemoved.overload('long');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_onTaskRemoved_ukuq.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$5.onTaskRemoved(long)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_onTaskRemoved_ukuq.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_onTaskPaused_9psh = com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz.onTaskPaused.overload('long');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_onTaskPaused_9psh.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$5.onTaskPaused(long)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_onTaskPaused_9psh.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_kO_ayxi = com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz.kO.overload('long');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_kO_ayxi.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$5.kO(long)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_kO_ayxi.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_onTaskStarted_pmro = com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz.onTaskStarted.overload('long', 'java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_onTaskStarted_pmro.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$5.onTaskStarted(long,java.lang.String)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_onTaskStarted_pmro.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_k_b2mo = com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz.k.overload('long', 'java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_k_b2mo.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$5.k(long,java.lang.String)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_k_b2mo.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_init_23yr = com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_init_23yr.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$5(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_init_23yr.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_6_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$6');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_6_clz_method_a_dgho = com_tencent_mm_plugin_webview_stub_WebViewStubService_6_clz.a.overload('boolean', 'int', 'int', 'java.lang.String', 'java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_6_clz_method_a_dgho.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$6.a(boolean,int,int,java.lang.String,java.lang.String)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_6_clz_method_a_dgho.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_6_clz_init_wq5p = com_tencent_mm_plugin_webview_stub_WebViewStubService_6_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_6_clz_init_wq5p.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$6(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_6_clz_init_wq5p.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_7_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$7');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_7_clz_method_onNetworkChange_txys = com_tencent_mm_plugin_webview_stub_WebViewStubService_7_clz.onNetworkChange.overload('int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_7_clz_method_onNetworkChange_txys.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$7.onNetworkChange(int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_7_clz_method_onNetworkChange_txys.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_7_clz_init_xgnr = com_tencent_mm_plugin_webview_stub_WebViewStubService_7_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_7_clz_init_xgnr.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$7(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_7_clz_init_xgnr.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$8');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz_method_da_t5wr = com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz.da.overload('java.lang.String', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz_method_da_t5wr.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$8.da(java.lang.String,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz_method_da_t5wr.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz_method_h_j9l7 = com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz.h.overload('java.lang.String', 'float');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz_method_h_j9l7.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$8.h(java.lang.String,float)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz_method_h_j9l7.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz_init_a5kn = com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz_init_a5kn.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$8(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz_init_a5kn.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI');
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dZa_klkp = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.dZa.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dZa_klkp.implementation = function() {
        printStacks('protected final com.tencent.mm.plugin.webview.ui.tools.fts.e com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.dZa()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dZa_klkp.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dXZ_vnjp = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.dXZ.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dXZ_vnjp.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.dXZ()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dXZ_vnjp.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dZc_jm98 = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.dZc.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dZc_jm98.implementation = function() {
        printStacks('public final org.json.JSONArray com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.dZc()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dZc_jm98.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dYY_7sks = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.dYY.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dYY_7sks.implementation = function() {
        printStacks('protected int com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.dYY()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dYY_7sks.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_byu_uur2 = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.byu.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_byu_uur2.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.byu()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_byu_uur2.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_getTotalQuery_kb3k = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.getTotalQuery.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_getTotalQuery_kb3k.implementation = function() {
        printStacks('protected final java.lang.String com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.getTotalQuery()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_getTotalQuery_kb3k.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_a_rcwc = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_a_rcwc.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_a_rcwc.call(com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_onPause_s6ac = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.onPause.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_onPause_s6ac.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.onPause()');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_onPause_s6ac.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dZe_st3q = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.dZe.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dZe_st3q.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.dZe()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dZe_st3q.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dYT_ls3c = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.dYT.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dYT_ls3c.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.dYT()');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dYT_ls3c.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_c_hves = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.c.overload('int', 'java.lang.String', 'java.util.Map');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_c_hves.implementation = function(v0, v1, v2) {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.c(int,java.lang.String,java.util.Map)');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_c_hves.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_m_rpqn = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.m.overload('int', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_m_rpqn.implementation = function(v0, v1) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.m(int,android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_m_rpqn.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_onClickClearTextBtn_wl1e = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.onClickClearTextBtn.overload('android.view.View');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_onClickClearTextBtn_wl1e.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.onClickClearTextBtn(android.view.View)');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_onClickClearTextBtn_wl1e.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dYU_ad0k = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.dYU.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dYU_ad0k.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.dYU()');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dYU_ad0k.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dYX_yyir = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.dYX.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dYX_yyir.implementation = function() {
        printStacks('protected java.lang.String com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.dYX()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dYX_yyir.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_jY_xinj = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.jY.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_jY_xinj.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.jY(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_jY_xinj.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_Rc_ldde = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.Rc.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_Rc_ldde.implementation = function(v0) {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.Rc(int)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_Rc_ldde.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_onResume_6by9 = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.onResume.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_onResume_6by9.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.onResume()');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_onResume_6by9.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dZb_mo9c = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.dZb.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dZb_mo9c.implementation = function() {
        printStacks('protected final int com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.dZb()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dZb_mo9c.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_getType_r295 = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.getType.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_getType_r295.implementation = function() {
        printStacks('protected final int com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.getType()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_getType_r295.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dYW_ugzk = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.dYW.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dYW_ugzk.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.dYW()');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dYW_ugzk.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_getInEditTextQuery_j2oe = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.getInEditTextQuery.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_getInEditTextQuery_j2oe.implementation = function() {
        printStacks('protected final java.lang.String com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.getInEditTextQuery()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_getInEditTextQuery_j2oe.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_cdK_1i7d = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.cdK.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_cdK_1i7d.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.cdK()');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_cdK_1i7d.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_a_tv78 = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.a.overload('java.lang.String', 'java.lang.String', 'java.util.List', 'com.tencent.mm.ui.search.FTSEditTextView$b');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_a_tv78.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.a(java.lang.String,java.lang.String,java.util.List,com.tencent.mm.ui.search.FTSEditTextView$b)');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_a_tv78.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dYV_87xc = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.dYV.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dYV_87xc.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.dYV()');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dYV_87xc.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_getSessionId_v8jk = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.getSessionId.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_getSessionId_v8jk.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.getSessionId()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_getSessionId_v8jk.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dXH_54fq = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.dXH.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dXH_54fq.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.dXH()');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dXH_54fq.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_onDestroy_6iw8 = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.onDestroy.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_onDestroy_6iw8.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.onDestroy()');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_onDestroy_6iw8.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_getHint_k1rg = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.getHint.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_getHint_k1rg.implementation = function() {
        printStacks('protected java.lang.String com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.getHint()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_getHint_k1rg.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_b_azpb = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_b_azpb.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.b(com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_b_azpb.call(com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_bja_aaz3 = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.bja.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_bja_aaz3.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.bja()');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_bja_aaz3.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dYZ_xylr = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.dYZ.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dYZ_xylr.implementation = function() {
        printStacks('public final com.tencent.mm.plugin.websearch.ui.widget.SOSEditTextView com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.dYZ()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dYZ_xylr.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_getScene_y12n = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.getScene.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_getScene_y12n.implementation = function() {
        printStacks('protected final int com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.getScene()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_getScene_y12n.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_bjl_42qc = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.bjl.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_bjl_42qc.implementation = function() {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.bjl()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_bjl_42qc.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_onBackPressed_h1xk = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.onBackPressed.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_onBackPressed_h1xk.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.onBackPressed()');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_onBackPressed_h1xk.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dXM_0g0l = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.dXM.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dXM_0g0l.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.dXM()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dXM_0g0l.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dBE_psvr = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.dBE.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dBE_psvr.implementation = function() {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.dBE()');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dBE_psvr.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_onCreate_23q9 = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.onCreate.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_onCreate_23q9.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.onCreate(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_onCreate_23q9.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_onWindowFocusChanged_ubf6 = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.onWindowFocusChanged.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_onWindowFocusChanged_ubf6.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.onWindowFocusChanged(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_onWindowFocusChanged_ubf6.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dZd_eoig = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.dZd.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dZd_eoig.implementation = function() {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI.dZd()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_method_dZd_eoig.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_init_wj1o = com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz.$init.overload();
    com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_init_wj1o.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.fts.BaseSOSWebViewUI()');
        return com_tencent_mm_plugin_webview_ui_tools_fts_BaseSOSWebViewUI_clz_init_wj1o.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_1s8p = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.a.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_1s8p.implementation = function(v0, v1) {
        printStacks('static int com.tencent.mm.plugin.webview.stub.WebViewStubService.a(com.tencent.mm.plugin.webview.stub.WebViewStubService,int)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_1s8p.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_d_2brq = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.d.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_d_2brq.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.stub.WebViewStubService.d(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_d_2brq.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_k_3yoe = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.k.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_k_3yoe.implementation = function(v0) {
        printStacks('static com.tencent.mm.sdk.b.c com.tencent.mm.plugin.webview.stub.WebViewStubService.k(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_k_3yoe.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_e_izxi = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.e.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_e_izxi.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.stub.WebViewStubService.e(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_e_izxi.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onSceneEnd_np78 = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.onSceneEnd.overload('int', 'int', 'java.lang.String', 'com.tencent.mm.ak.m');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onSceneEnd_np78.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.mm.plugin.webview.stub.WebViewStubService.onSceneEnd(int,int,java.lang.String,com.tencent.mm.ak.m)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onSceneEnd_np78.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_c_nhfm = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.c.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_c_nhfm.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.stub.WebViewStubService.c(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_c_nhfm.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_j_c7q8 = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.j.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_j_c7q8.implementation = function(v0) {
        printStacks('static com.tencent.mm.sdk.b.c com.tencent.mm.plugin.webview.stub.WebViewStubService.j(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_j_c7q8.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_i_qn4y = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.i.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_i_qn4y.implementation = function(v0) {
        printStacks('static java.util.Map com.tencent.mm.plugin.webview.stub.WebViewStubService.i(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_i_qn4y.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onDestroy_7xry = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.onDestroy.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onDestroy_7xry.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.stub.WebViewStubService.onDestroy()');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onDestroy_7xry.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onUnbind_vlht = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.onUnbind.overload('android.content.Intent');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onUnbind_vlht.implementation = function(v0) {
        printStacks('public boolean com.tencent.mm.plugin.webview.stub.WebViewStubService.onUnbind(android.content.Intent)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onUnbind_vlht.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_7lpz = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.a.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_7lpz.implementation = function(v0, v1) {
        printStacks('static boolean com.tencent.mm.plugin.webview.stub.WebViewStubService.a(com.tencent.mm.plugin.webview.stub.WebViewStubService,android.os.Bundle)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_7lpz.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_ca0p = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.a.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService', 'int', 'android.os.Bundle', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_ca0p.implementation = function(v0, v1, v2, v3) {
        printStacks('static void com.tencent.mm.plugin.webview.stub.WebViewStubService.a(com.tencent.mm.plugin.webview.stub.WebViewStubService,int,android.os.Bundle,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_ca0p.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_f_fbrt = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.f.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_f_fbrt.implementation = function(v0) {
        printStacks('static java.util.List com.tencent.mm.plugin.webview.stub.WebViewStubService.f(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        var listResult =  com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_f_fbrt.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    	log("listResult:"+toJSONString(listResult));
    	return listResult;
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_h_b2uh = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.h.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_h_b2uh.implementation = function(v0) {
        printStacks('static android.util.SparseArray com.tencent.mm.plugin.webview.stub.WebViewStubService.h(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_h_b2uh.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_b_ydpg = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.b.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_b_ydpg.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.stub.WebViewStubService.b(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_b_ydpg.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_4anc = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.a.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'com.tencent.mm.protocal.JsapiPermissionWrapper', 'android.os.Bundle', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_4anc.implementation = function(v0, v1, v2, v3, v4, v5, v6) {
        printStacks('static boolean com.tencent.mm.plugin.webview.stub.WebViewStubService.a(com.tencent.mm.plugin.webview.stub.WebViewStubService,java.lang.String,java.lang.String,java.lang.String,com.tencent.mm.protocal.JsapiPermissionWrapper,android.os.Bundle,int)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_4anc.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0, v1, v2, v3, v4, v5, v6);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_arF_39kl = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.arF.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_arF_39kl.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.stub.WebViewStubService.arF(java.lang.String:'+v0+')');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_arF_39kl.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_g_3qk4 = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.g.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_g_3qk4.implementation = function(v0) {
        printStacks('static com.tencent.mm.sdk.platformtools.ap com.tencent.mm.plugin.webview.stub.WebViewStubService.g(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_g_3qk4.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_iqzr = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.a.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_iqzr.implementation = function(v0) {
        printStacks('static java.util.Set com.tencent.mm.plugin.webview.stub.WebViewStubService.a(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_iqzr.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_aw_rj68 = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.aw.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_aw_rj68.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.stub.WebViewStubService.aw(android.os.Bundle)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_aw_rj68.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onCreate_bmpg = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.onCreate.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onCreate_bmpg.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.stub.WebViewStubService.onCreate()');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onCreate_bmpg.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onBind_xiwf = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.onBind.overload('android.content.Intent');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onBind_xiwf.implementation = function(v0) {
        printStacks('public android.os.IBinder com.tencent.mm.plugin.webview.stub.WebViewStubService.onBind(android.content.Intent)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onBind_xiwf.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_8a2o = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.a.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService', 'java.util.Map');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_8a2o.implementation = function(v0, v1) {
        printStacks('static java.util.Map com.tencent.mm.plugin.webview.stub.WebViewStubService.a(com.tencent.mm.plugin.webview.stub.WebViewStubService,java.util.Map)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_8a2o.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_init_2nca = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.$init.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_init_2nca.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.stub.WebViewStubService()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_init_2nca.call(this);
    };
});