function printStacks(methodName) {
    var stackInfo = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new());
    console.log(methodName);
    console.log(stackInfo.substring(20));
};

function checkRadarDex() {
    if (!classExists("gz.radar.ClassRadar")) {
        Java.perform(function() {
            Java.openClassFile("/data/local/tmp/radar.dex").load();
        });
    }
};

function classExists(className) {
    var exists = false;
    Java.perform(function() {
        try {
            var clz = Java.use(className);
            exists = true;
        } catch(err) {
            //console.log(err);
        }
    });
    return exists;
}

function discoverClass(className) {
    var radarClassResult = undefined;
    if (!className) {
        return radarClassResult;
    }
    console.log(className + ".....reading");
    Java.perform(function() {
        var radarClz = Java.use("gz.radar.ClassRadar");
        radarClassResult = radarClz.discoverClass(className);
        var clzInfo = "class " + radarClassResult.className.value;
        if (radarClassResult.superClassName.value != "java.lang.Object") {
            clzInfo += (" extends " + radarClassResult.superClassName.value);
        }
        var interfaceSize = radarClassResult.implementsInterfaces.value.length;
        if (interfaceSize > 0) {
            clzInfo += " implements ";
            for (var i = 0; i < interfaceSize; i++) {
                clzInfo += radarClassResult.implementsInterfaces.value[i];
                if (i < (interfaceSize - 1)) {
                    clzInfo += ",";
                }
            }
        }
        console.log(clzInfo);
    });
    return radarClassResult;
}

//查找所有加载的子类
function findOffspringsClasses(parentClassName) {
    var radarResults = new Array();
    Java.perform(function() {
        console.log("androidVersion:" + Java.androidVersion);
        console.log("Discovering:" + parentClassName);
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
                    if (resultItem) {
                        radarResults[index] = resultItem;
                        index++;
                    } else {
                        console.log("Do not get the resultItem:" + className);
                    }
                }
            },
            onComplete: function() {}
        });
        //console.log("Found out "+ index + " classes in " +count + " classes.");
    });
    return radarResults;
}

//根据类名正则表达式所有匹配的类
function scanTargets(scanTargetName) {
    var radarResults = new Array();
    Java.perform(function() {
        console.log("androidVersion:" + Java.androidVersion);
        console.log("Discovering:" + scanTargetName);
        if (classExists(scanTargetName)) {
            var resultItem = discoverClass(className);
            if (resultItem) {
                radarResults[0] = resultItem
            }
            var offsprings = findOffspringsClasses(scanTargetName);
            radarResults = radarResults.concat(offsprings);
        } else {
            var reg = eval("/" + scanTargetName + "/");
            var index = 0;
            Java.enumerateLoadedClasses({
                onMatch: function(className) {
                    if (!className) {
                        console.log(" invalid:" + className);
                        return;
                    }
                    if (reg.test(className)) {
                        var resultItem = discoverClass(className);
                        if (resultItem) {
                            radarResults[index] = resultItem;
                            index++;
                        }
                    }
                },
                onComplete: function() {}
            });
        }
        console.log("Discovering done");
    });
    return radarResults;
}

function generateFridaMethodOverload(clzVarName, radarMethod) {
    var overloadJs = "";
    if (!radarMethod.isLocal.value) {
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
        overloadJs += "return ";
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

    overloadJs += "};";
    return overloadJs;
}

function getBaseContext() {
    var context = undefined;
    Java.perform(function() {
        var currentApplication = Java.use('android.app.ActivityThread').currentApplication();
        context = currentApplication.getApplicationContext();
    });
    return context; //Java.scheduleOnMainThread(fn):
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
    overloadJs += "return ";
    overloadJs += constructorMethodVarName + ".call(this";
    if (constructorMethod.paramsNum.value > 0) {
        overloadJs += "," + paramsJs + ");";
    } else {
        overloadJs += ");";
    }
    overloadJs += "};";
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
    console.log(" before generateMethodHookJs:" + radarClassResult.className.value);
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
    if (hookAllMethod || hookAllConstructorMethod) {
        hasHook = true;
        var constructorMethods = radarClassResult.constructorMethods.value;
        for (var i = 0; i < constructorMethods.length; i++) {
            clzHookJs += generateFridaConstructorMethodOverload(clzVarName, constructorMethods[i]);
        }
    }

    if (hasHook) {
        hookJs += clzHookJs;
    }
    console.log(" after generateMethodHookJs:" + radarClassResult.className.value);
    return hookJs;
}

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
}

rpc.exports = {
    add: function(a, b) {
        return a + b;
    },
    containsclass: function(className) {
        return classExists(className);
    },
    discover: function(scanTargetName) {
        //输出到控制台
        checkRadarDex();
        scanTargets(scanTargetName);
    },
    hookjs: function(hookCmdArg) {
        checkRadarDex();
        var hookJs = "Java.perform(function() {";
        var class_method_pair = hookCmdArg.split(":");
        var className = class_method_pair[0];
        var methodName = class_method_pair[1];
        var radarClassResults = scanTargets(className);
        for (var j = 0; j < radarClassResults.length; j++) {
            hookJs += generateMethodHookJs(radarClassResults[j], methodName);
        }
        hookJs += "});";
        return hookJs;
    },
    hookonclick: function() {
        checkRadarDex();
        var hookJs = "Java.perform(function() {";
        var radarClassResults = findOffspringsClasses('android.view.View$OnClickListener');
        for (var i = 0; i < radarClassResults.length; i++) {
            hookJs += generateMethodHookJs(radarClassResults[i], 'onClick');
        }
        hookJs += "});";
        return hookJs;
    },
};