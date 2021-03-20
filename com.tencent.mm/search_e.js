//com.tencent.mm.plugin.finder.search.e:?
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

//https://github.com/frida/frida/issues/503 bug补丁
function stringBuilderToStringPatch(stringBuilderObj) {
    var str = '';
    var length = stringBuilderObj.length();
    for (var i = 0; i < length; i++) {
        str += stringBuilderObj.charAt(i);
    }
    return str;
}

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
    if (!classExists(className)) {
        Java.openClassFile(dexfile).load();
    }
};



function printStacks(methodName) {
    var stackInfo = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new());
    console.log(methodName);
    console.log(stackInfo.substring(20));
};

function toJSONString(obj) {
    try {
        var clz = Java.use("com.alibaba.fastjson.JSON");
        log(1);
        var toJSONStringMehtod = clz.toJSONString.overload("java.lang.Object");
        log(2);
        return toJSONStringMehtod.call(clz, obj);
    } catch(err) {
    	console.log("toJSONString:"+err);
    }
    return undefined;
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
    var radarClz = Java.use("gz.radar.ClassRadar");
    radarClassResult = radarClz.discoverClass(className);
    console.log(radarClassResult.describ());
    return radarClassResult;
};

//查找所有加载的子类
function findOffspringsClasses(parentClassName, containMethodName) {
    var radarResults = new Array();
    var radarClz = Java.use("gz.radar.ClassRadar");
    var index = 0;
    var count = 0;
    Java.enumerateLoadedClasses({
        onMatch: function(className) {
            count++;
            if (className.startsWith('[') || className.startsWith('org') || className.startsWith('sun') || className.startsWith('com.android') || className.startsWith('java') || className.startsWith('android') || className.startsWith('dalvik') || className.startsWith('com.google') || className.startsWith('libcore') || className.startsWith('gz.')) {
                return;
            }
            if (radarClz.isSubClass(className, parentClassName)) {
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
    if (classExists(scanTargetName)) {
        var resultItem = discoverClass(scanTargetName);
        if (resultItem) {
            radarResults[0] = resultItem
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
    overloadJs += "printStacks('" + radarMethod.describe.value + "');";
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
    overloadJs += "printStacks('" + constructorMethod.describe.value + "');";
    overloadJs += "var obj = ";
    overloadJs += constructorMethodVarName + ".call(this";
    if (constructorMethod.paramsNum.value > 0) {
        overloadJs += "," + paramsJs + ");";
    } else {
        overloadJs += ");";
    }
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
        console.log("generateMethodHookJs:" + radarClassResult.className.value);
    }
    return hookJs;
};

Java.perform(function() {
	checkRadarDex();
	var StringClz = Java.use('java.lang.String');
    var com_tencent_mm_plugin_finder_search_e_clz = Java.use('com.tencent.mm.plugin.finder.search.e');
    var com_tencent_mm_plugin_finder_search_e_clz_method_jZ_iv24 = com_tencent_mm_plugin_finder_search_e_clz.jZ.overload('boolean');
    com_tencent_mm_plugin_finder_search_e_clz_method_jZ_iv24.implementation = function(v0) {
        //printStacks('private final void com.tencent.mm.plugin.finder.search.e.jZ(boolean)');
        com_tencent_mm_plugin_finder_search_e_clz_method_jZ_iv24.call(this, v0);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_cdO_928u = com_tencent_mm_plugin_finder_search_e_clz.cdO.overload();
    com_tencent_mm_plugin_finder_search_e_clz_method_cdO_928u.implementation = function() {
        //printStacks('public final boolean com.tencent.mm.plugin.finder.search.e.cdO()');
        return com_tencent_mm_plugin_finder_search_e_clz_method_cdO_928u.call(this);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_UZ_nl35 = com_tencent_mm_plugin_finder_search_e_clz.UZ.overload('java.lang.String');
    com_tencent_mm_plugin_finder_search_e_clz_method_UZ_nl35.implementation = function(v0) {
    	log(v0);
        printStacks('public final void com.tencent.mm.plugin.finder.search.e.UZ(java.lang.String)');
        com_tencent_mm_plugin_finder_search_e_clz_method_UZ_nl35.call(this, v0);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_cdM_3cgf = com_tencent_mm_plugin_finder_search_e_clz.cdM.overload();
    com_tencent_mm_plugin_finder_search_e_clz_method_cdM_3cgf.implementation = function() {
        //printStacks('public final java.util.List com.tencent.mm.plugin.finder.search.e.cdM()');
        return com_tencent_mm_plugin_finder_search_e_clz_method_cdM_3cgf.call(this);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_a_tecp = com_tencent_mm_plugin_finder_search_e_clz.a.overload('com.tencent.mm.protocal.protobuf.ajj', 'int');
    com_tencent_mm_plugin_finder_search_e_clz_method_a_tecp.implementation = function(v0, v1) {
        //printStacks('public final void com.tencent.mm.plugin.finder.search.e.a(com.tencent.mm.protocal.protobuf.ajj,int)');
        com_tencent_mm_plugin_finder_search_e_clz_method_a_tecp.call(this, v0, v1);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_caS_qmgs = com_tencent_mm_plugin_finder_search_e_clz.caS.overload();
    com_tencent_mm_plugin_finder_search_e_clz_method_caS_qmgs.implementation = function() {
        //printStacks('public final java.util.List com.tencent.mm.plugin.finder.search.e.caS()');
        return com_tencent_mm_plugin_finder_search_e_clz_method_caS_qmgs.call(this);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_a_dang = com_tencent_mm_plugin_finder_search_e_clz.a.overload('com.tencent.mm.plugin.finder.search.f$b');
    com_tencent_mm_plugin_finder_search_e_clz_method_a_dang.implementation = function(v0) {
        //printStacks('public final void com.tencent.mm.plugin.finder.search.e.a(com.tencent.mm.plugin.finder.search.f$b)');
        com_tencent_mm_plugin_finder_search_e_clz_method_a_dang.call(this, v0);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_onSceneEnd_b4zj = com_tencent_mm_plugin_finder_search_e_clz.onSceneEnd.overload('int', 'int', 'java.lang.String', 'com.tencent.mm.ak.m');
    com_tencent_mm_plugin_finder_search_e_clz_method_onSceneEnd_b4zj.implementation = function(v0, v1, v2, v3) {
    	//logJSONString();
    	//log(this.pFM.value.ppJ.value.pbk);
    	log(toJSONString(StringClz.$new("123")));
    	log(toJSONString(this.pFM.value));
        printStacks('public final void com.tencent.mm.plugin.finder.search.e.onSceneEnd(int,int,java.lang.String,com.tencent.mm.ak.m)');
        com_tencent_mm_plugin_finder_search_e_clz_method_onSceneEnd_b4zj.call(this, v0, v1, v2, v3);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_cV_g2u4 = com_tencent_mm_plugin_finder_search_e_clz.cV.overload('java.lang.Object');
    com_tencent_mm_plugin_finder_search_e_clz_method_cV_g2u4.implementation = function(v0) {
        //printStacks('public final void com.tencent.mm.plugin.finder.search.e.cV(java.lang.Object)');
        com_tencent_mm_plugin_finder_search_e_clz_method_cV_g2u4.call(this, v0);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_cdN_ru2f = com_tencent_mm_plugin_finder_search_e_clz.cdN.overload();
    com_tencent_mm_plugin_finder_search_e_clz_method_cdN_ru2f.implementation = function() {
        //printStacks('public final void com.tencent.mm.plugin.finder.search.e.cdN()');
        com_tencent_mm_plugin_finder_search_e_clz_method_cdN_ru2f.call(this);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_k_6ssd = com_tencent_mm_plugin_finder_search_e_clz.k.overload('com.tencent.mm.plugin.finder.model.BaseFinderFeed');
    com_tencent_mm_plugin_finder_search_e_clz_method_k_6ssd.implementation = function(v0) {
        //printStacks('public final void com.tencent.mm.plugin.finder.search.e.k(com.tencent.mm.plugin.finder.model.BaseFinderFeed)');
        com_tencent_mm_plugin_finder_search_e_clz_method_k_6ssd.call(this, v0);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_onDetach_jb9k = com_tencent_mm_plugin_finder_search_e_clz.onDetach.overload();
    com_tencent_mm_plugin_finder_search_e_clz_method_onDetach_jb9k.implementation = function() {
        //printStacks('public final void com.tencent.mm.plugin.finder.search.e.onDetach()');
        com_tencent_mm_plugin_finder_search_e_clz_method_onDetach_jb9k.call(this);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_ab_f37f = com_tencent_mm_plugin_finder_search_e_clz.ab.overload('java.lang.String', 'int', 'int');
    com_tencent_mm_plugin_finder_search_e_clz_method_ab_f37f.implementation = function(v0, v1, v2) {
        //printStacks('public final void com.tencent.mm.plugin.finder.search.e.ab(java.lang.String,int,int)');
        com_tencent_mm_plugin_finder_search_e_clz_method_ab_f37f.call(this, v0, v1, v2);
    };
    var com_tencent_mm_plugin_finder_search_e_clz_method_G_a4zb = com_tencent_mm_plugin_finder_search_e_clz.G.overload('long', 'int');
    com_tencent_mm_plugin_finder_search_e_clz_method_G_a4zb.implementation = function(v0, v1) {
        //printStacks('public final void com.tencent.mm.plugin.finder.search.e.G(long,int)');
        com_tencent_mm_plugin_finder_search_e_clz_method_G_a4zb.call(this, v0, v1);
    };
});