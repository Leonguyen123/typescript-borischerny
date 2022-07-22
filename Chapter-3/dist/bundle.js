/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\r\nfunction squareOf(n) {\r\n    return n * n;\r\n}\r\nsquareOf(2); // 4\r\n// squareOf('x') //'Number of string cannot assign to parameter type number.\r\n/** Type */\r\n/** unknown  */\r\nlet a = 30;\r\nlet c = 30;\r\nif (typeof a === 'number') {\r\n    // chỉ khi bạn thực sự biết unknown là gì thì nó mới cho phép bạn sử dụng.\r\n    let d = c + a;\r\n}\r\nlet b = {\r\n    item1: a\r\n};\r\n\n\n//# sourceURL=webpack://chapter-2/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;