//androidx.viewpager.widget.ViewPager:?
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
    var reg = RegExp(eval("/"+str2+"/"));
    if(str1 && str1.match && str1.match(reg)){
        return true;
    }else{
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
    console.log("------------start:" + invokeId + ",objectHash:"+executor+",thread:" + threadClz.currentThread().getId() + ",timestamp:" + startTime+"---------------");
    console.log(methodName);
    console.log(stackInfo.substring(20));
    console.log("------------end:" + invokeId + ",usedtime:" + (new Date().getTime() - startTime) +"---------------\n");
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
    	console.log(libname+" exports num:"+exports.length);
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
    }else{
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
    while(new Date().getTime() < startTime) {}
};

Java.perform(function() {
	//如果需要使用radar请去除注释
	//checkRadarDex();
	//常用类帮你声明好
	var StringClz = Java.use('java.lang.String');
	//下面是生成的代码
var androidx_viewpager_widget_ViewPager_clz = Java.use('androidx.viewpager.widget.ViewPager');var androidx_viewpager_widget_ViewPager_clz_method_removeOnAdapterChangeListener_xzi8=androidx_viewpager_widget_ViewPager_clz.removeOnAdapterChangeListener.overload('androidx.viewpager.widget.ViewPager$OnAdapterChangeListener');androidx_viewpager_widget_ViewPager_clz_method_removeOnAdapterChangeListener_xzi8.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_removeOnAdapterChangeListener_xzi8.call(this,v0);methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.removeOnAdapterChangeListener(androidx.viewpager.widget.ViewPager$OnAdapterChangeListener)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_canScrollHorizontally_kdby=androidx_viewpager_widget_ViewPager_clz.canScrollHorizontally.overload('int');androidx_viewpager_widget_ViewPager_clz_method_canScrollHorizontally_kdby.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_canScrollHorizontally_kdby.call(this,v0);methodInBeat(invokeId, startTime, 'public boolean androidx.viewpager.widget.ViewPager.canScrollHorizontally(int)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_a_3e9r=androidx_viewpager_widget_ViewPager_clz.a.overload('float','float');androidx_viewpager_widget_ViewPager_clz_method_a_3e9r.implementation = function(v0,v1) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_a_3e9r.call(this,v0,v1);methodInBeat(invokeId, startTime, 'private boolean androidx.viewpager.widget.ViewPager.a(float,float)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_b_0bec=androidx_viewpager_widget_ViewPager_clz.b.overload('float');androidx_viewpager_widget_ViewPager_clz_method_b_0bec.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_b_0bec.call(this,v0);methodInBeat(invokeId, startTime, 'private boolean androidx.viewpager.widget.ViewPager.b(float)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_onSaveInstanceState_f2p3=androidx_viewpager_widget_ViewPager_clz.onSaveInstanceState.overload();androidx_viewpager_widget_ViewPager_clz_method_onSaveInstanceState_f2p3.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_onSaveInstanceState_f2p3.call(this);methodInBeat(invokeId, startTime, 'public android.os.Parcelable androidx.viewpager.widget.ViewPager.onSaveInstanceState()', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_onSizeChanged_wddq=androidx_viewpager_widget_ViewPager_clz.onSizeChanged.overload('int','int','int','int');androidx_viewpager_widget_ViewPager_clz_method_onSizeChanged_wddq.implementation = function(v0,v1,v2,v3) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_onSizeChanged_wddq.call(this,v0,v1,v2,v3);methodInBeat(invokeId, startTime, 'protected void androidx.viewpager.widget.ViewPager.onSizeChanged(int,int,int,int)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_dispatchKeyEvent_1xuu=androidx_viewpager_widget_ViewPager_clz.dispatchKeyEvent.overload('android.view.KeyEvent');androidx_viewpager_widget_ViewPager_clz_method_dispatchKeyEvent_1xuu.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_dispatchKeyEvent_1xuu.call(this,v0);methodInBeat(invokeId, startTime, 'public boolean androidx.viewpager.widget.ViewPager.dispatchKeyEvent(android.view.KeyEvent)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_getAdapter_4rve=androidx_viewpager_widget_ViewPager_clz.getAdapter.overload();androidx_viewpager_widget_ViewPager_clz_method_getAdapter_4rve.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_getAdapter_4rve.call(this);methodInBeat(invokeId, startTime, 'public androidx.viewpager.widget.PagerAdapter androidx.viewpager.widget.ViewPager.getAdapter()', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_clearOnPageChangeListeners_yj1n=androidx_viewpager_widget_ViewPager_clz.clearOnPageChangeListeners.overload();androidx_viewpager_widget_ViewPager_clz_method_clearOnPageChangeListeners_yj1n.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_clearOnPageChangeListeners_yj1n.call(this);methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.clearOnPageChangeListeners()', executor);};var androidx_viewpager_widget_ViewPager_clz_method_j_cff8=androidx_viewpager_widget_ViewPager_clz.j.overload();androidx_viewpager_widget_ViewPager_clz_method_j_cff8.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_j_cff8.call(this);methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.j()', executor);};var androidx_viewpager_widget_ViewPager_clz_method_fakeDragBy_k0c8=androidx_viewpager_widget_ViewPager_clz.fakeDragBy.overload('float');androidx_viewpager_widget_ViewPager_clz_method_fakeDragBy_k0c8.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_fakeDragBy_k0c8.call(this,v0);methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.fakeDragBy(float)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_a_r49c=androidx_viewpager_widget_ViewPager_clz.a.overload('float');androidx_viewpager_widget_ViewPager_clz_method_a_r49c.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_a_r49c.call(this,v0);methodInBeat(invokeId, startTime, 'float androidx.viewpager.widget.ViewPager.a(float)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_a_cnfa=androidx_viewpager_widget_ViewPager_clz.a.overload('int','int','int');androidx_viewpager_widget_ViewPager_clz_method_a_cnfa.implementation = function(v0,v1,v2) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_a_cnfa.call(this,v0,v1,v2);methodInBeat(invokeId, startTime, 'void androidx.viewpager.widget.ViewPager.a(int,int,int)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_onLayout_s02g=androidx_viewpager_widget_ViewPager_clz.onLayout.overload('boolean','int','int','int','int');androidx_viewpager_widget_ViewPager_clz_method_onLayout_s02g.implementation = function(v0,v1,v2,v3,v4) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_onLayout_s02g.call(this,v0,v1,v2,v3,v4);methodInBeat(invokeId, startTime, 'protected void androidx.viewpager.widget.ViewPager.onLayout(boolean,int,int,int,int)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_setCurrentItem_904f=androidx_viewpager_widget_ViewPager_clz.setCurrentItem.overload('int');androidx_viewpager_widget_ViewPager_clz_method_setCurrentItem_904f.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_setCurrentItem_904f.call(this,v0);methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.setCurrentItem(int)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_dispatchPopulateAccessibilityEvent_45zt=androidx_viewpager_widget_ViewPager_clz.dispatchPopulateAccessibilityEvent.overload('android.view.accessibility.AccessibilityEvent');androidx_viewpager_widget_ViewPager_clz_method_dispatchPopulateAccessibilityEvent_45zt.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_dispatchPopulateAccessibilityEvent_45zt.call(this,v0);methodInBeat(invokeId, startTime, 'public boolean androidx.viewpager.widget.ViewPager.dispatchPopulateAccessibilityEvent(android.view.accessibility.AccessibilityEvent)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_setScrollingCacheEnabled_mlqo=androidx_viewpager_widget_ViewPager_clz.setScrollingCacheEnabled.overload('boolean');androidx_viewpager_widget_ViewPager_clz_method_setScrollingCacheEnabled_mlqo.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_setScrollingCacheEnabled_mlqo.call(this,v0);methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.setScrollingCacheEnabled(boolean)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_c_ar1w=androidx_viewpager_widget_ViewPager_clz.c.overload('int');androidx_viewpager_widget_ViewPager_clz_method_c_ar1w.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_c_ar1w.call(this,v0);methodInBeat(invokeId, startTime, 'private boolean androidx.viewpager.widget.ViewPager.c(int)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_a_xo9b=androidx_viewpager_widget_ViewPager_clz.a.overload('android.view.MotionEvent');androidx_viewpager_widget_ViewPager_clz_method_a_xo9b.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_a_xo9b.call(this,v0);methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.a(android.view.MotionEvent)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_b_zdis=androidx_viewpager_widget_ViewPager_clz.b.overload();androidx_viewpager_widget_ViewPager_clz_method_b_zdis.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_b_zdis.call(this);methodInBeat(invokeId, startTime, 'void androidx.viewpager.widget.ViewPager.b()', executor);};var androidx_viewpager_widget_ViewPager_clz_method_a_u3of=androidx_viewpager_widget_ViewPager_clz.a.overload('int','float','int','int');androidx_viewpager_widget_ViewPager_clz_method_a_u3of.implementation = function(v0,v1,v2,v3) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_a_u3of.call(this,v0,v1,v2,v3);methodInBeat(invokeId, startTime, 'private int androidx.viewpager.widget.ViewPager.a(int,float,int,int)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_d_cm2e=androidx_viewpager_widget_ViewPager_clz.d.overload();androidx_viewpager_widget_ViewPager_clz_method_d_cm2e.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_d_cm2e.call(this);methodInBeat(invokeId, startTime, 'boolean androidx.viewpager.widget.ViewPager.d()', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_a_rndg=androidx_viewpager_widget_ViewPager_clz.a.overload('boolean');androidx_viewpager_widget_ViewPager_clz_method_a_rndg.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_a_rndg.call(this,v0);methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.a(boolean)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_setScrollState_8ntl=androidx_viewpager_widget_ViewPager_clz.setScrollState.overload('int');androidx_viewpager_widget_ViewPager_clz_method_setScrollState_8ntl.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_setScrollState_8ntl.call(this,v0);methodInBeat(invokeId, startTime, 'void androidx.viewpager.widget.ViewPager.setScrollState(int)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_g_4doe=androidx_viewpager_widget_ViewPager_clz.g.overload();androidx_viewpager_widget_ViewPager_clz_method_g_4doe.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_g_4doe.call(this);methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.g()', executor);};var androidx_viewpager_widget_ViewPager_clz_method_a_f3b9=androidx_viewpager_widget_ViewPager_clz.a.overload('int','boolean','int','boolean');androidx_viewpager_widget_ViewPager_clz_method_a_f3b9.implementation = function(v0,v1,v2,v3) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_a_f3b9.call(this,v0,v1,v2,v3);methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.a(int,boolean,int,boolean)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_onRequestFocusInDescendants_26kd=androidx_viewpager_widget_ViewPager_clz.onRequestFocusInDescendants.overload('int','android.graphics.Rect');androidx_viewpager_widget_ViewPager_clz_method_onRequestFocusInDescendants_26kd.implementation = function(v0,v1) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_onRequestFocusInDescendants_26kd.call(this,v0,v1);methodInBeat(invokeId, startTime, 'protected boolean androidx.viewpager.widget.ViewPager.onRequestFocusInDescendants(int,android.graphics.Rect)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_getPageMargin_8inm=androidx_viewpager_widget_ViewPager_clz.getPageMargin.overload();androidx_viewpager_widget_ViewPager_clz_method_getPageMargin_8inm.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_getPageMargin_8inm.call(this);methodInBeat(invokeId, startTime, 'public int androidx.viewpager.widget.ViewPager.getPageMargin()', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_e_0aod=androidx_viewpager_widget_ViewPager_clz.e.overload();androidx_viewpager_widget_ViewPager_clz_method_e_0aod.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_e_0aod.call(this);methodInBeat(invokeId, startTime, 'boolean androidx.viewpager.widget.ViewPager.e()', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_c_fx8z=androidx_viewpager_widget_ViewPager_clz.c.overload('android.view.View');androidx_viewpager_widget_ViewPager_clz_method_c_fx8z.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = 'Class';var ret = androidx_viewpager_widget_ViewPager_clz_method_c_fx8z.call(androidx_viewpager_widget_ViewPager_clz,v0);methodInBeat(invokeId, startTime, 'private static boolean androidx.viewpager.widget.ViewPager.c(android.view.View)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_isFakeDragging_i619=androidx_viewpager_widget_ViewPager_clz.isFakeDragging.overload();androidx_viewpager_widget_ViewPager_clz_method_isFakeDragging_i619.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_isFakeDragging_i619.call(this);methodInBeat(invokeId, startTime, 'public boolean androidx.viewpager.widget.ViewPager.isFakeDragging()', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_addOnAdapterChangeListener_82dd=androidx_viewpager_widget_ViewPager_clz.addOnAdapterChangeListener.overload('androidx.viewpager.widget.ViewPager$OnAdapterChangeListener');androidx_viewpager_widget_ViewPager_clz_method_addOnAdapterChangeListener_82dd.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_addOnAdapterChangeListener_82dd.call(this,v0);methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.addOnAdapterChangeListener(androidx.viewpager.widget.ViewPager$OnAdapterChangeListener)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_getOffscreenPageLimit_f5vq=androidx_viewpager_widget_ViewPager_clz.getOffscreenPageLimit.overload();androidx_viewpager_widget_ViewPager_clz_method_getOffscreenPageLimit_f5vq.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_getOffscreenPageLimit_f5vq.call(this);methodInBeat(invokeId, startTime, 'public int androidx.viewpager.widget.ViewPager.getOffscreenPageLimit()', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_b_07j1=androidx_viewpager_widget_ViewPager_clz.b.overload('int','float','int');androidx_viewpager_widget_ViewPager_clz_method_b_07j1.implementation = function(v0,v1,v2) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_b_07j1.call(this,v0,v1,v2);methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.b(int,float,int)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_addTouchables_6c5l=androidx_viewpager_widget_ViewPager_clz.addTouchables.overload('java.util.ArrayList');androidx_viewpager_widget_ViewPager_clz_method_addTouchables_6c5l.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_addTouchables_6c5l.call(this,v0);methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.addTouchables(java.util.ArrayList)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_getClientWidth_6jt4=androidx_viewpager_widget_ViewPager_clz.getClientWidth.overload();androidx_viewpager_widget_ViewPager_clz_method_getClientWidth_6jt4.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_getClientWidth_6jt4.call(this);methodInBeat(invokeId, startTime, 'private int androidx.viewpager.widget.ViewPager.getClientWidth()', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_a_h4gj=androidx_viewpager_widget_ViewPager_clz.a.overload('int','float','int');androidx_viewpager_widget_ViewPager_clz_method_a_h4gj.implementation = function(v0,v1,v2) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_a_h4gj.call(this,v0,v1,v2);methodInBeat(invokeId, startTime, 'protected void androidx.viewpager.widget.ViewPager.a(int,float,int)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_generateLayoutParams_76gg=androidx_viewpager_widget_ViewPager_clz.generateLayoutParams.overload('android.view.ViewGroup$LayoutParams');androidx_viewpager_widget_ViewPager_clz_method_generateLayoutParams_76gg.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_generateLayoutParams_76gg.call(this,v0);methodInBeat(invokeId, startTime, 'protected android.view.ViewGroup$LayoutParams androidx.viewpager.widget.ViewPager.generateLayoutParams(android.view.ViewGroup$LayoutParams)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_a_f6cc=androidx_viewpager_widget_ViewPager_clz.a.overload('int','boolean','boolean');androidx_viewpager_widget_ViewPager_clz_method_a_f6cc.implementation = function(v0,v1,v2) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_a_f6cc.call(this,v0,v1,v2);methodInBeat(invokeId, startTime, 'void androidx.viewpager.widget.ViewPager.a(int,boolean,boolean)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_setPageTransformer_zuv8=androidx_viewpager_widget_ViewPager_clz.setPageTransformer.overload('boolean','androidx.viewpager.widget.ViewPager$PageTransformer');androidx_viewpager_widget_ViewPager_clz_method_setPageTransformer_zuv8.implementation = function(v0,v1) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_setPageTransformer_zuv8.call(this,v0,v1);methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.setPageTransformer(boolean,androidx.viewpager.widget.ViewPager$PageTransformer)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_drawableStateChanged_x8ko=androidx_viewpager_widget_ViewPager_clz.drawableStateChanged.overload();androidx_viewpager_widget_ViewPager_clz_method_drawableStateChanged_x8ko.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_drawableStateChanged_x8ko.call(this);methodInBeat(invokeId, startTime, 'protected void androidx.viewpager.widget.ViewPager.drawableStateChanged()', executor);};var androidx_viewpager_widget_ViewPager_clz_method_onTouchEvent_jmmi=androidx_viewpager_widget_ViewPager_clz.onTouchEvent.overload('android.view.MotionEvent');androidx_viewpager_widget_ViewPager_clz_method_onTouchEvent_jmmi.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_onTouchEvent_jmmi.call(this,v0);methodInBeat(invokeId, startTime, 'public boolean androidx.viewpager.widget.ViewPager.onTouchEvent(android.view.MotionEvent)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_generateLayoutParams_vm64=androidx_viewpager_widget_ViewPager_clz.generateLayoutParams.overload('android.util.AttributeSet');androidx_viewpager_widget_ViewPager_clz_method_generateLayoutParams_vm64.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_generateLayoutParams_vm64.call(this,v0);methodInBeat(invokeId, startTime, 'public android.view.ViewGroup$LayoutParams androidx.viewpager.widget.ViewPager.generateLayoutParams(android.util.AttributeSet)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_setPageMarginDrawable_zv4s=androidx_viewpager_widget_ViewPager_clz.setPageMarginDrawable.overload('android.graphics.drawable.Drawable');androidx_viewpager_widget_ViewPager_clz_method_setPageMarginDrawable_zv4s.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_setPageMarginDrawable_zv4s.call(this,v0);methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.setPageMarginDrawable(android.graphics.drawable.Drawable)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_a_u06f=androidx_viewpager_widget_ViewPager_clz.a.overload('android.view.View','boolean','int','int','int');androidx_viewpager_widget_ViewPager_clz_method_a_u06f.implementation = function(v0,v1,v2,v3,v4) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_a_u06f.call(this,v0,v1,v2,v3,v4);methodInBeat(invokeId, startTime, 'protected boolean androidx.viewpager.widget.ViewPager.a(android.view.View,boolean,int,int,int)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_e_is5o=androidx_viewpager_widget_ViewPager_clz.e.overload('int');androidx_viewpager_widget_ViewPager_clz_method_e_is5o.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_e_is5o.call(this,v0);methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.e(int)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_d_4t6i=androidx_viewpager_widget_ViewPager_clz.d.overload('int');androidx_viewpager_widget_ViewPager_clz_method_d_4t6i.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_d_4t6i.call(this,v0);methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.d(int)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_endFakeDrag_na1q=androidx_viewpager_widget_ViewPager_clz.endFakeDrag.overload();androidx_viewpager_widget_ViewPager_clz_method_endFakeDrag_na1q.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_endFakeDrag_na1q.call(this);methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.endFakeDrag()', executor);};var androidx_viewpager_widget_ViewPager_clz_method_setOffscreenPageLimit_8vtv=androidx_viewpager_widget_ViewPager_clz.setOffscreenPageLimit.overload('int');androidx_viewpager_widget_ViewPager_clz_method_setOffscreenPageLimit_8vtv.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_setOffscreenPageLimit_8vtv.call(this,v0);methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.setOffscreenPageLimit(int)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_a_tj2c=androidx_viewpager_widget_ViewPager_clz.a.overload('android.view.View');androidx_viewpager_widget_ViewPager_clz_method_a_tj2c.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_a_tj2c.call(this,v0);methodInBeat(invokeId, startTime, 'androidx.viewpager.widget.ViewPager$ItemInfo androidx.viewpager.widget.ViewPager.a(android.view.View)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_getCurrentItem_bfxa=androidx_viewpager_widget_ViewPager_clz.getCurrentItem.overload();androidx_viewpager_widget_ViewPager_clz_method_getCurrentItem_bfxa.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_getCurrentItem_bfxa.call(this);methodInBeat(invokeId, startTime, 'public int androidx.viewpager.widget.ViewPager.getCurrentItem()', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_onAttachedToWindow_phag=androidx_viewpager_widget_ViewPager_clz.onAttachedToWindow.overload();androidx_viewpager_widget_ViewPager_clz_method_onAttachedToWindow_phag.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_onAttachedToWindow_phag.call(this);methodInBeat(invokeId, startTime, 'protected void androidx.viewpager.widget.ViewPager.onAttachedToWindow()', executor);};var androidx_viewpager_widget_ViewPager_clz_method_c_3051=androidx_viewpager_widget_ViewPager_clz.c.overload('boolean');androidx_viewpager_widget_ViewPager_clz_method_c_3051.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_c_3051.call(this,v0);methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.c(boolean)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_setPageMargin_oeqr=androidx_viewpager_widget_ViewPager_clz.setPageMargin.overload('int');androidx_viewpager_widget_ViewPager_clz_method_setPageMargin_oeqr.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_setPageMargin_oeqr.call(this,v0);methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.setPageMargin(int)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_removeView_ilkk=androidx_viewpager_widget_ViewPager_clz.removeView.overload('android.view.View');androidx_viewpager_widget_ViewPager_clz_method_removeView_ilkk.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_removeView_ilkk.call(this,v0);methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.removeView(android.view.View)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_a_gcfb=androidx_viewpager_widget_ViewPager_clz.a.overload('androidx.viewpager.widget.ViewPager$OnPageChangeListener');androidx_viewpager_widget_ViewPager_clz_method_a_gcfb.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_a_gcfb.call(this,v0);methodInBeat(invokeId, startTime, 'androidx.viewpager.widget.ViewPager$OnPageChangeListener androidx.viewpager.widget.ViewPager.a(androidx.viewpager.widget.ViewPager$OnPageChangeListener)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_verifyDrawable_alny=androidx_viewpager_widget_ViewPager_clz.verifyDrawable.overload('android.graphics.drawable.Drawable');androidx_viewpager_widget_ViewPager_clz_method_verifyDrawable_alny.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_verifyDrawable_alny.call(this,v0);methodInBeat(invokeId, startTime, 'protected boolean androidx.viewpager.widget.ViewPager.verifyDrawable(android.graphics.drawable.Drawable)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_i_tp0b=androidx_viewpager_widget_ViewPager_clz.i.overload();androidx_viewpager_widget_ViewPager_clz_method_i_tp0b.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_i_tp0b.call(this);methodInBeat(invokeId, startTime, 'private androidx.viewpager.widget.ViewPager$ItemInfo androidx.viewpager.widget.ViewPager.i()', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_onDetachedFromWindow_oivb=androidx_viewpager_widget_ViewPager_clz.onDetachedFromWindow.overload();androidx_viewpager_widget_ViewPager_clz_method_onDetachedFromWindow_oivb.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_onDetachedFromWindow_oivb.call(this);methodInBeat(invokeId, startTime, 'protected void androidx.viewpager.widget.ViewPager.onDetachedFromWindow()', executor);};var androidx_viewpager_widget_ViewPager_clz_method_removeOnPageChangeListener_iqmf=androidx_viewpager_widget_ViewPager_clz.removeOnPageChangeListener.overload('androidx.viewpager.widget.ViewPager$OnPageChangeListener');androidx_viewpager_widget_ViewPager_clz_method_removeOnPageChangeListener_iqmf.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_removeOnPageChangeListener_iqmf.call(this,v0);methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.removeOnPageChangeListener(androidx.viewpager.widget.ViewPager$OnPageChangeListener)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_addFocusables_0lza=androidx_viewpager_widget_ViewPager_clz.addFocusables.overload('java.util.ArrayList','int','int');androidx_viewpager_widget_ViewPager_clz_method_addFocusables_0lza.implementation = function(v0,v1,v2) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_addFocusables_0lza.call(this,v0,v1,v2);methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.addFocusables(java.util.ArrayList,int,int)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_onMeasure_qvf9=androidx_viewpager_widget_ViewPager_clz.onMeasure.overload('int','int');androidx_viewpager_widget_ViewPager_clz_method_onMeasure_qvf9.implementation = function(v0,v1) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_onMeasure_qvf9.call(this,v0,v1);methodInBeat(invokeId, startTime, 'protected void androidx.viewpager.widget.ViewPager.onMeasure(int,int)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_a_icnp=androidx_viewpager_widget_ViewPager_clz.a.overload('int','int','int','int');androidx_viewpager_widget_ViewPager_clz_method_a_icnp.implementation = function(v0,v1,v2,v3) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_a_icnp.call(this,v0,v1,v2,v3);methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.a(int,int,int,int)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_getChildDrawingOrder_3l7j=androidx_viewpager_widget_ViewPager_clz.getChildDrawingOrder.overload('int','int');androidx_viewpager_widget_ViewPager_clz_method_getChildDrawingOrder_3l7j.implementation = function(v0,v1) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_getChildDrawingOrder_3l7j.call(this,v0,v1);methodInBeat(invokeId, startTime, 'protected int androidx.viewpager.widget.ViewPager.getChildDrawingOrder(int,int)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_executeKeyEvent_7itd=androidx_viewpager_widget_ViewPager_clz.executeKeyEvent.overload('android.view.KeyEvent');androidx_viewpager_widget_ViewPager_clz_method_executeKeyEvent_7itd.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_executeKeyEvent_7itd.call(this,v0);methodInBeat(invokeId, startTime, 'public boolean androidx.viewpager.widget.ViewPager.executeKeyEvent(android.view.KeyEvent)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_f_o86i=androidx_viewpager_widget_ViewPager_clz.f.overload();androidx_viewpager_widget_ViewPager_clz_method_f_o86i.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_f_o86i.call(this);methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.f()', executor);};var androidx_viewpager_widget_ViewPager_clz_method_beginFakeDrag_67sf=androidx_viewpager_widget_ViewPager_clz.beginFakeDrag.overload();androidx_viewpager_widget_ViewPager_clz_method_beginFakeDrag_67sf.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_beginFakeDrag_67sf.call(this);methodInBeat(invokeId, startTime, 'public boolean androidx.viewpager.widget.ViewPager.beginFakeDrag()', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_a_raqz=androidx_viewpager_widget_ViewPager_clz.a.overload('androidx.viewpager.widget.ViewPager$ItemInfo','int','androidx.viewpager.widget.ViewPager$ItemInfo');androidx_viewpager_widget_ViewPager_clz_method_a_raqz.implementation = function(v0,v1,v2) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_a_raqz.call(this,v0,v1,v2);methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.a(androidx.viewpager.widget.ViewPager$ItemInfo,int,androidx.viewpager.widget.ViewPager$ItemInfo)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_onDraw_qo7l=androidx_viewpager_widget_ViewPager_clz.onDraw.overload('android.graphics.Canvas');androidx_viewpager_widget_ViewPager_clz_method_onDraw_qo7l.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_onDraw_qo7l.call(this,v0);methodInBeat(invokeId, startTime, 'protected void androidx.viewpager.widget.ViewPager.onDraw(android.graphics.Canvas)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_h_ki6i=androidx_viewpager_widget_ViewPager_clz.h.overload();androidx_viewpager_widget_ViewPager_clz_method_h_ki6i.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_h_ki6i.call(this);methodInBeat(invokeId, startTime, 'private boolean androidx.viewpager.widget.ViewPager.h()', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_computeScroll_i83j=androidx_viewpager_widget_ViewPager_clz.computeScroll.overload();androidx_viewpager_widget_ViewPager_clz_method_computeScroll_i83j.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_computeScroll_i83j.call(this);methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.computeScroll()', executor);};var androidx_viewpager_widget_ViewPager_clz_method_a_sw57=androidx_viewpager_widget_ViewPager_clz.a.overload('int');androidx_viewpager_widget_ViewPager_clz_method_a_sw57.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_a_sw57.call(this,v0);methodInBeat(invokeId, startTime, 'void androidx.viewpager.widget.ViewPager.a(int)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_setPageMarginDrawable_buzp=androidx_viewpager_widget_ViewPager_clz.setPageMarginDrawable.overload('int');androidx_viewpager_widget_ViewPager_clz_method_setPageMarginDrawable_buzp.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_setPageMarginDrawable_buzp.call(this,v0);methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.setPageMarginDrawable(int)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_setOnPageChangeListener_n6er=androidx_viewpager_widget_ViewPager_clz.setOnPageChangeListener.overload('androidx.viewpager.widget.ViewPager$OnPageChangeListener');androidx_viewpager_widget_ViewPager_clz_method_setOnPageChangeListener_n6er.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_setOnPageChangeListener_n6er.call(this,v0);methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.setOnPageChangeListener(androidx.viewpager.widget.ViewPager$OnPageChangeListener)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_b_h3lm=androidx_viewpager_widget_ViewPager_clz.b.overload('android.view.View');androidx_viewpager_widget_ViewPager_clz_method_b_h3lm.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_b_h3lm.call(this,v0);methodInBeat(invokeId, startTime, 'androidx.viewpager.widget.ViewPager$ItemInfo androidx.viewpager.widget.ViewPager.b(android.view.View)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_a_7fv8=androidx_viewpager_widget_ViewPager_clz.a.overload();androidx_viewpager_widget_ViewPager_clz_method_a_7fv8.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_a_7fv8.call(this);methodInBeat(invokeId, startTime, 'void androidx.viewpager.widget.ViewPager.a()', executor);};var androidx_viewpager_widget_ViewPager_clz_method_b_6ir7=androidx_viewpager_widget_ViewPager_clz.b.overload('int');androidx_viewpager_widget_ViewPager_clz_method_b_6ir7.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_b_6ir7.call(this,v0);methodInBeat(invokeId, startTime, 'androidx.viewpager.widget.ViewPager$ItemInfo androidx.viewpager.widget.ViewPager.b(int)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_addOnPageChangeListener_i08s=androidx_viewpager_widget_ViewPager_clz.addOnPageChangeListener.overload('androidx.viewpager.widget.ViewPager$OnPageChangeListener');androidx_viewpager_widget_ViewPager_clz_method_addOnPageChangeListener_i08s.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_addOnPageChangeListener_i08s.call(this,v0);methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.addOnPageChangeListener(androidx.viewpager.widget.ViewPager$OnPageChangeListener)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_onInterceptTouchEvent_gbxk=androidx_viewpager_widget_ViewPager_clz.onInterceptTouchEvent.overload('android.view.MotionEvent');androidx_viewpager_widget_ViewPager_clz_method_onInterceptTouchEvent_gbxk.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_onInterceptTouchEvent_gbxk.call(this,v0);methodInBeat(invokeId, startTime, 'public boolean androidx.viewpager.widget.ViewPager.onInterceptTouchEvent(android.view.MotionEvent)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_arrowScroll_qetf=androidx_viewpager_widget_ViewPager_clz.arrowScroll.overload('int');androidx_viewpager_widget_ViewPager_clz_method_arrowScroll_qetf.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_arrowScroll_qetf.call(this,v0);methodInBeat(invokeId, startTime, 'public boolean androidx.viewpager.widget.ViewPager.arrowScroll(int)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_a_4zub=androidx_viewpager_widget_ViewPager_clz.a.overload('int','int');androidx_viewpager_widget_ViewPager_clz_method_a_4zub.implementation = function(v0,v1) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_a_4zub.call(this,v0,v1);methodInBeat(invokeId, startTime, 'androidx.viewpager.widget.ViewPager$ItemInfo androidx.viewpager.widget.ViewPager.a(int,int)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_checkLayoutParams_ok6t=androidx_viewpager_widget_ViewPager_clz.checkLayoutParams.overload('android.view.ViewGroup$LayoutParams');androidx_viewpager_widget_ViewPager_clz_method_checkLayoutParams_ok6t.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_checkLayoutParams_ok6t.call(this,v0);methodInBeat(invokeId, startTime, 'protected boolean androidx.viewpager.widget.ViewPager.checkLayoutParams(android.view.ViewGroup$LayoutParams)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_setAdapter_milk=androidx_viewpager_widget_ViewPager_clz.setAdapter.overload('androidx.viewpager.widget.PagerAdapter');androidx_viewpager_widget_ViewPager_clz_method_setAdapter_milk.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_setAdapter_milk.call(this,v0);methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.setAdapter(androidx.viewpager.widget.PagerAdapter)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_draw_9idw=androidx_viewpager_widget_ViewPager_clz.draw.overload('android.graphics.Canvas');androidx_viewpager_widget_ViewPager_clz_method_draw_9idw.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_draw_9idw.call(this,v0);methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.draw(android.graphics.Canvas)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_b_7cls=androidx_viewpager_widget_ViewPager_clz.b.overload('boolean');androidx_viewpager_widget_ViewPager_clz_method_b_7cls.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_b_7cls.call(this,v0);methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.b(boolean)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_setPageTransformer_4lnj=androidx_viewpager_widget_ViewPager_clz.setPageTransformer.overload('boolean','androidx.viewpager.widget.ViewPager$PageTransformer','int');androidx_viewpager_widget_ViewPager_clz_method_setPageTransformer_4lnj.implementation = function(v0,v1,v2) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_setPageTransformer_4lnj.call(this,v0,v1,v2);methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.setPageTransformer(boolean,androidx.viewpager.widget.ViewPager$PageTransformer,int)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_setCurrentItem_gmjj=androidx_viewpager_widget_ViewPager_clz.setCurrentItem.overload('int','boolean');androidx_viewpager_widget_ViewPager_clz_method_setCurrentItem_gmjj.implementation = function(v0,v1) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_setCurrentItem_gmjj.call(this,v0,v1);methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.setCurrentItem(int,boolean)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_a_hpik=androidx_viewpager_widget_ViewPager_clz.a.overload('android.graphics.Rect','android.view.View');androidx_viewpager_widget_ViewPager_clz_method_a_hpik.implementation = function(v0,v1) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_a_hpik.call(this,v0,v1);methodInBeat(invokeId, startTime, 'private android.graphics.Rect androidx.viewpager.widget.ViewPager.a(android.graphics.Rect,android.view.View)', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_c_wi27=androidx_viewpager_widget_ViewPager_clz.c.overload();androidx_viewpager_widget_ViewPager_clz_method_c_wi27.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_c_wi27.call(this);methodInBeat(invokeId, startTime, 'void androidx.viewpager.widget.ViewPager.c()', executor);};var androidx_viewpager_widget_ViewPager_clz_method_generateDefaultLayoutParams_klg8=androidx_viewpager_widget_ViewPager_clz.generateDefaultLayoutParams.overload();androidx_viewpager_widget_ViewPager_clz_method_generateDefaultLayoutParams_klg8.implementation = function() {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();var ret = androidx_viewpager_widget_ViewPager_clz_method_generateDefaultLayoutParams_klg8.call(this);methodInBeat(invokeId, startTime, 'protected android.view.ViewGroup$LayoutParams androidx.viewpager.widget.ViewPager.generateDefaultLayoutParams()', executor);return ret;};var androidx_viewpager_widget_ViewPager_clz_method_a_hks4=androidx_viewpager_widget_ViewPager_clz.a.overload('int','boolean','boolean','int');androidx_viewpager_widget_ViewPager_clz_method_a_hks4.implementation = function(v0,v1,v2,v3) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_a_hks4.call(this,v0,v1,v2,v3);methodInBeat(invokeId, startTime, 'void androidx.viewpager.widget.ViewPager.a(int,boolean,boolean,int)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_addView_1gtw=androidx_viewpager_widget_ViewPager_clz.addView.overload('android.view.View','int','android.view.ViewGroup$LayoutParams');androidx_viewpager_widget_ViewPager_clz_method_addView_1gtw.implementation = function(v0,v1,v2) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_addView_1gtw.call(this,v0,v1,v2);methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.addView(android.view.View,int,android.view.ViewGroup$LayoutParams)', executor);};var androidx_viewpager_widget_ViewPager_clz_method_onRestoreInstanceState_sr3b=androidx_viewpager_widget_ViewPager_clz.onRestoreInstanceState.overload('android.os.Parcelable');androidx_viewpager_widget_ViewPager_clz_method_onRestoreInstanceState_sr3b.implementation = function(v0) {var invokeId = Math.random().toString(36).slice( - 8);var startTime = new Date().getTime();var executor = this.hashCode();androidx_viewpager_widget_ViewPager_clz_method_onRestoreInstanceState_sr3b.call(this,v0);methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.onRestoreInstanceState(android.os.Parcelable)', executor);};});