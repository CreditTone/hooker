function hook_dlopen(){
    //Android8.0之后加载so通过android_dlopen_ext函数
    var android_dlopen_ext = Module.findExportByName(null,"android_dlopen_ext");
    console.log("addr_android_dlopen_ext",android_dlopen_ext);
    Interceptor.attach(android_dlopen_ext,{
        onEnter:function(args){
            var pathptr = args[0];
            if(pathptr!=null && pathptr != undefined){
                var path = ptr(pathptr).readCString();
                console.log("android_dlopen_ext:",path);
            }
        },
        onLeave:function(retvel){
            console.log("leave!");
        }
    })
}
hook_dlopen()
