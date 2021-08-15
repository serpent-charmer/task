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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/style.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/style.scss ***!
  \************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  overflow-x: hidden;\\n  font-family: Helvetica, Arial, sans-serif;\\n  background: grey url(https://i.pinimg.com/originals/f7/21/fe/f721fedb2927d5efdd625365de96fe63.png) no-repeat center center;\\n  background-size: cover;\\n  background-attachment: fixed;\\n  color: black;\\n}\\n\\n.navbar__container {\\n  position: sticky;\\n  top: 1em;\\n}\\n\\n.navbar {\\n  display: flex;\\n  justify-content: space-around;\\n}\\n\\n.navbar__right {\\n  display: inline-flex;\\n  justify-content: space-between;\\n}\\n\\n.navbar__ham {\\n  display: none;\\n}\\n\\n.navbar__right div {\\n  margin-right: 1em;\\n}\\n\\n.navbar__right :last-child {\\n  margin-right: 0;\\n}\\n\\n.appcontainer {\\n  margin-left: 3em;\\n  margin-right: 3em;\\n}\\n\\n.subappcontainer {\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.project {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  margin-top: 3em;\\n  margin-bottom: 3em;\\n  height: 45vmax;\\n}\\n\\nimg {\\n  height: 23vmax;\\n}\\n\\n.project__title {\\n  font-size: 3em;\\n  margin-bottom: 15px;\\n}\\n\\n.subtitlecontainer__title {\\n  display: flex;\\n  justify-content: center;\\n  font-size: 3em;\\n  margin-bottom: 1em;\\n}\\n\\n.subtitlecontainer img {\\n  max-height: 25em;\\n}\\n\\n.subblock {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-evenly;\\n  margin-bottom: 1em;\\n}\\n\\n.subblock__reverse div {\\n  margin-left: 11em;\\n}\\n\\n.subblock div {\\n  max-width: 17em;\\n}\\n\\n.contactform__container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.contactform__container {\\n  padding: 0 !important;\\n  right: 0 !important;\\n  margin-bottom: 1em;\\n}\\n\\n.contactform__container {\\n  margin-top: 1.5em;\\n  margin-bottom: 1.5em;\\n}\\n\\n.contactform__container__title {\\n  font-size: 3em;\\n  margin-bottom: 1em;\\n}\\n\\n.contactform__container form {\\n  padding: 0 !important;\\n  right: 0 !important;\\n  border: 0 !important;\\n  text-align: right;\\n}\\n\\n.contactform__container input {\\n  display: block;\\n  margin-bottom: 1em;\\n  min-width: 100%;\\n  padding: 0 !important;\\n  right: 0 !important;\\n}\\n\\n.contactform__container textarea {\\n  height: 11em;\\n  margin-bottom: 1em;\\n  min-width: 100%;\\n  padding: 0px !important;\\n  right: 0 !important;\\n  border: 1px solid !important;\\n}\\n\\n.footer {\\n  background-color: grey;\\n  color: white;\\n}\\n\\n.footer__container {\\n  padding: 1.5em;\\n  margin-left: 15em;\\n  margin-right: 15em;\\n}\\n\\n.footer__container .copyright {\\n  text-align: center;\\n}\\n\\n.footer hr {\\n  margin-top: 3em;\\n}\\n\\n.line__container {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.line__container .links {\\n  display: flex;\\n  margin-bottom: 0.5em;\\n}\\n\\n.line__container .links :nth-child(odd) {\\n  margin-right: 1em;\\n}\\n\\n@media (max-width: 768px) {\\n  .appcontainer {\\n    margin-left: 1.5em;\\n    margin-right: 1.5em;\\n  }\\n\\n  .navbar__right {\\n    display: none;\\n  }\\n\\n  .navbar__ham {\\n    display: block;\\n  }\\n\\n  .navbar__ham span {\\n    display: block;\\n    min-width: 35px;\\n    min-height: 5px;\\n    background-color: black;\\n    margin: 6px 0;\\n  }\\n\\n  .subblock {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    margin-bottom: 1em;\\n  }\\n\\n  .subblock img {\\n    max-width: 35vmax;\\n    margin-bottoM: 1em;\\n  }\\n\\n  .subblock div {\\n    font-size: 1em;\\n  }\\n\\n  .subblock__reverse div {\\n    order: 2;\\n    margin-left: 0;\\n  }\\n\\n  .contactform__container form {\\n    width: 55%;\\n    margin-bottom: 1em;\\n  }\\n\\n  .footer__container {\\n    margin-left: 3em;\\n    margin-right: 3em;\\n  }\\n\\n  .project {\\n    height: 36.5em;\\n  }\\n\\n  .project__title {\\n    font-size: 1.5em;\\n  }\\n\\n  .subtitlecontainer__title {\\n    font-size: 1.5em;\\n  }\\n\\n  .contactform__container__title {\\n    font-size: 1.5em;\\n  }\\n}\\n@media (max-width: 375px) {\\n  .appcontainer {\\n    margin-left: 0;\\n    margin-right: 0;\\n  }\\n\\n  .contactform__container form {\\n    width: 85%;\\n    margin-bottom: 1em;\\n  }\\n\\n  .footer__container {\\n    margin-left: 0;\\n    margin-right: 0;\\n  }\\n\\n  .footer__container hr {\\n    margin-top: 1em;\\n  }\\n\\n  .project {\\n    height: 79vmax;\\n  }\\n\\n  .project__title {\\n    font-size: 1.5em;\\n  }\\n\\n  .subtitlecontainer__title {\\n    font-size: 1.5em;\\n  }\\n\\n  .contactform__container__title {\\n    font-size: 1.5em;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://serokell-test/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B3%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://serokell-test/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://serokell-test/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://serokell-test/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://serokell-test/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://serokell-test/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://serokell-test/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://serokell-test/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://serokell-test/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\nfunction createNavElement(name) {\n    var element = document.createElement('div');\n    element.innerHTML = name;\n    return element;\n}\nfunction hamMenu() {\n    var element = document.createElement('div');\n    element.className = 'navbar__ham';\n    element.appendChild(document.createElement('span'));\n    element.appendChild(document.createElement('span'));\n    element.appendChild(document.createElement('span'));\n    return element;\n}\nfunction rightNavBarSide(clc) {\n    var element = document.createElement('div');\n    element.className = 'navbar__right';\n    clc.map(function (e) {\n        element.appendChild(e);\n    });\n    return element;\n}\nfunction navBar() {\n    var navContainer = document.createElement('div');\n    navContainer.className = 'navbar__container';\n    var element = document.createElement('div');\n    element.className = 'navbar';\n    var btn = document.createElement('div');\n    btn.innerHTML = 'text';\n    element.appendChild(btn);\n    var rbar = rightNavBarSide([\n        createNavElement(\"Test\"),\n        createNavElement(\"Test\"),\n        createNavElement(\"Test\")\n    ]);\n    element.appendChild(rbar);\n    var hmenu = hamMenu();\n    hmenu.onmouseover = function (e) {\n        rbar.style.display = 'inline';\n        rbar.style.position = 'absolute';\n        rbar.style.left = e.clientX.toString() + 'px';\n        rbar.style.top = e.clientY.toString() + 'px';\n    };\n    hmenu.onmousemove = function (e) {\n        rbar.style.left = e.clientX.toString() + 'px';\n        rbar.style.top = e.clientY.toString() + 'px';\n    };\n    hmenu.onmouseout = function (e) {\n        rbar.style.display = '';\n        rbar.style.position = '';\n        rbar.style.left = '';\n        rbar.style.top = '';\n    };\n    element.appendChild(hmenu);\n    navContainer.append(element);\n    return navContainer;\n}\nfunction projectName() {\n    var element = document.createElement('div');\n    element.className = 'project';\n    var prtitle = document.createElement('div');\n    prtitle.className = 'project__title';\n    prtitle.innerHTML = 'Project Title';\n    element.appendChild(prtitle);\n    return element;\n}\nfunction contactUs() {\n    var element = document.createElement('div');\n    var subElement = document.createElement('button');\n    subElement.innerHTML = 'Contact Us!';\n    element.appendChild(subElement);\n    return [element, subElement];\n}\nfunction subtitle() {\n    var element = document.createElement('div');\n    element.className = 'subtitlecontainer';\n    var sub = document.createElement('div');\n    sub.innerHTML = 'Subtitle';\n    sub.className = 'subtitlecontainer__title';\n    var ipsum = \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\";\n    var subblock1 = document.createElement('div');\n    subblock1.className = 'subblock';\n    var subblock2 = document.createElement('div');\n    subblock2.className = 'subblock subblock__reverse';\n    var img1 = document.createElement('img');\n    img1.src = 'https://i.stack.imgur.com/mwFzF.png';\n    var div1 = document.createElement('div');\n    div1.innerHTML = ipsum;\n    var img2 = document.createElement('img');\n    img2.src = 'https://i.stack.imgur.com/mwFzF.png';\n    var div2 = document.createElement('div');\n    div2.innerHTML = ipsum;\n    subblock1.append(img1, div1);\n    subblock2.append(div2, img2);\n    element.append(sub, subblock1, subblock2);\n    return element;\n}\nfunction contactForm() {\n    var el = document.createElement('div');\n    el.className = 'contactform__container';\n    var title = document.createElement('div');\n    title.innerHTML = 'Contact Form';\n    title.className = 'contactform__container__title';\n    var frm = document.createElement('form');\n    var inpt = document.createElement('input');\n    var inpt1 = document.createElement('input');\n    var inpt2 = document.createElement('textarea');\n    var inpt3 = document.createElement('button');\n    inpt3.innerHTML = 'Submit';\n    frm.append(inpt, inpt1, inpt2, inpt3);\n    frm.onsubmit = function (e) {\n        e.preventDefault();\n        console.log(inpt.value);\n        console.log(inpt1.value);\n        console.log(inpt2.value);\n    };\n    el.append(title, frm);\n    return el;\n}\nfunction createLineContainer(container_name, linknames) {\n    var line = document.createElement('div');\n    line.className = 'line__container';\n    var linename = document.createElement('div');\n    linename.innerText = container_name;\n    var linelinks = document.createElement('div');\n    linelinks.className = 'links';\n    linknames.map(function (e) {\n        var link = document.createElement('div');\n        link.innerText = e;\n        linelinks.append(link);\n    });\n    line.append(linename, linelinks);\n    return line;\n}\nfunction footer() {\n    var element = document.createElement('div');\n    element.className = 'footer';\n    var footercontainer = document.createElement('div');\n    footercontainer.className = 'footer__container';\n    var addr = createLineContainer('Address', ['Link1', 'Link2']);\n    var phone = createLineContainer('Phone', ['Link3', 'Link4']);\n    var email = createLineContainer('Email', ['Link5', 'Link6']);\n    var hline = document.createElement('hr');\n    var copyright = document.createElement('div');\n    copyright.innerText = \"Copyright\";\n    copyright.className = 'copyright';\n    footercontainer.append(addr, phone, email, hline, copyright);\n    element.append(footercontainer);\n    return element;\n}\nfunction main() {\n    var element = document.createElement('div');\n    element.className = 'appcontainer';\n    var subcontainer = document.createElement('div');\n    subcontainer.className = 'subappcontainer';\n    var proj = projectName();\n    var _a = contactUs(), el = _a[0], contact = _a[1];\n    proj.appendChild(el);\n    element.appendChild(proj);\n    var cForm = contactForm();\n    contact.onclick = function (e) {\n        cForm.scrollIntoView();\n    };\n    subcontainer.append(navBar(), proj, subtitle(), cForm, footer());\n    element.append(subcontainer);\n    return element;\n}\ndocument.body.appendChild(main());\n\n\n//# sourceURL=webpack://serokell-test/./src/index.ts?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;