//java.lang.String:_
function printStacks(methodName) {
    //var stackInfo = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new());
    console.log(methodName);
    //console.log(stackInfo.substring(20));
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
    var java_lang_String_clz = Java.use('java.lang.String');
    var java_lang_String_clz_init_290c = java_lang_String_clz.$init.overload('int', 'int', '[C');
    java_lang_String_clz_init_290c.implementation = function(v0, v1, v2) {
        var str = java_lang_String_clz_init_290c.call(this, v0, v1, v2);

        printStacks('java.lang.String(int,int,char[])');
        return str;
    };

    var java_lang_String_clz_init_08zd = java_lang_String_clz.$init.overload('[B', 'java.lang.String');
    java_lang_String_clz_init_08zd.implementation = function(v0, v1) {
        printStacks('public java.lang.String(byte[],java.lang.String) throws java.io.UnsupportedEncodingException');
        return java_lang_String_clz_init_08zd.call(this, v0, v1);
    };
    var java_lang_String_clz_init_a2ok = java_lang_String_clz.$init.overload('java.lang.StringBuffer');
    java_lang_String_clz_init_a2ok.implementation = function(v0) {
        printStacks('public java.lang.String(java.lang.StringBuffer)');
        return java_lang_String_clz_init_a2ok.call(this, v0);
    };
    var java_lang_String_clz_init_drnt = java_lang_String_clz.$init.overload('[C');
    java_lang_String_clz_init_drnt.implementation = function(v0) {
        printStacks('public java.lang.String(char[])');
        return java_lang_String_clz_init_drnt.call(this, v0);
    };
    var java_lang_String_clz_init_ksf3 = java_lang_String_clz.$init.overload();
    java_lang_String_clz_init_ksf3.implementation = function() {
        printStacks('public java.lang.String()');
        return java_lang_String_clz_init_ksf3.call(this);
    };
    var java_lang_String_clz_init_yjhu = java_lang_String_clz.$init.overload('java.lang.String');
    java_lang_String_clz_init_yjhu.implementation = function(v0) {
        printStacks('public java.lang.String(java.lang.String)');
        return java_lang_String_clz_init_yjhu.call(this, v0);
    };
    var java_lang_String_clz_init_ahb5 = java_lang_String_clz.$init.overload('[B', 'int');
    java_lang_String_clz_init_ahb5.implementation = function(v0, v1) {
        printStacks('public java.lang.String(byte[],int)');
        return java_lang_String_clz_init_ahb5.call(this, v0, v1);
    };
    var java_lang_String_clz_init_a8vt = java_lang_String_clz.$init.overload('[B', 'int', 'int', 'int');
    java_lang_String_clz_init_a8vt.implementation = function(v0, v1, v2, v3) {
        printStacks('public java.lang.String(byte[],int,int,int)');
        return java_lang_String_clz_init_a8vt.call(this, v0, v1, v2, v3);
    };
    var java_lang_String_clz_init_df3c = java_lang_String_clz.$init.overload('java.lang.StringBuilder');
    java_lang_String_clz_init_df3c.implementation = function(v0) {
        printStacks('public java.lang.String(java.lang.StringBuilder)');
        return java_lang_String_clz_init_df3c.call(this, v0);
    };
    var java_lang_String_clz_init_7h95 = java_lang_String_clz.$init.overload('[B');
    java_lang_String_clz_init_7h95.implementation = function(v0) {
        printStacks('public java.lang.String(byte[])');
        return java_lang_String_clz_init_7h95.call(this, v0);
    };
    var java_lang_String_clz_init_mn2o = java_lang_String_clz.$init.overload('[I', 'int', 'int');
    java_lang_String_clz_init_mn2o.implementation = function(v0, v1, v2) {
        printStacks('public java.lang.String(int[],int,int)');
        return java_lang_String_clz_init_mn2o.call(this, v0, v1, v2);
    };
    var java_lang_String_clz_init_se5f = java_lang_String_clz.$init.overload('[C', 'int', 'int');
    java_lang_String_clz_init_se5f.implementation = function(v0, v1, v2) {
        printStacks('public java.lang.String(char[],int,int)');
        return java_lang_String_clz_init_se5f.call(this, v0, v1, v2);
    };
    var java_lang_String_clz_init_1fva = java_lang_String_clz.$init.overload('[B', 'int', 'int', 'java.nio.charset.Charset');
    java_lang_String_clz_init_1fva.implementation = function(v0, v1, v2, v3) {
        printStacks('public java.lang.String(byte[],int,int,java.nio.charset.Charset)');
        return java_lang_String_clz_init_1fva.call(this, v0, v1, v2, v3);
    };
});