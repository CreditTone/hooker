rpc.exports = {
    containsclass: function(className) {
        var result = false;
        Java.perform(function() {

            result = classExists(className);
        });
        return result;
    },
    discover: function(scanTargetName) {
        Java.perform(function() {
            checkRadarDex();
            scanTargets(scanTargetName, "");
        });
    },
    hookjs: function(hookCmdArg) {
        var hookJs = "Java.perform(function() {\n" +
        		"//如果需要使用radar请去除注释\n"+
        		"//checkRadarDex();\n\n\n"+
        		"//常用类帮你声明好\n"+
        		"var StringClz = Java.use('java.lang.String');\n\n\n";
        Java.perform(function() {
            checkRadarDex();
            var class_method_pair = hookCmdArg.split(":");
            var className = class_method_pair[0];
            var methodName = class_method_pair[1];
            var radarClassResults = scanTargets(className, methodName);
            for (var j = 0; j < radarClassResults.length; j++) {
                hookJs += generateMethodHookJs(radarClassResults[j], methodName);
            }
        });
        hookJs += "});";
        return hookJs;
    },
    hookonclick: function() {
        var hookJs = "Java.perform(function() {\n" +
        		"//如果需要使用radar请去除注释\n"+
        		"//checkRadarDex();\n\n\n"+
        		"//常用类帮你声明好\n"+
        		"var StringClz = Java.use('java.lang.String');\n\n\n";
        Jav.perform(function() {
            checkRadarDex();
            var radarClassResults = findOffspringsClasses('android.view.View$OnClickListener', '.*');
            for (var i = 0; i < radarClassResults.length; i++) {
                hookJs += generateMethodHookJs(radarClassResults[i], 'onClick');
            }
        });
        hookJs += "});";
        return hookJs;
    },
};