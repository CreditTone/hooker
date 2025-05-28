//打印堆栈
function showStacks() {
    console.log(
        Java.use("android.util.Log")
            .getStackTraceString(
                Java.use("java.lang.Throwable").$new()
            )
    );
}
var ByteString = Java.use("com.android.okhttp.okio.ByteString");
//输出base64格式数据
function toBase64(tag, data) {
    console.log(tag + " Base64: ", ByteString.of(data).base64());
}
//输出hex格式数据
function toHex(tag, data) {
    console.log(tag + " Hex: ", ByteString.of(data).hex());
}
//输出10格式数据
function toUtf8(tag, data) {
    console.log(tag + " Utf8: ", ByteString.of(data).utf8());
}
var messageDigest = Java.use("java.security.MessageDigest");
messageDigest.update.overload('byte').implementation = function (data) {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("MessageDigest.update('byte') is called!");
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.update(data);
}
messageDigest.update.overload('java.nio.ByteBuffer').implementation = function (data) {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("MessageDigest.update('java.nio.ByteBuffer') is called!");
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.update(data);
}
messageDigest.update.overload('[B').implementation = function (data) {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("MessageDigest.update('[B') is called!");
    var algorithm = this.getAlgorithm();
    var tag = algorithm + " update data";
    toUtf8(tag, data);
    toHex(tag, data);
    toBase64(tag, data);
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.update(data);
}
messageDigest.update.overload('[B', 'int', 'int').implementation = function (data, start, length) {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("MessageDigest.update('[B', 'int', 'int') is called!");
    var algorithm = this.getAlgorithm();
    var tag = algorithm + " update data";
    toUtf8(tag, data);
    toHex(tag, data);
    toBase64(tag, data);
    console.log("start:", start);
    console.log("length:", length);
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.update(data, start, length);
}
messageDigest.digest.overload().implementation = function () {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("MessageDigest.digest() is called!");
    var result = this.digest();
    var algorithm = this.getAlgorithm();
    var tag = algorithm + " digest result";
    toHex(tag, result);
    toBase64(tag, result);
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return result;
}
messageDigest.digest.overload('[B').implementation = function (data) {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("MessageDigest.digest('[B') is called!");
    var algorithm = this.getAlgorithm();
    var tag = algorithm + " digest data";
    toUtf8(tag, data);
    toHex(tag, data);
    toBase64(tag, data);
    var result = this.digest(data);
    var tags = algorithm + " digest result";
    toHex(tags, result);
    toBase64(tags, result);
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return result;
}
messageDigest.digest.overload('[B', 'int', 'int').implementation = function (data, start, length) {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("MessageDigest.digest('[B', 'int', 'int') is called!");
    var algorithm = this.getAlgorithm();
    var tag = algorithm + " digest data";
    toUtf8(tag, data);
    toHex(tag, data);
    toBase64(tag, data);
    var result = this.digest(data, start, length);
    var tags = algorithm + " digest result";
    toHex(tags, result);
    toBase64(tags, result);
    console.log("start:", start);
    console.log("length:", length);
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return result;
}
var mac = Java.use("javax.crypto.Mac");
mac.init.overload('java.security.Key', 'java.security.spec.AlgorithmParameterSpec').implementation = function (key, AlgorithmParameterSpec) {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Mac.init('java.security.Key', 'java.security.spec.AlgorithmParameterSpec') is called!");
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.init(key, AlgorithmParameterSpec);
}
mac.init.overload('java.security.Key').implementation = function (key) {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Mac.init('java.security.Key') is called!");
    var algorithm = this.getAlgorithm();
    var tag = algorithm + " init Key";
    var keyBytes = key.getEncoded();
    toUtf8(tag, keyBytes);
    toHex(tag, keyBytes);
    toBase64(tag, keyBytes);
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.init(key);
}
mac.update.overload('byte').implementation = function (data) {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Mac.update('byte') is called!");
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.update(data);
}
mac.update.overload('java.nio.ByteBuffer').implementation = function (data) {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Mac.update('java.nio.ByteBuffer') is called!");
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.update(data);
}
mac.update.overload('[B').implementation = function (data) {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Mac.update('[B') is called!");
    var algorithm = this.getAlgorithm();
    var tag = algorithm + " update data";
    toUtf8(tag, data);
    toHex(tag, data);
    toBase64(tag, data);
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.update(data);
}
mac.update.overload('[B', 'int', 'int').implementation = function (data, start, length) {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Mac.update('[B', 'int', 'int') is called!");
    var algorithm = this.getAlgorithm();
    var tag = algorithm + " update data";
    toUtf8(tag, data);
    toHex(tag, data);
    toBase64(tag, data);
    console.log("start:", start);
    console.log("length:", length);
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.update(data, start, length);
}
mac.doFinal.overload().implementation = function () {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Mac.doFinal() is called!");
    var result = this.doFinal();
    var algorithm = this.getAlgorithm();
    var tag = algorithm + " doFinal result";
    toHex(tag, result);
    toBase64(tag, result);
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return result;
}
// DES/DESede/AES/RSA
var cipher = Java.use("javax.crypto.Cipher");
cipher.init.overload('int', 'java.security.cert.Certificate').implementation = function () {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Cipher.init('int', 'java.security.cert.Certificate') is called!");
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.init.apply(this, arguments);
}
cipher.init.overload('int', 'java.security.Key', 'java.security.SecureRandom').implementation = function () {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Cipher.init('int', 'java.security.Key', 'java.security.SecureRandom') is called!");
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.init.apply(this, arguments);
}
cipher.init.overload('int', 'java.security.cert.Certificate', 'java.security.SecureRandom').implementation = function () {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Cipher.init('int', 'java.security.cert.Certificate', 'java.security.SecureRandom') is called!");
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.init.apply(this, arguments);
}
cipher.init.overload('int', 'java.security.Key', 'java.security.AlgorithmParameters', 'java.security.SecureRandom').implementation = function () {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Cipher.init('int', 'java.security.Key', 'java.security.AlgorithmParameters', 'java.security.SecureRandom') is called!");
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.init.apply(this, arguments);
}
cipher.init.overload('int', 'java.security.Key', 'java.security.spec.AlgorithmParameterSpec', 'java.security.SecureRandom').implementation = function () {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Cipher.init('int', 'java.security.Key', 'java.security.spec.AlgorithmParameterSpec', 'java.security.SecureRandom') is called!");
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.init.apply(this, arguments);
}
cipher.init.overload('int', 'java.security.Key', 'java.security.AlgorithmParameters').implementation = function () {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Cipher.init('int', 'java.security.Key', 'java.security.AlgorithmParameters') is called!");
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.init.apply(this, arguments);
}
cipher.init.overload('int', 'java.security.Key').implementation = function () {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Cipher.init('int', 'java.security.Key') is called!");
    var algorithm = this.getAlgorithm();
    var tag = algorithm + " init Key";
    var className = JSON.stringify(arguments[1]);
    if (className.indexOf("OpenSSLRSAPrivateKey") === -1) {
        var keyBytes = arguments[1].getEncoded();
        toUtf8(tag, keyBytes);
        toHex(tag, keyBytes);
        toBase64(tag, keyBytes);
    }
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.init.apply(this, arguments);
}
cipher.init.overload('int', 'java.security.Key', 'java.security.spec.AlgorithmParameterSpec').implementation = function () {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Cipher.init('int', 'java.security.Key', 'java.security.spec.AlgorithmParameterSpec') is called!");
    var algorithm = this.getAlgorithm();
    var tag = algorithm + " init Key";
    var keyBytes = arguments[1].getEncoded();
    toUtf8(tag, keyBytes);
    toHex(tag, keyBytes);
    toBase64(tag, keyBytes);
    var tags = algorithm + " init iv";
    var iv = Java.cast(arguments[2], Java.use("javax.crypto.spec.IvParameterSpec"));
    var ivBytes = iv.getIV();
    toUtf8(tags, ivBytes);
    toHex(tags, ivBytes);
    toBase64(tags, ivBytes);
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.init.apply(this, arguments);
}
cipher.doFinal.overload('java.nio.ByteBuffer', 'java.nio.ByteBuffer').implementation = function () {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Cipher.doFinal('java.nio.ByteBuffer', 'java.nio.ByteBuffer') is called!");
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.doFinal.apply(this, arguments);
}
cipher.doFinal.overload('[B', 'int').implementation = function () {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Cipher.doFinal('[B', 'int') is called!");
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.doFinal.apply(this, arguments);
}
cipher.doFinal.overload('[B', 'int', 'int', '[B').implementation = function () {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Cipher.doFinal('[B', 'int', 'int', '[B') is called!");
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.doFinal.apply(this, arguments);
}
cipher.doFinal.overload('[B', 'int', 'int', '[B', 'int').implementation = function () {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Cipher.doFinal('[B', 'int', 'int', '[B', 'int') is called!");
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.doFinal.apply(this, arguments);
}
cipher.doFinal.overload().implementation = function () {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Cipher.doFinal() is called!");
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.doFinal.apply(this, arguments);
}
cipher.doFinal.overload('[B').implementation = function () {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Cipher.doFinal('[B') is called!");
    var algorithm = this.getAlgorithm();
    var tag = algorithm + " doFinal data";
    var data = arguments[0];
    //修改一次
    toBase64(tag, data);
    toHex(tag, data);
    toBase64(tag, data);
    var result = this.doFinal.apply(this, arguments);
    var tags = algorithm + " doFinal result";
    toHex(tags, result);
    toBase64(tags, result);
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return result;
}
cipher.doFinal.overload('[B', 'int', 'int').implementation = function () {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Cipher.doFinal('[B', 'int', 'int') is called!");
    var algorithm = this.getAlgorithm();
    var tag = algorithm + " doFinal data";
    var data = arguments[0];
    toUtf8(tag, data);
    toHex(tag, data);
    toBase64(tag, data);
    var result = this.doFinal.apply(this, arguments);
    var tags = algorithm + " doFinal result";
    toHex(tags, result);
    toBase64(tags, result);
    console.log("arguments[1]:", arguments[1],);
    console.log("arguments[2]:", arguments[2]);
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return result;
}
//签名算法
var signature = Java.use("java.security.Signature");
signature.update.overload('byte').implementation = function (data) {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Signature.update('byte') is called!");
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.update(data);
}
signature.update.overload('java.nio.ByteBuffer').implementation = function (data) {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Signature.update('java.nio.ByteBuffer') is called!");
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.update(data);
}
signature.update.overload('[B', 'int', 'int').implementation = function (data, start, length) {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Signature.update('[B', 'int', 'int') is called!");
    var algorithm = this.getAlgorithm();
    var tag = algorithm + " update data";
    toUtf8(tag, data);
    toHex(tag, data);
    toBase64(tag, data);
    console.log("start:", start);
    console.log("length:", length);
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.update(data, start, length);
}
signature.sign.overload('[B', 'int', 'int').implementation = function () {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Signature.sign('[B', 'int', 'int') is called!");
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return this.sign.apply(this, arguments);
}
signature.sign.overload().implementation = function () {
    console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    console.log("Signature.sign() is called!");
    var result = this.sign();
    var algorithm = this.getAlgorithm();
    var tag = algorithm + " sign result";
    toHex(tag, result);
    toBase64(tag, result);
    showStacks();
    console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
    return result;
}