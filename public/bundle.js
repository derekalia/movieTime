/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: ReferenceError: [BABEL] /Users/student/Desktop/hungryNow2/js/ClientApp.js: Unknown option: /Users/student/Desktop/hungryNow2/node_modules/react/react.js.Children. Check out http://babeljs.io/docs/usage/options/ for more info (While processing preset: \\\"/Users/student/Desktop/hungryNow2/node_modules/react/react.js\\\")\\n    at Logger.error (/Users/student/Desktop/hungryNow2/node_modules/babel-core/lib/transformation/file/logger.js:41:11)\\n    at OptionManager.mergeOptions (/Users/student/Desktop/hungryNow2/node_modules/babel-core/lib/transformation/file/options/option-manager.js:216:20)\\n    at /Users/student/Desktop/hungryNow2/node_modules/babel-core/lib/transformation/file/options/option-manager.js:255:14\\n    at /Users/student/Desktop/hungryNow2/node_modules/babel-core/lib/transformation/file/options/option-manager.js:314:22\\n    at Array.map (native)\\n    at OptionManager.resolvePresets (/Users/student/Desktop/hungryNow2/node_modules/babel-core/lib/transformation/file/options/option-manager.js:265:20)\\n    at OptionManager.mergePresets (/Users/student/Desktop/hungryNow2/node_modules/babel-core/lib/transformation/file/options/option-manager.js:254:10)\\n    at OptionManager.mergeOptions (/Users/student/Desktop/hungryNow2/node_modules/babel-core/lib/transformation/file/options/option-manager.js:239:14)\\n    at OptionManager.init (/Users/student/Desktop/hungryNow2/node_modules/babel-core/lib/transformation/file/options/option-manager.js:359:12)\\n    at File.initOptions (/Users/student/Desktop/hungryNow2/node_modules/babel-core/lib/transformation/file/index.js:221:65)\\n    at new File (/Users/student/Desktop/hungryNow2/node_modules/babel-core/lib/transformation/file/index.js:141:24)\\n    at Pipeline.transform (/Users/student/Desktop/hungryNow2/node_modules/babel-core/lib/transformation/pipeline.js:46:16)\\n    at transpile (/Users/student/Desktop/hungryNow2/node_modules/babel-loader/index.js:38:20)\\n    at Object.module.exports (/Users/student/Desktop/hungryNow2/node_modules/babel-loader/index.js:131:12)\");\n\n//////////////////\n// WEBPACK FOOTER\n// ./js/ClientApp.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./js/ClientApp.js?");

/***/ })
/******/ ]);