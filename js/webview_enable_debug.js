function main() {
    Java.perform(function () {
        var WebView = Java.use('android.webkit.WebView');
        var Overloads = [
            ['android.content.Context'],
            ['android.content.Context', 'android.util.AttributeSet'],
            ['android.content.Context', 'android.util.AttributeSet', 'int'],
            ['android.content.Context', 'android.util.AttributeSet', 'int', 'int'],
            ['android.content.Context', 'android.util.AttributeSet', 'int', 'boolean'],
            ['android.content.Context', 'android.util.AttributeSet', 'int', 'java.util.Map', 'boolean'],
            ['android.content.Context', 'android.util.AttributeSet', 'int', 'int', 'java.util.Map', 'boolean']
        ];

        Overloads.forEach(function (args) {
            var overload = WebView.$init.overload.apply(WebView.$init, args);
            overload.implementation = function () {
                var result = overload.apply(this, arguments);

                console.log('\n[+] WebView constructor called with args: ' + JSON.stringify(args));
                console.log('[+] WebView instance: ' + this);

                try {
                    var Log = Java.use("android.util.Log");
                    var Throwable = Java.use("java.lang.Throwable");
                    console.log('[*] Stack trace:\n' + Log.getStackTraceString(Throwable.$new()));
                } catch (e) {
                    console.log("[-] Failed to get stack trace: " + e);
                }

                this.setWebContentsDebuggingEnabled(true);
                console.log('[+] WebContents debugging enabled.\n');

                return result;
            };
        });

        // Hook evaluateJavascript
        WebView.evaluateJavascript.overload('java.lang.String', 'android.webkit.ValueCallback').implementation = function (script, callback) {
            console.log('\n[📡] evaluateJavascript called!');
            console.log('[📝] Script: \n' + script);

            try {
                var Log = Java.use("android.util.Log");
                var Throwable = Java.use("java.lang.Throwable");
                console.log('[*] Stack trace:\n' + Log.getStackTraceString(Throwable.$new()));
            } catch (e) {
                console.log("[-] Failed to get stack trace: " + e);
            }

            return this.evaluateJavascript(script, callback);
        };
    });
}

setImmediate(main);