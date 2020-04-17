function printStacks(methodName) {
    var stackInfo = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new());
    console.log(methodName);
    console.log(stackInfo.substring(20));
};

function log(str) {
    console.log(str);
};

Java.perform(function() {
    var com_tencent_mm_sdk_platformtools_ad_1_clz = Java.use('com.tencent.mm.sdk.platformtools.ad$1');
    var com_tencent_mm_sdk_platformtools_ad_1_clz_method_getLogLevel_ipbj = com_tencent_mm_sdk_platformtools_ad_1_clz.getLogLevel.overload();
    com_tencent_mm_sdk_platformtools_ad_1_clz_method_getLogLevel_ipbj.implementation = function() {
        printStacks('public final int com.tencent.mm.sdk.platformtools.ad$1.getLogLevel()');
        return com_tencent_mm_sdk_platformtools_ad_1_clz_method_getLogLevel_ipbj.call(this);
    };
    var com_tencent_mm_sdk_platformtools_ad_1_clz_method_logD_tz8j = com_tencent_mm_sdk_platformtools_ad_1_clz.logD.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'int', 'int', 'long', 'long', 'java.lang.String');
    com_tencent_mm_sdk_platformtools_ad_1_clz_method_logD_tz8j.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7) {
        printStacks('public final void com.tencent.mm.sdk.platformtools.ad$1.logD(java.lang.String:'+v0+',java.lang.String:'+v1+',java.lang.String,int,int,long,long,java.lang.String)');
        com_tencent_mm_sdk_platformtools_ad_1_clz_method_logD_tz8j.call(this, v0, v1, v2, v3, v4, v5, v6, v7);
    };
    var com_tencent_mm_sdk_platformtools_ad_1_clz_method_logI_6j4u = com_tencent_mm_sdk_platformtools_ad_1_clz.logI.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'int', 'int', 'long', 'long', 'java.lang.String');
    com_tencent_mm_sdk_platformtools_ad_1_clz_method_logI_6j4u.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7) {
        printStacks('public final void com.tencent.mm.sdk.platformtools.ad$1.logI(java.lang.String:'+v0+',java.lang.String:'+v1+',java.lang.String,int,int,long,long,java.lang.String)');
        com_tencent_mm_sdk_platformtools_ad_1_clz_method_logI_6j4u.call(this, v0, v1, v2, v3, v4, v5, v6, v7);
    };
    var com_tencent_mm_sdk_platformtools_ad_1_clz_method_logW_1fn4 = com_tencent_mm_sdk_platformtools_ad_1_clz.logW.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'int', 'int', 'long', 'long', 'java.lang.String');
    com_tencent_mm_sdk_platformtools_ad_1_clz_method_logW_1fn4.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7) {
        printStacks('public final void com.tencent.mm.sdk.platformtools.ad$1.logW(java.lang.String,java.lang.String,java.lang.String,int,int,long,long,java.lang.String)');
        com_tencent_mm_sdk_platformtools_ad_1_clz_method_logW_1fn4.call(this, v0, v1, v2, v3, v4, v5, v6, v7);
    };
    var com_tencent_mm_sdk_platformtools_ad_1_clz_method_appenderClose_f9tq = com_tencent_mm_sdk_platformtools_ad_1_clz.appenderClose.overload();
    com_tencent_mm_sdk_platformtools_ad_1_clz_method_appenderClose_f9tq.implementation = function() {
        printStacks('public final void com.tencent.mm.sdk.platformtools.ad$1.appenderClose()');
        com_tencent_mm_sdk_platformtools_ad_1_clz_method_appenderClose_f9tq.call(this);
    };
    var com_tencent_mm_sdk_platformtools_ad_1_clz_method_appenderFlush_6h3j = com_tencent_mm_sdk_platformtools_ad_1_clz.appenderFlush.overload('boolean');
    com_tencent_mm_sdk_platformtools_ad_1_clz_method_appenderFlush_6h3j.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.sdk.platformtools.ad$1.appenderFlush(boolean)');
        com_tencent_mm_sdk_platformtools_ad_1_clz_method_appenderFlush_6h3j.call(this, v0);
    };
    var com_tencent_mm_sdk_platformtools_ad_1_clz_method_logV_35ae = com_tencent_mm_sdk_platformtools_ad_1_clz.logV.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'int', 'int', 'long', 'long', 'java.lang.String');
    com_tencent_mm_sdk_platformtools_ad_1_clz_method_logV_35ae.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7) {
        printStacks('public final void com.tencent.mm.sdk.platformtools.ad$1.logV(java.lang.String:'+v0+',java.lang.String:'+v1+',java.lang.String,int,int,long,long,java.lang.String)');
        com_tencent_mm_sdk_platformtools_ad_1_clz_method_logV_35ae.call(this, v0, v1, v2, v3, v4, v5, v6, v7);
    };
    var com_tencent_mm_sdk_platformtools_ad_1_clz_method_moveLogsFromCacheDirToLogDir_6w72 = com_tencent_mm_sdk_platformtools_ad_1_clz.moveLogsFromCacheDirToLogDir.overload();
    com_tencent_mm_sdk_platformtools_ad_1_clz_method_moveLogsFromCacheDirToLogDir_6w72.implementation = function() {
        printStacks('public final void com.tencent.mm.sdk.platformtools.ad$1.moveLogsFromCacheDirToLogDir()');
        com_tencent_mm_sdk_platformtools_ad_1_clz_method_moveLogsFromCacheDirToLogDir_6w72.call(this);
    };
    var com_tencent_mm_sdk_platformtools_ad_1_clz_method_logE_kc7k = com_tencent_mm_sdk_platformtools_ad_1_clz.logE.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'int', 'int', 'long', 'long', 'java.lang.String');
    com_tencent_mm_sdk_platformtools_ad_1_clz_method_logE_kc7k.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7) {
        printStacks('public final void com.tencent.mm.sdk.platformtools.ad$1.logE(java.lang.String:'+v0+',java.lang.String:'+v1+',java.lang.String,int,int,long,long,java.lang.String)');
        com_tencent_mm_sdk_platformtools_ad_1_clz_method_logE_kc7k.call(this, v0, v1, v2, v3, v4, v5, v6, v7);
    };
    var com_tencent_mm_sdk_platformtools_ad_1_clz_method_logF_jii5 = com_tencent_mm_sdk_platformtools_ad_1_clz.logF.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'int', 'int', 'long', 'long', 'java.lang.String');
    com_tencent_mm_sdk_platformtools_ad_1_clz_method_logF_jii5.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7) {
        printStacks('public final void com.tencent.mm.sdk.platformtools.ad$1.logF(java.lang.String:'+v0+',java.lang.String:'+v1+',java.lang.String,int,int,long,long,java.lang.String)');
        com_tencent_mm_sdk_platformtools_ad_1_clz_method_logF_jii5.call(this, v0, v1, v2, v3, v4, v5, v6, v7);
    };
    var com_tencent_mm_sdk_platformtools_ad_1_clz_init_rvei = com_tencent_mm_sdk_platformtools_ad_1_clz.$init.overload();
    com_tencent_mm_sdk_platformtools_ad_1_clz_init_rvei.implementation = function() {
        printStacks('com.tencent.mm.sdk.platformtools.ad$1()');
        return com_tencent_mm_sdk_platformtools_ad_1_clz_init_rvei.call(this);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz = Java.use('com.tencent.mm.sdk.platformtools.ad');
    var com_tencent_mm_sdk_platformtools_ad_clz_method_getLogLevel_zv3i = com_tencent_mm_sdk_platformtools_ad_clz.getLogLevel.overload();
    com_tencent_mm_sdk_platformtools_ad_clz_method_getLogLevel_zv3i.implementation = function() {
        printStacks('public static int com.tencent.mm.sdk.platformtools.ad.getLogLevel()');
        return com_tencent_mm_sdk_platformtools_ad_clz_method_getLogLevel_zv3i.call(com_tencent_mm_sdk_platformtools_ad_clz);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_method_i_kh9s = com_tencent_mm_sdk_platformtools_ad_clz.i.overload('java.lang.String', 'java.lang.String');
    com_tencent_mm_sdk_platformtools_ad_clz_method_i_kh9s.implementation = function(v0, v1) {
        printStacks('public static void com.tencent.mm.sdk.platformtools.ad.i(java.lang.String:'+v0+',java.lang.String:'+v1+')');
        com_tencent_mm_sdk_platformtools_ad_clz_method_i_kh9s.call(com_tencent_mm_sdk_platformtools_ad_clz, v0, v1);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_method_v_gtas = com_tencent_mm_sdk_platformtools_ad_clz.v.overload('java.lang.String', 'java.lang.String', '[Ljava.lang.Object;');
    com_tencent_mm_sdk_platformtools_ad_clz_method_v_gtas.implementation = function(v0, v1, v2) {
        printStacks('public static void com.tencent.mm.sdk.platformtools.ad.v(java.lang.String:'+v0+',java.lang.String:'+v1+',java.lang.Object[])');
        com_tencent_mm_sdk_platformtools_ad_clz_method_v_gtas.call(com_tencent_mm_sdk_platformtools_ad_clz, v0, v1, v2);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_method_d_o2se = com_tencent_mm_sdk_platformtools_ad_clz.d.overload('java.lang.String', 'java.lang.String');
    com_tencent_mm_sdk_platformtools_ad_clz_method_d_o2se.implementation = function(v0, v1) {
        printStacks('public static void com.tencent.mm.sdk.platformtools.ad.d(java.lang.String:'+v0+',java.lang.String:'+v1+')');
        com_tencent_mm_sdk_platformtools_ad_clz_method_d_o2se.call(com_tencent_mm_sdk_platformtools_ad_clz, v0, v1);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_method_j_piay = com_tencent_mm_sdk_platformtools_ad_clz.j.overload('java.lang.String', 'java.lang.String', '[Ljava.lang.Object;');
    com_tencent_mm_sdk_platformtools_ad_clz_method_j_piay.implementation = function(v0, v1, v2) {
        printStacks('public static void com.tencent.mm.sdk.platformtools.ad.j(java.lang.String:'+v0+',java.lang.String:'+v1+',java.lang.Object[])');
        com_tencent_mm_sdk_platformtools_ad_clz_method_j_piay.call(com_tencent_mm_sdk_platformtools_ad_clz, v0, v1, v2);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_method_TU_1exl = com_tencent_mm_sdk_platformtools_ad_clz.TU.overload('int');
    com_tencent_mm_sdk_platformtools_ad_clz_method_TU_1exl.implementation = function(v0) {
        printStacks('public static void com.tencent.mm.sdk.platformtools.ad.TU(int)');
        com_tencent_mm_sdk_platformtools_ad_clz_method_TU_1exl.call(com_tencent_mm_sdk_platformtools_ad_clz, v0);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_method_f_y0js = com_tencent_mm_sdk_platformtools_ad_clz.f.overload('java.lang.String', 'java.lang.String', '[Ljava.lang.Object;');
    com_tencent_mm_sdk_platformtools_ad_clz_method_f_y0js.implementation = function(v0, v1, v2) {
        printStacks('public static void com.tencent.mm.sdk.platformtools.ad.f(java.lang.String:'+v0+',java.lang.String:'+v1+',java.lang.Object[])');
        com_tencent_mm_sdk_platformtools_ad_clz_method_f_y0js.call(com_tencent_mm_sdk_platformtools_ad_clz, v0, v1, v2);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_method_access$000_qzyj = com_tencent_mm_sdk_platformtools_ad_clz.access$000.overload();
    com_tencent_mm_sdk_platformtools_ad_clz_method_access$000_qzyj.implementation = function() {
        printStacks('static int com.tencent.mm.sdk.platformtools.ad.access$000()');
        return com_tencent_mm_sdk_platformtools_ad_clz_method_access$000_qzyj.call(com_tencent_mm_sdk_platformtools_ad_clz);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_method_a_8qtb = com_tencent_mm_sdk_platformtools_ad_clz.a.overload('com.tencent.mm.sdk.platformtools.ad$a');
    com_tencent_mm_sdk_platformtools_ad_clz_method_a_8qtb.implementation = function(v0) {
        printStacks('public static void com.tencent.mm.sdk.platformtools.ad.a(com.tencent.mm.sdk.platformtools.ad$a)');
        com_tencent_mm_sdk_platformtools_ad_clz_method_a_8qtb.call(com_tencent_mm_sdk_platformtools_ad_clz, v0);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_method_w_xswd = com_tencent_mm_sdk_platformtools_ad_clz.w.overload('java.lang.String', 'java.lang.String', '[Ljava.lang.Object;');
    com_tencent_mm_sdk_platformtools_ad_clz_method_w_xswd.implementation = function(v0, v1, v2) {
        printStacks('public static void com.tencent.mm.sdk.platformtools.ad.w(java.lang.String:'+v0+',java.lang.String:'+v1+',java.lang.Object[])');
        com_tencent_mm_sdk_platformtools_ad_clz_method_w_xswd.call(com_tencent_mm_sdk_platformtools_ad_clz, v0, v1, v2);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_method_getSysInfo_tutf = com_tencent_mm_sdk_platformtools_ad_clz.getSysInfo.overload();
    com_tencent_mm_sdk_platformtools_ad_clz_method_getSysInfo_tutf.implementation = function() {
        printStacks('public static java.lang.String com.tencent.mm.sdk.platformtools.ad.getSysInfo()');
        return com_tencent_mm_sdk_platformtools_ad_clz_method_getSysInfo_tutf.call(com_tencent_mm_sdk_platformtools_ad_clz);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_method_w_t0ur = com_tencent_mm_sdk_platformtools_ad_clz.w.overload('java.lang.String', 'java.lang.String');
    com_tencent_mm_sdk_platformtools_ad_clz_method_w_t0ur.implementation = function(v0, v1) {
        printStacks('public static void com.tencent.mm.sdk.platformtools.ad.w(java.lang.String:'+v0+',java.lang.String:'+v1+')');
        com_tencent_mm_sdk_platformtools_ad_clz_method_w_t0ur.call(com_tencent_mm_sdk_platformtools_ad_clz, v0, v1);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_method_i_zncj = com_tencent_mm_sdk_platformtools_ad_clz.i.overload('java.lang.String', 'java.lang.String', '[Ljava.lang.Object;');
    com_tencent_mm_sdk_platformtools_ad_clz_method_i_zncj.implementation = function(v0, v1, v2) {
        printStacks('public static void com.tencent.mm.sdk.platformtools.ad.i(java.lang.String:'+v0+',java.lang.String:'+v1+',java.lang.Object[])');
        com_tencent_mm_sdk_platformtools_ad_clz_method_i_zncj.call(com_tencent_mm_sdk_platformtools_ad_clz, v0, v1, v2);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_method_moveLogsFromCacheDirToLogDir_j5j5 = com_tencent_mm_sdk_platformtools_ad_clz.moveLogsFromCacheDirToLogDir.overload();
    com_tencent_mm_sdk_platformtools_ad_clz_method_moveLogsFromCacheDirToLogDir_j5j5.implementation = function() {
        printStacks('public static void com.tencent.mm.sdk.platformtools.ad.moveLogsFromCacheDirToLogDir()');
        com_tencent_mm_sdk_platformtools_ad_clz_method_moveLogsFromCacheDirToLogDir_j5j5.call(com_tencent_mm_sdk_platformtools_ad_clz);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_method_d_4eiu = com_tencent_mm_sdk_platformtools_ad_clz.d.overload('java.lang.String', 'java.lang.String', '[Ljava.lang.Object;');
    com_tencent_mm_sdk_platformtools_ad_clz_method_d_4eiu.implementation = function(v0, v1, v2) {
        printStacks('public static void com.tencent.mm.sdk.platformtools.ad.d(java.lang.String:'+v0+',java.lang.String:'+v1+',java.lang.Object[])');
        com_tencent_mm_sdk_platformtools_ad_clz_method_d_4eiu.call(com_tencent_mm_sdk_platformtools_ad_clz, v0, v1, v2);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_method_k_b00w = com_tencent_mm_sdk_platformtools_ad_clz.k.overload('java.lang.String', 'java.lang.String', '[Ljava.lang.Object;');
    com_tencent_mm_sdk_platformtools_ad_clz_method_k_b00w.implementation = function(v0, v1, v2) {
        printStacks('public static void com.tencent.mm.sdk.platformtools.ad.k(java.lang.String,java.lang.String,java.lang.Object[])');
        com_tencent_mm_sdk_platformtools_ad_clz_method_k_b00w.call(com_tencent_mm_sdk_platformtools_ad_clz, v0, v1, v2);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_method_printErrStackTrace_tbl6 = com_tencent_mm_sdk_platformtools_ad_clz.printErrStackTrace.overload('java.lang.String', 'java.lang.Throwable', 'java.lang.String', '[Ljava.lang.Object;');
    com_tencent_mm_sdk_platformtools_ad_clz_method_printErrStackTrace_tbl6.implementation = function(v0, v1, v2, v3) {
        printStacks('public static void com.tencent.mm.sdk.platformtools.ad.printErrStackTrace(java.lang.String,java.lang.Throwable,java.lang.String,java.lang.Object[])');
        com_tencent_mm_sdk_platformtools_ad_clz_method_printErrStackTrace_tbl6.call(com_tencent_mm_sdk_platformtools_ad_clz, v0, v1, v2, v3);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_method_v_0ytl = com_tencent_mm_sdk_platformtools_ad_clz.v.overload('java.lang.String', 'java.lang.String');
    com_tencent_mm_sdk_platformtools_ad_clz_method_v_0ytl.implementation = function(v0, v1) {
        printStacks('public static void com.tencent.mm.sdk.platformtools.ad.v(java.lang.String:'+v0+',java.lang.String:'+v1+')');
        com_tencent_mm_sdk_platformtools_ad_clz_method_v_0ytl.call(com_tencent_mm_sdk_platformtools_ad_clz, v0, v1);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_method_epB_y24o = com_tencent_mm_sdk_platformtools_ad_clz.epB.overload();
    com_tencent_mm_sdk_platformtools_ad_clz_method_epB_y24o.implementation = function() {
        printStacks('public static void com.tencent.mm.sdk.platformtools.ad.epB()');
        com_tencent_mm_sdk_platformtools_ad_clz_method_epB_y24o.call(com_tencent_mm_sdk_platformtools_ad_clz);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_method_epA_w177 = com_tencent_mm_sdk_platformtools_ad_clz.epA.overload();
    com_tencent_mm_sdk_platformtools_ad_clz_method_epA_w177.implementation = function() {
        printStacks('public static void com.tencent.mm.sdk.platformtools.ad.epA()');
        com_tencent_mm_sdk_platformtools_ad_clz_method_epA_w177.call(com_tencent_mm_sdk_platformtools_ad_clz);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_method_e_16pa = com_tencent_mm_sdk_platformtools_ad_clz.e.overload('java.lang.String', 'java.lang.String', '[Ljava.lang.Object;');
    com_tencent_mm_sdk_platformtools_ad_clz_method_e_16pa.implementation = function(v0, v1, v2) {
        printStacks('public static void com.tencent.mm.sdk.platformtools.ad.e(java.lang.String,java.lang.String,java.lang.Object[])');
        com_tencent_mm_sdk_platformtools_ad_clz_method_e_16pa.call(com_tencent_mm_sdk_platformtools_ad_clz, v0, v1, v2);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_method_epz_nteg = com_tencent_mm_sdk_platformtools_ad_clz.epz.overload();
    com_tencent_mm_sdk_platformtools_ad_clz_method_epz_nteg.implementation = function() {
        printStacks('public static com.tencent.mm.sdk.platformtools.ad$a com.tencent.mm.sdk.platformtools.ad.epz()');
        return com_tencent_mm_sdk_platformtools_ad_clz_method_epz_nteg.call(com_tencent_mm_sdk_platformtools_ad_clz);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_method_appenderClose_w3lu = com_tencent_mm_sdk_platformtools_ad_clz.appenderClose.overload();
    com_tencent_mm_sdk_platformtools_ad_clz_method_appenderClose_w3lu.implementation = function() {
        printStacks('public static void com.tencent.mm.sdk.platformtools.ad.appenderClose()');
        com_tencent_mm_sdk_platformtools_ad_clz_method_appenderClose_w3lu.call(com_tencent_mm_sdk_platformtools_ad_clz);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_method_f_gzqn = com_tencent_mm_sdk_platformtools_ad_clz.f.overload('java.lang.String', 'java.lang.String');
    com_tencent_mm_sdk_platformtools_ad_clz_method_f_gzqn.implementation = function(v0, v1) {
        printStacks('public static void com.tencent.mm.sdk.platformtools.ad.f(java.lang.String:'+v0+',java.lang.String:'+v1+')');
        com_tencent_mm_sdk_platformtools_ad_clz_method_f_gzqn.call(com_tencent_mm_sdk_platformtools_ad_clz, v0, v1);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_method_e_no39 = com_tencent_mm_sdk_platformtools_ad_clz.e.overload('java.lang.String', 'java.lang.String');
    com_tencent_mm_sdk_platformtools_ad_clz_method_e_no39.implementation = function(v0, v1) {
        printStacks('public static void com.tencent.mm.sdk.platformtools.ad.e(java.lang.String:'+v0+',java.lang.String:'+v1+')');
        com_tencent_mm_sdk_platformtools_ad_clz_method_e_no39.call(com_tencent_mm_sdk_platformtools_ad_clz, v0, v1);
    };
    var com_tencent_mm_sdk_platformtools_ad_clz_init_nh0o = com_tencent_mm_sdk_platformtools_ad_clz.$init.overload();
    com_tencent_mm_sdk_platformtools_ad_clz_init_nh0o.implementation = function() {
        printStacks('public com.tencent.mm.sdk.platformtools.ad()');
        return com_tencent_mm_sdk_platformtools_ad_clz_init_nh0o.call(this);
    };
});