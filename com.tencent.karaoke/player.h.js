//com.tencent.karaoke.common.media.player.h:?
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
    var com_tencent_karaoke_common_media_player_h_clz = Java.use('com.tencent.karaoke.common.media.player.h');
    var com_tencent_karaoke_common_media_player_h_clz_method_a_jxjw = com_tencent_karaoke_common_media_player_h_clz.a.overload();
    com_tencent_karaoke_common_media_player_h_clz_method_a_jxjw.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_h_clz_method_a_jxjw.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.common.media.player.h.a()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_b_e2qj = com_tencent_karaoke_common_media_player_h_clz.b.overload();
    com_tencent_karaoke_common_media_player_h_clz_method_b_e2qj.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_h_clz_method_b_e2qj.call(this);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.common.media.player.h.b()', executor);
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_c_hytk = com_tencent_karaoke_common_media_player_h_clz.c.overload();
    com_tencent_karaoke_common_media_player_h_clz_method_c_hytk.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_h_clz_method_c_hytk.call(this);
        methodInBeat(invokeId, startTime, 'public java.util.ArrayList com.tencent.karaoke.common.media.player.h.c()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_d_8mpr = com_tencent_karaoke_common_media_player_h_clz.d.overload();
    com_tencent_karaoke_common_media_player_h_clz_method_d_8mpr.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_h_clz_method_d_8mpr.call(this);
        methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.common.media.player.h.d()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_e_m5t7 = com_tencent_karaoke_common_media_player_h_clz.e.overload();
    com_tencent_karaoke_common_media_player_h_clz_method_e_m5t7.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_h_clz_method_e_m5t7.call(this);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.common.media.player.h.e()', executor);
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_f_3mku = com_tencent_karaoke_common_media_player_h_clz.f.overload();
    com_tencent_karaoke_common_media_player_h_clz_method_f_3mku.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_h_clz_method_f_3mku.call(this);
        methodInBeat(invokeId, startTime, 'public com.tencent.karaoke.common.media.player.db.PlaySongInfo com.tencent.karaoke.common.media.player.h.f()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_g_g8bq = com_tencent_karaoke_common_media_player_h_clz.g.overload();
    com_tencent_karaoke_common_media_player_h_clz_method_g_g8bq.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_h_clz_method_g_g8bq.call(this);
        methodInBeat(invokeId, startTime, 'public com.tencent.karaoke.common.media.player.db.PlaySongInfo com.tencent.karaoke.common.media.player.h.g()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_h_fpbl = com_tencent_karaoke_common_media_player_h_clz.h.overload();
    com_tencent_karaoke_common_media_player_h_clz_method_h_fpbl.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_h_clz_method_h_fpbl.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.common.media.player.h.h()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_i_sj2i = com_tencent_karaoke_common_media_player_h_clz.i.overload();
    com_tencent_karaoke_common_media_player_h_clz_method_i_sj2i.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_h_clz_method_i_sj2i.call(this);
        //methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.common.media.player.h.i()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_a_x31u = com_tencent_karaoke_common_media_player_h_clz.a.overload('java.util.List', 'com.tencent.component.thread.e$c');
    com_tencent_karaoke_common_media_player_h_clz_method_a_x31u.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_h_clz_method_a_x31u.call(com_tencent_karaoke_common_media_player_h_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'private static java.lang.Object com.tencent.karaoke.common.media.player.h.a(java.util.List,com.tencent.component.thread.e$c)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_j_i2dw = com_tencent_karaoke_common_media_player_h_clz.j.overload();
    com_tencent_karaoke_common_media_player_h_clz_method_j_i2dw.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_h_clz_method_j_i2dw.call(com_tencent_karaoke_common_media_player_h_clz);
        methodInBeat(invokeId, startTime, 'public static boolean com.tencent.karaoke.common.media.player.h.j()', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_k_8bss = com_tencent_karaoke_common_media_player_h_clz.k.overload();
    com_tencent_karaoke_common_media_player_h_clz_method_k_8bss.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_h_clz_method_k_8bss.call(this);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.h.k()', executor);
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_l_54hp = com_tencent_karaoke_common_media_player_h_clz.l.overload();
    com_tencent_karaoke_common_media_player_h_clz_method_l_54hp.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_h_clz_method_l_54hp.call(this);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.h.l()', executor);
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_d_bx95 = com_tencent_karaoke_common_media_player_h_clz.d.overload('com.tencent.karaoke.common.media.player.db.PlaySongInfo');
    com_tencent_karaoke_common_media_player_h_clz_method_d_bx95.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_h_clz_method_d_bx95.call(this, v0);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.common.media.player.h.d(com.tencent.karaoke.common.media.player.db.PlaySongInfo)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_a_ettc = com_tencent_karaoke_common_media_player_h_clz.a.overload('com.tencent.component.thread.e$c');
    com_tencent_karaoke_common_media_player_h_clz_method_a_ettc.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_h_clz_method_a_ettc.call(com_tencent_karaoke_common_media_player_h_clz, v0);
        methodInBeat(invokeId, startTime, 'private static java.lang.Object com.tencent.karaoke.common.media.player.h.a(com.tencent.component.thread.e$c)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_c_v9gg = com_tencent_karaoke_common_media_player_h_clz.c.overload('com.tencent.karaoke.common.media.player.db.PlaySongInfo');
    com_tencent_karaoke_common_media_player_h_clz_method_c_v9gg.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_h_clz_method_c_v9gg.call(this, v0);
        logJSONString(v0);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.common.media.player.h.c(com.tencent.karaoke.common.media.player.db.PlaySongInfo)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_b_59rg = com_tencent_karaoke_common_media_player_h_clz.b.overload('com.tencent.karaoke.common.media.player.db.PlaySongInfo');
    com_tencent_karaoke_common_media_player_h_clz_method_b_59rg.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_h_clz_method_b_59rg.call(this, v0);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.common.media.player.h.b(com.tencent.karaoke.common.media.player.db.PlaySongInfo)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_a_8wh5 = com_tencent_karaoke_common_media_player_h_clz.a.overload('com.tencent.karaoke.common.media.player.db.PlaySongInfo');
    com_tencent_karaoke_common_media_player_h_clz_method_a_8wh5.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_h_clz_method_a_8wh5.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.common.media.player.h.a(com.tencent.karaoke.common.media.player.db.PlaySongInfo)', executor);
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_a_pzul = com_tencent_karaoke_common_media_player_h_clz.a.overload('com.tencent.karaoke.common.media.player.h');
    com_tencent_karaoke_common_media_player_h_clz_method_a_pzul.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_h_clz_method_a_pzul.call(com_tencent_karaoke_common_media_player_h_clz, v0);
        methodInBeat(invokeId, startTime, 'static java.util.concurrent.ConcurrentLinkedQueue com.tencent.karaoke.common.media.player.h.a(com.tencent.karaoke.common.media.player.h)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_a_7dgn = com_tencent_karaoke_common_media_player_h_clz.a.overload('java.lang.String');
    com_tencent_karaoke_common_media_player_h_clz_method_a_7dgn.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_h_clz_method_a_7dgn.call(this, v0);
        methodInBeat(invokeId, startTime, 'public com.tencent.karaoke.common.media.player.db.PlaySongInfo com.tencent.karaoke.common.media.player.h.a(java.lang.String)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_b_4j8i = com_tencent_karaoke_common_media_player_h_clz.b.overload('java.lang.String');
    com_tencent_karaoke_common_media_player_h_clz_method_b_4j8i.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_h_clz_method_b_4j8i.call(this, v0);
        methodInBeat(invokeId, startTime, 'public com.tencent.karaoke.common.media.player.db.PlaySongInfo com.tencent.karaoke.common.media.player.h.b(java.lang.String)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_a_uzlc = com_tencent_karaoke_common_media_player_h_clz.a.overload('java.util.List');
    com_tencent_karaoke_common_media_player_h_clz_method_a_uzlc.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_h_clz_method_a_uzlc.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.h.a(java.util.List)', executor);
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_lambda$e2ZnS7UOsVRyTX5lJ8nnYW81waA_05gp = com_tencent_karaoke_common_media_player_h_clz.lambda$e2ZnS7UOsVRyTX5lJ8nnYW81waA.overload('com.tencent.component.thread.e$c');
    com_tencent_karaoke_common_media_player_h_clz_method_lambda$e2ZnS7UOsVRyTX5lJ8nnYW81waA_05gp.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_common_media_player_h_clz_method_lambda$e2ZnS7UOsVRyTX5lJ8nnYW81waA_05gp.call(com_tencent_karaoke_common_media_player_h_clz, v0);
        methodInBeat(invokeId, startTime, 'public static java.lang.Object com.tencent.karaoke.common.media.player.h.lambda$e2ZnS7UOsVRyTX5lJ8nnYW81waA(com.tencent.component.thread.e$c)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_a_c5at = com_tencent_karaoke_common_media_player_h_clz.a.overload('java.util.List', 'int');
    com_tencent_karaoke_common_media_player_h_clz_method_a_c5at.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_h_clz_method_a_c5at.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.common.media.player.h.a(java.util.List,int)', executor);
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_a_peit = com_tencent_karaoke_common_media_player_h_clz.a.overload('java.lang.String', 'int');
    com_tencent_karaoke_common_media_player_h_clz_method_a_peit.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_h_clz_method_a_peit.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public com.tencent.karaoke.common.media.player.db.PlaySongInfo com.tencent.karaoke.common.media.player.h.a(java.lang.String,int)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_a_ij4r = com_tencent_karaoke_common_media_player_h_clz.a.overload('int');
    com_tencent_karaoke_common_media_player_h_clz_method_a_ij4r.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_h_clz_method_a_ij4r.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.common.media.player.h.a(int)', executor);
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_a_2scc = com_tencent_karaoke_common_media_player_h_clz.a.overload('java.util.ArrayList', 'java.util.ArrayList', 'java.lang.String', 'java.lang.String', 'long', 'long', 'int', 'int', 'java.lang.String', 'com.tencent.karaoke.common.media.player.i', 'int', 'java.lang.String');
    com_tencent_karaoke_common_media_player_h_clz_method_a_2scc.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_h_clz_method_a_2scc.call(this, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11);
        //logJSONString(v0);
        //logJSONString(v1);
        log(v0.size());
        log(v0.get(0));
        //log(v1.size());
        //log(v1.get(0));
        log(v2);
        log(v3);
        log(v8);
        log(v11);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.h.a(java.util.ArrayList,java.util.ArrayList,java.lang.String,java.lang.String,long,long,int,int,java.lang.String,com.tencent.karaoke.common.media.player.i,int,java.lang.String)', executor);
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_g_c18v = com_tencent_karaoke_common_media_player_h_clz.g.overload('com.tencent.karaoke.common.media.player.db.PlaySongInfo');
    com_tencent_karaoke_common_media_player_h_clz_method_g_c18v.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_h_clz_method_g_c18v.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.common.media.player.h.g(com.tencent.karaoke.common.media.player.db.PlaySongInfo)', executor);
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_f_tf0d = com_tencent_karaoke_common_media_player_h_clz.f.overload('com.tencent.karaoke.common.media.player.db.PlaySongInfo');
    com_tencent_karaoke_common_media_player_h_clz_method_f_tf0d.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_common_media_player_h_clz_method_f_tf0d.call(this, v0);
        methodInBeat(invokeId, startTime, 'private boolean com.tencent.karaoke.common.media.player.h.f(com.tencent.karaoke.common.media.player.db.PlaySongInfo)', executor);
        return ret;
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_e_dxun = com_tencent_karaoke_common_media_player_h_clz.e.overload('com.tencent.karaoke.common.media.player.db.PlaySongInfo');
    com_tencent_karaoke_common_media_player_h_clz_method_e_dxun.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_common_media_player_h_clz_method_e_dxun.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.common.media.player.h.e(com.tencent.karaoke.common.media.player.db.PlaySongInfo)', executor);
    };
    var com_tencent_karaoke_common_media_player_h_clz_method_a_km46 = com_tencent_karaoke_common_media_player_h_clz.a.overload('com.tencent.karaoke.common.media.player.h', 'java.util.ArrayList', 'java.util.ArrayList', 'java.lang.String', 'java.lang.String', 'long', 'long', 'int', 'int', 'java.lang.String', 'com.tencent.karaoke.common.media.player.i', 'int', 'java.lang.String');
    com_tencent_karaoke_common_media_player_h_clz_method_a_km46.implementation = function(v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_tencent_karaoke_common_media_player_h_clz_method_a_km46.call(com_tencent_karaoke_common_media_player_h_clz, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12);
        methodInBeat(invokeId, startTime, 'static void com.tencent.karaoke.common.media.player.h.a(com.tencent.karaoke.common.media.player.h,java.util.ArrayList,java.util.ArrayList,java.lang.String,java.lang.String,long,long,int,int,java.lang.String,com.tencent.karaoke.common.media.player.i,int,java.lang.String)', executor);
    };
});