function dump_so(so_name) {
    if (Java.available) {
        Java.perform(function () {
            var currentApplication = Java.use("android.app.ActivityThread").currentApplication();
            var dir = currentApplication.getApplicationContext().getFilesDir().getPath();
            var libso = Process.getModuleByName(so_name);
            console.log("[name]:", libso.name);
            console.log("[base]:", libso.base);
            console.log("[size]:", ptr(libso.size));
            console.log("[path]:", libso.path);
            var file_path = dir + "/" + libso.name + "_" + libso.base + "_" + ptr(libso.size) + ".so";
            var file_handle = new File(file_path, "wb");
            if (file_handle && file_handle != null) {
                Memory.protect(ptr(libso.base), libso.size, 'rwx');
                var libso_buffer = ptr(libso.base).readByteArray(libso.size);
                file_handle.write(libso_buffer);
                file_handle.flush();
                file_handle.close();
                console.log("[dump]:", file_path);
            }
        });
    }
}