//com.tencent.karaoke.module.searchglobal.ui.a:_
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
    var startTime = timestamp;
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var threadClz = Java.use("java.lang.Thread");
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    console.log("------------start:" + invokeId + ",executor:" + executor + ",thread:" + threadClz.currentThread().getId() + ",timestamp:" + startTime + "---------------");
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
        overloadJs += "var executor = 'obj:'+this.hashCode();";
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
    //下面是生成的代码  从进入搜索开始只初始化一次
    var com_tencent_karaoke_module_searchglobal_ui_a_clz = Java.use('com.tencent.karaoke.module.searchglobal.ui.a');
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_init_2v6r = com_tencent_karaoke_module_searchglobal_ui_a_clz.$init.overload();
    com_tencent_karaoke_module_searchglobal_ui_a_clz_init_2v6r.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var obj = com_tencent_karaoke_module_searchglobal_ui_a_clz_init_2v6r.call(this);
        methodInBeat(invokeId, startTime, 'public com.tencent.karaoke.module.searchglobal.ui.a()', executor);
        return obj;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onViewCreated_u5bd = com_tencent_karaoke_module_searchglobal_ui_a_clz.onViewCreated.overload('android.view.View', 'android.os.Bundle');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onViewCreated_u5bd.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onViewCreated_u5bd.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.searchglobal.ui.a.onViewCreated(android.view.View,android.os.Bundle)', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_B_15yd = com_tencent_karaoke_module_searchglobal_ui_a_clz.B.overload();
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_B_15yd.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_B_15yd.call(this);
        methodInBeat(invokeId, startTime, 'private java.lang.String com.tencent.karaoke.module.searchglobal.ui.a.B()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_h_yfpb = com_tencent_karaoke_module_searchglobal_ui_a_clz.h.overload('com.tencent.karaoke.module.searchglobal.ui.a');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_h_yfpb.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_h_yfpb.call(com_tencent_karaoke_module_searchglobal_ui_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static com.tencent.karaoke.module.searchglobal.hippy.HippySearchStartView com.tencent.karaoke.module.searchglobal.ui.a.h(com.tencent.karaoke.module.searchglobal.ui.a)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_c_xyz9 = com_tencent_karaoke_module_searchglobal_ui_a_clz.c.overload('com.tencent.karaoke.module.searchglobal.ui.a');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_c_xyz9.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_c_xyz9.call(com_tencent_karaoke_module_searchglobal_ui_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static android.widget.EditText com.tencent.karaoke.module.searchglobal.ui.a.c(com.tencent.karaoke.module.searchglobal.ui.a)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_b_z77j = com_tencent_karaoke_module_searchglobal_ui_a_clz.b.overload('java.lang.String');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_b_z77j.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_b_z77j.call(this, v0);
        log("search:"+v0);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.module.searchglobal.ui.a.b(java.lang.String)', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_b_nwmr = com_tencent_karaoke_module_searchglobal_ui_a_clz.b.overload('com.tencent.karaoke.module.searchglobal.ui.a', 'java.lang.String');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_b_nwmr.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_b_nwmr.call(com_tencent_karaoke_module_searchglobal_ui_a_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static java.lang.String com.tencent.karaoke.module.searchglobal.ui.a.b(com.tencent.karaoke.module.searchglobal.ui.a,java.lang.String)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_xk9r = com_tencent_karaoke_module_searchglobal_ui_a_clz.a.overload();
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_xk9r.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_xk9r.call(this);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.tencent.karaoke.module.searchglobal.ui.a.a()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_z_cxkk = com_tencent_karaoke_module_searchglobal_ui_a_clz.z.overload();
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_z_cxkk.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_z_cxkk.call(this);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.module.searchglobal.ui.a.z()', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_0z0p = com_tencent_karaoke_module_searchglobal_ui_a_clz.a.overload('com.tencent.karaoke.module.searchglobal.ui.a', 'android.view.View');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_0z0p.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_0z0p.call(com_tencent_karaoke_module_searchglobal_ui_a_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static void com.tencent.karaoke.module.searchglobal.ui.a.a(com.tencent.karaoke.module.searchglobal.ui.a,android.view.View)', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_e_s019 = com_tencent_karaoke_module_searchglobal_ui_a_clz.e.overload();
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_e_s019.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_e_s019.call(this);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.module.searchglobal.ui.a.e()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_i_cdwj = com_tencent_karaoke_module_searchglobal_ui_a_clz.i.overload('com.tencent.karaoke.module.searchglobal.ui.a');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_i_cdwj.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_i_cdwj.call(com_tencent_karaoke_module_searchglobal_ui_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static int com.tencent.karaoke.module.searchglobal.ui.a.i(com.tencent.karaoke.module.searchglobal.ui.a)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_t_zbqp = com_tencent_karaoke_module_searchglobal_ui_a_clz.t.overload();
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_t_zbqp.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_t_zbqp.call(this);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.searchglobal.ui.a.t()', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_lxlq = com_tencent_karaoke_module_searchglobal_ui_a_clz.a.overload('java.lang.String', 'boolean');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_lxlq.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_lxlq.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.searchglobal.ui.a.a(java.lang.String,boolean)', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onNetworkStateChanged_yap5 = com_tencent_karaoke_module_searchglobal_ui_a_clz.onNetworkStateChanged.overload('com.tencent.base.os.info.f', 'com.tencent.base.os.info.f');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onNetworkStateChanged_yap5.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onNetworkStateChanged_yap5.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.searchglobal.ui.a.onNetworkStateChanged(com.tencent.base.os.info.f,com.tencent.base.os.info.f)', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onCreateView_4wea = com_tencent_karaoke_module_searchglobal_ui_a_clz.onCreateView.overload('android.view.LayoutInflater', 'android.view.ViewGroup', 'android.os.Bundle');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onCreateView_4wea.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onCreateView_4wea.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public android.view.View com.tencent.karaoke.module.searchglobal.ui.a.onCreateView(android.view.LayoutInflater,android.view.ViewGroup,android.os.Bundle)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_c8mn = com_tencent_karaoke_module_searchglobal_ui_a_clz.a.overload('com.tencent.karaoke.module.searchglobal.ui.a', 'int');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_c8mn.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_c8mn.call(com_tencent_karaoke_module_searchglobal_ui_a_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static int com.tencent.karaoke.module.searchglobal.ui.a.a(com.tencent.karaoke.module.searchglobal.ui.a,int)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_j_6aoh = com_tencent_karaoke_module_searchglobal_ui_a_clz.j.overload('com.tencent.karaoke.module.searchglobal.ui.a');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_j_6aoh.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_j_6aoh.call(com_tencent_karaoke_module_searchglobal_ui_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static com.tencent.karaoke.module.searchglobal.ui.view.SearchResultView com.tencent.karaoke.module.searchglobal.ui.a.j(com.tencent.karaoke.module.searchglobal.ui.a)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onKeyDown_7jlc = com_tencent_karaoke_module_searchglobal_ui_a_clz.onKeyDown.overload('int', 'android.view.KeyEvent');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onKeyDown_7jlc.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onKeyDown_7jlc.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public boolean com.tencent.karaoke.module.searchglobal.ui.a.onKeyDown(int,android.view.KeyEvent)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_c_g98k = com_tencent_karaoke_module_searchglobal_ui_a_clz.c.overload('com.tencent.karaoke.module.searchglobal.ui.a', 'java.lang.String');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_c_g98k.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_c_g98k.call(com_tencent_karaoke_module_searchglobal_ui_a_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static void com.tencent.karaoke.module.searchglobal.ui.a.c(com.tencent.karaoke.module.searchglobal.ui.a,java.lang.String)', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_b_n8sb = com_tencent_karaoke_module_searchglobal_ui_a_clz.b.overload('com.tencent.karaoke.module.searchglobal.ui.a');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_b_n8sb.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_b_n8sb.call(com_tencent_karaoke_module_searchglobal_ui_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static java.lang.String com.tencent.karaoke.module.searchglobal.ui.a.b(com.tencent.karaoke.module.searchglobal.ui.a)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_3zzr = com_tencent_karaoke_module_searchglobal_ui_a_clz.a.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_3zzr.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_3zzr.call(this, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.module.searchglobal.ui.a.a(java.lang.String,java.lang.String,java.lang.String,java.lang.String)', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_d_j6xt = com_tencent_karaoke_module_searchglobal_ui_a_clz.d.overload('com.tencent.karaoke.module.searchglobal.ui.a');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_d_j6xt.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_d_j6xt.call(com_tencent_karaoke_module_searchglobal_ui_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static android.widget.Button com.tencent.karaoke.module.searchglobal.ui.a.d(com.tencent.karaoke.module.searchglobal.ui.a)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_f_u1si = com_tencent_karaoke_module_searchglobal_ui_a_clz.f.overload('com.tencent.karaoke.module.searchglobal.ui.a');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_f_u1si.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_f_u1si.call(com_tencent_karaoke_module_searchglobal_ui_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static java.lang.String com.tencent.karaoke.module.searchglobal.ui.a.f(com.tencent.karaoke.module.searchglobal.ui.a)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onDestroyView_1jv6 = com_tencent_karaoke_module_searchglobal_ui_a_clz.onDestroyView.overload();
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onDestroyView_1jv6.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onDestroyView_1jv6.call(this);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.searchglobal.ui.a.onDestroyView()', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_e_saff = com_tencent_karaoke_module_searchglobal_ui_a_clz.e.overload('com.tencent.karaoke.module.searchglobal.ui.a');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_e_saff.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_e_saff.call(com_tencent_karaoke_module_searchglobal_ui_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static android.widget.Button com.tencent.karaoke.module.searchglobal.ui.a.e(com.tencent.karaoke.module.searchglobal.ui.a)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onDestroy_vrhx = com_tencent_karaoke_module_searchglobal_ui_a_clz.onDestroy.overload();
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onDestroy_vrhx.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onDestroy_vrhx.call(this);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.searchglobal.ui.a.onDestroy()', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_yq4m = com_tencent_karaoke_module_searchglobal_ui_a_clz.a.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'int');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_yq4m.implementation = function(v0, v1, v2, v3, v4, v5) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_yq4m.call(this, v0, v1, v2, v3, v4, v5);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.searchglobal.ui.a.a(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,int)', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_u_x2vn = com_tencent_karaoke_module_searchglobal_ui_a_clz.u.overload();
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_u_x2vn.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_u_x2vn.call(this);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.searchglobal.ui.a.u()', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_r_xq8w = com_tencent_karaoke_module_searchglobal_ui_a_clz.r.overload();
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_r_xq8w.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_r_xq8w.call(this);
        methodInBeat(invokeId, startTime, 'public java.lang.String com.tencent.karaoke.module.searchglobal.ui.a.r()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_A_p7zw = com_tencent_karaoke_module_searchglobal_ui_a_clz.A.overload();
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_A_p7zw.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_A_p7zw.call(this);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.module.searchglobal.ui.a.A()', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_y_p43j = com_tencent_karaoke_module_searchglobal_ui_a_clz.y.overload();
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_y_p43j.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_y_p43j.call(this);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.module.searchglobal.ui.a.y()', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onClick_o6xi = com_tencent_karaoke_module_searchglobal_ui_a_clz.onClick.overload('android.view.View');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onClick_o6xi.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onClick_o6xi.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.searchglobal.ui.a.onClick(android.view.View)', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onActivityResult_xs0r = com_tencent_karaoke_module_searchglobal_ui_a_clz.onActivityResult.overload('int', 'int', 'android.content.Intent');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onActivityResult_xs0r.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onActivityResult_xs0r.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.searchglobal.ui.a.onActivityResult(int,int,android.content.Intent)', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_v_aob9 = com_tencent_karaoke_module_searchglobal_ui_a_clz.v.overload();
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_v_aob9.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_v_aob9.call(this);
        methodInBeat(invokeId, startTime, 'private boolean com.tencent.karaoke.module.searchglobal.ui.a.v()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_c_8wxg = com_tencent_karaoke_module_searchglobal_ui_a_clz.c.overload();
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_c_8wxg.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_c_8wxg.call(this);
        methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.module.searchglobal.ui.a.c()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_l_qmw8 = com_tencent_karaoke_module_searchglobal_ui_a_clz.l.overload('com.tencent.karaoke.module.searchglobal.ui.a');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_l_qmw8.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_l_qmw8.call(com_tencent_karaoke_module_searchglobal_ui_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static java.lang.String com.tencent.karaoke.module.searchglobal.ui.a.l(com.tencent.karaoke.module.searchglobal.ui.a)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_oa0r = com_tencent_karaoke_module_searchglobal_ui_a_clz.a.overload('com.tencent.karaoke.module.searchglobal.ui.a');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_oa0r.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_oa0r.call(com_tencent_karaoke_module_searchglobal_ui_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static boolean com.tencent.karaoke.module.searchglobal.ui.a.a(com.tencent.karaoke.module.searchglobal.ui.a)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onStop_s0o1 = com_tencent_karaoke_module_searchglobal_ui_a_clz.onStop.overload();
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onStop_s0o1.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onStop_s0o1.call(this);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.searchglobal.ui.a.onStop()', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onRequestPermissionsResult_jzro = com_tencent_karaoke_module_searchglobal_ui_a_clz.onRequestPermissionsResult.overload('int', '[Ljava.lang.String;', '[I');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onRequestPermissionsResult_jzro.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onRequestPermissionsResult_jzro.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.searchglobal.ui.a.onRequestPermissionsResult(int,java.lang.String[],int[])', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_w_5a8w = com_tencent_karaoke_module_searchglobal_ui_a_clz.w.overload();
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_w_5a8w.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_w_5a8w.call(this);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.module.searchglobal.ui.a.w()', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_x_fosf = com_tencent_karaoke_module_searchglobal_ui_a_clz.x.overload();
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_x_fosf.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_x_fosf.call(this);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.module.searchglobal.ui.a.x()', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_wcd9 = com_tencent_karaoke_module_searchglobal_ui_a_clz.a.overload('com.tencent.karaoke.module.searchglobal.ui.a', 'java.lang.String');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_wcd9.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_wcd9.call(com_tencent_karaoke_module_searchglobal_ui_a_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static java.lang.String com.tencent.karaoke.module.searchglobal.ui.a.a(com.tencent.karaoke.module.searchglobal.ui.a,java.lang.String)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_g_qw0u = com_tencent_karaoke_module_searchglobal_ui_a_clz.g.overload('com.tencent.karaoke.module.searchglobal.ui.a');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_g_qw0u.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_g_qw0u.call(com_tencent_karaoke_module_searchglobal_ui_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static com.tencent.karaoke.module.searchglobal.ui.view.SearchSmartView com.tencent.karaoke.module.searchglobal.ui.a.g(com.tencent.karaoke.module.searchglobal.ui.a)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_xuuq = com_tencent_karaoke_module_searchglobal_ui_a_clz.a.overload('android.view.View');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_xuuq.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_xuuq.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.module.searchglobal.ui.a.a(android.view.View)', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_kuqr = com_tencent_karaoke_module_searchglobal_ui_a_clz.a.overload('com.tencent.karaoke.module.searchglobal.ui.a', 'boolean');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_kuqr.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_kuqr.call(com_tencent_karaoke_module_searchglobal_ui_a_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static boolean com.tencent.karaoke.module.searchglobal.ui.a.a(com.tencent.karaoke.module.searchglobal.ui.a,boolean)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_b_lmpl = com_tencent_karaoke_module_searchglobal_ui_a_clz.b.overload();
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_b_lmpl.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_b_lmpl.call(this);
        methodInBeat(invokeId, startTime, 'public int com.tencent.karaoke.module.searchglobal.ui.a.b()', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onCreate_bovo = com_tencent_karaoke_module_searchglobal_ui_a_clz.onCreate.overload('android.os.Bundle');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onCreate_bovo.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onCreate_bovo.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.searchglobal.ui.a.onCreate(android.os.Bundle)', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_lppr = com_tencent_karaoke_module_searchglobal_ui_a_clz.a.overload('int', 'int', 'android.content.Intent');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_lppr.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_lppr.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'protected void com.tencent.karaoke.module.searchglobal.ui.a.a(int,int,android.content.Intent)', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_3qkg = com_tencent_karaoke_module_searchglobal_ui_a_clz.a.overload('java.lang.String', 'boolean', 'int', 'int');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_3qkg.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_a_3qkg.call(this, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.searchglobal.ui.a.a(java.lang.String,boolean,int,int)', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_m_x4cg = com_tencent_karaoke_module_searchglobal_ui_a_clz.m.overload('com.tencent.karaoke.module.searchglobal.ui.a');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_m_x4cg.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_m_x4cg.call(com_tencent_karaoke_module_searchglobal_ui_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static int com.tencent.karaoke.module.searchglobal.ui.a.m(com.tencent.karaoke.module.searchglobal.ui.a)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onResume_mgdd = com_tencent_karaoke_module_searchglobal_ui_a_clz.onResume.overload();
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onResume_mgdd.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_a_clz_method_onResume_mgdd.call(this);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.searchglobal.ui.a.onResume()', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_b_pvte = com_tencent_karaoke_module_searchglobal_ui_a_clz.b.overload('com.tencent.karaoke.module.searchglobal.ui.a', 'int');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_b_pvte.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_b_pvte.call(com_tencent_karaoke_module_searchglobal_ui_a_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static int com.tencent.karaoke.module.searchglobal.ui.a.b(com.tencent.karaoke.module.searchglobal.ui.a,int)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_a_clz_method_k_bn3w = com_tencent_karaoke_module_searchglobal_ui_a_clz.k.overload('com.tencent.karaoke.module.searchglobal.ui.a');
    com_tencent_karaoke_module_searchglobal_ui_a_clz_method_k_bn3w.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_a_clz_method_k_bn3w.call(com_tencent_karaoke_module_searchglobal_ui_a_clz, v0);
        methodInBeat(invokeId, startTime, 'static int com.tencent.karaoke.module.searchglobal.ui.a.k(com.tencent.karaoke.module.searchglobal.ui.a)', executor);
        return ret;
    };
});