//com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView:?
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
    //checkLoadDex("com.alibaba.fastjson.JSON", "/data/local/tmp/fastjson.dex");
    //常用类帮你声明好
    var StringClz = Java.use('java.lang.String');
    //下面是生成的代码
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz = Java.use('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView');
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_p_3hzf = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.p.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_p_3hzf.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_p_3hzf.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0);
        methodInBeat(invokeId, startTime, 'static java.util.List com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.p(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_d_0v3o = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.d.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView', 'java.lang.String');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_d_0v3o.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_d_0v3o.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static java.lang.String com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.d(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView,java.lang.String)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_sendErrorMessage_pori = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.sendErrorMessage.overload('java.lang.String');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_sendErrorMessage_pori.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_sendErrorMessage_pori.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.sendErrorMessage(java.lang.String)', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_e_8zqf = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.e.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView', 'java.lang.String');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_e_8zqf.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_e_8zqf.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static java.lang.String com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.e(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView,java.lang.String)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_b_88jn = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.b.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_b_88jn.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_b_88jn.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0);
        methodInBeat(invokeId, startTime, 'static java.lang.String com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.b(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_vr85 = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.a.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView', 'java.lang.String');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_vr85.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_vr85.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static java.lang.String com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.a(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView,java.lang.String)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_bj8r = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.a.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView', 'proto_ugc_search.GlobalUgcSearchRsp');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_bj8r.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_bj8r.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static proto_ugc_search.GlobalUgcSearchRsp com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.a(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView,proto_ugc_search.GlobalUgcSearchRsp)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_onLoadMore_olss = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.onLoadMore.overload();
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_onLoadMore_olss.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_onLoadMore_olss.call(this);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.onLoadMore()', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_r_oelm = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.r.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_r_oelm.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_r_oelm.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0);
        methodInBeat(invokeId, startTime, 'static int com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.r(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_c_23rc = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.c.overload('int');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_c_23rc.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_c_23rc.call(this, v0);
        log(v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.c(int)', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_u_s3am = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.u.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_u_s3am.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_u_s3am.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0);
        methodInBeat(invokeId, startTime, 'static java.util.List com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.u(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_w_7o9a = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.w.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_w_7o9a.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_w_7o9a.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0);
        methodInBeat(invokeId, startTime, 'static android.widget.TextView com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.w(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_d_okev = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.d.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_d_okev.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_d_okev.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0);
        methodInBeat(invokeId, startTime, 'static com.tencent.karaoke.module.searchglobal.ui.view.e com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.d(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_b_e8al = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.b.overload();
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_b_e8al.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_b_e8al.call(this);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.b()', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_k_h1or = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.k.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_k_h1or.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_k_h1or.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0);
        methodInBeat(invokeId, startTime, 'static java.util.List com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.k(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_d_8i9b = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.d.overload();
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_d_8i9b.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_d_8i9b.call(this);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.d()', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_84wt = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.a.overload('int');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_84wt.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        log(v0);
        com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_84wt.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.a(int)', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_h_tdgf = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.h.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_h_tdgf.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_h_tdgf.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0);
        methodInBeat(invokeId, startTime, 'static int com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.h(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_q_od12 = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.q.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_q_od12.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_q_od12.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0);
        methodInBeat(invokeId, startTime, 'static int com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.q(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_i_asl8 = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.i.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_i_asl8.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_i_asl8.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0);
        methodInBeat(invokeId, startTime, 'static java.lang.String com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.i(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_mxfj = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.a.overload('com.tencent.karaoke.base.ui.g', 'com.tencent.karaoke.common.c.b');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_mxfj.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_mxfj.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.a(com.tencent.karaoke.base.ui.g,com.tencent.karaoke.common.c.b)', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_mtmm = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.a.overload();
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_mtmm.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_mtmm.call(this);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.a()', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_gz87 = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.a.overload('java.lang.String', 'java.lang.String');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_gz87.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_gz87.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.a(java.lang.String,java.lang.String)', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_j_le5b = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.j.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_j_le5b.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_j_le5b.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0);
        methodInBeat(invokeId, startTime, 'static proto_ugc_search.GlobalUgcSearchRsp com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.j(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_hu9s = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.a.overload('java.lang.String', 'int');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_hu9s.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_hu9s.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.a(java.lang.String,int)', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_v_ek0i = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.v.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_v_ek0i.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_v_ek0i.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0);
        methodInBeat(invokeId, startTime, 'static com.tencent.karaoke.widget.empty.SearchEmptyView com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.v(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_e_cafy = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.e.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_e_cafy.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_e_cafy.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0);
        methodInBeat(invokeId, startTime, 'static int com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.e(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_c_vt1q = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.c.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView', 'proto_ugc_search.GlobalUgcSearchRsp');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_c_vt1q.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_c_vt1q.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static proto_ugc_search.GlobalUgcSearchRsp com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.c(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView,proto_ugc_search.GlobalUgcSearchRsp)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_o_8e3r = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.o.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_o_8e3r.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_o_8e3r.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0);
        methodInBeat(invokeId, startTime, 'static java.lang.String com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.o(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_m_0cp4 = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.m.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_m_0cp4.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_m_0cp4.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0);
        methodInBeat(invokeId, startTime, 'static int com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.m(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_d_l4gn = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.d.overload('int');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_d_l4gn.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_d_l4gn.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.d(int)', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_6x21 = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.a.overload('java.lang.String', 'proto_ugc_search.GlobalUgcSearchRsp');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_6x21.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        log(v0);
        //logJSONString(v1.ugc_list.value);
        com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_6x21.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.a(java.lang.String,proto_ugc_search.GlobalUgcSearchRsp)', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_c_ngpd = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.c.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_c_ngpd.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_c_ngpd.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0);
        methodInBeat(invokeId, startTime, 'static com.tencent.karaoke.widget.recyclerview.AutoLoadMoreRecyclerView com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.c(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_t8zg = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.a.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView', 'java.lang.String', 'java.lang.String');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_t8zg.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_t8zg.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'static void com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.a(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView,java.lang.String,java.lang.String)', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_s_zjdc = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.s.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_s_zjdc.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_s_zjdc.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0);
        methodInBeat(invokeId, startTime, 'static proto_ugc_search.GlobalUgcSearchRsp com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.s(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_c_721s = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.c.overload();
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_c_721s.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_c_721s.call(this);
        methodInBeat(invokeId, startTime, 'private void com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.c()', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_l_eaps = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.l.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_l_eaps.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_l_eaps.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0);
        methodInBeat(invokeId, startTime, 'static int com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.l(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_f_860a = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.f.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_f_860a.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_f_860a.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0);
        methodInBeat(invokeId, startTime, 'static java.util.List com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.f(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_d_c3vi = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.d.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView', 'proto_ugc_search.GlobalUgcSearchRsp');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_d_c3vi.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_d_c3vi.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static proto_ugc_search.GlobalUgcSearchRsp com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.d(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView,proto_ugc_search.GlobalUgcSearchRsp)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_wk0k = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.a.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_wk0k.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_wk0k.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0);
        methodInBeat(invokeId, startTime, 'static com.tencent.karaoke.module.searchglobal.a.f com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.a(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_b_w8vf = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.b.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView', 'java.lang.String');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_b_w8vf.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_b_w8vf.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static java.lang.String com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.b(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView,java.lang.String)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_n_hecn = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.n.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_n_hecn.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_n_hecn.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0);
        methodInBeat(invokeId, startTime, 'static proto_ugc_search.GlobalUgcSearchRsp com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.n(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_c_041h = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.c.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView', 'java.lang.String');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_c_041h.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_c_041h.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static java.lang.String com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.c(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView,java.lang.String)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_b_dbdj = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.b.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView', 'int');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_b_dbdj.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_b_dbdj.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static int com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.b(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView,int)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_b_c8gp = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.b.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView', 'proto_ugc_search.GlobalUgcSearchRsp');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_b_c8gp.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_b_c8gp.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static proto_ugc_search.GlobalUgcSearchRsp com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.b(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView,proto_ugc_search.GlobalUgcSearchRsp)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_1ea5 = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.a.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView', 'int');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_1ea5.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_a_1ea5.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0, v1);
        methodInBeat(invokeId, startTime, 'static void com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.a(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView,int)', executor);
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_t_bdr5 = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.t.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_t_bdr5.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_t_bdr5.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0);
        methodInBeat(invokeId, startTime, 'static java.lang.String com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.t(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView)', executor);
        return ret;
    };
    var com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_g_3mms = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz.g.overload('com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView');
    com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_g_3mms.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz_method_g_3mms.call(com_tencent_karaoke_module_searchglobal_ui_view_SearchResultOpusPageView_clz, v0);
        methodInBeat(invokeId, startTime, 'static int com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView.g(com.tencent.karaoke.module.searchglobal.ui.view.SearchResultOpusPageView)', executor);
        return ret;
    };
});