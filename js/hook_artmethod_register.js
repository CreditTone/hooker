function hook_ArtMethodRegister() {
    var symbols = Module.enumerateSymbolsSync("libart.so");

    var ArtMethodRegisterNative = null;
    var ArtMethod_PrettyMethod = null;
    for (var i = 0; i < symbols.length; i++) {
        var symbol = symbols[i];
        var address = symbol.address;
        var name = symbol.name;
        var indexArtMethod = name.indexOf("ArtMethod");
        //_ZN3art9ArtMethod14RegisterNativeEPKv android 10
        if (
            name.indexOf("ArtMethod") >= 0 &&
            name.indexOf("RegisterNative") >= 0 &&
            name.indexOf("Callback") < 0
        ) {
            console.log("ArtMethod::RegisterNative is at ", address, name);
            ArtMethodRegisterNative = address;
        }
        if (indexArtMethod >= 0 && name.indexOf("PrettyMethod") >= 0 && name.indexOf("Eb") >= 0) {
            console.log("ArtMethod::PrettyMethod is at ", address, name);
            ArtMethod_PrettyMethod = address;
        }
    }
    var module_libext = null;
    if (Process.arch === "arm64") {
        module_libext = Module.load("/data/data/com.smile.gifmaker/libext64.so");
    } else if (Process.arch === "arm") {
        module_libext = Module.load("/data/data/com.smile.gifmaker/libext.so");
    }
    if (module_libext != null) {
        var addr_PrettyMethod = module_libext.findExportByName("PrettyMethod");
        var PrettyMethod = new NativeFunction(addr_PrettyMethod, "void", ["pointer", "pointer", "pointer", "int"]);

        if (ArtMethodRegisterNative) {
            //var foo_ArtMethod_PrettyMethod = new NativeFunction(ArtMethod_PrettyMethod, "pointer", ["pointer", "int"]);
            Interceptor.attach(ArtMethodRegisterNative, {
                onEnter: function (args) {
                    try {
                        var result = Memory.alloc(0x100);
                        var fnPtr_ptr = args[1];
                        var find_module = Process.findModuleByAddress(fnPtr_ptr);
                        var offset = ptr(fnPtr_ptr).sub(find_module.base)
                        PrettyMethod(ArtMethod_PrettyMethod, args[0], result, 0x100);
                        console.log("[ArtMethod_RegisterNative] Method_sig:", result.readCString(), "module_name:", find_module.name, "offset:", offset);
                    } catch (error) {
                        console.log(error);
                    }

                }, onLeave: function (retval) {

                }
            });
        }
    }
}

setImmediate(hook_ArtMethodRegister)

