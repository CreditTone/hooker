//crack by com.tencent.mm 7.0.12
//com.tencent.mm.plugin.finder.search.FinderFeedSearchUI
function loadDexfile(dexfile) {
    Java.perform(function() {
          Java.openClassFile(dexfile).load();
          console.log("load " + dexfile);
    });
};

function checkLoadDex(className, dexfile) {
    Java.perform(function() {
        if (!classExists(className)) {
            Java.openClassFile(dexfile).load();
            console.log("load " + dexfile);
        }
    });
};

function classExists(className) {
    var exists = false;
    try {
        var clz = Java.use(className);
        exists = true;
    } catch(err) {
        //console.log(err);
    }
    return exists;
};

function getClassName(obj) {
    if (obj.getClass) {
        return obj.getClass().getName();
    }
    var javaObject = Java.use("java.lang.Object");
    return Java.cast(obj, javaObject).getClass().getName();
}

//str1是否包含str2，str2可用正则表示
function contains(str1, str2) {
    var reg = RegExp(eval("/"+str2+"/"));
    if(str1 && str1.match && str1.match(reg)){
        return true;
    }else{
        return false;
    }
};

//创建ArrayList对象用这个方法就好了
function newArrayList() {
    var ArrayListClz = Java.use('java.util.ArrayList');
    return ArrayListClz.$new();
}

//创建HashSet对象用这个方法就好了
function newHashSet() {
    var HashSetClz = Java.use('java.util.HashSet');
    return HashSetClz.$new();
}

//创建HashMap对象用这个方法就好了
function newHashMap() {
    var HashMapClz = Java.use('java.util.HashMap');
    return HashMapClz.$new();
}

function newMethodBeat(text, executor) {
    var threadClz = Java.use("java.lang.Thread");
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var currentThread = threadClz.currentThread();
    var beat = new Object();
    beat.invokeId = Math.random().toString(36).slice( - 8);
    beat.executor = executor;
    beat.threadId = currentThread.getId();
    beat.threadName = currentThread.getName();
    beat.text = text;
    beat.startTime = new Date().getTime();
    beat.stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new()).substring(20);
    return beat;
};

function printBeat(beat) {
    var str = ("------------startFlag:" + beat.invokeId + ",objectHash:"+beat.executor+",thread(id:" + beat.threadId +",name:" + beat.threadName + "),timestamp:" + beat.startTime+"---------------\n");
    str += beat.text + "\n";
    str += beat.stackInfo;
    str += ("------------endFlag:" + beat.invokeId + ",usedtime:" + (new Date().getTime() - beat.startTime) +"---------------\n");
	console.log(str);
};

function log(str) {
    console.log(str);
};

//虽然我们习惯用fastjson一行将对象转成json字符串，但是Android Library里面自带了一个gson可以做到 只是sdk没有暴露出来，很多人不知道。在frida中所有代码都是透明的，你随便调......
function toJson(javaObject) {
    var gsonClz = Java.use("com.google.gson.Gson");
    var toJsonMethod = gsonClz.toJson.overload("java.lang.Object");
    return toJsonMethod.call(gsonClz.$new(),javaObject);
};

function getBaseContext() {
    var currentApplication = Java.use('android.app.ActivityThread').currentApplication();
    var context = currentApplication.getApplicationContext();
    return context; //Java.scheduleOnMainThread(fn):
};

function sleep(time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while(new Date().getTime() < startTime) {}
};


function loadXinitDexfile(dexfile) {
    loadDexfile('/data/user/0/com.tencent.mm/xinit/'+dexfile);
};

function loadXRadarDexfile() {
    loadDexfile('/data/user/0/com.tencent.mm/radar.dex');
};

function fastTojson(javaObject) {
    var JSONClz = Java.use("gz.com.alibaba.fastjson.JSON");
    return JSONClz.toJSONString(javaObject);
};


//com.tencent.mm.plugin.finder.search.FinderFeedSearchUI
Java.perform(function() {
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz = Java.use('com.tencent.mm.plugin.finder.search.FinderFeedSearchUI');
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_cbr_b0rm = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.cbr.overload();
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_cbr_b0rm.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final com.tencent.mm.plugin.finder.report.c com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.cbr()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_cbr_b0rm.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_cbx_oj3e = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.cbx.overload();
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_cbx_oj3e.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final android.support.v7.widget.RecyclerView$n com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.cbx()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_cbx_oj3e.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_cdK_pf2o = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.cdK.overload();
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_cdK_pf2o.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.cdK()';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_cdK_pf2o.call(this);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_cdL_qs4l = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.cdL.overload();
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_cdL_qs4l.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final com.tencent.mm.plugin.finder.report.FinderStatsReporter com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.cdL()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_cdL_qs4l.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_onBackPressed_77fp = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.onBackPressed.overload();
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_onBackPressed_77fp.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.onBackPressed()';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_onBackPressed_77fp.call(this);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_a_0uus = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.a.overload('com.tencent.mm.plugin.finder.search.FinderFeedSearchUI', 'java.lang.String');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_a_0uus.implementation = function(v0, v1) {
        log(v1);
        var executor = 'Class';
        var beatText = 'public static final void com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.a(com.tencent.mm.plugin.finder.search.FinderFeedSearchUI,java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_a_0uus.call(com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz, v0, v1);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_a_oj04 = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.a.overload('com.tencent.mm.plugin.finder.search.FinderFeedSearchUI', 'com.tencent.mm.plugin.finder.cgi.aa');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_a_oj04.implementation = function(v0, v1) {
        var executor = 'Class';
        var beatText = 'public static final void com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.a(com.tencent.mm.plugin.finder.search.FinderFeedSearchUI,com.tencent.mm.plugin.finder.cgi.aa)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_a_oj04.call(com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz, v0, v1);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_a_fu5p = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.a.overload('com.tencent.mm.plugin.finder.model.BaseFinderFeed', 'com.tencent.mm.ui.widget.a.e');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_a_fu5p.implementation = function(v0, v1) {
        var executor = this.hashCode();
        var beatText = 'public final com.tencent.mm.ui.base.n$c com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.a(com.tencent.mm.plugin.finder.model.BaseFinderFeed,com.tencent.mm.ui.widget.a.e)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_a_fu5p.call(this, v0, v1);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_UX_e1gp = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.UX.overload('java.lang.String');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_UX_e1gp.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'private final void com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.UX(java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_UX_e1gp.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_a_adyj = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.a.overload('com.tencent.mm.plugin.finder.storage.FinderItem', 'com.tencent.mm.protocal.protobuf.FinderCommentInfo');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_a_adyj.implementation = function(v0, v1) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.a(com.tencent.mm.plugin.finder.storage.FinderItem,com.tencent.mm.protocal.protobuf.FinderCommentInfo)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_a_adyj.call(this, v0, v1);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_bjl_7l33 = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.bjl.overload();
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_bjl_7l33.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final boolean com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.bjl()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_bjl_7l33.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_onDestroy_hfb8 = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.onDestroy.overload();
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_onDestroy_hfb8.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.onDestroy()';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_onDestroy_hfb8.call(this);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_c_2e7b = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.c.overload('com.tencent.mm.protocal.protobuf.FinderObject');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_c_2e7b.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'private final void com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.c(com.tencent.mm.protocal.protobuf.FinderObject)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_c_2e7b.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_getActivity_6hgr = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.getActivity.overload();
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_getActivity_6hgr.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final com.tencent.mm.ui.MMActivity com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.getActivity()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_getActivity_6hgr.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_getLayoutId_1yfh = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.getLayoutId.overload();
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_getLayoutId_1yfh.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final int com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.getLayoutId()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_getLayoutId_1yfh.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_onClickCancelBtn_n5qj = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.onClickCancelBtn.overload('android.view.View');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_onClickCancelBtn_n5qj.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.onClickCancelBtn(android.view.View)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_onClickCancelBtn_n5qj.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_jZ_8wj8 = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.jZ.overload('boolean');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_jZ_8wj8.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'final void com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.jZ(boolean)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_jZ_8wj8.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_jY_d98c = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.jY.overload('boolean');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_jY_d98c.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.jY(boolean)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_jY_d98c.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_onSceneEnd_y6e7 = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.onSceneEnd.overload('int', 'int', 'java.lang.String', 'com.tencent.mm.ak.m');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_onSceneEnd_y6e7.implementation = function(v0, v1, v2, v3) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.onSceneEnd(int,int,java.lang.String,com.tencent.mm.ak.m)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_onSceneEnd_y6e7.call(this, v0, v1, v2, v3);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_a_f5cw = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.a.overload('com.tencent.mm.plugin.finder.model.BaseFinderFeed', 'boolean');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_a_f5cw.implementation = function(v0, v1) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.a(com.tencent.mm.plugin.finder.model.BaseFinderFeed,boolean)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_a_f5cw.call(this, v0, v1);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_b_2jgi = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.b.overload('com.tencent.mm.plugin.finder.search.FinderFeedSearchUI');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_b_2jgi.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final android.support.v7.widget.RecyclerView com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.b(com.tencent.mm.plugin.finder.search.FinderFeedSearchUI)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_b_2jgi.call(com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_a_f896 = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.a.overload('com.tencent.mm.plugin.finder.storage.FinderItem', 'boolean', 'int');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_a_f896.implementation = function(v0, v1, v2) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.a(com.tencent.mm.plugin.finder.storage.FinderItem,boolean,int)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_a_f896.call(this, v0, v1, v2);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_a_1uck = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.a.overload('com.tencent.mm.plugin.finder.search.FinderFeedSearchUI');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_a_1uck.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final java.util.ArrayList com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.a(com.tencent.mm.plugin.finder.search.FinderFeedSearchUI)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_a_1uck.call(com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_d_qq7s = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.d.overload('com.tencent.mm.plugin.finder.search.FinderFeedSearchUI');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_d_qq7s.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final java.lang.String com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.d(com.tencent.mm.plugin.finder.search.FinderFeedSearchUI)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_d_qq7s.call(com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_c_xrud = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.c.overload('com.tencent.mm.plugin.finder.search.FinderFeedSearchUI');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_c_xrud.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final com.tencent.mm.ui.search.a com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.c(com.tencent.mm.plugin.finder.search.FinderFeedSearchUI)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_c_xrud.call(com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_f_ssr4 = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.f.overload('com.tencent.mm.plugin.finder.search.FinderFeedSearchUI');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_f_ssr4.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final int com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.f(com.tencent.mm.plugin.finder.search.FinderFeedSearchUI)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_f_ssr4.call(com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_e_81wa = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.e.overload('com.tencent.mm.plugin.finder.search.FinderFeedSearchUI');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_e_81wa.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final java.lang.String com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.e(com.tencent.mm.plugin.finder.search.FinderFeedSearchUI)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_e_81wa.call(com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_h_e8ad = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.h.overload('com.tencent.mm.plugin.finder.search.FinderFeedSearchUI');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_h_e8ad.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final int com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.h(com.tencent.mm.plugin.finder.search.FinderFeedSearchUI)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_h_e8ad.call(com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_onClickBackBtn_95lf = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.onClickBackBtn.overload('android.view.View');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_onClickBackBtn_95lf.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.onClickBackBtn(android.view.View)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_onClickBackBtn_95lf.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_g_imma = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.g.overload('com.tencent.mm.plugin.finder.search.FinderFeedSearchUI');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_g_imma.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final com.tencent.mm.plugin.finder.cgi.aa com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.g(com.tencent.mm.plugin.finder.search.FinderFeedSearchUI)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_g_imma.call(com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_j_nfr9 = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.j.overload('com.tencent.mm.plugin.finder.search.FinderFeedSearchUI');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_j_nfr9.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final com.tencent.mm.bw.b com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.j(com.tencent.mm.plugin.finder.search.FinderFeedSearchUI)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_j_nfr9.call(com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_i_ramm = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.i.overload('com.tencent.mm.plugin.finder.search.FinderFeedSearchUI');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_i_ramm.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final java.lang.String com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.i(com.tencent.mm.plugin.finder.search.FinderFeedSearchUI)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_i_ramm.call(com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_l_w28p = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.l.overload('com.tencent.mm.plugin.finder.search.FinderFeedSearchUI');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_l_w28p.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final com.tencent.mm.plugin.finder.video.c com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.l(com.tencent.mm.plugin.finder.search.FinderFeedSearchUI)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_l_w28p.call(com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_k_ylfr = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.k.overload('com.tencent.mm.plugin.finder.search.FinderFeedSearchUI');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_k_ylfr.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final com.tencent.mm.view.RefreshLoadMoreLayout com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.k(com.tencent.mm.plugin.finder.search.FinderFeedSearchUI)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_k_ylfr.call(com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_n_p7gt = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.n.overload('com.tencent.mm.plugin.finder.search.FinderFeedSearchUI');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_n_p7gt.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final int com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.n(com.tencent.mm.plugin.finder.search.FinderFeedSearchUI)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_n_p7gt.call(com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_m_perp = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.m.overload('com.tencent.mm.plugin.finder.search.FinderFeedSearchUI');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_m_perp.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final int com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.m(com.tencent.mm.plugin.finder.search.FinderFeedSearchUI)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_m_perp.call(com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_p_eog5 = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.p.overload('com.tencent.mm.plugin.finder.search.FinderFeedSearchUI');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_p_eog5.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final int com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.p(com.tencent.mm.plugin.finder.search.FinderFeedSearchUI)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_p_eog5.call(com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_o_3bci = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.o.overload('com.tencent.mm.plugin.finder.search.FinderFeedSearchUI');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_o_3bci.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final int com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.o(com.tencent.mm.plugin.finder.search.FinderFeedSearchUI)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_o_3bci.call(com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_r_h9os = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.r.overload('com.tencent.mm.plugin.finder.search.FinderFeedSearchUI');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_r_h9os.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final int com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.r(com.tencent.mm.plugin.finder.search.FinderFeedSearchUI)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_r_h9os.call(com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_q_1m1m = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.q.overload('com.tencent.mm.plugin.finder.search.FinderFeedSearchUI');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_q_1m1m.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final int com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.q(com.tencent.mm.plugin.finder.search.FinderFeedSearchUI)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_q_1m1m.call(com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_t_3msg = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.t.overload('com.tencent.mm.plugin.finder.search.FinderFeedSearchUI');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_t_3msg.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final int com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.t(com.tencent.mm.plugin.finder.search.FinderFeedSearchUI)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_t_3msg.call(com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_s_t5la = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.s.overload('com.tencent.mm.plugin.finder.search.FinderFeedSearchUI');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_s_t5la.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final int com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.s(com.tencent.mm.plugin.finder.search.FinderFeedSearchUI)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_s_t5la.call(com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_u_i4hq = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.u.overload('com.tencent.mm.plugin.finder.search.FinderFeedSearchUI');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_u_i4hq.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final int com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.u(com.tencent.mm.plugin.finder.search.FinderFeedSearchUI)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_u_i4hq.call(com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_onClickClearTextBtn_hpoo = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.onClickClearTextBtn.overload('android.view.View');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_onClickClearTextBtn_hpoo.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.onClickClearTextBtn(android.view.View)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_onClickClearTextBtn_hpoo.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_getVideoCore_2igm = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.getVideoCore.overload();
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_getVideoCore_2igm.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final com.tencent.mm.plugin.finder.video.c com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.getVideoCore()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_getVideoCore_2igm.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_onWindowFocusChanged_n7mo = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.onWindowFocusChanged.overload('boolean');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_onWindowFocusChanged_n7mo.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public void com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.onWindowFocusChanged(boolean)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_onWindowFocusChanged_n7mo.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_d_m2ew = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.d.overload('com.tencent.mm.plugin.finder.model.BaseFinderFeed');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_d_m2ew.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final com.tencent.mm.ui.base.n$c com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.d(com.tencent.mm.plugin.finder.model.BaseFinderFeed)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_d_m2ew.call(this, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_e_axor = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.e.overload('com.tencent.mm.plugin.finder.model.BaseFinderFeed');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_e_axor.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final com.tencent.mm.ui.base.n$d com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.e(com.tencent.mm.plugin.finder.model.BaseFinderFeed)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_e_axor.call(this, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_j_us5j = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.j.overload('com.tencent.mm.plugin.finder.model.BaseFinderFeed');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_j_us5j.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final boolean com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.j(com.tencent.mm.plugin.finder.model.BaseFinderFeed)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_j_us5j.call(com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_onCreate_4rm6 = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.onCreate.overload('android.os.Bundle');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_onCreate_4rm6.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.onCreate(android.os.Bundle)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_onCreate_4rm6.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_a_5axk = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.a.overload('java.lang.String', 'java.lang.String', 'java.util.List', 'com.tencent.mm.ui.search.FTSEditTextView$b');
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_a_5axk.implementation = function(v0, v1, v2, v3) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.search.FinderFeedSearchUI.a(java.lang.String,java.lang.String,java.util.List,com.tencent.mm.ui.search.FTSEditTextView$b)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_method_a_5axk.call(this, v0, v1, v2, v3);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_init_kvyh = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz.$init.overload();
    com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_init_kvyh.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public com.tencent.mm.plugin.finder.search.FinderFeedSearchUI()';
        var beat = newMethodBeat(beatText, executor);
        var returnObj = com_tencent_mm_plugin_finder_search_FinderFeedSearchUI_clz_init_kvyh.call(this);
        printBeat(beat);
        return returnObj;
    };
});