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
    console.log("这是pthread_create传入的函数地址，你可以再去hook这个函数看看BLR X8指令的位置，然后NOP掉--> Module: " + find_module.name + " offset:" + start_routine.sub(find_module.base));
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

// clone(Linux下线程创建使用的系统调用)、pthread create 的相关库函数pthread join 等。这些函数也可能涉及线程的创建和管理，可以间接达到相同的效果。
// var clone = Module.findExportByName('libc.so', 'clone');
// Interceptor.attach(clone, {
//     onEnter: function(args) {
//         // args[3] 子线程的栈地址。如果这个值为 0，可能意味着没有指定栈地址
//         if(args[3] != 0){
//             var callerAddress = args[3].add(96).readPointer()
//             var find_module = Process.findModuleByAddress(callerAddress);
//             if (find_module && find_module.name.indexOf("libmsaoaidsec.so") !== -1) {
//                 // console.log('\nBacktrace:\n' + Thread.backtrace(this.context, Backtracer.ACCURATE)
//                 //     .map(DebugSymbol.fromAddress).join('\n'));
//                 console.log("hook_clone invoke Module: " + find_module.name + " offset:" + callerAddress.sub(find_module.base));
//                 // 👇 替换返回值为我们自定义的 pthread_create
//                 args[3] = ptr(my_pthread_create);
//             }
//         }
//     },
//     onLeave: function(retval) {
//     }
// });
//
// function anti_check_frida_feature() {
//     var pt_strstr = Module.findExportByName("libc.so", 'strstr');
//     var pt_strcmp = Module.findExportByName("libc.so", 'strcmp');
//
//     Interceptor.attach(pt_strstr, {
//         onEnter: function (args) {
//             var str1 = args[0].readCString();
//             var str2 = args[1].readCString();
//             if (
//                 str2.indexOf("REJECT") !== -1 ||
//                 str2.indexOf("tmp") !== -1 ||
//                 str2.indexOf("frida") !== -1 ||
//                 str2.indexOf("gum-js-loop") !== -1 ||
//                 str2.indexOf("gmain") !== -1 ||
//                 str2.indexOf("linjector") !== -1
//             ) {
//                 //console.log("strstr-->", str1, str2);
//                 this.hook = true;
//             }
//         }, onLeave: function (retval) {
//             if (this.hook) {
//                 retval.replace(0);
//             }
//         }
//     });
//
//     Interceptor.attach(pt_strcmp, {
//         onEnter: function (args) {
//             var str1 = args[0].readCString();
//             var str2 = args[1].readCString();
//             if (
//                 str2.indexOf("REJECT") !== -1 ||
//                 str2.indexOf("tmp") !== -1 ||
//                 str2.indexOf("frida") !== -1 ||
//                 str2.indexOf("gum-js-loop") !== -1 ||
//                 str2.indexOf("gmain") !== -1 ||
//                 str2.indexOf("linjector") !== -1
//             ) {
//                 //console.log("strcmp-->", str1, str2);
//                 this.hook = true;
//             }
//         }, onLeave: function (retval) {
//             if (this.hook) {
//                 retval.replace(0);
//             }
//         }
//     })
// }
//
// setImmediate(anti_check_frida_feature)