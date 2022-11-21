/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/UserContext.js":
/*!***********************************!*\
  !*** ./components/UserContext.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContextProvider\": () => (/* binding */ ContextProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);\nconst ContextProvider = ({ children  })=>{\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            user: user,\n            login: (user)=>{\n                setUser(user);\n            },\n            logout: ()=>{\n                setUser(null);\n            }\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/pierrecacerescasanova/Documents/GitHub/Bump/components/UserContext.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTZDO0FBRTdDLE1BQU1FLE9BQU8saUJBQUdGLG9EQUFhLEVBQUU7QUFFL0IsaUVBQWVFLE9BQU87QUFFZixNQUFNQyxlQUFlLEdBQUcsQ0FBQyxFQUM5QkMsUUFBUSxHQUNULEdBQUs7SUFDSixNQUFNLEtBQUNDLElBQUksTUFBRUMsT0FBTyxNQUFJTCwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUN0QyxxQkFDRSw4REFBQ0MsT0FBTyxDQUFDSyxRQUFRO1FBQ2ZDLEtBQUssRUFBRTtZQUNMSCxJQUFJLEVBQUVBLElBQUk7WUFDVkksS0FBSyxFQUFFLENBQUNKLElBQUksR0FBSztnQkFDZkMsT0FBTyxDQUFDRCxJQUFJLENBQUM7WUFDZixDQUFDO1lBQ0RLLE1BQU0sRUFBRSxJQUFNO2dCQUNaSixPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ2YsQ0FBQztTQUNGO2tCQUVBRixRQUFROzs7OztpQkFDUSxDQUNwQjtBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9jb21wb25lbnRzL1VzZXJDb250ZXh0LmpzP2M3M2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dFxuXG5leHBvcnQgY29uc3QgQ29udGV4dFByb3ZpZGVyID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbClcbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgdXNlcjogdXNlcixcbiAgICAgICAgbG9naW46ICh1c2VyKSA9PiB7XG4gICAgICAgICAgc2V0VXNlcih1c2VyKVxuICAgICAgICB9LFxuICAgICAgICBsb2dvdXQ6ICgpID0+IHtcbiAgICAgICAgICBzZXRVc2VyKG51bGwpXG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJDb250ZXh0IiwiQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsIlByb3ZpZGVyIiwidmFsdWUiLCJsb2dpbiIsImxvZ291dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UserContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UserContext */ \"./components/UserContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UserContext__WEBPACK_IMPORTED_MODULE_1__.ContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/pierrecacerescasanova/Documents/GitHub/Bump/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/pierrecacerescasanova/Documents/GitHub/Bump/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTJEO0FBQzdCO0FBRTlCLFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDSCxvRUFBZTtrQkFDZCw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNaLENBQ25CO0FBQ0gsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRleHRQcm92aWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckNvbnRleHQnXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRleHRQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0NvbnRleHRQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIkNvbnRleHRQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();