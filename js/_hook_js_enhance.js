function check_load_dex(className, dexfile) {
    Java.perform(function() {
        if (!classExists(className)) {
            Java.openClassFile(dexfile).load();
            //console.log("load " + dexfile);
        }
    });
};

function class_exists(className) {
    var exists = false;
    try {
        var clz = Java.use(className);
        exists = true;
    } catch(err) {
        //console.log(err);
    }
    return exists;
};

function get_class_name(obj) {
    if (obj.getClass) {
        return obj.getClass().getName();
    }
    var javaObject = Java.use("java.lang.Object");
    return Java.cast(obj, javaObject).getClass().getName();
}

function sleep(time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while(new Date().getTime() < startTime) {}
};

function load_radar_dexfile() {
    loaded_radar_dex_flag = true;
    Java.openClassFile(dexfile).load();
};

function fast_to_json(javaObject) {
    if (!loaded_radar_dex_flag){
        load_radar_dexfile();
    }
    var JSONClz = Java.use("gz.com.alibaba.fastjson.JSON");
    return JSONClz.toJSONString(javaObject);
};

function get_pretty_string(javaObject) {
    if (!loaded_radar_dex_flag){
        load_radar_dexfile();
    }
    var XPretty = Java.use("gz.util.XPretty");
    return XPretty.getPrettyString(javaObject);
};


function get_object_field_object(javaObject, fieldName) {
    if (!loaded_radar_dex_flag){
        load_radar_dexfile();
    }
    var X = Java.use("gz.util.X");
    return X.getField(javaObject, fieldName);
};

function store_object(javaObject) {
    if (!loaded_radar_dex_flag){
        load_radar_dexfile();
    }
    try {
        var className = getClassName(javaObject);
        var ObjectsStore = Java.use("gz.radar.objects.ObjectsStore");
        var objectId = ObjectsStore.storeObject(javaObject);
        console.log(className + " ObjectsStoreId: " +objectId);
    } catch (error) {
        console.error(error);
    }
};

// 当Okhttp3Request对象是post的时候，你读取body会消耗一次，使后面的请求不成功，这时候我们就要克隆一个新的Request
function printAndCloneOkhttp3Request(ok3ReqObj) {
    var logObj = {};
    // 类名
    logObj.class = ok3ReqObj.getClass().getName();
    // URL
    logObj.url = ok3ReqObj.url().toString();
    // 方法
    logObj.method = ok3ReqObj.method();
    // 请求头
    var headers = {};
    var headerList = ok3ReqObj.headers();
    for (var i = 0; i < headerList.size(); i++) {
        headers[headerList.name(i)] = headerList.value(i);
    }
    logObj.headers = headers;
    // Tag
    var tag = ok3ReqObj.tag();
    logObj.tag = tag ? tag.toString() : null;
    // 请求体克隆
    var body = ok3ReqObj.body();
    var newRequest = null;
    var bodyContent = null;
    if (body) {
        var BufferClz = Java.use("okio.Buffer");
        var buffer = BufferClz.$new();
        body.writeTo(buffer);  // 第一次读取到流
        bodyContent = buffer.readUtf8();  // 保存内容
        var RequestBodyClz = Java.use("okhttp3.RequestBody");
        var newBody = RequestBodyClz.create(body.contentType(), bodyContent);
        // 克隆新请求体
        newRequest = ok3ReqObj.newBuilder()
            .method(ok3ReqObj.method(), newBody)
            .build();
    } else {
        newRequest = ok3ReqObj.newBuilder().build();
    }
    logObj.body = bodyContent;
    // 打印 JSON 格式
    console.log(JSON.stringify(logObj, null, 4));
    return newRequest;
}

// Response读取body会消耗一次，使后面的程序读取不成功，这时候我们就要克隆一个新的Response
function printAndCloneOkhttp3Response(ok3ResObj) {
    // 构建 JSON 数据
    var result = {
        request: {},
        response: {}
    };

    // 获取 Request 信息
    var request = ok3ResObj.request();
    result.request.url = request.url().toString();
    result.request.method = request.method();

    // 请求头
    var reqHeaders = request.headers();
    var reqHeadersJson = {};
    for (var i = 0; i < reqHeaders.size(); i++) {
        reqHeadersJson[reqHeaders.name(i)] = reqHeaders.value(i);
    }
    result.request.headers = reqHeadersJson;

    // 获取 Response 信息
    result.response.statusCode = ok3ResObj.code();

    var resHeaders = ok3ResObj.headers();
    var resHeadersJson = {};
    for (var i = 0; i < resHeaders.size(); i++) {
        resHeadersJson[resHeaders.name(i)] = resHeaders.value(i);
    }
    result.response.headers = resHeadersJson;
    var newOk3ResObj = ok3ResObj;
    // 读取 Response Body
    var body = ok3ResObj.body();
    if (body) {
        try {
            var bodyStr = body.string();
            result.response.body = bodyStr;

            // 重新封装 Body 防止内容被消耗
            var newBody = Java.use("okhttp3.ResponseBody").create(body.contentType(), Java.use("java.lang.String").$new(bodyStr));
            newOk3ResObj = ok3ResObj.newBuilder().body(newBody).build();
        } catch (e) {
            result.response.body = "[!] Failed to read body: " + e;
        }
    } else {
        result.response.body = "[!] No body";
    }

    // 将 JSON 数据格式化输出
    console.log(JSON.stringify(result, null, 4));
    return newOk3ResObj
}

