var loadedXRadar = false;

function loadDexfile(dexfile) {
    Java.perform(function() {
        Java.openClassFile(dexfile).load();
        //console.log("load " + dexfile);
    });
};

function loadXinitDexfile(dexfile) {
    loadDexfile('/data/user/0/com.liuzh.deviceinfo/xinit/'+dexfile);
};

function loadXRadarDexfile() {
    loadedXRadar = true;
    loadDexfile('/data/user/0/com.liuzh.deviceinfo/radar.dex');
};

loadXRadarDexfile();

function fastTojson(javaObject) {
    var JSONClz = Java.use("gz.com.alibaba.fastjson.JSON");
    return JSONClz.toJSONString(javaObject);
};

function getPrettyString(javaObject) {
    var XPretty = Java.use("gz.util.XPretty");
    return XPretty.getPrettyString(javaObject);
};

function xPretty(javaObject) {
    var str = getPrettyString(javaObject);
    console.log(str);
};

function getField(javaObject, fieldName) {
    var X = Java.use("gz.util.X");
    return X.getField(javaObject, fieldName);
};


// APP需要获取android.permission.READ_PHONE_STATE权限，否则无法读取IMEI
var read_phone_state = false;

function getBasicInfo() {
    Java.perform(function () {
        var appContext = Java.use("android.app.ActivityThread").currentApplication().getApplicationContext();
        var permission = "android.permission.READ_PHONE_STATE";

        var PackageManager = Java.use("android.content.pm.PackageManager");
        var permissionCheck = appContext.checkSelfPermission(permission);

        if (permissionCheck === PackageManager.PERMISSION_GRANTED.value) {
            read_phone_state = true;
        } else {
            console.log("App 未获得权限: " + permission + "，部分信息无法获取");
        }
        console.log("[设备基本信息]");
        // 1. 品牌
        var Build = Java.use("android.os.Build");

        console.log("品牌 (BRAND): " + Build.BRAND.value);
        console.log("制造商 (MANUFACTURER): " + Build.MANUFACTURER.value);
        console.log("型号 (MODEL): " + Build.MODEL.value);
        console.log("设备 (DEVICE): " + Build.DEVICE.value);
        console.log("主板 (BOARD): " + Build.BOARD.value);
        console.log("硬件 (HARDWARE): " + Build.HARDWARE.value);
        console.log("产品名 (PRODUCT): " + Build.PRODUCT.value);
        console.log("指纹 (FINGERPRINT): " + Build.FINGERPRINT.value);
        console.log("序列号 (SERIAL): " + Build.SERIAL.value);

        var BuildVersion = Java.use("android.os.Build$VERSION");
        var release = BuildVersion.RELEASE.value;
        var sdk = BuildVersion.SDK_INT.value;
        console.log("系统版本 (RELEASE): " + release);
        console.log("SDK 版本 (SDK_INT): " + sdk);

        // 2. ANDROID_ID
        var SettingsSecure = Java.use("android.provider.Settings$Secure");
        var currentApplication = Java.use("android.app.ActivityThread").currentApplication();
        var context = currentApplication.getApplicationContext();
        var cr = context.getContentResolver();
        var androidId = SettingsSecure.getString(cr, "android_id");
        console.log("Android ID: " + androidId);

        if (read_phone_state) {
            // 3. TelephonyManager - 获取 IMEI
            var TelephonyManagerClz = Java.use("android.telephony.TelephonyManager");
            var telephonyRaw = context.getSystemService("phone");
            var telephonyManager = Java.cast(telephonyRaw, TelephonyManagerClz);
            var imei = null;

            if (sdk >= 26) {  // Build.VERSION_CODES.O == 26
                // Android 8.0 及以上使用 getImei()
                if (typeof telephonyManager.getImei === "function") {
                    imei = telephonyManager.getImei();
                } else {
                    imei = "getImei() 不存在";
                }
            } else {
                // Android 8.0 以下使用 getDeviceId()
                if (typeof telephonyManager.getDeviceId === "function") {
                    imei = telephonyManager.getDeviceId();
                } else {
                    imei = "getDeviceId() 不存在";
                }
            }

            console.log("IMEI: " + imei);
            //var imei = telephony.getDeviceId(); // Android <10 有效
            //console.log("IMEI: " + imei);

            // IMSI
            var imsi = telephonyManager.getSubscriberId();
            console.log("IMSI: " + imsi);

            // ICCID (SIM 序列号)
            var simSerial = telephonyManager.getSimSerialNumber();
            console.log("SIM 序列号: " + simSerial);

            // 运营商
            var operator = telephonyManager.getNetworkOperatorName();
            console.log("运营商: " + operator);
            // 手机号
            var number = telephonyManager.getLine1Number();
            console.log("手机号: " + number);
        }

        var activityManagerClz = Java.use("android.app.ActivityManager");
        var ContextClz = Java.use("android.content.Context");
        var activityManager = Java.cast(appContext.getSystemService(ContextClz.ACTIVITY_SERVICE.value), activityManagerClz);
        // 获取内存信息
        var MemoryInfoClz = Java.use("android.app.ActivityManager$MemoryInfo");
        var memInfo = MemoryInfoClz.$new();
        activityManager.getMemoryInfo(memInfo);

        var totalMem = memInfo.totalMem.value / (1024 * 1024);  // MB
        var availMem = memInfo.availMem.value / (1024 * 1024);  // MB
        var usedMem = totalMem - availMem;
        var memPercent = (usedMem / totalMem * 100).toFixed(2);

        console.log("[内存信息]");
        console.log("总内存: " + totalMem.toFixed(2) + " MB");
        console.log("已使用: " + usedMem.toFixed(2) + " MB");
        console.log("使用率: " + memPercent + " %");

        // 获取 CPU 核心数（/proc/cpuinfo）
        var cpuCount = Java.use("java.lang.Runtime").getRuntime().availableProcessors();
        console.log("[CPU 信息]");
        console.log("CPU 核心数: " + cpuCount);

        // 获取存储信息
        var statFs = Java.use("android.os.StatFs");
        var file = Java.use("java.io.File");
        var dataDir = context.getFilesDir().getAbsolutePath();
        var stat = statFs.$new(file.$new(dataDir).getAbsolutePath());

        var blockSize = stat.getBlockSizeLong();
        var blockCount = stat.getBlockCountLong();
        var availableBlocks = stat.getAvailableBlocksLong();
        var totalSize = blockSize * blockCount / (1024 * 1024);  // MB
        var availableSize = blockSize * availableBlocks / (1024 * 1024);  // MB
        var usedSize = totalSize - availableSize;
        var storagePercent = (usedSize / totalSize * 100).toFixed(2);
        console.log("[存储信息]");
        console.log("总存储: " + totalSize.toFixed(2) + " MB");
        console.log("已使用: " + usedSize.toFixed(2) + " MB");
        console.log("使用率: " + storagePercent + " %");


        // 获取电池状态
        var IntentFilter = Java.use("android.content.IntentFilter");
        var BatteryManager = Java.use("android.os.BatteryManager");
        var Intent = Java.use("android.content.Intent");

        var filter = IntentFilter.$new("android.intent.action.BATTERY_CHANGED");
        var batteryStatus = context.registerReceiver(null, filter);

        var status = batteryStatus.getIntExtra("status", -1);
        var isCharging = (status == 2 || status == 5);  // 充电 or 满电

        var voltage = batteryStatus.getIntExtra("voltage", -1);  // mV
        var temperature = batteryStatus.getIntExtra("temperature", -1) / 10.0;  // 摄氏度

        console.log("[电池信息]");
        console.log("是否充电中: " + (isCharging ? "是" : "否"));
        console.log("电压: " + voltage + " mV");
        console.log("温度: " + temperature.toFixed(1) + " ℃");


    });
}

function getSensos() {
    Java.perform(function () {
        var currentApplication = Java.use("android.app.ActivityThread").currentApplication();
        var context = currentApplication.getApplicationContext();
        // 获取传感器数量
        var SensorManagerClz = Java.use("android.hardware.SensorManager");
        var sensorService = context.getSystemService("sensor");
        var Sensor = Java.use("android.hardware.Sensor");

        var sensorManager = Java.cast(
            context.getSystemService(ContextClz.SENSOR_SERVICE.value),
            SensorManagerClz
        );
        var sensors = sensorManager.getSensorList(Sensor.TYPE_ALL.value);
        console.log("sensorService:" + sensorService);

        console.log("[传感器信息]");
        console.log("传感器数量: " + sensors.size());
        var iter = sensors.iterator();

        // 类型说明映射表
        var sensorTypeMap = {
            1: "加速度传感器：检测三轴加速度（含重力）",
            2: "磁场传感器：检测地球磁场",
            3: "方向传感器",
            4: "陀螺仪：检测设备的角速度",
            5: "光线传感器：检测环境光强度",
            6: "压力传感器：检测气压，估算海拔",
            8: "距离传感器：靠近时自动熄屏",
            9: "重力传感器：检测真实重力方向",
            10: "线性加速度传感器（去掉重力分量）",
            11: "旋转矢量传感器：方向感知（用于 AR）",
            15: "游戏旋转矢量传感器（低功耗）",
            16: "未校准陀螺仪：原始角速度数据",
            18: "步态检测：步测器",
            19: "步态检测：计步器",
            20: "地磁旋转向量传感器",
            35: "未校准加速度传感器",
            17: "大幅度动作传感器",
            22: "倾斜传感器",
            29: "静止检测传感器",
            30: "运动检测传感器",
            33171026: "触碰压力传感器",
        };
        var i = 0;
        while (iter.hasNext()) {
            var sensor = Java.cast(iter.next(), Sensor);
            var type = sensor.getType();
            var typeDesc = sensorTypeMap[type] || "未知传感器类型";

            console.log("传感器 " + i);
            console.log("名称     : " + sensor.getName());
            console.log("厂商     : " + sensor.getVendor());
            console.log("类型     : " + type + " ➜ " + typeDesc);
            console.log("唤醒传感器: " + sensor.isWakeUpSensor());
            console.log("功耗     : " + sensor.getPower() + " mA");
            console.log("精度     : " + sensor.getResolution());
            console.log("范围     : " + sensor.getMaximumRange());
            console.log("最小延迟 : " + sensor.getMinDelay() + " μs");
            i++;
        }
    });
}

function getInstalledPackages() {
    Java.perform(function () {
        var context = Java.use("android.app.ActivityThread").currentApplication().getApplicationContext();
        var pm = context.getPackageManager();
        var PackageManager = Java.use("android.content.pm.PackageManager");
        var ApplicationInfo = Java.use("android.content.pm.ApplicationInfo");
        var packages = pm.getInstalledPackages(0);
        var size = packages.size();
        console.log("[应用信息]");
        console.log("安装应用数量: " + size);
        for (var i = 0; i < size; i++) {
            var pkgInfo = packages.get(i);
            var appInfo = getField(pkgInfo, "applicationInfo");
            var appName = pm.getApplicationLabel(appInfo);
            var packageName = getField(pkgInfo, "packageName");
            var flags = getField(appInfo, "flags");
            var FLAG_SYSTEM = getField(appInfo, "FLAG_SYSTEM");
            var isSystemApp = (flags & FLAG_SYSTEM) !== 0;
            console.log("------"+(i+1)+"-------");
            console.log("应用名称   : " + appName);
            console.log("包名       : " + packageName);
            console.log("是否系统应用: " + (isSystemApp ? "是" : "否"));
        }
    });
}

function getSystemInfo() {
    Java.perform(function () {
        var Build = Java.use("android.os.Build");
        var SystemProperties = Java.use("android.os.SystemProperties");
        var BuildVersion = Java.use("android.os.Build$VERSION");
        var release = BuildVersion.RELEASE.value;
        var sdk = BuildVersion.SDK_INT.value;
        // 系统版本信息
        console.log("[系统信息]");
        console.log("设备型号: " + Build.MODEL.value);
        console.log("Android版本: " + release);
        console.log("API级别: " + sdk);
        console.log("构建ID: " + Build.DISPLAY.value);
        console.log("安全补丁日期: " + BuildVersion.SECURITY_PATCH.value);
        var baseband = SystemProperties.get("gsm.version.baseband", "unknown");
        console.log("基带版本: " + baseband);
        var kernelVersion = SystemProperties.get("os.version", "unknown");
        console.log("内核版本: " + kernelVersion);

        var File = Java.use("java.io.File");
        var isRooted = false;

        // 检查常见su路径
        var suPaths = ["/system/bin/su", "/system/xbin/su", "/sbin/su"];
        suPaths.forEach(function(path) {
            if (File.$new(path).exists()) {
                isRooted = true;
            }
        });

        console.log("\n[Root权限]");
        console.log("是否已Root: " + (isRooted ? "是" : "否"));

        var SystemClock = Java.use("android.os.SystemClock");
        var uptimeMillis = SystemClock.elapsedRealtime();
        var hours = Math.floor(uptimeMillis / (1000 * 60 * 60));
        var minutes = Math.floor((uptimeMillis % (1000 * 60 * 60)) / (1000 * 60));
        console.log("\n[开机时长]");
        console.log("已运行: " + hours + "小时 " + minutes + "分钟");

        // Java Runtime版本（需Root权限）
        var runtimeVersion = Java.use("java.lang.System").getProperty("java.runtime.version");

        // ART虚拟机版本
        var vmVersion = Java.use("dalvik.system.VMRuntime").getRuntime().vmVersion();

        // JVM堆内存信息
        var runtime = Java.use("java.lang.Runtime").getRuntime();
        var maxMemoryMB = runtime.maxMemory() / (1024 * 1024); // 转换为MB

        console.log("\n[Java运行时信息]");
        console.log("Java Runtime版本: " + runtimeVersion);
        console.log("ART虚拟机版本: " + vmVersion);
        console.log("JVM最大堆内存: " + maxMemoryMB.toFixed(0) + " MB");

        function executeCommand(cmd) {
            var result = "";
            var Process = Java.use("java.lang.Process");
            var Runtime = Java.use("java.lang.Runtime");
            var InputStream = Java.use("java.io.InputStream");
            var BufferedReader = Java.use("java.io.BufferedReader");
            var InputStreamReader = Java.use("java.io.InputStreamReader");

            try {
                var process = Runtime.getRuntime().exec(cmd);
                var reader = BufferedReader.$new(InputStreamReader.$new(process.getInputStream()));
                var line;
                while ((line = reader.readLine()) != null) {
                    result += line + "\n";
                }
                reader.close();
            } catch(e) {}
            return result.trim();
        }
        console.log("\n[内核信息]");
        console.log("架构: " + executeCommand("uname -m"));
        console.log("版本: " + executeCommand("uname -r"));
        console.log("详细版本: " + executeCommand("cat /proc/version"));
        var selinuxStatus = executeCommand("getenforce"); // 输出: Enforcing/Permissive
        //Root
        console.log("\n[SELinux状态]");
        console.log("当前模式: " + selinuxStatus);
        console.log("配置文件: " + executeCommand("cat /sys/fs/selinux/enforce"));
        var drm = null;
        try {
            const MediaDrm = Java.use("android.media.MediaDrm");
            const UUID = Java.use("java.util.UUID");
            const WIDEVINE_UUID = UUID.fromString("edef8ba9-79d6-4ace-a3c8-27dcd51d21ed");
            drm = MediaDrm.$new(WIDEVINE_UUID);

            console.log("\n[DRM信息]");

            // 基础信息
            console.log("厂商: " + drm.getPropertyString("vendor"));
            console.log("版本: " + drm.getPropertyString("version"));
            console.log("安全级别: " + drm.getPropertyString("securityLevel"));
            console.log("描述: Widevine CDM"); // 固定值，由UUID决定

            // 算法（需反射获取私有字段）
            // const schemes = drm.getCryptoSchemes();
            // console.log("算法: " + schemes.join(",")); // 输出支持的加密方案

            // 系统编号（厂商私有属性）
            console.log("系统编号: " + drm.getPropertyString("systemId"));

            var algorithms = drm.getPropertyString("algorithms");
            console.log("支持的加密算法: " + algorithms);

            // 可选：获取唯一设备ID
            var devIdBytes = drm.getPropertyByteArray("deviceUniqueId");
            // 转为十六进制字符串
            var hexId = [];
            for (var i = 0; i < devIdBytes.length; i++) {
                var b = devIdBytes[i] & 0xFF;
                hexId.push(('0' + b.toString(16)).slice(-2));
            }
            console.log("DRM设备唯一ID: " + hexId.join(''));
            if (sdk >= 28) {
                // HDCP等级（需API 28+）
                const hdcpLevel = drm.getConnectedHdcpLevel();
                console.log("HDCP等级: " + hdcpLevel);
                console.log("最大HDCP等级: " + drm.getMaxHdcpLevel());
            }


            // 会话信息
            console.log("最大会话数: " + drm.getMaxSessionCount());
            console.log("打开会话数: " + drm.getOpenSessionCount());
            if (sdk >= 29) {
                // 使用情况报告（需API 29+）
                console.log("使用情况报告支持: " + drm.isUsageReportingSupported());
            }

        } catch (e) {
            console.log("获取DRM信息失败: " + e);
        } finally {
            if (drm) drm.close();
        }
    });
}