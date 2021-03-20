//crack by com.tencent.mm 7.0.16
//com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy
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


//com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy
Java.perform(function() {
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz = Java.use('com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy');
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_stop_9ner = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.stop.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_stop_9ner.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.stop()';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_stop_9ner.call(this);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_c_29mn = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.c.overload('double', 'boolean');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_c_29mn.implementation = function(v0, v1) {
        var executor = this.hashCode();
        var beatText = 'public final boolean com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.c(double,boolean)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_c_29mn.call(this, v0, v1);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getIsNeverStart_ercb = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.getIsNeverStart.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getIsNeverStart_ercb.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final boolean com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.getIsNeverStart()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getIsNeverStart_ercb.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_pause_zirv = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.pause.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_pause_zirv.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final boolean com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.pause()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_pause_zirv.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getCurrentPlayerState_ji8u = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.getCurrentPlayerState.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getCurrentPlayerState_ji8u.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'private final int com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.getCurrentPlayerState()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getCurrentPlayerState_ji8u.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getOnPlayerStopListener_gavp = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.getOnPlayerStopListener.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getOnPlayerStopListener_gavp.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final com.tencent.mm.plugin.finder.video.r com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.getOnPlayerStopListener()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getOnPlayerStopListener_gavp.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setProgressTimer_s2im = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setProgressTimer.overload('java.util.Timer');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setProgressTimer_s2im.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setProgressTimer(java.util.Timer)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setProgressTimer_s2im.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getVideoMediaInfo_4cuz = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.getVideoMediaInfo.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getVideoMediaInfo_4cuz.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final com.tencent.mm.plugin.finder.video.p com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.getVideoMediaInfo()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getVideoMediaInfo_4cuz.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setPreview_q0c7 = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setPreview.overload('boolean');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setPreview_q0c7.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setPreview(boolean)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setPreview_q0c7.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setOnPlayerStopListener_smdd = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setOnPlayerStopListener.overload('com.tencent.mm.plugin.finder.video.r');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setOnPlayerStopListener_smdd.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setOnPlayerStopListener(com.tencent.mm.plugin.finder.video.r)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setOnPlayerStopListener_smdd.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getVideoDuration_5lnd = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.getVideoDuration.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getVideoDuration_5lnd.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final int com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.getVideoDuration()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getVideoDuration_5lnd.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setMediaInfo_x6ow = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setMediaInfo.overload('com.tencent.mm.plugin.finder.video.p');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setMediaInfo_x6ow.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setMediaInfo(com.tencent.mm.plugin.finder.video.p)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setMediaInfo_x6ow.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setIMMVideoViewCallback_726g = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setIMMVideoViewCallback.overload('com.tencent.mm.pluginsdk.ui.h$b');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setIMMVideoViewCallback_726g.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setIMMVideoViewCallback(com.tencent.mm.pluginsdk.ui.h$b)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setIMMVideoViewCallback_726g.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setViewFocused_mddd = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setViewFocused.overload('boolean');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setViewFocused_mddd.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setViewFocused(boolean)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setViewFocused_mddd.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getVideoView_mv9m = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.getVideoView.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getVideoView_mv9m.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final android.view.View com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.getVideoView()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getVideoView_mv9m.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setVideoViewFocused_35y4 = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setVideoViewFocused.overload('boolean');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setVideoViewFocused_35y4.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setVideoViewFocused(boolean)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setVideoViewFocused_35y4.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getOnMuteListener_ubtu = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.getOnMuteListener.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getOnMuteListener_ubtu.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final com.tencent.mm.plugin.finder.video.q com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.getOnMuteListener()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getOnMuteListener_ubtu.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_onRelease_05se = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.onRelease.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_onRelease_05se.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.onRelease()';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_onRelease_05se.call(this);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setVideoPlayLifecycle_ncbl = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setVideoPlayLifecycle.overload('com.tencent.mm.plugin.finder.video.u');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setVideoPlayLifecycle_ncbl.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setVideoPlayLifecycle(com.tencent.mm.plugin.finder.video.u)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setVideoPlayLifecycle_ncbl.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getMediaPreloadCore_to57 = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.getMediaPreloadCore.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getMediaPreloadCore_to57.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final com.tencent.mm.plugin.finder.preload.MediaPreloadCore com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.getMediaPreloadCore()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getMediaPreloadCore_to57.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_lH_ps75 = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.lH.overload('boolean');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_lH_ps75.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'private final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.lH(boolean)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_lH_ps75.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setDownloadCallback_o5p4 = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setDownloadCallback.overload('com.tencent.mm.plugin.finder.video.t');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setDownloadCallback_o5p4.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setDownloadCallback(com.tencent.mm.plugin.finder.video.t)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setDownloadCallback_o5p4.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setCropView_llrw = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setCropView.overload('com.tencent.mm.ui.widget.cropview.CropLayout');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setCropView_llrw.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setCropView(com.tencent.mm.ui.widget.cropview.CropLayout)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setCropView_llrw.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setIOnlineVideoProxy_gyci = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setIOnlineVideoProxy.overload('com.tencent.mm.modelvideo.b');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setIOnlineVideoProxy_gyci.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setIOnlineVideoProxy(com.tencent.mm.modelvideo.b)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setIOnlineVideoProxy_gyci.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_a_lh6s = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.a.overload('com.tencent.mm.plugin.finder.loader.l', 'boolean', 'com.tencent.mm.plugin.finder.storage.FinderItem');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_a_lh6s.implementation = function(v0, v1, v2) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.a(com.tencent.mm.plugin.finder.loader.l,boolean,com.tencent.mm.plugin.finder.storage.FinderItem)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_a_lh6s.call(this, v0, v1, v2);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getIsShouldPlayResume_t4hi = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.getIsShouldPlayResume.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getIsShouldPlayResume_t4hi.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final boolean com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.getIsShouldPlayResume()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getIsShouldPlayResume_t4hi.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getDownloadCallback_m37f = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.getDownloadCallback.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getDownloadCallback_m37f.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final com.tencent.mm.plugin.finder.video.t com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.getDownloadCallback()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getDownloadCallback_m37f.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_onUIDestroy_y8se = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.onUIDestroy.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_onUIDestroy_y8se.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.onUIDestroy()';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_onUIDestroy_y8se.call(this);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setLoop_ikr4 = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setLoop.overload('boolean');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setLoop_ikr4.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setLoop(boolean)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setLoop_ikr4.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_play_6hli = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.play.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_play_6hli.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final boolean com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.play()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_play_6hli.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setOnMuteListener_2ob1 = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setOnMuteListener.overload('com.tencent.mm.plugin.finder.video.q');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setOnMuteListener_2ob1.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setOnMuteListener(com.tencent.mm.plugin.finder.video.q)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setOnMuteListener_2ob1.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getResourceLoaderProxy_cqjm = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.getResourceLoaderProxy.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getResourceLoaderProxy_cqjm.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy$b com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.getResourceLoaderProxy()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getResourceLoaderProxy_cqjm.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getCurrentPlaySecond_aseq = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.getCurrentPlaySecond.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getCurrentPlaySecond_aseq.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final int com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.getCurrentPlaySecond()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getCurrentPlaySecond_aseq.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getFirstStart_6i1i = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.getFirstStart.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getFirstStart_6i1i.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final boolean com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.getFirstStart()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getFirstStart_6i1i.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_a_gq8h = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.a.overload('com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy', 'int');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_a_gq8h.implementation = function(v0, v1) {
        var executor = 'Class';
        var beatText = 'public static final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.a(com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy,int)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_a_gq8h.call(com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz, v0, v1);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setStartCdn_bfki = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setStartCdn.overload('boolean');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setStartCdn_bfki.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setStartCdn(boolean)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setStartCdn_bfki.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setIsShowBasicControls_cv4q = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setIsShowBasicControls.overload('boolean');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setIsShowBasicControls_cv4q.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setIsShowBasicControls(boolean)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setIsShowBasicControls_cv4q.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setMute_lv2p = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setMute.overload('boolean');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setMute_lv2p.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setMute(boolean)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setMute_lv2p.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDK_16ga = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.cDK.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDK_16ga.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'private final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.cDK()';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDK_16ga.call(this);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDJ_602b = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.cDJ.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDJ_602b.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'private final java.lang.String com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.cDJ()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDJ_602b.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDM_y9vr = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.cDM.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDM_y9vr.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final boolean com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.cDM()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDM_y9vr.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDL_81l9 = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.cDL.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDL_81l9.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'private final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.cDL()';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDL_81l9.call(this);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDO_rl2g = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.cDO.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDO_rl2g.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'private final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.cDO()';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDO_rl2g.call(this);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDN_nipd = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.cDN.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDN_nipd.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final int com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.cDN()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDN_nipd.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDQ_q50n = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.cDQ.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDQ_q50n.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'private final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.cDQ()';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDQ_q50n.call(this);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDP_0f4s = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.cDP.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDP_0f4s.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'private final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.cDP()';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDP_0f4s.call(this);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDS_kgxf = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.cDS.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDS_kgxf.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'private final boolean com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.cDS()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDS_kgxf.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDR_mgqo = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.cDR.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDR_mgqo.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.cDR()';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDR_mgqo.call(this);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDT_zilh = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.cDT.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDT_zilh.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'private final boolean com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.cDT()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDT_zilh.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setFirstStart_mpkf = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setFirstStart.overload('boolean');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setFirstStart_mpkf.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setFirstStart(boolean)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setFirstStart_mpkf.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setVideoViewCallback_xtrq = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setVideoViewCallback.overload('com.tencent.mm.pluginsdk.ui.h$b');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setVideoViewCallback_xtrq.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setVideoViewCallback(com.tencent.mm.pluginsdk.ui.h$b)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setVideoViewCallback_xtrq.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDz_ydm9 = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.cDz.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDz_ydm9.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final boolean com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.cDz()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_cDz_ydm9.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getVideoViewCallback_i8zl = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.getVideoViewCallback.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getVideoViewCallback_i8zl.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final com.tencent.mm.pluginsdk.ui.h$b com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.getVideoViewCallback()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getVideoViewCallback_i8zl.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setLifecycle_ps42 = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setLifecycle.overload('com.tencent.mm.plugin.finder.video.u');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setLifecycle_ps42.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setLifecycle(com.tencent.mm.plugin.finder.video.u)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setLifecycle_ps42.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getCropView_py39 = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.getCropView.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getCropView_py39.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final com.tencent.mm.ui.widget.cropview.CropLayout com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.getCropView()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getCropView_py39.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_init_nt3n = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.init.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_init_nt3n.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'private void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.init()';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_init_nt3n.call(this);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getParentView_9f0w = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.getParentView.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getParentView_9f0w.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final android.view.ViewParent com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.getParentView()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getParentView_9f0w.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_a_3hrk = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.a.overload('com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy', 'android.view.Surface');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_a_3hrk.implementation = function(v0, v1) {
        var executor = 'Class';
        var beatText = 'public static final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.a(com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy,android.view.Surface)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_a_3hrk.call(com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz, v0, v1);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getVideoViewFocused_yusq = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.getVideoViewFocused.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getVideoViewFocused_yusq.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final boolean com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.getVideoViewFocused()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getVideoViewFocused_yusq.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setResourceLoaderProxy_xghp = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setResourceLoaderProxy.overload('com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy$b');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setResourceLoaderProxy_xghp.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setResourceLoaderProxy(com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy$b)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setResourceLoaderProxy_xghp.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_blh_f9po = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.blh.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_blh_f9po.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'private final boolean com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.blh()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_blh_f9po.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setIsShouldPlayResume_50q4 = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setIsShouldPlayResume.overload('boolean');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setIsShouldPlayResume_50q4.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setIsShouldPlayResume(boolean)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setIsShouldPlayResume_50q4.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getLifecycle_o97f = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.getLifecycle.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getLifecycle_o97f.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final com.tencent.mm.plugin.finder.video.u com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.getLifecycle()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getLifecycle_o97f.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_a_ea5g = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.a.overload('com.tencent.mm.plugin.finder.video.p');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_a_ea5g.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'private final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.a(com.tencent.mm.plugin.finder.video.p)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_a_ea5g.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getVideoMediaId_oa7a = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.getVideoMediaId.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getVideoMediaId_oa7a.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final java.lang.String com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.getVideoMediaId()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getVideoMediaId_oa7a.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_EM_lyb2 = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.EM.overload('int');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_EM_lyb2.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final boolean com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.EM(int)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_EM_lyb2.call(this, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setVideoMuteListener_q42e = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setVideoMuteListener.overload('com.tencent.mm.plugin.finder.video.q');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setVideoMuteListener_q42e.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setVideoMuteListener(com.tencent.mm.plugin.finder.video.q)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setVideoMuteListener_q42e.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setShouldPlayResume_v7dm = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setShouldPlayResume.overload('boolean');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setShouldPlayResume_v7dm.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setShouldPlayResume(boolean)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setShouldPlayResume_v7dm.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setStartProgressTimer_ttib = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setStartProgressTimer.overload('boolean');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setStartProgressTimer_ttib.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setStartProgressTimer(boolean)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setStartProgressTimer_ttib.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getProgressTimer_41q9 = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.getProgressTimer.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getProgressTimer_41q9.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final java.util.Timer com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.getProgressTimer()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getProgressTimer_41q9.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getMediaInfo_s46c = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.getMediaInfo.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getMediaInfo_s46c.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final com.tencent.mm.plugin.finder.video.p com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.getMediaInfo()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_getMediaInfo_s46c.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setMediaPreloadCore_ykdu = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setMediaPreloadCore.overload('com.tencent.mm.plugin.finder.preload.MediaPreloadCore');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setMediaPreloadCore_ykdu.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setMediaPreloadCore(com.tencent.mm.plugin.finder.preload.MediaPreloadCore)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setMediaPreloadCore_ykdu.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_b_fypu = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.b.overload('com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_b_fypu.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final java.lang.String com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.b(com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_b_fypu.call(com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_a_ks9k = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.a.overload('com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_a_ks9k.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final com.tencent.thumbplayer.b.a com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.a(com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_a_ks9k.call(com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_h_znqt = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.h.overload('com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_h_znqt.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.h(com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_h_znqt.call(com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_g_c8qm = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.g.overload('com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_g_c8qm.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final android.view.Surface com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.g(com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_g_c8qm.call(com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_f_7ylm = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.f.overload('com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_f_7ylm.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final int com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.f(com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_f_7ylm.call(com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_e_vvs6 = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.e.overload('com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_e_vvs6.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final boolean com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.e(com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_e_vvs6.call(com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_d_u8bj = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.d.overload('com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_d_u8bj.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final boolean com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.d(com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_d_u8bj.call(com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_c_ri0c = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.c.overload('com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_c_ri0c.implementation = function(v0) {
        var executor = 'Class';
        var beatText = 'public static final java.lang.String com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.c(com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy)';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_c_ri0c.call(com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz, v0);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setScaleType_vg6j = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setScaleType.overload('com.tencent.mm.pluginsdk.ui.h$e');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setScaleType_vg6j.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setScaleType(com.tencent.mm.pluginsdk.ui.h$e)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setScaleType_vg6j.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_di_1j9t = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.di.overload('java.lang.String', 'int');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_di_1j9t.implementation = function(v0, v1) {
        var executor = 'Class';
        var beatText = 'public static final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.di(java.lang.String,int)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_di_1j9t.call(com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz, v0, v1);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_isPlaying_h3gn = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.isPlaying.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_isPlaying_h3gn.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final boolean com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.isPlaying()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_isPlaying_h3gn.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_ghq_95sr = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.ghq.overload();
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_ghq_95sr.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public final boolean com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.ghq()';
        var beat = newMethodBeat(beatText, executor);
        var ret = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_ghq_95sr.call(this);
        printBeat(beat);
        return ret;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setInterceptDetach_ushn = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.setInterceptDetach.overload('boolean');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setInterceptDetach_ushn.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public final void com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy.setInterceptDetach(boolean)';
        var beat = newMethodBeat(beatText, executor);
        com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_method_setInterceptDetach_ushn.call(this, v0);
        printBeat(beat);
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_init_ilki = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.$init.overload('android.content.Context');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_init_ilki.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'public com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy(android.content.Context)';
        var beat = newMethodBeat(beatText, executor);
        var returnObj = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_init_ilki.call(this, v0);
        printBeat(beat);
        return returnObj;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_init_2yfs = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_init_2yfs.implementation = function(v0, v1, v2) {
        var executor = this.hashCode();
        var beatText = 'public com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy(android.content.Context,android.util.AttributeSet,int)';
        var beat = newMethodBeat(beatText, executor);
        var returnObj = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_init_2yfs.call(this, v0, v1, v2);
        printBeat(beat);
        return returnObj;
    };
    var com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_init_ko9j = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz.$init.overload('android.content.Context', 'android.util.AttributeSet');
    com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_init_ko9j.implementation = function(v0, v1) {
        var executor = this.hashCode();
        var beatText = 'public com.tencent.mm.plugin.finder.video.FinderThumbPlayerProxy(android.content.Context,android.util.AttributeSet)';
        var beat = newMethodBeat(beatText, executor);
        var returnObj = com_tencent_mm_plugin_finder_video_FinderThumbPlayerProxy_clz_init_ko9j.call(this, v0, v1);
        printBeat(beat);
        return returnObj;
    };
});