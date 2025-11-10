免责声明
本项目的所有内容仅供学习与技术交流使用，旨在帮助开发者理解移动应用的结构和工作原理。

本项目不包含任何针对特定应用的破解操作或侵权内容。
针对某些app存在的简单解包技术内容在各大技术论坛网站均大量存在，并无对这些app造成实际损害
本项目无意协助任何非法用途，包括但不限于绕过版权保护、修改应用功能或获取未经授权的数据。
请确保在使用本项目工具时遵守相关法律法规，并仅用于个人学习或研究目的。

<p>简体中文 | <a href="README_EN.md">English</a></p>

# 欢迎使用hooker逆向工作台
![GitHub stars](https://img.shields.io/github/stars/CreditTone/hooker?style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/CreditTone/hooker?style=flat-square)
![GitHub code size](https://img.shields.io/github/languages/code-size/CreditTone/hooker?style=flat-square)
![Python](https://img.shields.io/badge/python-3.8.8-blue?style=flat-square)
![frida](https://img.shields.io/badge/frida-16.7.19-blue?style=flat-square)

hooker是一个基于frida实现的逆向工具包。旨在为安卓逆向开发人员提供一个舒适的命令行界面和一些常用的通杀脚本、自动化生成hook脚本、内存漫游探测activity和service、frida版JustTrustMe、boringssl unpinning全网app通杀



为什么你需要hooker？
=================
* [1. frida版JustTrustMe，通杀全网APP，且作者一直在持续维护升级](#11-frida版JustTrustMe包括boringgssl)
* [2. 自动化生成frida脚本，1秒钟生成一个脚本，脚本备注详细可扩展性强](#7-自动化生成frida脚本)
* [3. 快捷设置socks5代理，无需额外安装socksdroid等三方app实现无感知代理](#10-快捷设置socks5无感代理)
* [4. 整个使用过程非常舒适的命令行提示，让你享受逆向的过程](#7-自动化生成frida脚本)

<img src="https://raw.githubusercontent.com/CreditTone/img_resources/main/gs_show.jpg" width="1000">

### 招聘安卓逆向工程师（移动安全 / 反作弊 / 应用保护）

我们正在寻找一位**技术扎实、思路缜密且具有强烈合规意识**的安卓逆向工程师，加入移动安全 / 反作弊 / 应用保护方向的技术团队。你将参与 APK 的静态与动态分析、加固/脱壳/反调试检测识别，以及对抗性防护措施的研究与落地。

### 岗位职责
- 使用 **Frida、Xposed** 等工具进行动态钩子与调试，复现漏洞并编写 PoC（仅限授权环境）；  
- 分析并绕过或检测常见的**加固、脱壳、反调试与 root 检测**机制；  
- 对 **Java 层与 so（native）层** 的加密算法进行逆向与分析；  
- 利用抓包工具（**Charles、Fiddler** 等）分析应用网络交互与协议异常；  
- 编写工具脚本、检测规则与自动化流水线，提高样本分析效率；  
- 研究并落地对抗性防护措施，提升产品对抗逆向/作弊的能力；  
- 编写清晰的分析报告与复现步骤，配合产品/研发做加固或修复建议。

### 任职要求（必须包含 — 已整合用户提供内容）
- 熟练掌握 **Java、Kotlin、C++** 编程与源码分析能力；  
- 具备 **ARM / ARM64 汇编** 基础，能在反汇编/二进制层面分析程序行为；  
- 熟练使用 **Frida、Xposed** 等进行动态分析与调试；  
- 熟悉抓包与流量分析工具，能熟练使用 **Charles / Fiddler** 进行接口验证与协议逆向；  
- 熟练运用逆向与分析工具：**IDA、jadx、010 Editor（或同类工具）**进行静态分析与数据恢复；  
- 熟悉并能识别常见防护与检测机制：**反调试、root 检测、加固/脱壳、混淆/解混淆**；  
- 熟练掌握常见加密算法并具备 **Java 层与 so 层实现与逆向分析** 能力；  
- 能编写脚本（**Python / Shell / 其他**）用于自动化分析与工具开发；  
- 具有强烈的合规意识，能够在**授权范围内**进行安全测试与逆向工作；  
- 具备良好沟通能力，能与产品、开发、法务团队协作推动问题落地。

### 加分项
- 有 **Google 产品（例如 Google Messages）** 的逆向经验；  
- 有移动恶意样本分析、反作弊、或安全产品化经验；  
- 参与过端到端加密相关解析或有相关实践经验；  
- 有开源安全工具、规则或自动化流水线贡献经验。

### 我们提供
- 有竞争力的薪酬与年度绩效；  
- 弹性办公、远程支持与学习预算；  
- 专业成长路径（安全会议、训练营、技术分享）；  
- 法律合规保障与清晰的授权流程。



联系方式：VX Bitcoinholdon 或 Tige340321 请备注来自Hooker

---

目录
=================

* [快速开始](#快速开始)
    * [1. git clone项目](#1-git-clone项目)
    * [2. 安装依赖](#2-安装python3依赖)
    * [3. root手机usb连接](#3-root手机usb连接PC)
    * [4. 启动hooker](#4-启动hooker)
    * [5. 输入调试应用包名](#5-输入调试应用包名)
    * [6. 查看help信息](#6-查看help信息)
    * [7. 自动化生成frida脚本](#7-自动化生成frida脚本)
    * [8. 列出所有frida脚本](#8-列出应用目录所有frida脚本)
    * [9. attach执行frida脚本](#9-attach执行frida脚本)
    * [10. 快捷设置socks5无感代理](#10-快捷设置socks5无感代理)
    * [11. frida版JustTrustMe](#11-frida版JustTrustMe包括boringgssl)
    * [12. spawn执行frida脚本](#12-spawn执行frida脚本)
    * [13. 取消代理设置](#13-取消代理设置)
    * [14. 重启app](#14-重启app)
    * [15. 获取uid和pid](#15-获取uid和pid)
    * [16. pull文件](#16-pull文件)
    * [17. r0capture](#16-r0capture)
    * [18. hooker自动升级](#17-upgrade)
* [应用工作目录脚本](#应用工作目录脚本)
    * [url.js](#urljs)
    * [just_trust_me.js](#just_trust_mejs)
    * [activity_events.js](#activity_eventsjs)
    * [click.js](#clickjs)
    * [android_ui.js](#android_uijs)
    * [keystore_dump.js](#keystore_dumpjs)
    * [edit_text.js](#edit_textjs)
    * [hook_register_natives.js](#hook_register_nativesjs)
    * [text_view.js](#text_viewjs)
    * [ssl_log.js](#ssllogjs)
    * [just_trust_me_for_ios.js](#just_trust_me_for_iosjs)
    * [dump_dex.js](#dump_dexjs)
    * [trace_init_proc.js](#trace_init_procjs)
    * [hook_artmethod_register.js](#hook_artmethod_registerjs)
    * [find_anit_frida_so.js](#find_anit_frida_sojs)
    * [hook_jni_method_trace.js](#hook_jni_method_tracejs)
    * [replace_dlsym_get_pthread_create.js](#replace_dlsym_get_pthread_createjs)
    * [find_boringssl_custom_verify_func.js](#find_boringssl_custom_verify_funcjs)
    * [get_device_info.js](#get_device_infojs)
    * [apk_shell_scanner.js](#apk_shell_scannerjs)
    * [bypass_frida_svc_detect.js](#bypass_frida_svc_detectjs)
    * [bypass_root_detect.js](#bypass_root_detectjs)
    * [bypass_vpn_detect.js](#bypass_vpn_detectjs)
    * [hook_encryption_algo.js](#hook_encryption_algojs)
    * [hook_encryption_algo2.js](#hook_encryption_algo2js)
    * [webview_enable_debug.js](#webview_enable_debugjs)
* [Windows安装WSL](#windows安装wsl)
	  * [1. 安装wsl ubuntn24.04](#1-安装wsl-ubuntn2404)
	  * [2. 进入wsl，配置代理](#2-进入wsl配置代理)
	  * [3. 安装python3.8和frida](#3-安装python38和frida)
* [自定义frida-server](#自定义frida-server)
* [hooker命令行快捷键](#hooker命令行快捷键)

    
    
手机保证root，无需任何手动启动frida-server等一切配置，hooker会帮你搞定一切。x86架构的模拟器不兼容

# Mac/Linux配置hooker运行环境

Windows请先完成[WSL安装](#windows%E5%AE%89%E8%A3%85wsl)，然后跳回到这里

### 1. git clone项目
```shell
stephen@Mac:~$ git clone https://github.com/CreditTone/hooker.git
stephen@Mac:~$ cd hooker
```

### 2. 安装python3依赖
```shell
stephen@Mac:~/hooker$ pip3 install -r requirements.txt
```


### 3. root手机usb连接PC
```shell
stephen@Mac:~/hooker$ adb devices
List of devices attached
FA77C0301476	device
```


### 4. 启动hooker

这里注意，不要用绝对路径去执行，一定要cd到hooker目录下执行python3 hooker.py

hooker启动后将收集所有可调试app的信息，字段含义如下
- PID：当前app的主进程id，如果app没有启动则为0
- APP：app的名称
- IDENTIFIER：app的包名
- EXIST_REVERSE_DIRECTORY：如果app曾经被调试过就是✅，从没被调试过就是❌

```shell
stephen@Mac:~/hooker$ python3 hooker.py
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


### 5. 输入调试应用包名

- 输入调试应用包名回车后，如果是第一次调试应用，hooker将创建应用目录，应用目录名称为应用的Identifier，用于存放所有js脚本和快捷命令。

- hooker将帮你检测当前app是否启动且在手机前台，如不在启动帮你启动，如不在前台帮你切到前台

- frida通杀脚本可以在hooker交互式命令行下用attach/spawn执行，也可以手动cd到应用目录用快捷命令或原生的frida命令执行。

- 你可以修改应用工作目录下任何脚本


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
```
![hooker_enter_debug.gif](https://raw.githubusercontent.com/CreditTone/img_resources/main/hooker_enter_debug.gif)
***




### 6. 查看help信息

在使用hooker过程中，如不记得命令，可随时调出help查看操作手册。

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
![hooker_help.gif](https://raw.githubusercontent.com/CreditTone/img_resources/main/hooker_help.gif)
***


### 7. 自动化生成frida脚本
自动化生成脚本是hooker的杀器。虽然现在AI大模型也可以写，但是我们离内存近，更快，也不需要联网。生成的脚本自带打印堆栈等信息，和一些你可能需要的扩展方法。
另外在生成脚本的过程中，命令行类名、方法名提示也可以当作搜索使用，能通过关键词快速搜索定位类方法。hooker搜索类比jadx快很多，不信就试试......

![gs_show.jpg](https://raw.githubusercontent.com/CreditTone/img_resources/main/gs_show.jpg)
- Command语法：gs, generatescript [class_name:method_name]


- 7.1 生成指定方法的frida hook脚本：
gs okhttp3.Request$Builder:addHeader，参数部分(String, String)不是必须写的

```shell
某信拍 > gs okhttp3.Request$Builder:addHeader(String, String)
Generating frida script, please wait for a few seconds
frida hook script: okhttp3.Request.Builder.addHeader.js
某信拍 > 
```

```js
//cat okhttp3.Request.Builder.addHeader.js
Java.perform(function() {
    var okhttp3_Request_Builder_clz = Java.use('okhttp3.Request$Builder');
    var okhttp3_Request_Builder_clz_method_addHeader_2grl = okhttp3_Request_Builder_clz.addHeader.overload('java.lang.String', 'java.lang.String');
    okhttp3_Request_Builder_clz_method_addHeader_2grl.implementation = function(string, string_x2) {
        var executor = this.hashCode();
        var beatText = 'public okhttp3.Request$Builder okhttp3.Request$Builder.addHeader(java.lang.String,java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        var ret = okhttp3_Request_Builder_clz_method_addHeader_2grl.call(this, string, string_x2);
        console.log("header name:" + string + " header value:" + string_x2);
        printBeat(beat);
        return ret;
    };
});
```
***



- 7.2 生成指定类的所有成员方法的frida hook脚本：
gs okhttp3.Request$Builder

```shell
某信拍 > generatescript okhttp3.Request$Builder
Generating frida script, please wait for a few seconds
frida hook script: okhttp3.Request.Builder.allfunc.js
```
***

```js
//cat okhttp3.Request.Builder.allfunc.js
//okhttp3.Request$Builder
Java.perform(function() {
    var okhttp3_Request_Builder_clz = Java.use('okhttp3.Request$Builder');
    var okhttp3_Request_Builder_clz_method_header_ng3n = okhttp3_Request_Builder_clz.header.overload('java.lang.String', 'java.lang.String');
    okhttp3_Request_Builder_clz_method_header_ng3n.implementation = function(string, string_x2) {
        var executor = this.hashCode();
        var beatText = 'public okhttp3.Request$Builder okhttp3.Request$Builder.header(java.lang.String,java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        var ret = okhttp3_Request_Builder_clz_method_header_ng3n.call(this, string, string_x2);
        printBeat(beat);
        return ret;
    };
    var okhttp3_Request_Builder_clz_method_cacheControl_q8q5 = okhttp3_Request_Builder_clz.cacheControl.overload('okhttp3.CacheControl');
    okhttp3_Request_Builder_clz_method_cacheControl_q8q5.implementation = function(cacheControl) {
        var executor = this.hashCode();
        var beatText = 'public okhttp3.Request$Builder okhttp3.Request$Builder.cacheControl(okhttp3.CacheControl)';
        var beat = newMethodBeat(beatText, executor);
        var ret = okhttp3_Request_Builder_clz_method_cacheControl_q8q5.call(this, cacheControl);
        printBeat(beat);
        return ret;
    };
    var okhttp3_Request_Builder_clz_method_method_bjk9 = okhttp3_Request_Builder_clz.method.overload('java.lang.String', 'okhttp3.RequestBody');
    okhttp3_Request_Builder_clz_method_method_bjk9.implementation = function(string, requestBody) {
        var executor = this.hashCode();
        var beatText = 'public okhttp3.Request$Builder okhttp3.Request$Builder.method(java.lang.String,okhttp3.RequestBody)';
        var beat = newMethodBeat(beatText, executor);
        var ret = okhttp3_Request_Builder_clz_method_method_bjk9.call(this, string, requestBody);
        printBeat(beat);
        return ret;
    };
    var okhttp3_Request_Builder_clz_method_head_a5nq = okhttp3_Request_Builder_clz.head.overload();
    okhttp3_Request_Builder_clz_method_head_a5nq.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public okhttp3.Request$Builder okhttp3.Request$Builder.head()';
        var beat = newMethodBeat(beatText, executor);
        var ret = okhttp3_Request_Builder_clz_method_head_a5nq.call(this);
        printBeat(beat);
        return ret;
    };
    var okhttp3_Request_Builder_clz_method_headers_to5i = okhttp3_Request_Builder_clz.headers.overload('okhttp3.Headers');
    okhttp3_Request_Builder_clz_method_headers_to5i.implementation = function(headers) {
        var executor = this.hashCode();
        var beatText = 'public okhttp3.Request$Builder okhttp3.Request$Builder.headers(okhttp3.Headers)';
        var beat = newMethodBeat(beatText, executor);
        var ret = okhttp3_Request_Builder_clz_method_headers_to5i.call(this, headers);
        printBeat(beat);
        return ret;
    };
    var okhttp3_Request_Builder_clz_method_post_heaq = okhttp3_Request_Builder_clz.post.overload('okhttp3.RequestBody');
    okhttp3_Request_Builder_clz_method_post_heaq.implementation = function(requestBody) {
        var executor = this.hashCode();
        var beatText = 'public okhttp3.Request$Builder okhttp3.Request$Builder.post(okhttp3.RequestBody)';
        var beat = newMethodBeat(beatText, executor);
        var ret = okhttp3_Request_Builder_clz_method_post_heaq.call(this, requestBody);
        printBeat(beat);
        return ret;
    };
    var okhttp3_Request_Builder_clz_method_build_rmqx = okhttp3_Request_Builder_clz.build.overload();
    okhttp3_Request_Builder_clz_method_build_rmqx.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public okhttp3.Request okhttp3.Request$Builder.build()';
        var beat = newMethodBeat(beatText, executor);
        var ret = okhttp3_Request_Builder_clz_method_build_rmqx.call(this);
        printBeat(beat);
        return ret;
    };
    var okhttp3_Request_Builder_clz_method_patch_hp9u = okhttp3_Request_Builder_clz.patch.overload('okhttp3.RequestBody');
    okhttp3_Request_Builder_clz_method_patch_hp9u.implementation = function(requestBody) {
        var executor = this.hashCode();
        var beatText = 'public okhttp3.Request$Builder okhttp3.Request$Builder.patch(okhttp3.RequestBody)';
        var beat = newMethodBeat(beatText, executor);
        var ret = okhttp3_Request_Builder_clz_method_patch_hp9u.call(this, requestBody);
        printBeat(beat);
        return ret;
    };
    var okhttp3_Request_Builder_clz_method_url_0owi = okhttp3_Request_Builder_clz.url.overload('java.lang.String');
    okhttp3_Request_Builder_clz_method_url_0owi.implementation = function(string) {
        var executor = this.hashCode();
        var beatText = 'public okhttp3.Request$Builder okhttp3.Request$Builder.url(java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        var ret = okhttp3_Request_Builder_clz_method_url_0owi.call(this, string);
        printBeat(beat);
        return ret;
    };
    var okhttp3_Request_Builder_clz_method_removeHeader_uzb9 = okhttp3_Request_Builder_clz.removeHeader.overload('java.lang.String');
    okhttp3_Request_Builder_clz_method_removeHeader_uzb9.implementation = function(string) {
        var executor = this.hashCode();
        var beatText = 'public okhttp3.Request$Builder okhttp3.Request$Builder.removeHeader(java.lang.String)';
        var beat = newMethodBeat(beatText, executor);
        var ret = okhttp3_Request_Builder_clz_method_removeHeader_uzb9.call(this, string);
        printBeat(beat);
        return ret;
    };
    var okhttp3_Request_Builder_clz_method_url_ykbd = okhttp3_Request_Builder_clz.url.overload('java.net.URL');
    okhttp3_Request_Builder_clz_method_url_ykbd.implementation = function(url) {
        var executor = this.hashCode();
        var beatText = 'public okhttp3.Request$Builder okhttp3.Request$Builder.url(java.net.URL)';
        var beat = newMethodBeat(beatText, executor);
        var ret = okhttp3_Request_Builder_clz_method_url_ykbd.call(this, url);
        printBeat(beat);
        return ret;
    };
    var okhttp3_Request_Builder_clz_method_delete_dqyl = okhttp3_Request_Builder_clz.delete.overload();
    okhttp3_Request_Builder_clz_method_delete_dqyl.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public okhttp3.Request$Builder okhttp3.Request$Builder.delete()';
        var beat = newMethodBeat(beatText, executor);
        var ret = okhttp3_Request_Builder_clz_method_delete_dqyl.call(this);
        printBeat(beat);
        return ret;
    };
    //.......省略N行代码
```
***



- 7.3 生成指定类的构造方法的frida hook脚本：
gs okhttp3.Request$Builder:_ 或者gs okhttp3.Request$Builder:\<init\>

```shell
某信拍 > gs okhttp3.Request$Builder:<init>()
Generating frida script, please wait for a few seconds
frida hook script: okhttp3.Request.Builder._init.js
```

```js
//cat okhttp3.Request.Builder._init.js
//okhttp3.Request$Builder:<init>()
Java.perform(function() {
    var okhttp3_Request_Builder_clz = Java.use('okhttp3.Request$Builder');
    var okhttp3_Request_Builder_clz_init_uw3i = okhttp3_Request_Builder_clz.$init.overload();
    okhttp3_Request_Builder_clz_init_uw3i.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public okhttp3.Request$Builder()';
        var beat = newMethodBeat(beatText, executor);
        var returnObj = okhttp3_Request_Builder_clz_init_uw3i.call(this);
        printBeat(beat);
        return returnObj;
    };
    var okhttp3_Request_Builder_clz_init_e58t = okhttp3_Request_Builder_clz.$init.overload('okhttp3.Request');
    okhttp3_Request_Builder_clz_init_e58t.implementation = function(v0) {
        var executor = this.hashCode();
        var beatText = 'okhttp3.Request$Builder(okhttp3.Request)';
        var beat = newMethodBeat(beatText, executor);
        var returnObj = okhttp3_Request_Builder_clz_init_e58t.call(this, v0);
        printBeat(beat);
        return returnObj;
    };
});
```
***




### 8. 列出应用目录所有frida脚本

- 查看应用目录下所有的脚本，这里有hooker给你生成的通杀脚本，也有您生成的指定hook脚本，您可以修改定制。

- 如果您有自定义的脚本放到应用目录下，ls命令可以将脚本名称刷入命令行提示缓存

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

### 9. attach执行frida脚本

在hooker下执行frida脚本，您只需要输入attach【空格】脚本名称会自动弹出提示。上下选择需要的脚本按tab键即可自动输入全名称。
这是hooker在追求极致的工匠精神，帮助您从开波音737到开空客320的跳跃。

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

### 10. 快捷设置socks5无感代理

通过iptables链路层转发包实现一键设置代理，优势是APP完全无感知被代理。推荐使用charles的socks5性能更高。

设置代理后必须主动去[关闭代理](#13-取消代理设置)，代理不会自动取消


```shell
某音 > proxy socks5://10.112.99.11:9998
proxy socks5://10.112.99.11:9998 OK
某音 > 
```
***


### 11. frida版JustTrustMe（包括boringgssl）

关掉SSL证书校验

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


### 12. spawn执行frida脚本
```shell
某信拍 > spawn just_trust_me.js
Package name: com.xxx.buyxxphone
javax.net.ssl.SSLContext.init('[Ljavax.net.ssl.KeyManager;', '[Ljavax.net.ssl.TrustManager;', 'java.security.SecureRandom') was hooked!
javax.net.ssl.TrustManagerFactory.getTrustManagers() was hooked!
javax.net.ssl.SSLContext.init('[Ljavax.net.ssl.KeyManager;', '[Ljavax.net.ssl.TrustManager;', 'java.security.SecureRandom') was hooked!
// 这里省略无数日志.............
```
***


### 13. 取消代理设置

一键取消代理

```shell
某音 > unproxy
unproxy OK
某音 > 
```
***



### 14. 重启app


```shell
某信拍 > restart
restarts com.xxx.buyxxphone
```
***


### 15. 获取uid和pid

```shell
某信拍 > uid
10189
某信拍 > pid
3509
```
***


### 16. pull文件

快捷拉取文件到本地应用工作目录

```shell
转某 > pull /data/app/com.xxx.zhuanmou-o1ZYFILxnOCIpvvqJQKrpQ==/lib/arm64/libmsaoaidsec.so
pull /data/app/com.xxx.zhuanmou-o1ZYFILxnOCIpvvqJQKrpQ==/lib/arm64/libmsaoaidsec.so to com.xxx.zhuanmou/libmsaoaidsec.so successful
转某 > pull /data/app/com.xxx.zhuanmou-o1ZYFILxnOCIpvvqJQKrpQ==/lib/arm64/libsignLib.so
pull /data/app/com.xxx.zhuanmou-o1ZYFILxnOCIpvvqJQKrpQ==/lib/arm64/libsignLib.so to com.xxx.zhuanmou/libsignLib.so successful
转某 > pull /data/app/com.xxx.zhuanmou-o1ZYFILxnOCIpvvqJQKrpQ==/lib/arm64/libweconvert.so
pull /data/app/com.xxx.zhuanmou-o1ZYFILxnOCIpvvqJQKrpQ==/lib/arm64/libweconvert.so to com.xxx.zhuanmou/libweconvert.so successful
```
***




### 17. r0capture
hooker集成了r0capture，抓包产生的pcap文件保存在{应用包名}/r0capture_ssl.pcap路径下，如酷安：com.coolapk.market/r0capture_ssl.pcap

```shell
JqgvBRe45o4QLyGguX+eVDoN0CPLTcPXqRVBhh13z2PTch2W7Hgv\/xlp4x2v\/QemWXrjWuifc2el1gzK1+8YPW+1NyTFCC8P10+zpCAPRgBwxpjKp4ecSQngU32yY2daIbaEwj0fvAg12VZNCdtI8jtpGtgds5xe61cihcBaYg\/CTvUIEylZqE6cbWsbuiBf7OuJLAnofXi3JtUaD+kJxFQ4fsZOTxhpZqANHIVv17GPcG4CoJEMws8UzawN3xPMqVYdzv+bpAnbDRhZy6LsVxS5S6yYtrawQdroJqVfsaLXlzgTBQe6RVPYqWG38QKJ1cuOGttk0ukigGIce3QAUcJl0c3fsi973ydYnSY60PBSKumqZAFh4VM0jk5tmRUtZlrqfQDVmfgIaocPQ=="}
2025-06-19 11:35:59.794 | INFO     | __main__:r0capture_on_message:939 - java.lang.Throwable
	at com.android.org.conscrypt.ConscryptFileDescriptorSocket$SSLOutputStream.write(Native Method)
	at com.android.okhttp.okio.Okio$1.write(Okio.java:76)
	at com.android.okhttp.okio.AsyncTimeout$1.write(AsyncTimeout.java:155)
	at com.android.okhttp.okio.RealBufferedSink.flush(RealBufferedSink.java:221)
	at com.android.okhttp.internal.http.Http1xStream.finishRequest(Http1xStream.java:161)
	at com.android.okhttp.internal.http.HttpEngine.readNetworkResponse(HttpEngine.java:735)
	at com.android.okhttp.internal.http.HttpEngine.readResponse(HttpEngine.java:609)
	at com.android.okhttp.internal.huc.HttpURLConnectionImpl.execute(HttpURLConnectionImpl.java:471)
	at com.android.okhttp.internal.huc.HttpURLConnectionImpl.getResponse(HttpURLConnectionImpl.java:407)
	at com.android.okhttp.internal.huc.HttpURLConnectionImpl.getInputStream(HttpURLConnectionImpl.java:244)
	at com.android.okhttp.internal.huc.DelegatingHttpsURLConnection.getInputStream(DelegatingHttpsURLConnection.java:210)
	at com.android.okhttp.internal.huc.HttpsURLConnectionImpl.getInputStream(HttpsURLConnectionImpl.java:26)
	at com.tencent.msdk.dns.core.rest.share.a.a(AbsHttpDns.java:23)
	at com.tencent.msdk.dns.core.k$a.run(LookupHelper.java:24)
	at com.tencent.msdk.dns.core.c$b.run(CountDownManager.java:3)
	at com.tencent.msdk.dns.core.c$a.run(CountDownManager.java:3)
	at com.tencent.msdk.dns.base.executor.DnsExecutors$a.run(DnsExecutors.java:38)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1167)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:641)
	at java.lang.Thread.run(Thread.java:764)

CTRL + C to stop >
Interrupting
flushing com.coolapk.market/r0capture_ssl.pcap successful
r0capture.js detach successful
Restarting 酷安 Please wait for a few seconds
```
***


### 18. upgrade

hooker更新频繁，平均周更约10次。upgrade帮助您随时同步最新代码和相关文件到本地。

```shell
MacBook-Pro-32G-2T:hooker stephen256$ python3 hooker.py upgrade
Upgrading hooker
Repository updated with 'git pull'.
Updating mobile-deploy/libext64.so
Updating mobile-deploy/libext.so
Updating mobile-deploy/libevent-2.1.so
Please restart hooker
```
***


# 应用目录通杀脚本

### url.js

该脚本会 hook 应用中 构造 URL 或 URI 对象的多个关键方法，用于打印或分析网络请求相关的信息（如目标 URL）

Hook 的目标方法
java.net.URI(String) 构造函数

java.net.URL(String) 构造函数

okhttp3.Request.Builder.build() 方法（常用于创建 HTTP 请求）

com.android.okhttp.Request.Builder.build()（系统自带 okhttp）

android.net.Uri.parse(String) 方法（处理 URI 的常用工具方法）

推荐命令：frida url.js

![](https://raw.githubusercontent.com/CreditTone/img_resources/main/url.jpg)
***

### just_trust_me.js
frida版本的just_trust_me，用于绕过 Android 系统中的证书校验逻辑，允许抓取 HTTPS 流量，适用于基于 OkHttp、HttpURLConnection 等网络库的应用。

支持boringssl unpinning，理论上支持全网所有app，除非像美团一样做了登录风控抓不了。

在hooker命令行模式封装了快捷命令justtrustme
这在上文 [执行justtrustme kill掉所有ssl验证](#11-执行justtrustme-kill掉所有ssl验证包括boringgssl)有介绍

亦可直接执行脚本 spawn just_trust_me.js
![](https://raw.githubusercontent.com/CreditTone/img_resources/main/just_trust_me.gif)
***

### activity_events.js
当你需要跟踪start某个Activity启动时可执行，获取startActivity的intent信息和调用堆栈。

推荐命令：frida activity_events.js

![](https://raw.githubusercontent.com/CreditTone/img_resources/main/activity_events.gif)
***

### click.js
用于监听 Android 应用中点击事件（`OnClickListener`），主要用于分析用户交互操作，获取被点击View的真实ViewClass

推荐命令：frida click.js

![](https://raw.githubusercontent.com/CreditTone/img_resources/main/click.gif)
***

### android_ui.js
封装一些操作原生Android UI的函数。如startActivity(activityName)、home()、back()、finishCurrentActivity()、clickByText(text) 等等，命令使用得用attach './attach android_ui.js' 原理是借助radar.dex作为代理操作Android原生View。

推荐命令：frida android_ui.js

![](https://raw.githubusercontent.com/CreditTone/img_resources/main/android_ui.gif)
***

### keystore_dump.js
在https双向认证的情况下，dump客户端证书为p12。存储位置:/data/user/0/{packagename}/client_keystore_{nowtime}.p12 证书密码: hooker。原理是hook java.security.KeyStore的getPrivateKey和getCertificate方法，因为客户端向服务发送证书必调这个方法。强烈建议keystore_dump.js用spawn模式启动，

推荐命令：spawn keystore_dump.js

![](https://raw.githubusercontent.com/CreditTone/img_resources/main/https_bothway_01.png)
![](https://raw.githubusercontent.com/CreditTone/img_resources/main/https_bothway_02.png)
![](https://raw.githubusercontent.com/CreditTone/img_resources/main/https_bothway_03.png)
![](https://raw.githubusercontent.com/CreditTone/img_resources/main/https_bothway_04.png)
***

### edit_text.js

用于跟踪获取 EditText 的 `getText()` 事件，并获取其真实 Class 类型。  
EditText 通常绑定搜索按钮或输入事件，是定位“搜索”接口实现代码的有效入口，辅助识别核心业务逻辑。

推荐命令：frida edit_text.js

![](https://raw.githubusercontent.com/CreditTone/img_resources/main/edit_text.png)
***

### hook_register_natives.js
用于拦截 Android JNI RegisterNatives 函数的 Frida 脚本，主要用于分析和修改原生方法(native methods)的注册过程

推荐命令：spawn hook_register_natives.js

![](https://raw.githubusercontent.com/CreditTone/img_resources/main/hook_RN.gif)
***

### text_view.js

用于跟踪 TextView 的 `setText()` 和 `getText()` 调用，并输出其真实 Class。  
常用于提取页面展示的明文数据，以及获取堆栈调用信息，从而追踪业务层的 model 构造逻辑和数据源。

推荐命令：spawn/attach text_view.js  
![](https://raw.githubusercontent.com/CreditTone/img_resources/main/text_view.png)

---


### activity_events.js

用于跟踪 Android Activity 生命周期（如 `onCreate`、`onResume`）的 Frida 脚本，帮助分析 Activity 初始化逻辑。

推荐命令：spawn/attach activity_events.js

---


### ssl_log.js

用于在 native 层跟踪 SSL 握手过程并记录 `CLIENT_RANDOM`，配合 tcpdump 抓包数据后可用于 TLS 明文还原分析。

推荐命令：spawn/attach ssl_log.js

---

### just_trust_me_for_ios.js

iOS 版的证书校验绕过脚本，配合抓包代理使用，适用于 SSL Pinning 场景。

推荐命令：spawn/attach just_trust_me_for_ios.js

---

### dump_dex.js

执行 spawn dump_dex.js 可直接脱壳，适用于多数简单壳场景。  
Android ART 使用 dex2oat 编译 DEX 为 native 指令，有些脱壳失败时建议手动清除 `/data/app/<package>-*/oat/arm64/`。

推荐命令：spawn dump_dex.js

---

### trace_init_proc.js

用于 trace `init_proc` 函数调用流程的脚本。  
需手动指定 `startAddr`、`endAddr` 和模块名 `somodule`，适合分析 native 启动流程。

推荐命令：spawn/attach trace_init_proc.js  
![trace_init_proc.png](https://raw.githubusercontent.com/CreditTone/img_resources/main/trace_init_proc.png)

---

### hook_artmethod_register.js

用于拦截 Android ART 虚拟机中 `ArtMethod` 的注册函数，适合深入分析虚拟机行为与 native 方法绑定。

推荐命令：spawn/attach hook_artmethod_register.js

---

### find_anit_frida_so.js

用于发现 app 中加载的可疑 anti-frida 动态库，识别顺序为：**谁最后加载、谁让 app 崩溃，谁就是反调试的嫌疑人**。

推荐命令：spawn/attach find_anit_frida_so.js  
![find_anti_frida_so.png](https://raw.githubusercontent.com/CreditTone/img_resources/main/find_anti_frida_so.png)

---

### hook_jni_method_trace.js

用于追踪 Native 层回调 Java 方法的行为，可观察 so 层与 Java 的交互，帮助分析 JNI 层调用栈。

推荐命令：spawn/attach hook_jni_method_trace.js

---

### replace_dlsym_get_pthread_create.js

专门对抗 `libmsaoaidsec.so` 中使用 `dlsym` 获取 `pthread_create` 的反调试方式。  
本脚本 hook `dlsym`，用于劫持线程创建行为，从而对抗动态加载的反调试代码。

推荐命令：spawn/attach replace_dlsym_get_pthread_create.js  
![replace_pthread_create.png](https://raw.githubusercontent.com/CreditTone/img_resources/main/replace_pthread_create.png)

---

### find_boringssl_custom_verify_func.js

用于查找 `boringssl` 中注册的自定义证书验证函数，通过 hook `SSL_CTX_set_custom_verify` 定位目标函数，并实现强制信任（返回 0）。

**使用建议：**  
执行前请清除目标 app（如某音）的缓存，以保证函数重新注册。

推荐命令：spawn find_boringssl_custom_verify_func.js  
![find_boringssl_custom_verify.png](https://raw.githubusercontent.com/CreditTone/img_resources/main/find_boringssl_custom_verify.png)  
![hook_verify.png](https://raw.githubusercontent.com/CreditTone/img_resources/main/hook_verify.png)  
![mouyin_capture_33.9.0.png](https://raw.githubusercontent.com/CreditTone/img_resources/main/mouyin_capture_33.9.0.png)

---

### get_device_info.js

用于全面获取设备指纹信息，包括：

- Android ID、IMEI、指纹、厂商、系统信息
- 安装的所有应用（含系统 app）
- 传感器信息（如名称、厂商、延迟）
- 系统状态（是否 root、运行时、内核信息等）

推荐命令：attach get_device_info.js  
![](https://raw.githubusercontent.com/CreditTone/img_resources/main/get_device_info_attach.png)

提供以下 4 个调用方法：

- `getBasicInfo()`：基础信息
- `getInstalledPackages()`：应用列表
- `getSensos()`：传感器信息
- `getSystemInfo()`：系统与运行环境  
  ![](https://raw.githubusercontent.com/CreditTone/img_resources/main/get_device_info_functions.png)

---

### apk_shell_scanner.js

动态识别 APK 加壳技术的脚本，支持多种主流壳，如娜迦、爱加密、360、梆梆、腾讯御、网易易盾等。

推荐命令：attach apk_shell_scanner.js

识别结果示例：
- This app is protected by {爱加密}
- This app is not protected or uses an unknown protection scheme

---

### bypass_frida_svc_detect.js

绕过 app 对 Frida Server 的检测逻辑，适用于反调试保护较强的目标应用。

推荐命令：spawn/attach bypass_frida_svc_detect.js

---

### bypass_root_detect.js

用于绕过 root 检测逻辑，使得 root 环境下也能正常运行 app。

推荐命令：spawn/attach bypass_root_detect.js

---

### bypass_vpn_detect.js

用于绕过 VPN 检测逻辑，避免 app 阻止使用代理、VPN 或抓包工具。

推荐命令：spawn/attach bypass_vpn_detect.js

---

### hook_encryption_algo.js

用于 hook 典型加密算法（如 AES、RSA、HMAC 等）的实现函数，分析加密参数、明文与密文数据。

推荐命令：spawn/attach hook_encryption_algo.js

---

### hook_encryption_algo2.js

拓展版本的加密算法 hook 脚本，适用于更复杂的加密场景或多路加密调用链。

推荐命令：spawn/attach hook_encryption_algo2.js

### webview_enable_debug.js

该脚本用于 Hook Android 应用中的 WebView 行为，特别是在 WebView 初始化和执行 JavaScript 时进行监控和调试。适用于分析 WebView 加载的页面、动态注入的 JavaScript 代码，以及定位 JS 调用位置，常用于逆向分析、抓取数据或识别加固方案中的 Web 容器。

推荐命令：spawn webview_enable_debug.js

<img src="https://raw.githubusercontent.com/CreditTone/img_resources/main/webview_debugging.png" width="1000">

# Windows安装WSL

WSL是适用于Linux 的Windows 子系统（WSL）允许开发人员直接在Windows 上运行GNU/Linux 环境（包括大多数命令行工具、实用工具和应用程序），无需传统虚拟机或双启动设置的开销。

### 1. 安装wsl ubuntn24.04
访问：https://learn.microsoft.com/zh-cn/windows/wsl/install-manual#downloading-distributions

下载Ubuntu24.04

双击Ubuntu2404-240425.AppxBundle 安装Ubuntu


### 2. 进入wsl，配置代理
窗口输入wsl进入ubuntu命令行

- cmd

- wsl

切换到root用户

- sudo su

配置翻墙代理，如果你有

- export http_proxy="http://10.115.164.50:8080"
- export https_proxy="http://10.115.164.50:8080"

### 3. 安装python3.8和frida
- apt update
- apt install -y build-essential libssl-dev zlib1g-dev libbz2-dev 
libreadline-dev libsqlite3-dev wget curl llvm xz-utils tk-dev 
libffi-dev liblzma-dev
- apt install -y git
- apt install -y pyenv
- pyenv install 3.8.8
- pyenv local 3.8


# 自定义frida-server
- 将您自定义的frida-server文件拷贝到mobile-deploy文件夹下
- 修改hooker.py，default_frida_server_arm和default_frida_server_arm64变量的名字为你自定义的文件名

```python
default_frida_server_arm = "your-custom-frida-server-android-arm"
default_frida_server_arm64 = "your-custom-frida-server-android-arm64"
```

# hooker命令行快捷键

- Ctrl + U：整行清空

- Ctrl + W：删除一个单词

- Ctrl + K：从光标删到行尾