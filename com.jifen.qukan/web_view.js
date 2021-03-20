function printStacks(androidLogClz, exceptionClz, methodName) {
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    console.log(new Date().getTime()+":"+methodName);
    console.log(stackInfo.substring(20));
};

Java.perform(function() {
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var WebView = Java.use("android.webkit.WebView");
    var WebSettings = Java.use("android.webkit.WebSettings");

    if (WebView.loadUrl) {
        //Ref: https://developer.android.com/reference/android/webkit/WebView.html#loadUrl(java.lang.String)
        WebView.loadUrl.overloads[0].implementation = function(url) {
            //checkSettings(this);
            printStacks(androidLogClz, exceptionClz, 'android.webkit.WebView.loadUrl(java.lang.String:' + url + ')');
            return this.loadUrl.overloads[0].apply(this, arguments);
        };

        //Ref: https://developer.android.com/reference/android/webkit/WebView.html#loadUrl(java.lang.String, java.util.Map<java.lang.String, java.lang.String>)
        WebView.loadUrl.overloads[1].implementation = function(url, additionalHttpHeaders) {
            //checkSettings(this);
            console.log("WebView Navigation: " + url.toString());
            console.log("WebView Headers: " + additionalHttpHeaders);
            printStacks(androidLogClz, exceptionClz, 'android.webkit.WebView.loadUrl(java.lang.String, java.util.Map<java.lang.String, java.lang.String>)');
            return this.loadUrl.overloads[1].apply(this, arguments);
        }
    }

    if (WebView.loadData) {
        //Ref: https://developer.android.com/reference/android/webkit/WebView.html#loadData(java.lang.String, java.lang.String, java.lang.String)
        WebView.loadData.implementation = function(data, mimeType, encoding) {
            //checkSettings(this);
            console.log("WebView loadData data: " + data);
            console.log("WebView loadData mimeType: " + mimeType);
            console.log("WebView loadData encoding: " + encoding);
            printStacks(androidLogClz, exceptionClz, 'android.webkit.WebView.loadData(java.lang.String, java.lang.String, java.lang.String)');
            return this.loadData.apply(this, arguments);
        }
    }

    if (WebView.loadDataWithBaseURL) {
        //Ref: https://developer.android.com/reference/android/webkit/WebView.html#loadDataWithBaseURL(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String)
        WebView.loadDataWithBaseURL.implementation = function(baseUrl, data, mimeType, encoding, historyUrl) {
            //checkSettings(this);
            console.log("WebView loadDataWithBaseURL baseUrl: " + baseUrl);
            console.log("WebView loadDataWithBaseURL data: " + data);
            console.log("WebView loadDataWithBaseURL mimeType: " + mimeType);
            console.log("WebView loadDataWithBaseURL encoding: " + encoding);
            console.log("WebView loadDataWithBaseURL historyUrl: " + historyUrl);
            printStacks(androidLogClz, exceptionClz, 'android.webkit.WebView.loadDataWithBaseURL(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String)');
            return this.loadDataWithBaseURL.apply(this, arguments);
        }
    }

    if (WebView.addJavascriptInterface) {
        //Ref: https://developer.android.com/reference/android/webkit/WebView.html#addJavascriptInterface(java.lang.Object, java.lang.String)
        WebView.addJavascriptInterface.implementation = function(object, name) {
            console.log("addJavascriptInterface Object: " + object.toString());
            console.log("addJavascriptInterface Name: " + name);
            printStacks(androidLogClz, exceptionClz, 'android.webkit.WebView.addJavascriptInterface(java.lang.Object, java.lang.String)');
            return this.addJavascriptInterface.apply(this, arguments);
        }
    }

    if (WebView.evaluateJavascript) {
        //Ref: https://developer.android.com/reference/android/webkit/WebView.html#evaluateJavascript(java.lang.String, android.webkit.ValueCallback<java.lang.String>)
        WebView.evaluateJavascript.implementation = function(script, resultCallback) {
            console.log("WebView evaluateJavascript Script: " + script);
            printStacks(androidLogClz, exceptionClz, 'android.webkit.WebView.evaluateJavascript(java.lang.String, android.webkit.ValueCallback<java.lang.String>)');
            return this.evaluateJavascript.apply(this, arguments);
        }
    }

    if (WebView.postUrl) {
        //Ref: https://developer.android.com/reference/android/webkit/WebView.html#postUrl(java.lang.String, byte[])
        WebView.postUrl.implementation = function(url, postData) {
            //checkSettings(this);
            console.log("WebView postUrl URL: " + url);
            console.log("WebView postUrl postData: " + postData);
            printStacks(androidLogClz, exceptionClz, 'android.webkit.WebView.postUrl(java.lang.String, byte[])');
            return this.postUrl.apply(this, arguments);
        }
    }

    if (WebView.postWebMessage) {
        //Ref: https://developer.android.com/reference/android/webkit/WebView.html#postWebMessage(android.webkit.WebMessage, android.net.Uri)
        WebView.postWebMessage.implementation = function(message, targetOrigin) {
            console.log("WebView postWebMessage message: " + message.getData());
            console.log("WebView postWebMessage targetOrigin: " + targetOrigin.toString());
            printStacks(androidLogClz, exceptionClz, 'android.webkit.WebView.postWebMessage(android.webkit.WebMessage, android.net.Uri)');
            return this.postWebMessage.apply(this, arguments);
        }
    }

    if (WebView.savePassword) {
        //Ref: https://developer.android.com/reference/android/webkit/WebView.html#savePassword(java.lang.String, java.lang.String, java.lang.String)
        WebView.savePassword.implementation = function(host, username, password) {
            console.log("WebView savePassword Host: " + host);
            console.log("WebView savePassword Username: " + username);
            console.log("WebView savePassword Password: " + password);
            printStacks(androidLogClz, exceptionClz, 'android.webkit.WebView.savePassword(java.lang.String, java.lang.String, java.lang.String)');
            return this.savePassword.apply(this, arguments);
        }
    }

    if (WebView.setHttpAuthUsernamePassword) {
        //Ref: https://developer.android.com/reference/android/webkit/WebView.html#setHttpAuthUsernamePassword(java.lang.String, java.lang.String, java.lang.String, java.lang.String)
        WebView.setHttpAuthUsernamePassword.implementation = function(host, realm, username, password) {
            console.log("WebView setHttpAuthUsernamePassword Host: " + host);
            console.log("WebView setHttpAuthUsernamePassword Realm: " + realm);
            console.log("WebView setHttpAuthUsernamePassword Username: " + username);
            console.log("WebView setHttpAuthUsernamePassword Password: " + password);
            printStacks(androidLogClz, exceptionClz, 'android.webkit.WebView.setHttpAuthUsernamePassword(java.lang.String, java.lang.String, java.lang.String, java.lang.String)');
            return this.setHttpAuthUsernamePassword.apply(this, arguments);
        }
    }

    if (WebView.getHttpAuthUsernamePassword) {
        //Ref: https://developer.android.com/reference/android/webkit/WebView.html#getHttpAuthUsernamePassword(java.lang.String, java.lang.String)
        WebView.getHttpAuthUsernamePassword.implementation = function(host, realm) {
            var credentials = this.getHttpAuthUsernamePassword.apply(this, arguments);
            console.log("WebView getHttpAuthUsernamePassword Host: " + host);
            console.log("WebView getHttpAuthUsernamePassword Host: " + realm);
            console.log("WebView getHttpAuthUsernamePassword Credentials: " + credentials);
            printStacks(androidLogClz, exceptionClz, 'android.webkit.WebView.getHttpAuthUsernamePassword(java.lang.String, java.lang.String)');
            return credentials;
        }
    }
});