function mkdirs(dirpath) {
    var FileClz = Java.use("java.io.File");
    var file = FileClz.$new(dirpath);
    if (!file.exists()) {
        file.mkdirs();
    }
}

function writeFileAsBase64Content(filepath, base64) {
    try {
        var FileUtilsClz = Java.use("android.os.FileUtils");
        var StringClz = Java.use('java.lang.String');
        var Base64Clz = Java.use("android.util.Base64");
        var ByteArrayInputStreamClz = Java.use("java.io.ByteArrayInputStream");
        var FileOutputStreamClz = Java.use("java.io.FileOutputStream");
        var FileClz = Java.use("java.io.File");
        var distFilepath = FileClz.$new(filepath);
        mkdirs(distFilepath.getParent());
        var javaBase64String = StringClz.$new(base64);
        var getBytesMehtod = StringClz.getBytes.overload('java.lang.String');
        var bytes = getBytesMehtod.call(javaBase64String, 'UTF-8');
        var decodeMethod = Base64Clz.decode.overload('[B', 'int');
        var originalBinary = decodeMethod.call(Base64Clz, bytes, 0);
        var bais = ByteArrayInputStreamClz.$new(originalBinary);
        if (FileUtilsClz.copy) {
            var copyMehtod = FileUtilsClz.copy.overload('java.io.InputStream', 'java.io.OutputStream');
            var fos = FileOutputStreamClz.$new(distFilepath);
            copyMehtod.call(FileUtilsClz, bais, fos);
        } else if (FileUtilsClz.copyToFile) {
            var copyMehtod = FileUtilsClz.copyToFile.overload('java.io.InputStream', 'java.io.File');
            copyMehtod.call(FileUtilsClz, bais, distFilepath);
        }
    } catch(err) {
        console.warn(err);
    }
};

function checkFile(filepath, checkLength) {
    var FileClz = Java.use("java.io.File");
    var file = FileClz.$new(filepath);
    return file.exists() && file.length() == checkLength;
};


function discoverClass(className) {
    if (!className) {
        return;
    }
    var radarClz = Java.use("gz.radar.ClassRadar");
    var radarClassResult = radarClz.discoverClass(className);
    return radarClassResult;
};

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
        paramsJs += radarMethod.parameterNames.value[j];
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

function class_exists(className) {
    var exists = false;
    try {
        var clz = Java.use(className);
        exists = true;
    } catch(err) {
        //console.log(err);
    }
    return exists;
};


//可能会超时 为了防止这个发生，可以在函数 setImmediate 中给你的脚本添加一层包装
rpc.exports = {
    loadradardex: function() {
        Java.perform(function() {
            if (!class_exists("gz.radar.ClassRadar")) {
                var context = Java.use("android.app.ActivityThread").currentApplication().getApplicationContext();
                var packageName = context.getPackageName();
                Java.openClassFile('/data/local/tmp/radar.dex').load();
            }
        });
    },
    containsclass: function(className) {
        var result = false;
        Java.perform(function() {
            result = class_exists(className);
        });
        return result;
    },
    hookjs: function(className, toSpace) {
        var found = true;
        var hookJs = "Java.perform(function() {\n";
        var className = className;
        var methodName = toSpace;
        Java.perform(function() {
            var radarClassResult = discoverClass(className);
            if (radarClassResult) {
                hookJs += generateMethodHookJs(radarClassResult, methodName);
                hookJs += "});";
            } else {
                found = false;
                console.error("Not found class " + className);
            }
        });
        if (found) {
            return hookJs;
        }
        return "";
    },
    write: function(filename, contentAsBase64) {
        Java.perform(function() {
            //console.log(contentAsBase64);
            writeFileAsBase64Content(filename, contentAsBase64);
        });
    },
    checkfile: function(filename, filelength) {
        var ret = false;
        Java.perform(function() {
            ret = checkFile(filename, filelength);
        });
        return ret;
    },
    activitys: function() {
        var report = "";
        Java.perform(function() {
            try {
                var radarAndroidClz = Java.use("gz.radar.Android");
                var activityInfos = radarAndroidClz.getActivityInfos();
                report += ("Found Activities: " + activityInfos.length) + "\n";
                for (var i = 0; i < activityInfos.length; i++) {
                    try {
                        report += ("------------------" + (i) + "--------------------") + "\n";
                        var activityInfo = activityInfos[i];
                        report += ("Activity Title: " + activityInfo.getTitle()) + "\n";
                        report += ("Activity Class: " + activityInfo.getClazz()) + "\n";
                        report += ("Activity SuperClass: " + activityInfo.getSuperClazz()) + "\n";
                        report += ("Activity ImplementInterfaces: " + activityInfo.getImplementInterfaces()) + "\n";
                        report += ("Activity OnTop: " + activityInfo.isOnTop()) + "\n";
                        report += ("Activity Paused: " + activityInfo.isPaused()) + "\n";
                        report += ("Activity Stopped: " + activityInfo.isStopped()) + "\n";
                        var androidApkFields = activityInfo.getAndroidApkFields();
                        report += ("Activity Fields: " + androidApkFields.length) + "\n";
                        for (var j = 0; j < androidApkFields.length; j++) {
                            report += ("\t" + androidApkFields[j].toLine()) + "\n";
                        }
                        var methods = activityInfo.methods();
                        report += ("Activity Methods: " + methods.length) + "\n";
                        for (var j = 0; j < methods.length; j++) {
                            report += ("\t" + methods[j]) + "\n";
                        }
                    } catch(err) {
                        console.log(err);
                    }
                }
            } catch(err) {
                console.log(err);
            }

        });
        return report;
    },
    services: function() {
        var report = "";
        Java.perform(function() {
            var radarAndroidClz = Java.use("gz.radar.Android");
            var serviceInfos = radarAndroidClz.getServiceInfos();
            report += "Found Services: " + serviceInfos.length + "\n";
            for (var i = 0; i < serviceInfos.length; i++) {
                report += ("------------------" + (i) + "--------------------") + "\n";
                var serviceInfo = serviceInfos[i];
                report += ("Service Class: " + serviceInfo.getName()) + "\n";
                report += ("Service SuperClass: " + serviceInfo.getSuperClazz()) + "\n";
                report += ("Service ImplementInterfaces: " + serviceInfo.getImplementInterfaces()) + "\n";
                var androidApkFields = serviceInfo.getAndroidApkFields();
                report += ("Service Fields: " + androidApkFields.length) + "\n";
                for (var j = 0; j < androidApkFields.length; j++) {
                    report += ("\t" + androidApkFields[j].toLine()) + "\n";
                }
                var methods = serviceInfo.methods();
                report += ("Service Methods: " + methods.length) + "\n";
                for (var j = 0; j < methods.length; j++) {
                    report += ("\t" + methods[j]) + "\n";
                }
            }
        });
        return report;
    },
    objectinfo: function(objectId) {
        var report = "";
        Java.perform(function() {
            var radarAndroidClz = Java.use("gz.radar.Android");
            var objectInfo = radarAndroidClz.getObjectInfo(objectId);
            if (!objectInfo) {
                report += "Not Found Any Object."
                return;
            }
            report += ("------------------Object--------------------") + "\n";
            report += ("Object Class: " + objectInfo.getName()) + "\n";
            report += ("Object SuperClass: " + objectInfo.getSuperClazz()) + "\n";
            report += ("Object ImplementInterfaces: " + objectInfo.getImplementInterfaces()) + "\n";
            var androidApkFields = objectInfo.getAndroidApkFields();
            report += ("Object Fields: " + androidApkFields.length) + "\n";
            for (var j = 0; j < androidApkFields.length; j++) {
                report += ("\t" + androidApkFields[j].toLine()) + "\n";
            }
            var methods = objectInfo.methods();
            report += ("Object Methods: " + methods.length) + "\n";
            for (var j = 0; j < methods.length; j++) {
                report += ("\t" + methods[j]) + "\n";
            }
        });
        return report;
    },
    objecttoexplain: function(objectId) {
        var report = "";
        Java.perform(function() {
            var radarAndroidClz = Java.use("gz.radar.Android");
            var explainObjs = radarAndroidClz.object2Explain(objectId);
            if (explainObjs == null) {
                report += "Not Found Any Object.";
                return;
            }
            if (explainObjs.isEmpty()) {
                report += "Cannot Explain the Object " + objectId+".";
                return;
            }
            report += "Found Objects: " + explainObjs.size() + "\n";
            for (var i = 0; i < explainObjs.size(); i++) {
                var key = explainObjs.getKey(i);
                var _objectId = explainObjs.getObjectId(i);
                report += ("------------------[" + key + "]--------------------") + "\n";
                report += ("Object Class: " + explainObjs.getObjectClass(i)) + "\n";
                report += ("Object Id:" + _objectId) + "\n";
            }
        });
        return report;
    },
    viewinfo: function(viewId) {
        var report = "";
        Java.perform(function() {
            var radarAndroidClz = Java.use("gz.radar.Android");
            var viewInfo = radarAndroidClz.getViewInfo(viewId + "");
            if (!viewInfo) {
                report += "Not Found Any Views."
                return;
            }
            report += ("------------------View--------------------") + "\n";
            report += ("View Id: " + viewInfo.getViewId()) + "\n";
            report += ("View IdName: " + viewInfo.getViewIdName()) + "\n";
            report += ("View Text: " + viewInfo.getViewText()) + "\n";
            report += ("View Visible: " + viewInfo.isVisible()) + "\n";
            report += ("View Class: " + viewInfo.getName()) + "\n";
            report += ("View SuperClass: " + viewInfo.getSuperClazz()) + "\n";
            report += ("View ImplementInterfaces: " + viewInfo.getImplementInterfaces()) + "\n";
            var androidApkFields = viewInfo.getAndroidApkFields();
            report += ("View Fields: " + androidApkFields.length) + "\n";
            for (var j = 0; j < androidApkFields.length; j++) {
                report += ("\t" + androidApkFields[j].toLine()) + "\n";
            }
            var methods = viewInfo.methods();
            report += ("View Methods: " + methods.length) + "\n";
            for (var j = 0; j < methods.length; j++) {
                report += ("\t" + methods[j]) + "\n";
            }
        });
        return report;
    },
    appversion: function() {
        var versionName = "";
        Java.perform(function() {
            var radarAndroidClz = Java.use("gz.radar.Android");
            versionName = radarAndroidClz.getVersionName();
        });
        return versionName;
    },
    mainactivity: function() {
        var mainactivityName = "";
        Java.perform(function() {
            var radarAndroidClz = Java.use("gz.radar.Android");
            mainactivityName = radarAndroidClz.getMainActivity();
        });
        return mainactivityName;
    },
};

Java.perform(function() {
    if (!class_exists("gz.radar.ClassRadar")) {
        var context = Java.use("android.app.ActivityThread").currentApplication().getApplicationContext();
        var packageName = context.getPackageName();
        Java.openClassFile('/data/local/tmp/radar.dex').load();
    }
});