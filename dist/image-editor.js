(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ImageEditor", [], factory);
	else if(typeof exports === 'object')
		exports["ImageEditor"] = factory();
	else
		root["ImageEditor"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/image-editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".aff-image-wrapper .has-border {\r\n    border: solid 1px black;\r\n}\r\n.aff-image-wrapper .left-aligned {\r\n    text-align: left;\r\n}\r\n.aff-image-wrapper .centered-aligned {\r\n    text-align: center;\r\n}\r\n.aff-image-wrapper .right-aligned {\r\n    text-align: right;\r\n}\r\n.aff-image-figure {\r\n    max-width: 100%;\r\n}\r\n.aff-image-figure img {\r\n    max-width: 100%;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/image-editor.js":
/*!*****************************!*\
  !*** ./src/image-editor.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * EditorJs Plugin for Image Embedding
 * For block only
 *
 * @typedef {object} ImageData
 * @description Data structure for input and output.
 * @property {string} url - Url of image
 * @property {string} caption - Caption for image
 * @property {string} captionPosition - Position for caption (top, bottom)
 * @property {boolean} hasBorder - Is image has border?
 * @property {string} imageSize - Image size {small, medium, large, full}
 *
 */

var ImageEditor =
/*#__PURE__*/
function () {
  /**
   * Create new plugin and initiate data
   *
   * @param {ImageData}   data    - saved data in JSON
   * @param {object}      config  - user config in
   * @param {object}      api     - EditorJs API
   */
  function ImageEditor(_ref) {
    var data = _ref.data,
        config = _ref.config,
        api = _ref.api;

    _classCallCheck(this, ImageEditor);

    // Setup default
    this.api = api;
    this.data = {
      url: '',
      caption: '',
      captionPosition: 'bottom',
      hasBorder: false,
      imageSize: 'medium'
    };
    this.config = {
      placeholder: 'Paste image URL here...'
    };
    this.settings = [{
      name: 'leftAlign',
      icon: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>'
    }, {
      name: 'centerAlign',
      icon: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>'
    }, {
      name: 'rightAlign',
      icon: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>'
    }, {
      name: 'hasBorder',
      icon: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0.000000,25.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M45 200 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0 -8 -4 -11 -10z"/><path d="M138 203 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/><path d="M185 200 c3 -5 11 -10 16 -10 6 0 7 5 4 10 -3 6 -11 10 -16 10 -6 0 -7 -4 -4 -10z"/><path d="M201 154 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/><path d="M41 104 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/><path d="M201 104 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/><path d="M40 61 c0 -5 5 -13 10 -16 6 -3 10 -2 10 4 0 5 -4 13 -10 16 -5 3 -10 2 -10 -4z"/><path d="M189 53 c-13 -16 -12 -17 4 -4 9 7 17 15 17 17 0 8 -8 3 -21 -13z"/><path d="M88 43 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/><path d="M138 43 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/></g></svg>'
    }, {
      name: 'captionPosition',
      icon: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>'
    }];
    Object.assign(this.data, data);
    Object.assign(this.config, config); // Set element

    this.wrapper = null;
  }

  _createClass(ImageEditor, [{
    key: "render",
    value: function render() {
      console.log('Run: render()');

      this._setup();

      return this.wrapper;
    }
    /*renderSettings() {
        return this._createSetting();
    }*/

  }, {
    key: "validate",
    value: function validate(data) {
      if (!data.url.trim()) {
        return false;
      }

      return true;
    }
  }, {
    key: "_setup",
    value: function _setup() {
      console.log('Run: setup()'); // Setup wrapper

      this._createWrapper();

      if (!!this.data.url) {
        this._createImage();
      } else {
        this._createUrlInput();
      }
    }
  }, {
    key: "_createWrapper",
    value: function _createWrapper() {
      console.log('Run: Wrapper()');
      this.wrapper = document.createElement('div');
      this.wrapper.classList.add('cdx-block');
      this.wrapper.classList.add(ImageEditor.CLASS.wrapper);
    }
  }, {
    key: "_clearWrapper",
    value: function _clearWrapper() {
      if (this.wrapper) {
        this.wrapper.innerHTML = '';
      }
    }
  }, {
    key: "_createUrlInput",
    value: function _createUrlInput() {
      var _this = this;

      console.log('Run: UrlInput()');
      var input = document.createElement('div');
      input.contentEditable = true;
      input.classList.add('cdx-input');
      input.placeholder = 'Coba dulu'; //this.config.placeholder;

      this._clearWrapper();

      this.wrapper.appendChild(input);
      this.api.listeners.on(this.wrapper.childNodes[0], 'blur', function (event) {
        if (!event.target.textContent) {
          console.warn('No file loaded!');
        } else if (event.target.textContent.match(ImageEditor.PATTERN.urlImage) === null) {
          console.warn('Invalid URL!');
        } else {
          _this._createImage();
        }
      });
    }
  }, {
    key: "_createImage",
    value: function _createImage() {
      console.log('Run: createImage()', this.data);
      var fig = document.createElement('figure');
      var img = document.createElement('img');
      var cap = document.createElement('figcaption');
      cap.textContent = !!this.data.caption ? this.data.caption : 'Your label here...';
      cap.contentEditable = true;
      cap.addEventListener('focus', function (ev) {
        ev.target.classList.add('cdx-input');
      });
      cap.addEventListener('blur', function (ev) {
        if (ev.target.textContent === '') {
          ev.target.hidden = true;
        }

        ev.target.classList.remove('cdx-input');
      });
      img.src = !!this.data.url ? this.data.url : this.wrapper.childNodes[0].textContent;
      fig.classList.add(ImageEditor.CLASS.figure);

      this._clearWrapper();

      if (this.data.captionPosition === 'top' && cap.textContent !== '') {
        fig.appendChild(cap);
      }

      fig.appendChild(img);

      if (this.data.captionPosition === 'bottom' && cap.textContent !== '') {
        fig.appendChild(cap);
      }

      this.wrapper.appendChild(fig);
    }
  }, {
    key: "_createSetting",
    value: function _createSetting() {
      var _this2 = this;

      var wrapper = document.createElement('div');

      var _loop = function _loop(i) {
        var button = document.createElement('div');
        button.classList.add('cdx-settings-button');
        button.innerHTML = _this2.settings[i].icon;
        button.addEventListener('click', function () {
          _this2._toggleSetting(_this2.settings[i].name);

          button.classList.toggle('cdx-settings-button--active');
        });
        wrapper.appendChild(button);
      };

      for (var i = 0; i < this.settings.length; i++) {
        _loop(i);
      }

      return wrapper;
    }
  }, {
    key: "_toggleSetting",
    value: function _toggleSetting(name) {
      if (name === this.settings[3].name) {
        this.wrapper.childNodes[0].childNodes[0].classList.toggle('has-border');
      }

      if (name === this.settings[4].name) {
        this.api.blocks.stretchBlock(this.api.blocks.getCurrentBlockIndex(), !!this.data.imageSize);
      }
    }
  }, {
    key: "save",
    value: function save(content) {
      return {
        url: this.data.captionPosition === 'top' ? this.wrapper.childNodes[0].childNodes[1].src : this.wrapper.childNodes[0].childNodes[0].src,
        caption: this.data.captionPosition === 'top' ? this.wrapper.childNodes[0].childNodes[0].textContent : this.wrapper.childNodes[0].childNodes[1].textContent
      };
    }
  }], [{
    key: "toolbox",
    get: function get() {
      return {
        title: 'Embed Image',
        icon: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n' + '    <path d="M3.15 13.628A7.749 7.749 0 0 0 10 17.75a7.74 7.74 0 0 0 6.305-3.242l-2.387-2.127-2.765 2.244-4.389-4.496-3.614 3.5zm-.787-2.303l4.446-4.371 4.52 4.63 2.534-2.057 3.533 2.797c.23-.734.354-1.514.354-2.324a7.75 7.75 0 1 0-15.387 1.325zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"/>\n' + '</svg>'
      };
    }
  }, {
    key: "CLASS",
    get: function get() {
      return {
        wrapper: 'aff-image-wrapper',
        figure: 'aff-image-figure'
      };
    }
  }, {
    key: "PATTERN",
    get: function get() {
      return {
        urlImage: /(http[s]?:\/\/.*?.(jpg|png|gif|svg))/g
      };
    }
  }]);

  return ImageEditor;
}();

/* harmony default export */ __webpack_exports__["default"] = (ImageEditor);

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9JbWFnZUVkaXRvci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSW1hZ2VFZGl0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSW1hZ2VFZGl0b3IvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL0ltYWdlRWRpdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9JbWFnZUVkaXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9JbWFnZUVkaXRvci8uL3NyYy9pbWFnZS1lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSW1hZ2VFZGl0b3IvLi9zcmMvc3R5bGUuY3NzPzcxNjMiXSwibmFtZXMiOlsiSW1hZ2VFZGl0b3IiLCJkYXRhIiwiY29uZmlnIiwiYXBpIiwidXJsIiwiY2FwdGlvbiIsImNhcHRpb25Qb3NpdGlvbiIsImhhc0JvcmRlciIsImltYWdlU2l6ZSIsInBsYWNlaG9sZGVyIiwic2V0dGluZ3MiLCJuYW1lIiwiaWNvbiIsIk9iamVjdCIsImFzc2lnbiIsIndyYXBwZXIiLCJjb25zb2xlIiwibG9nIiwiX3NldHVwIiwidHJpbSIsIl9jcmVhdGVXcmFwcGVyIiwiX2NyZWF0ZUltYWdlIiwiX2NyZWF0ZVVybElucHV0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiQ0xBU1MiLCJpbm5lckhUTUwiLCJpbnB1dCIsImNvbnRlbnRFZGl0YWJsZSIsIl9jbGVhcldyYXBwZXIiLCJhcHBlbmRDaGlsZCIsImxpc3RlbmVycyIsIm9uIiwiY2hpbGROb2RlcyIsImV2ZW50IiwidGFyZ2V0IiwidGV4dENvbnRlbnQiLCJ3YXJuIiwibWF0Y2giLCJQQVRURVJOIiwidXJsSW1hZ2UiLCJmaWciLCJpbWciLCJjYXAiLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJoaWRkZW4iLCJyZW1vdmUiLCJzcmMiLCJmaWd1cmUiLCJpIiwiYnV0dG9uIiwiX3RvZ2dsZVNldHRpbmciLCJ0b2dnbGUiLCJsZW5ndGgiLCJibG9ja3MiLCJzdHJldGNoQmxvY2siLCJnZXRDdXJyZW50QmxvY2tJbmRleCIsImNvbnRlbnQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLG1DQUFtQyxnQ0FBZ0MsS0FBSyxzQ0FBc0MseUJBQXlCLEtBQUssMENBQTBDLDJCQUEyQixLQUFLLHVDQUF1QywwQkFBMEIsS0FBSyx1QkFBdUIsd0JBQXdCLEtBQUssMkJB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QU8sQ0FBQyxrSEFBc0Q7O0FBRXhGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCIiwiZmlsZSI6ImltYWdlLWVkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiSW1hZ2VFZGl0b3JcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSW1hZ2VFZGl0b3JcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSW1hZ2VFZGl0b3JcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2ltYWdlLWVkaXRvci5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYWZmLWltYWdlLXdyYXBwZXIgLmhhcy1ib3JkZXIge1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXHJcXG59XFxyXFxuLmFmZi1pbWFnZS13cmFwcGVyIC5sZWZ0LWFsaWduZWQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG4uYWZmLWltYWdlLXdyYXBwZXIgLmNlbnRlcmVkLWFsaWduZWQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5hZmYtaW1hZ2Utd3JhcHBlciAucmlnaHQtYWxpZ25lZCB7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG4uYWZmLWltYWdlLWZpZ3VyZSB7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmFmZi1pbWFnZS1maWd1cmUgaW1nIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxyXG5cclxuXHJcbi8qKlxyXG4gKiBFZGl0b3JKcyBQbHVnaW4gZm9yIEltYWdlIEVtYmVkZGluZ1xyXG4gKiBGb3IgYmxvY2sgb25seVxyXG4gKlxyXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBJbWFnZURhdGFcclxuICogQGRlc2NyaXB0aW9uIERhdGEgc3RydWN0dXJlIGZvciBpbnB1dCBhbmQgb3V0cHV0LlxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdXJsIC0gVXJsIG9mIGltYWdlXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjYXB0aW9uIC0gQ2FwdGlvbiBmb3IgaW1hZ2VcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGNhcHRpb25Qb3NpdGlvbiAtIFBvc2l0aW9uIGZvciBjYXB0aW9uICh0b3AsIGJvdHRvbSlcclxuICogQHByb3BlcnR5IHtib29sZWFufSBoYXNCb3JkZXIgLSBJcyBpbWFnZSBoYXMgYm9yZGVyP1xyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gaW1hZ2VTaXplIC0gSW1hZ2Ugc2l6ZSB7c21hbGwsIG1lZGl1bSwgbGFyZ2UsIGZ1bGx9XHJcbiAqXHJcbiAqL1xyXG5jbGFzcyBJbWFnZUVkaXRvciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBuZXcgcGx1Z2luIGFuZCBpbml0aWF0ZSBkYXRhXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtJbWFnZURhdGF9ICAgZGF0YSAgICAtIHNhdmVkIGRhdGEgaW4gSlNPTlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9ICAgICAgY29uZmlnICAtIHVzZXIgY29uZmlnIGluXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gICAgICBhcGkgICAgIC0gRWRpdG9ySnMgQVBJXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHtkYXRhLCBjb25maWcsIGFwaX0pIHtcclxuICAgICAgICAvLyBTZXR1cCBkZWZhdWx0XHJcbiAgICAgICAgdGhpcy5hcGkgPSBhcGk7XHJcbiAgICAgICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICAgICAgICB1cmw6ICcnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnJyxcclxuICAgICAgICAgICAgY2FwdGlvblBvc2l0aW9uOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgaGFzQm9yZGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgaW1hZ2VTaXplOiAnbWVkaXVtJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSB7XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnUGFzdGUgaW1hZ2UgVVJMIGhlcmUuLi4nXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldHRpbmdzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnbGVmdEFsaWduJyxcclxuICAgICAgICAgICAgICAgIGljb246ICc8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xNS44IDEwLjU5MnYyLjA0M2gyLjM1djIuMTM4SDE1Ljh2Mi4yMzJoLTIuMjV2LTIuMjMyaC0yLjR2LTIuMTM4aDIuNHYtMi4yOGgyLjI1di4yMzdoMS4xNS0xLjE1ek0xLjkgOC40NTV2LTMuNDJjMC0xLjE1NC45ODUtMi4wOSAyLjItMi4wOWg0LjJ2Mi4xMzdINC4xNXYzLjM3M0gxLjl6bTAgMi4xMzdoMi4yNXYzLjMyNUg4LjN2Mi4xMzhINC4xYy0xLjIxNSAwLTIuMi0uOTM2LTIuMi0yLjA5di0zLjM3M3ptMTUuMDUtMi4xMzdIMTQuN1Y1LjA4MmgtNC4xNVYyLjk0NWg0LjJjMS4yMTUgMCAyLjIuOTM2IDIuMiAyLjA5djMuNDJ6XCIvPjwvc3ZnPidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NlbnRlckFsaWduJyxcclxuICAgICAgICAgICAgICAgIGljb246ICc8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xNS44IDEwLjU5MnYyLjA0M2gyLjM1djIuMTM4SDE1Ljh2Mi4yMzJoLTIuMjV2LTIuMjMyaC0yLjR2LTIuMTM4aDIuNHYtMi4yOGgyLjI1di4yMzdoMS4xNS0xLjE1ek0xLjkgOC40NTV2LTMuNDJjMC0xLjE1NC45ODUtMi4wOSAyLjItMi4wOWg0LjJ2Mi4xMzdINC4xNXYzLjM3M0gxLjl6bTAgMi4xMzdoMi4yNXYzLjMyNUg4LjN2Mi4xMzhINC4xYy0xLjIxNSAwLTIuMi0uOTM2LTIuMi0yLjA5di0zLjM3M3ptMTUuMDUtMi4xMzdIMTQuN1Y1LjA4MmgtNC4xNVYyLjk0NWg0LjJjMS4yMTUgMCAyLjIuOTM2IDIuMiAyLjA5djMuNDJ6XCIvPjwvc3ZnPidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3JpZ2h0QWxpZ24nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJzxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE1LjggMTAuNTkydjIuMDQzaDIuMzV2Mi4xMzhIMTUuOHYyLjIzMmgtMi4yNXYtMi4yMzJoLTIuNHYtMi4xMzhoMi40di0yLjI4aDIuMjV2LjIzN2gxLjE1LTEuMTV6TTEuOSA4LjQ1NXYtMy40MmMwLTEuMTU0Ljk4NS0yLjA5IDIuMi0yLjA5aDQuMnYyLjEzN0g0LjE1djMuMzczSDEuOXptMCAyLjEzN2gyLjI1djMuMzI1SDguM3YyLjEzOEg0LjFjLTEuMjE1IDAtMi4yLS45MzYtMi4yLTIuMDl2LTMuMzczem0xNS4wNS0yLjEzN0gxNC43VjUuMDgyaC00LjE1VjIuOTQ1aDQuMmMxLjIxNSAwIDIuMi45MzYgMi4yIDIuMDl2My40MnpcIi8+PC9zdmc+J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnaGFzQm9yZGVyJyxcclxuICAgICAgICAgICAgICAgIGljb246ICc8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLDI1LjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKVwiIGZpbGw9XCIjMDAwMDAwXCIgc3Ryb2tlPVwibm9uZVwiPjxwYXRoIGQ9XCJNNDUgMjAwIGMtMyAtNSAtMSAtMTAgNCAtMTAgNiAwIDExIDUgMTEgMTAgMCA2IC0yIDEwIC00IDEwIC0zIDAgLTggLTQgLTExIC0xMHpcIi8+PHBhdGggZD1cIk0xMzggMjAzIGM3IC0zIDE2IC0yIDE5IDEgNCAzIC0yIDYgLTEzIDUgLTExIDAgLTE0IC0zIC02IC02elwiLz48cGF0aCBkPVwiTTE4NSAyMDAgYzMgLTUgMTEgLTEwIDE2IC0xMCA2IDAgNyA1IDQgMTAgLTMgNiAtMTEgMTAgLTE2IDEwIC02IDAgLTcgLTQgLTQgLTEwelwiLz48cGF0aCBkPVwiTTIwMSAxNTQgYzAgLTExIDMgLTE0IDYgLTYgMyA3IDIgMTYgLTEgMTkgLTMgNCAtNiAtMiAtNSAtMTN6XCIvPjxwYXRoIGQ9XCJNNDEgMTA0IGMwIC0xMSAzIC0xNCA2IC02IDMgNyAyIDE2IC0xIDE5IC0zIDQgLTYgLTIgLTUgLTEzelwiLz48cGF0aCBkPVwiTTIwMSAxMDQgYzAgLTExIDMgLTE0IDYgLTYgMyA3IDIgMTYgLTEgMTkgLTMgNCAtNiAtMiAtNSAtMTN6XCIvPjxwYXRoIGQ9XCJNNDAgNjEgYzAgLTUgNSAtMTMgMTAgLTE2IDYgLTMgMTAgLTIgMTAgNCAwIDUgLTQgMTMgLTEwIDE2IC01IDMgLTEwIDIgLTEwIC00elwiLz48cGF0aCBkPVwiTTE4OSA1MyBjLTEzIC0xNiAtMTIgLTE3IDQgLTQgOSA3IDE3IDE1IDE3IDE3IDAgOCAtOCAzIC0yMSAtMTN6XCIvPjxwYXRoIGQ9XCJNODggNDMgYzcgLTMgMTYgLTIgMTkgMSA0IDMgLTIgNiAtMTMgNSAtMTEgMCAtMTQgLTMgLTYgLTZ6XCIvPjxwYXRoIGQ9XCJNMTM4IDQzIGM3IC0zIDE2IC0yIDE5IDEgNCAzIC0yIDYgLTEzIDUgLTExIDAgLTE0IC0zIC02IC02elwiLz48L2c+PC9zdmc+J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2FwdGlvblBvc2l0aW9uJyxcclxuICAgICAgICAgICAgICAgIGljb246ICc8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xNS44IDEwLjU5MnYyLjA0M2gyLjM1djIuMTM4SDE1Ljh2Mi4yMzJoLTIuMjV2LTIuMjMyaC0yLjR2LTIuMTM4aDIuNHYtMi4yOGgyLjI1di4yMzdoMS4xNS0xLjE1ek0xLjkgOC40NTV2LTMuNDJjMC0xLjE1NC45ODUtMi4wOSAyLjItMi4wOWg0LjJ2Mi4xMzdINC4xNXYzLjM3M0gxLjl6bTAgMi4xMzdoMi4yNXYzLjMyNUg4LjN2Mi4xMzhINC4xYy0xLjIxNSAwLTIuMi0uOTM2LTIuMi0yLjA5di0zLjM3M3ptMTUuMDUtMi4xMzdIMTQuN1Y1LjA4MmgtNC4xNVYyLjk0NWg0LjJjMS4yMTUgMCAyLjIuOTM2IDIuMiAyLjA5djMuNDJ6XCIvPjwvc3ZnPidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhLCBkYXRhKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBjb25maWcpO1xyXG5cclxuICAgICAgICAvLyBTZXQgZWxlbWVudFxyXG4gICAgICAgIHRoaXMud3JhcHBlciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSdW46IHJlbmRlcigpJyk7XHJcbiAgICAgICAgdGhpcy5fc2V0dXAoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy53cmFwcGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qcmVuZGVyU2V0dGluZ3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVNldHRpbmcoKTtcclxuICAgIH0qL1xyXG5cclxuICAgIHZhbGlkYXRlKGRhdGEpIHtcclxuICAgICAgICBpZiggIWRhdGEudXJsLnRyaW0oKSApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0dXAoKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSdW46IHNldHVwKCknKTtcclxuICAgICAgICAvLyBTZXR1cCB3cmFwcGVyXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlV3JhcHBlcigpO1xyXG5cclxuICAgICAgICBpZiggISF0aGlzLmRhdGEudXJsICkge1xyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVJbWFnZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVVybElucHV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9jcmVhdGVXcmFwcGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSdW46IFdyYXBwZXIoKScpO1xyXG4gICAgICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjZHgtYmxvY2snKTtcclxuICAgICAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZChJbWFnZUVkaXRvci5DTEFTUy53cmFwcGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBfY2xlYXJXcmFwcGVyKCkge1xyXG4gICAgICAgIGlmKCB0aGlzLndyYXBwZXIgKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZVVybElucHV0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSdW46IFVybElucHV0KCknKTtcclxuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpbnB1dC5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2NkeC1pbnB1dCcpO1xyXG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gJ0NvYmEgZHVsdSc7IC8vdGhpcy5jb25maWcucGxhY2Vob2xkZXI7XHJcblxyXG4gICAgICAgIHRoaXMuX2NsZWFyV3JhcHBlcigpO1xyXG4gICAgICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZChpbnB1dCk7XHJcblxyXG4gICAgICAgIHRoaXMuYXBpLmxpc3RlbmVycy5vbih0aGlzLndyYXBwZXIuY2hpbGROb2Rlc1swXSwgJ2JsdXInLCAoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiggIWV2ZW50LnRhcmdldC50ZXh0Q29udGVudCApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTm8gZmlsZSBsb2FkZWQhJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiggZXZlbnQudGFyZ2V0LnRleHRDb250ZW50Lm1hdGNoKEltYWdlRWRpdG9yLlBBVFRFUk4udXJsSW1hZ2UpID09PSBudWxsICkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIFVSTCEnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUltYWdlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZUltYWdlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSdW46IGNyZWF0ZUltYWdlKCknLCB0aGlzLmRhdGEpO1xyXG4gICAgICAgIGxldCBmaWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWd1cmUnKTtcclxuICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgbGV0IGNhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ2NhcHRpb24nKTtcclxuXHJcbiAgICAgICAgY2FwLnRleHRDb250ZW50ID0gISF0aGlzLmRhdGEuY2FwdGlvbiA/IHRoaXMuZGF0YS5jYXB0aW9uIDogJ1lvdXIgbGFiZWwgaGVyZS4uLic7XHJcbiAgICAgICAgY2FwLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGNhcC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIChldiA9PiB7XHJcbiAgICAgICAgICAgIGV2LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjZHgtaW5wdXQnKTtcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIGNhcC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGV2ID0+IHtcclxuICAgICAgICAgICAgaWYoIGV2LnRhcmdldC50ZXh0Q29udGVudCA9PT0gJycgKSB7XHJcbiAgICAgICAgICAgICAgICBldi50YXJnZXQuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBldi50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2R4LWlucHV0Jyk7XHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICBpbWcuc3JjID0gISF0aGlzLmRhdGEudXJsID8gdGhpcy5kYXRhLnVybCA6IHRoaXMud3JhcHBlci5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50O1xyXG4gICAgICAgIGZpZy5jbGFzc0xpc3QuYWRkKEltYWdlRWRpdG9yLkNMQVNTLmZpZ3VyZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NsZWFyV3JhcHBlcigpO1xyXG5cclxuICAgICAgICBpZiggdGhpcy5kYXRhLmNhcHRpb25Qb3NpdGlvbiA9PT0gJ3RvcCcgJiYgY2FwLnRleHRDb250ZW50ICE9PSAnJyApIHtcclxuICAgICAgICAgICAgZmlnLmFwcGVuZENoaWxkKGNhcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpZy5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgIGlmKCB0aGlzLmRhdGEuY2FwdGlvblBvc2l0aW9uID09PSAnYm90dG9tJyAmJiBjYXAudGV4dENvbnRlbnQgIT09ICcnICkge1xyXG4gICAgICAgICAgICBmaWcuYXBwZW5kQ2hpbGQoY2FwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZChmaWcpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jcmVhdGVTZXR0aW5nKCkge1xyXG4gICAgICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZXR0aW5ncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjZHgtc2V0dGluZ3MtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSB0aGlzLnNldHRpbmdzW2ldLmljb247XHJcblxyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90b2dnbGVTZXR0aW5nKHRoaXMuc2V0dGluZ3NbaV0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnY2R4LXNldHRpbmdzLWJ1dHRvbi0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHdyYXBwZXI7XHJcbiAgICB9XHJcblxyXG4gICAgX3RvZ2dsZVNldHRpbmcobmFtZSkge1xyXG4gICAgICAgIGlmKCBuYW1lID09PSB0aGlzLnNldHRpbmdzWzNdLm5hbWUgKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LnRvZ2dsZSgnaGFzLWJvcmRlcicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCBuYW1lID09PSB0aGlzLnNldHRpbmdzWzRdLm5hbWUgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBpLmJsb2Nrcy5zdHJldGNoQmxvY2sodGhpcy5hcGkuYmxvY2tzLmdldEN1cnJlbnRCbG9ja0luZGV4KCksICEhdGhpcy5kYXRhLmltYWdlU2l6ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZShjb250ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXJsOiB0aGlzLmRhdGEuY2FwdGlvblBvc2l0aW9uID09PSAndG9wJyA/IHRoaXMud3JhcHBlci5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV0uc3JjIDogdGhpcy53cmFwcGVyLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5zcmMsXHJcbiAgICAgICAgICAgIGNhcHRpb246IHRoaXMuZGF0YS5jYXB0aW9uUG9zaXRpb24gPT09ICd0b3AnID8gdGhpcy53cmFwcGVyLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA6IHRoaXMud3JhcHBlci5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgdG9vbGJveCgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0VtYmVkIEltYWdlJyxcclxuICAgICAgICAgICAgaWNvbjogJzxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPHBhdGggZD1cIk0zLjE1IDEzLjYyOEE3Ljc0OSA3Ljc0OSAwIDAgMCAxMCAxNy43NWE3Ljc0IDcuNzQgMCAwIDAgNi4zMDUtMy4yNDJsLTIuMzg3LTIuMTI3LTIuNzY1IDIuMjQ0LTQuMzg5LTQuNDk2LTMuNjE0IDMuNXptLS43ODctMi4zMDNsNC40NDYtNC4zNzEgNC41MiA0LjYzIDIuNTM0LTIuMDU3IDMuNTMzIDIuNzk3Yy4yMy0uNzM0LjM1NC0xLjUxNC4zNTQtMi4zMjRhNy43NSA3Ljc1IDAgMSAwLTE1LjM4NyAxLjMyNXpNMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTAtNC40NzcgMTAtMTAgMTB6XCIvPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJzwvc3ZnPidcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQ0xBU1MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgd3JhcHBlcjogJ2FmZi1pbWFnZS13cmFwcGVyJyxcclxuICAgICAgICAgICAgZmlndXJlOiAnYWZmLWltYWdlLWZpZ3VyZScsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IFBBVFRFUk4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXJsSW1hZ2U6IC8oaHR0cFtzXT86XFwvXFwvLio/LihqcGd8cG5nfGdpZnxzdmcpKS9nXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUVkaXRvcjsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=