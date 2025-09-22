Java.perform(function () {
    // Hook检查VPN的类和方法
    var ConnectivityManager = Java.use('android.net.ConnectivityManager');
    ConnectivityManager.getNetworkInfo.overload('int').implementation = function (networkType) {
        console.log('Bypassing VPN detection...');
        var result = this.getNetworkInfo(networkType);
        if (networkType === ConnectivityManager.TYPE_VPN.value) {
            console.log('VPN detected, returning null to bypass detection.');
            return null;
        }
        return result;
    };

    // Hook检查代理的类和方法
    var System = Java.use('java.lang.System');
    System.getProperty.overload('java.lang.String').implementation = function (key) {
        console.log('Bypassing proxy detection for key: ' + key);
        if (key === 'http.proxyHost' || key === 'https.proxyHost') {
            console.log('Proxy detected, returning null to bypass detection.');
            return null;
        }
        var result = this.getProperty(key);
        console.log("key",key,"value",result)
        return this.getProperty(key);
    };

    // Hook检查代理的其他方法，如getDefaultProxy
    var Proxy = Java.use('android.net.Proxy');
    Proxy.getDefaultHost.implementation = function () {
        console.log('Bypassing proxy detection in getDefaultHost...');
        return null;
    };

    Proxy.getDefaultPort.implementation = function () {
        console.log('Bypassing proxy detection in getDefaultPort...');
        return -1; // 返回无效端口
    };

    console.log('VPN and Proxy detection hooks installed.');
});