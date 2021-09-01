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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/background-view.jpg */ \"./src/img/background-view.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/**\\r\\n  SUMMARY\\r\\n\\r\\n  #content\\r\\n\\r\\n  .navbar-view\\r\\n\\r\\n  #about-us-button\\r\\n  #menu-button\\r\\n  #contact-us-button\\r\\n\\r\\n  #about-us-view\\r\\n  #menu-view\\r\\n  #contact-us-view\\r\\n\\r\\n\\r\\n*/\\r\\n\\r\\n\\r\\n#content {\\r\\n  color: brown;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n.navbar-view {\\r\\n  background-color: rgba(139, 136, 136, 0.151);\\r\\n  min-height: 3em;\\r\\n  padding: 1em 30%;\\r\\n\\r\\n  display: grid;\\r\\n  position: relative;\\r\\n  grid-template-columns: repeat(3, auto);\\r\\n}\\r\\n\\r\\n.navbar-button {\\r\\n  background-color: rgba(204, 203, 203, 0.151);\\r\\n  border: black 3px solid;\\r\\n  color: aliceblue;\\r\\n}\\r\\n\\r\\n#about-us-view {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#menu-view {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.views-wrapping {\\r\\n  \\r\\n  background-color: rgba(143, 141, 141, 0.055);\\r\\n  padding-left: 30%;\\r\\n  max-width: 40%;\\r\\n}\\r\\n\\r\\n.content-view {\\r\\n  background-color: rgba(255, 255, 255, 0.842);\\r\\n  padding: 1em;\\r\\n  color: black;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/img/menu/menu.js":
/*!******************************!*\
  !*** ./src/img/menu/menu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _buryan_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buryan.png */ \"./src/img/menu/buryan.png\");\n/* harmony import */ var _hlib_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hlib.png */ \"./src/img/menu/hlib.png\");\n/* harmony import */ var _hlibci_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hlibci.png */ \"./src/img/menu/hlibci.png\");\n/* harmony import */ var _korzhyk_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./korzhyk.png */ \"./src/img/menu/korzhyk.png\");\n/* harmony import */ var _palyanychky_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./palyanychky.png */ \"./src/img/menu/palyanychky.png\");\n/* harmony import */ var _tovchenyky_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tovchenyky.png */ \"./src/img/menu/tovchenyky.png\");\n/* harmony import */ var _travyanyky_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./travyanyky.png */ \"./src/img/menu/travyanyky.png\");\n/* harmony import */ var _zateruha_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zateruha.png */ \"./src/img/menu/zateruha.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet menuList = [\r\n  {\r\n    title: \"Buryan Soup\",\r\n    text: \"One boiled corn and grass\",\r\n    price: \"0.29$\",\r\n    pic: _buryan_png__WEBPACK_IMPORTED_MODULE_0__,\r\n  },\r\n\r\n  {\r\n    title: \"Bread\",\r\n    text: \"Dough from grated bark with a handful of bran and quince leaves\",\r\n    price: \"0.49$\",\r\n    pic: _hlib_png__WEBPACK_IMPORTED_MODULE_1__,\r\n  },\r\n\r\n  {\r\n    title: \"Bread Pieces\",\r\n    text: \"Crumbled and baked straw together with millet and buckwheat chaff, hemp seed cake crushed in a mortar\",\r\n    price: \"0.69$\",\r\n    pic: _hlibci_png__WEBPACK_IMPORTED_MODULE_2__,\r\n  },\r\n\r\n  {\r\n    title: \"Flatbread\",\r\n    text: \"ground into flour oak bark, chopped reed roots, and goosefoots\",\r\n    price: \"0.69$\",\r\n    pic: _korzhyk_png__WEBPACK_IMPORTED_MODULE_3__,\r\n  },\r\n\r\n  {\r\n    title: \"Palyanychky\",\r\n    text: \"Baked and finely chopped potato waste with grain residues mixed in hot water\",\r\n    price: \"0.39$\",\r\n    pic: _palyanychky_png__WEBPACK_IMPORTED_MODULE_4__,\r\n  },\r\n\r\n  {\r\n    title: \"Tovchenyky\",\r\n    text: \"Small fish with salt, baked in cast iron\",\r\n    price: \"0.49$\",\r\n    pic: _tovchenyky_png__WEBPACK_IMPORTED_MODULE_5__,\r\n  },\r\n\r\n  {\r\n    title: \"Herbal Bread (Travyaniki)\",\r\n    text: \"baked flatbread made of grated grass, kneaded in hot water with the addition of flax seeds\",\r\n    price: \"0.79$\",\r\n    pic: _travyanyky_png__WEBPACK_IMPORTED_MODULE_6__,\r\n  },\r\n\r\n  {\r\n    title: \"Zaterukha\",\r\n    text: \"The baked dough of flour, tree bark birch and water\",\r\n    price: \"1.09$\",\r\n    pic: _zateruha_png__WEBPACK_IMPORTED_MODULE_7__,\r\n  },\r\n];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n    return menuList;\r\n});\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu/menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _img_menu_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/menu/menu */ \"./src/img/menu/menu.js\");\n/* harmony import */ var _img_cover_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/cover.jpeg */ \"./src/img/cover.jpeg\");\n/* harmony import */ var _img_contact_us_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/contact-us.jpg */ \"./src/img/contact-us.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst Restaurant = (() => {\r\n  let content = document.getElementById(\"content\");\r\n  let buttonNames = [\"About us\", \"Menu\", \"Contact us\"];\r\n  let viewsList = [\"about-us\", \"menu\", \"contact-us\"];\r\n\r\n  /* NAVIGATION BAR */\r\n\r\n  const addNavbarButtons = (navbar) => {\r\n    for (let i = 0; i < 3; i++) {\r\n      let navbarButton = document.createElement(\"button\");\r\n\r\n      navbarButton.classList.add(\"navbar-button\");\r\n      navbarButton.innerText = buttonNames[i];\r\n      navbarButton.id = viewsList[i];\r\n\r\n      navbarButton.addEventListener('click', () => {\r\n        navbarButtonEventListener(viewsList[i])\r\n      })\r\n\r\n      navbar.appendChild(navbarButton);\r\n    }\r\n  };\r\n\r\n  const navbarButtonEventListener = (id) => {\r\n\r\n    \r\n    let views = Array.from(document.querySelectorAll(\".content-view\"));\r\n\r\n    let viewToDisplay = id + \"-view\";\r\n\r\n    \r\n    for (let view of views) {\r\n      if (view.id != viewToDisplay) {\r\n        console.log(view.display)\r\n        view.style.display = \"none\";\r\n      } else {\r\n        view.style.display = \"inherit\";\r\n      }\r\n    }\r\n  };\r\n\r\n  const addNavbar = () => {\r\n    let navbar = document.createElement(\"div\");\r\n    navbar.classList.add(\"navbar-view\");\r\n\r\n    addNavbarButtons(navbar);\r\n\r\n\r\n\r\n    content.appendChild(navbar);\r\n  };\r\n\r\n  // VIEWS CONSTRUCTION\r\n\r\n  const addViews = () => {\r\n    let viewsWrapping = document.createElement(\"div\");\r\n    viewsWrapping.classList.add(\"views-wrapping\");\r\n\r\n    content.appendChild(viewsWrapping);\r\n    for (let i = 0; i < 3; i++) {\r\n      let view = document.createElement(\"div\");\r\n\r\n      view.classList.add(\"content-view\");\r\n      view.id = viewsList[i] + \"-view\";\r\n      viewsWrapping.appendChild(view);\r\n    \r\n    }\r\n\r\n    generateAboutUs();\r\n    generateMenu();\r\n    generateContactUs();\r\n  };\r\n\r\n  const generateAboutUs = () => {\r\n    let aboutUsView = document.getElementById(\"about-us-view\");\r\n\r\n    let cover = document.createElement(\"img\");\r\n    cover.src = _img_cover_jpeg__WEBPACK_IMPORTED_MODULE_2__;\r\n    cover.alt = \"Holodomor cover\";\r\n\r\n    let text =\r\n      \"This site was intended to show the food of Ukrainian people during the Holodomor famine. \" +\r\n      \"However, once I start the research I found out that such site already exists and it was made by far more \" +\r\n      \"experienced develeopers than I am at the moment. Therefore, I strongly recommend visiting and checking out \" +\r\n      'their website <a href=\"uncounted.ual.ua\"> Uncounted</a>. Still, you can see some of the dishes under the Menu section.';\r\n\r\n    let textElement = document.createElement(\"p\");\r\n    textElement.innerHTML = text;\r\n\r\n    aboutUsView.appendChild(cover);\r\n    aboutUsView.appendChild(textElement);\r\n  };\r\n\r\n  const generateMenu = () => {\r\n    let menuView = document.getElementById(\"menu-view\");\r\n\r\n    for (let item of (0,_img_menu_menu__WEBPACK_IMPORTED_MODULE_1__.default)()) {\r\n      let menuItem = document.createElement(\"div\");\r\n      menuItem.classList.add(\"menu-item\");\r\n\r\n      let pic = document.createElement(\"img\");\r\n      pic.src = item.pic;\r\n      pic.alt = item.title;\r\n\r\n      let title = document.createElement(\"p\");\r\n      title.innerText = item.title;\r\n\r\n      let text = document.createElement(\"div\");\r\n      text.classList.add(\"menu-item-text\");\r\n      text.innerText = item.text;\r\n\r\n      let price = document.createElement(\"div\");\r\n      price.classList.add(\"menu-item-price\");\r\n      price.innerText = item.price;\r\n\r\n      menuItem.appendChild(pic);\r\n      menuItem.appendChild(title);\r\n      menuItem.appendChild(text);\r\n      menuItem.appendChild(price);\r\n\r\n      menuView.appendChild(menuItem);\r\n    }\r\n  };\r\n\r\n  const generateContactUs = () => {\r\n    let contactUsView = document.getElementById(\"contact-us-view\");\r\n\r\n    let cover = document.createElement(\"img\");\r\n    cover.src = _img_contact_us_jpg__WEBPACK_IMPORTED_MODULE_3__;\r\n    cover.alt = \"contact us\";\r\n\r\n    let text = document.createElement(\"p\");\r\n    text.innerHTML =\r\n      \"Thank you for visiting my website. If you wish to learn more about Holodomor tragedy I will gladly refer you to the following\" +\r\n      ' <a href=\"https://youtu.be/mZoUioqlZEs\">video</a> from TimeGhost History channel. It has Age Restriction and cannot be played on my website.';\r\n\r\n    let links = document.createElement(\"p\");\r\n    links.innerHTML =\r\n      \"You are also welcome to check the website of Kyiv's <a href='https://holodomormuseum.org.ua/en/'>museum of Holodomor</a> for more information.\" +\r\n      \" Please also consider supporting their croudfunding project <a href='https://www.zernapravdy.org/en/'>Grains of Truth</a>.\";\r\n\r\n    contactUsView.appendChild(cover);\r\n    contactUsView.appendChild(text);\r\n    contactUsView.appendChild(links);\r\n  };\r\n\r\n  return {\r\n    addNavbar,\r\n    addViews,\r\n  };\r\n})();\r\n\r\nconst Module = (() => {\r\n  Restaurant.addNavbar();\r\n  Restaurant.addViews();\r\n})();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/img/background-view.jpg":
/*!*************************************!*\
  !*** ./src/img/background-view.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f28c2867dfcac7dcf2a8.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/background-view.jpg?");

/***/ }),

/***/ "./src/img/contact-us.jpg":
/*!********************************!*\
  !*** ./src/img/contact-us.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9b3ef452cda6d8cba26c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/contact-us.jpg?");

/***/ }),

/***/ "./src/img/cover.jpeg":
/*!****************************!*\
  !*** ./src/img/cover.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"beb832ed05b69b9350e3.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/cover.jpeg?");

/***/ }),

/***/ "./src/img/menu/buryan.png":
/*!*********************************!*\
  !*** ./src/img/menu/buryan.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"864d199e301de0dc1caa.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu/buryan.png?");

/***/ }),

/***/ "./src/img/menu/hlib.png":
/*!*******************************!*\
  !*** ./src/img/menu/hlib.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"025b55ec57f75865d8b2.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu/hlib.png?");

/***/ }),

/***/ "./src/img/menu/hlibci.png":
/*!*********************************!*\
  !*** ./src/img/menu/hlibci.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9d3b25d3132d73715ba2.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu/hlibci.png?");

/***/ }),

/***/ "./src/img/menu/korzhyk.png":
/*!**********************************!*\
  !*** ./src/img/menu/korzhyk.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3597d824505542284579.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu/korzhyk.png?");

/***/ }),

/***/ "./src/img/menu/palyanychky.png":
/*!**************************************!*\
  !*** ./src/img/menu/palyanychky.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1e294d48ecbf5e20638d.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu/palyanychky.png?");

/***/ }),

/***/ "./src/img/menu/tovchenyky.png":
/*!*************************************!*\
  !*** ./src/img/menu/tovchenyky.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"93e2b3ec4cd8690c5edd.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu/tovchenyky.png?");

/***/ }),

/***/ "./src/img/menu/travyanyky.png":
/*!*************************************!*\
  !*** ./src/img/menu/travyanyky.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fe75315b93b0125c6a83.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu/travyanyky.png?");

/***/ }),

/***/ "./src/img/menu/zateruha.png":
/*!***********************************!*\
  !*** ./src/img/menu/zateruha.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9c3e7acd3a2a17396c84.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu/zateruha.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;