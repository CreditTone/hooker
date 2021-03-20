//com.tencent.karaoke.module.vod.newvod.report.a:?
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

Java.perform(function() {
    //如果需要使用radar请去除注释
    //checkRadarDex();
    //常用类帮你声明好
    var StringClz = Java.use('java.lang.String');
    //下面是生成的代码
    var com_tencent_karaoke_module_vod_newvod_report_a_clz = Java.use('com.tencent.karaoke.module.vod.newvod.report.a');
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_h_2epb = com_tencent_karaoke_module_vod_newvod_report_a_clz.h.overload('java.lang.String');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_h_2epb.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_h_2epb.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        log(v0);
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.h(java.lang.String)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_i_b8ma = com_tencent_karaoke_module_vod_newvod_report_a_clz.i.overload('java.lang.String');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_i_b8ma.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_i_b8ma.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        log(v0);
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.i(java.lang.String)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_e_07v9 = com_tencent_karaoke_module_vod_newvod_report_a_clz.e.overload('java.lang.String');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_e_07v9.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_e_07v9.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        log(v0);
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.e(java.lang.String)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_g_8gzl = com_tencent_karaoke_module_vod_newvod_report_a_clz.g.overload('java.lang.String');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_g_8gzl.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_g_8gzl.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.g(java.lang.String)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_k_489c = com_tencent_karaoke_module_vod_newvod_report_a_clz.k.overload('java.lang.String');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_k_489c.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_k_489c.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        log(v0);
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.k(java.lang.String)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_a_5bav = com_tencent_karaoke_module_vod_newvod_report_a_clz.a.overload();
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_a_5bav.implementation = function() {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_a_5bav.call(this);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.a()', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_m_m4ij = com_tencent_karaoke_module_vod_newvod_report_a_clz.m.overload('long');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_m_m4ij.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_m_m4ij.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        log(v0);
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.m(long)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_b_h95s = com_tencent_karaoke_module_vod_newvod_report_a_clz.b.overload('long');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_b_h95s.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_b_h95s.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        log(v0);
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.b(long)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_a_63ag = com_tencent_karaoke_module_vod_newvod_report_a_clz.a.overload('java.lang.String');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_a_63ag.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_a_63ag.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        log(v0);
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.a(java.lang.String)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_c_phmm = com_tencent_karaoke_module_vod_newvod_report_a_clz.c.overload('java.lang.String');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_c_phmm.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_c_phmm.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        log(v0);
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.c(java.lang.String)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_a_59qk = com_tencent_karaoke_module_vod_newvod_report_a_clz.a.overload('long');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_a_59qk.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_a_59qk.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        log(v0);
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.a(long)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_e_knrg = com_tencent_karaoke_module_vod_newvod_report_a_clz.e.overload('long');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_e_knrg.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_e_knrg.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        log(v0);
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.e(long)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_i_g3rp = com_tencent_karaoke_module_vod_newvod_report_a_clz.i.overload('long');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_i_g3rp.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_i_g3rp.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        log(v0);
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.i(long)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_l_znox = com_tencent_karaoke_module_vod_newvod_report_a_clz.l.overload('long');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_l_znox.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_l_znox.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        log(v0);
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.l(long)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_j_4gfj = com_tencent_karaoke_module_vod_newvod_report_a_clz.j.overload('java.lang.String');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_j_4gfj.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_j_4gfj.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        log(v0);
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.j(java.lang.String)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_c_xu61 = com_tencent_karaoke_module_vod_newvod_report_a_clz.c.overload();
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_c_xu61.implementation = function() {
        com_tencent_karaoke_module_vod_newvod_report_a_clz_method_c_xu61.call(this);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final void com.tencent.karaoke.module.vod.newvod.report.a.c()', executor);
        methodOutBeat(invokeId, startTime);
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_d_wwbp = com_tencent_karaoke_module_vod_newvod_report_a_clz.d.overload('java.lang.String');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_d_wwbp.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_d_wwbp.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        log(v0);
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.d(java.lang.String)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_d_q396 = com_tencent_karaoke_module_vod_newvod_report_a_clz.d.overload('long');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_d_q396.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_d_q396.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        log(v0);
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.d(long)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_k_qenu = com_tencent_karaoke_module_vod_newvod_report_a_clz.k.overload('long');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_k_qenu.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_k_qenu.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.k(long)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_a_ad1m = com_tencent_karaoke_module_vod_newvod_report_a_clz.a.overload('com.tencent.karaoke.module.feed.data.field.CellAlgorithm');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_a_ad1m.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_a_ad1m.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.a(com.tencent.karaoke.module.feed.data.field.CellAlgorithm)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_b_tg2e = com_tencent_karaoke_module_vod_newvod_report_a_clz.b.overload('java.lang.String');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_b_tg2e.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_b_tg2e.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        log(v0);
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.b(java.lang.String)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_f_mwjt = com_tencent_karaoke_module_vod_newvod_report_a_clz.f.overload('long');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_f_mwjt.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_f_mwjt.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.f(long)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_l_2qbr = com_tencent_karaoke_module_vod_newvod_report_a_clz.l.overload('java.lang.String');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_l_2qbr.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_l_2qbr.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        log(v0);
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.l(java.lang.String)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_c_da1u = com_tencent_karaoke_module_vod_newvod_report_a_clz.c.overload('long');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_c_da1u.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_c_da1u.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.c(long)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_n_furp = com_tencent_karaoke_module_vod_newvod_report_a_clz.n.overload('long');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_n_furp.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_n_furp.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.n(long)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_toString_bjlt = com_tencent_karaoke_module_vod_newvod_report_a_clz.toString.overload();
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_toString_bjlt.implementation = function() {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_toString_bjlt.call(this);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public java.lang.String com.tencent.karaoke.module.vod.newvod.report.a.toString()', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_b_tcrn = com_tencent_karaoke_module_vod_newvod_report_a_clz.b.overload();
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_b_tcrn.implementation = function() {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_b_tcrn.call(this);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.common.reporter.newreport.data.a com.tencent.karaoke.module.vod.newvod.report.a.b()', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_h_ez87 = com_tencent_karaoke_module_vod_newvod_report_a_clz.h.overload('long');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_h_ez87.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_h_ez87.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.h(long)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_g_w43h = com_tencent_karaoke_module_vod_newvod_report_a_clz.g.overload('long');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_g_w43h.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_g_w43h.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.g(long)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_j_k0cf = com_tencent_karaoke_module_vod_newvod_report_a_clz.j.overload('long');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_j_k0cf.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_j_k0cf.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.j(long)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_tencent_karaoke_module_vod_newvod_report_a_clz_method_f_s6ro = com_tencent_karaoke_module_vod_newvod_report_a_clz.f.overload('java.lang.String');
    com_tencent_karaoke_module_vod_newvod_report_a_clz_method_f_s6ro.implementation = function(v0) {
        var ret = com_tencent_karaoke_module_vod_newvod_report_a_clz_method_f_s6ro.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        log(v0);
        methodInBeat(invokeId, startTime, 'public final com.tencent.karaoke.module.vod.newvod.report.a com.tencent.karaoke.module.vod.newvod.report.a.f(java.lang.String)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
});