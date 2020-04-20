function toJSONString(obj) {
	var wejsonClz = Java.use('com.tencent.youtu.ytcommon.tools.wejson.WeJson');
	var wejson = wejsonClz.$new();
	var toJsonMethod = wejsonClz.toJson.overload('java.lang.Object');
	return toJsonMethod.call(wejson, obj);
};

