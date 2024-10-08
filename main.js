"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["main"],{

/***/ 4952:
/*!*****************************************************!*\
  !*** ./projects/demo/src/app/app.browser.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppBrowserModule: () => (/* binding */ AppBrowserModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 7008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4199);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 1244);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 73);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ 8686);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core */ 7090);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/core */ 3330);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @taiga-ui/core */ 578);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @taiga-ui/core */ 7279);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-markdown */ 5592);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 4699);
/* harmony import */ var _app_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.providers */ 3734);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routes */ 2516);
var _AppBrowserModule;













class AppBrowserModule {}
_AppBrowserModule = AppBrowserModule;
_AppBrowserModule.ɵfac = function AppBrowserModule_Factory(t) {
  return new (t || _AppBrowserModule)();
};
_AppBrowserModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _AppBrowserModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
_AppBrowserModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [_app_providers__WEBPACK_IMPORTED_MODULE_1__.APP_PROVIDERS],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule.withServerTransition({
    appId: 'demo'
  }), _app_routes__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__.TuiRootModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__.TuiDialogModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__.TuiAlertModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_10__.MarkdownModule.forRoot({
    loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient,
    sanitize: _angular_core__WEBPACK_IMPORTED_MODULE_3__.SecurityContext.NONE
  }), _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_11__.TuiDocMainModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_12__.TuiLinkModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_13__.TuiModeModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppBrowserModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routes__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__.TuiRootModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__.TuiDialogModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__.TuiAlertModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_10__.MarkdownModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_11__.TuiDocMainModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_12__.TuiLinkModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_13__.TuiModeModule]
  });
})();

/***/ }),

/***/ 4699:
/*!************************************************!*\
  !*** ./projects/demo/src/app/app.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1099);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ 8686);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 73);
var _AppComponent;




// eslint-disable-next-line @angular-eslint/prefer-standalone
class AppComponent {}
_AppComponent = AppComponent;
_AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)();
};
_AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _AppComponent,
  selectors: [["my-app"]],
  decls: 3,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-root");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-doc-main")(2, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiRootComponent, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiDocMainComponent],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 3734:
/*!************************************************!*\
  !*** ./projects/demo/src/app/app.providers.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_PROVIDERS: () => (/* binding */ APP_PROVIDERS)
/* harmony export */ });
/* harmony import */ var _home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 6207);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 9191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-draw-flow/core */ 5577);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 9811);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-highlightjs */ 9566);
/* harmony import */ var _pages_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/pages */ 8986);
/* harmony import */ var _modules_logo_logo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/logo/logo.component */ 9289);
/* harmony import */ var _modules_nodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/nodes */ 5989);









const APP_PROVIDERS = [{
  provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__.LocationStrategy,
  useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__.PathLocationStrategy
}, {
  provide: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__.TUI_DOC_TITLE,
  useValue: 'NgDrawFlow | '
}, {
  provide: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__.TUI_DOC_LOGO,
  useValue: _modules_logo_logo_component__WEBPACK_IMPORTED_MODULE_3__.LOGO_CONTENT
}, {
  provide: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__.TUI_DOC_DEFAULT_TABS,
  useValue: ['Description and examples', 'API']
}, {
  provide: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__.TUI_DOC_PAGES,
  useValue: _pages_pages__WEBPACK_IMPORTED_MODULE_2__.DEMO_PAGES
}, {
  provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__.HIGHLIGHT_OPTIONS,
  useFactory: () => {
    const isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)((0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_8__.PLATFORM_ID));
    return {
      coreLibraryLoader: function () {
        var _ref = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          return __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_core_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/core */ 5122));
        });
        return function coreLibraryLoader() {
          return _ref.apply(this, arguments);
        };
      }(),
      lineNumbersLoader: function () {
        var _ref2 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          return (
            // SSR ReferenceError: window is not defined
            isBrowser ? __webpack_require__.e(/*! import() */ "node_modules_highlightjs-line-numbers_js_src_highlightjs-line-numbers_js").then(__webpack_require__.t.bind(__webpack_require__, /*! highlightjs-line-numbers.js */ 7786, 23)) : Promise.resolve()
          );
        });
        return function lineNumbersLoader() {
          return _ref2.apply(this, arguments);
        };
      }(),
      languages: {
        typescript: function () {
          var _ref3 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_typescript_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/typescript */ 5758));
          });
          return function typescript() {
            return _ref3.apply(this, arguments);
          };
        }(),
        less: function () {
          var _ref4 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_less_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/less */ 5228));
          });
          return function less() {
            return _ref4.apply(this, arguments);
          };
        }(),
        xml: function () {
          var _ref5 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_xml_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/xml */ 9944));
          });
          return function xml() {
            return _ref5.apply(this, arguments);
          };
        }()
      }
    };
  }
}, (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.provideNgDrawFlowConfigs)({
  infoNode: _modules_nodes__WEBPACK_IMPORTED_MODULE_4__.InfoNodeComponent,
  simpleNode: _modules_nodes__WEBPACK_IMPORTED_MODULE_4__.SimpleNodeComponent,
  miniNode: _modules_nodes__WEBPACK_IMPORTED_MODULE_4__.MiniNodeComponent,
  formNode: _modules_nodes__WEBPACK_IMPORTED_MODULE_4__.FormNodeComponent
})];

/***/ }),

/***/ 2516:
/*!*********************************************!*\
  !*** ./projects/demo/src/app/app.routes.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule),
/* harmony export */   appRoutes: () => (/* binding */ appRoutes)
/* harmony export */ });
/* harmony import */ var _home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 6207);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1099);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/constants */ 597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6623);

var _AppRoutingModule;




const appRoutes = [
// Quickstart
{
  path: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.Quickstart,
  loadComponent: function () {
    var _ref = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demo_src_pages_documentation_quickstart_quickstart_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/documentation/quickstart/quickstart.component */ 6849));
    });
    return function loadComponent() {
      return _ref.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Quickstart'
  }
}, {
  path: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.TermsAndDefinitions,
  loadComponent: function () {
    var _ref2 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demo_src_pages_documentation_terms-and-definitions_terms-and-definitions_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/documentation/terms-and-definitions/terms-and-definitions.component */ 509));
    });
    return function loadComponent() {
      return _ref2.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Terms and Definitions'
  }
}, {
  path: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.PanZoom,
  loadComponent: function () {
    var _ref3 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demo_src_pages_documentation_pan-zoom-configuration_pan-zoom-configuration_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/documentation/pan-zoom-configuration/pan-zoom-configuration.component */ 2251));
    });
    return function loadComponent() {
      return _ref3.apply(this, arguments);
    };
  }(),
  data: {
    title: 'PanZoom Configuration'
  }
}, {
  path: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.Nodes,
  loadComponent: function () {
    var _ref4 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demo_src_pages_documentation_creating-nodes_creating-nodes_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/documentation/creating-nodes/creating-nodes.component */ 3997));
    });
    return function loadComponent() {
      return _ref4.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Creating Nodes'
  }
}, {
  path: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.Connectors,
  loadComponent: function () {
    var _ref5 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demo_src_pages_documentation_connectors_connectors_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/documentation/connectors/connectors.component */ 4823));
    });
    return function loadComponent() {
      return _ref5.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Connectors'
  }
},
// Examples
{
  path: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.SimpleExample,
  loadComponent: function () {
    var _ref6 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demo_src_pages_examples_simple-example_simple-example_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/examples/simple-example/simple-example.component */ 4706));
    });
    return function loadComponent() {
      return _ref6.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Simple example'
  }
}, {
  path: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.Overview,
  loadComponent: function () {
    var _ref7 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demo_src_pages_examples_overview_overview_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/examples/overview/overview.component */ 1882));
    });
    return function loadComponent() {
      return _ref7.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Feature Overview'
  }
}, {
  path: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.Editor,
  loadComponent: function () {
    var _ref8 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demo_src_pages_examples_editor_editor_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/examples/editor/editor.component */ 8810));
    });
    return function loadComponent() {
      return _ref8.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Editor example'
  }
}, {
  path: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.StressTest,
  loadComponent: function () {
    var _ref9 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demo_src_pages_examples_stress-test_stress-test_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/examples/stress-test/stress-test.component */ 8922));
    });
    return function loadComponent() {
      return _ref9.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Stress Test'
  }
}, {
  path: '**',
  redirectTo: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.Quickstart
}];
class AppRoutingModule {}
_AppRoutingModule = AppRoutingModule;
_AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _AppRoutingModule)();
};
_AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _AppRoutingModule
});
_AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(appRoutes, {
    initialNavigation: 'enabledBlocking',
    scrollPositionRestoration: 'enabled'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 3972:
/*!****************************************************************!*\
  !*** ./projects/demo/src/app/constants/constants/demo-path.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoPath: () => (/* binding */ DemoPath)
/* harmony export */ });
const DemoPath = {
  Quickstart: 'documentation/quickstart',
  TermsAndDefinitions: 'documentation/terms-and-definitions',
  PanZoom: 'documentation/pan-zoom-configuration',
  Nodes: 'documentation/creating-nodes',
  Connectors: 'documentation/connectors',
  SimpleExample: 'examples/simple-example',
  Overview: 'examples/overview',
  Editor: 'examples/editor',
  StressTest: 'examples/stress-test',
  CustomNodes: 'examples/nodes-example/custom-nodes-example'
};

/***/ }),

/***/ 597:
/*!************************************************************!*\
  !*** ./projects/demo/src/app/constants/constants/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoPath: () => (/* reexport safe */ _demo_path__WEBPACK_IMPORTED_MODULE_0__.DemoPath)
/* harmony export */ });
/* harmony import */ var _demo_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo-path */ 3972);


/***/ }),

/***/ 9289:
/*!**************************************************************!*\
  !*** ./projects/demo/src/app/modules/logo/logo.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOGO_CONTENT: () => (/* binding */ LOGO_CONTENT),
/* harmony export */   LogoComponent: () => (/* binding */ LogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1099);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ 578);
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ 244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6623);
var _LogoComponent;





class LogoComponent {}
_LogoComponent = LogoComponent;
_LogoComponent.ɵfac = function LogoComponent_Factory(t) {
  return new (t || _LogoComponent)();
};
_LogoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _LogoComponent,
  selectors: [["logo"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 5,
  vars: 0,
  consts: [["routerLink", "/", "tuiLink", "", 1, "logo-link"], [1, "logo-name"], ["alt", "ng-draw-flow logo", "src", "assets/icons/logo.svg", 1, "logo"], ["alt", "by t-bank", "src", "assets/icons/by.svg", 1, "by"]],
  template: function LogoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0)(1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " NgDrawFlow ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkComponent],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   tui-root._mobile[_nghost-%COMP%], tui-root._mobile   [_nghost-%COMP%] {\n  font-size: 0;\n}\n.logo-link[_ngcontent-%COMP%] {\n  display: flex;\n}\n.logo-name[_ngcontent-%COMP%] {\n  display: flex;\n  color: var(--tui-text-01);\n}\n.logo[_ngcontent-%COMP%] {\n  margin-right: 0.625rem;\n  inline-size: 2rem;\n  block-size: 2rem;\n}\n.by[_ngcontent-%COMP%] {\n  margin-left: 0.875rem;\n}\ntui-root._mobile[_nghost-%COMP%]   .by[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .by[_ngcontent-%COMP%] {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ28uc3R5bGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNKO0FBSEE7RUFLUSxZQUFBO0FBQ1I7QUFHQTtFQUNJLGFBQUE7QUFESjtBQUlBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FBRko7QUFLQTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUhKO0FBTUE7RUFDSSxxQkFBQTtBQUpKO0FBTUk7RUFDSSxhQUFBO0FBSlIiLCJmaWxlIjoibG9nby5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIDpob3N0LWNvbnRleHQodHVpLXJvb3QuX21vYmlsZSkge1xuICAgICAgICBmb250LXNpemU6IDA7XG4gICAgfVxufVxuXG4ubG9nby1saW5rIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubG9nby1uYW1lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMSk7XG59XG5cbi5sb2dvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO1xuICAgIGlubGluZS1zaXplOiAycmVtO1xuICAgIGJsb2NrLXNpemU6IDJyZW07XG59XG5cbi5ieSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuODc1cmVtO1xuXG4gICAgOmhvc3QtY29udGV4dCh0dWktcm9vdC5fbW9iaWxlKSAmIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9tb2R1bGVzL2xvZ28vbG9nby5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFIQTtFQUtRLFlBQUE7QUFDUjtBQUdBO0VBQ0ksYUFBQTtBQURKO0FBSUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFGSjtBQUtBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSEo7QUFNQTtFQUNJLHFCQUFBO0FBSko7QUFNSTtFQUNJLGFBQUE7QUFKUjs7QUFFQSxvaENBQW9oQyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICA6aG9zdC1jb250ZXh0KHR1aS1yb290Ll9tb2JpbGUpIHtcbiAgICAgICAgZm9udC1zaXplOiAwO1xuICAgIH1cbn1cblxuLmxvZ28tbGluayB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmxvZ28tbmFtZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpO1xufVxuXG4ubG9nbyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjYyNXJlbTtcbiAgICBpbmxpbmUtc2l6ZTogMnJlbTtcbiAgICBibG9jay1zaXplOiAycmVtO1xufVxuXG4uYnkge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjg3NXJlbTtcblxuICAgIDpob3N0LWNvbnRleHQodHVpLXJvb3QuX21vYmlsZSkgJiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});
const LOGO_CONTENT = new _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__.PolymorpheusComponent(LogoComponent);

/***/ }),

/***/ 5979:
/*!***********************************************************************!*\
  !*** ../../../app/modules/nodes/form-node/form-node.component.ts?raw ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormNodeComponent: () => (/* binding */ FormNodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 9191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 8065);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 5577);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ 3474);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core */ 1460);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ 2912);
var _FormNodeComponent;












const _c0 = function (a0, a1) {
  return {
    nodeId: a0,
    connectorId: a1,
    single: false
  };
};
function FormNodeComponent_df_input_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "df-input", 5);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r0.nodeId, ctx_r0.nodeId + "-input-1"));
  }
}
function FormNodeComponent_div_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "df-output", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const fieldName_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r4.nodeId, ctx_r4.getConnectorId(fieldName_r2)));
  }
}
function FormNodeComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "tui-input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FormNodeComponent_div_4_ng_container_3_Template, 2, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fieldName_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", fieldName_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tuiTextfieldSize", "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx_r1.getConnectorId(fieldName_r2));
  }
}
class FormNodeComponent extends _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DrawFlowBaseNode {
  constructor() {
    super(...arguments);
    this.currentIndex = 1;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      field1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
        connectorId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('node-5-output-1'),
        fieldValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('')
      }),
      field2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
        connectorId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('node-5-output-2'),
        fieldValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('')
      })
    });
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DestroyRef);
  }
  get fieldNames() {
    return Object.keys(this.form.controls);
  }
  getConnectorId(fieldName) {
    if (!fieldName) {
      return null;
    }
    const group = this.form.get(fieldName);
    return group.controls.connectorId.value;
  }
  ngAfterViewInit() {
    this.form.valueChanges.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__.takeUntilDestroyed)(this.destroyRef)).subscribe(value => {
      this.model.value = value;
    });
  }
  add() {
    const index = Object.keys(this.form.controls).length + 1;
    const newFieldKey = `field${index}`;
    const newField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      connectorId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(`node-5-output-${index}`),
      fieldValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('')
    });
    // @ts-ignore
    this.form.addControl(newFieldKey, newField);
  }
}
_FormNodeComponent = FormNodeComponent;
_FormNodeComponent.ɵfac = /*@__PURE__*/function () {
  let ɵFormNodeComponent_BaseFactory;
  return function FormNodeComponent_Factory(t) {
    return (ɵFormNodeComponent_BaseFactory || (ɵFormNodeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_FormNodeComponent)))(t || _FormNodeComponent);
  };
}();
_FormNodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _FormNodeComponent,
  selectors: [["app-form-node"]],
  hostBindings: function FormNodeComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.delete.stop", function FormNodeComponent_keydown_delete_stop_HostBindingHandler() {
        return 0;
      })("keydown.backspace.stop", function FormNodeComponent_keydown_backspace_stop_HostBindingHandler() {
        return 0;
      });
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 7,
  vars: 4,
  consts: [["class", "input", 3, "connectorData", 4, "ngIf"], [1, "tui-space_bottom-4", "tui-text_body-s"], [3, "formGroup"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["size", "s", "tuiButton", "", "type", "button", 3, "click"], [1, "input", 3, "connectorData"], [3, "formGroupName"], [1, "field", "tui-space_bottom-1"], ["formControlName", "fieldValue", 3, "tuiTextfieldSize"], [4, "ngIf"], [1, "output", 3, "connectorData"]],
  template: function FormNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FormNodeComponent_df_input_0_Template, 1, 4, "df-input", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FormNodeComponent_div_4_Template, 4, 3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormNodeComponent_Template_button_click_5_listener() {
        return ctx.add();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Add field\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.startNode);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.model.text, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fieldNames);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfInputComponent, _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfOutputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__.TuiButtonModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__.TuiButtonComponent, _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__.TuiInputModule, _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__.TuiInputComponent, _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__.TuiInputDirective, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__.TuiTextfieldControllerModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__.TuiTextfieldSizeDirective],
  styles: ["\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  background: var(--tui-base-01);\n  inline-size: 12.5rem;\n  min-block-size: 2.5rem;\n  border-radius: 0.25rem;\n  border: 0.125rem solid #000;\n  padding: 1.25rem;\n  box-sizing: border-box;\n}\n.field[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.field[_ngcontent-%COMP%]   tui-input[_ngcontent-%COMP%] {\n  inline-size: 100%;\n}\n.input[_ngcontent-%COMP%], .output[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n}\n.input[_ngcontent-%COMP%] {\n  left: -0.5rem;\n  top: 0.25rem;\n}\n.output-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.output[_ngcontent-%COMP%] {\n  right: -1.8125rem;\n  top: 0.75rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tbm9kZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGOzs7Q0FHQztBQUpEO0VBQ0ksY0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBTUo7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBS0o7QUFSQTtFQU1RLGlCQUFBO0FBS1I7QUFEQTs7RUFFSSxrQkFBQTtFQUNBLFVBQUE7QUFHSjtBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFFSjtBQUNBO0VBQ0ksa0JBQUE7QUFDSjtBQUVBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoiZm9ybS1ub2RlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnQHRhaWdhLXVpL2NvcmUvc3R5bGVzL3RhaWdhLXVpLWxvY2FsJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1iYXNlLTAxKTtcbiAgICBpbmxpbmUtc2l6ZTogMTIuNXJlbTtcbiAgICBtaW4tYmxvY2stc2l6ZTogMi41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCAjMDAwO1xuICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZpZWxkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgdHVpLWlucHV0IHtcbiAgICAgICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgfVxufVxuXG4uaW5wdXQsXG4ub3V0cHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmlucHV0IHtcbiAgICBsZWZ0OiAtMC41cmVtO1xuICAgIHRvcDogMC4yNXJlbTtcbn1cblxuLm91dHB1dC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5vdXRwdXQge1xuICAgIHJpZ2h0OiAtMS44MTI1cmVtO1xuICAgIHRvcDogMC43NXJlbTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9tb2R1bGVzL25vZGVzL2Zvcm0tbm9kZS9mb3JtLW5vZGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRjs7O0NBR0M7QUFKRDtFQUNJLGNBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQU1KO0FBSEE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUtKO0FBUkE7RUFNUSxpQkFBQTtBQUtSO0FBREE7O0VBRUksa0JBQUE7RUFDQSxVQUFBO0FBR0o7QUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBRUo7QUFDQTtFQUNJLGtCQUFBO0FBQ0o7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUVBLG8rQ0FBbytDIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnQHRhaWdhLXVpL2NvcmUvc3R5bGVzL3RhaWdhLXVpLWxvY2FsJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1iYXNlLTAxKTtcbiAgICBpbmxpbmUtc2l6ZTogMTIuNXJlbTtcbiAgICBtaW4tYmxvY2stc2l6ZTogMi41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCAjMDAwO1xuICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZpZWxkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgdHVpLWlucHV0IHtcbiAgICAgICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgfVxufVxuXG4uaW5wdXQsXG4ub3V0cHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmlucHV0IHtcbiAgICBsZWZ0OiAtMC41cmVtO1xuICAgIHRvcDogMC4yNXJlbTtcbn1cblxuLm91dHB1dC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5vdXRwdXQge1xuICAgIHJpZ2h0OiAtMS44MTI1cmVtO1xuICAgIHRvcDogMC43NXJlbTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 5989:
/*!******************************************************!*\
  !*** ./projects/demo/src/app/modules/nodes/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormNodeComponent: () => (/* reexport safe */ _form_node_form_node_component__WEBPACK_IMPORTED_MODULE_0__.FormNodeComponent),
/* harmony export */   InfoNodeComponent: () => (/* reexport safe */ _info_node_info_node_component__WEBPACK_IMPORTED_MODULE_1__.InfoNodeComponent),
/* harmony export */   MiniNodeComponent: () => (/* reexport safe */ _mini_node_mini_node_component__WEBPACK_IMPORTED_MODULE_2__.MiniNodeComponent),
/* harmony export */   SimpleNodeComponent: () => (/* reexport safe */ _simple_node_simple_node_component__WEBPACK_IMPORTED_MODULE_3__.SimpleNodeComponent)
/* harmony export */ });
/* harmony import */ var _form_node_form_node_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-node/form-node.component */ 5979);
/* harmony import */ var _info_node_info_node_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info-node/info-node.component */ 8367);
/* harmony import */ var _mini_node_mini_node_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mini-node/mini-node.component */ 9951);
/* harmony import */ var _simple_node_simple_node_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simple-node/simple-node.component */ 3539);





/***/ }),

/***/ 8367:
/*!***********************************************************************!*\
  !*** ../../../app/modules/nodes/info-node/info-node.component.ts?raw ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfoNodeComponent: () => (/* binding */ InfoNodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9191);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 5577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6623);
var _InfoNodeComponent;



class InfoNodeComponent extends _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DrawFlowBaseNode {}
_InfoNodeComponent = InfoNodeComponent;
_InfoNodeComponent.ɵfac = /*@__PURE__*/function () {
  let ɵInfoNodeComponent_BaseFactory;
  return function InfoNodeComponent_Factory(t) {
    return (ɵInfoNodeComponent_BaseFactory || (ɵInfoNodeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_InfoNodeComponent)))(t || _InfoNodeComponent);
  };
}();
_InfoNodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _InfoNodeComponent,
  selectors: [["app-info-node"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 17,
  vars: 0,
  consts: [[1, "tui-text_body-xs"], [1, "tui-list", "tui-list_extra-small"], [1, "tui-list__item"]],
  template: function InfoNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This node is your first step towards mastering the powerful features of our editor. Feel free to move nodes and connections around to better organize your graphs.\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Deleting Elements:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 1)(5, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Select the node or connection you wish to remove.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Press the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Backspace");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " or ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " key. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Explore, experiment, and create complex data structures with ease!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  background: var(--tui-base-09);\n  inline-size: 30rem;\n  box-shadow: var(--tui-shadow);\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  border: 0.0625rem solid var(--tui-positive);\n  transition: border-color 0.2s ease-in-out;\n  color: var(--tui-base-01);\n}\n.tui-list__item[_ngcontent-%COMP%] {\n  color: var(--tui-base-01);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8tbm9kZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSwyQ0FBQTtFQUNBLHlDQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUVBO0VBQ0kseUJBQUE7QUFBSiIsImZpbGUiOiJpbmZvLW5vZGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICAgIGlubGluZS1zaXplOiAzMHJlbTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS10dWktc2hhZG93KTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLXR1aS1wb3NpdGl2ZSk7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKTtcbn1cblxuLnR1aS1saXN0X19pdGVtIHtcbiAgICBjb2xvcjogdmFyKC0tdHVpLWJhc2UtMDEpO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9tb2R1bGVzL25vZGVzL2luZm8tbm9kZS9pbmZvLW5vZGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkNBQUE7RUFDQSx5Q0FBQTtFQUNBLHlCQUFBO0FBQ0o7QUFFQTtFQUNJLHlCQUFBO0FBQUo7O0FBRUEsdzNCQUF3M0IiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICAgIGlubGluZS1zaXplOiAzMHJlbTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS10dWktc2hhZG93KTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLXR1aS1wb3NpdGl2ZSk7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKTtcbn1cblxuLnR1aS1saXN0X19pdGVtIHtcbiAgICBjb2xvcjogdmFyKC0tdHVpLWJhc2UtMDEpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 9951:
/*!******************************************************************************!*\
  !*** ./projects/demo/src/app/modules/nodes/mini-node/mini-node.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MiniNodeComponent: () => (/* binding */ MiniNodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9191);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 5577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6623);
var _MiniNodeComponent;




const _c0 = function (a0) {
  return {
    nodeId: a0,
    connectorId: "input-1",
    single: false
  };
};
function MiniNodeComponent_df_input_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "df-input", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r0.nodeId));
  }
}
const _c1 = function (a0) {
  return {
    nodeId: a0,
    connectorId: "output-1",
    single: false
  };
};
function MiniNodeComponent_df_output_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "df-output", 4);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c1, ctx_r1.nodeId));
  }
}
class MiniNodeComponent extends _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DrawFlowBaseNode {}
_MiniNodeComponent = MiniNodeComponent;
_MiniNodeComponent.ɵfac = /*@__PURE__*/function () {
  let ɵMiniNodeComponent_BaseFactory;
  return function MiniNodeComponent_Factory(t) {
    return (ɵMiniNodeComponent_BaseFactory || (ɵMiniNodeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_MiniNodeComponent)))(t || _MiniNodeComponent);
  };
}();
_MiniNodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _MiniNodeComponent,
  selectors: [["app-mini-node"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 4,
  vars: 3,
  consts: [["class", "input", 3, "connectorData", 4, "ngIf"], [1, "tui-text_body-xs"], ["class", "output", 3, "connectorData", 4, "ngIf"], [1, "input", 3, "connectorData"], [1, "output", 3, "connectorData"]],
  template: function MiniNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MiniNodeComponent_df_input_0_Template, 1, 3, "df-input", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MiniNodeComponent_df_output_3_Template, 1, 3, "df-output", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.startNode);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Node ", ctx.model.index, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.endNode);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfInputComponent, _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfOutputComponent],
  styles: ["\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  display: flex;\n  background: var(--tui-base-09);\n  inline-size: 3.125rem;\n  block-size: 3.125rem;\n  padding: 0.5rem;\n  border: 0.0625rem solid var(--tui-base-01);\n  transition: border-color 0.2s ease-in-out;\n  color: var(--tui-base-01);\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n}\n.input[_ngcontent-%COMP%], .output[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.input[_ngcontent-%COMP%] {\n  left: -0.5rem;\n  top: 0.5rem;\n}\n.output-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.output[_ngcontent-%COMP%] {\n  right: -0.5rem;\n  bottom: 0.5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmktbm9kZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGOzs7Q0FHQztBQUpEO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFNSjtBQUhBOztFQUVJLGtCQUFBO0FBS0o7QUFGQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBSUo7QUFEQTtFQUNJLGtCQUFBO0FBR0o7QUFBQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBRUoiLCJmaWxlIjoibWluaS1ub2RlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnQHRhaWdhLXVpL2NvcmUvc3R5bGVzL3RhaWdhLXVpLWxvY2FsJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICAgIGlubGluZS1zaXplOiAzLjEyNXJlbTtcbiAgICBibG9jay1zaXplOiAzLjEyNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tdHVpLWJhc2UtMDEpO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGNvbG9yOiB2YXIoLS10dWktYmFzZS0wMSk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uaW5wdXQsXG4ub3V0cHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5pbnB1dCB7XG4gICAgbGVmdDogLTAuNXJlbTtcbiAgICB0b3A6IDAuNXJlbTtcbn1cblxuLm91dHB1dC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5vdXRwdXQge1xuICAgIHJpZ2h0OiAtMC41cmVtO1xuICAgIGJvdHRvbTogMC41cmVtO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9tb2R1bGVzL25vZGVzL21pbmktbm9kZS9taW5pLW5vZGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRjs7O0NBR0M7QUFKRDtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7RUFDQSx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBTUo7QUFIQTs7RUFFSSxrQkFBQTtBQUtKO0FBRkE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQUlKO0FBREE7RUFDSSxrQkFBQTtBQUdKO0FBQUE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUVBLG8zQ0FBbzNDIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnQHRhaWdhLXVpL2NvcmUvc3R5bGVzL3RhaWdhLXVpLWxvY2FsJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICAgIGlubGluZS1zaXplOiAzLjEyNXJlbTtcbiAgICBibG9jay1zaXplOiAzLjEyNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tdHVpLWJhc2UtMDEpO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGNvbG9yOiB2YXIoLS10dWktYmFzZS0wMSk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uaW5wdXQsXG4ub3V0cHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5pbnB1dCB7XG4gICAgbGVmdDogLTAuNXJlbTtcbiAgICB0b3A6IDAuNXJlbTtcbn1cblxuLm91dHB1dC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5vdXRwdXQge1xuICAgIHJpZ2h0OiAtMC41cmVtO1xuICAgIGJvdHRvbTogMC41cmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 3539:
/*!***************************************************************************!*\
  !*** ../../../app/modules/nodes/simple-node/simple-node.component.ts?raw ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleNodeComponent: () => (/* binding */ SimpleNodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9191);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 5577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6623);
var _SimpleNodeComponent;



const _c0 = function (a0, a1) {
  return {
    nodeId: a0,
    connectorId: a1,
    single: false
  };
};
function SimpleNodeComponent_df_input_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "df-input", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r0.nodeId, ctx_r0.nodeId + "-input-1"));
  }
}
function SimpleNodeComponent_df_output_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "df-output", 4);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r1.nodeId, ctx_r1.nodeId + "-output-1"));
  }
}
class SimpleNodeComponent extends _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DrawFlowBaseNode {}
_SimpleNodeComponent = SimpleNodeComponent;
_SimpleNodeComponent.ɵfac = /*@__PURE__*/function () {
  let ɵSimpleNodeComponent_BaseFactory;
  return function SimpleNodeComponent_Factory(t) {
    return (ɵSimpleNodeComponent_BaseFactory || (ɵSimpleNodeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_SimpleNodeComponent)))(t || _SimpleNodeComponent);
  };
}();
_SimpleNodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _SimpleNodeComponent,
  selectors: [["app-simple-node"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 4,
  vars: 3,
  consts: [["class", "input", 3, "connectorData", 4, "ngIf"], [1, "tui-text_body-xs"], ["class", "output", 3, "connectorData", 4, "ngIf"], [1, "input", 3, "connectorData"], [1, "output", 3, "connectorData"]],
  template: function SimpleNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SimpleNodeComponent_df_input_0_Template, 1, 4, "df-input", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SimpleNodeComponent_df_output_3_Template, 1, 4, "df-output", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.startNode);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.model.text);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.endNode);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfInputComponent, _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfOutputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  background: var(--tui-base-09);\n  inline-size: 10rem;\n  box-shadow: var(--tui-shadow);\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  border: 0.0625rem solid transparent;\n  transition: border-color 0.2s ease-in-out;\n  color: var(--tui-base-01);\n}\n.df-selected[_nghost-%COMP%] {\n  border-color: var(--tui-background-accent-2);\n}\n.input[_ngcontent-%COMP%], .output[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n}\n.input[_ngcontent-%COMP%] {\n  left: -0.5rem;\n  top: 0.25rem;\n}\n.output-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.output[_ngcontent-%COMP%] {\n  right: -0.5rem;\n  top: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbXBsZS1ub2RlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7RUFDQSx5QkFBQTtBQUNKO0FBQ0k7RUFDSSw0Q0FBQTtBQUNSO0FBR0E7O0VBRUksa0JBQUE7RUFDQSxVQUFBO0FBREo7QUFJQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBRko7QUFLQTtFQUNJLGtCQUFBO0FBSEo7QUFNQTtFQUNJLGNBQUE7RUFDQSxNQUFBO0FBSkoiLCJmaWxlIjoic2ltcGxlLW5vZGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktYmFzZS0wOSk7XG4gICAgaW5saW5lLXNpemU6IDEwcmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXR1aS1zaGFkb3cpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKTtcblxuICAgICYuZGYtc2VsZWN0ZWQge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1iYWNrZ3JvdW5kLWFjY2VudC0yKTtcbiAgICB9XG59XG5cbi5pbnB1dCxcbi5vdXRwdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uaW5wdXQge1xuICAgIGxlZnQ6IC0wLjVyZW07XG4gICAgdG9wOiAwLjI1cmVtO1xufVxuXG4ub3V0cHV0LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm91dHB1dCB7XG4gICAgcmlnaHQ6IC0wLjVyZW07XG4gICAgdG9wOiAwO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9tb2R1bGVzL25vZGVzL3NpbXBsZS1ub2RlL3NpbXBsZS1ub2RlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7RUFDQSx5QkFBQTtBQUNKO0FBQ0k7RUFDSSw0Q0FBQTtBQUNSO0FBR0E7O0VBRUksa0JBQUE7RUFDQSxVQUFBO0FBREo7QUFJQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBRko7QUFLQTtFQUNJLGtCQUFBO0FBSEo7QUFNQTtFQUNJLGNBQUE7RUFDQSxNQUFBO0FBSko7O0FBRUEsbzFDQUFvMUMiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktYmFzZS0wOSk7XG4gICAgaW5saW5lLXNpemU6IDEwcmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXR1aS1zaGFkb3cpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKTtcblxuICAgICYuZGYtc2VsZWN0ZWQge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1iYWNrZ3JvdW5kLWFjY2VudC0yKTtcbiAgICB9XG59XG5cbi5pbnB1dCxcbi5vdXRwdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uaW5wdXQge1xuICAgIGxlZnQ6IC0wLjVyZW07XG4gICAgdG9wOiAwLjI1cmVtO1xufVxuXG4ub3V0cHV0LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm91dHB1dCB7XG4gICAgcmlnaHQ6IC0wLjVyZW07XG4gICAgdG9wOiAwO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 9550:
/*!*******************************************!*\
  !*** ./projects/demo/src/main.browser.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4199);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ 1541);
/* harmony import */ var _app_app_browser_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.browser.module */ 4952);



document.addEventListener('DOMContentLoaded', () => {
  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.platformBrowser().bootstrapModule(_app_app_browser_module__WEBPACK_IMPORTED_MODULE_1__.AppBrowserModule).then(ref => {
    const windowRef = window;
    // Ensure Angular destroys itself on hot reloads for Stackblitz
    if (windowRef.ngRef) {
      windowRef.ngRef.destroy();
    }
    windowRef.ngRef = ref;
  }).catch(err => console.error(err));
});

/***/ }),

/***/ 8986:
/*!******************************************!*\
  !*** ./projects/demo/src/pages/pages.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEMO_PAGES: () => (/* binding */ DEMO_PAGES)
/* harmony export */ });
/* harmony import */ var _app_constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/constants/constants */ 597);

const DEMO_PAGES = [{
  section: 'Documentation',
  title: 'Quickstart',
  route: _app_constants_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.Quickstart
}, {
  section: 'Documentation',
  title: 'Terms and Definitions',
  route: _app_constants_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.TermsAndDefinitions
}, {
  section: 'Documentation',
  title: 'PanZoom Configuration',
  route: _app_constants_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.PanZoom
}, {
  section: 'Documentation',
  title: 'Creating Nodes',
  route: _app_constants_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.Nodes
}, {
  section: 'Documentation',
  title: 'Connectors',
  route: _app_constants_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.Connectors
}, {
  section: 'Examples',
  title: 'Simple example',
  route: _app_constants_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.SimpleExample
}, {
  section: 'Examples',
  title: 'Feature Overview',
  route: _app_constants_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.Overview
}, {
  section: 'Examples',
  title: 'Editor example',
  route: _app_constants_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.Editor
}, {
  section: 'Examples',
  title: 'Stress Test',
  route: _app_constants_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.StressTest
}];

/***/ }),

/***/ 1541:
/*!****************************************!*\
  !*** ./projects/demo/src/polyfills.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js */ 7203);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ 5577:
/*!********************************************!*\
  !*** ./projects/ng-draw-flow/src/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DF_PAN_ZOOM_DEFAULT_OPTIONS: () => (/* reexport safe */ _lib_components_pan_zoom_pan_zoom_options__WEBPACK_IMPORTED_MODULE_1__.DF_PAN_ZOOM_DEFAULT_OPTIONS),
/* harmony export */   DF_PAN_ZOOM_OPTIONS: () => (/* reexport safe */ _lib_components_pan_zoom_pan_zoom_options__WEBPACK_IMPORTED_MODULE_1__.DF_PAN_ZOOM_OPTIONS),
/* harmony export */   DRAW_FLOW_COMPONENTS: () => (/* reexport safe */ _lib_ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_5__.DRAW_FLOW_COMPONENTS),
/* harmony export */   DRAW_FLOW_ROOT_ELEMENT: () => (/* reexport safe */ _lib_ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_5__.DRAW_FLOW_ROOT_ELEMENT),
/* harmony export */   DfConnectionPoint: () => (/* reexport safe */ _lib_ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_3__.DfConnectionPoint),
/* harmony export */   DfInputComponent: () => (/* reexport safe */ _lib_components_connectors__WEBPACK_IMPORTED_MODULE_0__.DfInputComponent),
/* harmony export */   DfOutputComponent: () => (/* reexport safe */ _lib_components_connectors__WEBPACK_IMPORTED_MODULE_0__.DfOutputComponent),
/* harmony export */   DrawFlowBaseNode: () => (/* reexport safe */ _lib_ng_draw_flow_node_base__WEBPACK_IMPORTED_MODULE_6__.DrawFlowBaseNode),
/* harmony export */   NgDrawFlowComponent: () => (/* reexport safe */ _lib_ng_draw_flow_component__WEBPACK_IMPORTED_MODULE_2__.NgDrawFlowComponent),
/* harmony export */   dfPanZoomOptionsProvider: () => (/* reexport safe */ _lib_components_pan_zoom_pan_zoom_options__WEBPACK_IMPORTED_MODULE_1__.dfPanZoomOptionsProvider),
/* harmony export */   provideNgDrawFlowConfigs: () => (/* reexport safe */ _lib_ng_draw_flow_providers__WEBPACK_IMPORTED_MODULE_4__.provideNgDrawFlowConfigs)
/* harmony export */ });
/* harmony import */ var _lib_components_connectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/components/connectors */ 8783);
/* harmony import */ var _lib_components_pan_zoom_pan_zoom_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components/pan-zoom/pan-zoom.options */ 5741);
/* harmony import */ var _lib_ng_draw_flow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ng-draw-flow.component */ 2636);
/* harmony import */ var _lib_ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/ng-draw-flow.interfaces */ 1954);
/* harmony import */ var _lib_ng_draw_flow_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/ng-draw-flow.providers */ 1170);
/* harmony import */ var _lib_ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/ng-draw-flow.token */ 9497);
/* harmony import */ var _lib_ng_draw_flow_node_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/ng-draw-flow-node.base */ 9440);








/***/ }),

/***/ 3700:
/*!*************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/connection/connection.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectionComponent: () => (/* binding */ ConnectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 9191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3396);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9721);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 7757);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1082);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9746);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 4406);
/* harmony import */ var _directives_selectable_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../directives/selectable-element */ 1408);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers */ 315);
/* harmony import */ var _services_coordinates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/coordinates.service */ 5092);
/* harmony import */ var _connections_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connections.service */ 9976);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ 7846);
var _ConnectionComponent;









class ConnectionComponent {
  constructor() {
    this.connectionsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_connections_service__WEBPACK_IMPORTED_MODULE_3__.ConnectionsService);
    this.coordinatesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_services_coordinates_service__WEBPACK_IMPORTED_MODULE_2__.CoordinatesService);
    this.connectionSelected = false;
    this.maxCurvature = 50;
    this.connectionDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.path$ = this.coordinatesService.connectionPointsMapChange$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(50), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.observeOn)(rxjs__WEBPACK_IMPORTED_MODULE_8__.animationFrameScheduler), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => {
      const sourcePoint = this.getConnectionPoint(this.connection?.source);
      const targetPoint = this.getConnectionPoint(this.connection?.target);
      if (!sourcePoint || !targetPoint) {
        console.warn('One of the connection points not found');
        return [];
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([sourcePoint, targetPoint]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)(([prevSource, prevTarget], [currSource, currTarget]) => prevSource === currSource && prevTarget === currTarget));
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(([start, end]) => {
      const distance = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.calculateDistance)(start, end);
      const curvature = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.calculateCurvature)(distance, this.maxCurvature);
      return start && end ? (0,_utils__WEBPACK_IMPORTED_MODULE_4__.createCurvature)(start.x, start.y, end.x, end.y, curvature) : '';
    }));
  }
  handleKeyboardEvent(event) {
    if (!this.connectionSelected) {
      return;
    }
    event.preventDefault();
    this.connectionsService.removeConnection(this.connection);
    this.connectionDeleted.emit();
  }
  onSelectedChanged(selected) {
    this.connectionSelected = selected;
  }
  getConnectionPoint(connector) {
    const {
      nodeId,
      connectorType,
      connectorId
    } = connector;
    return this.coordinatesService.getConnectionPoint((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.connectorName)({
      nodeId,
      connectorType,
      connectorId
    }));
  }
}
_ConnectionComponent = ConnectionComponent;
_ConnectionComponent.ɵfac = function ConnectionComponent_Factory(t) {
  return new (t || _ConnectionComponent)();
};
_ConnectionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _ConnectionComponent,
  selectors: [["df-connection"]],
  hostBindings: function ConnectionComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown.delete", function ConnectionComponent_keydown_delete_HostBindingHandler($event) {
        return ctx.handleKeyboardEvent($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"])("keydown.backspace", function ConnectionComponent_keydown_backspace_HostBindingHandler($event) {
        return ctx.handleKeyboardEvent($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"]);
    }
  },
  inputs: {
    maxCurvature: "maxCurvature",
    connection: "connection"
  },
  outputs: {
    connectionDeleted: "connectionDeleted"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
  decls: 3,
  vars: 3,
  consts: [[1, "connection"], ["dfSelectableElement", "", 1, "main-path", 3, "selectionChanged"]],
  template: function ConnectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "svg", 0)(1, "path", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChanged", function ConnectionComponent_Template__svg_path_selectionChanged_1_listener($event) {
        return ctx.onSelectedChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("d", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx.path$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _directives_selectable_element__WEBPACK_IMPORTED_MODULE_0__.SelectableElementDirective],
  styles: [".connection[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  aspect-ratio: 1 / 1;\n}\n.connection[_ngcontent-%COMP%]   .main-path[_ngcontent-%COMP%] {\n  z-index: 0;\n  fill: none;\n  stroke-width: var(--df-connection-stroke-width);\n  stroke: var(--df-connection-color);\n  pointer-events: all;\n  transform: translateZ(0);\n}\n.connection[_ngcontent-%COMP%]   .main-path[_ngcontent-%COMP%]:hover {\n  stroke: var(--df-connection-color-hover);\n  cursor: pointer;\n}\n.connection[_ngcontent-%COMP%]   .main-path.df-selected[_ngcontent-%COMP%] {\n  stroke: var(--df-connection-color-active);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3Rpb24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBTkE7RUFRUSxVQUFBO0VBQ0EsVUFBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBQ1I7QUFDUTtFQUNJLHdDQUFBO0VBQ0EsZUFBQTtBQUNaO0FBRVE7RUFDSSx5Q0FBQTtBQUFaIiwiZmlsZSI6ImNvbm5lY3Rpb24uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29ubmVjdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XG5cbiAgICAubWFpbi1wYXRoIHtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiB2YXIoLS1kZi1jb25uZWN0aW9uLXN0cm9rZS13aWR0aCk7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvcik7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvci1ob3Zlcik7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLmRmLXNlbGVjdGVkIHtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvci1hY3RpdmUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLWRyYXctZmxvdy9zcmMvbGliL2NvbXBvbmVudHMvY29ubmVjdGlvbnMvY29ubmVjdGlvbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFOQTtFQVFRLFVBQUE7RUFDQSxVQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFDUjtBQUNRO0VBQ0ksd0NBQUE7RUFDQSxlQUFBO0FBQ1o7QUFFUTtFQUNJLHlDQUFBO0FBQVo7O0FBRUEsNHRDQUE0dEMiLCJzb3VyY2VzQ29udGVudCI6WyIuY29ubmVjdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XG5cbiAgICAubWFpbi1wYXRoIHtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiB2YXIoLS1kZi1jb25uZWN0aW9uLXN0cm9rZS13aWR0aCk7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvcik7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvci1ob3Zlcik7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLmRmLXNlbGVjdGVkIHtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvci1hY3RpdmUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 9976:
/*!*************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/connections.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectionsService: () => (/* binding */ ConnectionsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5536);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6623);
var _ConnectionsService;


class ConnectionsService {
  constructor() {
    this.connections$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.usedConnectors$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
  }
  addConnections(connections) {
    connections.forEach(connection => {
      const usedConnectors = [...this.usedConnectors$.value, connection.source.connectorId, connection.target.connectorId];
      this.usedConnectors$.next(usedConnectors);
    });
    this.connections$.next([...this.connections$.value, ...connections]);
  }
  removeConnection(connectionToRemove) {
    const filteredConnections = this.connections$.value.filter(existingConnection => !this.areConnectionsEqual(existingConnection, connectionToRemove));
    const usedConnectors = this.usedConnectors$.value.filter(connectorId => filteredConnections.some(connection => connection.source.connectorId === connectorId || connection.target.connectorId === connectorId));
    this.usedConnectors$.next(usedConnectors);
    this.connections$.next(filteredConnections);
  }
  removeConnectionsByNodeId(id) {
    const connectionsToKeep = this.connections$.value.filter(connection => connection.source.nodeId !== id && connection.target.nodeId !== id);
    const usedConnectors = this.usedConnectors$.value.filter(connectorId => connectionsToKeep.some(connection => connection.source.connectorId === connectorId || connection.target.connectorId === connectorId));
    this.usedConnectors$.next(usedConnectors);
    this.connections$.next(connectionsToKeep);
  }
  removeConnectionsByConnectorId(connectorIdToRemove) {
    if (!connectorIdToRemove) {
      return;
    }
    const connectionsToKeep = this.connections$.value.filter(connection => connection.source.connectorId !== connectorIdToRemove && connection.target.connectorId !== connectorIdToRemove);
    const usedConnectors = this.usedConnectors$.value.filter(connectorId => connectorId !== connectorIdToRemove);
    this.usedConnectors$.next(usedConnectors);
    this.connections$.next(connectionsToKeep);
  }
  areConnectionsEqual(connection1, connection2) {
    return connection1.source.nodeId === connection2.source.nodeId && connection1.source.connectorType === connection2.source.connectorType && connection1.source.connectorId === connection2.source.connectorId && connection1.target.nodeId === connection2.target.nodeId && connection1.target.connectorType === connection2.target.connectorType && connection1.target.connectorId === connection2.target.connectorId;
  }
}
_ConnectionsService = ConnectionsService;
_ConnectionsService.ɵfac = function ConnectionsService_Factory(t) {
  return new (t || _ConnectionsService)();
};
_ConnectionsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _ConnectionsService,
  factory: _ConnectionsService.ɵfac
});

/***/ }),

/***/ 1848:
/*!*************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/draft-connection/draft-connection.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DraftConnectionComponent: () => (/* binding */ DraftConnectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 9191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9721);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7757);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4406);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ 7846);
/* harmony import */ var _draft_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draft-connection.service */ 7232);
var _DraftConnectionComponent;






const _c0 = ["connectionPath"];
class DraftConnectionComponent {
  constructor() {
    this.draftConnectionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_draft_connection_service__WEBPACK_IMPORTED_MODULE_1__.DraftConnectionService);
    this.maxCurvature = 50;
    this.connectionCreated = this.draftConnectionService.connectionCreated$;
    this.path$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.combineLatest)([this.draftConnectionService.source$, this.draftConnectionService.target$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.observeOn)(rxjs__WEBPACK_IMPORTED_MODULE_5__.animationFrameScheduler), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(([sourcePoint, targetPoint]) => {
      const distance = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.calculateDistance)(sourcePoint, targetPoint);
      const curvature = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.calculateCurvature)(distance, this.maxCurvature);
      return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createCurvature)(sourcePoint.x, sourcePoint.y, targetPoint.x, targetPoint.y, curvature);
    }));
  }
}
_DraftConnectionComponent = DraftConnectionComponent;
_DraftConnectionComponent.ɵfac = function DraftConnectionComponent_Factory(t) {
  return new (t || _DraftConnectionComponent)();
};
_DraftConnectionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _DraftConnectionComponent,
  selectors: [["df-draft-connection"]],
  viewQuery: function DraftConnectionComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.connectionPath = _t.first);
    }
  },
  inputs: {
    maxCurvature: "maxCurvature"
  },
  outputs: {
    connectionCreated: "connectionCreated"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 4,
  vars: 3,
  consts: [[1, "connection", "draft-connection"], [1, "main-path"], ["connectionPath", ""]],
  template: function DraftConnectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "path", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("d", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx.path$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: [".connection[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  aspect-ratio: 1 / 1;\n}\n.connection[_ngcontent-%COMP%]   .main-path[_ngcontent-%COMP%] {\n  z-index: 0;\n  fill: none;\n  stroke-width: var(--df-connection-stroke-width);\n  stroke: var(--df-connection-color);\n  pointer-events: all;\n  transform: translateZ(0);\n}\n.connection[_ngcontent-%COMP%]   .main-path[_ngcontent-%COMP%]:hover {\n  stroke: var(--df-connection-color-hover);\n  cursor: pointer;\n}\n.connection[_ngcontent-%COMP%]   .main-path.df-selected[_ngcontent-%COMP%] {\n  stroke: var(--df-connection-color-active);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3Rpb24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBTkE7RUFRUSxVQUFBO0VBQ0EsVUFBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBQ1I7QUFDUTtFQUNJLHdDQUFBO0VBQ0EsZUFBQTtBQUNaO0FBRVE7RUFDSSx5Q0FBQTtBQUFaIiwiZmlsZSI6ImNvbm5lY3Rpb24uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29ubmVjdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XG5cbiAgICAubWFpbi1wYXRoIHtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiB2YXIoLS1kZi1jb25uZWN0aW9uLXN0cm9rZS13aWR0aCk7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvcik7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvci1ob3Zlcik7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLmRmLXNlbGVjdGVkIHtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvci1hY3RpdmUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLWRyYXctZmxvdy9zcmMvbGliL2NvbXBvbmVudHMvY29ubmVjdGlvbnMvY29ubmVjdGlvbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFOQTtFQVFRLFVBQUE7RUFDQSxVQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFDUjtBQUNRO0VBQ0ksd0NBQUE7RUFDQSxlQUFBO0FBQ1o7QUFFUTtFQUNJLHlDQUFBO0FBQVo7O0FBRUEsNHRDQUE0dEMiLCJzb3VyY2VzQ29udGVudCI6WyIuY29ubmVjdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XG5cbiAgICAubWFpbi1wYXRoIHtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiB2YXIoLS1kZi1jb25uZWN0aW9uLXN0cm9rZS13aWR0aCk7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvcik7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvci1ob3Zlcik7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLmRmLXNlbGVjdGVkIHtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvci1hY3RpdmUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 7232:
/*!***********************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/draft-connection/draft-connection.service.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DraftConnectionService: () => (/* binding */ DraftConnectionService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 9191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3150);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 5536);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1969);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 1082);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 7066);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 1856);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 9721);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 7757);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 3246);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 4406);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 5213);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 2393);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers */ 315);
/* harmony import */ var _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ng-draw-flow.interfaces */ 1954);
/* harmony import */ var _services_coordinates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/coordinates.service */ 5092);
/* harmony import */ var _pan_zoom_pan_zoom_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pan-zoom/pan-zoom.service */ 6592);
/* harmony import */ var _utils_get_coonector_dataset_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/get-coonector-dataset.util */ 134);
var _DraftConnectionService;









class DraftConnectionService {
  constructor() {
    this.panZoomService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_pan_zoom_pan_zoom_service__WEBPACK_IMPORTED_MODULE_3__.PanZoomService);
    this.coordinatesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_services_coordinates_service__WEBPACK_IMPORTED_MODULE_2__.CoordinatesService);
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.source$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(_helpers__WEBPACK_IMPORTED_MODULE_0__.INITIAL_COORDINATES);
    this.target$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(_helpers__WEBPACK_IMPORTED_MODULE_0__.INITIAL_COORDINATES);
    this.isConnectionCreating$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(false);
    this.connectionCreated$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.connection$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.connectionSubscription();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  connectionSubscription() {
    const document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT);
    this.connection$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(connectorData => this.onDragStart(connectorData)), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.fromEvent)(document, 'pointermove')), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.filter)(() => this.isConnectionCreating$.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.observeOn)(rxjs__WEBPACK_IMPORTED_MODULE_14__.animationFrameScheduler), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.pairwise)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.map)(([previousEvent, currentEvent]) => this.onDragMove(previousEvent, currentEvent)),
    // eslint-disable-next-line rxjs/no-unsafe-takeuntil
    (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.fromEvent)(document, 'pointerup').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.filter)(() => this.isConnectionCreating$.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(event => this.onDragEnd(event)))),
    // eslint-disable-next-line rxjs/no-unsafe-takeuntil
    (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.repeat)()).subscribe();
  }
  onDragStart(connector) {
    this.sourceConnector = connector;
    this.isConnectionCreating$.next(true);
    const sourceId = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.connectorName)(connector);
    const sourcePoint = this.coordinatesService.getConnectionPoint(sourceId)?.value;
    if (!sourcePoint) {
      return;
    }
    this.source$.next(sourcePoint);
    this.target$.next(sourcePoint);
  }
  onDragMove(previousEvent, currentEvent) {
    const {
      deltaX,
      deltaY
    } = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.dfDistanceBetweenPoints)(previousEvent, currentEvent);
    const {
      zoom
    } = this.panZoomService.panzoomModel;
    this.target$.next({
      x: this.target$.value.x + deltaX / zoom,
      y: this.target$.value.y + deltaY / zoom
    });
  }
  onDragEnd(event) {
    const target = event.target;
    const targetConnector = target ? (0,_utils_get_coonector_dataset_util__WEBPACK_IMPORTED_MODULE_4__.getConnectorDataset)(target) : null;
    if (targetConnector && targetConnector.connectorType === _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Input) {
      this.connectionCreated$.next({
        source: this.sourceConnector,
        target: targetConnector
      });
    }
    this.resetConnectors();
    this.isConnectionCreating$.next(false);
  }
  resetConnectors() {
    this.source$.next(_helpers__WEBPACK_IMPORTED_MODULE_0__.INITIAL_COORDINATES);
    this.target$.next(_helpers__WEBPACK_IMPORTED_MODULE_0__.INITIAL_COORDINATES);
  }
}
_DraftConnectionService = DraftConnectionService;
_DraftConnectionService.ɵfac = function DraftConnectionService_Factory(t) {
  return new (t || _DraftConnectionService)();
};
_DraftConnectionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: _DraftConnectionService,
  factory: _DraftConnectionService.ɵfac
});

/***/ }),

/***/ 554:
/*!************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/calculate-curvature.util.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateCurvature: () => (/* binding */ calculateCurvature)
/* harmony export */ });
function calculateCurvature(distance, maxCurvature) {
  const maxDistanceForCurvature = 150;
  return Math.min(distance, maxDistanceForCurvature) / maxDistanceForCurvature * maxCurvature;
}

/***/ }),

/***/ 9176:
/*!***********************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/calculate-distance.util.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateDistance: () => (/* binding */ calculateDistance)
/* harmony export */ });
function calculateDistance(sourcePoint, targetPoint) {
  return Math.sqrt((targetPoint.x - sourcePoint.x) ** 2 + (targetPoint.y - sourcePoint.y) ** 2);
}

/***/ }),

/***/ 5192:
/*!*********************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/create-curvature.util.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCurvature: () => (/* binding */ createCurvature)
/* harmony export */ });
function createCurvature(startX, startY, endX, endY, curvature) {
  return `M ${startX} ${startY} C ${startX + curvature} ${startY}, ${endX - curvature} ${endY}, ${endX} ${endY}`;
}

/***/ }),

/***/ 134:
/*!**************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/get-coonector-dataset.util.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getConnectorDataset: () => (/* binding */ getConnectorDataset)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers */ 315);

function getConnectorDataset(element) {
  const {
    nodeId,
    connectorId,
    connectorType
  } = element.dataset;
  const isValidConnector = nodeId && connectorId && connectorType && (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isConnectorType)(connectorType);
  return isValidConnector ? {
    nodeId,
    connectorId,
    connectorType
  } : null;
}

/***/ }),

/***/ 7846:
/*!*****************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/index.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateCurvature: () => (/* reexport safe */ _calculate_curvature_util__WEBPACK_IMPORTED_MODULE_0__.calculateCurvature),
/* harmony export */   calculateDistance: () => (/* reexport safe */ _calculate_distance_util__WEBPACK_IMPORTED_MODULE_1__.calculateDistance),
/* harmony export */   createCurvature: () => (/* reexport safe */ _create_curvature_util__WEBPACK_IMPORTED_MODULE_2__.createCurvature)
/* harmony export */ });
/* harmony import */ var _calculate_curvature_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculate-curvature.util */ 554);
/* harmony import */ var _calculate_distance_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculate-distance.util */ 9176);
/* harmony import */ var _create_curvature_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-curvature.util */ 5192);




/***/ }),

/***/ 1008:
/*!*******************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connectors/base-connector.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseConnector: () => (/* binding */ BaseConnector)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 8065);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1856);
/* harmony import */ var _connections_connections_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../connections/connections.service */ 9976);
var _BaseConnector;





class BaseConnector {
  constructor() {
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DestroyRef);
    this.isDisabled = false;
    this.nativeElement = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef).nativeElement;
    this.connectionsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_connections_connections_service__WEBPACK_IMPORTED_MODULE_0__.ConnectionsService);
    this.sub = this.connectionsService.usedConnectors$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(() => !!this.data?.connectorId), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__.takeUntilDestroyed)()).subscribe(usedConnectorIds => {
      this.setupDisabledState(usedConnectorIds.includes(this.data.connectorId));
    });
  }
  get bindNodeId() {
    return this.data?.nodeId;
  }
  get bindConnectorId() {
    return this.data?.connectorId;
  }
  setupDisabledState(connected) {
    if (connected) {
      this.nativeElement.setAttribute('data-connected', 'true');
    } else {
      this.nativeElement.removeAttribute('data-connected');
    }
    this.isDisabled = this.data.single && connected;
    this.nativeElement.classList.toggle('df-disabled', this.isDisabled);
  }
}
_BaseConnector = BaseConnector;
_BaseConnector.ɵfac = function BaseConnector_Factory(t) {
  return new (t || _BaseConnector)();
};
_BaseConnector.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: _BaseConnector,
  hostVars: 3,
  hostBindings: function BaseConnector_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-node-id", ctx.bindNodeId)("data-connector-id", ctx.bindConnectorId)("data-connector-type", ctx.connectorType);
    }
  }
});

/***/ }),

/***/ 8783:
/*!**********************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connectors/index.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DfInputComponent: () => (/* reexport safe */ _input_component__WEBPACK_IMPORTED_MODULE_0__.DfInputComponent),
/* harmony export */   DfOutputComponent: () => (/* reexport safe */ _output_component__WEBPACK_IMPORTED_MODULE_1__.DfOutputComponent)
/* harmony export */ });
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.component */ 750);
/* harmony import */ var _output_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./output.component */ 3451);



/***/ }),

/***/ 750:
/*!********************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connectors/input.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DfInputComponent: () => (/* binding */ DfInputComponent)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ng-draw-flow.interfaces */ 1954);
/* harmony import */ var _base_connector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-connector */ 1008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6623);
var _DfInputComponent;



class DfInputComponent extends _base_connector__WEBPACK_IMPORTED_MODULE_1__.BaseConnector {
  constructor() {
    super(...arguments);
    this.connectorType = _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Input;
  }
  ngOnDestroy() {
    this.connectionsService.removeConnectionsByConnectorId(this.data.connectorId);
  }
}
_DfInputComponent = DfInputComponent;
_DfInputComponent.ɵfac = /*@__PURE__*/function () {
  let ɵDfInputComponent_BaseFactory;
  return function DfInputComponent_Factory(t) {
    return (ɵDfInputComponent_BaseFactory || (ɵDfInputComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_DfInputComponent)))(t || _DfInputComponent);
  };
}();
_DfInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _DfInputComponent,
  selectors: [["df-input"]],
  inputs: {
    data: ["connectorData", "data"]
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 0,
  vars: 0,
  template: function DfInputComponent_Template(rf, ctx) {},
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  inline-size: 1rem;\n  block-size: 1rem;\n  background: transparent;\n  border-radius: 50%;\n  cursor: crosshair;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]::before, [_nghost-%COMP%]::after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  border-radius: 50%;\n  inline-size: 0.5rem;\n  block-size: 0.5rem;\n}\n[_nghost-%COMP%]::before {\n  z-index: 1;\n  background: var(--df-connector-color);\n  transform: translate(-50%, -50%);\n}\n[_nghost-%COMP%]::after {\n  z-index: 0;\n  inline-size: 1rem;\n  block-size: 1rem;\n  background: var(--df-connector-color-hover);\n  transform: translate(-50%, -50%) scale(0);\n  transition: transform 0.2s ease-in-out;\n}\n[_nghost-%COMP%]:hover::after {\n  animation: _ngcontent-%COMP%_dfPulse 1.5s infinite;\n}\n.df-disabled[_nghost-%COMP%] {\n  pointer-events: none;\n}\n@keyframes _ngcontent-%COMP%_dfPulse {\n  0%,\n  100% {\n    transform: translate(-50%, -50%) scale(0);\n  }\n  50% {\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3Rvci5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQ0k7O0VBRUksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUVJO0VBQ0ksVUFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0NBQUE7QUFBUjtBQUdJO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esc0NBQUE7QUFEUjtBQUlJO0VBQ0ksZ0NBQUE7QUFGUjtBQUtJO0VBQ0ksb0JBQUE7QUFIUjtBQU9BO0VBQ0k7O0lBRUkseUNBQUE7RUFMTjtFQVFFO0lBQ0kseUNBQUE7RUFOTjtBQUNGIiwiZmlsZSI6ImNvbm5lY3Rvci5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGlubGluZS1zaXplOiAxcmVtO1xuICAgIGJsb2NrLXNpemU6IDFyZW07XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGlubGluZS1zaXplOiAwLjVyZW07XG4gICAgICAgIGJsb2NrLXNpemU6IDAuNXJlbTtcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kZi1jb25uZWN0b3ItY29sb3IpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGlubGluZS1zaXplOiAxcmVtO1xuICAgICAgICBibG9jay1zaXplOiAxcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kZi1jb25uZWN0b3ItY29sb3ItaG92ZXIpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuXG4gICAgJjpob3Zlcjo6YWZ0ZXIge1xuICAgICAgICBhbmltYXRpb246IGRmUHVsc2UgMS41cyBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAmLmRmLWRpc2FibGVkIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRmUHVsc2Uge1xuICAgIDAlLFxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcbiAgICB9XG5cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLWRyYXctZmxvdy9zcmMvbGliL2NvbXBvbmVudHMvY29ubmVjdG9ycy9jb25uZWN0b3Iuc3R5bGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUNJOztFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ1I7QUFFSTtFQUNJLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLGdDQUFBO0FBQVI7QUFHSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSx5Q0FBQTtFQUNBLHNDQUFBO0FBRFI7QUFJSTtFQUNJLGdDQUFBO0FBRlI7QUFLSTtFQUNJLG9CQUFBO0FBSFI7QUFPQTtFQUNJOztJQUVJLHlDQUFBO0VBTE47RUFRRTtJQUNJLHlDQUFBO0VBTk47QUFDRjs7QUFFQSx3cUVBQXdxRSIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBpbmxpbmUtc2l6ZTogMXJlbTtcbiAgICBibG9jay1zaXplOiAxcmVtO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgJjo6YmVmb3JlLFxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBpbmxpbmUtc2l6ZTogMC41cmVtO1xuICAgICAgICBibG9jay1zaXplOiAwLjVyZW07XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGYtY29ubmVjdG9yLWNvbG9yKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBpbmxpbmUtc2l6ZTogMXJlbTtcbiAgICAgICAgYmxvY2stc2l6ZTogMXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGYtY29ubmVjdG9yLWNvbG9yLWhvdmVyKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIH1cblxuICAgICY6aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgYW5pbWF0aW9uOiBkZlB1bHNlIDEuNXMgaW5maW5pdGU7XG4gICAgfVxuXG4gICAgJi5kZi1kaXNhYmxlZCB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBkZlB1bHNlIHtcbiAgICAwJSxcbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XG4gICAgfVxuXG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 3451:
/*!*********************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connectors/output.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DfOutputComponent: () => (/* binding */ DfOutputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ng-draw-flow.interfaces */ 1954);
/* harmony import */ var _connections_draft_connection_draft_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../connections/draft-connection/draft-connection.service */ 7232);
/* harmony import */ var _base_connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-connector */ 1008);
var _DfOutputComponent;





class DfOutputComponent extends _base_connector__WEBPACK_IMPORTED_MODULE_2__.BaseConnector {
  constructor() {
    super(...arguments);
    this.connectorType = _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Output;
    this.draftConnectionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_connections_draft_connection_draft_connection_service__WEBPACK_IMPORTED_MODULE_1__.DraftConnectionService);
  }
  onDragStart(_event) {
    const {
      nodeId,
      connectorId
    } = this.data;
    if (!nodeId || !connectorId || this.isDisabled) {
      return;
    }
    this.draftConnectionService.connection$.next({
      nodeId,
      connectorId,
      connectorType: _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Output
    });
  }
  ngOnDestroy() {
    this.connectionsService.removeConnectionsByConnectorId(this.data.connectorId);
  }
}
_DfOutputComponent = DfOutputComponent;
_DfOutputComponent.ɵfac = /*@__PURE__*/function () {
  let ɵDfOutputComponent_BaseFactory;
  return function DfOutputComponent_Factory(t) {
    return (ɵDfOutputComponent_BaseFactory || (ɵDfOutputComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](_DfOutputComponent)))(t || _DfOutputComponent);
  };
}();
_DfOutputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _DfOutputComponent,
  selectors: [["df-output"]],
  hostBindings: function DfOutputComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pointerdown.stop", function DfOutputComponent_pointerdown_stop_HostBindingHandler() {
        return ctx.onDragStart();
      });
    }
  },
  inputs: {
    data: ["connectorData", "data"]
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 0,
  vars: 0,
  template: function DfOutputComponent_Template(rf, ctx) {},
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  inline-size: 1rem;\n  block-size: 1rem;\n  background: transparent;\n  border-radius: 50%;\n  cursor: crosshair;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]::before, [_nghost-%COMP%]::after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  border-radius: 50%;\n  inline-size: 0.5rem;\n  block-size: 0.5rem;\n}\n[_nghost-%COMP%]::before {\n  z-index: 1;\n  background: var(--df-connector-color);\n  transform: translate(-50%, -50%);\n}\n[_nghost-%COMP%]::after {\n  z-index: 0;\n  inline-size: 1rem;\n  block-size: 1rem;\n  background: var(--df-connector-color-hover);\n  transform: translate(-50%, -50%) scale(0);\n  transition: transform 0.2s ease-in-out;\n}\n[_nghost-%COMP%]:hover::after {\n  animation: _ngcontent-%COMP%_dfPulse 1.5s infinite;\n}\n.df-disabled[_nghost-%COMP%] {\n  pointer-events: none;\n}\n@keyframes _ngcontent-%COMP%_dfPulse {\n  0%,\n  100% {\n    transform: translate(-50%, -50%) scale(0);\n  }\n  50% {\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3Rvci5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQ0k7O0VBRUksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUVJO0VBQ0ksVUFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0NBQUE7QUFBUjtBQUdJO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esc0NBQUE7QUFEUjtBQUlJO0VBQ0ksZ0NBQUE7QUFGUjtBQUtJO0VBQ0ksb0JBQUE7QUFIUjtBQU9BO0VBQ0k7O0lBRUkseUNBQUE7RUFMTjtFQVFFO0lBQ0kseUNBQUE7RUFOTjtBQUNGIiwiZmlsZSI6ImNvbm5lY3Rvci5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGlubGluZS1zaXplOiAxcmVtO1xuICAgIGJsb2NrLXNpemU6IDFyZW07XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGlubGluZS1zaXplOiAwLjVyZW07XG4gICAgICAgIGJsb2NrLXNpemU6IDAuNXJlbTtcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kZi1jb25uZWN0b3ItY29sb3IpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGlubGluZS1zaXplOiAxcmVtO1xuICAgICAgICBibG9jay1zaXplOiAxcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kZi1jb25uZWN0b3ItY29sb3ItaG92ZXIpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuXG4gICAgJjpob3Zlcjo6YWZ0ZXIge1xuICAgICAgICBhbmltYXRpb246IGRmUHVsc2UgMS41cyBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAmLmRmLWRpc2FibGVkIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRmUHVsc2Uge1xuICAgIDAlLFxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcbiAgICB9XG5cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLWRyYXctZmxvdy9zcmMvbGliL2NvbXBvbmVudHMvY29ubmVjdG9ycy9jb25uZWN0b3Iuc3R5bGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUNJOztFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ1I7QUFFSTtFQUNJLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLGdDQUFBO0FBQVI7QUFHSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSx5Q0FBQTtFQUNBLHNDQUFBO0FBRFI7QUFJSTtFQUNJLGdDQUFBO0FBRlI7QUFLSTtFQUNJLG9CQUFBO0FBSFI7QUFPQTtFQUNJOztJQUVJLHlDQUFBO0VBTE47RUFRRTtJQUNJLHlDQUFBO0VBTk47QUFDRjs7QUFFQSx3cUVBQXdxRSIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBpbmxpbmUtc2l6ZTogMXJlbTtcbiAgICBibG9jay1zaXplOiAxcmVtO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgJjo6YmVmb3JlLFxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBpbmxpbmUtc2l6ZTogMC41cmVtO1xuICAgICAgICBibG9jay1zaXplOiAwLjVyZW07XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGYtY29ubmVjdG9yLWNvbG9yKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBpbmxpbmUtc2l6ZTogMXJlbTtcbiAgICAgICAgYmxvY2stc2l6ZTogMXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGYtY29ubmVjdG9yLWNvbG9yLWhvdmVyKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIH1cblxuICAgICY6aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgYW5pbWF0aW9uOiBkZlB1bHNlIDEuNXMgaW5maW5pdGU7XG4gICAgfVxuXG4gICAgJi5kZi1kaXNhYmxlZCB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBkZlB1bHNlIHtcbiAgICAwJSxcbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XG4gICAgfVxuXG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 6458:
/*!*************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/node/node.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeComponent: () => (/* binding */ NodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 8065);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 870);
/* harmony import */ var _directives_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/drag-drop */ 4967);
/* harmony import */ var _directives_selectable_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/selectable-element */ 1408);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ 315);
/* harmony import */ var _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ng-draw-flow.interfaces */ 1954);
/* harmony import */ var _ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ng-draw-flow.token */ 9497);
/* harmony import */ var _services_coordinates_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/coordinates.service */ 5092);
/* harmony import */ var _pan_zoom_pan_zoom_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pan-zoom/pan-zoom.options */ 5741);
/* harmony import */ var _pan_zoom_pan_zoom_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pan-zoom/pan-zoom.service */ 6592);
var _NodeComponent;












const _c0 = ["nodeElement"];
const _c1 = ["container"];
class NodeComponent {
  constructor() {
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef);
    this.panZoomService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_pan_zoom_pan_zoom_service__WEBPACK_IMPORTED_MODULE_7__.PanZoomService);
    this.coordinatesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_services_coordinates_service__WEBPACK_IMPORTED_MODULE_5__.CoordinatesService);
    this.drawFlowComponents = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_4__.DRAW_FLOW_COMPONENTS);
    this.drawFlowElement = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_4__.DRAW_FLOW_ROOT_ELEMENT);
    this.panZoomOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_pan_zoom_pan_zoom_options__WEBPACK_IMPORTED_MODULE_6__.DF_PAN_ZOOM_OPTIONS);
    this.isDynamicComponentCreated = false;
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_8__.DestroyRef);
    this.selected = false;
    this.nodeMoved = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.nodeDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.nodeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.cursor = 'initial';
  }
  handleKeyboardEvent(event) {
    if (this.selected && !this.node.startNode) {
      event.preventDefault();
      this.nodeDeleted.emit();
    }
  }
  ngAfterViewInit() {
    this.createNodeContentComponent(this.node);
    this.subscribeToConnectorsChanges();
    this.saveInnerNodeSize();
    this.fillValue();
    this.setInitialPosition();
    this.updateConnectorsCoordinates();
  }
  createNodeContentComponent(node) {
    if (this.isDynamicComponentCreated) {
      return;
    }
    const {
      id: nodeId,
      startNode,
      endNode,
      data
    } = node;
    const nodeType = data.type;
    this.containerRef.clear();
    this.nodeContentComponentRef = this.containerRef.createComponent(this.drawFlowComponents[nodeType]);
    this.innerComponent = this.nodeContentComponentRef.instance;
    this.innerComponent.nodeId = nodeId;
    this.innerComponent.startNode = startNode;
    this.innerComponent.endNode = endNode;
    this.innerComponent.model = data;
    this.cdr.detectChanges();
  }
  onSelectedChanged(selected) {
    this.selected = selected;
    this.innerComponent.selected = selected;
    if (selected) {
      this.nodeSelected.emit(this.value);
    }
  }
  onDrag(event) {
    if (this.node.startNode) {
      return;
    }
    if (event.stage === _directives_drag_drop__WEBPACK_IMPORTED_MODULE_0__.DfDragDropStage.Move) {
      this.onDragMove(event.distance);
    } else {
      this.onDragEnd();
    }
  }
  onDragMove(distance) {
    const {
      zoom
    } = this.panZoomService.panzoomModel;
    this.cursor = 'grabbing';
    this.value.position = this.calculatePosition(distance, zoom);
    const centeredPosition = this.getCenteredPosition();
    this.panZoomService.panzoomDisabled = true;
    this.applyPositionToStyle(this.nodeElementRef.nativeElement, centeredPosition);
    this.recalculateConnectorsPosition(distance);
  }
  onDragEnd() {
    this.cursor = 'initial';
    this.panZoomService.panzoomDisabled = false;
    this.nodeMoved.emit(this.value);
  }
  fillValue() {
    if (!('position' in this.node)) {
      this.value = {
        ...this.node,
        position: this.getCenterOfViewport()
      };
    } else {
      this.value = this.node;
    }
  }
  saveInnerNodeSize() {
    const nativeElement = this.nodeContentComponentRef.location.nativeElement;
    this.nodeWidth = nativeElement.offsetWidth;
    this.nodeHeight = nativeElement.offsetHeight;
  }
  updateConnectorsCoordinates() {
    const centeredCoordinates = this.getCenteredPosition();
    this.nodeContentComponentRef.instance.inputs?.forEach(input => {
      this.updateConnectorCoordinates(centeredCoordinates, this.value.id, input, _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_3__.DfConnectionPoint.Input);
    });
    this.nodeContentComponentRef.instance.outputs?.forEach(output => {
      this.updateConnectorCoordinates(centeredCoordinates, this.value.id, output, _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_3__.DfConnectionPoint.Output);
    });
  }
  recalculateConnectorsPosition(distance) {
    const {
      zoom
    } = this.panZoomService.panzoomModel;
    const currentMoveDistance = {
      deltaX: distance.deltaX / zoom,
      deltaY: distance.deltaY / zoom
    };
    this.nodeContentComponentRef.instance.inputs?.forEach(input => {
      this.recalculateConnectorPositionFromLast(currentMoveDistance, input, _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_3__.DfConnectionPoint.Input);
    });
    this.nodeContentComponentRef.instance.outputs?.forEach(output => {
      this.recalculateConnectorPositionFromLast(currentMoveDistance, output, _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_3__.DfConnectionPoint.Output);
    });
  }
  recalculateConnectorPositionFromLast(distance, connector, connectorType) {
    const newConnectorPosition = {
      x: connector.position.x + distance.deltaX,
      y: connector.position.y + distance.deltaY
    };
    const connectorData = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.connectorName)({
      nodeId: connector.data.nodeId,
      connectorType,
      connectorId: connector.data.connectorId
    });
    connector.position = newConnectorPosition;
    this.coordinatesService.addConnectionPoint(connectorData, newConnectorPosition);
  }
  updateConnectorCoordinates(position, nodeId, connector, connectorType) {
    const calculatedConnectorPosition = this.calculateConnectorPosition(connector.nativeElement, position);
    connector.position = calculatedConnectorPosition;
    const connectorData = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.connectorName)({
      nodeId,
      connectorType,
      connectorId: connector.nativeElement.dataset.connectorId
    });
    this.coordinatesService.addConnectionPoint(connectorData, calculatedConnectorPosition);
  }
  calculateConnectorPosition(element, nodePosition) {
    let x = nodePosition.x + element.offsetLeft + element.clientWidth / 2;
    let y = nodePosition.y + element.offsetTop + element.clientHeight / 2;
    while (element && !element.hasAttribute('data-draw-flow-node')) {
      element = element.offsetParent;
      if (element) {
        x += element.offsetLeft;
        y += element.offsetTop;
      }
    }
    return {
      x,
      y
    };
  }
  applyPositionToStyle(element, position) {
    element.style.transform = `translate3D(${position.x}px, ${position.y}px, 0)`;
  }
  getCenteredPosition() {
    const {
      panSize,
      leftPosition: panZoomLeftPosition,
      topPosition: panZoomTopPosition
    } = this.panZoomOptions;
    const centeredPosition = {
      x: this.value.position.x + panSize / 2 - this.nodeWidth / 2,
      y: this.value.position.y + panSize / 2 - this.nodeHeight / 2
    };
    if (panZoomTopPosition || panZoomTopPosition === 0) {
      centeredPosition.y += this.nodeHeight / 2;
    }
    if (panZoomLeftPosition || panZoomLeftPosition === 0) {
      centeredPosition.x += this.nodeWidth / 2;
    }
    return centeredPosition;
  }
  subscribeToConnectorsChanges() {
    const connectorsUpdates$ = [];
    if (this.nodeContentComponentRef.instance?.connectorsUpdated) {
      connectorsUpdates$.push(this.nodeContentComponentRef.instance.connectorsUpdated);
    }
    if (this.innerComponent.inputs?.changes) {
      connectorsUpdates$.push(this.innerComponent.inputs.changes);
    }
    if (this.innerComponent.outputs?.changes) {
      connectorsUpdates$.push(this.innerComponent.outputs.changes);
    }
    if (connectorsUpdates$.length > 0) {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(...connectorsUpdates$).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_10__.takeUntilDestroyed)(this.destroyRef)).subscribe(() => {
        this.updateConnectorsCoordinates();
      });
    }
  }
  getCenterOfViewport() {
    // Get the current scale of the pan
    const {
      x: panPositionX,
      y: panPositionY,
      zoom
    } = this.panZoomService.panzoomModel;
    const {
      panSize,
      leftPosition: panZoomLeftPosition,
      topPosition: panZoomTopPosition
    } = this.panZoomOptions;
    // Get current pan position
    const scaledPanPositionX = panSize / 2 + panPositionX * -1 / zoom;
    const scaledPanPositionY = panSize / 2 + panPositionY * -1 / zoom;
    // Calculating the centre of the visible part of the viewport relative to the whole board
    const position = {
      x: scaledPanPositionX - panSize / 2,
      y: scaledPanPositionY - panSize / 2
    };
    if (panZoomLeftPosition) {
      position.x -= this.drawFlowElement.offsetWidth / 2 * -1 + panZoomLeftPosition + this.nodeWidth / 2;
    }
    if (panZoomTopPosition) {
      position.y -= this.drawFlowElement.offsetHeight / 2 * -1 + panZoomTopPosition + this.nodeHeight / 2;
    }
    return position;
  }
  calculatePosition(distance, zoom) {
    if (!('position' in this.value)) {
      return null;
    }
    return {
      x: this.value.position.x + distance.deltaX / zoom,
      y: this.value.position.y + distance.deltaY / zoom
    };
  }
  setInitialPosition() {
    const centeredPosition = this.getCenteredPosition();
    this.applyPositionToStyle(this.nodeElementRef.nativeElement, centeredPosition);
  }
}
_NodeComponent = NodeComponent;
_NodeComponent.ɵfac = function NodeComponent_Factory(t) {
  return new (t || _NodeComponent)();
};
_NodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: _NodeComponent,
  selectors: [["df-node"]],
  viewQuery: function NodeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.nodeElementRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.containerRef = _t.first);
    }
  },
  hostBindings: function NodeComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keydown.delete", function NodeComponent_keydown_delete_HostBindingHandler($event) {
        return ctx.handleKeyboardEvent($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveDocument"])("keydown.backspace", function NodeComponent_keydown_backspace_HostBindingHandler($event) {
        return ctx.handleKeyboardEvent($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveDocument"]);
    }
  },
  inputs: {
    node: "node"
  },
  outputs: {
    nodeMoved: "nodeMoved",
    nodeDeleted: "nodeDeleted",
    nodeSelected: "nodeSelected"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
  decls: 5,
  vars: 2,
  consts: [["data-draw-flow-node", "", "dfSelectableElement", "", 1, "draw-flow-node", 3, "dfDragDrop", "selectionChanged"], ["nodeElement", ""], [1, "node-content"], ["container", ""]],
  template: function NodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("dfDragDrop", function NodeComponent_Template_div_dfDragDrop_0_listener($event) {
        return ctx.onDrag($event);
      })("selectionChanged", function NodeComponent_Template_div_selectionChanged_0_listener($event) {
        return ctx.onSelectedChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](3, null, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("cursor", ctx.cursor);
    }
  },
  dependencies: [_directives_drag_drop__WEBPACK_IMPORTED_MODULE_0__.DragDropDirective, _directives_selectable_element__WEBPACK_IMPORTED_MODULE_1__.SelectableElementDirective],
  styles: [".draw-flow-node[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  touch-action: none;\n}\n.draw-flow-node[_ngcontent-%COMP%]:hover {\n  will-change: transform;\n}\n.draw-flow-node[_ngcontent-%COMP%]   .drag-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  inline-size: 100%;\n  block-size: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDSTtFQUNJLHNCQUFBO0FBQ1I7QUFUQTtFQVlRLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUFSIiwiZmlsZSI6Im5vZGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJhdy1mbG93LW5vZGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAyO1xuICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgIH1cblxuICAgIC5kcmFnLWhhbmRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgICAgIGJsb2NrLXNpemU6IDEwMCU7XG4gICAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLWRyYXctZmxvdy9zcmMvbGliL2NvbXBvbmVudHMvbm9kZS9ub2RlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0k7RUFDSSxzQkFBQTtBQUNSO0FBVEE7RUFZUSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBUjs7QUFFQSw0dkJBQTR2QiIsInNvdXJjZXNDb250ZW50IjpbIi5kcmF3LWZsb3ctbm9kZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDI7XG4gICAgdG91Y2gtYWN0aW9uOiBub25lO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgfVxuXG4gICAgLmRyYWctaGFuZGxlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICAgICAgYmxvY2stc2l6ZTogMTAwJTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 4408:
/*!*********************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/pan-zoom/pan-zoom.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanZoomComponent: () => (/* binding */ PanZoomComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 9191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _ng_web_apis_resize_observer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-web-apis/resize-observer */ 4138);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 5536);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 3150);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 4406);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 6816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 870);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 7066);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 1969);
/* harmony import */ var _directives_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/drag-drop */ 4967);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ 315);
/* harmony import */ var _ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ng-draw-flow.token */ 9497);
/* harmony import */ var _pan_zoom_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pan-zoom.const */ 9104);
/* harmony import */ var _pan_zoom_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pan-zoom.options */ 5741);
/* harmony import */ var _pan_zoom_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pan-zoom.service */ 6592);
/* harmony import */ var _zoom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zoom */ 8720);
var _PanZoomComponent;












const _c0 = ["*"];
class PanZoomComponent {
  constructor() {
    this.el = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef);
    this.panZoomService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_pan_zoom_service__WEBPACK_IMPORTED_MODULE_5__.PanZoomService);
    this.drawFlowRootElement = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_2__.DRAW_FLOW_ROOT_ELEMENT);
    this.panZoomOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_pan_zoom_options__WEBPACK_IMPORTED_MODULE_4__.DF_PAN_ZOOM_OPTIONS);
    this.resizeObserver$ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_ng_web_apis_resize_observer__WEBPACK_IMPORTED_MODULE_8__.ResizeObserverService);
    this.zoom$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(_pan_zoom_const__WEBPACK_IMPORTED_MODULE_3__.DF_PAN_ZOOM_INITIAL_SCALE);
    this.coordinates$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(_helpers__WEBPACK_IMPORTED_MODULE_1__.INITIAL_COORDINATES);
    this.manualZoomAnimation$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this.dragStage$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this.scale = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.zoomAnimationDuration = this.panZoomOptions.zoomAnimationDuration;
    this.cursor$ = this.dragStage$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(stage => stage === _directives_drag_drop__WEBPACK_IMPORTED_MODULE_0__.DfDragDropStage.Move ? 'grabbing' : 'initial'), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.startWith)('initial'));
    this.transitioned$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.merge)(this.manualZoomAnimation$, this.dragStage$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(stage => stage !== _directives_drag_drop__WEBPACK_IMPORTED_MODULE_0__.DfDragDropStage.Move)), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.fromEvent)(this.el.nativeElement, 'touchmove', {
      passive: true
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(_helpers__WEBPACK_IMPORTED_MODULE_1__.DF_FALSE_HANDLER)), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.fromEvent)(this.el.nativeElement, 'wheel', {
      passive: true
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(_helpers__WEBPACK_IMPORTED_MODULE_1__.DF_FALSE_HANDLER)));
    this.wrapperTransform$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.combineLatest)([this.coordinates$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.tap)(({
      x,
      y
    }) => {
      this.panZoomService.panzoomModel.x = x;
      this.panZoomService.panzoomModel.y = y;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(({
      x,
      y
    }) => `${(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.dfPx)(x)}, ${(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.dfPx)(y)}`)), this.zoom$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.tap)(zoom => {
      this.scale.emit(Math.round(zoom * 100));
      this.panZoomService.panzoomModel.zoom = zoom;
    }))]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(([translate, zoom]) => `translate(${translate}) scale(${zoom}) rotate(0deg)`));
    this.panZoomContainerTransform$ = this.resizeObserver$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(entries => entries[0].contentRect), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(rootSize => {
      let translate = '';
      const {
        leftPosition: panZoomLeftPosition,
        topPosition: panZoomTopPosition
      } = this.panZoomOptions;
      if (panZoomLeftPosition || panZoomLeftPosition === 0) {
        const offset = rootSize.width / 2 * -1 + panZoomLeftPosition;
        this.panZoomService.panzoomModel.offsetX = offset * -1;
        translate = `translateX(${offset}px)`;
      } else {
        this.panZoomService.panzoomModel.offsetX = 0;
      }
      if (panZoomTopPosition || panZoomTopPosition === 0) {
        const offset = rootSize.height / 2 * -1 + panZoomTopPosition;
        this.panZoomService.panzoomModel.offsetY = offset * -1;
        translate = `${translate}translateY(${offset}px)`;
      } else {
        this.panZoomService.panzoomModel.offsetY = 0;
      }
      return translate;
    }));
  }
  onPan({
    distance,
    stage
  }) {
    if (this.panZoomService.panzoomDisabled) {
      return;
    }
    this.dragStage$.next(stage);
    this.coordinates$.next(this.getGuardedCoordinates(this.coordinates$.value.x + distance.deltaX, this.coordinates$.value.y + distance.deltaY));
  }
  onZoom({
    clientX,
    clientY,
    delta
  }) {
    const {
      x: offsetX,
      y: offsetY
    } = this.drawFlowRootElement.getBoundingClientRect();
    this.processZoom(clientX - offsetX, clientY - offsetY, delta);
  }
  resetPanzoom() {
    this.zoom$.next(_pan_zoom_const__WEBPACK_IMPORTED_MODULE_3__.DF_PAN_ZOOM_INITIAL_SCALE);
    this.coordinates$.next(_helpers__WEBPACK_IMPORTED_MODULE_1__.INITIAL_COORDINATES);
  }
  zoomIn() {
    const {
      zoomStep,
      maxZoom
    } = this.panZoomOptions;
    const zoom = this.panZoomService.panzoomModel.zoom + zoomStep;
    this.setZoom(zoom <= maxZoom ? zoom : maxZoom);
  }
  zoomOut() {
    const {
      zoomStep,
      minZoom
    } = this.panZoomOptions;
    const zoom = this.panZoomService.panzoomModel.zoom - zoomStep;
    this.setZoom(zoom >= minZoom ? zoom : minZoom);
  }
  setZoom(zoom) {
    this.manualZoomAnimation$.next(true);
    this.zoom$.next(zoom);
    const {
      x,
      y
    } = this.coordinates$.value;
    this.coordinates$.next(this.getGuardedCoordinates(x, y));
    setTimeout(() => this.manualZoomAnimation$.next(false), this.zoomAnimationDuration);
  }
  processZoom(clientX, clientY, delta) {
    const oldScale = this.zoom$.value;
    const {
      minZoom,
      maxZoom
    } = this.panZoomOptions;
    const newScale = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.dfClamp)(oldScale + delta, minZoom, maxZoom);
    const center = this.getScaleCenter({
      clientX,
      clientY
    }, this.coordinates$.value, this.zoom$.value);
    const moveX = center.x * oldScale - center.x * newScale;
    const moveY = center.y * oldScale - center.y * newScale;
    this.zoom$.next(newScale);
    this.coordinates$.next(this.getGuardedCoordinates(this.coordinates$.value.x + moveX, this.coordinates$.value.y + moveY));
  }
  getGuardedCoordinates(x, y) {
    const {
      offsetX,
      offsetY
    } = this.offsets();
    return {
      x: (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.dfClamp)(x, -offsetX, offsetX),
      y: (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.dfClamp)(y, -offsetY, offsetY)
    };
  }
  getScaleCenter({
    clientX,
    clientY
  }, {
    x,
    y
  }, scale) {
    const {
      offsetWidth,
      offsetHeight
    } = this.el.nativeElement;
    return {
      x: (clientX - x - offsetWidth / 2) / scale,
      y: (clientY - y - offsetHeight / 2) / scale
    };
  }
  offsets() {
    const {
      panSize
    } = this.panZoomOptions;
    const offsetX = this.zoom$.value * panSize;
    const offsetY = this.zoom$.value * panSize;
    return {
      offsetX,
      offsetY
    };
  }
}
_PanZoomComponent = PanZoomComponent;
_PanZoomComponent.ɵfac = function PanZoomComponent_Factory(t) {
  return new (t || _PanZoomComponent)();
};
_PanZoomComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: _PanZoomComponent,
  selectors: [["df-pan-zoom"]],
  outputs: {
    scale: "scale"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_ng_web_apis_resize_observer__WEBPACK_IMPORTED_MODULE_8__.ResizeObserverService, {
    provide: _ng_web_apis_resize_observer__WEBPACK_IMPORTED_MODULE_8__.RESIZE_OPTION_BOX,
    useValue: 'border-box'
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
  ngContentSelectors: _c0,
  decls: 8,
  vars: 16,
  consts: [[1, "pan-zoom", 3, "dfDragDrop", "dfZoom"], ["panZoom", ""], [1, "panzoom__container"]],
  template: function PanZoomComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dfDragDrop", function PanZoomComponent_Template_div_dfDragDrop_0_listener($event) {
        return ctx.onPan($event);
      })("dfZoom", function PanZoomComponent_Template_div_dfZoom_0_listener($event) {
        return ctx.onZoom($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("cursor", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 8, ctx.cursor$))("transform", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 10, ctx.wrapperTransform$))("transition-duration", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 12, ctx.transitioned$) ? ctx.zoomAnimationDuration + "ms" : "0s");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("transform", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 14, ctx.panZoomContainerTransform$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe, _directives_drag_drop__WEBPACK_IMPORTED_MODULE_0__.DragDropDirective, _zoom__WEBPACK_IMPORTED_MODULE_6__.ZoomDirective],
  styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  inline-size: 100%;\n  block-size: 100%;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.pan-zoom[_ngcontent-%COMP%] {\n  position: absolute;\n  background-image: url('dot.svg');\n  will-change: transform;\n  touch-action: none;\n}\n.transitive[_ngcontent-%COMP%] {\n  transition-duration: 0.3s;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbi16b29tLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBQ0o7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0FBREoiLCJmaWxlIjoicGFuLXpvb20uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICBibG9jay1zaXplOiAxMDAlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ucGFuLXpvb20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9kb3Quc3ZnJyk7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG59XG5cbi50cmFuc2l0aXZlIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLWRyYXctZmxvdy9zcmMvbGliL2NvbXBvbmVudHMvcGFuLXpvb20vcGFuLXpvb20uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUFDSjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdBO0VBQ0kseUJBQUE7QUFESjs7QUFHQSxvOUJBQW85QiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgIGJsb2NrLXNpemU6IDEwMCU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5wYW4tem9vbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2RvdC5zdmcnKTtcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcbn1cblxuLnRyYW5zaXRpdmUge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 9104:
/*!*****************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/pan-zoom/pan-zoom.const.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DF_PAN_ZOOM_INITIAL_MODEL: () => (/* binding */ DF_PAN_ZOOM_INITIAL_MODEL),
/* harmony export */   DF_PAN_ZOOM_INITIAL_SCALE: () => (/* binding */ DF_PAN_ZOOM_INITIAL_SCALE)
/* harmony export */ });
const DF_PAN_ZOOM_INITIAL_SCALE = 1;
const DF_PAN_ZOOM_INITIAL_MODEL = {
  x: 0,
  y: 0,
  offsetX: 0,
  offsetY: 0,
  zoom: 1
};

/***/ }),

/***/ 5741:
/*!*******************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/pan-zoom/pan-zoom.options.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DF_PAN_ZOOM_DEFAULT_OPTIONS: () => (/* binding */ DF_PAN_ZOOM_DEFAULT_OPTIONS),
/* harmony export */   DF_PAN_ZOOM_OPTIONS: () => (/* binding */ DF_PAN_ZOOM_OPTIONS),
/* harmony export */   dfPanZoomOptionsProvider: () => (/* binding */ dfPanZoomOptionsProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6623);

const DF_PAN_ZOOM_DEFAULT_OPTIONS = {
  panSize: 20000,
  topPosition: null,
  leftPosition: null,
  minZoom: 0.25,
  maxZoom: 3,
  zoomStep: 0.25,
  zoomAnimationDuration: 300,
  zoomWheelSensitivity: 0.01,
  touchSensitivity: 0.01
};
const DF_PAN_ZOOM_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('[DF_PAN_ZOOM_OPTIONS]: [PAN_ZOOM_OPTIONS]', {
  factory: () => DF_PAN_ZOOM_DEFAULT_OPTIONS
});
function dfPanZoomOptionsProvider(options) {
  return {
    provide: DF_PAN_ZOOM_OPTIONS,
    useFactory: () => ({
      ...DF_PAN_ZOOM_DEFAULT_OPTIONS,
      ...options
    })
  };
}

/***/ }),

/***/ 6592:
/*!*******************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/pan-zoom/pan-zoom.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanZoomService: () => (/* binding */ PanZoomService)
/* harmony export */ });
/* harmony import */ var _pan_zoom_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pan-zoom.const */ 9104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6623);
var _PanZoomService;


class PanZoomService {
  constructor() {
    this.panzoomModel = _pan_zoom_const__WEBPACK_IMPORTED_MODULE_0__.DF_PAN_ZOOM_INITIAL_MODEL;
    this.panzoomDisabled = false;
  }
}
_PanZoomService = PanZoomService;
_PanZoomService.ɵfac = function PanZoomService_Factory(t) {
  return new (t || _PanZoomService)();
};
_PanZoomService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _PanZoomService,
  factory: _PanZoomService.ɵfac
});

/***/ }),

/***/ 8720:
/*!*************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/pan-zoom/zoom/index.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZoomDirective: () => (/* reexport safe */ _zoom_directive__WEBPACK_IMPORTED_MODULE_0__.ZoomDirective)
/* harmony export */ });
/* harmony import */ var _zoom_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zoom.directive */ 370);


/***/ }),

/***/ 370:
/*!**********************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/pan-zoom/zoom/zoom.directive.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZoomDirective: () => (/* binding */ ZoomDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _zoom_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zoom.service */ 5588);
var _ZoomDirective;



class ZoomDirective {
  constructor() {
    this.dfZoom = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_zoom_service__WEBPACK_IMPORTED_MODULE_0__.ZoomService);
  }
}
_ZoomDirective = ZoomDirective;
_ZoomDirective.ɵfac = function ZoomDirective_Factory(t) {
  return new (t || _ZoomDirective)();
};
_ZoomDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: _ZoomDirective,
  selectors: [["", "dfZoom", ""]],
  hostVars: 2,
  hostBindings: function ZoomDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("touch-action", "none");
    }
  },
  outputs: {
    dfZoom: "dfZoom"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_zoom_service__WEBPACK_IMPORTED_MODULE_0__.ZoomService])]
});

/***/ }),

/***/ 5588:
/*!********************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/pan-zoom/zoom/zoom.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZoomService: () => (/* binding */ ZoomService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4517);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 870);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7066);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1856);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1082);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9155);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4406);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 5213);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers */ 315);
/* harmony import */ var _pan_zoom_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pan-zoom.options */ 5741);
var _ZoomService;





class ZoomService extends rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable {
  constructor() {
    const nativeElement = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef).nativeElement;
    const wheelSensitivity = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_pan_zoom_options__WEBPACK_IMPORTED_MODULE_1__.DF_PAN_ZOOM_OPTIONS)?.zoomWheelSensitivity;
    const touchSensitivity = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_pan_zoom_options__WEBPACK_IMPORTED_MODULE_1__.DF_PAN_ZOOM_OPTIONS)?.touchSensitivity;
    super(subscriber => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(nativeElement, 'touchstart', {
        passive: true
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(({
        touches
      }) => touches.length > 1), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(startEvent => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(nativeElement, 'touchmove', {
        passive: true
      }).pipe((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.dfPreventDefault)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.scan)((prev, event) => {
        const distance = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.dfDistanceBetweenTouches)(event);
        return {
          event,
          distance,
          delta: (distance - prev.distance) * touchSensitivity
        };
      }, {
        event: startEvent,
        distance: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.dfDistanceBetweenTouches)(startEvent),
        delta: 0
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(({
        event,
        delta
      }) => {
        const clientX = (event.touches[0].clientX + event.touches[1].clientX) / 2;
        const clientY = (event.touches[0].clientY + event.touches[1].clientY) / 2;
        return {
          clientX,
          clientY,
          delta,
          event
        };
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(nativeElement, 'touchend'))))), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(nativeElement, 'wheel', {
        passive: false
      }).pipe((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.dfPreventDefault)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(wheel => ({
        clientX: wheel.clientX,
        clientY: wheel.clientY,
        delta: -wheel.deltaY * wheelSensitivity,
        event: wheel
      })))).subscribe(subscriber);
    });
  }
}
_ZoomService = ZoomService;
_ZoomService.ɵfac = function ZoomService_Factory(t) {
  return new (t || _ZoomService)();
};
_ZoomService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _ZoomService,
  factory: _ZoomService.ɵfac
});

/***/ }),

/***/ 7788:
/*!***************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/scene/scene.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SceneComponent: () => (/* binding */ SceneComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 9191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 8065);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8015);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 1856);
/* harmony import */ var _connections_connection_connection_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../connections/connection/connection.component */ 3700);
/* harmony import */ var _connections_connections_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../connections/connections.service */ 9976);
/* harmony import */ var _connections_draft_connection_draft_connection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../connections/draft-connection/draft-connection.component */ 1848);
/* harmony import */ var _connections_draft_connection_draft_connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connections/draft-connection/draft-connection.service */ 7232);
/* harmony import */ var _node_node_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node/node.component */ 6458);
/* harmony import */ var _pan_zoom_pan_zoom_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pan-zoom/pan-zoom.options */ 5741);
var _SceneComponent;













function SceneComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "df-node", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("nodeDeleted", function SceneComponent_ng_container_1_Template_df_node_nodeDeleted_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const node_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.onNodeDeleted(node_r3.key));
    })("nodeMoved", function SceneComponent_ng_container_1_Template_df_node_nodeMoved_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const node_r3 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.onNodeMoved(node_r3.key, $event));
    })("nodeSelected", function SceneComponent_ng_container_1_Template_df_node_nodeSelected_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.onNodeSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const node_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("node", node_r3.value);
  }
}
function SceneComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "df-connection", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("connectionDeleted", function SceneComponent_ng_container_3_Template_df_connection_connectionDeleted_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const connection_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.onConnectionDeleted(connection_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const connection_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("connection", connection_r8);
  }
}
function SceneComponent_df_draft_connection_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "df-draft-connection", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("connectionCreated", function SceneComponent_df_draft_connection_4_Template_df_draft_connection_connectionCreated_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.onConnectionCreated($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
class SceneComponent {
  constructor() {
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef);
    this.connectionsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_connections_connections_service__WEBPACK_IMPORTED_MODULE_1__.ConnectionsService);
    this.draftConnectionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_connections_draft_connection_draft_connection_service__WEBPACK_IMPORTED_MODULE_3__.DraftConnectionService);
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder);
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_6__.DestroyRef);
    this.nodeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.nodeMoved = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.nodeDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.connectionCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.connectionDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter(true);
    this.form = this.fb.control({});
    this.isConnectionCreating$ = this.draftConnectionService.isConnectionCreating$;
    this.panSize = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_pan_zoom_pan_zoom_options__WEBPACK_IMPORTED_MODULE_5__.DF_PAN_ZOOM_OPTIONS).panSize;
    // @ts-ignore
    this.onChange = _ => {};
    // @ts-ignore
    this.onTouched = () => {};
  }
  ngOnInit() {
    this.initializeConnectionsSubscription();
  }
  onConnectionCreated(connection) {
    this.connectionsService.addConnections([connection]);
    this.connectionCreated.emit({
      target: connection,
      model: this.model
    });
  }
  onConnectionDeleted(connection) {
    this.connectionDeleted.emit({
      target: connection,
      model: this.model
    });
  }
  onNodeMoved(name, data) {
    this.model.nodes.set(name, data);
    this.nodeMoved.emit({
      target: data,
      model: this.model
    });
  }
  onNodeDeleted(key) {
    const deletedNode = this.model.nodes.get(key);
    this.model.nodes.delete(key);
    this.nodeDeleted.emit({
      target: deletedNode,
      model: this.model
    });
    this.connectionsService.removeConnectionsByNodeId(key);
  }
  onNodeSelected(node) {
    this.nodeSelected.emit(node);
  }
  trackByNodeFn(_, data) {
    return data.key;
  }
  trackByConnectionsFn(_index, connection) {
    return `${connection.source.nodeId}-${connection.source.connectorId}to${connection.target.nodeId}-${connection.target.connectorId}`;
  }
  originalOrder() {
    return 0;
  }
  writeValue(value) {
    if (!value) {
      return;
    }
    this.form.setValue(value);
    this.model = value;
    this.connectionsService.addConnections(this.model.connections);
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  initializeConnectionsSubscription() {
    this.connectionsService.connections$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.filter)(() => !!this.model), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__.takeUntilDestroyed)(this.destroyRef)).subscribe(connections => {
      this.model.connections = connections;
    });
  }
}
_SceneComponent = SceneComponent;
_SceneComponent.ɵfac = function SceneComponent_Factory(t) {
  return new (t || _SceneComponent)();
};
_SceneComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _SceneComponent,
  selectors: [["df-scene"]],
  outputs: {
    nodeSelected: "nodeSelected",
    nodeMoved: "nodeMoved",
    nodeDeleted: "nodeDeleted",
    connectionCreated: "connectionCreated",
    connectionDeleted: "connectionDeleted"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(() => _SceneComponent),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
  decls: 6,
  vars: 14,
  consts: [[1, "scene"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "connectionCreated", 4, "ngIf"], [3, "node", "nodeDeleted", "nodeMoved", "nodeSelected"], [3, "connection", "connectionDeleted"], [3, "connectionCreated"]],
  template: function SceneComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SceneComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "keyvalue");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, SceneComponent_ng_container_3_Template, 2, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SceneComponent_df_draft_connection_4_Template, 1, 0, "df-draft-connection", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("height", ctx.panSize, "px")("width", ctx.panSize, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 9, ctx.model == null ? null : ctx.model.nodes, ctx.originalOrder))("ngForTrackBy", ctx.trackByNodeFn);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.model == null ? null : ctx.model.connections)("ngForTrackBy", ctx.trackByConnectionsFn);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 12, ctx.isConnectionCreating$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.KeyValuePipe, _connections_connection_connection_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionComponent, _connections_draft_connection_draft_connection_component__WEBPACK_IMPORTED_MODULE_2__.DraftConnectionComponent, _node_node_component__WEBPACK_IMPORTED_MODULE_4__.NodeComponent],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  inline-size: 100%;\n  block-size: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjZW5lLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJzY2VuZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICBibG9jay1zaXplOiAxMDAlO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLWRyYXctZmxvdy9zcmMvbGliL2NvbXBvbmVudHMvc2NlbmUvc2NlbmUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBLDRYQUE0WCIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICBibG9jay1zaXplOiAxMDAlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 8760:
/*!***********************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/directives/drag-drop/drag-drop.directive.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragDropDirective: () => (/* binding */ DragDropDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _drag_drop_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-drop.service */ 449);
var _DragDropDirective;



class DragDropDirective {
  constructor() {
    this.dfDragDrop = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_drag_drop_service__WEBPACK_IMPORTED_MODULE_0__.DragDropService);
  }
}
_DragDropDirective = DragDropDirective;
_DragDropDirective.ɵfac = function DragDropDirective_Factory(t) {
  return new (t || _DragDropDirective)();
};
_DragDropDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: _DragDropDirective,
  selectors: [["", "dfDragDrop", ""]],
  outputs: {
    dfDragDrop: "dfDragDrop"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_drag_drop_service__WEBPACK_IMPORTED_MODULE_0__.DragDropService])]
});

/***/ }),

/***/ 6984:
/*!******************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/directives/drag-drop/drag-drop.enum.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DfDragDropStage: () => (/* binding */ DfDragDropStage)
/* harmony export */ });
var DfDragDropStage;
(function (DfDragDropStage) {
  DfDragDropStage["Start"] = "start";
  DfDragDropStage["Move"] = "move";
  DfDragDropStage["End"] = "end";
})(DfDragDropStage || (DfDragDropStage = {}));

/***/ }),

/***/ 5217:
/*!***********************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/directives/drag-drop/drag-drop.interface.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 449:
/*!*********************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/directives/drag-drop/drag-drop.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragDropService: () => (/* binding */ DragDropService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4517);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7066);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1969);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1082);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9721);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 7757);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 3246);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 4406);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 5213);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 2393);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ 315);
/* harmony import */ var _drag_drop_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag-drop.enum */ 6984);
var _DragDropService;





class DragDropService extends rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable {
  constructor() {
    const nativeElement = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef).nativeElement;
    super(subscriber => {
      const pointerDown$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(nativeElement, 'pointerdown').pipe((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.dfStopPropagation)());
      const pointerMove$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(nativeElement, 'pointermove').pipe((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.dfPreventDefault)());
      const pointerUp$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(nativeElement, 'pointerup');
      pointerDown$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(event => (event.target || nativeElement).setPointerCapture(event.pointerId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => pointerMove$), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.observeOn)(rxjs__WEBPACK_IMPORTED_MODULE_8__.animationFrameScheduler), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.pairwise)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(([first, second]) => {
        const {
          deltaX,
          deltaY
        } = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.dfDistanceBetweenPoints)(first, second);
        return {
          sourceElement: nativeElement,
          distance: {
            deltaX,
            deltaY
          },
          stage: _drag_drop_enum__WEBPACK_IMPORTED_MODULE_1__.DfDragDropStage.Move
        };
      }),
      // eslint-disable-next-line rxjs/no-unsafe-takeuntil
      (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(pointerUp$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(event => {
        (event.target || nativeElement).releasePointerCapture(event.pointerId);
        subscriber.next({
          sourceElement: nativeElement,
          distance: {
            deltaX: 0,
            deltaY: 0
          },
          stage: _drag_drop_enum__WEBPACK_IMPORTED_MODULE_1__.DfDragDropStage.End
        });
      }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.repeat)()).subscribe(subscriber);
    });
  }
}
_DragDropService = DragDropService;
_DragDropService.ɵfac = function DragDropService_Factory(t) {
  return new (t || _DragDropService)();
};
_DragDropService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _DragDropService,
  factory: _DragDropService.ɵfac
});

/***/ }),

/***/ 4967:
/*!*********************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/directives/drag-drop/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DfDragDropStage: () => (/* reexport safe */ _drag_drop_enum__WEBPACK_IMPORTED_MODULE_1__.DfDragDropStage),
/* harmony export */   DragDropDirective: () => (/* reexport safe */ _drag_drop_directive__WEBPACK_IMPORTED_MODULE_0__.DragDropDirective),
/* harmony export */   DragDropService: () => (/* reexport safe */ _drag_drop_service__WEBPACK_IMPORTED_MODULE_3__.DragDropService)
/* harmony export */ });
/* harmony import */ var _drag_drop_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-drop.directive */ 8760);
/* harmony import */ var _drag_drop_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag-drop.enum */ 6984);
/* harmony import */ var _drag_drop_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag-drop.interface */ 5217);
/* harmony import */ var _drag_drop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drag-drop.service */ 449);





/***/ }),

/***/ 3470:
/*!***************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/directives/resize-observer/index.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DfResizeObserver: () => (/* reexport safe */ _resize_observer_directive__WEBPACK_IMPORTED_MODULE_0__.DfResizeObserver)
/* harmony export */ });
/* harmony import */ var _resize_observer_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resize-observer.directive */ 2768);


/***/ }),

/***/ 2768:
/*!***********************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/directives/resize-observer/resize-observer.directive.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DfResizeObserver: () => (/* binding */ DfResizeObserver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _ng_web_apis_resize_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-web-apis/resize-observer */ 4138);
var _DfResizeObserver;



/**
 * @deprecated: internal use only
 * TODO: Remove this directive after EOL Taiga UI 3
 */
class DfResizeObserver {
  constructor() {
    this.dfResizeObserver = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ng_web_apis_resize_observer__WEBPACK_IMPORTED_MODULE_1__.ResizeObserverService);
    this.box = _ng_web_apis_resize_observer__WEBPACK_IMPORTED_MODULE_1__.RESIZE_OPTION_BOX_DEFAULT;
  }
}
_DfResizeObserver = DfResizeObserver;
_DfResizeObserver.ɵfac = function DfResizeObserver_Factory(t) {
  return new (t || _DfResizeObserver)();
};
_DfResizeObserver.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _DfResizeObserver,
  selectors: [["", "dfResizeObserver", ""]],
  inputs: {
    dfResizeBox: ["box", "dfResizeBox"]
  },
  outputs: {
    dfResizeObserver: "dfResizeObserver"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_web_apis_resize_observer__WEBPACK_IMPORTED_MODULE_1__.ResizeObserverService, {
    provide: _ng_web_apis_resize_observer__WEBPACK_IMPORTED_MODULE_1__.RESIZE_OPTION_BOX,
    useFactory: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef).nativeElement.getAttribute('dfResizeBox') || _ng_web_apis_resize_observer__WEBPACK_IMPORTED_MODULE_1__.RESIZE_OPTION_BOX_DEFAULT
  }])]
});

/***/ }),

/***/ 1408:
/*!******************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/directives/selectable-element/index.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectableElementDirective: () => (/* reexport safe */ _selectable_element_directive__WEBPACK_IMPORTED_MODULE_0__.SelectableElementDirective)
/* harmony export */ });
/* harmony import */ var _selectable_element_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectable-element.directive */ 5732);


/***/ }),

/***/ 5732:
/*!*****************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/directives/selectable-element/selectable-element.directive.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectableElementDirective: () => (/* binding */ SelectableElementDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6623);
var _SelectableElementDirective;


class SelectableElementDirective {
  constructor() {
    this.selected = false;
    this.el = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    this.selectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onDocumentClick(targetElement) {
    const clickedInside = this.el.nativeElement.contains(targetElement);
    this.setSelected(clickedInside);
  }
  setSelected(selected) {
    if (this.selected !== selected) {
      this.selected = selected;
      this.selectionChanged.emit(this.selected);
      if (selected) {
        this.selectNode();
      } else {
        this.deselectNode();
      }
    }
  }
  selectNode() {
    this.el.nativeElement.classList.add('df-selected');
  }
  deselectNode() {
    this.el.nativeElement.classList.remove('df-selected');
  }
}
_SelectableElementDirective = SelectableElementDirective;
_SelectableElementDirective.ɵfac = function SelectableElementDirective_Factory(t) {
  return new (t || _SelectableElementDirective)();
};
_SelectableElementDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _SelectableElementDirective,
  selectors: [["", "dfSelectableElement", ""]],
  hostBindings: function SelectableElementDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function SelectableElementDirective_mousedown_HostBindingHandler($event) {
        return ctx.onDocumentClick($event.target);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    }
  },
  outputs: {
    selectionChanged: "selectionChanged"
  },
  standalone: true
});

/***/ }),

/***/ 6572:
/*!********************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/helpers/clamp.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dfClamp: () => (/* binding */ dfClamp)
/* harmony export */ });
/**
 * Clamps a value between two inclusive limits
 *
 * @param value
 * @param min lower limit
 * @param max upper limit
 */
function dfClamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

/***/ }),

/***/ 5048:
/*!************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/helpers/connector.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   connectorName: () => (/* binding */ connectorName),
/* harmony export */   isConnectorType: () => (/* binding */ isConnectorType)
/* harmony export */ });
function isConnectorType(type) {
  return ['input', 'output'].includes(type);
}
function connectorName(connector) {
  return `nodeId:${connector.nodeId},connectorType:${connector.connectorType},connectorId:${connector.connectorId}`;
}

/***/ }),

/***/ 6061:
/*!**************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/helpers/distance-between-points.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dfDistanceBetweenPoints: () => (/* binding */ dfDistanceBetweenPoints)
/* harmony export */ });
function dfDistanceBetweenPoints(firstEvent, secondEvent) {
  const deltaX = secondEvent.clientX - firstEvent.clientX;
  const deltaY = secondEvent.clientY - firstEvent.clientY;
  return {
    deltaX,
    deltaY
  };
}

/***/ }),

/***/ 6199:
/*!***************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/helpers/distance-between-touches.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dfDistanceBetweenTouches: () => (/* binding */ dfDistanceBetweenTouches)
/* harmony export */ });
function dfDistanceBetweenTouches({
  touches
}) {
  return Math.hypot(touches[0].clientX - touches[1].clientX, touches[0].clientY - touches[1].clientY);
}

/***/ }),

/***/ 7262:
/*!***********************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/helpers/handlers.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DF_FALSE_HANDLER: () => (/* binding */ DF_FALSE_HANDLER),
/* harmony export */   DF_TRUE_HANDLER: () => (/* binding */ DF_TRUE_HANDLER)
/* harmony export */ });
/**
 * Handler that always returns `false`.
 */
const DF_FALSE_HANDLER = () => false;
/**
 * Handler that always returns `true`.
 */
const DF_TRUE_HANDLER = () => true;

/***/ }),

/***/ 315:
/*!********************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/helpers/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DF_FALSE_HANDLER: () => (/* reexport safe */ _handlers__WEBPACK_IMPORTED_MODULE_4__.DF_FALSE_HANDLER),
/* harmony export */   DF_TRUE_HANDLER: () => (/* reexport safe */ _handlers__WEBPACK_IMPORTED_MODULE_4__.DF_TRUE_HANDLER),
/* harmony export */   INITIAL_COORDINATES: () => (/* reexport safe */ _initial_coordinates__WEBPACK_IMPORTED_MODULE_5__.INITIAL_COORDINATES),
/* harmony export */   connectorName: () => (/* reexport safe */ _connector__WEBPACK_IMPORTED_MODULE_1__.connectorName),
/* harmony export */   dfClamp: () => (/* reexport safe */ _clamp__WEBPACK_IMPORTED_MODULE_0__.dfClamp),
/* harmony export */   dfDistanceBetweenPoints: () => (/* reexport safe */ _distance_between_points__WEBPACK_IMPORTED_MODULE_2__.dfDistanceBetweenPoints),
/* harmony export */   dfDistanceBetweenTouches: () => (/* reexport safe */ _distance_between_touches__WEBPACK_IMPORTED_MODULE_3__.dfDistanceBetweenTouches),
/* harmony export */   dfPreventDefault: () => (/* reexport safe */ _prevent_default__WEBPACK_IMPORTED_MODULE_6__.dfPreventDefault),
/* harmony export */   dfPx: () => (/* reexport safe */ _px__WEBPACK_IMPORTED_MODULE_7__.dfPx),
/* harmony export */   dfStopPropagation: () => (/* reexport safe */ _stop_propagation__WEBPACK_IMPORTED_MODULE_8__.dfStopPropagation),
/* harmony export */   isConnectorType: () => (/* reexport safe */ _connector__WEBPACK_IMPORTED_MODULE_1__.isConnectorType)
/* harmony export */ });
/* harmony import */ var _clamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clamp */ 6572);
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connector */ 5048);
/* harmony import */ var _distance_between_points__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./distance-between-points */ 6061);
/* harmony import */ var _distance_between_touches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./distance-between-touches */ 6199);
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers */ 7262);
/* harmony import */ var _initial_coordinates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./initial-coordinates */ 4281);
/* harmony import */ var _prevent_default__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prevent-default */ 2593);
/* harmony import */ var _px__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./px */ 3407);
/* harmony import */ var _stop_propagation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stop-propagation */ 6820);










/***/ }),

/***/ 4281:
/*!**********************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/helpers/initial-coordinates.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INITIAL_COORDINATES: () => (/* binding */ INITIAL_COORDINATES)
/* harmony export */ });
const INITIAL_COORDINATES = {
  x: 0,
  y: 0
};

/***/ }),

/***/ 2593:
/*!******************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/helpers/prevent-default.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dfPreventDefault: () => (/* binding */ dfPreventDefault)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 1969);

function dfPreventDefault() {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)(event => event.preventDefault());
}

/***/ }),

/***/ 3407:
/*!*****************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/helpers/px.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dfPx: () => (/* binding */ dfPx)
/* harmony export */ });
/**
 * Adds 'px' to the number and turns it into a string
 */
function dfPx(value) {
  return `${value}px`;
}

/***/ }),

/***/ 6820:
/*!*******************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/helpers/stop-propagation.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dfStopPropagation: () => (/* binding */ dfStopPropagation)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 1969);

function dfStopPropagation() {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)(event => event.stopPropagation());
}

/***/ }),

/***/ 9440:
/*!*****************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/ng-draw-flow-node.base.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DrawFlowBaseNode: () => (/* binding */ DrawFlowBaseNode)
/* harmony export */ });
/* harmony import */ var _components_connectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/connectors */ 8783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6623);
var _DrawFlowBaseNode;


class DrawFlowBaseNode {
  constructor() {
    this.nodeId = '';
    this.startNode = false;
    this.endNode = false;
    this.selected = false;
  }
}
_DrawFlowBaseNode = DrawFlowBaseNode;
_DrawFlowBaseNode.ɵfac = function DrawFlowBaseNode_Factory(t) {
  return new (t || _DrawFlowBaseNode)();
};
_DrawFlowBaseNode.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: _DrawFlowBaseNode,
  viewQuery: function DrawFlowBaseNode_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_components_connectors__WEBPACK_IMPORTED_MODULE_0__.DfInputComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_components_connectors__WEBPACK_IMPORTED_MODULE_0__.DfOutputComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputs = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.outputs = _t);
    }
  },
  hostVars: 2,
  hostBindings: function DrawFlowBaseNode_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("df-selected", ctx.selected);
    }
  },
  inputs: {
    nodeId: "nodeId",
    model: "model",
    startNode: "startNode",
    endNode: "endNode"
  }
});

/***/ }),

/***/ 2636:
/*!*****************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/ng-draw-flow.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgDrawFlowComponent: () => (/* binding */ NgDrawFlowComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 9191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 8065);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8015);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 5536);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 1856);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 3396);
/* harmony import */ var _components_connections_connections_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/connections/connections.service */ 9976);
/* harmony import */ var _components_connections_draft_connection_draft_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connections/draft-connection/draft-connection.service */ 7232);
/* harmony import */ var _components_pan_zoom_pan_zoom_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pan-zoom/pan-zoom.component */ 4408);
/* harmony import */ var _components_pan_zoom_pan_zoom_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pan-zoom/pan-zoom.service */ 6592);
/* harmony import */ var _components_scene_scene_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/scene/scene.component */ 7788);
/* harmony import */ var _directives_resize_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/resize-observer */ 3470);
/* harmony import */ var _ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ng-draw-flow.token */ 9497);
/* harmony import */ var _services_coordinates_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/coordinates.service */ 5092);
var _NgDrawFlowComponent;















function NgDrawFlowComponent_df_scene_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "df-scene", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("connectionCreated", function NgDrawFlowComponent_df_scene_2_Template_df_scene_connectionCreated_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.connectionCreated.emit($event));
    })("connectionDeleted", function NgDrawFlowComponent_df_scene_2_Template_df_scene_connectionDeleted_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.onConnectionDeleted($event));
    })("nodeDeleted", function NgDrawFlowComponent_df_scene_2_Template_df_scene_nodeDeleted_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r4.nodeDeleted.emit($event));
    })("nodeMoved", function NgDrawFlowComponent_df_scene_2_Template_df_scene_nodeMoved_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.nodeMoved.emit($event));
    })("nodeSelected", function NgDrawFlowComponent_df_scene_2_Template_df_scene_nodeSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r6.nodeSelected.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx_r0.form);
  }
}
class NgDrawFlowComponent {
  constructor() {
    // This property is needed to not emit connectionDeleted events when destroying a NgDrawFlowComponent component
    this.isComponentDestroyed = false;
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_8__.DestroyRef);
    this.scale = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.connectionCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.connectionDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.nodeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.nodeMoved = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.nodeDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl({
      nodes: new Map(),
      connections: []
    });
    this.rootReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(false);
    this.onChange = _ => {};
    // @ts-ignore
    this.onTouched = () => {};
  }
  ngOnInit() {
    this.watchFormChanges();
  }
  ngOnDestroy() {
    this.isComponentDestroyed = true;
  }
  writeValue(value) {
    if (!value) {
      return;
    }
    this.form.setValue(value, {
      emitEvent: false
    });
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  zoomIn() {
    this.panzoom.zoomIn();
  }
  zoomOut() {
    this.panzoom.zoomOut();
  }
  resetPosition() {
    this.panzoom.resetPanzoom();
  }
  onConnectionDeleted(connection) {
    if (!this.isComponentDestroyed) {
      this.connectionDeleted.emit(connection);
    }
  }
  onResize(event) {
    const {
      width,
      height
    } = event[0].contentRect;
    this.rootReady$.next(width && height);
  }
  watchFormChanges() {
    this.form.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(10), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_13__.takeUntilDestroyed)(this.destroyRef)).subscribe(value => {
      this.onChange(value);
    });
  }
}
_NgDrawFlowComponent = NgDrawFlowComponent;
_NgDrawFlowComponent.ɵfac = function NgDrawFlowComponent_Factory(t) {
  return new (t || _NgDrawFlowComponent)();
};
_NgDrawFlowComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: _NgDrawFlowComponent,
  selectors: [["ng-draw-flow"]],
  viewQuery: function NgDrawFlowComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_components_pan_zoom_pan_zoom_component__WEBPACK_IMPORTED_MODULE_2__.PanZoomComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.panzoom = _t.first);
    }
  },
  outputs: {
    scale: "scale",
    connectionCreated: "connectionCreated",
    connectionDeleted: "connectionDeleted",
    nodeSelected: "nodeSelected",
    nodeMoved: "nodeMoved",
    nodeDeleted: "nodeDeleted"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([_components_pan_zoom_pan_zoom_service__WEBPACK_IMPORTED_MODULE_3__.PanZoomService, _components_connections_connections_service__WEBPACK_IMPORTED_MODULE_0__.ConnectionsService, _services_coordinates_service__WEBPACK_IMPORTED_MODULE_7__.CoordinatesService, _components_connections_draft_connection_draft_connection_service__WEBPACK_IMPORTED_MODULE_1__.DraftConnectionService, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.forwardRef)(() => _NgDrawFlowComponent),
    multi: true
  }, {
    provide: _ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_6__.DRAW_FLOW_ROOT_ELEMENT,
    useFactory: ({
      nativeElement
    }) => nativeElement,
    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef]
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
  decls: 4,
  vars: 3,
  consts: [[1, "drawflow", 3, "dfResizeObserver"], [3, "scale"], [3, "formControl", "connectionCreated", "connectionDeleted", "nodeDeleted", "nodeMoved", "nodeSelected", 4, "ngIf"], [3, "formControl", "connectionCreated", "connectionDeleted", "nodeDeleted", "nodeMoved", "nodeSelected"]],
  template: function NgDrawFlowComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("dfResizeObserver", function NgDrawFlowComponent_Template_div_dfResizeObserver_0_listener($event) {
        return ctx.onResize($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "df-pan-zoom", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("scale", function NgDrawFlowComponent_Template_df_pan_zoom_scale_1_listener($event) {
        return ctx.scale.emit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, NgDrawFlowComponent_df_scene_2_Template, 1, 1, "df-scene", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, ctx.rootReady$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _directives_resize_observer__WEBPACK_IMPORTED_MODULE_5__.DfResizeObserver, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _components_pan_zoom_pan_zoom_component__WEBPACK_IMPORTED_MODULE_2__.PanZoomComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlDirective, _components_scene_scene_component__WEBPACK_IMPORTED_MODULE_4__.SceneComponent],
  styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: block;\n  block-size: 100%;\n  inline-size: 100%;\n  overflow: hidden;\n  --df-connection-color: #428bf9;\n  --df-connection-color-hover: #336fee;\n  --df-connection-color-active: #156ed4;\n  --df-connection-stroke-width: 2px;\n  --df-connector-color: #156ed4;\n  --df-connector-color-hover: #428bf9;\n}\n.drawflow[_ngcontent-%COMP%] {\n  inline-size: 100%;\n  block-size: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5nLWRyYXctZmxvdy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUVBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtBQUFKO0FBR0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBREoiLCJmaWxlIjoibmctZHJhdy1mbG93LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBibG9jay1zaXplOiAxMDAlO1xuICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAtLWRmLWNvbm5lY3Rpb24tY29sb3I6ICM0MjhiZjk7XG4gICAgLS1kZi1jb25uZWN0aW9uLWNvbG9yLWhvdmVyOiAjMzM2ZmVlO1xuICAgIC0tZGYtY29ubmVjdGlvbi1jb2xvci1hY3RpdmU6ICMxNTZlZDQ7XG4gICAgLS1kZi1jb25uZWN0aW9uLXN0cm9rZS13aWR0aDogMnB4O1xuICAgIC0tZGYtY29ubmVjdG9yLWNvbG9yOiAjMTU2ZWQ0O1xuICAgIC0tZGYtY29ubmVjdG9yLWNvbG9yLWhvdmVyOiAjNDI4YmY5O1xufVxuXG4uZHJhd2Zsb3cge1xuICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgIGJsb2NrLXNpemU6IDEwMCU7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLWRyYXctZmxvdy9zcmMvbGliL25nLWRyYXctZmxvdy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUVBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtBQUFKO0FBR0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBRUEsNGdDQUE0Z0MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJsb2NrLXNpemU6IDEwMCU7XG4gICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC0tZGYtY29ubmVjdGlvbi1jb2xvcjogIzQyOGJmOTtcbiAgICAtLWRmLWNvbm5lY3Rpb24tY29sb3ItaG92ZXI6ICMzMzZmZWU7XG4gICAgLS1kZi1jb25uZWN0aW9uLWNvbG9yLWFjdGl2ZTogIzE1NmVkNDtcbiAgICAtLWRmLWNvbm5lY3Rpb24tc3Ryb2tlLXdpZHRoOiAycHg7XG4gICAgLS1kZi1jb25uZWN0b3ItY29sb3I6ICMxNTZlZDQ7XG4gICAgLS1kZi1jb25uZWN0b3ItY29sb3ItaG92ZXI6ICM0MjhiZjk7XG59XG5cbi5kcmF3ZmxvdyB7XG4gICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgYmxvY2stc2l6ZTogMTAwJTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 1954:
/*!******************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/ng-draw-flow.interfaces.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DfConnectionPoint: () => (/* binding */ DfConnectionPoint)
/* harmony export */ });
var DfConnectionPoint;
(function (DfConnectionPoint) {
  DfConnectionPoint["Input"] = "input";
  DfConnectionPoint["Output"] = "output";
})(DfConnectionPoint || (DfConnectionPoint = {}));

/***/ }),

/***/ 1170:
/*!*****************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/ng-draw-flow.providers.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideNgDrawFlowConfigs: () => (/* binding */ provideNgDrawFlowConfigs)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng-draw-flow.token */ 9497);

function provideNgDrawFlowConfigs(options) {
  return {
    provide: _ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_0__.DRAW_FLOW_COMPONENTS,
    useFactory: () => options || {}
  };
}

/***/ }),

/***/ 9497:
/*!*************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/ng-draw-flow.token.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DRAW_FLOW_COMPONENTS: () => (/* binding */ DRAW_FLOW_COMPONENTS),
/* harmony export */   DRAW_FLOW_ROOT_ELEMENT: () => (/* binding */ DRAW_FLOW_ROOT_ELEMENT)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6623);

const DRAW_FLOW_COMPONENTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('DRAW_FLOW_COMPONENTS');
const DRAW_FLOW_ROOT_ELEMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('DRAW_FLOW_ROOT_ELEMENT');

/***/ }),

/***/ 5092:
/*!***********************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/services/coordinates.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoordinatesService: () => (/* binding */ CoordinatesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 1151);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5536);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6623);
var _CoordinatesService;


class CoordinatesService {
  constructor() {
    this.connectionPointsMap = {};
    this.connectionPointsMapChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject(1);
  }
  getConnectionPoint(name) {
    return this.connectionPointsMap[name];
  }
  addConnectionPoint(name, pointCoordinates) {
    if (this.connectionPointsMap[name]) {
      this.connectionPointsMap[name].next(pointCoordinates);
    } else {
      this.connectionPointsMap[name] = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(pointCoordinates);
    }
    this.connectionPointsMapChange$.next();
  }
}
_CoordinatesService = CoordinatesService;
_CoordinatesService.ɵfac = function CoordinatesService_Factory(t) {
  return new (t || _CoordinatesService)();
};
_CoordinatesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _CoordinatesService,
  factory: _CoordinatesService.ɵfac
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(9550)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map