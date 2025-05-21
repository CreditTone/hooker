

# hooker全面升级至frida 16.7.19，想尝新请执行python3 hooker.py
# 文档后续会补充

免责声明
本项目的所有内容仅供学习与技术交流使用，旨在帮助开发者理解移动应用的结构和工作原理。

本项目不包含任何针对特定应用的破解操作或侵权内容。
针对某些app存在的简单解包技术内容在各大技术论坛网站均大量存在，并无对这些app造成实际损害
本项目无意协助任何非法用途，包括但不限于绕过版权保护、修改应用功能或获取未经授权的数据。
请确保在使用本项目工具时遵守相关法律法规，并仅用于个人学习或研究目的。

# 欢迎使用hooker逆向工作台

hooker是一个基于frida实现的逆向工具包。为逆向开发人员提供统一化的脚本包管理方式、通杀脚本、自动化生成hook脚本、内存漫游探测activity和service、frida版JustTrustMe、boringssl unpinning全网app通杀



目录
=================

* [hooker环境部署](#环境部署)
    * [1. git clone项目](#1-git-clone项目)
    * [2. 安装依赖](#2-安装python3依赖)
    * [3. root手机usb连接](#3-root手机usb连接电脑)
    * [4. frida-server部署](#4-启动hooker)


# 环境部署

手机保证root，无需任何手动启动frida-server等一切配置。hooker会帮你搞定一切

### 1. git clone项目
```shell
stephen@ubuntu:~$ git clone https://github.com/CreditTone/hooker.git
stephen@ubuntu:~$ cd hooker
```

### 2. 安装python3依赖
```shell
stephen@ubuntu:~/hooker$ pip3 install -r requirements.txt
```


### 3. root手机usb连接电脑
```shell
stephen@ubuntu:~/hooker$ adb devices
List of devices attached
FA77C0301476	device
```


### 4. 启动hooker
```shell
stephen@ubuntu:~/hooker$ python3 hooker.py
bogon:hooker stephen256$ ./hooker.py
hooker Let's enjoy reverse engineering together
-----------------------------------------------------------------------------------------------
PID   	APP                 	IDENTIFIER                         	EXIST_REVERSE_DIRECTORY
0     	全球上网            	com.miui.virtualsim                	❌
0     	爱奇艺              	com.qiyi.video                     	❌
0     	红手指云手机        	com.redfinger.app                  	❌
0     	Reqable             	com.reqable.android                	❌
0     	美团                	com.sankuai.meituan                	✅
0     	得物                	com.shizhuang.duapp                	❌
0     	某皮           	     cxm.shxpxx.sg                      	✅
0     	微博                	com.sina.weibo                     	❌
0     	今日头条            	com.ss.android.article.news        	✅
0     	西瓜视频            	com.ss.android.article.video       	✅
0     	懂车帝              	com.ss.android.auto                	✅
0     	抖音火山版          	com.ss.android.ugc.live            	✅
0     	抖音精选            	com.ss.android.yumme.video         	❌
0     	淘宝                	com.taobao.taobao                  	✅
0     	腾讯视频            	com.tencent.qqlive                 	❌
0     	Termux              	com.termux                         	❌
0     	轻奢                	com.tm.bachelorparty               	✅
0     	WiFi ADB            	com.ttxapps.wifiadb                	❌
0     	VMOS Pro            	com.vmos.pro                       	✅
0     	游戏中心            	com.xiaomi.gamecenter              	❌
0     	小米商城            	com.xiaomi.shop                    	❌
0     	米家                	com.xiaomi.smarthome               	❌
0     	小米有品            	com.xiaomi.youpin                  	✅
0     	小红书              	com.xingin.xhs                     	✅
0     	运满满货主          	com.xiwei.logistics.consignor      	✅
0     	拼多多              	com.xunmeng.pinduoduo              	✅
0     	EnvCheck            	com.yimian.envcheck                	✅
0     	check_env           	com.yuuki.check_env                	❌
0     	TikTok              	com.zhiliaoapp.musically           	❌
0     	XPrivacyLua         	eu.faircode.xlua                   	❌
0     	imToken             	im.token.app                       	❌
0     	SocksDroid          	net.typeblog.socks                 	❌
0     	F-Droid             	org.fdroid.fdroid                  	❌
0     	ProxyDroid          	org.proxydroid                     	❌
3457  	手机管家            	com.miui.securitycenter            	✅
3509  	优信拍              	com.uxin.buyerphone                	✅
18780 	抖音                	com.ss.android.ugc.aweme           	✅
20174 	应用商店            	com.xiaomi.market                  	❌
20913 	设置                	com.android.settings               	❌
30500 	小爱同学            	com.miui.voiceassist               	❌
32163 	相机                	com.android.camera                 	✅
Please enter the identifier that needs to be reversed
hooker(Identifier):
```
***

### 5. 输入调试应用包名回车
```shell
hooker(Identifier): cxm.shxpxx.sg
✅ App cxm.shxpxx.sg is already in the foreground
Creating working directory: cxm.shxpxx.sg
Generating frida shortcut command...
Generating built-in frida script...
pull /data/app/cxm.shxpxx.sg-L8zkrpFVICv0-hOrtmPPxA==/base.apk to cxm.shxpxx.sg/ShopeeSG_3.43.40.apk successful
Working directory create successful
just_trust_me.js                                 empty.js                                         keystore_dump.js
edit_text.js                                     activity_events.js                               find_boringssl_custom_verify_func.js
ssl_log.js                                       hook_register_natives.js                         click.js
get_device_info.js                               apk_shell_scanner.js                             dump_dex.js
object_store.js                                  hook_artmethod_register.js                       replace_dlsym_get_pthread_create.js
just_trust_me_for_ios.js                         trace_initproc.js                                android_ui.js
hook_jni_method_trace.js                         url.js                                           just_trust_me_okhttp_hook_finder_for_android.js
text_view.js                                     find_anit_frida_so.js
某皮 > 
***


### 6. 查看help信息 
```shell
某皮 > help
h, help                                      show this help message
a, activitys                                 show the activity stack
s, services                                  show the service stack
o, object [object_id]                        show object info by object_id
v, view [view_id]                            show view info by view_id of view
gs, generatescript [class_name:method_name]  specify the class name and method name to generate a frida hook java script file. For example: generatescript
                                             okhttp3.Request$Builder:addHeader
p, proxy [socks5_proxy_server]               set up a socks5 proxy for this app. For example: proxy socks5://192.168.0.100:9998
up, unproxy                                  remove socks5 proxy for this app
trust, justtrustme                           quickly spawn just_trust_me.js script to kill all ssl pinning
ls                                           list all the frida scripts of the current app
attach [script_file_name]                    quickly execute a frida script, similar to executing the command "frida -U com.example.app -l xxx.js". For example: attach url.js
spawn [script_file_name]                     quickly spawn a frida script, similar to executing the command "frida -U -f -n com.example.app -l xxx.js". For example: spawn
                                             just_trust_me.js
restart                                      restart this app
pid                                          get pid of this app main process
uid                                          get pid of this app
exit                                         return to the previous level
某皮 > 
```
***


### 7. generatescript生成frida hook脚本
```shell
hooker(Identifier): cxm.shxpxx.sg
✅ App cxm.shxpxx.sg is already in the foreground
Creating working directory: cxm.shxpxx.sg
Generating frida shortcut command...
Generating built-in frida script...
pull /data/app/cxm.shxpxx.sg-L8zkrpFVICv0-hOrtmPPxA==/base.apk to cxm.shxpxx.sg/ShopeeSG_3.43.40.apk successful
Working directory create successful
just_trust_me.js                                 empty.js                                         keystore_dump.js
edit_text.js                                     activity_events.js                               find_boringssl_custom_verify_func.js
ssl_log.js                                       hook_register_natives.js                         click.js
get_device_info.js                               apk_shell_scanner.js                             dump_dex.js
object_store.js                                  hook_artmethod_register.js                       replace_dlsym_get_pthread_create.js
just_trust_me_for_ios.js                         trace_initproc.js                                android_ui.js
hook_jni_method_trace.js                         url.js                                           just_trust_me_okhttp_hook_finder_for_android.js
text_view.js                                     find_anit_frida_so.js
某皮 > gs okhttp3.Request$Builder:addHeader(String, String)
Generating frida script, please wait for a few seconds
frida hook script: okhttp3.Request.Builder.addHeader.js
某皮 > 
```
***

### 8. 查看当前所有frida脚本
```shell
某皮 > ls
just_trust_me.js                                 empty.js                                         keystore_dump.js
okhttp3.Request.Builder.addHeader.js             edit_text.js                                     activity_events.js
find_boringssl_custom_verify_func.js             ssl_log.js                                       hook_register_natives.js
click.js                                         get_device_info.js                               apk_shell_scanner.js
dump_dex.js                                      object_store.js                                  hook_artmethod_register.js
replace_dlsym_get_pthread_create.js              just_trust_me_for_ios.js                         trace_initproc.js
android_ui.js                                    hook_jni_method_trace.js                         url.js
just_trust_me_okhttp_hook_finder_for_android.js  text_view.js                                     find_anit_frida_so.js
某皮 >
```
***

### 7. 用attach的方式执行指定frida脚本
```shell
某信拍 > attach url.js
------------startFlag:0755liv1,objectHash:-915348569,thread(id:810,name:Wmda.EventUploadThread),timestamp:1747836814835---------------
url:https://apiwmxx.xxx.com.cn/report/c?api_v=3&sdk_v=1.7.0.0&timestamp=1747836814832&appid=17591177894321&p=2&uuid=248056262e0030b7bb56c0f9237f846d
public java.net.URL(String)
	at java.net.URL.<init>(Native Method)
	at com.wxbx.wmda.e.b.a(SourceFile:5)
	at com.wxbx.wmda.e.b.a(SourceFile:1)
	at com.wxbx.wmda.h.a.a(SourceFile:162)
	at com.wxbx.wmda.h.a.b(SourceFile:19)
	at com.wxbx.wmda.h.a.a(SourceFile:2)
	at com.wxbx.wmda.h.a$b.handleMessage(SourceFile:3)
	at android.os.Handler.dispatchMessage(Handler.java:106)
	at android.os.Looper.loop(Looper.java:201)
	at android.os.HandlerThread.run(HandlerThread.java:65)
------------endFlag:0755liv1,usedtime:1---------------

------------startFlag:1ps6go99,objectHash:-237375819,thread(id:810,name:Wmda.EventUploadThread),timestamp:1747836815192---------------
url:https://apiwmxx.xxx.com.cn/report/c?api_v=3&sdk_v=1.7.0.0&timestamp=1747836815188&appid=17591177894321&p=2&uuid=248056262e0030b7bb56c0f9237f846d
public java.net.URL(String)
	at java.net.URL.<init>(Native Method)
	at com.android.okhttp.HttpUrl.url(HttpUrl.java:327)
	at com.android.okhttp.Request.url(Request.java:53)
	at com.android.okhttp.Request$Builder.build(Native Method)
	at com.android.okhttp.internal.huc.HttpURLConnectionImpl.newHttpEngine(HttpURLConnectionImpl.java:377)
	at com.android.okhttp.internal.huc.HttpURLConnectionImpl.initHttpEngine(HttpURLConnectionImpl.java:332)
	at com.android.okhttp.internal.huc.HttpURLConnectionImpl.connect(HttpURLConnectionImpl.java:124)
	at com.android.okhttp.internal.huc.HttpURLConnectionImpl.getOutputStream(HttpURLConnectionImpl.java:258)
	at com.android.okhttp.internal.huc.DelegatingHttpsURLConnection.getOutputStream(DelegatingHttpsURLConnection.java:218)
	at com.android.okhttp.internal.huc.HttpsURLConnectionImpl.getOutputStream(HttpsURLConnectionImpl.java:26)
	at com.wxbx.wmda.e.b.a(SourceFile:14)
	at com.wxbx.wmda.e.b.a(SourceFile:1)
	at com.wxbx.wmda.h.a.a(SourceFile:162)
	at com.wxbx.wmda.h.a.b(SourceFile:19)
	at com.wxbx.wmda.h.a.a(SourceFile:2)
	at com.wxbx.wmda.h.a$b.handleMessage(SourceFile:3)
	at android.os.Handler.dispatchMessage(Handler.java:106)
	at android.os.Looper.loop(Looper.java:201)
	at android.os.HandlerThread.run(HandlerThread.java:65)
------------endFlag:1ps6go99,usedtime:0---------------
// 这里省略无数日志.............
------------startFlag:i7osxvjl,objectHash:134280600,thread(id:810,name:Wmda.EventUploadThread),timestamp:1747836815193---------------
url:https://apiwmxx.xxx.com.cn/report/c?api_v=3&sdk_v=1.7.0.0&timestamp=1747836815188&appid=17591177894321&p=2&uuid=248056262e0030b7bb56c0f9237f846d
com.android.okhttp.Request.Builder.build()
	at com.android.okhttp.Request$Builder.build(Native Method)
	at com.android.okhttp.internal.huc.HttpURLConnectionImpl.newHttpEngine(HttpURLConnectionImpl.java:377)
	at com.android.okhttp.internal.huc.HttpURLConnectionImpl.initHttpEngine(HttpURLConnectionImpl.java:332)
	at com.android.okhttp.internal.huc.HttpURLConnectionImpl.connect(HttpURLConnectionImpl.java:124)
	at com.android.okhttp.internal.huc.HttpURLConnectionImpl.getOutputStream(HttpURLConnectionImpl.java:258)
	at com.android.okhttp.internal.huc.DelegatingHttpsURLConnection.getOutputStream(DelegatingHttpsURLConnection.java:218)
	at com.android.okhttp.internal.huc.HttpsURLConnectionImpl.getOutputStream(HttpsURLConnectionImpl.java:26)
	at com.wxbx.wmda.e.b.a(SourceFile:14)
	at com.wxbx.wmda.e.b.a(SourceFile:1)
	at com.wxbx.wmda.h.a.a(SourceFile:162)
	at com.wxbx.wmda.h.a.b(SourceFile:19)
	at com.wxbx.wmda.h.a.a(SourceFile:2)
	at com.wxbx.wmda.h.a$b.handleMessage(SourceFile:3)
	at android.os.Handler.dispatchMessage(Handler.java:106)
	at android.os.Looper.loop(Looper.java:201)
	at android.os.HandlerThread.run(HandlerThread.java:65)
------------endFlag:i7osxvjl,usedtime:1---------------
// 这里省略无数日志.............
```
***

### 8. 为app设置一个socks5代理
```shell
某音 > proxy socks5://10.112.99.11:9998
proxy socks5://10.112.99.11:9998 OK
某音 > 
```
***


### 9. 执行justtrustme kill掉所有ssl验证（包括boringgssl）

```shell
某音 > justtrustme
Package name: com.ss.xxxx.xxx.aweme
android.security.net.config.NetworkSecurityTrustManager.checkPins('java.util.List') was hooked!
android.security.net.config.NetworkSecurityTrustManager.checkPins('java.util.List') was hooked!
android.security.net.config.NetworkSecurityTrustManager.checkPins('java.util.List') was hooked!
android.security.net.config.NetworkSecurityTrustManager.checkPins('java.util.List') was hooked!
javax.net.ssl.TrustManagerFactory.getTrustManagers() was hooked!
javax.net.ssl.SSLContext.init('[Ljavax.net.ssl.KeyManager;', '[Ljavax.net.ssl.TrustManager;', 'java.security.SecureRandom') was hooked!
javax.net.ssl.TrustManagerFactory.getTrustManagers() was hooked!
javax.net.ssl.SSLContext.init('[Ljavax.net.ssl.KeyManager;', '[Ljavax.net.ssl.TrustManager;', 'java.security.SecureRandom') was hooked!
javax.net.ssl.TrustManagerFactory.getTrustManagers() was hooked!
javax.net.ssl.SSLContext.init('[Ljavax.net.ssl.KeyManager;', '[Ljavax.net.ssl.TrustManager;', 'java.security.SecureRandom') was hooked!
javax.net.ssl.SSLContext.init('[Ljavax.net.ssl.KeyManager;', '[Ljavax.net.ssl.TrustManager;', 'java.security.SecureRandom') was hooked!
static void com.android.org.conscrypt.Platform.checkServerTrusted(javax.net.ssl.X509TrustManager,java.security.cert.X509Certificate[],java.lang.String,com.android.org.conscrypt.AbstractConscryptSocket) throws java.security.cert.CertificateException was hooked!
static void com.android.org.conscrypt.Platform.checkServerTrusted(javax.net.ssl.X509TrustManager,java.security.cert.X509Certificate[],java.lang.String,com.android.org.conscrypt.AbstractConscryptSocket) throws java.security.cert.CertificateException was hooked!
static void com.android.org.conscrypt.Platform.checkServerTrusted(javax.net.ssl.X509TrustManager,java.security.cert.X509Certificate[],java.lang.String,com.android.org.conscrypt.AbstractConscryptSocket) throws java.security.cert.CertificateException was hooked!
static void com.android.org.conscrypt.Platform.checkServerTrusted(javax.net.ssl.X509TrustManager,java.security.cert.X509Certificate[],java.lang.String,com.android.org.conscrypt.AbstractConscryptSocket) throws java.security.cert.CertificateException was hooked!
okhttp3.internal.tls.OkHostnameVerifier.verify('java.lang.String', 'javax.net.ssl.SSLSession') was hooked!
okhttp3.CertificatePinner.check('java.lang.String', 'java.util.List') was hooked!
static void com.android.org.conscrypt.Platform.checkServerTrusted(javax.net.ssl.X509TrustManager,java.security.cert.X509Certificate[],java.lang.String,com.android.org.conscrypt.AbstractConscryptSocket) throws java.security.cert.CertificateException was hooked!
static void com.android.org.conscrypt.Platform.checkServerTrusted(javax.net.ssl.X509TrustManager,java.security.cert.X509Certificate[],java.lang.String,com.android.org.conscrypt.AbstractConscryptSocket) throws java.security.cert.CertificateException was hooked!
okhttp3.internal.tls.OkHostnameVerifier.verify('java.lang.String', 'javax.net.ssl.SSLSession') was hooked!
okhttp3.CertificatePinner.check('java.lang.String', 'java.util.List') was hooked!
okhttp3.internal.tls.OkHostnameVerifier.verify('java.lang.String', 'javax.net.ssl.SSLSession') was hooked!
okhttp3.internal.tls.OkHostnameVerifier.verify('java.lang.String', 'javax.net.ssl.SSLSession') was hooked!
okhttp3.internal.tls.OkHostnameVerifier.verify('java.lang.String', 'javax.net.ssl.SSLSession') was hooked!
okhttp3.CertificatePinner.check('java.lang.String', 'java.util.List') was hooked!
okhttp3.CertificatePinner.check('java.lang.String', 'java.util.List') was hooked!
okhttp3.CertificatePinner.check('java.lang.String', 'java.util.List') was hooked!
static void com.android.org.conscrypt.Platform.checkServerTrusted(javax.net.ssl.X509TrustManager,java.security.cert.X509Certificate[],java.lang.String,com.android.org.conscrypt.AbstractConscryptSocket) throws java.security.cert.CertificateException was hooked!
okhttp3.internal.tls.OkHostnameVerifier.verify('java.lang.String', 'javax.net.ssl.SSLSession') was hooked!
okhttp3.CertificatePinner.check('java.lang.String', 'java.util.List') was hooked!
okhttp3.CertificatePinner.check('java.lang.String', 'java.util.List') was hooked!
okhttp3.CertificatePinner.check('java.lang.String', 'java.util.List') was hooked!
// 这里省略无数日志.............
```
***


### 10. 取消代理设置
```shell
某音 > unproxy
unproxy OK
某音 > 
```
***

### 11. 用spawn的方式执行指定frida脚本
```shell
某信拍 > spawn just_trust_me.js
Package name: com.xxx.buyxxphone
javax.net.ssl.SSLContext.init('[Ljavax.net.ssl.KeyManager;', '[Ljavax.net.ssl.TrustManager;', 'java.security.SecureRandom') was hooked!
javax.net.ssl.TrustManagerFactory.getTrustManagers() was hooked!
javax.net.ssl.SSLContext.init('[Ljavax.net.ssl.KeyManager;', '[Ljavax.net.ssl.TrustManager;', 'java.security.SecureRandom') was hooked!
// 这里省略无数日志.............
```
***

### 12. 主动重启app 

```shell
某信拍 > restart
restarts com.xxx.buyxxphone
```
***


### 13. 获取app uid 和 pid
```shell
某信拍 > uid
10189
某信拍 > pid
3509
```
***

