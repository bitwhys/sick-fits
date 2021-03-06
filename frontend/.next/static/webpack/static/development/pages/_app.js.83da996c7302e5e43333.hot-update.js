webpackHotUpdate("static/development/pages/_app.js", {
  /***/ "./components/Page.js":
    /*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      "use strict"
      __webpack_require__.r(__webpack_exports__)
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */ "./node_modules/react/index.js"
      )
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      )
      var _jsxFileName =
        "/home/bitwhys/Projects/sick-fits/frontend/components/Page.js"

      var Page = function Page(_ref) {
        var children = _ref.children
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          "div",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 5,
            },
            __self: this,
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 6,
              },
              __self: this,
            },
            "Hey I'm the page component "
          ),
          children
        )
      }

      /* harmony default export */ __webpack_exports__["default"] = Page

      /***/
    },

  /***/ "./pages/_app.js":
    /*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      "use strict"
      __webpack_require__.r(__webpack_exports__)
      /* WEBPACK VAR INJECTION */ ;(function(module) {
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js"
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        )
        /* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! next/app */ "./node_modules/next/app.js"
        )
        /* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          next_app__WEBPACK_IMPORTED_MODULE_1__
        )
        /* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../components/Page */ "./components/Page.js"
        )
        var _jsxFileName =
          "/home/bitwhys/Projects/sick-fits/frontend/pages/_app.js"

        function _extends() {
          _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                  }
                }
              }
              return target
            }
          return _extends.apply(this, arguments)
        }

        var MyApp = function MyApp(_ref) {
          var Component = _ref.Component,
            pageProps = _ref.pageProps
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            next_app__WEBPACK_IMPORTED_MODULE_1__["Container"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 7,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Page__WEBPACK_IMPORTED_MODULE_2__["default"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 8,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Component,
                _extends({}, pageProps, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9,
                  },
                  __self: this,
                })
              )
            )
          )
        }

        /* harmony default export */ __webpack_exports__["default"] = MyApp
        ;(function(Component, route) {
          if (!Component) return
          if (false) {
          }
          module.hot.accept()
          Component.__route = route

          if (module.hot.status() === "idle") return

          var components = next.router.components
          for (var r in components) {
            if (!components.hasOwnProperty(r)) continue

            if (components[r].Component.__route === route) {
              next.router.update(r, Component)
            }
          }
        })(
          typeof __webpack_exports__ !== "undefined"
            ? __webpack_exports__.default
            : module.exports.default || module.exports,
          "/_app"
        )

        /* WEBPACK VAR INJECTION */
      }.call(
        this,
        __webpack_require__(
          /*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js"
        )(module)
      ))

      /***/
    },
})
//# sourceMappingURL=_app.js.83da996c7302e5e43333.hot-update.js.map
