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
exports.push([module.i, ".aff-image-content .has-border {\r\n    border: solid 1px black;\r\n}\r\n.aff-image-content .left-aligned {\r\n    text-align: left;\r\n}\r\n.aff-image-content .center-aligned {\r\n    text-align: center;\r\n}\r\n.aff-image-content .right-aligned {\r\n    text-align: right;\r\n}\r\n.aff-image-figure {\r\n    max-width: 100%;\r\n}\r\n.aff-image-figure img {\r\n    max-width: 100%;\r\n}\r\n.aff-image-figure figcaption {\r\n    color: #525252;\r\n}\r\n.aff-image-setting i {\r\n    margin: 8px auto;\r\n}", ""]);
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
 * ©2020 affandes@gmail.com
 *
 * @typedef {object} ImageData
 * @description Data structure for input and output.
 * @property {string} url - Url of image
 * @property {string} caption - Caption for image
 * @property {boolean} hasCaption - Is show caption?
 * @property {boolean} hasBorder - Is image has border?
 * @property {string} align - Image alignment {left, center, right}
 *
 */

var ImageEditor =
/*#__PURE__*/
function () {
  /**
   * Create new plugin and initiate data
   *
   * @param {ImageData}   data    - saved data in JSON
   * @param {object}      api     - EditorJs API
   * @param {object}      config  - user config in
   */
  function ImageEditor(_ref) {
    var data = _ref.data,
        api = _ref.api,
        config = _ref.config;

    _classCallCheck(this, ImageEditor);

    this.api = api;
    this.data = {
      url: '',
      caption: '',
      hasCaption: true,
      hasBorder: false,
      align: 'left'
    };
    this.config = {
      placeholder: 'Paste image URL here...',
      urlPatterns: null
    };
    this.settingsButton = [{
      name: 'leftAlign',
      icon: '<i class="fas fa-fw fa-align-left"></i>'
    }, {
      name: 'centerAlign',
      icon: '<i class="fas fa-fw fa-align-center"></i>'
    }, {
      name: 'rightAlign',
      icon: '<i class="fas fa-fw fa-align-right"></i>'
    }, {
      name: 'hasBorder',
      icon: '<i class="fas fa-fw fa-border-style"></i>'
    }, {
      name: 'hasCaption',
      icon: '<i class="fas fa-fw fa-closed-captioning"></i>'
    }];
    Object.assign(this.data, data);
    Object.assign(this.config, config);
    this.content = null;
    this.input = null;
    this.image = null;
    this.caption = null;
    this.settings = null;
  }

  _createClass(ImageEditor, [{
    key: "render",
    value: function render() {
      this._setup();

      return this.content;
    }
  }, {
    key: "renderSettings",
    value: function renderSettings() {
      return this._setupSettings();
    }
  }, {
    key: "validate",
    value: function validate(data) {
      return this._isValidImageURL(data.url);
    }
  }, {
    key: "_setup",
    value: function _setup() {
      this.content = this._createContent();
    }
  }, {
    key: "_createContent",
    value: function _createContent() {
      var content = document.createElement('div');
      content.classList.add('cdx-block');
      content.classList.add(ImageEditor.CLASS.content);

      var inputBlock = this._createInputBlock();

      var imageBlock = this._createImageBlock();

      content.appendChild(inputBlock);
      content.appendChild(imageBlock);
      return content;
    }
  }, {
    key: "_createInputBlock",
    value: function _createInputBlock() {
      var _this = this;

      var hasValidImageUrl = this._isValidImageURL(this.data.url);

      this.input = document.createElement('div');
      this.input.classList.add('cdx-input');
      this.input.contentEditable = true;
      this.input.placeholder = 'Paste image URL here...';
      this.input.textContent = this.data.url;
      this.api.listeners.on(this.input, 'blur', function (event) {
        var imageUrl = event.target.textContent;

        if (!_this._isValidImageURL(imageUrl)) {
          console.log('============');
        } else {
          _this._showImage(imageUrl);
        }
      });
      var wrapper = document.createElement('div');
      wrapper.classList.add(ImageEditor.CLASS.input);
      wrapper.hidden = hasValidImageUrl;
      wrapper.appendChild(this.input);
      return wrapper;
    }
  }, {
    key: "_createImageBlock",
    value: function _createImageBlock() {
      var hasValidImageUrl = this._isValidImageURL(this.data.url);

      var fig = document.createElement('figure');
      fig.classList.add(ImageEditor.CLASS.image);

      if (this.data.align === 'left') {
        fig.classList.add(ImageEditor.CLASS.align[0]);
      } else if (this.data.align === 'center') {
        fig.classList.add(ImageEditor.CLASS.align[1]);
      } else if (this.data.align === 'right') {
        fig.classList.add(ImageEditor.CLASS.align[2]);
      }

      fig.hidden = !hasValidImageUrl;
      this.image = document.createElement('img');
      this.image.src = this.data.url;
      this.caption = document.createElement('figcaption');
      this.caption.contentEditable = true;
      this.caption.textContent = this.data.caption;
      this.caption.hidden = !this.data.hasCaption;
      this.api.listeners.on(this.caption, 'focus', function (event) {
        var elm = event.target;
        elm.classList.add('cdx-input');
      });
      this.api.listeners.on(this.caption, 'blur', function (event) {
        var elm = event.target;
        elm.classList.remove('cdx-input');
      });
      fig.appendChild(this.image);
      fig.appendChild(this.caption);
      return fig;
    }
  }, {
    key: "_showImage",
    value: function _showImage(url) {
      this.image.src = url;
      this.caption.textContent = 'Your label here...';
      var imageBlock = this.image.parentNode;
      imageBlock.hidden = false;
      var inputBlock = this.input.parentNode;
      inputBlock.hidden = true;
    }
  }, {
    key: "_setupSettings",
    value: function _setupSettings() {
      var _this2 = this;

      this.settings = document.createElement('div');
      this.settings.classList.add(ImageEditor.CLASS.setting);
      this.settings.hidden = !this.input.parentNode.hidden;

      var _loop = function _loop(i) {
        var button = document.createElement('div');
        button.classList.add('cdx-settings-button');
        button.innerHTML = _this2.settingsButton[i].icon;

        if (i === 0 && _this2.data.align === 'left' || i === 1 && _this2.data.align === 'center' || i === 2 && _this2.data.align === 'right' || i === 3 && _this2.data.hasBorder || i === 4 && _this2.data.hasCaption) {
          button.classList.add('cdx-settings-button--active');
        }

        button.addEventListener('click', function (ev) {
          _this2._toggleSetting(ev, i);
        });

        _this2.settings.appendChild(button);
      };

      for (var i = 0; i < this.settingsButton.length; i++) {
        _loop(i);
      }

      return this.settings;
    }
  }, {
    key: "_toggleSetting",
    value: function _toggleSetting(event, id) {
      switch (id) {
        case 0:
        case 1:
        case 2:
          this._setImageAlign(event, id);

          break;

        case 3:
          this._setBorder(event);

          break;

        case 4:
          this._showCaption(event);

          break;
      }
    }
  }, {
    key: "_setImageAlign",
    value: function _setImageAlign(event, id) {
      var settings = this.settings.childNodes;
      var imageParent = this.image.parentNode;

      for (var i = 0; i < 3; i++) {
        settings[i].classList.remove('cdx-settings-button--active');
        imageParent.classList.remove(ImageEditor.CLASS.align[i]);
      }

      settings[id].classList.add('cdx-settings-button--active');
      imageParent.classList.add(ImageEditor.CLASS.align[id]);
    }
  }, {
    key: "_setBorder",
    value: function _setBorder(event) {
      var target = event.target.tagName === 'I' ? event.target.parentNode : event.target;
      target.classList.toggle('cdx-settings-button--active');
      this.image.classList.toggle('has-border');
    }
  }, {
    key: "_showCaption",
    value: function _showCaption(event) {
      var target = event.target.tagName === 'I' ? event.target.parentNode : event.target;
      target.classList.toggle('cdx-settings-button--active');
      this.caption.hidden = !this.caption.hidden;
    }
  }, {
    key: "_isValidImageURL",
    value: function _isValidImageURL(url) {
      if (undefined === url || null === url) {
        console.log('URL is undefined or null!');
        return false;
      } else if ('' === url) {
        console.log('URL is empty!');
        return false;
      } else {
        console.log('Validating URL Pattern');

        if (this.config.urlPatterns === null) {
          console.log('Default pattern...');

          if (url.match(ImageEditor.PATTERN.urlImage) === null) {
            return false;
          }
        } else if (typeof this.config.urlPatterns.test === 'function') {
          console.log('Custom pattern...');

          if (url.match(this.config.urlPatterns) === null) {
            return false;
          }
        } else if (typeof this.config.urlPatterns.push === 'function') {
          console.log('Custom patterns...');
          var isValid = false;

          for (var i = 0; i < this.config.urlPatterns.length; i++) {
            if (url.match(this.config.urlPatterns[i]) !== null) {
              isValid = true;
              break;
            }
          }

          return isValid;
        }

        console.log('Else pattern...');
        return true;
      }
    }
  }, {
    key: "save",
    value: function save(content) {
      var imageParent = this.image.parentNode;
      var align = imageParent.classList.contains('left-aligned') ? 'left' : imageParent.classList.contains('center-aligned') ? 'center' : imageParent.classList.contains('right-aligned') ? 'right' : '';
      return {
        url: this.input.textContent,
        caption: this.caption.textContent,
        hasCaption: !this.caption.hidden,
        hasBorder: this.image.classList.contains('has-border'),
        align: align
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
        content: 'aff-image-content',
        input: 'aff-image-input',
        image: 'aff-image-figure',
        label: 'aff-image-caption',
        setting: 'aff-image-setting',
        align: ['left-aligned', 'center-aligned', 'right-aligned']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9JbWFnZUVkaXRvci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSW1hZ2VFZGl0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSW1hZ2VFZGl0b3IvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL0ltYWdlRWRpdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9JbWFnZUVkaXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9JbWFnZUVkaXRvci8uL3NyYy9pbWFnZS1lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSW1hZ2VFZGl0b3IvLi9zcmMvc3R5bGUuY3NzPzcxNjMiXSwibmFtZXMiOlsiSW1hZ2VFZGl0b3IiLCJkYXRhIiwiYXBpIiwiY29uZmlnIiwidXJsIiwiY2FwdGlvbiIsImhhc0NhcHRpb24iLCJoYXNCb3JkZXIiLCJhbGlnbiIsInBsYWNlaG9sZGVyIiwidXJsUGF0dGVybnMiLCJzZXR0aW5nc0J1dHRvbiIsIm5hbWUiLCJpY29uIiwiT2JqZWN0IiwiYXNzaWduIiwiY29udGVudCIsImlucHV0IiwiaW1hZ2UiLCJzZXR0aW5ncyIsIl9zZXR1cCIsIl9zZXR1cFNldHRpbmdzIiwiX2lzVmFsaWRJbWFnZVVSTCIsIl9jcmVhdGVDb250ZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiQ0xBU1MiLCJpbnB1dEJsb2NrIiwiX2NyZWF0ZUlucHV0QmxvY2siLCJpbWFnZUJsb2NrIiwiX2NyZWF0ZUltYWdlQmxvY2siLCJhcHBlbmRDaGlsZCIsImhhc1ZhbGlkSW1hZ2VVcmwiLCJjb250ZW50RWRpdGFibGUiLCJ0ZXh0Q29udGVudCIsImxpc3RlbmVycyIsIm9uIiwiZXZlbnQiLCJpbWFnZVVybCIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJfc2hvd0ltYWdlIiwid3JhcHBlciIsImhpZGRlbiIsImZpZyIsInNyYyIsImVsbSIsInJlbW92ZSIsInBhcmVudE5vZGUiLCJzZXR0aW5nIiwiaSIsImJ1dHRvbiIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsIl90b2dnbGVTZXR0aW5nIiwibGVuZ3RoIiwiaWQiLCJfc2V0SW1hZ2VBbGlnbiIsIl9zZXRCb3JkZXIiLCJfc2hvd0NhcHRpb24iLCJjaGlsZE5vZGVzIiwiaW1hZ2VQYXJlbnQiLCJ0YWdOYW1lIiwidG9nZ2xlIiwidW5kZWZpbmVkIiwibWF0Y2giLCJQQVRURVJOIiwidXJsSW1hZ2UiLCJ0ZXN0IiwicHVzaCIsImlzVmFsaWQiLCJjb250YWlucyIsInRpdGxlIiwibGFiZWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0Qs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QixtQkFBTyxDQUFDLGtIQUFzRDs7QUFFeEY7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEIiLCJmaWxlIjoiaW1hZ2UtZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJJbWFnZUVkaXRvclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJJbWFnZUVkaXRvclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJJbWFnZUVkaXRvclwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW1hZ2UtZWRpdG9yLmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5hZmYtaW1hZ2UtY29udGVudCAuaGFzLWJvcmRlciB7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcclxcbn1cXHJcXG4uYWZmLWltYWdlLWNvbnRlbnQgLmxlZnQtYWxpZ25lZCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbi5hZmYtaW1hZ2UtY29udGVudCAuY2VudGVyLWFsaWduZWQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5hZmYtaW1hZ2UtY29udGVudCAucmlnaHQtYWxpZ25lZCB7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG4uYWZmLWltYWdlLWZpZ3VyZSB7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmFmZi1pbWFnZS1maWd1cmUgaW1nIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uYWZmLWltYWdlLWZpZ3VyZSBmaWdjYXB0aW9uIHtcXHJcXG4gICAgY29sb3I6ICM1MjUyNTI7XFxyXFxufVxcclxcbi5hZmYtaW1hZ2Utc2V0dGluZyBpIHtcXHJcXG4gICAgbWFyZ2luOiA4cHggYXV0bztcXHJcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcclxuXHJcblxyXG4vKipcclxuICogRWRpdG9ySnMgUGx1Z2luIGZvciBJbWFnZSBFbWJlZGRpbmdcclxuICogRm9yIGJsb2NrIG9ubHlcclxuICogwqkyMDIwIGFmZmFuZGVzQGdtYWlsLmNvbVxyXG4gKlxyXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBJbWFnZURhdGFcclxuICogQGRlc2NyaXB0aW9uIERhdGEgc3RydWN0dXJlIGZvciBpbnB1dCBhbmQgb3V0cHV0LlxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdXJsIC0gVXJsIG9mIGltYWdlXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjYXB0aW9uIC0gQ2FwdGlvbiBmb3IgaW1hZ2VcclxuICogQHByb3BlcnR5IHtib29sZWFufSBoYXNDYXB0aW9uIC0gSXMgc2hvdyBjYXB0aW9uP1xyXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGhhc0JvcmRlciAtIElzIGltYWdlIGhhcyBib3JkZXI/XHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBhbGlnbiAtIEltYWdlIGFsaWdubWVudCB7bGVmdCwgY2VudGVyLCByaWdodH1cclxuICpcclxuICovXHJcbmNsYXNzIEltYWdlRWRpdG9yIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIG5ldyBwbHVnaW4gYW5kIGluaXRpYXRlIGRhdGFcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0ltYWdlRGF0YX0gICBkYXRhICAgIC0gc2F2ZWQgZGF0YSBpbiBKU09OXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gICAgICBhcGkgICAgIC0gRWRpdG9ySnMgQVBJXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gICAgICBjb25maWcgIC0gdXNlciBjb25maWcgaW5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioe2RhdGEsIGFwaSwgY29uZmlnfSkge1xyXG4gICAgICAgIHRoaXMuYXBpID0gYXBpO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IHtcclxuICAgICAgICAgICAgdXJsOiAnJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJycsXHJcbiAgICAgICAgICAgIGhhc0NhcHRpb246IHRydWUsXHJcbiAgICAgICAgICAgIGhhc0JvcmRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGFsaWduOiAnbGVmdCdcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0ge1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1Bhc3RlIGltYWdlIFVSTCBoZXJlLi4uJyxcclxuICAgICAgICAgICAgdXJsUGF0dGVybnM6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NCdXR0b24gPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdsZWZ0QWxpZ24nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJzxpIGNsYXNzPVwiZmFzIGZhLWZ3IGZhLWFsaWduLWxlZnRcIj48L2k+J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2VudGVyQWxpZ24nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJzxpIGNsYXNzPVwiZmFzIGZhLWZ3IGZhLWFsaWduLWNlbnRlclwiPjwvaT4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdyaWdodEFsaWduJyxcclxuICAgICAgICAgICAgICAgIGljb246ICc8aSBjbGFzcz1cImZhcyBmYS1mdyBmYS1hbGlnbi1yaWdodFwiPjwvaT4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdoYXNCb3JkZXInLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJzxpIGNsYXNzPVwiZmFzIGZhLWZ3IGZhLWJvcmRlci1zdHlsZVwiPjwvaT4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdoYXNDYXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIGljb246ICc8aSBjbGFzcz1cImZhcyBmYS1mdyBmYS1jbG9zZWQtY2FwdGlvbmluZ1wiPjwvaT4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuZGF0YSwgZGF0YSk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZywgY29uZmlnKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlucHV0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmltYWdlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNhcHRpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLl9zZXR1cCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU2V0dGluZ3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHVwU2V0dGluZ3MoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZShkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVmFsaWRJbWFnZVVSTChkYXRhLnVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldHVwKCkge1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuX2NyZWF0ZUNvbnRlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBfY3JlYXRlQ29udGVudCgpIHtcclxuICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY2R4LWJsb2NrJyk7XHJcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKEltYWdlRWRpdG9yLkNMQVNTLmNvbnRlbnQpO1xyXG5cclxuICAgICAgICBsZXQgaW5wdXRCbG9jayA9IHRoaXMuX2NyZWF0ZUlucHV0QmxvY2soKTtcclxuICAgICAgICBsZXQgaW1hZ2VCbG9jayA9IHRoaXMuX2NyZWF0ZUltYWdlQmxvY2soKTtcclxuXHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChpbnB1dEJsb2NrKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGltYWdlQmxvY2spO1xyXG5cclxuICAgICAgICByZXR1cm4gY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBfY3JlYXRlSW5wdXRCbG9jaygpIHtcclxuICAgICAgICBsZXQgaGFzVmFsaWRJbWFnZVVybCA9IHRoaXMuX2lzVmFsaWRJbWFnZVVSTCh0aGlzLmRhdGEudXJsKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQuY2xhc3NMaXN0LmFkZCgnY2R4LWlucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaW5wdXQucGxhY2Vob2xkZXIgPSAnUGFzdGUgaW1hZ2UgVVJMIGhlcmUuLi4nO1xyXG4gICAgICAgIHRoaXMuaW5wdXQudGV4dENvbnRlbnQgPSB0aGlzLmRhdGEudXJsO1xyXG5cclxuICAgICAgICB0aGlzLmFwaS5saXN0ZW5lcnMub24odGhpcy5pbnB1dCwgJ2JsdXInLCAoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW1hZ2VVcmwgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGlmKCAhdGhpcy5faXNWYWxpZEltYWdlVVJMKGltYWdlVXJsKSApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT0nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dJbWFnZShpbWFnZVVybCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKEltYWdlRWRpdG9yLkNMQVNTLmlucHV0KTtcclxuICAgICAgICB3cmFwcGVyLmhpZGRlbiA9IGhhc1ZhbGlkSW1hZ2VVcmw7XHJcblxyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XHJcblxyXG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xyXG4gICAgfVxyXG5cclxuICAgIF9jcmVhdGVJbWFnZUJsb2NrKCkge1xyXG4gICAgICAgIGxldCBoYXNWYWxpZEltYWdlVXJsID0gdGhpcy5faXNWYWxpZEltYWdlVVJMKHRoaXMuZGF0YS51cmwpO1xyXG5cclxuICAgICAgICBsZXQgZmlnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmlndXJlJyk7XHJcbiAgICAgICAgZmlnLmNsYXNzTGlzdC5hZGQoSW1hZ2VFZGl0b3IuQ0xBU1MuaW1hZ2UpO1xyXG4gICAgICAgIGlmKCB0aGlzLmRhdGEuYWxpZ24gPT09ICdsZWZ0JyApIHtcclxuICAgICAgICAgICAgZmlnLmNsYXNzTGlzdC5hZGQoSW1hZ2VFZGl0b3IuQ0xBU1MuYWxpZ25bMF0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiggdGhpcy5kYXRhLmFsaWduID09PSAnY2VudGVyJyApIHtcclxuICAgICAgICAgICAgZmlnLmNsYXNzTGlzdC5hZGQoSW1hZ2VFZGl0b3IuQ0xBU1MuYWxpZ25bMV0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiggdGhpcy5kYXRhLmFsaWduID09PSAncmlnaHQnICkge1xyXG4gICAgICAgICAgICBmaWcuY2xhc3NMaXN0LmFkZChJbWFnZUVkaXRvci5DTEFTUy5hbGlnblsyXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpZy5oaWRkZW4gPSAhaGFzVmFsaWRJbWFnZVVybDtcclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gdGhpcy5kYXRhLnVybDtcclxuXHJcbiAgICAgICAgdGhpcy5jYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmlnY2FwdGlvbicpO1xyXG4gICAgICAgIHRoaXMuY2FwdGlvbi5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2FwdGlvbi50ZXh0Q29udGVudCA9IHRoaXMuZGF0YS5jYXB0aW9uO1xyXG4gICAgICAgIHRoaXMuY2FwdGlvbi5oaWRkZW4gPSAhdGhpcy5kYXRhLmhhc0NhcHRpb247XHJcblxyXG4gICAgICAgIHRoaXMuYXBpLmxpc3RlbmVycy5vbih0aGlzLmNhcHRpb24sICdmb2N1cycsIChldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBlbG0gPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QuYWRkKCdjZHgtaW5wdXQnKTtcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXBpLmxpc3RlbmVycy5vbih0aGlzLmNhcHRpb24sICdibHVyJywgKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IGVsbSA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5yZW1vdmUoJ2NkeC1pbnB1dCcpO1xyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgZmlnLmFwcGVuZENoaWxkKHRoaXMuaW1hZ2UpO1xyXG4gICAgICAgIGZpZy5hcHBlbmRDaGlsZCh0aGlzLmNhcHRpb24pO1xyXG5cclxuICAgICAgICByZXR1cm4gZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIF9zaG93SW1hZ2UodXJsKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5jYXB0aW9uLnRleHRDb250ZW50ID0gJ1lvdXIgbGFiZWwgaGVyZS4uLic7XHJcblxyXG4gICAgICAgIGxldCBpbWFnZUJsb2NrID0gdGhpcy5pbWFnZS5wYXJlbnROb2RlO1xyXG4gICAgICAgIGltYWdlQmxvY2suaGlkZGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBpbnB1dEJsb2NrID0gdGhpcy5pbnB1dC5wYXJlbnROb2RlO1xyXG4gICAgICAgIGlucHV0QmxvY2suaGlkZGVuID0gdHJ1ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgX3NldHVwU2V0dGluZ3MoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY2xhc3NMaXN0LmFkZChJbWFnZUVkaXRvci5DTEFTUy5zZXR0aW5nKTtcclxuICAgICAgICB0aGlzLnNldHRpbmdzLmhpZGRlbiA9ICF0aGlzLmlucHV0LnBhcmVudE5vZGUuaGlkZGVuO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2V0dGluZ3NCdXR0b24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnY2R4LXNldHRpbmdzLWJ1dHRvbicpO1xyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gdGhpcy5zZXR0aW5nc0J1dHRvbltpXS5pY29uO1xyXG5cclxuICAgICAgICAgICAgaWYoXHJcbiAgICAgICAgICAgICAgICAoaSA9PT0gMCAmJiB0aGlzLmRhdGEuYWxpZ24gPT09ICdsZWZ0JylcclxuICAgICAgICAgICAgICAgIHx8IChpID09PSAxICYmIHRoaXMuZGF0YS5hbGlnbiA9PT0gJ2NlbnRlcicpXHJcbiAgICAgICAgICAgICAgICB8fCAoaSA9PT0gMiAmJiB0aGlzLmRhdGEuYWxpZ24gPT09ICdyaWdodCcpXHJcbiAgICAgICAgICAgICAgICB8fCAoaSA9PT0gMyAmJiB0aGlzLmRhdGEuaGFzQm9yZGVyKVxyXG4gICAgICAgICAgICAgICAgfHwgKGkgPT09IDQgJiYgdGhpcy5kYXRhLmhhc0NhcHRpb24pXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NkeC1zZXR0aW5ncy1idXR0b24tLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdG9nZ2xlU2V0dGluZyhldiwgaSk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIF90b2dnbGVTZXR0aW5nKGV2ZW50LCBpZCkge1xyXG4gICAgICAgIHN3aXRjaCAoaWQpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldEltYWdlQWxpZ24oZXZlbnQsIGlkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRCb3JkZXIoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dDYXB0aW9uKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfc2V0SW1hZ2VBbGlnbihldmVudCwgaWQpIHtcclxuICAgICAgICBsZXQgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLmNoaWxkTm9kZXM7XHJcbiAgICAgICAgbGV0IGltYWdlUGFyZW50ID0gdGhpcy5pbWFnZS5wYXJlbnROb2RlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdjZHgtc2V0dGluZ3MtYnV0dG9uLS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgaW1hZ2VQYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShJbWFnZUVkaXRvci5DTEFTUy5hbGlnbltpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXR0aW5nc1tpZF0uY2xhc3NMaXN0LmFkZCgnY2R4LXNldHRpbmdzLWJ1dHRvbi0tYWN0aXZlJyk7XHJcbiAgICAgICAgaW1hZ2VQYXJlbnQuY2xhc3NMaXN0LmFkZChJbWFnZUVkaXRvci5DTEFTUy5hbGlnbltpZF0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRCb3JkZXIoZXZlbnQpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdJJyA/IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlIDogZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjZHgtc2V0dGluZ3MtYnV0dG9uLS1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZS5jbGFzc0xpc3QudG9nZ2xlKCdoYXMtYm9yZGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Nob3dDYXB0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnSScgPyBldmVudC50YXJnZXQucGFyZW50Tm9kZSA6IGV2ZW50LnRhcmdldDtcclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY2R4LXNldHRpbmdzLWJ1dHRvbi0tYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FwdGlvbi5oaWRkZW4gPSAhdGhpcy5jYXB0aW9uLmhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICBfaXNWYWxpZEltYWdlVVJMKHVybCkge1xyXG4gICAgICAgIGlmKCB1bmRlZmluZWQgPT09IHVybCB8fCBudWxsID09PSB1cmwgKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVUkwgaXMgdW5kZWZpbmVkIG9yIG51bGwhJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYoICcnID09PSB1cmwgKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVUkwgaXMgZW1wdHkhJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVmFsaWRhdGluZyBVUkwgUGF0dGVybicpO1xyXG4gICAgICAgICAgICBpZiggdGhpcy5jb25maWcudXJsUGF0dGVybnMgPT09IG51bGwgKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGVmYXVsdCBwYXR0ZXJuLi4uJyk7XHJcbiAgICAgICAgICAgICAgICBpZiggdXJsLm1hdGNoKEltYWdlRWRpdG9yLlBBVFRFUk4udXJsSW1hZ2UpID09PSBudWxsICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmKCB0eXBlb2YgdGhpcy5jb25maWcudXJsUGF0dGVybnMudGVzdCA9PT0gJ2Z1bmN0aW9uJyApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDdXN0b20gcGF0dGVybi4uLicpO1xyXG4gICAgICAgICAgICAgICAgaWYoIHVybC5tYXRjaCh0aGlzLmNvbmZpZy51cmxQYXR0ZXJucykgPT09IG51bGwgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYoIHR5cGVvZiB0aGlzLmNvbmZpZy51cmxQYXR0ZXJucy5wdXNoID09PSAnZnVuY3Rpb24nICkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0N1c3RvbSBwYXR0ZXJucy4uLicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25maWcudXJsUGF0dGVybnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiggdXJsLm1hdGNoKHRoaXMuY29uZmlnLnVybFBhdHRlcm5zW2ldKSAhPT0gbnVsbCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRWxzZSBwYXR0ZXJuLi4uJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzYXZlKGNvbnRlbnQpIHtcclxuICAgICAgICBsZXQgaW1hZ2VQYXJlbnQgPSB0aGlzLmltYWdlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgbGV0IGFsaWduID0gKGltYWdlUGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnbGVmdC1hbGlnbmVkJykgPyAnbGVmdCcgOiAoaW1hZ2VQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZW50ZXItYWxpZ25lZCcpID8gJ2NlbnRlcicgOiAoaW1hZ2VQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyaWdodC1hbGlnbmVkJykgPyAncmlnaHQnIDogJycpKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVybDogdGhpcy5pbnB1dC50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgY2FwdGlvbjogdGhpcy5jYXB0aW9uLnRleHRDb250ZW50LFxyXG4gICAgICAgICAgICBoYXNDYXB0aW9uOiAhdGhpcy5jYXB0aW9uLmhpZGRlbixcclxuICAgICAgICAgICAgaGFzQm9yZGVyOiB0aGlzLmltYWdlLmNsYXNzTGlzdC5jb250YWlucygnaGFzLWJvcmRlcicpLFxyXG4gICAgICAgICAgICBhbGlnbjogYWxpZ25cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCB0b29sYm94KCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRW1iZWQgSW1hZ2UnLFxyXG4gICAgICAgICAgICBpY29uOiAnPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICA8cGF0aCBkPVwiTTMuMTUgMTMuNjI4QTcuNzQ5IDcuNzQ5IDAgMCAwIDEwIDE3Ljc1YTcuNzQgNy43NCAwIDAgMCA2LjMwNS0zLjI0MmwtMi4zODctMi4xMjctMi43NjUgMi4yNDQtNC4zODktNC40OTYtMy42MTQgMy41em0tLjc4Ny0yLjMwM2w0LjQ0Ni00LjM3MSA0LjUyIDQuNjMgMi41MzQtMi4wNTcgMy41MzMgMi43OTdjLjIzLS43MzQuMzU0LTEuNTE0LjM1NC0yLjMyNGE3Ljc1IDcuNzUgMCAxIDAtMTUuMzg3IDEuMzI1ek0xMCAyMEM0LjQ3NyAyMCAwIDE1LjUyMyAwIDEwUzQuNDc3IDAgMTAgMHMxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHpcIi8+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnPC9zdmc+J1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBDTEFTUygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnYWZmLWltYWdlLWNvbnRlbnQnLFxyXG4gICAgICAgICAgICBpbnB1dDogJ2FmZi1pbWFnZS1pbnB1dCcsXHJcbiAgICAgICAgICAgIGltYWdlOiAnYWZmLWltYWdlLWZpZ3VyZScsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnYWZmLWltYWdlLWNhcHRpb24nLFxyXG4gICAgICAgICAgICBzZXR0aW5nOiAnYWZmLWltYWdlLXNldHRpbmcnLFxyXG4gICAgICAgICAgICBhbGlnbjogW1xyXG4gICAgICAgICAgICAgICAgJ2xlZnQtYWxpZ25lZCcsXHJcbiAgICAgICAgICAgICAgICAnY2VudGVyLWFsaWduZWQnLFxyXG4gICAgICAgICAgICAgICAgJ3JpZ2h0LWFsaWduZWQnLFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IFBBVFRFUk4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXJsSW1hZ2U6IC8oaHR0cFtzXT86XFwvXFwvLio/LihqcGd8cG5nfGdpZnxzdmcpKS9nXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VFZGl0b3I7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiXSwic291cmNlUm9vdCI6IiJ9