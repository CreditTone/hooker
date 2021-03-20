function printStacks(androidLogClz, exceptionClz, methodName) {
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    console.log(new Date().getTime() + ":" + methodName);
    console.log(stackInfo.substring(20));
};

Java.perform(function() {
    var libname = "jack";
    var soAddr = Module.findBaseAddress(libname);
    console.log('soAddr: ' + soAddr);
    var exports = Module.enumerateExportsSync(libname);
    exports.map(function(ex) {
        //console.log(ex.address + ": " + ex.name);
    }); 
    console.log(libname + " exports num:" + exports.length);

});