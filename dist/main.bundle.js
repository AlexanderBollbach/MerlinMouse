/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Position = __webpack_require__(3);

var _Position2 = _interopRequireDefault(_Position);

var _Size = __webpack_require__(4);

var _Size2 = _interopRequireDefault(_Size);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Box = function Box(x, y, width, height) {
	_classCallCheck(this, Box);

	this.position = new _Position2.default(x, y);
	this.size = new _Size2.default(width, height);
};

exports.default = Box;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CanvasManager = __webpack_require__(2);

var _CanvasManager2 = _interopRequireDefault(_CanvasManager);

var _Box = __webpack_require__(0);

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
	startGame();
};

function startGame() {
	var canvasManager = new _CanvasManager2.default("GameEngineCanvas");

	canvasManager.setColor("green");

	var box = new _Box2.default(0, 0, 90, 90);

	canvasManager.draw(box);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Position = __webpack_require__(3);

var _Position2 = _interopRequireDefault(_Position);

var _Size = __webpack_require__(4);

var _Size2 = _interopRequireDefault(_Size);

var _Box = __webpack_require__(0);

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasManager = function () {
	function CanvasManager(canvasId) {
		_classCallCheck(this, CanvasManager);

		this.canvas = document.getElementById(canvasId);

		this.context = this.canvas.getContext("2d");

		this.canvas.width = this.context.width;
		this.canvas.height = this.context.height;

		this.resizeCanvasToDisplaySize(this.canvas);
	}

	_createClass(CanvasManager, [{
		key: "resizeCanvasToDisplaySize",
		value: function resizeCanvasToDisplaySize(canvas) {
			var width = canvas.clientWidth;
			var height = canvas.clientHeight;

			this.widthMultiplier = canvas.clientWidth / 100;
			this.heightMultiplier = canvas.clientHeight / 100;

			canvas.width = width;
			canvas.height = height;
		}
	}, {
		key: "setColor",
		value: function setColor(color) {
			this.context.fillStyle = color;
		}
	}, {
		key: "draw",
		value: function draw(box) {
			var newBox = this.normalizedBoxFromBox(box);

			this.context.rect(newBox.position.x, newBox.position.y, newBox.size.width, newBox.size.height);

			this.context.fill();
		}
	}, {
		key: "normalizedBoxFromBox",
		value: function normalizedBoxFromBox(box) {
			var newPosition = new _Position2.default(box.position.x * this.widthMultiplier, box.position.y * this.heightMultiplier);
			var newSize = new _Size2.default(box.size.width * this.widthMultiplier, box.size.height * this.heightMultiplier);
			var newBox = new _Box2.default(newPosition.x, newPosition.y, newSize.width, newSize.height);

			return newBox;
		}
	}]);

	return CanvasManager;
}();

exports.default = CanvasManager;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Position = function Position(x, y) {
	_classCallCheck(this, Position);

	this.x = x;
	this.y = y;
};

exports.default = Position;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Size = function Size(width, height) {
	_classCallCheck(this, Size);

	this.width = width;
	this.height = height;
};

exports.default = Size;

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map