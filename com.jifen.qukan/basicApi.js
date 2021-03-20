//com.jifen.qukan.web.api.BasicApi:?
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

function checkLoadDex(className, dexfile) {
    Java.perform(function() {
        if (!classExists(className)) {
            Java.openClassFile(dexfile).load();
            console.log("load " + dexfile);
        }
    });
};

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

function methodInBeat(invokeId, timestamp, methodName, executor) {
	var startTime = timestamp;
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var threadClz = Java.use("java.lang.Thread");
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    console.log("------------start:" + invokeId + ",objectHash:"+executor+",thread:" + threadClz.currentThread().getId() + ",timestamp:" + startTime+"---------------");
    console.log(methodName);
    console.log(stackInfo.substring(20));
    console.log("------------end:" + invokeId + ",usedtime:" + (new Date().getTime() - startTime) +"---------------\n");
};

function log(str) {
    console.log(str);
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

Java.perform(function() {
    var com_jifen_qukan_web_api_BasicApi_clz = Java.use('com.jifen.qukan.web.api.BasicApi');
    var com_jifen_qukan_web_api_BasicApi_clz_method_openFaceRecognition_dk44 = com_jifen_qukan_web_api_BasicApi_clz.openFaceRecognition.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_openFaceRecognition_dk44.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_openFaceRecognition_dk44.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.openFaceRecognition(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_hasCompleteGoldCoinDouble_jc18 = com_jifen_qukan_web_api_BasicApi_clz.hasCompleteGoldCoinDouble.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_hasCompleteGoldCoinDouble_jc18.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_hasCompleteGoldCoinDouble_jc18.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.hasCompleteGoldCoinDouble(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_addressAuthorization_tsad = com_jifen_qukan_web_api_BasicApi_clz.addressAuthorization.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_addressAuthorization_tsad.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_addressAuthorization_tsad.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.addressAuthorization(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_enableAuthorRecommendation_6kf7 = com_jifen_qukan_web_api_BasicApi_clz.enableAuthorRecommendation.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_enableAuthorRecommendation_6kf7.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_enableAuthorRecommendation_6kf7.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.enableAuthorRecommendation(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_getH5GlobalConfig_xvhh = com_jifen_qukan_web_api_BasicApi_clz.getH5GlobalConfig.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_getH5GlobalConfig_xvhh.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_getH5GlobalConfig_xvhh.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.getH5GlobalConfig(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_isOpenBox_uc7e = com_jifen_qukan_web_api_BasicApi_clz.isOpenBox.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_isOpenBox_uc7e.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_isOpenBox_uc7e.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.isOpenBox(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_gotoAuthorList_0985 = com_jifen_qukan_web_api_BasicApi_clz.gotoAuthorList.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_gotoAuthorList_0985.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_gotoAuthorList_0985.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.gotoAuthorList(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_setCanRefresh_vmyo = com_jifen_qukan_web_api_BasicApi_clz.setCanRefresh.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_setCanRefresh_vmyo.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_setCanRefresh_vmyo.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.setCanRefresh(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_checkPermissions_v0zk = com_jifen_qukan_web_api_BasicApi_clz.checkPermissions.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_checkPermissions_v0zk.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_checkPermissions_v0zk.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.checkPermissions(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_getFreeRewardStatus_3ibn = com_jifen_qukan_web_api_BasicApi_clz.getFreeRewardStatus.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_getFreeRewardStatus_3ibn.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_getFreeRewardStatus_3ibn.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.getFreeRewardStatus(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_isGoldCoinDouble_5bed = com_jifen_qukan_web_api_BasicApi_clz.isGoldCoinDouble.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_isGoldCoinDouble_5bed.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_isGoldCoinDouble_5bed.call(this, v0);
        methodInBeat(invokeId, startTime, 'public boolean com.jifen.qukan.web.api.BasicApi.isGoldCoinDouble(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_isShowSignInPrompt_9hlb = com_jifen_qukan_web_api_BasicApi_clz.isShowSignInPrompt.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_isShowSignInPrompt_9hlb.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_isShowSignInPrompt_9hlb.call(this, v0);
        methodInBeat(invokeId, startTime, 'public boolean com.jifen.qukan.web.api.BasicApi.isShowSignInPrompt(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_access$600_qxmc = com_jifen_qukan_web_api_BasicApi_clz.access$600.overload('com.jifen.qukan.web.api.BasicApi', 'int', 'java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_access$600_qxmc.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_access$600_qxmc.call(com_jifen_qukan_web_api_BasicApi_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'static com.jifen.framework.web.bridge.model.ResponseItem com.jifen.qukan.web.api.BasicApi.access$600(com.jifen.qukan.web.api.BasicApi,int,java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_access$800_p7pl = com_jifen_qukan_web_api_BasicApi_clz.access$800.overload('com.jifen.qukan.web.api.BasicApi', 'java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_access$800_p7pl.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_access$800_p7pl.call(com_jifen_qukan_web_api_BasicApi_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static com.jifen.framework.web.bridge.model.ResponseItem com.jifen.qukan.web.api.BasicApi.access$800(com.jifen.qukan.web.api.BasicApi,java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_localRead_eunl = com_jifen_qukan_web_api_BasicApi_clz.localRead.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_localRead_eunl.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_localRead_eunl.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.localRead(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_downloadApk_1ywn = com_jifen_qukan_web_api_BasicApi_clz.downloadApk.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_downloadApk_1ywn.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_downloadApk_1ywn.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.downloadApk(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_onOpenSignInRemind_bzls = com_jifen_qukan_web_api_BasicApi_clz.onOpenSignInRemind.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_onOpenSignInRemind_bzls.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_onOpenSignInRemind_bzls.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.onOpenSignInRemind(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_getTopicDetail_89fc = com_jifen_qukan_web_api_BasicApi_clz.getTopicDetail.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_getTopicDetail_89fc.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_getTopicDetail_89fc.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.getTopicDetail(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_isSpecialShowBlankTimer_hyhz = com_jifen_qukan_web_api_BasicApi_clz.isSpecialShowBlankTimer.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_isSpecialShowBlankTimer_hyhz.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_isSpecialShowBlankTimer_hyhz.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.isSpecialShowBlankTimer(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_queryPluginInfo_se8m = com_jifen_qukan_web_api_BasicApi_clz.queryPluginInfo.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_queryPluginInfo_se8m.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_queryPluginInfo_se8m.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.queryPluginInfo(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_getSwitchFeature_p07g = com_jifen_qukan_web_api_BasicApi_clz.getSwitchFeature.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_getSwitchFeature_p07g.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_getSwitchFeature_p07g.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.getSwitchFeature(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_access$1500_0vlr = com_jifen_qukan_web_api_BasicApi_clz.access$1500.overload('com.jifen.qukan.web.api.BasicApi', 'java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_access$1500_0vlr.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_access$1500_0vlr.call(com_jifen_qukan_web_api_BasicApi_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static com.jifen.framework.web.bridge.model.ResponseItem com.jifen.qukan.web.api.BasicApi.access$1500(com.jifen.qukan.web.api.BasicApi,java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_checkAppExist_p8ua = com_jifen_qukan_web_api_BasicApi_clz.checkAppExist.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_checkAppExist_p8ua.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_checkAppExist_p8ua.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.checkAppExist(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_access$1900_e47c = com_jifen_qukan_web_api_BasicApi_clz.access$1900.overload('com.jifen.qukan.web.api.BasicApi', 'java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_access$1900_e47c.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_access$1900_e47c.call(com_jifen_qukan_web_api_BasicApi_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static com.jifen.framework.web.bridge.model.ResponseItem com.jifen.qukan.web.api.BasicApi.access$1900(com.jifen.qukan.web.api.BasicApi,java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_checkAuthUpgrade_41xx = com_jifen_qukan_web_api_BasicApi_clz.checkAuthUpgrade.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_checkAuthUpgrade_41xx.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_checkAuthUpgrade_41xx.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.checkAuthUpgrade(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_access$1100_p8ra = com_jifen_qukan_web_api_BasicApi_clz.access$1100.overload('com.jifen.qukan.web.api.BasicApi', 'java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_access$1100_p8ra.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_access$1100_p8ra.call(com_jifen_qukan_web_api_BasicApi_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static com.jifen.framework.web.bridge.model.ResponseItem com.jifen.qukan.web.api.BasicApi.access$1100(com.jifen.qukan.web.api.BasicApi,java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_getTargetApkLaunch_wse3 = com_jifen_qukan_web_api_BasicApi_clz.getTargetApkLaunch.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_getTargetApkLaunch_wse3.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_getTargetApkLaunch_wse3.call(this, v0);
        methodInBeat(invokeId, startTime, 'public boolean com.jifen.qukan.web.api.BasicApi.getTargetApkLaunch(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_getAuthDeviceInfo_jgjn = com_jifen_qukan_web_api_BasicApi_clz.getAuthDeviceInfo.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_getAuthDeviceInfo_jgjn.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_getAuthDeviceInfo_jgjn.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.getAuthDeviceInfo(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_rewardIsView_e5tk = com_jifen_qukan_web_api_BasicApi_clz.rewardIsView.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_rewardIsView_e5tk.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_rewardIsView_e5tk.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.rewardIsView(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_openAccountAuthPlatform_vx5q = com_jifen_qukan_web_api_BasicApi_clz.openAccountAuthPlatform.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_openAccountAuthPlatform_vx5q.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_openAccountAuthPlatform_vx5q.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.openAccountAuthPlatform(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_newWriteCache_sznv = com_jifen_qukan_web_api_BasicApi_clz.newWriteCache.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_newWriteCache_sznv.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_newWriteCache_sznv.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.newWriteCache(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_postNativeLog_yxf1 = com_jifen_qukan_web_api_BasicApi_clz.postNativeLog.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_postNativeLog_yxf1.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_postNativeLog_yxf1.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.postNativeLog(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_readTimerRewardTime_ruz7 = com_jifen_qukan_web_api_BasicApi_clz.readTimerRewardTime.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_readTimerRewardTime_ruz7.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_readTimerRewardTime_ruz7.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.readTimerRewardTime(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_setNewsHeight_xs6n = com_jifen_qukan_web_api_BasicApi_clz.setNewsHeight.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_setNewsHeight_xs6n.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_setNewsHeight_xs6n.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.setNewsHeight(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_goWebActivity_tqd5 = com_jifen_qukan_web_api_BasicApi_clz.goWebActivity.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_goWebActivity_tqd5.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_goWebActivity_tqd5.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.goWebActivity(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_getSignInPromptConfig_h2s8 = com_jifen_qukan_web_api_BasicApi_clz.getSignInPromptConfig.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_getSignInPromptConfig_h2s8.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_getSignInPromptConfig_h2s8.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.jifen.qukan.web.api.BasicApi.getSignInPromptConfig(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_openOcrRecognition_upyc = com_jifen_qukan_web_api_BasicApi_clz.openOcrRecognition.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_openOcrRecognition_upyc.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_openOcrRecognition_upyc.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.openOcrRecognition(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_withdrawCash_y9bi = com_jifen_qukan_web_api_BasicApi_clz.withdrawCash.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_withdrawCash_y9bi.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_withdrawCash_y9bi.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.withdrawCash(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_askAsynDataEncrypt_kycv = com_jifen_qukan_web_api_BasicApi_clz.askAsynDataEncrypt.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_askAsynDataEncrypt_kycv.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_askAsynDataEncrypt_kycv.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.askAsynDataEncrypt(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_enableSwitchFeature_009a = com_jifen_qukan_web_api_BasicApi_clz.enableSwitchFeature.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_enableSwitchFeature_009a.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_enableSwitchFeature_009a.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.enableSwitchFeature(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_getAsynIsLike_pr6h = com_jifen_qukan_web_api_BasicApi_clz.getAsynIsLike.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_getAsynIsLike_pr6h.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_getAsynIsLike_pr6h.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.getAsynIsLike(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_getRecommendVideos_it1h = com_jifen_qukan_web_api_BasicApi_clz.getRecommendVideos.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_getRecommendVideos_it1h.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_getRecommendVideos_it1h.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.getRecommendVideos(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_notifyFreeAmount_bm4g = com_jifen_qukan_web_api_BasicApi_clz.notifyFreeAmount.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_notifyFreeAmount_bm4g.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_notifyFreeAmount_bm4g.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.notifyFreeAmount(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_login_c2nd = com_jifen_qukan_web_api_BasicApi_clz.login.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_login_c2nd.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_login_c2nd.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.login(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_onH5RenderingCompleted_lvy8 = com_jifen_qukan_web_api_BasicApi_clz.onH5RenderingCompleted.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_onH5RenderingCompleted_lvy8.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_onH5RenderingCompleted_lvy8.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.onH5RenderingCompleted(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_getLocalContacts_3baj = com_jifen_qukan_web_api_BasicApi_clz.getLocalContacts.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_getLocalContacts_3baj.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_getLocalContacts_3baj.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.getLocalContacts(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_launchMiniProgram_rdqv = com_jifen_qukan_web_api_BasicApi_clz.launchMiniProgram.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_launchMiniProgram_rdqv.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_launchMiniProgram_rdqv.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.launchMiniProgram(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_callRefreshHide_l4gc = com_jifen_qukan_web_api_BasicApi_clz.callRefreshHide.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_callRefreshHide_l4gc.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_callRefreshHide_l4gc.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.callRefreshHide(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_handleReset_fihf = com_jifen_qukan_web_api_BasicApi_clz.handleReset.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_handleReset_fihf.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_handleReset_fihf.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.handleReset(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_access$300_6gjg = com_jifen_qukan_web_api_BasicApi_clz.access$300.overload('com.jifen.qukan.web.api.BasicApi', 'int', 'java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_access$300_6gjg.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_access$300_6gjg.call(com_jifen_qukan_web_api_BasicApi_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'static com.jifen.framework.web.bridge.model.ResponseItem com.jifen.qukan.web.api.BasicApi.access$300(com.jifen.qukan.web.api.BasicApi,int,java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_access$900_0qm9 = com_jifen_qukan_web_api_BasicApi_clz.access$900.overload('com.jifen.qukan.web.api.BasicApi', 'java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_access$900_0qm9.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_access$900_0qm9.call(com_jifen_qukan_web_api_BasicApi_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static com.jifen.framework.web.bridge.model.ResponseItem com.jifen.qukan.web.api.BasicApi.access$900(com.jifen.qukan.web.api.BasicApi,java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_redPacketReward_ihxc = com_jifen_qukan_web_api_BasicApi_clz.redPacketReward.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_redPacketReward_ihxc.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_redPacketReward_ihxc.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.redPacketReward(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_getToken_2eel = com_jifen_qukan_web_api_BasicApi_clz.getToken.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_getToken_2eel.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_getToken_2eel.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.getToken(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_access$1400_emja = com_jifen_qukan_web_api_BasicApi_clz.access$1400.overload('com.jifen.qukan.web.api.BasicApi', 'java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_access$1400_emja.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_access$1400_emja.call(com_jifen_qukan_web_api_BasicApi_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static com.jifen.framework.web.bridge.model.ResponseItem com.jifen.qukan.web.api.BasicApi.access$1400(com.jifen.qukan.web.api.BasicApi,java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_getContacts_znxj = com_jifen_qukan_web_api_BasicApi_clz.getContacts.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_getContacts_znxj.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_getContacts_znxj.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.getContacts(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_installShortCut_lwqi = com_jifen_qukan_web_api_BasicApi_clz.installShortCut.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_installShortCut_lwqi.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_installShortCut_lwqi.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.installShortCut(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_isCPCVersion_y38s = com_jifen_qukan_web_api_BasicApi_clz.isCPCVersion.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_isCPCVersion_y38s.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_isCPCVersion_y38s.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.jifen.qukan.web.api.BasicApi.isCPCVersion(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_access$1800_3ghc = com_jifen_qukan_web_api_BasicApi_clz.access$1800.overload('com.jifen.qukan.web.api.BasicApi', 'java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_access$1800_3ghc.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_access$1800_3ghc.call(com_jifen_qukan_web_api_BasicApi_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static com.jifen.framework.web.bridge.model.ResponseItem com.jifen.qukan.web.api.BasicApi.access$1800(com.jifen.qukan.web.api.BasicApi,java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_openBlackListNativePage_mo97 = com_jifen_qukan_web_api_BasicApi_clz.openBlackListNativePage.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_openBlackListNativePage_mo97.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_openBlackListNativePage_mo97.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.openBlackListNativePage(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_getRequestedOrientation_84y9 = com_jifen_qukan_web_api_BasicApi_clz.getRequestedOrientation.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_getRequestedOrientation_84y9.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_getRequestedOrientation_84y9.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.getRequestedOrientation(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_access$1000_9pqx = com_jifen_qukan_web_api_BasicApi_clz.access$1000.overload('com.jifen.qukan.web.api.BasicApi', 'java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_access$1000_9pqx.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_access$1000_9pqx.call(com_jifen_qukan_web_api_BasicApi_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static com.jifen.framework.web.bridge.model.ResponseItem com.jifen.qukan.web.api.BasicApi.access$1000(com.jifen.qukan.web.api.BasicApi,java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_getOauthCode_blfr = com_jifen_qukan_web_api_BasicApi_clz.getOauthCode.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_getOauthCode_blfr.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_getOauthCode_blfr.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.getOauthCode(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_eventAlert_nmmo = com_jifen_qukan_web_api_BasicApi_clz.eventAlert.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_eventAlert_nmmo.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_eventAlert_nmmo.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.eventAlert(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_hasShortCut_y4mf = com_jifen_qukan_web_api_BasicApi_clz.hasShortCut.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_hasShortCut_y4mf.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_hasShortCut_y4mf.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.hasShortCut(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_isPluginExist_rxld = com_jifen_qukan_web_api_BasicApi_clz.isPluginExist.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_isPluginExist_rxld.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_isPluginExist_rxld.call(this, v0);
        methodInBeat(invokeId, startTime, 'public boolean com.jifen.qukan.web.api.BasicApi.isPluginExist(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_encodeCpcReqId_lw6k = com_jifen_qukan_web_api_BasicApi_clz.encodeCpcReqId.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_encodeCpcReqId_lw6k.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_encodeCpcReqId_lw6k.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.jifen.qukan.web.api.BasicApi.encodeCpcReqId(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_oneKeyReward_e95d = com_jifen_qukan_web_api_BasicApi_clz.oneKeyReward.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_oneKeyReward_e95d.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_oneKeyReward_e95d.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.oneKeyReward(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_userGradeSkin_0dgi = com_jifen_qukan_web_api_BasicApi_clz.userGradeSkin.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_userGradeSkin_0dgi.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_userGradeSkin_0dgi.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.userGradeSkin(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_decodeCpcResBody_cr5d = com_jifen_qukan_web_api_BasicApi_clz.decodeCpcResBody.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_decodeCpcResBody_cr5d.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_decodeCpcResBody_cr5d.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.jifen.qukan.web.api.BasicApi.decodeCpcResBody(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_getABSupportAndroid_orjr = com_jifen_qukan_web_api_BasicApi_clz.getABSupportAndroid.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_getABSupportAndroid_orjr.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_getABSupportAndroid_orjr.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.jifen.qukan.web.api.BasicApi.getABSupportAndroid(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_personAbLogin_ehfo = com_jifen_qukan_web_api_BasicApi_clz.personAbLogin.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_personAbLogin_ehfo.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_personAbLogin_ehfo.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.personAbLogin(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_requestPermissions_te8q = com_jifen_qukan_web_api_BasicApi_clz.requestPermissions.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_requestPermissions_te8q.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_requestPermissions_te8q.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.requestPermissions(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_downloadFile_gnii = com_jifen_qukan_web_api_BasicApi_clz.downloadFile.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_downloadFile_gnii.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_downloadFile_gnii.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.downloadFile(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_localWrite_l51y = com_jifen_qukan_web_api_BasicApi_clz.localWrite.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_localWrite_l51y.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_localWrite_l51y.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.localWrite(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_getCommonMsg_mgbz = com_jifen_qukan_web_api_BasicApi_clz.getCommonMsg.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_getCommonMsg_mgbz.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_getCommonMsg_mgbz.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.getCommonMsg(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_stepErrorHandle_3ayl = com_jifen_qukan_web_api_BasicApi_clz.stepErrorHandle.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_stepErrorHandle_3ayl.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_stepErrorHandle_3ayl.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.stepErrorHandle(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_encodeCpcReqBody_57ie = com_jifen_qukan_web_api_BasicApi_clz.encodeCpcReqBody.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_encodeCpcReqBody_57ie.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_encodeCpcReqBody_57ie.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.jifen.qukan.web.api.BasicApi.encodeCpcReqBody(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_fastPublish_sd9a = com_jifen_qukan_web_api_BasicApi_clz.fastPublish.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_fastPublish_sd9a.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_fastPublish_sd9a.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.fastPublish(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_getDownloadProgressV2_lnzo = com_jifen_qukan_web_api_BasicApi_clz.getDownloadProgressV2.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_getDownloadProgressV2_lnzo.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_getDownloadProgressV2_lnzo.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.getDownloadProgressV2(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_queryPluginInfos_b6dh = com_jifen_qukan_web_api_BasicApi_clz.queryPluginInfos.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_queryPluginInfos_b6dh.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_queryPluginInfos_b6dh.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.queryPluginInfos(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_openCommentDialog_iau5 = com_jifen_qukan_web_api_BasicApi_clz.openCommentDialog.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_openCommentDialog_iau5.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_openCommentDialog_iau5.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.openCommentDialog(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_access$000_t70k = com_jifen_qukan_web_api_BasicApi_clz.access$000.overload('com.jifen.qukan.web.api.BasicApi', 'int', 'java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_access$000_t70k.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_access$000_t70k.call(com_jifen_qukan_web_api_BasicApi_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'static com.jifen.framework.web.bridge.model.ResponseItem com.jifen.qukan.web.api.BasicApi.access$000(com.jifen.qukan.web.api.BasicApi,int,java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_downloadAndInstallV2_5kes = com_jifen_qukan_web_api_BasicApi_clz.downloadAndInstallV2.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_downloadAndInstallV2_5kes.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_downloadAndInstallV2_5kes.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.downloadAndInstallV2(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_access$400_s6le = com_jifen_qukan_web_api_BasicApi_clz.access$400.overload('com.jifen.qukan.web.api.BasicApi', 'int', 'java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_access$400_s6le.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_access$400_s6le.call(com_jifen_qukan_web_api_BasicApi_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'static com.jifen.framework.web.bridge.model.ResponseItem com.jifen.qukan.web.api.BasicApi.access$400(com.jifen.qukan.web.api.BasicApi,int,java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_isOpenSignInNotice_43mf = com_jifen_qukan_web_api_BasicApi_clz.isOpenSignInNotice.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_isOpenSignInNotice_43mf.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_isOpenSignInNotice_43mf.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.isOpenSignInNotice(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_installApk_bh2k = com_jifen_qukan_web_api_BasicApi_clz.installApk.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_installApk_bh2k.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_installApk_bh2k.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.installApk(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_checkPlugin_m895 = com_jifen_qukan_web_api_BasicApi_clz.checkPlugin.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_checkPlugin_m895.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_checkPlugin_m895.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.checkPlugin(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_newsDetailAdToSdk_1ras = com_jifen_qukan_web_api_BasicApi_clz.newsDetailAdToSdk.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_newsDetailAdToSdk_1ras.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_newsDetailAdToSdk_1ras.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.newsDetailAdToSdk(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_isCSIOpen_qkop = com_jifen_qukan_web_api_BasicApi_clz.isCSIOpen.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_isCSIOpen_qkop.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_isCSIOpen_qkop.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.isCSIOpen(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_rewardMessageBox_b0l7 = com_jifen_qukan_web_api_BasicApi_clz.rewardMessageBox.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_rewardMessageBox_b0l7.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_rewardMessageBox_b0l7.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.rewardMessageBox(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_redPacketStatus_cl7g = com_jifen_qukan_web_api_BasicApi_clz.redPacketStatus.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_redPacketStatus_cl7g.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_redPacketStatus_cl7g.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.redPacketStatus(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_access$1700_yz19 = com_jifen_qukan_web_api_BasicApi_clz.access$1700.overload('com.jifen.qukan.web.api.BasicApi', 'java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_access$1700_yz19.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_access$1700_yz19.call(com_jifen_qukan_web_api_BasicApi_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static com.jifen.framework.web.bridge.model.ResponseItem com.jifen.qukan.web.api.BasicApi.access$1700(com.jifen.qukan.web.api.BasicApi,java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_deleteDestFile_fix9 = com_jifen_qukan_web_api_BasicApi_clz.deleteDestFile.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_deleteDestFile_fix9.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_deleteDestFile_fix9.call(this, v0);
        methodInBeat(invokeId, startTime, 'public boolean com.jifen.qukan.web.api.BasicApi.deleteDestFile(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_getLoanAuthTypes_taq7 = com_jifen_qukan_web_api_BasicApi_clz.getLoanAuthTypes.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_getLoanAuthTypes_taq7.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_getLoanAuthTypes_taq7.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.getLoanAuthTypes(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_h5ParamsDoSign_5xf7 = com_jifen_qukan_web_api_BasicApi_clz.h5ParamsDoSign.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_h5ParamsDoSign_5xf7.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_h5ParamsDoSign_5xf7.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.h5ParamsDoSign(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_jumpWxSweep_g26d = com_jifen_qukan_web_api_BasicApi_clz.jumpWxSweep.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_jumpWxSweep_g26d.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_jumpWxSweep_g26d.call(this, v0);
        methodInBeat(invokeId, startTime, 'public boolean com.jifen.qukan.web.api.BasicApi.jumpWxSweep(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_onArtShowBigImageClick_xqom = com_jifen_qukan_web_api_BasicApi_clz.onArtShowBigImageClick.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_onArtShowBigImageClick_xqom.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_onArtShowBigImageClick_xqom.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.jifen.qukan.web.api.BasicApi.onArtShowBigImageClick(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_openWebviewFromHtml_f8dx = com_jifen_qukan_web_api_BasicApi_clz.openWebviewFromHtml.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_openWebviewFromHtml_f8dx.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_openWebviewFromHtml_f8dx.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.openWebviewFromHtml(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_isTimeVersion_rn9i = com_jifen_qukan_web_api_BasicApi_clz.isTimeVersion.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_isTimeVersion_rn9i.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_isTimeVersion_rn9i.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.isTimeVersion(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_onH5Notify_n9lh = com_jifen_qukan_web_api_BasicApi_clz.onH5Notify.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_onH5Notify_n9lh.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_onH5Notify_n9lh.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.onH5Notify(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_access$1300_8s6h = com_jifen_qukan_web_api_BasicApi_clz.access$1300.overload('com.jifen.qukan.web.api.BasicApi', 'java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_access$1300_8s6h.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_access$1300_8s6h.call(com_jifen_qukan_web_api_BasicApi_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static com.jifen.framework.web.bridge.model.ResponseItem com.jifen.qukan.web.api.BasicApi.access$1300(com.jifen.qukan.web.api.BasicApi,java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_addCalendarEvent_s52q = com_jifen_qukan_web_api_BasicApi_clz.addCalendarEvent.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_addCalendarEvent_s52q.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_addCalendarEvent_s52q.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.addCalendarEvent(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_askAsynData_m23p = com_jifen_qukan_web_api_BasicApi_clz.askAsynData.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_askAsynData_m23p.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_askAsynData_m23p.call(this, v0, v1);
        log(v0.getClass().getName());
        log(v0);
        var objClz = Java.use("java.lang.Object");
        log(Java.cast(v1,objClz).getClass());

        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.askAsynData(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_getSyncAB_6czs = com_jifen_qukan_web_api_BasicApi_clz.getSyncAB.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_getSyncAB_6czs.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_getSyncAB_6czs.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.getSyncAB(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_callQruntime_70od = com_jifen_qukan_web_api_BasicApi_clz.callQruntime.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_callQruntime_70od.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_callQruntime_70od.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.callQruntime(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_checkAppIfInstalled_fmod = com_jifen_qukan_web_api_BasicApi_clz.checkAppIfInstalled.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_checkAppIfInstalled_fmod.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_checkAppIfInstalled_fmod.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.checkAppIfInstalled(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_onSignInSuccess_nw2v = com_jifen_qukan_web_api_BasicApi_clz.onSignInSuccess.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_onSignInSuccess_nw2v.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_onSignInSuccess_nw2v.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.onSignInSuccess(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_isCoinVersion_xktv = com_jifen_qukan_web_api_BasicApi_clz.isCoinVersion.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_isCoinVersion_xktv.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_isCoinVersion_xktv.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.isCoinVersion(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_onWinInMall_0p8q = com_jifen_qukan_web_api_BasicApi_clz.onWinInMall.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_onWinInMall_0p8q.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_onWinInMall_0p8q.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.onWinInMall(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_getContentBridge_da1g = com_jifen_qukan_web_api_BasicApi_clz.getContentBridge.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_getContentBridge_da1g.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_getContentBridge_da1g.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.getContentBridge(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_isWebHeadViewHide_nm6u = com_jifen_qukan_web_api_BasicApi_clz.isWebHeadViewHide.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_isWebHeadViewHide_nm6u.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_isWebHeadViewHide_nm6u.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.isWebHeadViewHide(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_changeSignInNotice_fs7n = com_jifen_qukan_web_api_BasicApi_clz.changeSignInNotice.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_changeSignInNotice_fs7n.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_changeSignInNotice_fs7n.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.changeSignInNotice(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_goSignInDetailPage_dmxl = com_jifen_qukan_web_api_BasicApi_clz.goSignInDetailPage.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_goSignInDetailPage_dmxl.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_goSignInDetailPage_dmxl.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.goSignInDetailPage(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_setWebTitle_ytlk = com_jifen_qukan_web_api_BasicApi_clz.setWebTitle.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_setWebTitle_ytlk.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_setWebTitle_ytlk.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.setWebTitle(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_setRequestedOrientation_1gf6 = com_jifen_qukan_web_api_BasicApi_clz.setRequestedOrientation.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_setRequestedOrientation_1gf6.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_setRequestedOrientation_1gf6.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.setRequestedOrientation(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_usersSendSMS_x1qo = com_jifen_qukan_web_api_BasicApi_clz.usersSendSMS.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_usersSendSMS_x1qo.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_usersSendSMS_x1qo.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.usersSendSMS(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_access$100_j5om = com_jifen_qukan_web_api_BasicApi_clz.access$100.overload('com.jifen.qukan.web.api.BasicApi', 'int', 'java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_access$100_j5om.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_access$100_j5om.call(com_jifen_qukan_web_api_BasicApi_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'static com.jifen.framework.web.bridge.model.ResponseItem com.jifen.qukan.web.api.BasicApi.access$100(com.jifen.qukan.web.api.BasicApi,int,java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_access$500_gvxw = com_jifen_qukan_web_api_BasicApi_clz.access$500.overload('com.jifen.qukan.web.api.BasicApi', 'int', 'java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_access$500_gvxw.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_access$500_gvxw.call(com_jifen_qukan_web_api_BasicApi_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'static com.jifen.framework.web.bridge.model.ResponseItem com.jifen.qukan.web.api.BasicApi.access$500(com.jifen.qukan.web.api.BasicApi,int,java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_access$700_lqke = com_jifen_qukan_web_api_BasicApi_clz.access$700.overload('com.jifen.qukan.web.api.BasicApi', 'java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_access$700_lqke.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_access$700_lqke.call(com_jifen_qukan_web_api_BasicApi_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static com.jifen.framework.web.bridge.model.ResponseItem com.jifen.qukan.web.api.BasicApi.access$700(com.jifen.qukan.web.api.BasicApi,java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_preloadArtDetail_v52f = com_jifen_qukan_web_api_BasicApi_clz.preloadArtDetail.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_preloadArtDetail_v52f.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_preloadArtDetail_v52f.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.preloadArtDetail(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_newReadCache_shiv = com_jifen_qukan_web_api_BasicApi_clz.newReadCache.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_newReadCache_shiv.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_newReadCache_shiv.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.newReadCache(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_isTaskShowSignInNotice_hpkq = com_jifen_qukan_web_api_BasicApi_clz.isTaskShowSignInNotice.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_isTaskShowSignInNotice_hpkq.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_isTaskShowSignInNotice_hpkq.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.isTaskShowSignInNotice(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_access$200_enrq = com_jifen_qukan_web_api_BasicApi_clz.access$200.overload('com.jifen.qukan.web.api.BasicApi', 'java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_access$200_enrq.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_access$200_enrq.call(com_jifen_qukan_web_api_BasicApi_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static com.jifen.framework.web.bridge.model.ResponseItem com.jifen.qukan.web.api.BasicApi.access$200(com.jifen.qukan.web.api.BasicApi,java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_setContentHeight_uolm = com_jifen_qukan_web_api_BasicApi_clz.setContentHeight.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_setContentHeight_uolm.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_setContentHeight_uolm.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.setContentHeight(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_rebindWechatAsync_e38j = com_jifen_qukan_web_api_BasicApi_clz.rebindWechatAsync.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_rebindWechatAsync_e38j.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_rebindWechatAsync_e38j.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.rebindWechatAsync(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_access$1600_jm9k = com_jifen_qukan_web_api_BasicApi_clz.access$1600.overload('com.jifen.qukan.web.api.BasicApi', 'java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_access$1600_jm9k.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_access$1600_jm9k.call(com_jifen_qukan_web_api_BasicApi_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static com.jifen.framework.web.bridge.model.ResponseItem com.jifen.qukan.web.api.BasicApi.access$1600(com.jifen.qukan.web.api.BasicApi,java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_isHasJsSdk_9ldr = com_jifen_qukan_web_api_BasicApi_clz.isHasJsSdk.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_isHasJsSdk_9ldr.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_isHasJsSdk_9ldr.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.isHasJsSdk(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_setWebStatusBarColor_1ce8 = com_jifen_qukan_web_api_BasicApi_clz.setWebStatusBarColor.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_setWebStatusBarColor_1ce8.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_setWebStatusBarColor_1ce8.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.setWebStatusBarColor(java.lang.Object)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_missionAbLogin_i92h = com_jifen_qukan_web_api_BasicApi_clz.missionAbLogin.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_missionAbLogin_i92h.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_missionAbLogin_i92h.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.missionAbLogin(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_isCleanUser_im15 = com_jifen_qukan_web_api_BasicApi_clz.isCleanUser.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_isCleanUser_im15.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_isCleanUser_im15.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.isCleanUser(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_access$1200_1m5r = com_jifen_qukan_web_api_BasicApi_clz.access$1200.overload('com.jifen.qukan.web.api.BasicApi', 'java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_access$1200_1m5r.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_access$1200_1m5r.call(com_jifen_qukan_web_api_BasicApi_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static com.jifen.framework.web.bridge.model.ResponseItem com.jifen.qukan.web.api.BasicApi.access$1200(com.jifen.qukan.web.api.BasicApi,java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_checkAndReequestSdcardPermission_8r06 = com_jifen_qukan_web_api_BasicApi_clz.checkAndReequestSdcardPermission.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_checkAndReequestSdcardPermission_8r06.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_checkAndReequestSdcardPermission_8r06.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.checkAndReequestSdcardPermission(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_shareDownApk_sszi = com_jifen_qukan_web_api_BasicApi_clz.shareDownApk.overload('java.lang.Object', 'com.jifen.framework.web.bridge.basic.a');
    com_jifen_qukan_web_api_BasicApi_clz_method_shareDownApk_sszi.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_shareDownApk_sszi.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.shareDownApk(java.lang.Object,com.jifen.framework.web.bridge.basic.a)', executor);
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_isPure_n3md = com_jifen_qukan_web_api_BasicApi_clz.isPure.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_isPure_n3md.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_jifen_qukan_web_api_BasicApi_clz_method_isPure_n3md.call(this, v0);
        methodInBeat(invokeId, startTime, 'public java.lang.Object com.jifen.qukan.web.api.BasicApi.isPure(java.lang.Object)', executor);
        return ret;
    };
    var com_jifen_qukan_web_api_BasicApi_clz_method_openPrivateChat_uwpa = com_jifen_qukan_web_api_BasicApi_clz.openPrivateChat.overload('java.lang.Object');
    com_jifen_qukan_web_api_BasicApi_clz_method_openPrivateChat_uwpa.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_jifen_qukan_web_api_BasicApi_clz_method_openPrivateChat_uwpa.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.jifen.qukan.web.api.BasicApi.openPrivateChat(java.lang.Object)', executor);
    };
});