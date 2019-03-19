[![npm version](https://badge.fury.io/js/click-password.svg)](https://badge.fury.io/js/click-password)

### 目的
将浏览器视口按照如下顺序分为A、B、C、D四个象限,

```
        │
    A   │   B
───────────────────
    C   │   D
        │
```

于是在各象限点击将产生的一个序列，将此序列作为密码, 当满足预设序列时将执行预设函数

### 使用

下载或通过npm（npm install click-password）安装，
```
import ClickPassword from 'click-password';

// 初始化，指定预设序列(如'ABADA'，或其他由A、B、C、D组成的序列)和回调函数
new ClickPassword('ABADA', ()=>{
  //回调函数，预设的处理过程
});
```
或者通过script标签引入，
```
<script src="path/to/click-password-version.min.js"></script>
<script>
  // 初始化，指定预设序列(如'ABADA'，或其他由A、B、C、D组成的序列)和回调函数
  new ClickPassword('ABADA', ()=>{
    //回调函数，预设的处理过程
  });
</script>
```

### 小贴士
●初始化成功后，浏览器控制台将打印消息“click-password info: config OK!”。

●无须从页面载入后的第一次点击开始，只要点击过程出现了预设序列即可触发回调。

●回调只触发一次，除非重新载入页面。

### 注意
在移动端使用'click-password'需要注意处理300ms延时问题（通常使用'fast-click'），以防其干扰点击事件。

### 应用举例
生产环境下，通过点击'ACABD'序列调出vConsole（移动端调试工具）

![](https://raw.githubusercontent.com/congzhou09/click-password/HEAD/snapshot/trigger_vconsole.gif)