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
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz = Java.use('com.tencent.mm.plugin.webview.model.WebViewJSSDKFileItem');
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_writeToParcel_pl2c = com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz.writeToParcel.overload('android.os.Parcel', 'int');
    com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_writeToParcel_pl2c.implementation = function(v0, v1) {
        printStacks('public void com.tencent.mm.plugin.webview.model.WebViewJSSDKFileItem.writeToParcel(android.os.Parcel,int)');
        com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_writeToParcel_pl2c.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_aNz_df56 = com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz.aNz.overload('java.lang.String');
    com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_aNz_df56.implementation = function(v0) {
        printStacks('public static com.tencent.mm.plugin.webview.model.WebViewJSSDKVideoItem com.tencent.mm.plugin.webview.model.WebViewJSSDKFileItem.aNz(java.lang.String)');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_aNz_df56.call(com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz, v0);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_aNx_xatq = com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz.aNx.overload('java.lang.String');
    com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_aNx_xatq.implementation = function(v0) {
        printStacks('public static com.tencent.mm.plugin.webview.model.WebViewJSSDKFileItem com.tencent.mm.plugin.webview.model.WebViewJSSDKFileItem.aNx(java.lang.String)');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_aNx_xatq.call(com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz, v0);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_mw_pdbh = com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz.mw.overload('java.lang.String', 'java.lang.String');
    com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_mw_pdbh.implementation = function(v0, v1) {
        printStacks('public static com.tencent.mm.plugin.webview.model.WebViewJSSDKFileItem com.tencent.mm.plugin.webview.model.WebViewJSSDKFileItem.mw(java.lang.String,java.lang.String)');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_mw_pdbh.call(com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_fxe_s7lj = com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz.fxe.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_fxe_s7lj.implementation = function() {
        printStacks('public abstract java.lang.String com.tencent.mm.plugin.webview.model.WebViewJSSDKFileItem.fxe()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_fxe_s7lj.call(this);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_c_cest = com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz.c.overload('com.tencent.mm.h.d');
    com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_c_cest.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.model.WebViewJSSDKFileItem.c(com.tencent.mm.h.d)');
        com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_c_cest.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_fxd_tm1v = com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz.fxd.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_fxd_tm1v.implementation = function() {
        printStacks('public abstract com.tencent.mm.plugin.webview.model.WebViewJSSDKFileItem com.tencent.mm.plugin.webview.model.WebViewJSSDKFileItem.fxd()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_fxd_tm1v.call(this);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_aNy_u2uk = com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz.aNy.overload('java.lang.String');
    com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_aNy_u2uk.implementation = function(v0) {
        printStacks('public static com.tencent.mm.plugin.webview.model.WebViewJSSDKFileItem com.tencent.mm.plugin.webview.model.WebViewJSSDKFileItem.aNy(java.lang.String)');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_aNy_u2uk.call(com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz, v0);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_L_7qwj = com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz.L.overload('int', 'java.lang.String', 'java.lang.String');
    com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_L_7qwj.implementation = function(v0, v1, v2) {
        printStacks('public static com.tencent.mm.plugin.webview.model.WebViewJSSDKFileItem com.tencent.mm.plugin.webview.model.WebViewJSSDKFileItem.L(int,java.lang.String,java.lang.String)');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_L_7qwj.call(com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_fxf_tr2n = com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz.fxf.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_fxf_tr2n.implementation = function() {
        printStacks('public abstract java.lang.String com.tencent.mm.plugin.webview.model.WebViewJSSDKFileItem.fxf()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_method_fxf_tr2n.call(this);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_init_ecln = com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz.$init.overload('android.os.Parcel');
    com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_init_ecln.implementation = function(v0) {
        printStacks('protected com.tencent.mm.plugin.webview.model.WebViewJSSDKFileItem(android.os.Parcel)');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_init_ecln.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_init_zc74 = com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz.$init.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_init_zc74.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.model.WebViewJSSDKFileItem()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_clz_init_zc74.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewStubCallbackWrapper');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_method_equals_117s = com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz.equals.overload('java.lang.Object');
    com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_method_equals_117s.implementation = function(v0) {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.WebViewStubCallbackWrapper.equals(java.lang.Object)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_method_equals_117s.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_method_writeToParcel_qroc = com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz.writeToParcel.overload('android.os.Parcel', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_method_writeToParcel_qroc.implementation = function(v0, v1) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewStubCallbackWrapper.writeToParcel(android.os.Parcel,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_method_writeToParcel_qroc.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_method_describeContents_7rqh = com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz.describeContents.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_method_describeContents_7rqh.implementation = function() {
        printStacks('public int com.tencent.mm.plugin.webview.ui.tools.WebViewStubCallbackWrapper.describeContents()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_method_describeContents_7rqh.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_init_aavb = com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz.$init.overload('com.tencent.mm.plugin.webview.stub.e', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_init_aavb.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.WebViewStubCallbackWrapper(com.tencent.mm.plugin.webview.stub.e,int)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_init_aavb.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_init_hv3v = com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_init_hv3v.implementation = function(v0) {
        printStacks('private com.tencent.mm.plugin.webview.ui.tools.WebViewStubCallbackWrapper(android.os.IBinder)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_init_hv3v.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_init_vwzn = com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz.$init.overload('android.os.IBinder', 'byte');
    com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_init_vwzn.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewStubCallbackWrapper(android.os.IBinder,byte)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_clz_init_vwzn.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_extension_proxy_X5ProxyWebViewClientExtension_clz = Java.use('com.tencent.smtt.export.external.extension.proxy.X5ProxyWebViewClientExtension');
    var com_tencent_smtt_export_external_extension_proxy_X5ProxyWebViewClientExtension_clz_init_e2cr = com_tencent_smtt_export_external_extension_proxy_X5ProxyWebViewClientExtension_clz.$init.overload('com.tencent.smtt.export.external.extension.interfaces.IX5WebViewClientExtension');
    com_tencent_smtt_export_external_extension_proxy_X5ProxyWebViewClientExtension_clz_init_e2cr.implementation = function(v0) {
        printStacks('public com.tencent.smtt.export.external.extension.proxy.X5ProxyWebViewClientExtension(com.tencent.smtt.export.external.extension.interfaces.IX5WebViewClientExtension)');
        return com_tencent_smtt_export_external_extension_proxy_X5ProxyWebViewClientExtension_clz_init_e2cr.call(this, v0);
    };
    var com_tencent_smtt_export_external_extension_proxy_X5ProxyWebViewClientExtension_clz_init_2zgt = com_tencent_smtt_export_external_extension_proxy_X5ProxyWebViewClientExtension_clz.$init.overload('com.tencent.smtt.export.external.WebViewWizardBase');
    com_tencent_smtt_export_external_extension_proxy_X5ProxyWebViewClientExtension_clz_init_2zgt.implementation = function(v0) {
        printStacks('public com.tencent.smtt.export.external.extension.proxy.X5ProxyWebViewClientExtension(com.tencent.smtt.export.external.WebViewWizardBase)');
        return com_tencent_smtt_export_external_extension_proxy_X5ProxyWebViewClientExtension_clz_init_2zgt.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper');
    var com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_setEasyMod_hsyf = com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz.setEasyMod.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_setEasyMod_hsyf.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper.setEasyMod(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_setEasyMod_hsyf.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_c_llhc = com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz.c.overload('com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper');
    com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_c_llhc.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper$b com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper.c(com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper)');
        return com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_c_llhc.call(com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_getWebViewContainer_354s = com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz.getWebViewContainer.overload();
    com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_getWebViewContainer_354s.implementation = function() {
        printStacks('public android.widget.FrameLayout com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper.getWebViewContainer()');
        return com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_getWebViewContainer_354s.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_init_ekcf = com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz.init.overload();
    com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_init_ekcf.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper.init()');
        com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_init_ekcf.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_getWebView_uqnz = com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz.getWebView.overload();
    com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_getWebView_uqnz.implementation = function() {
        printStacks('public com.tencent.xweb.WebView com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper.getWebView()');
        return com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_getWebView_uqnz.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_rK_punu = com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz.rK.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_rK_punu.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper.rK(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_rK_punu.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_getScrollBackDuration_0jze = com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz.getScrollBackDuration.overload();
    com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_getScrollBackDuration_0jze.implementation = function() {
        printStacks('private long com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper.getScrollBackDuration()');
        return com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_getScrollBackDuration_0jze.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_getLogoHeight_v8vc = com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz.getLogoHeight.overload();
    com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_getLogoHeight_v8vc.implementation = function() {
        printStacks('private int com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper.getLogoHeight()');
        return com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_getLogoHeight_v8vc.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_r_91am = com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz.r.overload('int', 'long');
    com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_r_91am.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper.r(int,long)');
        com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_r_91am.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_setMMOverScrollOffsetListener_uynu = com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz.setMMOverScrollOffsetListener.overload('com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper$b');
    com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_setMMOverScrollOffsetListener_uynu.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper.setMMOverScrollOffsetListener(com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper$b)');
        com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_setMMOverScrollOffsetListener_uynu.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_setFastScrollBack_ng2e = com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz.setFastScrollBack.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_setFastScrollBack_ng2e.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper.setFastScrollBack(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_setFastScrollBack_ng2e.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_getOverScrollDistance_dkqu = com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz.getOverScrollDistance.overload();
    com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_getOverScrollDistance_dkqu.implementation = function() {
        printStacks('private int com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper.getOverScrollDistance()');
        return com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_getOverScrollDistance_dkqu.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_onInterceptTouchEvent_4e9r = com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz.onInterceptTouchEvent.overload('android.view.MotionEvent');
    com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_onInterceptTouchEvent_4e9r.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper.onInterceptTouchEvent(android.view.MotionEvent)');
        return com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_onInterceptTouchEvent_4e9r.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_QL_9er4 = com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz.QL.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_QL_9er4.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper.QL(int)');
        com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_QL_9er4.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_setReleaseTargetHeight_4xkv = com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz.setReleaseTargetHeight.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_setReleaseTargetHeight_4xkv.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper.setReleaseTargetHeight(int)');
        com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_setReleaseTargetHeight_4xkv.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_b_5spk = com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper');
    com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_b_5spk.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper.b(com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper)');
        return com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_b_5spk.call(com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_onTouchEvent_7pj5 = com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz.onTouchEvent.overload('android.view.MotionEvent');
    com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_onTouchEvent_7pj5.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper.onTouchEvent(android.view.MotionEvent)');
        return com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_onTouchEvent_7pj5.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_a_afqr = com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper');
    com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_a_afqr.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper.a(com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper)');
        return com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_a_afqr.call(com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_setMMOverScrollListener_c7s4 = com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz.setMMOverScrollListener.overload('com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper$a');
    com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_setMMOverScrollListener_c7s4.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper.setMMOverScrollListener(com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper$a)');
        com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_method_setMMOverScrollListener_c7s4.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_init_zpkw = com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int');
    com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_init_zpkw.implementation = function(v0, v1, v2) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper(android.content.Context,android.util.AttributeSet,int)');
        return com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_init_zpkw.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_init_t42h = com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz.$init.overload('android.content.Context', 'android.util.AttributeSet');
    com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_init_t42h.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.LogoWebViewWrapper(android.content.Context,android.util.AttributeSet)');
        return com_tencent_mm_plugin_webview_ui_tools_LogoWebViewWrapper_clz_init_t42h.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$1');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_clz_method_run_x8nj = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_clz.run.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_clz_method_run_x8nj.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1$1.run()');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_clz_method_run_x8nj.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_clz_init_1pnm = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService$1', 'int', 'android.os.Bundle', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_clz_init_1pnm.implementation = function(v0, v1, v2, v3) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$1(com.tencent.mm.plugin.webview.stub.WebViewStubService$1,int,android.os.Bundle,int)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_clz_init_1pnm.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_2_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$2');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_2_clz_method_run_tj46 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_2_clz.run.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_2_clz_method_run_tj46.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1$2.run()');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_2_clz_method_run_tj46.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_2_clz_init_kx4c = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_2_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService$1', 'android.os.Bundle', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_2_clz_init_kx4c.implementation = function(v0, v1, v2) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$2(com.tencent.mm.plugin.webview.stub.WebViewStubService$1,android.os.Bundle,android.os.Bundle)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_2_clz_init_kx4c.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_3_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$3');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_3_clz_method_run_453q = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_3_clz.run.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_3_clz_method_run_453q.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1$3.run()');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_3_clz_method_run_453q.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_3_clz_init_4d13 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_3_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService$1', 'java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_3_clz_init_4d13.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$3(com.tencent.mm.plugin.webview.stub.WebViewStubService$1,java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_3_clz_init_4d13.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_4_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$4');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_4_clz_method_run_snep = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_4_clz.run.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_4_clz_method_run_snep.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1$4.run()');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_4_clz_method_run_snep.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_4_clz_init_wlig = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_4_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService$1', 'int', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_4_clz_init_wlig.implementation = function(v0, v1, v2) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$4(com.tencent.mm.plugin.webview.stub.WebViewStubService$1,int,int)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_4_clz_init_wlig.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_5_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$5');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_5_clz_method_run_xcmm = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_5_clz.run.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_5_clz_method_run_xcmm.implementation = function() {
        printStacks('public final java.lang.Object com.tencent.mm.plugin.webview.stub.WebViewStubService$1$5.run()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_5_clz_method_run_xcmm.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_5_clz_init_b80m = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_5_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService$1', 'java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_5_clz_init_b80m.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$5(com.tencent.mm.plugin.webview.stub.WebViewStubService$1,java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_5_clz_init_b80m.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_6_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$6');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_6_clz_method_run_sbrk = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_6_clz.run.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_6_clz_method_run_sbrk.implementation = function() {
        printStacks('public final java.lang.Object com.tencent.mm.plugin.webview.stub.WebViewStubService$1$6.run()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_6_clz_method_run_sbrk.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_6_clz_init_iptb = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_6_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService$1', 'java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_6_clz_init_iptb.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$6(com.tencent.mm.plugin.webview.stub.WebViewStubService$1,java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_6_clz_init_iptb.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$7');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_clz_method_run_6fho = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_clz.run.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_clz_method_run_6fho.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1$7.run()');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_clz_method_run_6fho.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_clz_init_p1h7 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService$1');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_clz_init_p1h7.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$7(com.tencent.mm.plugin.webview.stub.WebViewStubService$1)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_clz_init_p1h7.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_8_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$8');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_8_clz_method_run_zsqa = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_8_clz.run.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_8_clz_method_run_zsqa.implementation = function() {
        printStacks('public final java.lang.Object com.tencent.mm.plugin.webview.stub.WebViewStubService$1$8.run()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_8_clz_method_run_zsqa.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_8_clz_init_9q3t = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_8_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService$1');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_8_clz_init_9q3t.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$8(com.tencent.mm.plugin.webview.stub.WebViewStubService$1)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_8_clz_init_9q3t.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_c_40fs = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.c.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_c_40fs.implementation = function(v0, v1) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.c(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI,boolean)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_c_40fs.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_x_1549 = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.x.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_x_1549.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.x(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_x_1549.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_F_cevq = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.F.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_F_cevq.implementation = function(v0) {
        printStacks('static com.tencent.mm.ui.widget.MMWebView com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.F(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_F_cevq.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_c_acq8 = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.c.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_c_acq8.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.c(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_c_acq8.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_E_v7zm = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.E.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_E_v7zm.implementation = function(v0) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.E(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_E_v7zm.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_onPause_c3es = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.onPause.overload();
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_onPause_c3es.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.onPause()');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_onPause_c3es.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_dXY_oq75 = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.dXY.overload();
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_dXY_oq75.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.dXY()');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_dXY_oq75.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_d_yt4m = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.d.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_d_yt4m.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.d(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_d_yt4m.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_rN_yidk = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.rN.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_rN_yidk.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.rN(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_rN_yidk.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_j_hlte = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.j.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_j_hlte.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.wepkg.c com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.j(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_j_hlte.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_D_e3l1 = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.D.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_D_e3l1.implementation = function(v0) {
        printStacks('static com.tencent.mm.ui.widget.MMWebView com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.D(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_D_e3l1.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_bxN_7uvl = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.bxN.overload();
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_bxN_7uvl.implementation = function() {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.bxN()');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_bxN_7uvl.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_aA_8hy5 = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.aA.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_aA_8hy5.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.aA(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_aA_8hy5.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_a_muva = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_a_muva.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI,java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_a_muva.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_o_0fur = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.o.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_o_0fur.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.o(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_o_0fur.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_dXI_1p8x = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.dXI.overload();
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_dXI_1p8x.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.dXI()');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_dXI_1p8x.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_A_pltb = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.A.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_A_pltb.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.A(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_A_pltb.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_C_gekq = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.C.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_C_gekq.implementation = function(v0) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.C(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_C_gekq.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_initView_gzkk = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.initView.overload();
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_initView_gzkk.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.initView()');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_initView_gzkk.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_B_5cud = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.B.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_B_5cud.implementation = function(v0) {
        printStacks('static com.tencent.mm.ui.widget.MMWebView com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.B(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_B_5cud.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_l_eyra = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.l.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_l_eyra.implementation = function(v0) {
        printStacks('static java.util.Map com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.l(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_l_eyra.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_onResume_mcsl = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.onResume.overload();
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_onResume_mcsl.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.onResume()');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_onResume_mcsl.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_b_pixe = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_b_pixe.implementation = function(v0, v1) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.b(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI,boolean)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_b_pixe.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_e_l18h = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.e.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_e_l18h.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.e(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_e_l18h.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_k_alwk = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.k.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_k_alwk.implementation = function(v0) {
        printStacks('static com.tencent.mm.sdk.platformtools.ap com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.k(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_k_alwk.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_eM_375a = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.eM.overload('java.lang.String', 'int');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_eM_375a.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.eM(java.lang.String,int)');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_eM_375a.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_bxU_q1sb = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.bxU.overload();
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_bxU_q1sb.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.bxU()');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_bxU_q1sb.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_s_lfnd = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.s.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_s_lfnd.implementation = function(v0) {
        printStacks('static com.tencent.mm.ui.widget.MMWebView com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.s(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_s_lfnd.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_n_v5os = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.n.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_n_v5os.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.n com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.n(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_n_v5os.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_w_5e6m = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.w.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_w_5e6m.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.w(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_w_5e6m.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_getLayoutId_c6uq = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.getLayoutId.overload();
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_getLayoutId_c6uq.implementation = function() {
        printStacks('public int com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.getLayoutId()');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_getLayoutId_c6uq.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_m_8lex = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.m.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_m_8lex.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.m(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_m_8lex.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_loadUrl_8gfh = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.loadUrl.overload('java.lang.String', 'java.util.Map', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_loadUrl_8gfh.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.loadUrl(java.lang.String,java.util.Map,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_loadUrl_8gfh.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_byq_8v1a = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.byq.overload();
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_byq_8v1a.implementation = function() {
        printStacks('public final synchronized com.tencent.xweb.t com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.byq()');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_byq_8v1a.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_a_bsfq = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_a_bsfq.implementation = function(v0, v1) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI,boolean)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_a_bsfq.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_onDestroy_io6e = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.onDestroy.overload();
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_onDestroy_io6e.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.onDestroy()');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_onDestroy_io6e.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_dZC_bgbv = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.dZC.overload();
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_dZC_bgbv.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.dZC()');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_dZC_bgbv.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_h_tkml = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.h.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_h_tkml.implementation = function(v0) {
        printStacks('static com.tencent.mm.ui.widget.MMWebView com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.h(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_h_tkml.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_u_9ug7 = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.u.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_u_9ug7.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.u(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_u_9ug7.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_p_ti0v = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.p.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_p_ti0v.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.n com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.p(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_p_ti0v.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_addIconOptionMenu_j4av = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.addIconOptionMenu.overload('int', 'int', 'android.view.MenuItem$OnMenuItemClickListener');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_addIconOptionMenu_j4av.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.addIconOptionMenu(int,int,android.view.MenuItem$OnMenuItemClickListener)');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_addIconOptionMenu_j4av.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_f_6ehb = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.f.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_f_6ehb.implementation = function(v0) {
        printStacks('static com.tencent.mm.sdk.platformtools.ap com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.f(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_f_6ehb.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_bja_zs0o = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.bja.overload();
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_bja_zs0o.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.bja()');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_bja_zs0o.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_i_11g3 = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.i.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_i_11g3.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.i(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_i_11g3.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_g_2ggb = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.g.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_g_2ggb.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.g(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_g_2ggb.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_t_6w2j = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.t.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_t_6w2j.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.t(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_t_6w2j.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_dZB_zgya = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.dZB.overload();
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_dZB_zgya.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.dZB()');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_dZB_zgya.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_aC_pc8x = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.aC.overload('java.lang.String', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_aC_pc8x.implementation = function(v0, v1) {
        printStacks('public final com.tencent.mm.plugin.webview.ui.tools.WebViewUI$w com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.aC(java.lang.String,boolean)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_aC_pc8x.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_dXK_8h8k = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.dXK.overload();
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_dXK_8h8k.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.dXK()');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_dXK_8h8k.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_a_ubai = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_a_ubai.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_a_ubai.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_b_dbvp = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_b_dbvp.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.b(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_b_dbvp.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_y_2d5x = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.y.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_y_2d5x.implementation = function(v0) {
        printStacks('static com.tencent.mm.game.report.api.GameWebPerformanceInfo com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.y(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_y_2d5x.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_v_sckr = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.v.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_v_sckr.implementation = function(v0) {
        printStacks('static com.tencent.mm.ui.base.l com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.v(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_v_sckr.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_onCreate_ukcv = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.onCreate.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_onCreate_ukcv.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.onCreate(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_onCreate_ukcv.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_q_xvvi = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.q.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_q_xvvi.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.q(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_q_xvvi.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_setMMOrientation_2xfc = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.setMMOrientation.overload();
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_setMMOrientation_2xfc.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.setMMOrientation()');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_setMMOrientation_2xfc.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_asl_fdtb = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.asl.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_asl_fdtb.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.asl(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_asl_fdtb.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_dZA_jwwf = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.dZA.overload();
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_dZA_jwwf.implementation = function() {
        printStacks('private com.tencent.mm.ui.base.l com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.dZA()');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_dZA_jwwf.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_r_nyrq = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.r.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_r_nyrq.implementation = function(v0) {
        printStacks('static com.tencent.mm.ui.widget.MMWebView com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.r(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_r_nyrq.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_onWindowFocusChanged_2668 = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.onWindowFocusChanged.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_onWindowFocusChanged_2668.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.onWindowFocusChanged(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_onWindowFocusChanged_2668.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_z_hovp = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.z.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_z_hovp.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.game.g com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI.z(com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_method_z_hovp.call(com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_init_pz5m = com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz.$init.overload();
    com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_init_pz5m.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.game.GameWebViewUI()');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameWebViewUI_clz_init_pz5m.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$1');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_ax_twbt = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.ax.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_ax_twbt.implementation = function(v0) {
        printStacks('public final com.tencent.mm.plugin.webview.stub.b com.tencent.mm.plugin.webview.stub.WebViewStubService$1.ax(android.os.Bundle)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_ax_twbt.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWw_y7bq = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWw.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWw_y7bq.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWw()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWw_y7bq.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_getLanguage_owgu = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.getLanguage.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_getLanguage_owgu.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.getLanguage()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_getLanguage_owgu.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_qe_tbf7 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.qe.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_qe_tbf7.implementation = function(v0) {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.qe(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_qe_tbf7.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWu_atuj = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWu.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWu_atuj.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWu()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWu_atuj.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWt_49kf = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWt.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWt_49kf.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWt()');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWt_49kf.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QB_cut4 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.QB.overload('int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QB_cut4.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.QB(int)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QB_cut4.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arL_rfif = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.arL.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arL_rfif.implementation = function(v0) {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.arL(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arL_rfif.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWy_38nb = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWy.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWy_38nb.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWy()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWy_38nb.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_F_501a = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.F.overload('long', 'java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_F_501a.implementation = function(v0, v1) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.F(long,java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_F_501a.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_io_kali = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.io.overload('int', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_io_kali.implementation = function(v0, v1) {
        printStacks('public final int com.tencent.mm.plugin.webview.stub.WebViewStubService$1.io(int,int)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_io_kali.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arP_ggwf = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.arP.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arP_ggwf.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.arP(java.lang.String)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arP_ggwf.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWm_2i6n = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWm.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWm_2i6n.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWm()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWm_2i6n.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QG_1rzl = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.QG.overload('int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QG_1rzl.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.QG(int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QG_1rzl.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_cq_ywvi = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.cq.overload('int', 'java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_cq_ywvi.implementation = function(v0, v1) {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.cq(int,java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_cq_ywvi.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_v1o4 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.a.overload('android.os.Bundle', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_v1o4.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.a(android.os.Bundle,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_v1o4.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_0z6e = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.a.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'int', 'int', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_0z6e.implementation = function(v0, v1, v2, v3, v4, v5) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.a(java.lang.String,java.lang.String,java.lang.String,int,int,android.os.Bundle)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_0z6e.call(this, v0, v1, v2, v3, v4, v5);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arO_r0j8 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.arO.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arO_r0j8.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.arO(java.lang.String)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arO_r0j8.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_yT_i1qs = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.yT.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_yT_i1qs.implementation = function(v0) {
        printStacks('private static int com.tencent.mm.plugin.webview.stub.WebViewStubService$1.yT(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_yT_i1qs.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_ip_ahxu = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.ip.overload('int', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_ip_ahxu.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.ip(int,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_ip_ahxu.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWn_4m9e = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWn.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWn_4m9e.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWn()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWn_4m9e.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_w_f2pb = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.w.overload('int', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_w_f2pb.implementation = function(v0, v1) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.w(int,android.os.Bundle)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_w_f2pb.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_aw_x9vp = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.aw.overload('int', 'int', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_aw_x9vp.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.aw(int,int,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_aw_x9vp.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWp_b7ve = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWp.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWp_b7ve.implementation = function() {
        printStacks('public final java.util.Map com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWp()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWp_b7ve.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_bX_075n = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.bX.overload('java.lang.String', 'boolean');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_bX_075n.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.bX(java.lang.String,boolean)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_bX_075n.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWv_zebc = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWv.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWv_zebc.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWv()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWv_zebc.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_jM_eg1h = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.jM.overload('java.lang.String', 'java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_jM_eg1h.implementation = function(v0, v1) {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.jM(java.lang.String,java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_jM_eg1h.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_n_22re = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.n.overload('java.lang.String', 'boolean', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_n_22re.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.n(java.lang.String,boolean,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_n_22re.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_aqy_6guy = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.aqy.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_aqy_6guy.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.aqy()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_aqy_6guy.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_M_90jp = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.M.overload('int', 'java.lang.String', 'java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_M_90jp.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.M(int,java.lang.String,java.lang.String)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_M_90jp.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_eK_hici = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.eK.overload('java.lang.String', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_eK_hici.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.eK(java.lang.String,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_eK_hici.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_qv_7a5a = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.qv.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_qv_7a5a.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.qv(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_qv_7a5a.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_v_7hss = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.v.overload('int', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_v_7hss.implementation = function(v0, v1) {
        printStacks('public final android.os.Bundle com.tencent.mm.plugin.webview.stub.WebViewStubService$1.v(int,android.os.Bundle)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_v_7hss.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arG_7qtg = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.arG.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arG_7qtg.implementation = function(v0) {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.arG(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arG_7qtg.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_hvzi = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.a.overload('java.lang.String', '[I', 'int', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_hvzi.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.a(java.lang.String,int[],int,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_hvzi.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWA_ld9k = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWA.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWA_ld9k.implementation = function() {
        printStacks('public final java.lang.String[] com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWA()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWA_ld9k.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWz_qbm8 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWz.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWz_qbm8.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWz()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWz_qbm8.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_fq_zaq9 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.fq.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_fq_zaq9.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.fq(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_fq_zaq9.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_aqH_cmjg = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.aqH.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_aqH_cmjg.implementation = function(v0) {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.aqH(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_aqH_cmjg.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_pm5o = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.a.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'android.os.Bundle', 'android.os.Bundle', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_pm5o.implementation = function(v0, v1, v2, v3, v4, v5) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.a(java.lang.String,java.lang.String,java.lang.String,android.os.Bundle,android.os.Bundle,int)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_pm5o.call(this, v0, v1, v2, v3, v4, v5);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_uyxs = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.a.overload('int', 'android.os.Bundle', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_uyxs.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.a(int,android.os.Bundle,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_uyxs.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arH_w9cm = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.arH.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arH_w9cm.implementation = function(v0) {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.arH(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arH_w9cm.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_u_nl5b = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.u.overload('int', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_u_nl5b.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.u(int,android.os.Bundle)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_u_nl5b.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_rgnv = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.a.overload('com.tencent.mm.plugin.webview.stub.e', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_rgnv.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.a(com.tencent.mm.plugin.webview.stub.e,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_rgnv.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWx_z37o = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWx.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWx_z37o.implementation = function() {
        printStacks('public final java.util.List com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWx()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWx_z37o.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arJ_6voh = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.arJ.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arJ_6voh.implementation = function(v0) {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.arJ(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arJ_6voh.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_cg1k = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.a.overload('java.lang.String', 'boolean', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_cg1k.implementation = function(v0, v1, v2) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.a(java.lang.String,boolean,android.os.Bundle)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_cg1k.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWk_xv0i = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWk.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWk_xv0i.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWk()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWk_xv0i.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QE_ef03 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.QE.overload('int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QE_ef03.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.QE(int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QE_ef03.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWo_dj96 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWo.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWo_dj96.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWo()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWo_dj96.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWq_63uy = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWq.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWq_63uy.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWq()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWq_63uy.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWr_4tzk = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWr.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWr_4tzk.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWr()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWr_4tzk.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_auS_x2z3 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.auS.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_auS_x2z3.implementation = function() {
        printStacks('public final java.util.List com.tencent.mm.plugin.webview.stub.WebViewStubService$1.auS()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_auS_x2z3.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_auT_fkcs = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.auT.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_auT_fkcs.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.auT()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_auT_fkcs.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QC_38oh = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.QC.overload('int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QC_38oh.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.QC(int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QC_38oh.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWs_ewou = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWs.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWs_ewou.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWs()');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWs_ewou.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_j_s1ef = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.j.overload('int', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_j_s1ef.implementation = function(v0, v1) {
        printStacks('public final android.os.Bundle com.tencent.mm.plugin.webview.stub.WebViewStubService$1.j(int,android.os.Bundle)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_j_s1ef.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWl_z4oj = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.dWl.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWl_z4oj.implementation = function() {
        printStacks('public final java.lang.String[] com.tencent.mm.plugin.webview.stub.WebViewStubService$1.dWl()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_dWl_z4oj.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_Xz_22t4 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.Xz.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_Xz_22t4.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.Xz()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_Xz_22t4.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arI_q98d = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.arI.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arI_q98d.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.arI(java.lang.String)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arI_q98d.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_l_ijy9 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.l.overload('int', 'java.util.List');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_l_ijy9.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.l(int,java.util.List)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_l_ijy9.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arM_mtks = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.arM.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arM_mtks.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.arM(java.lang.String)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arM_mtks.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QD_oizl = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.QD.overload('int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QD_oizl.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.QD(int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QD_oizl.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_qw_l6ma = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.qw.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_qw_l6ma.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.qw(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_qw_l6ma.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_eI_o9co = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.eI.overload('java.lang.String', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_eI_o9co.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.eI(java.lang.String,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_eI_o9co.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_nfeh = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.a.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService$1', 'android.os.Bundle', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_nfeh.implementation = function(v0, v1, v2) {
        printStacks('static void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.a(com.tencent.mm.plugin.webview.stub.WebViewStubService$1,android.os.Bundle,android.os.Bundle)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_nfeh.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QA_dhcj = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.QA.overload('int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QA_dhcj.implementation = function(v0) {
        printStacks('public final android.os.Bundle com.tencent.mm.plugin.webview.stub.WebViewStubService$1.QA(int)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QA_dhcj.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_eJ_chjb = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.eJ.overload('java.lang.String', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_eJ_chjb.implementation = function(v0, v1) {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.eJ(java.lang.String,int)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_eJ_chjb.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_s_xwvb = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.s.overload('int', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_s_xwvb.implementation = function(v0, v1) {
        printStacks('public final android.os.Bundle com.tencent.mm.plugin.webview.stub.WebViewStubService$1.s(int,android.os.Bundle)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_s_xwvb.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arK_7xi7 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.arK.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arK_7xi7.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.arK(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arK_7xi7.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_Y_3mmk = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.Y.overload('java.lang.String', 'java.lang.String', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_Y_3mmk.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.Y(java.lang.String,java.lang.String,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_Y_3mmk.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_nlxk = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.a.overload('java.lang.String', 'android.os.Bundle', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_nlxk.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.a(java.lang.String,android.os.Bundle,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_a_nlxk.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_ay_kszj = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.ay.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_ay_kszj.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.ay(android.os.Bundle)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_ay_kszj.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arQ_kt1h = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.arQ.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arQ_kt1h.implementation = function(v0) {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$1.arQ(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arQ_kt1h.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_favEditTag_l65k = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.favEditTag.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_favEditTag_l65k.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.favEditTag()');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_favEditTag_l65k.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_rf_2l15 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.rf.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_rf_2l15.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.rf(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_rf_2l15.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arN_q3rq = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.arN.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arN_q3rq.implementation = function(v0) {
        printStacks('public final int com.tencent.mm.plugin.webview.stub.WebViewStubService$1.arN(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_arN_q3rq.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_aH_rgkd = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.aH.overload('android.content.Intent');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_aH_rgkd.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.aH(android.content.Intent)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_aH_rgkd.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_isSDCardAvailable_fwy3 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.isSDCardAvailable.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_isSDCardAvailable_fwy3.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1.isSDCardAvailable()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_isSDCardAvailable_fwy3.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QF_2dvp = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.QF.overload('int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QF_2dvp.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1.QF(int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_method_QF_2dvp.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_init_bc6u = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_init_bc6u.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$1(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_clz_init_bc6u.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_2_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$2');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_2_clz_method_a_jqx6 = com_tencent_mm_plugin_webview_stub_WebViewStubService_2_clz.a.overload('int', 'int', 'java.lang.String', 'com.tencent.mm.ak.b', 'com.tencent.mm.ak.m');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_2_clz_method_a_jqx6.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('public final int com.tencent.mm.plugin.webview.stub.WebViewStubService$2.a(int,int,java.lang.String,com.tencent.mm.ak.b,com.tencent.mm.ak.m)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_2_clz_method_a_jqx6.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_2_clz_init_mqfc = com_tencent_mm_plugin_webview_stub_WebViewStubService_2_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_2_clz_init_mqfc.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$2(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_2_clz_init_mqfc.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$3');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz_method_callback_0ydl = com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz.callback.overload('com.tencent.mm.sdk.b.b');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz_method_callback_0ydl.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$3.callback(com.tencent.mm.sdk.b.b)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz_method_callback_0ydl.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz_method_a_u0yc = com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz.a.overload('com.tencent.mm.f.a.pc');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz_method_a_u0yc.implementation = function(v0) {
        printStacks('private boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$3.a(com.tencent.mm.f.a.pc)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz_method_a_u0yc.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz_init_sfbh = com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz_init_sfbh.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$3(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_3_clz_init_sfbh.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_4_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$4');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_4_clz_method_callback_q9vm = com_tencent_mm_plugin_webview_stub_WebViewStubService_4_clz.callback.overload('com.tencent.mm.sdk.b.b');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_4_clz_method_callback_q9vm.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$4.callback(com.tencent.mm.sdk.b.b)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_4_clz_method_callback_q9vm.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_4_clz_init_tgqb = com_tencent_mm_plugin_webview_stub_WebViewStubService_4_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_4_clz_init_tgqb.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$4(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_4_clz_init_tgqb.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$5');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_b_9sx3 = com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz.b.overload('long', 'java.lang.String', 'boolean');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_b_9sx3.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$5.b(long,java.lang.String,boolean)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_b_9sx3.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_b_rc74 = com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz.b.overload('long', 'int', 'boolean');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_b_rc74.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$5.b(long,int,boolean)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_b_rc74.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_kP_uhj6 = com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz.kP.overload('long');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_kP_uhj6.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$5.kP(long)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_kP_uhj6.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_onTaskRemoved_ddhf = com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz.onTaskRemoved.overload('long');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_onTaskRemoved_ddhf.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$5.onTaskRemoved(long)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_onTaskRemoved_ddhf.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_onTaskPaused_yxfd = com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz.onTaskPaused.overload('long');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_onTaskPaused_yxfd.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$5.onTaskPaused(long)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_onTaskPaused_yxfd.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_kO_j6is = com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz.kO.overload('long');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_kO_j6is.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$5.kO(long)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_kO_j6is.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_onTaskStarted_z32d = com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz.onTaskStarted.overload('long', 'java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_onTaskStarted_z32d.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$5.onTaskStarted(long,java.lang.String)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_onTaskStarted_z32d.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_k_vd3k = com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz.k.overload('long', 'java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_k_vd3k.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$5.k(long,java.lang.String)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_method_k_vd3k.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_init_a5vl = com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_init_a5vl.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$5(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_5_clz_init_a5vl.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_6_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$6');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_6_clz_method_a_5upw = com_tencent_mm_plugin_webview_stub_WebViewStubService_6_clz.a.overload('boolean', 'int', 'int', 'java.lang.String', 'java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_6_clz_method_a_5upw.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$6.a(boolean,int,int,java.lang.String,java.lang.String)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_6_clz_method_a_5upw.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_6_clz_init_df2k = com_tencent_mm_plugin_webview_stub_WebViewStubService_6_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_6_clz_init_df2k.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$6(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_6_clz_init_df2k.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_7_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$7');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_7_clz_method_onNetworkChange_7anh = com_tencent_mm_plugin_webview_stub_WebViewStubService_7_clz.onNetworkChange.overload('int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_7_clz_method_onNetworkChange_7anh.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$7.onNetworkChange(int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_7_clz_method_onNetworkChange_7anh.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_7_clz_init_r8kc = com_tencent_mm_plugin_webview_stub_WebViewStubService_7_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_7_clz_init_r8kc.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$7(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_7_clz_init_r8kc.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$8');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz_method_da_0czf = com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz.da.overload('java.lang.String', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz_method_da_0czf.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$8.da(java.lang.String,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz_method_da_0czf.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz_method_h_16dg = com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz.h.overload('java.lang.String', 'float');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz_method_h_16dg.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$8.h(java.lang.String,float)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz_method_h_16dg.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz_init_yq2p = com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz_init_yq2p.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$8(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_8_clz_init_yq2p.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_9_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$9');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_9_clz_method_run_uuaf = com_tencent_mm_plugin_webview_stub_WebViewStubService_9_clz.run.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_9_clz_method_run_uuaf.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$9.run()');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_9_clz_method_run_uuaf.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_9_clz_init_wae1 = com_tencent_mm_plugin_webview_stub_WebViewStubService_9_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService', 'android.content.Intent');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_9_clz_init_wae1.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$9(com.tencent.mm.plugin.webview.stub.WebViewStubService,android.content.Intent)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_9_clz_init_wae1.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz = Java.use('com.tencent.mm.plugin.webview.model.WebViewJSSDKImageItem');
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz_method_writeToParcel_a69i = com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz.writeToParcel.overload('android.os.Parcel', 'int');
    com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz_method_writeToParcel_a69i.implementation = function(v0, v1) {
        printStacks('public void com.tencent.mm.plugin.webview.model.WebViewJSSDKImageItem.writeToParcel(android.os.Parcel,int)');
        com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz_method_writeToParcel_a69i.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz_method_describeContents_zdkc = com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz.describeContents.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz_method_describeContents_zdkc.implementation = function() {
        printStacks('public int com.tencent.mm.plugin.webview.model.WebViewJSSDKImageItem.describeContents()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz_method_describeContents_zdkc.call(this);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz_method_fxe_50zb = com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz.fxe.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz_method_fxe_50zb.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.model.WebViewJSSDKImageItem.fxe()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz_method_fxe_50zb.call(this);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz_method_fxd_uf7w = com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz.fxd.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz_method_fxd_uf7w.implementation = function() {
        printStacks('public final com.tencent.mm.plugin.webview.model.WebViewJSSDKFileItem com.tencent.mm.plugin.webview.model.WebViewJSSDKImageItem.fxd()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz_method_fxd_uf7w.call(this);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz_method_fxg_hxuh = com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz.fxg.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz_method_fxg_hxuh.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.model.WebViewJSSDKImageItem.fxg()');
        com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz_method_fxg_hxuh.call(this);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz_method_fxf_lhpp = com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz.fxf.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz_method_fxf_lhpp.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.model.WebViewJSSDKImageItem.fxf()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz_method_fxf_lhpp.call(this);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz_init_z9zq = com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz.$init.overload('android.os.Parcel');
    com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz_init_z9zq.implementation = function(v0) {
        printStacks('protected com.tencent.mm.plugin.webview.model.WebViewJSSDKImageItem(android.os.Parcel)');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz_init_z9zq.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz_init_151p = com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz.$init.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz_init_151p.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.model.WebViewJSSDKImageItem()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKImageItem_clz_init_151p.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$a');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz_method_dWd_rqm4 = com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz.dWd.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz_method_dWd_rqm4.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$a.dWd()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz_method_dWd_rqm4.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz_method_getRet_153i = com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz.getRet.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz_method_getRet_153i.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.stub.WebViewStubService$a.getRet()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz_method_getRet_153i.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz_method_getResult_frkd = com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz.getResult.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz_method_getResult_frkd.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$a.getResult()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz_method_getResult_frkd.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz_method_getType_vmig = com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz.getType.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz_method_getType_vmig.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.stub.WebViewStubService$a.getType()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz_method_getType_vmig.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz_init_4ynf = com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz.$init.overload('byte');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz_init_4ynf.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$a(byte)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz_init_4ynf.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz_init_zhak = com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz.$init.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz_init_zhak.implementation = function() {
        printStacks('private com.tencent.mm.plugin.webview.stub.WebViewStubService$a()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_a_clz_init_zhak.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$b');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_getErrCode_qfqp = com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz.getErrCode.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_getErrCode_qfqp.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.stub.WebViewStubService$b.getErrCode()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_getErrCode_qfqp.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_dWe_e2p9 = com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz.dWe.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_dWe_e2p9.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.stub.WebViewStubService$b.dWe()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_dWe_e2p9.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_getErrMsg_93u9 = com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz.getErrMsg.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_getErrMsg_93u9.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubService$b.getErrMsg()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_getErrMsg_93u9.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_getData_cvd7 = com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz.getData.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_getData_cvd7.implementation = function() {
        printStacks('public final android.os.Bundle com.tencent.mm.plugin.webview.stub.WebViewStubService$b.getData()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_getData_cvd7.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_getType_4u86 = com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz.getType.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_getType_4u86.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.stub.WebViewStubService$b.getType()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_method_getType_4u86.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_init_uz95 = com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz.$init.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_init_uz95.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.stub.WebViewStubService$b()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_b_clz_init_uz95.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_a_ifye = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_a_ifye.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.a(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_a_ifye.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_ebb_9thc = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.ebb.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_ebb_9thc.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.ebb()');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_ebb_9thc.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_i_4wvt = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.i.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_i_4wvt.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewSmileyPanel com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.i(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_i_4wvt.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_bnX_oyia = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.bnX.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_bnX_oyia.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.bnX()');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_bnX_oyia.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_onDetachedFromWindow_9i2i = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.onDetachedFromWindow.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_onDetachedFromWindow_9i2i.implementation = function() {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.onDetachedFromWindow()');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_onDetachedFromWindow_9i2i.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_a_wz0m = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter', 'int');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_a_wz0m.implementation = function(v0, v1) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.a(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter,int)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_a_wz0m.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_dXI_3ic1 = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.dXI.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_dXI_3ic1.implementation = function() {
        printStacks('private int com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.dXI()');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_dXI_3ic1.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_isShown_x2xd = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.isShown.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_isShown_x2xd.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.isShown()');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_isShown_x2xd.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_e_k21x = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.e.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_e_k21x.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.e(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_e_k21x.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_c_nyzt = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.c.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_c_nyzt.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.c(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_c_nyzt.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_a_c24f = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_a_c24f.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.a(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_a_c24f.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_g_n851 = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.g.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_g_n851.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.g(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_g_n851.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_j_o06o = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.j.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_j_o06o.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter$a com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.j(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_j_o06o.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_d_fg2m = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.d.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_d_fg2m.implementation = function(v0) {
        printStacks('static com.tencent.mm.ui.widget.MMEditText com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.d(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_d_fg2m.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setText_tsm9 = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.setText.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setText_tsm9.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.setText(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setText_tsm9.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_b_8oug = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_b_8oug.implementation = function(v0) {
        printStacks('static com.tencent.mm.ui.MMActivity com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.b(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_b_8oug.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setMaxCount_gr8j = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.setMaxCount.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setMaxCount_gr8j.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.setMaxCount(int)');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setMaxCount_gr8j.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_eba_ocbo = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.eba.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_eba_ocbo.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.eba()');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_eba_ocbo.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_f_0wkb = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.f.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_f_0wkb.implementation = function(v0) {
        printStacks('static android.widget.ImageButton com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.f(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_f_0wkb.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setOnSmileyPanelVisibilityChangedListener_ue62 = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.setOnSmileyPanelVisibilityChangedListener.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter$b');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setOnSmileyPanelVisibilityChangedListener_ue62.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.setOnSmileyPanelVisibilityChangedListener(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter$b)');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setOnSmileyPanelVisibilityChangedListener_ue62.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_hide_2xj5 = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.hide.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_hide_2xj5.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.hide()');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_hide_2xj5.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_l_6vxh = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.l.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_l_6vxh.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.l(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_l_6vxh.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setOnSmileyChosenListener_go7b = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.setOnSmileyChosenListener.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter$a');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setOnSmileyChosenListener_go7b.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.setOnSmileyChosenListener(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter$a)');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setOnSmileyChosenListener_go7b.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_k_vbqj = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.k.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_k_vbqj.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter$c com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.k(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_k_vbqj.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setOnTextSendListener_nrzw = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.setOnTextSendListener.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter$c');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setOnTextSendListener_nrzw.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.setOnTextSendListener(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter$c)');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_setOnTextSendListener_nrzw.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_h_0dpg = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.h.overload('com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_h_0dpg.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.h(com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter)');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_h_0dpg.call(com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_eaZ_of2d = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.eaZ.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_eaZ_of2d.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter.eaZ()');
        com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_method_eaZ_of2d.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_init_t5ac = com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz.$init.overload('android.content.Context', 'android.util.AttributeSet');
    com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_init_t5ac.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter(android.content.Context,android.util.AttributeSet)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_input_WebViewInputFooter_clz_init_t5ac.call(this, v0, v1);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz = Java.use('com.tencent.mm.ui.widget.MMWebView');
    var com_tencent_mm_ui_widget_MMWebView_clz_method_getRandomStr_2sae = com_tencent_mm_ui_widget_MMWebView_clz.getRandomStr.overload();
    com_tencent_mm_ui_widget_MMWebView_clz_method_getRandomStr_2sae.implementation = function() {
        printStacks('public java.lang.String com.tencent.mm.ui.widget.MMWebView.getRandomStr()');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_getRandomStr_2sae.call(this);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_e_n6dg = com_tencent_mm_ui_widget_MMWebView_clz.e.overload('com.tencent.mm.ui.widget.MMWebView', 'boolean');
    com_tencent_mm_ui_widget_MMWebView_clz_method_e_n6dg.implementation = function(v0, v1) {
        printStacks('static boolean com.tencent.mm.ui.widget.MMWebView.e(com.tencent.mm.ui.widget.MMWebView,boolean)');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_e_n6dg.call(com_tencent_mm_ui_widget_MMWebView_clz, v0, v1);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_getIsX5Kernel_s23t = com_tencent_mm_ui_widget_MMWebView_clz.getIsX5Kernel.overload();
    com_tencent_mm_ui_widget_MMWebView_clz_method_getIsX5Kernel_s23t.implementation = function() {
        printStacks('public boolean com.tencent.mm.ui.widget.MMWebView.getIsX5Kernel()');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_getIsX5Kernel_s23t.call(this);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_g_j5mj = com_tencent_mm_ui_widget_MMWebView_clz.g.overload('int', 'int', 'boolean', 'boolean');
    com_tencent_mm_ui_widget_MMWebView_clz_method_g_j5mj.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.ui.widget.MMWebView.g(int,int,boolean,boolean)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_g_j5mj.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_eOw_zn3b = com_tencent_mm_ui_widget_MMWebView_clz.eOw.overload();
    com_tencent_mm_ui_widget_MMWebView_clz_method_eOw_zn3b.implementation = function() {
        printStacks('protected final void com.tencent.mm.ui.widget.MMWebView.eOw()');
        com_tencent_mm_ui_widget_MMWebView_clz_method_eOw_zn3b.call(this);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_a_1dpl = com_tencent_mm_ui_widget_MMWebView_clz.a.overload('com.tencent.mm.ui.widget.MMWebView$d');
    com_tencent_mm_ui_widget_MMWebView_clz_method_a_1dpl.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.ui.widget.MMWebView.a(com.tencent.mm.ui.widget.MMWebView$d)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_a_1dpl.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_af_n64n = com_tencent_mm_ui_widget_MMWebView_clz.af.overload('android.view.MotionEvent');
    com_tencent_mm_ui_widget_MMWebView_clz_method_af_n64n.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.ui.widget.MMWebView.af(android.view.MotionEvent)');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_af_n64n.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_onWebViewScrollChanged_1vow = com_tencent_mm_ui_widget_MMWebView_clz.onWebViewScrollChanged.overload('int', 'int', 'int', 'int');
    com_tencent_mm_ui_widget_MMWebView_clz_method_onWebViewScrollChanged_1vow.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.mm.ui.widget.MMWebView.onWebViewScrollChanged(int,int,int,int)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_onWebViewScrollChanged_1vow.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_setCompetitorView_e07e = com_tencent_mm_ui_widget_MMWebView_clz.setCompetitorView.overload('android.view.ViewGroup');
    com_tencent_mm_ui_widget_MMWebView_clz_method_setCompetitorView_e07e.implementation = function(v0) {
        printStacks('public void com.tencent.mm.ui.widget.MMWebView.setCompetitorView(android.view.ViewGroup)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_setCompetitorView_e07e.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_ag_7k4w = com_tencent_mm_ui_widget_MMWebView_clz.ag.overload('android.view.MotionEvent');
    com_tencent_mm_ui_widget_MMWebView_clz_method_ag_7k4w.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.ui.widget.MMWebView.ag(android.view.MotionEvent)');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_ag_7k4w.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_jK_ie57 = com_tencent_mm_ui_widget_MMWebView_clz.jK.overload('android.content.Context');
    com_tencent_mm_ui_widget_MMWebView_clz_method_jK_ie57.implementation = function(v0) {
        printStacks('public static void com.tencent.mm.ui.widget.MMWebView.jK(android.content.Context)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_jK_ie57.call(com_tencent_mm_ui_widget_MMWebView_clz, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_eOy_3wgq = com_tencent_mm_ui_widget_MMWebView_clz.eOy.overload();
    com_tencent_mm_ui_widget_MMWebView_clz_method_eOy_3wgq.implementation = function() {
        printStacks('public final void com.tencent.mm.ui.widget.MMWebView.eOy()');
        com_tencent_mm_ui_widget_MMWebView_clz_method_eOy_3wgq.call(this);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_onShow_5lmt = com_tencent_mm_ui_widget_MMWebView_clz.onShow.overload();
    com_tencent_mm_ui_widget_MMWebView_clz_method_onShow_5lmt.implementation = function() {
        printStacks('public final void com.tencent.mm.ui.widget.MMWebView.onShow()');
        com_tencent_mm_ui_widget_MMWebView_clz_method_onShow_5lmt.call(this);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_g_9mqp = com_tencent_mm_ui_widget_MMWebView_clz.g.overload('com.tencent.mm.ui.widget.MMWebView');
    com_tencent_mm_ui_widget_MMWebView_clz_method_g_9mqp.implementation = function(v0) {
        printStacks('static android.view.View$OnTouchListener com.tencent.mm.ui.widget.MMWebView.g(com.tencent.mm.ui.widget.MMWebView)');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_g_9mqp.call(com_tencent_mm_ui_widget_MMWebView_clz, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_a_dj0u = com_tencent_mm_ui_widget_MMWebView_clz.a.overload('com.tencent.mm.ui.widget.MMWebView', 'java.lang.String');
    com_tencent_mm_ui_widget_MMWebView_clz_method_a_dj0u.implementation = function(v0, v1) {
        printStacks('private static boolean com.tencent.mm.ui.widget.MMWebView.a(com.tencent.mm.ui.widget.MMWebView,java.lang.String)');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_a_dj0u.call(com_tencent_mm_ui_widget_MMWebView_clz, v0, v1);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_b_c3tb = com_tencent_mm_ui_widget_MMWebView_clz.b.overload('com.tencent.mm.ui.widget.MMWebView', 'boolean');
    com_tencent_mm_ui_widget_MMWebView_clz_method_b_c3tb.implementation = function(v0, v1) {
        printStacks('static boolean com.tencent.mm.ui.widget.MMWebView.b(com.tencent.mm.ui.widget.MMWebView,boolean)');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_b_c3tb.call(com_tencent_mm_ui_widget_MMWebView_clz, v0, v1);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_loadUrl_ommk = com_tencent_mm_ui_widget_MMWebView_clz.loadUrl.overload('java.lang.String');
    com_tencent_mm_ui_widget_MMWebView_clz_method_loadUrl_ommk.implementation = function(v0) {
        printStacks('public void com.tencent.mm.ui.widget.MMWebView.loadUrl(java.lang.String)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_loadUrl_ommk.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_setRandomStr_jni7 = com_tencent_mm_ui_widget_MMWebView_clz.setRandomStr.overload('java.lang.String');
    com_tencent_mm_ui_widget_MMWebView_clz_method_setRandomStr_jni7.implementation = function(v0) {
        printStacks('public void com.tencent.mm.ui.widget.MMWebView.setRandomStr(java.lang.String)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_setRandomStr_jni7.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_e_w74b = com_tencent_mm_ui_widget_MMWebView_clz.e.overload('com.tencent.mm.ui.widget.MMWebView');
    com_tencent_mm_ui_widget_MMWebView_clz_method_e_w74b.implementation = function(v0) {
        printStacks('static android.view.ViewGroup com.tencent.mm.ui.widget.MMWebView.e(com.tencent.mm.ui.widget.MMWebView)');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_e_w74b.call(com_tencent_mm_ui_widget_MMWebView_clz, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_onHide_jsy2 = com_tencent_mm_ui_widget_MMWebView_clz.onHide.overload();
    com_tencent_mm_ui_widget_MMWebView_clz_method_onHide_jsy2.implementation = function() {
        printStacks('public final void com.tencent.mm.ui.widget.MMWebView.onHide()');
        com_tencent_mm_ui_widget_MMWebView_clz_method_onHide_jsy2.call(this);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_ah_vvam = com_tencent_mm_ui_widget_MMWebView_clz.ah.overload('android.view.MotionEvent');
    com_tencent_mm_ui_widget_MMWebView_clz_method_ah_vvam.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.ui.widget.MMWebView.ah(android.view.MotionEvent)');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_ah_vvam.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_eOx_a2i2 = com_tencent_mm_ui_widget_MMWebView_clz.eOx.overload();
    com_tencent_mm_ui_widget_MMWebView_clz_method_eOx_a2i2.implementation = function() {
        printStacks('public final void com.tencent.mm.ui.widget.MMWebView.eOx()');
        com_tencent_mm_ui_widget_MMWebView_clz_method_eOx_a2i2.call(this);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_setPreload_mhhc = com_tencent_mm_ui_widget_MMWebView_clz.setPreload.overload('boolean');
    com_tencent_mm_ui_widget_MMWebView_clz_method_setPreload_mhhc.implementation = function(v0) {
        printStacks('public void com.tencent.mm.ui.widget.MMWebView.setPreload(boolean)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_setPreload_mhhc.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_f_nrew = com_tencent_mm_ui_widget_MMWebView_clz.f.overload('com.tencent.mm.ui.widget.MMWebView');
    com_tencent_mm_ui_widget_MMWebView_clz_method_f_nrew.implementation = function(v0) {
        printStacks('static android.view.View$OnTouchListener com.tencent.mm.ui.widget.MMWebView.f(com.tencent.mm.ui.widget.MMWebView)');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_f_nrew.call(com_tencent_mm_ui_widget_MMWebView_clz, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_a_2wes = com_tencent_mm_ui_widget_MMWebView_clz.a.overload('java.net.URL', 'java.lang.String', 'android.webkit.ValueCallback');
    com_tencent_mm_ui_widget_MMWebView_clz_method_a_2wes.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.mm.ui.widget.MMWebView.a(java.net.URL,java.lang.String,android.webkit.ValueCallback)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_a_2wes.call(this, v0, v1, v2);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_R_f44u = com_tencent_mm_ui_widget_MMWebView_clz.R.overload('int', 'int', 'int', 'int');
    com_tencent_mm_ui_widget_MMWebView_clz_method_R_f44u.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.ui.widget.MMWebView.R(int,int,int,int)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_R_f44u.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_c_h1k4 = com_tencent_mm_ui_widget_MMWebView_clz.c.overload('com.tencent.mm.ui.widget.MMWebView', 'boolean');
    com_tencent_mm_ui_widget_MMWebView_clz_method_c_h1k4.implementation = function(v0, v1) {
        printStacks('static boolean com.tencent.mm.ui.widget.MMWebView.c(com.tencent.mm.ui.widget.MMWebView,boolean)');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_c_h1k4.call(com_tencent_mm_ui_widget_MMWebView_clz, v0, v1);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_getPerformanceHelper_olfd = com_tencent_mm_ui_widget_MMWebView_clz.getPerformanceHelper.overload();
    com_tencent_mm_ui_widget_MMWebView_clz_method_getPerformanceHelper_olfd.implementation = function() {
        printStacks('public com.tencent.mm.pluginsdk.q com.tencent.mm.ui.widget.MMWebView.getPerformanceHelper()');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_getPerformanceHelper_olfd.call(this);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_destroy_00gp = com_tencent_mm_ui_widget_MMWebView_clz.destroy.overload();
    com_tencent_mm_ui_widget_MMWebView_clz_method_destroy_00gp.implementation = function() {
        printStacks('public void com.tencent.mm.ui.widget.MMWebView.destroy()');
        com_tencent_mm_ui_widget_MMWebView_clz_method_destroy_00gp.call(this);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_evaluateJavascript_op4e = com_tencent_mm_ui_widget_MMWebView_clz.evaluateJavascript.overload('java.lang.String', 'android.webkit.ValueCallback');
    com_tencent_mm_ui_widget_MMWebView_clz_method_evaluateJavascript_op4e.implementation = function(v0, v1) {
        printStacks('public void com.tencent.mm.ui.widget.MMWebView.evaluateJavascript(java.lang.String,android.webkit.ValueCallback)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_evaluateJavascript_op4e.call(this, v0, v1);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_d_92xd = com_tencent_mm_ui_widget_MMWebView_clz.d.overload('com.tencent.mm.ui.widget.MMWebView', 'boolean');
    com_tencent_mm_ui_widget_MMWebView_clz_method_d_92xd.implementation = function(v0, v1) {
        printStacks('static boolean com.tencent.mm.ui.widget.MMWebView.d(com.tencent.mm.ui.widget.MMWebView,boolean)');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_d_92xd.call(com_tencent_mm_ui_widget_MMWebView_clz, v0, v1);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_c_ul58 = com_tencent_mm_ui_widget_MMWebView_clz.c.overload('int', 'int', 'int', 'int', 'int', 'int', 'int', 'int', 'boolean');
    com_tencent_mm_ui_widget_MMWebView_clz_method_c_ul58.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7, v8) {
        printStacks('public final boolean com.tencent.mm.ui.widget.MMWebView.c(int,int,int,int,int,int,int,int,boolean)');
        return com_tencent_mm_ui_widget_MMWebView_clz_method_c_ul58.call(this, v0, v1, v2, v3, v4, v5, v6, v7, v8);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_setOnTouchListener_cgnp = com_tencent_mm_ui_widget_MMWebView_clz.setOnTouchListener.overload('android.view.View$OnTouchListener');
    com_tencent_mm_ui_widget_MMWebView_clz_method_setOnTouchListener_cgnp.implementation = function(v0) {
        printStacks('public void com.tencent.mm.ui.widget.MMWebView.setOnTouchListener(android.view.View$OnTouchListener)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_setOnTouchListener_cgnp.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_eOz_y47f = com_tencent_mm_ui_widget_MMWebView_clz.eOz.overload();
    com_tencent_mm_ui_widget_MMWebView_clz_method_eOz_y47f.implementation = function() {
        printStacks('public final void com.tencent.mm.ui.widget.MMWebView.eOz()');
        com_tencent_mm_ui_widget_MMWebView_clz_method_eOz_y47f.call(this);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_method_setOnCustomTouchListener_6obr = com_tencent_mm_ui_widget_MMWebView_clz.setOnCustomTouchListener.overload('android.view.View$OnTouchListener');
    com_tencent_mm_ui_widget_MMWebView_clz_method_setOnCustomTouchListener_6obr.implementation = function(v0) {
        printStacks('public void com.tencent.mm.ui.widget.MMWebView.setOnCustomTouchListener(android.view.View$OnTouchListener)');
        com_tencent_mm_ui_widget_MMWebView_clz_method_setOnCustomTouchListener_6obr.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_init_gbjk = com_tencent_mm_ui_widget_MMWebView_clz.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int');
    com_tencent_mm_ui_widget_MMWebView_clz_init_gbjk.implementation = function(v0, v1, v2) {
        printStacks('public com.tencent.mm.ui.widget.MMWebView(android.content.Context,android.util.AttributeSet,int)');
        return com_tencent_mm_ui_widget_MMWebView_clz_init_gbjk.call(this, v0, v1, v2);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_init_u14w = com_tencent_mm_ui_widget_MMWebView_clz.$init.overload('android.content.Context');
    com_tencent_mm_ui_widget_MMWebView_clz_init_u14w.implementation = function(v0) {
        printStacks('public com.tencent.mm.ui.widget.MMWebView(android.content.Context)');
        return com_tencent_mm_ui_widget_MMWebView_clz_init_u14w.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_init_z0o1 = com_tencent_mm_ui_widget_MMWebView_clz.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int', 'com.tencent.xweb.WebView$c');
    com_tencent_mm_ui_widget_MMWebView_clz_init_z0o1.implementation = function(v0, v1, v2, v3) {
        printStacks('public com.tencent.mm.ui.widget.MMWebView(android.content.Context,android.util.AttributeSet,int,com.tencent.xweb.WebView$c)');
        return com_tencent_mm_ui_widget_MMWebView_clz_init_z0o1.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_ui_widget_MMWebView_clz_init_pr7h = com_tencent_mm_ui_widget_MMWebView_clz.$init.overload('android.content.Context', 'android.util.AttributeSet');
    com_tencent_mm_ui_widget_MMWebView_clz_init_pr7h.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.ui.widget.MMWebView(android.content.Context,android.util.AttributeSet)');
        return com_tencent_mm_ui_widget_MMWebView_clz_init_pr7h.call(this, v0, v1);
    };
    var com_tencent_xweb_WebView_clz = Java.use('com.tencent.xweb.WebView');
    var com_tencent_xweb_WebView_clz_method_initWebviewCore_lr6a = com_tencent_xweb_WebView_clz.initWebviewCore.overload('android.content.Context', 'com.tencent.xweb.WebView$c', 'java.lang.String', 'com.tencent.xweb.WebView$PreInitCallback');
    com_tencent_xweb_WebView_clz_method_initWebviewCore_lr6a.implementation = function(v0, v1, v2, v3) {
        printStacks('public static void com.tencent.xweb.WebView.initWebviewCore(android.content.Context,com.tencent.xweb.WebView$c,java.lang.String,com.tencent.xweb.WebView$PreInitCallback)');
        com_tencent_xweb_WebView_clz_method_initWebviewCore_lr6a.call(com_tencent_xweb_WebView_clz, v0, v1, v2, v3);
    };
    var com_tencent_xweb_WebView_clz_method_getCookieManager_zk9r = com_tencent_xweb_WebView_clz.getCookieManager.overload();
    com_tencent_xweb_WebView_clz_method_getCookieManager_zk9r.implementation = function() {
        printStacks('public com.tencent.xweb.internal.CookieInternal$ICookieManagerInternal com.tencent.xweb.WebView.getCookieManager()');
        return com_tencent_xweb_WebView_clz_method_getCookieManager_zk9r.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_getFullscreenVideoKind_hx06 = com_tencent_xweb_WebView_clz.getFullscreenVideoKind.overload();
    com_tencent_xweb_WebView_clz_method_getFullscreenVideoKind_hx06.implementation = function() {
        printStacks('public com.tencent.xweb.WebView$a com.tencent.xweb.WebView.getFullscreenVideoKind()');
        return com_tencent_xweb_WebView_clz_method_getFullscreenVideoKind_hx06.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_enablePlatformNotifications_9ikw = com_tencent_xweb_WebView_clz.enablePlatformNotifications.overload();
    com_tencent_xweb_WebView_clz_method_enablePlatformNotifications_9ikw.implementation = function() {
        printStacks('public static void com.tencent.xweb.WebView.enablePlatformNotifications()');
        com_tencent_xweb_WebView_clz_method_enablePlatformNotifications_9ikw.call(com_tencent_xweb_WebView_clz);
    };
    var com_tencent_xweb_WebView_clz_method_getTitle_3sdr = com_tencent_xweb_WebView_clz.getTitle.overload();
    com_tencent_xweb_WebView_clz_method_getTitle_3sdr.implementation = function() {
        printStacks('public java.lang.String com.tencent.xweb.WebView.getTitle()');
        return com_tencent_xweb_WebView_clz_method_getTitle_3sdr.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_getHitTestResult_vkdh = com_tencent_xweb_WebView_clz.getHitTestResult.overload();
    com_tencent_xweb_WebView_clz_method_getHitTestResult_vkdh.implementation = function() {
        printStacks('public com.tencent.xweb.WebView$b com.tencent.xweb.WebView.getHitTestResult()');
        return com_tencent_xweb_WebView_clz_method_getHitTestResult_vkdh.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_drawChild_87bp = com_tencent_xweb_WebView_clz.drawChild.overload('android.graphics.Canvas', 'android.view.View', 'long');
    com_tencent_xweb_WebView_clz_method_drawChild_87bp.implementation = function(v0, v1, v2) {
        printStacks('protected boolean com.tencent.xweb.WebView.drawChild(android.graphics.Canvas,android.view.View,long)');
        return com_tencent_xweb_WebView_clz_method_drawChild_87bp.call(this, v0, v1, v2);
    };
    var com_tencent_xweb_WebView_clz_method_getCurStrModule_126e = com_tencent_xweb_WebView_clz.getCurStrModule.overload();
    com_tencent_xweb_WebView_clz_method_getCurStrModule_126e.implementation = function() {
        printStacks('public static java.lang.String com.tencent.xweb.WebView.getCurStrModule()');
        return com_tencent_xweb_WebView_clz_method_getCurStrModule_126e.call(com_tencent_xweb_WebView_clz);
    };
    var com_tencent_xweb_WebView_clz_method_goBack_lnno = com_tencent_xweb_WebView_clz.goBack.overload();
    com_tencent_xweb_WebView_clz_method_goBack_lnno.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.goBack()');
        com_tencent_xweb_WebView_clz_method_goBack_lnno.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_disableVideoJsCallback_ug7v = com_tencent_xweb_WebView_clz.disableVideoJsCallback.overload('boolean');
    com_tencent_xweb_WebView_clz_method_disableVideoJsCallback_ug7v.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.disableVideoJsCallback(boolean)');
        com_tencent_xweb_WebView_clz_method_disableVideoJsCallback_ug7v.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_removeJavascriptInterface_a6di = com_tencent_xweb_WebView_clz.removeJavascriptInterface.overload('java.lang.String');
    com_tencent_xweb_WebView_clz_method_removeJavascriptInterface_a6di.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.removeJavascriptInterface(java.lang.String)');
        com_tencent_xweb_WebView_clz_method_removeJavascriptInterface_a6di.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_clearHistory_zolc = com_tencent_xweb_WebView_clz.clearHistory.overload();
    com_tencent_xweb_WebView_clz_method_clearHistory_zolc.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.clearHistory()');
        com_tencent_xweb_WebView_clz_method_clearHistory_zolc.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_isX5WrappedSysKernel_v7uk = com_tencent_xweb_WebView_clz.isX5WrappedSysKernel.overload();
    com_tencent_xweb_WebView_clz_method_isX5WrappedSysKernel_v7uk.implementation = function() {
        printStacks('public boolean com.tencent.xweb.WebView.isX5WrappedSysKernel()');
        return com_tencent_xweb_WebView_clz_method_isX5WrappedSysKernel_v7uk.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_setVideoJsCallback_mnpl = com_tencent_xweb_WebView_clz.setVideoJsCallback.overload('com.tencent.xweb.r');
    com_tencent_xweb_WebView_clz_method_setVideoJsCallback_mnpl.implementation = function(v0) {
        printStacks('public com.tencent.xweb.q com.tencent.xweb.WebView.setVideoJsCallback(com.tencent.xweb.r)');
        return com_tencent_xweb_WebView_clz_method_setVideoJsCallback_mnpl.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_setJSExceptionListener_38x3 = com_tencent_xweb_WebView_clz.setJSExceptionListener.overload('com.tencent.xweb.z');
    com_tencent_xweb_WebView_clz_method_setJSExceptionListener_38x3.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setJSExceptionListener(com.tencent.xweb.z)');
        com_tencent_xweb_WebView_clz_method_setJSExceptionListener_38x3.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_a_iem3 = com_tencent_xweb_WebView_clz.a.overload('com.tencent.xweb.WebView$c', 'android.content.Context', 'com.tencent.xweb.WebView$PreInitCallback', 'boolean');
    com_tencent_xweb_WebView_clz_method_a_iem3.implementation = function(v0, v1, v2, v3) {
        printStacks('private static boolean com.tencent.xweb.WebView.a(com.tencent.xweb.WebView$c,android.content.Context,com.tencent.xweb.WebView$PreInitCallback,boolean)');
        return com_tencent_xweb_WebView_clz_method_a_iem3.call(com_tencent_xweb_WebView_clz, v0, v1, v2, v3);
    };
    var com_tencent_xweb_WebView_clz_method_getCanReboot_p6mq = com_tencent_xweb_WebView_clz.getCanReboot.overload();
    com_tencent_xweb_WebView_clz_method_getCanReboot_p6mq.implementation = function() {
        printStacks('public static boolean com.tencent.xweb.WebView.getCanReboot()');
        return com_tencent_xweb_WebView_clz_method_getCanReboot_p6mq.call(com_tencent_xweb_WebView_clz);
    };
    var com_tencent_xweb_WebView_clz_method__disablePlatformNotifications_jpzx = com_tencent_xweb_WebView_clz._disablePlatformNotifications.overload();
    com_tencent_xweb_WebView_clz_method__disablePlatformNotifications_jpzx.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView._disablePlatformNotifications()');
        com_tencent_xweb_WebView_clz_method__disablePlatformNotifications_jpzx.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_disablePlatformNotifications_vml7 = com_tencent_xweb_WebView_clz.disablePlatformNotifications.overload();
    com_tencent_xweb_WebView_clz_method_disablePlatformNotifications_vml7.implementation = function() {
        printStacks('public static void com.tencent.xweb.WebView.disablePlatformNotifications()');
        com_tencent_xweb_WebView_clz_method_disablePlatformNotifications_vml7.call(com_tencent_xweb_WebView_clz);
    };
    var com_tencent_xweb_WebView_clz_method_startLongScreenshot_q49v = com_tencent_xweb_WebView_clz.startLongScreenshot.overload('com.tencent.xweb.n', 'boolean');
    com_tencent_xweb_WebView_clz_method_startLongScreenshot_q49v.implementation = function(v0, v1) {
        printStacks('public void com.tencent.xweb.WebView.startLongScreenshot(com.tencent.xweb.n,boolean)');
        com_tencent_xweb_WebView_clz_method_startLongScreenshot_q49v.call(this, v0, v1);
    };
    var com_tencent_xweb_WebView_clz_method_setFocusableInTouchMode_n8na = com_tencent_xweb_WebView_clz.setFocusableInTouchMode.overload('boolean');
    com_tencent_xweb_WebView_clz_method_setFocusableInTouchMode_n8na.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setFocusableInTouchMode(boolean)');
        com_tencent_xweb_WebView_clz_method_setFocusableInTouchMode_n8na.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_addJavascriptInterface_lm5d = com_tencent_xweb_WebView_clz.addJavascriptInterface.overload('java.lang.Object', 'java.lang.String');
    com_tencent_xweb_WebView_clz_method_addJavascriptInterface_lm5d.implementation = function(v0, v1) {
        printStacks('public void com.tencent.xweb.WebView.addJavascriptInterface(java.lang.Object,java.lang.String)');
        com_tencent_xweb_WebView_clz_method_addJavascriptInterface_lm5d.call(this, v0, v1);
    };
    var com_tencent_xweb_WebView_clz_method_leaveFullscreen_vimf = com_tencent_xweb_WebView_clz.leaveFullscreen.overload();
    com_tencent_xweb_WebView_clz_method_leaveFullscreen_vimf.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.leaveFullscreen()');
        com_tencent_xweb_WebView_clz_method_leaveFullscreen_vimf.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_super_overScrollBy_0wvr = com_tencent_xweb_WebView_clz.super_overScrollBy.overload('int', 'int', 'int', 'int', 'int', 'int', 'int', 'int', 'boolean');
    com_tencent_xweb_WebView_clz_method_super_overScrollBy_0wvr.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7, v8) {
        printStacks('public boolean com.tencent.xweb.WebView.super_overScrollBy(int,int,int,int,int,int,int,int,boolean)');
        return com_tencent_xweb_WebView_clz_method_super_overScrollBy_0wvr.call(this, v0, v1, v2, v3, v4, v5, v6, v7, v8);
    };
    var com_tencent_xweb_WebView_clz_method_getBitmap_ilag = com_tencent_xweb_WebView_clz.getBitmap.overload();
    com_tencent_xweb_WebView_clz_method_getBitmap_ilag.implementation = function() {
        printStacks('public android.graphics.Bitmap com.tencent.xweb.WebView.getBitmap()');
        return com_tencent_xweb_WebView_clz_method_getBitmap_ilag.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_reportLoadByReason_hhwk = com_tencent_xweb_WebView_clz.reportLoadByReason.overload();
    com_tencent_xweb_WebView_clz_method_reportLoadByReason_hhwk.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.reportLoadByReason()');
        com_tencent_xweb_WebView_clz_method_reportLoadByReason_hhwk.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_isXWalk_tdtc = com_tencent_xweb_WebView_clz.isXWalk.overload();
    com_tencent_xweb_WebView_clz_method_isXWalk_tdtc.implementation = function() {
        printStacks('public static boolean com.tencent.xweb.WebView.isXWalk()');
        return com_tencent_xweb_WebView_clz_method_isXWalk_tdtc.call(com_tencent_xweb_WebView_clz);
    };
    var com_tencent_xweb_WebView_clz_method_getCookieSyncManager_66mi = com_tencent_xweb_WebView_clz.getCookieSyncManager.overload();
    com_tencent_xweb_WebView_clz_method_getCookieSyncManager_66mi.implementation = function() {
        printStacks('public com.tencent.xweb.internal.CookieInternal$ICookieSyncManagerInternal com.tencent.xweb.WebView.getCookieSyncManager()');
        return com_tencent_xweb_WebView_clz_method_getCookieSyncManager_66mi.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_getUrl_nix6 = com_tencent_xweb_WebView_clz.getUrl.overload();
    com_tencent_xweb_WebView_clz_method_getUrl_nix6.implementation = function() {
        printStacks('public java.lang.String com.tencent.xweb.WebView.getUrl()');
        return com_tencent_xweb_WebView_clz_method_getUrl_nix6.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_onResume_kf64 = com_tencent_xweb_WebView_clz.onResume.overload();
    com_tencent_xweb_WebView_clz_method_onResume_kf64.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.onResume()');
        com_tencent_xweb_WebView_clz_method_onResume_kf64.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_getPreferedWebviewType_6xn8 = com_tencent_xweb_WebView_clz.getPreferedWebviewType.overload('android.content.Context', 'java.lang.String');
    com_tencent_xweb_WebView_clz_method_getPreferedWebviewType_6xn8.implementation = function(v0, v1) {
        printStacks('public static com.tencent.xweb.WebView$c com.tencent.xweb.WebView.getPreferedWebviewType(android.content.Context,java.lang.String)');
        return com_tencent_xweb_WebView_clz_method_getPreferedWebviewType_6xn8.call(com_tencent_xweb_WebView_clz, v0, v1);
    };
    var com_tencent_xweb_WebView_clz_method_goForward_pwsh = com_tencent_xweb_WebView_clz.goForward.overload();
    com_tencent_xweb_WebView_clz_method_goForward_pwsh.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.goForward()');
        com_tencent_xweb_WebView_clz_method_goForward_pwsh.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_getUsingTbsCoreVersion_fywf = com_tencent_xweb_WebView_clz.getUsingTbsCoreVersion.overload('android.content.Context');
    com_tencent_xweb_WebView_clz_method_getUsingTbsCoreVersion_fywf.implementation = function(v0) {
        printStacks('public static int com.tencent.xweb.WebView.getUsingTbsCoreVersion(android.content.Context)');
        return com_tencent_xweb_WebView_clz_method_getUsingTbsCoreVersion_fywf.call(com_tencent_xweb_WebView_clz, v0);
    };
    var com_tencent_xweb_WebView_clz_method_stopLoading_nhal = com_tencent_xweb_WebView_clz.stopLoading.overload();
    com_tencent_xweb_WebView_clz_method_stopLoading_nhal.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.stopLoading()');
        com_tencent_xweb_WebView_clz_method_stopLoading_nhal.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_getScrollHeight_9pen = com_tencent_xweb_WebView_clz.getScrollHeight.overload();
    com_tencent_xweb_WebView_clz_method_getScrollHeight_9pen.implementation = function() {
        printStacks('public int com.tencent.xweb.WebView.getScrollHeight()');
        return com_tencent_xweb_WebView_clz_method_getScrollHeight_9pen.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_canGoForward_mvzc = com_tencent_xweb_WebView_clz.canGoForward.overload();
    com_tencent_xweb_WebView_clz_method_canGoForward_mvzc.implementation = function() {
        printStacks('public boolean com.tencent.xweb.WebView.canGoForward()');
        return com_tencent_xweb_WebView_clz_method_canGoForward_mvzc.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_zoomOut_cjtr = com_tencent_xweb_WebView_clz.zoomOut.overload();
    com_tencent_xweb_WebView_clz_method_zoomOut_cjtr.implementation = function() {
        printStacks('public boolean com.tencent.xweb.WebView.zoomOut()');
        return com_tencent_xweb_WebView_clz_method_zoomOut_cjtr.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_drawCanvas_ro6t = com_tencent_xweb_WebView_clz.drawCanvas.overload('android.graphics.Canvas');
    com_tencent_xweb_WebView_clz_method_drawCanvas_ro6t.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.drawCanvas(android.graphics.Canvas)');
        com_tencent_xweb_WebView_clz_method_drawCanvas_ro6t.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_onWebViewScrollChanged_uime = com_tencent_xweb_WebView_clz.onWebViewScrollChanged.overload('int', 'int', 'int', 'int');
    com_tencent_xweb_WebView_clz_method_onWebViewScrollChanged_uime.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.xweb.WebView.onWebViewScrollChanged(int,int,int,int)');
        com_tencent_xweb_WebView_clz_method_onWebViewScrollChanged_uime.call(this, v0, v1, v2, v3);
    };
    var com_tencent_xweb_WebView_clz_method_getWebScrollX_547h = com_tencent_xweb_WebView_clz.getWebScrollX.overload();
    com_tencent_xweb_WebView_clz_method_getWebScrollX_547h.implementation = function() {
        printStacks('public int com.tencent.xweb.WebView.getWebScrollX()');
        return com_tencent_xweb_WebView_clz_method_getWebScrollX_547h.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_canGoBack_nepw = com_tencent_xweb_WebView_clz.canGoBack.overload();
    com_tencent_xweb_WebView_clz_method_canGoBack_nepw.implementation = function() {
        printStacks('public boolean com.tencent.xweb.WebView.canGoBack()');
        return com_tencent_xweb_WebView_clz_method_canGoBack_nepw.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_setX5Interface_6fsl = com_tencent_xweb_WebView_clz.setX5Interface.overload('com.tencent.xweb.x5.sdk.c');
    com_tencent_xweb_WebView_clz_method_setX5Interface_6fsl.implementation = function(v0) {
        printStacks('public static void com.tencent.xweb.WebView.setX5Interface(com.tencent.xweb.x5.sdk.c)');
        com_tencent_xweb_WebView_clz_method_setX5Interface_6fsl.call(com_tencent_xweb_WebView_clz, v0);
    };
    var com_tencent_xweb_WebView_clz_method_getWebCoreType_q1s3 = com_tencent_xweb_WebView_clz.getWebCoreType.overload();
    com_tencent_xweb_WebView_clz_method_getWebCoreType_q1s3.implementation = function() {
        printStacks('public com.tencent.xweb.WebView$c com.tencent.xweb.WebView.getWebCoreType()');
        return com_tencent_xweb_WebView_clz_method_getWebCoreType_q1s3.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_setA8keyReason_pr13 = com_tencent_xweb_WebView_clz.setA8keyReason.overload('int');
    com_tencent_xweb_WebView_clz_method_setA8keyReason_pr13.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setA8keyReason(int)');
        com_tencent_xweb_WebView_clz_method_setA8keyReason_pr13.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_getImageBitmapToFile_lw8h = com_tencent_xweb_WebView_clz.getImageBitmapToFile.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'com.tencent.xweb.i');
    com_tencent_xweb_WebView_clz_method_getImageBitmapToFile_lw8h.implementation = function(v0, v1, v2, v3) {
        printStacks('public boolean com.tencent.xweb.WebView.getImageBitmapToFile(java.lang.String,java.lang.String,java.lang.String,com.tencent.xweb.i)');
        return com_tencent_xweb_WebView_clz_method_getImageBitmapToFile_lw8h.call(this, v0, v1, v2, v3);
    };
    var com_tencent_xweb_WebView_clz_method_isSys_46i9 = com_tencent_xweb_WebView_clz.isSys.overload();
    com_tencent_xweb_WebView_clz_method_isSys_46i9.implementation = function() {
        printStacks('public static boolean com.tencent.xweb.WebView.isSys()');
        return com_tencent_xweb_WebView_clz_method_isSys_46i9.call(com_tencent_xweb_WebView_clz);
    };
    var com_tencent_xweb_WebView_clz_method_getCurWebType_cwf6 = com_tencent_xweb_WebView_clz.getCurWebType.overload();
    com_tencent_xweb_WebView_clz_method_getCurWebType_cwf6.implementation = function() {
        printStacks('public static com.tencent.xweb.WebView$c com.tencent.xweb.WebView.getCurWebType()');
        return com_tencent_xweb_WebView_clz_method_getCurWebType_cwf6.call(com_tencent_xweb_WebView_clz);
    };
    var com_tencent_xweb_WebView_clz_method_setBackgroundColor_gosx = com_tencent_xweb_WebView_clz.setBackgroundColor.overload('int');
    com_tencent_xweb_WebView_clz_method_setBackgroundColor_gosx.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setBackgroundColor(int)');
        com_tencent_xweb_WebView_clz_method_setBackgroundColor_gosx.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_getAbstractInfo_3sgn = com_tencent_xweb_WebView_clz.getAbstractInfo.overload();
    com_tencent_xweb_WebView_clz_method_getAbstractInfo_3sgn.implementation = function() {
        printStacks('public java.lang.String com.tencent.xweb.WebView.getAbstractInfo()');
        return com_tencent_xweb_WebView_clz_method_getAbstractInfo_3sgn.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_getX5WebViewExtension_s9y4 = com_tencent_xweb_WebView_clz.getX5WebViewExtension.overload();
    com_tencent_xweb_WebView_clz_method_getX5WebViewExtension_s9y4.implementation = function() {
        printStacks('public java.lang.Object com.tencent.xweb.WebView.getX5WebViewExtension()');
        return com_tencent_xweb_WebView_clz_method_getX5WebViewExtension_s9y4.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_super_onOverScrolled_smve = com_tencent_xweb_WebView_clz.super_onOverScrolled.overload('int', 'int', 'boolean', 'boolean');
    com_tencent_xweb_WebView_clz_method_super_onOverScrolled_smve.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.xweb.WebView.super_onOverScrolled(int,int,boolean,boolean)');
        com_tencent_xweb_WebView_clz_method_super_onOverScrolled_smve.call(this, v0, v1, v2, v3);
    };
    var com_tencent_xweb_WebView_clz_method_setWebViewClientExtension_nnak = com_tencent_xweb_WebView_clz.setWebViewClientExtension.overload('com.tencent.xweb.x5.export.external.extension.proxy.a');
    com_tencent_xweb_WebView_clz_method_setWebViewClientExtension_nnak.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setWebViewClientExtension(com.tencent.xweb.x5.export.external.extension.proxy.a)');
        com_tencent_xweb_WebView_clz_method_setWebViewClientExtension_nnak.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_setVerticalScrollBarEnabled_5145 = com_tencent_xweb_WebView_clz.setVerticalScrollBarEnabled.overload('boolean');
    com_tencent_xweb_WebView_clz_method_setVerticalScrollBarEnabled_5145.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setVerticalScrollBarEnabled(boolean)');
        com_tencent_xweb_WebView_clz_method_setVerticalScrollBarEnabled_5145.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_setFocusable_nzar = com_tencent_xweb_WebView_clz.setFocusable.overload('boolean');
    com_tencent_xweb_WebView_clz_method_setFocusable_nzar.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setFocusable(boolean)');
        com_tencent_xweb_WebView_clz_method_setFocusable_nzar.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_getWebScrollY_mucw = com_tencent_xweb_WebView_clz.getWebScrollY.overload();
    com_tencent_xweb_WebView_clz_method_getWebScrollY_mucw.implementation = function() {
        printStacks('public int com.tencent.xweb.WebView.getWebScrollY()');
        return com_tencent_xweb_WebView_clz_method_getWebScrollY_mucw.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_onShow_cscx = com_tencent_xweb_WebView_clz.onShow.overload();
    com_tencent_xweb_WebView_clz_method_onShow_cscx.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.onShow()');
        com_tencent_xweb_WebView_clz_method_onShow_cscx.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_super_onTouchEvent_00wc = com_tencent_xweb_WebView_clz.super_onTouchEvent.overload('android.view.MotionEvent');
    com_tencent_xweb_WebView_clz_method_super_onTouchEvent_00wc.implementation = function(v0) {
        printStacks('public boolean com.tencent.xweb.WebView.super_onTouchEvent(android.view.MotionEvent)');
        return com_tencent_xweb_WebView_clz_method_super_onTouchEvent_00wc.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_clearView_r9j7 = com_tencent_xweb_WebView_clz.clearView.overload();
    com_tencent_xweb_WebView_clz_method_clearView_r9j7.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.clearView()');
        com_tencent_xweb_WebView_clz_method_clearView_r9j7.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_supportFeature_km58 = com_tencent_xweb_WebView_clz.supportFeature.overload('int');
    com_tencent_xweb_WebView_clz_method_supportFeature_km58.implementation = function(v0) {
        printStacks('public boolean com.tencent.xweb.WebView.supportFeature(int)');
        return com_tencent_xweb_WebView_clz_method_supportFeature_km58.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_getTbsSDKVersion_w6ic = com_tencent_xweb_WebView_clz.getTbsSDKVersion.overload('android.content.Context');
    com_tencent_xweb_WebView_clz_method_getTbsSDKVersion_w6ic.implementation = function(v0) {
        printStacks('public static int com.tencent.xweb.WebView.getTbsSDKVersion(android.content.Context)');
        return com_tencent_xweb_WebView_clz_method_getTbsSDKVersion_w6ic.call(com_tencent_xweb_WebView_clz, v0);
    };
    var com_tencent_xweb_WebView_clz_method_hasInited_7zwd = com_tencent_xweb_WebView_clz.hasInited.overload();
    com_tencent_xweb_WebView_clz_method_hasInited_7zwd.implementation = function() {
        printStacks('public static boolean com.tencent.xweb.WebView.hasInited()');
        return com_tencent_xweb_WebView_clz_method_hasInited_7zwd.call(com_tencent_xweb_WebView_clz);
    };
    var com_tencent_xweb_WebView_clz_method_super_onInterceptTouchEvent_apgc = com_tencent_xweb_WebView_clz.super_onInterceptTouchEvent.overload('android.view.MotionEvent');
    com_tencent_xweb_WebView_clz_method_super_onInterceptTouchEvent_apgc.implementation = function(v0) {
        printStacks('public boolean com.tencent.xweb.WebView.super_onInterceptTouchEvent(android.view.MotionEvent)');
        return com_tencent_xweb_WebView_clz_method_super_onInterceptTouchEvent_apgc.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_setDownloadListener_q687 = com_tencent_xweb_WebView_clz.setDownloadListener.overload('android.webkit.DownloadListener');
    com_tencent_xweb_WebView_clz_method_setDownloadListener_q687.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setDownloadListener(android.webkit.DownloadListener)');
        com_tencent_xweb_WebView_clz_method_setDownloadListener_q687.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_loadUrl_iqfn = com_tencent_xweb_WebView_clz.loadUrl.overload('java.lang.String');
    com_tencent_xweb_WebView_clz_method_loadUrl_iqfn.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.loadUrl(java.lang.String)');
        com_tencent_xweb_WebView_clz_method_loadUrl_iqfn.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_manualStartFrameCostProfiler_5lzu = com_tencent_xweb_WebView_clz.manualStartFrameCostProfiler.overload();
    com_tencent_xweb_WebView_clz_method_manualStartFrameCostProfiler_5lzu.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.manualStartFrameCostProfiler()');
        com_tencent_xweb_WebView_clz_method_manualStartFrameCostProfiler_5lzu.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_manualStopFrameCostProfiler_dwc2 = com_tencent_xweb_WebView_clz.manualStopFrameCostProfiler.overload('com.tencent.xweb.j');
    com_tencent_xweb_WebView_clz_method_manualStopFrameCostProfiler_dwc2.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.manualStopFrameCostProfiler(com.tencent.xweb.j)');
        com_tencent_xweb_WebView_clz_method_manualStopFrameCostProfiler_dwc2.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_smoothScroll_ofnf = com_tencent_xweb_WebView_clz.smoothScroll.overload('int', 'int', 'long');
    com_tencent_xweb_WebView_clz_method_smoothScroll_ofnf.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.xweb.WebView.smoothScroll(int,int,long)');
        com_tencent_xweb_WebView_clz_method_smoothScroll_ofnf.call(this, v0, v1, v2);
    };
    var com_tencent_xweb_WebView_clz_method__enablePlatformNotifications_9u33 = com_tencent_xweb_WebView_clz._enablePlatformNotifications.overload();
    com_tencent_xweb_WebView_clz_method__enablePlatformNotifications_9u33.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView._enablePlatformNotifications()');
        com_tencent_xweb_WebView_clz_method__enablePlatformNotifications_9u33.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_onHide_n2kd = com_tencent_xweb_WebView_clz.onHide.overload();
    com_tencent_xweb_WebView_clz_method_onHide_n2kd.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.onHide()');
        com_tencent_xweb_WebView_clz_method_onHide_n2kd.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_hasEnteredFullscreen_eayt = com_tencent_xweb_WebView_clz.hasEnteredFullscreen.overload();
    com_tencent_xweb_WebView_clz_method_hasEnteredFullscreen_eayt.implementation = function() {
        printStacks('public boolean com.tencent.xweb.WebView.hasEnteredFullscreen()');
        return com_tencent_xweb_WebView_clz_method_hasEnteredFullscreen_eayt.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_setOnLongClickListener_hq9m = com_tencent_xweb_WebView_clz.setOnLongClickListener.overload('android.view.View$OnLongClickListener');
    com_tencent_xweb_WebView_clz_method_setOnLongClickListener_hq9m.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setOnLongClickListener(android.view.View$OnLongClickListener)');
        com_tencent_xweb_WebView_clz_method_setOnLongClickListener_hq9m.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_getTbsCoreVersion_b2q7 = com_tencent_xweb_WebView_clz.getTbsCoreVersion.overload('android.content.Context');
    com_tencent_xweb_WebView_clz_method_getTbsCoreVersion_b2q7.implementation = function(v0) {
        printStacks('public static int com.tencent.xweb.WebView.getTbsCoreVersion(android.content.Context)');
        return com_tencent_xweb_WebView_clz_method_getTbsCoreVersion_b2q7.call(com_tencent_xweb_WebView_clz, v0);
    };
    var com_tencent_xweb_WebView_clz_method_isOverScrollStart_bq9g = com_tencent_xweb_WebView_clz.isOverScrollStart.overload();
    com_tencent_xweb_WebView_clz_method_isOverScrollStart_bq9g.implementation = function() {
        printStacks('public boolean com.tencent.xweb.WebView.isOverScrollStart()');
        return com_tencent_xweb_WebView_clz_method_isOverScrollStart_bq9g.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_loadUrl_6jss = com_tencent_xweb_WebView_clz.loadUrl.overload('java.lang.String', 'java.util.Map');
    com_tencent_xweb_WebView_clz_method_loadUrl_6jss.implementation = function(v0, v1) {
        printStacks('public void com.tencent.xweb.WebView.loadUrl(java.lang.String,java.util.Map)');
        com_tencent_xweb_WebView_clz_method_loadUrl_6jss.call(this, v0, v1);
    };
    var com_tencent_xweb_WebView_clz_method_onPause_erwy = com_tencent_xweb_WebView_clz.onPause.overload();
    com_tencent_xweb_WebView_clz_method_onPause_erwy.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.onPause()');
        com_tencent_xweb_WebView_clz_method_onPause_erwy.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_getContentHeight_5gyw = com_tencent_xweb_WebView_clz.getContentHeight.overload();
    com_tencent_xweb_WebView_clz_method_getContentHeight_5gyw.implementation = function() {
        printStacks('public int com.tencent.xweb.WebView.getContentHeight()');
        return com_tencent_xweb_WebView_clz_method_getContentHeight_5gyw.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_onVisibilityChanged_83zg = com_tencent_xweb_WebView_clz.onVisibilityChanged.overload('android.view.View', 'int');
    com_tencent_xweb_WebView_clz_method_onVisibilityChanged_83zg.implementation = function(v0, v1) {
        printStacks('protected void com.tencent.xweb.WebView.onVisibilityChanged(android.view.View,int)');
        com_tencent_xweb_WebView_clz_method_onVisibilityChanged_83zg.call(this, v0, v1);
    };
    var com_tencent_xweb_WebView_clz_method_findNext_8w7o = com_tencent_xweb_WebView_clz.findNext.overload('boolean');
    com_tencent_xweb_WebView_clz_method_findNext_8w7o.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.findNext(boolean)');
        com_tencent_xweb_WebView_clz_method_findNext_8w7o.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_gq_jnme = com_tencent_xweb_WebView_clz.gq.overload('android.view.View');
    com_tencent_xweb_WebView_clz_method_gq_jnme.implementation = function(v0) {
        printStacks('private java.util.List com.tencent.xweb.WebView.gq(android.view.View)');
        return com_tencent_xweb_WebView_clz_method_gq_jnme.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_a_gpfi = com_tencent_xweb_WebView_clz.a.overload('com.tencent.xweb.WebView$c');
    com_tencent_xweb_WebView_clz_method_a_gpfi.implementation = function(v0) {
        printStacks('private void com.tencent.xweb.WebView.a(com.tencent.xweb.WebView$c)');
        com_tencent_xweb_WebView_clz_method_a_gpfi.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_super_dispatchTouchEvent_yfxl = com_tencent_xweb_WebView_clz.super_dispatchTouchEvent.overload('android.view.MotionEvent');
    com_tencent_xweb_WebView_clz_method_super_dispatchTouchEvent_yfxl.implementation = function(v0) {
        printStacks('public boolean com.tencent.xweb.WebView.super_dispatchTouchEvent(android.view.MotionEvent)');
        return com_tencent_xweb_WebView_clz_method_super_dispatchTouchEvent_yfxl.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_clearMatches_hum8 = com_tencent_xweb_WebView_clz.clearMatches.overload();
    com_tencent_xweb_WebView_clz_method_clearMatches_hum8.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.clearMatches()');
        com_tencent_xweb_WebView_clz_method_clearMatches_hum8.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_isSupportExtendPluginForAppbrand_o19k = com_tencent_xweb_WebView_clz.isSupportExtendPluginForAppbrand.overload();
    com_tencent_xweb_WebView_clz_method_isSupportExtendPluginForAppbrand_o19k.implementation = function() {
        printStacks('public boolean com.tencent.xweb.WebView.isSupportExtendPluginForAppbrand()');
        return com_tencent_xweb_WebView_clz_method_isSupportExtendPluginForAppbrand_o19k.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_clearSslPreferences_kb05 = com_tencent_xweb_WebView_clz.clearSslPreferences.overload();
    com_tencent_xweb_WebView_clz_method_clearSslPreferences_kb05.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.clearSslPreferences()');
        com_tencent_xweb_WebView_clz_method_clearSslPreferences_kb05.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_getCurWebChromeClient_yxvh = com_tencent_xweb_WebView_clz.getCurWebChromeClient.overload();
    com_tencent_xweb_WebView_clz_method_getCurWebChromeClient_yxvh.implementation = function() {
        printStacks('public com.tencent.xweb.t com.tencent.xweb.WebView.getCurWebChromeClient()');
        return com_tencent_xweb_WebView_clz_method_getCurWebChromeClient_yxvh.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_getDefalutOpProvider_xkg3 = com_tencent_xweb_WebView_clz.getDefalutOpProvider.overload();
    com_tencent_xweb_WebView_clz_method_getDefalutOpProvider_xkg3.implementation = function() {
        printStacks('public com.tencent.xweb.internal.e com.tencent.xweb.WebView.getDefalutOpProvider()');
        return com_tencent_xweb_WebView_clz_method_getDefalutOpProvider_xkg3.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_overlayHorizontalScrollbar_677f = com_tencent_xweb_WebView_clz.overlayHorizontalScrollbar.overload();
    com_tencent_xweb_WebView_clz_method_overlayHorizontalScrollbar_677f.implementation = function() {
        printStacks('public boolean com.tencent.xweb.WebView.overlayHorizontalScrollbar()');
        return com_tencent_xweb_WebView_clz_method_overlayHorizontalScrollbar_677f.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_captureBitmap_lz3a = com_tencent_xweb_WebView_clz.captureBitmap.overload('com.tencent.xweb.internal.IWebView$a');
    com_tencent_xweb_WebView_clz_method_captureBitmap_lz3a.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.captureBitmap(com.tencent.xweb.internal.IWebView$a)');
        com_tencent_xweb_WebView_clz_method_captureBitmap_lz3a.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_savePage_3b45 = com_tencent_xweb_WebView_clz.savePage.overload('java.lang.String', 'java.lang.String', 'int');
    com_tencent_xweb_WebView_clz_method_savePage_3b45.implementation = function(v0, v1, v2) {
        printStacks('public boolean com.tencent.xweb.WebView.savePage(java.lang.String,java.lang.String,int)');
        return com_tencent_xweb_WebView_clz_method_savePage_3b45.call(this, v0, v1, v2);
    };
    var com_tencent_xweb_WebView_clz_method_setBottomHeight_rhws = com_tencent_xweb_WebView_clz.setBottomHeight.overload('int');
    com_tencent_xweb_WebView_clz_method_setBottomHeight_rhws.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setBottomHeight(int)');
        com_tencent_xweb_WebView_clz_method_setBottomHeight_rhws.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_getScale_dt96 = com_tencent_xweb_WebView_clz.getScale.overload();
    com_tencent_xweb_WebView_clz_method_getScale_dt96.implementation = function() {
        printStacks('public float com.tencent.xweb.WebView.getScale()');
        return com_tencent_xweb_WebView_clz_method_getScale_dt96.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_reload_132o = com_tencent_xweb_WebView_clz.reload.overload();
    com_tencent_xweb_WebView_clz_method_reload_132o.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.reload()');
        com_tencent_xweb_WebView_clz_method_reload_132o.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_dispatchDraw_hnjh = com_tencent_xweb_WebView_clz.dispatchDraw.overload('android.graphics.Canvas');
    com_tencent_xweb_WebView_clz_method_dispatchDraw_hnjh.implementation = function(v0) {
        printStacks('protected void com.tencent.xweb.WebView.dispatchDraw(android.graphics.Canvas)');
        com_tencent_xweb_WebView_clz_method_dispatchDraw_hnjh.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_getCrashExtraMessage_d2gd = com_tencent_xweb_WebView_clz.getCrashExtraMessage.overload('android.content.Context');
    com_tencent_xweb_WebView_clz_method_getCrashExtraMessage_d2gd.implementation = function(v0) {
        printStacks('public static java.lang.String com.tencent.xweb.WebView.getCrashExtraMessage(android.content.Context)');
        return com_tencent_xweb_WebView_clz_method_getCrashExtraMessage_d2gd.call(com_tencent_xweb_WebView_clz, v0);
    };
    var com_tencent_xweb_WebView_clz_method_getInstalledTbsCoreVersion_ejqe = com_tencent_xweb_WebView_clz.getInstalledTbsCoreVersion.overload('android.content.Context');
    com_tencent_xweb_WebView_clz_method_getInstalledTbsCoreVersion_ejqe.implementation = function(v0) {
        printStacks('public static int com.tencent.xweb.WebView.getInstalledTbsCoreVersion(android.content.Context)');
        return com_tencent_xweb_WebView_clz_method_getInstalledTbsCoreVersion_ejqe.call(com_tencent_xweb_WebView_clz, v0);
    };
    var com_tencent_xweb_WebView_clz_method_setFindListener_6l2g = com_tencent_xweb_WebView_clz.setFindListener.overload('android.webkit.WebView$FindListener');
    com_tencent_xweb_WebView_clz_method_setFindListener_6l2g.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setFindListener(android.webkit.WebView$FindListener)');
        com_tencent_xweb_WebView_clz_method_setFindListener_6l2g.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_isXWalkKernel_r5ma = com_tencent_xweb_WebView_clz.isXWalkKernel.overload();
    com_tencent_xweb_WebView_clz_method_isXWalkKernel_r5ma.implementation = function() {
        printStacks('public boolean com.tencent.xweb.WebView.isXWalkKernel()');
        return com_tencent_xweb_WebView_clz_method_isXWalkKernel_r5ma.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_a_lrjf = com_tencent_xweb_WebView_clz.a.overload('android.content.Context', 'com.tencent.xweb.WebView$c', 'com.tencent.xweb.WebView$PreInitCallback', 'boolean', 'boolean');
    com_tencent_xweb_WebView_clz_method_a_lrjf.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('private static synchronized boolean com.tencent.xweb.WebView.a(android.content.Context,com.tencent.xweb.WebView$c,com.tencent.xweb.WebView$PreInitCallback,boolean,boolean)');
        return com_tencent_xweb_WebView_clz_method_a_lrjf.call(com_tencent_xweb_WebView_clz, v0, v1, v2, v3, v4);
    };
    var com_tencent_xweb_WebView_clz_method_setWebViewCallbackClient_wsco = com_tencent_xweb_WebView_clz.setWebViewCallbackClient.overload('com.tencent.xweb.x');
    com_tencent_xweb_WebView_clz_method_setWebViewCallbackClient_wsco.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setWebViewCallbackClient(com.tencent.xweb.x)');
        com_tencent_xweb_WebView_clz_method_setWebViewCallbackClient_wsco.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_destroy_1dc8 = com_tencent_xweb_WebView_clz.destroy.overload();
    com_tencent_xweb_WebView_clz_method_destroy_1dc8.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.destroy()');
        com_tencent_xweb_WebView_clz_method_destroy_1dc8.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_getCurWebviewClient_o1zr = com_tencent_xweb_WebView_clz.getCurWebviewClient.overload();
    com_tencent_xweb_WebView_clz_method_getCurWebviewClient_o1zr.implementation = function() {
        printStacks('public com.tencent.xweb.y com.tencent.xweb.WebView.getCurWebviewClient()');
        return com_tencent_xweb_WebView_clz_method_getCurWebviewClient_o1zr.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_evaluateJavascript_p7uc = com_tencent_xweb_WebView_clz.evaluateJavascript.overload('java.lang.String', 'android.webkit.ValueCallback');
    com_tencent_xweb_WebView_clz_method_evaluateJavascript_p7uc.implementation = function(v0, v1) {
        printStacks('public void com.tencent.xweb.WebView.evaluateJavascript(java.lang.String,android.webkit.ValueCallback)');
        com_tencent_xweb_WebView_clz_method_evaluateJavascript_p7uc.call(this, v0, v1);
    };
    var com_tencent_xweb_WebView_clz_method_isX5_psha = com_tencent_xweb_WebView_clz.isX5.overload();
    com_tencent_xweb_WebView_clz_method_isX5_psha.implementation = function() {
        printStacks('public static boolean com.tencent.xweb.WebView.isX5()');
        return com_tencent_xweb_WebView_clz_method_isX5_psha.call(com_tencent_xweb_WebView_clz);
    };
    var com_tencent_xweb_WebView_clz_method_invokeMiscMethod_h5ck = com_tencent_xweb_WebView_clz.invokeMiscMethod.overload('java.lang.String', 'android.os.Bundle');
    com_tencent_xweb_WebView_clz_method_invokeMiscMethod_h5ck.implementation = function(v0, v1) {
        printStacks('public android.os.Bundle com.tencent.xweb.WebView.invokeMiscMethod(java.lang.String,android.os.Bundle)');
        return com_tencent_xweb_WebView_clz_method_invokeMiscMethod_h5ck.call(this, v0, v1);
    };
    var com_tencent_xweb_WebView_clz_method_super_onScrollChanged_hxts = com_tencent_xweb_WebView_clz.super_onScrollChanged.overload('int', 'int', 'int', 'int');
    com_tencent_xweb_WebView_clz_method_super_onScrollChanged_hxts.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.xweb.WebView.super_onScrollChanged(int,int,int,int)');
        com_tencent_xweb_WebView_clz_method_super_onScrollChanged_hxts.call(this, v0, v1, v2, v3);
    };
    var com_tencent_xweb_WebView_clz_method_setWebChromeClient_8tpu = com_tencent_xweb_WebView_clz.setWebChromeClient.overload('com.tencent.xweb.t');
    com_tencent_xweb_WebView_clz_method_setWebChromeClient_8tpu.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setWebChromeClient(com.tencent.xweb.t)');
        com_tencent_xweb_WebView_clz_method_setWebChromeClient_8tpu.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_getView_6wr8 = com_tencent_xweb_WebView_clz.getView.overload();
    com_tencent_xweb_WebView_clz_method_getView_6wr8.implementation = function() {
        printStacks('public android.view.View com.tencent.xweb.WebView.getView()');
        return com_tencent_xweb_WebView_clz_method_getView_6wr8.call(this);
    };
    var com_tencent_xweb_WebView_clz_method__initWebviewCore_8a3q = com_tencent_xweb_WebView_clz._initWebviewCore.overload('android.content.Context', 'com.tencent.xweb.WebView$c', 'com.tencent.xweb.WebView$PreInitCallback', 'boolean');
    com_tencent_xweb_WebView_clz_method__initWebviewCore_8a3q.implementation = function(v0, v1, v2, v3) {
        printStacks('public static synchronized boolean com.tencent.xweb.WebView._initWebviewCore(android.content.Context,com.tencent.xweb.WebView$c,com.tencent.xweb.WebView$PreInitCallback,boolean)');
        return com_tencent_xweb_WebView_clz_method__initWebviewCore_8a3q.call(com_tencent_xweb_WebView_clz, v0, v1, v2, v3);
    };
    var com_tencent_xweb_WebView_clz_method_getTopView_ujhn = com_tencent_xweb_WebView_clz.getTopView.overload();
    com_tencent_xweb_WebView_clz_method_getTopView_ujhn.implementation = function() {
        printStacks('public android.view.ViewGroup com.tencent.xweb.WebView.getTopView()');
        return com_tencent_xweb_WebView_clz_method_getTopView_ujhn.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_getPreferedWebviewType_m6tn = com_tencent_xweb_WebView_clz.getPreferedWebviewType.overload('android.content.Context', 'com.tencent.xweb.WebView$c', 'java.lang.String');
    com_tencent_xweb_WebView_clz_method_getPreferedWebviewType_m6tn.implementation = function(v0, v1, v2) {
        printStacks('public static com.tencent.xweb.WebView$c com.tencent.xweb.WebView.getPreferedWebviewType(android.content.Context,com.tencent.xweb.WebView$c,java.lang.String)');
        return com_tencent_xweb_WebView_clz_method_getPreferedWebviewType_m6tn.call(com_tencent_xweb_WebView_clz, v0, v1, v2);
    };
    var com_tencent_xweb_WebView_clz_method_isSysKernel_5mzt = com_tencent_xweb_WebView_clz.isSysKernel.overload();
    com_tencent_xweb_WebView_clz_method_isSysKernel_5mzt.implementation = function() {
        printStacks('public boolean com.tencent.xweb.WebView.isSysKernel()');
        return com_tencent_xweb_WebView_clz_method_isSysKernel_5mzt.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_loadDataWithBaseURL_1tjf = com_tencent_xweb_WebView_clz.loadDataWithBaseURL.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_xweb_WebView_clz_method_loadDataWithBaseURL_1tjf.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('public void com.tencent.xweb.WebView.loadDataWithBaseURL(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)');
        com_tencent_xweb_WebView_clz_method_loadDataWithBaseURL_1tjf.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_xweb_WebView_clz_method_getSettings_4bbu = com_tencent_xweb_WebView_clz.getSettings.overload();
    com_tencent_xweb_WebView_clz_method_getSettings_4bbu.implementation = function() {
        printStacks('public com.tencent.xweb.v com.tencent.xweb.WebView.getSettings()');
        return com_tencent_xweb_WebView_clz_method_getSettings_4bbu.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_findAllAsync_127h = com_tencent_xweb_WebView_clz.findAllAsync.overload('java.lang.String');
    com_tencent_xweb_WebView_clz_method_findAllAsync_127h.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.findAllAsync(java.lang.String)');
        com_tencent_xweb_WebView_clz_method_findAllAsync_127h.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_getWebViewUI_p36b = com_tencent_xweb_WebView_clz.getWebViewUI.overload();
    com_tencent_xweb_WebView_clz_method_getWebViewUI_p36b.implementation = function() {
        printStacks('public android.view.View com.tencent.xweb.WebView.getWebViewUI()');
        return com_tencent_xweb_WebView_clz_method_getWebViewUI_p36b.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_setWebViewClient_ob0u = com_tencent_xweb_WebView_clz.setWebViewClient.overload('com.tencent.xweb.y');
    com_tencent_xweb_WebView_clz_method_setWebViewClient_ob0u.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setWebViewClient(com.tencent.xweb.y)');
        com_tencent_xweb_WebView_clz_method_setWebViewClient_ob0u.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_zoomIn_djl5 = com_tencent_xweb_WebView_clz.zoomIn.overload();
    com_tencent_xweb_WebView_clz_method_zoomIn_djl5.implementation = function() {
        printStacks('public boolean com.tencent.xweb.WebView.zoomIn()');
        return com_tencent_xweb_WebView_clz_method_zoomIn_djl5.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_setHorizontalScrollBarEnabled_g0tl = com_tencent_xweb_WebView_clz.setHorizontalScrollBarEnabled.overload('boolean');
    com_tencent_xweb_WebView_clz_method_setHorizontalScrollBarEnabled_g0tl.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setHorizontalScrollBarEnabled(boolean)');
        com_tencent_xweb_WebView_clz_method_setHorizontalScrollBarEnabled_g0tl.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_getVersionInfo_h7rh = com_tencent_xweb_WebView_clz.getVersionInfo.overload();
    com_tencent_xweb_WebView_clz_method_getVersionInfo_h7rh.implementation = function() {
        printStacks('public java.lang.String com.tencent.xweb.WebView.getVersionInfo()');
        return com_tencent_xweb_WebView_clz_method_getVersionInfo_h7rh.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_setOnTouchListener_ldq5 = com_tencent_xweb_WebView_clz.setOnTouchListener.overload('android.view.View$OnTouchListener');
    com_tencent_xweb_WebView_clz_method_setOnTouchListener_ldq5.implementation = function(v0) {
        printStacks('public void com.tencent.xweb.WebView.setOnTouchListener(android.view.View$OnTouchListener)');
        com_tencent_xweb_WebView_clz_method_setOnTouchListener_ldq5.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_method_loadData_9yyi = com_tencent_xweb_WebView_clz.loadData.overload('java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_xweb_WebView_clz_method_loadData_9yyi.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.xweb.WebView.loadData(java.lang.String,java.lang.String,java.lang.String)');
        com_tencent_xweb_WebView_clz_method_loadData_9yyi.call(this, v0, v1, v2);
    };
    var com_tencent_xweb_WebView_clz_method_getVisibleTitleHeight_r5ve = com_tencent_xweb_WebView_clz.getVisibleTitleHeight.overload();
    com_tencent_xweb_WebView_clz_method_getVisibleTitleHeight_r5ve.implementation = function() {
        printStacks('public int com.tencent.xweb.WebView.getVisibleTitleHeight()');
        return com_tencent_xweb_WebView_clz_method_getVisibleTitleHeight_r5ve.call(this);
    };
    var com_tencent_xweb_WebView_clz_method_super_computeScroll_42hh = com_tencent_xweb_WebView_clz.super_computeScroll.overload();
    com_tencent_xweb_WebView_clz_method_super_computeScroll_42hh.implementation = function() {
        printStacks('public void com.tencent.xweb.WebView.super_computeScroll()');
        com_tencent_xweb_WebView_clz_method_super_computeScroll_42hh.call(this);
    };
    var com_tencent_xweb_WebView_clz_init_6wni = com_tencent_xweb_WebView_clz.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int');
    com_tencent_xweb_WebView_clz_init_6wni.implementation = function(v0, v1, v2) {
        printStacks('public com.tencent.xweb.WebView(android.content.Context,android.util.AttributeSet,int)');
        return com_tencent_xweb_WebView_clz_init_6wni.call(this, v0, v1, v2);
    };
    var com_tencent_xweb_WebView_clz_init_39oe = com_tencent_xweb_WebView_clz.$init.overload('android.content.Context');
    com_tencent_xweb_WebView_clz_init_39oe.implementation = function(v0) {
        printStacks('public com.tencent.xweb.WebView(android.content.Context)');
        return com_tencent_xweb_WebView_clz_init_39oe.call(this, v0);
    };
    var com_tencent_xweb_WebView_clz_init_1r2j = com_tencent_xweb_WebView_clz.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int', 'com.tencent.xweb.WebView$c');
    com_tencent_xweb_WebView_clz_init_1r2j.implementation = function(v0, v1, v2, v3) {
        printStacks('public com.tencent.xweb.WebView(android.content.Context,android.util.AttributeSet,int,com.tencent.xweb.WebView$c)');
        return com_tencent_xweb_WebView_clz_init_1r2j.call(this, v0, v1, v2, v3);
    };
    var com_tencent_xweb_WebView_clz_init_b3cb = com_tencent_xweb_WebView_clz.$init.overload('android.content.Context', 'android.util.AttributeSet');
    com_tencent_xweb_WebView_clz_init_b3cb.implementation = function(v0, v1) {
        printStacks('public com.tencent.xweb.WebView(android.content.Context,android.util.AttributeSet)');
        return com_tencent_xweb_WebView_clz_init_b3cb.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz = Java.use('com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension');
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onFakeLoginRecognised_5xxs = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onFakeLoginRecognised.overload('android.os.Bundle');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onFakeLoginRecognised_5xxs.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onFakeLoginRecognised(android.os.Bundle)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onFakeLoginRecognised_5xxs.call(this, v0);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onOverScrolled_5atb = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onOverScrolled.overload('int', 'int', 'boolean', 'boolean', 'android.view.View');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onOverScrolled_5atb.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onOverScrolled(int,int,boolean,boolean,android.view.View)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onOverScrolled_5atb.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onScrollChanged_ulca = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onScrollChanged.overload('int', 'int', 'int', 'int', 'android.view.View');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onScrollChanged_ulca.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onScrollChanged(int,int,int,int,android.view.View)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onScrollChanged_ulca.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onUploadProgressChange_jdof = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onUploadProgressChange.overload('int', 'int', 'java.lang.String');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onUploadProgressChange_jdof.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onUploadProgressChange(int,int,java.lang.String)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onUploadProgressChange_jdof.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_shouldDiscardCurrentPage_f06m = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.shouldDiscardCurrentPage.overload();
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_shouldDiscardCurrentPage_f06m.implementation = function() {
        printStacks('public boolean com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.shouldDiscardCurrentPage()');
        return com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_shouldDiscardCurrentPage_f06m.call(this);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onScrollChanged_m0fm = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onScrollChanged.overload('int', 'int', 'int', 'int');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onScrollChanged_m0fm.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onScrollChanged(int,int,int,int)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onScrollChanged_m0fm.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_hasDiscardCurrentPage_ib6p = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.hasDiscardCurrentPage.overload('boolean');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_hasDiscardCurrentPage_ib6p.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.hasDiscardCurrentPage(boolean)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_hasDiscardCurrentPage_ib6p.call(this, v0);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_didNavigateWithinPage_3w4m = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.didNavigateWithinPage.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'java.lang.String');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_didNavigateWithinPage_3w4m.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.didNavigateWithinPage(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,java.lang.String)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_didNavigateWithinPage_3w4m.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onGetExtraHeadersForPreloading_we35 = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onGetExtraHeadersForPreloading.overload('java.lang.String');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onGetExtraHeadersForPreloading_we35.implementation = function(v0) {
        printStacks('public java.util.HashMap com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onGetExtraHeadersForPreloading(java.lang.String)');
        return com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onGetExtraHeadersForPreloading_we35.call(this, v0);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onPinchToZoomStart_40gl = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onPinchToZoomStart.overload();
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onPinchToZoomStart_40gl.implementation = function() {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onPinchToZoomStart()');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onPinchToZoomStart_40gl.call(this);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onNativeCrashReport_2i0n = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onNativeCrashReport.overload('int', 'java.lang.String');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onNativeCrashReport_2i0n.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onNativeCrashReport(int,java.lang.String)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onNativeCrashReport_2i0n.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_overScrollBy_fvkb = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.overScrollBy.overload('int', 'int', 'int', 'int', 'int', 'int', 'int', 'int', 'boolean', 'android.view.View');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_overScrollBy_fvkb.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
        printStacks('public boolean com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.overScrollBy(int,int,int,int,int,int,int,int,boolean,android.view.View)');
        return com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_overScrollBy_fvkb.call(this, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onShowLongClickPopupMenu_g90i = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onShowLongClickPopupMenu.overload();
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onShowLongClickPopupMenu_g90i.implementation = function() {
        printStacks('public boolean com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onShowLongClickPopupMenu()');
        return com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onShowLongClickPopupMenu_g90i.call(this);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onTransitionToCommitted_16gg = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onTransitionToCommitted.overload();
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onTransitionToCommitted_16gg.implementation = function() {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onTransitionToCommitted()');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onTransitionToCommitted_16gg.call(this);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onReportAdFilterInfo_iz6v = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onReportAdFilterInfo.overload('int', 'int', 'java.lang.String', 'boolean');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onReportAdFilterInfo_iz6v.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onReportAdFilterInfo(int,int,java.lang.String,boolean)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onReportAdFilterInfo_iz6v.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onSetButtonStatus_yqkd = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onSetButtonStatus.overload('boolean', 'boolean');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onSetButtonStatus_yqkd.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onSetButtonStatus(boolean,boolean)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onSetButtonStatus_yqkd.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onHistoryItemChanged_u8gb = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onHistoryItemChanged.overload();
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onHistoryItemChanged_u8gb.implementation = function() {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onHistoryItemChanged()');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onHistoryItemChanged_u8gb.call(this);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onUrlChange_cacc = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onUrlChange.overload('java.lang.String', 'java.lang.String');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onUrlChange_cacc.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onUrlChange(java.lang.String,java.lang.String)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onUrlChange_cacc.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onReceivedQNovel_d9u8 = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onReceivedQNovel.overload('java.lang.String', 'java.lang.String');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onReceivedQNovel_d9u8.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onReceivedQNovel(java.lang.String,java.lang.String)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onReceivedQNovel_d9u8.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onReportHtmlInfo_v6yl = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onReportHtmlInfo.overload('int', 'java.lang.String');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onReportHtmlInfo_v6yl.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onReportHtmlInfo(int,java.lang.String)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onReportHtmlInfo_v6yl.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_notifyJavaScriptOpenWindowsBlocked_ehji = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.notifyJavaScriptOpenWindowsBlocked.overload('java.lang.String', '[Ljava.lang.String;', 'android.webkit.ValueCallback', 'boolean');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_notifyJavaScriptOpenWindowsBlocked_ehji.implementation = function(v0, v1, v2, v3) {
        printStacks('public boolean com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.notifyJavaScriptOpenWindowsBlocked(java.lang.String,java.lang.String[],android.webkit.ValueCallback,boolean)');
        return com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_notifyJavaScriptOpenWindowsBlocked_ehji.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onSoftKeyBoardShow_q6x2 = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onSoftKeyBoardShow.overload();
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onSoftKeyBoardShow_q6x2.implementation = function() {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onSoftKeyBoardShow()');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onSoftKeyBoardShow_q6x2.call(this);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onMiscCallBack_j92o = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onMiscCallBack.overload('java.lang.String', 'android.os.Bundle');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onMiscCallBack_j92o.implementation = function(v0, v1) {
        printStacks('public java.lang.Object com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onMiscCallBack(java.lang.String,android.os.Bundle)');
        return com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onMiscCallBack_j92o.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onPreReadFinished_agvx = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onPreReadFinished.overload();
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onPreReadFinished_agvx.implementation = function() {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onPreReadFinished()');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onPreReadFinished_agvx.call(this);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onMissingPluginClicked_2g8j = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onMissingPluginClicked.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'int');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onMissingPluginClicked_2g8j.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onMissingPluginClicked(java.lang.String,java.lang.String,java.lang.String,int)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onMissingPluginClicked_2g8j.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onFlingScrollEnd_qjsn = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onFlingScrollEnd.overload();
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onFlingScrollEnd_qjsn.implementation = function() {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onFlingScrollEnd()');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onFlingScrollEnd_qjsn.call(this);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onReceivedViewSource_9ksf = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onReceivedViewSource.overload('java.lang.String');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onReceivedViewSource_9ksf.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onReceivedViewSource(java.lang.String)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onReceivedViewSource_9ksf.call(this, v0);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onShowTtsBar_8i8w = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onShowTtsBar.overload();
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onShowTtsBar_8i8w.implementation = function() {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onShowTtsBar()');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onShowTtsBar_8i8w.call(this);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onMiscCallBack_yysv = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onMiscCallBack.overload('java.lang.String', 'android.os.Bundle', 'java.lang.Object', 'java.lang.Object', 'java.lang.Object', 'java.lang.Object');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onMiscCallBack_yysv.implementation = function(v0, v1, v2, v3, v4, v5) {
        printStacks('public java.lang.Object com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onMiscCallBack(java.lang.String,android.os.Bundle,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)');
        return com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onMiscCallBack_yysv.call(this, v0, v1, v2, v3, v4, v5);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onSpecialSiteDetectedResult_3lkd = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onSpecialSiteDetectedResult.overload('java.util.Set', 'java.util.Set');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onSpecialSiteDetectedResult_3lkd.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onSpecialSiteDetectedResult(java.util.Set,java.util.Set)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onSpecialSiteDetectedResult_3lkd.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onPreloadCallback_fn1l = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onPreloadCallback.overload('int', 'java.lang.String');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onPreloadCallback_fn1l.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onPreloadCallback(int,java.lang.String)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onPreloadCallback_fn1l.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onShowMutilListBox_pvs6 = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onShowMutilListBox.overload('[Ljava.lang.String;', '[I', '[I', '[I');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onShowMutilListBox_pvs6.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onShowMutilListBox(java.lang.String[],int[],int[],int[])');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onShowMutilListBox_pvs6.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_notifyAutoAudioPlay_znb8 = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.notifyAutoAudioPlay.overload('java.lang.String', 'com.tencent.smtt.export.external.interfaces.JsResult');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_notifyAutoAudioPlay_znb8.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.notifyAutoAudioPlay(java.lang.String,com.tencent.smtt.export.external.interfaces.JsResult)');
        return com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_notifyAutoAudioPlay_znb8.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onPromptScaleSaved_m8pt = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onPromptScaleSaved.overload();
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onPromptScaleSaved_m8pt.implementation = function() {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onPromptScaleSaved()');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onPromptScaleSaved_m8pt.call(this);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onShowListBox_mzil = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onShowListBox.overload('[Ljava.lang.String;', '[I', '[I', 'int');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onShowListBox_mzil.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onShowListBox(java.lang.String[],int[],int[],int)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onShowListBox_mzil.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onReceivedSslErrorCancel_e15t = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onReceivedSslErrorCancel.overload();
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onReceivedSslErrorCancel_e15t.implementation = function() {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onReceivedSslErrorCancel()');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onReceivedSslErrorCancel_e15t.call(this);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onResponseReceived_uvv9 = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onResponseReceived.overload('com.tencent.smtt.export.external.interfaces.WebResourceRequest', 'com.tencent.smtt.export.external.interfaces.WebResourceResponse', 'int');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onResponseReceived_uvv9.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onResponseReceived(com.tencent.smtt.export.external.interfaces.WebResourceRequest,com.tencent.smtt.export.external.interfaces.WebResourceResponse,int)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onResponseReceived_uvv9.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_allowJavaScriptOpenWindowAutomatically_tg34 = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.allowJavaScriptOpenWindowAutomatically.overload('java.lang.String', 'java.lang.String');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_allowJavaScriptOpenWindowAutomatically_tg34.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.allowJavaScriptOpenWindowAutomatically(java.lang.String,java.lang.String)');
        return com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_allowJavaScriptOpenWindowAutomatically_tg34.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onGetTtsText_qc8f = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onGetTtsText.overload('java.lang.String', 'int');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onGetTtsText_qc8f.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onGetTtsText(java.lang.String,int)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onGetTtsText_qc8f.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onDoubleTapStart_z3de = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onDoubleTapStart.overload();
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onDoubleTapStart_z3de.implementation = function() {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onDoubleTapStart()');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onDoubleTapStart_z3de.call(this);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onInputBoxTextChanged_1ff9 = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onInputBoxTextChanged.overload('com.tencent.smtt.export.external.extension.interfaces.IX5WebViewExtension', 'java.lang.String');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onInputBoxTextChanged_1ff9.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onInputBoxTextChanged(com.tencent.smtt.export.external.extension.interfaces.IX5WebViewExtension,java.lang.String)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onInputBoxTextChanged_1ff9.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onSoftKeyBoardHide_nejf = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onSoftKeyBoardHide.overload('int');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onSoftKeyBoardHide_nejf.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onSoftKeyBoardHide(int)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onSoftKeyBoardHide_nejf.call(this, v0);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onHideAdSuccess_gocw = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onHideAdSuccess.overload();
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onHideAdSuccess_gocw.implementation = function() {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onHideAdSuccess()');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onHideAdSuccess_gocw.call(this);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_dispatchTouchEvent_l119 = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.dispatchTouchEvent.overload('android.view.MotionEvent', 'android.view.View');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_dispatchTouchEvent_l119.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.dispatchTouchEvent(android.view.MotionEvent,android.view.View)');
        return com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_dispatchTouchEvent_l119.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_computeScroll_44ts = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.computeScroll.overload('android.view.View');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_computeScroll_44ts.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.computeScroll(android.view.View)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_computeScroll_44ts.call(this, v0);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onSupportReadMode_kscq = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onSupportReadMode.overload();
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onSupportReadMode_kscq.implementation = function() {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onSupportReadMode()');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onSupportReadMode_kscq.call(this);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_invalidate_ir0n = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.invalidate.overload();
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_invalidate_ir0n.implementation = function() {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.invalidate()');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_invalidate_ir0n.call(this);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onUploadProgressStart_s38a = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onUploadProgressStart.overload('int');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onUploadProgressStart_s38a.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onUploadProgressStart(int)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onUploadProgressStart_s38a.call(this, v0);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_requestVibration_o5j9 = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.requestVibration.overload('java.lang.String', 'com.tencent.smtt.export.external.interfaces.JsResult');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_requestVibration_o5j9.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.requestVibration(java.lang.String,com.tencent.smtt.export.external.interfaces.JsResult)');
        return com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_requestVibration_o5j9.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onMetricsSavedCountReceived_8889 = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onMetricsSavedCountReceived.overload('java.lang.String', 'boolean', 'long', 'java.lang.String', 'int');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onMetricsSavedCountReceived_8889.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onMetricsSavedCountReceived(java.lang.String,boolean,long,java.lang.String,int)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onMetricsSavedCountReceived_8889.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_hasRestoreCurrentPage_4qg2 = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.hasRestoreCurrentPage.overload('boolean');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_hasRestoreCurrentPage_4qg2.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.hasRestoreCurrentPage(boolean)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_hasRestoreCurrentPage_4qg2.call(this, v0);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_hideAddressBar_76fh = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.hideAddressBar.overload();
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_hideAddressBar_76fh.implementation = function() {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.hideAddressBar()');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_hideAddressBar_76fh.call(this);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_documentAvailableInMainFrame_qmem = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.documentAvailableInMainFrame.overload();
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_documentAvailableInMainFrame_qmem.implementation = function() {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.documentAvailableInMainFrame()');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_documentAvailableInMainFrame_qmem.call(this);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onInterceptTouchEvent_nwum = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onInterceptTouchEvent.overload('android.view.MotionEvent', 'android.view.View');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onInterceptTouchEvent_nwum.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onInterceptTouchEvent(android.view.MotionEvent,android.view.View)');
        return com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onInterceptTouchEvent_nwum.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onFlingScrollBegin_e6er = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onFlingScrollBegin.overload('int', 'int', 'int');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onFlingScrollBegin_e6er.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onFlingScrollBegin(int,int,int)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onFlingScrollBegin_e6er.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_reportFingerSearchRequestInfo_m0x5 = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.reportFingerSearchRequestInfo.overload('java.lang.String');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_reportFingerSearchRequestInfo_m0x5.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.reportFingerSearchRequestInfo(java.lang.String)');
        return com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_reportFingerSearchRequestInfo_m0x5.call(this, v0);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_didFailLoad_ygzl = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.didFailLoad.overload('java.lang.String', 'int');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_didFailLoad_ygzl.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.didFailLoad(java.lang.String,int)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_didFailLoad_ygzl.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_showTranslateBubble_g0bw = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.showTranslateBubble.overload('int', 'java.lang.String', 'java.lang.String', 'int');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_showTranslateBubble_g0bw.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.showTranslateBubble(int,java.lang.String,java.lang.String,int)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_showTranslateBubble_g0bw.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_handlePluginTag_ze6v = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.handlePluginTag.overload('java.lang.String', 'java.lang.String', 'boolean', 'java.lang.String');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_handlePluginTag_ze6v.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.handlePluginTag(java.lang.String,java.lang.String,boolean,java.lang.String)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_handlePluginTag_ze6v.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_reportFingerSearchAdjustInfo_p88f = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.reportFingerSearchAdjustInfo.overload('java.lang.String');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_reportFingerSearchAdjustInfo_p88f.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.reportFingerSearchAdjustInfo(java.lang.String)');
        return com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_reportFingerSearchAdjustInfo_p88f.call(this, v0);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_didFirstVisuallyNonEmptyPaint_e3tq = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.didFirstVisuallyNonEmptyPaint.overload();
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_didFirstVisuallyNonEmptyPaint_e3tq.implementation = function() {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.didFirstVisuallyNonEmptyPaint()');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_didFirstVisuallyNonEmptyPaint_e3tq.call(this);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onPrefetchResourceHit_wyjh = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onPrefetchResourceHit.overload('boolean');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onPrefetchResourceHit_wyjh.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onPrefetchResourceHit(boolean)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onPrefetchResourceHit_wyjh.call(this, v0);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_preShouldOverrideUrlLoading_dlti = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.preShouldOverrideUrlLoading.overload('com.tencent.smtt.export.external.extension.interfaces.IX5WebViewExtension', 'java.lang.String');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_preShouldOverrideUrlLoading_dlti.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.preShouldOverrideUrlLoading(com.tencent.smtt.export.external.extension.interfaces.IX5WebViewExtension,java.lang.String)');
        return com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_preShouldOverrideUrlLoading_dlti.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onHideListBox_y28b = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onHideListBox.overload();
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onHideListBox_y28b.implementation = function() {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onHideListBox()');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onHideListBox_y28b.call(this);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onTouchEvent_vtej = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onTouchEvent.overload('android.view.MotionEvent', 'android.view.View');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onTouchEvent_vtej.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onTouchEvent(android.view.MotionEvent,android.view.View)');
        return com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onTouchEvent_vtej.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onSlidingTitleOffScreen_477i = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.onSlidingTitleOffScreen.overload('int', 'int');
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onSlidingTitleOffScreen_477i.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.onSlidingTitleOffScreen(int,int)');
        com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_onSlidingTitleOffScreen_477i.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_shouldRestoreCurrentPage_ppen = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.shouldRestoreCurrentPage.overload();
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_shouldRestoreCurrentPage_ppen.implementation = function() {
        printStacks('public boolean com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension.shouldRestoreCurrentPage()');
        return com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_method_shouldRestoreCurrentPage_ppen.call(this);
    };
    var com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_init_e1zn = com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz.$init.overload();
    com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_init_e1zn.implementation = function() {
        printStacks('public com.tencent.smtt.export.external.extension.proxy.ProxyWebViewClientExtension()');
        return com_tencent_smtt_export_external_extension_proxy_ProxyWebViewClientExtension_clz_init_e1zn.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz = Java.use('com.tencent.smtt.sdk.WebView');
    var com_tencent_smtt_sdk_WebView_clz_method_getRendererRequestedPriority_tbz7 = com_tencent_smtt_sdk_WebView_clz.getRendererRequestedPriority.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getRendererRequestedPriority_tbz7.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.getRendererRequestedPriority()');
        return com_tencent_smtt_sdk_WebView_clz_method_getRendererRequestedPriority_tbz7.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_enablePlatformNotifications_ppng = com_tencent_smtt_sdk_WebView_clz.enablePlatformNotifications.overload();
    com_tencent_smtt_sdk_WebView_clz_method_enablePlatformNotifications_ppng.implementation = function() {
        printStacks('public static void com.tencent.smtt.sdk.WebView.enablePlatformNotifications()');
        com_tencent_smtt_sdk_WebView_clz_method_enablePlatformNotifications_ppng.call(com_tencent_smtt_sdk_WebView_clz);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_canZoomOut_7ngg = com_tencent_smtt_sdk_WebView_clz.canZoomOut.overload();
    com_tencent_smtt_sdk_WebView_clz_method_canZoomOut_7ngg.implementation = function() {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.canZoomOut()');
        return com_tencent_smtt_sdk_WebView_clz_method_canZoomOut_7ngg.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_isPrivateBrowsingEnabled_slc7 = com_tencent_smtt_sdk_WebView_clz.isPrivateBrowsingEnabled.overload();
    com_tencent_smtt_sdk_WebView_clz_method_isPrivateBrowsingEnabled_slc7.implementation = function() {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.isPrivateBrowsingEnabled()');
        return com_tencent_smtt_sdk_WebView_clz_method_isPrivateBrowsingEnabled_slc7.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getTitle_3xj8 = com_tencent_smtt_sdk_WebView_clz.getTitle.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getTitle_3xj8.implementation = function() {
        printStacks('public java.lang.String com.tencent.smtt.sdk.WebView.getTitle()');
        return com_tencent_smtt_sdk_WebView_clz_method_getTitle_3xj8.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getHitTestResult_em1m = com_tencent_smtt_sdk_WebView_clz.getHitTestResult.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getHitTestResult_em1m.implementation = function() {
        printStacks('public com.tencent.smtt.sdk.WebView$HitTestResult com.tencent.smtt.sdk.WebView.getHitTestResult()');
        return com_tencent_smtt_sdk_WebView_clz_method_getHitTestResult_em1m.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_computeHorizontalScrollRange_uvak = com_tencent_smtt_sdk_WebView_clz.computeHorizontalScrollRange.overload();
    com_tencent_smtt_sdk_WebView_clz_method_computeHorizontalScrollRange_uvak.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.computeHorizontalScrollRange()');
        return com_tencent_smtt_sdk_WebView_clz_method_computeHorizontalScrollRange_uvak.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_c_iu08 = com_tencent_smtt_sdk_WebView_clz.c.overload('android.content.Context');
    com_tencent_smtt_sdk_WebView_clz_method_c_iu08.implementation = function(v0) {
        printStacks('private boolean com.tencent.smtt.sdk.WebView.c(android.content.Context)');
        return com_tencent_smtt_sdk_WebView_clz_method_c_iu08.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_requestImageRef_q4au = com_tencent_smtt_sdk_WebView_clz.requestImageRef.overload('android.os.Message');
    com_tencent_smtt_sdk_WebView_clz_method_requestImageRef_q4au.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.requestImageRef(android.os.Message)');
        com_tencent_smtt_sdk_WebView_clz_method_requestImageRef_q4au.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_switchToNightMode_m3bj = com_tencent_smtt_sdk_WebView_clz.switchToNightMode.overload();
    com_tencent_smtt_sdk_WebView_clz_method_switchToNightMode_m3bj.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.switchToNightMode()');
        com_tencent_smtt_sdk_WebView_clz_method_switchToNightMode_m3bj.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_goBack_nvl8 = com_tencent_smtt_sdk_WebView_clz.goBack.overload();
    com_tencent_smtt_sdk_WebView_clz_method_goBack_nvl8.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.goBack()');
        com_tencent_smtt_sdk_WebView_clz_method_goBack_nvl8.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_findHierarchyView_3zt5 = com_tencent_smtt_sdk_WebView_clz.findHierarchyView.overload('java.lang.String', 'int');
    com_tencent_smtt_sdk_WebView_clz_method_findHierarchyView_3zt5.implementation = function(v0, v1) {
        printStacks('public android.view.View com.tencent.smtt.sdk.WebView.findHierarchyView(java.lang.String,int)');
        return com_tencent_smtt_sdk_WebView_clz_method_findHierarchyView_3zt5.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_onSizeChanged_9rz3 = com_tencent_smtt_sdk_WebView_clz.onSizeChanged.overload('int', 'int', 'int', 'int');
    com_tencent_smtt_sdk_WebView_clz_method_onSizeChanged_9rz3.implementation = function(v0, v1, v2, v3) {
        printStacks('protected void com.tencent.smtt.sdk.WebView.onSizeChanged(int,int,int,int)');
        com_tencent_smtt_sdk_WebView_clz_method_onSizeChanged_9rz3.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_removeJavascriptInterface_b0km = com_tencent_smtt_sdk_WebView_clz.removeJavascriptInterface.overload('java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_removeJavascriptInterface_b0km.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.removeJavascriptInterface(java.lang.String)');
        com_tencent_smtt_sdk_WebView_clz_method_removeJavascriptInterface_b0km.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setSysDayOrNight_ng6s = com_tencent_smtt_sdk_WebView_clz.setSysDayOrNight.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_setSysDayOrNight_ng6s.implementation = function(v0) {
        printStacks('public static synchronized void com.tencent.smtt.sdk.WebView.setSysDayOrNight(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_setSysDayOrNight_ng6s.call(com_tencent_smtt_sdk_WebView_clz, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_clearHistory_4w9p = com_tencent_smtt_sdk_WebView_clz.clearHistory.overload();
    com_tencent_smtt_sdk_WebView_clz_method_clearHistory_4w9p.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.clearHistory()');
        com_tencent_smtt_sdk_WebView_clz_method_clearHistory_4w9p.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_onLongClick_48vc = com_tencent_smtt_sdk_WebView_clz.onLongClick.overload('android.view.View');
    com_tencent_smtt_sdk_WebView_clz_method_onLongClick_48vc.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.onLongClick(android.view.View)');
        return com_tencent_smtt_sdk_WebView_clz_method_onLongClick_48vc.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setPictureListener_nh3g = com_tencent_smtt_sdk_WebView_clz.setPictureListener.overload('com.tencent.smtt.sdk.WebView$PictureListener');
    com_tencent_smtt_sdk_WebView_clz_method_setPictureListener_nh3g.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setPictureListener(com.tencent.smtt.sdk.WebView$PictureListener)');
        com_tencent_smtt_sdk_WebView_clz_method_setPictureListener_nh3g.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getSettingsExtension_zvow = com_tencent_smtt_sdk_WebView_clz.getSettingsExtension.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getSettingsExtension_zvow.implementation = function() {
        printStacks('public com.tencent.smtt.export.external.extension.interfaces.IX5WebSettingsExtension com.tencent.smtt.sdk.WebView.getSettingsExtension()');
        return com_tencent_smtt_sdk_WebView_clz_method_getSettingsExtension_zvow.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_canZoomIn_cktk = com_tencent_smtt_sdk_WebView_clz.canZoomIn.overload();
    com_tencent_smtt_sdk_WebView_clz_method_canZoomIn_cktk.implementation = function() {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.canZoomIn()');
        return com_tencent_smtt_sdk_WebView_clz_method_canZoomIn_cktk.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setVisibility_bigf = com_tencent_smtt_sdk_WebView_clz.setVisibility.overload('int');
    com_tencent_smtt_sdk_WebView_clz_method_setVisibility_bigf.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setVisibility(int)');
        com_tencent_smtt_sdk_WebView_clz_method_setVisibility_bigf.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getScrollBarFadeDuration_01bw = com_tencent_smtt_sdk_WebView_clz.getScrollBarFadeDuration.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getScrollBarFadeDuration_01bw.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.getScrollBarFadeDuration()');
        return com_tencent_smtt_sdk_WebView_clz_method_getScrollBarFadeDuration_01bw.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_a_tib9 = com_tencent_smtt_sdk_WebView_clz.a.overload('com.tencent.smtt.sdk.WebView', 'int', 'int', 'int', 'int');
    com_tencent_smtt_sdk_WebView_clz_method_a_tib9.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('static void com.tencent.smtt.sdk.WebView.a(com.tencent.smtt.sdk.WebView,int,int,int,int)');
        com_tencent_smtt_sdk_WebView_clz_method_a_tib9.call(com_tencent_smtt_sdk_WebView_clz, v0, v1, v2, v3, v4);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_clearFormData_yg1k = com_tencent_smtt_sdk_WebView_clz.clearFormData.overload();
    com_tencent_smtt_sdk_WebView_clz_method_clearFormData_yg1k.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.clearFormData()');
        com_tencent_smtt_sdk_WebView_clz_method_clearFormData_yg1k.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setWebChromeClient_uz0h = com_tencent_smtt_sdk_WebView_clz.setWebChromeClient.overload('com.tencent.smtt.sdk.WebChromeClient');
    com_tencent_smtt_sdk_WebView_clz_method_setWebChromeClient_uz0h.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setWebChromeClient(com.tencent.smtt.sdk.WebChromeClient)');
        com_tencent_smtt_sdk_WebView_clz_method_setWebChromeClient_uz0h.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_disablePlatformNotifications_m69x = com_tencent_smtt_sdk_WebView_clz.disablePlatformNotifications.overload();
    com_tencent_smtt_sdk_WebView_clz_method_disablePlatformNotifications_m69x.implementation = function() {
        printStacks('public static void com.tencent.smtt.sdk.WebView.disablePlatformNotifications()');
        com_tencent_smtt_sdk_WebView_clz_method_disablePlatformNotifications_m69x.call(com_tencent_smtt_sdk_WebView_clz);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_addJavascriptInterface_ofwo = com_tencent_smtt_sdk_WebView_clz.addJavascriptInterface.overload('java.lang.Object', 'java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_addJavascriptInterface_ofwo.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebView.addJavascriptInterface(java.lang.Object,java.lang.String)');
        com_tencent_smtt_sdk_WebView_clz_method_addJavascriptInterface_ofwo.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_super_overScrollBy_vn63 = com_tencent_smtt_sdk_WebView_clz.super_overScrollBy.overload('int', 'int', 'int', 'int', 'int', 'int', 'int', 'int', 'boolean');
    com_tencent_smtt_sdk_WebView_clz_method_super_overScrollBy_vn63.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7, v8) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.super_overScrollBy(int,int,int,int,int,int,int,int,boolean)');
        return com_tencent_smtt_sdk_WebView_clz_method_super_overScrollBy_vn63.call(this, v0, v1, v2, v3, v4, v5, v6, v7, v8);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getRendererPriorityWaivedWhenNotVisible_ctda = com_tencent_smtt_sdk_WebView_clz.getRendererPriorityWaivedWhenNotVisible.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getRendererPriorityWaivedWhenNotVisible_ctda.implementation = function() {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.getRendererPriorityWaivedWhenNotVisible()');
        return com_tencent_smtt_sdk_WebView_clz_method_getRendererPriorityWaivedWhenNotVisible_ctda.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getContentWidth_i1tg = com_tencent_smtt_sdk_WebView_clz.getContentWidth.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getContentWidth_i1tg.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.getContentWidth()');
        return com_tencent_smtt_sdk_WebView_clz_method_getContentWidth_i1tg.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_showFindDialog_kkty = com_tencent_smtt_sdk_WebView_clz.showFindDialog.overload('java.lang.String', 'boolean');
    com_tencent_smtt_sdk_WebView_clz_method_showFindDialog_kkty.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.showFindDialog(java.lang.String,boolean)');
        return com_tencent_smtt_sdk_WebView_clz_method_showFindDialog_kkty.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setFindListener_dla8 = com_tencent_smtt_sdk_WebView_clz.setFindListener.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase$FindListener');
    com_tencent_smtt_sdk_WebView_clz_method_setFindListener_dla8.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setFindListener(com.tencent.smtt.export.external.interfaces.IX5WebViewBase$FindListener)');
        com_tencent_smtt_sdk_WebView_clz_method_setFindListener_dla8.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_b_pj5m = com_tencent_smtt_sdk_WebView_clz.b.overload();
    com_tencent_smtt_sdk_WebView_clz_method_b_pj5m.implementation = function() {
        printStacks('android.webkit.WebView com.tencent.smtt.sdk.WebView.b()');
        return com_tencent_smtt_sdk_WebView_clz_method_b_pj5m.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getTbsNeedReboot_dai8 = com_tencent_smtt_sdk_WebView_clz.getTbsNeedReboot.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getTbsNeedReboot_dai8.implementation = function() {
        printStacks('public static boolean com.tencent.smtt.sdk.WebView.getTbsNeedReboot()');
        return com_tencent_smtt_sdk_WebView_clz_method_getTbsNeedReboot_dai8.call(com_tencent_smtt_sdk_WebView_clz);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getUrl_sotl = com_tencent_smtt_sdk_WebView_clz.getUrl.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getUrl_sotl.implementation = function() {
        printStacks('public java.lang.String com.tencent.smtt.sdk.WebView.getUrl()');
        return com_tencent_smtt_sdk_WebView_clz_method_getUrl_sotl.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setDownloadListener_e9da = com_tencent_smtt_sdk_WebView_clz.setDownloadListener.overload('com.tencent.smtt.sdk.DownloadListener');
    com_tencent_smtt_sdk_WebView_clz_method_setDownloadListener_e9da.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setDownloadListener(com.tencent.smtt.sdk.DownloadListener)');
        com_tencent_smtt_sdk_WebView_clz_method_setDownloadListener_e9da.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_d_p6qt = com_tencent_smtt_sdk_WebView_clz.d.overload();
    com_tencent_smtt_sdk_WebView_clz_method_d_p6qt.implementation = function() {
        printStacks('static void com.tencent.smtt.sdk.WebView.d()');
        com_tencent_smtt_sdk_WebView_clz_method_d_p6qt.call(com_tencent_smtt_sdk_WebView_clz);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getOriginalUrl_ec19 = com_tencent_smtt_sdk_WebView_clz.getOriginalUrl.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getOriginalUrl_ec19.implementation = function() {
        printStacks('public java.lang.String com.tencent.smtt.sdk.WebView.getOriginalUrl()');
        return com_tencent_smtt_sdk_WebView_clz_method_getOriginalUrl_ec19.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_onResume_yqwq = com_tencent_smtt_sdk_WebView_clz.onResume.overload();
    com_tencent_smtt_sdk_WebView_clz_method_onResume_yqwq.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.onResume()');
        com_tencent_smtt_sdk_WebView_clz_method_onResume_yqwq.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getScrollBarDefaultDelayBeforeFade_ctho = com_tencent_smtt_sdk_WebView_clz.getScrollBarDefaultDelayBeforeFade.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getScrollBarDefaultDelayBeforeFade_ctho.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.getScrollBarDefaultDelayBeforeFade()');
        return com_tencent_smtt_sdk_WebView_clz_method_getScrollBarDefaultDelayBeforeFade_ctho.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_goForward_qdog = com_tencent_smtt_sdk_WebView_clz.goForward.overload();
    com_tencent_smtt_sdk_WebView_clz_method_goForward_qdog.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.goForward()');
        com_tencent_smtt_sdk_WebView_clz_method_goForward_qdog.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_stopLoading_p8m9 = com_tencent_smtt_sdk_WebView_clz.stopLoading.overload();
    com_tencent_smtt_sdk_WebView_clz_method_stopLoading_p8m9.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.stopLoading()');
        com_tencent_smtt_sdk_WebView_clz_method_stopLoading_p8m9.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_canGoForward_2xqf = com_tencent_smtt_sdk_WebView_clz.canGoForward.overload();
    com_tencent_smtt_sdk_WebView_clz_method_canGoForward_2xqf.implementation = function() {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.canGoForward()');
        return com_tencent_smtt_sdk_WebView_clz_method_canGoForward_2xqf.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_zoomOut_g20c = com_tencent_smtt_sdk_WebView_clz.zoomOut.overload();
    com_tencent_smtt_sdk_WebView_clz_method_zoomOut_g20c.implementation = function() {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.zoomOut()');
        return com_tencent_smtt_sdk_WebView_clz_method_zoomOut_g20c.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_b_k8gn = com_tencent_smtt_sdk_WebView_clz.b.overload('android.content.Context');
    com_tencent_smtt_sdk_WebView_clz_method_b_k8gn.implementation = function(v0) {
        printStacks('private void com.tencent.smtt.sdk.WebView.b(android.content.Context)');
        com_tencent_smtt_sdk_WebView_clz_method_b_k8gn.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_g_8eei = com_tencent_smtt_sdk_WebView_clz.g.overload();
    com_tencent_smtt_sdk_WebView_clz_method_g_8eei.implementation = function() {
        printStacks('static android.graphics.Paint com.tencent.smtt.sdk.WebView.g()');
        return com_tencent_smtt_sdk_WebView_clz_method_g_8eei.call(com_tencent_smtt_sdk_WebView_clz);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_a_fews = com_tencent_smtt_sdk_WebView_clz.a.overload('com.tencent.smtt.sdk.WebView');
    com_tencent_smtt_sdk_WebView_clz_method_a_fews.implementation = function(v0) {
        printStacks('static android.content.Context com.tencent.smtt.sdk.WebView.a(com.tencent.smtt.sdk.WebView)');
        return com_tencent_smtt_sdk_WebView_clz_method_a_fews.call(com_tencent_smtt_sdk_WebView_clz, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getWebScrollX_2pjt = com_tencent_smtt_sdk_WebView_clz.getWebScrollX.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getWebScrollX_2pjt.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.getWebScrollX()');
        return com_tencent_smtt_sdk_WebView_clz_method_getWebScrollX_2pjt.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_d_pcfs = com_tencent_smtt_sdk_WebView_clz.d.overload('android.content.Context');
    com_tencent_smtt_sdk_WebView_clz_method_d_pcfs.implementation = function(v0) {
        printStacks('private int com.tencent.smtt.sdk.WebView.d(android.content.Context)');
        return com_tencent_smtt_sdk_WebView_clz_method_d_pcfs.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_computeVerticalScrollRange_kziu = com_tencent_smtt_sdk_WebView_clz.computeVerticalScrollRange.overload();
    com_tencent_smtt_sdk_WebView_clz_method_computeVerticalScrollRange_kziu.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.computeVerticalScrollRange()');
        return com_tencent_smtt_sdk_WebView_clz_method_computeVerticalScrollRange_kziu.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_e_rl8r = com_tencent_smtt_sdk_WebView_clz.e.overload();
    com_tencent_smtt_sdk_WebView_clz_method_e_rl8r.implementation = function() {
        printStacks('static android.content.BroadcastReceiver com.tencent.smtt.sdk.WebView.e()');
        return com_tencent_smtt_sdk_WebView_clz_method_e_rl8r.call(com_tencent_smtt_sdk_WebView_clz);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_pageUp_3nak = com_tencent_smtt_sdk_WebView_clz.pageUp.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_pageUp_3nak.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.pageUp(boolean)');
        return com_tencent_smtt_sdk_WebView_clz_method_pageUp_3nak.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getSysNightModeAlpha_rdwm = com_tencent_smtt_sdk_WebView_clz.getSysNightModeAlpha.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getSysNightModeAlpha_rdwm.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.getSysNightModeAlpha()');
        return com_tencent_smtt_sdk_WebView_clz_method_getSysNightModeAlpha_rdwm.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_canGoBack_fy6g = com_tencent_smtt_sdk_WebView_clz.canGoBack.overload();
    com_tencent_smtt_sdk_WebView_clz_method_canGoBack_fy6g.implementation = function() {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.canGoBack()');
        return com_tencent_smtt_sdk_WebView_clz_method_canGoBack_fy6g.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setSysNightModeAlpha_dwet = com_tencent_smtt_sdk_WebView_clz.setSysNightModeAlpha.overload('int');
    com_tencent_smtt_sdk_WebView_clz_method_setSysNightModeAlpha_dwet.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setSysNightModeAlpha(int)');
        com_tencent_smtt_sdk_WebView_clz_method_setSysNightModeAlpha_dwet.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_evaluateJavascript_jojs = com_tencent_smtt_sdk_WebView_clz.evaluateJavascript.overload('java.lang.String', 'com.tencent.smtt.sdk.ValueCallback');
    com_tencent_smtt_sdk_WebView_clz_method_evaluateJavascript_jojs.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebView.evaluateJavascript(java.lang.String,com.tencent.smtt.sdk.ValueCallback)');
        com_tencent_smtt_sdk_WebView_clz_method_evaluateJavascript_jojs.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setInitialScale_1osb = com_tencent_smtt_sdk_WebView_clz.setInitialScale.overload('int');
    com_tencent_smtt_sdk_WebView_clz_method_setInitialScale_1osb.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setInitialScale(int)');
        com_tencent_smtt_sdk_WebView_clz_method_setInitialScale_1osb.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setBackgroundColor_sdx9 = com_tencent_smtt_sdk_WebView_clz.setBackgroundColor.overload('int');
    com_tencent_smtt_sdk_WebView_clz_method_setBackgroundColor_sdx9.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setBackgroundColor(int)');
        com_tencent_smtt_sdk_WebView_clz_method_setBackgroundColor_sdx9.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getWebChromeClient_xp5i = com_tencent_smtt_sdk_WebView_clz.getWebChromeClient.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getWebChromeClient_xp5i.implementation = function() {
        printStacks('public com.tencent.smtt.sdk.WebChromeClient com.tencent.smtt.sdk.WebView.getWebChromeClient()');
        return com_tencent_smtt_sdk_WebView_clz_method_getWebChromeClient_xp5i.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_dumpViewHierarchyWithProperties_eyii = com_tencent_smtt_sdk_WebView_clz.dumpViewHierarchyWithProperties.overload('java.io.BufferedWriter', 'int');
    com_tencent_smtt_sdk_WebView_clz_method_dumpViewHierarchyWithProperties_eyii.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebView.dumpViewHierarchyWithProperties(java.io.BufferedWriter,int)');
        com_tencent_smtt_sdk_WebView_clz_method_dumpViewHierarchyWithProperties_eyii.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getX5WebViewExtension_ryyn = com_tencent_smtt_sdk_WebView_clz.getX5WebViewExtension.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getX5WebViewExtension_ryyn.implementation = function() {
        printStacks('public com.tencent.smtt.export.external.extension.interfaces.IX5WebViewExtension com.tencent.smtt.sdk.WebView.getX5WebViewExtension()');
        return com_tencent_smtt_sdk_WebView_clz_method_getX5WebViewExtension_ryyn.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_super_onOverScrolled_544s = com_tencent_smtt_sdk_WebView_clz.super_onOverScrolled.overload('int', 'int', 'boolean', 'boolean');
    com_tencent_smtt_sdk_WebView_clz_method_super_onOverScrolled_544s.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.sdk.WebView.super_onOverScrolled(int,int,boolean,boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_super_onOverScrolled_544s.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getWebChromeClientExtension_ya8r = com_tencent_smtt_sdk_WebView_clz.getWebChromeClientExtension.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getWebChromeClientExtension_ya8r.implementation = function() {
        printStacks('public com.tencent.smtt.export.external.extension.interfaces.IX5WebChromeClientExtension com.tencent.smtt.sdk.WebView.getWebChromeClientExtension()');
        return com_tencent_smtt_sdk_WebView_clz_method_getWebChromeClientExtension_ya8r.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_documentHasImages_p1jb = com_tencent_smtt_sdk_WebView_clz.documentHasImages.overload('android.os.Message');
    com_tencent_smtt_sdk_WebView_clz_method_documentHasImages_p1jb.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.documentHasImages(android.os.Message)');
        com_tencent_smtt_sdk_WebView_clz_method_documentHasImages_p1jb.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getWebScrollY_omqv = com_tencent_smtt_sdk_WebView_clz.getWebScrollY.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getWebScrollY_omqv.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.getWebScrollY()');
        return com_tencent_smtt_sdk_WebView_clz_method_getWebScrollY_omqv.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getZoomControls_q1ql = com_tencent_smtt_sdk_WebView_clz.getZoomControls.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getZoomControls_q1ql.implementation = function() {
        printStacks('public android.view.View com.tencent.smtt.sdk.WebView.getZoomControls()');
        return com_tencent_smtt_sdk_WebView_clz_method_getZoomControls_q1ql.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getCertificate_0mj5 = com_tencent_smtt_sdk_WebView_clz.getCertificate.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getCertificate_0mj5.implementation = function() {
        printStacks('public android.net.http.SslCertificate com.tencent.smtt.sdk.WebView.getCertificate()');
        return com_tencent_smtt_sdk_WebView_clz_method_getCertificate_0mj5.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setNetworkAvailable_5mkc = com_tencent_smtt_sdk_WebView_clz.setNetworkAvailable.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_setNetworkAvailable_5mkc.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setNetworkAvailable(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_setNetworkAvailable_5mkc.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_findAll_3esf = com_tencent_smtt_sdk_WebView_clz.findAll.overload('java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_findAll_3esf.implementation = function(v0) {
        printStacks('public int com.tencent.smtt.sdk.WebView.findAll(java.lang.String)');
        return com_tencent_smtt_sdk_WebView_clz_method_findAll_3esf.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_flingScroll_oyzm = com_tencent_smtt_sdk_WebView_clz.flingScroll.overload('int', 'int');
    com_tencent_smtt_sdk_WebView_clz_method_flingScroll_oyzm.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebView.flingScroll(int,int)');
        com_tencent_smtt_sdk_WebView_clz_method_flingScroll_oyzm.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_super_onTouchEvent_t30s = com_tencent_smtt_sdk_WebView_clz.super_onTouchEvent.overload('android.view.MotionEvent');
    com_tencent_smtt_sdk_WebView_clz_method_super_onTouchEvent_t30s.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.super_onTouchEvent(android.view.MotionEvent)');
        return com_tencent_smtt_sdk_WebView_clz_method_super_onTouchEvent_t30s.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_clearView_kugd = com_tencent_smtt_sdk_WebView_clz.clearView.overload();
    com_tencent_smtt_sdk_WebView_clz_method_clearView_kugd.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.clearView()');
        com_tencent_smtt_sdk_WebView_clz_method_clearView_kugd.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_canGoBackOrForward_lium = com_tencent_smtt_sdk_WebView_clz.canGoBackOrForward.overload('int');
    com_tencent_smtt_sdk_WebView_clz_method_canGoBackOrForward_lium.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.canGoBackOrForward(int)');
        return com_tencent_smtt_sdk_WebView_clz_method_canGoBackOrForward_lium.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setVerticalScrollbarOverlay_dxe9 = com_tencent_smtt_sdk_WebView_clz.setVerticalScrollbarOverlay.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_setVerticalScrollbarOverlay_dxe9.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setVerticalScrollbarOverlay(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_setVerticalScrollbarOverlay_dxe9.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setMapTrackballToArrowKeys_jb4w = com_tencent_smtt_sdk_WebView_clz.setMapTrackballToArrowKeys.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_setMapTrackballToArrowKeys_jb4w.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setMapTrackballToArrowKeys(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_setMapTrackballToArrowKeys_jb4w.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getTbsSDKVersion_bumi = com_tencent_smtt_sdk_WebView_clz.getTbsSDKVersion.overload('android.content.Context');
    com_tencent_smtt_sdk_WebView_clz_method_getTbsSDKVersion_bumi.implementation = function(v0) {
        printStacks('public static int com.tencent.smtt.sdk.WebView.getTbsSDKVersion(android.content.Context)');
        return com_tencent_smtt_sdk_WebView_clz_method_getTbsSDKVersion_bumi.call(com_tencent_smtt_sdk_WebView_clz, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_computeVerticalScrollExtent_jdrg = com_tencent_smtt_sdk_WebView_clz.computeVerticalScrollExtent.overload();
    com_tencent_smtt_sdk_WebView_clz_method_computeVerticalScrollExtent_jdrg.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.computeVerticalScrollExtent()');
        return com_tencent_smtt_sdk_WebView_clz_method_computeVerticalScrollExtent_jdrg.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_a_70ui = com_tencent_smtt_sdk_WebView_clz.a.overload('android.view.View');
    com_tencent_smtt_sdk_WebView_clz_method_a_70ui.implementation = function(v0) {
        printStacks('private boolean com.tencent.smtt.sdk.WebView.a(android.view.View)');
        return com_tencent_smtt_sdk_WebView_clz_method_a_70ui.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getScrollBarStyle_d5fb = com_tencent_smtt_sdk_WebView_clz.getScrollBarStyle.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getScrollBarStyle_d5fb.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.getScrollBarStyle()');
        return com_tencent_smtt_sdk_WebView_clz_method_getScrollBarStyle_d5fb.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_super_onInterceptTouchEvent_ttrf = com_tencent_smtt_sdk_WebView_clz.super_onInterceptTouchEvent.overload('android.view.MotionEvent');
    com_tencent_smtt_sdk_WebView_clz_method_super_onInterceptTouchEvent_ttrf.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.super_onInterceptTouchEvent(android.view.MotionEvent)');
        return com_tencent_smtt_sdk_WebView_clz_method_super_onInterceptTouchEvent_ttrf.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getCurrentWebViewPackage_qlob = com_tencent_smtt_sdk_WebView_clz.getCurrentWebViewPackage.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getCurrentWebViewPackage_qlob.implementation = function() {
        printStacks('public static android.content.pm.PackageInfo com.tencent.smtt.sdk.WebView.getCurrentWebViewPackage()');
        return com_tencent_smtt_sdk_WebView_clz_method_getCurrentWebViewPackage_qlob.call(com_tencent_smtt_sdk_WebView_clz);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_addView_cw5m = com_tencent_smtt_sdk_WebView_clz.addView.overload('android.view.View');
    com_tencent_smtt_sdk_WebView_clz_method_addView_cw5m.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.addView(android.view.View)');
        com_tencent_smtt_sdk_WebView_clz_method_addView_cw5m.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setVideoFullScreen_bxjo = com_tencent_smtt_sdk_WebView_clz.setVideoFullScreen.overload('android.content.Context', 'boolean');
    com_tencent_smtt_sdk_WebView_clz_method_setVideoFullScreen_bxjo.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.setVideoFullScreen(android.content.Context,boolean)');
        return com_tencent_smtt_sdk_WebView_clz_method_setVideoFullScreen_bxjo.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_loadUrl_8tap = com_tencent_smtt_sdk_WebView_clz.loadUrl.overload('java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_loadUrl_8tap.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.loadUrl(java.lang.String)');
        com_tencent_smtt_sdk_WebView_clz_method_loadUrl_8tap.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_restoreState_w3qg = com_tencent_smtt_sdk_WebView_clz.restoreState.overload('android.os.Bundle');
    com_tencent_smtt_sdk_WebView_clz_method_restoreState_w3qg.implementation = function(v0) {
        printStacks('public com.tencent.smtt.sdk.WebBackForwardList com.tencent.smtt.sdk.WebView.restoreState(android.os.Bundle)');
        return com_tencent_smtt_sdk_WebView_clz_method_restoreState_w3qg.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_a_x4gq = com_tencent_smtt_sdk_WebView_clz.a.overload('android.webkit.WebView');
    com_tencent_smtt_sdk_WebView_clz_method_a_x4gq.implementation = function(v0) {
        printStacks('void com.tencent.smtt.sdk.WebView.a(android.webkit.WebView)');
        com_tencent_smtt_sdk_WebView_clz_method_a_x4gq.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_removeView_x96c = com_tencent_smtt_sdk_WebView_clz.removeView.overload('android.view.View');
    com_tencent_smtt_sdk_WebView_clz_method_removeView_x96c.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.removeView(android.view.View)');
        com_tencent_smtt_sdk_WebView_clz_method_removeView_x96c.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_e_3lki = com_tencent_smtt_sdk_WebView_clz.e.overload('android.content.Context');
    com_tencent_smtt_sdk_WebView_clz_method_e_3lki.implementation = function(v0) {
        printStacks('private void com.tencent.smtt.sdk.WebView.e(android.content.Context)');
        com_tencent_smtt_sdk_WebView_clz_method_e_3lki.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setOnLongClickListener_uzgp = com_tencent_smtt_sdk_WebView_clz.setOnLongClickListener.overload('android.view.View$OnLongClickListener');
    com_tencent_smtt_sdk_WebView_clz_method_setOnLongClickListener_uzgp.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setOnLongClickListener(android.view.View$OnLongClickListener)');
        com_tencent_smtt_sdk_WebView_clz_method_setOnLongClickListener_uzgp.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getTbsCoreVersion_plzf = com_tencent_smtt_sdk_WebView_clz.getTbsCoreVersion.overload('android.content.Context');
    com_tencent_smtt_sdk_WebView_clz_method_getTbsCoreVersion_plzf.implementation = function(v0) {
        printStacks('public static int com.tencent.smtt.sdk.WebView.getTbsCoreVersion(android.content.Context)');
        return com_tencent_smtt_sdk_WebView_clz_method_getTbsCoreVersion_plzf.call(com_tencent_smtt_sdk_WebView_clz, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getWebViewClientExtension_3i6p = com_tencent_smtt_sdk_WebView_clz.getWebViewClientExtension.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getWebViewClientExtension_3i6p.implementation = function() {
        printStacks('public com.tencent.smtt.export.external.extension.interfaces.IX5WebViewClientExtension com.tencent.smtt.sdk.WebView.getWebViewClientExtension()');
        return com_tencent_smtt_sdk_WebView_clz_method_getWebViewClientExtension_3i6p.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_loadUrl_tepx = com_tencent_smtt_sdk_WebView_clz.loadUrl.overload('java.lang.String', 'java.util.Map');
    com_tencent_smtt_sdk_WebView_clz_method_loadUrl_tepx.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebView.loadUrl(java.lang.String,java.util.Map)');
        com_tencent_smtt_sdk_WebView_clz_method_loadUrl_tepx.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_switchNightMode_0wia = com_tencent_smtt_sdk_WebView_clz.switchNightMode.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_switchNightMode_0wia.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.switchNightMode(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_switchNightMode_0wia.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_a_79ka = com_tencent_smtt_sdk_WebView_clz.a.overload('android.content.Context');
    com_tencent_smtt_sdk_WebView_clz_method_a_79ka.implementation = function(v0) {
        printStacks('void com.tencent.smtt.sdk.WebView.a(android.content.Context)');
        com_tencent_smtt_sdk_WebView_clz_method_a_79ka.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_onPause_e1ms = com_tencent_smtt_sdk_WebView_clz.onPause.overload();
    com_tencent_smtt_sdk_WebView_clz_method_onPause_e1ms.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.onPause()');
        com_tencent_smtt_sdk_WebView_clz_method_onPause_e1ms.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_i_9mts = com_tencent_smtt_sdk_WebView_clz.i.overload();
    com_tencent_smtt_sdk_WebView_clz_method_i_9mts.implementation = function() {
        printStacks('private long com.tencent.smtt.sdk.WebView.i()');
        return com_tencent_smtt_sdk_WebView_clz_method_i_9mts.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_onDetachedFromWindow_lnoi = com_tencent_smtt_sdk_WebView_clz.onDetachedFromWindow.overload();
    com_tencent_smtt_sdk_WebView_clz_method_onDetachedFromWindow_lnoi.implementation = function() {
        printStacks('protected void com.tencent.smtt.sdk.WebView.onDetachedFromWindow()');
        com_tencent_smtt_sdk_WebView_clz_method_onDetachedFromWindow_lnoi.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setWebViewClient_zo3g = com_tencent_smtt_sdk_WebView_clz.setWebViewClient.overload('com.tencent.smtt.sdk.WebViewClient');
    com_tencent_smtt_sdk_WebView_clz_method_setWebViewClient_zo3g.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setWebViewClient(com.tencent.smtt.sdk.WebViewClient)');
        com_tencent_smtt_sdk_WebView_clz_method_setWebViewClient_zo3g.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setWebViewClientExtension_rpkt = com_tencent_smtt_sdk_WebView_clz.setWebViewClientExtension.overload('com.tencent.smtt.export.external.extension.interfaces.IX5WebViewClientExtension');
    com_tencent_smtt_sdk_WebView_clz_method_setWebViewClientExtension_rpkt.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setWebViewClientExtension(com.tencent.smtt.export.external.extension.interfaces.IX5WebViewClientExtension)');
        com_tencent_smtt_sdk_WebView_clz_method_setWebViewClientExtension_rpkt.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getContentHeight_4em4 = com_tencent_smtt_sdk_WebView_clz.getContentHeight.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getContentHeight_4em4.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.getContentHeight()');
        return com_tencent_smtt_sdk_WebView_clz_method_getContentHeight_4em4.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_onVisibilityChanged_b1dg = com_tencent_smtt_sdk_WebView_clz.onVisibilityChanged.overload('android.view.View', 'int');
    com_tencent_smtt_sdk_WebView_clz_method_onVisibilityChanged_b1dg.implementation = function(v0, v1) {
        printStacks('protected void com.tencent.smtt.sdk.WebView.onVisibilityChanged(android.view.View,int)');
        com_tencent_smtt_sdk_WebView_clz_method_onVisibilityChanged_b1dg.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_findNext_f5zw = com_tencent_smtt_sdk_WebView_clz.findNext.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_findNext_f5zw.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.findNext(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_findNext_f5zw.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setDayOrNight_eb1j = com_tencent_smtt_sdk_WebView_clz.setDayOrNight.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_setDayOrNight_eb1j.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setDayOrNight(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_setDayOrNight_eb1j.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_overlayVerticalScrollbar_5zmt = com_tencent_smtt_sdk_WebView_clz.overlayVerticalScrollbar.overload();
    com_tencent_smtt_sdk_WebView_clz_method_overlayVerticalScrollbar_5zmt.implementation = function() {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.overlayVerticalScrollbar()');
        return com_tencent_smtt_sdk_WebView_clz_method_overlayVerticalScrollbar_5zmt.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_freeMemory_34bf = com_tencent_smtt_sdk_WebView_clz.freeMemory.overload();
    com_tencent_smtt_sdk_WebView_clz_method_freeMemory_34bf.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.freeMemory()');
        com_tencent_smtt_sdk_WebView_clz_method_freeMemory_34bf.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_pageDown_2dna = com_tencent_smtt_sdk_WebView_clz.pageDown.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_pageDown_2dna.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.pageDown(boolean)');
        return com_tencent_smtt_sdk_WebView_clz_method_pageDown_2dna.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_super_dispatchTouchEvent_jywd = com_tencent_smtt_sdk_WebView_clz.super_dispatchTouchEvent.overload('android.view.MotionEvent');
    com_tencent_smtt_sdk_WebView_clz_method_super_dispatchTouchEvent_jywd.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.super_dispatchTouchEvent(android.view.MotionEvent)');
        return com_tencent_smtt_sdk_WebView_clz_method_super_dispatchTouchEvent_jywd.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_clearMatches_6ld9 = com_tencent_smtt_sdk_WebView_clz.clearMatches.overload();
    com_tencent_smtt_sdk_WebView_clz_method_clearMatches_6ld9.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.clearMatches()');
        com_tencent_smtt_sdk_WebView_clz_method_clearMatches_6ld9.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setHttpAuthUsernamePassword_nvtq = com_tencent_smtt_sdk_WebView_clz.setHttpAuthUsernamePassword.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_setHttpAuthUsernamePassword_nvtq.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setHttpAuthUsernamePassword(java.lang.String,java.lang.String,java.lang.String,java.lang.String)');
        com_tencent_smtt_sdk_WebView_clz_method_setHttpAuthUsernamePassword_nvtq.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_saveWebArchive_zrga = com_tencent_smtt_sdk_WebView_clz.saveWebArchive.overload('java.lang.String', 'boolean', 'com.tencent.smtt.sdk.ValueCallback');
    com_tencent_smtt_sdk_WebView_clz_method_saveWebArchive_zrga.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.WebView.saveWebArchive(java.lang.String,boolean,com.tencent.smtt.sdk.ValueCallback)');
        com_tencent_smtt_sdk_WebView_clz_method_saveWebArchive_zrga.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_f_e33d = com_tencent_smtt_sdk_WebView_clz.f.overload();
    com_tencent_smtt_sdk_WebView_clz_method_f_e33d.implementation = function() {
        printStacks('static boolean com.tencent.smtt.sdk.WebView.f()');
        return com_tencent_smtt_sdk_WebView_clz_method_f_e33d.call(com_tencent_smtt_sdk_WebView_clz);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_restorePicture_0fwo = com_tencent_smtt_sdk_WebView_clz.restorePicture.overload('android.os.Bundle', 'java.io.File');
    com_tencent_smtt_sdk_WebView_clz_method_restorePicture_0fwo.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.restorePicture(android.os.Bundle,java.io.File)');
        return com_tencent_smtt_sdk_WebView_clz_method_restorePicture_0fwo.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_b_mbab = com_tencent_smtt_sdk_WebView_clz.b.overload('com.tencent.smtt.sdk.WebView', 'int', 'int', 'int', 'int');
    com_tencent_smtt_sdk_WebView_clz_method_b_mbab.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('static void com.tencent.smtt.sdk.WebView.b(com.tencent.smtt.sdk.WebView,int,int,int,int)');
        com_tencent_smtt_sdk_WebView_clz_method_b_mbab.call(com_tencent_smtt_sdk_WebView_clz, v0, v1, v2, v3, v4);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_clearSslPreferences_z6q9 = com_tencent_smtt_sdk_WebView_clz.clearSslPreferences.overload();
    com_tencent_smtt_sdk_WebView_clz_method_clearSslPreferences_z6q9.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.clearSslPreferences()');
        com_tencent_smtt_sdk_WebView_clz_method_clearSslPreferences_z6q9.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_saveState_9abh = com_tencent_smtt_sdk_WebView_clz.saveState.overload('android.os.Bundle');
    com_tencent_smtt_sdk_WebView_clz_method_saveState_9abh.implementation = function(v0) {
        printStacks('public com.tencent.smtt.sdk.WebBackForwardList com.tencent.smtt.sdk.WebView.saveState(android.os.Bundle)');
        return com_tencent_smtt_sdk_WebView_clz_method_saveState_9abh.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_copyBackForwardList_6zwp = com_tencent_smtt_sdk_WebView_clz.copyBackForwardList.overload();
    com_tencent_smtt_sdk_WebView_clz_method_copyBackForwardList_6zwp.implementation = function() {
        printStacks('public com.tencent.smtt.sdk.WebBackForwardList com.tencent.smtt.sdk.WebView.copyBackForwardList()');
        return com_tencent_smtt_sdk_WebView_clz_method_copyBackForwardList_6zwp.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_h_do0e = com_tencent_smtt_sdk_WebView_clz.h.overload();
    com_tencent_smtt_sdk_WebView_clz_method_h_do0e.implementation = function() {
        printStacks('static android.content.Context com.tencent.smtt.sdk.WebView.h()');
        return com_tencent_smtt_sdk_WebView_clz_method_h_do0e.call(com_tencent_smtt_sdk_WebView_clz);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_requestFocusNodeHref_2rcb = com_tencent_smtt_sdk_WebView_clz.requestFocusNodeHref.overload('android.os.Message');
    com_tencent_smtt_sdk_WebView_clz_method_requestFocusNodeHref_2rcb.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.requestFocusNodeHref(android.os.Message)');
        com_tencent_smtt_sdk_WebView_clz_method_requestFocusNodeHref_2rcb.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_showDebugView_kfya = com_tencent_smtt_sdk_WebView_clz.showDebugView.overload('java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_showDebugView_kfya.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.showDebugView(java.lang.String)');
        return com_tencent_smtt_sdk_WebView_clz_method_showDebugView_kfya.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_overlayHorizontalScrollbar_n3kg = com_tencent_smtt_sdk_WebView_clz.overlayHorizontalScrollbar.overload();
    com_tencent_smtt_sdk_WebView_clz_method_overlayHorizontalScrollbar_n3kg.implementation = function() {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.overlayHorizontalScrollbar()');
        return com_tencent_smtt_sdk_WebView_clz_method_overlayHorizontalScrollbar_n3kg.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getPluginList_68i6 = com_tencent_smtt_sdk_WebView_clz.getPluginList.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getPluginList_68i6.implementation = function() {
        printStacks('public static synchronized java.lang.Object com.tencent.smtt.sdk.WebView.getPluginList()');
        return com_tencent_smtt_sdk_WebView_clz_method_getPluginList_68i6.call(com_tencent_smtt_sdk_WebView_clz);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_goBackOrForward_iccc = com_tencent_smtt_sdk_WebView_clz.goBackOrForward.overload('int');
    com_tencent_smtt_sdk_WebView_clz_method_goBackOrForward_iccc.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.goBackOrForward(int)');
        com_tencent_smtt_sdk_WebView_clz_method_goBackOrForward_iccc.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_computeScroll_850o = com_tencent_smtt_sdk_WebView_clz.computeScroll.overload();
    com_tencent_smtt_sdk_WebView_clz_method_computeScroll_850o.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.computeScroll()');
        com_tencent_smtt_sdk_WebView_clz_method_computeScroll_850o.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_invokeZoomPicker_al02 = com_tencent_smtt_sdk_WebView_clz.invokeZoomPicker.overload();
    com_tencent_smtt_sdk_WebView_clz_method_invokeZoomPicker_al02.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.invokeZoomPicker()');
        com_tencent_smtt_sdk_WebView_clz_method_invokeZoomPicker_al02.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getScale_tv6e = com_tencent_smtt_sdk_WebView_clz.getScale.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getScale_tv6e.implementation = function() {
        printStacks('public float com.tencent.smtt.sdk.WebView.getScale()');
        return com_tencent_smtt_sdk_WebView_clz_method_getScale_tv6e.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setWebContentsDebuggingEnabled_kyfo = com_tencent_smtt_sdk_WebView_clz.setWebContentsDebuggingEnabled.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_setWebContentsDebuggingEnabled_kyfo.implementation = function(v0) {
        printStacks('public static void com.tencent.smtt.sdk.WebView.setWebContentsDebuggingEnabled(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_setWebContentsDebuggingEnabled_kyfo.call(com_tencent_smtt_sdk_WebView_clz, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_reload_gn8p = com_tencent_smtt_sdk_WebView_clz.reload.overload();
    com_tencent_smtt_sdk_WebView_clz_method_reload_gn8p.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.reload()');
        com_tencent_smtt_sdk_WebView_clz_method_reload_gn8p.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getProgress_9w8v = com_tencent_smtt_sdk_WebView_clz.getProgress.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getProgress_9w8v.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.getProgress()');
        return com_tencent_smtt_sdk_WebView_clz_method_getProgress_9w8v.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_isDayMode_llv8 = com_tencent_smtt_sdk_WebView_clz.isDayMode.overload();
    com_tencent_smtt_sdk_WebView_clz_method_isDayMode_llv8.implementation = function() {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.isDayMode()');
        return com_tencent_smtt_sdk_WebView_clz_method_isDayMode_llv8.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getCrashExtraMessage_gd89 = com_tencent_smtt_sdk_WebView_clz.getCrashExtraMessage.overload('android.content.Context');
    com_tencent_smtt_sdk_WebView_clz_method_getCrashExtraMessage_gd89.implementation = function(v0) {
        printStacks('public static java.lang.String com.tencent.smtt.sdk.WebView.getCrashExtraMessage(android.content.Context)');
        return com_tencent_smtt_sdk_WebView_clz_method_getCrashExtraMessage_gd89.call(com_tencent_smtt_sdk_WebView_clz, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_clearCache_ru15 = com_tencent_smtt_sdk_WebView_clz.clearCache.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_clearCache_ru15.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.clearCache(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_clearCache_ru15.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_a_o4kb = com_tencent_smtt_sdk_WebView_clz.a.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase');
    com_tencent_smtt_sdk_WebView_clz_method_a_o4kb.implementation = function(v0) {
        printStacks('void com.tencent.smtt.sdk.WebView.a(com.tencent.smtt.export.external.interfaces.IX5WebViewBase)');
        com_tencent_smtt_sdk_WebView_clz_method_a_o4kb.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_requestChildRectangleOnScreen_m1mw = com_tencent_smtt_sdk_WebView_clz.requestChildRectangleOnScreen.overload('android.view.View', 'android.graphics.Rect', 'boolean');
    com_tencent_smtt_sdk_WebView_clz_method_requestChildRectangleOnScreen_m1mw.implementation = function(v0, v1, v2) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.requestChildRectangleOnScreen(android.view.View,android.graphics.Rect,boolean)');
        return com_tencent_smtt_sdk_WebView_clz_method_requestChildRectangleOnScreen_m1mw.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_computeHorizontalScrollOffset_mehr = com_tencent_smtt_sdk_WebView_clz.computeHorizontalScrollOffset.overload();
    com_tencent_smtt_sdk_WebView_clz_method_computeHorizontalScrollOffset_mehr.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.computeHorizontalScrollOffset()');
        return com_tencent_smtt_sdk_WebView_clz_method_computeHorizontalScrollOffset_mehr.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_postUrl_h4ed = com_tencent_smtt_sdk_WebView_clz.postUrl.overload('java.lang.String', '[B');
    com_tencent_smtt_sdk_WebView_clz_method_postUrl_h4ed.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebView.postUrl(java.lang.String,byte[])');
        com_tencent_smtt_sdk_WebView_clz_method_postUrl_h4ed.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_a_ksgn = com_tencent_smtt_sdk_WebView_clz.a.overload();
    com_tencent_smtt_sdk_WebView_clz_method_a_ksgn.implementation = function() {
        printStacks('protected void com.tencent.smtt.sdk.WebView.a()');
        com_tencent_smtt_sdk_WebView_clz_method_a_ksgn.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_customDiskCachePathEnabled_njvw = com_tencent_smtt_sdk_WebView_clz.customDiskCachePathEnabled.overload('boolean', 'java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_customDiskCachePathEnabled_njvw.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebView.customDiskCachePathEnabled(boolean,java.lang.String)');
        com_tencent_smtt_sdk_WebView_clz_method_customDiskCachePathEnabled_njvw.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_destroy_k7fp = com_tencent_smtt_sdk_WebView_clz.destroy.overload();
    com_tencent_smtt_sdk_WebView_clz_method_destroy_k7fp.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.destroy()');
        com_tencent_smtt_sdk_WebView_clz_method_destroy_k7fp.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getWebViewClient_5mvi = com_tencent_smtt_sdk_WebView_clz.getWebViewClient.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getWebViewClient_5mvi.implementation = function() {
        printStacks('public com.tencent.smtt.sdk.WebViewClient com.tencent.smtt.sdk.WebView.getWebViewClient()');
        return com_tencent_smtt_sdk_WebView_clz_method_getWebViewClient_5mvi.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setWebChromeClientExtension_1zl8 = com_tencent_smtt_sdk_WebView_clz.setWebChromeClientExtension.overload('com.tencent.smtt.export.external.extension.interfaces.IX5WebChromeClientExtension');
    com_tencent_smtt_sdk_WebView_clz_method_setWebChromeClientExtension_1zl8.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setWebChromeClientExtension(com.tencent.smtt.export.external.extension.interfaces.IX5WebChromeClientExtension)');
        com_tencent_smtt_sdk_WebView_clz_method_setWebChromeClientExtension_1zl8.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setCertificate_i5oj = com_tencent_smtt_sdk_WebView_clz.setCertificate.overload('android.net.http.SslCertificate');
    com_tencent_smtt_sdk_WebView_clz_method_setCertificate_i5oj.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setCertificate(android.net.http.SslCertificate)');
        com_tencent_smtt_sdk_WebView_clz_method_setCertificate_i5oj.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setScrollBarStyle_xv35 = com_tencent_smtt_sdk_WebView_clz.setScrollBarStyle.overload('int');
    com_tencent_smtt_sdk_WebView_clz_method_setScrollBarStyle_xv35.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setScrollBarStyle(int)');
        com_tencent_smtt_sdk_WebView_clz_method_setScrollBarStyle_xv35.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setWebViewCallbackClient_drfr = com_tencent_smtt_sdk_WebView_clz.setWebViewCallbackClient.overload('com.tencent.smtt.sdk.WebViewCallbackClient');
    com_tencent_smtt_sdk_WebView_clz_method_setWebViewCallbackClient_drfr.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setWebViewCallbackClient(com.tencent.smtt.sdk.WebViewCallbackClient)');
        com_tencent_smtt_sdk_WebView_clz_method_setWebViewCallbackClient_drfr.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_computeHorizontalScrollExtent_ytbb = com_tencent_smtt_sdk_WebView_clz.computeHorizontalScrollExtent.overload();
    com_tencent_smtt_sdk_WebView_clz_method_computeHorizontalScrollExtent_ytbb.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.computeHorizontalScrollExtent()');
        return com_tencent_smtt_sdk_WebView_clz_method_computeHorizontalScrollExtent_ytbb.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_computeVerticalScrollOffset_etfa = com_tencent_smtt_sdk_WebView_clz.computeVerticalScrollOffset.overload();
    com_tencent_smtt_sdk_WebView_clz_method_computeVerticalScrollOffset_etfa.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.computeVerticalScrollOffset()');
        return com_tencent_smtt_sdk_WebView_clz_method_computeVerticalScrollOffset_etfa.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_tbsWebviewDestroy_aic6 = com_tencent_smtt_sdk_WebView_clz.tbsWebviewDestroy.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_tbsWebviewDestroy_aic6.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.tbsWebviewDestroy(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_tbsWebviewDestroy_aic6.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_resumeTimers_7do9 = com_tencent_smtt_sdk_WebView_clz.resumeTimers.overload();
    com_tencent_smtt_sdk_WebView_clz_method_resumeTimers_7do9.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.resumeTimers()');
        com_tencent_smtt_sdk_WebView_clz_method_resumeTimers_7do9.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_a_u5r7 = com_tencent_smtt_sdk_WebView_clz.a.overload('android.content.Context', 'com.tencent.smtt.sdk.n');
    com_tencent_smtt_sdk_WebView_clz_method_a_u5r7.implementation = function(v0, v1) {
        printStacks('private void com.tencent.smtt.sdk.WebView.a(android.content.Context,com.tencent.smtt.sdk.n)');
        com_tencent_smtt_sdk_WebView_clz_method_a_u5r7.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setHorizontalScrollbarOverlay_m17k = com_tencent_smtt_sdk_WebView_clz.setHorizontalScrollbarOverlay.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_setHorizontalScrollbarOverlay_m17k.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setHorizontalScrollbarOverlay(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_setHorizontalScrollbarOverlay_m17k.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_refreshPlugins_do1x = com_tencent_smtt_sdk_WebView_clz.refreshPlugins.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_refreshPlugins_do1x.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.refreshPlugins(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_refreshPlugins_do1x.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_super_onScrollChanged_s47l = com_tencent_smtt_sdk_WebView_clz.super_onScrollChanged.overload('int', 'int', 'int', 'int');
    com_tencent_smtt_sdk_WebView_clz_method_super_onScrollChanged_s47l.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.sdk.WebView.super_onScrollChanged(int,int,int,int)');
        com_tencent_smtt_sdk_WebView_clz_method_super_onScrollChanged_s47l.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getView_fmuw = com_tencent_smtt_sdk_WebView_clz.getView.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getView_fmuw.implementation = function() {
        printStacks('public android.view.View com.tencent.smtt.sdk.WebView.getView()');
        return com_tencent_smtt_sdk_WebView_clz_method_getView_fmuw.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_pauseTimers_x4h7 = com_tencent_smtt_sdk_WebView_clz.pauseTimers.overload();
    com_tencent_smtt_sdk_WebView_clz_method_pauseTimers_x4h7.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.pauseTimers()');
        com_tencent_smtt_sdk_WebView_clz_method_pauseTimers_x4h7.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getFavicon_6727 = com_tencent_smtt_sdk_WebView_clz.getFavicon.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getFavicon_6727.implementation = function() {
        printStacks('public android.graphics.Bitmap com.tencent.smtt.sdk.WebView.getFavicon()');
        return com_tencent_smtt_sdk_WebView_clz_method_getFavicon_6727.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getHttpAuthUsernamePassword_f7hw = com_tencent_smtt_sdk_WebView_clz.getHttpAuthUsernamePassword.overload('java.lang.String', 'java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_getHttpAuthUsernamePassword_f7hw.implementation = function(v0, v1) {
        printStacks('public java.lang.String[] com.tencent.smtt.sdk.WebView.getHttpAuthUsernamePassword(java.lang.String,java.lang.String)');
        return com_tencent_smtt_sdk_WebView_clz_method_getHttpAuthUsernamePassword_f7hw.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_loadDataWithBaseURL_xele = com_tencent_smtt_sdk_WebView_clz.loadDataWithBaseURL.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_loadDataWithBaseURL_xele.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('public void com.tencent.smtt.sdk.WebView.loadDataWithBaseURL(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)');
        com_tencent_smtt_sdk_WebView_clz_method_loadDataWithBaseURL_xele.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getSettings_1ezb = com_tencent_smtt_sdk_WebView_clz.getSettings.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getSettings_1ezb.implementation = function() {
        printStacks('public com.tencent.smtt.sdk.WebSettings com.tencent.smtt.sdk.WebView.getSettings()');
        return com_tencent_smtt_sdk_WebView_clz_method_getSettings_1ezb.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_findAllAsync_slzv = com_tencent_smtt_sdk_WebView_clz.findAllAsync.overload('java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_findAllAsync_slzv.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.findAllAsync(java.lang.String)');
        com_tencent_smtt_sdk_WebView_clz_method_findAllAsync_slzv.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setRendererPriorityPolicy_h4bi = com_tencent_smtt_sdk_WebView_clz.setRendererPriorityPolicy.overload('int', 'boolean');
    com_tencent_smtt_sdk_WebView_clz_method_setRendererPriorityPolicy_h4bi.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setRendererPriorityPolicy(int,boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_setRendererPriorityPolicy_h4bi.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_saveWebArchive_rryd = com_tencent_smtt_sdk_WebView_clz.saveWebArchive.overload('java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_saveWebArchive_rryd.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.saveWebArchive(java.lang.String)');
        com_tencent_smtt_sdk_WebView_clz_method_saveWebArchive_rryd.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_c_zrp7 = com_tencent_smtt_sdk_WebView_clz.c.overload();
    com_tencent_smtt_sdk_WebView_clz_method_c_zrp7.implementation = function() {
        printStacks('com.tencent.smtt.export.external.interfaces.IX5WebViewBase com.tencent.smtt.sdk.WebView.c()');
        return com_tencent_smtt_sdk_WebView_clz_method_c_zrp7.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_findAddress_9ykh = com_tencent_smtt_sdk_WebView_clz.findAddress.overload('java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_findAddress_9ykh.implementation = function(v0) {
        printStacks('public static java.lang.String com.tencent.smtt.sdk.WebView.findAddress(java.lang.String)');
        return com_tencent_smtt_sdk_WebView_clz_method_findAddress_9ykh.call(com_tencent_smtt_sdk_WebView_clz, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getScrollBarSize_twi5 = com_tencent_smtt_sdk_WebView_clz.getScrollBarSize.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getScrollBarSize_twi5.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.getScrollBarSize()');
        return com_tencent_smtt_sdk_WebView_clz_method_getScrollBarSize_twi5.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_zoomIn_jtg4 = com_tencent_smtt_sdk_WebView_clz.zoomIn.overload();
    com_tencent_smtt_sdk_WebView_clz_method_zoomIn_jtg4.implementation = function() {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.zoomIn()');
        return com_tencent_smtt_sdk_WebView_clz_method_zoomIn_jtg4.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setOnTouchListener_ukxs = com_tencent_smtt_sdk_WebView_clz.setOnTouchListener.overload('android.view.View$OnTouchListener');
    com_tencent_smtt_sdk_WebView_clz_method_setOnTouchListener_ukxs.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setOnTouchListener(android.view.View$OnTouchListener)');
        com_tencent_smtt_sdk_WebView_clz_method_setOnTouchListener_ukxs.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_savePicture_guxk = com_tencent_smtt_sdk_WebView_clz.savePicture.overload('android.os.Bundle', 'java.io.File');
    com_tencent_smtt_sdk_WebView_clz_method_savePicture_guxk.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView.savePicture(android.os.Bundle,java.io.File)');
        return com_tencent_smtt_sdk_WebView_clz_method_savePicture_guxk.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_savePassword_ldw1 = com_tencent_smtt_sdk_WebView_clz.savePassword.overload('java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_savePassword_ldw1.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.WebView.savePassword(java.lang.String,java.lang.String,java.lang.String)');
        com_tencent_smtt_sdk_WebView_clz_method_savePassword_ldw1.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_loadData_o0ws = com_tencent_smtt_sdk_WebView_clz.loadData.overload('java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_loadData_o0ws.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.WebView.loadData(java.lang.String,java.lang.String,java.lang.String)');
        com_tencent_smtt_sdk_WebView_clz_method_loadData_o0ws.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_capturePicture_9aqt = com_tencent_smtt_sdk_WebView_clz.capturePicture.overload();
    com_tencent_smtt_sdk_WebView_clz_method_capturePicture_9aqt.implementation = function() {
        printStacks('public android.graphics.Picture com.tencent.smtt.sdk.WebView.capturePicture()');
        return com_tencent_smtt_sdk_WebView_clz_method_capturePicture_9aqt.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getVisibleTitleHeight_uiak = com_tencent_smtt_sdk_WebView_clz.getVisibleTitleHeight.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getVisibleTitleHeight_uiak.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView.getVisibleTitleHeight()');
        return com_tencent_smtt_sdk_WebView_clz_method_getVisibleTitleHeight_uiak.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_getX5HitTestResult_amui = com_tencent_smtt_sdk_WebView_clz.getX5HitTestResult.overload();
    com_tencent_smtt_sdk_WebView_clz_method_getX5HitTestResult_amui.implementation = function() {
        printStacks('public com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult com.tencent.smtt.sdk.WebView.getX5HitTestResult()');
        return com_tencent_smtt_sdk_WebView_clz_method_getX5HitTestResult_amui.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_super_computeScroll_2vsi = com_tencent_smtt_sdk_WebView_clz.super_computeScroll.overload();
    com_tencent_smtt_sdk_WebView_clz_method_super_computeScroll_2vsi.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView.super_computeScroll()');
        com_tencent_smtt_sdk_WebView_clz_method_super_computeScroll_2vsi.call(this);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_createPrintDocumentAdapter_oouo = com_tencent_smtt_sdk_WebView_clz.createPrintDocumentAdapter.overload('java.lang.String');
    com_tencent_smtt_sdk_WebView_clz_method_createPrintDocumentAdapter_oouo.implementation = function(v0) {
        printStacks('public java.lang.Object com.tencent.smtt.sdk.WebView.createPrintDocumentAdapter(java.lang.String)');
        return com_tencent_smtt_sdk_WebView_clz_method_createPrintDocumentAdapter_oouo.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_a_5a2b = com_tencent_smtt_sdk_WebView_clz.a.overload('android.util.AttributeSet');
    com_tencent_smtt_sdk_WebView_clz_method_a_5a2b.implementation = function(v0) {
        printStacks('private void com.tencent.smtt.sdk.WebView.a(android.util.AttributeSet)');
        com_tencent_smtt_sdk_WebView_clz_method_a_5a2b.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_setARModeEnable_1agw = com_tencent_smtt_sdk_WebView_clz.setARModeEnable.overload('boolean');
    com_tencent_smtt_sdk_WebView_clz_method_setARModeEnable_1agw.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView.setARModeEnable(boolean)');
        com_tencent_smtt_sdk_WebView_clz_method_setARModeEnable_1agw.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_method_reportInitPerformance_5m5r = com_tencent_smtt_sdk_WebView_clz.reportInitPerformance.overload('long', 'int', 'long', 'long');
    com_tencent_smtt_sdk_WebView_clz_method_reportInitPerformance_5m5r.implementation = function(v0, v1, v2, v3) {
        printStacks('public org.json.JSONObject com.tencent.smtt.sdk.WebView.reportInitPerformance(long,int,long,long)');
        return com_tencent_smtt_sdk_WebView_clz_method_reportInitPerformance_5m5r.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebView_clz_init_9n3d = com_tencent_smtt_sdk_WebView_clz.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int', 'boolean');
    com_tencent_smtt_sdk_WebView_clz_init_9n3d.implementation = function(v0, v1, v2, v3) {
        printStacks('public com.tencent.smtt.sdk.WebView(android.content.Context,android.util.AttributeSet,int,boolean)');
        return com_tencent_smtt_sdk_WebView_clz_init_9n3d.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebView_clz_init_m2pn = com_tencent_smtt_sdk_WebView_clz.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int');
    com_tencent_smtt_sdk_WebView_clz_init_m2pn.implementation = function(v0, v1, v2) {
        printStacks('public com.tencent.smtt.sdk.WebView(android.content.Context,android.util.AttributeSet,int)');
        return com_tencent_smtt_sdk_WebView_clz_init_m2pn.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebView_clz_init_hcsn = com_tencent_smtt_sdk_WebView_clz.$init.overload('android.content.Context');
    com_tencent_smtt_sdk_WebView_clz_init_hcsn.implementation = function(v0) {
        printStacks('public com.tencent.smtt.sdk.WebView(android.content.Context)');
        return com_tencent_smtt_sdk_WebView_clz_init_hcsn.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_clz_init_yc1u = com_tencent_smtt_sdk_WebView_clz.$init.overload('android.content.Context', 'boolean');
    com_tencent_smtt_sdk_WebView_clz_init_yc1u.implementation = function(v0, v1) {
        printStacks('public com.tencent.smtt.sdk.WebView(android.content.Context,boolean)');
        return com_tencent_smtt_sdk_WebView_clz_init_yc1u.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_clz_init_1r7h = com_tencent_smtt_sdk_WebView_clz.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int', 'java.util.Map', 'boolean');
    com_tencent_smtt_sdk_WebView_clz_init_1r7h.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('public com.tencent.smtt.sdk.WebView(android.content.Context,android.util.AttributeSet,int,java.util.Map,boolean)');
        return com_tencent_smtt_sdk_WebView_clz_init_1r7h.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_smtt_sdk_WebView_clz_init_9r15 = com_tencent_smtt_sdk_WebView_clz.$init.overload('android.content.Context', 'android.util.AttributeSet');
    com_tencent_smtt_sdk_WebView_clz_init_9r15.implementation = function(v0, v1) {
        printStacks('public com.tencent.smtt.sdk.WebView(android.content.Context,android.util.AttributeSet)');
        return com_tencent_smtt_sdk_WebView_clz_init_9r15.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_10_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$10');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_10_clz_method_run_83ab = com_tencent_mm_plugin_webview_stub_WebViewStubService_10_clz.run.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_10_clz_method_run_83ab.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$10.run()');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_10_clz_method_run_83ab.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_10_clz_init_kgid = com_tencent_mm_plugin_webview_stub_WebViewStubService_10_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService', 'android.content.Intent');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_10_clz_init_kgid.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$10(com.tencent.mm.plugin.webview.stub.WebViewStubService,android.content.Intent)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_10_clz_init_kgid.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_1_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$7$1');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_1_clz_method_a_6qo3 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_1_clz.a.overload('boolean', 'float', 'float', 'int', 'double', 'double');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_1_clz_method_a_6qo3.implementation = function(v0, v1, v2, v3, v4, v5) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubService$1$7$1.a(boolean,float,float,int,double,double)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_1_clz_method_a_6qo3.call(this, v0, v1, v2, v3, v4, v5);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_1_clz_init_zhyq = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_1_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$7');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_1_clz_init_zhyq.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$7$1(com.tencent.mm.plugin.webview.stub.WebViewStubService$1$7)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_7_1_clz_init_zhyq.call(this, v0);
    };
    var com_tencent_smtt_export_external_proxy_X5ProxyWebViewClient_clz = Java.use('com.tencent.smtt.export.external.proxy.X5ProxyWebViewClient');
    var com_tencent_smtt_export_external_proxy_X5ProxyWebViewClient_clz_init_dvka = com_tencent_smtt_export_external_proxy_X5ProxyWebViewClient_clz.$init.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewClient');
    com_tencent_smtt_export_external_proxy_X5ProxyWebViewClient_clz_init_dvka.implementation = function(v0) {
        printStacks('public com.tencent.smtt.export.external.proxy.X5ProxyWebViewClient(com.tencent.smtt.export.external.interfaces.IX5WebViewClient)');
        return com_tencent_smtt_export_external_proxy_X5ProxyWebViewClient_clz_init_dvka.call(this, v0);
    };
    var com_tencent_smtt_export_external_proxy_X5ProxyWebViewClient_clz_init_xzgz = com_tencent_smtt_export_external_proxy_X5ProxyWebViewClient_clz.$init.overload('com.tencent.smtt.export.external.WebViewWizardBase');
    com_tencent_smtt_export_external_proxy_X5ProxyWebViewClient_clz_init_xzgz.implementation = function(v0) {
        printStacks('public com.tencent.smtt.export.external.proxy.X5ProxyWebViewClient(com.tencent.smtt.export.external.WebViewWizardBase)');
        return com_tencent_smtt_export_external_proxy_X5ProxyWebViewClient_clz_init_xzgz.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz = Java.use('com.tencent.mm.plugin.webview.model.WebViewJSSDKVideoItem');
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz_method_writeToParcel_eto3 = com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz.writeToParcel.overload('android.os.Parcel', 'int');
    com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz_method_writeToParcel_eto3.implementation = function(v0, v1) {
        printStacks('public void com.tencent.mm.plugin.webview.model.WebViewJSSDKVideoItem.writeToParcel(android.os.Parcel,int)');
        com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz_method_writeToParcel_eto3.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz_method_describeContents_yd2i = com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz.describeContents.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz_method_describeContents_yd2i.implementation = function() {
        printStacks('public int com.tencent.mm.plugin.webview.model.WebViewJSSDKVideoItem.describeContents()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz_method_describeContents_yd2i.call(this);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz_method_fxe_b9xg = com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz.fxe.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz_method_fxe_b9xg.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.model.WebViewJSSDKVideoItem.fxe()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz_method_fxe_b9xg.call(this);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz_method_fxd_brxf = com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz.fxd.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz_method_fxd_brxf.implementation = function() {
        printStacks('public final com.tencent.mm.plugin.webview.model.WebViewJSSDKFileItem com.tencent.mm.plugin.webview.model.WebViewJSSDKVideoItem.fxd()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz_method_fxd_brxf.call(this);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz_method_fxf_xcho = com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz.fxf.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz_method_fxf_xcho.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.model.WebViewJSSDKVideoItem.fxf()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz_method_fxf_xcho.call(this);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz_init_pr4n = com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz.$init.overload('android.os.Parcel');
    com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz_init_pr4n.implementation = function(v0) {
        printStacks('protected com.tencent.mm.plugin.webview.model.WebViewJSSDKVideoItem(android.os.Parcel)');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz_init_pr4n.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz_init_i4bn = com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz.$init.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz_init_i4bn.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.model.WebViewJSSDKVideoItem()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_clz_init_i4bn.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI');
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_b_etye = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz.b.overload('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_b_etye.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI.b(com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_b_etye.call(com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_e_1hkg = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz.e.overload('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_e_1hkg.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI.e(com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_e_1hkg.call(com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_d_a3sv = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz.d.overload('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_d_a3sv.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI.d(com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_d_a3sv.call(com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_getLayoutId_dvy6 = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz.getLayoutId.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_getLayoutId_dvy6.implementation = function() {
        printStacks('public int com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI.getLayoutId()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_getLayoutId_dvy6.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_g_4apo = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz.g.overload('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_g_4apo.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI.g(com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_g_4apo.call(com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_onDestroy_6e0a = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz.onDestroy.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_onDestroy_6e0a.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI.onDestroy()');
        com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_onDestroy_6e0a.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_a_masr = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz.a.overload('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_a_masr.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.stub.e com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI.a(com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_a_masr.call(com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_getForceOrientation_jrzu = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz.getForceOrientation.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_getForceOrientation_jrzu.implementation = function() {
        printStacks('public int com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI.getForceOrientation()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_getForceOrientation_jrzu.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_onRequestPermissionsResult_l8ce = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz.onRequestPermissionsResult.overload('int', '[Ljava.lang.String;', '[I');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_onRequestPermissionsResult_l8ce.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI.onRequestPermissionsResult(int,java.lang.String[],int[])');
        com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_onRequestPermissionsResult_l8ce.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_f_6oqm = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz.f.overload('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_f_6oqm.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI.f(com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI)');
        com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_f_6oqm.call(com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_aNE_xsul = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz.aNE.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_aNE_xsul.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI.aNE(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_aNE_xsul.call(com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_onCreate_80d9 = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz.onCreate.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_onCreate_80d9.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI.onCreate(android.os.Bundle)');
        com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_onCreate_80d9.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_c_rcem = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz.c.overload('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_c_rcem.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI.c(com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_c_rcem.call(com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_onWindowFocusChanged_wz3p = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz.onWindowFocusChanged.overload('boolean');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_onWindowFocusChanged_wz3p.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI.onWindowFocusChanged(boolean)');
        com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_method_onWindowFocusChanged_wz3p.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_init_hdcs = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz.$init.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_init_hdcs.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_clz_init_hdcs.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView');
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_drawChild_ribg = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.drawChild.overload('android.graphics.Canvas', 'android.view.View', 'long');
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_drawChild_ribg.implementation = function(v0, v1, v2) {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.drawChild(android.graphics.Canvas,android.view.View,long)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_drawChild_ribg.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_eaI_p1wh = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.eaI.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_eaI_p1wh.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.eaI()');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_eaI_p1wh.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_setEmbeddedTitleBarCompat_i8ma = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.setEmbeddedTitleBarCompat.overload('android.view.View');
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_setEmbeddedTitleBarCompat_i8ma.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.setEmbeddedTitleBarCompat(android.view.View)');
        com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_setEmbeddedTitleBarCompat_i8ma.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_getVisibleTitleBarHeight_4tpp = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.getVisibleTitleBarHeight.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_getVisibleTitleBarHeight_4tpp.implementation = function() {
        printStacks('public int com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.getVisibleTitleBarHeight()');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_getVisibleTitleBarHeight_4tpp.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_getViewHeightWithTitleBar_qgev = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.getViewHeightWithTitleBar.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_getViewHeightWithTitleBar_qgev.implementation = function() {
        printStacks('private int com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.getViewHeightWithTitleBar()');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_getViewHeightWithTitleBar_qgev.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_eaK_ctny = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.eaK.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_eaK_ctny.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.eaK()');
        com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_eaK_ctny.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_onWebViewScrollChanged_yhpg = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.onWebViewScrollChanged.overload('int', 'int', 'int', 'int');
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_onWebViewScrollChanged_yhpg.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.onWebViewScrollChanged(int,int,int,int)');
        com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_onWebViewScrollChanged_yhpg.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_getBottomHeight_fa5q = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.getBottomHeight.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_getBottomHeight_fa5q.implementation = function() {
        printStacks('public int com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.getBottomHeight()');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_getBottomHeight_fa5q.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_e_5uqe = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.e.overload('com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView');
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_e_5uqe.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.e(com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_e_5uqe.call(com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_eaL_s8ug = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.eaL.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_eaL_s8ug.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.eaL()');
        com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_eaL_s8ug.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_computeVerticalScrollExtent_5vts = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.computeVerticalScrollExtent.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_computeVerticalScrollExtent_5vts.implementation = function() {
        printStacks('public int com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.computeVerticalScrollExtent()');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_computeVerticalScrollExtent_5vts.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_setEmbeddedTitleBarSinceJellyBean_vi6o = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.setEmbeddedTitleBarSinceJellyBean.overload('android.view.View');
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_setEmbeddedTitleBarSinceJellyBean_vi6o.implementation = function(v0) {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.setEmbeddedTitleBarSinceJellyBean(android.view.View)');
        com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_setEmbeddedTitleBarSinceJellyBean_vi6o.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_rY_7mel = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.rY.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_rY_7mel.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.rY(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_rY_7mel.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_d_ayrk = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.d.overload('com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView');
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_d_ayrk.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.d(com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_d_ayrk.call(com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_a_uvtf = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView');
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_a_uvtf.implementation = function(v0) {
        printStacks('public static boolean com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.a(com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_a_uvtf.call(com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_f_r7dj = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.f.overload('com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView');
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_f_r7dj.implementation = function(v0) {
        printStacks('static android.view.View com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.f(com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_f_r7dj.call(com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_b_s785 = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView');
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_b_s785.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.b(com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_b_s785.call(com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_getTitleHeight_5d79 = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.getTitleHeight.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_getTitleHeight_5d79.implementation = function() {
        printStacks('public int com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.getTitleHeight()');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_getTitleHeight_5d79.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_c_0cya = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.c.overload('com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView');
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_c_0cya.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.c(com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_c_0cya.call(com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_eaJ_jvaj = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.eaJ.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_eaJ_jvaj.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.eaJ()');
        com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_eaJ_jvaj.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_gt_96ev = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.gt.overload('android.content.Context');
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_gt_96ev.implementation = function(v0) {
        printStacks('public static void com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.gt(android.content.Context)');
        com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_gt_96ev.call(com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_computeVerticalScrollOffset_za8q = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.computeVerticalScrollOffset.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_computeVerticalScrollOffset_za8q.implementation = function() {
        printStacks('public int com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.computeVerticalScrollOffset()');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_computeVerticalScrollOffset_za8q.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_dispatchTouchEvent_eptd = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.dispatchTouchEvent.overload('android.view.MotionEvent');
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_dispatchTouchEvent_eptd.implementation = function(v0) {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.dispatchTouchEvent(android.view.MotionEvent)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_dispatchTouchEvent_eptd.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_loadDataWithBaseURL_qidm = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.loadDataWithBaseURL.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_loadDataWithBaseURL_qidm.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.loadDataWithBaseURL(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_loadDataWithBaseURL_qidm.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_g_iaw4 = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.g.overload('com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView');
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_g_iaw4.implementation = function(v0) {
        printStacks('static android.view.View com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.g(com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_g_iaw4.call(com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_setEmbeddedBottomBar_dxqb = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.setEmbeddedBottomBar.overload('android.view.View');
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_setEmbeddedBottomBar_dxqb.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView.setEmbeddedBottomBar(android.view.View)');
        com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_method_setEmbeddedBottomBar_dxqb.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_init_qaa4 = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int');
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_init_qaa4.implementation = function(v0, v1, v2) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView(android.content.Context,android.util.AttributeSet,int)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_init_qaa4.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_init_z5lp = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.$init.overload('android.content.Context', 'android.util.AttributeSet');
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_init_z5lp.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView(android.content.Context,android.util.AttributeSet)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_init_z5lp.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_init_ychq = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz.$init.overload('android.content.Context');
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_init_ychq.implementation = function(v0) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView(android.content.Context)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_clz_init_ychq.call(this, v0);
    };
    var com_tencent_smtt_sdk_SystemWebViewClient_clz = Java.use('com.tencent.smtt.sdk.SystemWebViewClient');
    var com_tencent_smtt_sdk_SystemWebViewClient_clz_method_shouldInterceptRequest_nxy9 = com_tencent_smtt_sdk_SystemWebViewClient_clz.shouldInterceptRequest.overload('android.webkit.WebView', 'java.lang.String');
    com_tencent_smtt_sdk_SystemWebViewClient_clz_method_shouldInterceptRequest_nxy9.implementation = function(v0, v1) {
        printStacks('public android.webkit.WebResourceResponse com.tencent.smtt.sdk.SystemWebViewClient.shouldInterceptRequest(android.webkit.WebView,java.lang.String)');
        return com_tencent_smtt_sdk_SystemWebViewClient_clz_method_shouldInterceptRequest_nxy9.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_SystemWebViewClient_clz_method_a_kmno = com_tencent_smtt_sdk_SystemWebViewClient_clz.a.overload('com.tencent.smtt.sdk.SystemWebViewClient');
    com_tencent_smtt_sdk_SystemWebViewClient_clz_method_a_kmno.implementation = function(v0) {
        printStacks('static com.tencent.smtt.sdk.WebView com.tencent.smtt.sdk.SystemWebViewClient.a(com.tencent.smtt.sdk.SystemWebViewClient)');
        return com_tencent_smtt_sdk_SystemWebViewClient_clz_method_a_kmno.call(com_tencent_smtt_sdk_SystemWebViewClient_clz, v0);
    };
    var com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onFormResubmission_7f69 = com_tencent_smtt_sdk_SystemWebViewClient_clz.onFormResubmission.overload('android.webkit.WebView', 'android.os.Message', 'android.os.Message');
    com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onFormResubmission_7f69.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.SystemWebViewClient.onFormResubmission(android.webkit.WebView,android.os.Message,android.os.Message)');
        com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onFormResubmission_7f69.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onTooManyRedirects_6w73 = com_tencent_smtt_sdk_SystemWebViewClient_clz.onTooManyRedirects.overload('android.webkit.WebView', 'android.os.Message', 'android.os.Message');
    com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onTooManyRedirects_6w73.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.SystemWebViewClient.onTooManyRedirects(android.webkit.WebView,android.os.Message,android.os.Message)');
        com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onTooManyRedirects_6w73.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onReceivedHttpError_vqkx = com_tencent_smtt_sdk_SystemWebViewClient_clz.onReceivedHttpError.overload('android.webkit.WebView', 'android.webkit.WebResourceRequest', 'android.webkit.WebResourceResponse');
    com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onReceivedHttpError_vqkx.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.SystemWebViewClient.onReceivedHttpError(android.webkit.WebView,android.webkit.WebResourceRequest,android.webkit.WebResourceResponse)');
        com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onReceivedHttpError_vqkx.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onReceivedHttpAuthRequest_rd0k = com_tencent_smtt_sdk_SystemWebViewClient_clz.onReceivedHttpAuthRequest.overload('android.webkit.WebView', 'android.webkit.HttpAuthHandler', 'java.lang.String', 'java.lang.String');
    com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onReceivedHttpAuthRequest_rd0k.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.sdk.SystemWebViewClient.onReceivedHttpAuthRequest(android.webkit.WebView,android.webkit.HttpAuthHandler,java.lang.String,java.lang.String)');
        com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onReceivedHttpAuthRequest_rd0k.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onPageCommitVisible_30my = com_tencent_smtt_sdk_SystemWebViewClient_clz.onPageCommitVisible.overload('android.webkit.WebView', 'java.lang.String');
    com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onPageCommitVisible_30my.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.SystemWebViewClient.onPageCommitVisible(android.webkit.WebView,java.lang.String)');
        com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onPageCommitVisible_30my.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_SystemWebViewClient_clz_method_shouldOverrideUrlLoading_r5jd = com_tencent_smtt_sdk_SystemWebViewClient_clz.shouldOverrideUrlLoading.overload('android.webkit.WebView', 'android.webkit.WebResourceRequest');
    com_tencent_smtt_sdk_SystemWebViewClient_clz_method_shouldOverrideUrlLoading_r5jd.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.sdk.SystemWebViewClient.shouldOverrideUrlLoading(android.webkit.WebView,android.webkit.WebResourceRequest)');
        return com_tencent_smtt_sdk_SystemWebViewClient_clz_method_shouldOverrideUrlLoading_r5jd.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onReceivedSslError_k3id = com_tencent_smtt_sdk_SystemWebViewClient_clz.onReceivedSslError.overload('android.webkit.WebView', 'android.webkit.SslErrorHandler', 'android.net.http.SslError');
    com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onReceivedSslError_k3id.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.SystemWebViewClient.onReceivedSslError(android.webkit.WebView,android.webkit.SslErrorHandler,android.net.http.SslError)');
        com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onReceivedSslError_k3id.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onPageStarted_yoxo = com_tencent_smtt_sdk_SystemWebViewClient_clz.onPageStarted.overload('android.webkit.WebView', 'java.lang.String', 'android.graphics.Bitmap');
    com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onPageStarted_yoxo.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.SystemWebViewClient.onPageStarted(android.webkit.WebView,java.lang.String,android.graphics.Bitmap)');
        com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onPageStarted_yoxo.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_SystemWebViewClient_clz_method_shouldOverrideKeyEvent_xymv = com_tencent_smtt_sdk_SystemWebViewClient_clz.shouldOverrideKeyEvent.overload('android.webkit.WebView', 'android.view.KeyEvent');
    com_tencent_smtt_sdk_SystemWebViewClient_clz_method_shouldOverrideKeyEvent_xymv.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.sdk.SystemWebViewClient.shouldOverrideKeyEvent(android.webkit.WebView,android.view.KeyEvent)');
        return com_tencent_smtt_sdk_SystemWebViewClient_clz_method_shouldOverrideKeyEvent_xymv.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onReceivedLoginRequest_9txp = com_tencent_smtt_sdk_SystemWebViewClient_clz.onReceivedLoginRequest.overload('android.webkit.WebView', 'java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onReceivedLoginRequest_9txp.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.sdk.SystemWebViewClient.onReceivedLoginRequest(android.webkit.WebView,java.lang.String,java.lang.String,java.lang.String)');
        com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onReceivedLoginRequest_9txp.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onReceivedError_i7ce = com_tencent_smtt_sdk_SystemWebViewClient_clz.onReceivedError.overload('android.webkit.WebView', 'android.webkit.WebResourceRequest', 'android.webkit.WebResourceError');
    com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onReceivedError_i7ce.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.SystemWebViewClient.onReceivedError(android.webkit.WebView,android.webkit.WebResourceRequest,android.webkit.WebResourceError)');
        com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onReceivedError_i7ce.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onReceivedClientCertRequest_7it6 = com_tencent_smtt_sdk_SystemWebViewClient_clz.onReceivedClientCertRequest.overload('android.webkit.WebView', 'android.webkit.ClientCertRequest');
    com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onReceivedClientCertRequest_7it6.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.SystemWebViewClient.onReceivedClientCertRequest(android.webkit.WebView,android.webkit.ClientCertRequest)');
        com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onReceivedClientCertRequest_7it6.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_SystemWebViewClient_clz_method_shouldOverrideUrlLoading_l0vr = com_tencent_smtt_sdk_SystemWebViewClient_clz.shouldOverrideUrlLoading.overload('android.webkit.WebView', 'java.lang.String');
    com_tencent_smtt_sdk_SystemWebViewClient_clz_method_shouldOverrideUrlLoading_l0vr.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.sdk.SystemWebViewClient.shouldOverrideUrlLoading(android.webkit.WebView,java.lang.String)');
        return com_tencent_smtt_sdk_SystemWebViewClient_clz_method_shouldOverrideUrlLoading_l0vr.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onPageFinished_63tg = com_tencent_smtt_sdk_SystemWebViewClient_clz.onPageFinished.overload('android.webkit.WebView', 'java.lang.String');
    com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onPageFinished_63tg.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.SystemWebViewClient.onPageFinished(android.webkit.WebView,java.lang.String)');
        com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onPageFinished_63tg.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_SystemWebViewClient_clz_method_doUpdateVisitedHistory_wi4f = com_tencent_smtt_sdk_SystemWebViewClient_clz.doUpdateVisitedHistory.overload('android.webkit.WebView', 'java.lang.String', 'boolean');
    com_tencent_smtt_sdk_SystemWebViewClient_clz_method_doUpdateVisitedHistory_wi4f.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.SystemWebViewClient.doUpdateVisitedHistory(android.webkit.WebView,java.lang.String,boolean)');
        com_tencent_smtt_sdk_SystemWebViewClient_clz_method_doUpdateVisitedHistory_wi4f.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onUnhandledKeyEvent_qsjm = com_tencent_smtt_sdk_SystemWebViewClient_clz.onUnhandledKeyEvent.overload('android.webkit.WebView', 'android.view.KeyEvent');
    com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onUnhandledKeyEvent_qsjm.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.SystemWebViewClient.onUnhandledKeyEvent(android.webkit.WebView,android.view.KeyEvent)');
        com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onUnhandledKeyEvent_qsjm.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onScaleChanged_epmm = com_tencent_smtt_sdk_SystemWebViewClient_clz.onScaleChanged.overload('android.webkit.WebView', 'float', 'float');
    com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onScaleChanged_epmm.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.SystemWebViewClient.onScaleChanged(android.webkit.WebView,float,float)');
        com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onScaleChanged_epmm.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onLoadResource_02yk = com_tencent_smtt_sdk_SystemWebViewClient_clz.onLoadResource.overload('android.webkit.WebView', 'java.lang.String');
    com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onLoadResource_02yk.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.SystemWebViewClient.onLoadResource(android.webkit.WebView,java.lang.String)');
        com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onLoadResource_02yk.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onReceivedError_dbm6 = com_tencent_smtt_sdk_SystemWebViewClient_clz.onReceivedError.overload('android.webkit.WebView', 'int', 'java.lang.String', 'java.lang.String');
    com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onReceivedError_dbm6.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.sdk.SystemWebViewClient.onReceivedError(android.webkit.WebView,int,java.lang.String,java.lang.String)');
        com_tencent_smtt_sdk_SystemWebViewClient_clz_method_onReceivedError_dbm6.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_SystemWebViewClient_clz_method_shouldInterceptRequest_08pi = com_tencent_smtt_sdk_SystemWebViewClient_clz.shouldInterceptRequest.overload('android.webkit.WebView', 'android.webkit.WebResourceRequest');
    com_tencent_smtt_sdk_SystemWebViewClient_clz_method_shouldInterceptRequest_08pi.implementation = function(v0, v1) {
        printStacks('public android.webkit.WebResourceResponse com.tencent.smtt.sdk.SystemWebViewClient.shouldInterceptRequest(android.webkit.WebView,android.webkit.WebResourceRequest)');
        return com_tencent_smtt_sdk_SystemWebViewClient_clz_method_shouldInterceptRequest_08pi.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_SystemWebViewClient_clz_init_1tes = com_tencent_smtt_sdk_SystemWebViewClient_clz.$init.overload('com.tencent.smtt.sdk.WebView', 'com.tencent.smtt.sdk.WebViewClient');
    com_tencent_smtt_sdk_SystemWebViewClient_clz_init_1tes.implementation = function(v0, v1) {
        printStacks('com.tencent.smtt.sdk.SystemWebViewClient(com.tencent.smtt.sdk.WebView,com.tencent.smtt.sdk.WebViewClient)');
        return com_tencent_smtt_sdk_SystemWebViewClient_clz_init_1tes.call(this, v0, v1);
    };
    var com_tencent_xweb_WebView_1_clz = Java.use('com.tencent.xweb.WebView$1');
    var com_tencent_xweb_WebView_1_clz_method_onLongClick_r5xf = com_tencent_xweb_WebView_1_clz.onLongClick.overload('android.view.View');
    com_tencent_xweb_WebView_1_clz_method_onLongClick_r5xf.implementation = function(v0) {
        printStacks('public final boolean com.tencent.xweb.WebView$1.onLongClick(android.view.View)');
        return com_tencent_xweb_WebView_1_clz_method_onLongClick_r5xf.call(this, v0);
    };
    var com_tencent_xweb_WebView_1_clz_init_b0qw = com_tencent_xweb_WebView_1_clz.$init.overload('com.tencent.xweb.WebView');
    com_tencent_xweb_WebView_1_clz_init_b0qw.implementation = function(v0) {
        printStacks('com.tencent.xweb.WebView$1(com.tencent.xweb.WebView)');
        return com_tencent_xweb_WebView_1_clz_init_b0qw.call(this, v0);
    };
    var com_tencent_xweb_WebView_2_clz = Java.use('com.tencent.xweb.WebView$2');
    var com_tencent_xweb_WebView_2_clz_method_eZK_zbdr = com_tencent_xweb_WebView_2_clz.eZK.overload();
    com_tencent_xweb_WebView_2_clz_method_eZK_zbdr.implementation = function() {
        printStacks('public final void com.tencent.xweb.WebView$2.eZK()');
        com_tencent_xweb_WebView_2_clz_method_eZK_zbdr.call(this);
    };
    var com_tencent_xweb_WebView_2_clz_method_aJV_r8ni = com_tencent_xweb_WebView_2_clz.aJV.overload('java.lang.String');
    com_tencent_xweb_WebView_2_clz_method_aJV_r8ni.implementation = function(v0) {
        printStacks('public final boolean com.tencent.xweb.WebView$2.aJV(java.lang.String)');
        return com_tencent_xweb_WebView_2_clz_method_aJV_r8ni.call(this, v0);
    };
    var com_tencent_xweb_WebView_2_clz_init_dp8f = com_tencent_xweb_WebView_2_clz.$init.overload('com.tencent.xweb.WebView');
    com_tencent_xweb_WebView_2_clz_init_dp8f.implementation = function(v0) {
        printStacks('com.tencent.xweb.WebView$2(com.tencent.xweb.WebView)');
        return com_tencent_xweb_WebView_2_clz_init_dp8f.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_PluginWebView_1_clz = Java.use('com.tencent.mm.plugin.webview.PluginWebView$1');
    var com_tencent_mm_plugin_webview_PluginWebView_1_clz_method_onCoreInitFinished_m1xd = com_tencent_mm_plugin_webview_PluginWebView_1_clz.onCoreInitFinished.overload();
    com_tencent_mm_plugin_webview_PluginWebView_1_clz_method_onCoreInitFinished_m1xd.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.PluginWebView$1.onCoreInitFinished()');
        com_tencent_mm_plugin_webview_PluginWebView_1_clz_method_onCoreInitFinished_m1xd.call(this);
    };
    var com_tencent_mm_plugin_webview_PluginWebView_1_clz_method_aMh_llmp = com_tencent_mm_plugin_webview_PluginWebView_1_clz.aMh.overload();
    com_tencent_mm_plugin_webview_PluginWebView_1_clz_method_aMh_llmp.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.PluginWebView$1.aMh()');
        com_tencent_mm_plugin_webview_PluginWebView_1_clz_method_aMh_llmp.call(this);
    };
    var com_tencent_mm_plugin_webview_PluginWebView_1_clz_init_j0gw = com_tencent_mm_plugin_webview_PluginWebView_1_clz.$init.overload('com.tencent.mm.plugin.webview.PluginWebView');
    com_tencent_mm_plugin_webview_PluginWebView_1_clz_init_j0gw.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.PluginWebView$1(com.tencent.mm.plugin.webview.PluginWebView)');
        return com_tencent_mm_plugin_webview_PluginWebView_1_clz_init_j0gw.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_PluginWebView_2_clz = Java.use('com.tencent.mm.plugin.webview.PluginWebView$2');
    var com_tencent_mm_plugin_webview_PluginWebView_2_clz_method_run_wl0h = com_tencent_mm_plugin_webview_PluginWebView_2_clz.run.overload();
    com_tencent_mm_plugin_webview_PluginWebView_2_clz_method_run_wl0h.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.PluginWebView$2.run()');
        com_tencent_mm_plugin_webview_PluginWebView_2_clz_method_run_wl0h.call(this);
    };
    var com_tencent_mm_plugin_webview_PluginWebView_2_clz_init_msfp = com_tencent_mm_plugin_webview_PluginWebView_2_clz.$init.overload('com.tencent.xweb.WebView$PreInitCallback');
    com_tencent_mm_plugin_webview_PluginWebView_2_clz_init_msfp.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.PluginWebView$2(com.tencent.xweb.WebView$PreInitCallback)');
        return com_tencent_mm_plugin_webview_PluginWebView_2_clz_init_msfp.call(this, v0);
    };
    var com_tencent_xweb_WebView_b_clz = Java.use('com.tencent.xweb.WebView$b');
    var com_tencent_xweb_WebView_b_clz_init_fr89 = com_tencent_xweb_WebView_b_clz.$init.overload();
    com_tencent_xweb_WebView_b_clz_init_fr89.implementation = function() {
        printStacks('public com.tencent.xweb.WebView$b()');
        return com_tencent_xweb_WebView_b_clz_init_fr89.call(this);
    };
    var com_tencent_xweb_WebView_d_clz = Java.use('com.tencent.xweb.WebView$d');
    var com_tencent_xweb_WebView_d_clz_method_unbindService_5pan = com_tencent_xweb_WebView_d_clz.unbindService.overload('android.content.ServiceConnection');
    com_tencent_xweb_WebView_d_clz_method_unbindService_5pan.implementation = function(v0) {
        printStacks('public final void com.tencent.xweb.WebView$d.unbindService(android.content.ServiceConnection)');
        com_tencent_xweb_WebView_d_clz_method_unbindService_5pan.call(this, v0);
    };
    var com_tencent_xweb_WebView_d_clz_method_setBaseContext_zhkb = com_tencent_xweb_WebView_d_clz.setBaseContext.overload('android.content.Context');
    com_tencent_xweb_WebView_d_clz_method_setBaseContext_zhkb.implementation = function(v0) {
        printStacks('public final void com.tencent.xweb.WebView$d.setBaseContext(android.content.Context)');
        com_tencent_xweb_WebView_d_clz_method_setBaseContext_zhkb.call(this, v0);
    };
    var com_tencent_xweb_WebView_d_clz_init_kivm = com_tencent_xweb_WebView_d_clz.$init.overload('android.content.Context');
    com_tencent_xweb_WebView_d_clz_init_kivm.implementation = function(v0) {
        printStacks('public com.tencent.xweb.WebView$d(android.content.Context)');
        return com_tencent_xweb_WebView_d_clz_init_kivm.call(this, v0);
    };
    var com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz = Java.use('com.tencent.mm.plugin.topstory.ui.webview.TopStoryWebView');
    var com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz_method_onDestroy_yw1b = com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz.onDestroy.overload();
    com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz_method_onDestroy_yw1b.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.topstory.ui.webview.TopStoryWebView.onDestroy()');
        com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz_method_onDestroy_yw1b.call(this);
    };
    var com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz_method_a_60td = com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz.a.overload('com.tencent.mm.plugin.topstory.ui.webview.b', 'com.tencent.mm.plugin.topstory.ui.webview.d');
    com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz_method_a_60td.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.topstory.ui.webview.TopStoryWebView.a(com.tencent.mm.plugin.topstory.ui.webview.b,com.tencent.mm.plugin.topstory.ui.webview.d)');
        com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz_method_a_60td.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz_method_bvl_p38j = com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz.bvl.overload();
    com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz_method_bvl_p38j.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.topstory.ui.webview.TopStoryWebView.bvl()');
        com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz_method_bvl_p38j.call(this);
    };
    var com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz_method_init_socf = com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz.init.overload();
    com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz_method_init_socf.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.topstory.ui.webview.TopStoryWebView.init()');
        com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz_method_init_socf.call(this);
    };
    var com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz_method_setConfigCallback_b60q = com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz.setConfigCallback.overload('android.view.WindowManager');
    com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz_method_setConfigCallback_b60q.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.topstory.ui.webview.TopStoryWebView.setConfigCallback(android.view.WindowManager)');
        com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz_method_setConfigCallback_b60q.call(this, v0);
    };
    var com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz_init_g5td = com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int');
    com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz_init_g5td.implementation = function(v0, v1, v2) {
        printStacks('public com.tencent.mm.plugin.topstory.ui.webview.TopStoryWebView(android.content.Context,android.util.AttributeSet,int)');
        return com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz_init_g5td.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz_init_tf9s = com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz.$init.overload('android.content.Context', 'android.util.AttributeSet');
    com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz_init_tf9s.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.plugin.topstory.ui.webview.TopStoryWebView(android.content.Context,android.util.AttributeSet)');
        return com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz_init_tf9s.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz_init_qlqm = com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz.$init.overload('android.content.Context');
    com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz_init_qlqm.implementation = function(v0) {
        printStacks('public com.tencent.mm.plugin.topstory.ui.webview.TopStoryWebView(android.content.Context)');
        return com_tencent_mm_plugin_topstory_ui_webview_TopStoryWebView_clz_init_qlqm.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewKeyboardLinearLayout');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_QQ_36o9 = com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz.QQ.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_QQ_36o9.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewKeyboardLinearLayout.QQ(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_QQ_36o9.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_onMeasure_4zqr = com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz.onMeasure.overload('int', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_onMeasure_4zqr.implementation = function(v0, v1) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewKeyboardLinearLayout.onMeasure(int,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_onMeasure_4zqr.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_getKeyBoardHeight_v2lf = com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz.getKeyBoardHeight.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_getKeyBoardHeight_v2lf.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.ui.tools.WebViewKeyboardLinearLayout.getKeyBoardHeight()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_getKeyBoardHeight_v2lf.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_onLayout_bzyl = com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz.onLayout.overload('boolean', 'int', 'int', 'int', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_onLayout_bzyl.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewKeyboardLinearLayout.onLayout(boolean,int,int,int,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_onLayout_bzyl.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_dWU_5s9t = com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz.dWU.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_dWU_5s9t.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewKeyboardLinearLayout.dWU()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_dWU_5s9t.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_Cc_lwh9 = com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz.Cc.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_Cc_lwh9.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewKeyboardLinearLayout.Cc(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_method_Cc_lwh9.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_init_kqtm = com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_init_kqtm.implementation = function(v0, v1, v2) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.WebViewKeyboardLinearLayout(android.content.Context,android.util.AttributeSet,int)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_init_kqtm.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_init_c8sj = com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz.$init.overload('android.content.Context', 'android.util.AttributeSet');
    com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_init_c8sj.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.WebViewKeyboardLinearLayout(android.content.Context,android.util.AttributeSet)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewKeyboardLinearLayout_clz_init_c8sj.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_1_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI$1');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_1_clz_method_onMenuItemClick_2i6d = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_1_clz.onMenuItemClick.overload('android.view.MenuItem');
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_1_clz_method_onMenuItemClick_2i6d.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI$1.onMenuItemClick(android.view.MenuItem)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_1_clz_method_onMenuItemClick_2i6d.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_1_clz_init_v839 = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_1_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_1_clz_init_v839.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI$1(com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_1_clz_init_v839.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_2_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI$2');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_2_clz_method_onClick_5g0r = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_2_clz.onClick.overload('android.view.View');
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_2_clz_method_onClick_5g0r.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI$2.onClick(android.view.View)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_2_clz_method_onClick_5g0r.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_2_clz_init_g8k7 = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_2_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_2_clz_init_g8k7.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI$2(com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,int)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_2_clz_init_g8k7.call(this, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_3_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI$3');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_3_clz_method_onClick_2kbh = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_3_clz.onClick.overload('android.view.View');
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_3_clz_method_onClick_2kbh.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI$3.onClick(android.view.View)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_3_clz_method_onClick_2kbh.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_3_clz_init_ymmr = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_3_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI', 'java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_3_clz_init_ymmr.implementation = function(v0, v1, v2, v3) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI$3(com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI,java.lang.String,java.lang.String,java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_3_clz_init_ymmr.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI$4');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_method_b_7a4h = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz.b.overload('long', 'java.lang.String', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_method_b_7a4h.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI$4.b(long,java.lang.String,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_method_b_7a4h.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_method_b_it7c = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz.b.overload('long', 'int', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_method_b_it7c.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI$4.b(long,int,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_method_b_it7c.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_method_kP_yrmp = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz.kP.overload('long');
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_method_kP_yrmp.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI$4.kP(long)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_method_kP_yrmp.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_method_onTaskRemoved_6q7i = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz.onTaskRemoved.overload('long');
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_method_onTaskRemoved_6q7i.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI$4.onTaskRemoved(long)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_method_onTaskRemoved_6q7i.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_method_onTaskPaused_686h = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz.onTaskPaused.overload('long');
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_method_onTaskPaused_686h.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI$4.onTaskPaused(long)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_method_onTaskPaused_686h.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_method_kO_q4dl = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz.kO.overload('long');
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_method_kO_q4dl.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI$4.kO(long)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_method_kO_q4dl.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_method_onTaskStarted_bh6g = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz.onTaskStarted.overload('long', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_method_onTaskStarted_bh6g.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI$4.onTaskStarted(long,java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_method_onTaskStarted_bh6g.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_method_k_ztr5 = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz.k.overload('long', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_method_k_ztr5.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI$4.k(long,java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_method_k_ztr5.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_init_e7mm = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_init_e7mm.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI$4(com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_4_clz_init_e7mm.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_5_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI$5');
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_a_clz = Java.use('com.tencent.mm.plugin.webview.model.WebViewJSSDKFileItem$a');
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_a_clz_init_x3fl = com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_a_clz.$init.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_a_clz_init_x3fl.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.model.WebViewJSSDKFileItem$a()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKFileItem_a_clz_init_x3fl.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_f_n37y = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.f.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_f_n37y.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.f(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_f_n37y.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYj_kkav = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYj.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYj_kkav.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYj()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYj_kkav.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxP_pppv = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bxP.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxP_pppv.implementation = function() {
        printStacks('protected com.tencent.xweb.y com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bxP()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxP_pppv.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXZ_w4pa = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXZ.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXZ_w4pa.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXZ()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXZ_w4pa.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bjb_6p3v = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bjb.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bjb_6p3v.implementation = function() {
        printStacks('protected int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bjb()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bjb_6p3v.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_T_fjvt = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.T.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_T_fjvt.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.T(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_T_fjvt.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ar_3o3n = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.ar.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ar_3o3n.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.ar(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ar_3o3n.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setActionbarColor_i21f = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.setActionbarColor.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setActionbarColor_i21f.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.setActionbarColor(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setActionbarColor_i21f.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_convertActivityFromTranslucent_s5z6 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.convertActivityFromTranslucent.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_convertActivityFromTranslucent_s5z6.implementation = function() {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.convertActivityFromTranslucent()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_convertActivityFromTranslucent_s5z6.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onKeyUp_ib4s = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onKeyUp.overload('int', 'android.view.KeyEvent');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onKeyUp_ib4s.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onKeyUp(int,android.view.KeyEvent)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onKeyUp_ib4s.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_m_tk7u = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.m.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_m_tk7u.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.m(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_m_tk7u.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxR_tu9i = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bxR.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxR_tu9i.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bxR()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxR_tu9i.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_w_t7gb = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.w.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_w_t7gb.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.w(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_w_t7gb.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QZ_y9al = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.QZ.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QZ_y9al.implementation = function(v0) {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.QZ(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QZ_y9al.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dWI_wamt = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dWI.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dWI_wamt.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dWI()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dWI_wamt.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dTY_8q0m = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dTY.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dTY_8q0m.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dTY()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dTY_8q0m.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_d1z4 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.b.overload('com.tencent.xweb.WebView', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_d1z4.implementation = function(v0, v1) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.b(com.tencent.xweb.WebView,java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_d1z4.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_l_0bos = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.l.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_l_0bos.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.k com.tencent.mm.plugin.webview.ui.tools.WebViewUI.l(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_l_0bos.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_gl3j = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.b.overload('java.lang.String', 'java.lang.String', 'java.util.Map');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_gl3j.implementation = function(v0, v1, v2) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.b(java.lang.String,java.lang.String,java.util.Map)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_gl3j.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYl_9xau = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYl.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYl_9xau.implementation = function() {
        printStacks('static java.util.regex.Pattern com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYl()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYl_9xau.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byt_4k7x = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.byt.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byt_4k7x.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.byt()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byt_4k7x.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_rN_yzrv = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.rN.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_rN_yzrv.implementation = function(v0) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.rN(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_rN_yzrv.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QY_ayv4 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.QY.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QY_ayv4.implementation = function(v0) {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.QY(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QY_ayv4.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_K_ipki = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.K.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_K_ipki.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.f com.tencent.mm.plugin.webview.ui.tools.WebViewUI.K(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_K_ipki.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_m_phhe = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.m.overload('int', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_m_phhe.implementation = function(v0, v1) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.m(int,android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_m_phhe.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXE_2aap = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXE.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXE_2aap.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXE()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXE_2aap.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_at_gl4l = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.at.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_at_gl4l.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.at(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_at_gl4l.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_3z6d = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_3z6d.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_3z6d.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Li_3vzj = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.Li.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Li_3vzj.implementation = function(v0) {
        printStacks('private static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.Li(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Li_3vzj.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_getActionBarHeight_el4r = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.getActionBarHeight.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_getActionBarHeight_el4r.implementation = function() {
        printStacks('protected final int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.getActionBarHeight()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_getActionBarHeight_el4r.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dVW_u131 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dVW.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dVW_u131.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dVW()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dVW_u131.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_gfl3 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_gfl3.implementation = function(v0, v1) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.b(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,boolean)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_gfl3.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_vu4k = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.c.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_vu4k.implementation = function(v0, v1) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.c(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_vu4k.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asp_y1c7 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asp.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asp_y1c7.implementation = function(v0) {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asp(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asp_y1c7.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_me2s = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.jsapi.d', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_me2s.implementation = function(v0, v1) {
        printStacks('private static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.jsapi.d,java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_me2s.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_v6kq = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.Runnable');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_v6kq.implementation = function(v0, v1) {
        printStacks('static java.lang.Runnable com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.Runnable)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_v6kq.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_x_5t3n = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.x.overload('int', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_x_5t3n.implementation = function(v0, v1) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.x(int,android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_x_5t3n.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_5b3t = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'long');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_5b3t.implementation = function(v0, v1) {
        printStacks('static long com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,long)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_5b3t.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXI_ummj = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXI.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXI_ummj.implementation = function() {
        printStacks('protected int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXI()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXI_ummj.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asj_lehv = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asj.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asj_lehv.implementation = function(v0) {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asj(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asj_lehv.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_az_0ngt = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.az.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_az_0ngt.implementation = function(v0) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.az(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_az_0ngt.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Ra_l7ge = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.Ra.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Ra_l7ge.implementation = function(v0) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.Ra(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Ra_l7ge.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QX_buy5 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.QX.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QX_buy5.implementation = function(v0) {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.QX(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QX_buy5.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_0x0d = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'com.tencent.mm.ui.base.p');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_0x0d.implementation = function(v0, v1) {
        printStacks('static com.tencent.mm.ui.base.p com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,com.tencent.mm.ui.base.p)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_0x0d.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_jO_w18i = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.jO.overload('java.lang.String', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_jO_w18i.implementation = function(v0, v1) {
        printStacks('private boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.jO(java.lang.String,java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_jO_w18i.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXt_lau5 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXt.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXt_lau5.implementation = function() {
        printStacks('public final com.tencent.mm.plugin.webview.ui.tools.media.MPVideoPlayFullScreenView com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXt()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXt_lau5.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXw_k8vl = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXw.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXw_k8vl.implementation = function() {
        printStacks('private static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXw()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXw_k8vl.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onCreateBeforeSetContentView_zefc = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onCreateBeforeSetContentView.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onCreateBeforeSetContentView_zefc.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onCreateBeforeSetContentView()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onCreateBeforeSetContentView_zefc.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ask_26n6 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.ask.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ask_26n6.implementation = function(v0) {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.ask(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ask_26n6.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_g_r71s = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.g.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_g_r71s.implementation = function(v0) {
        printStacks('static java.util.Set com.tencent.mm.plugin.webview.ui.tools.WebViewUI.g(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_g_r71s.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_initSwipeBack_ocxg = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.initSwipeBack.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_initSwipeBack_ocxg.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.initSwipeBack()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_initSwipeBack_ocxg.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_showOptionMenu_5o2g = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.showOptionMenu.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_showOptionMenu_5o2g.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.showOptionMenu(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_showOptionMenu_5o2g.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onCancel_ev8k = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onCancel.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onCancel_ev8k.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onCancel()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onCancel_ev8k.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXq_71xc = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXq.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXq_71xc.implementation = function() {
        printStacks('public final com.tencent.mm.plugin.webview.f.g com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXq()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXq_71xc.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_wnhg = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'android.webkit.WebChromeClient$CustomViewCallback');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_wnhg.implementation = function(v0, v1) {
        printStacks('static android.webkit.WebChromeClient$CustomViewCallback com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,android.webkit.WebChromeClient$CustomViewCallback)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_wnhg.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onResume_pd4l = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onResume.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onResume_pd4l.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onResume()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onResume_pd4l.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_fxov = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'long');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_fxov.implementation = function(v0, v1) {
        printStacks('static long com.tencent.mm.plugin.webview.ui.tools.WebViewUI.b(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,long)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_fxov.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asq_8t7r = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asq.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asq_8t7r.implementation = function(v0) {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asq(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asq_8t7r.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXV_re6b = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXV.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXV_re6b.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXV()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXV_re6b.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_as_knw3 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.as.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_as_knw3.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.as(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_as_knw3.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onWebViewScrollChanged_v0gx = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onWebViewScrollChanged.overload('int', 'int', 'int', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onWebViewScrollChanged_v0gx.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onWebViewScrollChanged(int,int,int,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onWebViewScrollChanged_v0gx.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byv_h42q = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.byv.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byv_h42q.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.byv()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byv_h42q.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ap_aqgp = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.ap.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ap_aqgp.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.ap(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ap_aqgp.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_n_jrq8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.n.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_n_jrq8.implementation = function(v0) {
        printStacks('static android.webkit.WebChromeClient$CustomViewCallback com.tencent.mm.plugin.webview.ui.tools.WebViewUI.n(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_n_jrq8.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_V_vaay = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.V.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_V_vaay.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.model.ai$d com.tencent.mm.plugin.webview.ui.tools.WebViewUI.V(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_V_vaay.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_pngo = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.c.overload('android.os.Bundle', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_pngo.implementation = function(v0, v1) {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.c(android.os.Bundle,boolean)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_pngo.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dTU_w7ll = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dTU.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dTU_w7ll.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dTU()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dTU_w7ll.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXQ_1d3k = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXQ.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXQ_1d3k.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXQ()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXQ_1d3k.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_t_2265 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.t.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_t_2265.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.t(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_t_2265.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_m9zj = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.c.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_m9zj.implementation = function(v0) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.c(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_m9zj.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_baM_mx94 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.baM.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_baM_mx94.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.baM()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_baM_mx94.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setStatusBarColor_1epk = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.setStatusBarColor.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setStatusBarColor_1epk.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.setStatusBarColor(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setStatusBarColor_1epk.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXv_5ph5 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXv.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXv_5ph5.implementation = function() {
        printStacks('public final com.tencent.mm.ui.base.p com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXv()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXv_5ph5.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setMMTitle_l6jf = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.setMMTitle.overload('java.lang.CharSequence');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setMMTitle_l6jf.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.setMMTitle(java.lang.CharSequence)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setMMTitle_l6jf.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_H_qe75 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.H.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_H_qe75.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.H(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_H_qe75.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxU_fara = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bxU.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxU_fara.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bxU()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxU_fara.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXP_tezh = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXP.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXP_tezh.implementation = function() {
        printStacks('protected com.tencent.mm.plugin.websearch.api.ag com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXP()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXP_tezh.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXR_lg4u = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXR.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXR_lg4u.implementation = function() {
        printStacks('protected final java.util.LinkedList com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXR()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXR_lg4u.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxO_orpk = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bxO.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxO_orpk.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bxO()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxO_orpk.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXS_kib5 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXS.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXS_kib5.implementation = function() {
        printStacks('protected final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXS()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXS_kib5.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_xx7j = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_xx7j.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.b(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_xx7j.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byX_h3vh = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.byX.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byX_h3vh.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.byX()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byX_h3vh.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_rL_5vn2 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.rL.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_rL_5vn2.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.rL(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_rL_5vn2.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onKeyDown_2qza = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onKeyDown.overload('int', 'android.view.KeyEvent');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onKeyDown_2qza.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onKeyDown(int,android.view.KeyEvent)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onKeyDown_2qza.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byz_hnx6 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.byz.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byz_hnx6.implementation = function() {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.byz()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byz_hnx6.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setBackBtn_v2t8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.setBackBtn.overload('android.view.MenuItem$OnMenuItemClickListener', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setBackBtn_v2t8.implementation = function(v0, v1) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.setBackBtn(android.view.MenuItem$OnMenuItemClickListener,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setBackBtn_v2t8.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asr_2tas = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asr.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asr_2tas.implementation = function(v0) {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asr(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asr_2tas.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_R_ubp3 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.R.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_R_ubp3.implementation = function(v0) {
        printStacks('static java.lang.Runnable com.tencent.mm.plugin.webview.ui.tools.WebViewUI.R(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_R_ubp3.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_hideVKB_q45j = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.hideVKB.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_hideVKB_q45j.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.hideVKB()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_hideVKB_q45j.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_mK_cu95 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.mK.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_mK_cu95.implementation = function(v0) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.mK(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_mK_cu95.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_j_97vh = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.j.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_j_97vh.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.j(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_j_97vh.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXF_qgzq = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXF.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXF_qgzq.implementation = function() {
        printStacks('private android.view.View com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXF()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXF_qgzq.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_x_822l = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.x.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_x_822l.implementation = function(v0) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.x(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_x_822l.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bkX_zm6e = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bkX.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bkX_zm6e.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bkX()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bkX_zm6e.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXu_p5id = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXu.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXu_p5id.implementation = function() {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXu()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXu_p5id.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byb_zcgn = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.byb.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byb_zcgn.implementation = function() {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.byb()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byb_zcgn.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byq_b9fv = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.byq.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byq_b9fv.implementation = function() {
        printStacks('protected synchronized com.tencent.xweb.t com.tencent.mm.plugin.webview.ui.tools.WebViewUI.byq()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byq_b9fv.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXH_ntwu = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXH.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXH_ntwu.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXH()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXH_ntwu.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setMMTitle_v55u = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.setMMTitle.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setMMTitle_v55u.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.setMMTitle(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setMMTitle_v55u.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onDestroy_703f = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onDestroy.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onDestroy_703f.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onDestroy()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onDestroy_703f.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_v_n0iv = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.v.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_v_n0iv.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.f.g com.tencent.mm.plugin.webview.ui.tools.WebViewUI.v(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_v_n0iv.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_U_1872 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.U.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_U_1872.implementation = function(v0) {
        printStacks('static com.tencent.mm.ui.base.p com.tencent.mm.plugin.webview.ui.tools.WebViewUI.U(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_U_1872.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYh_l4zj = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYh.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYh_l4zj.implementation = function() {
        printStacks('public final com.tencent.mm.ui.widget.MMWebView com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYh()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYh_l4zj.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_d_tyqr = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.d.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_d_tyqr.implementation = function(v0, v1) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.d(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_d_tyqr.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_C_usbl = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.C.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_C_usbl.implementation = function(v0) {
        printStacks('static java.util.Map com.tencent.mm.plugin.webview.ui.tools.WebViewUI.C(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_C_usbl.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onActivityResult_asuu = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onActivityResult.overload('int', 'int', 'android.content.Intent');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onActivityResult_asuu.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onActivityResult(int,int,android.content.Intent)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onActivityResult_asuu.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bja_qh9v = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bja.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bja_qh9v.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bja()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bja_qh9v.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_finish_cbkh = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.finish.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_finish_cbkh.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.finish()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_finish_cbkh.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onRequestPermissionsResult_jvq7 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onRequestPermissionsResult.overload('int', '[Ljava.lang.String;', '[I');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onRequestPermissionsResult_jvq7.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onRequestPermissionsResult(int,java.lang.String[],int[])');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onRequestPermissionsResult_jvq7.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXy_3pse = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXy.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXy_3pse.implementation = function() {
        printStacks('private boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXy()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXy_3pse.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXB_0be2 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXB.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXB_0be2.implementation = function() {
        printStacks('final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXB()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXB_0be2.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_N_fe62 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.N.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_N_fe62.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.N(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_N_fe62.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXK_snwi = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXK.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXK_snwi.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXK()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXK_snwi.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXM_0xqj = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXM.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXM_0xqj.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXM()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXM_0xqj.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_showVKB_qkc2 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.showVKB.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_showVKB_qkc2.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.showVKB()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_showVKB_qkc2.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_0njq = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_0njq.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.b(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_0njq.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_o_9pi8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.o.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_o_9pi8.implementation = function(v0) {
        printStacks('static android.view.View com.tencent.mm.plugin.webview.ui.tools.WebViewUI.o(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_o_9pi8.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onCreate_6i88 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onCreate.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onCreate_6i88.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onCreate(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onCreate_6i88.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_J_lsm8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.J.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_J_lsm8.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.J(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_J_lsm8.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setMMOrientation_byrj = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.setMMOrientation.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setMMOrientation_byrj.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.setMMOrientation()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_setMMOrientation_byrj.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_B_ugvl = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.B.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_B_ugvl.implementation = function(v0) {
        printStacks('static java.util.Map com.tencent.mm.plugin.webview.ui.tools.WebViewUI.B(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_B_ugvl.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byx_d1gd = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.byx.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byx_d1gd.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.byx()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byx_d1gd.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_ib2d = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'android.webkit.WebChromeClient$CustomViewCallback');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_ib2d.implementation = function(v0, v1) {
        printStacks('static android.webkit.WebChromeClient$CustomViewCallback com.tencent.mm.plugin.webview.ui.tools.WebViewUI.b(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,android.webkit.WebChromeClient$CustomViewCallback)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_ib2d.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_loadUrl_1f0e = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.loadUrl.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_loadUrl_1f0e.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.loadUrl(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_loadUrl_1f0e.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_eX_a35z = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.eX.overload('android.view.View');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_eX_a35z.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.eX(android.view.View)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_eX_a35z.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXX_yeun = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXX.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXX_yeun.implementation = function() {
        printStacks('private boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXX()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXX_yeun.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXe_lf1u = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXe.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXe_lf1u.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXe()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXe_lf1u.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_am_nyy3 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.am.overload('boolean', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_am_nyy3.implementation = function(v0, v1) {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.am(boolean,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_am_nyy3.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_F_jsu3 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.F.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_F_jsu3.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.F(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_F_jsu3.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QV_hk75 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.QV.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QV_hk75.implementation = function(v0) {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.QV(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QV_hk75.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXx_crrf = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXx.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXx_crrf.implementation = function() {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXx()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXx_crrf.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_i_t3le = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.i.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_i_t3le.implementation = function(v0) {
        printStacks('static android.view.View$OnLongClickListener com.tencent.mm.plugin.webview.ui.tools.WebViewUI.i(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_i_t3le.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byu_c9wu = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.byu.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byu_c9wu.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.byu()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byu_c9wu.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onPause_6pst = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onPause.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onPause_6pst.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onPause()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onPause_6pst.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_an_h2nn = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.an.overload('boolean', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_an_h2nn.implementation = function(v0, v1) {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.an(boolean,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_an_h2nn.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dWR_xb6k = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dWR.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dWR_xb6k.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dWR()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dWR_xb6k.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_rmuk = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_rmuk.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_rmuk.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byr_wdyo = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.byr.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byr_wdyo.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.byr()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byr_wdyo.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXY_yed9 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXY.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXY_yed9.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXY()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXY_yed9.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ON_rmf5 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.ON.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ON_rmf5.implementation = function(v0) {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.ON(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ON_rmf5.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXA_6kse = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXA.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXA_6kse.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXA()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXA_6kse.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXs_aern = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXs.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXs_aern.implementation = function() {
        printStacks('protected final com.tencent.mm.plugin.webview.ui.tools.widget.n com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXs()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXs_aern.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ass_iato = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.ass.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ass_iato.implementation = function(v0) {
        printStacks('private boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.ass(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ass_iato.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dUb_wzov = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dUb.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dUb_wzov.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dUb()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dUb_wzov.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXT_rdnj = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXT.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXT_rdnj.implementation = function() {
        printStacks('protected final int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXT()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXT_rdnj.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_g_nx3i = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.g.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_g_nx3i.implementation = function(v0, v1) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.g(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_g_nx3i.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_a0yv = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.String', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_a0yv.implementation = function(v0, v1, v2) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.WebViewUI$w com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.String,int)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_a0yv.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYe_dnx8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYe.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYe_dnx8.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYe()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYe_dnx8.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onConfigurationChanged_93vk = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onConfigurationChanged.overload('android.content.res.Configuration');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onConfigurationChanged_93vk.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onConfigurationChanged(android.content.res.Configuration)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onConfigurationChanged_93vk.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_bw4l = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'com.tencent.mm.plugin.webview.ui.tools.d');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_bw4l.implementation = function(v0, v1) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.d com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,com.tencent.mm.plugin.webview.ui.tools.d)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_bw4l.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_o_51xu = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.o.overload('java.lang.String', 'boolean', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_o_51xu.implementation = function(v0, v1, v2) {
        printStacks('private com.tencent.mm.plugin.webview.ui.tools.WebViewUI$w com.tencent.mm.plugin.webview.ui.tools.WebViewUI.o(java.lang.String,boolean,int)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_o_51xu.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onDrag_x7ch = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onDrag.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onDrag_x7ch.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onDrag()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onDrag_x7ch.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_3qrp = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_3qrp.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.b(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_3qrp.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxN_3ghe = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bxN.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxN_3ghe.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bxN()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxN_3ghe.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYm_ce6k = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYm.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYm_ce6k.implementation = function() {
        printStacks('static java.util.regex.Pattern com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYm()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYm_ce6k.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_rwv8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'android.widget.ProgressBar');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_rwv8.implementation = function(v0, v1) {
        printStacks('static android.widget.ProgressBar com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,android.widget.ProgressBar)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_rwv8.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aA_65rb = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.aA.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aA_65rb.implementation = function(v0) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.aA(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aA_65rb.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_q_a4va = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.q.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_q_a4va.implementation = function(v0) {
        printStacks('static android.webkit.WebChromeClient$CustomViewCallback com.tencent.mm.plugin.webview.ui.tools.WebViewUI.q(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_q_a4va.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_rO_l7fc = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.rO.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_rO_l7fc.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.rO(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_rO_l7fc.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_f_tdee = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.f.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_f_tdee.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.f(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_f_tdee.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QW_rbxa = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.QW.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QW_rbxa.implementation = function(v0) {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.QW(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_QW_rbxa.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byA_n2gk = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.byA.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byA_n2gk.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.byA()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byA_n2gk.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_gx51 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.c.overload('java.lang.String', 'android.graphics.drawable.Drawable');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_gx51.implementation = function(v0, v1) {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.c(java.lang.String,android.graphics.drawable.Drawable)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_gx51.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ao_o5xq = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.ao.overload('boolean', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ao_o5xq.implementation = function(v0, v1) {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.ao(boolean,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ao_o5xq.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_W_om7s = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.W.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_W_om7s.implementation = function(v0) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.W(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_W_om7s.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Q_vjnr = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.Q.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Q_vjnr.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.Q(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Q_vjnr.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxM_fekz = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bxM.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxM_fekz.implementation = function() {
        printStacks('protected com.tencent.mm.ui.widget.MMWebView com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bxM()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxM_fekz.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_rM_ehnn = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.rM.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_rM_ehnn.implementation = function(v0) {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.rM(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_rM_ehnn.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXO_47cl = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXO.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXO_47cl.implementation = function() {
        printStacks('protected final com.tencent.mm.plugin.webview.ui.tools.o com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXO()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXO_47cl.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asg_h53j = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asg.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asg_h53j.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asg(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asg_h53j.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Mk_c36b = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.Mk.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Mk_c36b.implementation = function(v0) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.Mk(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Mk_c36b.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bur_repb = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bur.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bur_repb.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bur()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bur_repb.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxT_966h = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bxT.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxT_966h.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bxT()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxT_966h.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_k_3v05 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.k.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_k_3v05.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.widget.input.WebViewInputFooter com.tencent.mm.plugin.webview.ui.tools.WebViewUI.k(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_k_3v05.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXC_16ej = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXC.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXC_16ej.implementation = function() {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXC()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXC_16ej.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_r_hubh = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.r.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_r_hubh.implementation = function(v0) {
        printStacks('static android.widget.ProgressBar com.tencent.mm.plugin.webview.ui.tools.WebViewUI.r(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_r_hubh.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_ep8d = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.String', 'boolean', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_ep8d.implementation = function(v0, v1, v2, v3) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.String,boolean,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_ep8d.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Vw_sen2 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.Vw.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Vw_sen2.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.Vw()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Vw_sen2.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_fkz7 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.c.overload('android.app.Dialog');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_fkz7.implementation = function(v0) {
        printStacks('public static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.c(android.app.Dialog)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_fkz7.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_p_6tqf = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.p.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_p_6tqf.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.p(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_p_6tqf.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXJ_6nw8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXJ.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXJ_6nw8.implementation = function() {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXJ()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXJ_6nw8.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_M_dkhy = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.M.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_M_dkhy.implementation = function(v0) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.M(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_M_dkhy.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asv_ifh5 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asv.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asv_ifh5.implementation = function(v0) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asv(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asv_ifh5.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXG_iyam = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXG.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXG_iyam.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXG()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXG_iyam.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_O_hxh2 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.O.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_O_hxh2.implementation = function(v0) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.O(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_O_hxh2.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXD_6eke = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXD.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXD_6eke.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXD()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXD_6eke.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_aklg = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('android.view.ViewGroup', 'android.view.WindowInsets');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_aklg.implementation = function(v0, v1) {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(android.view.ViewGroup,android.view.WindowInsets)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_aklg.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_25yd = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'com.tencent.mm.plugin.webview.ui.tools.f');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_25yd.implementation = function(v0, v1) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.f com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,com.tencent.mm.plugin.webview.ui.tools.f)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_25yd.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXr_kqr4 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXr.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXr_kqr4.implementation = function() {
        printStacks('public final com.tencent.mm.plugin.webview.ui.tools.b.a com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXr()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXr_kqr4.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_L_koil = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.L.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_L_koil.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.L(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_L_koil.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_h_pyxj = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.h.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_h_pyxj.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.h(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_h_pyxj.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_initView_uvkc = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.initView.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_initView_uvkc.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.initView()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_initView_uvkc.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asu_7ymp = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asu.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asu_7ymp.implementation = function(v0) {
        printStacks('private final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asu(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asu_7ymp.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXz_yvxf = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXz.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXz_yvxf.implementation = function() {
        printStacks('private int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXz()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXz_yvxf.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_deF_y0f2 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.deF.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_deF_y0f2.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.deF()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_deF_y0f2.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxG_7xxj = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bxG.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxG_7xxj.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bxG()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxG_7xxj.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_e_0op3 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.e.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_e_0op3.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.e(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_e_0op3.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asx_nxcg = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asx.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asx_nxcg.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asx(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asx_nxcg.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_m7f6 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_m7f6.implementation = function(v0, v1) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,boolean)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_m7f6.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_needShowIdcError_7btn = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.needShowIdcError.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_needShowIdcError_7btn.implementation = function() {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.needShowIdcError()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_needShowIdcError_7btn.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ar_qy28 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.ar.overload('android.view.View', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ar_qy28.implementation = function(v0, v1) {
        printStacks('private static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.ar(android.view.View,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ar_qy28.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_i_6vf3 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.i.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_i_6vf3.implementation = function(v0, v1) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.i(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_i_6vf3.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_P_lbmc = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.P.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_P_lbmc.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.P(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_P_lbmc.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXN_t1ej = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXN.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXN_t1ej.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXN()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXN_t1ej.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_y_5irb = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.y.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_y_5irb.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.y(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_y_5irb.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_d8b6 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('java.lang.String', 'java.lang.String', 'java.util.Map', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_d8b6.implementation = function(v0, v1, v2, v3) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(java.lang.String,java.lang.String,java.util.Map,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_d8b6.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_D_fonj = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.D.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_D_fonj.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.D(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_D_fonj.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYd_49lg = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYd.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYd_49lg.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYd()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYd_49lg.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_m_3bap = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.m.overload('java.lang.String', 'long', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_m_3bap.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.m(java.lang.String,long,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_m_3bap.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onSwipeBackFinish_n96t = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onSwipeBackFinish.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onSwipeBackFinish_n96t.implementation = function() {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onSwipeBackFinish()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onSwipeBackFinish_n96t.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_f_txu4 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.f.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_f_txu4.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.f(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_f_txu4.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_eM_27lg = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.eM.overload('java.lang.String', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_eM_27lg.implementation = function(v0, v1) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.eM(java.lang.String,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_eM_27lg.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byy_ye3i = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.byy.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byy_ye3i.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.byy()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byy_ye3i.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_gli9 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'android.view.View');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_gli9.implementation = function(v0, v1) {
        printStacks('static android.view.View com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,android.view.View)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_gli9.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Y_q6cr = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.Y.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Y_q6cr.implementation = function(v0) {
        printStacks('static long com.tencent.mm.plugin.webview.ui.tools.WebViewUI.Y(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Y_q6cr.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_A_eatk = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.A.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_A_eatk.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.b.a com.tencent.mm.plugin.webview.ui.tools.WebViewUI.A(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_A_eatk.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXL_9ikq = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXL.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXL_9ikq.implementation = function() {
        printStacks('protected int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXL()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXL_9ikq.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bza_67jc = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bza.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bza_67jc.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bza()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bza_67jc.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aso_2cy6 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.aso.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aso_2cy6.implementation = function(v0) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.aso(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aso_2cy6.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asw_monm = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asw.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asw_monm.implementation = function(v0) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asw(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asw_monm.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_h_jd57 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.h.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_h_jd57.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.h(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_h_jd57.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aB_h0jd = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.aB.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aB_h0jd.implementation = function(v0) {
        printStacks('protected final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.aB(android.os.Bundle)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aB_h0jd.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aK_iwck = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.aK.overload('int', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aK_iwck.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.aK(int,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aK_iwck.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_7omc = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'com.tencent.mm.plugin.webview.ui.tools.WebViewKeyboardLinearLayout', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_7omc.implementation = function(v0, v1, v2) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,com.tencent.mm.plugin.webview.ui.tools.WebViewKeyboardLinearLayout,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_7omc.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_S_q6o9 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.S.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_S_q6o9.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.S(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_S_q6o9.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_getLayoutId_nh8r = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.getLayoutId.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_getLayoutId_nh8r.implementation = function() {
        printStacks('public int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.getLayoutId()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_getLayoutId_nh8r.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_I_5x9p = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.I.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_I_5x9p.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.I(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_I_5x9p.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_M_2mgt = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.M.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_M_2mgt.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.M(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_M_2mgt.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_d_id93 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.d.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_d_id93.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.d(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_d_id93.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_loadUrl_wmig = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.loadUrl.overload('java.lang.String', 'java.util.Map', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_loadUrl_wmig.implementation = function(v0, v1, v2) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.loadUrl(java.lang.String,java.util.Map,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_loadUrl_wmig.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Lh_t2qu = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.Lh.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Lh_t2qu.implementation = function(v0) {
        printStacks('private static java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.Lh(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_Lh_t2qu.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXU_uoch = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXU.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXU_uoch.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXU()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXU_uoch.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYg_9bt7 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYg.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYg_9bt7.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYg()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYg_9bt7.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYb_6nfn = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYb.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYb_6nfn.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYb()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYb_6nfn.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_d_erni = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.d.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_d_erni.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.d(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_d_erni.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_hocb = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.c.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_hocb.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.c(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_c_hocb.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_s_nfcf = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.s.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_s_nfcf.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.modeltools.d com.tencent.mm.plugin.webview.ui.tools.WebViewUI.s(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_s_nfcf.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_u_a99y = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.u.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_u_a99y.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.u(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_u_a99y.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asn_4gq7 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asn.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asn_4gq7.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asn(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asn_4gq7.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_X_r27v = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.X.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_X_r27v.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.X(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_X_r27v.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYc_i2gl = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYc.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYc_i2gl.implementation = function() {
        printStacks('private boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYc()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYc_i2gl.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onReset_9dlb = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onReset.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onReset_9dlb.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onReset()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onReset_9dlb.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXW_lrdq = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dXW.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXW_lrdq.implementation = function() {
        printStacks('public final com.tencent.mm.plugin.webview.ui.tools.media.a com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dXW()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dXW_lrdq.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_getForceOrientation_gfjj = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.getForceOrientation.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_getForceOrientation_gfjj.implementation = function() {
        printStacks('public int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.getForceOrientation()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_getForceOrientation_gfjj.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_addIconOptionMenu_m36j = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.addIconOptionMenu.overload('int', 'int', 'android.view.MenuItem$OnMenuItemClickListener');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_addIconOptionMenu_m36j.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.addIconOptionMenu(int,int,android.view.MenuItem$OnMenuItemClickListener)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_addIconOptionMenu_m36j.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asi_8vvt = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asi.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asi_8vvt.implementation = function(v0) {
        printStacks('protected final int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asi(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asi_8vvt.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bjc_c4kh = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bjc.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bjc_c4kh.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bjc()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bjc_c4kh.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_e_dfce = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.e.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_e_dfce.implementation = function(v0, v1) {
        printStacks('static java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.e(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_e_dfce.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYk_aej2 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYk.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYk_aej2.implementation = function() {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYk()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYk_aej2.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dWz_w9zp = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dWz.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dWz_w9zp.implementation = function() {
        printStacks('private boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dWz()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dWz_w9zp.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_showOptionMenu_7456 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.showOptionMenu.overload('int', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_showOptionMenu_7456.implementation = function(v0, v1) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.showOptionMenu(int,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_showOptionMenu_7456.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_G_fde8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.G.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_G_fde8.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.G(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_G_fde8.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onStop_ld8q = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onStop.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onStop_ld8q.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onStop()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onStop_ld8q.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYa_s2xs = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYa.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYa_s2xs.implementation = function() {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYa()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYa_s2xs.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxX_excd = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bxX.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxX_excd.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bxX()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxX_excd.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aC_3lbe = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.aC.overload('java.lang.String', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aC_3lbe.implementation = function(v0, v1) {
        printStacks('protected com.tencent.mm.plugin.webview.ui.tools.WebViewUI$w com.tencent.mm.plugin.webview.ui.tools.WebViewUI.aC(java.lang.String,boolean)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aC_3lbe.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aq_1nxv = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.aq.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aq_1nxv.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.aq(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_aq_1nxv.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_eW_91k8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.eW.overload('android.view.View');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_eW_91k8.implementation = function(v0) {
        printStacks('private static void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.eW(android.view.View)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_eW_91k8.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_startActivity_twtm = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.startActivity.overload('android.content.Intent');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_startActivity_twtm.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.startActivity(android.content.Intent)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_startActivity_twtm.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_E_9928 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.E.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_E_9928.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.WebViewUI.E(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_E_9928.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYi_7xq8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYi.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYi_7xq8.implementation = function() {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYi()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYi_7xq8.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_8gnu = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.ui.base.p');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_8gnu.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.ui.base.p)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_8gnu.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_8suo = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_8suo.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_8suo.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_z_0a39 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.z.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_z_0a39.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.z(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_z_0a39.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byw_rh13 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.byw.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byw_rh13.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.byw()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_byw_rh13.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onStart_mpi2 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onStart.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onStart_mpi2.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onStart()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onStart_mpi2.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_e_2x5i = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.e.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_e_2x5i.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.e(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_e_2x5i.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxV_iw4e = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bxV.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxV_iw4e.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bxV()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bxV_iw4e.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asl_doin = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asl.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asl_doin.implementation = function(v0) {
        printStacks('protected boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asl(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asl_doin.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bys_kjqn = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.bys.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bys_kjqn.implementation = function() {
        printStacks('protected com.tencent.mm.plugin.webview.ui.tools.jsapi.j com.tencent.mm.plugin.webview.ui.tools.WebViewUI.bys()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_bys_kjqn.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onSwipeBack_m1dk = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onSwipeBack.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onSwipeBack_m1dk.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onSwipeBack()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onSwipeBack_m1dk.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ast_0o18 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.ast.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ast_0o18.implementation = function(v0) {
        printStacks('private boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.ast(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_ast_0o18.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_enq6 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('java.lang.String', 'java.lang.String', 'com.tencent.mm.protocal.JsapiPermissionWrapper', 'com.tencent.mm.protocal.GeneralControlWrapper', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_enq6.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(java.lang.String,java.lang.String,com.tencent.mm.protocal.JsapiPermissionWrapper,com.tencent.mm.protocal.GeneralControlWrapper,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_enq6.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_k77r = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.b.overload('com.tencent.mm.plugin.webview.stub.c');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_k77r.implementation = function(v0) {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.b(com.tencent.mm.plugin.webview.stub.c)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_b_k77r.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asm_feos = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.asm.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asm_feos.implementation = function(v0) {
        printStacks('private static java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI.asm(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_asm_feos.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYf_ptdm = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.dYf.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYf_ptdm.implementation = function() {
        printStacks('protected final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.dYf()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_dYf_ptdm.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_n1c6 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.a.overload('com.tencent.xweb.WebView', 'java.lang.String', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_n1c6.implementation = function(v0, v1, v2) {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI.a(com.tencent.xweb.WebView,java.lang.String,java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_a_n1c6.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onWindowFocusChanged_lggh = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.onWindowFocusChanged.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onWindowFocusChanged_lggh.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI.onWindowFocusChanged(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_method_onWindowFocusChanged_lggh.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_init_sazj = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz.$init.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_init_sazj.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.WebViewUI()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_clz_init_sazj.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_10_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$10');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_10_clz_method_dWG_wlgn = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_10_clz.dWG.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_10_clz_method_dWG_wlgn.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$10.dWG()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_10_clz_method_dWG_wlgn.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_10_clz_init_pbc5 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_10_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_10_clz_init_pbc5.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$10(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_10_clz_init_pbc5.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$11');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz_method_d_dpbh = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz.d.overload('int', 'int', 'boolean', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz_method_d_dpbh.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$11.d(int,int,boolean,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz_method_d_dpbh.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz_method_onScrollChanged_h4ii = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz.onScrollChanged.overload('int', 'int', 'int', 'int', 'android.view.View');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz_method_onScrollChanged_h4ii.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$11.onScrollChanged(int,int,int,int,android.view.View)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz_method_onScrollChanged_h4ii.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz_method_baH_1btw = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz.baH.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz_method_baH_1btw.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$11.baH()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz_method_baH_1btw.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz_method_C_xpgp = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz.C.overload('android.view.MotionEvent');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz_method_C_xpgp.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$11.C(android.view.MotionEvent)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz_method_C_xpgp.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz_method_b_50em = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz.b.overload('int', 'int', 'int', 'int', 'int', 'int', 'int', 'int', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz_method_b_50em.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7, v8) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$11.b(int,int,int,int,int,int,int,int,boolean)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz_method_b_50em.call(this, v0, v1, v2, v3, v4, v5, v6, v7, v8);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz_method_B_2dqh = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz.B.overload('android.view.MotionEvent');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz_method_B_2dqh.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$11.B(android.view.MotionEvent)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz_method_B_2dqh.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz_method_D_alcb = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz.D.overload('android.view.MotionEvent');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz_method_D_alcb.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$11.D(android.view.MotionEvent)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz_method_D_alcb.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz_init_vcn7 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz_init_vcn7.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$11(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_11_clz_init_vcn7.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_12_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$12');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_12_clz_method_aqw_izh9 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_12_clz.aqw.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_12_clz_method_aqw_izh9.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$12.aqw(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_12_clz_method_aqw_izh9.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_12_clz_init_udwb = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_12_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_12_clz_init_udwb.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$12(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_12_clz_init_udwb.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_13_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$13');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_13_clz_method_JZ_b2mc = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_13_clz.JZ.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_13_clz_method_JZ_b2mc.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$13.JZ(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_13_clz_method_JZ_b2mc.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_13_clz_init_v6nh = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_13_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_13_clz_init_v6nh.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$13(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_13_clz_init_v6nh.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_14_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$14');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_14_clz_method_dUj_8pnl = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_14_clz.dUj.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_14_clz_method_dUj_8pnl.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$14.dUj()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_14_clz_method_dUj_8pnl.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_14_clz_method_dUi_au9s = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_14_clz.dUi.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_14_clz_method_dUi_au9s.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$14.dUi()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_14_clz_method_dUi_au9s.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_14_clz_init_6w2k = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_14_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_14_clz_init_6w2k.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$14(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_14_clz_init_6w2k.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$15');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz_method_dUl_beve = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz.dUl.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz_method_dUl_beve.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$15.dUl()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz_method_dUl_beve.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz_method_dUm_vhwh = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz.dUm.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz_method_dUm_vhwh.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$15.dUm()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz_method_dUm_vhwh.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz_method_b_ae4l = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz_method_b_ae4l.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$15.b(com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz_method_b_ae4l.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz_method_dUk_an6n = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz.dUk.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz_method_dUk_an6n.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$15.dUk()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz_method_dUk_an6n.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz_method_c_z7r3 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz.c.overload('int', 'android.view.KeyEvent');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz_method_c_z7r3.implementation = function(v0, v1) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$15.c(int,android.view.KeyEvent)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz_method_c_z7r3.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz_method_a_jbq9 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz_method_a_jbq9.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$15.a(com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz_method_a_jbq9.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz_init_3te5 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz_init_3te5.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$15(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_15_clz_init_3te5.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_16_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$16');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_16_clz_method_onFindResultReceived_11in = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_16_clz.onFindResultReceived.overload('int', 'int', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_16_clz_method_onFindResultReceived_11in.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$16.onFindResultReceived(int,int,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_16_clz_method_onFindResultReceived_11in.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_16_clz_init_h95n = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_16_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_16_clz_init_h95n.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$16(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_16_clz_init_h95n.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_17_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$17');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_17_clz_method_onDownloadStart_k8zb = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_17_clz.onDownloadStart.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'long');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_17_clz_method_onDownloadStart_k8zb.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$17.onDownloadStart(java.lang.String,java.lang.String,java.lang.String,java.lang.String,long)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_17_clz_method_onDownloadStart_k8zb.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_17_clz_init_7orj = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_17_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_17_clz_init_7orj.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$17(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_17_clz_init_7orj.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_18_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$18');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_18_clz_method_onTouch_9zp9 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_18_clz.onTouch.overload('android.view.View', 'android.view.MotionEvent');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_18_clz_method_onTouch_9zp9.implementation = function(v0, v1) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$18.onTouch(android.view.View,android.view.MotionEvent)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_18_clz_method_onTouch_9zp9.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_18_clz_init_y2uk = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_18_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_18_clz_init_y2uk.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$18(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_18_clz_init_y2uk.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_19_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$19');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_19_clz_method_onMenuItemClick_u4gl = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_19_clz.onMenuItemClick.overload('android.view.MenuItem');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_19_clz_method_onMenuItemClick_u4gl.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$19.onMenuItemClick(android.view.MenuItem)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_19_clz_method_onMenuItemClick_u4gl.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_19_clz_init_b07t = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_19_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_19_clz_init_b07t.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$19(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_19_clz_init_b07t.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_1_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$1');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_1_clz_method_callback_fth3 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_1_clz.callback.overload('com.tencent.mm.sdk.b.b');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_1_clz_method_callback_fth3.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$1.callback(com.tencent.mm.sdk.b.b)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_1_clz_method_callback_fth3.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_1_clz_init_k35l = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_1_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_1_clz_init_k35l.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$1(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_1_clz_init_k35l.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_2_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$2');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_2_clz_method_run_gxkh = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_2_clz.run.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_2_clz_method_run_gxkh.implementation = function() {
        printStacks('public final java.lang.Object com.tencent.mm.plugin.webview.ui.tools.WebViewUI$2.run()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_2_clz_method_run_gxkh.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_2_clz_init_heow = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_2_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_2_clz_init_heow.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$2(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_2_clz_init_heow.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_3_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$3');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_3_clz_method_a_lqdf = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_3_clz.a.overload('com.tencent.mm.bo.a$a', 'com.tencent.mm.bo.a$a');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_3_clz_method_a_lqdf.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$3.a(com.tencent.mm.bo.a$a,com.tencent.mm.bo.a$a)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_3_clz_method_a_lqdf.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_3_clz_init_srss = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_3_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_3_clz_init_srss.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$3(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_3_clz_init_srss.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_4_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$4');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_4_clz_method_dXp_hs9e = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_4_clz.dXp.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_4_clz_method_dXp_hs9e.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$4.dXp()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_4_clz_method_dXp_hs9e.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_4_clz_init_pjxm = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_4_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_4_clz_init_pjxm.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$4(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_4_clz_init_pjxm.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_StartActivityForResultTask_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubTempUI$StartActivityForResultTask');
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_StartActivityForResultTask_clz_method_writeToParcel_tn6d = com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_StartActivityForResultTask_clz.writeToParcel.overload('android.os.Parcel', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_StartActivityForResultTask_clz_method_writeToParcel_tn6d.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubTempUI$StartActivityForResultTask.writeToParcel(android.os.Parcel,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_StartActivityForResultTask_clz_method_writeToParcel_tn6d.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_StartActivityForResultTask_clz_method_describeContents_8jaq = com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_StartActivityForResultTask_clz.describeContents.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_StartActivityForResultTask_clz_method_describeContents_8jaq.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.stub.WebViewStubTempUI$StartActivityForResultTask.describeContents()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_StartActivityForResultTask_clz_method_describeContents_8jaq.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_StartActivityForResultTask_clz_init_116k = com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_StartActivityForResultTask_clz.$init.overload('android.os.Parcel');
    com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_StartActivityForResultTask_clz_init_116k.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubTempUI$StartActivityForResultTask(android.os.Parcel)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_StartActivityForResultTask_clz_init_116k.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_StartActivityForResultTask_clz_init_e46l = com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_StartActivityForResultTask_clz.$init.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_StartActivityForResultTask_clz_init_e46l.implementation = function() {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubTempUI$StartActivityForResultTask()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_StartActivityForResultTask_clz_init_e46l.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_6_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$6');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_6_clz_method_onSystemUiVisibilityChange_koh4 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_6_clz.onSystemUiVisibilityChange.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_6_clz_method_onSystemUiVisibilityChange_koh4.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$6.onSystemUiVisibilityChange(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_6_clz_method_onSystemUiVisibilityChange_koh4.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_6_clz_init_m0jw = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_6_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'android.view.View');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_6_clz_init_m0jw.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$6(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,android.view.View)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_6_clz_init_m0jw.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_7_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$7');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_7_clz_method_onClick_ka15 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_7_clz.onClick.overload('android.view.View');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_7_clz_method_onClick_ka15.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$7.onClick(android.view.View)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_7_clz_method_onClick_ka15.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_7_clz_init_d6hk = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_7_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_7_clz_init_d6hk.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$7(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_7_clz_init_d6hk.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_8_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$8');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_8_clz_method_onMenuItemClick_1u58 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_8_clz.onMenuItemClick.overload('android.view.MenuItem');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_8_clz_method_onMenuItemClick_1u58.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$8.onMenuItemClick(android.view.MenuItem)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_8_clz_method_onMenuItemClick_1u58.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_8_clz_init_wsb7 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_8_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_8_clz_init_wsb7.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$8(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_8_clz_init_wsb7.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_9_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$9');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_9_clz_method_onClick_2a7c = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_9_clz.onClick.overload('android.view.View');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_9_clz_method_onClick_2a7c.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$9.onClick(android.view.View)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_9_clz_method_onClick_2a7c.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_9_clz_init_0w7w = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_9_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_9_clz_init_0w7w.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$9(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_9_clz_init_0w7w.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_20_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$20');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_20_clz_method_run_ykbv = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_20_clz.run.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_20_clz_method_run_ykbv.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$20.run()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_20_clz_method_run_ykbv.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_20_clz_init_0gxl = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_20_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_20_clz_init_0gxl.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$20(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_20_clz_init_0gxl.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_21_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$21');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_21_clz_method_dYn_0ejn = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_21_clz.dYn.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_21_clz_method_dYn_0ejn.implementation = function() {
        printStacks('private boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$21.dYn()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_21_clz_method_dYn_0ejn.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_21_clz_method_callback_tncs = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_21_clz.callback.overload('com.tencent.mm.sdk.b.b');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_21_clz_method_callback_tncs.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$21.callback(com.tencent.mm.sdk.b.b)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_21_clz_method_callback_tncs.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_21_clz_init_wnhn = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_21_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_21_clz_init_wnhn.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$21(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_21_clz_init_wnhn.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_22_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$22');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_22_clz_method_onLongClick_727c = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_22_clz.onLongClick.overload('android.view.View');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_22_clz_method_onLongClick_727c.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$22.onLongClick(android.view.View)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_22_clz_method_onLongClick_727c.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_22_clz_init_m3lr = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_22_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_22_clz_init_m3lr.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$22(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_22_clz_init_m3lr.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_23_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$23');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_23_clz_method_dYo_a26k = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_23_clz.dYo.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_23_clz_method_dYo_a26k.implementation = function() {
        printStacks('private boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$23.dYo()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_23_clz_method_dYo_a26k.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_23_clz_method_onLongClick_a46p = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_23_clz.onLongClick.overload('android.view.View');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_23_clz_method_onLongClick_a46p.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$23.onLongClick(android.view.View)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_23_clz_method_onLongClick_a46p.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_23_clz_init_unf1 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_23_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_23_clz_init_unf1.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$23(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_23_clz_init_unf1.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_24_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$24');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_24_clz_method_run_ah6i = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_24_clz.run.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_24_clz_method_run_ah6i.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$24.run()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_24_clz_method_run_ah6i.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_24_clz_init_561j = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_24_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_24_clz_init_561j.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$24(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_24_clz_init_561j.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_25_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$25');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_25_clz_method_byG_mnib = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_25_clz.byG.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_25_clz_method_byG_mnib.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$25.byG()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_25_clz_method_byG_mnib.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_25_clz_init_egvf = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_25_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_25_clz_init_egvf.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$25(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_25_clz_init_egvf.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_26_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$26');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_26_clz_method_kA_phgn = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_26_clz.kA.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_26_clz_method_kA_phgn.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$26.kA(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_26_clz_method_kA_phgn.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_26_clz_init_3ggn = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_26_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_26_clz_init_3ggn.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$26(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_26_clz_init_3ggn.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_27_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$27');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_27_clz_method_onMenuItemClick_hf91 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_27_clz.onMenuItemClick.overload('android.view.MenuItem');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_27_clz_method_onMenuItemClick_hf91.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$27.onMenuItemClick(android.view.MenuItem)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_27_clz_method_onMenuItemClick_hf91.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_27_clz_init_4imc = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_27_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'boolean', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_27_clz_init_4imc.implementation = function(v0, v1, v2) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$27(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,boolean,java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_27_clz_init_4imc.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_28_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$28');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_28_clz_method_onLongClick_05vi = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_28_clz.onLongClick.overload('android.view.View');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_28_clz_method_onLongClick_05vi.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$28.onLongClick(android.view.View)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_28_clz_method_onLongClick_05vi.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_28_clz_init_rclf = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_28_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_28_clz_init_rclf.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$28(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_28_clz_init_rclf.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_29_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$29');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_29_clz_method_onMenuItemClick_wt2b = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_29_clz.onMenuItemClick.overload('android.view.MenuItem');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_29_clz_method_onMenuItemClick_wt2b.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$29.onMenuItemClick(android.view.MenuItem)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_29_clz_method_onMenuItemClick_wt2b.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_29_clz_init_sipf = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_29_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_29_clz_init_sipf.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$29(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_29_clz_init_sipf.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_a_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$a');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_a_clz_method_asp_d7um = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_a_clz.asp.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_a_clz_method_asp_d7um.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$a.asp(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_a_clz_method_asp_d7um.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_a_clz_method_asy_qpre = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_a_clz.asy.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_a_clz_method_asy_qpre.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$a.asy(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_a_clz_method_asy_qpre.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_a_clz_init_kw44 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_a_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_a_clz_init_kw44.implementation = function(v0) {
        printStacks('private com.tencent.mm.plugin.webview.ui.tools.WebViewUI$a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_a_clz_init_kw44.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_a_clz_init_13vp = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_a_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'byte');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_a_clz_init_13vp.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$a(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,byte)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_a_clz_init_13vp.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_b_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$b');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_b_clz_method_asp_q885 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_b_clz.asp.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_b_clz_method_asp_q885.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$b.asp(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_b_clz_method_asp_q885.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_b_clz_method_asy_vdhp = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_b_clz.asy.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_b_clz_method_asy_vdhp.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$b.asy(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_b_clz_method_asy_vdhp.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_b_clz_init_b6xp = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_b_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_b_clz_init_b6xp.implementation = function(v0) {
        printStacks('private com.tencent.mm.plugin.webview.ui.tools.WebViewUI$b(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_b_clz_init_b6xp.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_b_clz_init_1lyd = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_b_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'byte');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_b_clz_init_1lyd.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$b(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,byte)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_b_clz_init_1lyd.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_c_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$c');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_c_clz_method_asp_i7vl = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_c_clz.asp.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_c_clz_method_asp_i7vl.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$c.asp(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_c_clz_method_asp_i7vl.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_c_clz_method_asy_zcvb = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_c_clz.asy.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_c_clz_method_asy_zcvb.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$c.asy(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_c_clz_method_asy_zcvb.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_c_clz_init_gscb = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_c_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_c_clz_init_gscb.implementation = function(v0) {
        printStacks('private com.tencent.mm.plugin.webview.ui.tools.WebViewUI$c(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_c_clz_init_gscb.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_c_clz_init_y5fk = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_c_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'byte');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_c_clz_init_y5fk.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$c(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,byte)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_c_clz_init_y5fk.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$d');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_aC_t7zg = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz.aC.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_aC_t7zg.implementation = function(v0) {
        printStacks('public static com.tencent.mm.plugin.webview.ui.tools.WebViewUI$d com.tencent.mm.plugin.webview.ui.tools.WebViewUI$d.aC(android.os.Bundle)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_aC_t7zg.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_dYp_od0k = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz.dYp.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_dYp_od0k.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI$d.dYp()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_dYp_od0k.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_dUC_esmx = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz.dUC.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_dUC_esmx.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI$d.dUC()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_dUC_esmx.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_dUD_gm4h = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz.dUD.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_dUD_gm4h.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI$d.dUD()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_dUD_gm4h.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_dUA_lbca = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz.dUA.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_dUA_lbca.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$d.dUA()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_method_dUA_lbca.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_init_3ols = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz.$init.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_init_3ols.implementation = function(v0) {
        printStacks('private com.tencent.mm.plugin.webview.ui.tools.WebViewUI$d(android.os.Bundle)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_d_clz_init_3ols.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_30_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$30');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_30_clz_method_onMenuItemClick_1u05 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_30_clz.onMenuItemClick.overload('android.view.MenuItem');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_30_clz_method_onMenuItemClick_1u05.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$30.onMenuItemClick(android.view.MenuItem)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_30_clz_method_onMenuItemClick_1u05.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_30_clz_init_lkuw = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_30_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_30_clz_init_lkuw.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$30(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_30_clz_init_lkuw.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_e_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$e');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_e_clz_method_asp_roye = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_e_clz.asp.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_e_clz_method_asp_roye.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$e.asp(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_e_clz_method_asp_roye.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_e_clz_method_asy_v4hm = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_e_clz.asy.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_e_clz_method_asy_v4hm.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$e.asy(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_e_clz_method_asy_v4hm.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_e_clz_init_ar5q = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_e_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_e_clz_init_ar5q.implementation = function(v0) {
        printStacks('private com.tencent.mm.plugin.webview.ui.tools.WebViewUI$e(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_e_clz_init_ar5q.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_e_clz_init_xqxk = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_e_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'byte');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_e_clz_init_xqxk.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$e(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,byte)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_e_clz_init_xqxk.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_31_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$31');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_31_clz_method_Cc_vi75 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_31_clz.Cc.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_31_clz_method_Cc_vi75.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$31.Cc(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_31_clz_method_Cc_vi75.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_31_clz_init_hajw = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_31_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_31_clz_init_hajw.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$31(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_31_clz_init_hajw.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_f_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$f');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_f_clz_method_asp_ox15 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_f_clz.asp.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_f_clz_method_asp_ox15.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$f.asp(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_f_clz_method_asp_ox15.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_f_clz_method_asy_p2i1 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_f_clz.asy.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_f_clz_method_asy_p2i1.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$f.asy(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_f_clz_method_asy_p2i1.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_f_clz_init_n3g8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_f_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_f_clz_init_n3g8.implementation = function(v0) {
        printStacks('private com.tencent.mm.plugin.webview.ui.tools.WebViewUI$f(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_f_clz_init_n3g8.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_f_clz_init_0d0h = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_f_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'byte');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_f_clz_init_0d0h.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$f(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,byte)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_f_clz_init_0d0h.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_32_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$32');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_32_clz_method_run_uy41 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_32_clz.run.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_32_clz_method_run_uy41.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$32.run()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_32_clz_method_run_uy41.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_32_clz_init_9rfk = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_32_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_32_clz_init_9rfk.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$32(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_32_clz_init_9rfk.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$g');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_onHideCustomView_8zrg = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz.onHideCustomView.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_onHideCustomView_8zrg.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$g.onHideCustomView()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_onHideCustomView_8zrg.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_a_f9sa = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz.a.overload('android.view.View', 'android.webkit.WebChromeClient$CustomViewCallback');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_a_f9sa.implementation = function(v0, v1) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$g.a(android.view.View,android.webkit.WebChromeClient$CustomViewCallback)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_a_f9sa.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_a_23s4 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz.a.overload('com.tencent.xweb.WebView', 'android.webkit.ValueCallback', 'com.tencent.xweb.t$a');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_a_23s4.implementation = function(v0, v1, v2) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$g.a(com.tencent.xweb.WebView,android.webkit.ValueCallback,com.tencent.xweb.t$a)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_a_23s4.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_getVideoLoadingProgressView_kcq8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz.getVideoLoadingProgressView.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_getVideoLoadingProgressView_kcq8.implementation = function() {
        printStacks('public final android.view.View com.tencent.mm.plugin.webview.ui.tools.WebViewUI$g.getVideoLoadingProgressView()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_getVideoLoadingProgressView_kcq8.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_openFileChooser_t7m6 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz.openFileChooser.overload('android.webkit.ValueCallback', 'java.lang.String', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_openFileChooser_t7m6.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$g.openFileChooser(android.webkit.ValueCallback,java.lang.String,java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_openFileChooser_t7m6.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_a_7o7k = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz.a.overload('com.tencent.xweb.WebView', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_a_7o7k.implementation = function(v0, v1) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$g.a(com.tencent.xweb.WebView,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_a_7o7k.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_a_1yz9 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz.a.overload('com.tencent.xweb.WebView', 'java.lang.String', 'java.lang.String', 'com.tencent.xweb.JsResult');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_a_1yz9.implementation = function(v0, v1, v2, v3) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$g.a(com.tencent.xweb.WebView,java.lang.String,java.lang.String,com.tencent.xweb.JsResult)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_a_1yz9.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_bfu_ghtr = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz.bfu.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_bfu_ghtr.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$g.bfu()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_bfu_ghtr.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_onExitFullscreenVideo_rofe = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz.onExitFullscreenVideo.overload('android.graphics.Bitmap');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_onExitFullscreenVideo_rofe.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$g.onExitFullscreenVideo(android.graphics.Bitmap)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_onExitFullscreenVideo_rofe.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_a_jg0d = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz.a.overload('com.tencent.xweb.WebView', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'com.tencent.xweb.m');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_a_jg0d.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$g.a(com.tencent.xweb.WebView,java.lang.String,java.lang.String,java.lang.String,com.tencent.xweb.m)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_a_jg0d.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_d_xemx = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz.d.overload('com.tencent.xweb.WebView', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_d_xemx.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$g.d(com.tencent.xweb.WebView,java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_d_xemx.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_onShowCustomView_9gyn = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz.onShowCustomView.overload('android.view.View', 'android.webkit.WebChromeClient$CustomViewCallback');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_onShowCustomView_9gyn.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$g.onShowCustomView(android.view.View,android.webkit.WebChromeClient$CustomViewCallback)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_onShowCustomView_9gyn.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_onGeolocationPermissionsShowPrompt_te6s = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz.onGeolocationPermissionsShowPrompt.overload('java.lang.String', 'android.webkit.GeolocationPermissions$Callback');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_onGeolocationPermissionsShowPrompt_te6s.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$g.onGeolocationPermissionsShowPrompt(java.lang.String,android.webkit.GeolocationPermissions$Callback)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_onGeolocationPermissionsShowPrompt_te6s.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_b_2nv5 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz.b.overload('com.tencent.xweb.WebView', 'java.lang.String', 'java.lang.String', 'com.tencent.xweb.JsResult');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_b_2nv5.implementation = function(v0, v1, v2, v3) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$g.b(com.tencent.xweb.WebView,java.lang.String,java.lang.String,com.tencent.xweb.JsResult)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_method_b_2nv5.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_init_mxpe = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_init_mxpe.implementation = function(v0) {
        printStacks('protected com.tencent.mm.plugin.webview.ui.tools.WebViewUI$g(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_g_clz_init_mxpe.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_33_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$33');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_33_clz_method_run_wehi = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_33_clz.run.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_33_clz_method_run_wehi.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$33.run()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_33_clz_method_run_wehi.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_33_clz_init_hgjb = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_33_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_33_clz_init_hgjb.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$33(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,int)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_33_clz_init_hgjb.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$h');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_i_t1ye = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz.i.overload('com.tencent.xweb.WebView', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_i_t1ye.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$h.i(com.tencent.xweb.WebView,java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_i_t1ye.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_b_34bw = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz.b.overload('com.tencent.xweb.WebView', 'java.lang.String', 'android.graphics.Bitmap');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_b_34bw.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$h.b(com.tencent.xweb.WebView,java.lang.String,android.graphics.Bitmap)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_b_34bw.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_b_jnv5 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz.b.overload('com.tencent.xweb.WebView', 'com.tencent.xweb.WebResourceRequest');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_b_jnv5.implementation = function(v0, v1) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$h.b(com.tencent.xweb.WebView,com.tencent.xweb.WebResourceRequest)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_b_jnv5.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_asA_hqpn = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz.asA.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_asA_hqpn.implementation = function(v0) {
        printStacks('private boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$h.asA(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_asA_hqpn.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_a_48um = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz.a.overload('java.lang.String', 'com.tencent.xweb.WebResourceRequest');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_a_48um.implementation = function(v0, v1) {
        printStacks('private com.tencent.xweb.WebResourceResponse com.tencent.mm.plugin.webview.ui.tools.WebViewUI$h.a(java.lang.String,com.tencent.xweb.WebResourceRequest)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_a_48um.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_dYr_epmo = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz.dYr.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_dYr_epmo.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$h.dYr()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_dYr_epmo.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_a_mcy9 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz.a.overload('com.tencent.xweb.WebView', 'com.tencent.xweb.WebResourceRequest', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_a_mcy9.implementation = function(v0, v1, v2) {
        printStacks('public com.tencent.xweb.WebResourceResponse com.tencent.mm.plugin.webview.ui.tools.WebViewUI$h.a(com.tencent.xweb.WebView,com.tencent.xweb.WebResourceRequest,android.os.Bundle)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_a_mcy9.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_f_asdj = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz.f.overload('com.tencent.xweb.WebView', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_f_asdj.implementation = function(v0, v1) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$h.f(com.tencent.xweb.WebView,java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_f_asdj.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_a_pm3e = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz.a.overload('com.tencent.xweb.WebView', 'com.tencent.xweb.WebResourceRequest');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_a_pm3e.implementation = function(v0, v1) {
        printStacks('public com.tencent.xweb.WebResourceResponse com.tencent.mm.plugin.webview.ui.tools.WebViewUI$h.a(com.tencent.xweb.WebView,com.tencent.xweb.WebResourceRequest)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_a_pm3e.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_b_uz3e = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz.b.overload('com.tencent.xweb.WebView', 'int', 'java.lang.String', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_b_uz3e.implementation = function(v0, v1, v2, v3) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$h.b(com.tencent.xweb.WebView,int,java.lang.String,java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_b_uz3e.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_a_2dha = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz.a.overload('com.tencent.xweb.WebView', 'com.tencent.xweb.o', 'android.net.http.SslError');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_a_2dha.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$h.a(com.tencent.xweb.WebView,com.tencent.xweb.o,android.net.http.SslError)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_a_2dha.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_a_n12e = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz.a.overload('com.tencent.xweb.WebView', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_a_n12e.implementation = function(v0, v1) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$h.a(com.tencent.xweb.WebView,java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_a_n12e.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_arT_nm4f = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz.arT.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_arT_nm4f.implementation = function(v0) {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$h.arT(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_arT_nm4f.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_b_il3j = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz.b.overload('com.tencent.xweb.WebView', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_b_il3j.implementation = function(v0, v1) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$h.b(com.tencent.xweb.WebView,java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_b_il3j.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_dYq_kk2q = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz.dYq.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_dYq_kk2q.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$h.dYq()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_dYq_kk2q.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_a_yhb3 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz.a.overload('com.tencent.xweb.WebView', 'int', 'java.lang.String', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_a_yhb3.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$h.a(com.tencent.xweb.WebView,int,java.lang.String,java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_a_yhb3.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_asz_lbep = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz.asz.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_asz_lbep.implementation = function(v0) {
        printStacks('public static java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI$h.asz(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_asz_lbep.call(com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_a_gs3b = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz.a.overload('com.tencent.xweb.WebView', 'java.lang.String', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_a_gs3b.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$h.a(com.tencent.xweb.WebView,java.lang.String,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_a_gs3b.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_dYs_ltlk = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz.dYs.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_dYs_ltlk.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$h.dYs()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_method_dYs_ltlk.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_init_6v8f = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_init_6v8f.implementation = function(v0) {
        printStacks('protected com.tencent.mm.plugin.webview.ui.tools.WebViewUI$h(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_h_clz_init_6v8f.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_34_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$34');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_34_clz_method_run_bb6r = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_34_clz.run.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_34_clz_method_run_bb6r.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$34.run()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_34_clz_method_run_bb6r.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_34_clz_init_6oxe = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_34_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_34_clz_init_6oxe.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$34(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_34_clz_init_6oxe.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_i_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$i');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_i_clz_method_asp_6k7q = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_i_clz.asp.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_i_clz_method_asp_6k7q.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$i.asp(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_i_clz_method_asp_6k7q.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_i_clz_method_asy_hjp9 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_i_clz.asy.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_i_clz_method_asy_hjp9.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$i.asy(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_i_clz_method_asy_hjp9.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_i_clz_init_xv26 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_i_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_i_clz_init_xv26.implementation = function(v0) {
        printStacks('private com.tencent.mm.plugin.webview.ui.tools.WebViewUI$i(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_i_clz_init_xv26.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_i_clz_init_q8nh = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_i_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'byte');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_i_clz_init_q8nh.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$i(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,byte)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_i_clz_init_q8nh.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_35_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$35');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_35_clz_method_onTimerExpired_hbju = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_35_clz.onTimerExpired.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_35_clz_method_onTimerExpired_hbju.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$35.onTimerExpired()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_35_clz_method_onTimerExpired_hbju.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_35_clz_init_g6pt = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_35_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_35_clz_init_g6pt.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$35(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_35_clz_init_g6pt.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_j_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$j');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_j_clz_method_JG_5mx9 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_j_clz.JG.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_j_clz_method_JG_5mx9.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$j.JG(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_j_clz_method_JG_5mx9.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_j_clz_init_xec5 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_j_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_j_clz_init_xec5.implementation = function(v0) {
        printStacks('private com.tencent.mm.plugin.webview.ui.tools.WebViewUI$j(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_j_clz_init_xec5.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_j_clz_init_r8of = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_j_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'byte');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_j_clz_init_r8of.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$j(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,byte)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_j_clz_init_r8of.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_36_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$36');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_36_clz_method_onClick_pfyg = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_36_clz.onClick.overload('android.view.View');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_36_clz_method_onClick_pfyg.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$36.onClick(android.view.View)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_36_clz_method_onClick_pfyg.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_36_clz_init_khrl = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_36_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_36_clz_init_khrl.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$36(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_36_clz_init_khrl.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_k_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$k');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_k_clz_method_asp_3orc = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_k_clz.asp.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_k_clz_method_asp_3orc.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$k.asp(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_k_clz_method_asp_3orc.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_k_clz_method_asy_5b1l = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_k_clz.asy.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_k_clz_method_asy_5b1l.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$k.asy(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_k_clz_method_asy_5b1l.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_k_clz_init_7l0p = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_k_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_k_clz_init_7l0p.implementation = function(v0) {
        printStacks('private com.tencent.mm.plugin.webview.ui.tools.WebViewUI$k(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_k_clz_init_7l0p.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_k_clz_init_15tr = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_k_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'byte');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_k_clz_init_15tr.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$k(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,byte)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_k_clz_init_15tr.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_37_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$37');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_37_clz_method_onClick_pggj = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_37_clz.onClick.overload('android.view.View');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_37_clz_method_onClick_pggj.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$37.onClick(android.view.View)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_37_clz_method_onClick_pggj.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_37_clz_init_akrv = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_37_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_37_clz_init_akrv.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$37(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_37_clz_init_akrv.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$l');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz_method_asB_o7gx = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz.asB.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz_method_asB_o7gx.implementation = function(v0) {
        printStacks('private boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$l.asB(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz_method_asB_o7gx.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz_method_aqI_mwsm = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz.aqI.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz_method_aqI_mwsm.implementation = function(v0) {
        printStacks('public final int com.tencent.mm.plugin.webview.ui.tools.WebViewUI$l.aqI(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz_method_aqI_mwsm.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz_init_p5er = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz.$init.overload('java.lang.String', 'com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz_init_p5er.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.WebViewUI$l(java.lang.String,com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_l_clz_init_p5er.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_38_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$38');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_38_clz_method_onClick_62np = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_38_clz.onClick.overload('android.view.View');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_38_clz_method_onClick_62np.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$38.onClick(android.view.View)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_38_clz_method_onClick_62np.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_38_clz_init_66hw = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_38_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_38_clz_init_66hw.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$38(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_38_clz_init_66hw.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$m');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz_method_dYt_rbvb = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz.dYt.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz_method_dYt_rbvb.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$m.dYt()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz_method_dYt_rbvb.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz_method_dYv_vu1d = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz.dYv.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz_method_dYv_vu1d.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$m.dYv()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz_method_dYv_vu1d.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz_method_dYu_58en = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz.dYu.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz_method_dYu_58en.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$m.dYu()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz_method_dYu_58en.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz_init_u2ys = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz_init_u2ys.implementation = function(v0) {
        printStacks('protected com.tencent.mm.plugin.webview.ui.tools.WebViewUI$m(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_m_clz_init_u2ys.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_n_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$n');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_n_clz_method_asp_b8k5 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_n_clz.asp.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_n_clz_method_asp_b8k5.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$n.asp(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_n_clz_method_asp_b8k5.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_n_clz_method_asy_pr3d = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_n_clz.asy.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_n_clz_method_asy_pr3d.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$n.asy(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_n_clz_method_asy_pr3d.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_n_clz_init_3353 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_n_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_n_clz_init_3353.implementation = function(v0) {
        printStacks('private com.tencent.mm.plugin.webview.ui.tools.WebViewUI$n(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_n_clz_init_3353.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_n_clz_init_diil = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_n_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'byte');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_n_clz_init_diil.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$n(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,byte)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_n_clz_init_diil.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_o_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$o');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_o_clz_method_dYv_rs7c = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_o_clz.dYv.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_o_clz_method_dYv_rs7c.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$o.dYv()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_o_clz_method_dYv_rs7c.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_o_clz_init_qpu7 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_o_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_o_clz_init_qpu7.implementation = function(v0) {
        printStacks('protected com.tencent.mm.plugin.webview.ui.tools.WebViewUI$o(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_o_clz_init_qpu7.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_p_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$p');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_p_clz_method_asp_ti6e = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_p_clz.asp.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_p_clz_method_asp_ti6e.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$p.asp(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_p_clz_method_asp_ti6e.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_p_clz_method_asy_v7xq = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_p_clz.asy.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_p_clz_method_asy_v7xq.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$p.asy(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_p_clz_method_asy_v7xq.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_p_clz_init_yt4v = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_p_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_p_clz_init_yt4v.implementation = function(v0) {
        printStacks('private com.tencent.mm.plugin.webview.ui.tools.WebViewUI$p(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_p_clz_init_yt4v.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_p_clz_init_52c4 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_p_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'byte');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_p_clz_init_52c4.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$p(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,byte)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_p_clz_init_52c4.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_q_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$q');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_q_clz_method_dYv_xku9 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_q_clz.dYv.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_q_clz_method_dYv_xku9.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$q.dYv()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_q_clz_method_dYv_xku9.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_q_clz_init_90jp = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_q_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_q_clz_init_90jp.implementation = function(v0) {
        printStacks('protected com.tencent.mm.plugin.webview.ui.tools.WebViewUI$q(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_q_clz_init_90jp.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_r_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$r');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_r_clz_method_asp_rf82 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_r_clz.asp.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_r_clz_method_asp_rf82.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$r.asp(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_r_clz_method_asp_rf82.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_r_clz_method_asy_nj8p = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_r_clz.asy.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_r_clz_method_asy_nj8p.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$r.asy(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_r_clz_method_asy_nj8p.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_r_clz_init_zuzj = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_r_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_r_clz_init_zuzj.implementation = function(v0) {
        printStacks('private com.tencent.mm.plugin.webview.ui.tools.WebViewUI$r(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_r_clz_init_zuzj.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_r_clz_init_493j = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_r_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'byte');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_r_clz_init_493j.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$r(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,byte)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_r_clz_init_493j.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_s_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$s');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_s_clz_method_asp_s0be = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_s_clz.asp.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_s_clz_method_asp_s0be.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$s.asp(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_s_clz_method_asp_s0be.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_s_clz_method_asy_9exi = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_s_clz.asy.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_s_clz_method_asy_9exi.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$s.asy(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_s_clz_method_asy_9exi.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_s_clz_init_f4nq = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_s_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_s_clz_init_f4nq.implementation = function(v0) {
        printStacks('private com.tencent.mm.plugin.webview.ui.tools.WebViewUI$s(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_s_clz_init_f4nq.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_s_clz_init_yg3n = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_s_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'byte');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_s_clz_init_yg3n.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$s(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,byte)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_s_clz_init_yg3n.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_t_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$t');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_t_clz_method_asp_vum7 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_t_clz.asp.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_t_clz_method_asp_vum7.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$t.asp(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_t_clz_method_asp_vum7.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_t_clz_method_asy_bnsb = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_t_clz.asy.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_t_clz_method_asy_bnsb.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$t.asy(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_t_clz_method_asy_bnsb.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_t_clz_init_klgb = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_t_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_t_clz_init_klgb.implementation = function(v0) {
        printStacks('private com.tencent.mm.plugin.webview.ui.tools.WebViewUI$t(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_t_clz_init_klgb.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_t_clz_init_tuic = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_t_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'byte');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_t_clz_init_tuic.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$t(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,byte)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_t_clz_init_tuic.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_u_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$u');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_u_clz_method_asp_dkzw = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_u_clz.asp.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_u_clz_method_asp_dkzw.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$u.asp(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_u_clz_method_asp_dkzw.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_u_clz_method_asy_zz24 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_u_clz.asy.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_u_clz_method_asy_zz24.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$u.asy(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_u_clz_method_asy_zz24.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_u_clz_init_xlpk = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_u_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_u_clz_init_xlpk.implementation = function(v0) {
        printStacks('private com.tencent.mm.plugin.webview.ui.tools.WebViewUI$u(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_u_clz_init_xlpk.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_u_clz_init_i9bq = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_u_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'byte');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_u_clz_init_i9bq.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$u(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,byte)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_u_clz_init_i9bq.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_v_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$v');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_v_clz_method_asp_qgo3 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_v_clz.asp.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_v_clz_method_asp_qgo3.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$v.asp(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_v_clz_method_asp_qgo3.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_v_clz_method_asy_6ri6 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_v_clz.asy.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_v_clz_method_asy_6ri6.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$v.asy(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_v_clz_method_asy_6ri6.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_v_clz_init_69ih = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_v_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_v_clz_init_69ih.implementation = function(v0) {
        printStacks('private com.tencent.mm.plugin.webview.ui.tools.WebViewUI$v(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_v_clz_init_69ih.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_v_clz_init_438i = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_v_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'byte');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_v_clz_init_438i.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$v(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,byte)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_v_clz_init_438i.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_x_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$x');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_x_clz_method_asp_c946 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_x_clz.asp.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_x_clz_method_asp_c946.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$x.asp(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_x_clz_method_asp_c946.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_x_clz_method_asy_irh8 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_x_clz.asy.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_x_clz_method_asy_irh8.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$x.asy(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_x_clz_method_asy_irh8.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_x_clz_init_2hgc = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_x_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_x_clz_init_2hgc.implementation = function(v0) {
        printStacks('private com.tencent.mm.plugin.webview.ui.tools.WebViewUI$x(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_x_clz_init_2hgc.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_x_clz_init_lvm2 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_x_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'byte');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_x_clz_init_lvm2.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$x(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,byte)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_x_clz_init_lvm2.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_y_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$y');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_y_clz_method_asp_fmrm = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_y_clz.asp.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_y_clz_method_asp_fmrm.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$y.asp(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_y_clz_method_asp_fmrm.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_y_clz_method_asy_9eoq = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_y_clz.asy.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_y_clz_method_asy_9eoq.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$y.asy(java.lang.String)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_y_clz_method_asy_9eoq.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_y_clz_init_jthb = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_y_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_y_clz_init_jthb.implementation = function(v0) {
        printStacks('private com.tencent.mm.plugin.webview.ui.tools.WebViewUI$y(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_y_clz_init_jthb.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_y_clz_init_ud5e = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_y_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'byte');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_y_clz_init_ud5e.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$y(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,byte)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_y_clz_init_ud5e.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_z_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$z');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_z_clz_init_jc7g = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_z_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_z_clz_init_jc7g.implementation = function(v0) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.WebViewUI$z(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_z_clz_init_jc7g.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_40_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$40');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_40_clz_method_run_38up = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_40_clz.run.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_40_clz_method_run_38up.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$40.run()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_40_clz_method_run_38up.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_40_clz_init_ezy5 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_40_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_40_clz_init_ezy5.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$40(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_40_clz_init_ezy5.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_41_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$41');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_41_clz_method_run_nu1m = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_41_clz.run.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_41_clz_method_run_nu1m.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$41.run()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_41_clz_method_run_nu1m.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_41_clz_init_691y = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_41_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'android.net.Uri');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_41_clz_init_691y.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$41(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,android.net.Uri)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_41_clz_init_691y.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_42_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$42');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_42_clz_method_goBack_wvxc = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_42_clz.goBack.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_42_clz_method_goBack_wvxc.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$42.goBack()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_42_clz_method_goBack_wvxc.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_42_clz_method_d_nh9d = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_42_clz.d.overload('android.content.DialogInterface$OnCancelListener');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_42_clz_method_d_nh9d.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$42.d(android.content.DialogInterface$OnCancelListener)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_42_clz_method_d_nh9d.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_42_clz_method_aqO_4t6r = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_42_clz.aqO.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_42_clz_method_aqO_4t6r.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$42.aqO(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_42_clz_method_aqO_4t6r.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_42_clz_method_bMl_8824 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_42_clz.bMl.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_42_clz_method_bMl_8824.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$42.bMl()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_42_clz_method_bMl_8824.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_42_clz_init_pn54 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_42_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_42_clz_init_pn54.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$42(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_42_clz_init_pn54.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_43_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$43');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_43_clz_method_dWF_g5el = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_43_clz.dWF.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_43_clz_method_dWF_g5el.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$43.dWF()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_43_clz_method_dWF_g5el.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_43_clz_method_a_nwnq = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_43_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.d');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_43_clz_method_a_nwnq.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$43.a(com.tencent.mm.plugin.webview.ui.tools.d)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_43_clz_method_a_nwnq.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_43_clz_init_a9kt = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_43_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_43_clz_init_a9kt.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$43(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_43_clz_init_a9kt.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_44_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$44');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_44_clz_method_dUW_bnap = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_44_clz.dUW.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_44_clz_method_dUW_bnap.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.WebViewUI$44.dUW()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_44_clz_method_dUW_bnap.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_44_clz_method_add_plom = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_44_clz.add.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_44_clz_method_add_plom.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$44.add(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_44_clz_method_add_plom.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_44_clz_method_remove_w2cn = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_44_clz.remove.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_44_clz_method_remove_w2cn.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$44.remove(int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_44_clz_method_remove_w2cn.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_44_clz_init_k5b6 = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_44_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_44_clz_init_k5b6.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$44(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_44_clz_init_k5b6.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_45_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$45');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_45_clz_method_onClick_bcwc = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_45_clz.onClick.overload('android.view.View');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_45_clz_method_onClick_bcwc.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$45.onClick(android.view.View)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_45_clz_method_onClick_bcwc.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_45_clz_init_r6jo = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_45_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_45_clz_init_r6jo.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$45(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_45_clz_init_r6jo.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_46_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$46');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_46_clz_method_onClick_5vkw = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_46_clz.onClick.overload('android.content.DialogInterface', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_46_clz_method_onClick_5vkw.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$46.onClick(android.content.DialogInterface,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_46_clz_method_onClick_5vkw.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_46_clz_init_qdqs = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_46_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'android.widget.CheckBox');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_46_clz_init_qdqs.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$46(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,android.widget.CheckBox)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_46_clz_init_qdqs.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_47_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$47');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_47_clz_method_onClick_o4cn = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_47_clz.onClick.overload('android.content.DialogInterface', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_47_clz_method_onClick_o4cn.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$47.onClick(android.content.DialogInterface,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_47_clz_method_onClick_o4cn.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_47_clz_init_u2dr = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_47_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_47_clz_init_u2dr.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$47(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_47_clz_init_u2dr.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_48_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$48');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_48_clz_method_onClick_oski = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_48_clz.onClick.overload('android.content.DialogInterface', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_48_clz_method_onClick_oski.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$48.onClick(android.content.DialogInterface,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_48_clz_method_onClick_oski.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_48_clz_init_pbdt = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_48_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_48_clz_init_pbdt.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$48(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_48_clz_init_pbdt.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_49_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$49');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_49_clz_method_onClick_6m0y = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_49_clz.onClick.overload('android.content.DialogInterface', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_49_clz_method_onClick_6m0y.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$49.onClick(android.content.DialogInterface,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_49_clz_method_onClick_6m0y.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_49_clz_init_70li = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_49_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_49_clz_init_70li.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$49(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_49_clz_init_70li.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_50_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$50');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_50_clz_method_bup_mexv = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_50_clz.bup.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_50_clz_method_bup_mexv.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$50.bup()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_50_clz_method_bup_mexv.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_50_clz_init_ondq = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_50_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_50_clz_init_ondq.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$50(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_50_clz_init_ondq.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_51_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$51');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_51_clz_method_byF_5eyg = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_51_clz.byF.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_51_clz_method_byF_5eyg.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.ui.tools.WebViewUI$51.byF()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_51_clz_method_byF_5eyg.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_51_clz_init_689h = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_51_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_51_clz_init_689h.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$51(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_51_clz_init_689h.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_52_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$52');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_52_clz_method_run_yjvq = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_52_clz.run.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_52_clz_method_run_yjvq.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$52.run()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_52_clz_method_run_yjvq.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_52_clz_init_ncke = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_52_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_52_clz_init_ncke.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$52(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_52_clz_init_ncke.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_53_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$53');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_53_clz_method_onLayoutChange_jogg = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_53_clz.onLayoutChange.overload('android.view.View', 'int', 'int', 'int', 'int', 'int', 'int', 'int', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_53_clz_method_onLayoutChange_jogg.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7, v8) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.WebViewUI$53.onLayoutChange(android.view.View,int,int,int,int,int,int,int,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewUI_53_clz_method_onLayoutChange_jogg.call(this, v0, v1, v2, v3, v4, v5, v6, v7, v8);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_53_clz_init_n2up = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_53_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_53_clz_init_n2up.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$53(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_53_clz_init_n2up.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_54_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$54');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_54_clz_method_onApplyWindowInsets_j07s = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_54_clz.onApplyWindowInsets.overload('android.view.View', 'android.view.WindowInsets');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_54_clz_method_onApplyWindowInsets_j07s.implementation = function(v0, v1) {
        printStacks('public final android.view.WindowInsets com.tencent.mm.plugin.webview.ui.tools.WebViewUI$54.onApplyWindowInsets(android.view.View,android.view.WindowInsets)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_54_clz_method_onApplyWindowInsets_j07s.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewUI_54_clz_init_754g = com_tencent_mm_plugin_webview_ui_tools_WebViewUI_54_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI', 'android.view.ViewGroup');
    com_tencent_mm_plugin_webview_ui_tools_WebViewUI_54_clz_init_754g.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewUI$54(com.tencent.mm.plugin.webview.ui.tools.WebViewUI,android.view.ViewGroup)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewUI_54_clz_init_754g.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz = Java.use('com.tencent.smtt.sdk.WebViewClient');
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedClientCertRequest_25rt = com_tencent_smtt_sdk_WebViewClient_clz.onReceivedClientCertRequest.overload('com.tencent.smtt.sdk.WebView', 'com.tencent.smtt.export.external.interfaces.ClientCertRequest');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedClientCertRequest_25rt.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onReceivedClientCertRequest(com.tencent.smtt.sdk.WebView,com.tencent.smtt.export.external.interfaces.ClientCertRequest)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedClientCertRequest_25rt.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_shouldInterceptRequest_o4wx = com_tencent_smtt_sdk_WebViewClient_clz.shouldInterceptRequest.overload('com.tencent.smtt.sdk.WebView', 'com.tencent.smtt.export.external.interfaces.WebResourceRequest');
    com_tencent_smtt_sdk_WebViewClient_clz_method_shouldInterceptRequest_o4wx.implementation = function(v0, v1) {
        printStacks('public com.tencent.smtt.export.external.interfaces.WebResourceResponse com.tencent.smtt.sdk.WebViewClient.shouldInterceptRequest(com.tencent.smtt.sdk.WebView,com.tencent.smtt.export.external.interfaces.WebResourceRequest)');
        return com_tencent_smtt_sdk_WebViewClient_clz_method_shouldInterceptRequest_o4wx.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_shouldInterceptRequest_bcsh = com_tencent_smtt_sdk_WebViewClient_clz.shouldInterceptRequest.overload('com.tencent.smtt.sdk.WebView', 'java.lang.String');
    com_tencent_smtt_sdk_WebViewClient_clz_method_shouldInterceptRequest_bcsh.implementation = function(v0, v1) {
        printStacks('public com.tencent.smtt.export.external.interfaces.WebResourceResponse com.tencent.smtt.sdk.WebViewClient.shouldInterceptRequest(com.tencent.smtt.sdk.WebView,java.lang.String)');
        return com_tencent_smtt_sdk_WebViewClient_clz_method_shouldInterceptRequest_bcsh.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedSslError_p4so = com_tencent_smtt_sdk_WebViewClient_clz.onReceivedSslError.overload('com.tencent.smtt.sdk.WebView', 'com.tencent.smtt.export.external.interfaces.SslErrorHandler', 'com.tencent.smtt.export.external.interfaces.SslError');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedSslError_p4so.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onReceivedSslError(com.tencent.smtt.sdk.WebView,com.tencent.smtt.export.external.interfaces.SslErrorHandler,com.tencent.smtt.export.external.interfaces.SslError)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedSslError_p4so.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_doUpdateVisitedHistory_8t5b = com_tencent_smtt_sdk_WebViewClient_clz.doUpdateVisitedHistory.overload('com.tencent.smtt.sdk.WebView', 'java.lang.String', 'boolean');
    com_tencent_smtt_sdk_WebViewClient_clz_method_doUpdateVisitedHistory_8t5b.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.doUpdateVisitedHistory(com.tencent.smtt.sdk.WebView,java.lang.String,boolean)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_doUpdateVisitedHistory_8t5b.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onDetectedBlankScreen_3mit = com_tencent_smtt_sdk_WebViewClient_clz.onDetectedBlankScreen.overload('java.lang.String', 'int');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onDetectedBlankScreen_3mit.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onDetectedBlankScreen(java.lang.String,int)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onDetectedBlankScreen_3mit.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onUnhandledKeyEvent_ml6y = com_tencent_smtt_sdk_WebViewClient_clz.onUnhandledKeyEvent.overload('com.tencent.smtt.sdk.WebView', 'android.view.KeyEvent');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onUnhandledKeyEvent_ml6y.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onUnhandledKeyEvent(com.tencent.smtt.sdk.WebView,android.view.KeyEvent)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onUnhandledKeyEvent_ml6y.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_shouldOverrideUrlLoading_rrtf = com_tencent_smtt_sdk_WebViewClient_clz.shouldOverrideUrlLoading.overload('com.tencent.smtt.sdk.WebView', 'com.tencent.smtt.export.external.interfaces.WebResourceRequest');
    com_tencent_smtt_sdk_WebViewClient_clz_method_shouldOverrideUrlLoading_rrtf.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.sdk.WebViewClient.shouldOverrideUrlLoading(com.tencent.smtt.sdk.WebView,com.tencent.smtt.export.external.interfaces.WebResourceRequest)');
        return com_tencent_smtt_sdk_WebViewClient_clz_method_shouldOverrideUrlLoading_rrtf.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onFormResubmission_tqw5 = com_tencent_smtt_sdk_WebViewClient_clz.onFormResubmission.overload('com.tencent.smtt.sdk.WebView', 'android.os.Message', 'android.os.Message');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onFormResubmission_tqw5.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onFormResubmission(com.tencent.smtt.sdk.WebView,android.os.Message,android.os.Message)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onFormResubmission_tqw5.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onLoadResource_qxcq = com_tencent_smtt_sdk_WebViewClient_clz.onLoadResource.overload('com.tencent.smtt.sdk.WebView', 'java.lang.String');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onLoadResource_qxcq.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onLoadResource(com.tencent.smtt.sdk.WebView,java.lang.String)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onLoadResource_qxcq.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedError_9kjn = com_tencent_smtt_sdk_WebViewClient_clz.onReceivedError.overload('com.tencent.smtt.sdk.WebView', 'com.tencent.smtt.export.external.interfaces.WebResourceRequest', 'com.tencent.smtt.export.external.interfaces.WebResourceError');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedError_9kjn.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onReceivedError(com.tencent.smtt.sdk.WebView,com.tencent.smtt.export.external.interfaces.WebResourceRequest,com.tencent.smtt.export.external.interfaces.WebResourceError)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedError_9kjn.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onTooManyRedirects_qwdi = com_tencent_smtt_sdk_WebViewClient_clz.onTooManyRedirects.overload('com.tencent.smtt.sdk.WebView', 'android.os.Message', 'android.os.Message');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onTooManyRedirects_qwdi.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onTooManyRedirects(com.tencent.smtt.sdk.WebView,android.os.Message,android.os.Message)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onTooManyRedirects_qwdi.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_shouldOverrideUrlLoading_7ylr = com_tencent_smtt_sdk_WebViewClient_clz.shouldOverrideUrlLoading.overload('com.tencent.smtt.sdk.WebView', 'java.lang.String');
    com_tencent_smtt_sdk_WebViewClient_clz_method_shouldOverrideUrlLoading_7ylr.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.sdk.WebViewClient.shouldOverrideUrlLoading(com.tencent.smtt.sdk.WebView,java.lang.String)');
        return com_tencent_smtt_sdk_WebViewClient_clz_method_shouldOverrideUrlLoading_7ylr.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedHttpAuthRequest_3qbs = com_tencent_smtt_sdk_WebViewClient_clz.onReceivedHttpAuthRequest.overload('com.tencent.smtt.sdk.WebView', 'com.tencent.smtt.export.external.interfaces.HttpAuthHandler', 'java.lang.String', 'java.lang.String');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedHttpAuthRequest_3qbs.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onReceivedHttpAuthRequest(com.tencent.smtt.sdk.WebView,com.tencent.smtt.export.external.interfaces.HttpAuthHandler,java.lang.String,java.lang.String)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedHttpAuthRequest_3qbs.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedError_zfyi = com_tencent_smtt_sdk_WebViewClient_clz.onReceivedError.overload('com.tencent.smtt.sdk.WebView', 'int', 'java.lang.String', 'java.lang.String');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedError_zfyi.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onReceivedError(com.tencent.smtt.sdk.WebView,int,java.lang.String,java.lang.String)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedError_zfyi.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_shouldInterceptRequest_mtuo = com_tencent_smtt_sdk_WebViewClient_clz.shouldInterceptRequest.overload('com.tencent.smtt.sdk.WebView', 'com.tencent.smtt.export.external.interfaces.WebResourceRequest', 'android.os.Bundle');
    com_tencent_smtt_sdk_WebViewClient_clz_method_shouldInterceptRequest_mtuo.implementation = function(v0, v1, v2) {
        printStacks('public com.tencent.smtt.export.external.interfaces.WebResourceResponse com.tencent.smtt.sdk.WebViewClient.shouldInterceptRequest(com.tencent.smtt.sdk.WebView,com.tencent.smtt.export.external.interfaces.WebResourceRequest,android.os.Bundle)');
        return com_tencent_smtt_sdk_WebViewClient_clz_method_shouldInterceptRequest_mtuo.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedHttpError_8y48 = com_tencent_smtt_sdk_WebViewClient_clz.onReceivedHttpError.overload('com.tencent.smtt.sdk.WebView', 'com.tencent.smtt.export.external.interfaces.WebResourceRequest', 'com.tencent.smtt.export.external.interfaces.WebResourceResponse');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedHttpError_8y48.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onReceivedHttpError(com.tencent.smtt.sdk.WebView,com.tencent.smtt.export.external.interfaces.WebResourceRequest,com.tencent.smtt.export.external.interfaces.WebResourceResponse)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedHttpError_8y48.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onPageStarted_ou6h = com_tencent_smtt_sdk_WebViewClient_clz.onPageStarted.overload('com.tencent.smtt.sdk.WebView', 'java.lang.String', 'android.graphics.Bitmap');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onPageStarted_ou6h.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onPageStarted(com.tencent.smtt.sdk.WebView,java.lang.String,android.graphics.Bitmap)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onPageStarted_ou6h.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onPageCommitVisible_i8ys = com_tencent_smtt_sdk_WebViewClient_clz.onPageCommitVisible.overload('com.tencent.smtt.sdk.WebView', 'java.lang.String');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onPageCommitVisible_i8ys.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onPageCommitVisible(com.tencent.smtt.sdk.WebView,java.lang.String)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onPageCommitVisible_i8ys.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onPageFinished_un0b = com_tencent_smtt_sdk_WebViewClient_clz.onPageFinished.overload('com.tencent.smtt.sdk.WebView', 'java.lang.String');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onPageFinished_un0b.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onPageFinished(com.tencent.smtt.sdk.WebView,java.lang.String)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onPageFinished_un0b.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedLoginRequest_a11h = com_tencent_smtt_sdk_WebViewClient_clz.onReceivedLoginRequest.overload('com.tencent.smtt.sdk.WebView', 'java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedLoginRequest_a11h.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onReceivedLoginRequest(com.tencent.smtt.sdk.WebView,java.lang.String,java.lang.String,java.lang.String)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onReceivedLoginRequest_a11h.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_shouldOverrideKeyEvent_7iyc = com_tencent_smtt_sdk_WebViewClient_clz.shouldOverrideKeyEvent.overload('com.tencent.smtt.sdk.WebView', 'android.view.KeyEvent');
    com_tencent_smtt_sdk_WebViewClient_clz_method_shouldOverrideKeyEvent_7iyc.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.sdk.WebViewClient.shouldOverrideKeyEvent(com.tencent.smtt.sdk.WebView,android.view.KeyEvent)');
        return com_tencent_smtt_sdk_WebViewClient_clz_method_shouldOverrideKeyEvent_7iyc.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_method_onScaleChanged_c4kp = com_tencent_smtt_sdk_WebViewClient_clz.onScaleChanged.overload('com.tencent.smtt.sdk.WebView', 'float', 'float');
    com_tencent_smtt_sdk_WebViewClient_clz_method_onScaleChanged_c4kp.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.WebViewClient.onScaleChanged(com.tencent.smtt.sdk.WebView,float,float)');
        com_tencent_smtt_sdk_WebViewClient_clz_method_onScaleChanged_c4kp.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebViewClient_clz_init_rfbs = com_tencent_smtt_sdk_WebViewClient_clz.$init.overload();
    com_tencent_smtt_sdk_WebViewClient_clz_init_rfbs.implementation = function() {
        printStacks('public com.tencent.smtt.sdk.WebViewClient()');
        return com_tencent_smtt_sdk_WebViewClient_clz_init_rfbs.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_1_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$1');
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_1_clz_method_run_c1yj = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_1_clz.run.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_1_clz_method_run_c1yj.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$1.run()');
        com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_1_clz_method_run_c1yj.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_1_clz_init_k4go = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_1_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI', 'com.tencent.mm.f.a.vx');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_1_clz_init_k4go.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$1(com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI,com.tencent.mm.f.a.vx)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_1_clz_init_k4go.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_2_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$2');
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_2_clz_method_onClick_2nu5 = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_2_clz.onClick.overload('android.content.DialogInterface', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_2_clz_method_onClick_2nu5.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$2.onClick(android.content.DialogInterface,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_2_clz_method_onClick_2nu5.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_2_clz_init_obsl = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_2_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_2_clz_init_obsl.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$2(com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_2_clz_init_obsl.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_3_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$3');
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_3_clz_method_onCancel_loya = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_3_clz.onCancel.overload('android.content.DialogInterface');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_3_clz_method_onCancel_loya.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$3.onCancel(android.content.DialogInterface)');
        com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_3_clz_method_onCancel_loya.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_3_clz_init_3ysr = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_3_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_3_clz_init_3ysr.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$3(com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_3_clz_init_3ysr.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_4_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$4');
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_4_clz_method_kJ_iibf = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_4_clz.kJ.overload('boolean');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_4_clz_method_kJ_iibf.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$4.kJ(boolean)');
        com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_4_clz_method_kJ_iibf.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_4_clz_init_l8bj = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_4_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI', 'com.tencent.mm.ui.base.p');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_4_clz_init_l8bj.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$4(com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI,com.tencent.mm.ui.base.p)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_4_clz_init_l8bj.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5');
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_rH_fd4i = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz.rH.overload('boolean');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_rH_fd4i.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5.rH(boolean)');
        com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_rH_fd4i.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_t_ic67 = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz.t.overload('int', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_t_ic67.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5.t(int,android.os.Bundle)');
        com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_t_ic67.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_dWg_ao4n = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz.dWg.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_dWg_ao4n.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5.dWg()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_dWg_ao4n.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_dWi_qb2p = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz.dWi.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_dWi_qb2p.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5.dWi()');
        com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_dWi_qb2p.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_dWj_07sb = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz.dWj.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_dWj_07sb.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5.dWj()');
        com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_dWj_07sb.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_jL_0ttp = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz.jL.overload('java.lang.String', 'java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_jL_0ttp.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5.jL(java.lang.String,java.lang.String)');
        com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_jL_0ttp.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_asBinder_49g8 = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz.asBinder.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_asBinder_49g8.implementation = function() {
        printStacks('public final android.os.IBinder com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5.asBinder()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_asBinder_49g8.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_eg_ugdr = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz.eg.overload('java.lang.String', 'java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_eg_ugdr.implementation = function(v0, v1) {
        printStacks('public final android.os.Bundle com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5.eg(java.lang.String,java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_eg_ugdr.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_f_dzhf = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz.f.overload('int', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_f_dzhf.implementation = function(v0, v1) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5.f(int,android.os.Bundle)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_f_dzhf.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_rJ_rjyo = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz.rJ.overload('boolean');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_rJ_rjyo.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5.rJ(boolean)');
        com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_rJ_rjyo.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_av_6ris = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz.av.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_av_6ris.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5.av(android.os.Bundle)');
        com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_av_6ris.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_a_bzrh = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz.a.overload('java.lang.String', 'java.lang.String', 'android.os.Bundle', 'boolean');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_a_bzrh.implementation = function(v0, v1, v2, v3) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5.a(java.lang.String,java.lang.String,android.os.Bundle,boolean)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_a_bzrh.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_getCurrentUrl_vtyi = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz.getCurrentUrl.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_getCurrentUrl_vtyi.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5.getCurrentUrl()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_getCurrentUrl_vtyi.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_au_5s95 = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz.au.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_au_5s95.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5.au(android.os.Bundle)');
        com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_au_5s95.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_j_10v1 = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz.j.overload('int', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_j_10v1.implementation = function(v0, v1) {
        printStacks('public final android.os.Bundle com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5.j(int,android.os.Bundle)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_j_10v1.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_dWf_aqgp = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz.dWf.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_dWf_aqgp.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5.dWf()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_dWf_aqgp.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_Qz_haie = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz.Qz.overload('int');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_Qz_haie.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5.Qz(int)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_Qz_haie.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_e_dcz8 = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz.e.overload('java.lang.String', 'java.lang.String', 'int', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_e_dcz8.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5.e(java.lang.String,java.lang.String,int,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_e_dcz8.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_arE_x1yc = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz.arE.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_arE_x1yc.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5.arE(java.lang.String)');
        com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_arE_x1yc.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_jK_xlke = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz.jK.overload('java.lang.String', 'java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_jK_xlke.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5.jK(java.lang.String,java.lang.String)');
        com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_jK_xlke.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_rI_c9xy = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz.rI.overload('boolean');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_rI_c9xy.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5.rI(boolean)');
        com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_rI_c9xy.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_dWh_mfbm = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz.dWh.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_dWh_mfbm.implementation = function() {
        printStacks('public final int com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5.dWh()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_dWh_mfbm.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_a_r4ue = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz.a.overload('com.tencent.mm.plugin.webview.stub.c');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_a_r4ue.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5.a(com.tencent.mm.plugin.webview.stub.c)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_method_a_r4ue.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_init_p2bi = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_init_p2bi.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$5(com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_5_clz_init_p2bi.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_6_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$6');
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_6_clz_method_onDismiss_vpts = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_6_clz.onDismiss.overload('android.content.DialogInterface');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_6_clz_method_onDismiss_vpts.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$6.onDismiss(android.content.DialogInterface)');
        com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_6_clz_method_onDismiss_vpts.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_6_clz_init_pncj = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_6_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_6_clz_init_pncj.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$6(com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_6_clz_init_pncj.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_7_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$7');
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_7_clz_method_onTimerExpired_c9sl = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_7_clz.onTimerExpired.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_7_clz_method_onTimerExpired_c9sl.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$7.onTimerExpired()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_7_clz_method_onTimerExpired_c9sl.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_7_clz_init_bzvg = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_7_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_7_clz_init_bzvg.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$7(com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_7_clz_init_bzvg.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_8_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$8');
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_8_clz_method_onTimerExpired_yyjf = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_8_clz.onTimerExpired.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_8_clz_method_onTimerExpired_yyjf.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$8.onTimerExpired()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_8_clz_method_onTimerExpired_yyjf.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_8_clz_init_c3wi = com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_8_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI');
    com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_8_clz_init_c3wi.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI$8(com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubProxyUI_8_clz_init_c3wi.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_1_clz = Java.use('com.tencent.mm.ui.widget.MMWebView$1');
    var com_tencent_mm_ui_widget_MMWebView_1_clz_method_onTouch_vel4 = com_tencent_mm_ui_widget_MMWebView_1_clz.onTouch.overload('android.view.View', 'android.view.MotionEvent');
    com_tencent_mm_ui_widget_MMWebView_1_clz_method_onTouch_vel4.implementation = function(v0, v1) {
        printStacks('public final boolean com.tencent.mm.ui.widget.MMWebView$1.onTouch(android.view.View,android.view.MotionEvent)');
        return com_tencent_mm_ui_widget_MMWebView_1_clz_method_onTouch_vel4.call(this, v0, v1);
    };
    var com_tencent_mm_ui_widget_MMWebView_1_clz_init_zy0v = com_tencent_mm_ui_widget_MMWebView_1_clz.$init.overload('com.tencent.mm.ui.widget.MMWebView');
    com_tencent_mm_ui_widget_MMWebView_1_clz_init_zy0v.implementation = function(v0) {
        printStacks('com.tencent.mm.ui.widget.MMWebView$1(com.tencent.mm.ui.widget.MMWebView)');
        return com_tencent_mm_ui_widget_MMWebView_1_clz_init_zy0v.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.widget.MMWebViewWithJsApi');
    var com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_b_awxz = com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.widget.MMWebViewWithJsApi');
    com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_b_awxz.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.ui.tools.widget.MMWebViewWithJsApi.b(com.tencent.mm.plugin.webview.ui.tools.widget.MMWebViewWithJsApi)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_b_awxz.call(com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_getJsapi_ytmx = com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz.getJsapi.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_getJsapi_ytmx.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.jsapi.j com.tencent.mm.plugin.webview.ui.tools.widget.MMWebViewWithJsApi.getJsapi()');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_getJsapi_ytmx.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_loadUrl_5rlh = com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz.loadUrl.overload('java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_loadUrl_5rlh.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.widget.MMWebViewWithJsApi.loadUrl(java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_loadUrl_5rlh.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_onDetachedFromWindow_n646 = com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz.onDetachedFromWindow.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_onDetachedFromWindow_n646.implementation = function() {
        printStacks('protected void com.tencent.mm.plugin.webview.ui.tools.widget.MMWebViewWithJsApi.onDetachedFromWindow()');
        com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_onDetachedFromWindow_n646.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_setCleanOnDetached_9ut6 = com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz.setCleanOnDetached.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_setCleanOnDetached_9ut6.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.widget.MMWebViewWithJsApi.setCleanOnDetached(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_setCleanOnDetached_9ut6.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_gt_19h3 = com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz.gt.overload('android.content.Context');
    com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_gt_19h3.implementation = function(v0) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.widget.MMWebViewWithJsApi.gt(android.content.Context)');
        com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_gt_19h3.call(com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_loadDataWithBaseURL_joev = com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz.loadDataWithBaseURL.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_loadDataWithBaseURL_joev.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.widget.MMWebViewWithJsApi.loadDataWithBaseURL(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_loadDataWithBaseURL_joev.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_setWebViewClient_f9vo = com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz.setWebViewClient.overload('com.tencent.xweb.y');
    com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_setWebViewClient_f9vo.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.widget.MMWebViewWithJsApi.setWebViewClient(com.tencent.xweb.y)');
        com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_setWebViewClient_f9vo.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_loadData_lqag = com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz.loadData.overload('java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_loadData_lqag.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.widget.MMWebViewWithJsApi.loadData(java.lang.String,java.lang.String,java.lang.String)');
        com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_method_loadData_lqag.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_init_4v6h = com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int');
    com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_init_4v6h.implementation = function(v0, v1, v2) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.widget.MMWebViewWithJsApi(android.content.Context,android.util.AttributeSet,int)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_init_4v6h.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_init_pqda = com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz.$init.overload('android.content.Context', 'android.util.AttributeSet');
    com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_init_pqda.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.widget.MMWebViewWithJsApi(android.content.Context,android.util.AttributeSet)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_init_pqda.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_init_dik4 = com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz.$init.overload('android.content.Context');
    com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_init_dik4.implementation = function(v0) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.widget.MMWebViewWithJsApi(android.content.Context)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_clz_init_dik4.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_a_clz = Java.use('com.tencent.mm.ui.widget.MMWebView$a');
    var com_tencent_mm_ui_widget_MMWebView_a_clz_method_v_phql = com_tencent_mm_ui_widget_MMWebView_a_clz.v.overload('android.app.Activity', 'int');
    com_tencent_mm_ui_widget_MMWebView_a_clz_method_v_phql.implementation = function(v0, v1) {
        printStacks('public static com.tencent.mm.ui.widget.MMWebView com.tencent.mm.ui.widget.MMWebView$a.v(android.app.Activity,int)');
        return com_tencent_mm_ui_widget_MMWebView_a_clz_method_v_phql.call(com_tencent_mm_ui_widget_MMWebView_a_clz, v0, v1);
    };
    var com_tencent_mm_ui_widget_MMWebView_a_clz_method_a_2yih = com_tencent_mm_ui_widget_MMWebView_a_clz.a.overload('android.content.Context', 'android.view.View', 'int');
    com_tencent_mm_ui_widget_MMWebView_a_clz_method_a_2yih.implementation = function(v0, v1, v2) {
        printStacks('public static com.tencent.mm.ui.widget.MMWebView com.tencent.mm.ui.widget.MMWebView$a.a(android.content.Context,android.view.View,int)');
        return com_tencent_mm_ui_widget_MMWebView_a_clz_method_a_2yih.call(com_tencent_mm_ui_widget_MMWebView_a_clz, v0, v1, v2);
    };
    var com_tencent_mm_ui_widget_MMWebView_a_clz_method_jL_15bc = com_tencent_mm_ui_widget_MMWebView_a_clz.jL.overload('android.content.Context');
    com_tencent_mm_ui_widget_MMWebView_a_clz_method_jL_15bc.implementation = function(v0) {
        printStacks('public static com.tencent.mm.ui.widget.MMWebView com.tencent.mm.ui.widget.MMWebView$a.jL(android.content.Context)');
        return com_tencent_mm_ui_widget_MMWebView_a_clz_method_jL_15bc.call(com_tencent_mm_ui_widget_MMWebView_a_clz, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_a_clz_method_jM_euan = com_tencent_mm_ui_widget_MMWebView_a_clz.jM.overload('android.content.Context');
    com_tencent_mm_ui_widget_MMWebView_a_clz_method_jM_euan.implementation = function(v0) {
        printStacks('public static com.tencent.mm.ui.widget.MMWebView com.tencent.mm.ui.widget.MMWebView$a.jM(android.content.Context)');
        return com_tencent_mm_ui_widget_MMWebView_a_clz_method_jM_euan.call(com_tencent_mm_ui_widget_MMWebView_a_clz, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_b_clz = Java.use('com.tencent.mm.ui.widget.MMWebView$b');
    var com_tencent_mm_ui_widget_MMWebView_b_clz_init_y6yd = com_tencent_mm_ui_widget_MMWebView_b_clz.$init.overload('com.tencent.mm.ui.widget.MMWebView', 'byte');
    com_tencent_mm_ui_widget_MMWebView_b_clz_init_y6yd.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.ui.widget.MMWebView$b(com.tencent.mm.ui.widget.MMWebView,byte)');
        return com_tencent_mm_ui_widget_MMWebView_b_clz_init_y6yd.call(this, v0, v1);
    };
    var com_tencent_mm_ui_widget_MMWebView_b_clz_init_6tyz = com_tencent_mm_ui_widget_MMWebView_b_clz.$init.overload('com.tencent.mm.ui.widget.MMWebView');
    com_tencent_mm_ui_widget_MMWebView_b_clz_init_6tyz.implementation = function(v0) {
        printStacks('private com.tencent.mm.ui.widget.MMWebView$b(com.tencent.mm.ui.widget.MMWebView)');
        return com_tencent_mm_ui_widget_MMWebView_b_clz_init_6tyz.call(this, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_c_clz = Java.use('com.tencent.mm.ui.widget.MMWebView$c');
    var com_tencent_mm_ui_widget_MMWebView_c_clz_method_d_4bd6 = com_tencent_mm_ui_widget_MMWebView_c_clz.d.overload('com.tencent.xweb.WebView');
    com_tencent_mm_ui_widget_MMWebView_c_clz_method_d_4bd6.implementation = function(v0) {
        printStacks('public static void com.tencent.mm.ui.widget.MMWebView$c.d(com.tencent.xweb.WebView)');
        com_tencent_mm_ui_widget_MMWebView_c_clz_method_d_4bd6.call(com_tencent_mm_ui_widget_MMWebView_c_clz, v0);
    };
    var com_tencent_mm_ui_widget_MMWebView_c_clz_init_6qut = com_tencent_mm_ui_widget_MMWebView_c_clz.$init.overload('com.tencent.mm.ui.widget.MMWebView', 'byte');
    com_tencent_mm_ui_widget_MMWebView_c_clz_init_6qut.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.ui.widget.MMWebView$c(com.tencent.mm.ui.widget.MMWebView,byte)');
        return com_tencent_mm_ui_widget_MMWebView_c_clz_init_6qut.call(this, v0, v1);
    };
    var com_tencent_mm_ui_widget_MMWebView_c_clz_init_kiey = com_tencent_mm_ui_widget_MMWebView_c_clz.$init.overload('com.tencent.mm.ui.widget.MMWebView');
    com_tencent_mm_ui_widget_MMWebView_c_clz_init_kiey.implementation = function(v0) {
        printStacks('private com.tencent.mm.ui.widget.MMWebView$c(com.tencent.mm.ui.widget.MMWebView)');
        return com_tencent_mm_ui_widget_MMWebView_c_clz_init_kiey.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_1_clz = Java.use('com.tencent.mm.plugin.webview.model.WebViewJSSDKVideoItem$1');
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_1_clz_method_createFromParcel_edg5 = com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_1_clz.createFromParcel.overload('android.os.Parcel');
    com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_1_clz_method_createFromParcel_edg5.implementation = function(v0) {
        printStacks('public final java.lang.Object com.tencent.mm.plugin.webview.model.WebViewJSSDKVideoItem$1.createFromParcel(android.os.Parcel)');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_1_clz_method_createFromParcel_edg5.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_1_clz_method_newArray_5xu9 = com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_1_clz.newArray.overload('int');
    com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_1_clz_method_newArray_5xu9.implementation = function(v0) {
        printStacks('public final java.lang.Object[] com.tencent.mm.plugin.webview.model.WebViewJSSDKVideoItem$1.newArray(int)');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_1_clz_method_newArray_5xu9.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_1_clz_init_gx22 = com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_1_clz.$init.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_1_clz_init_gx22.implementation = function() {
        printStacks('com.tencent.mm.plugin.webview.model.WebViewJSSDKVideoItem$1()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKVideoItem_1_clz_init_gx22.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_a_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView$a');
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_a_clz_method_onSizeChanged_rmb7 = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_a_clz.onSizeChanged.overload('int', 'int', 'int', 'int');
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_a_clz_method_onSizeChanged_rmb7.implementation = function(v0, v1, v2, v3) {
        printStacks('protected final void com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView$a.onSizeChanged(int,int,int,int)');
        com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_a_clz_method_onSizeChanged_rmb7.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_a_clz_method_dispatchTouchEvent_k1zh = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_a_clz.dispatchTouchEvent.overload('android.view.MotionEvent');
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_a_clz_method_dispatchTouchEvent_k1zh.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView$a.dispatchTouchEvent(android.view.MotionEvent)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_a_clz_method_dispatchTouchEvent_k1zh.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_a_clz_init_2xug = com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_a_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView', 'android.content.Context');
    com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_a_clz_init_2xug.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView$a(com.tencent.mm.plugin.webview.ui.tools.widget.MailMMWebView,android.content.Context)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MailMMWebView_a_clz_init_2xug.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewStubCallbackWrapper$1');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz_method_createFromParcel_852p = com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz.createFromParcel.overload('android.os.Parcel');
    com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz_method_createFromParcel_852p.implementation = function(v0) {
        printStacks('public final java.lang.Object com.tencent.mm.plugin.webview.ui.tools.WebViewStubCallbackWrapper$1.createFromParcel(android.os.Parcel)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz_method_createFromParcel_852p.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz_method_newArray_mjmn = com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz.newArray.overload('int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz_method_newArray_mjmn.implementation = function(v0) {
        printStacks('public final java.lang.Object[] com.tencent.mm.plugin.webview.ui.tools.WebViewStubCallbackWrapper$1.newArray(int)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz_method_newArray_mjmn.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz_init_9z9c = com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz.$init.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz_init_9z9c.implementation = function() {
        printStacks('com.tencent.mm.plugin.webview.ui.tools.WebViewStubCallbackWrapper$1()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewStubCallbackWrapper_1_clz_init_9z9c.call(this);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz = Java.use('com.tencent.smtt.export.external.proxy.ProxyWebViewClient');
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onDetectedBlankScreen_lmao = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onDetectedBlankScreen.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'java.lang.String', 'int');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onDetectedBlankScreen_lmao.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onDetectedBlankScreen(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,java.lang.String,int)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onDetectedBlankScreen_lmao.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageStarted_s078 = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onPageStarted.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'int', 'int', 'java.lang.String', 'android.graphics.Bitmap');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageStarted_s078.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onPageStarted(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,int,int,java.lang.String,android.graphics.Bitmap)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageStarted_s078.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageStarted_jrxc = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onPageStarted.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'java.lang.String', 'android.graphics.Bitmap');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageStarted_jrxc.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onPageStarted(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,java.lang.String,android.graphics.Bitmap)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageStarted_jrxc.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageFinished_2s7h = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onPageFinished.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'int', 'int', 'java.lang.String');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageFinished_2s7h.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onPageFinished(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,int,int,java.lang.String)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageFinished_2s7h.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageCommitVisible_otrd = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onPageCommitVisible.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'java.lang.String');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageCommitVisible_otrd.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onPageCommitVisible(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,java.lang.String)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageCommitVisible_otrd.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onContentSizeChanged_9ipq = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onContentSizeChanged.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'int', 'int');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onContentSizeChanged_9ipq.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onContentSizeChanged(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,int,int)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onContentSizeChanged_9ipq.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_setWebViewClient_o90i = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.setWebViewClient.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewClient');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_setWebViewClient_o90i.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.setWebViewClient(com.tencent.smtt.export.external.interfaces.IX5WebViewClient)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_setWebViewClient_o90i.call(this, v0);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onScaleChanged_8t0k = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onScaleChanged.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'float', 'float');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onScaleChanged_8t0k.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onScaleChanged(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,float,float)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onScaleChanged_8t0k.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedSslError_l5l2 = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onReceivedSslError.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'com.tencent.smtt.export.external.interfaces.SslErrorHandler', 'com.tencent.smtt.export.external.interfaces.SslError');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedSslError_l5l2.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onReceivedSslError(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,com.tencent.smtt.export.external.interfaces.SslErrorHandler,com.tencent.smtt.export.external.interfaces.SslError)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedSslError_l5l2.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_doUpdateVisitedHistory_dihe = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.doUpdateVisitedHistory.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'java.lang.String', 'boolean');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_doUpdateVisitedHistory_dihe.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.doUpdateVisitedHistory(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,java.lang.String,boolean)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_doUpdateVisitedHistory_dihe.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onTooManyRedirects_sopn = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onTooManyRedirects.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'android.os.Message', 'android.os.Message');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onTooManyRedirects_sopn.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onTooManyRedirects(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,android.os.Message,android.os.Message)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onTooManyRedirects_sopn.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldInterceptRequest_lkps = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.shouldInterceptRequest.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'com.tencent.smtt.export.external.interfaces.WebResourceRequest', 'android.os.Bundle');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldInterceptRequest_lkps.implementation = function(v0, v1, v2) {
        printStacks('public com.tencent.smtt.export.external.interfaces.WebResourceResponse com.tencent.smtt.export.external.proxy.ProxyWebViewClient.shouldInterceptRequest(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,com.tencent.smtt.export.external.interfaces.WebResourceRequest,android.os.Bundle)');
        return com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldInterceptRequest_lkps.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onFormResubmission_e92j = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onFormResubmission.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'android.os.Message', 'android.os.Message');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onFormResubmission_e92j.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onFormResubmission(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,android.os.Message,android.os.Message)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onFormResubmission_e92j.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedHttpError_r9tu = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onReceivedHttpError.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'com.tencent.smtt.export.external.interfaces.WebResourceRequest', 'com.tencent.smtt.export.external.interfaces.WebResourceResponse');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedHttpError_r9tu.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onReceivedHttpError(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,com.tencent.smtt.export.external.interfaces.WebResourceRequest,com.tencent.smtt.export.external.interfaces.WebResourceResponse)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedHttpError_r9tu.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedError_sp4p = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onReceivedError.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'int', 'java.lang.String', 'java.lang.String');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedError_sp4p.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onReceivedError(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,int,java.lang.String,java.lang.String)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedError_sp4p.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldOverrideKeyEvent_4kcv = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.shouldOverrideKeyEvent.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'android.view.KeyEvent');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldOverrideKeyEvent_4kcv.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.export.external.proxy.ProxyWebViewClient.shouldOverrideKeyEvent(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,android.view.KeyEvent)');
        return com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldOverrideKeyEvent_4kcv.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedClientCertRequest_o1fh = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onReceivedClientCertRequest.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'com.tencent.smtt.export.external.interfaces.ClientCertRequest');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedClientCertRequest_o1fh.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onReceivedClientCertRequest(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,com.tencent.smtt.export.external.interfaces.ClientCertRequest)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedClientCertRequest_o1fh.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldOverrideUrlLoading_p8ob = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.shouldOverrideUrlLoading.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'java.lang.String');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldOverrideUrlLoading_p8ob.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.export.external.proxy.ProxyWebViewClient.shouldOverrideUrlLoading(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,java.lang.String)');
        return com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldOverrideUrlLoading_p8ob.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onLoadResource_ceye = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onLoadResource.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'java.lang.String');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onLoadResource_ceye.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onLoadResource(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,java.lang.String)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onLoadResource_ceye.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedError_tjcu = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onReceivedError.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'com.tencent.smtt.export.external.interfaces.WebResourceRequest', 'com.tencent.smtt.export.external.interfaces.WebResourceError');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedError_tjcu.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onReceivedError(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,com.tencent.smtt.export.external.interfaces.WebResourceRequest,com.tencent.smtt.export.external.interfaces.WebResourceError)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedError_tjcu.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onUnhandledKeyEvent_03ja = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onUnhandledKeyEvent.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'android.view.KeyEvent');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onUnhandledKeyEvent_03ja.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onUnhandledKeyEvent(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,android.view.KeyEvent)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onUnhandledKeyEvent_03ja.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldInterceptRequest_q9bv = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.shouldInterceptRequest.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'com.tencent.smtt.export.external.interfaces.WebResourceRequest');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldInterceptRequest_q9bv.implementation = function(v0, v1) {
        printStacks('public com.tencent.smtt.export.external.interfaces.WebResourceResponse com.tencent.smtt.export.external.proxy.ProxyWebViewClient.shouldInterceptRequest(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,com.tencent.smtt.export.external.interfaces.WebResourceRequest)');
        return com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldInterceptRequest_q9bv.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedLoginRequest_kiqf = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onReceivedLoginRequest.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedLoginRequest_kiqf.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onReceivedLoginRequest(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,java.lang.String,java.lang.String,java.lang.String)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedLoginRequest_kiqf.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_countPVContentCacheCallBack_fo1f = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.countPVContentCacheCallBack.overload('java.lang.String');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_countPVContentCacheCallBack_fo1f.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.countPVContentCacheCallBack(java.lang.String)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_countPVContentCacheCallBack_fo1f.call(this, v0);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageFinished_fj8q = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onPageFinished.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'java.lang.String');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageFinished_fj8q.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onPageFinished(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,java.lang.String)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onPageFinished_fj8q.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldInterceptRequest_b2cw = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.shouldInterceptRequest.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'java.lang.String');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldInterceptRequest_b2cw.implementation = function(v0, v1) {
        printStacks('public com.tencent.smtt.export.external.interfaces.WebResourceResponse com.tencent.smtt.export.external.proxy.ProxyWebViewClient.shouldInterceptRequest(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,java.lang.String)');
        return com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldInterceptRequest_b2cw.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldOverrideUrlLoading_ce78 = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.shouldOverrideUrlLoading.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'com.tencent.smtt.export.external.interfaces.WebResourceRequest');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldOverrideUrlLoading_ce78.implementation = function(v0, v1) {
        printStacks('public boolean com.tencent.smtt.export.external.proxy.ProxyWebViewClient.shouldOverrideUrlLoading(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,com.tencent.smtt.export.external.interfaces.WebResourceRequest)');
        return com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_shouldOverrideUrlLoading_ce78.call(this, v0, v1);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedHttpAuthRequest_w94s = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.onReceivedHttpAuthRequest.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'com.tencent.smtt.export.external.interfaces.HttpAuthHandler', 'java.lang.String', 'java.lang.String');
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedHttpAuthRequest_w94s.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.export.external.proxy.ProxyWebViewClient.onReceivedHttpAuthRequest(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,com.tencent.smtt.export.external.interfaces.HttpAuthHandler,java.lang.String,java.lang.String)');
        com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_method_onReceivedHttpAuthRequest_w94s.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_init_bgod = com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz.$init.overload();
    com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_init_bgod.implementation = function() {
        printStacks('public com.tencent.smtt.export.external.proxy.ProxyWebViewClient()');
        return com_tencent_smtt_export_external_proxy_ProxyWebViewClient_clz_init_bgod.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_1_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$1$1');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_1_clz_method_bu_68ah = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_1_clz.bu.overload('java.lang.Object');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_1_clz_method_bu_68ah.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubService$1$1$1.bu(java.lang.Object)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_1_clz_method_bu_68ah.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_1_clz_init_5r48 = com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_1_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$1');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_1_clz_init_5r48.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubService$1$1$1(com.tencent.mm.plugin.webview.stub.WebViewStubService$1$1)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_1_1_1_clz_init_5r48.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_modeltools_WebViewClipBoardHelper_clz = Java.use('com.tencent.mm.plugin.webview.modeltools.WebViewClipBoardHelper');
    var com_tencent_mm_plugin_webview_modeltools_WebViewClipBoardHelper_clz_method_onPrimaryClipChanged_qxbg = com_tencent_mm_plugin_webview_modeltools_WebViewClipBoardHelper_clz.onPrimaryClipChanged.overload();
    com_tencent_mm_plugin_webview_modeltools_WebViewClipBoardHelper_clz_method_onPrimaryClipChanged_qxbg.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.modeltools.WebViewClipBoardHelper.onPrimaryClipChanged()');
        com_tencent_mm_plugin_webview_modeltools_WebViewClipBoardHelper_clz_method_onPrimaryClipChanged_qxbg.call(this);
    };
    var com_tencent_mm_plugin_webview_modeltools_WebViewClipBoardHelper_clz_init_17r7 = com_tencent_mm_plugin_webview_modeltools_WebViewClipBoardHelper_clz.$init.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewUI');
    com_tencent_mm_plugin_webview_modeltools_WebViewClipBoardHelper_clz_init_17r7.implementation = function(v0) {
        printStacks('public com.tencent.mm.plugin.webview.modeltools.WebViewClipBoardHelper(com.tencent.mm.plugin.webview.ui.tools.WebViewUI)');
        return com_tencent_mm_plugin_webview_modeltools_WebViewClipBoardHelper_clz_init_17r7.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_a_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.widget.MMWebViewWithJsApi$a');
    var com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_a_clz_method_gu_ybil = com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_a_clz.gu.overload('android.content.Context');
    com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_a_clz_method_gu_ybil.implementation = function(v0) {
        printStacks('public static com.tencent.mm.plugin.webview.ui.tools.widget.MMWebViewWithJsApi com.tencent.mm.plugin.webview.ui.tools.widget.MMWebViewWithJsApi$a.gu(android.content.Context)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_a_clz_method_gu_ybil.call(com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_a_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_a_clz_method_gv_f2sl = com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_a_clz.gv.overload('android.content.Context');
    com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_a_clz_method_gv_f2sl.implementation = function(v0) {
        printStacks('public static com.tencent.mm.plugin.webview.ui.tools.widget.MMWebViewWithJsApi com.tencent.mm.plugin.webview.ui.tools.widget.MMWebViewWithJsApi$a.gv(android.content.Context)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_a_clz_method_gv_f2sl.call(com_tencent_mm_plugin_webview_ui_tools_widget_MMWebViewWithJsApi_a_clz, v0);
    };
    var com_tencent_mm_plugin_webview_PluginWebView_clz = Java.use('com.tencent.mm.plugin.webview.PluginWebView');
    var com_tencent_mm_plugin_webview_PluginWebView_clz_method_preInitWebViewSafeDuringMMKernelStage_fodd = com_tencent_mm_plugin_webview_PluginWebView_clz.preInitWebViewSafeDuringMMKernelStage.overload('com.tencent.xweb.WebView$PreInitCallback');
    com_tencent_mm_plugin_webview_PluginWebView_clz_method_preInitWebViewSafeDuringMMKernelStage_fodd.implementation = function(v0) {
        printStacks('private static void com.tencent.mm.plugin.webview.PluginWebView.preInitWebViewSafeDuringMMKernelStage(com.tencent.xweb.WebView$PreInitCallback)');
        com_tencent_mm_plugin_webview_PluginWebView_clz_method_preInitWebViewSafeDuringMMKernelStage_fodd.call(com_tencent_mm_plugin_webview_PluginWebView_clz, v0);
    };
    var com_tencent_mm_plugin_webview_PluginWebView_clz_method_abi64WebViewCompat_jx0j = com_tencent_mm_plugin_webview_PluginWebView_clz.abi64WebViewCompat.overload('com.tencent.mm.kernel.b.g');
    com_tencent_mm_plugin_webview_PluginWebView_clz_method_abi64WebViewCompat_jx0j.implementation = function(v0) {
        printStacks('private void com.tencent.mm.plugin.webview.PluginWebView.abi64WebViewCompat(com.tencent.mm.kernel.b.g)');
        com_tencent_mm_plugin_webview_PluginWebView_clz_method_abi64WebViewCompat_jx0j.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_PluginWebView_clz_method_name_e7ug = com_tencent_mm_plugin_webview_PluginWebView_clz.name.overload();
    com_tencent_mm_plugin_webview_PluginWebView_clz_method_name_e7ug.implementation = function() {
        printStacks('public java.lang.String com.tencent.mm.plugin.webview.PluginWebView.name()');
        return com_tencent_mm_plugin_webview_PluginWebView_clz_method_name_e7ug.call(this);
    };
    var com_tencent_mm_plugin_webview_PluginWebView_clz_method_execute_t0w1 = com_tencent_mm_plugin_webview_PluginWebView_clz.execute.overload('com.tencent.mm.kernel.b.g');
    com_tencent_mm_plugin_webview_PluginWebView_clz_method_execute_t0w1.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.PluginWebView.execute(com.tencent.mm.kernel.b.g)');
        com_tencent_mm_plugin_webview_PluginWebView_clz_method_execute_t0w1.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_PluginWebView_clz_method_configure_1zon = com_tencent_mm_plugin_webview_PluginWebView_clz.configure.overload('com.tencent.mm.kernel.b.g');
    com_tencent_mm_plugin_webview_PluginWebView_clz_method_configure_1zon.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.PluginWebView.configure(com.tencent.mm.kernel.b.g)');
        com_tencent_mm_plugin_webview_PluginWebView_clz_method_configure_1zon.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_PluginWebView_clz_init_ui23 = com_tencent_mm_plugin_webview_PluginWebView_clz.$init.overload();
    com_tencent_mm_plugin_webview_PluginWebView_clz_init_ui23.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.PluginWebView()');
        return com_tencent_mm_plugin_webview_PluginWebView_clz_init_ui23.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.game.GameBaseWebViewUI');
    var com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_method_onPause_m1jz = com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz.onPause.overload();
    com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_method_onPause_m1jz.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.game.GameBaseWebViewUI.onPause()');
        com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_method_onPause_m1jz.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_method_az_z619 = com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz.az.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_method_az_z619.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.game.GameBaseWebViewUI.az(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_method_az_z619.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_method_a_cghb = com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.game.GameBaseWebViewUI');
    com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_method_a_cghb.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.game.c com.tencent.mm.plugin.webview.ui.tools.game.GameBaseWebViewUI.a(com.tencent.mm.plugin.webview.ui.tools.game.GameBaseWebViewUI)');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_method_a_cghb.call(com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_method_onResume_kdof = com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz.onResume.overload();
    com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_method_onResume_kdof.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.game.GameBaseWebViewUI.onResume()');
        com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_method_onResume_kdof.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_method_onDestroy_jnmr = com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz.onDestroy.overload();
    com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_method_onDestroy_jnmr.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.game.GameBaseWebViewUI.onDestroy()');
        com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_method_onDestroy_jnmr.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_method_bjc_wwcr = com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz.bjc.overload();
    com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_method_bjc_wwcr.implementation = function() {
        printStacks('public final boolean com.tencent.mm.plugin.webview.ui.tools.game.GameBaseWebViewUI.bjc()');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_method_bjc_wwcr.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_method_onCreate_5jys = com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz.onCreate.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_method_onCreate_5jys.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.game.GameBaseWebViewUI.onCreate(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_method_onCreate_5jys.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_method_onWindowFocusChanged_vio7 = com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz.onWindowFocusChanged.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_method_onWindowFocusChanged_vio7.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.game.GameBaseWebViewUI.onWindowFocusChanged(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_method_onWindowFocusChanged_vio7.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_init_bhti = com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz.$init.overload();
    com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_init_bhti.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.game.GameBaseWebViewUI()');
        return com_tencent_mm_plugin_webview_ui_tools_game_GameBaseWebViewUI_clz_init_bhti.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubTempUI');
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_c_zjoe = com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz.c.overload('int', 'int', 'android.content.Intent');
    com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_c_zjoe.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubTempUI.c(int,int,android.content.Intent)');
        com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_c_zjoe.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_a_3n61 = com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz.a.overload('android.content.Context', 'com.tencent.mm.plugin.webview.stub.e', '[Ljava.lang.String;', 'int', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_a_3n61.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('public static boolean com.tencent.mm.plugin.webview.stub.WebViewStubTempUI.a(android.content.Context,com.tencent.mm.plugin.webview.stub.e,java.lang.String[],int,int)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_a_3n61.call(com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz, v0, v1, v2, v3, v4);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_a_qeig = com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz.a.overload('android.content.Context', 'java.lang.String', 'java.lang.String', 'android.content.Intent', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_a_qeig.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('public static void com.tencent.mm.plugin.webview.stub.WebViewStubTempUI.a(android.content.Context,java.lang.String,java.lang.String,android.content.Intent,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_a_qeig.call(com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz, v0, v1, v2, v3, v4);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_a_1hiu = com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz.a.overload('android.content.Context', 'com.tencent.mm.plugin.webview.stub.e', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'android.content.DialogInterface$OnClickListener', 'android.content.DialogInterface$OnClickListener');
    com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_a_1hiu.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7) {
        printStacks('public static void com.tencent.mm.plugin.webview.stub.WebViewStubTempUI.a(android.content.Context,com.tencent.mm.plugin.webview.stub.e,java.lang.String,java.lang.String,java.lang.String,java.lang.String,android.content.DialogInterface$OnClickListener,android.content.DialogInterface$OnClickListener)');
        com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_a_1hiu.call(com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz, v0, v1, v2, v3, v4, v5, v6, v7);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_getLayoutId_7cbj = com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz.getLayoutId.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_getLayoutId_7cbj.implementation = function() {
        printStacks('public int com.tencent.mm.plugin.webview.stub.WebViewStubTempUI.getLayoutId()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_getLayoutId_7cbj.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_onDestroy_xb29 = com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz.onDestroy.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_onDestroy_xb29.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.stub.WebViewStubTempUI.onDestroy()');
        com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_onDestroy_xb29.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_onRequestPermissionsResult_j89x = com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz.onRequestPermissionsResult.overload('int', '[Ljava.lang.String;', '[I');
    com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_onRequestPermissionsResult_j89x.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.mm.plugin.webview.stub.WebViewStubTempUI.onRequestPermissionsResult(int,java.lang.String[],int[])');
        com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_onRequestPermissionsResult_j89x.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_onCreate_gkkm = com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz.onCreate.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_onCreate_gkkm.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.stub.WebViewStubTempUI.onCreate(android.os.Bundle)');
        com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_onCreate_gkkm.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_onWindowFocusChanged_599u = com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz.onWindowFocusChanged.overload('boolean');
    com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_onWindowFocusChanged_599u.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.stub.WebViewStubTempUI.onWindowFocusChanged(boolean)');
        com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_method_onWindowFocusChanged_599u.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_init_4kgq = com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz.$init.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_init_4kgq.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.stub.WebViewStubTempUI()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_clz_init_4kgq.call(this);
    };
    var com_tencent_smtt_sdk_WebView_1_clz = Java.use('com.tencent.smtt.sdk.WebView$1');
    var com_tencent_smtt_sdk_WebView_1_clz_method_onScrollChanged_140d = com_tencent_smtt_sdk_WebView_1_clz.onScrollChanged.overload('int', 'int', 'int', 'int');
    com_tencent_smtt_sdk_WebView_1_clz_method_onScrollChanged_140d.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.sdk.WebView$1.onScrollChanged(int,int,int,int)');
        com_tencent_smtt_sdk_WebView_1_clz_method_onScrollChanged_140d.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebView_1_clz_method_invalidate_z23y = com_tencent_smtt_sdk_WebView_1_clz.invalidate.overload();
    com_tencent_smtt_sdk_WebView_1_clz_method_invalidate_z23y.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView$1.invalidate()');
        com_tencent_smtt_sdk_WebView_1_clz_method_invalidate_z23y.call(this);
    };
    var com_tencent_smtt_sdk_WebView_1_clz_init_yj7s = com_tencent_smtt_sdk_WebView_1_clz.$init.overload('com.tencent.smtt.sdk.WebView', 'com.tencent.smtt.export.external.extension.interfaces.IX5WebViewClientExtension');
    com_tencent_smtt_sdk_WebView_1_clz_init_yj7s.implementation = function(v0, v1) {
        printStacks('com.tencent.smtt.sdk.WebView$1(com.tencent.smtt.sdk.WebView,com.tencent.smtt.export.external.extension.interfaces.IX5WebViewClientExtension)');
        return com_tencent_smtt_sdk_WebView_1_clz_init_yj7s.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_2_clz = Java.use('com.tencent.smtt.sdk.WebView$2');
    var com_tencent_smtt_sdk_WebView_2_clz_method_run_scif = com_tencent_smtt_sdk_WebView_2_clz.run.overload();
    com_tencent_smtt_sdk_WebView_2_clz_method_run_scif.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView$2.run()');
        com_tencent_smtt_sdk_WebView_2_clz_method_run_scif.call(this);
    };
    var com_tencent_smtt_sdk_WebView_2_clz_init_e8xs = com_tencent_smtt_sdk_WebView_2_clz.$init.overload('com.tencent.smtt.sdk.WebView', 'android.content.Context');
    com_tencent_smtt_sdk_WebView_2_clz_init_e8xs.implementation = function(v0, v1) {
        printStacks('com.tencent.smtt.sdk.WebView$2(com.tencent.smtt.sdk.WebView,android.content.Context)');
        return com_tencent_smtt_sdk_WebView_2_clz_init_e8xs.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_3_clz = Java.use('com.tencent.smtt.sdk.WebView$3');
    var com_tencent_smtt_sdk_WebView_3_clz_method_run_oa9e = com_tencent_smtt_sdk_WebView_3_clz.run.overload();
    com_tencent_smtt_sdk_WebView_3_clz_method_run_oa9e.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView$3.run()');
        com_tencent_smtt_sdk_WebView_3_clz_method_run_oa9e.call(this);
    };
    var com_tencent_smtt_sdk_WebView_3_clz_init_p4ls = com_tencent_smtt_sdk_WebView_3_clz.$init.overload('com.tencent.smtt.sdk.WebView', 'java.lang.String');
    com_tencent_smtt_sdk_WebView_3_clz_init_p4ls.implementation = function(v0, v1) {
        printStacks('com.tencent.smtt.sdk.WebView$3(com.tencent.smtt.sdk.WebView,java.lang.String)');
        return com_tencent_smtt_sdk_WebView_3_clz_init_p4ls.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_4_clz = Java.use('com.tencent.smtt.sdk.WebView$4');
    var com_tencent_smtt_sdk_WebView_4_clz_method_onFindResultReceived_sjub = com_tencent_smtt_sdk_WebView_4_clz.onFindResultReceived.overload('int', 'int', 'boolean');
    com_tencent_smtt_sdk_WebView_4_clz_method_onFindResultReceived_sjub.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.WebView$4.onFindResultReceived(int,int,boolean)');
        com_tencent_smtt_sdk_WebView_4_clz_method_onFindResultReceived_sjub.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebView_4_clz_init_rr5d = com_tencent_smtt_sdk_WebView_4_clz.$init.overload('com.tencent.smtt.sdk.WebView', 'com.tencent.smtt.export.external.interfaces.IX5WebViewBase$FindListener');
    com_tencent_smtt_sdk_WebView_4_clz_init_rr5d.implementation = function(v0, v1) {
        printStacks('com.tencent.smtt.sdk.WebView$4(com.tencent.smtt.sdk.WebView,com.tencent.smtt.export.external.interfaces.IX5WebViewBase$FindListener)');
        return com_tencent_smtt_sdk_WebView_4_clz_init_rr5d.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_5_clz = Java.use('com.tencent.smtt.sdk.WebView$5');
    var com_tencent_smtt_sdk_WebView_5_clz_method_onDownloadStart_7isr = com_tencent_smtt_sdk_WebView_5_clz.onDownloadStart.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'long');
    com_tencent_smtt_sdk_WebView_5_clz_method_onDownloadStart_7isr.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('public void com.tencent.smtt.sdk.WebView$5.onDownloadStart(java.lang.String,java.lang.String,java.lang.String,java.lang.String,long)');
        com_tencent_smtt_sdk_WebView_5_clz_method_onDownloadStart_7isr.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_smtt_sdk_WebView_5_clz_init_z0rm = com_tencent_smtt_sdk_WebView_5_clz.$init.overload('com.tencent.smtt.sdk.WebView', 'com.tencent.smtt.sdk.DownloadListener');
    com_tencent_smtt_sdk_WebView_5_clz_init_z0rm.implementation = function(v0, v1) {
        printStacks('com.tencent.smtt.sdk.WebView$5(com.tencent.smtt.sdk.WebView,com.tencent.smtt.sdk.DownloadListener)');
        return com_tencent_smtt_sdk_WebView_5_clz_init_z0rm.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_6_clz = Java.use('com.tencent.smtt.sdk.WebView$6');
    var com_tencent_smtt_sdk_WebView_6_clz_method_onNewPicture_orw9 = com_tencent_smtt_sdk_WebView_6_clz.onNewPicture.overload('android.webkit.WebView', 'android.graphics.Picture');
    com_tencent_smtt_sdk_WebView_6_clz_method_onNewPicture_orw9.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebView$6.onNewPicture(android.webkit.WebView,android.graphics.Picture)');
        com_tencent_smtt_sdk_WebView_6_clz_method_onNewPicture_orw9.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_6_clz_init_8ddm = com_tencent_smtt_sdk_WebView_6_clz.$init.overload('com.tencent.smtt.sdk.WebView', 'com.tencent.smtt.sdk.WebView$PictureListener');
    com_tencent_smtt_sdk_WebView_6_clz_init_8ddm.implementation = function(v0, v1) {
        printStacks('com.tencent.smtt.sdk.WebView$6(com.tencent.smtt.sdk.WebView,com.tencent.smtt.sdk.WebView$PictureListener)');
        return com_tencent_smtt_sdk_WebView_6_clz_init_8ddm.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_7_clz = Java.use('com.tencent.smtt.sdk.WebView$7');
    var com_tencent_smtt_sdk_WebView_7_clz_method_onNewPictureIfHaveContent_x8fa = com_tencent_smtt_sdk_WebView_7_clz.onNewPictureIfHaveContent.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'android.graphics.Picture');
    com_tencent_smtt_sdk_WebView_7_clz_method_onNewPictureIfHaveContent_x8fa.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebView$7.onNewPictureIfHaveContent(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,android.graphics.Picture)');
        com_tencent_smtt_sdk_WebView_7_clz_method_onNewPictureIfHaveContent_x8fa.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_7_clz_method_onNewPicture_93nv = com_tencent_smtt_sdk_WebView_7_clz.onNewPicture.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase', 'android.graphics.Picture', 'boolean');
    com_tencent_smtt_sdk_WebView_7_clz_method_onNewPicture_93nv.implementation = function(v0, v1, v2) {
        printStacks('public void com.tencent.smtt.sdk.WebView$7.onNewPicture(com.tencent.smtt.export.external.interfaces.IX5WebViewBase,android.graphics.Picture,boolean)');
        com_tencent_smtt_sdk_WebView_7_clz_method_onNewPicture_93nv.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebView_7_clz_init_cr5x = com_tencent_smtt_sdk_WebView_7_clz.$init.overload('com.tencent.smtt.sdk.WebView', 'com.tencent.smtt.sdk.WebView$PictureListener');
    com_tencent_smtt_sdk_WebView_7_clz_init_cr5x.implementation = function(v0, v1) {
        printStacks('com.tencent.smtt.sdk.WebView$7(com.tencent.smtt.sdk.WebView,com.tencent.smtt.sdk.WebView$PictureListener)');
        return com_tencent_smtt_sdk_WebView_7_clz_init_cr5x.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_8_clz = Java.use('com.tencent.smtt.sdk.WebView$8');
    var com_tencent_smtt_sdk_WebView_8_clz_method_run_aokl = com_tencent_smtt_sdk_WebView_8_clz.run.overload();
    com_tencent_smtt_sdk_WebView_8_clz_method_run_aokl.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView$8.run()');
        com_tencent_smtt_sdk_WebView_8_clz_method_run_aokl.call(this);
    };
    var com_tencent_smtt_sdk_WebView_8_clz_init_ryh2 = com_tencent_smtt_sdk_WebView_8_clz.$init.overload('com.tencent.smtt.sdk.WebView', 'java.lang.String');
    com_tencent_smtt_sdk_WebView_8_clz_init_ryh2.implementation = function(v0, v1) {
        printStacks('com.tencent.smtt.sdk.WebView$8(com.tencent.smtt.sdk.WebView,java.lang.String)');
        return com_tencent_smtt_sdk_WebView_8_clz_init_ryh2.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_9_clz = Java.use('com.tencent.smtt.sdk.WebView$9');
    var com_tencent_smtt_sdk_WebView_9_clz_method_run_y8qd = com_tencent_smtt_sdk_WebView_9_clz.run.overload();
    com_tencent_smtt_sdk_WebView_9_clz_method_run_y8qd.implementation = function() {
        printStacks('public final void com.tencent.smtt.sdk.WebView$9.run()');
        com_tencent_smtt_sdk_WebView_9_clz_method_run_y8qd.call(this);
    };
    var com_tencent_smtt_sdk_WebView_9_clz_init_15xt = com_tencent_smtt_sdk_WebView_9_clz.$init.overload();
    com_tencent_smtt_sdk_WebView_9_clz_init_15xt.implementation = function() {
        printStacks('com.tencent.smtt.sdk.WebView$9()');
        return com_tencent_smtt_sdk_WebView_9_clz_init_15xt.call(this);
    };
    var com_tencent_smtt_sdk_WebView_a_clz = Java.use('com.tencent.smtt.sdk.WebView$a');
    var com_tencent_smtt_sdk_WebView_a_clz_method_onReceive_u1ba = com_tencent_smtt_sdk_WebView_a_clz.onReceive.overload('android.content.Context', 'android.content.Intent');
    com_tencent_smtt_sdk_WebView_a_clz_method_onReceive_u1ba.implementation = function(v0, v1) {
        printStacks('public void com.tencent.smtt.sdk.WebView$a.onReceive(android.content.Context,android.content.Intent)');
        com_tencent_smtt_sdk_WebView_a_clz_method_onReceive_u1ba.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_a_clz_init_d1hf = com_tencent_smtt_sdk_WebView_a_clz.$init.overload('com.tencent.smtt.sdk.WebView$1');
    com_tencent_smtt_sdk_WebView_a_clz_init_d1hf.implementation = function(v0) {
        printStacks('com.tencent.smtt.sdk.WebView$a(com.tencent.smtt.sdk.WebView$1)');
        return com_tencent_smtt_sdk_WebView_a_clz_init_d1hf.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_a_clz_init_h93o = com_tencent_smtt_sdk_WebView_a_clz.$init.overload();
    com_tencent_smtt_sdk_WebView_a_clz_init_h93o.implementation = function() {
        printStacks('private com.tencent.smtt.sdk.WebView$a()');
        return com_tencent_smtt_sdk_WebView_a_clz_init_h93o.call(this);
    };
    var com_tencent_smtt_sdk_WebView_b_clz = Java.use('com.tencent.smtt.sdk.WebView$b');
    var com_tencent_smtt_sdk_WebView_b_clz_method_c_z7qb = com_tencent_smtt_sdk_WebView_b_clz.c.overload('android.view.MotionEvent');
    com_tencent_smtt_sdk_WebView_b_clz_method_c_z7qb.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView$b.c(android.view.MotionEvent)');
        return com_tencent_smtt_sdk_WebView_b_clz_method_c_z7qb.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_setOverScrollMode_5yma = com_tencent_smtt_sdk_WebView_b_clz.setOverScrollMode.overload('int');
    com_tencent_smtt_sdk_WebView_b_clz_method_setOverScrollMode_5yma.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.sdk.WebView$b.setOverScrollMode(int)');
        com_tencent_smtt_sdk_WebView_b_clz_method_setOverScrollMode_5yma.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_a_ba3w = com_tencent_smtt_sdk_WebView_b_clz.a.overload('android.view.MotionEvent');
    com_tencent_smtt_sdk_WebView_b_clz_method_a_ba3w.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView$b.a(android.view.MotionEvent)');
        return com_tencent_smtt_sdk_WebView_b_clz_method_a_ba3w.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_onOverScrolled_p00x = com_tencent_smtt_sdk_WebView_b_clz.onOverScrolled.overload('int', 'int', 'boolean', 'boolean');
    com_tencent_smtt_sdk_WebView_b_clz_method_onOverScrolled_p00x.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.sdk.WebView$b.onOverScrolled(int,int,boolean,boolean)');
        com_tencent_smtt_sdk_WebView_b_clz_method_onOverScrolled_p00x.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_onTouchEvent_2vsm = com_tencent_smtt_sdk_WebView_b_clz.onTouchEvent.overload('android.view.MotionEvent');
    com_tencent_smtt_sdk_WebView_b_clz_method_onTouchEvent_2vsm.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView$b.onTouchEvent(android.view.MotionEvent)');
        return com_tencent_smtt_sdk_WebView_b_clz_method_onTouchEvent_2vsm.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_b_lhqr = com_tencent_smtt_sdk_WebView_b_clz.b.overload('android.view.MotionEvent');
    com_tencent_smtt_sdk_WebView_b_clz_method_b_lhqr.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView$b.b(android.view.MotionEvent)');
        return com_tencent_smtt_sdk_WebView_b_clz_method_b_lhqr.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_a_fmqg = com_tencent_smtt_sdk_WebView_b_clz.a.overload('int', 'int', 'int', 'int');
    com_tencent_smtt_sdk_WebView_b_clz_method_a_fmqg.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.sdk.WebView$b.a(int,int,int,int)');
        com_tencent_smtt_sdk_WebView_b_clz_method_a_fmqg.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_computeScroll_xw0o = com_tencent_smtt_sdk_WebView_b_clz.computeScroll.overload();
    com_tencent_smtt_sdk_WebView_b_clz_method_computeScroll_xw0o.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView$b.computeScroll()');
        com_tencent_smtt_sdk_WebView_b_clz_method_computeScroll_xw0o.call(this);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_dispatchDraw_pyaz = com_tencent_smtt_sdk_WebView_b_clz.dispatchDraw.overload('android.graphics.Canvas');
    com_tencent_smtt_sdk_WebView_b_clz_method_dispatchDraw_pyaz.implementation = function(v0) {
        printStacks('protected void com.tencent.smtt.sdk.WebView$b.dispatchDraw(android.graphics.Canvas)');
        com_tencent_smtt_sdk_WebView_b_clz_method_dispatchDraw_pyaz.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_onScrollChanged_fvvs = com_tencent_smtt_sdk_WebView_b_clz.onScrollChanged.overload('int', 'int', 'int', 'int');
    com_tencent_smtt_sdk_WebView_b_clz_method_onScrollChanged_fvvs.implementation = function(v0, v1, v2, v3) {
        printStacks('protected void com.tencent.smtt.sdk.WebView$b.onScrollChanged(int,int,int,int)');
        com_tencent_smtt_sdk_WebView_b_clz_method_onScrollChanged_fvvs.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_a_cenu = com_tencent_smtt_sdk_WebView_b_clz.a.overload();
    com_tencent_smtt_sdk_WebView_b_clz_method_a_cenu.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView$b.a()');
        com_tencent_smtt_sdk_WebView_b_clz_method_a_cenu.call(this);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_onInterceptTouchEvent_cxri = com_tencent_smtt_sdk_WebView_b_clz.onInterceptTouchEvent.overload('android.view.MotionEvent');
    com_tencent_smtt_sdk_WebView_b_clz_method_onInterceptTouchEvent_cxri.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView$b.onInterceptTouchEvent(android.view.MotionEvent)');
        return com_tencent_smtt_sdk_WebView_b_clz_method_onInterceptTouchEvent_cxri.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_invalidate_7f5t = com_tencent_smtt_sdk_WebView_b_clz.invalidate.overload();
    com_tencent_smtt_sdk_WebView_b_clz_method_invalidate_7f5t.implementation = function() {
        printStacks('public void com.tencent.smtt.sdk.WebView$b.invalidate()');
        com_tencent_smtt_sdk_WebView_b_clz_method_invalidate_7f5t.call(this);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_overScrollBy_tzm8 = com_tencent_smtt_sdk_WebView_b_clz.overScrollBy.overload('int', 'int', 'int', 'int', 'int', 'int', 'int', 'int', 'boolean');
    com_tencent_smtt_sdk_WebView_b_clz_method_overScrollBy_tzm8.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7, v8) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView$b.overScrollBy(int,int,int,int,int,int,int,int,boolean)');
        return com_tencent_smtt_sdk_WebView_b_clz_method_overScrollBy_tzm8.call(this, v0, v1, v2, v3, v4, v5, v6, v7, v8);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_dispatchTouchEvent_362c = com_tencent_smtt_sdk_WebView_b_clz.dispatchTouchEvent.overload('android.view.MotionEvent');
    com_tencent_smtt_sdk_WebView_b_clz_method_dispatchTouchEvent_362c.implementation = function(v0) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView$b.dispatchTouchEvent(android.view.MotionEvent)');
        return com_tencent_smtt_sdk_WebView_b_clz_method_dispatchTouchEvent_362c.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_a_i2sl = com_tencent_smtt_sdk_WebView_b_clz.a.overload('int', 'int', 'boolean', 'boolean');
    com_tencent_smtt_sdk_WebView_b_clz_method_a_i2sl.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.smtt.sdk.WebView$b.a(int,int,boolean,boolean)');
        com_tencent_smtt_sdk_WebView_b_clz_method_a_i2sl.call(this, v0, v1, v2, v3);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_getSettings_oe9s = com_tencent_smtt_sdk_WebView_b_clz.getSettings.overload();
    com_tencent_smtt_sdk_WebView_b_clz_method_getSettings_oe9s.implementation = function() {
        printStacks('public android.webkit.WebSettings com.tencent.smtt.sdk.WebView$b.getSettings()');
        return com_tencent_smtt_sdk_WebView_b_clz_method_getSettings_oe9s.call(this);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_method_a_7l0l = com_tencent_smtt_sdk_WebView_b_clz.a.overload('int', 'int', 'int', 'int', 'int', 'int', 'int', 'int', 'boolean');
    com_tencent_smtt_sdk_WebView_b_clz_method_a_7l0l.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7, v8) {
        printStacks('public boolean com.tencent.smtt.sdk.WebView$b.a(int,int,int,int,int,int,int,int,boolean)');
        return com_tencent_smtt_sdk_WebView_b_clz_method_a_7l0l.call(this, v0, v1, v2, v3, v4, v5, v6, v7, v8);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_init_x9lf = com_tencent_smtt_sdk_WebView_b_clz.$init.overload('com.tencent.smtt.sdk.WebView', 'android.content.Context', 'android.util.AttributeSet');
    com_tencent_smtt_sdk_WebView_b_clz_init_x9lf.implementation = function(v0, v1, v2) {
        printStacks('public com.tencent.smtt.sdk.WebView$b(com.tencent.smtt.sdk.WebView,android.content.Context,android.util.AttributeSet)');
        return com_tencent_smtt_sdk_WebView_b_clz_init_x9lf.call(this, v0, v1, v2);
    };
    var com_tencent_smtt_sdk_WebView_b_clz_init_0mlr = com_tencent_smtt_sdk_WebView_b_clz.$init.overload('com.tencent.smtt.sdk.WebView', 'android.content.Context');
    com_tencent_smtt_sdk_WebView_b_clz_init_0mlr.implementation = function(v0, v1) {
        printStacks('public com.tencent.smtt.sdk.WebView$b(com.tencent.smtt.sdk.WebView,android.content.Context)');
        return com_tencent_smtt_sdk_WebView_b_clz_init_0mlr.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_v27m = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.a.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_v27m.implementation = function(v0, v1) {
        printStacks('static int com.tencent.mm.plugin.webview.stub.WebViewStubService.a(com.tencent.mm.plugin.webview.stub.WebViewStubService,int)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_v27m.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_d_0ml8 = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.d.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_d_0ml8.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.stub.WebViewStubService.d(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_d_0ml8.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_k_xz57 = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.k.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_k_xz57.implementation = function(v0) {
        printStacks('static com.tencent.mm.sdk.b.c com.tencent.mm.plugin.webview.stub.WebViewStubService.k(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_k_xz57.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_e_9zur = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.e.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_e_9zur.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.stub.WebViewStubService.e(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_e_9zur.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onSceneEnd_i2pd = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.onSceneEnd.overload('int', 'int', 'java.lang.String', 'com.tencent.mm.ak.m');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onSceneEnd_i2pd.implementation = function(v0, v1, v2, v3) {
        printStacks('public void com.tencent.mm.plugin.webview.stub.WebViewStubService.onSceneEnd(int,int,java.lang.String,com.tencent.mm.ak.m)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onSceneEnd_i2pd.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_c_8jsp = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.c.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_c_8jsp.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.stub.WebViewStubService.c(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_c_8jsp.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_j_up7s = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.j.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_j_up7s.implementation = function(v0) {
        printStacks('static com.tencent.mm.sdk.b.c com.tencent.mm.plugin.webview.stub.WebViewStubService.j(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_j_up7s.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_i_uwn8 = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.i.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_i_uwn8.implementation = function(v0) {
        printStacks('static java.util.Map com.tencent.mm.plugin.webview.stub.WebViewStubService.i(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_i_uwn8.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onDestroy_smno = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.onDestroy.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onDestroy_smno.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.stub.WebViewStubService.onDestroy()');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onDestroy_smno.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onUnbind_jwgz = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.onUnbind.overload('android.content.Intent');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onUnbind_jwgz.implementation = function(v0) {
        printStacks('public boolean com.tencent.mm.plugin.webview.stub.WebViewStubService.onUnbind(android.content.Intent)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onUnbind_jwgz.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_qoqs = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.a.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_qoqs.implementation = function(v0, v1) {
        printStacks('static boolean com.tencent.mm.plugin.webview.stub.WebViewStubService.a(com.tencent.mm.plugin.webview.stub.WebViewStubService,android.os.Bundle)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_qoqs.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_9nnb = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.a.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService', 'int', 'android.os.Bundle', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_9nnb.implementation = function(v0, v1, v2, v3) {
        printStacks('static void com.tencent.mm.plugin.webview.stub.WebViewStubService.a(com.tencent.mm.plugin.webview.stub.WebViewStubService,int,android.os.Bundle,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_9nnb.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_f_vn0j = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.f.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_f_vn0j.implementation = function(v0) {
        printStacks('static java.util.List com.tencent.mm.plugin.webview.stub.WebViewStubService.f(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_f_vn0j.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_h_b6ce = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.h.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_h_b6ce.implementation = function(v0) {
        printStacks('static android.util.SparseArray com.tencent.mm.plugin.webview.stub.WebViewStubService.h(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_h_b6ce.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_b_hk3d = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.b.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_b_hk3d.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.stub.WebViewStubService.b(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_b_hk3d.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_7edw = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.a.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'com.tencent.mm.protocal.JsapiPermissionWrapper', 'android.os.Bundle', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_7edw.implementation = function(v0, v1, v2, v3, v4, v5, v6) {
        printStacks('static boolean com.tencent.mm.plugin.webview.stub.WebViewStubService.a(com.tencent.mm.plugin.webview.stub.WebViewStubService,java.lang.String,java.lang.String,java.lang.String,com.tencent.mm.protocal.JsapiPermissionWrapper,android.os.Bundle,int)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_7edw.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0, v1, v2, v3, v4, v5, v6);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_arF_pj3q = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.arF.overload('java.lang.String');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_arF_pj3q.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.stub.WebViewStubService.arF(java.lang.String)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_arF_pj3q.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_g_4qez = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.g.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_g_4qez.implementation = function(v0) {
        printStacks('static com.tencent.mm.sdk.platformtools.ap com.tencent.mm.plugin.webview.stub.WebViewStubService.g(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_g_4qez.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_50jj = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.a.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_50jj.implementation = function(v0) {
        printStacks('static java.util.Set com.tencent.mm.plugin.webview.stub.WebViewStubService.a(com.tencent.mm.plugin.webview.stub.WebViewStubService)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_50jj.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_aw_38uc = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.aw.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_aw_38uc.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.plugin.webview.stub.WebViewStubService.aw(android.os.Bundle)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_aw_38uc.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onCreate_q29k = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.onCreate.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onCreate_q29k.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.stub.WebViewStubService.onCreate()');
        com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onCreate_q29k.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onBind_7tvg = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.onBind.overload('android.content.Intent');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onBind_7tvg.implementation = function(v0) {
        printStacks('public android.os.IBinder com.tencent.mm.plugin.webview.stub.WebViewStubService.onBind(android.content.Intent)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_onBind_7tvg.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_teto = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.a.overload('com.tencent.mm.plugin.webview.stub.WebViewStubService', 'java.util.Map');
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_teto.implementation = function(v0, v1) {
        printStacks('static java.util.Map com.tencent.mm.plugin.webview.stub.WebViewStubService.a(com.tencent.mm.plugin.webview.stub.WebViewStubService,java.util.Map)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_method_a_teto.call(com_tencent_mm_plugin_webview_stub_WebViewStubService_clz, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_init_ivpc = com_tencent_mm_plugin_webview_stub_WebViewStubService_clz.$init.overload();
    com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_init_ivpc.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.stub.WebViewStubService()');
        return com_tencent_mm_plugin_webview_stub_WebViewStubService_clz_init_ivpc.call(this);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_1_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubTempUI$1');
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_1_clz_method_onReceiveResult_1og2 = com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_1_clz.onReceiveResult.overload('int', 'android.os.Bundle');
    com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_1_clz_method_onReceiveResult_1og2.implementation = function(v0, v1) {
        printStacks('protected final void com.tencent.mm.plugin.webview.stub.WebViewStubTempUI$1.onReceiveResult(int,android.os.Bundle)');
        com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_1_clz_method_onReceiveResult_1og2.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_1_clz_init_regr = com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_1_clz.$init.overload('android.os.Handler', 'android.content.DialogInterface$OnClickListener', 'android.content.DialogInterface$OnClickListener');
    com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_1_clz_init_regr.implementation = function(v0, v1, v2) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubTempUI$1(android.os.Handler,android.content.DialogInterface$OnClickListener,android.content.DialogInterface$OnClickListener)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_1_clz_init_regr.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_2_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubTempUI$2');
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_2_clz_method_onClick_bc8e = com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_2_clz.onClick.overload('android.content.DialogInterface', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_2_clz_method_onClick_bc8e.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubTempUI$2.onClick(android.content.DialogInterface,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_2_clz_method_onClick_bc8e.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_2_clz_init_kw7b = com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_2_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubTempUI', 'android.os.ResultReceiver');
    com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_2_clz_init_kw7b.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubTempUI$2(com.tencent.mm.plugin.webview.stub.WebViewStubTempUI,android.os.ResultReceiver)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_2_clz_init_kw7b.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_3_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubTempUI$3');
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_3_clz_method_onClick_zclp = com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_3_clz.onClick.overload('android.content.DialogInterface', 'int');
    com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_3_clz_method_onClick_zclp.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubTempUI$3.onClick(android.content.DialogInterface,int)');
        com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_3_clz_method_onClick_zclp.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_3_clz_init_z613 = com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_3_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubTempUI', 'android.os.ResultReceiver');
    com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_3_clz_init_z613.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubTempUI$3(com.tencent.mm.plugin.webview.stub.WebViewStubTempUI,android.os.ResultReceiver)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_3_clz_init_z613.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_4_clz = Java.use('com.tencent.mm.plugin.webview.stub.WebViewStubTempUI$4');
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_4_clz_method_onCancel_5kqj = com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_4_clz.onCancel.overload('android.content.DialogInterface');
    com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_4_clz_method_onCancel_5kqj.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.stub.WebViewStubTempUI$4.onCancel(android.content.DialogInterface)');
        com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_4_clz_method_onCancel_5kqj.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_4_clz_init_agr9 = com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_4_clz.$init.overload('com.tencent.mm.plugin.webview.stub.WebViewStubTempUI');
    com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_4_clz_init_agr9.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.stub.WebViewStubTempUI$4(com.tencent.mm.plugin.webview.stub.WebViewStubTempUI)');
        return com_tencent_mm_plugin_webview_stub_WebViewStubTempUI_4_clz_init_agr9.call(this, v0);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz = Java.use('com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult');
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setData_73tl = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.setData.overload('java.lang.Object');
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setData_73tl.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.setData(java.lang.Object)');
        com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setData_73tl.call(this, v0);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setType_k9yn = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.setType.overload('int');
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setType_k9yn.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.setType(int)');
        com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setType_k9yn.call(this, v0);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setHitTestPoint_dkxg = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.setHitTestPoint.overload('android.graphics.Point');
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setHitTestPoint_dkxg.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.setHitTestPoint(android.graphics.Point)');
        com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setHitTestPoint_dkxg.call(this, v0);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getBitmapData_hvu8 = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.getBitmapData.overload();
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getBitmapData_hvu8.implementation = function() {
        printStacks('protected android.graphics.Bitmap com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.getBitmapData()');
        return com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getBitmapData_hvu8.call(this);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_isFromSinglePress_qfkn = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.isFromSinglePress.overload();
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_isFromSinglePress_qfkn.implementation = function() {
        printStacks('public boolean com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.isFromSinglePress()');
        return com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_isFromSinglePress_qfkn.call(this);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getDeepImageData_9xj2 = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.getDeepImageData.overload();
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getDeepImageData_9xj2.implementation = function() {
        printStacks('public com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult$DeepImageData com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.getDeepImageData()');
        return com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getDeepImageData_9xj2.call(this);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getExtra_fg8i = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.getExtra.overload();
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getExtra_fg8i.implementation = function() {
        printStacks('public java.lang.String com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.getExtra()');
        return com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getExtra_fg8i.call(this);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getHitTestPoint_mbcp = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.getHitTestPoint.overload();
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getHitTestPoint_mbcp.implementation = function() {
        printStacks('public android.graphics.Point com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.getHitTestPoint()');
        return com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getHitTestPoint_mbcp.call(this);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getData_7l25 = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.getData.overload();
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getData_7l25.implementation = function() {
        printStacks('public java.lang.Object com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.getData()');
        return com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getData_7l25.call(this);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setDeepImageData_dr89 = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.setDeepImageData.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult$DeepImageData');
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setDeepImageData_dr89.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.setDeepImageData(com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult$DeepImageData)');
        com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setDeepImageData_dr89.call(this, v0);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setIsFromSinglePress_t4ru = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.setIsFromSinglePress.overload('boolean');
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setIsFromSinglePress_t4ru.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.setIsFromSinglePress(boolean)');
        com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setIsFromSinglePress_t4ru.call(this, v0);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getType_8z85 = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.getType.overload();
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getType_8z85.implementation = function() {
        printStacks('public int com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.getType()');
        return com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_getType_8z85.call(this);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setExtra_ezp2 = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.setExtra.overload('java.lang.String');
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setExtra_ezp2.implementation = function(v0) {
        printStacks('public void com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult.setExtra(java.lang.String)');
        com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_method_setExtra_ezp2.call(this, v0);
    };
    var com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_init_4ue4 = com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz.$init.overload();
    com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_init_4ue4.implementation = function() {
        printStacks('public com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult()');
        return com_tencent_smtt_export_external_interfaces_IX5WebViewBase_HitTestResult_clz_init_4ue4.call(this);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz = Java.use('com.tencent.mm.plugin.webview.model.WebViewJSSDKUpFileItem');
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_method_writeToParcel_7et3 = com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz.writeToParcel.overload('android.os.Parcel', 'int');
    com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_method_writeToParcel_7et3.implementation = function(v0, v1) {
        printStacks('public void com.tencent.mm.plugin.webview.model.WebViewJSSDKUpFileItem.writeToParcel(android.os.Parcel,int)');
        com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_method_writeToParcel_7et3.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_method_describeContents_4eo4 = com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz.describeContents.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_method_describeContents_4eo4.implementation = function() {
        printStacks('public int com.tencent.mm.plugin.webview.model.WebViewJSSDKUpFileItem.describeContents()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_method_describeContents_4eo4.call(this);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_method_fxe_pbxc = com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz.fxe.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_method_fxe_pbxc.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.model.WebViewJSSDKUpFileItem.fxe()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_method_fxe_pbxc.call(this);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_method_c_pzup = com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz.c.overload('com.tencent.mm.h.d');
    com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_method_c_pzup.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.webview.model.WebViewJSSDKUpFileItem.c(com.tencent.mm.h.d)');
        com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_method_c_pzup.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_method_fxd_fqvk = com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz.fxd.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_method_fxd_fqvk.implementation = function() {
        printStacks('public final com.tencent.mm.plugin.webview.model.WebViewJSSDKFileItem com.tencent.mm.plugin.webview.model.WebViewJSSDKUpFileItem.fxd()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_method_fxd_fqvk.call(this);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_method_fxf_cwlx = com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz.fxf.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_method_fxf_cwlx.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.model.WebViewJSSDKUpFileItem.fxf()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_method_fxf_cwlx.call(this);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_init_070f = com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz.$init.overload('byte');
    com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_init_070f.implementation = function(v0) {
        printStacks('private com.tencent.mm.plugin.webview.model.WebViewJSSDKUpFileItem(byte)');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_init_070f.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_init_84sr = com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz.$init.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_init_84sr.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.model.WebViewJSSDKUpFileItem()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_init_84sr.call(this);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_init_qw9q = com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz.$init.overload('char');
    com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_init_qw9q.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.webview.model.WebViewJSSDKUpFileItem(char)');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKUpFileItem_clz_init_qw9q.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz = Java.use('com.tencent.mm.plugin.webview.model.WebViewJSSDKVoiceItem');
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz_method_writeToParcel_u7ui = com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz.writeToParcel.overload('android.os.Parcel', 'int');
    com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz_method_writeToParcel_u7ui.implementation = function(v0, v1) {
        printStacks('public void com.tencent.mm.plugin.webview.model.WebViewJSSDKVoiceItem.writeToParcel(android.os.Parcel,int)');
        com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz_method_writeToParcel_u7ui.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz_method_describeContents_x18e = com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz.describeContents.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz_method_describeContents_x18e.implementation = function() {
        printStacks('public int com.tencent.mm.plugin.webview.model.WebViewJSSDKVoiceItem.describeContents()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz_method_describeContents_x18e.call(this);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz_method_fxe_8o4k = com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz.fxe.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz_method_fxe_8o4k.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.model.WebViewJSSDKVoiceItem.fxe()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz_method_fxe_8o4k.call(this);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz_method_fxd_qatv = com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz.fxd.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz_method_fxd_qatv.implementation = function() {
        printStacks('public final com.tencent.mm.plugin.webview.model.WebViewJSSDKFileItem com.tencent.mm.plugin.webview.model.WebViewJSSDKVoiceItem.fxd()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz_method_fxd_qatv.call(this);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz_method_fxf_vdis = com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz.fxf.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz_method_fxf_vdis.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.plugin.webview.model.WebViewJSSDKVoiceItem.fxf()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz_method_fxf_vdis.call(this);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz_init_tbe6 = com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz.$init.overload('android.os.Parcel');
    com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz_init_tbe6.implementation = function(v0) {
        printStacks('protected com.tencent.mm.plugin.webview.model.WebViewJSSDKVoiceItem(android.os.Parcel)');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz_init_tbe6.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz_init_8mgz = com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz.$init.overload();
    com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz_init_8mgz.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.model.WebViewJSSDKVoiceItem()');
        return com_tencent_mm_plugin_webview_model_WebViewJSSDKVoiceItem_clz_init_8mgz.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter');
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_setActionDelegate_280u = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.setActionDelegate.overload('com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter$a');
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_setActionDelegate_280u.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter.setActionDelegate(com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter$a)');
        com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_setActionDelegate_280u.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_show_i1dl = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.show.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_show_i1dl.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter.show()');
        com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_show_i1dl.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_init_ffu8 = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.init.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_init_ffu8.implementation = function() {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter.init()');
        com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_init_ffu8.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_isShown_48gy = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.isShown.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_isShown_48gy.implementation = function() {
        printStacks('public boolean com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter.isShown()');
        return com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_isShown_48gy.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_e_irsl = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.e.overload('com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_e_irsl.implementation = function(v0) {
        printStacks('static android.view.View com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter.e(com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_e_irsl.call(com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_eaY_sizp = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.eaY.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_eaY_sizp.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter.eaY()');
        com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_eaY_sizp.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_d_rkan = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.d.overload('com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_d_rkan.implementation = function(v0) {
        printStacks('static android.widget.EditText com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter.d(com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_d_rkan.call(com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_D_9czk = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.D.overload('int', 'int', 'boolean');
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_D_9czk.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter.D(int,int,boolean)');
        com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_D_9czk.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_hide_3p48 = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.hide.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_hide_3p48.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter.hide()');
        com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_hide_3p48.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_getSearchContent_ibmc = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.getSearchContent.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_getSearchContent_ibmc.implementation = function() {
        printStacks('public java.lang.String com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter.getSearchContent()');
        return com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_getSearchContent_ibmc.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_reset_zl9l = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.reset.overload();
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_reset_zl9l.implementation = function() {
        printStacks('public final void com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter.reset()');
        com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_reset_zl9l.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_c_pb1h = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.c.overload('com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter');
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_c_pb1h.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter$a com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter.c(com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_method_c_pb1h.call(com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_init_cde8 = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int');
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_init_cde8.implementation = function(v0, v1, v2) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter(android.content.Context,android.util.AttributeSet,int)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_init_cde8.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_init_udio = com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz.$init.overload('android.content.Context', 'android.util.AttributeSet');
    com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_init_udio.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.widget.WebViewSearchContentInputFooter(android.content.Context,android.util.AttributeSet)');
        return com_tencent_mm_plugin_webview_ui_tools_widget_WebViewSearchContentInputFooter_clz_init_udio.call(this, v0, v1);
    };
    var com_tencent_smtt_sdk_WebView_HitTestResult_clz = Java.use('com.tencent.smtt.sdk.WebView$HitTestResult');
    var com_tencent_smtt_sdk_WebView_HitTestResult_clz_method_getExtra_bvcj = com_tencent_smtt_sdk_WebView_HitTestResult_clz.getExtra.overload();
    com_tencent_smtt_sdk_WebView_HitTestResult_clz_method_getExtra_bvcj.implementation = function() {
        printStacks('public java.lang.String com.tencent.smtt.sdk.WebView$HitTestResult.getExtra()');
        return com_tencent_smtt_sdk_WebView_HitTestResult_clz_method_getExtra_bvcj.call(this);
    };
    var com_tencent_smtt_sdk_WebView_HitTestResult_clz_method_getType_whl8 = com_tencent_smtt_sdk_WebView_HitTestResult_clz.getType.overload();
    com_tencent_smtt_sdk_WebView_HitTestResult_clz_method_getType_whl8.implementation = function() {
        printStacks('public int com.tencent.smtt.sdk.WebView$HitTestResult.getType()');
        return com_tencent_smtt_sdk_WebView_HitTestResult_clz_method_getType_whl8.call(this);
    };
    var com_tencent_smtt_sdk_WebView_HitTestResult_clz_init_ldv2 = com_tencent_smtt_sdk_WebView_HitTestResult_clz.$init.overload('com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult');
    com_tencent_smtt_sdk_WebView_HitTestResult_clz_init_ldv2.implementation = function(v0) {
        printStacks('public com.tencent.smtt.sdk.WebView$HitTestResult(com.tencent.smtt.export.external.interfaces.IX5WebViewBase$HitTestResult)');
        return com_tencent_smtt_sdk_WebView_HitTestResult_clz_init_ldv2.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_HitTestResult_clz_init_2dyd = com_tencent_smtt_sdk_WebView_HitTestResult_clz.$init.overload('android.webkit.WebView$HitTestResult');
    com_tencent_smtt_sdk_WebView_HitTestResult_clz_init_2dyd.implementation = function(v0) {
        printStacks('public com.tencent.smtt.sdk.WebView$HitTestResult(android.webkit.WebView$HitTestResult)');
        return com_tencent_smtt_sdk_WebView_HitTestResult_clz_init_2dyd.call(this, v0);
    };
    var com_tencent_smtt_sdk_WebView_HitTestResult_clz_init_snqm = com_tencent_smtt_sdk_WebView_HitTestResult_clz.$init.overload();
    com_tencent_smtt_sdk_WebView_HitTestResult_clz_init_snqm.implementation = function() {
        printStacks('public com.tencent.smtt.sdk.WebView$HitTestResult()');
        return com_tencent_smtt_sdk_WebView_HitTestResult_clz_init_snqm.call(this);
    };
    var com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz = Java.use('com.tencent.luggage.sdk.customize.impl.FullSdkExternalToolsHelper$SimpleWebViewActivity');
    var com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz_method_onNewIntent_49ol = com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz.onNewIntent.overload('android.content.Intent');
    com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz_method_onNewIntent_49ol.implementation = function(v0) {
        printStacks('public void com.tencent.luggage.sdk.customize.impl.FullSdkExternalToolsHelper$SimpleWebViewActivity.onNewIntent(android.content.Intent)');
        com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz_method_onNewIntent_49ol.call(this, v0);
    };
    var com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz_method_getLayoutId_26ro = com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz.getLayoutId.overload();
    com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz_method_getLayoutId_26ro.implementation = function() {
        printStacks('public final int com.tencent.luggage.sdk.customize.impl.FullSdkExternalToolsHelper$SimpleWebViewActivity.getLayoutId()');
        return com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz_method_getLayoutId_26ro.call(this);
    };
    var com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz_method_i_c9qj = com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz.i.overload('android.content.Intent');
    com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz_method_i_c9qj.implementation = function(v0) {
        printStacks('private void com.tencent.luggage.sdk.customize.impl.FullSdkExternalToolsHelper$SimpleWebViewActivity.i(android.content.Intent)');
        com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz_method_i_c9qj.call(this, v0);
    };
    var com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz_method_onCreate_kmen = com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz.onCreate.overload('android.os.Bundle');
    com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz_method_onCreate_kmen.implementation = function(v0) {
        printStacks('public void com.tencent.luggage.sdk.customize.impl.FullSdkExternalToolsHelper$SimpleWebViewActivity.onCreate(android.os.Bundle)');
        com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz_method_onCreate_kmen.call(this, v0);
    };
    var com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz_method_onWindowFocusChanged_ze57 = com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz.onWindowFocusChanged.overload('boolean');
    com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz_method_onWindowFocusChanged_ze57.implementation = function(v0) {
        printStacks('public void com.tencent.luggage.sdk.customize.impl.FullSdkExternalToolsHelper$SimpleWebViewActivity.onWindowFocusChanged(boolean)');
        com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz_method_onWindowFocusChanged_ze57.call(this, v0);
    };
    var com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz_init_s9vb = com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz.$init.overload();
    com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz_init_s9vb.implementation = function() {
        printStacks('public com.tencent.luggage.sdk.customize.impl.FullSdkExternalToolsHelper$SimpleWebViewActivity()');
        return com_tencent_luggage_sdk_customize_impl_FullSdkExternalToolsHelper_SimpleWebViewActivity_clz_init_s9vb.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz = Java.use('com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI');
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_a_zqec = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'int');
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_a_zqec.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
        printStacks('static void com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,int)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_a_zqec.call(com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_a_i6ro = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI$a');
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_a_i6ro.implementation = function(v0) {
        printStacks('private void com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI$a)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_a_i6ro.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_d_91c6 = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz.d.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_d_91c6.implementation = function(v0) {
        printStacks('static long com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI.d(com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_d_91c6.call(com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_b_bdjc = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz.b.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_b_bdjc.implementation = function(v0) {
        printStacks('static android.content.Context com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI.b(com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_b_bdjc.call(com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_getLayoutId_nvt6 = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz.getLayoutId.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_getLayoutId_nvt6.implementation = function() {
        printStacks('public int com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI.getLayoutId()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_getLayoutId_nvt6.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_onDestroy_euq9 = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz.onDestroy.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_onDestroy_euq9.implementation = function() {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI.onDestroy()');
        com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_onDestroy_euq9.call(this);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_c_mmv9 = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz.c.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_c_mmv9.implementation = function(v0) {
        printStacks('static int com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI.c(com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_c_mmv9.call(com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_a_7dwj = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz.a.overload('com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI');
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_a_7dwj.implementation = function(v0) {
        printStacks('static com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI$a com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI.a(com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI)');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_a_7dwj.call(com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_onCreate_78bb = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz.onCreate.overload('android.os.Bundle');
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_onCreate_78bb.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI.onCreate(android.os.Bundle)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_onCreate_78bb.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_onWindowFocusChanged_7mpb = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz.onWindowFocusChanged.overload('boolean');
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_onWindowFocusChanged_7mpb.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI.onWindowFocusChanged(boolean)');
        com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_method_onWindowFocusChanged_7mpb.call(this, v0);
    };
    var com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_init_5afk = com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz.$init.overload();
    com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_init_5afk.implementation = function() {
        printStacks('public com.tencent.mm.plugin.webview.ui.tools.WebViewDownloadUI()');
        return com_tencent_mm_plugin_webview_ui_tools_WebViewDownloadUI_clz_init_5afk.call(this);
    };
});