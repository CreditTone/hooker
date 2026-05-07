function hook_libart() {
    // ═══════════════════════════════════════
    // 配置: 只跟踪指定 SO 的 JNI 调用，留空 = 跟踪全部
    // ═══════════════════════════════════════
    var TARGET_SO = "libj2j_hdfhttp.so";

    function fromTargetSO(context) {
        if (!TARGET_SO) return true;
        try {
            var c = findCaller(context);
            return c && c.mod.name.indexOf(TARGET_SO) !== -1;
        } catch(e) { return true; }
    }

    // findCaller: 安全地找真正的 native 调用来源
    function findCaller(context) {
        try {
            var fp = context.fp; // frame pointer
            if (fp.isNull()) return null;
            // ARM64: return address 在 fp+8
            var ra = fp.add(8).readPointer();
            if (ra.isNull()) return null;
            var mod = Process.findModuleByAddress(ra);
            if (mod && mod.name.indexOf("libart") === -1) return {mod: mod, addr: ra};
            // 再往上一层栈帧
            var prevFp = fp.readPointer();
            if (prevFp.isNull()) return null;
            ra = prevFp.add(8).readPointer();
            if (ra.isNull()) return null;
            mod = Process.findModuleByAddress(ra);
            if (mod && mod.name.indexOf("libart") === -1) return {mod: mod, addr: ra};
        } catch(e) {}
        return null;
    }

    function callerInfo(context) {
        try {
            var c = findCaller(context);
            if (c) return " [" + c.mod.name + "+0x" + c.addr.sub(c.mod.base).toString(16) + "]";
        } catch(e) {}
        return "";
    }

    var symbols = Module.enumerateSymbolsSync("libart.so");
    var addrGetStringUTFChars = null;
    var addrNewStringUTF = null;
    var addrFindClass = null;
    var addrGetMethodID = null;
    var addrGetStaticMethodID = null;
    var addrGetFieldID = null;
    var addrGetStaticFieldID = null;
    var addrRegisterNatives = null;
    var addrCallObjectMethod = null;
    var addrCallStaticObjectMethod = null;
    var addrCallVoidMethod = null;
    for (var i = 0; i < symbols.length; i++) {
        var symbol = symbols[i];
        if (
            symbol.name.indexOf("JNI") >= 0 &&
            symbol.name.indexOf("CheckJNI") < 0 &&
            symbol.name.indexOf("__va_list") < 0
        ) {
            if (symbol.name.indexOf("GetStringUTFChars") >= 0) {
                //addrGetStringUTFChars = symbol.address;
                console.log("GetStringUTFChars is at ", symbol.address, symbol.name);
            } else if (symbol.name.indexOf("NewStringUTF") >= 0) {
                addrNewStringUTF = symbol.address;
                console.log("NewStringUTF is at ", symbol.address, symbol.name);
            } else if (symbol.name.indexOf("FindClass") >= 0) {
                addrFindClass = symbol.address;
                console.log("FindClass is at ", symbol.address, symbol.name);
            } else if (symbol.name.indexOf("GetMethodID") >= 0) {
                addrGetMethodID = symbol.address;
                console.log("GetMethodID is at ", symbol.address, symbol.name);
            } else if (symbol.name.indexOf("GetStaticMethodID") >= 0) {
                addrGetStaticMethodID = symbol.address;
                console.log("GetStaticMethodID is at ", symbol.address, symbol.name);
            } else if (symbol.name.indexOf("GetFieldID") >= 0) {
                addrGetFieldID = symbol.address;
                console.log("GetFieldID is at ", symbol.address, symbol.name);
            } else if (symbol.name.indexOf("GetStaticFieldID") >= 0) {
                addrGetStaticFieldID = symbol.address;
                console.log("GetStaticFieldID is at ", symbol.address, symbol.name);
            } else if (symbol.name.indexOf("RegisterNatives") >= 0) {
                addrRegisterNatives = symbol.address;
                console.log("RegisterNatives is at ", symbol.address, symbol.name);
            }else if (symbol.name.indexOf("CallObjectMethod") >= 0 && symbol.name.indexOf("art3JNI") >= 0 && symbol.name.indexOf("jmethodIDz") > 0) {
                //addrCallObjectMethod = symbol.address;
                console.log("CallObjectMethod is at ", symbol.address, symbol.name);
            }else if (symbol.name.indexOf("CallStaticObjectMethod") >= 0 && symbol.name.indexOf("art3") >= 0 && symbol.name.endsWith("jmethodIDz")) {
                addrCallStaticObjectMethod = symbol.address;
                console.log("CallStaticObjectMethod is at ", symbol.address, symbol.name);
            }else if (symbol.name.indexOf("CallVoidMethod") >= 0 && symbol.name.indexOf("art3") >= 0 && symbol.name.endsWith("jmethodIDz")) {
                addrCallVoidMethod = symbol.address;
                console.log("CallVoidMethod is at ", symbol.address, symbol.name);
            }
        }
    }

    if (addrCallStaticObjectMethod) {
        Interceptor.attach(ptr(addrCallStaticObjectMethod), {
            onEnter: function (args) {
                if (!fromTargetSO(this.context)) return;
                console.log("[CallStaticObjectMethod]" + callerInfo(this.context));
            },
        });
    }

    if (addrCallVoidMethod) {
        Interceptor.attach(ptr(addrCallVoidMethod), {
            onEnter: function (args) {
                if (!fromTargetSO(this.context)) return;
                var jclass = Java.cast(args[1], Java.use('java.lang.Object')).getClass();
                console.log("[CallVoidMethod] " + jclass + callerInfo(this.context));
            },
        });
    }

    if (addrCallObjectMethod != null) {
        Interceptor.attach(addrCallObjectMethod, {
            onEnter: function (args) {
                if (!fromTargetSO(this.context)) return;
                var jclass = Java.cast(args[1], Java.use('java.lang.Object')).getClass();
                console.log("[CallObjectMethod] " + jclass + callerInfo(this.context));
            },
        });
    }
    if (addrGetStringUTFChars != null) {
        Interceptor.attach(addrGetStringUTFChars, {
            onEnter: function (args) {},
            onLeave: function (retval) {
                if (retval != null) {
                    var bytes = Memory.readCString(retval);
                    console.log("[GetStringUTFChars] result:" + bytes);
                }
            }
        });
    }
    if (addrNewStringUTF) {
        Interceptor.attach(ptr(addrNewStringUTF), {
            onEnter: function (args) {
                var str = args[1].readUtf8String();
                if (!str) return;
                if (!fromTargetSO(this.context)) return;
                console.log("[NewStringUTF] " + str + callerInfo(this.context));
            },
        });
    }

    if (addrFindClass != null) {
        Interceptor.attach(addrFindClass, {
            onEnter: function (args) {
                if (!fromTargetSO(this.context)) return;
                if (args[1] != null) {
                    console.log("[FindClass] " + Memory.readCString(args[1]) + callerInfo(this.context));
                }
            },
        });
    }
    if (addrGetMethodID != null) {
        Interceptor.attach(ptr(addrGetMethodID), {
            onEnter: function (args) {
                if (!fromTargetSO(this.context)) return;
                this.method_name = args[2].readCString();
                this.method_sig = args[3].readCString();
                console.log("[GetMethodID] " + this.method_name + " sig:" + this.method_sig + callerInfo(this.context));
            },
        });
    }

    if (addrGetStaticMethodID != null) {
        Interceptor.attach(addrGetStaticMethodID, {
            onEnter: function (args) {
                if (!fromTargetSO(this.context)) return;
                if (args[2] != null) {
                    var sig = args[3] ? Memory.readCString(args[3]) : "";
                    console.log("[GetStaticMethodID] " + Memory.readCString(args[2]) + " sig:" + sig + callerInfo(this.context));
                }
            },
        });
    }
    if (addrGetFieldID != null) {
        Interceptor.attach(addrGetFieldID, {
            onEnter: function (args) {
                if (!fromTargetSO(this.context)) return;
                if (args[2] != null) {
                    var sig = args[3] ? Memory.readCString(args[3]) : "";
                    console.log("[GetFieldID] " + Memory.readCString(args[2]) + " sig:" + sig + callerInfo(this.context));
                }
            },
        });
    }
    if (addrGetStaticFieldID != null) {
        Interceptor.attach(addrGetStaticFieldID, {
            onEnter: function (args) {
                if (!fromTargetSO(this.context)) return;
                if (args[2] != null) {
                    var sig = args[3] ? Memory.readCString(args[3]) : "";
                    console.log("[GetStaticFieldID] " + Memory.readCString(args[2]) + " sig:" + sig + callerInfo(this.context));
                }
            },
        });
    }
    if (addrRegisterNatives != null) {
        Interceptor.attach(addrRegisterNatives, {
            onEnter: function (args) {
                var methods_ptr = ptr(args[2]);
                var method_count = parseInt(args[3]);

                // 先检查是否有方法属于目标 SO，没有就跳过
                var hasTarget = false;
                if (TARGET_SO) {
                    for (var i = 0; i < method_count; i++) {
                        var fnPtr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3 + Process.pointerSize * 2));
                        var mod = Process.findModuleByAddress(fnPtr);
                        if (mod && mod.name.indexOf(TARGET_SO) !== -1) { hasTarget = true; break; }
                    }
                }
                if (TARGET_SO && !hasTarget) return;

                var class_name = Java.vm.tryGetEnv().getClassName(args[1]);
                console.log("[RegisterNatives] " + class_name + " (" + method_count + " methods)");

                for (var i = 0; i < method_count; i++) {
                    var name = Memory.readCString(Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3)));
                    var sig = Memory.readCString(Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3 + Process.pointerSize)));
                    var fnPtr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3 + Process.pointerSize * 2));
                    var mod = Process.findModuleByAddress(fnPtr);
                    if (TARGET_SO && mod && mod.name.indexOf(TARGET_SO) === -1) continue;
                    console.log("  " + name + " " + sig);
                    console.log("    fn=0x" + fnPtr.sub(mod.base).toString(16) + " [" + mod.name + "]");
                }
            },
        });
    }
}

setImmediate(hook_libart);
