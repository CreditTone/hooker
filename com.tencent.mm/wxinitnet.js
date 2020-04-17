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
    var com_tencent_mm_plugin_appbrand_networking_f_clz = Java.use('com.tencent.mm.plugin.appbrand.networking.f');
    var com_tencent_mm_plugin_appbrand_networking_f_clz_init_lzef = com_tencent_mm_plugin_appbrand_networking_f_clz.$init.overload();
    com_tencent_mm_plugin_appbrand_networking_f_clz_init_lzef.implementation = function() {
        printStacks('protected com.tencent.mm.plugin.appbrand.networking.f()');
        return com_tencent_mm_plugin_appbrand_networking_f_clz_init_lzef.call(this);
    };
    var com_tencent_mm_network_d_a_a_clz = Java.use('com.tencent.mm.network.d$a$a');
    var com_tencent_mm_network_d_a_a_clz_init_exnr = com_tencent_mm_network_d_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_d_a_a_clz_init_exnr.implementation = function(v0) {
        printStacks('com.tencent.mm.network.d$a$a(android.os.IBinder)');
        return com_tencent_mm_network_d_a_a_clz_init_exnr.call(this, v0);
    };
    var com_tencent_mm_network_b_b_clz = Java.use('com.tencent.mm.network.b$b');
    var com_tencent_mm_network_b_b_clz_init_6i0b = com_tencent_mm_network_b_b_clz.$init.overload('java.lang.String', 'boolean');
    com_tencent_mm_network_b_b_clz_init_6i0b.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.network.b$b(java.lang.String,boolean)');
        return com_tencent_mm_network_b_b_clz_init_6i0b.call(this, v0, v1);
    };
    var com_tencent_mm_network_b_b_clz_init_0b1k = com_tencent_mm_network_b_b_clz.$init.overload('java.lang.String');
    com_tencent_mm_network_b_b_clz_init_0b1k.implementation = function(v0) {
        printStacks('public com.tencent.mm.network.b$b(java.lang.String)');
        return com_tencent_mm_network_b_b_clz_init_0b1k.call(this, v0);
    };
    var com_tencent_mars_cdn_CronetLogic_CronetHttpsCreateResult_clz = Java.use('com.tencent.mars.cdn.CronetLogic$CronetHttpsCreateResult');
    var com_tencent_mars_cdn_CronetLogic_CronetHttpsCreateResult_clz_init_8x8p = com_tencent_mars_cdn_CronetLogic_CronetHttpsCreateResult_clz.$init.overload();
    com_tencent_mars_cdn_CronetLogic_CronetHttpsCreateResult_clz_init_8x8p.implementation = function() {
        printStacks('public com.tencent.mars.cdn.CronetLogic$CronetHttpsCreateResult()');
        return com_tencent_mars_cdn_CronetLogic_CronetHttpsCreateResult_clz_init_8x8p.call(this);
    };
    var com_tencent_mm_network_f_a_a_clz = Java.use('com.tencent.mm.network.f$a$a');
    var com_tencent_mm_network_f_a_a_clz_init_p6dm = com_tencent_mm_network_f_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_f_a_a_clz_init_p6dm.implementation = function(v0) {
        printStacks('com.tencent.mm.network.f$a$a(android.os.IBinder)');
        return com_tencent_mm_network_f_a_a_clz_init_p6dm.call(this, v0);
    };
    var com_tencent_mm_network_g_a_a_clz = Java.use('com.tencent.mm.network.g$a$a');
    var com_tencent_mm_network_g_a_a_clz_init_l74q = com_tencent_mm_network_g_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_g_a_a_clz_init_l74q.implementation = function(v0) {
        printStacks('com.tencent.mm.network.g$a$a(android.os.IBinder)');
        return com_tencent_mm_network_g_a_a_clz_init_l74q.call(this, v0);
    };
    var com_tencent_mm_network_h_a_a_clz = Java.use('com.tencent.mm.network.h$a$a');
    var com_tencent_mm_network_h_a_a_clz_init_tvv8 = com_tencent_mm_network_h_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_h_a_a_clz_init_tvv8.implementation = function(v0) {
        printStacks('com.tencent.mm.network.h$a$a(android.os.IBinder)');
        return com_tencent_mm_network_h_a_a_clz_init_tvv8.call(this, v0);
    };
    var com_tencent_mm_network_ac_a_clz = Java.use('com.tencent.mm.network.ac$a');
    var com_tencent_mm_network_ac_a_clz_init_7bma = com_tencent_mm_network_ac_a_clz.$init.overload('byte');
    com_tencent_mm_network_ac_a_clz_init_7bma.implementation = function(v0) {
        printStacks('com.tencent.mm.network.ac$a(byte)');
        return com_tencent_mm_network_ac_a_clz_init_7bma.call(this, v0);
    };
    var com_tencent_mm_network_ac_a_clz_init_4rer = com_tencent_mm_network_ac_a_clz.$init.overload();
    com_tencent_mm_network_ac_a_clz_init_4rer.implementation = function() {
        printStacks('private com.tencent.mm.network.ac$a()');
        return com_tencent_mm_network_ac_a_clz_init_4rer.call(this);
    };
    var com_tencent_mm_network_s_a_clz = Java.use('com.tencent.mm.network.s$a');
    var com_tencent_mm_network_s_a_clz_init_3sla = com_tencent_mm_network_s_a_clz.$init.overload();
    com_tencent_mm_network_s_a_clz_init_3sla.implementation = function() {
        printStacks('public com.tencent.mm.network.s$a()');
        return com_tencent_mm_network_s_a_clz_init_3sla.call(this);
    };
    var com_tencent_mm_network_i_a_a_clz = Java.use('com.tencent.mm.network.i$a$a');
    var com_tencent_mm_network_i_a_a_clz_init_zy0y = com_tencent_mm_network_i_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_i_a_a_clz_init_zy0y.implementation = function(v0) {
        printStacks('com.tencent.mm.network.i$a$a(android.os.IBinder)');
        return com_tencent_mm_network_i_a_a_clz_init_zy0y.call(this, v0);
    };
    var com_tencent_mm_plugin_appbrand_networking_f_1_1_clz = Java.use('com.tencent.mm.plugin.appbrand.networking.f$1$1');
    var com_tencent_mm_plugin_appbrand_networking_f_1_1_clz_init_jrs6 = com_tencent_mm_plugin_appbrand_networking_f_1_1_clz.$init.overload('com.tencent.mm.plugin.appbrand.networking.f$1', 'com.tencent.mm.vending.g.b');
    com_tencent_mm_plugin_appbrand_networking_f_1_1_clz_init_jrs6.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.plugin.appbrand.networking.f$1$1(com.tencent.mm.plugin.appbrand.networking.f$1,com.tencent.mm.vending.g.b)');
        return com_tencent_mm_plugin_appbrand_networking_f_1_1_clz_init_jrs6.call(this, v0, v1);
    };
    var com_tencent_mm_network_j_a_a_clz = Java.use('com.tencent.mm.network.j$a$a');
    var com_tencent_mm_network_j_a_a_clz_init_ij75 = com_tencent_mm_network_j_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_j_a_a_clz_init_ij75.implementation = function(v0) {
        printStacks('com.tencent.mm.network.j$a$a(android.os.IBinder)');
        return com_tencent_mm_network_j_a_a_clz_init_ij75.call(this, v0);
    };
    var com_tencent_mm_network_n_a_clz = Java.use('com.tencent.mm.network.n$a');
    var com_tencent_mm_network_n_a_clz_init_g7xq = com_tencent_mm_network_n_a_clz.$init.overload();
    com_tencent_mm_network_n_a_clz_init_g7xq.implementation = function() {
        printStacks('public com.tencent.mm.network.n$a()');
        return com_tencent_mm_network_n_a_clz_init_g7xq.call(this);
    };
    var com_tencent_mm_network_l_a_a_clz = Java.use('com.tencent.mm.network.l$a$a');
    var com_tencent_mm_network_l_a_a_clz_init_v23d = com_tencent_mm_network_l_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_l_a_a_clz_init_v23d.implementation = function(v0) {
        printStacks('com.tencent.mm.network.l$a$a(android.os.IBinder)');
        return com_tencent_mm_network_l_a_a_clz_init_v23d.call(this, v0);
    };
    var com_tencent_mm_network_i_a_clz = Java.use('com.tencent.mm.network.i$a');
    var com_tencent_mm_network_i_a_clz_init_rdmf = com_tencent_mm_network_i_a_clz.$init.overload();
    com_tencent_mm_network_i_a_clz_init_rdmf.implementation = function() {
        printStacks('public com.tencent.mm.network.i$a()');
        return com_tencent_mm_network_i_a_clz_init_rdmf.call(this);
    };
    var com_tencent_mm_network_n_a_a_clz = Java.use('com.tencent.mm.network.n$a$a');
    var com_tencent_mm_network_n_a_a_clz_init_xtmh = com_tencent_mm_network_n_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_n_a_a_clz_init_xtmh.implementation = function(v0) {
        printStacks('com.tencent.mm.network.n$a$a(android.os.IBinder)');
        return com_tencent_mm_network_n_a_a_clz_init_xtmh.call(this, v0);
    };
    var com_tencent_mars_cdn_CronetLogic_CronetDownloadProgress_clz = Java.use('com.tencent.mars.cdn.CronetLogic$CronetDownloadProgress');
    var com_tencent_mars_cdn_CronetLogic_CronetDownloadProgress_clz_init_g7dc = com_tencent_mars_cdn_CronetLogic_CronetDownloadProgress_clz.$init.overload();
    com_tencent_mars_cdn_CronetLogic_CronetDownloadProgress_clz_init_g7dc.implementation = function() {
        printStacks('public com.tencent.mars.cdn.CronetLogic$CronetDownloadProgress()');
        return com_tencent_mars_cdn_CronetLogic_CronetDownloadProgress_clz_init_g7dc.call(this);
    };
    var com_tencent_mars_cdn_CronetLogic_clz = Java.use('com.tencent.mars.cdn.CronetLogic');
    var com_tencent_mars_cdn_CronetLogic_clz_init_bwuv = com_tencent_mars_cdn_CronetLogic_clz.$init.overload();
    com_tencent_mars_cdn_CronetLogic_clz_init_bwuv.implementation = function() {
        printStacks('public com.tencent.mars.cdn.CronetLogic()');
        return com_tencent_mars_cdn_CronetLogic_clz_init_bwuv.call(this);
    };
    var com_tencent_mm_network_d_a_clz = Java.use('com.tencent.mm.network.d$a');
    var com_tencent_mm_network_d_a_clz_init_6jvj = com_tencent_mm_network_d_a_clz.$init.overload();
    com_tencent_mm_network_d_a_clz_init_6jvj.implementation = function() {
        printStacks('public com.tencent.mm.network.d$a()');
        return com_tencent_mm_network_d_a_clz_init_6jvj.call(this);
    };
    var com_tencent_mm_network_o_a_a_clz = Java.use('com.tencent.mm.network.o$a$a');
    var com_tencent_mm_network_o_a_a_clz_init_nxwf = com_tencent_mm_network_o_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_o_a_a_clz_init_nxwf.implementation = function(v0) {
        printStacks('com.tencent.mm.network.o$a$a(android.os.IBinder)');
        return com_tencent_mm_network_o_a_a_clz_init_nxwf.call(this, v0);
    };
    var com_tencent_mm_network_a_clz = Java.use('com.tencent.mm.network.a');
    var com_tencent_mm_network_a_clz_init_ryef = com_tencent_mm_network_a_clz.$init.overload('com.tencent.mm.network.a$b');
    com_tencent_mm_network_a_clz_init_ryef.implementation = function(v0) {
        printStacks('public com.tencent.mm.network.a(com.tencent.mm.network.a$b)');
        return com_tencent_mm_network_a_clz_init_ryef.call(this, v0);
    };
    var com_tencent_mm_network_b_clz = Java.use('com.tencent.mm.network.b');
    var com_tencent_mm_network_aj_1_clz = Java.use('com.tencent.mm.network.aj$1');
    var com_tencent_mm_network_aj_1_clz_init_dsq7 = com_tencent_mm_network_aj_1_clz.$init.overload('com.tencent.mm.network.aj', 'int', '[B');
    com_tencent_mm_network_aj_1_clz_init_dsq7.implementation = function(v0, v1, v2) {
        printStacks('com.tencent.mm.network.aj$1(com.tencent.mm.network.aj,int,byte[])');
        return com_tencent_mm_network_aj_1_clz_init_dsq7.call(this, v0, v1, v2);
    };
    var com_tencent_mm_network_aj_2_clz = Java.use('com.tencent.mm.network.aj$2');
    var com_tencent_mm_network_aj_2_clz_init_eymb = com_tencent_mm_network_aj_2_clz.$init.overload('com.tencent.mm.network.aj', 'int', 'java.lang.Object', 'int', 'int');
    com_tencent_mm_network_aj_2_clz_init_eymb.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('com.tencent.mm.network.aj$2(com.tencent.mm.network.aj,int,java.lang.Object,int,int)');
        return com_tencent_mm_network_aj_2_clz_init_eymb.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_mm_network_aj_3_clz = Java.use('com.tencent.mm.network.aj$3');
    var com_tencent_mm_network_aj_3_clz_init_r0eb = com_tencent_mm_network_aj_3_clz.$init.overload('com.tencent.mm.network.aj');
    com_tencent_mm_network_aj_3_clz_init_r0eb.implementation = function(v0) {
        printStacks('com.tencent.mm.network.aj$3(com.tencent.mm.network.aj)');
        return com_tencent_mm_network_aj_3_clz_init_r0eb.call(this, v0);
    };
    var com_tencent_mm_network_p_clz = Java.use('com.tencent.mm.network.p');
    var com_tencent_mm_network_p_clz_init_duzg = com_tencent_mm_network_p_clz.$init.overload();
    com_tencent_mm_network_p_clz_init_duzg.implementation = function() {
        printStacks('public com.tencent.mm.network.p()');
        return com_tencent_mm_network_p_clz_init_duzg.call(this);
    };
    var com_tencent_mm_network_t_clz = Java.use('com.tencent.mm.network.t');
    var com_tencent_mm_network_t_clz_init_z9ea = com_tencent_mm_network_t_clz.$init.overload('com.tencent.mm.sdk.platformtools.ap');
    com_tencent_mm_network_t_clz_init_z9ea.implementation = function(v0) {
        printStacks('public com.tencent.mm.network.t(com.tencent.mm.sdk.platformtools.ap)');
        return com_tencent_mm_network_t_clz_init_z9ea.call(this, v0);
    };
    var com_tencent_mm_network_v_clz = Java.use('com.tencent.mm.network.v');
    var com_tencent_mm_network_v_clz_init_k03c = com_tencent_mm_network_v_clz.$init.overload('java.net.URL', 'int');
    com_tencent_mm_network_v_clz_init_k03c.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.network.v(java.net.URL,int)');
        return com_tencent_mm_network_v_clz_init_k03c.call(this, v0, v1);
    };
    var com_tencent_mm_network_x_clz = Java.use('com.tencent.mm.network.x');
    var com_tencent_mm_network_x_clz_init_hpqq = com_tencent_mm_network_x_clz.$init.overload('java.lang.String', 'int');
    com_tencent_mm_network_x_clz_init_hpqq.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.network.x(java.lang.String,int)');
        return com_tencent_mm_network_x_clz_init_hpqq.call(this, v0, v1);
    };
    var com_tencent_mm_network_y_clz = Java.use('com.tencent.mm.network.y');
    var com_tencent_mm_network_y_clz_init_qiwn = com_tencent_mm_network_y_clz.$init.overload('java.net.URL');
    com_tencent_mm_network_y_clz_init_qiwn.implementation = function(v0) {
        printStacks('private com.tencent.mm.network.y(java.net.URL)');
        return com_tencent_mm_network_y_clz_init_qiwn.call(this, v0);
    };
    var com_tencent_mm_network_y_clz_init_xi1c = com_tencent_mm_network_y_clz.$init.overload('java.lang.String');
    com_tencent_mm_network_y_clz_init_xi1c.implementation = function(v0) {
        printStacks('public com.tencent.mm.network.y(java.lang.String)');
        return com_tencent_mm_network_y_clz_init_xi1c.call(this, v0);
    };
    var com_tencent_mm_network_z_clz = Java.use('com.tencent.mm.network.z');
    var com_tencent_mm_network_z_clz_init_yqes = com_tencent_mm_network_z_clz.$init.overload();
    com_tencent_mm_network_z_clz_init_yqes.implementation = function() {
        printStacks('public com.tencent.mm.network.z()');
        return com_tencent_mm_network_z_clz_init_yqes.call(this);
    };
    var com_tencent_mm_network_r_a_a_clz = Java.use('com.tencent.mm.network.r$a$a');
    var com_tencent_mm_network_r_a_a_clz_init_5txn = com_tencent_mm_network_r_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_r_a_a_clz_init_5txn.implementation = function(v0) {
        printStacks('com.tencent.mm.network.r$a$a(android.os.IBinder)');
        return com_tencent_mm_network_r_a_a_clz_init_5txn.call(this, v0);
    };
    var com_tencent_mm_network_s_a_a_clz = Java.use('com.tencent.mm.network.s$a$a');
    var com_tencent_mm_network_s_a_a_clz_init_en47 = com_tencent_mm_network_s_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_s_a_a_clz_init_en47.implementation = function(v0) {
        printStacks('com.tencent.mm.network.s$a$a(android.os.IBinder)');
        return com_tencent_mm_network_s_a_a_clz_init_en47.call(this, v0);
    };
    var com_tencent_mm_network_t_10_clz = Java.use('com.tencent.mm.network.t$10');
    var com_tencent_mm_network_t_10_clz_init_yxur = com_tencent_mm_network_t_10_clz.$init.overload('com.tencent.mm.network.t', 'java.lang.Object', 'boolean');
    com_tencent_mm_network_t_10_clz_init_yxur.implementation = function(v0, v1, v2) {
        printStacks('com.tencent.mm.network.t$10(com.tencent.mm.network.t,java.lang.Object,boolean)');
        return com_tencent_mm_network_t_10_clz_init_yxur.call(this, v0, v1, v2);
    };
    var com_tencent_mm_network_t_11_clz = Java.use('com.tencent.mm.network.t$11');
    var com_tencent_mm_network_t_11_clz_init_0cal = com_tencent_mm_network_t_11_clz.$init.overload('com.tencent.mm.network.t', 'java.lang.Object', 'java.util.Map', 'java.util.Map', '[I', '[I');
    com_tencent_mm_network_t_11_clz_init_0cal.implementation = function(v0, v1, v2, v3, v4, v5) {
        printStacks('com.tencent.mm.network.t$11(com.tencent.mm.network.t,java.lang.Object,java.util.Map,java.util.Map,int[],int[])');
        return com_tencent_mm_network_t_11_clz_init_0cal.call(this, v0, v1, v2, v3, v4, v5);
    };
    var com_tencent_mm_network_t_12_clz = Java.use('com.tencent.mm.network.t$12');
    var com_tencent_mm_network_t_12_clz_init_o9xo = com_tencent_mm_network_t_12_clz.$init.overload('com.tencent.mm.network.t', 'java.lang.Object', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_mm_network_t_12_clz_init_o9xo.implementation = function(v0, v1, v2, v3, v4, v5) {
        printStacks('com.tencent.mm.network.t$12(com.tencent.mm.network.t,java.lang.Object,java.lang.String,java.lang.String,java.lang.String,java.lang.String)');
        return com_tencent_mm_network_t_12_clz_init_o9xo.call(this, v0, v1, v2, v3, v4, v5);
    };
    var com_tencent_mm_network_t_13_clz = Java.use('com.tencent.mm.network.t$13');
    var com_tencent_mm_network_t_13_clz_init_wajj = com_tencent_mm_network_t_13_clz.$init.overload('com.tencent.mm.network.t', 'java.lang.String', 'java.lang.String');
    com_tencent_mm_network_t_13_clz_init_wajj.implementation = function(v0, v1, v2) {
        printStacks('com.tencent.mm.network.t$13(com.tencent.mm.network.t,java.lang.String,java.lang.String)');
        return com_tencent_mm_network_t_13_clz_init_wajj.call(this, v0, v1, v2);
    };
    var com_tencent_mm_network_t_14_clz = Java.use('com.tencent.mm.network.t$14');
    var com_tencent_mm_network_t_14_clz_init_sxl8 = com_tencent_mm_network_t_14_clz.$init.overload('com.tencent.mm.network.t', 'java.lang.String', 'java.lang.String');
    com_tencent_mm_network_t_14_clz_init_sxl8.implementation = function(v0, v1, v2) {
        printStacks('public com.tencent.mm.network.t$14(com.tencent.mm.network.t,java.lang.String,java.lang.String)');
        return com_tencent_mm_network_t_14_clz_init_sxl8.call(this, v0, v1, v2);
    };
    var com_tencent_mm_network_t_15_clz = Java.use('com.tencent.mm.network.t$15');
    var com_tencent_mm_network_t_15_clz_init_9fco = com_tencent_mm_network_t_15_clz.$init.overload('com.tencent.mm.network.t', 'java.lang.Object');
    com_tencent_mm_network_t_15_clz_init_9fco.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.network.t$15(com.tencent.mm.network.t,java.lang.Object)');
        return com_tencent_mm_network_t_15_clz_init_9fco.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_appbrand_networking_f_1_clz = Java.use('com.tencent.mm.plugin.appbrand.networking.f$1');
    var com_tencent_mm_plugin_appbrand_networking_f_1_clz_init_5n8k = com_tencent_mm_plugin_appbrand_networking_f_1_clz.$init.overload('com.tencent.mm.plugin.appbrand.networking.f', 'com.tencent.mm.ak.b$a', 'java.lang.String');
    com_tencent_mm_plugin_appbrand_networking_f_1_clz_init_5n8k.implementation = function(v0, v1, v2) {
        printStacks('com.tencent.mm.plugin.appbrand.networking.f$1(com.tencent.mm.plugin.appbrand.networking.f,com.tencent.mm.ak.b$a,java.lang.String)');
        return com_tencent_mm_plugin_appbrand_networking_f_1_clz_init_5n8k.call(this, v0, v1, v2);
    };
    var com_tencent_mars_cdn_CronetLogic_QuicForceHost_clz = Java.use('com.tencent.mars.cdn.CronetLogic$QuicForceHost');
    var com_tencent_mars_cdn_CronetLogic_QuicForceHost_clz_init_7n0q = com_tencent_mars_cdn_CronetLogic_QuicForceHost_clz.$init.overload();
    com_tencent_mars_cdn_CronetLogic_QuicForceHost_clz_init_7n0q.implementation = function() {
        printStacks('public com.tencent.mars.cdn.CronetLogic$QuicForceHost()');
        return com_tencent_mars_cdn_CronetLogic_QuicForceHost_clz_init_7n0q.call(this);
    };
    var com_tencent_mm_plugin_appbrand_networking_f_a_clz = Java.use('com.tencent.mm.plugin.appbrand.networking.f$a');
    var com_tencent_mm_plugin_appbrand_networking_f_a_clz_init_ar0r = com_tencent_mm_plugin_appbrand_networking_f_a_clz.$init.overload('byte');
    com_tencent_mm_plugin_appbrand_networking_f_a_clz_init_ar0r.implementation = function(v0) {
        printStacks('com.tencent.mm.plugin.appbrand.networking.f$a(byte)');
        return com_tencent_mm_plugin_appbrand_networking_f_a_clz_init_ar0r.call(this, v0);
    };
    var com_tencent_mm_plugin_appbrand_networking_f_a_clz_init_vfuj = com_tencent_mm_plugin_appbrand_networking_f_a_clz.$init.overload();
    com_tencent_mm_plugin_appbrand_networking_f_a_clz_init_vfuj.implementation = function() {
        printStacks('private com.tencent.mm.plugin.appbrand.networking.f$a()');
        return com_tencent_mm_plugin_appbrand_networking_f_a_clz_init_vfuj.call(this);
    };
    var com_tencent_mm_network_f_a_clz = Java.use('com.tencent.mm.network.f$a');
    var com_tencent_mm_network_f_a_clz_init_9blp = com_tencent_mm_network_f_a_clz.$init.overload();
    com_tencent_mm_network_f_a_clz_init_9blp.implementation = function() {
        printStacks('public com.tencent.mm.network.f$a()');
        return com_tencent_mm_network_f_a_clz_init_9blp.call(this);
    };
    var com_tencent_mm_network_a_a_clz = Java.use('com.tencent.mm.network.a$a');
    var com_tencent_mm_network_a_a_clz_init_89fx = com_tencent_mm_network_a_a_clz.$init.overload('com.tencent.mm.network.a');
    com_tencent_mm_network_a_a_clz_init_89fx.implementation = function(v0) {
        printStacks('com.tencent.mm.network.a$a(com.tencent.mm.network.a)');
        return com_tencent_mm_network_a_a_clz_init_89fx.call(this, v0);
    };
    var com_tencent_mars_cdn_CronetLogic_HeaderMap_clz = Java.use('com.tencent.mars.cdn.CronetLogic$HeaderMap');
    var com_tencent_mars_cdn_CronetLogic_HeaderMap_clz_init_8jt8 = com_tencent_mars_cdn_CronetLogic_HeaderMap_clz.$init.overload();
    com_tencent_mars_cdn_CronetLogic_HeaderMap_clz_init_8jt8.implementation = function() {
        printStacks('public com.tencent.mars.cdn.CronetLogic$HeaderMap()');
        return com_tencent_mars_cdn_CronetLogic_HeaderMap_clz_init_8jt8.call(this);
    };
    var com_tencent_mars_cdn_CdnLogic_CronetTaskResult_clz = Java.use('com.tencent.mars.cdn.CdnLogic$CronetTaskResult');
    var com_tencent_mars_cdn_CdnLogic_CronetTaskResult_clz_init_hr9p = com_tencent_mars_cdn_CdnLogic_CronetTaskResult_clz.$init.overload();
    com_tencent_mars_cdn_CdnLogic_CronetTaskResult_clz_init_hr9p.implementation = function() {
        printStacks('public com.tencent.mars.cdn.CdnLogic$CronetTaskResult()');
        return com_tencent_mars_cdn_CdnLogic_CronetTaskResult_clz_init_hr9p.call(this);
    };
    var com_tencent_mars_cdn_CronetLogic_ResponseHeader_clz = Java.use('com.tencent.mars.cdn.CronetLogic$ResponseHeader');
    var com_tencent_mars_cdn_CronetLogic_ResponseHeader_clz_init_2l7t = com_tencent_mars_cdn_CronetLogic_ResponseHeader_clz.$init.overload();
    com_tencent_mars_cdn_CronetLogic_ResponseHeader_clz_init_2l7t.implementation = function() {
        printStacks('public com.tencent.mars.cdn.CronetLogic$ResponseHeader()');
        return com_tencent_mars_cdn_CronetLogic_ResponseHeader_clz_init_2l7t.call(this);
    };
    var com_tencent_mm_network_r_a_clz = Java.use('com.tencent.mm.network.r$a');
    var com_tencent_mm_network_r_a_clz_init_310h = com_tencent_mm_network_r_a_clz.$init.overload();
    com_tencent_mm_network_r_a_clz_init_310h.implementation = function() {
        printStacks('public com.tencent.mm.network.r$a()');
        return com_tencent_mm_network_r_a_clz_init_310h.call(this);
    };
    var com_tencent_mars_cdn_CronetLogic_WebPageProfile_clz = Java.use('com.tencent.mars.cdn.CronetLogic$WebPageProfile');
    var com_tencent_mars_cdn_CronetLogic_WebPageProfile_clz_init_yenm = com_tencent_mars_cdn_CronetLogic_WebPageProfile_clz.$init.overload();
    com_tencent_mars_cdn_CronetLogic_WebPageProfile_clz_init_yenm.implementation = function() {
        printStacks('public com.tencent.mars.cdn.CronetLogic$WebPageProfile()');
        return com_tencent_mars_cdn_CronetLogic_WebPageProfile_clz_init_yenm.call(this);
    };
    var com_tencent_mm_network_h_a_clz = Java.use('com.tencent.mm.network.h$a');
    var com_tencent_mm_network_h_a_clz_init_dl1v = com_tencent_mm_network_h_a_clz.$init.overload();
    com_tencent_mm_network_h_a_clz_init_dl1v.implementation = function() {
        printStacks('public com.tencent.mm.network.h$a()');
        return com_tencent_mm_network_h_a_clz_init_dl1v.call(this);
    };
    var com_tencent_mars_cdn_CronetLogic_QuicTaskParams_clz = Java.use('com.tencent.mars.cdn.CronetLogic$QuicTaskParams');
    var com_tencent_mars_cdn_CronetLogic_QuicTaskParams_clz_init_no8k = com_tencent_mars_cdn_CronetLogic_QuicTaskParams_clz.$init.overload();
    com_tencent_mars_cdn_CronetLogic_QuicTaskParams_clz_init_no8k.implementation = function() {
        printStacks('public com.tencent.mars.cdn.CronetLogic$QuicTaskParams()');
        return com_tencent_mars_cdn_CronetLogic_QuicTaskParams_clz_init_no8k.call(this);
    };
    var com_tencent_mars_cdn_CronetLogic_CronetRequestParams_clz = Java.use('com.tencent.mars.cdn.CronetLogic$CronetRequestParams');
    var com_tencent_mars_cdn_CronetLogic_CronetRequestParams_clz_init_3x1v = com_tencent_mars_cdn_CronetLogic_CronetRequestParams_clz.$init.overload();
    com_tencent_mars_cdn_CronetLogic_CronetRequestParams_clz_init_3x1v.implementation = function() {
        printStacks('public com.tencent.mars.cdn.CronetLogic$CronetRequestParams()');
        return com_tencent_mars_cdn_CronetLogic_CronetRequestParams_clz_init_3x1v.call(this);
    };
    var com_tencent_mm_network_t_1_clz = Java.use('com.tencent.mm.network.t$1');
    var com_tencent_mm_network_t_1_clz_init_hy22 = com_tencent_mm_network_t_1_clz.$init.overload('com.tencent.mm.network.t', 'int');
    com_tencent_mm_network_t_1_clz_init_hy22.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.network.t$1(com.tencent.mm.network.t,int)');
        return com_tencent_mm_network_t_1_clz_init_hy22.call(this, v0, v1);
    };
    var com_tencent_mm_network_t_2_clz = Java.use('com.tencent.mm.network.t$2');
    var com_tencent_mm_network_t_2_clz_init_j4ue = com_tencent_mm_network_t_2_clz.$init.overload('com.tencent.mm.network.t', 'java.lang.String');
    com_tencent_mm_network_t_2_clz_init_j4ue.implementation = function(v0, v1) {
        printStacks('com.tencent.mm.network.t$2(com.tencent.mm.network.t,java.lang.String)');
        return com_tencent_mm_network_t_2_clz_init_j4ue.call(this, v0, v1);
    };
    var com_tencent_mm_network_t_3_clz = Java.use('com.tencent.mm.network.t$3');
    var com_tencent_mm_network_t_3_clz_init_atxh = com_tencent_mm_network_t_3_clz.$init.overload('com.tencent.mm.network.t');
    com_tencent_mm_network_t_3_clz_init_atxh.implementation = function(v0) {
        printStacks('com.tencent.mm.network.t$3(com.tencent.mm.network.t)');
        return com_tencent_mm_network_t_3_clz_init_atxh.call(this, v0);
    };
    var com_tencent_mm_network_t_4_clz = Java.use('com.tencent.mm.network.t$4');
    var com_tencent_mm_network_t_4_clz_init_9nnj = com_tencent_mm_network_t_4_clz.$init.overload('com.tencent.mm.network.t', '[Ljava.lang.String;', '[Ljava.lang.String;', '[I');
    com_tencent_mm_network_t_4_clz_init_9nnj.implementation = function(v0, v1, v2, v3) {
        printStacks('com.tencent.mm.network.t$4(com.tencent.mm.network.t,java.lang.String[],java.lang.String[],int[])');
        return com_tencent_mm_network_t_4_clz_init_9nnj.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_t_5_clz = Java.use('com.tencent.mm.network.t$5');
    var com_tencent_mm_network_t_5_clz_init_pukn = com_tencent_mm_network_t_5_clz.$init.overload('com.tencent.mm.network.t', '[Ljava.lang.String;', '[Ljava.lang.String;', '[I');
    com_tencent_mm_network_t_5_clz_init_pukn.implementation = function(v0, v1, v2, v3) {
        printStacks('com.tencent.mm.network.t$5(com.tencent.mm.network.t,java.lang.String[],java.lang.String[],int[])');
        return com_tencent_mm_network_t_5_clz_init_pukn.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_t_6_clz = Java.use('com.tencent.mm.network.t$6');
    var com_tencent_mm_network_t_6_clz_init_zrxc = com_tencent_mm_network_t_6_clz.$init.overload('com.tencent.mm.network.t', 'int', 'int', 'java.lang.String', 'boolean');
    com_tencent_mm_network_t_6_clz_init_zrxc.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('com.tencent.mm.network.t$6(com.tencent.mm.network.t,int,int,java.lang.String,boolean)');
        return com_tencent_mm_network_t_6_clz_init_zrxc.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_mm_network_t_7_clz = Java.use('com.tencent.mm.network.t$7');
    var com_tencent_mm_network_t_7_clz_init_5iji = com_tencent_mm_network_t_7_clz.$init.overload('com.tencent.mm.network.t', 'java.lang.String', 'long', 'java.lang.String');
    com_tencent_mm_network_t_7_clz_init_5iji.implementation = function(v0, v1, v2, v3) {
        printStacks('com.tencent.mm.network.t$7(com.tencent.mm.network.t,java.lang.String,long,java.lang.String)');
        return com_tencent_mm_network_t_7_clz_init_5iji.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_t_8_clz = Java.use('com.tencent.mm.network.t$8');
    var com_tencent_mm_network_t_8_clz_init_r88j = com_tencent_mm_network_t_8_clz.$init.overload('com.tencent.mm.network.t');
    com_tencent_mm_network_t_8_clz_init_r88j.implementation = function(v0) {
        printStacks('com.tencent.mm.network.t$8(com.tencent.mm.network.t)');
        return com_tencent_mm_network_t_8_clz_init_r88j.call(this, v0);
    };
    var com_tencent_mm_network_t_9_clz = Java.use('com.tencent.mm.network.t$9');
    var com_tencent_mm_network_t_9_clz_init_4fou = com_tencent_mm_network_t_9_clz.$init.overload('com.tencent.mm.network.t', 'java.lang.Integer', 'com.tencent.mm.network.r', 'com.tencent.mm.network.l');
    com_tencent_mm_network_t_9_clz_init_4fou.implementation = function(v0, v1, v2, v3) {
        printStacks('com.tencent.mm.network.t$9(com.tencent.mm.network.t,java.lang.Integer,com.tencent.mm.network.r,com.tencent.mm.network.l)');
        return com_tencent_mm_network_t_9_clz_init_4fou.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_t_a_clz = Java.use('com.tencent.mm.network.t$a');
    var com_tencent_mm_network_t_a_clz_init_9127 = com_tencent_mm_network_t_a_clz.$init.overload('com.tencent.mm.network.t', 'com.tencent.mars.comm.WakerLock');
    com_tencent_mm_network_t_a_clz_init_9127.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.network.t$a(com.tencent.mm.network.t,com.tencent.mars.comm.WakerLock)');
        return com_tencent_mm_network_t_a_clz_init_9127.call(this, v0, v1);
    };
    var com_tencent_mm_network_t_b_clz = Java.use('com.tencent.mm.network.t$b');
    var com_tencent_mm_network_t_b_clz_init_7szc = com_tencent_mm_network_t_b_clz.$init.overload('com.tencent.mm.network.t', 'com.tencent.mars.comm.WakerLock');
    com_tencent_mm_network_t_b_clz_init_7szc.implementation = function(v0, v1) {
        printStacks('public com.tencent.mm.network.t$b(com.tencent.mm.network.t,com.tencent.mars.comm.WakerLock)');
        return com_tencent_mm_network_t_b_clz_init_7szc.call(this, v0, v1);
    };
    var com_tencent_mm_network_o_a_clz = Java.use('com.tencent.mm.network.o$a');
    var com_tencent_mm_network_o_a_clz_init_7vuo = com_tencent_mm_network_o_a_clz.$init.overload();
    com_tencent_mm_network_o_a_clz_init_7vuo.implementation = function() {
        printStacks('public com.tencent.mm.network.o$a()');
        return com_tencent_mm_network_o_a_clz_init_7vuo.call(this);
    };
    var com_tencent_mm_network_j_a_clz = Java.use('com.tencent.mm.network.j$a');
    var com_tencent_mm_network_j_a_clz_init_lf8m = com_tencent_mm_network_j_a_clz.$init.overload();
    com_tencent_mm_network_j_a_clz_init_lf8m.implementation = function() {
        printStacks('public com.tencent.mm.network.j$a()');
        return com_tencent_mm_network_j_a_clz_init_lf8m.call(this);
    };
    var com_tencent_mm_network_aa_clz = Java.use('com.tencent.mm.network.aa');
    var com_tencent_mm_network_aa_clz_init_s13j = com_tencent_mm_network_aa_clz.$init.overload();
    com_tencent_mm_network_aa_clz_init_s13j.implementation = function() {
        printStacks('public com.tencent.mm.network.aa()');
        return com_tencent_mm_network_aa_clz_init_s13j.call(this);
    };
    var com_tencent_mm_network_ab_clz = Java.use('com.tencent.mm.network.ab');
    var com_tencent_mm_network_ab_clz_init_xtct = com_tencent_mm_network_ab_clz.$init.overload();
    com_tencent_mm_network_ab_clz_init_xtct.implementation = function() {
        printStacks('public com.tencent.mm.network.ab()');
        return com_tencent_mm_network_ab_clz_init_xtct.call(this);
    };
    var com_tencent_mm_network_ac_clz = Java.use('com.tencent.mm.network.ac');
    var com_tencent_mm_network_ac_clz_init_qsre = com_tencent_mm_network_ac_clz.$init.overload();
    com_tencent_mm_network_ac_clz_init_qsre.implementation = function() {
        printStacks('public com.tencent.mm.network.ac()');
        return com_tencent_mm_network_ac_clz_init_qsre.call(this);
    };
    var com_tencent_mm_network_ad_clz = Java.use('com.tencent.mm.network.ad');
    var com_tencent_mm_network_ad_clz_init_e6gn = com_tencent_mm_network_ad_clz.$init.overload();
    com_tencent_mm_network_ad_clz_init_e6gn.implementation = function() {
        printStacks('private com.tencent.mm.network.ad()');
        return com_tencent_mm_network_ad_clz_init_e6gn.call(this);
    };
    var com_tencent_mm_network_ae_clz = Java.use('com.tencent.mm.network.ae');
    var com_tencent_mm_network_ae_clz_init_25hs = com_tencent_mm_network_ae_clz.$init.overload();
    com_tencent_mm_network_ae_clz_init_25hs.implementation = function() {
        printStacks('public com.tencent.mm.network.ae()');
        return com_tencent_mm_network_ae_clz_init_25hs.call(this);
    };
    var com_tencent_mm_network_af_clz = Java.use('com.tencent.mm.network.af');
    var com_tencent_mm_network_af_clz_init_gcco = com_tencent_mm_network_af_clz.$init.overload();
    com_tencent_mm_network_af_clz_init_gcco.implementation = function() {
        printStacks('public com.tencent.mm.network.af()');
        return com_tencent_mm_network_af_clz_init_gcco.call(this);
    };
    var com_tencent_mm_network_ah_clz = Java.use('com.tencent.mm.network.ah');
    var com_tencent_mm_network_ai_clz = Java.use('com.tencent.mm.network.ai');
    var com_tencent_mm_network_ai_clz_init_vvlo = com_tencent_mm_network_ai_clz.$init.overload();
    com_tencent_mm_network_ai_clz_init_vvlo.implementation = function() {
        printStacks('public com.tencent.mm.network.ai()');
        return com_tencent_mm_network_ai_clz_init_vvlo.call(this);
    };
    var com_tencent_mm_network_aj_clz = Java.use('com.tencent.mm.network.aj');
    var com_tencent_mm_network_aj_clz_init_c6tk = com_tencent_mm_network_aj_clz.$init.overload();
    com_tencent_mm_network_aj_clz_init_c6tk.implementation = function() {
        printStacks('public com.tencent.mm.network.aj()');
        return com_tencent_mm_network_aj_clz_init_c6tk.call(this);
    };
    var com_tencent_mm_network_a_b_a_clz = Java.use('com.tencent.mm.network.a.b$a');
    var com_tencent_mm_network_a_b_a_clz_init_cxiu = com_tencent_mm_network_a_b_a_clz.$init.overload();
    com_tencent_mm_network_a_b_a_clz_init_cxiu.implementation = function() {
        printStacks('public com.tencent.mm.network.a.b$a()');
        return com_tencent_mm_network_a_b_a_clz_init_cxiu.call(this);
    };
    var com_tencent_mm_network_af_1_clz = Java.use('com.tencent.mm.network.af$1');
    var com_tencent_mm_network_af_1_clz_init_2frm = com_tencent_mm_network_af_1_clz.$init.overload('com.tencent.mm.network.af');
    com_tencent_mm_network_af_1_clz_init_2frm.implementation = function(v0) {
        printStacks('com.tencent.mm.network.af$1(com.tencent.mm.network.af)');
        return com_tencent_mm_network_af_1_clz_init_2frm.call(this, v0);
    };
    var com_tencent_mm_network_aa_1_clz = Java.use('com.tencent.mm.network.aa$1');
    var com_tencent_mm_network_aa_1_clz_init_43w2 = com_tencent_mm_network_aa_1_clz.$init.overload('com.tencent.mm.network.aa', 'boolean', 'long', 'java.lang.String', 'boolean');
    com_tencent_mm_network_aa_1_clz_init_43w2.implementation = function(v0, v1, v2, v3, v4) {
        printStacks('com.tencent.mm.network.aa$1(com.tencent.mm.network.aa,boolean,long,java.lang.String,boolean)');
        return com_tencent_mm_network_aa_1_clz_init_43w2.call(this, v0, v1, v2, v3, v4);
    };
    var com_tencent_mm_network_a_b_a_a_clz = Java.use('com.tencent.mm.network.a.b$a$a');
    var com_tencent_mm_network_a_b_a_a_clz_init_lomk = com_tencent_mm_network_a_b_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_a_b_a_a_clz_init_lomk.implementation = function(v0) {
        printStacks('public com.tencent.mm.network.a.b$a$a(android.os.IBinder)');
        return com_tencent_mm_network_a_b_a_a_clz_init_lomk.call(this, v0);
    };
    var com_tencent_mars_cdn_CronetLogic_DefaultHttpTaskParams_clz = Java.use('com.tencent.mars.cdn.CronetLogic$DefaultHttpTaskParams');
    var com_tencent_mars_cdn_CronetLogic_DefaultHttpTaskParams_clz_init_350s = com_tencent_mars_cdn_CronetLogic_DefaultHttpTaskParams_clz.$init.overload();
    com_tencent_mars_cdn_CronetLogic_DefaultHttpTaskParams_clz_init_350s.implementation = function() {
        printStacks('public com.tencent.mars.cdn.CronetLogic$DefaultHttpTaskParams()');
        return com_tencent_mars_cdn_CronetLogic_DefaultHttpTaskParams_clz_init_350s.call(this);
    };
    var com_tencent_mars_cdn_CronetLogic_QuicHostMap_clz = Java.use('com.tencent.mars.cdn.CronetLogic$QuicHostMap');
    var com_tencent_mars_cdn_CronetLogic_QuicHostMap_clz_init_5y6k = com_tencent_mars_cdn_CronetLogic_QuicHostMap_clz.$init.overload();
    com_tencent_mars_cdn_CronetLogic_QuicHostMap_clz_init_5y6k.implementation = function() {
        printStacks('public com.tencent.mars.cdn.CronetLogic$QuicHostMap()');
        return com_tencent_mars_cdn_CronetLogic_QuicHostMap_clz_init_5y6k.call(this);
    };
    var com_tencent_mm_network_l_a_clz = Java.use('com.tencent.mm.network.l$a');
    var com_tencent_mm_network_l_a_clz_init_f244 = com_tencent_mm_network_l_a_clz.$init.overload();
    com_tencent_mm_network_l_a_clz_init_f244.implementation = function() {
        printStacks('public com.tencent.mm.network.l$a()');
        return com_tencent_mm_network_l_a_clz_init_f244.call(this);
    };
    var com_tencent_mars_cdn_CronetLogic_CronetTaskResult_clz = Java.use('com.tencent.mars.cdn.CronetLogic$CronetTaskResult');
    var com_tencent_mars_cdn_CronetLogic_CronetTaskResult_clz_init_n6rn = com_tencent_mars_cdn_CronetLogic_CronetTaskResult_clz.$init.overload();
    com_tencent_mars_cdn_CronetLogic_CronetTaskResult_clz_init_n6rn.implementation = function() {
        printStacks('public com.tencent.mars.cdn.CronetLogic$CronetTaskResult()');
        return com_tencent_mars_cdn_CronetLogic_CronetTaskResult_clz_init_n6rn.call(this);
    };
    var com_tencent_mm_network_g_a_clz = Java.use('com.tencent.mm.network.g$a');
    var com_tencent_mm_network_g_a_clz_init_v88s = com_tencent_mm_network_g_a_clz.$init.overload();
    com_tencent_mm_network_g_a_clz_init_v88s.implementation = function() {
        printStacks('public com.tencent.mm.network.g$a()');
        return com_tencent_mm_network_g_a_clz_init_v88s.call(this);
    };
});