# Twitter实战测试

### 不使用just_trust_me情况下，抓包失败展示
![抓包失败展示.png-443.6kB][2]

### spawn方式启动just_trust_me.js
建议任何app都以spawn方式启动just_trust_me.js。不是建议！是必须，因为要在app完成初始化之前hook住所有的hook点，只有spawn模式下才能做到，attach时机太晚了。所以大家明白？
![启动just_trust_me.gif-2756.5kB][3]



### 启动just_trust_me.js之后正常抓包展示
久违的请求出来了！！！看！！！
![启动just_trust_me之后.gif-2307.9kB][4]


# 某头条资讯APP实战测试

### 启动just_trust_me.js
![WechatIMG417.png-1098.4kB][5]

### 正常抓包展示
![qutoutiao_result.gif-2120.1kB][6]


# 某买菜APP实战测试

### 启动just_trust_me.js
![WechatIMG420.png-1185.2kB][7]

### 正常抓包展示
![WechatIMG422.png-763.4kB][8]


#### 就是这么的简单粗暴，我们继续......

# 某汽车资讯APP实战测试
### 启动just_trust_me.js
![111.png-1099.8kB][9]

### 正常抓包展示
![222.png-772.2kB][10]

# 某国内免费小说APP实战测试
### 启动just_trust_me.js
![333.png-1054.4kB][11]

### 正常抓包展示
![444.png-678.5kB][12]

# 某宝购物APP
### 启动just_trust_me.js
![666.png-1151.4kB][13]

### 正常抓包展示
![555.png-879.3kB][14]


还要测吗？这个frida版本的just_trust_me怎么样？有些okhttp库在编译的时候混淆了，你可以通过[just_trust_me_okhttp_hook_finder.js](https://github.com/CreditTone/hooker/blob/master/js/just_trust_me_okhttp_hook_finder.js)把混淆类找回来。如何使用just_trust_me_okhttp_hook_finder请看《实现frida版的JustTrustMe（三）frida版JustTrustMe升级和混淆对抗》


# 再次强调实现frida版JustTrustMe的意义

### 快速使用
    不用我说了吧，大家上面都看到了。xposed有我frida这么洒脱吗？批量刷机都是问题吧？frida只要你手机root即可，这才叫活好不粘人！！！
    
### frida的反检测性比xposed好很多
    xposed虽然有许多山寨版，在某些方面魔改可以对抗一些检测。但是依然是投入产出比不高，付出了那么多精力结果反检测性并没有实质性的上去。原因是xposed在设计的时候就走错了，等他发现基于替换zygote进程孵化容易被检测的时候已经晚了。所以xposed一直是错着往前！感兴趣的去看我《实现frida版的JustTrustMe（一）JustTrustMe官方源码学习》在开头讲的。

### 对抗混淆
    我提供了[just_trust_me_okhttp_hook_finder.js](https://github.com/CreditTone/hooker/blob/master/com.twitter.android/just_trust_me_okhttp_hook_finder.js)使你可以快速定位到okhttp[3-4]的混淆点，让你可以快速对每个app进行定制。

### frida可定制性好
    frida方面你只要会js就可以修改[just_trust_me.js](https://github.com/CreditTone/hooker/blob/master/com.twitter.android/just_trust_me.js)，而xposed要求你至少会基本的java、android开发和熟悉xposed框架api。

# 后记
没有100%能把所有包都抓住，都要基于每个app的反抓包策略进行一些调整。还有包括双向认证，需要在抓包工具上配置客户端证书、还有要vpn转发的、还有走私有协议的是不能用httpproxy类的抓包工具来抓包的等等吧。但是我会尽最大可能，让大家在操作相对简单的情况下帮大家抓到包。节省大家一点点时间，工具的本质就是提效。懒人出科技就是这样！



  [1]: http://static.zybuluo.com/1273568669/0gjhwhbgg8yw6nyot1lgsfrw/WechatIMG415.png
  [2]: http://static.zybuluo.com/1273568669/pakmqbet9bfkthi3tn1420dk/%E6%8A%93%E5%8C%85%E5%A4%B1%E8%B4%A5%E5%B1%95%E7%A4%BA.png
  [3]: http://static.zybuluo.com/1273568669/ayyj2o1o6m9ndluea7p4uaal/%E5%90%AF%E5%8A%A8just_trust_me.gif
  [4]: http://static.zybuluo.com/1273568669/vhrma5jzvzjyjtwit99ojxtn/%E5%90%AF%E5%8A%A8just_trust_me%E4%B9%8B%E5%90%8E.gif
  [5]: http://static.zybuluo.com/1273568669/al811jvk2act05mhvyzpywp8/WechatIMG417.png
  [6]: http://static.zybuluo.com/1273568669/xufqyh60yjfutidit3bbarf1/qutoutiao_result.gif
  [7]: http://static.zybuluo.com/1273568669/agierqyhvh78b6vt2m25rs2a/WechatIMG420.png
  [8]: http://static.zybuluo.com/1273568669/6xy4b84vnch2i1zjbfu5iqiy/WechatIMG422.png
  [9]: http://static.zybuluo.com/1273568669/pmaug9o12xyaofd6kf7vl6z3/111.png
  [10]: http://static.zybuluo.com/1273568669/xyf0czutgr1ho2vuxswe5tk9/222.png
  [11]: http://static.zybuluo.com/1273568669/qvzlycuwjkfil7i0mz7765sh/333.png
  [12]: http://static.zybuluo.com/1273568669/1e6ykjjfsqf8kr4u7d9jldff/444.png
  [13]: http://static.zybuluo.com/1273568669/lnikbsd36yq6q8zfw3kp0b5g/666.png
  [14]: http://static.zybuluo.com/1273568669/pt49hc31pjy8del9ssh9s2iv/555.png