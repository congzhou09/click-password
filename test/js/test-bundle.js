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

	    function e(e, t) {
	      "string" == typeof e && e.length > 0 && !e.match(/[^ABCD]/) && ("function" == typeof t || void 0 === t) ? (this.rangeWidth = document.documentElement.clientWidth, this.rangeHeight = document.documentElement.clientHeight, this.triggerSequence = null != e ? e : "", this.triggerCallback = t, this.clickSequenceArray = [], this.eventHandler = null, this.init(), console.info("click-password info: config OK!")) : console.warn("click-password warn: invalid triggerSequence or triggerSequence");
	    }
	    return e.prototype.getQuadrant = function (e) {
	      var t = Math.floor(this.rangeWidth / 2),
	        n = Math.floor(this.rangeHeight / 2);
	      return e.x > t ? e.y > n ? "D" : "B" : e.y > n ? "C" : "A";
	    }, e.prototype.eventProcess = function (e) {
	      this.checkClick(this.getQuadrant({
	        x: e.clientX,
	        y: e.clientY
	      }));
	    }, e.prototype.init = function () {
	      document.addEventListener ? (this.eventHandler = this.eventProcess.bind(this), document.addEventListener("click", this.eventHandler)) : console.warn("click-password warn: event attach failed, no 'addEventListener'");
	    }, e.prototype.checkClick = function (e) {
	      this.clickSequenceArray.push(e);
	      var t = this.clickSequenceArray.join("");
	      new RegExp("".concat(this.triggerSequence)).exec(t) ? (this.triggerCallback && this.triggerCallback(), this.clickSequenceArray.length = 0, this.eventHandler && (document.removeEventListener("click", this.eventHandler), console.info("click-password info: trigger successfully, config removed OK!"))) : this.clickSequenceArray = this.clickSequenceArray.slice(-this.triggerSequence.length);
	    }, e;
	  });
	})(clickPassword_min);

	// import ClickPassword from '../../dist/click-password.min.js';
	var ClickPassword = clickPassword_minExports;
	new ClickPassword('CCDDA', function () {
	  console.log('OK');
	});

	return test;

})();
