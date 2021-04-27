function loadDexfile(dexfile) {
    Java.perform(function () {
        Java.openClassFile(dexfile).load();
    });
};

var okHostnameVerifier_Verify1_DescribText = "okhttp3.internal.tls.OkHostnameVerifier ---> public boolean verify(String str, SSLSession sSLSession);";
var okHostnameVerifier_Verify2_DescribText = "okhttp3.internal.tls.OkHostnameVerifier ---> public boolean verify(String str, X509Certificate x509Certificate);";
var certificatePinner_Check_DescribText = "okhttp3.CertificatePinner ---> public void check(String str, List<Certificate> list);";

loadDexfile('/data/user/0/com.smile.gifmaker/radar.dex');

Java.perform(function () {
    console.log("开始模糊匹配okhttp的混淆类......");
    var OkHttp3FakeFinder = Java.use("gz.justtrustme.OkHttp3FakeFinder");
    var foundCount = 0;
    Java.enumerateLoadedClasses({
        onMatch: function (className) {
            var matchOk3CertificatePinnerCheckResult = OkHttp3FakeFinder.matchOk3CertificatePinnerCheck(className);
            if (matchOk3CertificatePinnerCheckResult && matchOk3CertificatePinnerCheckResult.length == 2) {
                let describText = certificatePinner_Check_DescribText + " matching: " + matchOk3CertificatePinnerCheckResult[0] + "---> public void " + matchOk3CertificatePinnerCheckResult[1] + "(String str, List<Certificate> list)";
                console.log(describText+"\n");
                foundCount += 1;
            }

            var matchOk3OkHostnameVerifierVerifyResult = OkHttp3FakeFinder.matchOk3OkHostnameVerifierVerify(className);
            if (matchOk3OkHostnameVerifierVerifyResult && matchOk3OkHostnameVerifierVerifyResult.length == 3) {
                let describText1 = okHostnameVerifier_Verify1_DescribText + " matching: " + matchOk3OkHostnameVerifierVerifyResult[0] + "---> public boolean " + matchOk3OkHostnameVerifierVerifyResult[1] + "(String str, SSLSession sSLSession)";
                let describText2 = okHostnameVerifier_Verify2_DescribText + " matching: " + matchOk3OkHostnameVerifierVerifyResult[0] + "---> public boolean " + matchOk3OkHostnameVerifierVerifyResult[2] + "(String str, X509Certificate x509Certificate)";
                console.log(describText1+"\n");
                console.log(describText2+"\n");
                foundCount += 2;
            }

        },
        onComplete: function () {
            if (foundCount > 0) {
                console.log("模糊匹配完成，请打开jadx确认以上结果是否匹配正确。如果正确，你可以把正确的hook点修改到just_trust_me.js的processOkHttp方法里。祝你抓包成功！");
            }else{
                console.log("模糊匹配完成，未找到任何结果!");
            } 
        }
    });
});


