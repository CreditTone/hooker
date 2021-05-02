function loadDexfile(dexfile) {
    Java.perform(function() {
        Java.openClassFile(dexfile).load();
    });
};

loadDexfile('/data/user/0/com.ttpc.bidding_hall/radar.dex');


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

function object2String(objectId) {
	var radarPropertiesClz = Java.use("gz.radar.objects.ObjectsStore");
	var obj = radarPropertiesClz.getObject(objectId+"");
	if (obj) {
		log(obj.toString());
	}else{
		log("Not found this object.");
	}
}

function getObject(objectId) {
	var radarPropertiesClz = Java.use("gz.radar.objects.ObjectsStore");
	var obj = radarPropertiesClz.getObject(objectId+"");
	return obj;
}


function getField(javaObject, fieldName) {
    var X = Java.use("gz.util.X");
    return X.getField(javaObject, fieldName);
};

