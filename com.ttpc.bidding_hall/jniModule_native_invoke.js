var naddr = Module.findExportByName('libJniModule.so','Java_com_ttp_desmodule_HttpCoreDESUtils_getKey');
var nmethod = new NativeFunction(naddr, 'pointer', ['pointer', 'pointer']);
function x() {
	Java.perform(function () {
		var ret = nmethod(Java.vm.getEnv(), Java.vm.getEnv());
		//var retstring = Memory.readCString(ret);
		var s = Java.vm.getEnv().getStringUtfChars(ret, null).readCString();
		console.log("ret = ", s);
	});
};
