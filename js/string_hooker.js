
function printStacks(androidLogClz, exceptionClz, methodName) {
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    console.log(methodName);
    console.log(stackInfo.substring(20));
};

Java.perform(function() {
	var androidLogClz = Java.use("android.util.Log");
	var exceptionClz = Java.use("java.lang.Exception");
	var reg = RegExp(/大保健/);
    var java_lang_StringBuilder_clz = Java.use('java.lang.StringBuilder');
    var java_lang_StringBuilder_clz_toString_9ogt = java_lang_StringBuilder_clz.toString.overload();
    java_lang_StringBuilder_clz_toString_9ogt.implementation = function() {
        var toString = java_lang_StringBuilder_clz_init_9ogt.call(this);
        if (toString.match(reg)) {
        	printStacks(androidLogClz, exceptionClz, "Detecting '大保健' in stacks:");
        }
        return toString;
    };

    var java_lang_StringBuffer_clz = Java.use('java.lang.StringBuffer');
    var java_lang_StringBuffer_clz_toString_9ogt = java_lang_StringBuffer_clz.toString.overload();
    java_lang_StringBuilder_clz_toString_9ogt.implementation = function() {
        var toString = java_lang_StringBuffer_clz_toString_9ogt.call(this);
        if (toString.match(reg)) {
        	printStacks(androidLogClz, exceptionClz, "Detecting '大保健' in stacks:");
        }
        return toString;
    };

    var java_lang_String_clz = Java.use('java.lang.String');

    var java_lang_String_clz_init_a8vt = java_lang_String_clz.$init.overload('[B', 'int', 'int', 'int');
    java_lang_String_clz_init_a8vt.implementation = function(v0, v1, v2, v3) {
        var toString = java_lang_String_clz_init_a8vt.call(this, v0, v1, v2, v3);
        if (toString.match(reg)) {
        	printStacks(androidLogClz, exceptionClz, "Detecting '大保健' in stacks:");
        }
        return toString;
    };
    
    var java_lang_String_clz_init_1fva = java_lang_String_clz.$init.overload('[B', 'int', 'int', 'java.nio.charset.Charset');
    java_lang_String_clz_init_1fva.implementation = function(v0, v1, v2, v3) {
        var toString = java_lang_String_clz_init_1fva.call(this, v0, v1, v2, v3);
        if (toString.match(reg)) {
        	printStacks(androidLogClz, exceptionClz, "Detecting '大保健' in stacks:");
        }
        return toString;
    };
});