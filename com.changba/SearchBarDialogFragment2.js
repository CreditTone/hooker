//com.changba.module.searchbar.SearchBarDialogFragment:?
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
            log("load " + dexfile);
        }
    });
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
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var threadClz = Java.use("java.lang.Thread");
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    console.log("------------start:" + invokeId + ",executor:" + executor + ",thread:" + threadClz.currentThread().getId() + ",timestamp:" + timestamp + "---------------");
    console.log(methodName);
    console.log(stackInfo.substring(20));
};

function methodOutBeat(invokeId, timestamp) {
    console.log("------------end:" + invokeId + ",usedtime:" + (new Date().getTime() - timestamp) + "---------------\n");
}

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
    overloadJs += "var invokeId = Math.random().toString(36).slice( - 8);";
    overloadJs += "var startTime = new Date().getTime();";
    if (handle == "this") {
        overloadJs += "var executor = this.hashCode();";
    } else {
        overloadJs += "var executor = '" + clzVarName + "';";
    }
    overloadJs += "methodInBeat(invokeId, startTime, '" + radarMethod.describe.value + "', executor);";
    overloadJs += "methodOutBeat(invokeId, startTime);";
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
    overloadJs += "var obj = ";
    overloadJs += constructorMethodVarName + ".call(this";
    if (constructorMethod.paramsNum.value > 0) {
        overloadJs += "," + paramsJs + ");";
    } else {
        overloadJs += ");";
    }
    overloadJs += "var invokeId = Math.random().toString(36).slice( - 8);";
    overloadJs += "var startTime = new Date().getTime();";
    overloadJs += "var executor = this.hashCode();";
    overloadJs += "methodInBeat(invokeId, startTime, '" + constructorMethod.describe.value + "', executor);";
    overloadJs += "methodOutBeat(invokeId, startTime);";
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
    var com_changba_module_searchbar_SearchBarDialogFragment_clz = Java.use('com.changba.module.searchbar.SearchBarDialogFragment');
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onViewCreated_qgtq = com_changba_module_searchbar_SearchBarDialogFragment_clz.onViewCreated.overload('android.view.View', 'android.os.Bundle');
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onViewCreated_qgtq.implementation = function(v0, v1) {
        com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onViewCreated_qgtq.call(this, v0, v1);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public void com.changba.module.searchbar.SearchBarDialogFragment.onViewCreated(android.view.View,android.os.Bundle)', executor);
        methodOutBeat(invokeId, startTime);
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_a_gij8 = com_changba_module_searchbar_SearchBarDialogFragment_clz.a.overload('com.changba.module.searchbar.state.base.BaseStateMachine');
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_a_gij8.implementation = function(v0) {
        com_changba_module_searchbar_SearchBarDialogFragment_clz_method_a_gij8.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'private void com.changba.module.searchbar.SearchBarDialogFragment.a(com.changba.module.searchbar.state.base.BaseStateMachine)', executor);
        methodOutBeat(invokeId, startTime);
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onKey_h33a = com_changba_module_searchbar_SearchBarDialogFragment_clz.onKey.overload('android.view.View', 'int', 'android.view.KeyEvent');
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onKey_h33a.implementation = function(v0, v1, v2) {
        var ret = com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onKey_h33a.call(this, v0, v1, v2);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public boolean com.changba.module.searchbar.SearchBarDialogFragment.onKey(android.view.View,int,android.view.KeyEvent)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onDestroy_bn0s = com_changba_module_searchbar_SearchBarDialogFragment_clz.onDestroy.overload();
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onDestroy_bn0s.implementation = function() {
        com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onDestroy_bn0s.call(this);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public void com.changba.module.searchbar.SearchBarDialogFragment.onDestroy()', executor);
        methodOutBeat(invokeId, startTime);
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_dismiss_n18q = com_changba_module_searchbar_SearchBarDialogFragment_clz.dismiss.overload();
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_dismiss_n18q.implementation = function() {
        com_changba_module_searchbar_SearchBarDialogFragment_clz_method_dismiss_n18q.call(this);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public void com.changba.module.searchbar.SearchBarDialogFragment.dismiss()', executor);
        methodOutBeat(invokeId, startTime);
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onTextChanged_p1ux = com_changba_module_searchbar_SearchBarDialogFragment_clz.onTextChanged.overload('java.lang.CharSequence', 'int', 'int', 'int');
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onTextChanged_p1ux.implementation = function(v0, v1, v2, v3) {
        com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onTextChanged_p1ux.call(this, v0, v1, v2, v3);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public void com.changba.module.searchbar.SearchBarDialogFragment.onTextChanged(java.lang.CharSequence,int,int,int)', executor);
        methodOutBeat(invokeId, startTime);
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_b_poyi = com_changba_module_searchbar_SearchBarDialogFragment_clz.b.overload('java.lang.String', 'int');
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_b_poyi.implementation = function(v0, v1) {
        com_changba_module_searchbar_SearchBarDialogFragment_clz_method_b_poyi.call(this, v0, v1);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        log(v0);
        methodInBeat(invokeId, startTime, 'private void com.changba.module.searchbar.SearchBarDialogFragment.b(java.lang.String,int)', executor);
        methodOutBeat(invokeId, startTime);
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_a_34zb = com_changba_module_searchbar_SearchBarDialogFragment_clz.a.overload('com.changba.module.searchbar.SearchBarDialogFragment');
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_a_34zb.implementation = function(v0) {
        var ret = com_changba_module_searchbar_SearchBarDialogFragment_clz_method_a_34zb.call(com_changba_module_searchbar_SearchBarDialogFragment_clz, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'com_changba_module_searchbar_SearchBarDialogFragment_clz';
        methodInBeat(invokeId, startTime, 'static com.changba.databinding.SearchbarDialogLayoutBinding com.changba.module.searchbar.SearchBarDialogFragment.a(com.changba.module.searchbar.SearchBarDialogFragment)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_a_yzpe = com_changba_module_searchbar_SearchBarDialogFragment_clz.a.overload();
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_a_yzpe.implementation = function() {
        var ret = com_changba_module_searchbar_SearchBarDialogFragment_clz_method_a_yzpe.call(this);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public boolean com.changba.module.searchbar.SearchBarDialogFragment.a()', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_c_uzmz = com_changba_module_searchbar_SearchBarDialogFragment_clz.c.overload();
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_c_uzmz.implementation = function() {
        com_changba_module_searchbar_SearchBarDialogFragment_clz_method_c_uzmz.call(this);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'private void com.changba.module.searchbar.SearchBarDialogFragment.c()', executor);
        methodOutBeat(invokeId, startTime);
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_a_s2cj = com_changba_module_searchbar_SearchBarDialogFragment_clz.a.overload('com.changba.module.searchbar.SearchBarDialogFragment$DialogStateChangeListener');
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_a_s2cj.implementation = function(v0) {
        com_changba_module_searchbar_SearchBarDialogFragment_clz_method_a_s2cj.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public void com.changba.module.searchbar.SearchBarDialogFragment.a(com.changba.module.searchbar.SearchBarDialogFragment$DialogStateChangeListener)', executor);
        methodOutBeat(invokeId, startTime);
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_afterTextChanged_c8hj = com_changba_module_searchbar_SearchBarDialogFragment_clz.afterTextChanged.overload('android.text.Editable');
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_afterTextChanged_c8hj.implementation = function(v0) {
        com_changba_module_searchbar_SearchBarDialogFragment_clz_method_afterTextChanged_c8hj.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public void com.changba.module.searchbar.SearchBarDialogFragment.afterTextChanged(android.text.Editable)', executor);
        methodOutBeat(invokeId, startTime);
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onCreateView_begh = com_changba_module_searchbar_SearchBarDialogFragment_clz.onCreateView.overload('android.view.LayoutInflater', 'android.view.ViewGroup', 'android.os.Bundle');
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onCreateView_begh.implementation = function(v0, v1, v2) {
        var ret = com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onCreateView_begh.call(this, v0, v1, v2);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public android.view.View com.changba.module.searchbar.SearchBarDialogFragment.onCreateView(android.view.LayoutInflater,android.view.ViewGroup,android.os.Bundle)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_a_yu5p = com_changba_module_searchbar_SearchBarDialogFragment_clz.a.overload('com.changba.module.searchbar.state.base.BaseStateMachine', 'android.os.Bundle');
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_a_yu5p.implementation = function(v0, v1) {
        var ret = com_changba_module_searchbar_SearchBarDialogFragment_clz_method_a_yu5p.call(com_changba_module_searchbar_SearchBarDialogFragment_clz, v0, v1);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'com_changba_module_searchbar_SearchBarDialogFragment_clz';
        methodInBeat(invokeId, startTime, 'public static com.changba.module.searchbar.SearchBarDialogFragment com.changba.module.searchbar.SearchBarDialogFragment.a(com.changba.module.searchbar.state.base.BaseStateMachine,android.os.Bundle)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_show_mk1w = com_changba_module_searchbar_SearchBarDialogFragment_clz.show.overload('android.support.v4.app.FragmentTransaction', 'java.lang.String');
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_show_mk1w.implementation = function(v0, v1) {
        var ret = com_changba_module_searchbar_SearchBarDialogFragment_clz_method_show_mk1w.call(this, v0, v1);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public int com.changba.module.searchbar.SearchBarDialogFragment.show(android.support.v4.app.FragmentTransaction,java.lang.String)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_a_n1ae = com_changba_module_searchbar_SearchBarDialogFragment_clz.a.overload('android.view.View');
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_a_n1ae.implementation = function(v0) {
        com_changba_module_searchbar_SearchBarDialogFragment_clz_method_a_n1ae.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'final void com.changba.module.searchbar.SearchBarDialogFragment.a(android.view.View)', executor);
        methodOutBeat(invokeId, startTime);
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onActivityCreated_zhxn = com_changba_module_searchbar_SearchBarDialogFragment_clz.onActivityCreated.overload('android.os.Bundle');
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onActivityCreated_zhxn.implementation = function(v0) {
        com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onActivityCreated_zhxn.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public void com.changba.module.searchbar.SearchBarDialogFragment.onActivityCreated(android.os.Bundle)', executor);
        methodOutBeat(invokeId, startTime);
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_a_jleb = com_changba_module_searchbar_SearchBarDialogFragment_clz.a.overload('java.lang.String', 'int');
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_a_jleb.implementation = function(v0, v1) {
        com_changba_module_searchbar_SearchBarDialogFragment_clz_method_a_jleb.call(this, v0, v1);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public void com.changba.module.searchbar.SearchBarDialogFragment.a(java.lang.String,int)', executor);
        methodOutBeat(invokeId, startTime);
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_b_59df = com_changba_module_searchbar_SearchBarDialogFragment_clz.b.overload();
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_b_59df.implementation = function() {
        com_changba_module_searchbar_SearchBarDialogFragment_clz_method_b_59df.call(this);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'private void com.changba.module.searchbar.SearchBarDialogFragment.b()', executor);
        methodOutBeat(invokeId, startTime);
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onCreate_g13k = com_changba_module_searchbar_SearchBarDialogFragment_clz.onCreate.overload('android.os.Bundle');
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onCreate_g13k.implementation = function(v0) {
        com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onCreate_g13k.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public void com.changba.module.searchbar.SearchBarDialogFragment.onCreate(android.os.Bundle)', executor);
        methodOutBeat(invokeId, startTime);
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_beforeTextChanged_o7kj = com_changba_module_searchbar_SearchBarDialogFragment_clz.beforeTextChanged.overload('java.lang.CharSequence', 'int', 'int', 'int');
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_beforeTextChanged_o7kj.implementation = function(v0, v1, v2, v3) {
        com_changba_module_searchbar_SearchBarDialogFragment_clz_method_beforeTextChanged_o7kj.call(this, v0, v1, v2, v3);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public void com.changba.module.searchbar.SearchBarDialogFragment.beforeTextChanged(java.lang.CharSequence,int,int,int)', executor);
        methodOutBeat(invokeId, startTime);
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_show_jhyp = com_changba_module_searchbar_SearchBarDialogFragment_clz.show.overload('android.support.v4.app.FragmentManager', 'java.lang.String');
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_show_jhyp.implementation = function(v0, v1) {
        com_changba_module_searchbar_SearchBarDialogFragment_clz_method_show_jhyp.call(this, v0, v1);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public void com.changba.module.searchbar.SearchBarDialogFragment.show(android.support.v4.app.FragmentManager,java.lang.String)', executor);
        methodOutBeat(invokeId, startTime);
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_d_8ct8 = com_changba_module_searchbar_SearchBarDialogFragment_clz.d.overload();
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_d_8ct8.implementation = function() {
        com_changba_module_searchbar_SearchBarDialogFragment_clz_method_d_8ct8.call(this);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'private void com.changba.module.searchbar.SearchBarDialogFragment.d()', executor);
        methodOutBeat(invokeId, startTime);
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onSaveInstanceState_kazo = com_changba_module_searchbar_SearchBarDialogFragment_clz.onSaveInstanceState.overload('android.os.Bundle');
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onSaveInstanceState_kazo.implementation = function(v0) {
        com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onSaveInstanceState_kazo.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public void com.changba.module.searchbar.SearchBarDialogFragment.onSaveInstanceState(android.os.Bundle)', executor);
        methodOutBeat(invokeId, startTime);
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onDismiss_r0p6 = com_changba_module_searchbar_SearchBarDialogFragment_clz.onDismiss.overload('android.content.DialogInterface');
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onDismiss_r0p6.implementation = function(v0) {
        com_changba_module_searchbar_SearchBarDialogFragment_clz_method_onDismiss_r0p6.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public void com.changba.module.searchbar.SearchBarDialogFragment.onDismiss(android.content.DialogInterface)', executor);
        methodOutBeat(invokeId, startTime);
    };
    var com_changba_module_searchbar_SearchBarDialogFragment_clz_method_a_vqnc = com_changba_module_searchbar_SearchBarDialogFragment_clz.a.overload('android.support.v4.app.FragmentActivity', 'java.lang.String');
    com_changba_module_searchbar_SearchBarDialogFragment_clz_method_a_vqnc.implementation = function(v0, v1) {
        com_changba_module_searchbar_SearchBarDialogFragment_clz_method_a_vqnc.call(this, v0, v1);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public void com.changba.module.searchbar.SearchBarDialogFragment.a(android.support.v4.app.FragmentActivity,java.lang.String)', executor);
        methodOutBeat(invokeId, startTime);
    };
});