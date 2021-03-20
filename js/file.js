function writeFileAsBase64Content(filepath, base64) {
    var StringClz = Java.use('java.lang.String');
    var Base64Clz = Java.use("android.util.Base64");
    var ByteArrayInputStreamClz = Java.use("java.io.ByteArrayInputStream");
    var FileOutputStreamClz = Java.use("java.io.FileOutputStream");
    var FileClz = Java.use("java.io.File");
    var FileUtilsClz = Java.use("android.os.FileUtils");
    var javaBase64String = StringClz.$new(base64);
    var getBytesMehtod = StringClz.getBytes.overload('java.lang.String');
    var bytes = getBytesMehtod.call(javaBase64String, 'UTF-8');
    var decodeMethod = Base64Clz.decode.overload('[B', 'int');
    var originalBinary = decodeMethod.call(Base64Clz, bytes, 0);
    var bais = ByteArrayInputStreamClz.$new(originalBinary);
    var fos = FileOutputStreamClz.$new(FileClz.$new(filepath));
    var copyMehtod = FileUtilsClz.copy.overload('java.io.InputStream', 'java.io.OutputStream');
    copyMehtod.call(FileUtilsClz, bais, fos);
};

function fileExists(filepath) {
    var FileClz = Java.use("java.io.File");
    return FileClz.$new(filepath).exists();
};

rpc.exports = {
    write: function(filename, contentAsBase64) {
        Java.perform(function() {
            writeFileAsBase64Content(filename, contentAsBase64);
        });
    },
    exists: function(filename) {
    	var ret = false;
        Java.perform(function() {
            ret = fileExists(filename);
        });
        return ret;
    },
};