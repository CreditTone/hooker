cd /sdcard
dir=/data/mobile-deploy
if [ ! -d  $dir ]; then
	mkdir /data/mobile-deploy
fi
cp /sdcard/mobile-deploy/*server* /data/mobile-deploy/
cp /sdcard/mobile-deploy/tcpforward* /data/mobile-deploy/
cp /sdcard/mobile-deploy/frpc* /data/mobile-deploy/
cp /sdcard/mobile-deploy/busybox* /data/mobile-deploy/
chmod 700 /data/mobile-deploy/*

cpuInfo=$(cat /proc/cpuinfo)
currentTime=$(date +%s)

if [[ $cpuInfo == *AArch64* ]] || [[ $cpuInfo == *ARMv8* ]] || [[ $cpuInfo == *ARMv9* ]]; then
    abiType="arm64"
elif [[ $cpuInfo == *ARMv7* ]]; then
    abiType="arm"
elif [[ $cpuInfo == *Intel* ]] || [[ $cpuInfo == *AMD* ]]; then
    abiType="x86"
else
	abiType="arm64"
fi

echo "" > /data/mobile-deploy/tools_env.rc
chmod 700 /data/mobile-deploy/tools_env.rc

firda_server_bind_port=27042

if [ -n "$1" ]; then
	firda_server_bind_port=$1
	echo "set firda_server_bind_port to $1"
fi

if [[ $abiType == arm64 ]]; then
	echo "start frida-server"
	nohup /data/mobile-deploy/frida-server-16.7.19-android-arm64 -l 0.0.0.0:$firda_server_bind_port > /sdcard/frida-server.log 2>&1 &
	
	echo "alias tcpforward=/data/mobile-deploy/tcpforward_linux_arm64" >> /data/mobile-deploy/tools_env.rc
	
	echo "alias frpc=/data/mobile-deploy/frpc_arm64" >> /data/mobile-deploy/tools_env.rc
	
	echo "alias vi='/data/mobile-deploy/busybox-armv7m vi'" >> /data/mobile-deploy/tools_env.rc
	
	echo "alias telnet='/data/mobile-deploy/busybox-armv7m telnet'" >> /data/mobile-deploy/tools_env.rc
	
elif [[ $abiType == arm ]]; then
	echo "start frida-server"
	nohup /data/mobile-deploy/hluda-server-14.2.13-android-arm -l 0.0.0.0:$firda_server_bind_port > /sdcard/frida-server.log 2>&1 &
	
	echo "alias tcpforward=/data/mobile-deploy/tcpforward_linux_arm" >> /data/mobile-deploy/tools_env.rc
	
	echo "alias frpc=/data/mobile-deploy/frpc_arm" >> /data/mobile-deploy/tools_env.rc
	
	echo "alias vi='/data/mobile-deploy/busybox-armv7m vi'" >> /data/mobile-deploy/tools_env.rc
	
	echo "alias telnet='/data/mobile-deploy/busybox-armv7m telnet'" >> /data/mobile-deploy/tools_env.rc
else
	echo "start frida-server"
	nohup /data/mobile-deploy/hluda-server-14.2.13-android-x86 -l 0.0.0.0:$firda_server_bind_port > /sdcard/frida-server.log 2>&1 &
	
	echo "alias tcpforward=/data/mobile-deploy/tcpforward_linux_x86" >> /data/mobile-deploy/tools_env.rc
	
	echo "alias frpc=/data/mobile-deploy/frpc_x86" >> /data/mobile-deploy/tools_env.rc
	
	echo "alias vi='/data/mobile-deploy/busybox-i686 vi'" >> /data/mobile-deploy/tools_env.rc
	
	echo "alias telnet='/data/mobile-deploy/busybox-i686 telnet'" >> /data/mobile-deploy/tools_env.rc
fi

echo "alias ll='ls -l'" >> /data/mobile-deploy/tools_env.rc

echo "deploy successfull."

#如果手机的magisk root的话使用以下命令改为全局debug模式
#magisk resetprop ro.debuggable 1
#stop;start;


