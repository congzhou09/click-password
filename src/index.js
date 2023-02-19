/**
 * Adds two numbers together.
 * @param {string} triggerSequence the sequence string for trigger callback function.
 * @param {function} triggerCallback the callback function.
 */
function ClickPassword(triggerSequence, triggerCallback) {
  if (
    typeof triggerSequence === 'string' &&
    triggerSequence.length > 0 &&
    !triggerSequence.match(/[^ABCD]/) &&
    (typeof triggerCallback === 'function' || typeof triggerCallback === 'undefined')
  ) {
    this.rangeWidth = document.documentElement.clientWidth;
    this.rangeHeight = document.documentElement.clientHeight;
    this.triggerSequence = triggerSequence ?? '';
    this.triggerCallback = triggerCallback;

    this.clickSequenceArray = []; // 实际点击password存储Array
    this.eventHandler = null;
    this.init();
    console.info(`click-password info: config OK!`);
  } else {
    console.warn(`click-password warn: invalid triggerSequence or triggerSequence`);
  }
}

// 获取象限：从左上角的顺时针方向，A-西北象限 B-东北象限 C-西南象限 D-东南象限
ClickPassword.prototype.getQuadrant = function (onePoint) {
  const halfWidth = Math.floor(this.rangeWidth / 2);
  const halfHeight = Math.floor(this.rangeHeight / 2);
  if (onePoint.x > halfWidth) {
    if (onePoint.y > halfHeight) {
      return 'D';
    } else {
      return 'B';
    }
  } else {
    if (onePoint.y > halfHeight) {
      return 'C';
    } else {
      return 'A';
    }
  }
};

ClickPassword.prototype.eventProcess = function (e) {
  // console.log(this.getQuadrant({x: e.clientX, y:e.clientY}));
  this.checkClick(this.getQuadrant({ x: e.clientX, y: e.clientY }));
};
ClickPassword.prototype.init = function () {
  if (document.addEventListener) {
    this.eventHandler = this.eventProcess.bind(this);
    document.addEventListener('click', this.eventHandler);
  } else {
    console.warn(`click-password warn: event attach failed, no 'addEventListener'`);
  }
};

ClickPassword.prototype.checkClick = function (oneClickChar) {
  this.clickSequenceArray.push(oneClickChar);
  const curClickSequence = this.clickSequenceArray.join('');
  if (new RegExp(`${this.triggerSequence}`).exec(curClickSequence)) {
    if (this.triggerCallback) {
      this.triggerCallback();
    }
    this.clickSequenceArray.length = 0;
    if (this.eventHandler) {
      document.removeEventListener('click', this.eventHandler);
      console.info('click-password info: trigger successfully, config removed OK!');
    }
  } else {
    this.clickSequenceArray = this.clickSequenceArray.slice(-this.triggerSequence.length);
  }

  // console.log(this.clickSequenceArray);
};

export default ClickPassword;
