
### what for
Set up a quadrant in viewport, name of each range is as follows:
```
        │
    A   │   B
──────────────────
    C   │   D
        │
```
after that, clicks in each range can generate a sequence, use this sequence as a password.
If this sequence match the pre-set sequence, pre-set function will be executed.

### usage

Download or install via npm (npm install click-password)
```
import ClickPassword from 'click-password';

// 初始化，指定预设序列(如'ABADA'，或其他由A、B、C、D组成的序列)和回调函数
new ClickPassword('ABADA', ()=>{
  //回调函数，预设的处理过程
});
```

Or import via script element:

```
<script src="path/to/click-password-version.min.js"></script>
<script>
  // init click-password with pre-set sequence(like 'ABADA' or other sequence composed of A, B, C, D) and callback function
  new ClickPassword('ABADA', ()=>{
    //Callback, Do Something
  });
</script>
```

Browser console will print "click-password info: config OK!" after click-password's initialization.
