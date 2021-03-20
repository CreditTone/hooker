function loadDexfile(dexfile) {
    Java.perform(function() {
        Java.openClassFile(dexfile).load();
    });
};

loadDexfile('/data/user/0/com.ss.android.ugc.aweme/radar.dex');


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
    while (new Date().getTime() < startTime) {}
};

function fastTojson(javaObject) {
    var JSONClz = Java.use("gz.com.alibaba.fastjson.JSON");
    return JSONClz.toJSONString(javaObject);
};

function object2Json(objectId) {
	var radarPropertiesClz = Java.use("gz.radar.objects.ObjectsStore");
	var obj = radarPropertiesClz.getObject(objectId+"");
	if (obj) {
		log(fastTojson(obj));
	}else{
		log("Not found this object.");
	}
}

function Object2String(objectId) {
	var radarPropertiesClz = Java.use("gz.radar.objects.ObjectsStore");
	var obj = radarPropertiesClz.getObject(objectId+"");
	if (obj) {
		log(obj.toString());
	}else{
		log("Not found this object.");
	}
}
