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

Java.perform(function() {
    var com_tencent_mm_modelvideo_MMVideoView_clz = Java.use('com.tencent.mm.modelvideo.MMVideoView');
    var com_tencent_mm_modelvideo_MMVideoView_clz_method_setRootPath_mhes = com_tencent_mm_modelvideo_MMVideoView_clz.setRootPath.overload('java.lang.String');
    com_tencent_mm_modelvideo_MMVideoView_clz_method_setRootPath_mhes.implementation = function(v0) {
        printStacks('public void com.tencent.mm.modelvideo.MMVideoView.setRootPath(java.lang.String)');
        com_tencent_mm_modelvideo_MMVideoView_clz_method_setRootPath_mhes.call(this, v0);
    };
    var com_tencent_mm_modelvideo_MMVideoView_clz_method_setLoop_1nqw = com_tencent_mm_modelvideo_MMVideoView_clz.setLoop.overload('boolean');
    com_tencent_mm_modelvideo_MMVideoView_clz_method_setLoop_1nqw.implementation = function(v0) {
        printStacks('public void com.tencent.mm.modelvideo.MMVideoView.setLoop(boolean)');
        com_tencent_mm_modelvideo_MMVideoView_clz_method_setLoop_1nqw.call(this, v0);
    };
    var com_tencent_mm_modelvideo_MMVideoView_clz_method_setIMMDownloadFinish_m92k = com_tencent_mm_modelvideo_MMVideoView_clz.setIMMDownloadFinish.overload('com.tencent.mm.pluginsdk.ui.h$a');
    com_tencent_mm_modelvideo_MMVideoView_clz_method_setIMMDownloadFinish_m92k.implementation = function(v0) {
        printStacks('public void com.tencent.mm.modelvideo.MMVideoView.setIMMDownloadFinish(com.tencent.mm.pluginsdk.ui.h$a)');
        com_tencent_mm_modelvideo_MMVideoView_clz_method_setIMMDownloadFinish_m92k.call(this, v0);
    };
    var com_tencent_mm_modelvideo_MMVideoView_clz_method_setDownloadStatus_1qff = com_tencent_mm_modelvideo_MMVideoView_clz.setDownloadStatus.overload('int');
    com_tencent_mm_modelvideo_MMVideoView_clz_method_setDownloadStatus_1qff.implementation = function(v0) {
        printStacks('protected void com.tencent.mm.modelvideo.MMVideoView.setDownloadStatus(int)');
        com_tencent_mm_modelvideo_MMVideoView_clz_method_setDownloadStatus_1qff.call(this, v0);
    };
    var com_tencent_mm_modelvideo_MMVideoView_clz_method_setFilepath_i6db = com_tencent_mm_modelvideo_MMVideoView_clz.setFilepath.overload('java.lang.String');
    com_tencent_mm_modelvideo_MMVideoView_clz_method_setFilepath_i6db.implementation = function(v0) {
        printStacks('protected void com.tencent.mm.modelvideo.MMVideoView.setFilepath(java.lang.String)');
        com_tencent_mm_modelvideo_MMVideoView_clz_method_setFilepath_i6db.call(this, v0);
    };
    var com_tencent_mm_modelvideo_MMVideoView_clz_method_setScaleType_3gt8 = com_tencent_mm_modelvideo_MMVideoView_clz.setScaleType.overload('com.tencent.mm.pluginsdk.ui.h$d');
    com_tencent_mm_modelvideo_MMVideoView_clz_method_setScaleType_3gt8.implementation = function(v0) {
        printStacks('public void com.tencent.mm.modelvideo.MMVideoView.setScaleType(com.tencent.mm.pluginsdk.ui.h$d)');
        com_tencent_mm_modelvideo_MMVideoView_clz_method_setScaleType_3gt8.call(this, v0);
    };
    var com_tencent_mm_modelvideo_MMVideoView_clz_method_setIOnlineVideoProxy_k9fk = com_tencent_mm_modelvideo_MMVideoView_clz.setIOnlineVideoProxy.overload('com.tencent.mm.modelvideo.b');
    com_tencent_mm_modelvideo_MMVideoView_clz_method_setIOnlineVideoProxy_k9fk.implementation = function(v0) {
        printStacks('public void com.tencent.mm.modelvideo.MMVideoView.setIOnlineVideoProxy(com.tencent.mm.modelvideo.b)');
        com_tencent_mm_modelvideo_MMVideoView_clz_method_setIOnlineVideoProxy_k9fk.call(this, v0);
    };
});