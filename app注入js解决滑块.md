## 关于如何对于app中的js调试

### 1.应用场景

我们在爬取数据的过程中难免会碰到的一些`滑块`.而这些滑块web我们可以用我debug大法随意调试模拟他滑动上报提交.很多同学对于嵌入在app在的滑块有时候就束手无策了,这时候我们引入了vconsole进行注入爬取

### 2.使用前提

你必须`web端`调试通过,直接这滑块的js注入点在哪里,如果不知道后续调试难度会增加.

### 3.使用

#### 原理

```python
1.利用vconsole生成一个终端调试界面
2.利用拦包工具对于滑块返回的html页面中js外链的引入替换成我们修改后具有埋点打印的内容js,以及HTML最开始部分引入vconsole的js
```

`实现原理就是如此简单`

js 链接

```Python
https://unpkg.com/vconsole@latest/dist/vconsole.min.js
https://cdn.jsdelivr.net/npm/vconsole@latest/dist/vconsole.min.js
```

### 4.持久化

有些同学会感觉每次拦包我都要替换太麻烦了有没有什么不用手动替换的自动的

面对这个需求我们还是有的

用到的工具

- [Thor HTTP Sniffer](https://itunes.apple.com/app/id1210562295): HTTP 抓包及断点调试。
- [vConsole 调试脚本](https://github.com/Tencent/vConsole): A lightweight, extendable front-end developer tool for mobile web page.
- [Eruda 调试脚本](https://github.com/liriliri/eruda): Console for mobile browsers.

#### 第一步：在 Thor 中设置过滤器断点

##### 1、打开 Thor, 创建一个过滤器，取名为：”WebView 注入调试”，并添加一个断点进入编辑

##### 2、因为需要对 WebView 的响应 HTML 内容进行注入，所以选择在 `请求阶段 > 响应消息体回传前 > 新建匹配规则`

![匹配规则](http://pixelcyber.com/Thor/tips-zh-Hans/bp_res/4.jpg)

##### » 选择『响应 body 前』

![响应 body 前](http://pixelcyber.com/Thor/tips-zh-Hans/bp_res/8.jpg)

##### 3、在匹配规则中加入表达式进行替换，以注入 vConsole 工具

**因为对 HTML body 标签注入 js 脚本后可能不会总是生效，所以这里选择优先对 title 标签进行替换**

加入判断条件：判断是否包含 title 标签

```
@rsp.bodyText CONTAINS[cd] "</title>"
```

当有 title 标签时，执行以下表达式

```js
^@rsp.bodyText "<\/title>" "</title><script type='text/javascript' src='https://coding.net/u/Tumblr/p/thor-lib/git/raw/master/vconsole/3.2.0/vconsole.min.js'></script><script>new VConsole();</script>"   
```

没有 title 标签，则找 body 标签替换

```js
^@rsp.bodyText "<\/body>" "<script type='text/javascript' src='https://coding.net/u/Tumblr/p/thor-lib/git/raw/master/vconsole/3.2.0/vconsole.min.js'></script><script>
new VConsole();</script></body>"
```

- 其中`new VConsole()` 是关键不调用不会生成界面
- 还有载人方式可以使用chalrs或者fiddler替换js再头部注入
- *考虑加载速度的原因，没有直接使用 github 上的 vConsole 原地址，而是 dump 了一份到 coding.net 仓库里，所以上面用的是 codeing.net 的脚本地址*

##### » vConsole 注入设置如图

![img](http://pixelcyber.com/Thor/tips-zh-Hans/bp_res/7.jpg)

**同理，再新建一个断点，完成 Eruda 工具的注入（其实可以不用两个调试脚本都注入，这里只是演示效果）**

#### 第二步：在 PPHub 中找一个 WebView 界面进行尝试

##### 1、打开 Thor > 选择 “WebView 注入调试” 过滤器，并启动

![img](http://pixelcyber.com/Thor/tips-zh-Hans/bp_res/9.jpg)

##### » 启动抓包

![img](http://pixelcyber.com/Thor/tips-zh-Hans/bp_res/3.jpg)

##### 2、打开 PPHub

![img](http://pixelcyber.com/Thor/tips-zh-Hans/bp_res/2.jpg)

##### » 并找到一个 WebView, 等待加载完成 (直到出现调试工具入口)

![img](http://pixelcyber.com/Thor/tips-zh-Hans/bp_res/1.jpg)

##### » vConsole 调试效果

![img](http://pixelcyber.com/Thor/tips-zh-Hans/bp_res/6.jpg)

##### » Eruda 调试效果

![img](http://pixelcyber.com/Thor/tips-zh-Hans/bp_res/5.jpg)

### 参考资料 (排名不分先后)

- [JSBox 的网页调试插件](https://itunes.apple.com/app/id1312014438)
- [三种解密 HTTPS 流量的方法介绍 by Jerry Qu](https://imququ.com/post/how-to-decrypt-https.html)
- [Content Security Policy Level 2 介绍 by Jerry Qu](https://imququ.com/post/content-security-policy-level-2.html)
- [eruda - Console for mobile browsers](https://eruda.liriliri.io/)
- [vConsole by Tencent](https://github.com/Tencent/vConsole)

### Thor 20 天免费试用 TestFlight 申请

1、[Thor 的详细介绍](https://github.com/PixelCyber/Thor/blob/master/README-zh-Hans.md)

2、[TestFlight 申请问卷填写](https://wj.qq.com/s/1607760/e57d)

3、过滤器 “WebView 注入调试” [后期优化版下载](https://github.com/PixelCyber/Thor/raw/master/tips-zh-Hans/bp_res/WebView_debug.f4thor)（下载后直接用 Thor 打开，安装）
