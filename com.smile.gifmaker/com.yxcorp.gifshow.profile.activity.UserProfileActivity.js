//crack by com.smile.gifmaker 7.5.40.14691
//com.yxcorp.gifshow.profile.activity.UserProfileActivity
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

function methodInBeat(invokeId, timestamp, methodName, executor) {
	var startTime = timestamp;
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var threadClz = Java.use("java.lang.Thread");
    var currentThread = threadClz.currentThread();
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    var str = ("------------startFlag:" + invokeId + ",objectHash:"+executor+",thread(id:" + currentThread.getId() +",name:" + currentThread.getName() + "),timestamp:" + startTime+"---------------\n");
    str += methodName + "\n";
    str += stackInfo.substring(20);
    str += ("------------endFlag:" + invokeId + ",usedtime:" + (new Date().getTime() - startTime) +"---------------\n");
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
    loadDexfile('/data/user/0/com.smile.gifmaker/xinit/'+dexfile);
};


//com.yxcorp.gifshow.profile.activity.UserProfileActivity
Java.perform(function() {
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz = Java.use('com.yxcorp.gifshow.profile.activity.UserProfileActivity');
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_onNewIntent_e5ou = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.onNewIntent.overload('android.content.Intent');
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_onNewIntent_e5ou.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_onNewIntent_e5ou.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.yxcorp.gifshow.profile.activity.UserProfileActivity.onNewIntent(android.content.Intent)', executor);
    };
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_onBackPressed_4m7j = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.onBackPressed.overload();
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_onBackPressed_4m7j.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_onBackPressed_4m7j.call(this);
        methodInBeat(invokeId, startTime, 'public void com.yxcorp.gifshow.profile.activity.UserProfileActivity.onBackPressed()', executor);
    };
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_A_zmtq = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.A.overload();
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_A_zmtq.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_A_zmtq.call(this);
        methodInBeat(invokeId, startTime, 'public androidx.fragment.app.Fragment com.yxcorp.gifshow.profile.activity.UserProfileActivity.A()', executor);
        return ret;
    };
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_F_x8m5 = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.F.overload();
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_F_x8m5.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_F_x8m5.call(this);
        methodInBeat(invokeId, startTime, 'public final androidx.fragment.app.Fragment com.yxcorp.gifshow.profile.activity.UserProfileActivity.F()', executor);
        return ret;
    };
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_G_u6bf = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.G.overload();
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_G_u6bf.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_G_u6bf.call(this);
        methodInBeat(invokeId, startTime, 'public final void com.yxcorp.gifshow.profile.activity.UserProfileActivity.G()', executor);
    };
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_isCustomImmersiveMode_kvfk = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.isCustomImmersiveMode.overload();
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_isCustomImmersiveMode_kvfk.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_isCustomImmersiveMode_kvfk.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.yxcorp.gifshow.profile.activity.UserProfileActivity.isCustomImmersiveMode()', executor);
        return ret;
    };
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_e1_h7xh = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.e1.overload();
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_e1_h7xh.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_e1_h7xh.call(this);
        methodInBeat(invokeId, startTime, 'public m0.c.n com.yxcorp.gifshow.profile.activity.UserProfileActivity.e1()', executor);
        return ret;
    };
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_p_dfag = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.p.overload();
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_p_dfag.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_p_dfag.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.yxcorp.gifshow.profile.activity.UserProfileActivity.p()', executor);
        return ret;
    };
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_onConfigurationChanged_wc99 = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.onConfigurationChanged.overload('android.content.res.Configuration');
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_onConfigurationChanged_wc99.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_onConfigurationChanged_wc99.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.yxcorp.gifshow.profile.activity.UserProfileActivity.onConfigurationChanged(android.content.res.Configuration)', executor);
    };
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_finish_np2s = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.finish.overload();
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_finish_np2s.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_finish_np2s.call(this);
        methodInBeat(invokeId, startTime, 'public void com.yxcorp.gifshow.profile.activity.UserProfileActivity.finish()', executor);
    };
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_startActivity_xzn6 = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.startActivity.overload('android.content.Intent');
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_startActivity_xzn6.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_startActivity_xzn6.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.yxcorp.gifshow.profile.activity.UserProfileActivity.startActivity(android.content.Intent)', executor);
    };
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_onUserScreenShot_92h9 = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.onUserScreenShot.overload('k.f0.g.a.d.p');
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_onUserScreenShot_92h9.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_onUserScreenShot_92h9.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.yxcorp.gifshow.profile.activity.UserProfileActivity.onUserScreenShot(k.f0.g.a.d.p)', executor);
    };
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_onDestroy_ihls = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.onDestroy.overload();
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_onDestroy_ihls.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_onDestroy_ihls.call(this);
        methodInBeat(invokeId, startTime, 'public void com.yxcorp.gifshow.profile.activity.UserProfileActivity.onDestroy()', executor);
    };
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_getLeaveParams_nup9 = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.getLeaveParams.overload();
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_getLeaveParams_nup9.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_getLeaveParams_nup9.call(this);
        methodInBeat(invokeId, startTime, 'public java.lang.Object[] com.yxcorp.gifshow.profile.activity.UserProfileActivity.getLeaveParams()', executor);
        return ret;
    };
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_S0_gckq = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.S0.overload();
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_S0_gckq.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_S0_gckq.call(this);
        methodInBeat(invokeId, startTime, 'public m0.c.n com.yxcorp.gifshow.profile.activity.UserProfileActivity.S0()', executor);
        return ret;
    };
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_startActivityForResult_i2t5 = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.startActivityForResult.overload('android.content.Intent', 'int');
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_startActivityForResult_i2t5.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_startActivityForResult_i2t5.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.yxcorp.gifshow.profile.activity.UserProfileActivity.startActivityForResult(android.content.Intent,int)', executor);
    };
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_getEnterArguments_ywro = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.getEnterArguments.overload();
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_getEnterArguments_ywro.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_getEnterArguments_ywro.call(this);
        methodInBeat(invokeId, startTime, 'public java.lang.String[] com.yxcorp.gifshow.profile.activity.UserProfileActivity.getEnterArguments()', executor);
        return ret;
    };
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_logPageEnter_njjx = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.logPageEnter.overload('int');
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_logPageEnter_njjx.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_logPageEnter_njjx.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.yxcorp.gifshow.profile.activity.UserProfileActivity.logPageEnter(int)', executor);
    };
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_getPageId_p2sd = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.getPageId.overload();
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_getPageId_p2sd.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_getPageId_p2sd.call(this);
        methodInBeat(invokeId, startTime, 'public int com.yxcorp.gifshow.profile.activity.UserProfileActivity.getPageId()', executor);
        return ret;
    };
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_a_d2mf = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.a.overload('com.yxcorp.gifshow.model.response.UserProfileResponse');
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_a_d2mf.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_a_d2mf.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.yxcorp.gifshow.profile.activity.UserProfileActivity.a(com.yxcorp.gifshow.model.response.UserProfileResponse)', executor);
    };
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_z1_tobu = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.z1.overload();
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_z1_tobu.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_z1_tobu.call(this);
        methodInBeat(invokeId, startTime, 'public m0.c.n com.yxcorp.gifshow.profile.activity.UserProfileActivity.z1()', executor);
        return ret;
    };
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_onCreate_hcx2 = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.onCreate.overload('android.os.Bundle');
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_onCreate_hcx2.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_onCreate_hcx2.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.yxcorp.gifshow.profile.activity.UserProfileActivity.onCreate(android.os.Bundle)', executor);
    };
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_onEventMainThread_p8vq = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.onEventMainThread.overload('k.a.a.h4.i0.a');
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_onEventMainThread_p8vq.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_onEventMainThread_p8vq.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.yxcorp.gifshow.profile.activity.UserProfileActivity.onEventMainThread(k.a.a.h4.i0.a)', executor);
    };
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_onEventMainThread_mhnj = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.onEventMainThread.overload('k.a.a.h4.i0.b');
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_onEventMainThread_mhnj.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_onEventMainThread_mhnj.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.yxcorp.gifshow.profile.activity.UserProfileActivity.onEventMainThread(k.a.a.h4.i0.b)', executor);
    };
    var com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_getUrl_8ae1 = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz.getUrl.overload();
    com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_getUrl_8ae1.implementation = function() {
       
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_yxcorp_gifshow_profile_activity_UserProfileActivity_clz_method_getUrl_8ae1.call(this);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.yxcorp.gifshow.profile.activity.UserProfileActivity.getUrl()', executor);
         log(ret);
        return ret;
    };
});