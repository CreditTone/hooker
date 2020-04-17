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
    var com_tencent_mm_network_aa_1_clz = Java.use('com.tencent.mm.network.aa$1');
    var com_tencent_mm_network_aa_1_clz_method_run_pebc = com_tencent_mm_network_aa_1_clz.run.overload();
    com_tencent_mm_network_aa_1_clz_method_run_pebc.implementation = function() {
        printStacks('public final void com.tencent.mm.network.aa$1.run()');
        com_tencent_mm_network_aa_1_clz_method_run_pebc.call(this);
    };
    var com_tencent_mm_network_aa_1_clz_method_toString_1fug = com_tencent_mm_network_aa_1_clz.toString.overload();
    com_tencent_mm_network_aa_1_clz_method_toString_1fug.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.network.aa$1.toString()');
        return com_tencent_mm_network_aa_1_clz_method_toString_1fug.call(this);
    };
    var com_tencent_mm_network_aa_1_clz_init_nk8t = com_tencent_mm_network_aa_1_clz.$init.overload('com.tencent.mm.network.aa', 'boolean', 'long', 'java.lang.String', 'boolean');
    com_tencent_mm_network_aa_1_clz_init_nk8t.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('com.tencent.mm.network.aa$1(com.tencent.mm.network.aa,boolean,long,java.lang.String,boolean)');
        return com_tencent_mm_network_aa_1_clz_init_nk8t.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_mm_network_g_a_a_clz = Java.use('com.tencent.mm.network.g$a$a');
    var com_tencent_mm_network_g_a_a_clz_method_asBinder_96hp = com_tencent_mm_network_g_a_a_clz.asBinder.overload();
    com_tencent_mm_network_g_a_a_clz_method_asBinder_96hp.implementation = function() {
        printStacks('public final android.os.IBinder com.tencent.mm.network.g$a$a.asBinder()');
        return com_tencent_mm_network_g_a_a_clz_method_asBinder_96hp.call(this);
    };
    var com_tencent_mm_network_g_a_a_clz_method_hK_tgju = com_tencent_mm_network_g_a_a_clz.hK.overload('int');
    com_tencent_mm_network_g_a_a_clz_method_hK_tgju.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.g$a$a.hK(int)');
        com_tencent_mm_network_g_a_a_clz_method_hK_tgju.call(this, v0);
    };
    var com_tencent_mm_network_g_a_a_clz_init_9upm = com_tencent_mm_network_g_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_g_a_a_clz_init_9upm.implementation = function(v0) {
        printStacks('com.tencent.mm.network.g$a$a(android.os.IBinder)');
        return com_tencent_mm_network_g_a_a_clz_init_9upm.call(this, v0);
    };
    var com_tencent_mm_network_i_a_a_clz = Java.use('com.tencent.mm.network.i$a$a');
    var com_tencent_mm_network_i_a_a_clz_method_aDM_6eom = com_tencent_mm_network_i_a_a_clz.aDM.overload();
    com_tencent_mm_network_i_a_a_clz_method_aDM_6eom.implementation = function() {
        printStacks('public final int com.tencent.mm.network.i$a$a.aDM()');
        return com_tencent_mm_network_i_a_a_clz_method_aDM_6eom.call(this);
    };
    var com_tencent_mm_network_i_a_a_clz_method_aDN_nszn = com_tencent_mm_network_i_a_a_clz.aDN.overload();
    com_tencent_mm_network_i_a_a_clz_method_aDN_nszn.implementation = function() {
        printStacks('public final void com.tencent.mm.network.i$a$a.aDN()');
        com_tencent_mm_network_i_a_a_clz_method_aDN_nszn.call(this);
    };
    var com_tencent_mm_network_i_a_a_clz_method_d_ltbg = com_tencent_mm_network_i_a_a_clz.d.overload('com.tencent.mm.network.n');
    com_tencent_mm_network_i_a_a_clz_method_d_ltbg.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.network.i$a$a.d(com.tencent.mm.network.n)');
        return com_tencent_mm_network_i_a_a_clz_method_d_ltbg.call(this, v0);
    };
    var com_tencent_mm_network_i_a_a_clz_method_c_oej9 = com_tencent_mm_network_i_a_a_clz.c.overload('com.tencent.mm.network.n');
    com_tencent_mm_network_i_a_a_clz_method_c_oej9.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.network.i$a$a.c(com.tencent.mm.network.n)');
        return com_tencent_mm_network_i_a_a_clz_method_c_oej9.call(this, v0);
    };
    var com_tencent_mm_network_i_a_a_clz_method_asBinder_fwhk = com_tencent_mm_network_i_a_a_clz.asBinder.overload();
    com_tencent_mm_network_i_a_a_clz_method_asBinder_fwhk.implementation = function() {
        printStacks('public final android.os.IBinder com.tencent.mm.network.i$a$a.asBinder()');
        return com_tencent_mm_network_i_a_a_clz_method_asBinder_fwhk.call(this);
    };
    var com_tencent_mm_network_i_a_a_clz_method_aDO_72pl = com_tencent_mm_network_i_a_a_clz.aDO.overload();
    com_tencent_mm_network_i_a_a_clz_method_aDO_72pl.implementation = function() {
        printStacks('public final long com.tencent.mm.network.i$a$a.aDO()');
        return com_tencent_mm_network_i_a_a_clz_method_aDO_72pl.call(this);
    };
    var com_tencent_mm_network_i_a_a_clz_init_bi29 = com_tencent_mm_network_i_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_i_a_a_clz_init_bi29.implementation = function(v0) {
        printStacks('com.tencent.mm.network.i$a$a(android.os.IBinder)');
        return com_tencent_mm_network_i_a_a_clz_init_bi29.call(this, v0);
    };
    var com_tencent_mm_network_b_b_clz = Java.use('com.tencent.mm.network.b$b');
    var com_tencent_mm_network_b_b_clz_method_yF_9ooq = com_tencent_mm_network_b_b_clz.yF.overload('java.lang.String');
    com_tencent_mm_network_b_b_clz_method_yF_9ooq.implementation = function(v0) {
        printStacks('private static boolean com.tencent.mm.network.b$b.yF(java.lang.String)');
        return com_tencent_mm_network_b_b_clz_method_yF_9ooq.call(com_tencent_mm_network_b_b_clz, v0);
    };
    var com_tencent_mm_network_b_b_clz_init_88na = com_tencent_mm_network_b_b_clz.$init.overload('java.lang.String', 'boolean');
    com_tencent_mm_network_b_b_clz_init_88na.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.network.b$b(java.lang.String:'+v0+',boolean)');
        return com_tencent_mm_network_b_b_clz_init_88na.call(this, v0, v1);
    };
    var com_tencent_mm_network_b_b_clz_init_9n21 = com_tencent_mm_network_b_b_clz.$init.overload('java.lang.String');
    com_tencent_mm_network_b_b_clz_init_9n21.implementation = function(v0) {
        printStacks('public com.tencent.mm.network.b$b(java.lang.String)');
        return com_tencent_mm_network_b_b_clz_init_9n21.call(this, v0);
    };
    var com_tencent_mm_network_d_a_clz = Java.use('com.tencent.mm.network.d$a');
    var com_tencent_mm_network_d_a_clz_method_l_fxiq = com_tencent_mm_network_d_a_clz.l.overload('android.os.IBinder');
    com_tencent_mm_network_d_a_clz_method_l_fxiq.implementation = function(v0) {
        printStacks('public static com.tencent.mm.network.d com.tencent.mm.network.d$a.l(android.os.IBinder)');
        return com_tencent_mm_network_d_a_clz_method_l_fxiq.call(com_tencent_mm_network_d_a_clz, v0);
    };
    var com_tencent_mm_network_d_a_clz_method_asBinder_ll8r = com_tencent_mm_network_d_a_clz.asBinder.overload();
    com_tencent_mm_network_d_a_clz_method_asBinder_ll8r.implementation = function() {
        printStacks('public android.os.IBinder com.tencent.mm.network.d$a.asBinder()');
        return com_tencent_mm_network_d_a_clz_method_asBinder_ll8r.call(this);
    };

    var com_tencent_mm_network_d_a_clz_init_tw5g = com_tencent_mm_network_d_a_clz.$init.overload();
    com_tencent_mm_network_d_a_clz_init_tw5g.implementation = function() {
        printStacks('public com.tencent.mm.network.d$a()');
        return com_tencent_mm_network_d_a_clz_init_tw5g.call(this);
    };
    var com_tencent_mm_network_o_a_a_clz = Java.use('com.tencent.mm.network.o$a$a');
    var com_tencent_mm_network_o_a_a_clz_method_reportKV_ebr2 = com_tencent_mm_network_o_a_a_clz.reportKV.overload('long', 'java.lang.String', 'boolean', 'boolean');
    com_tencent_mm_network_o_a_a_clz_method_reportKV_ebr2.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.network.o$a$a.reportKV(long,java.lang.String,boolean,boolean)');
        com_tencent_mm_network_o_a_a_clz_method_reportKV_ebr2.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_o_a_a_clz_method_asBinder_r6vr = com_tencent_mm_network_o_a_a_clz.asBinder.overload();
    com_tencent_mm_network_o_a_a_clz_method_asBinder_r6vr.implementation = function() {
        printStacks('public final android.os.IBinder com.tencent.mm.network.o$a$a.asBinder()');
        return com_tencent_mm_network_o_a_a_clz_method_asBinder_r6vr.call(this);
    };
    var com_tencent_mm_network_o_a_a_clz_init_uuon = com_tencent_mm_network_o_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_o_a_a_clz_init_uuon.implementation = function(v0) {
        printStacks('com.tencent.mm.network.o$a$a(android.os.IBinder)');
        return com_tencent_mm_network_o_a_a_clz_init_uuon.call(this, v0);
    };
    var com_tencent_mm_network_f_a_clz = Java.use('com.tencent.mm.network.f$a');
    var com_tencent_mm_network_f_a_clz_method_m_dwon = com_tencent_mm_network_f_a_clz.m.overload('android.os.IBinder');
    com_tencent_mm_network_f_a_clz_method_m_dwon.implementation = function(v0) {
        printStacks('public static com.tencent.mm.network.f com.tencent.mm.network.f$a.m(android.os.IBinder)');
        return com_tencent_mm_network_f_a_clz_method_m_dwon.call(com_tencent_mm_network_f_a_clz, v0);
    };
    var com_tencent_mm_network_f_a_clz_method_asBinder_zajh = com_tencent_mm_network_f_a_clz.asBinder.overload();
    com_tencent_mm_network_f_a_clz_method_asBinder_zajh.implementation = function() {
        printStacks('public android.os.IBinder com.tencent.mm.network.f$a.asBinder()');
        return com_tencent_mm_network_f_a_clz_method_asBinder_zajh.call(this);
    };
    var com_tencent_mm_network_f_a_clz_init_gk5h = com_tencent_mm_network_f_a_clz.$init.overload();
    com_tencent_mm_network_f_a_clz_init_gk5h.implementation = function() {
        printStacks('public com.tencent.mm.network.f$a()');
        return com_tencent_mm_network_f_a_clz_init_gk5h.call(this);
    };
    var com_tencent_mm_network_g_a_clz = Java.use('com.tencent.mm.network.g$a');
    var com_tencent_mm_network_g_a_clz_method_asBinder_sfxv = com_tencent_mm_network_g_a_clz.asBinder.overload();
    com_tencent_mm_network_g_a_clz_method_asBinder_sfxv.implementation = function() {
        printStacks('public android.os.IBinder com.tencent.mm.network.g$a.asBinder()');
        return com_tencent_mm_network_g_a_clz_method_asBinder_sfxv.call(this);
    };
    var com_tencent_mm_network_g_a_clz_init_uu2q = com_tencent_mm_network_g_a_clz.$init.overload();
    com_tencent_mm_network_g_a_clz_init_uu2q.implementation = function() {
        printStacks('public com.tencent.mm.network.g$a()');
        return com_tencent_mm_network_g_a_clz_init_uu2q.call(this);
    };
    var com_tencent_mm_network_s_a_a_clz = Java.use('com.tencent.mm.network.s$a$a');
    var com_tencent_mm_network_s_a_a_clz_method_asBinder_erma = com_tencent_mm_network_s_a_a_clz.asBinder.overload();
    com_tencent_mm_network_s_a_a_clz_method_asBinder_erma.implementation = function() {
        printStacks('public final android.os.IBinder com.tencent.mm.network.s$a$a.asBinder()');
        return com_tencent_mm_network_s_a_a_clz_method_asBinder_erma.call(this);
    };
    var com_tencent_mm_network_s_a_a_clz_method_check_cehk = com_tencent_mm_network_s_a_a_clz.check.overload();
    com_tencent_mm_network_s_a_a_clz_method_check_cehk.implementation = function() {
        printStacks('public final boolean com.tencent.mm.network.s$a$a.check()');
        return com_tencent_mm_network_s_a_a_clz_method_check_cehk.call(this);
    };
    var com_tencent_mm_network_s_a_a_clz_init_5hmd = com_tencent_mm_network_s_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_s_a_a_clz_init_5hmd.implementation = function(v0) {
        printStacks('com.tencent.mm.network.s$a$a(android.os.IBinder)');
        return com_tencent_mm_network_s_a_a_clz_init_5hmd.call(this, v0);
    };
    var com_tencent_mm_network_h_a_clz = Java.use('com.tencent.mm.network.h$a');
    var com_tencent_mm_network_h_a_clz_method_asBinder_41ds = com_tencent_mm_network_h_a_clz.asBinder.overload();
    com_tencent_mm_network_h_a_clz_method_asBinder_41ds.implementation = function() {
        printStacks('public android.os.IBinder com.tencent.mm.network.h$a.asBinder()');
        return com_tencent_mm_network_h_a_clz_method_asBinder_41ds.call(this);
    };

    var com_tencent_mm_network_h_a_clz_init_012q = com_tencent_mm_network_h_a_clz.$init.overload();
    com_tencent_mm_network_h_a_clz_init_012q.implementation = function() {
        printStacks('public com.tencent.mm.network.h$a()');
        return com_tencent_mm_network_h_a_clz_init_012q.call(this);
    };
    var com_tencent_mm_network_d_a_a_clz = Java.use('com.tencent.mm.network.d$a$a');
    var com_tencent_mm_network_d_a_a_clz_method_an_2gmk = com_tencent_mm_network_d_a_a_clz.an.overload('[B');
    com_tencent_mm_network_d_a_a_clz_method_an_2gmk.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.network.d$a$a.an(byte[])');
        return com_tencent_mm_network_d_a_a_clz_method_an_2gmk.call(this, v0);
    };
    var com_tencent_mm_network_d_a_a_clz_method_getUsername_c7x3 = com_tencent_mm_network_d_a_a_clz.getUsername.overload();
    com_tencent_mm_network_d_a_a_clz_method_getUsername_c7x3.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.network.d$a$a.getUsername()');
        return com_tencent_mm_network_d_a_a_clz_method_getUsername_c7x3.call(this);
    };
    var com_tencent_mm_network_d_a_a_clz_method_aus_1st8 = com_tencent_mm_network_d_a_a_clz.aus.overload();
    com_tencent_mm_network_d_a_a_clz_method_aus_1st8.implementation = function() {
        printStacks('public final void com.tencent.mm.network.d$a$a.aus()');
        com_tencent_mm_network_d_a_a_clz_method_aus_1st8.call(this);
    };
    var com_tencent_mm_network_d_a_a_clz_method_tX_xdlb = com_tencent_mm_network_d_a_a_clz.tX.overload('java.lang.String');
    com_tencent_mm_network_d_a_a_clz_method_tX_xdlb.implementation = function(v0) {
        printStacks('public final byte[] com.tencent.mm.network.d$a$a.tX(java.lang.String)');
        return com_tencent_mm_network_d_a_a_clz_method_tX_xdlb.call(this, v0);
    };
    var com_tencent_mm_network_d_a_a_clz_method_yB_mjkg = com_tencent_mm_network_d_a_a_clz.yB.overload('java.lang.String');
    com_tencent_mm_network_d_a_a_clz_method_yB_mjkg.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.network.d$a$a.yB(java.lang.String)');
        return com_tencent_mm_network_d_a_a_clz_method_yB_mjkg.call(this, v0);
    };
    var com_tencent_mm_network_d_a_a_clz_method_tY_dl7n = com_tencent_mm_network_d_a_a_clz.tY.overload('java.lang.String');
    com_tencent_mm_network_d_a_a_clz_method_tY_dl7n.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.network.d$a$a.tY(java.lang.String)');
        return com_tencent_mm_network_d_a_a_clz_method_tY_dl7n.call(this, v0);
    };
    var com_tencent_mm_network_d_a_a_clz_method_setUsername_0ifu = com_tencent_mm_network_d_a_a_clz.setUsername.overload('java.lang.String');
    com_tencent_mm_network_d_a_a_clz_method_setUsername_0ifu.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.d$a$a.setUsername(java.lang.String)');
        com_tencent_mm_network_d_a_a_clz_method_setUsername_0ifu.call(this, v0);
    };
    var com_tencent_mm_network_d_a_a_clz_method_aun_et7k = com_tencent_mm_network_d_a_a_clz.aun.overload();
    com_tencent_mm_network_d_a_a_clz_method_aun_et7k.implementation = function() {
        printStacks('public final boolean com.tencent.mm.network.d$a$a.aun()');
        return com_tencent_mm_network_d_a_a_clz_method_aun_et7k.call(this);
    };
    var com_tencent_mm_network_d_a_a_clz_method_asBinder_axja = com_tencent_mm_network_d_a_a_clz.asBinder.overload();
    com_tencent_mm_network_d_a_a_clz_method_asBinder_axja.implementation = function() {
        printStacks('public final android.os.IBinder com.tencent.mm.network.d$a$a.asBinder()');
        return com_tencent_mm_network_d_a_a_clz_method_asBinder_axja.call(this);
    };
    var com_tencent_mm_network_d_a_a_clz_method_ak_opgq = com_tencent_mm_network_d_a_a_clz.ak.overload('[B');
    com_tencent_mm_network_d_a_a_clz_method_ak_opgq.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.d$a$a.ak(byte[])');
        com_tencent_mm_network_d_a_a_clz_method_ak_opgq.call(this, v0);
    };
    var com_tencent_mm_network_d_a_a_clz_method_b_2h1f = com_tencent_mm_network_d_a_a_clz.b.overload('int', '[B', '[B');
    com_tencent_mm_network_d_a_a_clz_method_b_2h1f.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.network.d$a$a.b(int,byte[],byte[])');
        com_tencent_mm_network_d_a_a_clz_method_b_2h1f.call(this, v0, v1, v2);
    };
    var com_tencent_mm_network_d_a_a_clz_method_aum_uzad = com_tencent_mm_network_d_a_a_clz.aum.overload();
    com_tencent_mm_network_d_a_a_clz_method_aum_uzad.implementation = function() {
        printStacks('public final byte[] com.tencent.mm.network.d$a$a.aum()');
        return com_tencent_mm_network_d_a_a_clz_method_aum_uzad.call(this);
    };
    var com_tencent_mm_network_d_a_a_clz_method_a_kll3 = com_tencent_mm_network_d_a_a_clz.a.overload('[B', '[B', '[B', 'int');
    com_tencent_mm_network_d_a_a_clz_method_a_kll3.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.network.d$a$a.a(byte[],byte[],byte[],int)');
        com_tencent_mm_network_d_a_a_clz_method_a_kll3.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_d_a_a_clz_method_am_60hf = com_tencent_mm_network_d_a_a_clz.am.overload('[B');
    com_tencent_mm_network_d_a_a_clz_method_am_60hf.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.d$a$a.am(byte[])');
        com_tencent_mm_network_d_a_a_clz_method_am_60hf.call(this, v0);
    };
    var com_tencent_mm_network_d_a_a_clz_method_mh_krqg = com_tencent_mm_network_d_a_a_clz.mh.overload('int');
    com_tencent_mm_network_d_a_a_clz_method_mh_krqg.implementation = function(v0) {
        printStacks('public final byte[] com.tencent.mm.network.d$a$a.mh(int)');
        return com_tencent_mm_network_d_a_a_clz_method_mh_krqg.call(this, v0);
    };
    var com_tencent_mm_network_d_a_a_clz_method_setUin_drnm = com_tencent_mm_network_d_a_a_clz.setUin.overload('int');
    com_tencent_mm_network_d_a_a_clz_method_setUin_drnm.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.d$a$a.setUin(int)');
        com_tencent_mm_network_d_a_a_clz_method_setUin_drnm.call(this, v0);
    };
    var com_tencent_mm_network_d_a_a_clz_method_tV_jlzl = com_tencent_mm_network_d_a_a_clz.tV.overload('java.lang.String');
    com_tencent_mm_network_d_a_a_clz_method_tV_jlzl.implementation = function(v0) {
        printStacks('public final byte[] com.tencent.mm.network.d$a$a.tV(java.lang.String)');
        return com_tencent_mm_network_d_a_a_clz_method_tV_jlzl.call(this, v0);
    };
    var com_tencent_mm_network_d_a_a_clz_method_tW_ce9m = com_tencent_mm_network_d_a_a_clz.tW.overload('java.lang.String');
    com_tencent_mm_network_d_a_a_clz_method_tW_ce9m.implementation = function(v0) {
        printStacks('public final byte[] com.tencent.mm.network.d$a$a.tW(java.lang.String)');
        return com_tencent_mm_network_d_a_a_clz_method_tW_ce9m.call(this, v0);
    };
    var com_tencent_mm_network_d_a_a_clz_method_tU_n70w = com_tencent_mm_network_d_a_a_clz.tU.overload('java.lang.String');
    com_tencent_mm_network_d_a_a_clz_method_tU_n70w.implementation = function(v0) {
        printStacks('public final byte[] com.tencent.mm.network.d$a$a.tU(java.lang.String)');
        return com_tencent_mm_network_d_a_a_clz_method_tU_n70w.call(this, v0);
    };
    var com_tencent_mm_network_d_a_a_clz_method_auq_mmzc = com_tencent_mm_network_d_a_a_clz.auq.overload();
    com_tencent_mm_network_d_a_a_clz_method_auq_mmzc.implementation = function() {
        printStacks('public final byte[] com.tencent.mm.network.d$a$a.auq()');
        return com_tencent_mm_network_d_a_a_clz_method_auq_mmzc.call(this);
    };
    var com_tencent_mm_network_d_a_a_clz_method_al_cpjm = com_tencent_mm_network_d_a_a_clz.al.overload('[B');
    com_tencent_mm_network_d_a_a_clz_method_al_cpjm.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.d$a$a.al(byte[])');
        com_tencent_mm_network_d_a_a_clz_method_al_cpjm.call(this, v0);
    };
    var com_tencent_mm_network_d_a_a_clz_method_getUin_caru = com_tencent_mm_network_d_a_a_clz.getUin.overload();
    com_tencent_mm_network_d_a_a_clz_method_getUin_caru.implementation = function() {
        printStacks('public final int com.tencent.mm.network.d$a$a.getUin()');
        return com_tencent_mm_network_d_a_a_clz_method_getUin_caru.call(this);
    };
    var com_tencent_mm_network_d_a_a_clz_method_auo_2w2r = com_tencent_mm_network_d_a_a_clz.auo.overload();
    com_tencent_mm_network_d_a_a_clz_method_auo_2w2r.implementation = function() {
        printStacks('public final byte[] com.tencent.mm.network.d$a$a.auo()');
        return com_tencent_mm_network_d_a_a_clz_method_auo_2w2r.call(this);
    };
    var com_tencent_mm_network_d_a_a_clz_method_h_ode9 = com_tencent_mm_network_d_a_a_clz.h.overload('java.lang.String', '[B');
    com_tencent_mm_network_d_a_a_clz_method_h_ode9.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.network.d$a$a.h(java.lang.String,byte[])');
        com_tencent_mm_network_d_a_a_clz_method_h_ode9.call(this, v0, v1);
    };
    var com_tencent_mm_network_d_a_a_clz_method_yz_1o3m = com_tencent_mm_network_d_a_a_clz.yz.overload('java.lang.String');
    com_tencent_mm_network_d_a_a_clz_method_yz_1o3m.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.d$a$a.yz(java.lang.String)');
        com_tencent_mm_network_d_a_a_clz_method_yz_1o3m.call(this, v0);
    };
    var com_tencent_mm_network_d_a_a_clz_method_aur_krlf = com_tencent_mm_network_d_a_a_clz.aur.overload();
    com_tencent_mm_network_d_a_a_clz_method_aur_krlf.implementation = function() {
        printStacks('public final void com.tencent.mm.network.d$a$a.aur()');
        com_tencent_mm_network_d_a_a_clz_method_aur_krlf.call(this);
    };
    var com_tencent_mm_network_d_a_a_clz_method_ab_w34a = com_tencent_mm_network_d_a_a_clz.ab.overload('[B');
    com_tencent_mm_network_d_a_a_clz_method_ab_w34a.implementation = function(v0) {
        printStacks('public final int com.tencent.mm.network.d$a$a.ab(byte[])');
        return com_tencent_mm_network_d_a_a_clz_method_ab_w34a.call(this, v0);
    };
    var com_tencent_mm_network_d_a_a_clz_method_h_zyqt = com_tencent_mm_network_d_a_a_clz.h.overload('int', '[B');
    com_tencent_mm_network_d_a_a_clz_method_h_zyqt.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.network.d$a$a.h(int,byte[])');
        com_tencent_mm_network_d_a_a_clz_method_h_zyqt.call(this, v0, v1);
    };
    var com_tencent_mm_network_d_a_a_clz_method_dU_dhyn = com_tencent_mm_network_d_a_a_clz.dU.overload('boolean');
    com_tencent_mm_network_d_a_a_clz_method_dU_dhyn.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.d$a$a.dU(boolean)');
        com_tencent_mm_network_d_a_a_clz_method_dU_dhyn.call(this, v0);
    };
    var com_tencent_mm_network_d_a_a_clz_method_aup_a51p = com_tencent_mm_network_d_a_a_clz.aup.overload();
    com_tencent_mm_network_d_a_a_clz_method_aup_a51p.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.network.d$a$a.aup()');
        return com_tencent_mm_network_d_a_a_clz_method_aup_a51p.call(this);
    };
    var com_tencent_mm_network_d_a_a_clz_method_isForeground_8alc = com_tencent_mm_network_d_a_a_clz.isForeground.overload();
    com_tencent_mm_network_d_a_a_clz_method_isForeground_8alc.implementation = function() {
        printStacks('public final boolean com.tencent.mm.network.d$a$a.isForeground()');
        return com_tencent_mm_network_d_a_a_clz_method_isForeground_8alc.call(this);
    };
    var com_tencent_mm_network_d_a_a_clz_method_reset_560f = com_tencent_mm_network_d_a_a_clz.reset.overload();
    com_tencent_mm_network_d_a_a_clz_method_reset_560f.implementation = function() {
        printStacks('public final void com.tencent.mm.network.d$a$a.reset()');
        com_tencent_mm_network_d_a_a_clz_method_reset_560f.call(this);
    };
    var com_tencent_mm_network_d_a_a_clz_init_bn8h = com_tencent_mm_network_d_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_d_a_a_clz_init_bn8h.implementation = function(v0) {
        printStacks('com.tencent.mm.network.d$a$a(android.os.IBinder)');
        return com_tencent_mm_network_d_a_a_clz_init_bn8h.call(this, v0);
    };
    var com_tencent_mm_network_i_a_clz = Java.use('com.tencent.mm.network.i$a');
    var com_tencent_mm_network_i_a_clz_method_n_xz5i = com_tencent_mm_network_i_a_clz.n.overload('android.os.IBinder');
    com_tencent_mm_network_i_a_clz_method_n_xz5i.implementation = function(v0) {
        printStacks('public static com.tencent.mm.network.i com.tencent.mm.network.i$a.n(android.os.IBinder)');
        return com_tencent_mm_network_i_a_clz_method_n_xz5i.call(com_tencent_mm_network_i_a_clz, v0);
    };
    var com_tencent_mm_network_i_a_clz_method_asBinder_drwv = com_tencent_mm_network_i_a_clz.asBinder.overload();
    com_tencent_mm_network_i_a_clz_method_asBinder_drwv.implementation = function() {
        printStacks('public android.os.IBinder com.tencent.mm.network.i$a.asBinder()');
        return com_tencent_mm_network_i_a_clz_method_asBinder_drwv.call(this);
    };

    var com_tencent_mm_network_i_a_clz_init_w9jx = com_tencent_mm_network_i_a_clz.$init.overload();
    com_tencent_mm_network_i_a_clz_init_w9jx.implementation = function() {
        printStacks('public com.tencent.mm.network.i$a()');
        return com_tencent_mm_network_i_a_clz_init_w9jx.call(this);
    };
    var com_tencent_mm_network_t_14_clz = Java.use('com.tencent.mm.network.t$14');
    var com_tencent_mm_network_t_14_clz_method_run_y9ag = com_tencent_mm_network_t_14_clz.run.overload();
    com_tencent_mm_network_t_14_clz_method_run_y9ag.implementation = function() {
        printStacks('public final java.lang.Object com.tencent.mm.network.t$14.run()');
        return com_tencent_mm_network_t_14_clz_method_run_y9ag.call(this);
    };
    var com_tencent_mm_network_t_14_clz_init_amia = com_tencent_mm_network_t_14_clz.$init.overload('com.tencent.mm.network.t', 'java.lang.String', 'java.lang.String');
    com_tencent_mm_network_t_14_clz_init_amia.implementation = function(v0, v1, v2) {
        printStacks('public com.tencent.mm.network.t$14(com.tencent.mm.network.t,java.lang.String,java.lang.String)');
        return com_tencent_mm_network_t_14_clz_init_amia.call(this, v0, v1, v2);
    };
    var com_tencent_mm_network_j_a_clz = Java.use('com.tencent.mm.network.j$a');
    var com_tencent_mm_network_j_a_clz_method_asBinder_21j4 = com_tencent_mm_network_j_a_clz.asBinder.overload();
    com_tencent_mm_network_j_a_clz_method_asBinder_21j4.implementation = function() {
        printStacks('public android.os.IBinder com.tencent.mm.network.j$a.asBinder()');
        return com_tencent_mm_network_j_a_clz_method_asBinder_21j4.call(this);
    };

    var com_tencent_mm_network_j_a_clz_method_o_bjrk = com_tencent_mm_network_j_a_clz.o.overload('android.os.IBinder');
    com_tencent_mm_network_j_a_clz_method_o_bjrk.implementation = function(v0) {
        printStacks('public static com.tencent.mm.network.j com.tencent.mm.network.j$a.o(android.os.IBinder)');
        return com_tencent_mm_network_j_a_clz_method_o_bjrk.call(com_tencent_mm_network_j_a_clz, v0);
    };
    var com_tencent_mm_network_j_a_clz_init_ya3q = com_tencent_mm_network_j_a_clz.$init.overload();
    com_tencent_mm_network_j_a_clz_init_ya3q.implementation = function() {
        printStacks('public com.tencent.mm.network.j$a()');
        return com_tencent_mm_network_j_a_clz_init_ya3q.call(this);
    };
    var com_tencent_mm_network_f_a_a_clz = Java.use('com.tencent.mm.network.f$a$a');
    var com_tencent_mm_network_f_a_a_clz_method_a_rtlm = com_tencent_mm_network_f_a_a_clz.a.overload('com.tencent.mm.network.a.b');
    com_tencent_mm_network_f_a_a_clz_method_a_rtlm.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.f$a$a.a(com.tencent.mm.network.a.b)');
        com_tencent_mm_network_f_a_a_clz_method_a_rtlm.call(this, v0);
    };
    var com_tencent_mm_network_f_a_a_clz_method_a_l4gi = com_tencent_mm_network_f_a_a_clz.a.overload('com.tencent.mm.network.g');
    com_tencent_mm_network_f_a_a_clz_method_a_l4gi.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.f$a$a.a(com.tencent.mm.network.g)');
        com_tencent_mm_network_f_a_a_clz_method_a_l4gi.call(this, v0);
    };
    var com_tencent_mm_network_f_a_a_clz_method_ua_b605 = com_tencent_mm_network_f_a_a_clz.ua.overload('java.lang.String');
    com_tencent_mm_network_f_a_a_clz_method_ua_b605.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.f$a$a.ua(java.lang.String)');
        com_tencent_mm_network_f_a_a_clz_method_ua_b605.call(this, v0);
    };
    var com_tencent_mm_network_f_a_a_clz_method_c_t2kk = com_tencent_mm_network_f_a_a_clz.c.overload('java.lang.String', 'long', 'java.lang.String');
    com_tencent_mm_network_f_a_a_clz_method_c_t2kk.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.network.f$a$a.c(java.lang.String,long,java.lang.String)');
        com_tencent_mm_network_f_a_a_clz_method_c_t2kk.call(this, v0, v1, v2);
    };
    var com_tencent_mm_network_f_a_a_clz_method_setHostInfo_xbau = com_tencent_mm_network_f_a_a_clz.setHostInfo.overload('[Ljava.lang.String;', '[Ljava.lang.String;', '[I');
    com_tencent_mm_network_f_a_a_clz_method_setHostInfo_xbau.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.network.f$a$a.setHostInfo(java.lang.String[],java.lang.String[],int[])');
        com_tencent_mm_network_f_a_a_clz_method_setHostInfo_xbau.call(this, v0, v1, v2);
    };
    var com_tencent_mm_network_f_a_a_clz_method_getIspId_netz = com_tencent_mm_network_f_a_a_clz.getIspId.overload();
    com_tencent_mm_network_f_a_a_clz_method_getIspId_netz.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.network.f$a$a.getIspId()');
        return com_tencent_mm_network_f_a_a_clz_method_getIspId_netz.call(this);
    };
    var com_tencent_mm_network_f_a_a_clz_method_dW_fkgv = com_tencent_mm_network_f_a_a_clz.dW.overload('boolean');
    com_tencent_mm_network_f_a_a_clz_method_dW_fkgv.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.f$a$a.dW(boolean)');
        com_tencent_mm_network_f_a_a_clz_method_dW_fkgv.call(this, v0);
    };
    var com_tencent_mm_network_f_a_a_clz_method_reportFailIp_3vyr = com_tencent_mm_network_f_a_a_clz.reportFailIp.overload('java.lang.String');
    com_tencent_mm_network_f_a_a_clz_method_reportFailIp_3vyr.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.f$a$a.reportFailIp(java.lang.String)');
        com_tencent_mm_network_f_a_a_clz_method_reportFailIp_3vyr.call(this, v0);
    };
    var com_tencent_mm_network_f_a_a_clz_method_dV_7sdt = com_tencent_mm_network_f_a_a_clz.dV.overload('boolean');
    com_tencent_mm_network_f_a_a_clz_method_dV_7sdt.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.f$a$a.dV(boolean)');
        com_tencent_mm_network_f_a_a_clz_method_dV_7sdt.call(this, v0);
    };
    var com_tencent_mm_network_f_a_a_clz_method_aDK_myzc = com_tencent_mm_network_f_a_a_clz.aDK.overload();
    com_tencent_mm_network_f_a_a_clz_method_aDK_myzc.implementation = function() {
        printStacks('public final void com.tencent.mm.network.f$a$a.aDK()');
        com_tencent_mm_network_f_a_a_clz_method_aDK_myzc.call(this);
    };
    var com_tencent_mm_network_f_a_a_clz_method_setNewDnsDebugHost_6q6q = com_tencent_mm_network_f_a_a_clz.setNewDnsDebugHost.overload('java.lang.String', 'java.lang.String');
    com_tencent_mm_network_f_a_a_clz_method_setNewDnsDebugHost_6q6q.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.network.f$a$a.setNewDnsDebugHost(java.lang.String,java.lang.String)');
        com_tencent_mm_network_f_a_a_clz_method_setNewDnsDebugHost_6q6q.call(this, v0, v1);
    };
    var com_tencent_mm_network_f_a_a_clz_method_addHostInfo_bmrj = com_tencent_mm_network_f_a_a_clz.addHostInfo.overload('[Ljava.lang.String;', '[Ljava.lang.String;', '[I');
    com_tencent_mm_network_f_a_a_clz_method_addHostInfo_bmrj.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.network.f$a$a.addHostInfo(java.lang.String[],java.lang.String[],int[])');
        com_tencent_mm_network_f_a_a_clz_method_addHostInfo_bmrj.call(this, v0, v1, v2);
    };
    var com_tencent_mm_network_f_a_a_clz_method_c_39ux = com_tencent_mm_network_f_a_a_clz.c.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_mm_network_f_a_a_clz_method_c_39ux.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.network.f$a$a.c(java.lang.String,java.lang.String,java.lang.String,java.lang.String)');
        com_tencent_mm_network_f_a_a_clz_method_c_39ux.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_f_a_a_clz_method_ub_hrld = com_tencent_mm_network_f_a_a_clz.ub.overload('java.lang.String');
    com_tencent_mm_network_f_a_a_clz_method_ub_hrld.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.f$a$a.ub(java.lang.String)');
        com_tencent_mm_network_f_a_a_clz_method_ub_hrld.call(this, v0);
    };
    var com_tencent_mm_network_f_a_a_clz_method_reportV6Status_humv = com_tencent_mm_network_f_a_a_clz.reportV6Status.overload('boolean');
    com_tencent_mm_network_f_a_a_clz_method_reportV6Status_humv.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.f$a$a.reportV6Status(boolean)');
        com_tencent_mm_network_f_a_a_clz_method_reportV6Status_humv.call(this, v0);
    };
    var com_tencent_mm_network_f_a_a_clz_method_aDJ_y9v2 = com_tencent_mm_network_f_a_a_clz.aDJ.overload();
    com_tencent_mm_network_f_a_a_clz_method_aDJ_y9v2.implementation = function() {
        printStacks('public final com.tencent.mm.network.d com.tencent.mm.network.f$a$a.aDJ()');
        return com_tencent_mm_network_f_a_a_clz_method_aDJ_y9v2.call(this);
    };
    var com_tencent_mm_network_f_a_a_clz_method_a_co2i = com_tencent_mm_network_f_a_a_clz.a.overload('com.tencent.mm.protocal.ab');
    com_tencent_mm_network_f_a_a_clz_method_a_co2i.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.f$a$a.a(com.tencent.mm.protocal.ab)');
        com_tencent_mm_network_f_a_a_clz_method_a_co2i.call(this, v0);
    };
    var com_tencent_mm_network_f_a_a_clz_method_auw_ks5a = com_tencent_mm_network_f_a_a_clz.auw.overload();
    com_tencent_mm_network_f_a_a_clz_method_auw_ks5a.implementation = function() {
        printStacks('public final void com.tencent.mm.network.f$a$a.auw()');
        com_tencent_mm_network_f_a_a_clz_method_auw_ks5a.call(this);
    };
    var com_tencent_mm_network_f_a_a_clz_method_setSignallingStrategy_fqmw = com_tencent_mm_network_f_a_a_clz.setSignallingStrategy.overload('long', 'long');
    com_tencent_mm_network_f_a_a_clz_method_setSignallingStrategy_fqmw.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.network.f$a$a.setSignallingStrategy(long,long)');
        com_tencent_mm_network_f_a_a_clz_method_setSignallingStrategy_fqmw.call(this, v0, v1);
    };
    var com_tencent_mm_network_f_a_a_clz_method_dY_xv0e = com_tencent_mm_network_f_a_a_clz.dY.overload('boolean');
    com_tencent_mm_network_f_a_a_clz_method_dY_xv0e.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.f$a$a.dY(boolean)');
        com_tencent_mm_network_f_a_a_clz_method_dY_xv0e.call(this, v0);
    };
    var com_tencent_mm_network_f_a_a_clz_method_auv_v3x7 = com_tencent_mm_network_f_a_a_clz.auv.overload();
    com_tencent_mm_network_f_a_a_clz_method_auv_v3x7.implementation = function() {
        printStacks('public final void com.tencent.mm.network.f$a$a.auv()');
        com_tencent_mm_network_f_a_a_clz_method_auv_v3x7.call(this);
    };
    var com_tencent_mm_network_f_a_a_clz_method_a_p3bd = com_tencent_mm_network_f_a_a_clz.a.overload('com.tencent.mm.network.r', 'com.tencent.mm.network.l');
    com_tencent_mm_network_f_a_a_clz_method_a_p3bd.implementation = function(v0, v1) {
        printStacks('public final int com.tencent.mm.network.f$a$a.a(com.tencent.mm.network.r,com.tencent.mm.network.l)');
        return com_tencent_mm_network_f_a_a_clz_method_a_p3bd.call(this, v0, v1);
    };
    var com_tencent_mm_network_f_a_a_clz_method_keepSignalling_3ty7 = com_tencent_mm_network_f_a_a_clz.keepSignalling.overload();
    com_tencent_mm_network_f_a_a_clz_method_keepSignalling_3ty7.implementation = function() {
        printStacks('public final void com.tencent.mm.network.f$a$a.keepSignalling()');
        com_tencent_mm_network_f_a_a_clz_method_keepSignalling_3ty7.call(this);
    };
    var com_tencent_mm_network_f_a_a_clz_method_aDL_2fdh = com_tencent_mm_network_f_a_a_clz.aDL.overload();
    com_tencent_mm_network_f_a_a_clz_method_aDL_2fdh.implementation = function() {
        printStacks('public final com.tencent.mm.network.i com.tencent.mm.network.f$a$a.aDL()');
        return com_tencent_mm_network_f_a_a_clz_method_aDL_2fdh.call(this);
    };
    var com_tencent_mm_network_f_a_a_clz_method_a_2jdp = com_tencent_mm_network_f_a_a_clz.a.overload('com.tencent.mm.network.h');
    com_tencent_mm_network_f_a_a_clz_method_a_2jdp.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.f$a$a.a(com.tencent.mm.network.h)');
        com_tencent_mm_network_f_a_a_clz_method_a_2jdp.call(this, v0);
    };
    var com_tencent_mm_network_f_a_a_clz_method_cancel_bwof = com_tencent_mm_network_f_a_a_clz.cancel.overload('int');
    com_tencent_mm_network_f_a_a_clz_method_cancel_bwof.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.f$a$a.cancel(int)');
        com_tencent_mm_network_f_a_a_clz_method_cancel_bwof.call(this, v0);
    };
    var com_tencent_mm_network_f_a_a_clz_method_a_awa3 = com_tencent_mm_network_f_a_a_clz.a.overload('boolean', 'java.lang.String', 'java.lang.String', '[I', '[I', 'int', 'int', 'java.lang.String', 'java.lang.String');
    com_tencent_mm_network_f_a_a_clz_method_a_awa3.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7, v8) {
        printStacks('public final void com.tencent.mm.network.f$a$a.a(boolean,java.lang.String,java.lang.String,int[],int[],int,int,java.lang.String,java.lang.String)');
        com_tencent_mm_network_f_a_a_clz_method_a_awa3.call(this, v0, v1, v2, v3, v4, v5, v6, v7, v8);
    };
    var com_tencent_mm_network_f_a_a_clz_method_asBinder_f07o = com_tencent_mm_network_f_a_a_clz.asBinder.overload();
    com_tencent_mm_network_f_a_a_clz_method_asBinder_f07o.implementation = function() {
        printStacks('public final android.os.IBinder com.tencent.mm.network.f$a$a.asBinder()');
        return com_tencent_mm_network_f_a_a_clz_method_asBinder_f07o.call(this);
    };
    var com_tencent_mm_network_f_a_a_clz_method_stopSignalling_c2aj = com_tencent_mm_network_f_a_a_clz.stopSignalling.overload();
    com_tencent_mm_network_f_a_a_clz_method_stopSignalling_c2aj.implementation = function() {
        printStacks('public final void com.tencent.mm.network.f$a$a.stopSignalling()');
        com_tencent_mm_network_f_a_a_clz_method_stopSignalling_c2aj.call(this);
    };
    var com_tencent_mm_network_f_a_a_clz_method_auf_xjje = com_tencent_mm_network_f_a_a_clz.auf.overload();
    com_tencent_mm_network_f_a_a_clz_method_auf_xjje.implementation = function() {
        printStacks('public final boolean com.tencent.mm.network.f$a$a.auf()');
        return com_tencent_mm_network_f_a_a_clz_method_auf_xjje.call(this);
    };
    var com_tencent_mm_network_f_a_a_clz_method_a_8peo = com_tencent_mm_network_f_a_a_clz.a.overload('boolean', 'java.util.List');
    com_tencent_mm_network_f_a_a_clz_method_a_8peo.implementation = function(v0, v1) {
        printStacks('public final int com.tencent.mm.network.f$a$a.a(boolean,java.util.List)');
        return com_tencent_mm_network_f_a_a_clz_method_a_8peo.call(this, v0, v1);
    };
    var com_tencent_mm_network_f_a_a_clz_method_getNetworkServerIp_vyqn = com_tencent_mm_network_f_a_a_clz.getNetworkServerIp.overload();
    com_tencent_mm_network_f_a_a_clz_method_getNetworkServerIp_vyqn.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.network.f$a$a.getNetworkServerIp()');
        return com_tencent_mm_network_f_a_a_clz_method_getNetworkServerIp_vyqn.call(this);
    };
    var com_tencent_mm_network_f_a_a_clz_method_i_r8il = com_tencent_mm_network_f_a_a_clz.i.overload('int', '[B');
    com_tencent_mm_network_f_a_a_clz_method_i_r8il.implementation = function(v0, v1) {
        printStacks('public final int com.tencent.mm.network.f$a$a.i(int,byte[])');
        return com_tencent_mm_network_f_a_a_clz_method_i_r8il.call(this, v0, v1);
    };
    var com_tencent_mm_network_f_a_a_clz_method_forceUseV6_j767 = com_tencent_mm_network_f_a_a_clz.forceUseV6.overload('boolean');
    com_tencent_mm_network_f_a_a_clz_method_forceUseV6_j767.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.f$a$a.forceUseV6(boolean)');
        com_tencent_mm_network_f_a_a_clz_method_forceUseV6_j767.call(this, v0);
    };
    var com_tencent_mm_network_f_a_a_clz_method_a_qsse = com_tencent_mm_network_f_a_a_clz.a.overload('java.lang.String', 'boolean', 'java.util.List');
    com_tencent_mm_network_f_a_a_clz_method_a_qsse.implementation = function(v0, v1, v2) {
        printStacks('public final int com.tencent.mm.network.f$a$a.a(java.lang.String:'+v0+',boolean,java.util.List)');
        return com_tencent_mm_network_f_a_a_clz_method_a_qsse.call(this, v0, v1, v2);
    };
    var com_tencent_mm_network_f_a_a_clz_method_dX_cksf = com_tencent_mm_network_f_a_a_clz.dX.overload('boolean');
    com_tencent_mm_network_f_a_a_clz_method_dX_cksf.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.f$a$a.dX(boolean)');
        com_tencent_mm_network_f_a_a_clz_method_dX_cksf.call(this, v0);
    };
    var com_tencent_mm_network_f_a_a_clz_method_a_anxl = com_tencent_mm_network_f_a_a_clz.a.overload('int', 'java.lang.String', 'int', 'boolean');
    com_tencent_mm_network_f_a_a_clz_method_a_anxl.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.network.f$a$a.a(int,java.lang.String,int,boolean)');
        com_tencent_mm_network_f_a_a_clz_method_a_anxl.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_f_a_a_clz_method_getHostByName_7q7f = com_tencent_mm_network_f_a_a_clz.getHostByName.overload('java.lang.String', 'java.util.List');
    com_tencent_mm_network_f_a_a_clz_method_getHostByName_7q7f.implementation = function(v0, v1) {
        printStacks('public final int com.tencent.mm.network.f$a$a.getHostByName(java.lang.String,java.util.List)');
        return com_tencent_mm_network_f_a_a_clz_method_getHostByName_7q7f.call(this, v0, v1);
    };
    var com_tencent_mm_network_f_a_a_clz_method_a_aacp = com_tencent_mm_network_f_a_a_clz.a.overload('com.tencent.mm.network.o');
    com_tencent_mm_network_f_a_a_clz_method_a_aacp.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.f$a$a.a(com.tencent.mm.network.o)');
        com_tencent_mm_network_f_a_a_clz_method_a_aacp.call(this, v0);
    };
    var com_tencent_mm_network_f_a_a_clz_method_tZ_yrmn = com_tencent_mm_network_f_a_a_clz.tZ.overload('java.lang.String');
    com_tencent_mm_network_f_a_a_clz_method_tZ_yrmn.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.f$a$a.tZ(java.lang.String)');
        com_tencent_mm_network_f_a_a_clz_method_tZ_yrmn.call(this, v0);
    };
    var com_tencent_mm_network_f_a_a_clz_method_reset_h6k5 = com_tencent_mm_network_f_a_a_clz.reset.overload();
    com_tencent_mm_network_f_a_a_clz_method_reset_h6k5.implementation = function() {
        printStacks('public final void com.tencent.mm.network.f$a$a.reset()');
        com_tencent_mm_network_f_a_a_clz_method_reset_h6k5.call(this);
    };
    var com_tencent_mm_network_f_a_a_clz_method_getIPsString_63jt = com_tencent_mm_network_f_a_a_clz.getIPsString.overload('boolean');
    com_tencent_mm_network_f_a_a_clz_method_getIPsString_63jt.implementation = function(v0) {
        printStacks('public final java.lang.String[] com.tencent.mm.network.f$a$a.getIPsString(boolean)');
        return com_tencent_mm_network_f_a_a_clz_method_getIPsString_63jt.call(this, v0);
    };
    var com_tencent_mm_network_f_a_a_clz_method_a_r96f = com_tencent_mm_network_f_a_a_clz.a.overload('com.tencent.mm.network.s');
    com_tencent_mm_network_f_a_a_clz_method_a_r96f.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.f$a$a.a(com.tencent.mm.network.s)');
        com_tencent_mm_network_f_a_a_clz_method_a_r96f.call(this, v0);
    };
    var com_tencent_mm_network_f_a_a_clz_init_dnpj = com_tencent_mm_network_f_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_f_a_a_clz_init_dnpj.implementation = function(v0) {
        printStacks('com.tencent.mm.network.f$a$a(android.os.IBinder)');
        return com_tencent_mm_network_f_a_a_clz_init_dnpj.call(this, v0);
    };
    var com_tencent_mm_network_a_clz = Java.use('com.tencent.mm.network.a');
    var com_tencent_mm_network_a_clz_method_an_1qzc = com_tencent_mm_network_a_clz.an.overload('[B');
    com_tencent_mm_network_a_clz_method_an_1qzc.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.network.a.an(byte[])');
        return com_tencent_mm_network_a_clz_method_an_1qzc.call(this, v0);
    };
    var com_tencent_mm_network_a_clz_method_aus_kw19 = com_tencent_mm_network_a_clz.aus.overload();
    com_tencent_mm_network_a_clz_method_aus_kw19.implementation = function() {
        printStacks('public final void com.tencent.mm.network.a.aus()');
        com_tencent_mm_network_a_clz_method_aus_kw19.call(this);
    };
    var com_tencent_mm_network_a_clz_method_tX_sqlu = com_tencent_mm_network_a_clz.tX.overload('java.lang.String');
    com_tencent_mm_network_a_clz_method_tX_sqlu.implementation = function(v0) {
        printStacks('public final byte[] com.tencent.mm.network.a.tX(java.lang.String)');
        return com_tencent_mm_network_a_clz_method_tX_sqlu.call(this, v0);
    };
    var com_tencent_mm_network_a_clz_method_tY_e14b = com_tencent_mm_network_a_clz.tY.overload('java.lang.String');
    com_tencent_mm_network_a_clz_method_tY_e14b.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.network.a.tY(java.lang.String)');
        return com_tencent_mm_network_a_clz_method_tY_e14b.call(this, v0);
    };
    var com_tencent_mm_network_a_clz_method_aun_ayge = com_tencent_mm_network_a_clz.aun.overload();
    com_tencent_mm_network_a_clz_method_aun_ayge.implementation = function() {
        printStacks('public final boolean com.tencent.mm.network.a.aun()');
        return com_tencent_mm_network_a_clz_method_aun_ayge.call(this);
    };
    var com_tencent_mm_network_a_clz_method_ak_v4rd = com_tencent_mm_network_a_clz.ak.overload('[B');
    com_tencent_mm_network_a_clz_method_ak_v4rd.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.a.ak(byte[])');
        com_tencent_mm_network_a_clz_method_ak_v4rd.call(this, v0);
    };
    var com_tencent_mm_network_a_clz_method_b_m5rb = com_tencent_mm_network_a_clz.b.overload('int', '[B', '[B');
    com_tencent_mm_network_a_clz_method_b_m5rb.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.network.a.b(int,byte[],byte[])');
        com_tencent_mm_network_a_clz_method_b_m5rb.call(this, v0, v1, v2);
    };
    var com_tencent_mm_network_a_clz_method_a_5b9j = com_tencent_mm_network_a_clz.a.overload('[B', '[B', '[B', 'int');
    com_tencent_mm_network_a_clz_method_a_5b9j.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.network.a.a(byte[],byte[],byte[],int)');
        com_tencent_mm_network_a_clz_method_a_5b9j.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_a_clz_method_am_dzoj = com_tencent_mm_network_a_clz.am.overload('[B');
    com_tencent_mm_network_a_clz_method_am_dzoj.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.a.am(byte[])');
        com_tencent_mm_network_a_clz_method_am_dzoj.call(this, v0);
    };
    var com_tencent_mm_network_a_clz_method_setUin_k61j = com_tencent_mm_network_a_clz.setUin.overload('int');
    com_tencent_mm_network_a_clz_method_setUin_k61j.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.a.setUin(int)');
        com_tencent_mm_network_a_clz_method_setUin_k61j.call(this, v0);
    };
    var com_tencent_mm_network_a_clz_method_tV_aw0d = com_tencent_mm_network_a_clz.tV.overload('java.lang.String');
    com_tencent_mm_network_a_clz_method_tV_aw0d.implementation = function(v0) {
        printStacks('public final byte[] com.tencent.mm.network.a.tV(java.lang.String)');
        return com_tencent_mm_network_a_clz_method_tV_aw0d.call(this, v0);
    };
    var com_tencent_mm_network_a_clz_method_tW_mdmr = com_tencent_mm_network_a_clz.tW.overload('java.lang.String');
    com_tencent_mm_network_a_clz_method_tW_mdmr.implementation = function(v0) {
        printStacks('public final byte[] com.tencent.mm.network.a.tW(java.lang.String)');
        return com_tencent_mm_network_a_clz_method_tW_mdmr.call(this, v0);
    };
    var com_tencent_mm_network_a_clz_method_aDI_br8v = com_tencent_mm_network_a_clz.aDI.overload();
    com_tencent_mm_network_a_clz_method_aDI_br8v.implementation = function() {
        printStacks('public final void com.tencent.mm.network.a.aDI()');
        com_tencent_mm_network_a_clz_method_aDI_br8v.call(this);
    };
    var com_tencent_mm_network_a_clz_method_al_3jtv = com_tencent_mm_network_a_clz.al.overload('[B');
    com_tencent_mm_network_a_clz_method_al_3jtv.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.a.al(byte[])');
        com_tencent_mm_network_a_clz_method_al_3jtv.call(this, v0);
    };
    var com_tencent_mm_network_a_clz_method_auo_hy9a = com_tencent_mm_network_a_clz.auo.overload();
    com_tencent_mm_network_a_clz_method_auo_hy9a.implementation = function() {
        printStacks('public final byte[] com.tencent.mm.network.a.auo()');
        return com_tencent_mm_network_a_clz_method_auo_hy9a.call(this);
    };
    var com_tencent_mm_network_a_clz_method_yz_txnr = com_tencent_mm_network_a_clz.yz.overload('java.lang.String');
    com_tencent_mm_network_a_clz_method_yz_txnr.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.a.yz(java.lang.String)');
        com_tencent_mm_network_a_clz_method_yz_txnr.call(this, v0);
    };
    var com_tencent_mm_network_a_clz_method_aur_zvt4 = com_tencent_mm_network_a_clz.aur.overload();
    com_tencent_mm_network_a_clz_method_aur_zvt4.implementation = function() {
        printStacks('public final void com.tencent.mm.network.a.aur()');
        com_tencent_mm_network_a_clz_method_aur_zvt4.call(this);
    };
    var com_tencent_mm_network_a_clz_method_ab_hn6i = com_tencent_mm_network_a_clz.ab.overload('[B');
    com_tencent_mm_network_a_clz_method_ab_hn6i.implementation = function(v0) {
        printStacks('public final int com.tencent.mm.network.a.ab(byte[])');
        return com_tencent_mm_network_a_clz_method_ab_hn6i.call(this, v0);
    };
    var com_tencent_mm_network_a_clz_method_aup_l1xt = com_tencent_mm_network_a_clz.aup.overload();
    com_tencent_mm_network_a_clz_method_aup_l1xt.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.network.a.aup()');
        return com_tencent_mm_network_a_clz_method_aup_l1xt.call(this);
    };
    var com_tencent_mm_network_a_clz_method_toString_lahx = com_tencent_mm_network_a_clz.toString.overload();
    com_tencent_mm_network_a_clz_method_toString_lahx.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.network.a.toString()');
        return com_tencent_mm_network_a_clz_method_toString_lahx.call(this);
    };
    var com_tencent_mm_network_a_clz_method_isForeground_8qzc = com_tencent_mm_network_a_clz.isForeground.overload();
    com_tencent_mm_network_a_clz_method_isForeground_8qzc.implementation = function() {
        printStacks('public final boolean com.tencent.mm.network.a.isForeground()');
        return com_tencent_mm_network_a_clz_method_isForeground_8qzc.call(this);
    };
    var com_tencent_mm_network_a_clz_method_getUsername_o7gp = com_tencent_mm_network_a_clz.getUsername.overload();
    com_tencent_mm_network_a_clz_method_getUsername_o7gp.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.network.a.getUsername()');
        return com_tencent_mm_network_a_clz_method_getUsername_o7gp.call(this);
    };
    var com_tencent_mm_network_a_clz_method_yA_lsy9 = com_tencent_mm_network_a_clz.yA.overload('java.lang.String');
    com_tencent_mm_network_a_clz_method_yA_lsy9.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.network.a.yA(java.lang.String)');
        return com_tencent_mm_network_a_clz_method_yA_lsy9.call(this, v0);
    };
    var com_tencent_mm_network_a_clz_method_clear_kqk4 = com_tencent_mm_network_a_clz.clear.overload();
    com_tencent_mm_network_a_clz_method_clear_kqk4.implementation = function() {
        printStacks('private void com.tencent.mm.network.a.clear()');
        com_tencent_mm_network_a_clz_method_clear_kqk4.call(this);
    };
    var com_tencent_mm_network_a_clz_method_setUsername_z1fp = com_tencent_mm_network_a_clz.setUsername.overload('java.lang.String');
    com_tencent_mm_network_a_clz_method_setUsername_z1fp.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.a.setUsername(java.lang.String)');
        com_tencent_mm_network_a_clz_method_setUsername_z1fp.call(this, v0);
    };
    var com_tencent_mm_network_a_clz_method_yB_hghr = com_tencent_mm_network_a_clz.yB.overload('java.lang.String');
    com_tencent_mm_network_a_clz_method_yB_hghr.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.network.a.yB(java.lang.String)');
        return com_tencent_mm_network_a_clz_method_yB_hghr.call(this, v0);
    };
    var com_tencent_mm_network_a_clz_method_aum_x0xe = com_tencent_mm_network_a_clz.aum.overload();
    com_tencent_mm_network_a_clz_method_aum_x0xe.implementation = function() {
        printStacks('public final byte[] com.tencent.mm.network.a.aum()');
        return com_tencent_mm_network_a_clz_method_aum_x0xe.call(this);
    };
    var com_tencent_mm_network_a_clz_method_mh_j95y = com_tencent_mm_network_a_clz.mh.overload('int');
    com_tencent_mm_network_a_clz_method_mh_j95y.implementation = function(v0) {
        printStacks('public final byte[] com.tencent.mm.network.a.mh(int)');
        return com_tencent_mm_network_a_clz_method_mh_j95y.call(this, v0);
    };
    var com_tencent_mm_network_a_clz_method_tU_rw2b = com_tencent_mm_network_a_clz.tU.overload('java.lang.String');
    com_tencent_mm_network_a_clz_method_tU_rw2b.implementation = function(v0) {
        printStacks('public final byte[] com.tencent.mm.network.a.tU(java.lang.String)');
        return com_tencent_mm_network_a_clz_method_tU_rw2b.call(this, v0);
    };
    var com_tencent_mm_network_a_clz_method_auq_njlb = com_tencent_mm_network_a_clz.auq.overload();
    com_tencent_mm_network_a_clz_method_auq_njlb.implementation = function() {
        printStacks('public final byte[] com.tencent.mm.network.a.auq()');
        return com_tencent_mm_network_a_clz_method_auq_njlb.call(this);
    };
    var com_tencent_mm_network_a_clz_method_getUin_vbsn = com_tencent_mm_network_a_clz.getUin.overload();
    com_tencent_mm_network_a_clz_method_getUin_vbsn.implementation = function() {
        printStacks('public final int com.tencent.mm.network.a.getUin()');
        return com_tencent_mm_network_a_clz_method_getUin_vbsn.call(this);
    };
    var com_tencent_mm_network_a_clz_method_h_lfni = com_tencent_mm_network_a_clz.h.overload('java.lang.String', '[B');
    com_tencent_mm_network_a_clz_method_h_lfni.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.network.a.h(java.lang.String,byte[])');
        com_tencent_mm_network_a_clz_method_h_lfni.call(this, v0, v1);
    };
    var com_tencent_mm_network_a_clz_method_h_xena = com_tencent_mm_network_a_clz.h.overload('int', '[B');
    com_tencent_mm_network_a_clz_method_h_xena.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.network.a.h(int,byte[])');
        com_tencent_mm_network_a_clz_method_h_xena.call(this, v0, v1);
    };
    var com_tencent_mm_network_a_clz_method_dU_m8ll = com_tencent_mm_network_a_clz.dU.overload('boolean');
    com_tencent_mm_network_a_clz_method_dU_m8ll.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.a.dU(boolean)');
        com_tencent_mm_network_a_clz_method_dU_m8ll.call(this, v0);
    };
    var com_tencent_mm_network_a_clz_method_aDG_jv2i = com_tencent_mm_network_a_clz.aDG.overload();
    com_tencent_mm_network_a_clz_method_aDG_jv2i.implementation = function() {
        printStacks('private void com.tencent.mm.network.a.aDG()');
        com_tencent_mm_network_a_clz_method_aDG_jv2i.call(this);
    };
    var com_tencent_mm_network_a_clz_method_aDH_726s = com_tencent_mm_network_a_clz.aDH.overload();
    com_tencent_mm_network_a_clz_method_aDH_726s.implementation = function() {
        printStacks('private java.lang.String com.tencent.mm.network.a.aDH()');
        return com_tencent_mm_network_a_clz_method_aDH_726s.call(this);
    };
    var com_tencent_mm_network_a_clz_method_reset_tsll = com_tencent_mm_network_a_clz.reset.overload();
    com_tencent_mm_network_a_clz_method_reset_tsll.implementation = function() {
        printStacks('public final void com.tencent.mm.network.a.reset()');
        com_tencent_mm_network_a_clz_method_reset_tsll.call(this);
    };
    var com_tencent_mm_network_a_clz_init_lzoc = com_tencent_mm_network_a_clz.$init.overload('com.tencent.mm.network.a$b');
    com_tencent_mm_network_a_clz_init_lzoc.implementation = function(v0) {
        printStacks('public com.tencent.mm.network.a(com.tencent.mm.network.a$b)');
        return com_tencent_mm_network_a_clz_init_lzoc.call(this, v0);
    };
    var com_tencent_mm_network_b_clz = Java.use('com.tencent.mm.network.b');
    var com_tencent_mm_network_b_clz_method_yC_5kqa = com_tencent_mm_network_b_clz.yC.overload('java.lang.String');
    com_tencent_mm_network_b_clz_method_yC_5kqa.implementation = function(v0) {
        printStacks('public static com.tencent.mm.network.v com.tencent.mm.network.b.yC(java.lang.String)');
        return com_tencent_mm_network_b_clz_method_yC_5kqa.call(com_tencent_mm_network_b_clz, v0);
    };
    var com_tencent_mm_network_b_clz_method_v_1eqp = com_tencent_mm_network_b_clz.v.overload('java.lang.String', 'int', 'int');
    com_tencent_mm_network_b_clz_method_v_1eqp.implementation = function(v0, v1, v2) {
        printStacks('public static java.io.InputStream com.tencent.mm.network.b.v(java.lang.String,int,int)');
        return com_tencent_mm_network_b_clz_method_v_1eqp.call(com_tencent_mm_network_b_clz, v0, v1, v2);
    };
    var com_tencent_mm_network_b_clz_method_yD_3rkb = com_tencent_mm_network_b_clz.yD.overload('java.lang.String');
    com_tencent_mm_network_b_clz_method_yD_3rkb.implementation = function(v0) {
        printStacks('public static com.tencent.mm.network.x com.tencent.mm.network.b.yD(java.lang.String)');
        return com_tencent_mm_network_b_clz_method_yD_3rkb.call(com_tencent_mm_network_b_clz, v0);
    };
    var com_tencent_mm_network_b_clz_method_a_hhcg = com_tencent_mm_network_b_clz.a.overload('java.lang.String', 'boolean', 'java.util.List');
    com_tencent_mm_network_b_clz_method_a_hhcg.implementation = function(v0, v1, v2) {
        printStacks('public static int com.tencent.mm.network.b.a(java.lang.String'+v0+',boolean,java.util.List)');
        return com_tencent_mm_network_b_clz_method_a_hhcg.call(com_tencent_mm_network_b_clz, v0, v1, v2);
    };
    var com_tencent_mm_network_b_clz_method_yE_7ny5 = com_tencent_mm_network_b_clz.yE.overload('java.lang.String');
    com_tencent_mm_network_b_clz_method_yE_7ny5.implementation = function(v0) {
        printStacks('public static com.tencent.mm.network.y com.tencent.mm.network.b.yE(java.lang.String)');
        return com_tencent_mm_network_b_clz_method_yE_7ny5.call(com_tencent_mm_network_b_clz, v0);
    };
    var com_tencent_mm_network_b_clz_method_a_oehc = com_tencent_mm_network_b_clz.a.overload('com.tencent.mm.network.b$a');
    com_tencent_mm_network_b_clz_method_a_oehc.implementation = function(v0) {
        printStacks('public static void com.tencent.mm.network.b.a(com.tencent.mm.network.b$a)');
        com_tencent_mm_network_b_clz_method_a_oehc.call(com_tencent_mm_network_b_clz, v0);
    };
    var com_tencent_mm_network_b_clz_method_a_yxoo = com_tencent_mm_network_b_clz.a.overload('com.tencent.mm.network.w');
    com_tencent_mm_network_b_clz_method_a_yxoo.implementation = function(v0) {
        printStacks('public static int com.tencent.mm.network.b.a(com.tencent.mm.network.w)');
        return com_tencent_mm_network_b_clz_method_a_yxoo.call(com_tencent_mm_network_b_clz, v0);
    };
    var com_tencent_mm_network_b_clz_method_a_oehy = com_tencent_mm_network_b_clz.a.overload('java.lang.String', 'com.tencent.mm.network.b$b');
    com_tencent_mm_network_b_clz_method_a_oehy.implementation = function(v0, v1) {
        printStacks('public static com.tencent.mm.network.v com.tencent.mm.network.b.a(java.lang.String,com.tencent.mm.network.b$b)');
        return com_tencent_mm_network_b_clz_method_a_oehy.call(com_tencent_mm_network_b_clz, v0, v1);
    };
    var com_tencent_mm_network_b_clz_method_b_qh3p = com_tencent_mm_network_b_clz.b.overload('boolean', 'java.util.List', 'java.lang.String');
    com_tencent_mm_network_b_clz_method_b_qh3p.implementation = function(v0, v1, v2) {
        printStacks('public static int com.tencent.mm.network.b.b(boolean,java.util.List,java.lang.String)');
        return com_tencent_mm_network_b_clz_method_b_qh3p.call(com_tencent_mm_network_b_clz, v0, v1, v2);
    };
    var com_tencent_mm_network_b_clz_method_reportFailIp_vrbf = com_tencent_mm_network_b_clz.reportFailIp.overload('java.lang.String');
    com_tencent_mm_network_b_clz_method_reportFailIp_vrbf.implementation = function(v0) {
        printStacks('public static void com.tencent.mm.network.b.reportFailIp(java.lang.String)');
        com_tencent_mm_network_b_clz_method_reportFailIp_vrbf.call(com_tencent_mm_network_b_clz, v0);
    };
    var com_tencent_mm_network_p_clz = Java.use('com.tencent.mm.network.p');
    var com_tencent_mm_network_p_clz_method_setNewDnsDebugHostInfo_3rfp = com_tencent_mm_network_p_clz.setNewDnsDebugHostInfo.overload('java.lang.String', 'int');
    com_tencent_mm_network_p_clz_method_setNewDnsDebugHostInfo_3rfp.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.network.p.setNewDnsDebugHostInfo(java.lang.String,int)');
        com_tencent_mm_network_p_clz_method_setNewDnsDebugHostInfo_3rfp.call(this, v0, v1);
    };
    var com_tencent_mm_network_p_clz_method_getUploadLogExtrasInfo_wt9w = com_tencent_mm_network_p_clz.getUploadLogExtrasInfo.overload('java.lang.String');
    com_tencent_mm_network_p_clz_method_getUploadLogExtrasInfo_wt9w.implementation = function(v0) {
        printStacks('public final java.lang.String com.tencent.mm.network.p.getUploadLogExtrasInfo(java.lang.String)');
        return com_tencent_mm_network_p_clz_method_getUploadLogExtrasInfo_wt9w.call(this, v0);
    };
    var com_tencent_mm_network_p_clz_method_uploadLogFail_gqtf = com_tencent_mm_network_p_clz.uploadLogFail.overload();
    com_tencent_mm_network_p_clz_method_uploadLogFail_gqtf.implementation = function() {
        printStacks('public final void com.tencent.mm.network.p.uploadLogFail()');
        com_tencent_mm_network_p_clz_method_uploadLogFail_gqtf.call(this);
    };
    var com_tencent_mm_network_p_clz_method_recoverLinkAddrs_qyxk = com_tencent_mm_network_p_clz.recoverLinkAddrs.overload();
    com_tencent_mm_network_p_clz_method_recoverLinkAddrs_qyxk.implementation = function() {
        printStacks('public final void com.tencent.mm.network.p.recoverLinkAddrs()');
        com_tencent_mm_network_p_clz_method_recoverLinkAddrs_qyxk.call(this);
    };
    var com_tencent_mm_network_p_clz_method_oX_g8k1 = com_tencent_mm_network_p_clz.oX.overload('int');
    com_tencent_mm_network_p_clz_method_oX_g8k1.implementation = function(v0) {
        printStacks('private static void com.tencent.mm.network.p.oX(int)');
        com_tencent_mm_network_p_clz_method_oX_g8k1.call(com_tencent_mm_network_p_clz, v0);
    };
    var com_tencent_mm_network_p_clz_method_uploadLogSuccess_5era = com_tencent_mm_network_p_clz.uploadLogSuccess.overload();
    com_tencent_mm_network_p_clz_method_uploadLogSuccess_5era.implementation = function() {
        printStacks('public final void com.tencent.mm.network.p.uploadLogSuccess()');
        com_tencent_mm_network_p_clz_method_uploadLogSuccess_5era.call(this);
    };
    var com_tencent_mm_network_p_clz_method_getCrashFilePath_m18h = com_tencent_mm_network_p_clz.getCrashFilePath.overload('int');
    com_tencent_mm_network_p_clz_method_getCrashFilePath_m18h.implementation = function(v0) {
        printStacks('public final java.lang.String com.tencent.mm.network.p.getCrashFilePath(int)');
        return com_tencent_mm_network_p_clz_method_getCrashFilePath_m18h.call(this, v0);
    };
    var com_tencent_mm_network_p_clz_method_uploadLogResponse_173b = com_tencent_mm_network_p_clz.uploadLogResponse.overload('long', 'long');
    com_tencent_mm_network_p_clz_method_uploadLogResponse_173b.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.network.p.uploadLogResponse(long,long)');
        com_tencent_mm_network_p_clz_method_uploadLogResponse_173b.call(this, v0, v1);
    };
    var com_tencent_mm_network_p_clz_init_p3ld = com_tencent_mm_network_p_clz.$init.overload();
    com_tencent_mm_network_p_clz_init_p3ld.implementation = function() {
        printStacks('public com.tencent.mm.network.p()');
        return com_tencent_mm_network_p_clz_init_p3ld.call(this);
    };
    var com_tencent_mm_network_h_a_a_clz = Java.use('com.tencent.mm.network.h$a$a');
    var com_tencent_mm_network_h_a_a_clz_method_networkAnalysisCallBack_u0jo = com_tencent_mm_network_h_a_a_clz.networkAnalysisCallBack.overload('int', 'int', 'boolean', 'java.lang.String');
    com_tencent_mm_network_h_a_a_clz_method_networkAnalysisCallBack_u0jo.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.network.h$a$a.networkAnalysisCallBack(int,int,boolean,java.lang.String)');
        com_tencent_mm_network_h_a_a_clz_method_networkAnalysisCallBack_u0jo.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_h_a_a_clz_method_asBinder_j7vk = com_tencent_mm_network_h_a_a_clz.asBinder.overload();
    com_tencent_mm_network_h_a_a_clz_method_asBinder_j7vk.implementation = function() {
        printStacks('public final android.os.IBinder com.tencent.mm.network.h$a$a.asBinder()');
        return com_tencent_mm_network_h_a_a_clz_method_asBinder_j7vk.call(this);
    };
    var com_tencent_mm_network_h_a_a_clz_init_0prp = com_tencent_mm_network_h_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_h_a_a_clz_init_0prp.implementation = function(v0) {
        printStacks('com.tencent.mm.network.h$a$a(android.os.IBinder)');
        return com_tencent_mm_network_h_a_a_clz_init_0prp.call(this, v0);
    };
    var com_tencent_mm_network_t_clz = Java.use('com.tencent.mm.network.t');
    var com_tencent_mm_network_t_clz_method_a_3099 = com_tencent_mm_network_t_clz.a.overload('com.tencent.mm.network.a.b');
    com_tencent_mm_network_t_clz_method_a_3099.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.t.a(com.tencent.mm.network.a.b)');
        com_tencent_mm_network_t_clz_method_a_3099.call(this, v0);
    };
    var com_tencent_mm_network_t_clz_method_m_a044 = com_tencent_mm_network_t_clz.m.overload('int', 'int', 'java.lang.String');
    com_tencent_mm_network_t_clz_method_m_a044.implementation = function(v0, v1, v2) {
        printStacks('final void com.tencent.mm.network.t.m(int,int,java.lang.String)');
        com_tencent_mm_network_t_clz_method_m_a044.call(this, v0, v1, v2);
    };
    var com_tencent_mm_network_t_clz_method_ua_gpwt = com_tencent_mm_network_t_clz.ua.overload('java.lang.String');
    com_tencent_mm_network_t_clz_method_ua_gpwt.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.t.ua(java.lang.String)');
        com_tencent_mm_network_t_clz_method_ua_gpwt.call(this, v0);
    };
    var com_tencent_mm_network_t_clz_method_c_718c = com_tencent_mm_network_t_clz.c.overload('java.lang.String', 'long', 'java.lang.String');
    com_tencent_mm_network_t_clz_method_c_718c.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.network.t.c(java.lang.String,long,java.lang.String)');
        com_tencent_mm_network_t_clz_method_c_718c.call(this, v0, v1, v2);
    };
    var com_tencent_mm_network_t_clz_method_reportFailIp_yv1l = com_tencent_mm_network_t_clz.reportFailIp.overload('java.lang.String');
    com_tencent_mm_network_t_clz_method_reportFailIp_yv1l.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.t.reportFailIp(java.lang.String)');
        com_tencent_mm_network_t_clz_method_reportFailIp_yv1l.call(this, v0);
    };
    var com_tencent_mm_network_t_clz_method_e_dqed = com_tencent_mm_network_t_clz.e.overload('com.tencent.mm.network.t');
    com_tencent_mm_network_t_clz_method_e_dqed.implementation = function(v0) {
        printStacks('static long com.tencent.mm.network.t.e(com.tencent.mm.network.t)');
        return com_tencent_mm_network_t_clz_method_e_dqed.call(com_tencent_mm_network_t_clz, v0);
    };
    var com_tencent_mm_network_t_clz_method_aDK_tewh = com_tencent_mm_network_t_clz.aDK.overload();
    com_tencent_mm_network_t_clz_method_aDK_tewh.implementation = function() {
        printStacks('public final void com.tencent.mm.network.t.aDK()');
        com_tencent_mm_network_t_clz_method_aDK_tewh.call(this);
    };
    var com_tencent_mm_network_t_clz_method_setNewDnsDebugHost_34tz = com_tencent_mm_network_t_clz.setNewDnsDebugHost.overload('java.lang.String', 'java.lang.String');
    com_tencent_mm_network_t_clz_method_setNewDnsDebugHost_34tz.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.network.t.setNewDnsDebugHost(java.lang.String,java.lang.String)');
        com_tencent_mm_network_t_clz_method_setNewDnsDebugHost_34tz.call(this, v0, v1);
    };
    var com_tencent_mm_network_t_clz_method_reportV6Status_qxea = com_tencent_mm_network_t_clz.reportV6Status.overload('boolean');
    com_tencent_mm_network_t_clz_method_reportV6Status_qxea.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.t.reportV6Status(boolean)');
        com_tencent_mm_network_t_clz_method_reportV6Status_qxea.call(this, v0);
    };
    var com_tencent_mm_network_t_clz_method_aDJ_0t31 = com_tencent_mm_network_t_clz.aDJ.overload();
    com_tencent_mm_network_t_clz_method_aDJ_0t31.implementation = function() {
        printStacks('public final com.tencent.mm.network.d com.tencent.mm.network.t.aDJ()');
        return com_tencent_mm_network_t_clz_method_aDJ_0t31.call(this);
    };
    var com_tencent_mm_network_t_clz_method_a_0usp = com_tencent_mm_network_t_clz.a.overload('com.tencent.mm.protocal.ab');
    com_tencent_mm_network_t_clz_method_a_0usp.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.t.a(com.tencent.mm.protocal.ab)');
        com_tencent_mm_network_t_clz_method_a_0usp.call(this, v0);
    };
    var com_tencent_mm_network_t_clz_method_auw_3j4k = com_tencent_mm_network_t_clz.auw.overload();
    com_tencent_mm_network_t_clz_method_auw_3j4k.implementation = function() {
        printStacks('public final void com.tencent.mm.network.t.auw()');
        com_tencent_mm_network_t_clz_method_auw_3j4k.call(this);
    };
    var com_tencent_mm_network_t_clz_method_aDQ_cqb2 = com_tencent_mm_network_t_clz.aDQ.overload();
    com_tencent_mm_network_t_clz_method_aDQ_cqb2.implementation = function() {
        printStacks('public final byte[] com.tencent.mm.network.t.aDQ()');
        return com_tencent_mm_network_t_clz_method_aDQ_cqb2.call(this);
    };
    var com_tencent_mm_network_t_clz_method_b_0bgu = com_tencent_mm_network_t_clz.b.overload('com.tencent.mm.network.t');
    com_tencent_mm_network_t_clz_method_b_0bgu.implementation = function(v0) {
        printStacks('static com.tencent.mm.network.a com.tencent.mm.network.t.b(com.tencent.mm.network.t)');
        return com_tencent_mm_network_t_clz_method_b_0bgu.call(com_tencent_mm_network_t_clz, v0);
    };
    var com_tencent_mm_network_t_clz_method_a_bht9 = com_tencent_mm_network_t_clz.a.overload('com.tencent.mm.network.r', 'com.tencent.mm.network.l');
    com_tencent_mm_network_t_clz_method_a_bht9.implementation = function(v0, v1) {
        printStacks('public final synchronized int com.tencent.mm.network.t.a(com.tencent.mm.network.r,com.tencent.mm.network.l)');
        return com_tencent_mm_network_t_clz_method_a_bht9.call(this, v0, v1);
    };
    var com_tencent_mm_network_t_clz_method_aDR_3wkb = com_tencent_mm_network_t_clz.aDR.overload();
    com_tencent_mm_network_t_clz_method_aDR_3wkb.implementation = function() {
        printStacks('public final boolean com.tencent.mm.network.t.aDR()');
        return com_tencent_mm_network_t_clz_method_aDR_3wkb.call(this);
    };
    var com_tencent_mm_network_t_clz_method_aDL_8vva = com_tencent_mm_network_t_clz.aDL.overload();
    com_tencent_mm_network_t_clz_method_aDL_8vva.implementation = function() {
        printStacks('public final com.tencent.mm.network.i com.tencent.mm.network.t.aDL()');
        return com_tencent_mm_network_t_clz_method_aDL_8vva.call(this);
    };
    var com_tencent_mm_network_t_clz_method_cancel_u6pd = com_tencent_mm_network_t_clz.cancel.overload('int');
    com_tencent_mm_network_t_clz_method_cancel_u6pd.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.t.cancel(int)');
        com_tencent_mm_network_t_clz_method_cancel_u6pd.call(this, v0);
    };
    var com_tencent_mm_network_t_clz_method_a_4y2m = com_tencent_mm_network_t_clz.a.overload('com.tencent.mm.network.t');
    com_tencent_mm_network_t_clz_method_a_4y2m.implementation = function(v0) {
        printStacks('static com.tencent.mm.sdk.platformtools.ap com.tencent.mm.network.t.a(com.tencent.mm.network.t)');
        return com_tencent_mm_network_t_clz_method_a_4y2m.call(com_tencent_mm_network_t_clz, v0);
    };
    var com_tencent_mm_network_t_clz_method_f_alfr = com_tencent_mm_network_t_clz.f.overload('com.tencent.mm.network.t');
    com_tencent_mm_network_t_clz_method_f_alfr.implementation = function(v0) {
        printStacks('static com.tencent.mars.comm.WakerLock com.tencent.mm.network.t.f(com.tencent.mm.network.t)');
        return com_tencent_mm_network_t_clz_method_f_alfr.call(com_tencent_mm_network_t_clz, v0);
    };
    var com_tencent_mm_network_t_clz_method_b_jo8k = com_tencent_mm_network_t_clz.b.overload('com.tencent.mm.protocal.protobuf.hg');
    com_tencent_mm_network_t_clz_method_b_jo8k.implementation = function(v0) {
        printStacks('private void com.tencent.mm.network.t.b(com.tencent.mm.protocal.protobuf.hg)');
        com_tencent_mm_network_t_clz_method_b_jo8k.call(this, v0);
    };
    var com_tencent_mm_network_t_clz_method_auf_ttqs = com_tencent_mm_network_t_clz.auf.overload();
    com_tencent_mm_network_t_clz_method_auf_ttqs.implementation = function() {
        printStacks('public final boolean com.tencent.mm.network.t.auf()');
        return com_tencent_mm_network_t_clz_method_auf_ttqs.call(this);
    };
    var com_tencent_mm_network_t_clz_method_a_74lf = com_tencent_mm_network_t_clz.a.overload('com.tencent.mm.network.t', 'com.tencent.mm.network.r', 'java.lang.String');
    com_tencent_mm_network_t_clz_method_a_74lf.implementation = function(v0, v1, v2) {
        printStacks('static void com.tencent.mm.network.t.a(com.tencent.mm.network.t,com.tencent.mm.network.r,java.lang.String)');
        com_tencent_mm_network_t_clz_method_a_74lf.call(com_tencent_mm_network_t_clz, v0, v1, v2);
    };
    var com_tencent_mm_network_t_clz_method_a_0648 = com_tencent_mm_network_t_clz.a.overload('boolean', 'java.util.List');
    com_tencent_mm_network_t_clz_method_a_0648.implementation = function(v0, v1) {
        printStacks('public final int com.tencent.mm.network.t.a(boolean,java.util.List)');
        return com_tencent_mm_network_t_clz_method_a_0648.call(this, v0, v1);
    };
    var com_tencent_mm_network_t_clz_method_d_o8ck = com_tencent_mm_network_t_clz.d.overload('com.tencent.mm.network.t');
    com_tencent_mm_network_t_clz_method_d_o8ck.implementation = function(v0) {
        printStacks('static void com.tencent.mm.network.t.d(com.tencent.mm.network.t)');
        com_tencent_mm_network_t_clz_method_d_o8ck.call(com_tencent_mm_network_t_clz, v0);
    };
    var com_tencent_mm_network_t_clz_method_i_axj7 = com_tencent_mm_network_t_clz.i.overload('int', '[B');
    com_tencent_mm_network_t_clz_method_i_axj7.implementation = function(v0, v1) {
        printStacks('public final int com.tencent.mm.network.t.i(int,byte[])');
        return com_tencent_mm_network_t_clz_method_i_axj7.call(this, v0, v1);
    };
    var com_tencent_mm_network_t_clz_method_forceUseV6_zu8n = com_tencent_mm_network_t_clz.forceUseV6.overload('boolean');
    com_tencent_mm_network_t_clz_method_forceUseV6_zu8n.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.t.forceUseV6(boolean)');
        com_tencent_mm_network_t_clz_method_forceUseV6_zu8n.call(this, v0);
    };
    var com_tencent_mm_network_t_clz_method_dX_8hls = com_tencent_mm_network_t_clz.dX.overload('boolean');
    com_tencent_mm_network_t_clz_method_dX_8hls.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.t.dX(boolean)');
        com_tencent_mm_network_t_clz_method_dX_8hls.call(this, v0);
    };
    var com_tencent_mm_network_t_clz_method_a_boi2 = com_tencent_mm_network_t_clz.a.overload('java.lang.String', 'boolean', 'java.util.List');
    com_tencent_mm_network_t_clz_method_a_boi2.implementation = function(v0, v1, v2) {
        printStacks('public final int com.tencent.mm.network.t.a(java.lang.String,boolean,java.util.List)');
        return com_tencent_mm_network_t_clz_method_a_boi2.call(this, v0, v1, v2);
    };
    var com_tencent_mm_network_t_clz_method_a_3pu9 = com_tencent_mm_network_t_clz.a.overload('int', 'java.lang.String', 'int', 'boolean');
    com_tencent_mm_network_t_clz_method_a_3pu9.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.network.t.a(int,java.lang.String,int,boolean)');
        com_tencent_mm_network_t_clz_method_a_3pu9.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_t_clz_method_c_dn1c = com_tencent_mm_network_t_clz.c.overload('com.tencent.mm.network.t');
    com_tencent_mm_network_t_clz_method_c_dn1c.implementation = function(v0) {
        printStacks('static com.tencent.mm.network.t$b com.tencent.mm.network.t.c(com.tencent.mm.network.t)');
        return com_tencent_mm_network_t_clz_method_c_dn1c.call(com_tencent_mm_network_t_clz, v0);
    };
    var com_tencent_mm_network_t_clz_method_reset_r8yi = com_tencent_mm_network_t_clz.reset.overload();
    com_tencent_mm_network_t_clz_method_reset_r8yi.implementation = function() {
        printStacks('public final void com.tencent.mm.network.t.reset()');
        com_tencent_mm_network_t_clz_method_reset_r8yi.call(this);
    };
    var com_tencent_mm_network_t_clz_method_a_zcub = com_tencent_mm_network_t_clz.a.overload('com.tencent.mm.network.s');
    com_tencent_mm_network_t_clz_method_a_zcub.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.t.a(com.tencent.mm.network.s)');
        com_tencent_mm_network_t_clz_method_a_zcub.call(this, v0);
    };
    var com_tencent_mm_network_t_clz_method_ao_g8tk = com_tencent_mm_network_t_clz.ao.overload('[B');
    com_tencent_mm_network_t_clz_method_ao_g8tk.implementation = function(v0) {
        printStacks('final void com.tencent.mm.network.t.ao(byte[])');
        com_tencent_mm_network_t_clz_method_ao_g8tk.call(this, v0);
    };
    var com_tencent_mm_network_t_clz_method_finalize_smgt = com_tencent_mm_network_t_clz.finalize.overload();
    com_tencent_mm_network_t_clz_method_finalize_smgt.implementation = function() {
        printStacks('protected final void com.tencent.mm.network.t.finalize()');
        com_tencent_mm_network_t_clz_method_finalize_smgt.call(this);
    };
    var com_tencent_mm_network_t_clz_method_oZ_wldb = com_tencent_mm_network_t_clz.oZ.overload('int');
    com_tencent_mm_network_t_clz_method_oZ_wldb.implementation = function(v0) {
        printStacks('static void com.tencent.mm.network.t.oZ(int)');
        com_tencent_mm_network_t_clz_method_oZ_wldb.call(com_tencent_mm_network_t_clz, v0);
    };
    var com_tencent_mm_network_t_clz_method_a_k1op = com_tencent_mm_network_t_clz.a.overload('com.tencent.mm.network.t', 'com.tencent.mm.network.r', 'com.tencent.mm.network.l');
    com_tencent_mm_network_t_clz_method_a_k1op.implementation = function(v0, v1, v2) {
        printStacks('static int com.tencent.mm.network.t.a(com.tencent.mm.network.t,com.tencent.mm.network.r,com.tencent.mm.network.l)');
        return com_tencent_mm_network_t_clz_method_a_k1op.call(com_tencent_mm_network_t_clz, v0, v1, v2);
    };
    var com_tencent_mm_network_t_clz_method_a_9zrq = com_tencent_mm_network_t_clz.a.overload('com.tencent.mm.network.g');
    com_tencent_mm_network_t_clz_method_a_9zrq.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.t.a(com.tencent.mm.network.g)');
        com_tencent_mm_network_t_clz_method_a_9zrq.call(this, v0);
    };
    var com_tencent_mm_network_t_clz_method_b_hkt9 = com_tencent_mm_network_t_clz.b.overload('com.tencent.mm.network.r', 'com.tencent.mm.network.l');
    com_tencent_mm_network_t_clz_method_b_hkt9.implementation = function(v0, v1) {
        printStacks('private int com.tencent.mm.network.t.b(com.tencent.mm.network.r,com.tencent.mm.network.l)');
        return com_tencent_mm_network_t_clz_method_b_hkt9.call(this, v0, v1);
    };
    var com_tencent_mm_network_t_clz_method_aut_pb7l = com_tencent_mm_network_t_clz.aut.overload();
    com_tencent_mm_network_t_clz_method_aut_pb7l.implementation = function() {
        printStacks('public final com.tencent.mm.network.c com.tencent.mm.network.t.aut()');
        return com_tencent_mm_network_t_clz_method_aut_pb7l.call(this);
    };
    var com_tencent_mm_network_t_clz_method_setHostInfo_ic9g = com_tencent_mm_network_t_clz.setHostInfo.overload('[Ljava.lang.String;', '[Ljava.lang.String;', '[I');
    com_tencent_mm_network_t_clz_method_setHostInfo_ic9g.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.network.t.setHostInfo(java.lang.String[],java.lang.String[],int[])');
        com_tencent_mm_network_t_clz_method_setHostInfo_ic9g.call(this, v0, v1, v2);
    };
    var com_tencent_mm_network_t_clz_method_getIspId_q3ks = com_tencent_mm_network_t_clz.getIspId.overload();
    com_tencent_mm_network_t_clz_method_getIspId_q3ks.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.network.t.getIspId()');
        return com_tencent_mm_network_t_clz_method_getIspId_q3ks.call(this);
    };
    var com_tencent_mm_network_t_clz_method_dW_ea5h = com_tencent_mm_network_t_clz.dW.overload('boolean');
    com_tencent_mm_network_t_clz_method_dW_ea5h.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.t.dW(boolean)');
        com_tencent_mm_network_t_clz_method_dW_ea5h.call(this, v0);
    };
    var com_tencent_mm_network_t_clz_method_dV_nw3r = com_tencent_mm_network_t_clz.dV.overload('boolean');
    com_tencent_mm_network_t_clz_method_dV_nw3r.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.t.dV(boolean)');
        com_tencent_mm_network_t_clz_method_dV_nw3r.call(this, v0);
    };
    var com_tencent_mm_network_t_clz_method_addHostInfo_uz0s = com_tencent_mm_network_t_clz.addHostInfo.overload('[Ljava.lang.String;', '[Ljava.lang.String;', '[I');
    com_tencent_mm_network_t_clz_method_addHostInfo_uz0s.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.network.t.addHostInfo(java.lang.String[],java.lang.String[],int[])');
        com_tencent_mm_network_t_clz_method_addHostInfo_uz0s.call(this, v0, v1, v2);
    };
    var com_tencent_mm_network_t_clz_method_c_kkyq = com_tencent_mm_network_t_clz.c.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_mm_network_t_clz_method_c_kkyq.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.network.t.c(java.lang.String,java.lang.String,java.lang.String,java.lang.String)');
        com_tencent_mm_network_t_clz_method_c_kkyq.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_t_clz_method_ub_dqdh = com_tencent_mm_network_t_clz.ub.overload('java.lang.String');
    com_tencent_mm_network_t_clz_method_ub_dqdh.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.t.ub(java.lang.String)');
        com_tencent_mm_network_t_clz_method_ub_dqdh.call(this, v0);
    };
    var com_tencent_mm_network_t_clz_method_oY_mu3k = com_tencent_mm_network_t_clz.oY.overload('int');
    com_tencent_mm_network_t_clz_method_oY_mu3k.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.t.oY(int)');
        com_tencent_mm_network_t_clz_method_oY_mu3k.call(this, v0);
    };
    var com_tencent_mm_network_t_clz_method_setSignallingStrategy_9x1q = com_tencent_mm_network_t_clz.setSignallingStrategy.overload('long', 'long');
    com_tencent_mm_network_t_clz_method_setSignallingStrategy_9x1q.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.network.t.setSignallingStrategy(long,long)');
        com_tencent_mm_network_t_clz_method_setSignallingStrategy_9x1q.call(this, v0, v1);
    };
    var com_tencent_mm_network_t_clz_method_a_ggrk = com_tencent_mm_network_t_clz.a.overload('com.tencent.mm.network.t', 'int', 'int', 'java.lang.String');
    com_tencent_mm_network_t_clz_method_a_ggrk.implementation = function(v0, v1, v2, v3) {
        printStacks('static void com.tencent.mm.network.t.a(com.tencent.mm.network.t,int,int,java.lang.String)');
        com_tencent_mm_network_t_clz_method_a_ggrk.call(com_tencent_mm_network_t_clz, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_t_clz_method_dY_y52v = com_tencent_mm_network_t_clz.dY.overload('boolean');
    com_tencent_mm_network_t_clz_method_dY_y52v.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.t.dY(boolean)');
        com_tencent_mm_network_t_clz_method_dY_y52v.call(this, v0);
    };
    var com_tencent_mm_network_t_clz_method_auv_e0ps = com_tencent_mm_network_t_clz.auv.overload();
    com_tencent_mm_network_t_clz_method_auv_e0ps.implementation = function() {
        printStacks('public final void com.tencent.mm.network.t.auv()');
        com_tencent_mm_network_t_clz_method_auv_e0ps.call(this);
    };
    var com_tencent_mm_network_t_clz_method_keepSignalling_nzpm = com_tencent_mm_network_t_clz.keepSignalling.overload();
    com_tencent_mm_network_t_clz_method_keepSignalling_nzpm.implementation = function() {
        printStacks('public final void com.tencent.mm.network.t.keepSignalling()');
        com_tencent_mm_network_t_clz_method_keepSignalling_nzpm.call(this);
    };
    var com_tencent_mm_network_t_clz_method_aDP_ldm4 = com_tencent_mm_network_t_clz.aDP.overload();
    com_tencent_mm_network_t_clz_method_aDP_ldm4.implementation = function() {
        printStacks('public final boolean com.tencent.mm.network.t.aDP()');
        return com_tencent_mm_network_t_clz_method_aDP_ldm4.call(this);
    };
    var com_tencent_mm_network_t_clz_method_m_uwmc = com_tencent_mm_network_t_clz.m.overload('java.lang.String', 'java.lang.String', 'int');
    com_tencent_mm_network_t_clz_method_m_uwmc.implementation = function(v0, v1, v2) {
        printStacks('final boolean com.tencent.mm.network.t.m(java.lang.String,java.lang.String,int)');
        return com_tencent_mm_network_t_clz_method_m_uwmc.call(this, v0, v1, v2);
    };
    var com_tencent_mm_network_t_clz_method_a_w3pk = com_tencent_mm_network_t_clz.a.overload('com.tencent.mm.network.h');
    com_tencent_mm_network_t_clz_method_a_w3pk.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.t.a(com.tencent.mm.network.h)');
        com_tencent_mm_network_t_clz_method_a_w3pk.call(this, v0);
    };
    var com_tencent_mm_network_t_clz_method_a_rbpf = com_tencent_mm_network_t_clz.a.overload('boolean', 'java.lang.String', 'java.lang.String', '[I', '[I', 'int', 'int', 'java.lang.String', 'java.lang.String');
    com_tencent_mm_network_t_clz_method_a_rbpf.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7, v8) {
        printStacks('public final void com.tencent.mm.network.t.a(boolean,java.lang.String,java.lang.String,int[],int[],int,int,java.lang.String,java.lang.String)');
        com_tencent_mm_network_t_clz_method_a_rbpf.call(this, v0, v1, v2, v3, v4, v5, v6, v7, v8);
    };
    var com_tencent_mm_network_t_clz_method_a_mt7n = com_tencent_mm_network_t_clz.a.overload('com.tencent.mm.network.t', 'com.tencent.mm.network.r');
    com_tencent_mm_network_t_clz_method_a_mt7n.implementation = function(v0, v1) {
        printStacks('static void com.tencent.mm.network.t.a(com.tencent.mm.network.t,com.tencent.mm.network.r)');
        com_tencent_mm_network_t_clz_method_a_mt7n.call(com_tencent_mm_network_t_clz, v0, v1);
    };
    var com_tencent_mm_network_t_clz_method_stopSignalling_mv78 = com_tencent_mm_network_t_clz.stopSignalling.overload();
    com_tencent_mm_network_t_clz_method_stopSignalling_mv78.implementation = function() {
        printStacks('public final void com.tencent.mm.network.t.stopSignalling()');
        com_tencent_mm_network_t_clz_method_stopSignalling_mv78.call(this);
    };
    var com_tencent_mm_network_t_clz_method_a_jx3g = com_tencent_mm_network_t_clz.a.overload('com.tencent.mm.network.r', 'int', 'int');
    com_tencent_mm_network_t_clz_method_a_jx3g.implementation = function(v0, v1, v2) {
        printStacks('final void com.tencent.mm.network.t.a(com.tencent.mm.network.r,int,int)');
        com_tencent_mm_network_t_clz_method_a_jx3g.call(this, v0, v1, v2);
    };
    var com_tencent_mm_network_t_clz_method_a_mpmu = com_tencent_mm_network_t_clz.a.overload('java.util.List', 'java.util.List', 'java.util.List', 'com.tencent.mm.protocal.protobuf.bef');
    com_tencent_mm_network_t_clz_method_a_mpmu.implementation = function(v0, v1, v2, v3) {
        printStacks('private static void com.tencent.mm.network.t.a(java.util.List,java.util.List,java.util.List,com.tencent.mm.protocal.protobuf.bef)');
        com_tencent_mm_network_t_clz_method_a_mpmu.call(com_tencent_mm_network_t_clz, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_t_clz_method_auu_55nr = com_tencent_mm_network_t_clz.auu.overload();
    com_tencent_mm_network_t_clz_method_auu_55nr.implementation = function() {
        printStacks('public final com.tencent.mm.network.i com.tencent.mm.network.t.auu()');
        return com_tencent_mm_network_t_clz_method_auu_55nr.call(this);
    };
    var com_tencent_mm_network_t_clz_method_a_5ueo = com_tencent_mm_network_t_clz.a.overload('com.tencent.mm.network.t', 'int');
    com_tencent_mm_network_t_clz_method_a_5ueo.implementation = function(v0, v1) {
        printStacks('static int com.tencent.mm.network.t.a(com.tencent.mm.network.t,int)');
        return com_tencent_mm_network_t_clz_method_a_5ueo.call(com_tencent_mm_network_t_clz, v0, v1);
    };
    var com_tencent_mm_network_t_clz_method_getNetworkServerIp_dyqc = com_tencent_mm_network_t_clz.getNetworkServerIp.overload();
    com_tencent_mm_network_t_clz_method_getNetworkServerIp_dyqc.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.network.t.getNetworkServerIp()');
        return com_tencent_mm_network_t_clz_method_getNetworkServerIp_dyqc.call(this);
    };
    var com_tencent_mm_network_t_clz_method_yG_hotf = com_tencent_mm_network_t_clz.yG.overload('java.lang.String');
    com_tencent_mm_network_t_clz_method_yG_hotf.implementation = function(v0) {
        printStacks('final boolean com.tencent.mm.network.t.yG(java.lang.String)');
        return com_tencent_mm_network_t_clz_method_yG_hotf.call(this, v0);
    };
    var com_tencent_mm_network_t_clz_method_getHostByName_8169 = com_tencent_mm_network_t_clz.getHostByName.overload('java.lang.String', 'java.util.List');
    com_tencent_mm_network_t_clz_method_getHostByName_8169.implementation = function(v0, v1) {
        printStacks('public final int com.tencent.mm.network.t.getHostByName(java.lang.String,java.util.List)');
        return com_tencent_mm_network_t_clz_method_getHostByName_8169.call(this, v0, v1);
    };
    var com_tencent_mm_network_t_clz_method_a_vwfw = com_tencent_mm_network_t_clz.a.overload('com.tencent.mm.network.o');
    com_tencent_mm_network_t_clz_method_a_vwfw.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.t.a(com.tencent.mm.network.o)');
        com_tencent_mm_network_t_clz_method_a_vwfw.call(this, v0);
    };
    var com_tencent_mm_network_t_clz_method_tZ_dkic = com_tencent_mm_network_t_clz.tZ.overload('java.lang.String');
    com_tencent_mm_network_t_clz_method_tZ_dkic.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.t.tZ(java.lang.String)');
        com_tencent_mm_network_t_clz_method_tZ_dkic.call(this, v0);
    };
    var com_tencent_mm_network_t_clz_method_getIPsString_zfly = com_tencent_mm_network_t_clz.getIPsString.overload('boolean');
    com_tencent_mm_network_t_clz_method_getIPsString_zfly.implementation = function(v0) {
        printStacks('public final java.lang.String[] com.tencent.mm.network.t.getIPsString(boolean)');
        return com_tencent_mm_network_t_clz_method_getIPsString_zfly.call(this, v0);
    };
    var com_tencent_mm_network_t_clz_init_tdtp = com_tencent_mm_network_t_clz.$init.overload('com.tencent.mm.sdk.platformtools.ap');
    com_tencent_mm_network_t_clz_init_tdtp.implementation = function(v0) {
        printStacks('public com.tencent.mm.network.t(com.tencent.mm.sdk.platformtools.ap)');
        return com_tencent_mm_network_t_clz_init_tdtp.call(this, v0);
    };
    var com_tencent_mm_network_v_clz = Java.use('com.tencent.mm.network.v');
    var com_tencent_mm_network_v_clz_method_setRequestMethod_nuhd = com_tencent_mm_network_v_clz.setRequestMethod.overload('java.lang.String');
    com_tencent_mm_network_v_clz_method_setRequestMethod_nuhd.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.v.setRequestMethod(java.lang.String)');
        com_tencent_mm_network_v_clz_method_setRequestMethod_nuhd.call(this, v0);
    };
    var com_tencent_mm_network_v_clz_method_aDW_zq9l = com_tencent_mm_network_v_clz.aDW.overload();
    com_tencent_mm_network_v_clz_method_aDW_zq9l.implementation = function() {
        printStacks('public final int com.tencent.mm.network.v.aDW()');
        return com_tencent_mm_network_v_clz_method_aDW_zq9l.call(this);
    };
    var com_tencent_mm_network_v_clz_method_getContentType_t525 = com_tencent_mm_network_v_clz.getContentType.overload();
    com_tencent_mm_network_v_clz_method_getContentType_t525.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.network.v.getContentType()');
        return com_tencent_mm_network_v_clz_method_getContentType_t525.call(this);
    };
    var com_tencent_mm_network_v_clz_method_aDV_xzg5 = com_tencent_mm_network_v_clz.aDV.overload();
    com_tencent_mm_network_v_clz_method_aDV_xzg5.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.network.v.aDV()');
        return com_tencent_mm_network_v_clz_method_aDV_xzg5.call(this);
    };
    var com_tencent_mm_network_v_clz_method_getContentLength_ubko = com_tencent_mm_network_v_clz.getContentLength.overload();
    com_tencent_mm_network_v_clz_method_getContentLength_ubko.implementation = function() {
        printStacks('public final int com.tencent.mm.network.v.getContentLength()');
        return com_tencent_mm_network_v_clz_method_getContentLength_ubko.call(this);
    };
    var com_tencent_mm_network_v_clz_method_setRequestProperty_4z0u = com_tencent_mm_network_v_clz.setRequestProperty.overload('java.lang.String', 'java.lang.String');
    com_tencent_mm_network_v_clz_method_setRequestProperty_4z0u.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.network.v.setRequestProperty(java.lang.String,java.lang.String)');
        com_tencent_mm_network_v_clz_method_setRequestProperty_4z0u.call(this, v0, v1);
    };
    var com_tencent_mm_network_v_clz_method_getHeaderField_81ya = com_tencent_mm_network_v_clz.getHeaderField.overload('java.lang.String');
    com_tencent_mm_network_v_clz_method_getHeaderField_81ya.implementation = function(v0) {
        printStacks('public final java.lang.String com.tencent.mm.network.v.getHeaderField(java.lang.String)');
        return com_tencent_mm_network_v_clz_method_getHeaderField_81ya.call(this, v0);
    };
    var com_tencent_mm_network_v_clz_method_getHeaderFields_ru6d = com_tencent_mm_network_v_clz.getHeaderFields.overload();
    com_tencent_mm_network_v_clz_method_getHeaderFields_ru6d.implementation = function() {
        printStacks('public final java.util.Map com.tencent.mm.network.v.getHeaderFields()');
        return com_tencent_mm_network_v_clz_method_getHeaderFields_ru6d.call(this);
    };
    var com_tencent_mm_network_v_clz_method_getHost_de56 = com_tencent_mm_network_v_clz.getHost.overload();
    com_tencent_mm_network_v_clz_method_getHost_de56.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.network.v.getHost()');
        return com_tencent_mm_network_v_clz_method_getHost_de56.call(this);
    };
    var com_tencent_mm_network_v_clz_method_getOutputStream_1z6u = com_tencent_mm_network_v_clz.getOutputStream.overload();
    com_tencent_mm_network_v_clz_method_getOutputStream_1z6u.implementation = function() {
        printStacks('public final java.io.OutputStream com.tencent.mm.network.v.getOutputStream()');
        return com_tencent_mm_network_v_clz_method_getOutputStream_1z6u.call(this);
    };
    var com_tencent_mm_network_v_clz_method_aDT_kc6i = com_tencent_mm_network_v_clz.aDT.overload();
    com_tencent_mm_network_v_clz_method_aDT_kc6i.implementation = function() {
        printStacks('public final void com.tencent.mm.network.v.aDT()');
        com_tencent_mm_network_v_clz_method_aDT_kc6i.call(this);
    };
    var com_tencent_mm_network_v_clz_method_connect_0tqk = com_tencent_mm_network_v_clz.connect.overload();
    com_tencent_mm_network_v_clz_method_connect_0tqk.implementation = function() {
        printStacks('public final void com.tencent.mm.network.v.connect()');
        com_tencent_mm_network_v_clz_method_connect_0tqk.call(this);
    };
    var com_tencent_mm_network_v_clz_method_setReadTimeout_zla8 = com_tencent_mm_network_v_clz.setReadTimeout.overload('int');
    com_tencent_mm_network_v_clz_method_setReadTimeout_zla8.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.v.setReadTimeout(int)');
        com_tencent_mm_network_v_clz_method_setReadTimeout_zla8.call(this, v0);
    };
    var com_tencent_mm_network_v_clz_method_getResponseCode_c6x7 = com_tencent_mm_network_v_clz.getResponseCode.overload();
    com_tencent_mm_network_v_clz_method_getResponseCode_c6x7.implementation = function() {
        printStacks('public final int com.tencent.mm.network.v.getResponseCode()');
        return com_tencent_mm_network_v_clz_method_getResponseCode_c6x7.call(this);
    };
    var com_tencent_mm_network_v_clz_method_yH_dawo = com_tencent_mm_network_v_clz.yH.overload('java.lang.String');
    com_tencent_mm_network_v_clz_method_yH_dawo.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.v.yH(java.lang.String)');
        com_tencent_mm_network_v_clz_method_yH_dawo.call(this, v0);
    };
    var com_tencent_mm_network_v_clz_method_aDU_j8v8 = com_tencent_mm_network_v_clz.aDU.overload();
    com_tencent_mm_network_v_clz_method_aDU_j8v8.implementation = function() {
        printStacks('public final void com.tencent.mm.network.v.aDU()');
        com_tencent_mm_network_v_clz_method_aDU_j8v8.call(this);
    };
    var com_tencent_mm_network_v_clz_method_setUseCaches_cdfn = com_tencent_mm_network_v_clz.setUseCaches.overload('boolean');
    com_tencent_mm_network_v_clz_method_setUseCaches_cdfn.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.v.setUseCaches(boolean)');
        com_tencent_mm_network_v_clz_method_setUseCaches_cdfn.call(this, v0);
    };
    var com_tencent_mm_network_v_clz_method_disconnect_5w5j = com_tencent_mm_network_v_clz.disconnect.overload();
    com_tencent_mm_network_v_clz_method_disconnect_5w5j.implementation = function() {
        printStacks('public final void com.tencent.mm.network.v.disconnect()');
        com_tencent_mm_network_v_clz_method_disconnect_5w5j.call(this);
    };
    var com_tencent_mm_network_v_clz_method_setConnectTimeout_zf6o = com_tencent_mm_network_v_clz.setConnectTimeout.overload('int');
    com_tencent_mm_network_v_clz_method_setConnectTimeout_zf6o.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.v.setConnectTimeout(int)');
        com_tencent_mm_network_v_clz_method_setConnectTimeout_zf6o.call(this, v0);
    };
    var com_tencent_mm_network_v_clz_method_toString_719q = com_tencent_mm_network_v_clz.toString.overload();
    com_tencent_mm_network_v_clz_method_toString_719q.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.network.v.toString()');
        return com_tencent_mm_network_v_clz_method_toString_719q.call(this);
    };
    var com_tencent_mm_network_v_clz_method_getHeaderFieldInt_a7ze = com_tencent_mm_network_v_clz.getHeaderFieldInt.overload('java.lang.String', 'int');
    com_tencent_mm_network_v_clz_method_getHeaderFieldInt_a7ze.implementation = function(v0, v1) {
        printStacks('public final int com.tencent.mm.network.v.getHeaderFieldInt(java.lang.String,int)');
        return com_tencent_mm_network_v_clz_method_getHeaderFieldInt_a7ze.call(this, v0, v1);
    };
    var com_tencent_mm_network_v_clz_method_getInputStream_w8mm = com_tencent_mm_network_v_clz.getInputStream.overload();
    com_tencent_mm_network_v_clz_method_getInputStream_w8mm.implementation = function() {
        printStacks('public final java.io.InputStream com.tencent.mm.network.v.getInputStream()');
        return com_tencent_mm_network_v_clz_method_getInputStream_w8mm.call(this);
    };
    var com_tencent_mm_network_v_clz_init_2inu = com_tencent_mm_network_v_clz.$init.overload('java.net.URL', 'int');
    com_tencent_mm_network_v_clz_init_2inu.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.network.v(java.net.URL,int)');
        return com_tencent_mm_network_v_clz_init_2inu.call(this, v0, v1);
    };
    var com_tencent_mm_network_x_clz = Java.use('com.tencent.mm.network.x');
    var com_tencent_mm_network_x_clz_method_onDownloadProgressChanged_ukmi = com_tencent_mm_network_x_clz.onDownloadProgressChanged.overload('java.lang.String', 'com.tencent.mars.cdn.CronetLogic$CronetDownloadProgress');
    com_tencent_mm_network_x_clz_method_onDownloadProgressChanged_ukmi.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.network.x.onDownloadProgressChanged(java.lang.String,com.tencent.mars.cdn.CronetLogic$CronetDownloadProgress)');
        com_tencent_mm_network_x_clz_method_onDownloadProgressChanged_ukmi.call(this, v0, v1);
    };
    var com_tencent_mm_network_x_clz_method_setRequestMethod_5c9h = com_tencent_mm_network_x_clz.setRequestMethod.overload('java.lang.String');
    com_tencent_mm_network_x_clz_method_setRequestMethod_5c9h.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.x.setRequestMethod(java.lang.String)');
        com_tencent_mm_network_x_clz_method_setRequestMethod_5c9h.call(this, v0);
    };
    var com_tencent_mm_network_x_clz_method_aDW_c9th = com_tencent_mm_network_x_clz.aDW.overload();
    com_tencent_mm_network_x_clz_method_aDW_c9th.implementation = function() {
        printStacks('public final int com.tencent.mm.network.x.aDW()');
        return com_tencent_mm_network_x_clz_method_aDW_c9th.call(this);
    };
    var com_tencent_mm_network_x_clz_method_getContentType_f70g = com_tencent_mm_network_x_clz.getContentType.overload();
    com_tencent_mm_network_x_clz_method_getContentType_f70g.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.network.x.getContentType()');
        return com_tencent_mm_network_x_clz_method_getContentType_f70g.call(this);
    };
    var com_tencent_mm_network_x_clz_method_aDV_oegd = com_tencent_mm_network_x_clz.aDV.overload();
    com_tencent_mm_network_x_clz_method_aDV_oegd.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.network.x.aDV()');
        return com_tencent_mm_network_x_clz_method_aDV_oegd.call(this);
    };
    var com_tencent_mm_network_x_clz_method_getContentLength_wmns = com_tencent_mm_network_x_clz.getContentLength.overload();
    com_tencent_mm_network_x_clz_method_getContentLength_wmns.implementation = function() {
        printStacks('public final int com.tencent.mm.network.x.getContentLength()');
        return com_tencent_mm_network_x_clz_method_getContentLength_wmns.call(this);
    };
    var com_tencent_mm_network_x_clz_method_setRequestProperty_f4ml = com_tencent_mm_network_x_clz.setRequestProperty.overload('java.lang.String', 'java.lang.String');
    com_tencent_mm_network_x_clz_method_setRequestProperty_f4ml.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.network.x.setRequestProperty(java.lang.String,java.lang.String)');
        com_tencent_mm_network_x_clz_method_setRequestProperty_f4ml.call(this, v0, v1);
    };
    var com_tencent_mm_network_x_clz_method_getHeaderField_juht = com_tencent_mm_network_x_clz.getHeaderField.overload('java.lang.String');
    com_tencent_mm_network_x_clz_method_getHeaderField_juht.implementation = function(v0) {
        printStacks('public final java.lang.String com.tencent.mm.network.x.getHeaderField(java.lang.String)');
        return com_tencent_mm_network_x_clz_method_getHeaderField_juht.call(this, v0);
    };
    var com_tencent_mm_network_x_clz_method_getHeaderFields_wvb9 = com_tencent_mm_network_x_clz.getHeaderFields.overload();
    com_tencent_mm_network_x_clz_method_getHeaderFields_wvb9.implementation = function() {
        printStacks('public final java.util.Map com.tencent.mm.network.x.getHeaderFields()');
        return com_tencent_mm_network_x_clz_method_getHeaderFields_wvb9.call(this);
    };
    var com_tencent_mm_network_x_clz_method_getHost_oi5w = com_tencent_mm_network_x_clz.getHost.overload();
    com_tencent_mm_network_x_clz_method_getHost_oi5w.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.network.x.getHost()');
        return com_tencent_mm_network_x_clz_method_getHost_oi5w.call(this);
    };
    var com_tencent_mm_network_x_clz_method_onCronetTaskCompleted_z8fi = com_tencent_mm_network_x_clz.onCronetTaskCompleted.overload('java.lang.String', 'com.tencent.mars.cdn.CronetLogic$CronetTaskResult');
    com_tencent_mm_network_x_clz_method_onCronetTaskCompleted_z8fi.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.network.x.onCronetTaskCompleted(java.lang.String,com.tencent.mars.cdn.CronetLogic$CronetTaskResult)');
        com_tencent_mm_network_x_clz_method_onCronetTaskCompleted_z8fi.call(this, v0, v1);
    };
    var com_tencent_mm_network_x_clz_method_aDX_oa3u = com_tencent_mm_network_x_clz.aDX.overload();
    com_tencent_mm_network_x_clz_method_aDX_oa3u.implementation = function() {
        printStacks('private synchronized void com.tencent.mm.network.x.aDX()');
        com_tencent_mm_network_x_clz_method_aDX_oa3u.call(this);
    };
    var com_tencent_mm_network_x_clz_method_setReadTimeout_wdx7 = com_tencent_mm_network_x_clz.setReadTimeout.overload('int');
    com_tencent_mm_network_x_clz_method_setReadTimeout_wdx7.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.x.setReadTimeout(int)');
        com_tencent_mm_network_x_clz_method_setReadTimeout_wdx7.call(this, v0);
    };
    var com_tencent_mm_network_x_clz_method_a_k9sd = com_tencent_mm_network_x_clz.a.overload('com.tencent.mars.cdn.CronetLogic$CronetTaskResult');
    com_tencent_mm_network_x_clz_method_a_k9sd.implementation = function(v0) {
        printStacks('private synchronized void com.tencent.mm.network.x.a(com.tencent.mars.cdn.CronetLogic$CronetTaskResult)');
        com_tencent_mm_network_x_clz_method_a_k9sd.call(this, v0);
    };
    var com_tencent_mm_network_x_clz_method_getResponseCode_cue3 = com_tencent_mm_network_x_clz.getResponseCode.overload();
    com_tencent_mm_network_x_clz_method_getResponseCode_cue3.implementation = function() {
        printStacks('public final int com.tencent.mm.network.x.getResponseCode()');
        return com_tencent_mm_network_x_clz_method_getResponseCode_cue3.call(this);
    };
    var com_tencent_mm_network_x_clz_method_yH_37db = com_tencent_mm_network_x_clz.yH.overload('java.lang.String');
    com_tencent_mm_network_x_clz_method_yH_37db.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.x.yH(java.lang.String)');
        com_tencent_mm_network_x_clz_method_yH_37db.call(this, v0);
    };
    var com_tencent_mm_network_x_clz_method_aDY_39dg = com_tencent_mm_network_x_clz.aDY.overload();
    com_tencent_mm_network_x_clz_method_aDY_39dg.implementation = function() {
        printStacks('private void com.tencent.mm.network.x.aDY()');
        com_tencent_mm_network_x_clz_method_aDY_39dg.call(this);
    };
    var com_tencent_mm_network_x_clz_method_setUseCaches_hhap = com_tencent_mm_network_x_clz.setUseCaches.overload('boolean');
    com_tencent_mm_network_x_clz_method_setUseCaches_hhap.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.x.setUseCaches(boolean)');
        com_tencent_mm_network_x_clz_method_setUseCaches_hhap.call(this, v0);
    };
    var com_tencent_mm_network_x_clz_method_disconnect_my8c = com_tencent_mm_network_x_clz.disconnect.overload();
    com_tencent_mm_network_x_clz_method_disconnect_my8c.implementation = function() {
        printStacks('public final void com.tencent.mm.network.x.disconnect()');
        com_tencent_mm_network_x_clz_method_disconnect_my8c.call(this);
    };
    var com_tencent_mm_network_x_clz_method_setConnectTimeout_7p7b = com_tencent_mm_network_x_clz.setConnectTimeout.overload('int');
    com_tencent_mm_network_x_clz_method_setConnectTimeout_7p7b.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.x.setConnectTimeout(int)');
        com_tencent_mm_network_x_clz_method_setConnectTimeout_7p7b.call(this, v0);
    };
    var com_tencent_mm_network_x_clz_method_onCronetReceiveHeader_isaa = com_tencent_mm_network_x_clz.onCronetReceiveHeader.overload('com.tencent.mars.cdn.CronetLogic$ResponseHeader', 'int');
    com_tencent_mm_network_x_clz_method_onCronetReceiveHeader_isaa.implementation = function(v0, v1) {
        printStacks('public final int com.tencent.mm.network.x.onCronetReceiveHeader(com.tencent.mars.cdn.CronetLogic$ResponseHeader,int)');
        return com_tencent_mm_network_x_clz_method_onCronetReceiveHeader_isaa.call(this, v0, v1);
    };
    var com_tencent_mm_network_x_clz_method_getHeaderFieldInt_u9ko = com_tencent_mm_network_x_clz.getHeaderFieldInt.overload('java.lang.String', 'int');
    com_tencent_mm_network_x_clz_method_getHeaderFieldInt_u9ko.implementation = function(v0, v1) {
        printStacks('public final int com.tencent.mm.network.x.getHeaderFieldInt(java.lang.String,int)');
        return com_tencent_mm_network_x_clz_method_getHeaderFieldInt_u9ko.call(this, v0, v1);
    };
    var com_tencent_mm_network_x_clz_method_getInputStream_vdp9 = com_tencent_mm_network_x_clz.getInputStream.overload();
    com_tencent_mm_network_x_clz_method_getInputStream_vdp9.implementation = function() {
        printStacks('public final java.io.InputStream com.tencent.mm.network.x.getInputStream()');
        return com_tencent_mm_network_x_clz_method_getInputStream_vdp9.call(this);
    };
    var com_tencent_mm_network_x_clz_init_856i = com_tencent_mm_network_x_clz.$init.overload('java.lang.String', 'int');
    com_tencent_mm_network_x_clz_init_856i.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.network.x(java.lang.String,int)');
        return com_tencent_mm_network_x_clz_init_856i.call(this, v0, v1);
    };
    var com_tencent_mm_network_y_clz = Java.use('com.tencent.mm.network.y');
    var com_tencent_mm_network_y_clz_method_aDZ_c07n = com_tencent_mm_network_y_clz.aDZ.overload();
    com_tencent_mm_network_y_clz_method_aDZ_c07n.implementation = function() {
        printStacks('public final void com.tencent.mm.network.y.aDZ()');
        com_tencent_mm_network_y_clz_method_aDZ_c07n.call(this);
    };
    var com_tencent_mm_network_y_clz_method_disconnect_mdgn = com_tencent_mm_network_y_clz.disconnect.overload();
    com_tencent_mm_network_y_clz_method_disconnect_mdgn.implementation = function() {
        printStacks('public final void com.tencent.mm.network.y.disconnect()');
        com_tencent_mm_network_y_clz_method_disconnect_mdgn.call(this);
    };
    var com_tencent_mm_network_y_clz_method_setConnectTimeout_g9kr = com_tencent_mm_network_y_clz.setConnectTimeout.overload('int');
    com_tencent_mm_network_y_clz_method_setConnectTimeout_g9kr.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.y.setConnectTimeout(int)');
        com_tencent_mm_network_y_clz_method_setConnectTimeout_g9kr.call(this, v0);
    };
    var com_tencent_mm_network_y_clz_method_setReadTimeout_jqmi = com_tencent_mm_network_y_clz.setReadTimeout.overload('int');
    com_tencent_mm_network_y_clz_method_setReadTimeout_jqmi.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.y.setReadTimeout(int)');
        com_tencent_mm_network_y_clz_method_setReadTimeout_jqmi.call(this, v0);
    };
    var com_tencent_mm_network_y_clz_method_getInputStream_0q4r = com_tencent_mm_network_y_clz.getInputStream.overload();
    com_tencent_mm_network_y_clz_method_getInputStream_0q4r.implementation = function() {
        printStacks('public final java.io.InputStream com.tencent.mm.network.y.getInputStream()');
        return com_tencent_mm_network_y_clz_method_getInputStream_0q4r.call(this);
    };
    var com_tencent_mm_network_y_clz_method_yH_j8po = com_tencent_mm_network_y_clz.yH.overload('java.lang.String');
    com_tencent_mm_network_y_clz_method_yH_j8po.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.y.yH(java.lang.String)');
        com_tencent_mm_network_y_clz_method_yH_j8po.call(this, v0);
    };
    var com_tencent_mm_network_y_clz_init_i7cy = com_tencent_mm_network_y_clz.$init.overload('java.net.URL');
    com_tencent_mm_network_y_clz_init_i7cy.implementation = function(v0) {
        printStacks('private com.tencent.mm.network.y(java.net.URL)');
        return com_tencent_mm_network_y_clz_init_i7cy.call(this, v0);
    };
    var com_tencent_mm_network_y_clz_init_9yuq = com_tencent_mm_network_y_clz.$init.overload('java.lang.String');
    com_tencent_mm_network_y_clz_init_9yuq.implementation = function(v0) {
        printStacks('public com.tencent.mm.network.y(java.lang.String)');
        return com_tencent_mm_network_y_clz_init_9yuq.call(this, v0);
    };
    var com_tencent_mm_network_z_clz = Java.use('com.tencent.mm.network.z');
    var com_tencent_mm_network_z_clz_init_zfqq = com_tencent_mm_network_z_clz.$init.overload();
    com_tencent_mm_network_z_clz_init_zfqq.implementation = function() {
        printStacks('public com.tencent.mm.network.z()');
        return com_tencent_mm_network_z_clz_init_zfqq.call(this);
    };
    var com_tencent_mm_network_l_a_clz = Java.use('com.tencent.mm.network.l$a');
    var com_tencent_mm_network_l_a_clz_method_asBinder_xeps = com_tencent_mm_network_l_a_clz.asBinder.overload();
    com_tencent_mm_network_l_a_clz_method_asBinder_xeps.implementation = function() {
        printStacks('public android.os.IBinder com.tencent.mm.network.l$a.asBinder()');
        return com_tencent_mm_network_l_a_clz_method_asBinder_xeps.call(this);
    };

    var com_tencent_mm_network_l_a_clz_init_ezan = com_tencent_mm_network_l_a_clz.$init.overload();
    com_tencent_mm_network_l_a_clz_init_ezan.implementation = function() {
        printStacks('public com.tencent.mm.network.l$a()');
        return com_tencent_mm_network_l_a_clz_init_ezan.call(this);
    };
    var com_tencent_mm_network_n_a_clz = Java.use('com.tencent.mm.network.n$a');
    var com_tencent_mm_network_n_a_clz_method_asInterface_8rhf = com_tencent_mm_network_n_a_clz.asInterface.overload('android.os.IBinder');
    com_tencent_mm_network_n_a_clz_method_asInterface_8rhf.implementation = function(v0) {
        printStacks('public static com.tencent.mm.network.n com.tencent.mm.network.n$a.asInterface(android.os.IBinder)');
        return com_tencent_mm_network_n_a_clz_method_asInterface_8rhf.call(com_tencent_mm_network_n_a_clz, v0);
    };
    var com_tencent_mm_network_n_a_clz_method_asBinder_k426 = com_tencent_mm_network_n_a_clz.asBinder.overload();
    com_tencent_mm_network_n_a_clz_method_asBinder_k426.implementation = function() {
        printStacks('public android.os.IBinder com.tencent.mm.network.n$a.asBinder()');
        return com_tencent_mm_network_n_a_clz_method_asBinder_k426.call(this);
    };

    var com_tencent_mm_network_n_a_clz_init_2ik9 = com_tencent_mm_network_n_a_clz.$init.overload();
    com_tencent_mm_network_n_a_clz_init_2ik9.implementation = function() {
        printStacks('public com.tencent.mm.network.n$a()');
        return com_tencent_mm_network_n_a_clz_init_2ik9.call(this);
    };
    var com_tencent_mm_network_o_a_clz = Java.use('com.tencent.mm.network.o$a');
    var com_tencent_mm_network_o_a_clz_method_asBinder_iyso = com_tencent_mm_network_o_a_clz.asBinder.overload();
    com_tencent_mm_network_o_a_clz_method_asBinder_iyso.implementation = function() {
        printStacks('public android.os.IBinder com.tencent.mm.network.o$a.asBinder()');
        return com_tencent_mm_network_o_a_clz_method_asBinder_iyso.call(this);
    };

    var com_tencent_mm_network_o_a_clz_init_8h4q = com_tencent_mm_network_o_a_clz.$init.overload();
    com_tencent_mm_network_o_a_clz_init_8h4q.implementation = function() {
        printStacks('public com.tencent.mm.network.o$a()');
        return com_tencent_mm_network_o_a_clz_init_8h4q.call(this);
    };
    var com_tencent_mm_network_l_a_a_clz = Java.use('com.tencent.mm.network.l$a$a');
    var com_tencent_mm_network_l_a_a_clz_method_asBinder_pf4d = com_tencent_mm_network_l_a_a_clz.asBinder.overload();
    com_tencent_mm_network_l_a_a_clz_method_asBinder_pf4d.implementation = function() {
        printStacks('public final android.os.IBinder com.tencent.mm.network.l$a$a.asBinder()');
        return com_tencent_mm_network_l_a_a_clz_method_asBinder_pf4d.call(this);
    };
    var com_tencent_mm_network_l_a_a_clz_method_a_icsw = com_tencent_mm_network_l_a_a_clz.a.overload('int', 'int', 'int', 'java.lang.String', 'com.tencent.mm.network.r', '[B');
    com_tencent_mm_network_l_a_a_clz_method_a_icsw.implementation = function(v0, v1, v2, v3, v4, v5) {
        printStacks('public final void com.tencent.mm.network.l$a$a.a(int,int,int,java.lang.String,com.tencent.mm.network.r,byte[])');
        com_tencent_mm_network_l_a_a_clz_method_a_icsw.call(this, v0, v1, v2, v3, v4, v5);
    };
    var com_tencent_mm_network_l_a_a_clz_init_d07l = com_tencent_mm_network_l_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_l_a_a_clz_init_d07l.implementation = function(v0) {
        printStacks('com.tencent.mm.network.l$a$a(android.os.IBinder)');
        return com_tencent_mm_network_l_a_a_clz_init_d07l.call(this, v0);
    };
    var com_tencent_mm_network_a_b_a_a_clz = Java.use('com.tencent.mm.network.a.b$a$a');
    var com_tencent_mm_network_a_b_a_a_clz_method_asBinder_7g9s = com_tencent_mm_network_a_b_a_a_clz.asBinder.overload();
    com_tencent_mm_network_a_b_a_a_clz_method_asBinder_7g9s.implementation = function() {
        printStacks('public final android.os.IBinder com.tencent.mm.network.a.b$a$a.asBinder()');
        return com_tencent_mm_network_a_b_a_a_clz_method_asBinder_7g9s.call(this);
    };
    var com_tencent_mm_network_a_b_a_a_clz_method_a_kulu = com_tencent_mm_network_a_b_a_a_clz.a.overload('int', 'int', 'java.lang.String', 'int', 'java.lang.String', 'boolean');
    com_tencent_mm_network_a_b_a_a_clz_method_a_kulu.implementation = function(v0, v1, v2, v3, v4, v5) {
        printStacks('public final void com.tencent.mm.network.a.b$a$a.a(int,int,java.lang.String,int,java.lang.String,boolean)');
        com_tencent_mm_network_a_b_a_a_clz_method_a_kulu.call(this, v0, v1, v2, v3, v4, v5);
    };
    var com_tencent_mm_network_a_b_a_a_clz_method_v_tg0e = com_tencent_mm_network_a_b_a_a_clz.v.overload('int', 'int', 'int', 'int');
    com_tencent_mm_network_a_b_a_a_clz_method_v_tg0e.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.network.a.b$a$a.v(int,int,int,int)');
        com_tencent_mm_network_a_b_a_a_clz_method_v_tg0e.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_a_b_a_a_clz_init_5zpu = com_tencent_mm_network_a_b_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_a_b_a_a_clz_init_5zpu.implementation = function(v0) {
        printStacks('public com.tencent.mm.network.a.b$a$a(android.os.IBinder)');
        return com_tencent_mm_network_a_b_a_a_clz_init_5zpu.call(this, v0);
    };
    var com_tencent_mm_network_n_a_a_clz = Java.use('com.tencent.mm.network.n$a$a');
    var com_tencent_mm_network_n_a_a_clz_method_asBinder_semx = com_tencent_mm_network_n_a_a_clz.asBinder.overload();
    com_tencent_mm_network_n_a_a_clz_method_asBinder_semx.implementation = function() {
        printStacks('public final android.os.IBinder com.tencent.mm.network.n$a$a.asBinder()');
        return com_tencent_mm_network_n_a_a_clz_method_asBinder_semx.call(this);
    };
    var com_tencent_mm_network_n_a_a_clz_method_onNetworkChange_gle8 = com_tencent_mm_network_n_a_a_clz.onNetworkChange.overload('int');
    com_tencent_mm_network_n_a_a_clz_method_onNetworkChange_gle8.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.n$a$a.onNetworkChange(int)');
        com_tencent_mm_network_n_a_a_clz_method_onNetworkChange_gle8.call(this, v0);
    };
    var com_tencent_mm_network_n_a_a_clz_init_slao = com_tencent_mm_network_n_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_n_a_a_clz_init_slao.implementation = function(v0) {
        printStacks('com.tencent.mm.network.n$a$a(android.os.IBinder)');
        return com_tencent_mm_network_n_a_a_clz_init_slao.call(this, v0);
    };
    var com_tencent_mm_network_aa_clz = Java.use('com.tencent.mm.network.aa');
    var com_tencent_mm_network_aa_clz_method_reportKV_a6oc = com_tencent_mm_network_aa_clz.reportKV.overload('long', 'java.lang.String', 'boolean', 'boolean');
    com_tencent_mm_network_aa_clz_method_reportKV_a6oc.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.network.aa.reportKV(long,java.lang.String,boolean,boolean)');
        com_tencent_mm_network_aa_clz_method_reportKV_a6oc.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_aa_clz_init_tjt8 = com_tencent_mm_network_aa_clz.$init.overload();
    com_tencent_mm_network_aa_clz_init_tjt8.implementation = function() {
        printStacks('public com.tencent.mm.network.aa()');
        return com_tencent_mm_network_aa_clz_init_tjt8.call(this);
    };
    var com_tencent_mm_network_ab_clz = Java.use('com.tencent.mm.network.ab');
    var com_tencent_mm_network_ab_clz_method_onPush_tav7 = com_tencent_mm_network_ab_clz.onPush.overload('int', '[B');
    com_tencent_mm_network_ab_clz_method_onPush_tav7.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.network.ab.onPush(int,byte[])');
        com_tencent_mm_network_ab_clz_method_onPush_tav7.call(this, v0, v1);
    };
    var com_tencent_mm_network_ab_clz_init_njoc = com_tencent_mm_network_ab_clz.$init.overload();
    com_tencent_mm_network_ab_clz_init_njoc.implementation = function() {
        printStacks('public com.tencent.mm.network.ab()');
        return com_tencent_mm_network_ab_clz_init_njoc.call(this);
    };
    var com_tencent_mm_network_ac_clz = Java.use('com.tencent.mm.network.ac');
    var com_tencent_mm_network_ac_clz_method_aEa_kwh8 = com_tencent_mm_network_ac_clz.aEa.overload();
    com_tencent_mm_network_ac_clz_method_aEa_kwh8.implementation = function() {
        printStacks('final boolean com.tencent.mm.network.ac.aEa()');
        return com_tencent_mm_network_ac_clz_method_aEa_kwh8.call(this);
    };
    var com_tencent_mm_network_ac_clz_method_a_wx0a = com_tencent_mm_network_ac_clz.a.overload('int', '[B', '[I', '[I');
    com_tencent_mm_network_ac_clz_method_a_wx0a.implementation = function(v0, v1, v2, v3) {
        printStacks('final int com.tencent.mm.network.ac.a(int,byte[],int[],int[])');
        return com_tencent_mm_network_ac_clz_method_a_wx0a.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_ac_clz_method_finalize_sphw = com_tencent_mm_network_ac_clz.finalize.overload();
    com_tencent_mm_network_ac_clz_method_finalize_sphw.implementation = function() {
        printStacks('protected final void com.tencent.mm.network.ac.finalize()');
        com_tencent_mm_network_ac_clz_method_finalize_sphw.call(this);
    };
    var com_tencent_mm_network_ac_clz_method_pb_x1kl = com_tencent_mm_network_ac_clz.pb.overload('int');
    com_tencent_mm_network_ac_clz_method_pb_x1kl.implementation = function(v0) {
        printStacks('final int com.tencent.mm.network.ac.pb(int)');
        return com_tencent_mm_network_ac_clz_method_pb_x1kl.call(this, v0);
    };
    var com_tencent_mm_network_ac_clz_method_aEd_nonh = com_tencent_mm_network_ac_clz.aEd.overload();
    com_tencent_mm_network_ac_clz_method_aEd_nonh.implementation = function() {
        printStacks('public final int com.tencent.mm.network.ac.aEd()');
        return com_tencent_mm_network_ac_clz_method_aEd_nonh.call(this);
    };
    var com_tencent_mm_network_ac_clz_method_aEb_poom = com_tencent_mm_network_ac_clz.aEb.overload();
    com_tencent_mm_network_ac_clz_method_aEb_poom.implementation = function() {
        printStacks('final boolean com.tencent.mm.network.ac.aEb()');
        return com_tencent_mm_network_ac_clz_method_aEb_poom.call(this);
    };
    var com_tencent_mm_network_ac_clz_method_a_6z5u = com_tencent_mm_network_ac_clz.a.overload('int', 'java.io.ByteArrayOutputStream', '[I', 'int', 'java.lang.String');
    com_tencent_mm_network_ac_clz_method_a_6z5u.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('final boolean com.tencent.mm.network.ac.a(int,java.io.ByteArrayOutputStream,int[],int,java.lang.String)');
        return com_tencent_mm_network_ac_clz_method_a_6z5u.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_mm_network_ac_clz_method_aEc_ua9x = com_tencent_mm_network_ac_clz.aEc.overload();
    com_tencent_mm_network_ac_clz_method_aEc_ua9x.implementation = function() {
        printStacks('final boolean com.tencent.mm.network.ac.aEc()');
        return com_tencent_mm_network_ac_clz_method_aEc_ua9x.call(this);
    };
    var com_tencent_mm_network_ac_clz_method_n_7eui = com_tencent_mm_network_ac_clz.n.overload('int', 'int', 'java.lang.String');
    com_tencent_mm_network_ac_clz_method_n_7eui.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.network.ac.n(int,int,java.lang.String)');
        com_tencent_mm_network_ac_clz_method_n_7eui.call(this, v0, v1, v2);
    };
    var com_tencent_mm_network_ac_clz_method_a_ciea = com_tencent_mm_network_ac_clz.a.overload('com.tencent.mm.network.r', 'com.tencent.mm.network.l', 'com.tencent.mm.network.c', 'int');
    com_tencent_mm_network_ac_clz_method_a_ciea.implementation = function(v0, v1, v2, v3) {
        printStacks('public final int com.tencent.mm.network.ac.a(com.tencent.mm.network.r,com.tencent.mm.network.l,com.tencent.mm.network.c,int)');
        return com_tencent_mm_network_ac_clz_method_a_ciea.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_ac_clz_method_pa_sytk = com_tencent_mm_network_ac_clz.pa.overload('int');
    com_tencent_mm_network_ac_clz_method_pa_sytk.implementation = function(v0) {
        printStacks('static boolean com.tencent.mm.network.ac.pa(int)');
        return com_tencent_mm_network_ac_clz_method_pa_sytk.call(com_tencent_mm_network_ac_clz, v0);
    };
    var com_tencent_mm_network_ac_clz_method_ey_wkx5 = com_tencent_mm_network_ac_clz.ey.overload('boolean');
    com_tencent_mm_network_ac_clz_method_ey_wkx5.implementation = function(v0) {
        printStacks('final com.tencent.mm.network.r com.tencent.mm.network.ac.ey(boolean)');
        return com_tencent_mm_network_ac_clz_method_ey_wkx5.call(this, v0);
    };
    var com_tencent_mm_network_ac_clz_method_pc_j557 = com_tencent_mm_network_ac_clz.pc.overload('int');
    com_tencent_mm_network_ac_clz_method_pc_j557.implementation = function(v0) {
        printStacks('final int com.tencent.mm.network.ac.pc(int)');
        return com_tencent_mm_network_ac_clz_method_pc_j557.call(this, v0);
    };
    var com_tencent_mm_network_ac_clz_method_reset_0rkp = com_tencent_mm_network_ac_clz.reset.overload();
    com_tencent_mm_network_ac_clz_method_reset_0rkp.implementation = function() {
        printStacks('public final void com.tencent.mm.network.ac.reset()');
        com_tencent_mm_network_ac_clz_method_reset_0rkp.call(this);
    };
    var com_tencent_mm_network_ac_clz_init_6q46 = com_tencent_mm_network_ac_clz.$init.overload();
    com_tencent_mm_network_ac_clz_init_6q46.implementation = function() {
        printStacks('public com.tencent.mm.network.ac()');
        return com_tencent_mm_network_ac_clz_init_6q46.call(this);
    };
    var com_tencent_mm_network_ad_clz = Java.use('com.tencent.mm.network.ad');
    var com_tencent_mm_network_ad_clz_method_a_rg95 = com_tencent_mm_network_ad_clz.a.overload('com.tencent.mm.sdk.platformtools.ap');
    com_tencent_mm_network_ad_clz_method_a_rg95.implementation = function(v0) {
        printStacks('public static void com.tencent.mm.network.ad.a(com.tencent.mm.sdk.platformtools.ap)');
        com_tencent_mm_network_ad_clz_method_a_rg95.call(com_tencent_mm_network_ad_clz, v0);
    };
    var com_tencent_mm_network_ad_clz_method_a_wi5x = com_tencent_mm_network_ad_clz.a.overload('com.tencent.mm.network.ad$a');
    com_tencent_mm_network_ad_clz_method_a_wi5x.implementation = function(v0) {
        printStacks('public static void com.tencent.mm.network.ad.a(com.tencent.mm.network.ad$a)');
        com_tencent_mm_network_ad_clz_method_a_wi5x.call(com_tencent_mm_network_ad_clz, v0);
    };
    var com_tencent_mm_network_ad_clz_method_aEh_pfls = com_tencent_mm_network_ad_clz.aEh.overload();
    com_tencent_mm_network_ad_clz_method_aEh_pfls.implementation = function() {
        printStacks('public static void com.tencent.mm.network.ad.aEh()');
        com_tencent_mm_network_ad_clz_method_aEh_pfls.call(com_tencent_mm_network_ad_clz);
    };
    var com_tencent_mm_network_ad_clz_method_aEr_sk9l = com_tencent_mm_network_ad_clz.aEr.overload();
    com_tencent_mm_network_ad_clz_method_aEr_sk9l.implementation = function() {
        printStacks('public static com.tencent.mm.network.z com.tencent.mm.network.ad.aEr()');
        return com_tencent_mm_network_ad_clz_method_aEr_sk9l.call(com_tencent_mm_network_ad_clz);
    };
    var com_tencent_mm_network_ad_clz_method_aEf_6b9r = com_tencent_mm_network_ad_clz.aEf.overload();
    com_tencent_mm_network_ad_clz_method_aEf_6b9r.implementation = function() {
        printStacks('private static android.content.SharedPreferences com.tencent.mm.network.ad.aEf()');
        return com_tencent_mm_network_ad_clz_method_aEf_6b9r.call(com_tencent_mm_network_ad_clz);
    };
    var com_tencent_mm_network_ad_clz_method_aEe_v3ms = com_tencent_mm_network_ad_clz.aEe.overload();
    com_tencent_mm_network_ad_clz_method_aEe_v3ms.implementation = function() {
        printStacks('private static com.tencent.mm.network.ad com.tencent.mm.network.ad.aEe()');
        return com_tencent_mm_network_ad_clz_method_aEe_v3ms.call(com_tencent_mm_network_ad_clz);
    };
    var com_tencent_mm_network_ad_clz_method_setContext_436g = com_tencent_mm_network_ad_clz.setContext.overload('android.content.Context');
    com_tencent_mm_network_ad_clz_method_setContext_436g.implementation = function(v0) {
        printStacks('public static void com.tencent.mm.network.ad.setContext(android.content.Context)');
        com_tencent_mm_network_ad_clz_method_setContext_436g.call(com_tencent_mm_network_ad_clz, v0);
    };
    var com_tencent_mm_network_ad_clz_method_g_545o = com_tencent_mm_network_ad_clz.g.overload('com.tencent.mm.network.t');
    com_tencent_mm_network_ad_clz_method_g_545o.implementation = function(v0) {
        printStacks('public static void com.tencent.mm.network.ad.g(com.tencent.mm.network.t)');
        com_tencent_mm_network_ad_clz_method_g_545o.call(com_tencent_mm_network_ad_clz, v0);
    };
    var com_tencent_mm_network_ad_clz_method_aEg_c5ho = com_tencent_mm_network_ad_clz.aEg.overload();
    com_tencent_mm_network_ad_clz_method_aEg_c5ho.implementation = function() {
        printStacks('public static android.content.SharedPreferences com.tencent.mm.network.ad.aEg()');
        return com_tencent_mm_network_ad_clz_method_aEg_c5ho.call(com_tencent_mm_network_ad_clz);
    };
    var com_tencent_mm_network_ad_clz_method_aEp_d6m9 = com_tencent_mm_network_ad_clz.aEp.overload();
    com_tencent_mm_network_ad_clz_method_aEp_d6m9.implementation = function() {
        printStacks('public static com.tencent.mm.network.ab com.tencent.mm.network.ad.aEp()');
        return com_tencent_mm_network_ad_clz_method_aEp_d6m9.call(com_tencent_mm_network_ad_clz);
    };
    var com_tencent_mm_network_ad_clz_method_aEq_n8s6 = com_tencent_mm_network_ad_clz.aEq.overload();
    com_tencent_mm_network_ad_clz_method_aEq_n8s6.implementation = function() {
        printStacks('public static android.os.Looper com.tencent.mm.network.ad.aEq()');
        return com_tencent_mm_network_ad_clz_method_aEq_n8s6.call(com_tencent_mm_network_ad_clz);
    };
    var com_tencent_mm_network_ad_clz_method_aEj_srh2 = com_tencent_mm_network_ad_clz.aEj.overload();
    com_tencent_mm_network_ad_clz_method_aEj_srh2.implementation = function() {
        printStacks('public static com.tencent.mm.network.ae com.tencent.mm.network.ad.aEj()');
        return com_tencent_mm_network_ad_clz_method_aEj_srh2.call(com_tencent_mm_network_ad_clz);
    };
    var com_tencent_mm_network_ad_clz_method_a_8axj = com_tencent_mm_network_ad_clz.a.overload('com.tencent.mm.network.af');
    com_tencent_mm_network_ad_clz_method_a_8axj.implementation = function(v0) {
        printStacks('public static void com.tencent.mm.network.ad.a(com.tencent.mm.network.af)');
        com_tencent_mm_network_ad_clz_method_a_8axj.call(com_tencent_mm_network_ad_clz, v0);
    };
    var com_tencent_mm_network_ad_clz_method_aEi_qe3w = com_tencent_mm_network_ad_clz.aEi.overload();
    com_tencent_mm_network_ad_clz_method_aEi_qe3w.implementation = function() {
        printStacks('public static boolean com.tencent.mm.network.ad.aEi()');
        return com_tencent_mm_network_ad_clz_method_aEi_qe3w.call(com_tencent_mm_network_ad_clz);
    };
    var com_tencent_mm_network_ad_clz_method_aEn_8yew = com_tencent_mm_network_ad_clz.aEn.overload();
    com_tencent_mm_network_ad_clz_method_aEn_8yew.implementation = function() {
        printStacks('public static com.tencent.mm.network.t com.tencent.mm.network.ad.aEn()');
        return com_tencent_mm_network_ad_clz_method_aEn_8yew.call(com_tencent_mm_network_ad_clz);
    };
    var com_tencent_mm_network_ad_clz_method_a_9716 = com_tencent_mm_network_ad_clz.a.overload('com.tencent.mm.network.ac');
    com_tencent_mm_network_ad_clz_method_a_9716.implementation = function(v0) {
        printStacks('public static void com.tencent.mm.network.ad.a(com.tencent.mm.network.ac)');
        com_tencent_mm_network_ad_clz_method_a_9716.call(com_tencent_mm_network_ad_clz, v0);
    };
    var com_tencent_mm_network_ad_clz_method_aEm_5f5q = com_tencent_mm_network_ad_clz.aEm.overload();
    com_tencent_mm_network_ad_clz_method_aEm_5f5q.implementation = function() {
        printStacks('public static com.tencent.mm.network.ad$a com.tencent.mm.network.ad.aEm()');
        return com_tencent_mm_network_ad_clz_method_aEm_5f5q.call(com_tencent_mm_network_ad_clz);
    };
    var com_tencent_mm_network_ad_clz_method_a_65rh = com_tencent_mm_network_ad_clz.a.overload('com.tencent.mm.network.ab');
    com_tencent_mm_network_ad_clz_method_a_65rh.implementation = function(v0) {
        printStacks('public static void com.tencent.mm.network.ad.a(com.tencent.mm.network.ab)');
        com_tencent_mm_network_ad_clz_method_a_65rh.call(com_tencent_mm_network_ad_clz, v0);
    };
    var com_tencent_mm_network_ad_clz_method_aEl_dmrg = com_tencent_mm_network_ad_clz.aEl.overload();
    com_tencent_mm_network_ad_clz_method_aEl_dmrg.implementation = function() {
        printStacks('public static com.tencent.mm.sdk.platformtools.ap com.tencent.mm.network.ad.aEl()');
        return com_tencent_mm_network_ad_clz_method_aEl_dmrg.call(com_tencent_mm_network_ad_clz);
    };
    var com_tencent_mm_network_ad_clz_method_getContext_ddud = com_tencent_mm_network_ad_clz.getContext.overload();
    com_tencent_mm_network_ad_clz_method_getContext_ddud.implementation = function() {
        printStacks('public static android.content.Context com.tencent.mm.network.ad.getContext()');
        return com_tencent_mm_network_ad_clz_method_getContext_ddud.call(com_tencent_mm_network_ad_clz);
    };
    var com_tencent_mm_network_ad_clz_method_a_m1m9 = com_tencent_mm_network_ad_clz.a.overload('com.tencent.mm.network.z');
    com_tencent_mm_network_ad_clz_method_a_m1m9.implementation = function(v0) {
        printStacks('public static void com.tencent.mm.network.ad.a(com.tencent.mm.network.z)');
        com_tencent_mm_network_ad_clz_method_a_m1m9.call(com_tencent_mm_network_ad_clz, v0);
    };
    var com_tencent_mm_network_ad_clz_method_aEk_fu7w = com_tencent_mm_network_ad_clz.aEk.overload();
    com_tencent_mm_network_ad_clz_method_aEk_fu7w.implementation = function() {
        printStacks('public static com.tencent.mm.network.af com.tencent.mm.network.ad.aEk()');
        return com_tencent_mm_network_ad_clz_method_aEk_fu7w.call(com_tencent_mm_network_ad_clz);
    };
    var com_tencent_mm_network_ad_clz_method_aEo_tc1q = com_tencent_mm_network_ad_clz.aEo.overload();
    com_tencent_mm_network_ad_clz_method_aEo_tc1q.implementation = function() {
        printStacks('public static com.tencent.mm.network.ac com.tencent.mm.network.ad.aEo()');
        return com_tencent_mm_network_ad_clz_method_aEo_tc1q.call(com_tencent_mm_network_ad_clz);
    };
    var com_tencent_mm_network_ad_clz_method_a_1s95 = com_tencent_mm_network_ad_clz.a.overload('com.tencent.mm.network.ae');
    com_tencent_mm_network_ad_clz_method_a_1s95.implementation = function(v0) {
        printStacks('public static void com.tencent.mm.network.ad.a(com.tencent.mm.network.ae)');
        com_tencent_mm_network_ad_clz_method_a_1s95.call(com_tencent_mm_network_ad_clz, v0);
    };
    var com_tencent_mm_network_ad_clz_init_fezf = com_tencent_mm_network_ad_clz.$init.overload();
    com_tencent_mm_network_ad_clz_init_fezf.implementation = function() {
        printStacks('private com.tencent.mm.network.ad()');
        return com_tencent_mm_network_ad_clz_init_fezf.call(this);
    };
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
    var com_tencent_mm_network_ae_clz_init_g71x = com_tencent_mm_network_ae_clz.$init.overload();
    com_tencent_mm_network_ae_clz_init_g71x.implementation = function() {
        printStacks('public com.tencent.mm.network.ae()');
        return com_tencent_mm_network_ae_clz_init_g71x.call(this);
    };
    var com_tencent_mm_network_af_clz = Java.use('com.tencent.mm.network.af');
    var com_tencent_mm_network_af_clz_method_c_qnsb = com_tencent_mm_network_af_clz.c.overload('com.tencent.mm.network.n');
    com_tencent_mm_network_af_clz_method_c_qnsb.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.network.af.c(com.tencent.mm.network.n)');
        return com_tencent_mm_network_af_clz_method_c_qnsb.call(this, v0);
    };
    var com_tencent_mm_network_af_clz_method_b_445z = com_tencent_mm_network_af_clz.b.overload('com.tencent.mm.network.af');
    com_tencent_mm_network_af_clz_method_b_445z.implementation = function(v0) {
        printStacks('static android.os.RemoteCallbackList com.tencent.mm.network.af.b(com.tencent.mm.network.af)');
        return com_tencent_mm_network_af_clz_method_b_445z.call(com_tencent_mm_network_af_clz, v0);
    };
    var com_tencent_mm_network_af_clz_method_aDM_qawa = com_tencent_mm_network_af_clz.aDM.overload();
    com_tencent_mm_network_af_clz_method_aDM_qawa.implementation = function() {
        printStacks('public final int com.tencent.mm.network.af.aDM()');
        return com_tencent_mm_network_af_clz_method_aDM_qawa.call(this);
    };
    var com_tencent_mm_network_af_clz_method_pd_85z7 = com_tencent_mm_network_af_clz.pd.overload('int');
    com_tencent_mm_network_af_clz_method_pd_85z7.implementation = function(v0) {
        printStacks('private boolean com.tencent.mm.network.af.pd(int)');
        return com_tencent_mm_network_af_clz_method_pd_85z7.call(this, v0);
    };
    var com_tencent_mm_network_af_clz_method_d_rkww = com_tencent_mm_network_af_clz.d.overload('com.tencent.mm.network.n');
    com_tencent_mm_network_af_clz_method_d_rkww.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.network.af.d(com.tencent.mm.network.n)');
        return com_tencent_mm_network_af_clz_method_d_rkww.call(this, v0);
    };
    var com_tencent_mm_network_af_clz_method_pe_4eru = com_tencent_mm_network_af_clz.pe.overload('int');
    com_tencent_mm_network_af_clz_method_pe_4eru.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.af.pe(int)');
        com_tencent_mm_network_af_clz_method_pe_4eru.call(this, v0);
    };
    var com_tencent_mm_network_af_clz_method_aDN_n2cw = com_tencent_mm_network_af_clz.aDN.overload();
    com_tencent_mm_network_af_clz_method_aDN_n2cw.implementation = function() {
        printStacks('public final void com.tencent.mm.network.af.aDN()');
        com_tencent_mm_network_af_clz_method_aDN_n2cw.call(this);
    };
    var com_tencent_mm_network_af_clz_method_c_bdkm = com_tencent_mm_network_af_clz.c.overload('com.tencent.mm.network.af');
    com_tencent_mm_network_af_clz_method_c_bdkm.implementation = function(v0) {
        printStacks('static int com.tencent.mm.network.af.c(com.tencent.mm.network.af)');
        return com_tencent_mm_network_af_clz_method_c_bdkm.call(com_tencent_mm_network_af_clz, v0);
    };
    var com_tencent_mm_network_af_clz_method_aDO_hk6i = com_tencent_mm_network_af_clz.aDO.overload();
    com_tencent_mm_network_af_clz_method_aDO_hk6i.implementation = function() {
        printStacks('public final long com.tencent.mm.network.af.aDO()');
        return com_tencent_mm_network_af_clz_method_aDO_hk6i.call(this);
    };
    var com_tencent_mm_network_af_clz_init_5rbf = com_tencent_mm_network_af_clz.$init.overload();
    com_tencent_mm_network_af_clz_init_5rbf.implementation = function() {
        printStacks('public com.tencent.mm.network.af()');
        return com_tencent_mm_network_af_clz_init_5rbf.call(this);
    };
    var com_tencent_mm_network_ah_clz = Java.use('com.tencent.mm.network.ah');
    var com_tencent_mm_network_ah_clz_method_aEs_ddge = com_tencent_mm_network_ah_clz.aEs.overload();
    com_tencent_mm_network_ah_clz_method_aEs_ddge.implementation = function() {
        printStacks('private static long[] com.tencent.mm.network.ah.aEs()');
        return com_tencent_mm_network_ah_clz_method_aEs_ddge.call(com_tencent_mm_network_ah_clz);
    };
    var com_tencent_mm_network_ah_clz_method_E_9l0o = com_tencent_mm_network_ah_clz.E.overload('long', 'long');
    com_tencent_mm_network_ah_clz_method_E_9l0o.implementation = function(v0, v1) {
        printStacks('public static void com.tencent.mm.network.ah.E(long,long)');
        com_tencent_mm_network_ah_clz_method_E_9l0o.call(com_tencent_mm_network_ah_clz, v0, v1);
    };
    var com_tencent_mm_network_r_a_clz = Java.use('com.tencent.mm.network.r$a');
    var com_tencent_mm_network_r_a_clz_method_asBinder_2het = com_tencent_mm_network_r_a_clz.asBinder.overload();
    com_tencent_mm_network_r_a_clz_method_asBinder_2het.implementation = function() {
        printStacks('public android.os.IBinder com.tencent.mm.network.r$a.asBinder()');
        return com_tencent_mm_network_r_a_clz_method_asBinder_2het.call(this);
    };

    var com_tencent_mm_network_r_a_clz_method_p_kwc6 = com_tencent_mm_network_r_a_clz.p.overload('android.os.IBinder');
    com_tencent_mm_network_r_a_clz_method_p_kwc6.implementation = function(v0) {
        printStacks('public static com.tencent.mm.network.r com.tencent.mm.network.r$a.p(android.os.IBinder)');
        return com_tencent_mm_network_r_a_clz_method_p_kwc6.call(com_tencent_mm_network_r_a_clz, v0);
    };
    var com_tencent_mm_network_r_a_clz_init_mrl8 = com_tencent_mm_network_r_a_clz.$init.overload();
    com_tencent_mm_network_r_a_clz_init_mrl8.implementation = function() {
        printStacks('public com.tencent.mm.network.r$a()');
        return com_tencent_mm_network_r_a_clz_init_mrl8.call(this);
    };
    var com_tencent_mm_network_aj_clz = Java.use('com.tencent.mm.network.aj');
    var com_tencent_mm_network_aj_clz_method_requestNetCheckShortLinkHosts_g21m = com_tencent_mm_network_aj_clz.requestNetCheckShortLinkHosts.overload();
    com_tencent_mm_network_aj_clz_method_requestNetCheckShortLinkHosts_g21m.implementation = function() {
        printStacks('public final java.lang.String[] com.tencent.mm.network.aj.requestNetCheckShortLinkHosts()');
        return com_tencent_mm_network_aj_clz_method_requestNetCheckShortLinkHosts_g21m.call(this);
    };
    var com_tencent_mm_network_aj_clz_method_reportConnectInfo_5nq5 = com_tencent_mm_network_aj_clz.reportConnectInfo.overload('int', 'int');
    com_tencent_mm_network_aj_clz_method_reportConnectInfo_5nq5.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.network.aj.reportConnectInfo(int,int)');
        com_tencent_mm_network_aj_clz_method_reportConnectInfo_5nq5.call(this, v0, v1);
    };
    var com_tencent_mm_network_aj_clz_method_req2Buf_pref = com_tencent_mm_network_aj_clz.req2Buf.overload('int', 'java.lang.Object', 'java.io.ByteArrayOutputStream', '[I', 'int', 'java.lang.String');
    com_tencent_mm_network_aj_clz_method_req2Buf_pref.implementation = function(v0, v1, v2, v3, v4, v5) {
        printStacks('public final boolean com.tencent.mm.network.aj.req2Buf(int,java.lang.Object,java.io.ByteArrayOutputStream,int[],int,java.lang.String)');
        return com_tencent_mm_network_aj_clz_method_req2Buf_pref.call(this, v0, v1, v2, v3, v4, v5);
    };
    var com_tencent_mm_network_aj_clz_method_makesureAuthed_43ja = com_tencent_mm_network_aj_clz.makesureAuthed.overload('java.lang.String');
    com_tencent_mm_network_aj_clz_method_makesureAuthed_43ja.implementation = function(v0) {
        printStacks('public final boolean com.tencent.mm.network.aj.makesureAuthed(java.lang.String)');
        return com_tencent_mm_network_aj_clz_method_makesureAuthed_43ja.call(this, v0);
    };
    var com_tencent_mm_network_aj_clz_method_onPush_msw8 = com_tencent_mm_network_aj_clz.onPush.overload('int', '[B');
    com_tencent_mm_network_aj_clz_method_onPush_msw8.implementation = function(v0, v1) {
        printStacks('public final void com.tencent.mm.network.aj.onPush(int,byte[])');
        com_tencent_mm_network_aj_clz_method_onPush_msw8.call(this, v0, v1);
    };
    var com_tencent_mm_network_aj_clz_method_exception2String_b3iq = com_tencent_mm_network_aj_clz.exception2String.overload('java.lang.Exception');
    com_tencent_mm_network_aj_clz_method_exception2String_b3iq.implementation = function(v0) {
        printStacks('private static java.lang.String com.tencent.mm.network.aj.exception2String(java.lang.Exception)');
        return com_tencent_mm_network_aj_clz_method_exception2String_b3iq.call(com_tencent_mm_network_aj_clz, v0);
    };
    var com_tencent_mm_network_aj_clz_method_onLongLinkIdentifyResp_hbva = com_tencent_mm_network_aj_clz.onLongLinkIdentifyResp.overload('[B', '[B');
    com_tencent_mm_network_aj_clz_method_onLongLinkIdentifyResp_hbva.implementation = function(v0, v1) {
        printStacks('public final boolean com.tencent.mm.network.aj.onLongLinkIdentifyResp(byte[],byte[])');
        return com_tencent_mm_network_aj_clz_method_onLongLinkIdentifyResp_hbva.call(this, v0, v1);
    };
    var com_tencent_mm_network_aj_clz_method_isLogoned_pq3k = com_tencent_mm_network_aj_clz.isLogoned.overload();
    com_tencent_mm_network_aj_clz_method_isLogoned_pq3k.implementation = function() {
        printStacks('public final boolean com.tencent.mm.network.aj.isLogoned()');
        return com_tencent_mm_network_aj_clz_method_isLogoned_pq3k.call(this);
    };
    var com_tencent_mm_network_aj_clz_method_requestDoSync_4eph = com_tencent_mm_network_aj_clz.requestDoSync.overload();
    com_tencent_mm_network_aj_clz_method_requestDoSync_4eph.implementation = function() {
        printStacks('public final void com.tencent.mm.network.aj.requestDoSync()');
        com_tencent_mm_network_aj_clz_method_requestDoSync_4eph.call(this);
    };
    var com_tencent_mm_network_aj_clz_method_onNewDns_dtzu = com_tencent_mm_network_aj_clz.onNewDns.overload('java.lang.String');
    com_tencent_mm_network_aj_clz_method_onNewDns_dtzu.implementation = function(v0) {
        printStacks('public final java.lang.String[] com.tencent.mm.network.aj.onNewDns(java.lang.String)');
        return com_tencent_mm_network_aj_clz_method_onNewDns_dtzu.call(this, v0);
    };
    var com_tencent_mm_network_aj_clz_method_getLongLinkIdentifyCheckBuffer_r7jr = com_tencent_mm_network_aj_clz.getLongLinkIdentifyCheckBuffer.overload('java.io.ByteArrayOutputStream', 'java.io.ByteArrayOutputStream', '[I');
    com_tencent_mm_network_aj_clz_method_getLongLinkIdentifyCheckBuffer_r7jr.implementation = function(v0, v1, v2) {
        printStacks('public final int com.tencent.mm.network.aj.getLongLinkIdentifyCheckBuffer(java.io.ByteArrayOutputStream,java.io.ByteArrayOutputStream,int[])');
        return com_tencent_mm_network_aj_clz_method_getLongLinkIdentifyCheckBuffer_r7jr.call(this, v0, v1, v2);
    };
    var com_tencent_mm_network_aj_clz_method_onTaskEnd_0mth = com_tencent_mm_network_aj_clz.onTaskEnd.overload('int', 'java.lang.Object', 'int', 'int');
    com_tencent_mm_network_aj_clz_method_onTaskEnd_0mth.implementation = function(v0, v1, v2, v3) {
        printStacks('public final int com.tencent.mm.network.aj.onTaskEnd(int,java.lang.Object,int,int)');
        return com_tencent_mm_network_aj_clz_method_onTaskEnd_0mth.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_aj_clz_method_networkAnalysisCallBack_sc1s = com_tencent_mm_network_aj_clz.networkAnalysisCallBack.overload('int', 'int', 'boolean', 'java.lang.String');
    com_tencent_mm_network_aj_clz_method_networkAnalysisCallBack_sc1s.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.network.aj.networkAnalysisCallBack(int,int,boolean,java.lang.String)');
        com_tencent_mm_network_aj_clz_method_networkAnalysisCallBack_sc1s.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_aj_clz_method_a_z7bw = com_tencent_mm_network_aj_clz.a.overload('java.io.ByteArrayOutputStream', 'java.io.ByteArrayOutputStream');
    com_tencent_mm_network_aj_clz_method_a_z7bw.implementation = function(v0, v1) {
        printStacks('private static int com.tencent.mm.network.aj.a(java.io.ByteArrayOutputStream,java.io.ByteArrayOutputStream)');
        return com_tencent_mm_network_aj_clz_method_a_z7bw.call(com_tencent_mm_network_aj_clz, v0, v1);
    };
    var com_tencent_mm_network_aj_clz_method_buf2Resp_bi2c = com_tencent_mm_network_aj_clz.buf2Resp.overload('int', 'java.lang.Object', '[B', '[I', '[I', 'int');
    com_tencent_mm_network_aj_clz_method_buf2Resp_bi2c.implementation = function(v0, v1, v2, v3, v4, v5) {
        printStacks('public final int com.tencent.mm.network.aj.buf2Resp(int,java.lang.Object,byte[],int[],int[],int)');
        return com_tencent_mm_network_aj_clz_method_buf2Resp_bi2c.call(this, v0, v1, v2, v3, v4, v5);
    };
    var com_tencent_mm_network_aj_clz_init_9tj3 = com_tencent_mm_network_aj_clz.$init.overload();
    com_tencent_mm_network_aj_clz_init_9tj3.implementation = function() {
        printStacks('public com.tencent.mm.network.aj()');
        return com_tencent_mm_network_aj_clz_init_9tj3.call(this);
    };
    var com_tencent_mm_network_s_a_clz = Java.use('com.tencent.mm.network.s$a');
    var com_tencent_mm_network_s_a_clz_method_asBinder_u8y4 = com_tencent_mm_network_s_a_clz.asBinder.overload();
    com_tencent_mm_network_s_a_clz_method_asBinder_u8y4.implementation = function() {
        printStacks('public android.os.IBinder com.tencent.mm.network.s$a.asBinder()');
        return com_tencent_mm_network_s_a_clz_method_asBinder_u8y4.call(this);
    };
    var com_tencent_mm_network_s_a_clz_init_crk8 = com_tencent_mm_network_s_a_clz.$init.overload();
    com_tencent_mm_network_s_a_clz_init_crk8.implementation = function() {
        printStacks('public com.tencent.mm.network.s$a()');
        return com_tencent_mm_network_s_a_clz_init_crk8.call(this);
    };
    var com_tencent_mm_network_a_b_a_clz = Java.use('com.tencent.mm.network.a.b$a');
    var com_tencent_mm_network_a_b_a_clz_method_asBinder_tlte = com_tencent_mm_network_a_b_a_clz.asBinder.overload();
    com_tencent_mm_network_a_b_a_clz_method_asBinder_tlte.implementation = function() {
        printStacks('public android.os.IBinder com.tencent.mm.network.a.b$a.asBinder()');
        return com_tencent_mm_network_a_b_a_clz_method_asBinder_tlte.call(this);
    };

    var com_tencent_mm_network_a_b_a_clz_init_5xtm = com_tencent_mm_network_a_b_a_clz.$init.overload();
    com_tencent_mm_network_a_b_a_clz_init_5xtm.implementation = function() {
        printStacks('public com.tencent.mm.network.a.b$a()');
        return com_tencent_mm_network_a_b_a_clz_init_5xtm.call(this);
    };
    var com_tencent_mm_network_r_a_a_clz = Java.use('com.tencent.mm.network.r$a$a');
    var com_tencent_mm_network_r_a_a_clz_method_getOptions_nkq1 = com_tencent_mm_network_r_a_a_clz.getOptions.overload();
    com_tencent_mm_network_r_a_a_clz_method_getOptions_nkq1.implementation = function() {
        printStacks('public final int com.tencent.mm.network.r$a$a.getOptions()');
        return com_tencent_mm_network_r_a_a_clz_method_getOptions_nkq1.call(this);
    };
    var com_tencent_mm_network_r_a_a_clz_method_getTimeOut_q7n4 = com_tencent_mm_network_r_a_a_clz.getTimeOut.overload();
    com_tencent_mm_network_r_a_a_clz_method_getTimeOut_q7n4.implementation = function() {
        printStacks('public final int com.tencent.mm.network.r$a$a.getTimeOut()');
        return com_tencent_mm_network_r_a_a_clz_method_getTimeOut_q7n4.call(this);
    };
    var com_tencent_mm_network_r_a_a_clz_method_isSingleSession_hroa = com_tencent_mm_network_r_a_a_clz.isSingleSession.overload();
    com_tencent_mm_network_r_a_a_clz_method_isSingleSession_hroa.implementation = function() {
        printStacks('public final boolean com.tencent.mm.network.r$a$a.isSingleSession()');
        return com_tencent_mm_network_r_a_a_clz_method_isSingleSession_hroa.call(this);
    };
    var com_tencent_mm_network_r_a_a_clz_method_auA_jyaz = com_tencent_mm_network_r_a_a_clz.auA.overload();
    com_tencent_mm_network_r_a_a_clz_method_auA_jyaz.implementation = function() {
        printStacks('public final com.tencent.mm.protocal.i com.tencent.mm.network.r$a$a.auA()');
        return com_tencent_mm_network_r_a_a_clz_method_auA_jyaz.call(this);
    };
    var com_tencent_mm_network_r_a_a_clz_method_a_nrtp = com_tencent_mm_network_r_a_a_clz.a.overload('com.tencent.mm.network.j', 'int', 'int');
    com_tencent_mm_network_r_a_a_clz_method_a_nrtp.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.network.r$a$a.a(com.tencent.mm.network.j,int,int)');
        com_tencent_mm_network_r_a_a_clz_method_a_nrtp.call(this, v0, v1, v2);
    };
    var com_tencent_mm_network_r_a_a_clz_method_auz_yh78 = com_tencent_mm_network_r_a_a_clz.auz.overload();
    com_tencent_mm_network_r_a_a_clz_method_auz_yh78.implementation = function() {
        printStacks('public final com.tencent.mm.protocal.h com.tencent.mm.network.r$a$a.auz()');
        return com_tencent_mm_network_r_a_a_clz_method_auz_yh78.call(this);
    };
    var com_tencent_mm_network_r_a_a_clz_method_auB_0m8p = com_tencent_mm_network_r_a_a_clz.auB.overload();
    com_tencent_mm_network_r_a_a_clz_method_auB_0m8p.implementation = function() {
        printStacks('public final int com.tencent.mm.network.r$a$a.auB()');
        return com_tencent_mm_network_r_a_a_clz_method_auB_0m8p.call(this);
    };
    var com_tencent_mm_network_r_a_a_clz_method_a_olae = com_tencent_mm_network_r_a_a_clz.a.overload('com.tencent.mm.network.d', 'com.tencent.mm.network.j', 'int', 'int');
    com_tencent_mm_network_r_a_a_clz_method_a_olae.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.network.r$a$a.a(com.tencent.mm.network.d,com.tencent.mm.network.j,int,int)');
        com_tencent_mm_network_r_a_a_clz_method_a_olae.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_r_a_a_clz_method_asBinder_0lla = com_tencent_mm_network_r_a_a_clz.asBinder.overload();
    com_tencent_mm_network_r_a_a_clz_method_asBinder_0lla.implementation = function() {
        printStacks('public final android.os.IBinder com.tencent.mm.network.r$a$a.asBinder()');
        return com_tencent_mm_network_r_a_a_clz_method_asBinder_0lla.call(this);
    };
    var com_tencent_mm_network_r_a_a_clz_method_getUri_myuu = com_tencent_mm_network_r_a_a_clz.getUri.overload();
    com_tencent_mm_network_r_a_a_clz_method_getUri_myuu.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.network.r$a$a.getUri()');
        return com_tencent_mm_network_r_a_a_clz_method_getUri_myuu.call(this);
    };
    var com_tencent_mm_network_r_a_a_clz_method_getMMReqRespHash_cj8b = com_tencent_mm_network_r_a_a_clz.getMMReqRespHash.overload();
    com_tencent_mm_network_r_a_a_clz_method_getMMReqRespHash_cj8b.implementation = function() {
        printStacks('public final int com.tencent.mm.network.r$a$a.getMMReqRespHash()');
        return com_tencent_mm_network_r_a_a_clz_method_getMMReqRespHash_cj8b.call(this);
    };
    var com_tencent_mm_network_r_a_a_clz_method_setConnectionInfo_vc4c = com_tencent_mm_network_r_a_a_clz.setConnectionInfo.overload('java.lang.String');
    com_tencent_mm_network_r_a_a_clz_method_setConnectionInfo_vc4c.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.r$a$a.setConnectionInfo(java.lang.String)');
        com_tencent_mm_network_r_a_a_clz_method_setConnectionInfo_vc4c.call(this, v0);
    };
    var com_tencent_mm_network_r_a_a_clz_method_a_lmbe = com_tencent_mm_network_r_a_a_clz.a.overload('com.tencent.mm.network.j', 'int', 'int', 'java.lang.String');
    com_tencent_mm_network_r_a_a_clz_method_a_lmbe.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.network.r$a$a.a(com.tencent.mm.network.j,int,int,java.lang.String)');
        com_tencent_mm_network_r_a_a_clz_method_a_lmbe.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_r_a_a_clz_method_getIsUserCmd_zjbr = com_tencent_mm_network_r_a_a_clz.getIsUserCmd.overload();
    com_tencent_mm_network_r_a_a_clz_method_getIsUserCmd_zjbr.implementation = function() {
        printStacks('public final boolean com.tencent.mm.network.r$a$a.getIsUserCmd()');
        return com_tencent_mm_network_r_a_a_clz_method_getIsUserCmd_zjbr.call(this);
    };
    var com_tencent_mm_network_r_a_a_clz_method_getType_5n0m = com_tencent_mm_network_r_a_a_clz.getType.overload();
    com_tencent_mm_network_r_a_a_clz_method_getType_5n0m.implementation = function() {
        printStacks('public final int com.tencent.mm.network.r$a$a.getType()');
        return com_tencent_mm_network_r_a_a_clz_method_getType_5n0m.call(this);
    };
    var com_tencent_mm_network_r_a_a_clz_init_3fpp = com_tencent_mm_network_r_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_r_a_a_clz_init_3fpp.implementation = function(v0) {
        printStacks('com.tencent.mm.network.r$a$a(android.os.IBinder)');
        return com_tencent_mm_network_r_a_a_clz_init_3fpp.call(this, v0);
    };
});