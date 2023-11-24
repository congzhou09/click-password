class ClickPassword {
  rangeWidth: number;
  rangeHeight: number;
  triggerSequence: string;
  triggerCallback: () => void;
  clickSequenceArray: Array<string>;
  eventName: string = 'mousedown';
  eventHandler: () => void;

  /**
   * ClickPassword constructor
   * @param {string} triggerSequence the sequence string for trigger callback function.
   * @param {function} triggerCallback the callback function.
   */
  constructor(triggerSequence: string, triggerCallback: () => void) {
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

      this.clickSequenceArray = []; // to store the clicked sequence
      this.eventHandler = this.eventProcess.bind(this);
      this.init();
      console.debug(`click-password info: config OK!`);
    } else {
      console.debug(`click-password warn: invalid triggerSequence or triggerSequence`);
    }
  }
  getEventName() {
    if ('ontouchstart' in window) {
      this.eventName = 'touchstart';
    } else if ('PointerEvent' in window) {
      this.eventName = 'pointerdown';
    } else {
      this.eventName = 'mousedown';
    }
  }
  init() {
    this.getEventName();
    if (document.addEventListener) {
      document.addEventListener(this.eventName, this.eventHandler);
    } else {
      console.debug(`click-password warn: event attach failed, no 'addEventListener'`);
    }
  }
  eventProcess(e: PointerEvent | MouseEvent | TouchEvent) {
    const clientX = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
    const clientY = e instanceof TouchEvent ? e.touches[0].clientX : e.clientY;
    // console.debug(this.getQuadrant({ x: clientX, y: clientY }));
    this.checkClick(this.getQuadrant({ x: clientX, y: clientY }));
  }
  // named from the topLeft corner, A-topLeft B-topRight C-bottomLeft D-bottomRight
  getQuadrant(onePoint: { x: number; y: number }) {
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
  }
  checkClick(oneClickChar: string) {
    this.clickSequenceArray.push(oneClickChar);
    const curClickSequence = this.clickSequenceArray.join('');
    if (new RegExp(`${this.triggerSequence}`).exec(curClickSequence)) {
      if (this.triggerCallback) {
        this.triggerCallback();
      }
      this.clickSequenceArray.length = 0;
      if (this.eventHandler) {
        document.removeEventListener(this.eventName, this.eventHandler);
        console.debug('click-password info: trigger successfully, config removed OK!');
      }
    } else {
      this.clickSequenceArray = this.clickSequenceArray.slice(-this.triggerSequence.length);
    }

    // console.debug(this.clickSequenceArray);
  }
}

export default ClickPassword;
