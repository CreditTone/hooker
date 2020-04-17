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
    var com_tencent_mm_network_r_a_a_clz = Java.use('com.tencent.mm.network.r$a$a');
    var com_tencent_mm_network_r_a_a_clz_method_getOptions_q5jv = com_tencent_mm_network_r_a_a_clz.getOptions.overload();
    com_tencent_mm_network_r_a_a_clz_method_getOptions_q5jv.implementation = function() {
        printStacks('public final int com.tencent.mm.network.r$a$a.getOptions()');
        return com_tencent_mm_network_r_a_a_clz_method_getOptions_q5jv.call(this);
    };
    var com_tencent_mm_network_r_a_a_clz_method_getTimeOut_awy7 = com_tencent_mm_network_r_a_a_clz.getTimeOut.overload();
    com_tencent_mm_network_r_a_a_clz_method_getTimeOut_awy7.implementation = function() {
        printStacks('public final int com.tencent.mm.network.r$a$a.getTimeOut()');
        return com_tencent_mm_network_r_a_a_clz_method_getTimeOut_awy7.call(this);
    };
    var com_tencent_mm_network_r_a_a_clz_method_isSingleSession_8wfp = com_tencent_mm_network_r_a_a_clz.isSingleSession.overload();
    com_tencent_mm_network_r_a_a_clz_method_isSingleSession_8wfp.implementation = function() {
        printStacks('public final boolean com.tencent.mm.network.r$a$a.isSingleSession()');
        return com_tencent_mm_network_r_a_a_clz_method_isSingleSession_8wfp.call(this);
    };
    var com_tencent_mm_network_r_a_a_clz_method_auA_3obo = com_tencent_mm_network_r_a_a_clz.auA.overload();
    com_tencent_mm_network_r_a_a_clz_method_auA_3obo.implementation = function() {
        printStacks('public final com.tencent.mm.protocal.i com.tencent.mm.network.r$a$a.auA()');
        return com_tencent_mm_network_r_a_a_clz_method_auA_3obo.call(this);
    };
    var com_tencent_mm_network_r_a_a_clz_method_a_mkbe = com_tencent_mm_network_r_a_a_clz.a.overload('com.tencent.mm.network.j', 'int', 'int');
    com_tencent_mm_network_r_a_a_clz_method_a_mkbe.implementation = function(v0, v1, v2) {
        printStacks('public final void com.tencent.mm.network.r$a$a.a(com.tencent.mm.network.j,int,int)');
        com_tencent_mm_network_r_a_a_clz_method_a_mkbe.call(this, v0, v1, v2);
    };
    var com_tencent_mm_network_r_a_a_clz_method_auz_otbf = com_tencent_mm_network_r_a_a_clz.auz.overload();
    com_tencent_mm_network_r_a_a_clz_method_auz_otbf.implementation = function() {
        printStacks('public final com.tencent.mm.protocal.h com.tencent.mm.network.r$a$a.auz()');
        return com_tencent_mm_network_r_a_a_clz_method_auz_otbf.call(this);
    };
    var com_tencent_mm_network_r_a_a_clz_method_auB_8g8h = com_tencent_mm_network_r_a_a_clz.auB.overload();
    com_tencent_mm_network_r_a_a_clz_method_auB_8g8h.implementation = function() {
        printStacks('public final int com.tencent.mm.network.r$a$a.auB()');
        return com_tencent_mm_network_r_a_a_clz_method_auB_8g8h.call(this);
    };
    var com_tencent_mm_network_r_a_a_clz_method_a_ag1s = com_tencent_mm_network_r_a_a_clz.a.overload('com.tencent.mm.network.d', 'com.tencent.mm.network.j', 'int', 'int');
    com_tencent_mm_network_r_a_a_clz_method_a_ag1s.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.network.r$a$a.a(com.tencent.mm.network.d,com.tencent.mm.network.j,int,int)');
        com_tencent_mm_network_r_a_a_clz_method_a_ag1s.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_r_a_a_clz_method_asBinder_xh2s = com_tencent_mm_network_r_a_a_clz.asBinder.overload();
    com_tencent_mm_network_r_a_a_clz_method_asBinder_xh2s.implementation = function() {
        printStacks('public final android.os.IBinder com.tencent.mm.network.r$a$a.asBinder()');
        return com_tencent_mm_network_r_a_a_clz_method_asBinder_xh2s.call(this);
    };
    var com_tencent_mm_network_r_a_a_clz_method_getUri_92ts = com_tencent_mm_network_r_a_a_clz.getUri.overload();
    com_tencent_mm_network_r_a_a_clz_method_getUri_92ts.implementation = function() {
        printStacks('public final java.lang.String com.tencent.mm.network.r$a$a.getUri()');
        return com_tencent_mm_network_r_a_a_clz_method_getUri_92ts.call(this);
    };
    var com_tencent_mm_network_r_a_a_clz_method_getMMReqRespHash_sjto = com_tencent_mm_network_r_a_a_clz.getMMReqRespHash.overload();
    com_tencent_mm_network_r_a_a_clz_method_getMMReqRespHash_sjto.implementation = function() {
        printStacks('public final int com.tencent.mm.network.r$a$a.getMMReqRespHash()');
        return com_tencent_mm_network_r_a_a_clz_method_getMMReqRespHash_sjto.call(this);
    };
    var com_tencent_mm_network_r_a_a_clz_method_setConnectionInfo_em86 = com_tencent_mm_network_r_a_a_clz.setConnectionInfo.overload('java.lang.String');
    com_tencent_mm_network_r_a_a_clz_method_setConnectionInfo_em86.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.network.r$a$a.setConnectionInfo(java.lang.String)');
        com_tencent_mm_network_r_a_a_clz_method_setConnectionInfo_em86.call(this, v0);
    };
    var com_tencent_mm_network_r_a_a_clz_method_a_t8o6 = com_tencent_mm_network_r_a_a_clz.a.overload('com.tencent.mm.network.j', 'int', 'int', 'java.lang.String');
    com_tencent_mm_network_r_a_a_clz_method_a_t8o6.implementation = function(v0, v1, v2, v3) {
        printStacks('public final void com.tencent.mm.network.r$a$a.a(com.tencent.mm.network.j,int,int,java.lang.String)');
        com_tencent_mm_network_r_a_a_clz_method_a_t8o6.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_r_a_a_clz_method_getIsUserCmd_r7wp = com_tencent_mm_network_r_a_a_clz.getIsUserCmd.overload();
    com_tencent_mm_network_r_a_a_clz_method_getIsUserCmd_r7wp.implementation = function() {
        printStacks('public final boolean com.tencent.mm.network.r$a$a.getIsUserCmd()');
        return com_tencent_mm_network_r_a_a_clz_method_getIsUserCmd_r7wp.call(this);
    };
    var com_tencent_mm_network_r_a_a_clz_method_getType_68pi = com_tencent_mm_network_r_a_a_clz.getType.overload();
    com_tencent_mm_network_r_a_a_clz_method_getType_68pi.implementation = function() {
        printStacks('public final int com.tencent.mm.network.r$a$a.getType()');
        return com_tencent_mm_network_r_a_a_clz_method_getType_68pi.call(this);
    };
    var com_tencent_mm_network_r_a_a_clz_init_d9vk = com_tencent_mm_network_r_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_r_a_a_clz_init_d9vk.implementation = function(v0) {
        printStacks('com.tencent.mm.network.r$a$a(android.os.IBinder)');
        return com_tencent_mm_network_r_a_a_clz_init_d9vk.call(this, v0);
    };
    var com_tencent_mm_network_r_a_clz = Java.use('com.tencent.mm.network.r$a');
    var com_tencent_mm_network_r_a_clz_method_asBinder_ufut = com_tencent_mm_network_r_a_clz.asBinder.overload();
    com_tencent_mm_network_r_a_clz_method_asBinder_ufut.implementation = function() {
        printStacks('public android.os.IBinder com.tencent.mm.network.r$a.asBinder()');
        return com_tencent_mm_network_r_a_clz_method_asBinder_ufut.call(this);
    };
    var com_tencent_mm_network_r_a_clz_method_onTransact_b8cs = com_tencent_mm_network_r_a_clz.onTransact.overload('int', 'android.os.Parcel', 'android.os.Parcel', 'int');
    com_tencent_mm_network_r_a_clz_method_onTransact_b8cs.implementation = function(v0, v1, v2, v3) {
        printStacks('public boolean com.tencent.mm.network.r$a.onTransact(int,android.os.Parcel,android.os.Parcel,int)');
        return com_tencent_mm_network_r_a_clz_method_onTransact_b8cs.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_r_a_clz_method_p_mzyg = com_tencent_mm_network_r_a_clz.p.overload('android.os.IBinder');
    com_tencent_mm_network_r_a_clz_method_p_mzyg.implementation = function(v0) {
        printStacks('public static com.tencent.mm.network.r com.tencent.mm.network.r$a.p(android.os.IBinder)');
        return com_tencent_mm_network_r_a_clz_method_p_mzyg.call(com_tencent_mm_network_r_a_clz, v0);
    };
    var com_tencent_mm_network_r_a_clz_init_3gqx = com_tencent_mm_network_r_a_clz.$init.overload();
    com_tencent_mm_network_r_a_clz_init_3gqx.implementation = function() {
        printStacks('public com.tencent.mm.network.r$a()');
        return com_tencent_mm_network_r_a_clz_init_3gqx.call(this);
    };
});