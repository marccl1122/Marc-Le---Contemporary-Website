"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/components/header.tsx":
/*!***********************************!*\
  !*** ./app/components/header.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ \"(app-pages-browser)/./node_modules/next-themes/dist/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_Moon_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Moon,Sun!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/sun.js\");\n/* harmony import */ var _barrel_optimize_names_Moon_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Moon,Sun!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/moon.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Header(param) {\n    let { className } = param;\n    _s();\n    const { theme, setTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_3__.useTheme)();\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setMounted(true);\n        const handleScroll = ()=>setScrolled(window.scrollY > 20);\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, []);\n    if (!mounted) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"\\n      fixed top-0 left-0 right-0 z-50 transition-all duration-300\\n      \".concat(scrolled ? \"backdrop-blur-sm bg-background/5\" : \"\", \"\\n    \"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"container mx-auto px-6 py-10\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between md:justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setIsMenuOpen(!isMenuOpen),\n                        className: \"md:hidden opacity-60 hover:opacity-100 transition-opacity\",\n                        children: isMenuOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"h-5 w-5\",\n                            fill: \"none\",\n                            stroke: \"currentColor\",\n                            viewBox: \"0 0 24 24\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                strokeWidth: 1,\n                                d: \"M6 18L18 6M6 6l12 12\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marcl/Desktop/Marc Le/Marc-Le---Contemporary-Website/app/components/header.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/marcl/Desktop/Marc Le/Marc-Le---Contemporary-Website/app/components/header.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 15\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"h-5 w-5\",\n                            fill: \"none\",\n                            stroke: \"currentColor\",\n                            viewBox: \"0 0 24 24\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                strokeWidth: 1,\n                                d: \"M4 6h16M4 12h16M4 18h16\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marcl/Desktop/Marc Le/Marc-Le---Contemporary-Website/app/components/header.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/marcl/Desktop/Marc Le/Marc-Le---Contemporary-Website/app/components/header.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/marcl/Desktop/Marc Le/Marc-Le---Contemporary-Website/app/components/header.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden md:flex items-center gap-20\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/\",\n                                className: \"text-[13px] font-light tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marcl/Desktop/Marc Le/Marc-Le---Contemporary-Website/app/components/header.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/gallery\",\n                                className: \"text-[13px] font-light tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity\",\n                                children: \"Gallery\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marcl/Desktop/Marc Le/Marc-Le---Contemporary-Website/app/components/header.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/canvas\",\n                                className: \"text-[13px] font-light tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity\",\n                                children: \"Canvas\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marcl/Desktop/Marc Le/Marc-Le---Contemporary-Website/app/components/header.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/writing\",\n                                className: \"text-[13px] font-light tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity\",\n                                children: \"Writing\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marcl/Desktop/Marc Le/Marc-Le---Contemporary-Website/app/components/header.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/podcast\",\n                                className: \"text-[13px] font-light tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity\",\n                                children: \"Podcast\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marcl/Desktop/Marc Le/Marc-Le---Contemporary-Website/app/components/header.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/about\",\n                                className: \"text-[13px] font-light tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marcl/Desktop/Marc Le/Marc-Le---Contemporary-Website/app/components/header.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setTheme(theme === \"dark\" ? \"light\" : \"dark\"),\n                                className: \"opacity-60 hover:opacity-100 transition-opacity\",\n                                \"aria-label\": \"Toggle theme\",\n                                children: theme === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Moon_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    className: \"h-3.5 w-3.5\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/marcl/Desktop/Marc Le/Marc-Le---Contemporary-Website/app/components/header.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 17\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Moon_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    className: \"h-3.5 w-3.5\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/marcl/Desktop/Marc Le/Marc-Le---Contemporary-Website/app/components/header.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/marcl/Desktop/Marc Le/Marc-Le---Contemporary-Website/app/components/header.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/marcl/Desktop/Marc Le/Marc-Le---Contemporary-Website/app/components/header.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/marcl/Desktop/Marc Le/Marc-Le---Contemporary-Website/app/components/header.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/marcl/Desktop/Marc Le/Marc-Le---Contemporary-Website/app/components/header.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/marcl/Desktop/Marc Le/Marc-Le---Contemporary-Website/app/components/header.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"gbihQK7nl8wEU5x272QtgOiCtfw=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_3__.useTheme\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUUyQztBQUNmO0FBQ1U7QUFDRTtBQU96QixTQUFTTSxPQUFPLEtBQTBCO1FBQTFCLEVBQUVDLFNBQVMsRUFBZSxHQUExQjs7SUFDN0IsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHTixxREFBUUE7SUFDcEMsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1csVUFBVUMsWUFBWSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNhLFlBQVlDLGNBQWMsR0FBR2QsK0NBQVFBLENBQUM7SUFFN0NELGdEQUFTQSxDQUFDO1FBQ1JXLFdBQVc7UUFDWCxNQUFNSyxlQUFlLElBQU1ILFlBQVlJLE9BQU9DLE9BQU8sR0FBRztRQUN4REQsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7UUFDbEMsT0FBTyxJQUFNQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjtJQUNwRCxHQUFHLEVBQUU7SUFFTCxJQUFJLENBQUNOLFNBQVMsT0FBTztJQUVyQixxQkFDRSw4REFBQ1c7UUFBT2QsV0FBVyw4RUFFb0MsT0FBbkRLLFdBQVcscUNBQXFDLElBQUc7a0JBRXJELDRFQUFDVTtZQUFJZixXQUFVO3NCQUNiLDRFQUFDZ0I7Z0JBQUloQixXQUFVOztrQ0FFYiw4REFBQ2lCO3dCQUNDQyxTQUFTLElBQU1WLGNBQWMsQ0FBQ0Q7d0JBQzlCUCxXQUFVO2tDQUVUTywyQkFDQyw4REFBQ1k7NEJBQUluQixXQUFVOzRCQUFVb0IsTUFBSzs0QkFBT0MsUUFBTzs0QkFBZUMsU0FBUTtzQ0FDakUsNEVBQUNDO2dDQUFLQyxlQUFjO2dDQUFRQyxnQkFBZTtnQ0FBUUMsYUFBYTtnQ0FBR0MsR0FBRTs7Ozs7Ozs7OztpREFHdkUsOERBQUNSOzRCQUFJbkIsV0FBVTs0QkFBVW9CLE1BQUs7NEJBQU9DLFFBQU87NEJBQWVDLFNBQVE7c0NBQ2pFLDRFQUFDQztnQ0FBS0MsZUFBYztnQ0FBUUMsZ0JBQWU7Z0NBQVFDLGFBQWE7Z0NBQUdDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTTNFLDhEQUFDWDt3QkFBSWhCLFdBQVU7OzBDQUNiLDhEQUFDTCxpREFBSUE7Z0NBQ0hpQyxNQUFLO2dDQUNMNUIsV0FBVTswQ0FDWDs7Ozs7OzBDQUdELDhEQUFDTCxpREFBSUE7Z0NBQ0hpQyxNQUFLO2dDQUNMNUIsV0FBVTswQ0FDWDs7Ozs7OzBDQUdELDhEQUFDTCxpREFBSUE7Z0NBQ0hpQyxNQUFLO2dDQUNMNUIsV0FBVTswQ0FDWDs7Ozs7OzBDQUdELDhEQUFDTCxpREFBSUE7Z0NBQ0hpQyxNQUFLO2dDQUNMNUIsV0FBVTswQ0FDWDs7Ozs7OzBDQUdELDhEQUFDTCxpREFBSUE7Z0NBQ0hpQyxNQUFLO2dDQUNMNUIsV0FBVTswQ0FDWDs7Ozs7OzBDQUdELDhEQUFDTCxpREFBSUE7Z0NBQ0hpQyxNQUFLO2dDQUNMNUIsV0FBVTswQ0FDWDs7Ozs7OzBDQUdELDhEQUFDaUI7Z0NBQ0NDLFNBQVMsSUFBTWhCLFNBQVNELFVBQVUsU0FBUyxVQUFVO2dDQUNyREQsV0FBVTtnQ0FDVjZCLGNBQVc7MENBRVY1QixVQUFVLHVCQUNULDhEQUFDSCxvRkFBR0E7b0NBQUNFLFdBQVU7Ozs7O3lEQUVmLDhEQUFDSCxvRkFBSUE7b0NBQUNHLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFoQztHQTVGd0JEOztRQUNNSCxpREFBUUE7OztLQURkRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9oZWFkZXIudHN4PzMwMGYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICduZXh0LXRoZW1lcydcbmltcG9ydCB7IE1vb24sIFN1biB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcbmltcG9ydCB7IHNpdGVDb25maWcgfSBmcm9tICdAL2xpYi9jb25zdGFudHMnXG5cbmludGVyZmFjZSBIZWFkZXJQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoeyBjbGFzc05hbWUgfTogSGVhZGVyUHJvcHMpIHtcbiAgY29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKClcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzY3JvbGxlZCwgc2V0U2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpc01lbnVPcGVuLCBzZXRJc01lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TW91bnRlZCh0cnVlKVxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHNldFNjcm9sbGVkKHdpbmRvdy5zY3JvbGxZID4gMjApXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcbiAgfSwgW10pXG5cbiAgaWYgKCFtb3VudGVkKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2BcbiAgICAgIGZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIHotNTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXG4gICAgICAke3Njcm9sbGVkID8gJ2JhY2tkcm9wLWJsdXItc20gYmctYmFja2dyb3VuZC81JyA6ICcnfVxuICAgIGB9PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC02IHB5LTEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbWQ6anVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgey8qIE1vYmlsZSBNZW51IEJ1dHRvbiAqL31cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01lbnVPcGVuKCFpc01lbnVPcGVuKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOmhpZGRlbiBvcGFjaXR5LTYwIGhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzTWVudU9wZW4gPyAoXG4gICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiaC01IHctNVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD17MX0gZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImgtNSB3LTVcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9ezF9IGQ9XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNlwiIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIHsvKiBEZXNrdG9wIE5hdmlnYXRpb24gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIwXCI+XG4gICAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVsxM3B4XSBmb250LWxpZ2h0IHRyYWNraW5nLVswLjJlbV0gb3BhY2l0eS02MCBob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLW9wYWNpdHlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgICAgaHJlZj1cIi9nYWxsZXJ5XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1bMTNweF0gZm9udC1saWdodCB0cmFja2luZy1bMC4yZW1dIG9wYWNpdHktNjAgaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1vcGFjaXR5XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgR2FsbGVyeVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgIGhyZWY9XCIvY2FudmFzXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1bMTNweF0gZm9udC1saWdodCB0cmFja2luZy1bMC4yZW1dIG9wYWNpdHktNjAgaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1vcGFjaXR5XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2FudmFzXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgICAgaHJlZj1cIi93cml0aW5nXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1bMTNweF0gZm9udC1saWdodCB0cmFja2luZy1bMC4yZW1dIG9wYWNpdHktNjAgaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1vcGFjaXR5XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgV3JpdGluZ1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgIGhyZWY9XCIvcG9kY2FzdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWzEzcHhdIGZvbnQtbGlnaHQgdHJhY2tpbmctWzAuMmVtXSBvcGFjaXR5LTYwIGhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFBvZGNhc3RcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICBocmVmPVwiL2Fib3V0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1bMTNweF0gZm9udC1saWdodCB0cmFja2luZy1bMC4yZW1dIG9wYWNpdHktNjAgaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1vcGFjaXR5XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGhlbWUodGhlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyaycpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcGFjaXR5LTYwIGhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eVwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgdGhlbWVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGhlbWUgPT09ICdkYXJrJyA/IChcbiAgICAgICAgICAgICAgICA8U3VuIGNsYXNzTmFtZT1cImgtMy41IHctMy41XCIgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8TW9vbiBjbGFzc05hbWU9XCJoLTMuNSB3LTMuNVwiIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsInVzZVRoZW1lIiwiTW9vbiIsIlN1biIsIkhlYWRlciIsImNsYXNzTmFtZSIsInRoZW1lIiwic2V0VGhlbWUiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsInNjcm9sbGVkIiwic2V0U2Nyb2xsZWQiLCJpc01lbnVPcGVuIiwic2V0SXNNZW51T3BlbiIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhlYWRlciIsIm5hdiIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdmciLCJmaWxsIiwic3Ryb2tlIiwidmlld0JveCIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiLCJocmVmIiwiYXJpYS1sYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/header.tsx\n"));

/***/ })

});