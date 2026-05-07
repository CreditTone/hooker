var TARGET_SO = "";

function hook_ArtMethodRegister() {
    var symbols = Module.enumerateSymbolsSync("libart.so");
    var targetSo = TARGET_SO;

    var ArtMethodRegisterNative = null;
    var JniRegisterNatives = null;
    var nativeMethodMap = {};
    for (var i = 0; i < symbols.length; i++) {
        var symbol = symbols[i];
        var address = symbol.address;
        var name = symbol.name;
        if (
            name.indexOf("ArtMethod") >= 0 &&
            name.indexOf("RegisterNative") >= 0 &&
            name.indexOf("Callback") < 0
        ) {
            console.log("ArtMethod::RegisterNative is at ", address, name);
            ArtMethodRegisterNative = address;
        }
        if (
            name.indexOf("art") >= 0 &&
            name.indexOf("JNI") >= 0 &&
            name.indexOf("RegisterNatives") >= 0 &&
            name.indexOf("CheckJNI") < 0
        ) {
            console.log("JNI::RegisterNatives is at ", address, name);
            JniRegisterNatives = address;
        }
    }
    if (!ArtMethodRegisterNative) {
        console.log("[!] ArtMethod::RegisterNative not found");
        return;
    }
    if (targetSo) {
        console.log("[*] SO filter enabled: " + targetSo);
    } else {
        console.log("[*] SO filter disabled");
    }

    if (JniRegisterNatives) {
        Interceptor.attach(JniRegisterNatives, {
            onEnter: function (args) {
                try {
                    var javaClass = args[1];
                    var className = Java.vm.tryGetEnv().getClassName(javaClass);
                    var methodsPtr = ptr(args[2]);
                    var methodCount = parseInt(args[3]);

                    for (var i = 0; i < methodCount; i++) {
                        var item = methodsPtr.add(i * Process.pointerSize * 3);
                        var namePtr = Memory.readPointer(item);
                        var sigPtr = Memory.readPointer(item.add(Process.pointerSize));
                        var fnPtr = Memory.readPointer(item.add(Process.pointerSize * 2));
                        var methodName = Memory.readCString(namePtr);
                        var sig = Memory.readCString(sigPtr);
                        nativeMethodMap[fnPtr.toString()] = className + "." + methodName + sig;
                    }
                } catch (e) {
                    console.log("[!] RegisterNatives map build failed: " + e);
                }
            }
        });
    } else {
        console.log("[!] JNI::RegisterNatives not found, method names may be unavailable");
    }

    Interceptor.attach(ArtMethodRegisterNative, {
        onEnter: function (args) {
            try {
                // ArtMethod::RegisterNative(void* native_method)
                // args[0] = ArtMethod*, args[1] = fnPtr
                var artMethod = args[0];
                var fnPtr = args[1];
                if (fnPtr.isNull()) return;

                var find_module = Process.findModuleByAddress(fnPtr);
                if (!find_module) return;
                if (targetSo && find_module.name !== targetSo) return;

                var offset = fnPtr.sub(find_module.base);
                var methodName = nativeMethodMap[fnPtr.toString()] || "(unresolved)";

                console.log("[RegisterNative] " + methodName);
                console.log("  SO:   " + find_module.name);
                console.log("  fn:   " + fnPtr);
                console.log("  off:  0x" + offset.toString(16));
            } catch (error) {
                console.log("[!] " + error);
            }
        }
    });
}

setImmediate(hook_ArtMethodRegister)
