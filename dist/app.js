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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const isStrEmpty = __webpack_require__(/*! ./isStrEmpty */ \"./src/common/isStrEmpty.js\");\r\n\r\nmodule.exports = {\r\n  isStrEmpty\r\n}\n\n//# sourceURL=webpack:///./src/common/index.js?");

/***/ }),

/***/ "./src/common/isStrEmpty.js":
/*!**********************************!*\
  !*** ./src/common/isStrEmpty.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 字符串是否为空.\r\n * \r\n * @param {string} str\r\n * @return {boolean} `是为空`返回`true`; 否则返回`false`\r\n */\r\nconst isStrEmpty = (str) => {\r\n  if (typeof str !== 'string') return;\r\n  str.length == 0 ? true : false; \r\n}\r\n\r\nmodule.exports = isStrEmpty;\n\n//# sourceURL=webpack:///./src/common/isStrEmpty.js?");

/***/ }),

/***/ "./src/date/index.js":
/*!***************************!*\
  !*** ./src/date/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/** 时间处理功能函数 */\r\n// const getNowData = require('./getNowData');\r\n\r\nconst { isStrEmpty } = __webpack_require__(/*! ../common */ \"./src/common/index.js\");\r\n\r\n/**\r\n * 日期常用工具类\r\n * \r\n * @see https://github.com/XuXiaoGH/dateformat.js/blob/master/dateformat.js \r\n */\r\nclass Date {\r\n  constructor() {\r\n    this.timer = 1;\r\n  }\r\n\r\n  /**\r\n   * 格式化时间\r\n   * \r\n   * @param {Date} date `Date`对象\r\n   * @param {string} fmt `需要的格式`\r\n   * @return {string} 格式化后的时间\r\n   * \r\n   * @example \r\n   * ```\r\n   * const date1 = new cTools.Date();\r\n   * \r\n   * dat1.format(new Date());\r\n   * // => '2018-07-27 14:24:11'\r\n   * \r\n   * date1.format(new Date(), 'yyyy');\r\n   * // => '2018'\r\n   * \r\n   * date1.format(new Date(), 'dd-MM-yyy hh:mm:ss');\r\n   * // => \"27-07-018 14:26:54\"\r\n   * ```\r\n   */\r\n  format(date, fmt = 'yyyy-MM-dd hh:mm:ss') {\r\n    var o = {\r\n      'M+': date.getMonth() + 1, //月份\r\n      'd+': date.getDate(), //日\r\n      'h+': date.getHours(), //小时\r\n      'm+': date.getMinutes(), //分\r\n      's+': date.getSeconds(), //秒\r\n      'q+': Math.floor((date.getMonth() + 3) / 3), //季度\r\n      'S': date.getMilliseconds() //毫秒\r\n    };\r\n\r\n    if (/(y+)/.test(fmt)) {\r\n      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));\r\n    }\r\n    for (var k in o) {\r\n      if (new RegExp('(' + k + ')').test(fmt)) {\r\n        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));\r\n      }\r\n    }\r\n    return fmt;\r\n  }\r\n  \r\n  getNowData() {\r\n    // @see call() bind()\r\n    // @see https://blog.csdn.net/ganyingxie123456/article/details/70855586\r\n    return getNowData.apply(this, arguments);\r\n  }\r\n\r\n}\r\n\r\nmodule.exports = Date;\n\n//# sourceURL=webpack:///./src/date/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// import EventDispatcher from './must';\r\nconst Date = __webpack_require__(/*! ./date */ \"./src/date/index.js\");\r\n\r\n// 期待使用方式\r\n// 浏览器中：\r\n// new window.cTools.Time() // 返回实际处理类\r\n\r\n/**\r\n * `JavaScript` 常用工具集合\r\n */\r\nconst cTools = {\r\n  Date: Date\r\n}\r\n\r\n\r\n// 导出处理\r\n// ??? webpack 浏览器环境不执行\r\n// @see [jQuery方式](https://gitee.com/weblife/jquery-code-understand/blob/master/src/slim/01_%E6%A8%A1%E5%9D%97%E4%B8%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AF%BC%E5%87%BA%E5%A4%84%E7%90%86.js)\r\n// 支持 CommonJS 方式导出\r\n// if (typeof module === 'object' && typeof module.exports === 'object') {\r\n//   module.exports = cTools;\r\n// } else { // 浏览器环境\r\n//   window.cTools = cTools;\r\n// }\r\n\r\nwindow.cTools = cTools;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });