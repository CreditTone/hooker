function classExists(className) {
    var exists = false;
    try {
        var clz = Java.use(className);
        exists = true;
    } catch(err) {
        //console.log(err);
    }
    return exists;
};

function loadDexfile(dexfile) {
    Java.perform(function() {
        Java.openClassFile(dexfile).load();
        //console.log("load " + dexfile);
    });
};

var loadedXRadar = false;
function loadXRadarDexfile() {
    loadedXRadar = true;
    loadDexfile('/data/user/0/com.smile.gifmaker/radar.dex');
};


loadXRadarDexfile();

function hasTrustManagerImpl() {
    return classExists("com.android.org.conscrypt.TrustManagerImpl");
}

function newArrayList() {
    var ArrayListClz = Java.use('java.util.ArrayList');
    return ArrayListClz.$new();
}


function processOkHttp() {
    //知道你为什么有时候用JustTrustMe失败吗，因为app代码混淆了下面这些类你改到对应的类和方法就行啦
    if (classExists("com.squareup.okhttp.CertificatePinner")) {
        var squareupOkhttp3CertificatePinnerClz = Java.use('com.squareup.okhttp.CertificatePinner');
        var squareupOkhttp3CertificatePinnerClzCheck = squareupOkhttp3CertificatePinnerClz.check.overload('java.lang.String', 'java.util.List');
        squareupOkhttp3CertificatePinnerClzCheck.implementation = function(v0, v1) {
            //什么都不做
            console.log("com.squareup.okhttp.CertificatePinner.check('java.lang.String', 'java.util.List') was hooked!");
        };
    }else{
        console.error("没找到com.squareup.okhttp.CertificatePinner类，这是android系统自带的类没找到就算了。不同系统不一样，不用找了!!!");
    }

    if (classExists("okhttp3.CertificatePinner")) {
        try {
            var okhttp3CertificatePinnerClz = Java.use('okhttp3.CertificatePinner');
            var okhttp3CertificatePinnerClzCheck = okhttp3CertificatePinnerClz.check.overload('java.lang.String', 'java.util.List');
            okhttp3CertificatePinnerClzCheck.implementation = function(v0, v1) {
                //什么都不做
                console.log("okhttp3.CertificatePinner.check('java.lang.String', 'java.util.List') was hooked!");
            };
        } catch (error) {
            console.error("okhttp3.CertificatePinner的check方法可能被混淆了。你可以jadx反编译下还原回来！");
        }
    }else{
        console.error("没找到okhttp3.CertificatePinner类，可能被混淆了。你可以jadx反编译下还原回来！");
    }

    if (classExists("okhttp3.internal.tls.OkHostnameVerifier")) {
        try {
            var OkHostnameVerifierClz = Java.use('okhttp3.internal.tls.OkHostnameVerifier');
            var OkHostnameVerifierClzVerify_5791 = OkHostnameVerifierClz.verify.overload('java.lang.String', 'javax.net.ssl.SSLSession');
            OkHostnameVerifierClzVerify_5791.implementation = function(v0, v1) {
                //强制返回true
                console.log("okhttp3.internal.tls.OkHostnameVerifier.verify('java.lang.String', 'javax.net.ssl.SSLSession') was hooked!");
                return true;
            };
            var OkHostnameVerifierVerify_8978 = OkHostnameVerifierClz.verify.overload('java.lang.String', 'java.security.cert.X509Certificate');
            OkHostnameVerifierVerify_8978.implementation = function(v0, v1) {
                //强制返回true
                console.log("okhttp3.internal.tls.OkHostnameVerifier.verify('java.lang.String', 'java.security.cert.X509Certificate') was hooked!");
                return true;
            };
        } catch (error) {
            console.error("okhttp3.internal.tls.OkHostnameVerifier的verify方法可能被混淆了。你可以jadx反编译下还原回来！");
        }
    }else{
        console.error("没找到okhttp3.internal.tls.OkHostnameVerifier类，可能被混淆了。你可以jadx反编译下还原回来！");
    }

    if (classExists("okhttp3.OkHttpClient$Builder")) {
        try{
            var okhttp3_OkHttpClient_Builder_clz = Java.use('okhttp3.OkHttpClient$Builder');
            var okhttp3_OkHttpClient_Builder_clz_sslSocketFactory_one = okhttp3_OkHttpClient_Builder_clz.sslSocketFactory.overload('javax.net.ssl.SSLSocketFactory');
            okhttp3_OkHttpClient_Builder_clz_sslSocketFactory_one.implementation = function(sSLSocketFactory) {
                //把参数替换成EmptySSLFactory
                var ret = okhttp3_OkHttpClient_Builder_clz_sslSocketFactory_one.call(this, Java.use("gz.justtrustme.Helper").getEmptySSLFactory());
                return ret;
            };
            var okhttp3_OkHttpClient_Builder_clz_sslSocketFactory_two = okhttp3_OkHttpClient_Builder_clz.sslSocketFactory.overload('javax.net.ssl.SSLSocketFactory', 'javax.net.ssl.X509TrustManager');
            okhttp3_OkHttpClient_Builder_clz_sslSocketFactory_two.implementation = function(sSLSocketFactory, x509TrustManager) {
                //把参数替换成EmptySSLFactory
                var ret = okhttp3_OkHttpClient_Builder_clz_sslSocketFactory_two.call(this, Java.use("gz.justtrustme.Helper").getEmptySSLFactory(), x509TrustManager);
                return ret;
            };
        } catch(error) {
            console.error("okhttp3.OkHttpClient$Builder的sslSocketFactory方法可能被混淆了。你可以jadx反编译下还原回来！");
        }
    }else{
        console.error("没找到okhttp3.OkHttpClient$Builder类，可能被混淆了。你可以jadx反编译下还原回来！");
    }
}


function processXutils() {
    if (classExists("org.xutils.http.RequestParams")) {
        var RequestParamsClass = Java.use("org.xutils.http.RequestParams");
        var RequestParamsClassSetSslSocketFactory = RequestParamsClass.setSslSocketFactory.overload('javax.net.ssl.SSLSocketFactory');
        RequestParamsClassSetSslSocketFactory.implementation = function(v0) {
            console.log("org.xutils.http.RequestParams.setSslSocketFactory('javax.net.ssl.SSLSocketFactory') was hooked!");
            var Helper = Java.use("gz.justtrustme.Helper");
            //替换javax.net.ssl.SSLSocketFactory参数为我们的EmptySSLFactory
            RequestParamsClassSetSslSocketFactory.call(this, Helper.getEmptySSLFactory());
        };
        var RequestParamsClassSetHostnameVerifier = RequestParamsClass.setHostnameVerifier.overload('javax.net.ssl.HostnameVerifier');
        RequestParamsClassSetHostnameVerifier.implementation = function(v0) {
            console.log("org.xutils.http.RequestParams.setHostnameVerifier('javax.net.ssl.HostnameVerifier') was hooked!");
            var ImSureItsLegitHostnameVerifier = Java.use("gz.justtrustme.ImSureItsLegitHostnameVerifier");
            //替换javax.net.ssl.HostnameVerifier参数为我们的ImSureItsLegitHostnameVerifier
            RequestParamsClassSetHostnameVerifier.call(this, ImSureItsLegitHostnameVerifier.$new());
        };
    }
}

function processHttpClientAndroidLib() {
    if (classExists("ch.boye.httpclientandroidlib.conn.ssl.AbstractVerifier")) {
        var AbstractVerifierClass = Java.use("ch.boye.httpclientandroidlib.conn.ssl.AbstractVerifier");
        var OkHostnameVerifierClzVerify_5791 = AbstractVerifierClass.verify.overload('java.lang.String', '[Ljava.lang.String;', '[Ljava.lang.String;', 'boolean');
        OkHostnameVerifierClzVerify_5791.implementation = function(v0, v1, v2, v3) {
            //什么都不做
            console.log("ch.boye.httpclientandroidlib.conn.ssl.AbstractVerifier.verify('java.lang.String', '[Ljava.lang.String;', '[Ljava.lang.String;', 'boolean') was hooked!");
        };
    }else{
        console.error("没找到ch.boye.httpclientandroidlib.conn.ssl.AbstractVerifier类，但是这个类用的少。不用找了!");
    }
}

//这是hooker添加的hook点，原JustTrustMe中没有的
function processConscryptPlatform() {
    if (!classExists("com.android.org.conscrypt.Platform")) {
        return;
    }
    var com_android_org_conscrypt_Platform_clz = Java.use('com.android.org.conscrypt.Platform');
    var com_android_org_conscrypt_Platform_clz_method_checkServerTrusted_9565 = com_android_org_conscrypt_Platform_clz.checkServerTrusted.overload('javax.net.ssl.X509TrustManager', '[Ljava.security.cert.X509Certificate;', 'java.lang.String', 'com.android.org.conscrypt.OpenSSLEngineImpl');
    com_android_org_conscrypt_Platform_clz_method_checkServerTrusted_9565.implementation = function(v0, v1, v2, v3) {
        //什么都不做
    };
    var com_android_org_conscrypt_Platform_clz_method_checkServerTrusted_6928 = com_android_org_conscrypt_Platform_clz.checkServerTrusted.overload('javax.net.ssl.X509TrustManager', '[Ljava.security.cert.X509Certificate;', 'java.lang.String', 'com.android.org.conscrypt.OpenSSLSocketImpl');
    com_android_org_conscrypt_Platform_clz_method_checkServerTrusted_6928.implementation = function(v0, v1, v2, v3) {
        //什么都不做
    };
}


//这是hooker添加的hook点，原JustTrustMe中没有的
function processPinningTrustManager() {
    if (!classExists("appcelerator.https.PinningTrustManager")) {
        return;
    }
    var pinningTrustManagerClass = Java.use('appcelerator.https.PinningTrustManager');
    var pinningTrustManagerClass_checkServerTrusted = pinningTrustManagerClass.checkServerTrusted.overload();
    pinningTrustManagerClass_checkServerTrusted.implementation = function() {
        //什么都不做
    };
}


Java.perform(function() {
    var Helper = Java.use("gz.justtrustme.Helper");
    var DefaultHttpClientClass = Java.use("org.apache.http.impl.client.DefaultHttpClient");
    //被强奸的构造方法
    var DefaultHttpClientClassRapeConstructor = DefaultHttpClientClass.$init.overload('org.apache.http.conn.ClientConnectionManager', 'org.apache.http.params.HttpParams');
    DefaultHttpClientClassRapeConstructor.implementation = function(v0, v1) {
        //被强奸的构造方法被调用的话，我们替换调ClientConnectionManager参数为我们的
        var returnObj = DefaultHttpClientClassRapeConstructor.call(this, Helper.getCCM(v0, v1), v1);
        console.log("org.apache.http.impl.client.DefaultHttpClient.$init('org.apache.http.conn.ClientConnectionManager', 'org.apache.http.params.HttpParams') was hooked!");
        return returnObj;
    };
    var DefaultHttpClientClassInit_1602 = DefaultHttpClientClass.$init.overload();
    DefaultHttpClientClassInit_1602.implementation = function() {
        //使用DefaultHttpClientClassRapeConstructor强奸它
        var returnObj = DefaultHttpClientClassRapeConstructor.call(this, Helper.getSCCM(), null);
        console.log("org.apache.http.impl.client.DefaultHttpClient.$init() was hooked!");
        return returnObj;
    };
    var DefaultHttpClientClassInit_1603 = DefaultHttpClientClass.$init.overload('org.apache.http.params.HttpParams');
    DefaultHttpClientClassInit_1603.implementation = function(v0) {
        //使用DefaultHttpClientClassRapeConstructor强奸它
        var returnObj = DefaultHttpClientClassRapeConstructor.call(this, Helper.getSCCM(), v0);
        console.log("org.apache.http.impl.client.DefaultHttpClient.$init('org.apache.http.params.HttpParams') was hooked!");
        return returnObj;
    };
    //以上DefaultHttpClient的三个构造方法逻辑全部被我们替换了
    var X509TrustManagerExtensionsClass = Java.use('android.net.http.X509TrustManagerExtensions');
    var X509TrustManagerExtensionsClassCheckServerTrusted = X509TrustManagerExtensionsClass.checkServerTrusted.overload('[Ljava.security.cert.X509Certificate;', 'java.lang.String', 'java.lang.String');
    X509TrustManagerExtensionsClassCheckServerTrusted.implementation = function(certsArr, v1, v2) {
        console.log("android.net.http.X509TrustManagerExtensions.checkServerTrusted('[Ljava.security.cert.X509Certificate;', 'java.lang.String', 'java.lang.String') was hooked!");
        return Java.use('java.util.Arrays$ArrayList').$new(certsArr);
    };
    var NetworkSecurityTrustManagerClass = Java.use('android.security.net.config.NetworkSecurityTrustManager');
    var NetworkSecurityTrustManagerClassCheckPins = NetworkSecurityTrustManagerClass.checkPins.overload('java.util.List');
    NetworkSecurityTrustManagerClassCheckPins.implementation = function(v0) {
        //什么都不做
        console.log("android.security.net.config.NetworkSecurityTrustManager.checkPins('java.util.List') was hooked!");
    };

    //替换trustmanagers参数
    var SSLSocketFactory = Java.use('org.apache.http.conn.ssl.SSLSocketFactory');
    var SSLSocketFactoryRapeConstructor = SSLSocketFactory.$init.overload('java.lang.String', 'java.security.KeyStore', 'java.lang.String', 'java.security.KeyStore', 'java.security.SecureRandom', 'org.apache.http.conn.scheme.HostNameResolver');
    SSLSocketFactoryRapeConstructor.implementation = function(v0, v1, v2, v3, v4, v5) {
        var returnObj = SSLSocketFactoryRapeConstructor.call(this, v0, v1, v2, v3, v4, v5);
        console.log("org.apache.http.conn.ssl.SSLSocketFactory.$init('java.lang.String', 'java.security.KeyStore', 'java.lang.String', 'java.security.KeyStore', 'java.security.SecureRandom', 'org.apache.http.conn.scheme.HostNameResolver') was hooked!");
        if (Helper.reInitSSLSocketFactory(this, v0, v1, v2, v3, v4, v5)) {
            console.log("替换trustmanagers参数成功!");
        }else{
            console.log("替换trustmanagers参数失败!"); 
        }
        return returnObj;
    };

    var SSLSocketFactoryGetSocketFactoryMethod = SSLSocketFactory.getSocketFactory.overload();
    var SSLSocketFactoryEmptyConstructor = SSLSocketFactory.$init.overload();
    SSLSocketFactoryGetSocketFactoryMethod.implementation = function() {
        //强制用空的构造方法
        console.log("org.apache.http.conn.ssl.SSLSocketFactory.getSocketFactory() was hooked!");
        return SSLSocketFactoryEmptyConstructor.call(this);
    };

    var SSLSocketFactoryIsSecure = SSLSocketFactory.isSecure.overload('java.net.Socket');
    SSLSocketFactoryIsSecure.implementation = function(v0) {
        //强制返回true
        console.log("org.apache.http.conn.ssl.SSLSocketFactory.isSecure('java.net.Socket') was hooked!");
        return true;
    };

    var TrustManagerFactory = Java.use('javax.net.ssl.TrustManagerFactory');
    var TrustManagerFactoryGetTrustManagers = TrustManagerFactory.getTrustManagers.overload();
    TrustManagerFactoryGetTrustManagers.implementation = function() {
        var ret = TrustManagerFactoryGetTrustManagers.call(this);
        //替换getTrustManagers方法逻辑
        console.log("javax.net.ssl.TrustManagerFactory.getTrustManagers() was hooked!");
        return Helper.replaceGetTrustManagers(this, ret);
    };

    var HttpsURLConnection = Java.use("javax.net.ssl.HttpsURLConnection");
    var HttpsURLConnectionSetDefaultHostnameVerifier = HttpsURLConnection.setDefaultHostnameVerifier.overload('javax.net.ssl.HostnameVerifier');
    HttpsURLConnectionSetDefaultHostnameVerifier.implementation = function(v0) {
        //什么都不做
        console.log("javax.net.ssl.HttpsURLConnection.setDefaultHostnameVerifier('javax.net.ssl.HostnameVerifier') was hooked!");
    };

    var HttpsURLConnectionSetHostnameVerifier = HttpsURLConnection.setHostnameVerifier.overload('javax.net.ssl.HostnameVerifier');
    HttpsURLConnectionSetHostnameVerifier.implementation = function(v0) {
        //什么都不做
        console.log("javax.net.ssl.HttpsURLConnection.setHostnameVerifier('javax.net.ssl.HostnameVerifier') was hooked!");
    };

    var HttpsURLConnectionSetSSLSocketFactory = HttpsURLConnection.setSSLSocketFactory.overload('javax.net.ssl.SSLSocketFactory');
    HttpsURLConnectionSetSSLSocketFactory.implementation = function(v0) {
        //什么都不做
        console.log("javax.net.ssl.SSLSocketFactory.setSSLSocketFactory('javax.net.ssl.SSLSocketFactory') was hooked!");
    };

    var SSLContextClz = Java.use('javax.net.ssl.SSLContext');
    var SSLContextClzInit = SSLContextClz.init.overload('[Ljavax.net.ssl.KeyManager;', '[Ljavax.net.ssl.TrustManager;', 'java.security.SecureRandom');
    SSLContextClzInit.implementation = function(v0, v1, v2) {
        //将第二个参数强制替换为我们自己构造的不安全的TrustManagers
        SSLContextClzInit.call(this, v0, Helper.getImSureTrustManagers(), v2);
        console.log("javax.net.ssl.SSLContext.init('[Ljavax.net.ssl.KeyManager;', '[Ljavax.net.ssl.TrustManager;', 'java.security.SecureRandom') was hooked!");
    };

    var ApplicationClz = Java.use('android.app.Application');
    var ApplicationClzAttach = ApplicationClz.attach.overload('android.content.Context');
    ApplicationClzAttach.implementation = function(context) {
        ApplicationClzAttach.call(this, context);
        //注意justTrustMe使用的是afterHookedMethod，所以我们用frida也必须在原方法call完之后执行我们的代码
        var classLoader = context.getClassLoader();

    };

    if (hasTrustManagerImpl()) {
        var TrustManagerImplClz = Java.use('com.android.org.conscrypt.TrustManagerImpl');
        var TrustManagerImplCheckServerTrusted_8813 = TrustManagerImplClz.checkServerTrusted.overload('[Ljava.security.cert.X509Certificate;', 'java.lang.String', 'java.lang.String');
        TrustManagerImplCheckServerTrusted_8813.implementation = function(v0, v1, v2) {
            console.log("com.android.org.conscrypt.TrustManagerImpl.checkServerTrusted('[Ljava.security.cert.X509Certificate;', 'java.lang.String', 'java.lang.String') was hooked!");
            return newArrayList();
        };
        var TrustManagerImplCheckServerTrusted_7015 = TrustManagerImplClz.checkServerTrusted.overload('[Ljava.security.cert.X509Certificate;', 'java.lang.String', 'javax.net.ssl.SSLSession');
        TrustManagerImplCheckServerTrusted_7015.implementation = function(v0, v1, v2) {
            console.log("com.android.org.conscrypt.TrustManagerImpl.checkServerTrusted('[Ljava.security.cert.X509Certificate;', 'java.lang.String', 'javax.net.ssl.SSLSession') was hooked!");
            return newArrayList();
        };
        var TrustManagerImplCheckTrusted_5587 = TrustManagerImplClz.checkTrusted.overload('[Ljava.security.cert.X509Certificate;', 'java.lang.String', 'java.lang.String', 'boolean');
        TrustManagerImplCheckTrusted_5587.implementation = function(v0, v1, v2, v3) {
            console.log("com.android.org.conscrypt.TrustManagerImpl.checkTrusted('[Ljava.security.cert.X509Certificate;', 'java.lang.String', 'java.lang.String', 'boolean') was hooked!");
            return newArrayList();
        };
        var TrustManagerImplCheckTrusted_9999 = TrustManagerImplClz.checkTrusted.overload('[Ljava.security.cert.X509Certificate;', 'java.lang.String', 'javax.net.ssl.SSLSession', 'javax.net.ssl.SSLParameters', 'boolean');
        TrustManagerImplCheckTrusted_9999.implementation = function(v0, v1, v2, v3, v4) {
            console.log("com.android.org.conscrypt.TrustManagerImpl.checkTrusted('[Ljava.security.cert.X509Certificate;', 'java.lang.String', 'javax.net.ssl.SSLSession', 'javax.net.ssl.SSLParameters', 'boolean') was hooked!");
            return newArrayList();
        };
    }

    processOkHttp();
    processXutils();
    processHttpClientAndroidLib();
    //hooker添加的hook点
    processConscryptPlatform();
    processPinningTrustManager();
})