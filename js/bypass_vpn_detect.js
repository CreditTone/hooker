function bypassVPNDetect(){
    Java.perform(function(){
        var NetworkInterface = Java.use("java.net.NetworkInterface")
        NetworkInterface.getAll.implementation = function(){
            var nis = this.getAll()
            console.log("call getAll function !!!")
            nis.forEach(function(ni){
                if (ni.name.value.indexOf("tun0")>=0 || ni.name.value.indexOf("ppp0")>=0 ||
                ni.displayName.value.indexOf("tun0")>=0 || ni.displayName.value.indexOf("ppp0")>=0){
                    ni.name.value = "xxxx"
                    ni.displayName.value = "xxxx"
                }
            })
            return nis
        }

        var can_hook = false
        var ConnectivityManager = Java.use("android.net.ConnectivityManager");
        ConnectivityManager.getNetworkInfo.overload('int').implementation = function(){
            if(arguments[0] == 17){
                can_hook = true
            }
            var ret = this.getNetworkInfo(arguments[0])
            return ret
        }

        var NetworkInfo = Java.use("android.net.NetworkInfo")
        NetworkInfo.isConnected.implementation = function(){
            let ret = this.isConnected()
            if(can_hook){
                ret = false
                can_hook = false
                console.log("call isConnected function !!!")
            }
            return ret
        }

        var NetworkCapabilities = Java.use("android.net.NetworkCapabilities")
        NetworkCapabilities.hasTransport.implementation = function(){
            var ret = this.hasTransport(arguments[0])
            if(arguments[0] == 4){
                console.log("call hasTransport function !!!")
                ret = false
            }
            return ret
        }

        NetworkCapabilities.transportNameOf.overload('int').implementation = function(){
            var ret = this.transportNameOf(arguments[0])
            if(ret.indexOf("VPN") >= 0){
                ret = "WIFI"
            }
            return ret;
        }
    })
}

setImmediate(bypassVPNDetect)