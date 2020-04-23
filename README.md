### 欢迎使用 radar，帮助你在逆向工程中，自动扫描所有class并支持自动生成frida hook代码。


#### hooker视频教程(逆向今日头条)
![hooker使用教程](https://jsycc.oss-cn-beijing.aliyuncs.com/toutiao_video.png "hooker使用教程")
### [点此播放](https://pan.baidu.com/s/1XX_AtnpSYGcx7pZAGUTPfQ "播放")       密码：dp89

#### 快速开始
```shell
git https://github.com/CreditTone/radar-frida
cd radar-frida
./hooker
```
#### 当前手机进程
```shell
  PID  Name
-----  ------------------------------------
  511  adbd
 2725  android.ext.services
 3214  android.process.acore
 6733  android.process.media
  629  audioserver
 2742  cameraserver
 6764  com.android.defcontainer
 2861  com.android.deskclock
 3198  com.android.email
 2391  com.android.phone
 3359  com.android.providers.calendar
 2408  com.android.settings
 2972  com.android.smspush
 2097  com.android.systemui
 3379  com.cyanogenmod.lockclock
10566  com.example.myapplication
 2092  com.google.android.inputmethod.latin
 3525  com.koudai.weidian.buyer
 3659  com.koudai.weidian.buyer:pushservice
 3416  com.mokee.aegis
 2915  com.mokee.audiofx
 4281  com.qualcomm.timeservice
 3769  com.ss.android.ugc.aweme
 4613  com.ss.android.ugc.aweme:downloader
 4455  com.ss.android.ugc.aweme:miniapp0
 3639  com.ss.android.ugc.aweme:push
 4152  com.ss.android.ugc.aweme:pushservice
```

#### attach一个应用
```shell
cd radar
./hooker
Enter need to attach package:com.example.myapplication
It's com.example.myapplication that you want to attach app.
------------------------
Please enter e, s, h or ex command.
e: Determines whether a class exists. eg:'e android.app.Application'
s: Discovering classes in the specified path. eg1:'s com.example.myapplication' In regex eg2:'s com.example.net.*'
j: Generating hooked js. eg1:'j okhttp3.Request:build' To specific Multiple methods eg2:'j okhttp3.Request:url,method,build'
ex: Exit to the upper layer. eg:'ex'
:
```

#### 判断一个应用中某个类是否存在
```shell
Please enter e, s, h or ex command.
e: Determines whether a class exists. eg:'e android.app.Application'
s: Discovering classes in the specified path. eg1:'s com.example.myapplication' In regex eg2:'s com.example.net.*'
j: Generating hooked js. eg1:'j okhttp3.Request:build' To specific Multiple methods eg2:'j okhttp3.Request:url,method,build'
ex: Exit to the upper layer. eg:'ex'
:e okhttp3.Request
python hooker.py -p com.example.myapplication -e okhttp3.Request
True #True表示存在 False表示不存在
```

#### 扫描一个应用中某个包下的所有类，并输出到控制台
```shell
Please enter e, s, h or ex command.
e: Determines whether a class exists. eg:'e android.app.Application'
s: Discovering classes in the specified path. eg1:'s com.example.myapplication' In regex eg2:'s com.example.net.*'
j: Generating hooked js. eg1:'j okhttp3.Request:build' To specific Multiple methods eg2:'j okhttp3.Request:url,method,build'
ex: Exit to the upper layer. eg:'ex'
:s com.example.myapplication
python hooker.py -p com.example.myapplication -s com.example.myapplication
androidVersion:7.1.2
Discovering:com.example.myapplication
class com.example.myapplication.MainActivity extends androidx.appcompat.app.AppCompatActivity
class com.example.myapplication.MainActivity$1 implements android.view.View$OnClickListener
class com.example.myapplication.MainActivity$2 implements android.view.View$OnClickListener
Discovering done
#由此我们知道com.example.myapplication这个包下有一个类com.example.myapplication.MainActivity，并且在com.example.myapplication.MainActivity中有两个内部类com.example.myapplication.MainActivity$1和com.example.myapplication.MainActivity$2
```

#### 生成针对某个类的hook代码
```shell
Please enter e, s, h or ex command.
e: Determines whether a class exists. eg:'e android.app.Application'
s: Discovering classes in the specified path. eg1:'s com.example.myapplication' In regex eg2:'s com.example.net.*'
j: Generating hooked js. eg1:'j okhttp3.Request:build' To specific Multiple methods eg2:'j okhttp3.Request:url,method,build'
ex: Exit to the upper layer. eg:'ex'
:j com.example.myapplication.MainActivity:stringFromJNI,stringFromJNI2
python hooker.py -p com.example.myapplication -j com.example.myapplication.MainActivity:stringFromJNI,stringFromJNI2
Hooking js code have generated. Path is ef555384-772a-11ea-bfdd-086d41d57a6a.js.
#生成的js文件是当前目录的ef555384-772a-11ea-bfdd-086d41d57a6a.js
#建议使用https://tool.oschina.net/codeformat/js/做格式化处理
```
##### hook js
```js
Java.perform(function() {
    var com_example_myapplication_MainActivity_clz = Java.use('com.example.myapplication.MainActivity');
    com_example_myapplication_MainActivity_clz.stringFromJNI2.overload().implementation = function() {
        printStacks('public static native java.lang.String com.example.myapplication.MainActivity.stringFromJNI2()');
        return com_example_myapplication_MainActivity_clz.stringFromJNI2();
    };
    com_example_myapplication_MainActivity_clz.stringFromJNI.overload().implementation = function() {
        printStacks('public native java.lang.String com.example.myapplication.MainActivity.stringFromJNI()');
        return this.stringFromJNI();
    };
});
#根据自身需求做修改
```

```shell
androidVersion:7.1.2
inject dex of radar.
injected.
Discovering:com.example.myapplication
class com.example.myapplication.MainActivity extends androidx.appcompat.app.AppCompatActivity
	hasLocalNativeMethod:true
	fields:131
	constructors:1
	methods:445
class com.example.myapplication.MainActivity$1 extends java.lang.Object
	hasLocalNativeMethod:false
	fields:2
	constructors:1
	methods:10
class com.example.myapplication.MainActivity$2 extends java.lang.Object
	hasLocalNativeMethod:false
	fields:2
	constructors:1
	methods:10
Discovering done
执行:Java.perform(function() {var com_example_myapplication_MainActivity_clz = Java.use('com.example.myapplication.MainActivity');com_example_myapplication_MainActivity_clz.stringFromJNI2.overload().implementation = function() {printStacks('public static native java.lang.String com.example.myapplication.MainActivity.stringFromJNI2()');return com_example_myapplication_MainActivity_clz.stringFromJNI2();};com_example_myapplication_MainActivity_clz.stringFromJNI.overload().implementation = function() {printStacks('public native java.lang.String com.example.myapplication.MainActivity.stringFromJNI()');return this.stringFromJNI();};com_example_myapplication_MainActivity_clz.stringFromJNI3.overload('java.lang.String','java.lang.String').implementation = function(v0,v1) {printStacks('private static native java.lang.String com.example.myapplication.MainActivity.stringFromJNI3(java.lang.String,java.lang.String)');return com_example_myapplication_MainActivity_clz.stringFromJNI3(v0,v1);};});
sys.stdin.read()
public native java.lang.String com.example.myapplication.MainActivity.stringFromJNI()
	at com.example.myapplication.MainActivity.stringFromJNI(Native Method)
	at com.example.myapplication.MainActivity$1.onClick(MainActivity.java:35)
	at android.view.View.performClick(View.java:5637)
	at android.view.View$PerformClick.run(View.java:22433)
	at android.os.Handler.handleCallback(Handler.java:751)
	at android.os.Handler.dispatchMessage(Handler.java:95)
	at android.os.Looper.loop(Looper.java:154)
	at android.app.ActivityThread.main(ActivityThread.java:6236)
	at java.lang.reflect.Method.invoke(Native Method)
	at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:891)
	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:781)

public static native java.lang.String com.example.myapplication.MainActivity.stringFromJNI2()
	at com.example.myapplication.MainActivity.stringFromJNI2(Native Method)
	at com.example.myapplication.MainActivity$2.onClick(MainActivity.java:44)
	at android.view.View.performClick(View.java:5637)
	at android.view.View$PerformClick.run(View.java:22433)
	at android.os.Handler.handleCallback(Handler.java:751)
	at android.os.Handler.dispatchMessage(Handler.java:95)
	at android.os.Looper.loop(Looper.java:154)
	at android.app.ActivityThread.main(ActivityThread.java:6236)
	at java.lang.reflect.Method.invoke(Native Method)
	at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:891)
	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:781)

```


### End
[1]: https://github.com/frida/frida "frida"
[2]: https://github.com/CreditTone/radar "radar"
