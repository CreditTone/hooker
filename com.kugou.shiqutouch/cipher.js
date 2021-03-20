//javax.crypto.Cipher:?
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
    var java_security_SecureRandom_clz = Java.use('java.security.SecureRandom');
    var java_security_SecureRandom_clz_method_setSeed_tsea = java_security_SecureRandom_clz.setSeed.overload('long');
    java_security_SecureRandom_clz_method_setSeed_tsea.implementation = function(v0) {
        java_security_SecureRandom_clz_method_setSeed_tsea.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public void java.security.SecureRandom.setSeed(long)', executor);
        methodOutBeat(invokeId, startTime);
    };
    var java_security_SecureRandom_clz_method_setSeed_c9w7 = java_security_SecureRandom_clz.setSeed.overload('[B');
    java_security_SecureRandom_clz_method_setSeed_c9w7.implementation = function(v0) {
        java_security_SecureRandom_clz_method_setSeed_c9w7.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public synchronized void java.security.SecureRandom.setSeed(byte[])', executor);
        methodOutBeat(invokeId, startTime);
    };
    var javax_crypto_Cipher_clz = Java.use('javax.crypto.Cipher');
    var javax_crypto_Cipher_clz_method_doFinal_std2 = javax_crypto_Cipher_clz.doFinal.overload('java.nio.ByteBuffer', 'java.nio.ByteBuffer');
    javax_crypto_Cipher_clz_method_doFinal_std2.implementation = function(v0, v1) {
        var ret = javax_crypto_Cipher_clz_method_doFinal_std2.call(this, v0, v1);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final int javax.crypto.Cipher.doFinal(java.nio.ByteBuffer,java.nio.ByteBuffer) throws javax.crypto.ShortBufferException,javax.crypto.IllegalBlockSizeException,javax.crypto.BadPaddingException', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_init_chy9 = javax_crypto_Cipher_clz.init.overload('int', 'java.security.Key', 'java.security.spec.AlgorithmParameterSpec');
    javax_crypto_Cipher_clz_method_init_chy9.implementation = function(v0, v1, v2) {
        javax_crypto_Cipher_clz_method_init_chy9.call(this, v0, v1, v2);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final void javax.crypto.Cipher.init(int,java.security.Key,java.security.spec.AlgorithmParameterSpec) throws java.security.InvalidKeyException,java.security.InvalidAlgorithmParameterException', executor);
        methodOutBeat(invokeId, startTime);
    };
    var javax_crypto_Cipher_clz_method_tryTransform_s2x4 = javax_crypto_Cipher_clz.tryTransform.overload('java.security.Key', 'java.security.Provider', 'java.lang.String', '[Ljava.lang.String;', 'javax.crypto.Cipher$NeedToSet');
    javax_crypto_Cipher_clz_method_tryTransform_s2x4.implementation = function(v0, v1, v2, v3, v4) {
        var ret = javax_crypto_Cipher_clz_method_tryTransform_s2x4.call(javax_crypto_Cipher_clz, v0, v1, v2, v3, v4);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'javax_crypto_Cipher_clz';
        methodInBeat(invokeId, startTime, 'private static org.apache.harmony.security.fortress.Engine$SpiAndProvider javax.crypto.Cipher.tryTransform(java.security.Key,java.security.Provider,java.lang.String,java.lang.String[],javax.crypto.Cipher$NeedToSet)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_init_da7l = javax_crypto_Cipher_clz.init.overload('int', 'java.security.cert.Certificate', 'java.security.SecureRandom');
    javax_crypto_Cipher_clz_method_init_da7l.implementation = function(v0, v1, v2) {
        javax_crypto_Cipher_clz_method_init_da7l.call(this, v0, v1, v2);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final void javax.crypto.Cipher.init(int,java.security.cert.Certificate,java.security.SecureRandom) throws java.security.InvalidKeyException', executor);
        methodOutBeat(invokeId, startTime);
    };
    var javax_crypto_Cipher_clz_method_update_ok86 = javax_crypto_Cipher_clz.update.overload('[B', 'int', 'int');
    javax_crypto_Cipher_clz_method_update_ok86.implementation = function(v0, v1, v2) {
        var ret = javax_crypto_Cipher_clz_method_update_ok86.call(this, v0, v1, v2);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final [B javax.crypto.Cipher.update(byte[],int,int)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_getExemptionMechanism_lyot = javax_crypto_Cipher_clz.getExemptionMechanism.overload();
    javax_crypto_Cipher_clz_method_getExemptionMechanism_lyot.implementation = function() {
        var ret = javax_crypto_Cipher_clz_method_getExemptionMechanism_lyot.call(this);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final javax.crypto.ExemptionMechanism javax.crypto.Cipher.getExemptionMechanism()', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_tryCombinations_cyp9 = javax_crypto_Cipher_clz.tryCombinations.overload('java.security.Key', 'java.security.Provider', '[Ljava.lang.String;');
    javax_crypto_Cipher_clz_method_tryCombinations_cyp9.implementation = function(v0, v1, v2) {
        var ret = javax_crypto_Cipher_clz_method_tryCombinations_cyp9.call(javax_crypto_Cipher_clz, v0, v1, v2);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'javax_crypto_Cipher_clz';
        methodInBeat(invokeId, startTime, 'private static org.apache.harmony.security.fortress.Engine$SpiAndProvider javax.crypto.Cipher.tryCombinations(java.security.Key,java.security.Provider,java.lang.String[])', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_init_uuhl = javax_crypto_Cipher_clz.init.overload('int', 'java.security.cert.Certificate');
    javax_crypto_Cipher_clz_method_init_uuhl.implementation = function(v0, v1) {
        javax_crypto_Cipher_clz_method_init_uuhl.call(this, v0, v1);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final void javax.crypto.Cipher.init(int,java.security.cert.Certificate) throws java.security.InvalidKeyException', executor);
        methodOutBeat(invokeId, startTime);
    };
    var javax_crypto_Cipher_clz_method_getInstance_ot5d = javax_crypto_Cipher_clz.getInstance.overload('java.lang.String', 'java.lang.String');
    javax_crypto_Cipher_clz_method_getInstance_ot5d.implementation = function(v0, v1) {
        var ret = javax_crypto_Cipher_clz_method_getInstance_ot5d.call(javax_crypto_Cipher_clz, v0, v1);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'javax_crypto_Cipher_clz';
        methodInBeat(invokeId, startTime, 'public static final javax.crypto.Cipher javax.crypto.Cipher.getInstance(java.lang.String,java.lang.String) throws java.security.NoSuchAlgorithmException,java.security.NoSuchProviderException,javax.crypto.NoSuchPaddingException', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_getOutputSize_f23n = javax_crypto_Cipher_clz.getOutputSize.overload('int');
    javax_crypto_Cipher_clz_method_getOutputSize_f23n.implementation = function(v0) {
        var ret = javax_crypto_Cipher_clz_method_getOutputSize_f23n.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final int javax.crypto.Cipher.getOutputSize(int)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_update_tx68 = javax_crypto_Cipher_clz.update.overload('[B', 'int', 'int', '[B', 'int');
    javax_crypto_Cipher_clz_method_update_tx68.implementation = function(v0, v1, v2, v3, v4) {
        var ret = javax_crypto_Cipher_clz_method_update_tx68.call(this, v0, v1, v2, v3, v4);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final int javax.crypto.Cipher.update(byte[],int,int,byte[],int) throws javax.crypto.ShortBufferException', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_doFinal_ihw9 = javax_crypto_Cipher_clz.doFinal.overload('[B', 'int', 'int', '[B', 'int');
    javax_crypto_Cipher_clz_method_doFinal_ihw9.implementation = function(v0, v1, v2, v3, v4) {
        var ret = javax_crypto_Cipher_clz_method_doFinal_ihw9.call(this, v0, v1, v2, v3, v4);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final int javax.crypto.Cipher.doFinal(byte[],int,int,byte[],int) throws javax.crypto.ShortBufferException,javax.crypto.IllegalBlockSizeException,javax.crypto.BadPaddingException', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_init_34ei = javax_crypto_Cipher_clz.init.overload('int', 'java.security.Key', 'java.security.AlgorithmParameters', 'java.security.SecureRandom');
    javax_crypto_Cipher_clz_method_init_34ei.implementation = function(v0, v1, v2, v3) {
        javax_crypto_Cipher_clz_method_init_34ei.call(this, v0, v1, v2, v3);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final void javax.crypto.Cipher.init(int,java.security.Key,java.security.AlgorithmParameters,java.security.SecureRandom) throws java.security.InvalidKeyException,java.security.InvalidAlgorithmParameterException', executor);
        methodOutBeat(invokeId, startTime);
    };
    var javax_crypto_Cipher_clz_method_getAlgorithm_lyxb = javax_crypto_Cipher_clz.getAlgorithm.overload();
    javax_crypto_Cipher_clz_method_getAlgorithm_lyxb.implementation = function() {
        var ret = javax_crypto_Cipher_clz_method_getAlgorithm_lyxb.call(this);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final java.lang.String javax.crypto.Cipher.getAlgorithm()', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_invalidTransformation_ntcg = javax_crypto_Cipher_clz.invalidTransformation.overload('java.lang.String');
    javax_crypto_Cipher_clz_method_invalidTransformation_ntcg.implementation = function(v0) {
        var ret = javax_crypto_Cipher_clz_method_invalidTransformation_ntcg.call(javax_crypto_Cipher_clz, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'javax_crypto_Cipher_clz';
        methodInBeat(invokeId, startTime, 'private static java.security.NoSuchAlgorithmException javax.crypto.Cipher.invalidTransformation(java.lang.String) throws java.security.NoSuchAlgorithmException', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_getInstance_oj4j = javax_crypto_Cipher_clz.getInstance.overload('java.lang.String', 'java.security.Provider');
    javax_crypto_Cipher_clz_method_getInstance_oj4j.implementation = function(v0, v1) {
        var ret = javax_crypto_Cipher_clz_method_getInstance_oj4j.call(javax_crypto_Cipher_clz, v0, v1);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'javax_crypto_Cipher_clz';
        methodInBeat(invokeId, startTime, 'public static final javax.crypto.Cipher javax.crypto.Cipher.getInstance(java.lang.String,java.security.Provider) throws java.security.NoSuchAlgorithmException,javax.crypto.NoSuchPaddingException', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_getCipher_2lau = javax_crypto_Cipher_clz.getCipher.overload('java.lang.String', 'java.security.Provider');
    javax_crypto_Cipher_clz_method_getCipher_2lau.implementation = function(v0, v1) {
        var ret = javax_crypto_Cipher_clz_method_getCipher_2lau.call(javax_crypto_Cipher_clz, v0, v1);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'javax_crypto_Cipher_clz';
        methodInBeat(invokeId, startTime, 'private static javax.crypto.Cipher javax.crypto.Cipher.getCipher(java.lang.String,java.security.Provider) throws java.security.NoSuchAlgorithmException,javax.crypto.NoSuchPaddingException', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_checkInputOffsetAndCount_q4ed = javax_crypto_Cipher_clz.checkInputOffsetAndCount.overload('int', 'int', 'int');
    javax_crypto_Cipher_clz_method_checkInputOffsetAndCount_q4ed.implementation = function(v0, v1, v2) {
        javax_crypto_Cipher_clz_method_checkInputOffsetAndCount_q4ed.call(javax_crypto_Cipher_clz, v0, v1, v2);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'javax_crypto_Cipher_clz';
        methodInBeat(invokeId, startTime, 'private static void javax.crypto.Cipher.checkInputOffsetAndCount(int,int,int)', executor);
        methodOutBeat(invokeId, startTime);
    };
    var javax_crypto_Cipher_clz_method_update_mmvk = javax_crypto_Cipher_clz.update.overload('java.nio.ByteBuffer', 'java.nio.ByteBuffer');
    javax_crypto_Cipher_clz_method_update_mmvk.implementation = function(v0, v1) {
        var ret = javax_crypto_Cipher_clz_method_update_mmvk.call(this, v0, v1);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final int javax.crypto.Cipher.update(java.nio.ByteBuffer,java.nio.ByteBuffer) throws javax.crypto.ShortBufferException', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_getProvider_u7pr = javax_crypto_Cipher_clz.getProvider.overload();
    javax_crypto_Cipher_clz_method_getProvider_u7pr.implementation = function() {
        var ret = javax_crypto_Cipher_clz_method_getProvider_u7pr.call(this);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final java.security.Provider javax.crypto.Cipher.getProvider()', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_updateAAD_alep = javax_crypto_Cipher_clz.updateAAD.overload('[B', 'int', 'int');
    javax_crypto_Cipher_clz_method_updateAAD_alep.implementation = function(v0, v1, v2) {
        javax_crypto_Cipher_clz_method_updateAAD_alep.call(this, v0, v1, v2);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final void javax.crypto.Cipher.updateAAD(byte[],int,int)', executor);
        methodOutBeat(invokeId, startTime);
    };
    var javax_crypto_Cipher_clz_method_getMaxAllowedKeyLength_4cvh = javax_crypto_Cipher_clz.getMaxAllowedKeyLength.overload('java.lang.String');
    javax_crypto_Cipher_clz_method_getMaxAllowedKeyLength_4cvh.implementation = function(v0) {
        var ret = javax_crypto_Cipher_clz_method_getMaxAllowedKeyLength_4cvh.call(javax_crypto_Cipher_clz, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'javax_crypto_Cipher_clz';
        methodInBeat(invokeId, startTime, 'public static final int javax.crypto.Cipher.getMaxAllowedKeyLength(java.lang.String) throws java.security.NoSuchAlgorithmException', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_update_bto4 = javax_crypto_Cipher_clz.update.overload('[B');
    javax_crypto_Cipher_clz_method_update_bto4.implementation = function(v0) {
        var ret = javax_crypto_Cipher_clz_method_update_bto4.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final [B javax.crypto.Cipher.update(byte[])', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_doFinal_dxgo = javax_crypto_Cipher_clz.doFinal.overload('[B', 'int', 'int', '[B');
    javax_crypto_Cipher_clz_method_doFinal_dxgo.implementation = function(v0, v1, v2, v3) {
        var ret = javax_crypto_Cipher_clz_method_doFinal_dxgo.call(this, v0, v1, v2, v3);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final int javax.crypto.Cipher.doFinal(byte[],int,int,byte[]) throws javax.crypto.ShortBufferException,javax.crypto.IllegalBlockSizeException,javax.crypto.BadPaddingException', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_getInstance_03ug = javax_crypto_Cipher_clz.getInstance.overload('java.lang.String');
    javax_crypto_Cipher_clz_method_getInstance_03ug.implementation = function(v0) {
        var ret = javax_crypto_Cipher_clz_method_getInstance_03ug.call(javax_crypto_Cipher_clz, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'javax_crypto_Cipher_clz';
        methodInBeat(invokeId, startTime, 'public static final javax.crypto.Cipher javax.crypto.Cipher.getInstance(java.lang.String) throws java.security.NoSuchAlgorithmException,javax.crypto.NoSuchPaddingException', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_init_u19e = javax_crypto_Cipher_clz.init.overload('int', 'java.security.Key', 'java.security.AlgorithmParameters');
    javax_crypto_Cipher_clz_method_init_u19e.implementation = function(v0, v1, v2) {
        javax_crypto_Cipher_clz_method_init_u19e.call(this, v0, v1, v2);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final void javax.crypto.Cipher.init(int,java.security.Key,java.security.AlgorithmParameters) throws java.security.InvalidKeyException,java.security.InvalidAlgorithmParameterException', executor);
        methodOutBeat(invokeId, startTime);
    };
    var javax_crypto_Cipher_clz_method_updateAAD_ojmm = javax_crypto_Cipher_clz.updateAAD.overload('java.nio.ByteBuffer');
    javax_crypto_Cipher_clz_method_updateAAD_ojmm.implementation = function(v0) {
        javax_crypto_Cipher_clz_method_updateAAD_ojmm.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final void javax.crypto.Cipher.updateAAD(java.nio.ByteBuffer)', executor);
        methodOutBeat(invokeId, startTime);
    };
    var javax_crypto_Cipher_clz_method_doFinal_ixw8 = javax_crypto_Cipher_clz.doFinal.overload('[B', 'int', 'int');
    javax_crypto_Cipher_clz_method_doFinal_ixw8.implementation = function(v0, v1, v2) {
        var ret = javax_crypto_Cipher_clz_method_doFinal_ixw8.call(this, v0, v1, v2);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final [B javax.crypto.Cipher.doFinal(byte[],int,int) throws javax.crypto.IllegalBlockSizeException,javax.crypto.BadPaddingException', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_getBlockSize_wjca = javax_crypto_Cipher_clz.getBlockSize.overload();
    javax_crypto_Cipher_clz_method_getBlockSize_wjca.implementation = function() {
        var ret = javax_crypto_Cipher_clz_method_getBlockSize_wjca.call(this);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final int javax.crypto.Cipher.getBlockSize()', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_wrap_05i9 = javax_crypto_Cipher_clz.wrap.overload('java.security.Key');
    javax_crypto_Cipher_clz_method_wrap_05i9.implementation = function(v0) {
        var ret = javax_crypto_Cipher_clz_method_wrap_05i9.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final [B javax.crypto.Cipher.wrap(java.security.Key) throws javax.crypto.IllegalBlockSizeException,java.security.InvalidKeyException', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_getMaxAllowedParameterSpec_cp3m = javax_crypto_Cipher_clz.getMaxAllowedParameterSpec.overload('java.lang.String');
    javax_crypto_Cipher_clz_method_getMaxAllowedParameterSpec_cp3m.implementation = function(v0) {
        var ret = javax_crypto_Cipher_clz_method_getMaxAllowedParameterSpec_cp3m.call(javax_crypto_Cipher_clz, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'javax_crypto_Cipher_clz';
        methodInBeat(invokeId, startTime, 'public static final java.security.spec.AlgorithmParameterSpec javax.crypto.Cipher.getMaxAllowedParameterSpec(java.lang.String) throws java.security.NoSuchAlgorithmException', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_checkTransformation_qoag = javax_crypto_Cipher_clz.checkTransformation.overload('java.lang.String');
    javax_crypto_Cipher_clz_method_checkTransformation_qoag.implementation = function(v0) {
        var ret = javax_crypto_Cipher_clz_method_checkTransformation_qoag.call(javax_crypto_Cipher_clz, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'javax_crypto_Cipher_clz';
        methodInBeat(invokeId, startTime, 'private static [Ljava.lang.String; javax.crypto.Cipher.checkTransformation(java.lang.String) throws java.security.NoSuchAlgorithmException', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_getParameters_6auy = javax_crypto_Cipher_clz.getParameters.overload();
    javax_crypto_Cipher_clz_method_getParameters_6auy.implementation = function() {
        var ret = javax_crypto_Cipher_clz_method_getParameters_6auy.call(this);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final java.security.AlgorithmParameters javax.crypto.Cipher.getParameters()', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_getSpi_963r = javax_crypto_Cipher_clz.getSpi.overload('java.security.Key');
    javax_crypto_Cipher_clz_method_getSpi_963r.implementation = function(v0) {
        var ret = javax_crypto_Cipher_clz_method_getSpi_963r.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'private javax.crypto.CipherSpi javax.crypto.Cipher.getSpi(java.security.Key)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_doFinal_k1n2 = javax_crypto_Cipher_clz.doFinal.overload('[B');
    javax_crypto_Cipher_clz_method_doFinal_k1n2.implementation = function(v0) {
        var ret = javax_crypto_Cipher_clz_method_doFinal_k1n2.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final [B javax.crypto.Cipher.doFinal(byte[]) throws javax.crypto.IllegalBlockSizeException,javax.crypto.BadPaddingException', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_getSpi_vlc2 = javax_crypto_Cipher_clz.getSpi.overload();
    javax_crypto_Cipher_clz_method_getSpi_vlc2.implementation = function() {
        var ret = javax_crypto_Cipher_clz_method_getSpi_vlc2.call(this);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'private javax.crypto.CipherSpi javax.crypto.Cipher.getSpi()', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_getIV_2b1b = javax_crypto_Cipher_clz.getIV.overload();
    javax_crypto_Cipher_clz_method_getIV_2b1b.implementation = function() {
        var ret = javax_crypto_Cipher_clz_method_getIV_2b1b.call(this);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final [B javax.crypto.Cipher.getIV()', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_unwrap_azqe = javax_crypto_Cipher_clz.unwrap.overload('[B', 'java.lang.String', 'int');
    javax_crypto_Cipher_clz_method_unwrap_azqe.implementation = function(v0, v1, v2) {
        var ret = javax_crypto_Cipher_clz_method_unwrap_azqe.call(this, v0, v1, v2);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final java.security.Key javax.crypto.Cipher.unwrap(byte[],java.lang.String,int) throws java.security.InvalidKeyException,java.security.NoSuchAlgorithmException', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_init_l66q = javax_crypto_Cipher_clz.init.overload('int', 'java.security.Key');
    javax_crypto_Cipher_clz_method_init_l66q.implementation = function(v0, v1) {
        javax_crypto_Cipher_clz_method_init_l66q.call(this, v0, v1);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final void javax.crypto.Cipher.init(int,java.security.Key) throws java.security.InvalidKeyException', executor);
        methodOutBeat(invokeId, startTime);
    };
    var javax_crypto_Cipher_clz_method_init_w1fs = javax_crypto_Cipher_clz.init.overload('int', 'java.security.Key', 'java.security.spec.AlgorithmParameterSpec', 'java.security.SecureRandom');
    javax_crypto_Cipher_clz_method_init_w1fs.implementation = function(v0, v1, v2, v3) {
        javax_crypto_Cipher_clz_method_init_w1fs.call(this, v0, v1, v2, v3);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final void javax.crypto.Cipher.init(int,java.security.Key,java.security.spec.AlgorithmParameterSpec,java.security.SecureRandom) throws java.security.InvalidKeyException,java.security.InvalidAlgorithmParameterException', executor);
        methodOutBeat(invokeId, startTime);
    };
    var javax_crypto_Cipher_clz_method_tryTransformWithProvider_an3a = javax_crypto_Cipher_clz.tryTransformWithProvider.overload('java.security.Key', '[Ljava.lang.String;', 'javax.crypto.Cipher$NeedToSet', 'java.security.Provider$Service');
    javax_crypto_Cipher_clz_method_tryTransformWithProvider_an3a.implementation = function(v0, v1, v2, v3) {
        var ret = javax_crypto_Cipher_clz_method_tryTransformWithProvider_an3a.call(javax_crypto_Cipher_clz, v0, v1, v2, v3);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'javax_crypto_Cipher_clz';
        methodInBeat(invokeId, startTime, 'private static org.apache.harmony.security.fortress.Engine$SpiAndProvider javax.crypto.Cipher.tryTransformWithProvider(java.security.Key,java.lang.String[],javax.crypto.Cipher$NeedToSet,java.security.Provider$Service)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_checkMode_8g2b = javax_crypto_Cipher_clz.checkMode.overload('int');
    javax_crypto_Cipher_clz_method_checkMode_8g2b.implementation = function(v0) {
        javax_crypto_Cipher_clz_method_checkMode_8g2b.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'private void javax.crypto.Cipher.checkMode(int)', executor);
        methodOutBeat(invokeId, startTime);
    };
    var javax_crypto_Cipher_clz_method_update_ll68 = javax_crypto_Cipher_clz.update.overload('[B', 'int', 'int', '[B');
    javax_crypto_Cipher_clz_method_update_ll68.implementation = function(v0, v1, v2, v3) {
        var ret = javax_crypto_Cipher_clz_method_update_ll68.call(this, v0, v1, v2, v3);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final int javax.crypto.Cipher.update(byte[],int,int,byte[]) throws javax.crypto.ShortBufferException', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_doFinal_62jl = javax_crypto_Cipher_clz.doFinal.overload();
    javax_crypto_Cipher_clz_method_doFinal_62jl.implementation = function() {
        var ret = javax_crypto_Cipher_clz_method_doFinal_62jl.call(this);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final [B javax.crypto.Cipher.doFinal() throws javax.crypto.IllegalBlockSizeException,javax.crypto.BadPaddingException', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_init_c9qo = javax_crypto_Cipher_clz.init.overload('int', 'java.security.Key', 'java.security.SecureRandom');
    javax_crypto_Cipher_clz_method_init_c9qo.implementation = function(v0, v1, v2) {
        javax_crypto_Cipher_clz_method_init_c9qo.call(this, v0, v1, v2);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final void javax.crypto.Cipher.init(int,java.security.Key,java.security.SecureRandom) throws java.security.InvalidKeyException', executor);
        methodOutBeat(invokeId, startTime);
    };
    var javax_crypto_Cipher_clz_method_doFinal_rso8 = javax_crypto_Cipher_clz.doFinal.overload('[B', 'int');
    javax_crypto_Cipher_clz_method_doFinal_rso8.implementation = function(v0, v1) {
        var ret = javax_crypto_Cipher_clz_method_doFinal_rso8.call(this, v0, v1);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final int javax.crypto.Cipher.doFinal(byte[],int) throws javax.crypto.IllegalBlockSizeException,javax.crypto.ShortBufferException,javax.crypto.BadPaddingException', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };
    var javax_crypto_Cipher_clz_method_updateAAD_ry91 = javax_crypto_Cipher_clz.updateAAD.overload('[B');
    javax_crypto_Cipher_clz_method_updateAAD_ry91.implementation = function(v0) {
        javax_crypto_Cipher_clz_method_updateAAD_ry91.call(this, v0);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        methodInBeat(invokeId, startTime, 'public final void javax.crypto.Cipher.updateAAD(byte[])', executor);
        methodOutBeat(invokeId, startTime);
    };
    var javax_crypto_Cipher_clz_method_matchAttribute_mv6j = javax_crypto_Cipher_clz.matchAttribute.overload('java.security.Provider$Service', 'java.lang.String', 'java.lang.String');
    javax_crypto_Cipher_clz_method_matchAttribute_mv6j.implementation = function(v0, v1, v2) {
        var ret = javax_crypto_Cipher_clz_method_matchAttribute_mv6j.call(javax_crypto_Cipher_clz, v0, v1, v2);
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'javax_crypto_Cipher_clz';
        methodInBeat(invokeId, startTime, 'private static boolean javax.crypto.Cipher.matchAttribute(java.security.Provider$Service,java.lang.String,java.lang.String)', executor);
        methodOutBeat(invokeId, startTime);
        return ret;
    };

});