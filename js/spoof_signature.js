function spoofSignature() {
    const originalSignature = "<ORIGINAL_APK_SIGNATURE>" //This will be set by patch_apk.py
    Java.perform(() => {
        const PackageManager = Java.use("android.app.ApplicationPackageManager");
        const Signature = Java.use("android.content.pm.Signature");
        const ActivityThread = Java.use('android.app.ActivityThread');
        PackageManager.getPackageInfo.overload('java.lang.String', 'int').implementation = function(a, b) {
            const packageInfo = this.getPackageInfo(a, b);
            const context = ActivityThread.currentApplication().getApplicationContext();
            const name = context.getPackageName();
            if (a == name && b == 64) {
                const signature = Signature.$new(originalSignature);
                packageInfo.signatures.value = Java.array('android.content.pm.Signature', [signature]);
            }
            return packageInfo;
        }
    });
}

