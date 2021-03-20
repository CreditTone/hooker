//com.tencent.karaoke.common.media.player.d:?
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
    checkLoadDex("gz.radar.ClassRadar", "/sdcard/xradar/radar.dex");
    checkLoadDex("com.alibaba.fastjson.JSON", "/sdcard/xradar/fastjson.dex");
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
    console.log("------------start:" + invokeId + ",objectHash:" + executor + ",thread:" + threadClz.currentThread().getId() + ",timestamp:" + startTime + "---------------");
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

function scanLibExports(libname) {
    Java.perform(function() {
        var exports = Module.enumerateExportsSync(libname);
        exports.map(function(ex) {
            console.log(ex.address + ": " + ex.name);
        });
        console.log(libname + " exports num:" + exports.length);
    });
}

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
    var handle = "this";
    if (radarMethod.isStatic.value) {
        handle = clzVarName;
    }
    overloadJs += "var invokeId = Math.random().toString(36).slice( - 8);";
    overloadJs += "var startTime = new Date().getTime();";
    if (handle == "this") {
        overloadJs += "var executor = this.hashCode();";
    } else {
        overloadJs += "var executor = 'Class';";
    }
    if (radarMethod.returnClass.value != "void") {
        overloadJs += "var ret = ";
    }
    overloadJs += methodVarName + ".call(" + handle;
    if (radarMethod.paramsNum.value > 0) {
        overloadJs += "," + paramsJs + ");";
    } else {
        overloadJs += ");";
    }

    overloadJs += "methodInBeat(invokeId, startTime, '" + radarMethod.describe.value + "', executor);";
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
    overloadJs += "var invokeId = Math.random().toString(36).slice( - 8);";
    overloadJs += "var startTime = new Date().getTime();";
    overloadJs += "var executor = this.hashCode();";
    overloadJs += "var obj = ";
    overloadJs += constructorMethodVarName + ".call(this";
    if (constructorMethod.paramsNum.value > 0) {
        overloadJs += "," + paramsJs + ");";
    } else {
        overloadJs += ");";
    }
    overloadJs += "methodInBeat(invokeId, startTime, '" + constructorMethod.describe.value + "', executor);";
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

Java.perform(function() {
    //如果需要使用radar请去除注释
    checkRadarDex();
    //常用类帮你声明好
    var StringClz = Java.use('java.lang.String');

    //下面是生成的代码
    var com_tencent_karaoke_common_media_player_d_clz = Java.use('com.tencent.karaoke.common.media.player.d');
    var com_tencent_karaoke_common_media_player_d_clz_method_lambda$qkJiwdk7ipoLrtZSlWtcc1DqxzE_f6ng = com_tencent_karaoke_common_media_player_d_clz.lambda$qkJiwdk7ipoLrtZSlWtcc1DqxzE.overload('com.tencent.karaoke.common.media.player.d', 'com.tencent.karaoke.player.a.c', 'com.tencent.karaoke.common.media.player.f');
    com_tencent_karaoke_common_media_player_d_clz_method_lambda$qkJiwdk7ipoLrtZSlWtcc1DqxzE_f6ng.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_tencent_karaoke_common_media_player_d_clz_method_lambda$qkJiwdk7ipoLrtZSlWtcc1DqxzE_f6ng.call(com_tencent_karaoke_common_media_player_d_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public static void com.tencent.karaoke.common.media.player.d.lambda$qkJiwdk7ipoLrtZSlWtcc1DqxzE(com.tencent.karaoke.common.media.player.d,com.tencent.karaoke.player.a.c,com.tencent.karaoke.common.media.player.f)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_fnf5 = com_tencent_karaoke_common_media_player_d_clz.a.overload('com.tencent.component.thread.e$c');
    com_tencent_karaoke_common_media_player_d_clz_method_a_fnf5.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_a_fnf5.call(this, v0);
        methodInBeat(invokeId, startTime, 'private java.lang.Object com.tencent.karaoke.common.media.player.d.a(com.tencent.component.thread.e$c)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_lambda$vF3AZPCxBNyJsu1JBXDsmCIGQDg_0imr = com_tencent_karaoke_common_media_player_d_clz.lambda$vF3AZPCxBNyJsu1JBXDsmCIGQDg.overload('com.tencent.karaoke.common.media.player.d', 'com.tencent.karaoke.player.a.c', 'java.lang.String');
    com_tencent_karaoke_common_media_player_d_clz_method_lambda$vF3AZPCxBNyJsu1JBXDsmCIGQDg_0imr.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_tencent_karaoke_common_media_player_d_clz_method_lambda$vF3AZPCxBNyJsu1JBXDsmCIGQDg_0imr.call(com_tencent_karaoke_common_media_player_d_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public static void com.tencent.karaoke.common.media.player.d.lambda$vF3AZPCxBNyJsu1JBXDsmCIGQDg(com.tencent.karaoke.common.media.player.d,com.tencent.karaoke.player.a.c,java.lang.String)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_ub5s = com_tencent_karaoke_common_media_player_d_clz.a.overload('com.tencent.karaoke.player.a.c', 'java.lang.String');
    com_tencent_karaoke_common_media_player_d_clz_method_a_ub5s.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_a_ub5s.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.a(com.tencent.karaoke.player.a.c,java.lang.String)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_b_g8mf = com_tencent_karaoke_common_media_player_d_clz.b.overload('com.tencent.karaoke.player.a.c', 'com.tencent.karaoke.common.media.player.f');
    com_tencent_karaoke_common_media_player_d_clz_method_b_g8mf.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_b_g8mf.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.b(com.tencent.karaoke.player.a.c,com.tencent.karaoke.common.media.player.f)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_c1fh = com_tencent_karaoke_common_media_player_d_clz.a.overload('com.tencent.karaoke.player.a.c', 'com.tencent.karaoke.common.media.player.f');
    com_tencent_karaoke_common_media_player_d_clz_method_a_c1fh.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_a_c1fh.call(this, v0, v1);
       // methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.a(com.tencent.karaoke.player.a.c,com.tencent.karaoke.common.media.player.f)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_fxys = com_tencent_karaoke_common_media_player_d_clz.a.overload('int', 'java.lang.String');
    com_tencent_karaoke_common_media_player_d_clz_method_a_fxys.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_a_fxys.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'void com.tencent.karaoke.common.media.player.d.a(int,java.lang.String)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_y75a = com_tencent_karaoke_common_media_player_d_clz.a.overload('boolean');
    com_tencent_karaoke_common_media_player_d_clz_method_a_y75a.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_a_y75a.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        methodInBeat(invokeId, startTime, 'static boolean com.tencent.karaoke.common.media.player.d.a(boolean)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_lambda$Bk0PYQR4O2Au_I4jSrNVaPR7rVk_do3o = com_tencent_karaoke_common_media_player_d_clz.lambda$Bk0PYQR4O2Au_I4jSrNVaPR7rVk.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_lambda$Bk0PYQR4O2Au_I4jSrNVaPR7rVk_do3o.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_tencent_karaoke_common_media_player_d_clz_method_lambda$Bk0PYQR4O2Au_I4jSrNVaPR7rVk_do3o.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        methodInBeat(invokeId, startTime, 'public static void com.tencent.karaoke.common.media.player.d.lambda$Bk0PYQR4O2Au_I4jSrNVaPR7rVk(com.tencent.karaoke.common.media.player.d)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_b_qlpq = com_tencent_karaoke_common_media_player_d_clz.b.overload('boolean');
    com_tencent_karaoke_common_media_player_d_clz_method_b_qlpq.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_b_qlpq.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        methodInBeat(invokeId, startTime, 'static boolean com.tencent.karaoke.common.media.player.d.b(boolean)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_c_avjo = com_tencent_karaoke_common_media_player_d_clz.c.overload('com.tencent.karaoke.common.media.player.d', 'boolean');
    com_tencent_karaoke_common_media_player_d_clz_method_c_avjo.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_c_avjo.call(com_tencent_karaoke_common_media_player_d_clz, v0, v1);
        //methodInBeat(invokeId, startTime, 'static boolean com.tencent.karaoke.common.media.player.d.c(com.tencent.karaoke.common.media.player.d,boolean)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_c_m3p2 = com_tencent_karaoke_common_media_player_d_clz.c.overload('boolean');
    com_tencent_karaoke_common_media_player_d_clz_method_c_m3p2.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_c_m3p2.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.c(boolean)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_lambda$jQCZsBrq2KYUdmiWLXYfupeF43A_tzhb = com_tencent_karaoke_common_media_player_d_clz.lambda$jQCZsBrq2KYUdmiWLXYfupeF43A.overload('com.tencent.karaoke.common.media.player.d', 'com.tencent.karaoke.player.a.c', 'com.tencent.karaoke.common.media.player.f');
    com_tencent_karaoke_common_media_player_d_clz_method_lambda$jQCZsBrq2KYUdmiWLXYfupeF43A_tzhb.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_tencent_karaoke_common_media_player_d_clz_method_lambda$jQCZsBrq2KYUdmiWLXYfupeF43A_tzhb.call(com_tencent_karaoke_common_media_player_d_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public static void com.tencent.karaoke.common.media.player.d.lambda$jQCZsBrq2KYUdmiWLXYfupeF43A(com.tencent.karaoke.common.media.player.d,com.tencent.karaoke.player.a.c,com.tencent.karaoke.common.media.player.f)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_71z8 = com_tencent_karaoke_common_media_player_d_clz.a.overload('com.tencent.karaoke.common.media.OpusInfo');
    com_tencent_karaoke_common_media_player_d_clz_method_a_71z8.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_a_71z8.call(this, v0);
        methodInBeat(invokeId, startTime, 'void com.tencent.karaoke.common.media.player.d.a(com.tencent.karaoke.common.media.OpusInfo)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_o42f = com_tencent_karaoke_common_media_player_d_clz.a.overload('android.view.SurfaceHolder');
    com_tencent_karaoke_common_media_player_d_clz_method_a_o42f.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_a_o42f.call(this, v0);
        methodInBeat(invokeId, startTime, 'boolean com.tencent.karaoke.common.media.player.d.a(android.view.SurfaceHolder)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_lambda$jVtiM9ZvdMd4YSY7aCDbptrDdWA_exyp = com_tencent_karaoke_common_media_player_d_clz.lambda$jVtiM9ZvdMd4YSY7aCDbptrDdWA.overload('com.tencent.karaoke.common.media.player.d', 'int');
    com_tencent_karaoke_common_media_player_d_clz_method_lambda$jVtiM9ZvdMd4YSY7aCDbptrDdWA_exyp.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_tencent_karaoke_common_media_player_d_clz_method_lambda$jVtiM9ZvdMd4YSY7aCDbptrDdWA_exyp.call(com_tencent_karaoke_common_media_player_d_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static void com.tencent.karaoke.common.media.player.d.lambda$jVtiM9ZvdMd4YSY7aCDbptrDdWA(com.tencent.karaoke.common.media.player.d,int)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_b_btsn = com_tencent_karaoke_common_media_player_d_clz.b.overload('com.tencent.karaoke.common.media.OpusInfo');
    com_tencent_karaoke_common_media_player_d_clz_method_b_btsn.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_b_btsn.call(this, v0);
        methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.common.media.player.d.b(com.tencent.karaoke.common.media.OpusInfo)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_65d4 = com_tencent_karaoke_common_media_player_d_clz.a.overload('com.tencent.karaoke.player.a.c', 'boolean', 'java.lang.String');
    com_tencent_karaoke_common_media_player_d_clz_method_a_65d4.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_a_65d4.call(this, v0, v1, v2);
        log(v2);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.a(com.tencent.karaoke.player.a.c,boolean,java.lang.String)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_bs1q = com_tencent_karaoke_common_media_player_d_clz.a.overload('float', 'float');
    com_tencent_karaoke_common_media_player_d_clz_method_a_bs1q.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_a_bs1q.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.common.media.player.d.a(float,float)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_lambda$AcC_ernl7yyjN9y4k3tb24z84zE_p0bq = com_tencent_karaoke_common_media_player_d_clz.lambda$AcC_ernl7yyjN9y4k3tb24z84zE.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_lambda$AcC_ernl7yyjN9y4k3tb24z84zE_p0bq.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_tencent_karaoke_common_media_player_d_clz_method_lambda$AcC_ernl7yyjN9y4k3tb24z84zE_p0bq.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        methodInBeat(invokeId, startTime, 'public static void com.tencent.karaoke.common.media.player.d.lambda$AcC_ernl7yyjN9y4k3tb24z84zE(com.tencent.karaoke.common.media.player.d)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_5i8k = com_tencent_karaoke_common_media_player_d_clz.a.overload('com.tencent.karaoke.player.a.c', 'com.tencent.karaoke.common.media.audio.messagequeue.a', 'java.lang.String');
    com_tencent_karaoke_common_media_player_d_clz_method_a_5i8k.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_a_5i8k.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.a(com.tencent.karaoke.player.a.c,com.tencent.karaoke.common.media.audio.messagequeue.a,java.lang.String)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_r71u = com_tencent_karaoke_common_media_player_d_clz.a.overload('com.tencent.karaoke.common.media.player.d', 'com.tencent.karaoke.common.media.player.b');
    com_tencent_karaoke_common_media_player_d_clz_method_a_r71u.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_a_r71u.call(com_tencent_karaoke_common_media_player_d_clz, v0, v1);
        //methodInBeat(invokeId, startTime, 'static com.tencent.karaoke.common.media.player.b com.tencent.karaoke.common.media.player.d.a(com.tencent.karaoke.common.media.player.d,com.tencent.karaoke.common.media.player.b)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_b_f1wi = com_tencent_karaoke_common_media_player_d_clz.b.overload('int', 'int');
    com_tencent_karaoke_common_media_player_d_clz_method_b_f1wi.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_b_f1wi.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'private boolean com.tencent.karaoke.common.media.player.d.b(int,int)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_ipoi = com_tencent_karaoke_common_media_player_d_clz.a.overload('int', 'int');
    com_tencent_karaoke_common_media_player_d_clz_method_a_ipoi.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_a_ipoi.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.common.media.player.d.a(int,int)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_6sxh = com_tencent_karaoke_common_media_player_d_clz.a.overload('com.tencent.karaoke.common.media.player.d', 'boolean');
    com_tencent_karaoke_common_media_player_d_clz_method_a_6sxh.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_a_6sxh.call(com_tencent_karaoke_common_media_player_d_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static boolean com.tencent.karaoke.common.media.player.d.a(com.tencent.karaoke.common.media.player.d,boolean)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_xny7 = com_tencent_karaoke_common_media_player_d_clz.a.overload('com.tencent.karaoke.player.a.c');
    com_tencent_karaoke_common_media_player_d_clz_method_a_xny7.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_a_xny7.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.a(com.tencent.karaoke.player.a.c)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_b_5xne = com_tencent_karaoke_common_media_player_d_clz.b.overload('com.tencent.karaoke.common.media.player.d', 'boolean');
    com_tencent_karaoke_common_media_player_d_clz_method_b_5xne.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_b_5xne.call(com_tencent_karaoke_common_media_player_d_clz, v0, v1);
        //methodInBeat(invokeId, startTime, 'static boolean com.tencent.karaoke.common.media.player.d.b(com.tencent.karaoke.common.media.player.d,boolean)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_b_0mep = com_tencent_karaoke_common_media_player_d_clz.b.overload('com.tencent.karaoke.common.media.player.d', 'int');
    com_tencent_karaoke_common_media_player_d_clz_method_b_0mep.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_tencent_karaoke_common_media_player_d_clz_method_b_0mep.call(com_tencent_karaoke_common_media_player_d_clz, v0, v1);
        //methodInBeat(invokeId, startTime, 'static void com.tencent.karaoke.common.media.player.d.b(com.tencent.karaoke.common.media.player.d,int)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_1i4i = com_tencent_karaoke_common_media_player_d_clz.a.overload('com.tencent.karaoke.common.media.player.d', 'int');
    com_tencent_karaoke_common_media_player_d_clz_method_a_1i4i.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_tencent_karaoke_common_media_player_d_clz_method_a_1i4i.call(com_tencent_karaoke_common_media_player_d_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static void com.tencent.karaoke.common.media.player.d.a(com.tencent.karaoke.common.media.player.d,int)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_cncp = com_tencent_karaoke_common_media_player_d_clz.a.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'int', 'com.tencent.karaoke.common.media.player.i', 'boolean');
    com_tencent_karaoke_common_media_player_d_clz_method_a_cncp.implementation = function(v0, v1, v2, v3, v4, v5) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_a_cncp.call(this, v0, v1, v2, v3, v4, v5);
        methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.common.media.player.d.a(java.lang.String,java.lang.String,java.lang.String,int,com.tencent.karaoke.common.media.player.i,boolean)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_2aga = com_tencent_karaoke_common_media_player_d_clz.a.overload('com.tencent.karaoke.common.media.player.f', 'com.tencent.karaoke.player.a.c', 'com.tencent.karaoke.common.media.audio.messagequeue.a', 'java.lang.String');
    com_tencent_karaoke_common_media_player_d_clz_method_a_2aga.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_a_2aga.call(this, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.a(com.tencent.karaoke.common.media.player.f,com.tencent.karaoke.player.a.c,com.tencent.karaoke.common.media.audio.messagequeue.a,java.lang.String)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_A_hr1m = com_tencent_karaoke_common_media_player_d_clz.A.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_A_hr1m.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_A_hr1m.call(this);
        methodInBeat(invokeId, startTime, 'private boolean com.tencent.karaoke.common.media.player.d.A()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_B_3a0k = com_tencent_karaoke_common_media_player_d_clz.B.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_B_3a0k.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_B_3a0k.call(this);
        //methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.B()', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_C_6e8f = com_tencent_karaoke_common_media_player_d_clz.C.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_C_6e8f.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_C_6e8f.call(this);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.C()', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_D_mwev = com_tencent_karaoke_common_media_player_d_clz.D.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_D_mwev.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_D_mwev.call(this);
        //methodInBeat(invokeId, startTime, 'private boolean com.tencent.karaoke.common.media.player.d.D()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_E_8vke = com_tencent_karaoke_common_media_player_d_clz.E.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_E_8vke.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_E_8vke.call(this);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.E()', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_F_sxyp = com_tencent_karaoke_common_media_player_d_clz.F.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_F_sxyp.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_F_sxyp.call(this);
        methodInBeat(invokeId, startTime, 'private com.tencent.karaoke.common.media.audio.b$a com.tencent.karaoke.common.media.player.d.F()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_G_bnse = com_tencent_karaoke_common_media_player_d_clz.G.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_G_bnse.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_G_bnse.call(this);
        //methodInBeat(invokeId, startTime, 'private com.tencent.karaoke.common.media.proxy.f com.tencent.karaoke.common.media.player.d.G()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_H_lcva = com_tencent_karaoke_common_media_player_d_clz.H.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_H_lcva.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_H_lcva.call(this);
        //methodInBeat(invokeId, startTime, 'private com.tencent.karaoke.common.media.proxy.d com.tencent.karaoke.common.media.player.d.H()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_I_mfpi = com_tencent_karaoke_common_media_player_d_clz.I.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_I_mfpi.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_I_mfpi.call(this);
        //methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.I()', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_J_d9a4 = com_tencent_karaoke_common_media_player_d_clz.J.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_J_d9a4.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_J_d9a4.call(this);
        //methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.J()', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_K_er8k = com_tencent_karaoke_common_media_player_d_clz.K.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_K_er8k.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_K_er8k.call(this);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.K()', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_L_6mgv = com_tencent_karaoke_common_media_player_d_clz.L.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_L_6mgv.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_L_6mgv.call(this);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.L()', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_M_lenj = com_tencent_karaoke_common_media_player_d_clz.M.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_M_lenj.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_M_lenj.call(this);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.M()', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_N_3xnj = com_tencent_karaoke_common_media_player_d_clz.N.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_N_3xnj.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_N_3xnj.call(this);
        //methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.N()', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_lambda$uk7SMHNloey93mj7jY6AmtKMiCw_x4su = com_tencent_karaoke_common_media_player_d_clz.lambda$uk7SMHNloey93mj7jY6AmtKMiCw.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_lambda$uk7SMHNloey93mj7jY6AmtKMiCw_x4su.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_tencent_karaoke_common_media_player_d_clz_method_lambda$uk7SMHNloey93mj7jY6AmtKMiCw_x4su.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        methodInBeat(invokeId, startTime, 'public static void com.tencent.karaoke.common.media.player.d.lambda$uk7SMHNloey93mj7jY6AmtKMiCw(com.tencent.karaoke.common.media.player.d)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_O_7204 = com_tencent_karaoke_common_media_player_d_clz.O.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_O_7204.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_O_7204.call(this);
        //methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.O()', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_P_p7p4 = com_tencent_karaoke_common_media_player_d_clz.P.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_P_p7p4.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_P_p7p4.call(this);
        //methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.P()', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_8h2t = com_tencent_karaoke_common_media_player_d_clz.a.overload('com.tencent.karaoke.common.media.player.d', 'int', 'int');
    com_tencent_karaoke_common_media_player_d_clz_method_a_8h2t.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_a_8h2t.call(com_tencent_karaoke_common_media_player_d_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'static boolean com.tencent.karaoke.common.media.player.d.a(com.tencent.karaoke.common.media.player.d,int,int)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_lambda$BhUDdFBvRU6SyXXibZkBR4kc4gw_wg76 = com_tencent_karaoke_common_media_player_d_clz.lambda$BhUDdFBvRU6SyXXibZkBR4kc4gw.overload('com.tencent.karaoke.common.media.player.d', 'com.tencent.karaoke.player.a.c', 'com.tencent.karaoke.player.a.d', 'int', 'int');
    com_tencent_karaoke_common_media_player_d_clz_method_lambda$BhUDdFBvRU6SyXXibZkBR4kc4gw_wg76.implementation = function(v0, v1, v2, v3, v4) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_lambda$BhUDdFBvRU6SyXXibZkBR4kc4gw_wg76.call(com_tencent_karaoke_common_media_player_d_clz, v0, v1, v2, v3, v4);
        methodInBeat(invokeId, startTime, 'public static boolean com.tencent.karaoke.common.media.player.d.lambda$BhUDdFBvRU6SyXXibZkBR4kc4gw(com.tencent.karaoke.common.media.player.d,com.tencent.karaoke.player.a.c,com.tencent.karaoke.player.a.d,int,int)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_ubfa = com_tencent_karaoke_common_media_player_d_clz.a.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'int', 'com.tencent.karaoke.common.media.player.i');
    com_tencent_karaoke_common_media_player_d_clz_method_a_ubfa.implementation = function(v0, v1, v2, v3, v4) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_a_ubfa.call(this, v0, v1, v2, v3, v4);
        methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.common.media.player.d.a(java.lang.String,java.lang.String,java.lang.String,int,com.tencent.karaoke.common.media.player.i)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_nm77 = com_tencent_karaoke_common_media_player_d_clz.a.overload('com.tencent.karaoke.player.b.a');
    com_tencent_karaoke_common_media_player_d_clz_method_a_nm77.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_a_nm77.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.common.media.player.d.a(com.tencent.karaoke.player.b.a)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_5les = com_tencent_karaoke_common_media_player_d_clz.a.overload('com.tencent.karaoke.common.media.player.a.d');
    com_tencent_karaoke_common_media_player_d_clz_method_a_5les.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_a_5les.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.common.media.player.d.a(com.tencent.karaoke.common.media.player.a.d)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_hvi2 = com_tencent_karaoke_common_media_player_d_clz.a.overload('com.tencent.karaoke.player.b.i');
    com_tencent_karaoke_common_media_player_d_clz_method_a_hvi2.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_a_hvi2.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.common.media.player.d.a(com.tencent.karaoke.player.b.i)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_self = com_tencent_karaoke_common_media_player_d_clz.a.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_a_self.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_a_self.call(this);
        methodInBeat(invokeId, startTime, 'void com.tencent.karaoke.common.media.player.d.a()', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_b_dw4g = com_tencent_karaoke_common_media_player_d_clz.b.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_b_dw4g.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_b_dw4g.call(this);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.common.media.player.d.b()', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_c_frln = com_tencent_karaoke_common_media_player_d_clz.c.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_c_frln.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_c_frln.call(this);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.common.media.player.d.c()', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_d_vsw5 = com_tencent_karaoke_common_media_player_d_clz.d.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_d_vsw5.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_d_vsw5.call(this);
        //methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.common.media.player.d.d()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_e_lo24 = com_tencent_karaoke_common_media_player_d_clz.e.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_e_lo24.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_e_lo24.call(this);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.common.media.player.d.e()', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_f_yc52 = com_tencent_karaoke_common_media_player_d_clz.f.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_f_yc52.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_f_yc52.call(this);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.common.media.player.d.f()', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_g_iddi = com_tencent_karaoke_common_media_player_d_clz.g.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_g_iddi.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_g_iddi.call(this);
        //methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.common.media.player.d.g()', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_h_ekxn = com_tencent_karaoke_common_media_player_d_clz.h.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_h_ekxn.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_h_ekxn.call(this);
        methodInBeat(invokeId, startTime, 'public long com.tencent.karaoke.common.media.player.d.h()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_i_55x4 = com_tencent_karaoke_common_media_player_d_clz.i.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_i_55x4.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_i_55x4.call(this);
        //methodInBeat(invokeId, startTime, 'public com.tencent.karaoke.common.media.OpusInfo com.tencent.karaoke.common.media.player.d.i()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_j_utw3 = com_tencent_karaoke_common_media_player_d_clz.j.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_j_utw3.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_j_utw3.call(this);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.common.media.player.d.j()', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_k_x2wg = com_tencent_karaoke_common_media_player_d_clz.k.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_k_x2wg.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_k_x2wg.call(this);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.common.media.player.d.k()', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_hwbe = com_tencent_karaoke_common_media_player_d_clz.a.overload('java.lang.String', 'java.lang.String', 'int', 'int', 'boolean', 'java.lang.String', 'java.lang.String');
    com_tencent_karaoke_common_media_player_d_clz_method_a_hwbe.implementation = function(v0, v1, v2, v3, v4, v5, v6) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_a_hwbe.call(this, v0, v1, v2, v3, v4, v5, v6);
        log(v0);
        log(v1);
        log(v5);
        log(v6);
        methodInBeat(invokeId, startTime, 'private int com.tencent.karaoke.common.media.player.d.a(java.lang.String,java.lang.String,int,int,boolean,java.lang.String,java.lang.String)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_l_1v9o = com_tencent_karaoke_common_media_player_d_clz.l.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_l_1v9o.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_l_1v9o.call(this);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.common.media.player.d.l()', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_m_o7dd = com_tencent_karaoke_common_media_player_d_clz.m.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_m_o7dd.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_m_o7dd.call(this);
        //methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.common.media.player.d.m()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_n_pcgd = com_tencent_karaoke_common_media_player_d_clz.n.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_n_pcgd.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_n_pcgd.call(this);
        //methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.common.media.player.d.n()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_o_m0ba = com_tencent_karaoke_common_media_player_d_clz.o.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_o_m0ba.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_o_m0ba.call(this);
        //methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.common.media.player.d.o()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_p_005q = com_tencent_karaoke_common_media_player_d_clz.p.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_p_005q.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_p_005q.call(this);
        //methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.common.media.player.d.p()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_q_kwo9 = com_tencent_karaoke_common_media_player_d_clz.q.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_q_kwo9.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_q_kwo9.call(this);
        //methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.common.media.player.d.q()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_r_ezrh = com_tencent_karaoke_common_media_player_d_clz.r.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_r_ezrh.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_r_ezrh.call(this);
        //methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.common.media.player.d.r()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_s_csge = com_tencent_karaoke_common_media_player_d_clz.s.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_s_csge.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_s_csge.call(this);
        //methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.common.media.player.d.s()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_t_nujn = com_tencent_karaoke_common_media_player_d_clz.t.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_t_nujn.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_t_nujn.call(this);
        //methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.common.media.player.d.t()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_u_jyjh = com_tencent_karaoke_common_media_player_d_clz.u.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_u_jyjh.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_u_jyjh.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.common.media.player.d.u()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_v_x778 = com_tencent_karaoke_common_media_player_d_clz.v.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_v_x778.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_v_x778.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.common.media.player.d.v()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_u9e8 = com_tencent_karaoke_common_media_player_d_clz.a.overload('java.lang.String');
    com_tencent_karaoke_common_media_player_d_clz_method_a_u9e8.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_a_u9e8.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.a(java.lang.String)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_lambda$k2GJME8PNSE11jW5opDupfNU430_ts4p = com_tencent_karaoke_common_media_player_d_clz.lambda$k2GJME8PNSE11jW5opDupfNU430.overload('com.tencent.karaoke.common.media.player.d', 'com.tencent.karaoke.player.a.c', 'boolean', 'java.lang.String');
    com_tencent_karaoke_common_media_player_d_clz_method_lambda$k2GJME8PNSE11jW5opDupfNU430_ts4p.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_tencent_karaoke_common_media_player_d_clz_method_lambda$k2GJME8PNSE11jW5opDupfNU430_ts4p.call(com_tencent_karaoke_common_media_player_d_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public static void com.tencent.karaoke.common.media.player.d.lambda$k2GJME8PNSE11jW5opDupfNU430(com.tencent.karaoke.common.media.player.d,com.tencent.karaoke.player.a.c,boolean,java.lang.String)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_w_g83b = com_tencent_karaoke_common_media_player_d_clz.w.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_w_g83b.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_w_g83b.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.common.media.player.d.w()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_b_jrqn = com_tencent_karaoke_common_media_player_d_clz.b.overload('java.lang.String');
    com_tencent_karaoke_common_media_player_d_clz_method_b_jrqn.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_b_jrqn.call(this, v0);
        log(v0);
        methodInBeat(invokeId, startTime, 'private java.lang.String com.tencent.karaoke.common.media.player.d.b(java.lang.String)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_x_fmjs = com_tencent_karaoke_common_media_player_d_clz.x.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_x_fmjs.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_x_fmjs.call(com_tencent_karaoke_common_media_player_d_clz);
        //methodInBeat(invokeId, startTime, 'static int com.tencent.karaoke.common.media.player.d.x()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_y_ji6a = com_tencent_karaoke_common_media_player_d_clz.y.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_y_ji6a.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_y_ji6a.call(com_tencent_karaoke_common_media_player_d_clz);
       // methodInBeat(invokeId, startTime, 'static int com.tencent.karaoke.common.media.player.d.y()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_z_dcmz = com_tencent_karaoke_common_media_player_d_clz.z.overload();
    com_tencent_karaoke_common_media_player_d_clz_method_z_dcmz.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_z_dcmz.call(this);
       // methodInBeat(invokeId, startTime, 'private com.tencent.karaoke.audiobasesdk.KaraMediaCrypto com.tencent.karaoke.common.media.player.d.z()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_c_u4tw = com_tencent_karaoke_common_media_player_d_clz.c.overload('int', 'com.tencent.component.thread.e$c');
    com_tencent_karaoke_common_media_player_d_clz_method_c_u4tw.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_c_u4tw.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'private java.lang.Object com.tencent.karaoke.common.media.player.d.c(int,com.tencent.component.thread.e$c)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_p_j13i = com_tencent_karaoke_common_media_player_d_clz.p.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_p_j13i.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_p_j13i.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        methodInBeat(invokeId, startTime, 'static com.tencent.karaoke.common.media.proxy.e com.tencent.karaoke.common.media.player.d.p(com.tencent.karaoke.common.media.player.d)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_q_wwuj = com_tencent_karaoke_common_media_player_d_clz.q.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_q_wwuj.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_q_wwuj.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        //methodInBeat(invokeId, startTime, 'static int com.tencent.karaoke.common.media.player.d.q(com.tencent.karaoke.common.media.player.d)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_n_u808 = com_tencent_karaoke_common_media_player_d_clz.n.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_n_u808.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_n_u808.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        methodInBeat(invokeId, startTime, 'static int com.tencent.karaoke.common.media.player.d.n(com.tencent.karaoke.common.media.player.d)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_o_0cka = com_tencent_karaoke_common_media_player_d_clz.o.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_o_0cka.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_o_0cka.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        methodInBeat(invokeId, startTime, 'static com.tencent.karaoke.player.b.g com.tencent.karaoke.common.media.player.d.o(com.tencent.karaoke.common.media.player.d)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_l_y1mj = com_tencent_karaoke_common_media_player_d_clz.l.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_l_y1mj.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_l_y1mj.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        methodInBeat(invokeId, startTime, 'static java.lang.String com.tencent.karaoke.common.media.player.d.l(com.tencent.karaoke.common.media.player.d)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_m_qlxf = com_tencent_karaoke_common_media_player_d_clz.m.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_m_qlxf.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_m_qlxf.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        methodInBeat(invokeId, startTime, 'static java.lang.String com.tencent.karaoke.common.media.player.d.m(com.tencent.karaoke.common.media.player.d)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_tybk = com_tencent_karaoke_common_media_player_d_clz.a.overload('int', 'com.tencent.component.thread.e$c');
    com_tencent_karaoke_common_media_player_d_clz_method_a_tybk.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_a_tybk.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'private java.lang.Object com.tencent.karaoke.common.media.player.d.a(int,com.tencent.component.thread.e$c)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_j_4lp9 = com_tencent_karaoke_common_media_player_d_clz.j.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_j_4lp9.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_j_4lp9.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        methodInBeat(invokeId, startTime, 'static boolean com.tencent.karaoke.common.media.player.d.j(com.tencent.karaoke.common.media.player.d)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_b_0z1x = com_tencent_karaoke_common_media_player_d_clz.b.overload('int', 'com.tencent.component.thread.e$c');
    com_tencent_karaoke_common_media_player_d_clz_method_b_0z1x.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_b_0z1x.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'private java.lang.Object com.tencent.karaoke.common.media.player.d.b(int,com.tencent.component.thread.e$c)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_k_h60q = com_tencent_karaoke_common_media_player_d_clz.k.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_k_h60q.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_k_h60q.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        //methodInBeat(invokeId, startTime, 'static int[] com.tencent.karaoke.common.media.player.d.k(com.tencent.karaoke.common.media.player.d)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_c_ig5f = com_tencent_karaoke_common_media_player_d_clz.c.overload('java.lang.String');
    com_tencent_karaoke_common_media_player_d_clz_method_c_ig5f.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_c_ig5f.call(this, v0);
        log("呵呵:"+v0);
        methodInBeat(invokeId, startTime, 'private java.lang.String com.tencent.karaoke.common.media.player.d.c(java.lang.String)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_h_7xn9 = com_tencent_karaoke_common_media_player_d_clz.h.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_h_7xn9.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_h_7xn9.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        methodInBeat(invokeId, startTime, 'static boolean com.tencent.karaoke.common.media.player.d.h(com.tencent.karaoke.common.media.player.d)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_i_6gc6 = com_tencent_karaoke_common_media_player_d_clz.i.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_i_6gc6.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_i_6gc6.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        methodInBeat(invokeId, startTime, 'static long com.tencent.karaoke.common.media.player.d.i(com.tencent.karaoke.common.media.player.d)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_f_k7tp = com_tencent_karaoke_common_media_player_d_clz.f.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_f_k7tp.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_f_k7tp.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        methodInBeat(invokeId, startTime, 'static boolean com.tencent.karaoke.common.media.player.d.f(com.tencent.karaoke.common.media.player.d)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_g_juwj = com_tencent_karaoke_common_media_player_d_clz.g.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_g_juwj.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_g_juwj.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        methodInBeat(invokeId, startTime, 'static java.lang.String com.tencent.karaoke.common.media.player.d.g(com.tencent.karaoke.common.media.player.d)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_d_2l2s = com_tencent_karaoke_common_media_player_d_clz.d.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_d_2l2s.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_d_2l2s.call(com_tencent_karaoke_common_media_player_d_clz, v0);
       // methodInBeat(invokeId, startTime, 'static com.tencent.karaoke.common.media.proxy.f com.tencent.karaoke.common.media.player.d.d(com.tencent.karaoke.common.media.player.d)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_lambda$9yjXpeXdjo9IsjmmGA2HvjDhXqI_ayap = com_tencent_karaoke_common_media_player_d_clz.lambda$9yjXpeXdjo9IsjmmGA2HvjDhXqI.overload('com.tencent.karaoke.common.media.player.d', 'com.tencent.karaoke.common.media.player.f', 'com.tencent.karaoke.player.a.c', 'com.tencent.karaoke.common.media.audio.messagequeue.a', 'java.lang.String');
    com_tencent_karaoke_common_media_player_d_clz_method_lambda$9yjXpeXdjo9IsjmmGA2HvjDhXqI_ayap.implementation = function(v0, v1, v2, v3, v4) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_tencent_karaoke_common_media_player_d_clz_method_lambda$9yjXpeXdjo9IsjmmGA2HvjDhXqI_ayap.call(com_tencent_karaoke_common_media_player_d_clz, v0, v1, v2, v3, v4);
        methodInBeat(invokeId, startTime, 'public static void com.tencent.karaoke.common.media.player.d.lambda$9yjXpeXdjo9IsjmmGA2HvjDhXqI(com.tencent.karaoke.common.media.player.d,com.tencent.karaoke.common.media.player.f,com.tencent.karaoke.player.a.c,com.tencent.karaoke.common.media.audio.messagequeue.a,java.lang.String)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_e_u52g = com_tencent_karaoke_common_media_player_d_clz.e.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_e_u52g.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_e_u52g.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        methodInBeat(invokeId, startTime, 'static android.os.Handler com.tencent.karaoke.common.media.player.d.e(com.tencent.karaoke.common.media.player.d)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_b_qzt9 = com_tencent_karaoke_common_media_player_d_clz.b.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_b_qzt9.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_b_qzt9.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        //methodInBeat(invokeId, startTime, 'static java.lang.Object com.tencent.karaoke.common.media.player.d.b(com.tencent.karaoke.common.media.player.d)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_c_f1ig = com_tencent_karaoke_common_media_player_d_clz.c.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_c_f1ig.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_c_f1ig.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        //methodInBeat(invokeId, startTime, 'static com.tencent.karaoke.common.media.player.a.d com.tencent.karaoke.common.media.player.d.c(com.tencent.karaoke.common.media.player.d)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_bk1d = com_tencent_karaoke_common_media_player_d_clz.a.overload('int', 'int', 'com.tencent.component.thread.e$c');
    com_tencent_karaoke_common_media_player_d_clz_method_a_bk1d.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_a_bk1d.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'private java.lang.Object com.tencent.karaoke.common.media.player.d.a(int,int,com.tencent.component.thread.e$c)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_9ei8 = com_tencent_karaoke_common_media_player_d_clz.a.overload('com.tencent.karaoke.player.a.c', 'com.tencent.karaoke.common.media.player.f', 'com.tencent.karaoke.common.media.audio.messagequeue.a');
    com_tencent_karaoke_common_media_player_d_clz_method_a_9ei8.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_a_9ei8.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.a(com.tencent.karaoke.player.a.c,com.tencent.karaoke.common.media.player.f,com.tencent.karaoke.common.media.audio.messagequeue.a)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_lambda$8DPVquOIE1mo3g8gEeiJyok3dzg_srwn = com_tencent_karaoke_common_media_player_d_clz.lambda$8DPVquOIE1mo3g8gEeiJyok3dzg.overload('com.tencent.karaoke.common.media.player.d', 'com.tencent.component.thread.e$c');
    com_tencent_karaoke_common_media_player_d_clz_method_lambda$8DPVquOIE1mo3g8gEeiJyok3dzg_srwn.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_lambda$8DPVquOIE1mo3g8gEeiJyok3dzg_srwn.call(com_tencent_karaoke_common_media_player_d_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'public static java.lang.Object com.tencent.karaoke.common.media.player.d.lambda$8DPVquOIE1mo3g8gEeiJyok3dzg(com.tencent.karaoke.common.media.player.d,com.tencent.component.thread.e$c)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_vull = com_tencent_karaoke_common_media_player_d_clz.a.overload('com.tencent.karaoke.player.a.c', 'com.tencent.karaoke.player.a.d', 'int', 'int');
    com_tencent_karaoke_common_media_player_d_clz_method_a_vull.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_a_vull.call(this, v0, v1, v2, v3);
        //methodInBeat(invokeId, startTime, 'private boolean com.tencent.karaoke.common.media.player.d.a(com.tencent.karaoke.player.a.c,com.tencent.karaoke.player.a.d,int,int)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_t_faxy = com_tencent_karaoke_common_media_player_d_clz.t.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_t_faxy.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_t_faxy.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        methodInBeat(invokeId, startTime, 'static com.tencent.karaoke.common.media.player.b com.tencent.karaoke.common.media.player.d.t(com.tencent.karaoke.common.media.player.d)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_u_hc08 = com_tencent_karaoke_common_media_player_d_clz.u.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_u_hc08.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_tencent_karaoke_common_media_player_d_clz_method_u_hc08.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        methodInBeat(invokeId, startTime, 'static void com.tencent.karaoke.common.media.player.d.u(com.tencent.karaoke.common.media.player.d)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_inl3 = com_tencent_karaoke_common_media_player_d_clz.a.overload('com.tencent.karaoke.player.b.k');
    com_tencent_karaoke_common_media_player_d_clz_method_a_inl3.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_a_inl3.call(this, v0);
        logJSONString(v0);
        methodInBeat(invokeId, startTime, 'void com.tencent.karaoke.common.media.player.d.a(com.tencent.karaoke.player.b.k)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_r_y20u = com_tencent_karaoke_common_media_player_d_clz.r.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_r_y20u.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_r_y20u.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        //methodInBeat(invokeId, startTime, 'static int com.tencent.karaoke.common.media.player.d.r(com.tencent.karaoke.common.media.player.d)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_s_7xes = com_tencent_karaoke_common_media_player_d_clz.s.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_s_7xes.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_s_7xes.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        //methodInBeat(invokeId, startTime, 'static com.tencent.karaoke.audiobasesdk.KaraMediaCrypto com.tencent.karaoke.common.media.player.d.s(com.tencent.karaoke.common.media.player.d)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_lambda$RHm6bA2z32KBaEPM18W60l27njk_0p4a = com_tencent_karaoke_common_media_player_d_clz.lambda$RHm6bA2z32KBaEPM18W60l27njk.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_lambda$RHm6bA2z32KBaEPM18W60l27njk_0p4a.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_tencent_karaoke_common_media_player_d_clz_method_lambda$RHm6bA2z32KBaEPM18W60l27njk_0p4a.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        methodInBeat(invokeId, startTime, 'public static void com.tencent.karaoke.common.media.player.d.lambda$RHm6bA2z32KBaEPM18W60l27njk(com.tencent.karaoke.common.media.player.d)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_lambda$EMA8Z9kcI8y_6ADloJ1GUnXRmEA_gque = com_tencent_karaoke_common_media_player_d_clz.lambda$EMA8Z9kcI8y_6ADloJ1GUnXRmEA.overload('com.tencent.karaoke.common.media.player.d', 'int', 'int', 'com.tencent.component.thread.e$c');
    com_tencent_karaoke_common_media_player_d_clz_method_lambda$EMA8Z9kcI8y_6ADloJ1GUnXRmEA_gque.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_lambda$EMA8Z9kcI8y_6ADloJ1GUnXRmEA_gque.call(com_tencent_karaoke_common_media_player_d_clz, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public static java.lang.Object com.tencent.karaoke.common.media.player.d.lambda$EMA8Z9kcI8y_6ADloJ1GUnXRmEA(com.tencent.karaoke.common.media.player.d,int,int,com.tencent.component.thread.e$c)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_yhz6 = com_tencent_karaoke_common_media_player_d_clz.a.overload('android.view.TextureView');
    com_tencent_karaoke_common_media_player_d_clz_method_a_yhz6.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_a_yhz6.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.common.media.player.d.a(android.view.TextureView)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_6re9 = com_tencent_karaoke_common_media_player_d_clz.a.overload('com.tencent.karaoke.common.media.player.d');
    com_tencent_karaoke_common_media_player_d_clz_method_a_6re9.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_a_6re9.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        methodInBeat(invokeId, startTime, 'static com.tencent.karaoke.common.media.OpusInfo com.tencent.karaoke.common.media.player.d.a(com.tencent.karaoke.common.media.player.d)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_lambda$zB_Lw_czKEEnsdxjhOHAxxA7Lpw_n97l = com_tencent_karaoke_common_media_player_d_clz.lambda$zB_Lw_czKEEnsdxjhOHAxxA7Lpw.overload('com.tencent.karaoke.common.media.player.d', 'int', 'com.tencent.component.thread.e$c');
    com_tencent_karaoke_common_media_player_d_clz_method_lambda$zB_Lw_czKEEnsdxjhOHAxxA7Lpw_n97l.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_lambda$zB_Lw_czKEEnsdxjhOHAxxA7Lpw_n97l.call(com_tencent_karaoke_common_media_player_d_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public static java.lang.Object com.tencent.karaoke.common.media.player.d.lambda$zB_Lw_czKEEnsdxjhOHAxxA7Lpw(com.tencent.karaoke.common.media.player.d,int,com.tencent.component.thread.e$c)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_10cn = com_tencent_karaoke_common_media_player_d_clz.a.overload('com.tencent.karaoke.common.media.player.d$b');
    com_tencent_karaoke_common_media_player_d_clz_method_a_10cn.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_a_10cn.call(this, v0);
        //methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.common.media.player.d.a(com.tencent.karaoke.common.media.player.d$b)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_b_t7mc = com_tencent_karaoke_common_media_player_d_clz.b.overload('int');
    com_tencent_karaoke_common_media_player_d_clz_method_b_t7mc.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_b_t7mc.call(com_tencent_karaoke_common_media_player_d_clz, v0);
        methodInBeat(invokeId, startTime, 'static int com.tencent.karaoke.common.media.player.d.b(int)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_nuij = com_tencent_karaoke_common_media_player_d_clz.a.overload('int');
    com_tencent_karaoke_common_media_player_d_clz_method_a_nuij.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_a_nuij.call(this, v0);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.common.media.player.d.a(int)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_d_wmks = com_tencent_karaoke_common_media_player_d_clz.d.overload('int');
    com_tencent_karaoke_common_media_player_d_clz_method_d_wmks.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_d_wmks.call(this, v0);
        //methodInBeat(invokeId, startTime, 'private synchronized void com.tencent.karaoke.common.media.player.d.d(int)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_c_ic6f = com_tencent_karaoke_common_media_player_d_clz.c.overload('int');
    com_tencent_karaoke_common_media_player_d_clz_method_c_ic6f.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_c_ic6f.call(this, v0);
       // methodInBeat(invokeId, startTime, 'private com.tencent.karaoke.player.a.c com.tencent.karaoke.common.media.player.d.c(int)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_f_xfuj = com_tencent_karaoke_common_media_player_d_clz.f.overload('int');
    com_tencent_karaoke_common_media_player_d_clz_method_f_xfuj.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_f_xfuj.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.f(int)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_e_7fvc = com_tencent_karaoke_common_media_player_d_clz.e.overload('int');
    com_tencent_karaoke_common_media_player_d_clz_method_e_7fvc.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_e_7fvc.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.e(int)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_h_k3km = com_tencent_karaoke_common_media_player_d_clz.h.overload('int');
    com_tencent_karaoke_common_media_player_d_clz_method_h_k3km.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_h_k3km.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.h(int)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_g_xzgs = com_tencent_karaoke_common_media_player_d_clz.g.overload('int');
    com_tencent_karaoke_common_media_player_d_clz_method_g_xzgs.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_d_clz_method_g_xzgs.call(this, v0);
        //methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.d.g(int)', executor);
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_a_ea3f = com_tencent_karaoke_common_media_player_d_clz.a.overload('com.tencent.karaoke.player.a.c', 'boolean', 'java.lang.String', 'java.lang.String', 'int', 'com.tencent.karaoke.common.media.audio.messagequeue.a');
    com_tencent_karaoke_common_media_player_d_clz_method_a_ea3f.implementation = function(v0, v1, v2, v3, v4, v5) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_a_ea3f.call(this, v0, v1, v2, v3, v4, v5);
        methodInBeat(invokeId, startTime, 'private boolean com.tencent.karaoke.common.media.player.d.a(com.tencent.karaoke.player.a.c,boolean,java.lang.String,java.lang.String,int,com.tencent.karaoke.common.media.audio.messagequeue.a)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_d_clz_method_b_k1qs = com_tencent_karaoke_common_media_player_d_clz.b.overload('com.tencent.karaoke.player.a.c', 'boolean', 'java.lang.String', 'java.lang.String', 'int', 'com.tencent.karaoke.common.media.audio.messagequeue.a');
    com_tencent_karaoke_common_media_player_d_clz_method_b_k1qs.implementation = function(v0, v1, v2, v3, v4, v5) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_d_clz_method_b_k1qs.call(this, v0, v1, v2, v3, v4, v5);
        methodInBeat(invokeId, startTime, 'private boolean com.tencent.karaoke.common.media.player.d.b(com.tencent.karaoke.player.a.c,boolean,java.lang.String,java.lang.String,int,com.tencent.karaoke.common.media.audio.messagequeue.a)', executor);
        return ret;
    };
});