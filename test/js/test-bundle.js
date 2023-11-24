var clickTest = (function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var test = {};

	var clickPassword_minExports = {};
	var clickPassword_min = {
	  get exports(){ return clickPassword_minExports; },
	  set exports(v){ clickPassword_minExports = v; },
	};

	/** 
	 * click-password v1.1.2 (https://github.com/congzhou09/click-password.git) 
	 */
	(function (module, exports) {
	  !function (e, t) {
	    module.exports = t() ;
	  }(commonjsGlobal, function () {

	    return function () {
	      function e(e, t) {
	        this.eventName = "mousedown", "string" == typeof e && e.length > 0 && !e.match(/[^ABCD]/) && ("function" == typeof t || void 0 === t) ? (this.rangeWidth = document.documentElement.clientWidth, this.rangeHeight = document.documentElement.clientHeight, this.triggerSequence = null != e ? e : "", this.triggerCallback = t, this.clickSequenceArray = [], this.eventHandler = this.eventProcess.bind(this), this.init(), console.debug("click-password info: config OK!")) : console.debug("click-password warn: invalid triggerSequence or triggerSequence");
	      }
	      return e.prototype.getEventName = function () {
	        "ontouchstart" in window ? this.eventName = "touchstart" : "PointerEvent" in window ? this.eventName = "pointerdown" : this.eventName = "mousedown";
	      }, e.prototype.init = function () {
	        this.getEventName(), document.addEventListener ? document.addEventListener(this.eventName, this.eventHandler) : console.debug("click-password warn: event attach failed, no 'addEventListener'");
	      }, e.prototype.eventProcess = function (e) {
	        var t = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX,
	          n = e instanceof TouchEvent ? e.touches[0].clientX : e.clientY;
	        this.checkClick(this.getQuadrant({
	          x: t,
	          y: n
	        }));
	      }, e.prototype.getQuadrant = function (e) {
	        var t = Math.floor(this.rangeWidth / 2),
	          n = Math.floor(this.rangeHeight / 2);
	        return e.x > t ? e.y > n ? "D" : "B" : e.y > n ? "C" : "A";
	      }, e.prototype.checkClick = function (e) {
	        this.clickSequenceArray.push(e);
	        var t = this.clickSequenceArray.join("");
	        new RegExp("".concat(this.triggerSequence)).exec(t) ? (this.triggerCallback && this.triggerCallback(), this.clickSequenceArray.length = 0, this.eventHandler && (document.removeEventListener(this.eventName, this.eventHandler), console.debug("click-password info: trigger successfully, config removed OK!"))) : this.clickSequenceArray = this.clickSequenceArray.slice(-this.triggerSequence.length);
	      }, e;
	    }();
	  });
	})(clickPassword_min);

	// import ClickPassword from '../../dist/click-password.min.js';
	var ClickPassword = clickPassword_minExports;
	new ClickPassword('CCDDAB', function () {
	  console.log('OK');
	});

	return test;

})();
