function discoverClass(className) {
    if (!className) {
        return;
    }
    var radarClz = Java.use("gz.radar.ClassRadar");
    var radarClassResult = radarClz.discoverClass(className);
    return radarClassResult;
};

//查找所有加载的子类
function findOffspringsClasses(parentClassName) {
    var radarResults = new Array();
    if (!classExists(parentClassName)) {
        return radarResults;
    }
    var radarClz = Java.use("gz.radar.ClassRadar");
    var index = 0;
    Java.enumerateLoadedClasses({
        onMatch: function(className) {
            if (className.startsWith('[') || className.startsWith('org') || className.startsWith('sun') || className.startsWith('com.android') || className.startsWith('java') || className.startsWith('android') || className.startsWith('dalvik') || className.startsWith('com.google') || className.startsWith('libcore') || className.startsWith('gz.')) {
                return;
            }
            try {
                var isSubClass = radarClz.isSubClass(className, parentClassName);
                if (isSubClass) {
                    var resultItem = radarClz.discoverClass(className);
                    if (resultItem) {
                        radarResults[index] = resultItem;
                        index++;
                    }
                }
            } catch(err) {
                //console.error(err);
            }

        },
        onComplete: function() {}
    });
    return radarResults;
};

function findSOLibrary(libname) {
	var report = "";
    Java.perform(function() {
        var exports = Module.enumerateExportsSync(libname);
        exports.map(function(ex) {
            report += (ex.address + ": " + ex.name) + "\n";
        });
        report += (libname + " exports num:" + exports.length) + "\n";
    });
    return report;
};

//根据类名或正则表达式查找
function findClasses(classNameRegex) {
    var radarResults = new Array();
    if (classExists(classNameRegex)) {
        var resultItem = discoverClass(classNameRegex);
        if (resultItem) {
            radarResults[0] = resultItem;
        }
    } else {
        var clzReg = eval("/" + classNameRegex + "/");
        var index = 0;
        Java.enumerateLoadedClasses({
            onMatch: function(className) {
                if (clzReg.test(className)) {
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
    if (handle == "this") {
        overloadJs += "var executor = this.hashCode();";
    } else {
        overloadJs += "var executor = 'Class';";
    }
    overloadJs += "var beatText = '" + radarMethod.describe.value + "';";
    overloadJs += "var beat = newMethodBeat(beatText, executor);";
    if (radarMethod.returnClass.value != "void") {
        overloadJs += "var ret = ";
    }
    overloadJs += methodVarName + ".call(" + handle;
    if (radarMethod.paramsNum.value > 0) {
        overloadJs += "," + paramsJs + ");";
    } else {
        overloadJs += ");";
    }
	overloadJs += "printBeat(beat);";
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
    overloadJs += "var executor = this.hashCode();";
    overloadJs += "var beatText = '" + constructorMethod.describe.value + "';";
    overloadJs += "var beat = newMethodBeat(beatText, executor);";
    overloadJs += "var returnObj = ";
    overloadJs += constructorMethodVarName + ".call(this";
    if (constructorMethod.paramsNum.value > 0) {
        overloadJs += "," + paramsJs + ");";
    } else {
        overloadJs += ");";
    }
    overloadJs += "printBeat(beat);";
    overloadJs += "return returnObj;};";
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
    var hookMethod = (methodName == "?" || methodName == "*");
    var hookConstructorMethod = (methodName == "_" || methodName == "*");
    for (var i = 0; i < methods.length; i++) {
        var radarMethod = methods[i];
        if (hookMethod || radarMethod.matchName(methodName)) {
            hasHook = true;
            clzHookJs += generateFridaMethodOverload(clzVarName, radarMethod);
        }
    }

    //是否需要hook构造方法
    if (hookConstructorMethod) {
        hasHook = true;
        var constructorMethods = radarClassResult.constructorMethods.value;
        for (var i = 0; i < constructorMethods.length; i++) {
            clzHookJs += generateFridaConstructorMethodOverload(clzVarName, constructorMethods[i]);
        }
    }

    if (hasHook) {
        hookJs += clzHookJs;
    }
    return hookJs;
};