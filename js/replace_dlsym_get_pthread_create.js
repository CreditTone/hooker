console.log("欢迎使用hooker出品的原创通用libmsoaidsec.so辅助脚本，此脚本只适用于通过dlsym来获取pthread_create函数的libmsaoaidsec.so样本");
var pthread_create_ptr = Module.getExportByName(null, "pthread_create");

// 备份原始函数
var original_pthread_create = new NativeFunction(pthread_create_ptr, 'int', ['pointer', 'pointer', 'pointer', 'pointer']);

var my_pthread_create = new NativeCallback(function (thread_ptr, attr_ptr, start_routine, arg_ptr) {
    console.log("[*] 自定义 pthread_create 被调用！");
    console.log("    thread_ptr:     " + thread_ptr);
    console.log("    attr_ptr:       " + attr_ptr);
    console.log("    start_routine:  " + start_routine);
    console.log("    arg_ptr:        " + arg_ptr);
    var find_module = Process.findModuleByAddress(start_routine);
    console.log("这里调用了pthread_create，此处你可以去so完成硬改| 找BLR X8 NOP掉即可 |--> Module: " + find_module.name + " offset:" + start_routine.sub(find_module.base));
    // 你可以选择真的创建一个线程（高级场景），或者只打印/屏蔽掉
    // 此处直接返回成功状态
    return 0;
}, 'int', ['pointer', 'pointer', 'pointer', 'pointer']);

Interceptor.attach(Module.getExportByName(null, "dlsym"), {
    onEnter(args) {
        this.symbol = Memory.readUtf8String(args[1]);
    },
    onLeave(retval) {
        if (this.symbol.indexOf("pthread_create") !== -1) {
            console.log("[*] dlsym loaded pthread_create, addr:", retval);
            // 获取当前线程的调用栈
            var backtrace = Thread.backtrace(this.context, Backtracer.ACCURATE);
            // 获取调用该方法的地址（栈中的上一级）
            var callerAddress = backtrace[0];
            var find_module = Process.findModuleByAddress(callerAddress);
            if (find_module && find_module.name.indexOf("libmsaoaidsec.so") !== -1) {
                // console.log('\nBacktrace:\n' + Thread.backtrace(this.context, Backtracer.ACCURATE)
                //     .map(DebugSymbol.fromAddress).join('\n'));
                console.log("invoke dlsym |--> Module: " + find_module.name + " offset:" + callerAddress.sub(find_module.base));
                // 👇 替换返回值为我们自定义的 pthread_create
                retval.replace(ptr(my_pthread_create));
            }
        }
    }
});

