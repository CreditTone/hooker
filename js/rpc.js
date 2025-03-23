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

//可能会超时 为了防止这个发生，可以在函数 setImmediate 中给你的脚本添加一层包装
rpc.exports = {
    loaddex: function(checkClassName, dexPath) {
        Java.perform(function() {
            if (!classExists(checkClassName)) {
                Java.openClassFile(dexPath).load();
            }
        });
    },
    containsclass: function(className) {
        var result = false;
        Java.perform(function() {
            result = classExists(className);
        });
        return result;
    },
    so: function(moduleName) {
        return findSOLibrary(moduleName);
    },
    findclasses: function(classRegex) {
        var report = "";
        Java.perform(function() {
            var radarClassResults = findClasses(classRegex);
            report += ("Found Classes: " + radarClassResults.length) + "\n";
            for (var j = 0; j < radarClassResults.length; j++) {
                var radarClassResult = radarClassResults[j];
                report += ("\t" + radarClassResult.describ()) + "\n";
            }
        });
        return report;
    },
    findclasses2: function(className) {
        var report = "";
        Java.perform(function() {
            var radarClassResults = findOffspringsClasses(className.trim());
            report += ("Found Classes: " + radarClassResults.length) + "\n";
            for (var j = 0; j < radarClassResults.length; j++) {
                var radarClassResult = radarClassResults[j];
                report += ("\t" + radarClassResult.describ()) + "\n";
            }
        });
        return report;
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
            return jsbeautify(hookJs);
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