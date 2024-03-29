English | [简体中文](https://github.com/congzhou09/click-password/blob/HEAD/README_CN.md)

---

[![npm version](https://badge.fury.io/js/click-password.svg)](https://badge.fury.io/js/click-password)

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

Download or install via npm (**npm install click-password**)

```
import ClickPassword from 'click-password';

// init click-password with pre-set sequence(like 'ABADA' or other sequence composed of A, B, C, D) and callback function
new ClickPassword('ABADA', ()=>{
  //Callback, Do Something
}, true/*whether print debug logs*/);
```

Or import via script element:

```
<script src="https://unpkg.com/click-password@latest/dist/click-password.min.js"></script>
<script>
  // init click-password with pre-set sequence(like 'ABADA' or other sequence composed of A, B, C, D) and callback function
  new ClickPassword('ABADA', ()=>{
    //Callback, Do Something
  });
</script>
```

### tips

● Browser console will print "click-password info: config OK!" after click-password's initialization.

● Callback will be executed as long as pre-set sequence is clicked, match the pre-set sequence from the first click is not necessary.

● Callback will be executed only once, only if the web page is reloaded.

● The declaration file for use with TypeScript is located at "dist/click-password.d.ts".

### example

Click 'ACABD' to trigger the show of vConsole(developer tool for mobile web page) in production environment.

![example gif image](https://congzhou09.github.io/click-password/snapshot/trigger_vconsole.gif)
