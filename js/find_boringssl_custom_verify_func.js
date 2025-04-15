var hasAlreadyHooked = false;

//init_proc func start addr
var startAddr = null;

//init_proc func end addr
var endAddr = null;

// replace your so name eg: xxx.so
var somodule = "libttboringssl.so";

function hook_dlopen(){
    //Android8.0之后加载so通过android_dlopen_ext函数
    var android_dlopen_ext = Module.findExportByName(null,"android_dlopen_ext");
    //console.log("addr_android_dlopen_ext",android_dlopen_ext);
    Interceptor.attach(android_dlopen_ext,{
        onEnter:function(args){
            var pathptr = args[0];
            if(pathptr!=null && pathptr != undefined){
                var path = ptr(pathptr).readCString();
                this.path = path;
                if(path.indexOf(somodule)!=-1){
                    //console.log("android_dlopen_ext:",path);
                    hook_custom_verify()
                }
            }
        },
        onLeave:function(retvel){
            //console.log(this.path+" leave!");
        }
    })
}

const targetLibrary = somodule;
const targetFunction = 'SSL_CTX_set_custom_verify';
const functionOffset = 0x47FB0; // 函数偏移量

// 主函数
function hook_SSL_CTX_set_custom_verify() {
    // 获取模块基址
    const moduleBase = Module.findBaseAddress(targetLibrary);
    if (!moduleBase) {
        console.error(`[!] 无法找到模块: ${targetLibrary}`);
        return;
    }

    // 计算绝对地址
    const targetAddress = moduleBase.add(functionOffset);
    console.log(`[+] ${targetLibrary} 基址: ${moduleBase}`);
    console.log(`[+] ${targetFunction} 地址: ${targetAddress}`);

    // 挂钩函数
    Interceptor.attach(targetAddress, {
        onEnter: function (args) {
            console.log(`\n[+] ${targetFunction} 被调用`);
            
            // 打印参数 (根据函数原型可能有不同)
            // SSL_CTX_set_custom_verify(SSL_CTX *ctx, int mode, SSL_custom_verify_callback callback)
            console.log(`  - SSL_CTX: ${args[0]}`);
            console.log(`  - 验证模式: ${args[1]}`);
            console.log(`  - 回调函数地址: ${args[2]}`);
            var find_module = Process.findModuleByAddress(args[2]);
            if (find_module) {
                console.log("回调函数so偏移地址 |--> Module: " + find_module.name + " offset:" + ptr(args[2]).sub(find_module.base));
            }
            // 保存参数以便在onLeave中使用
            this.ctx = args[0];
            this.mode = args[1].toInt32();
            this.callback = args[2];
        },
        onLeave: function (retval) {
            console.log(`[+] ${targetFunction} 返回`);
            console.log(`  - 返回值: ${retval}`);
            
            // 如果需要，可以在这里修改返回值
            // retval.replace(ptr(0x1)); // 示例：强制返回1
        }
    });
}


function hook_custom_verify() {
    // 延迟执行以确保模块已加载
    setTimeout(hook_SSL_CTX_set_custom_verify, 0);

}
function main(){
    hook_dlopen()
}

main()