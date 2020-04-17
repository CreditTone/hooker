//com.tencent.*MMVideoView:set.*

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

Java.perform(function() {var com_tencent_mm_modelvideo_MMVideoView_clz = Java.use('com.tencent.mm.modelvideo.MMVideoView');var com_tencent_mm_modelvideo_MMVideoView_clz_method_setRootPath_95ri=com_tencent_mm_modelvideo_MMVideoView_clz.setRootPath.overload('java.lang.String');com_tencent_mm_modelvideo_MMVideoView_clz_method_setRootPath_95ri.implementation = function(v0) {printStacks('public void com.tencent.mm.modelvideo.MMVideoView.setRootPath(java.lang.String)');com_tencent_mm_modelvideo_MMVideoView_clz_method_setRootPath_95ri.call(this,v0);};var com_tencent_mm_modelvideo_MMVideoView_clz_method_setLoop_o0ss=com_tencent_mm_modelvideo_MMVideoView_clz.setLoop.overload('boolean');com_tencent_mm_modelvideo_MMVideoView_clz_method_setLoop_o0ss.implementation = function(v0) {printStacks('public void com.tencent.mm.modelvideo.MMVideoView.setLoop(boolean)');com_tencent_mm_modelvideo_MMVideoView_clz_method_setLoop_o0ss.call(this,v0);};var com_tencent_mm_modelvideo_MMVideoView_clz_method_setIMMDownloadFinish_4s7s=com_tencent_mm_modelvideo_MMVideoView_clz.setIMMDownloadFinish.overload('com.tencent.mm.pluginsdk.ui.h$a');com_tencent_mm_modelvideo_MMVideoView_clz_method_setIMMDownloadFinish_4s7s.implementation = function(v0) {printStacks('public void com.tencent.mm.modelvideo.MMVideoView.setIMMDownloadFinish(com.tencent.mm.pluginsdk.ui.h$a)');com_tencent_mm_modelvideo_MMVideoView_clz_method_setIMMDownloadFinish_4s7s.call(this,v0);};var com_tencent_mm_modelvideo_MMVideoView_clz_method_setDownloadStatus_jufe=com_tencent_mm_modelvideo_MMVideoView_clz.setDownloadStatus.overload('int');com_tencent_mm_modelvideo_MMVideoView_clz_method_setDownloadStatus_jufe.implementation = function(v0) {printStacks('protected void com.tencent.mm.modelvideo.MMVideoView.setDownloadStatus(int)');com_tencent_mm_modelvideo_MMVideoView_clz_method_setDownloadStatus_jufe.call(this,v0);};var com_tencent_mm_modelvideo_MMVideoView_clz_method_setFilepath_i6ts=com_tencent_mm_modelvideo_MMVideoView_clz.setFilepath.overload('java.lang.String');com_tencent_mm_modelvideo_MMVideoView_clz_method_setFilepath_i6ts.implementation = function(v0) {printStacks('protected void com.tencent.mm.modelvideo.MMVideoView.setFilepath(java.lang.String)');com_tencent_mm_modelvideo_MMVideoView_clz_method_setFilepath_i6ts.call(this,v0);};var com_tencent_mm_modelvideo_MMVideoView_clz_method_setScaleType_5h69=com_tencent_mm_modelvideo_MMVideoView_clz.setScaleType.overload('com.tencent.mm.pluginsdk.ui.h$d');com_tencent_mm_modelvideo_MMVideoView_clz_method_setScaleType_5h69.implementation = function(v0) {printStacks('public void com.tencent.mm.modelvideo.MMVideoView.setScaleType(com.tencent.mm.pluginsdk.ui.h$d)');com_tencent_mm_modelvideo_MMVideoView_clz_method_setScaleType_5h69.call(this,v0);};var com_tencent_mm_modelvideo_MMVideoView_clz_method_setIOnlineVideoProxy_c2iv=com_tencent_mm_modelvideo_MMVideoView_clz.setIOnlineVideoProxy.overload('com.tencent.mm.modelvideo.b');com_tencent_mm_modelvideo_MMVideoView_clz_method_setIOnlineVideoProxy_c2iv.implementation = function(v0) {printStacks('public void com.tencent.mm.modelvideo.MMVideoView.setIOnlineVideoProxy(com.tencent.mm.modelvideo.b)');com_tencent_mm_modelvideo_MMVideoView_clz_method_setIOnlineVideoProxy_c2iv.call(this,v0);};});