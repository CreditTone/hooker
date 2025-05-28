var hasAlreadyHooked = false;

//init_proc func start addr
var startAddr = null;

//init_proc func end addr
var endAddr = null;

// replace your so name eg: xxx.so
var somodule = "xxx.so";

function hook_dlopen(){
    //Android8.0之后加载so通过android_dlopen_ext函数
    var android_dlopen_ext = Module.findExportByName(null,"android_dlopen_ext");
    console.log("addr_android_dlopen_ext",android_dlopen_ext);
    Interceptor.attach(android_dlopen_ext,{
        onEnter:function(args){
            var pathptr = args[0];
            if(pathptr!=null && pathptr != undefined){
                var path = ptr(pathptr).readCString();
                this.path = path;
                if(path.indexOf(somodule)!=-1){
                    console.log("android_dlopen_ext:",path);
                    trace_init_proc()
                }
            }
        },
        onLeave:function(retvel){
            console.log(this.path+" leave!");
        }
    })
}

function trace_init_proc() {
    let linker = null;
    if (Process.pointerSize === 4) {
        linker = Process.findModuleByName("linker");
    } else {
        linker = Process.findModuleByName("linker64");
    }
    let call_constructors_addr, get_soname
    let symbols = linker.enumerateSymbols();
    for (let index = 0; index < symbols.length; index++) {
        let symbol = symbols[index];
        if (symbol.name === "__dl__ZN6soinfo17call_constructorsEv") {
            call_constructors_addr = symbol.address;
        } else if (symbol.name === "__dl__ZNK6soinfo10get_sonameEv") {
            get_soname = new NativeFunction(symbol.address, "pointer", ["pointer"]);
        }
    }
    console.log("call_constructors_addr:" + call_constructors_addr);
    var listener = Interceptor.attach(call_constructors_addr, {
        onEnter: function (args) {
            //console.log("hooked call_constructors")
            var module = Process.findModuleByName(somodule)
            if (module != null && !hasAlreadyHooked) {
                hasAlreadyHooked = true;
                console.log(somodule + " base address:", module.base);
                var targetAddress = module.base.add(startAddr);
                var absolutStartAddr = targetAddress;
                var absolutEndAddr = module.base.add(endAddr);
                console.log(`init_proc func starts at ${absolutStartAddr} ends at ${absolutEndAddr}`);
                Interceptor.attach(targetAddress, {
                    onEnter: function(args) {
                        console.log(`init_proc called at ${targetAddress}`);
                        // 开启 Stalker 跟踪
                        Stalker.follow(this.threadId, {
                            transform: function (iterator) {
                                var instruction;
                                while ((instruction = iterator.next()) !== null) {
                                    var addr = instruction.address;
                                    if (addr.compare(absolutStartAddr) >= 0 && addr.compare(absolutEndAddr) <= 0) {
                                        console.log("[EXEC] 0x" + (addr - module.base).toString(16) + ": " + instruction.toString());
                                    }
                                    iterator.keep();
                                }
                            }
                        });
                    },
                    onLeave: function(retval) {
                        console.log("Function returned:", retval);
                        // 可以修改返回值
                        // retval.replace(ptr(0x1));
                    }
                });
            }

        },
    })
}
function main(){
    hook_dlopen()
}

main()