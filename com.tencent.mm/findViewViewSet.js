//com.tencent.mm.plugin.finder.video.FinderVideoView:set.*
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
    var com_tencent_mm_plugin_finder_video_FinderVideoView_clz = Java.use('com.tencent.mm.plugin.finder.video.FinderVideoView');
    var com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setMute_lhm8 = com_tencent_mm_plugin_finder_video_FinderVideoView_clz.setMute.overload('boolean');
    com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setMute_lhm8.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.finder.video.FinderVideoView.setMute(boolean)');
        com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setMute_lhm8.call(this, v0);
    };
    var com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setNeverStart_7o8c = com_tencent_mm_plugin_finder_video_FinderVideoView_clz.setNeverStart.overload('boolean');
    com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setNeverStart_7o8c.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.finder.video.FinderVideoView.setNeverStart(boolean)');
        com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setNeverStart_7o8c.call(this, v0);
    };
    var com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setInterceptDetach_kqli = com_tencent_mm_plugin_finder_video_FinderVideoView_clz.setInterceptDetach.overload('boolean');
    com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setInterceptDetach_kqli.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.finder.video.FinderVideoView.setInterceptDetach(boolean)');
        com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setInterceptDetach_kqli.call(this, v0);
    };
    var com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setViewFocused_048o = com_tencent_mm_plugin_finder_video_FinderVideoView_clz.setViewFocused.overload('boolean');
    com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setViewFocused_048o.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.finder.video.FinderVideoView.setViewFocused(boolean)');
        com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setViewFocused_048o.call(this, v0);
    };
    var com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setVideoTotalTime_fczl = com_tencent_mm_plugin_finder_video_FinderVideoView_clz.setVideoTotalTime.overload('int');
    com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setVideoTotalTime_fczl.implementation = function(v0) {
        printStacks('public void com.tencent.mm.plugin.finder.video.FinderVideoView.setVideoTotalTime(int)');
        log("getMediaInfo:"+this.getMediaInfo().toString());
        com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setVideoTotalTime_fczl.call(this, v0);
    };
    var com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setMediaInfo_ogra = com_tencent_mm_plugin_finder_video_FinderVideoView_clz.setMediaInfo.overload('com.tencent.mm.plugin.finder.video.FinderVideoView$b');
    com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setMediaInfo_ogra.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.finder.video.FinderVideoView.setMediaInfo(com.tencent.mm.plugin.finder.video.FinderVideoView$b)');
        com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setMediaInfo_ogra.call(this, v0);
    };
    var com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setPreviewing_xp3r = com_tencent_mm_plugin_finder_video_FinderVideoView_clz.setPreviewing.overload('boolean');
    com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setPreviewing_xp3r.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.finder.video.FinderVideoView.setPreviewing(boolean)');
        com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setPreviewing_xp3r.call(this, v0);
    };
    var com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setMuteListener_tlhb = com_tencent_mm_plugin_finder_video_FinderVideoView_clz.setMuteListener.overload('com.tencent.mm.plugin.finder.video.FinderVideoView$c');
    com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setMuteListener_tlhb.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.finder.video.FinderVideoView.setMuteListener(com.tencent.mm.plugin.finder.video.FinderVideoView$c)');
        com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setMuteListener_tlhb.call(this, v0);
    };
    var com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setVideoMatrix_nv0o = com_tencent_mm_plugin_finder_video_FinderVideoView_clz.setVideoMatrix.overload('com.tencent.mm.protocal.protobuf.akg');
    com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setVideoMatrix_nv0o.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.finder.video.FinderVideoView.setVideoMatrix(com.tencent.mm.protocal.protobuf.akg)');
        com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setVideoMatrix_nv0o.call(this, v0);
    };
    var com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setShouldPlayResume_alnk = com_tencent_mm_plugin_finder_video_FinderVideoView_clz.setShouldPlayResume.overload('boolean');
    com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setShouldPlayResume_alnk.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.finder.video.FinderVideoView.setShouldPlayResume(boolean)');
        com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setShouldPlayResume_alnk.call(this, v0);
    };
    var com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setLifecycle_m668 = com_tencent_mm_plugin_finder_video_FinderVideoView_clz.setLifecycle.overload('com.tencent.mm.plugin.finder.video.FinderVideoView$d');
    com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setLifecycle_m668.implementation = function(v0) {
        printStacks('public final void com.tencent.mm.plugin.finder.video.FinderVideoView.setLifecycle(com.tencent.mm.plugin.finder.video.FinderVideoView$d)');
        com_tencent_mm_plugin_finder_video_FinderVideoView_clz_method_setLifecycle_m668.call(this, v0);
    };
});