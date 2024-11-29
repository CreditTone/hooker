//在https双向认证的情况下，dump客户端证书为p12. 证书密码: hooker
var password = "hooker";



function dateFormat(fmt, date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),
        // 年
        "m+": (date.getMonth() + 1).toString(),
        // 月
        "d+": date.getDate().toString(),
        // 日
        "H+": date.getHours().toString(),
        // 时
        "M+": date.getMinutes().toString(),
        // 分
        "S+": date.getSeconds().toString() // 秒
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getNowTime() {
    return dateFormat("YYYY_mm_dd_HH_MM_SS", new Date()) + "_" + random(1, 100);
}

function getPackageName() {
    var currentApplication = Java.use('android.app.ActivityThread').currentApplication();
    var context = currentApplication.getApplicationContext();
    return context.getPackageName();
};

function newMethodBeat(text, executor) {
    var threadClz = Java.use("java.lang.Thread");
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var processClz = Java.use("android.os.Process");
    var currentThread = threadClz.currentThread();
    var beat = new Object();
    beat.invokeId = Math.random().toString(36).slice( - 8);
    beat.executor = executor;
    beat.myPid = processClz.myPid();
    beat.threadId = currentThread.getId();
    beat.threadName = currentThread.getName();
    beat.text = text;
    beat.startTime = new Date().getTime();
    beat.stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new()).substring(20);
    return beat;
};

function printBeat(beat) {
    var str = ("------------pid:" + beat.myPid + ",startFlag:" + beat.invokeId + ",objectHash:"+beat.executor+",thread(id:" + beat.threadId +",name:" + beat.threadName + "),timestamp:" + beat.startTime+"---------------\n");
    str += beat.text + "\n";
    str += beat.stackInfo;
    str += ("------------endFlag:" + beat.invokeId + ",usedtime:" + (new Date().getTime() - beat.startTime) +"---------------\n");
	console.log(str);
};

function dump2sdcard(pri, p7, filePath) {
    console.log("dump:" + filePath);
    var X509CertificateClass = Java.use("java.security.cert.X509Certificate");
    var myX509 = Java.cast(p7, X509CertificateClass);
    var chain = Java.array("java.security.cert.X509Certificate", [myX509]);
    var ks = Java.use("java.security.KeyStore").getInstance("PKCS12", "BC");
    ks.load(null, null);
    ks.setKeyEntry("client", pri, Java.use('java.lang.String').$new(password).toCharArray(), chain);
    try {
        var out = Java.use("java.io.FileOutputStream").$new(filePath);
        ks.store(out, Java.use('java.lang.String').$new(password).toCharArray());
    } catch(error) {
        console.log(error);
    }
}



Java.perform(function() {
    var packageName = getPackageName();
    console.log("在https双向认证的情况下，dump客户端证书为p12. 存储位置:/data/user/0/"+packageName+"/client_keystore_{nowtime}.p12 证书密码: hooker");
    Java.use("java.security.KeyStore$PrivateKeyEntry").getPrivateKey.implementation = function() {
    	 var executor = this.hashCode();
        var beatText = 'public java.security.cert.Certificate java.security.KeyStore$PrivateKeyEntry.getPrivateKey()';
        var beat = newMethodBeat(beatText, executor);
        var result = this.getPrivateKey();
        let filePath = '/data/user/0/' + packageName + "/client_keystore_" + "_" + getNowTime() + '.p12';
        dump2sdcard(this.getPrivateKey(), this.getCertificate(), filePath);
        printBeat(beat);
        return result;
    }
    Java.use("java.security.KeyStore$PrivateKeyEntry").getCertificateChain.implementation = function() {
    var executor = this.hashCode();
        var beatText = 'public java.security.cert.Certificate java.security.KeyStore$PrivateKeyEntry.getCertificate()';
        var beat = newMethodBeat(beatText, executor);
        var result = this.getCertificateChain();
        let filePath = '/data/user/0/' + packageName + "/client_keystore_" + getNowTime() + '.p12';
        dump2sdcard(this.getPrivateKey(), this.getCertificate(), filePath);
        return result;
    }
})
