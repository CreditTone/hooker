//com.changba.utils.NetworkEncrypt:a
function splitX(class_method_pair) {
    var index = -1;
    var methodNames = new Array();
    var str = class_method_pair;
    while (true) {
        index = str.indexOf(",");
        if (index == -1) {
            methodNames.push(str);
            break;
        }
        methodNames.push(str.substring(0, index));
        str = class_method_pair.substring(index + 1);
    }
    return methodNames;
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

function checkRadarDex() {
    checkLoadDex("gz.radar.ClassRadar", "/data/local/tmp/radar.dex");
    checkLoadDex("com.alibaba.fastjson.JSON", "/data/local/tmp/fastjson.dex");
};

function checkLoadDex(className, dexfile) {
    Java.perform(function() {
        if (!classExists(className)) {
            Java.openClassFile(dexfile).load();
            log("load " + dexfile);
        }
    });
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
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var threadClz = Java.use("java.lang.Thread");
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    console.log("------------start:" + invokeId + ",executor:" + executor + ",thread:" + threadClz.currentThread().getId() + ",timestamp:" + timestamp + "---------------");
    console.log(methodName);
    console.log(stackInfo.substring(20));
};

function methodOutBeat(invokeId, timestamp) {
    console.log("------------end:" + invokeId + ",usedtime:" + (new Date().getTime() - timestamp) + "---------------\n");
}

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

//查找所有加载的子类
function findOffspringsClasses(parentClassName, containMethodName) {
    var radarResults = new Array();
    //Java.perform(function() {
    var index = 0;
    var count = 0;
    Java.enumerateLoadedClasses({
        onMatch: function(className) {
            count++;
            if (className.startsWith('[') || className.startsWith('org') || className.startsWith('sun') || className.startsWith('com.android') || className.startsWith('java') || className.startsWith('android') || className.startsWith('dalvik') || className.startsWith('com.google') || className.startsWith('libcore') || className.startsWith('gz.')) {
                return;
            }
            var isSubClass = isSubClass(className, parentClassName);
            if (isSubClass) {
                var resultItem = discoverClass(className);
                if (resultItem && resultItem.containsMethod(containMethodName)) {
                    radarResults[index] = resultItem;
                    index++;
                } else {
                    console.log("Do not get the resultItem:" + className);
                }
            }
        },
        onComplete: function() {}
    });
    //});
    return radarResults;
};

function getBaseContext() {
    var currentApplication = Java.use('android.app.ActivityThread').currentApplication();
    var context = currentApplication.getApplicationContext();
    return context; //Java.scheduleOnMainThread(fn):
};

//根据类名和方法名的正则表达式,匹配所有符合的类
function scanTargets(scanTargetName, containMethodName) {
    var radarResults = new Array();
    Java.perform(function() {
        if (classExists(scanTargetName)) {
            var resultItem = discoverClass(scanTargetName);
            if (resultItem) {
                radarResults[0] = resultItem;
            }
            var offsprings = findOffspringsClasses(scanTargetName, containMethodName);
            radarResults = radarResults.concat(offsprings);
        } else {
            var clzReg = eval("/" + scanTargetName + "/");
            var index = 0;
            Java.enumerateLoadedClasses({
                onMatch: function(className) {
                    if (!className) {
                        console.log(" invalid:" + className);
                        return;
                    }
                    if (clzReg.test(className)) {
                        var resultItem = discoverClass(className);
                        if (resultItem && resultItem.containsMethod(containMethodName)) {
                            radarResults[index] = resultItem;
                            index++;
                        }
                    }
                },
                onComplete: function() {}
            });
        }
    });
    console.log("Discovering done");
    return radarResults;
}

function generateFridaMethodOverload(clzVarName, radarMethod) {
    var overloadJs = "";
    if (!radarMethod.isLocal.value || radarMethod.methodName.value.indexOf("-") > -1) {
        return overloadJs;
    }
    var methodVarName = clzVarName + "_method_" + radarMethod.methodName.value + "_" + Math.random().toString(36).slice( - 4);
    overloadJs += "var " + methodVarName + "=" + clzVarName + "." + radarMethod.methodName.value + ".overload(";
    if (radarMethod.paramsNum.value > 0) {
        for (var j = 0; j < radarMethod.paramsNum.value; j++) {
            overloadJs += "'";
            overloadJs += radarMethod.paramsClasses.value[j];
            overloadJs += "'";
            if (j < (radarMethod.paramsNum.value - 1)) {
                overloadJs += ",";
            }
        }
    }
    overloadJs += ");";
    overloadJs += methodVarName;
    overloadJs += ".implementation = function(";
    var paramsJs = "";
    for (var j = 0; j < radarMethod.paramsNum.value; j++) {
        paramsJs += "v" + j;
        if (j < (radarMethod.paramsNum.value - 1)) {
            paramsJs += ",";
        }
    }
    overloadJs += paramsJs;
    overloadJs += ") {";
    if (radarMethod.returnClass.value != "void") {
        overloadJs += "var ret = ";
    }
    var handle = "this";
    if (radarMethod.isStatic.value) {
        handle = clzVarName;

    }
    overloadJs += methodVarName + ".call(" + handle;
    if (radarMethod.paramsNum.value > 0) {
        overloadJs += "," + paramsJs + ");";
    } else {
        overloadJs += ");";
    }
    overloadJs += "var invokeId = Math.random().toString(36).slice( - 8);";
    overloadJs += "var startTime = new Date().getTime();";
    if (handle == "this") {
        overloadJs += "var executor = this.hashCode();";
    } else {
        overloadJs += "var executor = '" + clzVarName + "';";
    }
    overloadJs += "methodInBeat(invokeId, startTime, '" + radarMethod.describe.value + "', executor);";
    overloadJs += "methodOutBeat(invokeId, startTime);";
    if (radarMethod.returnClass.value != "void") {
        overloadJs += "return ret;";
    }
    overloadJs += "};";
    return overloadJs;
}

//生成构造方法的overload
function generateFridaConstructorMethodOverload(clzVarName, constructorMethod) {
    var overloadJs = "";
    if (!constructorMethod.isLocal.value) {
        return overloadJs;
    }
    var constructorMethodVarName = clzVarName + "_init_" + Math.random().toString(36).slice( - 4);
    var hookConstructorMethodJs = clzVarName + ".$init.overload(";
    if (constructorMethod.paramsNum.value > 0) {
        for (var j = 0; j < constructorMethod.paramsNum.value; j++) {
            hookConstructorMethodJs += "'";
            hookConstructorMethodJs += constructorMethod.paramsClasses.value[j];
            hookConstructorMethodJs += "'";
            if (j < (constructorMethod.paramsNum.value - 1)) {
                hookConstructorMethodJs += ",";
            }
        }
    }
    hookConstructorMethodJs += ");";
    overloadJs += "var " + constructorMethodVarName + " = " + hookConstructorMethodJs;
    overloadJs += constructorMethodVarName + ".implementation = function(";
    var paramsJs = "";
    for (var j = 0; j < constructorMethod.paramsNum.value; j++) {
        paramsJs += "v" + j;
        if (j < (constructorMethod.paramsNum.value - 1)) {
            paramsJs += ",";
        }
    }
    overloadJs += paramsJs;
    overloadJs += ") {";
    overloadJs += "var obj = ";
    overloadJs += constructorMethodVarName + ".call(this";
    if (constructorMethod.paramsNum.value > 0) {
        overloadJs += "," + paramsJs + ");";
    } else {
        overloadJs += ");";
    }
    overloadJs += "var invokeId = Math.random().toString(36).slice( - 8);";
    overloadJs += "var startTime = new Date().getTime();";
    overloadJs += "var executor = this.hashCode();";
    overloadJs += "methodInBeat(invokeId, startTime, '" + constructorMethod.describe.value + "', executor);";
    overloadJs += "methodOutBeat(invokeId, startTime);";
    overloadJs += "return obj;};";
    return overloadJs;
}

//RadarClassResult  string
function generateMethodHookJs(radarClassResult, methodName) {
    if (radarClassResult.isEnum.value || radarClassResult.isInterface.value) {
        return "";
    }
    var hookJs = "";
    var hasHook = false;
    var clzHookJs = "";

    var clzVarName = radarClassResult.className.value.replace(/[\.$;]/g, "_") + "_clz";
    clzHookJs += "var " + clzVarName + " = Java.use('" + radarClassResult.className.value + "');";
    var methods = radarClassResult.methods.value;
    var hookAllMethod = methodName == "?";
    var hookAllConstructorMethod = methodName == "_";
    for (var i = 0; i < methods.length; i++) {
        var radarMethod = methods[i];
        if (hookAllMethod || radarMethod.matchName(methodName)) {
            hasHook = true;
            clzHookJs += generateFridaMethodOverload(clzVarName, radarMethod);
        }
    }

    //是否需要hook构造方法
    if (hookAllConstructorMethod) {
        hasHook = true;
        var constructorMethods = radarClassResult.constructorMethods.value;
        for (var i = 0; i < constructorMethods.length; i++) {
            clzHookJs += generateFridaConstructorMethodOverload(clzVarName, constructorMethods[i]);
        }
    }

    if (hasHook) {
        hookJs += clzHookJs;
        console.log("generating hook js for class" + radarClassResult.className.value);
    }
    return hookJs;
};

function sleep(time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while (new Date().getTime() < startTime) {}
};

function encrypt(src) {
    var ret = "";
    Java.perform(function() {
        var com_changba_utils_NetworkEncrypt_clz = Java.use('com.changba.utils.NetworkEncrypt');
        var com_changba_utils_NetworkEncrypt_clz_method_getIntsnace = com_changba_utils_NetworkEncrypt_clz.a.overload();
        var nNetworkEncrypt = com_changba_utils_NetworkEncrypt_clz_method_getIntsnace.call(com_changba_utils_NetworkEncrypt_clz);
        var com_changba_utils_NetworkEncrypt_clz_method_a_opz4 = com_changba_utils_NetworkEncrypt_clz.a.overload('java.lang.String');
        ret = com_changba_utils_NetworkEncrypt_clz_method_a_opz4.call(nNetworkEncrypt, src);
    });
    return ret;
}

Java.perform(function() {
    //如果需要使用radar请去除注释
    //checkRadarDex();
    //常用类帮你声明好
    var StringClz = Java.use('java.lang.String');
    //下面是生成的代码
    var com_changba_utils_NetworkEncrypt_clz = Java.use('com.changba.utils.NetworkEncrypt');
    var com_changba_utils_NetworkEncrypt_clz_method_getIntsnace = com_changba_utils_NetworkEncrypt_clz.a.overload();
    var nNetworkEncrypt = com_changba_utils_NetworkEncrypt_clz_method_getIntsnace.call(com_changba_utils_NetworkEncrypt_clz);
    var com_changba_utils_NetworkEncrypt_clz_method_a_opz4 = com_changba_utils_NetworkEncrypt_clz.a.overload('java.lang.String');
    var testInput = "ktvbox.php?ac=recommend.other.getSearchPageRecommendList&_rf=zlib&curuserid=294984090&imei=866174277891087&token=T3570e73aa358681&version=10.1.3.2&macaddress=00%3A87%3A36%3A19%3A6C%3A4E&org_install_channel=market_%E8%85%BE%E8%AE%AF&ismember=0&channelsrc=changba&smdeviceid=20200511171714e1fd2cccd221fdfc9d78884d309dfba80192f6e69b8e9e58&deviceid=00%3A87%3A36%3A19%3A6C%3A4E&bless=1&seret=c8F_mbOLeHWUI8wwEffRznXwr9atWK5ZKnwmFOb4SuM&_userinfo=cea2a33537";
    log("模拟调用:"+com_changba_utils_NetworkEncrypt_clz_method_a_opz4.call(nNetworkEncrypt, testInput));
    com_changba_utils_NetworkEncrypt_clz_method_a_opz4.implementation = function(v0) {
        var ret = com_changba_utils_NetworkEncrypt_clz_method_a_opz4.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        //log("输入:"+v0);
        //log("输出:"+ret);
        //methodInBeat(invokeId, startTime, 'public java.lang.String com.changba.utils.NetworkEncrypt.a(java.lang.String)', executor);
        //methodOutBeat(invokeId, startTime);
        return ret;
    };

});