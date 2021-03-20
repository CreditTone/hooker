//com.tencent.karaoke.module.searchglobal.ui.a:_
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

function checkRadarDex() {
    checkLoadDex("gz.radar.ClassRadar", "/data/local/tmp/radar.dex");
    checkLoadDex("com.alibaba.fastjson.JSON", "/data/local/tmp/fastjson.dex");
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
    var reg = RegExp(eval("/" + str2 + "/"));
    if (str1 && str1.match && str1.match(reg)) {
        return true;
    } else {
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
    console.log("------------start:" + invokeId + ",executor:" + executor + ",thread:" + threadClz.currentThread().getId() + ",timestamp:" + startTime + "---------------");
    console.log(methodName);
    console.log(stackInfo.substring(20));
    console.log("------------end:" + invokeId + ",usedtime:" + (new Date().getTime() - startTime) + "---------------\n");
};

function toJSONString(obj) {
    try {
        var clz = Java.use("com.alibaba.fastjson.JSON");
        var toJSONStringMehtod = clz.toJSONString.overload("java.lang.Object");
        return toJSONStringMehtod.call(clz, obj);
    } catch(err) {
        console.log("toJSONString:" + err);
    }
    return "";
};

function logJSONString(obj) {
    console.log(toJSONString(obj));
}

function log(str) {
    console.log(str);
};

function discoverClass(className) {
    var radarClassResult = undefined;
    if (!className) {
        return radarClassResult;
    }
    Java.perform(function() {
        var radarClz = Java.use("gz.radar.ClassRadar");
        radarClassResult = radarClz.discoverClass(className);
        console.log(radarClassResult.describ());
    });
    return radarClassResult;
};

function isSubClass(className, parentClassName) {
    var isSubClass = false;
    Java.perform(function() {
        var radarClz = Java.use("gz.radar.ClassRadar");
        isSubClass = radarClz.isSubClass(className, parentClassName);
    });
    return isSubClass;
}


function getBaseContext() {
    var currentApplication = Java.use('android.app.ActivityThread').currentApplication();
    var context = currentApplication.getApplicationContext();
    return context; //Java.scheduleOnMainThread(fn):
};


function sleep(time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while (new Date().getTime() < startTime) {}
};



checkLoadDex("gz.quanminkge.Oprater", "/sdcard/xcom.tencent.karaoke/spider.dex");

Java.perform(function() {
    //如果需要使用radar请去除注释
    //checkRadarDex();
    //常用类帮你声明好
    var opraterClz = Java.use('gz.quanminkge.Oprater');
    var dataCollectorClz = Java.use('gz.quanminkge.DataCollector');
    //下面是生成的代码  从进入搜索开始只初始化一次
    var com_tencent_karaoke_module_searchglobal_ui_a_clz = Java.use('com.tencent.karaoke.module.searchglobal.ui.a');
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_init_2v6r = com_tencent_karaoke_module_searchglobal_ui_a_clz.$init.overload();
    com_tencent_karaoke_module_searchglobal_ui_a_clz_init_2v6r.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var obj = com_tencent_karaoke_module_searchglobal_ui_a_clz_init_2v6r.call(this);
        //methodInBeat(invokeId, startTime, 'public com.tencent.karaoke.module.searchglobal.ui.a()', executor);
        opraterClz.updateSearchUI(this);
        log("装配成功!");
        return obj;
    };
    var com_tencent_karaoke_common_media_player_KaraPlayerService_clz = Java.use('com.tencent.karaoke.common.media.player.KaraPlayerService');
    var com_tencent_karaoke_common_media_player_KaraPlayerService_clz_method_a_8rws = com_tencent_karaoke_common_media_player_KaraPlayerService_clz.a.overload('com.tencent.karaoke.common.media.OpusInfo');
    com_tencent_karaoke_common_media_player_KaraPlayerService_clz_method_a_8rws.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_common_media_player_KaraPlayerService_clz_method_a_8rws.call(this, v0);
        dataCollectorClz.onVideoload(v0);
        //methodInBeat(invokeId, startTime, 'void com.tencent.karaoke.common.media.player.KaraPlayerService.a(com.tencent.karaoke.common.media.OpusInfo)', executor);
    };
});

function search(keyword) {
    var opraterClz = Java.use('gz.quanminkge.Oprater');
    opraterClz.search(keyword);
}

function searchResultViewSwitchToOpus() {
    var opraterClz = Java.use('gz.quanminkge.Oprater');
    opraterClz.searchResultViewSwitchToOpus();
}


function opusPageViewSwitchToVideos() {
    var opraterClz = Java.use('gz.quanminkge.Oprater');
    opraterClz.opusPageViewSwitchToVideos();
}

function clickVideo(index) {
    var opraterClz = Java.use('gz.quanminkge.Oprater');
    opraterClz.clickVideo(index);
}


function back() {
    var opraterClz = Java.use('gz.quanminkge.Oprater');
    opraterClz.back();
}

function startMocking() {
    var opraterClz = Java.use('gz.quanminkge.Oprater');
    opraterClz.startMocking();
}

function stopMocking() {
    var opraterClz = Java.use('gz.quanminkge.Oprater');
    opraterClz.stopMocking();
}


function appendText(text) {
    Java.use("gz.xinit.Spider").appendText(text);
}

startMocking();




