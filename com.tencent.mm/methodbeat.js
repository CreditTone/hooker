function printStacks(methodName) {
    var stackInfo = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new());
    console.log(methodName);
    console.log(stackInfo.substring(20));
};

function log(str) {
    console.log(str);
};

Java.perform(function() {
    var com_tencent_matrix_trace_core_AppMethodBeat_clz = Java.use('com.tencent.matrix.trace.core.AppMethodBeat');
    var com_tencent_matrix_trace_core_AppMethodBeat_clz_method_i_supj = com_tencent_matrix_trace_core_AppMethodBeat_clz.i.overload('int');
    com_tencent_matrix_trace_core_AppMethodBeat_clz_method_i_supj.implementation = function(v0) {
        printStacks('public static void com.tencent.matrix.trace.core.AppMethodBeat.i(int:'+v0+')');
        com_tencent_matrix_trace_core_AppMethodBeat_clz_method_i_supj.call(com_tencent_matrix_trace_core_AppMethodBeat_clz, v0);
    };
});