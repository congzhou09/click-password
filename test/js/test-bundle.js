(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, basedir, module) {
		return module = {
			path: basedir,
			exports: {},
			require: function (path, base) {
				return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
			}
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var clickPassword_min = createCommonjsModule(function (module, exports) {
	  /**
	   * click-password v1.1.0 (https://github.com/congzhou09/click-password.git)
	   * 
	   * Copyright (C) 2019. Free to use, very pleased to reserve my name: "Congzhou" 
	   */
	  !function (e, t) {
	     module.exports = t() ;
	  }(commonjsGlobal, function () {

	    return function () {
	      function e(e, t) {
	        "string" != typeof e || !e.length || e.match(/[^[ABCD]/) || "function" != typeof t && void 0 !== t ? console.warn("click-password warn: invalid triggerSequence or triggerSequence") : (this.rangeWidth = document.documentElement.clientWidth, this.rangeHeight = document.documentElement.clientHeight, this.triggerSequence = e, this.triggerCallback = t, this.clickSequenceArray = [], this.eventHandler = null, this.init(), console.info("click-password info: config OK!"));
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
	        new RegExp("^".concat(t)).exec(this.triggerSequence) ? t.length === this.triggerSequence.length && (this.triggerCallback && this.triggerCallback(), this.clickSequenceArray.length = 0, this.eventHandler && (document.removeEventListener("click", this.eventHandler), console.info("click-password info: trigger successfully, config removed OK!"))) : this.clickSequenceArray.length = 0;
	      }, e;
	    }();
	  });
	});

	new clickPassword_min('CCDDA', function () {
	  console.log('OK');
	});

}());
