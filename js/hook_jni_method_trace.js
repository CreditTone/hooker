function hook_libart() {
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
                // 觉得频率太大可以注释调
                //addrGetStringUTFChars = symbol.address;
                console.log("GetStringUTFChars is at ", symbol.address, symbol.name);
            } else if (symbol.name.indexOf("NewStringUTF") >= 0) {
                //addrNewStringUTF = symbol.address;
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
                var env = args[0];       // JNIEnv*
                var jclass = args[1];     // Java 类
                var jmethodID = args[2];  // 方法 ID
                console.log("addrCallStaticObjectMethod [*] CallStaticObjectMethod Hooked!");
                console.log("addrCallStaticObjectMethod    📌 JNIEnv*: " + env);
                console.log("addrCallStaticObjectMethod    📌 JClass: " + jclass);
                console.log(" addrCallStaticObjectMethod   📌 JMethodID: " + jmethodID);
                // 试图解析方法名（需要配合 GetMethodName ）
                try {
                    var methodName = Java.vm.getEnv().getMethodName(jmethodID);
                    console.log("addrCallStaticObjectMethod Method Name: " + methodName);
                } catch (err) {
                    console.log("addrCallStaticObjectMethod Failed to get method name");
                }
            },
            onLeave: function (retval) {
                console.log("addrCallStaticObjectMethod    📤 Return Value: " + retval);
            }
        });
    } else {
        console.log("[-] CallStaticObjectMethod symbol not found!");
    }

    if (addrCallVoidMethod) {
        Interceptor.attach(ptr(addrCallVoidMethod), {
            onEnter: function (args) {
                console.log("addrCallVoidMethod [+] Hooked CallVoidMethod");
                console.log("addrCallVoidMethod    📌 JNIEnv*: " + args[0]);
                console.log("addrCallVoidMethod    📌 jobject: " + args[1]);
                console.log("addrCallVoidMethod    📌 jmethodID: " + args[2]);

                var jclass = Java.cast(args[1], Java.use('java.lang.Object')).getClass();
                console.log("addrCallVoidMethod    📌 Java Class: " + jclass);
            },
            onLeave: function (retval) {
                console.log("addrCallVoidMethod    📤 Return Value: " + retval);
            }
        });
    } else {
        console.log("[-] CallVoidMethod symbol not found!");
    }

    if (addrCallObjectMethod != null) {
        Interceptor.attach(addrCallObjectMethod, {
            onEnter: function (args) {
                console.log("[addrCallObjectMethod] called:");

                // 获取 JNIEnv
                this.jni_env = args[0];
                console.log("addrCallObjectMethod    📌 JNIEnv: " + this.jni_env);

                // 获取调用的 Java 对象 (jobject)
                this.jobject = args[1];
                console.log("addrCallObjectMethod    📌 jobject: " + this.jobject);

                // 获取方法 ID (jmethodID)
                this.jmethodID = args[2];
                console.log("addrCallObjectMethod    📌 jmethodID: " + this.jmethodID);

                // 获取 Java 方法参数
                this.args_ptr = args[3];  // 可能是变长参数 (depends on overload)
                console.log("addrCallObjectMethod    📌 args_ptr: " + this.args_ptr);

                // 获取调用的 Java 方法名
                var jclass = Java.cast(this.jobject, Java.use('java.lang.Object')).getClass();
                console.log("addrCallObjectMethod    📌 Java Class: " + jclass);
            },
            onLeave: function (retval) {
                if (retval != null) {
                    // var bytes = Memory.readCString(retval);
                    // console.log("[GetStringUTFChars] result:" + bytes);
                }
            }
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
                this.utf8_string = args[1].readUtf8String(); // 读取传入的 UTF-8 字符串
                //console.log("[*] Hooked NewStringUTF");
                if (this.utf8_string) {
                    console.log("addrNewStringUTF    📌 UTF-8 String: " + this.utf8_string);
                    // 获取当前线程的调用栈
                    var backtrace = Thread.backtrace(this.context, Backtracer.ACCURATE);
                    // 获取调用该方法的地址（栈中的上一级）
                    var callerAddress = backtrace[1]; // backtrace[0] 是当前方法的地址，backtrace[1] 是调用者的地址
                    console.log("addrNewStringUTF [*] Caller Address: " + callerAddress);
                    var find_module = Process.findModuleByAddress(callerAddress);
                    if (find_module) {
                        console.log("addrNewStringUTF |--> Module: " + find_module.name + " offset:" + callerAddress.sub(find_module.base));
                    }
                }

            },
            onLeave: function (retval) {
                //console.log(" |--> Method ID: " + retval);
            }
        });
    }

    if (addrFindClass != null) {
        Interceptor.attach(addrFindClass, {
            onEnter: function (args) {
                if (args[1] != null) {
                    var stackTraceMsg = Thread.backtrace(this.context, Backtracer.ACCURATE)
                        .map(DebugSymbol.fromAddress).join('\n');
                    var name = Memory.readCString(args[1]);
                    console.log("addrFindClass name:" + name + " stackTraceMsg:" + stackTraceMsg);
                }
            },
            onLeave: function (retval) {}
        });
    }
    if (addrGetMethodID != null) {
        Interceptor.attach(ptr(addrGetMethodID), {
            onEnter: function (args) {

                this.env = args[0];         // JNIEnv
                this.jclass = args[1];      // jclass
                this.method_name = args[2].readCString();  // Method name
                this.method_sig = args[3].readCString();   // Method signature
                console.log("addrGetMethodID |--> Method Name: " + this.method_name);
                if (this.method_name.indexOf("sendRequest") != -1) {
                    // 获取当前线程的调用栈
                    var backtrace = Thread.backtrace(this.context, Backtracer.ACCURATE);
                    // 获取调用该方法的地址（栈中的上一级）
                    var callerAddress = backtrace[1]; // backtrace[0] 是当前方法的地址，backtrace[1] 是调用者的地址
                    console.log("addrGetMethodID [*] Caller Address: " + callerAddress);
                    var find_module = Process.findModuleByAddress(callerAddress);
                    console.log("\naddrGetMethodID [*] Hooked GetMethodID");
                    console.log("addrGetMethodID |--> Method Name: " + this.method_name);
                    console.log("addrGetMethodID |--> Method Signature: " + this.method_sig);
                    console.log("addrGetMethodID |--> Module: " + find_module.name + " offset:" + callerAddress.sub(find_module.base));
                }
            },
            onLeave: function (retval) {
                //console.log(" |--> Method ID: " + retval);
            }
        });
    }

    if (addrGetStaticMethodID != null) {
        Interceptor.attach(addrGetStaticMethodID, {
            onEnter: function (args) {
                if (args[2] != null) {
                    this.method_name = Memory.readCString(args[2]);
                    if (args[3] != null) {
                        var sig = Memory.readCString(args[3]);
                        console.log("[addrGetStaticMethodID] name:" + this.method_name + ", sig:" + sig);
                    } else {
                        console.log("[addrGetStaticMethodID] name:" + this.method_name);
                    }

                }
            },
            onLeave: function (retval) {}
        });
    }
    if (addrGetFieldID != null) {
        Interceptor.attach(addrGetFieldID, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var name = Memory.readCString(args[2]);
                    if (args[3] != null) {
                        var sig = Memory.readCString(args[3]);
                        console.log("[addrGetFieldID] name:" + name + ", sig:" + sig);
                    } else {
                        console.log("[addrGetFieldID] name:" + name);
                    }

                }
            },
            onLeave: function (retval) {}
        });
    }
    if (addrGetStaticFieldID != null) {
        Interceptor.attach(addrGetStaticFieldID, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var name = Memory.readCString(args[2]);
                    if (args[3] != null) {
                        var sig = Memory.readCString(args[3]);
                        console.log("[addrGetStaticFieldID] name:" + name + ", sig:" + sig);
                    } else {
                        console.log("[addrGetStaticFieldID] name:" + name);
                    }

                }
            },
            onLeave: function (retval) {}
        });
    }
    if (addrRegisterNatives != null) {
        Interceptor.attach(addrRegisterNatives, {
            onEnter: function (args) {
                console.log("[addrRegisterNatives] method_count:", args[3]);
                var env = args[0];
                var java_class = args[1];
                var class_name = Java.vm.tryGetEnv().getClassName(java_class);

                var methods_ptr = ptr(args[2]);

                var method_count = parseInt(args[3]);
                for (var i = 0; i < method_count; i++) {
                    var name_ptr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3));
                    var sig_ptr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3 + Process.pointerSize));
                    var fnPtr_ptr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3 + Process.pointerSize * 2));

                    var name = Memory.readCString(name_ptr);
                    var sig = Memory.readCString(sig_ptr);
                    var find_module = Process.findModuleByAddress(fnPtr_ptr);
                    console.log("[addrRegisterNatives] java_class:", class_name, "name:", name, "sig:", sig, "fnPtr:", fnPtr_ptr, "module_name:", find_module.name, "module_base:", find_module.base, "offset:", ptr(fnPtr_ptr).sub(find_module.base));

                }
            },
            onLeave: function (retval) {}
        });
    }
}

setImmediate(hook_libart);
