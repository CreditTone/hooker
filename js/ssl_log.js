function startTLSKeyLogger() {

    const SSL_CTX_new_addr = Module.findExportByName('libssl.so', 'SSL_CTX_new');
    const SSL_CTX_set_keylog_callback_addr = Module.findExportByName('libssl.so', 'SSL_CTX_set_keylog_callback');


    const keyLogCallback = new NativeCallback(function (ssl, line) {
        console.log(new NativePointer(line).readCString());
    }, 'void', ['pointer', 'pointer']);

    const SSL_CTX_set_keylog_callbackFn = new NativeFunction(SSL_CTX_set_keylog_callback_addr, 'void', ['pointer', 'pointer']);
    
    Interceptor.attach(SSL_CTX_new_addr, {
        onLeave: function(retval) {
            const ssl = new NativePointer(retval);
            SSL_CTX_set_keylog_callbackFn(ssl, keyLogCallback);
        }
    });
}

startTLSKeyLogger();