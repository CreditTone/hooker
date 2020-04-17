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
    var com_tencent_mm_network_l_a_a_clz = Java.use('com.tencent.mm.network.l$a$a');
    var com_tencent_mm_network_l_a_a_clz_method_asBinder_6wnj = com_tencent_mm_network_l_a_a_clz.asBinder.overload();
    com_tencent_mm_network_l_a_a_clz_method_asBinder_6wnj.implementation = function() {
        printStacks('public final android.os.IBinder com.tencent.mm.network.l$a$a.asBinder()');
        return com_tencent_mm_network_l_a_a_clz_method_asBinder_6wnj.call(this);
    };
    var com_tencent_mm_network_l_a_a_clz_method_a_vv82 = com_tencent_mm_network_l_a_a_clz.a.overload('int', 'int', 'int', 'java.lang.String', 'com.tencent.mm.network.r', '[B');
    com_tencent_mm_network_l_a_a_clz_method_a_vv82.implementation = function(v0, v1, v2, v3, v4, v5) {
        printStacks('public final void com.tencent.mm.network.l$a$a.a(int,int,int,java.lang.String,com.tencent.mm.network.r,byte[])');
        com_tencent_mm_network_l_a_a_clz_method_a_vv82.call(this, v0, v1, v2, v3, v4, v5);
    };
    var com_tencent_mm_network_l_a_a_clz_init_96di = com_tencent_mm_network_l_a_a_clz.$init.overload('android.os.IBinder');
    com_tencent_mm_network_l_a_a_clz_init_96di.implementation = function(v0) {
        printStacks('com.tencent.mm.network.l$a$a(android.os.IBinder)');
        return com_tencent_mm_network_l_a_a_clz_init_96di.call(this, v0);
    };
    var com_tencent_mm_network_l_a_clz = Java.use('com.tencent.mm.network.l$a');
    var com_tencent_mm_network_l_a_clz_method_asBinder_533e = com_tencent_mm_network_l_a_clz.asBinder.overload();
    com_tencent_mm_network_l_a_clz_method_asBinder_533e.implementation = function() {
        printStacks('public android.os.IBinder com.tencent.mm.network.l$a.asBinder()');
        return com_tencent_mm_network_l_a_clz_method_asBinder_533e.call(this);
    };
    var com_tencent_mm_network_l_a_clz_method_onTransact_wi3g = com_tencent_mm_network_l_a_clz.onTransact.overload('int', 'android.os.Parcel', 'android.os.Parcel', 'int');
    com_tencent_mm_network_l_a_clz_method_onTransact_wi3g.implementation = function(v0, v1, v2, v3) {
        printStacks('public boolean com.tencent.mm.network.l$a.onTransact(int,android.os.Parcel,android.os.Parcel,int)');
        return com_tencent_mm_network_l_a_clz_method_onTransact_wi3g.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_network_l_a_clz_init_2s3h = com_tencent_mm_network_l_a_clz.$init.overload();
    com_tencent_mm_network_l_a_clz_init_2s3h.implementation = function() {
        printStacks('public com.tencent.mm.network.l$a()');
        return com_tencent_mm_network_l_a_clz_init_2s3h.call(this);
    };
});