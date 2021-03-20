function methodInBeat(invokeId, timestamp, methodName, executor) {
	var startTime = timestamp;
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var threadClz = Java.use("java.lang.Thread");
    var currentThread = threadClz.currentThread();
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    var str = ("------------startFlag:" + invokeId + ",objectHash:"+executor+",thread(id:" + currentThread.getId() +",name:" + currentThread.getName() + "),timestamp:" + startTime+"---------------\n");
    str += methodName + "\n";
    str += stackInfo.substring(20);
    str += ("------------endFlag:" + invokeId + ",usedtime:" + (new Date().getTime() - startTime) +"---------------\n");
	console.log(str);
};

Java.perform(function() {
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var WebView = Java.use("android.webkit.WebView");
    var WebSettings = Java.use("android.webkit.WebSettings");

    if (WebView.loadUrl) {
        WebView.loadUrl.overloads[0].implementation = function(url) {
            var invokeId = Math.random().toString(36).slice( - 8);
            var startTime = new Date().getTime();
            var executor = this.hashCode();
            var ret = this.loadUrl.overloads[0].apply(this, arguments);
            console.log("url:" + url);
            methodInBeat(invokeId, startTime, 'android.webkit.WebView.loadUrl(java.lang.String)', executor);
            return ret;
        };

        WebView.loadUrl.overloads[1].implementation = function(url, additionalHttpHeaders) {
            var invokeId = Math.random().toString(36).slice( - 8);
            var startTime = new Date().getTime();
            var executor = this.hashCode();
            var ret = this.loadUrl.overloads[1].apply(this, arguments);
            console.log("url: " + url.toString());
            console.log("headers: " + additionalHttpHeaders);
            methodInBeat(invokeId, startTime, 'android.webkit.WebView.loadUrl(java.lang.String, java.util.Map<java.lang.String, java.lang.String>))', executor);
            return ret;
        }
    }

    if (WebView.loadData) {
        WebView.loadData.implementation = function(data, mimeType, encoding) {
            var invokeId = Math.random().toString(36).slice( - 8);
            var startTime = new Date().getTime();
            var executor = this.hashCode();
            var ret = this.loadData.apply(this, arguments);
            console.log("data: " + data);
            console.log("mimeType: " + mimeType);
            console.log("encoding: " + encoding);
            methodInBeat(invokeId, startTime, 'android.webkit.WebView.loadData(java.lang.String, java.lang.String, java.lang.String)', executor);
            return ret;
        }
    }

    if (WebView.loadDataWithBaseURL) {
        WebView.loadDataWithBaseURL.implementation = function(baseUrl, data, mimeType, encoding, historyUrl) {
            var invokeId = Math.random().toString(36).slice( - 8);
            var startTime = new Date().getTime();
            var executor = this.hashCode();
            var ret = this.loadDataWithBaseURL.apply(this, arguments);
            console.log("baseUrl: " + baseUrl);
            console.log("data: " + data);
            console.log("mimeType: " + mimeType);
            console.log("encoding: " + encoding);
            console.log("historyUrl: " + historyUrl);
            methodInBeat(invokeId, startTime, 'android.webkit.WebView.loadDataWithBaseURL(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String)', executor);
            return ret;
        }
    }

    if (WebView.addJavascriptInterface) {
        WebView.addJavascriptInterface.implementation = function(object, name) {
            var invokeId = Math.random().toString(36).slice( - 8);
            var startTime = new Date().getTime();
            var executor = this.hashCode();
            console.log("object: " + object.toString());
            console.log("name: " + name);
            var ret = this.addJavascriptInterface.apply(this, arguments);
            methodInBeat(invokeId, startTime, 'android.webkit.WebView.addJavascriptInterface(java.lang.Object, java.lang.String)', executor);
            return ret;
        }
    }

    if (WebView.evaluateJavascript) {
        WebView.evaluateJavascript.implementation = function(script, resultCallback) {
            var invokeId = Math.random().toString(36).slice( - 8);
            var startTime = new Date().getTime();
            var executor = this.hashCode();
            console.log("script: " + script);
            var ret = this.evaluateJavascript.apply(this, arguments);
            methodInBeat(invokeId, startTime, 'android.webkit.WebView.evaluateJavascript(java.lang.String, android.webkit.ValueCallback<java.lang.String>)', executor);
            return ret;
        }
    }

    if (WebView.postUrl) {
        WebView.postUrl.implementation = function(url, postData) {
            var invokeId = Math.random().toString(36).slice( - 8);
            var startTime = new Date().getTime();
            var executor = this.hashCode();
            console.log("url: " + url);
            console.log("postData: " + postData);
            var ret = this.postUrl.apply(this, arguments);
            methodInBeat(invokeId, startTime, 'android.webkit.WebView.postUrl(java.lang.String, byte[])', executor);
            return ret;
        }
    }

    if (WebView.postWebMessage) {
        WebView.postWebMessage.implementation = function(message, targetOrigin) {
            var invokeId = Math.random().toString(36).slice( - 8);
            var startTime = new Date().getTime();
            var executor = this.hashCode();
            console.log("message: " + message.getData());
            console.log("targetOrigin: " + targetOrigin.toString());
            var ret = this.postWebMessage.apply(this, arguments);
            methodInBeat(invokeId, startTime, 'android.webkit.WebView.postWebMessage(android.webkit.WebMessage, android.net.Uri)', executor);
            return ret;
        }
    }

    if (WebView.savePassword) {
        WebView.savePassword.implementation = function(host, username, password) {
            var invokeId = Math.random().toString(36).slice( - 8);
            var startTime = new Date().getTime();
            var executor = this.hashCode();
            console.log("host: " + host);
            console.log("username: " + username);
            console.log("password: " + password);
            var ret = this.savePassword.apply(this, arguments);
            methodInBeat(invokeId, startTime, 'android.webkit.WebView.savePassword(java.lang.String, java.lang.String, java.lang.String)', executor);
            return ret;
        }
    }

    if (WebView.setHttpAuthUsernamePassword) {
        WebView.setHttpAuthUsernamePassword.implementation = function(host, realm, username, password) {
            var invokeId = Math.random().toString(36).slice( - 8);
            var startTime = new Date().getTime();
            var executor = this.hashCode();
            console.log("host: " + host);
            console.log("realm: " + realm);
            console.log("username: " + username);
            console.log("password: " + password);
            var ret = this.setHttpAuthUsernamePassword.apply(this, arguments);
            methodInBeat(invokeId, startTime, 'android.webkit.WebView.setHttpAuthUsernamePassword(java.lang.String, java.lang.String, java.lang.String, java.lang.String)', executor);
            return ret;
        }
    }

    if (WebView.getHttpAuthUsernamePassword) {
        WebView.getHttpAuthUsernamePassword.implementation = function(host, realm) {
            var invokeId = Math.random().toString(36).slice( - 8);
            var startTime = new Date().getTime();
            var executor = this.hashCode();
            var credentials = this.getHttpAuthUsernamePassword.apply(this, arguments);
            console.log("host: " + host);
            console.log("realm: " + realm);
            methodInBeat(invokeId, startTime, 'android.webkit.WebView.getHttpAuthUsernamePassword(java.lang.String, java.lang.String)', executor);
            return credentials;
        }
    }
});