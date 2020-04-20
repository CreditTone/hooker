function toJSONString(obj) {
	try{
		var clz = Java.use("com.alibaba.fastjson.JSON");
    	var toJSONStringMehtod = clz.toJSONString.overload("java.lang.Object");
    	return toJSONStringMehtod.call(clz, obj);
	}catch (err) {
	}
    return "";
}

