function loadDexfile(dexfile) {
    Java.perform(function () {
        Java.openClassFile(dexfile).load();
    });
};


loadDexfile('/data/local/tmp/radar.dex');


function printOkhttp3FakeClass(okhttp3FakeClassObject) {
    if (okhttp3FakeClassObject) {
        console.log("-----------------------------------------------------------------------");
        console.log("原类名：" + okhttp3FakeClassObject.getOriginalClassName());
        console.log("混淆类名：" + okhttp3FakeClassObject.getFakeClassName());
        console.log("\n");
        for (let k = 0; k < okhttp3FakeClassObject.fakeMethodSize(); k ++) {
            let fakeMethod = okhttp3FakeClassObject.getFakeMethod(k);
            console.log("混淆方法" + k + ":");
            console.log("原方法签名：" + fakeMethod.getOriginalMethod());
            console.log("混淆方法签名：" + fakeMethod.getFakeMethod());
            console.log("\n");
        }
        if (okhttp3FakeClassObject.fakeMethodSize() == 0) {
            //手动找混淆方法
            console.error("自动定位混淆方法失败，请去jadx打开"+okhttp3FakeClassObject.getFakeClassName()+"手动分析混淆方法");
        }
    }
}

//设置下混淆okhttp混淆类包名的前戳，以便加快扫描速度
//一般okhttp用的版本是3，并且混淆没有到包名级别所以我这里默认给^okhttp3
//如果你的apk混淆的到了包名级别。先用jadx静态分析找到包名前戳改到这即可
//你可以用.*，但是全量扫描太慢了。frida不是那么的耐操，容易崩溃！
var matchClassNameRegExp = RegExp(/^okhttp3/);


Java.perform(function() {
    var OkHttp3FakeFinder = Java.use("gz.justtrustme.OkHttp3FakeFinder");
    Java.enumerateLoadedClasses({
        onMatch: function(className) {
            if (className.match(matchClassNameRegExp)) {
                try {
                    let tempClassHandle = Java.use(className).class;
                    let matchOkHttpClientBuilderCheckResult = OkHttp3FakeFinder.okHttpClientBuilderCheck(tempClassHandle);
                    if (matchOkHttpClientBuilderCheckResult) {
                        printOkhttp3FakeClass(matchOkHttpClientBuilderCheckResult);
                        return;
                    }
                    
                    let matchOk3CertificatePinnerCheckResult = OkHttp3FakeFinder.okHttpCertificatePinnerCheck(tempClassHandle);
                    if (matchOk3CertificatePinnerCheckResult) {
                        printOkhttp3FakeClass(matchOk3CertificatePinnerCheckResult);
                        return;
                    }

                    let matchOk3OkHostnameVerifierVerifyResult = OkHttp3FakeFinder.okHttpOkHostnameVerifierVerify(tempClassHandle);
                    if (matchOk3OkHostnameVerifierVerifyResult) {
                        printOkhttp3FakeClass(matchOk3OkHostnameVerifierVerifyResult);
                        return;
                    }
                    
                } catch(error) {
                    //console.error(error);
                }
            }
        },
        onComplete: function() {}
    });
});


