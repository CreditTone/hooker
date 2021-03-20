//com.tencent.karaoke.module.detailnew.data.c:?
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
    //checkRadarDex();
    //常用类帮你声明好
    var StringClz = Java.use('java.lang.String');
    //下面是生成的代码
    var com_tencent_karaoke_module_detailnew_data_c_clz = Java.use('com.tencent.karaoke.module.detailnew.data.c');
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_a_oe4f = com_tencent_karaoke_module_detailnew_data_c_clz.a.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_a_oe4f.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_a_oe4f.call(this);
        methodInBeat(invokeId, startTime, 'public com.tencent.karaoke.module.detailnew.data.DetailEnterParam com.tencent.karaoke.module.detailnew.data.c.a()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_b_z3h4 = com_tencent_karaoke_module_detailnew_data_c_clz.b.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_b_z3h4.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_detailnew_data_c_clz_method_b_z3h4.call(this);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.detailnew.data.c.b()', executor);
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_c_63ar = com_tencent_karaoke_module_detailnew_data_c_clz.c.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_c_63ar.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_detailnew_data_c_clz_method_c_63ar.call(this);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.detailnew.data.c.c()', executor);
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_d_0gsp = com_tencent_karaoke_module_detailnew_data_c_clz.d.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_d_0gsp.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_detailnew_data_c_clz_method_d_0gsp.call(this);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.detailnew.data.c.d()', executor);
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_e_io0g = com_tencent_karaoke_module_detailnew_data_c_clz.e.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_e_io0g.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_e_io0g.call(this);
        methodInBeat(invokeId, startTime, 'public long com.tencent.karaoke.module.detailnew.data.c.e()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_f_uyte = com_tencent_karaoke_module_detailnew_data_c_clz.f.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_f_uyte.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_detailnew_data_c_clz_method_f_uyte.call(this);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.detailnew.data.c.f()', executor);
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_g_1whd = com_tencent_karaoke_module_detailnew_data_c_clz.g.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_g_1whd.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_g_1whd.call(this);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.tencent.karaoke.module.detailnew.data.c.g()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_h_edu6 = com_tencent_karaoke_module_detailnew_data_c_clz.h.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_h_edu6.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_h_edu6.call(this);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.tencent.karaoke.module.detailnew.data.c.h()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_i_r4t9 = com_tencent_karaoke_module_detailnew_data_c_clz.i.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_i_r4t9.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_i_r4t9.call(this);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.tencent.karaoke.module.detailnew.data.c.i()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_j_8bq3 = com_tencent_karaoke_module_detailnew_data_c_clz.j.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_j_8bq3.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_j_8bq3.call(this);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.tencent.karaoke.module.detailnew.data.c.j()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_k_cb4y = com_tencent_karaoke_module_detailnew_data_c_clz.k.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_k_cb4y.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_k_cb4y.call(this);
        methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.module.detailnew.data.c.k()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_l_b0zc = com_tencent_karaoke_module_detailnew_data_c_clz.l.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_l_b0zc.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_l_b0zc.call(this);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.tencent.karaoke.module.detailnew.data.c.l()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_m_71wa = com_tencent_karaoke_module_detailnew_data_c_clz.m.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_m_71wa.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_m_71wa.call(this);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.tencent.karaoke.module.detailnew.data.c.m()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_n_qcrq = com_tencent_karaoke_module_detailnew_data_c_clz.n.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_n_qcrq.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_n_qcrq.call(this);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.tencent.karaoke.module.detailnew.data.c.n()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_o_8bgk = com_tencent_karaoke_module_detailnew_data_c_clz.o.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_o_8bgk.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_o_8bgk.call(this);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.tencent.karaoke.module.detailnew.data.c.o()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_p_eggi = com_tencent_karaoke_module_detailnew_data_c_clz.p.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_p_eggi.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_p_eggi.call(this);
        methodInBeat(invokeId, startTime, 'public com.tencent.karaoke.module.feed.data.field.CellAlgorithm com.tencent.karaoke.module.detailnew.data.c.p()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_a_jjlp = com_tencent_karaoke_module_detailnew_data_c_clz.a.overload('PROTO_UGC_WEBAPP.UgcTopic');
    com_tencent_karaoke_module_detailnew_data_c_clz_method_a_jjlp.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_detailnew_data_c_clz_method_a_jjlp.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.detailnew.data.c.a(PROTO_UGC_WEBAPP.UgcTopic)', executor);
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_q_g1qf = com_tencent_karaoke_module_detailnew_data_c_clz.q.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_q_g1qf.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_q_g1qf.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.module.detailnew.data.c.q()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_r_q6zq = com_tencent_karaoke_module_detailnew_data_c_clz.r.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_r_q6zq.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_r_q6zq.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.module.detailnew.data.c.r()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_c_77yi = com_tencent_karaoke_module_detailnew_data_c_clz.c.overload('PROTO_UGC_WEBAPP.UgcTopic');
    com_tencent_karaoke_module_detailnew_data_c_clz_method_c_77yi.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_detailnew_data_c_clz_method_c_77yi.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.module.detailnew.data.c.c(PROTO_UGC_WEBAPP.UgcTopic)', executor);
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_s_91bb = com_tencent_karaoke_module_detailnew_data_c_clz.s.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_s_91bb.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_s_91bb.call(this);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.tencent.karaoke.module.detailnew.data.c.s()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_b_2rjy = com_tencent_karaoke_module_detailnew_data_c_clz.b.overload('PROTO_UGC_WEBAPP.UgcTopic');
    com_tencent_karaoke_module_detailnew_data_c_clz_method_b_2rjy.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_detailnew_data_c_clz_method_b_2rjy.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.detailnew.data.c.b(PROTO_UGC_WEBAPP.UgcTopic)', executor);
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_t_o3mg = com_tencent_karaoke_module_detailnew_data_c_clz.t.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_t_o3mg.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_t_o3mg.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.module.detailnew.data.c.t()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_u_8cjv = com_tencent_karaoke_module_detailnew_data_c_clz.u.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_u_8cjv.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_u_8cjv.call(this);
        methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.module.detailnew.data.c.u()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_v_a30a = com_tencent_karaoke_module_detailnew_data_c_clz.v.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_v_a30a.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_v_a30a.call(this);
        methodInBeat(invokeId, startTime, 'public PROTO_UGC_WEBAPP.UgcTopic com.tencent.karaoke.module.detailnew.data.c.v()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_a_qvk7 = com_tencent_karaoke_module_detailnew_data_c_clz.a.overload('java.lang.String');
    com_tencent_karaoke_module_detailnew_data_c_clz_method_a_qvk7.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_a_qvk7.call(this, v0);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.module.detailnew.data.c.a(java.lang.String)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_w_jnu4 = com_tencent_karaoke_module_detailnew_data_c_clz.w.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_w_jnu4.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_w_jnu4.call(this);
        methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.module.detailnew.data.c.w()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_x_ee6h = com_tencent_karaoke_module_detailnew_data_c_clz.x.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_x_ee6h.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_x_ee6h.call(this);
        methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.module.detailnew.data.c.x()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_y_wc7y = com_tencent_karaoke_module_detailnew_data_c_clz.y.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_y_wc7y.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_y_wc7y.call(this);
        methodInBeat(invokeId, startTime, 'public PROTO_UGC_WEBAPP.UgcTopic com.tencent.karaoke.module.detailnew.data.c.y()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_a_iooq = com_tencent_karaoke_module_detailnew_data_c_clz.a.overload('android.app.Activity');
    com_tencent_karaoke_module_detailnew_data_c_clz_method_a_iooq.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_a_iooq.call(this, v0);
        methodInBeat(invokeId, startTime, 'public com.tencent.karaoke.module.share.business.ShareItemParcel com.tencent.karaoke.module.detailnew.data.c.a(android.app.Activity)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_z_b1f9 = com_tencent_karaoke_module_detailnew_data_c_clz.z.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_z_b1f9.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_z_b1f9.call(this);
        methodInBeat(invokeId, startTime, 'public PROTO_UGC_WEBAPP.GetUgcDetailRsp com.tencent.karaoke.module.detailnew.data.c.z()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_a_ifgt = com_tencent_karaoke_module_detailnew_data_c_clz.a.overload('com.tencent.karaoke.module.detailnew.data.DetailEnterParam');
    com_tencent_karaoke_module_detailnew_data_c_clz_method_a_ifgt.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_detailnew_data_c_clz_method_a_ifgt.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.detailnew.data.c.a(com.tencent.karaoke.module.detailnew.data.DetailEnterParam)', executor);
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_a_7czd = com_tencent_karaoke_module_detailnew_data_c_clz.a.overload('proto_vip_comm.EffectsNode');
    com_tencent_karaoke_module_detailnew_data_c_clz_method_a_7czd.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_detailnew_data_c_clz_method_a_7czd.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.detailnew.data.c.a(proto_vip_comm.EffectsNode)', executor);
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_a_2y8u = com_tencent_karaoke_module_detailnew_data_c_clz.a.overload('boolean');
    com_tencent_karaoke_module_detailnew_data_c_clz_method_a_2y8u.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_detailnew_data_c_clz_method_a_2y8u.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.detailnew.data.c.a(boolean)', executor);
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_a_32u2 = com_tencent_karaoke_module_detailnew_data_c_clz.a.overload('long', 'java.util.Map');
    com_tencent_karaoke_module_detailnew_data_c_clz_method_a_32u2.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_detailnew_data_c_clz_method_a_32u2.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.module.detailnew.data.c.a(long,java.util.Map)', executor);
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_d_mg7i = com_tencent_karaoke_module_detailnew_data_c_clz.d.overload('boolean');
    com_tencent_karaoke_module_detailnew_data_c_clz_method_d_mg7i.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_detailnew_data_c_clz_method_d_mg7i.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.detailnew.data.c.d(boolean)', executor);
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_e_vy1f = com_tencent_karaoke_module_detailnew_data_c_clz.e.overload('boolean');
    com_tencent_karaoke_module_detailnew_data_c_clz_method_e_vy1f.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_detailnew_data_c_clz_method_e_vy1f.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.detailnew.data.c.e(boolean)', executor);
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_b_enhr = com_tencent_karaoke_module_detailnew_data_c_clz.b.overload('boolean');
    com_tencent_karaoke_module_detailnew_data_c_clz_method_b_enhr.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_detailnew_data_c_clz_method_b_enhr.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.detailnew.data.c.b(boolean)', executor);
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_c_4inr = com_tencent_karaoke_module_detailnew_data_c_clz.c.overload('boolean');
    com_tencent_karaoke_module_detailnew_data_c_clz_method_c_4inr.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_detailnew_data_c_clz_method_c_4inr.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.detailnew.data.c.c(boolean)', executor);
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_a_bv8f = com_tencent_karaoke_module_detailnew_data_c_clz.a.overload('PROTO_UGC_WEBAPP.GetUgcDetailRsp');
    com_tencent_karaoke_module_detailnew_data_c_clz_method_a_bv8f.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_detailnew_data_c_clz_method_a_bv8f.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.detailnew.data.c.a(PROTO_UGC_WEBAPP.GetUgcDetailRsp)', executor);
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_aa_91hk = com_tencent_karaoke_module_detailnew_data_c_clz.aa.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_aa_91hk.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_aa_91hk.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.module.detailnew.data.c.aa()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_ab_2vog = com_tencent_karaoke_module_detailnew_data_c_clz.ab.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_ab_2vog.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_ab_2vog.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.module.detailnew.data.c.ab()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_a_ndkk = com_tencent_karaoke_module_detailnew_data_c_clz.a.overload('long');
    com_tencent_karaoke_module_detailnew_data_c_clz_method_a_ndkk.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_detailnew_data_c_clz_method_a_ndkk.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.detailnew.data.c.a(long)', executor);
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_b_hdol = com_tencent_karaoke_module_detailnew_data_c_clz.b.overload('long');
    com_tencent_karaoke_module_detailnew_data_c_clz_method_b_hdol.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_detailnew_data_c_clz_method_b_hdol.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.module.detailnew.data.c.b(long)', executor);
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_f_yeb2 = com_tencent_karaoke_module_detailnew_data_c_clz.f.overload('boolean');
    com_tencent_karaoke_module_detailnew_data_c_clz_method_f_yeb2.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_detailnew_data_c_clz_method_f_yeb2.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.detailnew.data.c.f(boolean)', executor);
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_g_zqpk = com_tencent_karaoke_module_detailnew_data_c_clz.g.overload('boolean');
    com_tencent_karaoke_module_detailnew_data_c_clz_method_g_zqpk.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_detailnew_data_c_clz_method_g_zqpk.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.detailnew.data.c.g(boolean)', executor);
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_a_vw1d = com_tencent_karaoke_module_detailnew_data_c_clz.a.overload('proto_single_hc.CGetFinalHcUserListRsp');
    com_tencent_karaoke_module_detailnew_data_c_clz_method_a_vw1d.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_detailnew_data_c_clz_method_a_vw1d.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.detailnew.data.c.a(proto_single_hc.CGetFinalHcUserListRsp)', executor);
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_A_ik6f = com_tencent_karaoke_module_detailnew_data_c_clz.A.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_A_ik6f.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_A_ik6f.call(this);
        methodInBeat(invokeId, startTime, 'public kg_payalbum_webapp.UgcPayInfoRsp com.tencent.karaoke.module.detailnew.data.c.A()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_B_2etr = com_tencent_karaoke_module_detailnew_data_c_clz.B.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_B_2etr.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_B_2etr.call(this);
        methodInBeat(invokeId, startTime, 'public proto_single_hc.CGetFinalHcUserListRsp com.tencent.karaoke.module.detailnew.data.c.B()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_C_a96f = com_tencent_karaoke_module_detailnew_data_c_clz.C.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_C_a96f.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_C_a96f.call(this);
        methodInBeat(invokeId, startTime, 'public kg_payalbum_webapp.WebappPayAlbumInfo com.tencent.karaoke.module.detailnew.data.c.C()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_D_elul = com_tencent_karaoke_module_detailnew_data_c_clz.D.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_D_elul.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_D_elul.call(this);
        methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.module.detailnew.data.c.D()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_E_jykf = com_tencent_karaoke_module_detailnew_data_c_clz.E.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_E_jykf.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_E_jykf.call(this);
        methodInBeat(invokeId, startTime, 'public com.tencent.karaoke.common.media.player.db.PlaySongInfo com.tencent.karaoke.module.detailnew.data.c.E()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_F_ta6t = com_tencent_karaoke_module_detailnew_data_c_clz.F.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_F_ta6t.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_F_ta6t.call(this);
        methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.module.detailnew.data.c.F()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_a_almm = com_tencent_karaoke_module_detailnew_data_c_clz.a.overload('int');
    com_tencent_karaoke_module_detailnew_data_c_clz_method_a_almm.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_detailnew_data_c_clz_method_a_almm.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.detailnew.data.c.a(int)', executor);
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_G_brms = com_tencent_karaoke_module_detailnew_data_c_clz.G.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_G_brms.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_G_brms.call(this);
        methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.module.detailnew.data.c.G()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_H_2esy = com_tencent_karaoke_module_detailnew_data_c_clz.H.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_H_2esy.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_H_2esy.call(this);
        methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.module.detailnew.data.c.H()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_I_x2so = com_tencent_karaoke_module_detailnew_data_c_clz.I.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_I_x2so.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_detailnew_data_c_clz_method_I_x2so.call(this);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.detailnew.data.c.I()', executor);
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_J_1chj = com_tencent_karaoke_module_detailnew_data_c_clz.J.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_J_1chj.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_J_1chj.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.module.detailnew.data.c.J()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_K_skx8 = com_tencent_karaoke_module_detailnew_data_c_clz.K.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_K_skx8.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_K_skx8.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.module.detailnew.data.c.K()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_L_6qbn = com_tencent_karaoke_module_detailnew_data_c_clz.L.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_L_6qbn.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_L_6qbn.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.module.detailnew.data.c.L()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_M_upew = com_tencent_karaoke_module_detailnew_data_c_clz.M.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_M_upew.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_M_upew.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.module.detailnew.data.c.M()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_N_tmmb = com_tencent_karaoke_module_detailnew_data_c_clz.N.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_N_tmmb.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_N_tmmb.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.module.detailnew.data.c.N()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_O_xzum = com_tencent_karaoke_module_detailnew_data_c_clz.O.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_O_xzum.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_O_xzum.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.module.detailnew.data.c.O()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_P_6g89 = com_tencent_karaoke_module_detailnew_data_c_clz.P.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_P_6g89.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_P_6g89.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.module.detailnew.data.c.P()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_Q_cbom = com_tencent_karaoke_module_detailnew_data_c_clz.Q.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_Q_cbom.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_Q_cbom.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.module.detailnew.data.c.Q()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_R_u07q = com_tencent_karaoke_module_detailnew_data_c_clz.R.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_R_u07q.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_R_u07q.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.module.detailnew.data.c.R()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_S_7ll6 = com_tencent_karaoke_module_detailnew_data_c_clz.S.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_S_7ll6.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_S_7ll6.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.module.detailnew.data.c.S()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_T_ke7f = com_tencent_karaoke_module_detailnew_data_c_clz.T.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_T_ke7f.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_T_ke7f.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.module.detailnew.data.c.T()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_U_fhxe = com_tencent_karaoke_module_detailnew_data_c_clz.U.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_U_fhxe.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_U_fhxe.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.module.detailnew.data.c.U()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_V_vgyq = com_tencent_karaoke_module_detailnew_data_c_clz.V.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_V_vgyq.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_V_vgyq.call(this);
        methodInBeat(invokeId, startTime, 'public long com.tencent.karaoke.module.detailnew.data.c.V()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_W_ly0d = com_tencent_karaoke_module_detailnew_data_c_clz.W.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_W_ly0d.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_W_ly0d.call(this);
        methodInBeat(invokeId, startTime, 'public proto_vip_comm.EffectsNode com.tencent.karaoke.module.detailnew.data.c.W()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_X_dat7 = com_tencent_karaoke_module_detailnew_data_c_clz.X.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_X_dat7.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_X_dat7.call(this);
        methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.module.detailnew.data.c.X()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_Y_hv0v = com_tencent_karaoke_module_detailnew_data_c_clz.Y.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_Y_hv0v.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_Y_hv0v.call(this);
        methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.module.detailnew.data.c.Y()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_Z_4o1k = com_tencent_karaoke_module_detailnew_data_c_clz.Z.overload();
    com_tencent_karaoke_module_detailnew_data_c_clz_method_Z_4o1k.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = com_tencent_karaoke_module_detailnew_data_c_clz_method_Z_4o1k.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.module.detailnew.data.c.Z()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_detailnew_data_c_clz_method_a_65n6 = com_tencent_karaoke_module_detailnew_data_c_clz.a.overload('kg_payalbum_webapp.UgcPayInfoRsp');
    com_tencent_karaoke_module_detailnew_data_c_clz_method_a_65n6.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_detailnew_data_c_clz_method_a_65n6.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.detailnew.data.c.a(kg_payalbum_webapp.UgcPayInfoRsp)', executor);
    };
});