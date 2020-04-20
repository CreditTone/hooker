//com.tencent.mm.plugin.finder.search.e:?
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

function toJSONString(obj) {
	var wejsonClz = Java.use('com.tencent.youtu.ytcommon.tools.wejson.WeJson');
	var wejson = wejsonClz.$new();
	var toJsonMethod = wejsonClz.toJson.overload('java.lang.Object');
	return toJsonMethod.call(wejson, obj);
};

Java.perform(function() {
    var com_tencent_mm_plugin_finder_search_e_clz = Java.use('com.tencent.mm.plugin.finder.search.e');
    var com_tencent_mm_plugin_finder_search_e_clz_method_jZ_iv24 = com_tencent_mm_plugin_finder_search_e_clz.jZ.overload('boolean');
    com_tencent_mm_plugin_finder_search_e_clz_method_jZ_iv24.implementation = function(v0) {
        //printStacks('private final void com.tencent.mm.plugin.finder.search.e.jZ(boolean)');
        com_tencent_mm_plugin_finder_search_e_clz_method_jZ_iv24.call(this, v0);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_cdO_928u = com_tencent_mm_plugin_finder_search_e_clz.cdO.overload();
    com_tencent_mm_plugin_finder_search_e_clz_method_cdO_928u.implementation = function() {
        //printStacks('public final boolean com.tencent.mm.plugin.finder.search.e.cdO()');
        return com_tencent_mm_plugin_finder_search_e_clz_method_cdO_928u.call(this);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_UZ_nl35 = com_tencent_mm_plugin_finder_search_e_clz.UZ.overload('java.lang.String');
    com_tencent_mm_plugin_finder_search_e_clz_method_UZ_nl35.implementation = function(v0) {
    	log(v0);
        printStacks('public final void com.tencent.mm.plugin.finder.search.e.UZ(java.lang.String)');
        com_tencent_mm_plugin_finder_search_e_clz_method_UZ_nl35.call(this, v0);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_cdM_3cgf = com_tencent_mm_plugin_finder_search_e_clz.cdM.overload();
    com_tencent_mm_plugin_finder_search_e_clz_method_cdM_3cgf.implementation = function() {
        //printStacks('public final java.util.List com.tencent.mm.plugin.finder.search.e.cdM()');
        return com_tencent_mm_plugin_finder_search_e_clz_method_cdM_3cgf.call(this);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_a_tecp = com_tencent_mm_plugin_finder_search_e_clz.a.overload('com.tencent.mm.protocal.protobuf.ajj', 'int');
    com_tencent_mm_plugin_finder_search_e_clz_method_a_tecp.implementation = function(v0, v1) {
        //printStacks('public final void com.tencent.mm.plugin.finder.search.e.a(com.tencent.mm.protocal.protobuf.ajj,int)');
        com_tencent_mm_plugin_finder_search_e_clz_method_a_tecp.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_caS_qmgs = com_tencent_mm_plugin_finder_search_e_clz.caS.overload();
    com_tencent_mm_plugin_finder_search_e_clz_method_caS_qmgs.implementation = function() {
        //printStacks('public final java.util.List com.tencent.mm.plugin.finder.search.e.caS()');
        return com_tencent_mm_plugin_finder_search_e_clz_method_caS_qmgs.call(this);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_a_dang = com_tencent_mm_plugin_finder_search_e_clz.a.overload('com.tencent.mm.plugin.finder.search.f$b');
    com_tencent_mm_plugin_finder_search_e_clz_method_a_dang.implementation = function(v0) {
        //printStacks('public final void com.tencent.mm.plugin.finder.search.e.a(com.tencent.mm.plugin.finder.search.f$b)');
        com_tencent_mm_plugin_finder_search_e_clz_method_a_dang.call(this, v0);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_onSceneEnd_b4zj = com_tencent_mm_plugin_finder_search_e_clz.onSceneEnd.overload('int', 'int', 'java.lang.String', 'com.tencent.mm.ak.m');
    com_tencent_mm_plugin_finder_search_e_clz_method_onSceneEnd_b4zj.implementation = function(v0, v1, v2, v3) {
    	log(this.pFM.value.ppJ.value.pbk.value.get(0).id);
        printStacks('public final void com.tencent.mm.plugin.finder.search.e.onSceneEnd(int,int,java.lang.String,com.tencent.mm.ak.m)');
        com_tencent_mm_plugin_finder_search_e_clz_method_onSceneEnd_b4zj.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_cV_g2u4 = com_tencent_mm_plugin_finder_search_e_clz.cV.overload('java.lang.Object');
    com_tencent_mm_plugin_finder_search_e_clz_method_cV_g2u4.implementation = function(v0) {
        //printStacks('public final void com.tencent.mm.plugin.finder.search.e.cV(java.lang.Object)');
        com_tencent_mm_plugin_finder_search_e_clz_method_cV_g2u4.call(this, v0);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_cdN_ru2f = com_tencent_mm_plugin_finder_search_e_clz.cdN.overload();
    com_tencent_mm_plugin_finder_search_e_clz_method_cdN_ru2f.implementation = function() {
        //printStacks('public final void com.tencent.mm.plugin.finder.search.e.cdN()');
        com_tencent_mm_plugin_finder_search_e_clz_method_cdN_ru2f.call(this);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_k_6ssd = com_tencent_mm_plugin_finder_search_e_clz.k.overload('com.tencent.mm.plugin.finder.model.BaseFinderFeed');
    com_tencent_mm_plugin_finder_search_e_clz_method_k_6ssd.implementation = function(v0) {
        //printStacks('public final void com.tencent.mm.plugin.finder.search.e.k(com.tencent.mm.plugin.finder.model.BaseFinderFeed)');
        com_tencent_mm_plugin_finder_search_e_clz_method_k_6ssd.call(this, v0);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_onDetach_jb9k = com_tencent_mm_plugin_finder_search_e_clz.onDetach.overload();
    com_tencent_mm_plugin_finder_search_e_clz_method_onDetach_jb9k.implementation = function() {
        //printStacks('public final void com.tencent.mm.plugin.finder.search.e.onDetach()');
        com_tencent_mm_plugin_finder_search_e_clz_method_onDetach_jb9k.call(this);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_ab_f37f = com_tencent_mm_plugin_finder_search_e_clz.ab.overload('java.lang.String', 'int', 'int');
    com_tencent_mm_plugin_finder_search_e_clz_method_ab_f37f.implementation = function(v0, v1, v2) {
        //printStacks('public final void com.tencent.mm.plugin.finder.search.e.ab(java.lang.String,int,int)');
        com_tencent_mm_plugin_finder_search_e_clz_method_ab_f37f.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_G_a4zb = com_tencent_mm_plugin_finder_search_e_clz.G.overload('long', 'int');
    com_tencent_mm_plugin_finder_search_e_clz_method_G_a4zb.implementation = function(v0, v1) {
        //printStacks('public final void com.tencent.mm.plugin.finder.search.e.G(long,int)');
        com_tencent_mm_plugin_finder_search_e_clz_method_G_a4zb.call(this, v0, v1);
    };
});