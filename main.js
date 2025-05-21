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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 7008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4199);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 1244);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core */ 4246);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @taiga-ui/core */ 4494);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @taiga-ui/core */ 5972);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @taiga-ui/core */ 1534);
/* harmony import */ var _taiga_ui_event_plugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/event-plugins */ 3676);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-markdown */ 5592);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 4699);
/* harmony import */ var _app_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.providers */ 3734);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routes */ 2516);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 4841);
/* harmony import */ var _taiga_ui_addon_doc_directives__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @taiga-ui/addon-doc/directives */ 8203);
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
  providers: [_app_providers__WEBPACK_IMPORTED_MODULE_1__.APP_PROVIDERS, _taiga_ui_event_plugins__WEBPACK_IMPORTED_MODULE_4__.NG_EVENT_PLUGINS],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule.withServerTransition({
    appId: 'demo'
  }), _app_routes__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__.TuiRoot, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_9__.MarkdownModule.forRoot({
    loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient,
    sanitize: _angular_core__WEBPACK_IMPORTED_MODULE_3__.SecurityContext.NONE
  }), _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocAPI, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocAPIItem, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocCopy, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocTab, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocDemo, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocCode, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocExample, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocDocumentation, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocPage, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocNavigation, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocMain]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppBrowserModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routes__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__.TuiRoot, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_11__.TuiDialog, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_12__.TuiAlert, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_9__.MarkdownModule, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocAPI, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocAPIItem, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocCopy, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocTab, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocDemo, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocCode, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocExample, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocExampleGetTabsPipe, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocTypeReferencePipe, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocDocumentation, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocDocumentationPropertyConnector, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocPage, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocPageTabConnector, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocNavigation, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocMain, _taiga_ui_addon_doc_directives__WEBPACK_IMPORTED_MODULE_13__.TuiDocText, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_14__.TuiLink]
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
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ 4246);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 4841);
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
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiRoot, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__.TuiDocMain],
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
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 4171);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-highlightjs */ 5240);
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
            isBrowser ? __webpack_require__.e(/*! import() */ "node_modules_ngx-highlightjs_fesm2022_ngx-highlightjs-line-numbers_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ngx-highlightjs/line-numbers */ 2726)) : Promise.resolve()
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
  nodes: {
    infoNode: _modules_nodes__WEBPACK_IMPORTED_MODULE_4__.InfoNodeComponent,
    simpleNode: _modules_nodes__WEBPACK_IMPORTED_MODULE_4__.SimpleNodeComponent,
    inputNode: _modules_nodes__WEBPACK_IMPORTED_MODULE_4__.InputNodeComponent,
    outputNode: _modules_nodes__WEBPACK_IMPORTED_MODULE_4__.OutputNodeComponent,
    miniNode: _modules_nodes__WEBPACK_IMPORTED_MODULE_4__.MiniNodeComponent,
    formNode: _modules_nodes__WEBPACK_IMPORTED_MODULE_4__.FormNodeComponent
  }
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
/* harmony import */ var _demo_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/constants */ 6899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6623);

var _AppRoutingModule;




const appRoutes = [
// Quickstart
{
  path: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.Quickstart,
  loadComponent: function () {
    var _ref = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_quickstart_quickstart_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/documentation/quickstart/quickstart.component */ 6849));
    });
    return function loadComponent() {
      return _ref.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Quickstart'
  }
}, {
  path: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.TermsAndDefinitions,
  loadComponent: function () {
    var _ref2 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_terms-and-definitions_terms-and-definitions_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/documentation/terms-and-definitions/terms-and-definitions.component */ 509));
    });
    return function loadComponent() {
      return _ref2.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Terms and Definitions'
  }
}, {
  path: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.PanZoom,
  loadComponent: function () {
    var _ref3 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_pan-zoom-configuration_pan-zoom-configuration_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/documentation/pan-zoom-configuration/pan-zoom-configuration.component */ 2251));
    });
    return function loadComponent() {
      return _ref3.apply(this, arguments);
    };
  }(),
  data: {
    title: 'PanZoom Configuration'
  }
}, {
  path: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.Nodes,
  loadComponent: function () {
    var _ref4 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_creating-nodes_creating-nodes_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/documentation/creating-nodes/creating-nodes.component */ 3997));
    });
    return function loadComponent() {
      return _ref4.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Creating Nodes'
  }
}, {
  path: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.Connectors,
  loadComponent: function () {
    var _ref5 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_connectors_connectors_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/documentation/connectors/connectors.component */ 4823));
    });
    return function loadComponent() {
      return _ref5.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Connectors'
  }
}, {
  path: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.Validation,
  loadComponent: function () {
    var _ref6 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_validation_validation_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/documentation/validation/validation.component */ 7149));
    });
    return function loadComponent() {
      return _ref6.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Validation'
  }
},
// Examples
{
  path: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.SimpleExample,
  loadComponent: function () {
    var _ref7 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "projects_demo_src_pages_examples_simple-example_simple-example_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/examples/simple-example/simple-example.component */ 4706));
    });
    return function loadComponent() {
      return _ref7.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Simple example'
  }
}, {
  path: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.Overview,
  loadComponent: function () {
    var _ref8 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "projects_demo_src_pages_examples_overview_overview_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/examples/overview/overview.component */ 1882));
    });
    return function loadComponent() {
      return _ref8.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Feature Overview'
  }
}, {
  path: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.Editor,
  loadComponent: function () {
    var _ref9 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "projects_demo_src_pages_examples_editor_editor_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/examples/editor/editor.component */ 8810));
    });
    return function loadComponent() {
      return _ref9.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Editor example'
  }
}, {
  path: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.StressTest,
  loadComponent: function () {
    var _ref10 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "projects_demo_src_pages_examples_stress-test_stress-test_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/examples/stress-test/stress-test.component */ 8922));
    });
    return function loadComponent() {
      return _ref10.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Stress Test'
  }
}, {
  path: '**',
  redirectTo: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.Quickstart
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

/***/ 5858:
/*!******************************************************!*\
  !*** ./projects/demo/src/app/constants/demo-path.ts ***!
  \******************************************************/
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
  Connections: 'documentation/connections',
  Validation: 'documentation/validation',
  SimpleExample: 'examples/simple-example',
  Overview: 'examples/overview',
  Editor: 'examples/editor',
  StressTest: 'examples/stress-test',
  CustomNodes: 'examples/nodes-example/custom-nodes-example'
};

/***/ }),

/***/ 6899:
/*!**************************************************!*\
  !*** ./projects/demo/src/app/constants/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoPath: () => (/* reexport safe */ _demo_path__WEBPACK_IMPORTED_MODULE_0__.DemoPath)
/* harmony export */ });
/* harmony import */ var _demo_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo-path */ 5858);


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
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ 1534);
/* harmony import */ var _taiga_ui_polymorpheus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/polymorpheus */ 6636);
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
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLink],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   tui-root._mobile[_nghost-%COMP%], tui-root._mobile   [_nghost-%COMP%] {\n  font-size: 0;\n}\n.logo-link[_ngcontent-%COMP%] {\n  display: flex;\n}\n.logo-name[_ngcontent-%COMP%] {\n  display: flex;\n  color: var(--tui-text-primary);\n}\n.logo[_ngcontent-%COMP%] {\n  margin-right: 0.625rem;\n  inline-size: 2rem;\n  block-size: 2rem;\n}\n.by[_ngcontent-%COMP%] {\n  margin-left: 0.875rem;\n}\ntui-root._mobile[_nghost-%COMP%]   .by[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .by[_ngcontent-%COMP%] {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ28uc3R5bGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNKO0FBSEE7RUFLUSxZQUFBO0FBQ1I7QUFHQTtFQUNJLGFBQUE7QUFESjtBQUlBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBRko7QUFLQTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUhKO0FBTUE7RUFDSSxxQkFBQTtBQUpKO0FBTUk7RUFDSSxhQUFBO0FBSlIiLCJmaWxlIjoibG9nby5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIDpob3N0LWNvbnRleHQodHVpLXJvb3QuX21vYmlsZSkge1xuICAgICAgICBmb250LXNpemU6IDA7XG4gICAgfVxufVxuXG4ubG9nby1saW5rIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubG9nby1uYW1lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC1wcmltYXJ5KTtcbn1cblxuLmxvZ28ge1xuICAgIG1hcmdpbi1yaWdodDogMC42MjVyZW07XG4gICAgaW5saW5lLXNpemU6IDJyZW07XG4gICAgYmxvY2stc2l6ZTogMnJlbTtcbn1cblxuLmJ5IHtcbiAgICBtYXJnaW4tbGVmdDogMC44NzVyZW07XG5cbiAgICA6aG9zdC1jb250ZXh0KHR1aS1yb290Ll9tb2JpbGUpICYge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9tb2R1bGVzL2xvZ28vbG9nby5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFIQTtFQUtRLFlBQUE7QUFDUjtBQUdBO0VBQ0ksYUFBQTtBQURKO0FBSUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFGSjtBQUtBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSEo7QUFNQTtFQUNJLHFCQUFBO0FBSko7QUFNSTtFQUNJLGFBQUE7QUFKUjs7QUFFQSw0aENBQTRoQyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICA6aG9zdC1jb250ZXh0KHR1aS1yb290Ll9tb2JpbGUpIHtcbiAgICAgICAgZm9udC1zaXplOiAwO1xuICAgIH1cbn1cblxuLmxvZ28tbGluayB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmxvZ28tbmFtZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtcHJpbWFyeSk7XG59XG5cbi5sb2dvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO1xuICAgIGlubGluZS1zaXplOiAycmVtO1xuICAgIGJsb2NrLXNpemU6IDJyZW07XG59XG5cbi5ieSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuODc1cmVtO1xuXG4gICAgOmhvc3QtY29udGV4dCh0dWktcm9vdC5fbW9iaWxlKSAmIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});
const LOGO_CONTENT = new _taiga_ui_polymorpheus__WEBPACK_IMPORTED_MODULE_3__.PolymorpheusComponent(LogoComponent);

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
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ 1498);
/* harmony import */ var _taiga_ui_legacy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/legacy */ 7674);
/* harmony import */ var _taiga_ui_legacy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/legacy */ 9076);
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
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      field1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
        connectorId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('node-5-output-1'),
        fieldValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])
      }),
      field2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
        connectorId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('node-5-output-2'),
        fieldValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])
      })
    });
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DestroyRef);
  }
  set invalid(value) {
    super.invalid = value;
  }
  get invalid() {
    const formInvalid = Object.values(this.form.controls).some(fieldGroup => fieldGroup.controls.fieldValue.touched && fieldGroup.controls.fieldValue.invalid);
    return super.invalid || formInvalid;
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
  inputs: {
    invalid: "invalid"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 7,
  vars: 4,
  consts: [["class", "input", 3, "connectorData", 4, "ngIf"], [1, "tui-space_bottom-4", "tui-text_body-s"], [3, "formGroup"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["size", "s", "tuiButton", "", "type", "button", 3, "click"], [1, "input", 3, "connectorData"], [3, "formGroupName"], [1, "field", "tui-space_bottom-4"], ["formControlName", "fieldValue", 3, "tuiTextfieldSize"], [4, "ngIf"], [1, "output", 3, "connectorData"]],
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
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfInputComponent, _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfOutputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__.TuiButton, _taiga_ui_legacy__WEBPACK_IMPORTED_MODULE_6__.TuiInputModule, _taiga_ui_legacy__WEBPACK_IMPORTED_MODULE_6__.TuiInputComponent, _taiga_ui_legacy__WEBPACK_IMPORTED_MODULE_6__.TuiInputDirective, _taiga_ui_legacy__WEBPACK_IMPORTED_MODULE_7__.TuiTextfieldControllerModule, _taiga_ui_legacy__WEBPACK_IMPORTED_MODULE_7__.TuiTextfieldSizeDirective],
  styles: ["\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  background: #fff;\n  inline-size: 12.5rem;\n  min-block-size: 2.5rem;\n  border-radius: 0.25rem;\n  color: #000;\n  border: 0.125rem solid #000;\n  padding: 1.25rem;\n  box-sizing: border-box;\n}\n.df-selected[_nghost-%COMP%] {\n  border-color: var(--tui-text-action);\n}\n.df-invalid[_nghost-%COMP%] {\n  border-color: var(--tui-text-negative);\n}\n.field[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.field[_ngcontent-%COMP%]   tui-input[_ngcontent-%COMP%] {\n  inline-size: 100%;\n}\n.input[_ngcontent-%COMP%], .output[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n}\n.input[_ngcontent-%COMP%] {\n  left: -0.5rem;\n  top: 0.25rem;\n}\n.output-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.output[_ngcontent-%COMP%] {\n  right: -1.8125rem;\n  top: 0.75rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tbm9kZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGOzs7Q0FHQztBQUpEO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQU1KO0FBSkk7RUFDSSxvQ0FBQTtBQU1SO0FBSEk7RUFDSSxzQ0FBQTtBQUtSO0FBREE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUdKO0FBTkE7RUFNUSxpQkFBQTtBQUdSO0FBQ0E7O0VBRUksa0JBQUE7RUFDQSxVQUFBO0FBQ0o7QUFFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBQUo7QUFHQTtFQUNJLGtCQUFBO0FBREo7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQUZKIiwiZmlsZSI6ImZvcm0tbm9kZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ0B0YWlnYS11aS9jb3JlL3N0eWxlcy90YWlnYS11aS1sb2NhbCc7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGlubGluZS1zaXplOiAxMi41cmVtO1xuICAgIG1pbi1ibG9jay1zaXplOiAyLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBib3JkZXI6IDAuMTI1cmVtIHNvbGlkICMwMDA7XG4gICAgcGFkZGluZzogMS4yNXJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgJi5kZi1zZWxlY3RlZCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLXRleHQtYWN0aW9uKTtcbiAgICB9XG5cbiAgICAmLmRmLWludmFsaWQge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS10ZXh0LW5lZ2F0aXZlKTtcbiAgICB9XG59XG5cbi5maWVsZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIHR1aS1pbnB1dCB7XG4gICAgICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgIH1cbn1cblxuLmlucHV0LFxuLm91dHB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5pbnB1dCB7XG4gICAgbGVmdDogLTAuNXJlbTtcbiAgICB0b3A6IDAuMjVyZW07XG59XG5cbi5vdXRwdXQtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ub3V0cHV0IHtcbiAgICByaWdodDogLTEuODEyNXJlbTtcbiAgICB0b3A6IDAuNzVyZW07XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9tb2R1bGVzL25vZGVzL2Zvcm0tbm9kZS9mb3JtLW5vZGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRjs7O0NBR0M7QUFKRDtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFNSjtBQUpJO0VBQ0ksb0NBQUE7QUFNUjtBQUhJO0VBQ0ksc0NBQUE7QUFLUjtBQURBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFHSjtBQU5BO0VBTVEsaUJBQUE7QUFHUjtBQUNBOztFQUVJLGtCQUFBO0VBQ0EsVUFBQTtBQUNKO0FBRUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUFKO0FBR0E7RUFDSSxrQkFBQTtBQURKO0FBSUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUFGSjs7QUFFQSw0dkRBQTR2RCIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ0B0YWlnYS11aS9jb3JlL3N0eWxlcy90YWlnYS11aS1sb2NhbCc7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGlubGluZS1zaXplOiAxMi41cmVtO1xuICAgIG1pbi1ibG9jay1zaXplOiAyLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBib3JkZXI6IDAuMTI1cmVtIHNvbGlkICMwMDA7XG4gICAgcGFkZGluZzogMS4yNXJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgJi5kZi1zZWxlY3RlZCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLXRleHQtYWN0aW9uKTtcbiAgICB9XG5cbiAgICAmLmRmLWludmFsaWQge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS10ZXh0LW5lZ2F0aXZlKTtcbiAgICB9XG59XG5cbi5maWVsZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIHR1aS1pbnB1dCB7XG4gICAgICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgIH1cbn1cblxuLmlucHV0LFxuLm91dHB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5pbnB1dCB7XG4gICAgbGVmdDogLTAuNXJlbTtcbiAgICB0b3A6IDAuMjVyZW07XG59XG5cbi5vdXRwdXQtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ub3V0cHV0IHtcbiAgICByaWdodDogLTEuODEyNXJlbTtcbiAgICB0b3A6IDAuNzVyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
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
/* harmony export */   InputNodeComponent: () => (/* reexport safe */ _input_node_input_node_component__WEBPACK_IMPORTED_MODULE_2__.InputNodeComponent),
/* harmony export */   MiniNodeComponent: () => (/* reexport safe */ _mini_node_mini_node_component__WEBPACK_IMPORTED_MODULE_3__.MiniNodeComponent),
/* harmony export */   OutputNodeComponent: () => (/* reexport safe */ _output_node_output_node_component__WEBPACK_IMPORTED_MODULE_4__.OutputNodeComponent),
/* harmony export */   SimpleNodeComponent: () => (/* reexport safe */ _simple_node_simple_node_component__WEBPACK_IMPORTED_MODULE_5__.SimpleNodeComponent)
/* harmony export */ });
/* harmony import */ var _form_node_form_node_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-node/form-node.component */ 5979);
/* harmony import */ var _info_node_info_node_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info-node/info-node.component */ 8367);
/* harmony import */ var _input_node_input_node_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-node/input-node.component */ 8839);
/* harmony import */ var _mini_node_mini_node_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mini-node/mini-node.component */ 9951);
/* harmony import */ var _output_node_output_node_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./output-node/output-node.component */ 5607);
/* harmony import */ var _simple_node_simple_node_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./simple-node/simple-node.component */ 5920);







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
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  background: #fff;\n  inline-size: 30rem;\n  box-shadow: var(--tui-shadow-small);\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  border: 0.0625rem solid var(--tui-text-positive);\n  transition: border-color 0.2s ease-in-out;\n  color: #000;\n}\n.tui-list__item[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8tbm9kZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnREFBQTtFQUNBLHlDQUFBO0VBQ0EsV0FBQTtBQUNKO0FBRUE7RUFDSSxXQUFBO0FBQUoiLCJmaWxlIjoiaW5mby1ub2RlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgaW5saW5lLXNpemU6IDMwcmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXR1aS1zaGFkb3ctc21hbGwpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tdHVpLXRleHQtcG9zaXRpdmUpO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4udHVpLWxpc3RfX2l0ZW0ge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9tb2R1bGVzL25vZGVzL2luZm8tbm9kZS9pbmZvLW5vZGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0RBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7QUFDSjtBQUVBO0VBQ0ksV0FBQTtBQUFKOztBQUVBLDQwQkFBNDBCIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgaW5saW5lLXNpemU6IDMwcmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXR1aS1zaGFkb3ctc21hbGwpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tdHVpLXRleHQtcG9zaXRpdmUpO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4udHVpLWxpc3RfX2l0ZW0ge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 8839:
/*!********************************************************************************!*\
  !*** ./projects/demo/src/app/modules/nodes/input-node/input-node.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputNodeComponent: () => (/* binding */ InputNodeComponent)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 5577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6623);
var _InputNodeComponent;


const _c0 = function (a0, a1) {
  return {
    nodeId: a0,
    connectorId: a1,
    single: false
  };
};
class InputNodeComponent extends _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DrawFlowBaseNode {
  constructor() {
    super(...arguments);
    this.connectorPosition = _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition;
  }
}
_InputNodeComponent = InputNodeComponent;
_InputNodeComponent.ɵfac = /*@__PURE__*/function () {
  let ɵInputNodeComponent_BaseFactory;
  return function InputNodeComponent_Factory(t) {
    return (ɵInputNodeComponent_BaseFactory || (ɵInputNodeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_InputNodeComponent)))(t || _InputNodeComponent);
  };
}();
_InputNodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _InputNodeComponent,
  selectors: [["app-input-node"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 6,
  vars: 21,
  consts: [[1, "input", "input_left", 3, "connectorData", "position"], [1, "input", "input_top", 3, "connectorData", "position"], [1, "tui-text_body-xs"], [1, "input", "input_right", 3, "connectorData", "position"], [1, "input", "input_bottom", 3, "connectorData", "position"]],
  template: function InputNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "df-input", 0)(1, "df-input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "df-input", 3)(5, "df-input", 4);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](9, _c0, ctx.nodeId, ctx.nodeId + "-input-1"))("position", ctx.connectorPosition.Left);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](12, _c0, ctx.nodeId, ctx.nodeId + "-input-2"))("position", ctx.connectorPosition.Top);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.model.text);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](15, _c0, ctx.nodeId, ctx.nodeId + "-input-3"))("position", ctx.connectorPosition.Right);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](18, _c0, ctx.nodeId, ctx.nodeId + "-input-4"))("position", ctx.connectorPosition.Bottom);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfInputComponent],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  background: #fff;\n  inline-size: 10rem;\n  box-shadow: var(--tui-shadow-small);\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  border: 0.0625rem solid transparent;\n  transition: border-color 0.2s ease-in-out;\n  color: #000;\n}\n.df-selected[_nghost-%COMP%] {\n  z-index: 100;\n  border-color: var(--tui-text-action);\n}\n.input[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n}\n.input_top[_ngcontent-%COMP%] {\n  left: 50%;\n  top: -0.5rem;\n}\n.input_left[_ngcontent-%COMP%] {\n  left: -0.5rem;\n  top: 50%;\n}\n.input_right[_ngcontent-%COMP%] {\n  right: -0.5rem;\n  top: 50%;\n}\n.input_bottom[_ngcontent-%COMP%] {\n  bottom: -0.5rem;\n  right: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LW5vZGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7QUFDSjtBQUNJO0VBQ0ksWUFBQTtFQUNBLG9DQUFBO0FBQ1I7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQURKO0FBR0k7RUFDSSxTQUFBO0VBQ0EsWUFBQTtBQURSO0FBSUk7RUFDSSxhQUFBO0VBQ0EsUUFBQTtBQUZSO0FBS0k7RUFDSSxjQUFBO0VBQ0EsUUFBQTtBQUhSO0FBTUk7RUFDSSxlQUFBO0VBQ0EsVUFBQTtBQUpSIiwiZmlsZSI6ImlucHV0LW5vZGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGlubGluZS1zaXplOiAxMHJlbTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS10dWktc2hhZG93LXNtYWxsKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGNvbG9yOiAjMDAwO1xuXG4gICAgJi5kZi1zZWxlY3RlZCB7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktdGV4dC1hY3Rpb24pO1xuICAgIH1cbn1cblxuLmlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcblxuICAgICZfdG9wIHtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6IC0wLjVyZW07XG4gICAgfVxuXG4gICAgJl9sZWZ0IHtcbiAgICAgICAgbGVmdDogLTAuNXJlbTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgfVxuXG4gICAgJl9yaWdodCB7XG4gICAgICAgIHJpZ2h0OiAtMC41cmVtO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICB9XG5cbiAgICAmX2JvdHRvbSB7XG4gICAgICAgIGJvdHRvbTogLTAuNXJlbTtcbiAgICAgICAgcmlnaHQ6IDUwJTtcbiAgICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9tb2R1bGVzL25vZGVzL2lucHV0LW5vZGUvaW5wdXQtbm9kZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQ0k7RUFDSSxZQUFBO0VBQ0Esb0NBQUE7QUFDUjtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBREo7QUFHSTtFQUNJLFNBQUE7RUFDQSxZQUFBO0FBRFI7QUFJSTtFQUNJLGFBQUE7RUFDQSxRQUFBO0FBRlI7QUFLSTtFQUNJLGNBQUE7RUFDQSxRQUFBO0FBSFI7QUFNSTtFQUNJLGVBQUE7RUFDQSxVQUFBO0FBSlI7O0FBRUEsd2hEQUF3aEQiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGlubGluZS1zaXplOiAxMHJlbTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS10dWktc2hhZG93LXNtYWxsKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGNvbG9yOiAjMDAwO1xuXG4gICAgJi5kZi1zZWxlY3RlZCB7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktdGV4dC1hY3Rpb24pO1xuICAgIH1cbn1cblxuLmlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcblxuICAgICZfdG9wIHtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6IC0wLjVyZW07XG4gICAgfVxuXG4gICAgJl9sZWZ0IHtcbiAgICAgICAgbGVmdDogLTAuNXJlbTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgfVxuXG4gICAgJl9yaWdodCB7XG4gICAgICAgIHJpZ2h0OiAtMC41cmVtO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICB9XG5cbiAgICAmX2JvdHRvbSB7XG4gICAgICAgIGJvdHRvbTogLTAuNXJlbTtcbiAgICAgICAgcmlnaHQ6IDUwJTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
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
  styles: ["\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  display: flex;\n  background: #fff;\n  inline-size: 3.125rem;\n  block-size: 3.125rem;\n  padding: 0.5rem;\n  border: 0.0625rem solid #000;\n  transition: border-color 0.2s ease-in-out;\n  color: #000;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n}\n.df-invalid[_nghost-%COMP%] {\n  border-color: var(--tui-text-negative);\n}\n.input[_ngcontent-%COMP%], .output[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.input[_ngcontent-%COMP%] {\n  left: -0.5rem;\n  top: 0.5rem;\n}\n.output-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.output[_ngcontent-%COMP%] {\n  right: -0.5rem;\n  bottom: 0.5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmktbm9kZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGOzs7Q0FHQztBQUpEO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQU1KO0FBSkk7RUFDSSxzQ0FBQTtBQU1SO0FBRkE7O0VBRUksa0JBQUE7QUFJSjtBQURBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUFHSjtBQUFBO0VBQ0ksa0JBQUE7QUFFSjtBQUNBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJtaW5pLW5vZGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdAdGFpZ2EtdWkvY29yZS9zdHlsZXMvdGFpZ2EtdWktbG9jYWwnO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGlubGluZS1zaXplOiAzLjEyNXJlbTtcbiAgICBibG9jay1zaXplOiAzLjEyNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgIzAwMDtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAmLmRmLWludmFsaWQge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS10ZXh0LW5lZ2F0aXZlKTtcbiAgICB9XG59XG5cbi5pbnB1dCxcbi5vdXRwdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmlucHV0IHtcbiAgICBsZWZ0OiAtMC41cmVtO1xuICAgIHRvcDogMC41cmVtO1xufVxuXG4ub3V0cHV0LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm91dHB1dCB7XG4gICAgcmlnaHQ6IC0wLjVyZW07XG4gICAgYm90dG9tOiAwLjVyZW07XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9tb2R1bGVzL25vZGVzL21pbmktbm9kZS9taW5pLW5vZGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRjs7O0NBR0M7QUFKRDtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFNSjtBQUpJO0VBQ0ksc0NBQUE7QUFNUjtBQUZBOztFQUVJLGtCQUFBO0FBSUo7QUFEQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBR0o7QUFBQTtFQUNJLGtCQUFBO0FBRUo7QUFDQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUEsZzhDQUFnOEMiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdAdGFpZ2EtdWkvY29yZS9zdHlsZXMvdGFpZ2EtdWktbG9jYWwnO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGlubGluZS1zaXplOiAzLjEyNXJlbTtcbiAgICBibG9jay1zaXplOiAzLjEyNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgIzAwMDtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAmLmRmLWludmFsaWQge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS10ZXh0LW5lZ2F0aXZlKTtcbiAgICB9XG59XG5cbi5pbnB1dCxcbi5vdXRwdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmlucHV0IHtcbiAgICBsZWZ0OiAtMC41cmVtO1xuICAgIHRvcDogMC41cmVtO1xufVxuXG4ub3V0cHV0LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm91dHB1dCB7XG4gICAgcmlnaHQ6IC0wLjVyZW07XG4gICAgYm90dG9tOiAwLjVyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 5607:
/*!**********************************************************************************!*\
  !*** ./projects/demo/src/app/modules/nodes/output-node/output-node.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutputNodeComponent: () => (/* binding */ OutputNodeComponent)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 5577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6623);
var _OutputNodeComponent;


const _c0 = function (a0, a1) {
  return {
    nodeId: a0,
    connectorId: a1,
    single: false
  };
};
class OutputNodeComponent extends _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DrawFlowBaseNode {
  constructor() {
    super(...arguments);
    this.connectorPosition = _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition;
  }
}
_OutputNodeComponent = OutputNodeComponent;
_OutputNodeComponent.ɵfac = /*@__PURE__*/function () {
  let ɵOutputNodeComponent_BaseFactory;
  return function OutputNodeComponent_Factory(t) {
    return (ɵOutputNodeComponent_BaseFactory || (ɵOutputNodeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_OutputNodeComponent)))(t || _OutputNodeComponent);
  };
}();
_OutputNodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _OutputNodeComponent,
  selectors: [["app-output-node"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 6,
  vars: 21,
  consts: [[1, "output", "output_left", 3, "connectorData", "position"], [1, "output", "output_top", 3, "connectorData", "position"], [1, "tui-text_body-xs"], [1, "output", "output_right", 3, "connectorData", "position"], [1, "output", "output_bottom", 3, "connectorData", "position"]],
  template: function OutputNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "df-output", 0)(1, "df-output", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "df-output", 3)(5, "df-output", 4);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](9, _c0, ctx.nodeId, ctx.nodeId + "-output-1"))("position", ctx.connectorPosition.Left);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](12, _c0, ctx.nodeId, ctx.nodeId + "-output-2"))("position", ctx.connectorPosition.Top);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.model.text);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](15, _c0, ctx.nodeId, ctx.nodeId + "-output-3"))("position", ctx.connectorPosition.Right);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](18, _c0, ctx.nodeId, ctx.nodeId + "-output-4"))("position", ctx.connectorPosition.Bottom);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfOutputComponent],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  background: #fff;\n  inline-size: 10rem;\n  box-shadow: var(--tui-shadow-small);\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  border: 0.0625rem solid transparent;\n  transition: border-color 0.2s ease-in-out;\n  color: #000;\n}\n.df-selected[_nghost-%COMP%] {\n  z-index: 100;\n  border-color: var(--tui-text-action);\n}\n.output[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n}\n.output_top[_ngcontent-%COMP%] {\n  left: 50%;\n  top: -0.5rem;\n}\n.output_left[_ngcontent-%COMP%] {\n  left: -0.5rem;\n  top: 50%;\n}\n.output_right[_ngcontent-%COMP%] {\n  right: -0.5rem;\n  top: 50%;\n}\n.output_bottom[_ngcontent-%COMP%] {\n  bottom: -0.5rem;\n  right: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm91dHB1dC1ub2RlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDSTtFQUNJLFlBQUE7RUFDQSxvQ0FBQTtBQUNSO0FBR0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFESjtBQUdJO0VBQ0ksU0FBQTtFQUNBLFlBQUE7QUFEUjtBQUlJO0VBQ0ksYUFBQTtFQUNBLFFBQUE7QUFGUjtBQUtJO0VBQ0ksY0FBQTtFQUNBLFFBQUE7QUFIUjtBQU1JO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUFKUiIsImZpbGUiOiJvdXRwdXQtbm9kZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgaW5saW5lLXNpemU6IDEwcmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXR1aS1zaGFkb3ctc21hbGwpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgY29sb3I6ICMwMDA7XG5cbiAgICAmLmRmLXNlbGVjdGVkIHtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS10ZXh0LWFjdGlvbik7XG4gICAgfVxufVxuXG4ub3V0cHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcblxuICAgICZfdG9wIHtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6IC0wLjVyZW07XG4gICAgfVxuXG4gICAgJl9sZWZ0IHtcbiAgICAgICAgbGVmdDogLTAuNXJlbTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgfVxuXG4gICAgJl9yaWdodCB7XG4gICAgICAgIHJpZ2h0OiAtMC41cmVtO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICB9XG5cbiAgICAmX2JvdHRvbSB7XG4gICAgICAgIGJvdHRvbTogLTAuNXJlbTtcbiAgICAgICAgcmlnaHQ6IDUwJTtcbiAgICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9tb2R1bGVzL25vZGVzL291dHB1dC1ub2RlL291dHB1dC1ub2RlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDSTtFQUNJLFlBQUE7RUFDQSxvQ0FBQTtBQUNSO0FBR0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFESjtBQUdJO0VBQ0ksU0FBQTtFQUNBLFlBQUE7QUFEUjtBQUlJO0VBQ0ksYUFBQTtFQUNBLFFBQUE7QUFGUjtBQUtJO0VBQ0ksY0FBQTtFQUNBLFFBQUE7QUFIUjtBQU1JO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUFKUjs7QUFFQSw0aERBQTRoRCIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgaW5saW5lLXNpemU6IDEwcmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXR1aS1zaGFkb3ctc21hbGwpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgY29sb3I6ICMwMDA7XG5cbiAgICAmLmRmLXNlbGVjdGVkIHtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS10ZXh0LWFjdGlvbik7XG4gICAgfVxufVxuXG4ub3V0cHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcblxuICAgICZfdG9wIHtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6IC0wLjVyZW07XG4gICAgfVxuXG4gICAgJl9sZWZ0IHtcbiAgICAgICAgbGVmdDogLTAuNXJlbTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgfVxuXG4gICAgJl9yaWdodCB7XG4gICAgICAgIHJpZ2h0OiAtMC41cmVtO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICB9XG5cbiAgICAmX2JvdHRvbSB7XG4gICAgICAgIGJvdHRvbTogLTAuNXJlbTtcbiAgICAgICAgcmlnaHQ6IDUwJTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 5920:
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
  vars: 4,
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
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.model.text, " ", ctx.invalid, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.endNode);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfInputComponent, _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfOutputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  background: #fff;\n  inline-size: 10rem;\n  box-shadow: var(--tui-shadow-small);\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  border: 0.0625rem solid transparent;\n  transition: border-color 0.2s ease-in-out;\n  color: #000;\n}\n.df-selected[_nghost-%COMP%] {\n  border-color: var(--tui-text-action);\n}\n.df-invalid[_nghost-%COMP%] {\n  border-color: var(--tui-text-negative);\n}\n.input[_ngcontent-%COMP%], .output[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n}\n.input[_ngcontent-%COMP%] {\n  left: -0.5rem;\n  top: 0.25rem;\n}\n.output-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.output[_ngcontent-%COMP%] {\n  right: -0.5rem;\n  top: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbXBsZS1ub2RlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDSTtFQUNJLG9DQUFBO0FBQ1I7QUFFSTtFQUNJLHNDQUFBO0FBQVI7QUFJQTs7RUFFSSxrQkFBQTtFQUNBLFVBQUE7QUFGSjtBQUtBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFISjtBQU1BO0VBQ0ksa0JBQUE7QUFKSjtBQU9BO0VBQ0ksY0FBQTtFQUNBLE1BQUE7QUFMSiIsImZpbGUiOiJzaW1wbGUtbm9kZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgaW5saW5lLXNpemU6IDEwcmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXR1aS1zaGFkb3ctc21hbGwpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgY29sb3I6ICMwMDA7XG5cbiAgICAmLmRmLXNlbGVjdGVkIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktdGV4dC1hY3Rpb24pO1xuICAgIH1cblxuICAgICYuZGYtaW52YWxpZCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLXRleHQtbmVnYXRpdmUpO1xuICAgIH1cbn1cblxuLmlucHV0LFxuLm91dHB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5pbnB1dCB7XG4gICAgbGVmdDogLTAuNXJlbTtcbiAgICB0b3A6IDAuMjVyZW07XG59XG5cbi5vdXRwdXQtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ub3V0cHV0IHtcbiAgICByaWdodDogLTAuNXJlbTtcbiAgICB0b3A6IDA7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9tb2R1bGVzL25vZGVzL3NpbXBsZS1ub2RlL3NpbXBsZS1ub2RlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDSTtFQUNJLG9DQUFBO0FBQ1I7QUFFSTtFQUNJLHNDQUFBO0FBQVI7QUFJQTs7RUFFSSxrQkFBQTtFQUNBLFVBQUE7QUFGSjtBQUtBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFISjtBQU1BO0VBQ0ksa0JBQUE7QUFKSjtBQU9BO0VBQ0ksY0FBQTtFQUNBLE1BQUE7QUFMSjs7QUFFQSxnN0NBQWc3QyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgaW5saW5lLXNpemU6IDEwcmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXR1aS1zaGFkb3ctc21hbGwpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgY29sb3I6ICMwMDA7XG5cbiAgICAmLmRmLXNlbGVjdGVkIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktdGV4dC1hY3Rpb24pO1xuICAgIH1cblxuICAgICYuZGYtaW52YWxpZCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLXRleHQtbmVnYXRpdmUpO1xuICAgIH1cbn1cblxuLmlucHV0LFxuLm91dHB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5pbnB1dCB7XG4gICAgbGVmdDogLTAuNXJlbTtcbiAgICB0b3A6IDAuMjVyZW07XG59XG5cbi5vdXRwdXQtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ub3V0cHV0IHtcbiAgICByaWdodDogLTAuNXJlbTtcbiAgICB0b3A6IDA7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
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
/* harmony import */ var _demo_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @demo/constants */ 6899);

const DEMO_PAGES = [{
  section: 'Documentation',
  title: 'Quickstart',
  route: _demo_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.Quickstart
}, {
  section: 'Documentation',
  title: 'Terms and Definitions',
  route: _demo_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.TermsAndDefinitions
}, {
  section: 'Documentation',
  title: 'PanZoom Configuration',
  route: _demo_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.PanZoom
}, {
  section: 'Documentation',
  title: 'Creating Nodes',
  route: _demo_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.Nodes
}, {
  section: 'Documentation',
  title: 'Connectors',
  route: _demo_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.Connectors
}, {
  section: 'Documentation',
  title: 'Validation',
  route: _demo_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.Validation
}, {
  section: 'Examples',
  title: 'Simple example',
  route: _demo_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.SimpleExample
}, {
  section: 'Examples',
  title: 'Feature Overview',
  route: _demo_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.Overview
}, {
  section: 'Examples',
  title: 'Editor example',
  route: _demo_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.Editor
}, {
  section: 'Examples',
  title: 'Stress Test',
  route: _demo_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.StressTest
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
/* harmony export */   DRAW_FLOW_DEFAULT_OPTIONS: () => (/* reexport safe */ _lib_ng_draw_flow_configs__WEBPACK_IMPORTED_MODULE_4__.DRAW_FLOW_DEFAULT_OPTIONS),
/* harmony export */   DRAW_FLOW_OPTIONS: () => (/* reexport safe */ _lib_ng_draw_flow_configs__WEBPACK_IMPORTED_MODULE_4__.DRAW_FLOW_OPTIONS),
/* harmony export */   DRAW_FLOW_ROOT_ELEMENT: () => (/* reexport safe */ _lib_ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_6__.DRAW_FLOW_ROOT_ELEMENT),
/* harmony export */   DfConnectionPoint: () => (/* reexport safe */ _lib_ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_5__.DfConnectionPoint),
/* harmony export */   DfConnectionType: () => (/* reexport safe */ _lib_ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_5__.DfConnectionType),
/* harmony export */   DfConnectorPosition: () => (/* reexport safe */ _lib_ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_5__.DfConnectorPosition),
/* harmony export */   DfInputComponent: () => (/* reexport safe */ _lib_components_connectors__WEBPACK_IMPORTED_MODULE_0__.DfInputComponent),
/* harmony export */   DfOutputComponent: () => (/* reexport safe */ _lib_components_connectors__WEBPACK_IMPORTED_MODULE_0__.DfOutputComponent),
/* harmony export */   DrawFlowBaseNode: () => (/* reexport safe */ _lib_ng_draw_flow_node_base__WEBPACK_IMPORTED_MODULE_7__.DrawFlowBaseNode),
/* harmony export */   ErrorsDirective: () => (/* reexport safe */ _lib_directives_errors_errors_directive__WEBPACK_IMPORTED_MODULE_2__.ErrorsDirective),
/* harmony export */   NgDrawFlowComponent: () => (/* reexport safe */ _lib_ng_draw_flow_component__WEBPACK_IMPORTED_MODULE_3__.NgDrawFlowComponent),
/* harmony export */   dfCycleDetectionValidator: () => (/* reexport safe */ _lib_validators__WEBPACK_IMPORTED_MODULE_8__.dfCycleDetectionValidator),
/* harmony export */   dfIsolatedNodesValidator: () => (/* reexport safe */ _lib_validators__WEBPACK_IMPORTED_MODULE_8__.dfIsolatedNodesValidator),
/* harmony export */   dfPanZoomOptionsProvider: () => (/* reexport safe */ _lib_components_pan_zoom_pan_zoom_options__WEBPACK_IMPORTED_MODULE_1__.dfPanZoomOptionsProvider),
/* harmony export */   provideNgDrawFlowConfigs: () => (/* reexport safe */ _lib_ng_draw_flow_configs__WEBPACK_IMPORTED_MODULE_4__.provideNgDrawFlowConfigs)
/* harmony export */ });
/* harmony import */ var _lib_components_connectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/components/connectors */ 8783);
/* harmony import */ var _lib_components_pan_zoom_pan_zoom_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components/pan-zoom/pan-zoom.options */ 5741);
/* harmony import */ var _lib_directives_errors_errors_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/directives/errors/errors.directive */ 7116);
/* harmony import */ var _lib_ng_draw_flow_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/ng-draw-flow.component */ 6607);
/* harmony import */ var _lib_ng_draw_flow_configs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/ng-draw-flow.configs */ 167);
/* harmony import */ var _lib_ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/ng-draw-flow.interfaces */ 1954);
/* harmony import */ var _lib_ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/ng-draw-flow.token */ 9497);
/* harmony import */ var _lib_ng_draw_flow_node_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/ng-draw-flow-node.base */ 9440);
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/validators */ 5657);










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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 9191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 3901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9721);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 4672);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 1082);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 9746);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 4406);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 9473);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 6812);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 5171);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 6816);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../directives */ 2256);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers */ 315);
/* harmony import */ var _ng_draw_flow_configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ng-draw-flow.configs */ 167);
/* harmony import */ var _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ng-draw-flow.interfaces */ 1954);
/* harmony import */ var _services_coordinates_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/coordinates.service */ 5092);
/* harmony import */ var _connections_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../connections.service */ 9976);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ 7846);
/* harmony import */ var _utils_create_smoothstep_path_create_smoothstep_path_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/create-smoothstep-path/create-smoothstep-path.util */ 3539);
var _ConnectionComponent;












class ConnectionComponent {
  constructor() {
    this.connectionsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_connections_service__WEBPACK_IMPORTED_MODULE_5__.ConnectionsService);
    this.coordinatesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_services_coordinates_service__WEBPACK_IMPORTED_MODULE_4__.CoordinatesService);
    this.options = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_ng_draw_flow_configs__WEBPACK_IMPORTED_MODULE_2__.DRAW_FLOW_OPTIONS);
    this.selected = false;
    this.connectionDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.connectionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.path$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(null).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.observeOn)(rxjs__WEBPACK_IMPORTED_MODULE_11__.asyncScheduler), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.getConnectionPoint(this.connection?.source), this.getConnectionPoint(this.connection?.target)])), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.switchMap)(([sourcePoint, targetPoint]) => {
      if (!sourcePoint || !targetPoint) {
        console.warn('One of the connection points not found');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([]);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([sourcePoint, targetPoint]);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)(([prevSource, prevTarget], [currSource, currTarget]) => JSON.stringify(prevSource) === JSON.stringify(currSource) && JSON.stringify(prevTarget) === JSON.stringify(currTarget)), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(([start, end]) => {
      if (!start || !end) {
        return '';
      }
      switch (this.options.connection.type) {
        case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_3__.DfConnectionType.SmoothStep:
          return (0,_utils_create_smoothstep_path_create_smoothstep_path_util__WEBPACK_IMPORTED_MODULE_7__.createSmoothstepPath)(start, end, this.options.connection.curvature);
        case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_3__.DfConnectionType.Bezier:
        default:
          {
            const distance = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.calculateDistance)(start.point, end.point);
            const maxCurvature = this.options.connection.curvature;
            const curvature = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.calculateCurvature)(distance, maxCurvature);
            return (0,_utils__WEBPACK_IMPORTED_MODULE_6__.createBezierPath)(start, end, curvature);
          }
      }
    }));
    this.optimization$ = this.path$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.skip)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.concat)((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(true), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(false).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.delay)(400)))), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.startWith)(false), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)());
  }
  handleKeyboardEvent(event) {
    if (!this.selected) {
      return;
    }
    event.preventDefault();
    this.connectionsService.removeConnection(this.connection);
    this.connectionDeleted.emit();
  }
  onSelectedChanged(selected) {
    this.selected = selected;
    if (selected) {
      this.connectionSelected.emit();
    }
  }
  getConnectionPoint(connector) {
    return this.coordinatesService.getConnectionPoint((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createConnectorHash)(connector));
  }
}
_ConnectionComponent = ConnectionComponent;
_ConnectionComponent.ɵfac = function ConnectionComponent_Factory(t) {
  return new (t || _ConnectionComponent)();
};
_ConnectionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: _ConnectionComponent,
  selectors: [["df-connection"]],
  hostBindings: function ConnectionComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keydown.delete", function ConnectionComponent_keydown_delete_HostBindingHandler($event) {
        return ctx.handleKeyboardEvent($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveDocument"])("keydown.backspace", function ConnectionComponent_keydown_backspace_HostBindingHandler($event) {
        return ctx.handleKeyboardEvent($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveDocument"]);
    }
  },
  inputs: {
    connection: "connection"
  },
  outputs: {
    connectionDeleted: "connectionDeleted",
    connectionSelected: "connectionSelected"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
  decls: 6,
  vars: 12,
  consts: [[1, "connection"], ["dfSelectableElement", "", 1, "selectable-area", 3, "selectionChanged"], [1, "main-path"]],
  template: function ConnectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "svg", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "path", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChanged", function ConnectionComponent_Template__svg_path_selectionChanged_2_listener($event) {
        return ctx.onSelectedChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "path", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("optimize-speed", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 6, ctx.optimization$));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("d", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 8, ctx.path$));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("df-selected", ctx.selected);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("d", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 10, ctx.path$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.AsyncPipe, _directives__WEBPACK_IMPORTED_MODULE_0__.SelectableElementDirective],
  styles: [".connection[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  aspect-ratio: 1 / 1;\n  shape-rendering: auto;\n}\n.connection.optimize-speed[_ngcontent-%COMP%] {\n  shape-rendering: optimizespeed;\n}\n.connection.optimize-speed[_ngcontent-%COMP%]   .main-path[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n}\n.connection[_ngcontent-%COMP%]   .main-path[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: var(--df-connection-stroke-width);\n  stroke: var(--df-connection-color);\n  pointer-events: none;\n}\n.connection[_ngcontent-%COMP%]   .main-path.df-selected[_ngcontent-%COMP%] {\n  stroke: var(--df-connection-color-active);\n}\n.connection[_ngcontent-%COMP%]   .selectable-area[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: var(--df-connection-selectable-area-stroke-width);\n  stroke: transparent;\n  pointer-events: stroke;\n  cursor: pointer;\n  transition: stroke 0.3s;\n}\n.connection[_ngcontent-%COMP%]   .selectable-area[_ngcontent-%COMP%]:hover {\n  stroke: var(--df-connection-selectable-area-color);\n}\n.connection[_ngcontent-%COMP%]   .selectable-area[_ngcontent-%COMP%]:hover    + .main-path[_ngcontent-%COMP%] {\n  stroke: var(--df-connection-color-hover);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3Rpb24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFDSTtFQUNJLDhCQUFBO0FBQ1I7QUFGSTtFQUlRLHdCQUFBO0FBQ1o7QUFiQTtFQWlCUSxVQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0FBRFI7QUFHUTtFQUNJLHlDQUFBO0FBRFo7QUF0QkE7RUE0QlEsVUFBQTtFQUNBLCtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUhSO0FBS1E7RUFDSSxrREFBQTtBQUhaO0FBS1k7RUFDSSx3Q0FBQTtBQUhoQiIsImZpbGUiOiJjb25uZWN0aW9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbm5lY3Rpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICAgIHNoYXBlLXJlbmRlcmluZzogYXV0bztcblxuICAgICYub3B0aW1pemUtc3BlZWQge1xuICAgICAgICBzaGFwZS1yZW5kZXJpbmc6IG9wdGltaXplc3BlZWQ7XG5cbiAgICAgICAgLm1haW4tcGF0aCB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWFpbi1wYXRoIHtcbiAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiB2YXIoLS1kZi1jb25uZWN0aW9uLXN0cm9rZS13aWR0aCk7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvcik7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgICAgICYuZGYtc2VsZWN0ZWQge1xuICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1kZi1jb25uZWN0aW9uLWNvbG9yLWFjdGl2ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VsZWN0YWJsZS1hcmVhIHtcbiAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiB2YXIoLS1kZi1jb25uZWN0aW9uLXNlbGVjdGFibGUtYXJlYS1zdHJva2Utd2lkdGgpO1xuICAgICAgICBzdHJva2U6IHRyYW5zcGFyZW50O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogc3Ryb2tlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IHN0cm9rZSAwLjNzO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1kZi1jb25uZWN0aW9uLXNlbGVjdGFibGUtYXJlYS1jb2xvcik7XG5cbiAgICAgICAgICAgICYgKyAubWFpbi1wYXRoIHtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcigtLWRmLWNvbm5lY3Rpb24tY29sb3ItaG92ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLWRyYXctZmxvdy9zcmMvbGliL2NvbXBvbmVudHMvY29ubmVjdGlvbnMvY29ubmVjdGlvbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUNJO0VBQ0ksOEJBQUE7QUFDUjtBQUZJO0VBSVEsd0JBQUE7QUFDWjtBQWJBO0VBaUJRLFVBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7QUFEUjtBQUdRO0VBQ0kseUNBQUE7QUFEWjtBQXRCQTtFQTRCUSxVQUFBO0VBQ0EsK0RBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBSFI7QUFLUTtFQUNJLGtEQUFBO0FBSFo7QUFLWTtFQUNJLHdDQUFBO0FBSGhCOztBQUVBLGcrREFBZytEIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbm5lY3Rpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICAgIHNoYXBlLXJlbmRlcmluZzogYXV0bztcblxuICAgICYub3B0aW1pemUtc3BlZWQge1xuICAgICAgICBzaGFwZS1yZW5kZXJpbmc6IG9wdGltaXplc3BlZWQ7XG5cbiAgICAgICAgLm1haW4tcGF0aCB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWFpbi1wYXRoIHtcbiAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiB2YXIoLS1kZi1jb25uZWN0aW9uLXN0cm9rZS13aWR0aCk7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvcik7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgICAgICYuZGYtc2VsZWN0ZWQge1xuICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1kZi1jb25uZWN0aW9uLWNvbG9yLWFjdGl2ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VsZWN0YWJsZS1hcmVhIHtcbiAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiB2YXIoLS1kZi1jb25uZWN0aW9uLXNlbGVjdGFibGUtYXJlYS1zdHJva2Utd2lkdGgpO1xuICAgICAgICBzdHJva2U6IHRyYW5zcGFyZW50O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogc3Ryb2tlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IHN0cm9rZSAwLjNzO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1kZi1jb25uZWN0aW9uLXNlbGVjdGFibGUtYXJlYS1jb2xvcik7XG5cbiAgICAgICAgICAgICYgKyAubWFpbi1wYXRoIHtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcigtLWRmLWNvbm5lY3Rpb24tY29sb3ItaG92ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
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
    const newConnections = connections.filter(newConnection => !this.connections$.value.some(existingConnection => this.areConnectionsEqual(existingConnection, newConnection)));
    if (newConnections.length === 0) {
      return;
    }
    const updatedUsedConnectors = [...this.usedConnectors$.value];
    newConnections.forEach(connection => {
      if (!updatedUsedConnectors.includes(connection.source.connectorId)) {
        updatedUsedConnectors.push(connection.source.connectorId);
      }
      if (!updatedUsedConnectors.includes(connection.target.connectorId)) {
        updatedUsedConnectors.push(connection.target.connectorId);
      }
    });
    this.usedConnectors$.next(updatedUsedConnectors);
    this.connections$.next([...this.connections$.value, ...newConnections]);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _ng_draw_flow_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ng-draw-flow.configs */ 167);
/* harmony import */ var _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ng-draw-flow.interfaces */ 1954);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ 7846);
/* harmony import */ var _utils_create_smoothstep_path_create_smoothstep_path_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/create-smoothstep-path/create-smoothstep-path.util */ 3539);
/* harmony import */ var _draft_connection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./draft-connection.service */ 7232);
var _DraftConnectionComponent;







const _c0 = ["connectionPath"];
class DraftConnectionComponent {
  constructor() {
    this.draftConnectionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_draft_connection_service__WEBPACK_IMPORTED_MODULE_4__.DraftConnectionService);
    this.options = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_ng_draw_flow_configs__WEBPACK_IMPORTED_MODULE_0__.DRAW_FLOW_OPTIONS);
    this.maxCurvature = this.options.connection.curvature;
    this.connectionCreated = this.draftConnectionService.connectionCreated$;
    this.path = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.computed)(() => {
      const sourcePoint = this.draftConnectionService.source();
      const targetPoint = this.draftConnectionService.target();
      switch (this.options.connection.type) {
        case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_1__.DfConnectionType.SmoothStep:
          return (0,_utils_create_smoothstep_path_create_smoothstep_path_util__WEBPACK_IMPORTED_MODULE_3__.createSmoothstepPath)(sourcePoint, targetPoint, this.maxCurvature);
        case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_1__.DfConnectionType.Bezier:
        default:
          {
            const distance = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.calculateDistance)(sourcePoint.point, targetPoint.point);
            const curvature = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.calculateCurvature)(distance, this.maxCurvature);
            return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createBezierPath)(sourcePoint, targetPoint, curvature);
          }
      }
    });
  }
}
_DraftConnectionComponent = DraftConnectionComponent;
_DraftConnectionComponent.ɵfac = function DraftConnectionComponent_Factory(t) {
  return new (t || _DraftConnectionComponent)();
};
_DraftConnectionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _DraftConnectionComponent,
  selectors: [["df-draft-connection"]],
  viewQuery: function DraftConnectionComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.connectionPath = _t.first);
    }
  },
  outputs: {
    connectionCreated: "connectionCreated"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
  decls: 3,
  vars: 1,
  consts: [[1, "connection", "draft-connection"], [1, "main-path"], ["connectionPath", ""]],
  template: function DraftConnectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "svg", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "path", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("d", ctx.path());
    }
  },
  styles: [".connection[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  aspect-ratio: 1 / 1;\n  shape-rendering: auto;\n}\n.connection.optimize-speed[_ngcontent-%COMP%] {\n  shape-rendering: optimizespeed;\n}\n.connection.optimize-speed[_ngcontent-%COMP%]   .main-path[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n}\n.connection[_ngcontent-%COMP%]   .main-path[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: var(--df-connection-stroke-width);\n  stroke: var(--df-connection-color);\n  pointer-events: none;\n}\n.connection[_ngcontent-%COMP%]   .main-path.df-selected[_ngcontent-%COMP%] {\n  stroke: var(--df-connection-color-active);\n}\n.connection[_ngcontent-%COMP%]   .selectable-area[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: var(--df-connection-selectable-area-stroke-width);\n  stroke: transparent;\n  pointer-events: stroke;\n  cursor: pointer;\n  transition: stroke 0.3s;\n}\n.connection[_ngcontent-%COMP%]   .selectable-area[_ngcontent-%COMP%]:hover {\n  stroke: var(--df-connection-selectable-area-color);\n}\n.connection[_ngcontent-%COMP%]   .selectable-area[_ngcontent-%COMP%]:hover    + .main-path[_ngcontent-%COMP%] {\n  stroke: var(--df-connection-color-hover);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3Rpb24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFDSTtFQUNJLDhCQUFBO0FBQ1I7QUFGSTtFQUlRLHdCQUFBO0FBQ1o7QUFiQTtFQWlCUSxVQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0FBRFI7QUFHUTtFQUNJLHlDQUFBO0FBRFo7QUF0QkE7RUE0QlEsVUFBQTtFQUNBLCtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUhSO0FBS1E7RUFDSSxrREFBQTtBQUhaO0FBS1k7RUFDSSx3Q0FBQTtBQUhoQiIsImZpbGUiOiJjb25uZWN0aW9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbm5lY3Rpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICAgIHNoYXBlLXJlbmRlcmluZzogYXV0bztcblxuICAgICYub3B0aW1pemUtc3BlZWQge1xuICAgICAgICBzaGFwZS1yZW5kZXJpbmc6IG9wdGltaXplc3BlZWQ7XG5cbiAgICAgICAgLm1haW4tcGF0aCB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWFpbi1wYXRoIHtcbiAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiB2YXIoLS1kZi1jb25uZWN0aW9uLXN0cm9rZS13aWR0aCk7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvcik7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgICAgICYuZGYtc2VsZWN0ZWQge1xuICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1kZi1jb25uZWN0aW9uLWNvbG9yLWFjdGl2ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VsZWN0YWJsZS1hcmVhIHtcbiAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiB2YXIoLS1kZi1jb25uZWN0aW9uLXNlbGVjdGFibGUtYXJlYS1zdHJva2Utd2lkdGgpO1xuICAgICAgICBzdHJva2U6IHRyYW5zcGFyZW50O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogc3Ryb2tlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IHN0cm9rZSAwLjNzO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1kZi1jb25uZWN0aW9uLXNlbGVjdGFibGUtYXJlYS1jb2xvcik7XG5cbiAgICAgICAgICAgICYgKyAubWFpbi1wYXRoIHtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcigtLWRmLWNvbm5lY3Rpb24tY29sb3ItaG92ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLWRyYXctZmxvdy9zcmMvbGliL2NvbXBvbmVudHMvY29ubmVjdGlvbnMvY29ubmVjdGlvbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUNJO0VBQ0ksOEJBQUE7QUFDUjtBQUZJO0VBSVEsd0JBQUE7QUFDWjtBQWJBO0VBaUJRLFVBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7QUFEUjtBQUdRO0VBQ0kseUNBQUE7QUFEWjtBQXRCQTtFQTRCUSxVQUFBO0VBQ0EsK0RBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBSFI7QUFLUTtFQUNJLGtEQUFBO0FBSFo7QUFLWTtFQUNJLHdDQUFBO0FBSGhCOztBQUVBLGcrREFBZytEIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbm5lY3Rpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICAgIHNoYXBlLXJlbmRlcmluZzogYXV0bztcblxuICAgICYub3B0aW1pemUtc3BlZWQge1xuICAgICAgICBzaGFwZS1yZW5kZXJpbmc6IG9wdGltaXplc3BlZWQ7XG5cbiAgICAgICAgLm1haW4tcGF0aCB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWFpbi1wYXRoIHtcbiAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiB2YXIoLS1kZi1jb25uZWN0aW9uLXN0cm9rZS13aWR0aCk7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvcik7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgICAgICYuZGYtc2VsZWN0ZWQge1xuICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1kZi1jb25uZWN0aW9uLWNvbG9yLWFjdGl2ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VsZWN0YWJsZS1hcmVhIHtcbiAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiB2YXIoLS1kZi1jb25uZWN0aW9uLXNlbGVjdGFibGUtYXJlYS1zdHJva2Utd2lkdGgpO1xuICAgICAgICBzdHJva2U6IHRyYW5zcGFyZW50O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogc3Ryb2tlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IHN0cm9rZSAwLjNzO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1kZi1jb25uZWN0aW9uLXNlbGVjdGFibGUtYXJlYS1jb2xvcik7XG5cbiAgICAgICAgICAgICYgKyAubWFpbi1wYXRoIHtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcigtLWRmLWNvbm5lY3Rpb24tY29sb3ItaG92ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
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
    this.source = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)({
      point: _helpers__WEBPACK_IMPORTED_MODULE_0__.INITIAL_COORDINATES,
      position: _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_1__.DfConnectorPosition.Right
    });
    this.target = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)({
      point: _helpers__WEBPACK_IMPORTED_MODULE_0__.INITIAL_COORDINATES,
      position: _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_1__.DfConnectorPosition.Left
    });
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
    const sourceId = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createConnectorHash)(connector);
    const sourcePoint = this.coordinatesService.getConnectionPoint(sourceId)?.value;
    if (!sourcePoint) {
      return;
    }
    this.source.set(sourcePoint);
    this.target.set({
      ...sourcePoint,
      position: this.getTargetPosition(this.source().position)
    });
  }
  onDragMove(previousEvent, currentEvent) {
    const {
      deltaX,
      deltaY
    } = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.dfDistanceBetweenPoints)(previousEvent, currentEvent);
    const {
      zoom
    } = this.panZoomService.panzoomModel;
    const target = this.target();
    this.target.set({
      position: target.position,
      point: {
        x: target.point.x + deltaX / zoom,
        y: target.point.y + deltaY / zoom
      }
    });
  }
  getTargetPosition(startPosition) {
    switch (startPosition) {
      case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_1__.DfConnectorPosition.Bottom:
        return _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_1__.DfConnectorPosition.Top;
      case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_1__.DfConnectorPosition.Left:
        return _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_1__.DfConnectorPosition.Right;
      case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_1__.DfConnectorPosition.Right:
        return _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_1__.DfConnectorPosition.Left;
      case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_1__.DfConnectorPosition.Top:
        return _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_1__.DfConnectorPosition.Bottom;
      default:
        return null;
    }
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
    this.source.set({
      point: _helpers__WEBPACK_IMPORTED_MODULE_0__.INITIAL_COORDINATES,
      position: _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_1__.DfConnectorPosition.Right
    });
    this.target.set({
      point: _helpers__WEBPACK_IMPORTED_MODULE_0__.INITIAL_COORDINATES,
      position: null
    });
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

/***/ 4880:
/*!***********************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/create-bezier-path.util.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBezierPath: () => (/* binding */ createBezierPath)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ng-draw-flow.interfaces */ 1954);

function createBezierPath(startConnector, endConnector, curvature) {
  const {
    x: startX,
    y: startY
  } = startConnector.point;
  const startConnectorPosition = startConnector.position;
  const {
    x: endX,
    y: endY
  } = endConnector.point;
  const endConnectorPosition = endConnector.position;
  if (startConnectorPosition === _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Right && endConnectorPosition === _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Top) {
    const startConnectorPointX = startX + curvature / 2;
    const startConnectorPointY = startY;
    const endConnectorPointX = endX;
    const endConnectorPointY = endY + (endY - startY) / 7;
    return `M ${startX} ${startY} C ${startConnectorPointX} ${startConnectorPointY}, ${endConnectorPointX} ${endConnectorPointY}, ${endX} ${endY}`;
  }
  if (startConnectorPosition === _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Bottom && endConnectorPosition === _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Left) {
    const startConnectorPointX = startX;
    const startConnectorPointY = startY + curvature / 2;
    const endConnectorPointX = endX - (endX - startX) / 7;
    return `M ${startX} ${startY} C ${startConnectorPointX} ${startConnectorPointY}, ${endConnectorPointX} ${endY}, ${endX} ${endY}`;
  }
  if (startConnectorPosition === _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Bottom && endConnectorPosition === _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Top) {
    return `M ${startX} ${startY} C ${startX} ${startY + curvature}, ${endX} ${endY - curvature} ${endX} ${endY}`;
  }
  if (startConnectorPosition === _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Right && endConnectorPosition === _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Left) {
    return `M ${startX} ${startY} C ${startX + curvature} ${startY}, ${endX - curvature} ${endY}, ${endX} ${endY}`;
  }
  return '';
}

/***/ }),

/***/ 6764:
/*!*****************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/create-smoothstep-path/consts.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MIN_LINE_SIZE: () => (/* binding */ MIN_LINE_SIZE)
/* harmony export */ });
const MIN_LINE_SIZE = 20;

/***/ }),

/***/ 3539:
/*!**************************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/create-smoothstep-path/create-smoothstep-path.util.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSmoothstepPath: () => (/* binding */ createSmoothstepPath)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ng-draw-flow.interfaces */ 1954);
/* harmony import */ var _curvatures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curvatures */ 4609);


function createSmoothstepPath(startConnector, endConnector, radius) {
  const {
    x: startX,
    y: startY
  } = startConnector.point;
  const {
    x: endX,
    y: endY
  } = endConnector.point;
  const startConnectorPosition = startConnector.position;
  const endConnectorPosition = endConnector.position;
  if (startConnectorPosition === _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Right) {
    switch (endConnectorPosition) {
      case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Bottom:
        return (0,_curvatures__WEBPACK_IMPORTED_MODULE_1__.createRightBottomCurve)({
          startX,
          startY,
          endX,
          endY,
          radius
        });
      case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Right:
        return (0,_curvatures__WEBPACK_IMPORTED_MODULE_1__.createRightRightCurve)({
          startX,
          startY,
          endX,
          endY,
          radius
        });
      case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Top:
        return (0,_curvatures__WEBPACK_IMPORTED_MODULE_1__.createRightTopCurve)({
          startX,
          startY,
          endX,
          endY,
          radius
        });
      case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Left:
      default:
        return (0,_curvatures__WEBPACK_IMPORTED_MODULE_1__.createRightLeftCurve)({
          startX,
          startY,
          endX,
          endY,
          radius
        });
    }
  }
  if (startConnectorPosition === _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Left) {
    switch (endConnectorPosition) {
      case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Bottom:
        return (0,_curvatures__WEBPACK_IMPORTED_MODULE_1__.createLeftBottomCurve)({
          startX,
          startY,
          endX,
          endY,
          radius
        });
      case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Left:
        return (0,_curvatures__WEBPACK_IMPORTED_MODULE_1__.createLeftLeftCurve)({
          startX,
          startY,
          endX,
          endY,
          radius
        });
      case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Top:
        return (0,_curvatures__WEBPACK_IMPORTED_MODULE_1__.createLeftTopCurve)({
          startX,
          startY,
          endX,
          endY,
          radius
        });
      case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Right:
      default:
        return (0,_curvatures__WEBPACK_IMPORTED_MODULE_1__.createLeftRightCurve)({
          startX,
          startY,
          endX,
          endY,
          radius
        });
    }
  }
  if (startConnectorPosition === _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Bottom) {
    switch (endConnectorPosition) {
      case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Bottom:
        return (0,_curvatures__WEBPACK_IMPORTED_MODULE_1__.createBottomBottomCurve)({
          startX,
          startY,
          endX,
          endY,
          radius
        });
      case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Left:
        return (0,_curvatures__WEBPACK_IMPORTED_MODULE_1__.createBottomLeftCurve)({
          startX,
          startY,
          endX,
          endY,
          radius
        });
      case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Right:
        return (0,_curvatures__WEBPACK_IMPORTED_MODULE_1__.createBottomRightCurve)({
          startX,
          startY,
          endX,
          endY,
          radius
        });
      case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Top:
      default:
        return (0,_curvatures__WEBPACK_IMPORTED_MODULE_1__.createBottomTopCurve)({
          startX,
          startY,
          endX,
          endY,
          radius
        });
    }
  }
  if (startConnectorPosition === _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Top) {
    switch (endConnectorPosition) {
      case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Left:
        return (0,_curvatures__WEBPACK_IMPORTED_MODULE_1__.createTopLeftCurve)({
          startX,
          startY,
          endX,
          endY,
          radius
        });
      case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Right:
        return (0,_curvatures__WEBPACK_IMPORTED_MODULE_1__.createTopRightCurve)({
          startX,
          startY,
          endX,
          endY,
          radius
        });
      case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Top:
        return (0,_curvatures__WEBPACK_IMPORTED_MODULE_1__.createTopTopCurve)({
          startX,
          startY,
          endX,
          endY,
          radius
        });
      case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Bottom:
      default:
        return (0,_curvatures__WEBPACK_IMPORTED_MODULE_1__.createTopBottomCurve)({
          startX,
          startY,
          endX,
          endY,
          radius
        });
    }
  }
  return '';
}

/***/ }),

/***/ 6251:
/*!***************************************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/create-smoothstep-path/curvatures/bottom-bottom-smoothstep.util.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBottomBottomCurve: () => (/* binding */ createBottomBottomCurve)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ 6764);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ 7063);


function createBottomBottomCurve({
  startX,
  startY,
  endX,
  endY,
  radius
}) {
  const isEndPointOnRightSide = startX < endX;
  const isEndPointOnUpSide = startY > endY;
  const horizontalDifference = startX - endX;
  radius = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(horizontalDifference, radius);
  if (isEndPointOnUpSide) {
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), isEndPointOnRightSide ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX, startY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, !isEndPointOnUpSide) : (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX, startY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, startY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), isEndPointOnRightSide ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX, endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnUpSide) : (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX, endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnRightSide, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
}

/***/ }),

/***/ 3349:
/*!*************************************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/create-smoothstep-path/curvatures/bottom-left-smoothstep.util.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBottomLeftCurve: () => (/* binding */ createBottomLeftCurve)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ 6764);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ 7063);


function createBottomLeftCurve({
  startX,
  startY,
  endX,
  endY,
  radius
}) {
  const isEndPointOnLeftSide = startX > endX;
  const isEndPointOnUpSide = startY > endY;
  const halfY = (startY + endY) / 2;
  if (isEndPointOnLeftSide && isEndPointOnUpSide) {
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX, startY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, !isEndPointOnLeftSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(endX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (!isEndPointOnLeftSide && isEndPointOnUpSide) {
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX, startY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(startX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnLeftSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (!isEndPointOnLeftSide && !isEndPointOnUpSide) {
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX, endY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (isEndPointOnLeftSide && !isEndPointOnUpSide) {
    if (endY <= startY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE + radius * 2) {
      return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX, endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE * 1.5, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE * 1.5, radius, !isEndPointOnLeftSide, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(endX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY, radius, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
    }
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX, startY + Math.min(_consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, halfY), radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY + Math.min(_consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, halfY), radius, !isEndPointOnLeftSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(endX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  return '';
}

/***/ }),

/***/ 6754:
/*!**************************************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/create-smoothstep-path/curvatures/bottom-right-smoothstep.util.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBottomRightCurve: () => (/* binding */ createBottomRightCurve)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ 6764);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ 7063);


function createBottomRightCurve({
  startX,
  startY,
  endX,
  endY,
  radius
}) {
  const isEndPointOnRightSide = startX < endX;
  const isEndPointOnUpSide = startY > endY;
  if (isEndPointOnRightSide && !isEndPointOnUpSide) {
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX, endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnRightSide, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY, radius, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (isEndPointOnRightSide && isEndPointOnUpSide) {
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX, startY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (!isEndPointOnRightSide && isEndPointOnUpSide) {
    if (endX >= startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE) {
      return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, startY, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
    }
  }
  if (!isEndPointOnRightSide && !isEndPointOnUpSide) {
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX, endY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (!isEndPointOnRightSide && isEndPointOnUpSide) {
    let secondCurvatureRadius = radius;
    if (endX + radius <= startX - radius) {
      secondCurvatureRadius = Math.min(radius, Math.abs((endX + radius - (startX - radius)) / 4));
    }
    if (endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE > startX) {
      secondCurvatureRadius = Math.min(radius, Math.abs((endX + radius - (startX - radius)) / 4));
      return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX, startY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, secondCurvatureRadius, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, secondCurvatureRadius, !isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
    }
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX, startY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, secondCurvatureRadius, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, secondCurvatureRadius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  return '';
}

/***/ }),

/***/ 3604:
/*!************************************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/create-smoothstep-path/curvatures/bottom-top-smoothstep.util.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBottomTopCurve: () => (/* binding */ createBottomTopCurve)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ 6764);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ 7063);


function createBottomTopCurve({
  startX,
  startY,
  endX,
  endY,
  radius
}) {
  const halfY = (startY + endY) / 2;
  const isEndPointOnRightSide = startX < endX;
  const isEndPointOnUpSide = startY > endY;
  if (!isEndPointOnUpSide) {
    const horizontalDifference = startX - endX;
    radius = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(horizontalDifference, radius);
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), isEndPointOnRightSide ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX, halfY, radius, isEndPointOnUpSide) : (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX, halfY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, halfY, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (!isEndPointOnRightSide && isEndPointOnUpSide) {
    if (endX >= startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE) {
      return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, startY, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
    }
  }
  if (isEndPointOnRightSide && isEndPointOnUpSide) {
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX, startY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, endY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, !isEndPointOnRightSide, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (!isEndPointOnRightSide && isEndPointOnUpSide) {
    let secondCurvatureRadius = radius;
    if (endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE > startX) {
      secondCurvatureRadius = Math.min(radius, Math.abs((endX + radius - (startX - radius)) / 4));
      return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX, startY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, secondCurvatureRadius, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, secondCurvatureRadius, !isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, endY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnRightSide, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
    }
    if (endX + radius <= startX - radius) {
      secondCurvatureRadius = Math.min(radius, Math.abs((endX + radius - (startX - radius)) / 4));
    }
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX, startY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, secondCurvatureRadius, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, secondCurvatureRadius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, endY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnRightSide, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  return '';
}

/***/ }),

/***/ 4609:
/*!***************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/create-smoothstep-path/curvatures/index.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBottomBottomCurve: () => (/* reexport safe */ _bottom_bottom_smoothstep_util__WEBPACK_IMPORTED_MODULE_4__.createBottomBottomCurve),
/* harmony export */   createBottomLeftCurve: () => (/* reexport safe */ _bottom_left_smoothstep_util__WEBPACK_IMPORTED_MODULE_5__.createBottomLeftCurve),
/* harmony export */   createBottomRightCurve: () => (/* reexport safe */ _bottom_right_smoothstep_util__WEBPACK_IMPORTED_MODULE_6__.createBottomRightCurve),
/* harmony export */   createBottomTopCurve: () => (/* reexport safe */ _bottom_top_smoothstep_util__WEBPACK_IMPORTED_MODULE_7__.createBottomTopCurve),
/* harmony export */   createLeftBottomCurve: () => (/* reexport safe */ _left_bottom_smoothstep_util__WEBPACK_IMPORTED_MODULE_12__.createLeftBottomCurve),
/* harmony export */   createLeftLeftCurve: () => (/* reexport safe */ _left_left_smoothstep_util__WEBPACK_IMPORTED_MODULE_13__.createLeftLeftCurve),
/* harmony export */   createLeftRightCurve: () => (/* reexport safe */ _left_right_smoothstep_util__WEBPACK_IMPORTED_MODULE_14__.createLeftRightCurve),
/* harmony export */   createLeftTopCurve: () => (/* reexport safe */ _left_top_smoothstep_util__WEBPACK_IMPORTED_MODULE_15__.createLeftTopCurve),
/* harmony export */   createRightBottomCurve: () => (/* reexport safe */ _right_bottom_smoothstep_util__WEBPACK_IMPORTED_MODULE_0__.createRightBottomCurve),
/* harmony export */   createRightLeftCurve: () => (/* reexport safe */ _right_left_smoothstep_util__WEBPACK_IMPORTED_MODULE_1__.createRightLeftCurve),
/* harmony export */   createRightRightCurve: () => (/* reexport safe */ _right_right_smoothstep_util__WEBPACK_IMPORTED_MODULE_2__.createRightRightCurve),
/* harmony export */   createRightTopCurve: () => (/* reexport safe */ _right_top_smoothstep_util__WEBPACK_IMPORTED_MODULE_3__.createRightTopCurve),
/* harmony export */   createTopBottomCurve: () => (/* reexport safe */ _top_bottom_smoothstep_util__WEBPACK_IMPORTED_MODULE_8__.createTopBottomCurve),
/* harmony export */   createTopLeftCurve: () => (/* reexport safe */ _top_left_smoothstep_util__WEBPACK_IMPORTED_MODULE_9__.createTopLeftCurve),
/* harmony export */   createTopRightCurve: () => (/* reexport safe */ _top_right_smoothstep_util__WEBPACK_IMPORTED_MODULE_10__.createTopRightCurve),
/* harmony export */   createTopTopCurve: () => (/* reexport safe */ _top_top_smoothstep_util__WEBPACK_IMPORTED_MODULE_11__.createTopTopCurve)
/* harmony export */ });
/* harmony import */ var _right_bottom_smoothstep_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./right-bottom-smoothstep.util */ 160);
/* harmony import */ var _right_left_smoothstep_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./right-left-smoothstep.util */ 4890);
/* harmony import */ var _right_right_smoothstep_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./right-right-smoothstep.util */ 8679);
/* harmony import */ var _right_top_smoothstep_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./right-top-smoothstep.util */ 6630);
/* harmony import */ var _bottom_bottom_smoothstep_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bottom-bottom-smoothstep.util */ 6251);
/* harmony import */ var _bottom_left_smoothstep_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bottom-left-smoothstep.util */ 3349);
/* harmony import */ var _bottom_right_smoothstep_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bottom-right-smoothstep.util */ 6754);
/* harmony import */ var _bottom_top_smoothstep_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bottom-top-smoothstep.util */ 3604);
/* harmony import */ var _top_bottom_smoothstep_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./top-bottom-smoothstep.util */ 1219);
/* harmony import */ var _top_left_smoothstep_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./top-left-smoothstep.util */ 2749);
/* harmony import */ var _top_right_smoothstep_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./top-right-smoothstep.util */ 4554);
/* harmony import */ var _top_top_smoothstep_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./top-top-smoothstep.util */ 5663);
/* harmony import */ var _left_bottom_smoothstep_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./left-bottom-smoothstep.util */ 3597);
/* harmony import */ var _left_left_smoothstep_util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./left-left-smoothstep.util */ 3967);
/* harmony import */ var _left_right_smoothstep_util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./left-right-smoothstep.util */ 7964);
/* harmony import */ var _left_top_smoothstep_util__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./left-top-smoothstep.util */ 1477);
// Right




// Bottom




// Top




// Left





/***/ }),

/***/ 3597:
/*!*************************************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/create-smoothstep-path/curvatures/left-bottom-smoothstep.util.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLeftBottomCurve: () => (/* binding */ createLeftBottomCurve)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ 6764);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ 7063);


function createLeftBottomCurve({
  startX,
  startY,
  endX,
  endY,
  radius
}) {
  const isEndPointOnRightSide = startX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE < endX;
  const isEndPointOnUpSide = startY > endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE - radius;
  const horizontalDifference = startX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE - endX;
  const verticalDifference = startY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE - endY;
  const halfY = (startY + endY) / 2;
  let secondRadius = radius;
  if (!isEndPointOnRightSide && isEndPointOnUpSide) {
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, startY, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (isEndPointOnRightSide && isEndPointOnUpSide) {
    secondRadius = Math.min((0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(horizontalDifference, radius), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(verticalDifference, radius));
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(startX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY, secondRadius, !isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, halfY, secondRadius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, halfY, secondRadius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (!isEndPointOnRightSide && !isEndPointOnUpSide) {
    radius = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(verticalDifference, radius);
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(endX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, !isEndPointOnRightSide, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (isEndPointOnRightSide && !isEndPointOnUpSide) {
    radius = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(horizontalDifference, radius);
    secondRadius = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(verticalDifference, radius);
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(startX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY, secondRadius, !isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, secondRadius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnRightSide, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  return '';
}

/***/ }),

/***/ 3967:
/*!***********************************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/create-smoothstep-path/curvatures/left-left-smoothstep.util.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLeftLeftCurve: () => (/* binding */ createLeftLeftCurve)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ 6764);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ 7063);


function createLeftLeftCurve({
  startX,
  startY,
  endX,
  endY,
  radius
}) {
  const verticalDifference = startY - endY;
  radius = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(verticalDifference, radius);
  const isEndPointOnRightSide = startX < endX;
  const isEndPointOnUpSide = startY > endY;
  if (startX === endX && endY === startY) {
    return '';
  }
  radius = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(verticalDifference, radius);
  if (endX <= startX) {
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE - radius, startY, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(endX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE - radius, endY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(startX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE - radius, startY, radius, !isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE - radius, endY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
}

/***/ }),

/***/ 7964:
/*!************************************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/create-smoothstep-path/curvatures/left-right-smoothstep.util.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLeftRightCurve: () => (/* binding */ createLeftRightCurve)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ 6764);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ 7063);


function createLeftRightCurve({
  startX,
  startY,
  endX,
  endY,
  radius
}) {
  const verticalDifference = startY - endY;
  radius = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(verticalDifference, radius);
  const halfX = (startX + endX) / 2;
  const halfY = (startY + endY) / 2;
  const isEndPointOnLeftSide = startX > endX;
  const isEndPointOnRightSide = startX < endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE;
  const isEndPointOnUpSide = startY > endY;
  if (endX === startX) {
    return '';
  }
  if (isEndPointOnRightSide && isEndPointOnLeftSide && startY < endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE && startY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE > endY) {
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(halfX, startY, radius, !isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(halfX, endY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (!isEndPointOnRightSide) {
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(halfX, startY, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(halfX, endY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(startX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY, radius, !isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, halfY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, halfY, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
}

/***/ }),

/***/ 1477:
/*!**********************************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/create-smoothstep-path/curvatures/left-top-smoothstep.util.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLeftTopCurve: () => (/* binding */ createLeftTopCurve)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ 6764);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ 7063);


function createLeftTopCurve({
  startX,
  startY,
  endX,
  endY,
  radius
}) {
  const isEndPointOnRightSide = startX < endX;
  const isEndPointOnUpSide = startY > endY;
  const horizontalDifference = startX - endX;
  const halfX = (startX + endX) / 2;
  const halfY = (startY + endY) / 2;
  if (!isEndPointOnRightSide && isEndPointOnUpSide) {
    radius = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(horizontalDifference, radius);
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(halfX, startY, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(halfX, endY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, endY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnRightSide, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (!isEndPointOnRightSide && !isEndPointOnUpSide) {
    if (endX <= startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE) {
      return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, startY, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
    }
    const firstLineEndX = startX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE;
    if (startY + radius * 2 >= endY - radius * 2) {
      radius = (endY - startY) / 4;
    }
    const secondCurveRadius = Math.min(radius, firstLineEndX - endX);
    const secondLineEndX = endX + secondCurveRadius / 2;
    const horizontalLineToEndX = `L ${secondLineEndX} ${halfY}`;
    const thirdCurve = `Q ${secondLineEndX - secondCurveRadius / 2} ${halfY} ${endX} ${halfY + secondCurveRadius / 2}`;
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(startX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, halfY, secondCurveRadius, isEndPointOnUpSide), horizontalLineToEndX, thirdCurve, (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (isEndPointOnRightSide && !isEndPointOnUpSide) {
    if (startY + radius * 2 >= endY - radius * 2) {
      radius = (endY - startY) / 4;
    }
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(startX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY, radius, !isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, halfY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, halfY, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (isEndPointOnRightSide && isEndPointOnUpSide) {
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(startX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY, radius, !isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, endY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnRightSide, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  return '';
}

/***/ }),

/***/ 160:
/*!**************************************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/create-smoothstep-path/curvatures/right-bottom-smoothstep.util.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRightBottomCurve: () => (/* binding */ createRightBottomCurve)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ 6764);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ 7063);


function createRightBottomCurve({
  startX,
  startY,
  endX,
  endY,
  radius
}) {
  const isEndPointOnRightSide = startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE < endX;
  const isEndPointOnUpSide = startY > endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE - radius;
  const horizontalDifference = startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE - endX;
  const verticalDifference = startY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE - endY;
  const halfY = (startY + endY) / 2;
  let secondRadius = radius;
  if (isEndPointOnRightSide && isEndPointOnUpSide) {
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, startY, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (!isEndPointOnRightSide && isEndPointOnUpSide) {
    secondRadius = Math.min((0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(horizontalDifference, radius), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(verticalDifference, radius));
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY, secondRadius, !isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, halfY, secondRadius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, halfY, secondRadius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (isEndPointOnRightSide && !isEndPointOnUpSide) {
    radius = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(verticalDifference, radius);
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, !isEndPointOnRightSide, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (!isEndPointOnRightSide && !isEndPointOnUpSide) {
    radius = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(horizontalDifference, radius);
    secondRadius = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(verticalDifference, radius);
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY, secondRadius, !isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, secondRadius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnRightSide, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  return '';
}

/***/ }),

/***/ 4890:
/*!************************************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/create-smoothstep-path/curvatures/right-left-smoothstep.util.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRightLeftCurve: () => (/* binding */ createRightLeftCurve)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ 6764);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ 7063);


function createRightLeftCurve({
  startX,
  startY,
  endX,
  endY,
  radius
}) {
  const verticalDifference = startY - endY;
  radius = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(verticalDifference, radius);
  const halfX = (startX + endX) / 2;
  const halfY = (startY + endY) / 2;
  const isEndPointOnLeftSide = startX > endX;
  const isEndPointOnRightSide = startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE <= endX;
  const isEndPointOnUpSide = startY > endY;
  if (!isEndPointOnRightSide && !isEndPointOnLeftSide && startY < endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE && startY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE > endY) {
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(halfX, startY, radius, !isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(halfX, endY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (isEndPointOnRightSide) {
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(halfX, startY, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(halfX, endY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY, radius, !isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, halfY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, halfY, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(endX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
}

/***/ }),

/***/ 8679:
/*!*************************************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/create-smoothstep-path/curvatures/right-right-smoothstep.util.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRightRightCurve: () => (/* binding */ createRightRightCurve)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ 6764);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ 7063);


function createRightRightCurve({
  startX,
  startY,
  endX,
  endY,
  radius
}) {
  const verticalDifference = startY - endY;
  radius = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(verticalDifference, radius);
  const isEndPointOnRightSide = startX < endX;
  const isEndPointOnUpSide = startY > endY;
  if (startX === endX && endY === startY) {
    return '';
  }
  radius = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(verticalDifference, radius);
  if (endX >= startX) {
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE - radius, startY, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE - radius, endY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE - radius, startY, radius, !isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE - radius, endY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
}

/***/ }),

/***/ 6630:
/*!***********************************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/create-smoothstep-path/curvatures/right-top-smoothstep.util.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRightTopCurve: () => (/* binding */ createRightTopCurve)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ 6764);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ 7063);


function createRightTopCurve({
  startX,
  startY,
  endX,
  endY,
  radius
}) {
  const isEndPointOnRightSide = startX < endX;
  const isEndPointOnUpSide = startY > endY;
  const horizontalDifference = startX - endX;
  const halfX = (startX + endX) / 2;
  const halfY = (startY + endY) / 2;
  if (isEndPointOnRightSide && isEndPointOnUpSide) {
    radius = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(horizontalDifference, radius);
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(halfX, startY, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(halfX, endY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, endY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnRightSide, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (isEndPointOnRightSide && !isEndPointOnUpSide) {
    if (endX >= startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE) {
      return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, startY, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
    }
    const firstLineEndX = startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE;
    if (startY + radius * 2 >= endY - radius * 2) {
      radius = (endY - startY) / 4;
    }
    const secondCurveRadius = Math.min(radius, firstLineEndX - endX);
    const secondLineEndX = endX + secondCurveRadius / 2;
    const horizontalLineToEndX = `L ${secondLineEndX} ${halfY}`;
    const thirdCurve = `Q ${secondLineEndX - secondCurveRadius / 2} ${halfY} ${endX} ${halfY + secondCurveRadius / 2}`;
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, halfY, secondCurveRadius, isEndPointOnUpSide), horizontalLineToEndX, thirdCurve, (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (!isEndPointOnRightSide && !isEndPointOnUpSide) {
    if (startY + radius * 2 >= endY - radius * 2) {
      radius = (endY - startY) / 4;
    }
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY, radius, !isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, halfY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, halfY, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (!isEndPointOnRightSide && isEndPointOnUpSide) {
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY, radius, !isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, endY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnRightSide, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  return '';
}

/***/ }),

/***/ 1219:
/*!************************************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/create-smoothstep-path/curvatures/top-bottom-smoothstep.util.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTopBottomCurve: () => (/* binding */ createTopBottomCurve)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ 6764);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ 7063);


function createTopBottomCurve({
  startX,
  startY,
  endX,
  endY,
  radius
}) {
  const halfY = (startY + endY) / 2;
  const isEndPointOnRightSide = startX < endX;
  const isEndPointOnUpSide = startY > endY;
  if (startY === endY) {
    return '';
  }
  if (isEndPointOnUpSide) {
    const horizontalDifference = startX - endX;
    radius = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(horizontalDifference, radius);
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), isEndPointOnRightSide ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX, halfY, radius, isEndPointOnUpSide) : (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX, halfY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, halfY, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (!isEndPointOnRightSide && !isEndPointOnUpSide) {
    let secondCurvatureRadius = radius;
    if (endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE > startX) {
      secondCurvatureRadius = Math.min(radius, Math.abs((endX + radius - (startX - radius)) / 4));
      return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX, startY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, secondCurvatureRadius, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, secondCurvatureRadius, !isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnRightSide, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
    }
    if (endX + radius <= startX - radius) {
      secondCurvatureRadius = Math.min(radius, Math.abs((endX + radius - (startX - radius)) / 4));
    }
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX, startY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, secondCurvatureRadius, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, secondCurvatureRadius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnRightSide, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (isEndPointOnRightSide && !isEndPointOnUpSide) {
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX, startY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, endY + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, !isEndPointOnRightSide, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  return '';
}

/***/ }),

/***/ 2749:
/*!**********************************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/create-smoothstep-path/curvatures/top-left-smoothstep.util.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTopLeftCurve: () => (/* binding */ createTopLeftCurve)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ 6764);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ 7063);


function createTopLeftCurve({
  startX,
  startY,
  endX,
  endY,
  radius
}) {
  const isEndPointOnRightSide = startX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE + radius < endX;
  const isEndPointOnUpSide = startY > endY;
  const verticalDifference = startY - endY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE;
  if (!isEndPointOnRightSide && isEndPointOnUpSide) {
    const secondRadius = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(verticalDifference, radius);
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX, startY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, secondRadius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(endX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY, secondRadius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (!isEndPointOnUpSide && !isEndPointOnRightSide) {
    const secondRadius = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(verticalDifference, radius);
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX, startY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(Math.min(startX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE), startY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, secondRadius, false, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(Math.min(startX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE), endY, secondRadius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (!isEndPointOnUpSide && isEndPointOnRightSide) {
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX, startY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(startX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, false, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (isEndPointOnRightSide && isEndPointOnUpSide) {
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX, endY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  return '';
}

/***/ }),

/***/ 4554:
/*!***********************************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/create-smoothstep-path/curvatures/top-right-smoothstep.util.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTopRightCurve: () => (/* binding */ createTopRightCurve)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ 6764);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ 7063);


function createTopRightCurve({
  startX,
  startY,
  endX,
  endY,
  radius
}) {
  const isEndPointOnRightSide = startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE + radius < endX;
  const isEndPointOnUpSide = startY > endY;
  const verticalDifference = startY - endY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE;
  if (isEndPointOnRightSide && isEndPointOnUpSide) {
    const secondRadius = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(verticalDifference, radius);
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX, startY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, secondRadius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY, secondRadius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (!isEndPointOnUpSide && isEndPointOnRightSide) {
    const secondRadius = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(verticalDifference, radius);
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX, startY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, secondRadius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(endX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY, secondRadius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (!isEndPointOnUpSide && !isEndPointOnRightSide) {
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX, startY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, startY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, true, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX + _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, endY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  if (!isEndPointOnRightSide && isEndPointOnUpSide) {
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX, endY, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  return '';
}

/***/ }),

/***/ 5663:
/*!*********************************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/create-smoothstep-path/curvatures/top-top-smoothstep.util.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTopTopCurve: () => (/* binding */ createTopTopCurve)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ 6764);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ 7063);


function createTopTopCurve({
  startX,
  startY,
  endX,
  endY,
  radius
}) {
  const isEndPointOnRightSide = startX < endX;
  const isEndPointOnUpSide = startY > endY;
  const horizontalDifference = startX - endX;
  radius = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.adjustRadius)(horizontalDifference, radius);
  if (startY === endY) {
    return '';
  }
  if (isEndPointOnUpSide) {
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), isEndPointOnRightSide ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX, endY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnUpSide) : (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX, endY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, endY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnRightSide, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
  }
  return [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.createStartPoint)(startX, startY), isEndPointOnRightSide ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToRightWithCurve)(startX, startY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, !isEndPointOnUpSide) : (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createVerticalLineToLeftWithCurve)(startX, startY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, !isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createHorizontalLineWithCurve)(endX, startY - _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_LINE_SIZE, radius, isEndPointOnRightSide, isEndPointOnUpSide), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createEndPoint)(endX, endY)].join(' ');
}

/***/ }),

/***/ 7842:
/*!****************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/create-smoothstep-path/index.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSmoothstepPath: () => (/* reexport safe */ _create_smoothstep_path_util__WEBPACK_IMPORTED_MODULE_0__.createSmoothstepPath)
/* harmony export */ });
/* harmony import */ var _create_smoothstep_path_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-smoothstep-path.util */ 3539);


/***/ }),

/***/ 7063:
/*!****************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/create-smoothstep-path/utils.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adjustRadius: () => (/* binding */ adjustRadius),
/* harmony export */   createEndPoint: () => (/* binding */ createEndPoint),
/* harmony export */   createHorizontalLineWithCurve: () => (/* binding */ createHorizontalLineWithCurve),
/* harmony export */   createLine: () => (/* binding */ createLine),
/* harmony export */   createStartPoint: () => (/* binding */ createStartPoint),
/* harmony export */   createVerticalLineToLeftWithCurve: () => (/* binding */ createVerticalLineToLeftWithCurve),
/* harmony export */   createVerticalLineToRightWithCurve: () => (/* binding */ createVerticalLineToRightWithCurve)
/* harmony export */ });
function adjustRadius(difference, radius) {
  if (Math.abs(difference) <= radius * 4) {
    return Math.abs(difference) / 4;
  }
  if (Math.abs(difference) <= radius * 2) {
    return Math.abs(difference) / 2;
  }
  return radius;
}
function createStartPoint(x, y) {
  return `M ${x} ${y}`;
}
function createEndPoint(x, y) {
  return createLine(x, y);
}
function createHorizontalLineWithCurve(x, y, radius, isEndPointOnRightSide, isEndPointOnUpSide) {
  const lineToCurvature = createLine(isEndPointOnRightSide ? x - radius : x + radius, y);
  return `${lineToCurvature} Q ${x} ${y}, ${x} ${isEndPointOnUpSide ? y - radius : y + radius}`;
}
function createVerticalLineToRightWithCurve(x, y, radius, isEndPointOnUpSide = false) {
  const lineToCurvature = createLine(x, isEndPointOnUpSide ? y + radius : y - radius);
  return `${lineToCurvature} Q ${x} ${y}, ${x + radius} ${y}`;
}
function createVerticalLineToLeftWithCurve(x, y, radius, isEndPointOnUpSide = false) {
  const lineToCurvature = createLine(x, isEndPointOnUpSide ? y + radius : y - radius);
  return `${lineToCurvature} Q ${x} ${y}, ${x - radius} ${y}`;
}
function createLine(x, y) {
  return `L ${x} ${y}`;
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
    connectorType,
    position
  } = element.dataset;
  const isValidConnector = nodeId && connectorId && connectorType && (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isConnectorType)(connectorType);
  return isValidConnector ? {
    nodeId,
    connectorId,
    connectorType,
    position
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
/* harmony export */   createBezierPath: () => (/* reexport safe */ _create_bezier_path_util__WEBPACK_IMPORTED_MODULE_2__.createBezierPath),
/* harmony export */   createSmoothstepPath: () => (/* reexport safe */ _create_smoothstep_path__WEBPACK_IMPORTED_MODULE_3__.createSmoothstepPath)
/* harmony export */ });
/* harmony import */ var _calculate_curvature_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculate-curvature.util */ 554);
/* harmony import */ var _calculate_distance_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculate-distance.util */ 9176);
/* harmony import */ var _create_bezier_path_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-bezier-path.util */ 4880);
/* harmony import */ var _create_smoothstep_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-smoothstep-path */ 7842);





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
  get bindPosition() {
    return this.position;
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
  destroy() {
    this.connectionsService.removeConnectionsByConnectorId(this.data.connectorId);
  }
}
_BaseConnector = BaseConnector;
_BaseConnector.ɵfac = function BaseConnector_Factory(t) {
  return new (t || _BaseConnector)();
};
_BaseConnector.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: _BaseConnector,
  hostVars: 4,
  hostBindings: function BaseConnector_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-node-id", ctx.bindNodeId)("data-connector-id", ctx.bindConnectorId)("data-position", ctx.bindPosition)("data-connector-type", ctx.connectorType);
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
    this.position = _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Left;
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
    data: ["connectorData", "data"],
    position: "position"
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
    this.position = _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Right;
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
      connectorType: _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Output,
      position: this.position
    });
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
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pointerdown.stop", function DfOutputComponent_pointerdown_stop_HostBindingHandler($event) {
        return ctx.onDragStart($event);
      });
    }
  },
  inputs: {
    data: ["connectorData", "data"],
    position: "position"
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 1969);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives */ 2256);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ 315);
/* harmony import */ var _ng_draw_flow_configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ng-draw-flow.configs */ 167);
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
    this.drawFlowComponents = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_ng_draw_flow_configs__WEBPACK_IMPORTED_MODULE_2__.DRAW_FLOW_OPTIONS).nodes;
    this.drawFlowElement = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_4__.DRAW_FLOW_ROOT_ELEMENT);
    this.panZoomOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_pan_zoom_pan_zoom_options__WEBPACK_IMPORTED_MODULE_6__.DF_PAN_ZOOM_OPTIONS);
    this.isDynamicComponentCreated = false;
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_8__.DestroyRef);
    this.selected = false;
    this.previousInputs = [];
    this.previousOutputs = [];
    this.invalid = false;
    this.nodeMoved = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.nodeDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.nodeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.connectorDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.cursor = 'initial';
  }
  handleKeyboardEvent(event) {
    if (this.selected && !this.node.startNode) {
      event.preventDefault();
      this.nodeDeleted.emit();
    }
  }
  ngOnChanges(changes) {
    if (changes.invalid && this.innerComponent) {
      this.innerComponent.invalid = changes.invalid.currentValue;
      this.cdr.detectChanges();
    }
  }
  ngAfterViewInit() {
    this.createNodeContentComponent(this.node);
    this.subscribeToConnectorsChanges();
    this.saveInnerNodeSize();
    this.fillValue();
    this.setInitialPosition();
    this.updateConnectorsCoordinates();
    if (this.invalid) {
      this.innerComponent.invalid = true;
      this.cdr.markForCheck();
    }
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
    if (event.stage === _directives__WEBPACK_IMPORTED_MODULE_0__.DfDragDropStage.Move) {
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
    this.applyPositionToStyle(this.nodeElementRef.nativeElement, centeredPosition, true);
    this.recalculateConnectorsPosition(distance);
  }
  onDragEnd() {
    this.cursor = 'initial';
    this.panZoomService.panzoomDisabled = false;
    this.nodeMoved.emit(this.value);
    const centeredPosition = this.getCenteredPosition();
    this.applyPositionToStyle(this.nodeElementRef.nativeElement, centeredPosition, false);
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
      x: (connector.coordinates?.x ?? 0) + distance.deltaX,
      y: (connector.coordinates?.y ?? 0) + distance.deltaY
    };
    const connectorData = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createConnectorHash)({
      nodeId: connector.data.nodeId,
      connectorType,
      connectorId: connector.data.connectorId
    });
    connector.coordinates = newConnectorPosition;
    this.coordinatesService.addConnectionPoint(connectorData, newConnectorPosition, connector.position);
  }
  updateConnectorCoordinates(position, nodeId, connector, connectorType) {
    const calculatedConnectorPosition = this.calculateConnectorPosition(connector.nativeElement, position);
    connector.coordinates = calculatedConnectorPosition;
    const connectorData = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createConnectorHash)({
      nodeId,
      connectorType,
      connectorId: connector.nativeElement.dataset.connectorId
    });
    this.coordinatesService.addConnectionPoint(connectorData, calculatedConnectorPosition, connector.position);
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
  applyPositionToStyle(element, position, dynamic) {
    if (dynamic) {
      element.style.transform = `translate3D(${position.x}px, ${position.y}px, 0)`;
      return;
    }
    element.style.transform = `translate(${position.x}px, ${position.y}px)`;
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
    if (!this.innerComponent) {
      return;
    }
    this.previousOutputs = this.innerComponent?.outputs?.toArray() || [];
    this.previousInputs = this.innerComponent?.inputs?.toArray() || [];
    const connectorsUpdates$ = this.collectConnectorUpdateSources();
    if (connectorsUpdates$.length > 0) {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(...connectorsUpdates$).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_10__.takeUntilDestroyed)(this.destroyRef)).subscribe(() => this.updateConnectorsCoordinates());
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
    this.applyPositionToStyle(this.nodeElementRef.nativeElement, centeredPosition, false);
  }
  /**
   * Collects all sources of connector updates
   */
  collectConnectorUpdateSources() {
    const sources = [];
    this.addContentComponentUpdates(sources);
    this.addInputsUpdates(sources);
    this.addOutputsUpdates(sources);
    return sources;
  }
  /**
   * Adds updates from the node content component
   */
  addContentComponentUpdates(sources) {
    if (this.nodeContentComponentRef?.instance?.connectorsUpdated) {
      sources.push(this.nodeContentComponentRef.instance.connectorsUpdated);
    }
  }
  /**
   * Adds updates from inputs
   */
  addInputsUpdates(sources) {
    if (this.innerComponent?.inputs?.changes) {
      sources.push(this.innerComponent.inputs.changes.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(currentInputs => {
        this.handleRemovedInputs(currentInputs);
      })));
    }
  }
  /**
   * Adds updates from outputs with handling for removed items
   */
  addOutputsUpdates(sources) {
    if (this.innerComponent?.outputs?.changes) {
      sources.push(this.innerComponent.outputs.changes.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(currentOutputs => {
        this.handleRemovedOutputs(currentOutputs);
      })));
    }
  }
  /**
   * Processes removed inputs
   */
  handleRemovedInputs(currentInputs) {
    const currentArray = currentInputs.toArray();
    const removedOutputs = this.previousInputs.filter(prev => !currentArray.some(curr => curr === prev));
    if (removedOutputs.length > 0) {
      removedOutputs.forEach(output => {
        this.connectorDeleted.emit(output.data.connectorId);
      });
    }
    this.previousInputs = currentArray;
  }
  /**
   * Processes removed outputs
   */
  handleRemovedOutputs(currentOutputs) {
    const currentArray = currentOutputs.toArray();
    const removedOutputs = this.previousOutputs.filter(prev => !currentArray.some(curr => curr === prev));
    if (removedOutputs.length > 0) {
      removedOutputs.forEach(output => {
        this.connectorDeleted.emit(output.data.connectorId);
      });
    }
    this.previousOutputs = currentArray;
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
    node: "node",
    invalid: "invalid"
  },
  outputs: {
    nodeMoved: "nodeMoved",
    nodeDeleted: "nodeDeleted",
    nodeSelected: "nodeSelected",
    connectorDeleted: "connectorDeleted"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
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
  dependencies: [_directives__WEBPACK_IMPORTED_MODULE_0__.DragDropDirective, _directives__WEBPACK_IMPORTED_MODULE_0__.SelectableElementDirective],
  styles: [".draw-flow-node[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  touch-action: none;\n}\n.draw-flow-node.df-selected[_ngcontent-%COMP%] {\n  z-index: 3;\n}\n.draw-flow-node[_ngcontent-%COMP%]:hover {\n  will-change: transform;\n}\n.draw-flow-node[_ngcontent-%COMP%]   .drag-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  inline-size: 100%;\n  block-size: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDSTtFQUNJLFVBQUE7QUFDUjtBQUVJO0VBQ0ksc0JBQUE7QUFBUjtBQVpBO0VBZ0JRLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQURSIiwiZmlsZSI6Im5vZGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJhdy1mbG93LW5vZGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAyO1xuICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcblxuICAgICYuZGYtc2VsZWN0ZWQge1xuICAgICAgICB6LWluZGV4OiAzO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgIH1cblxuICAgIC5kcmFnLWhhbmRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgICAgIGJsb2NrLXNpemU6IDEwMCU7XG4gICAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLWRyYXctZmxvdy9zcmMvbGliL2NvbXBvbmVudHMvbm9kZS9ub2RlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0k7RUFDSSxVQUFBO0FBQ1I7QUFFSTtFQUNJLHNCQUFBO0FBQVI7QUFaQTtFQWdCUSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFEUjs7QUFFQSw0MUJBQTQxQiIsInNvdXJjZXNDb250ZW50IjpbIi5kcmF3LWZsb3ctbm9kZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDI7XG4gICAgdG91Y2gtYWN0aW9uOiBub25lO1xuXG4gICAgJi5kZi1zZWxlY3RlZCB7XG4gICAgICAgIHotaW5kZXg6IDM7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgfVxuXG4gICAgLmRyYWctaGFuZGxlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICAgICAgYmxvY2stc2l6ZTogMTAwJTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
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
/* harmony import */ var _ng_web_apis_resize_observer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-web-apis/resize-observer */ 5238);
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
/* harmony export */   DF_PAN_ZOOM_INITIAL_SCALE: () => (/* binding */ DF_PAN_ZOOM_INITIAL_SCALE)
/* harmony export */ });
const DF_PAN_ZOOM_INITIAL_SCALE = 1;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6623);
var _PanZoomService;

class PanZoomService {
  constructor() {
    this.panzoomModel = {
      x: 0,
      y: 0,
      offsetX: 0,
      offsetY: 0,
      zoom: 1
    };
    this.panzoomDisabled = false;
  }
}
_PanZoomService = PanZoomService;
_PanZoomService.ɵfac = function PanZoomService_Factory(t) {
  return new (t || _PanZoomService)();
};
_PanZoomService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
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

/***/ 5407:
/*!***************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/scene/scene.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SceneComponent: () => (/* binding */ SceneComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 9191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 8065);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8015);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1856);
/* harmony import */ var _validators_invalid_nodes_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../validators/invalid-nodes.token */ 1565);
/* harmony import */ var _connections_connection_connection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../connections/connection/connection.component */ 3700);
/* harmony import */ var _connections_connections_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../connections/connections.service */ 9976);
/* harmony import */ var _connections_draft_connection_draft_connection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connections/draft-connection/draft-connection.component */ 1848);
/* harmony import */ var _connections_draft_connection_draft_connection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../connections/draft-connection/draft-connection.service */ 7232);
/* harmony import */ var _node_node_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node/node.component */ 6458);
/* harmony import */ var _pan_zoom_pan_zoom_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pan-zoom/pan-zoom.options */ 5741);
var _SceneComponent;














function SceneComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "df-node", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("connectorDeleted", function SceneComponent_ng_container_1_Template_df_node_connectorDeleted_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.onConnectorDeleted($event));
    })("nodeDeleted", function SceneComponent_ng_container_1_Template_df_node_nodeDeleted_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const node_r3 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.onNodeDeleted(node_r3.key));
    })("nodeMoved", function SceneComponent_ng_container_1_Template_df_node_nodeMoved_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const node_r3 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.onNodeMoved(node_r3.key, $event));
    })("nodeSelected", function SceneComponent_ng_container_1_Template_df_node_nodeSelected_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.onNodeSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("invalid", ctx_r0.$invalidNodes().includes(node_r3.key))("node", node_r3.value);
  }
}
function SceneComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "df-connection", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("connectionDeleted", function SceneComponent_ng_container_3_Template_df_connection_connectionDeleted_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const connection_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.onConnectionDeleted(connection_r9));
    })("connectionSelected", function SceneComponent_ng_container_3_Template_df_connection_connectionSelected_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const connection_r9 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.connectionSelected.emit(connection_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const connection_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("connection", connection_r9);
  }
}
function SceneComponent_df_draft_connection_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "df-draft-connection", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("connectionCreated", function SceneComponent_df_draft_connection_4_Template_df_draft_connection_connectionCreated_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.onConnectionCreated($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
class SceneComponent {
  constructor() {
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef);
    this.connectionsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_connections_connections_service__WEBPACK_IMPORTED_MODULE_2__.ConnectionsService);
    this.draftConnectionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_connections_draft_connection_draft_connection_service__WEBPACK_IMPORTED_MODULE_4__.DraftConnectionService);
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder);
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_7__.DestroyRef);
    this.nodeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.nodeMoved = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.nodeDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.connectionCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.connectionDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.connectionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.form = this.fb.control({});
    this.isConnectionCreating$ = this.draftConnectionService.isConnectionCreating$;
    this.panSize = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_pan_zoom_pan_zoom_options__WEBPACK_IMPORTED_MODULE_6__.DF_PAN_ZOOM_OPTIONS).panSize;
    this.$invalidNodes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_validators_invalid_nodes_token__WEBPACK_IMPORTED_MODULE_0__.INVALID_NODES);
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
  onConnectorDeleted(connectorId) {
    this.connectionsService.removeConnectionsByConnectorId(connectorId);
    this.cdr.detectChanges();
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
    this.emitConnectionDeletedByNodeId(key);
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
    this.connectionsService.connections$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(() => !!this.model), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_10__.takeUntilDestroyed)(this.destroyRef)).subscribe(connections => {
      this.model.connections = connections;
    });
  }
  emitConnectionDeletedByNodeId(nodeId) {
    this.connectionsService.connections$.value.filter(connection => connection.source.nodeId === nodeId || connection.target.nodeId === nodeId)?.forEach(connection => this.connectionDeleted.emit({
      target: connection,
      model: this.model
    }));
  }
}
_SceneComponent = SceneComponent;
_SceneComponent.ɵfac = function SceneComponent_Factory(t) {
  return new (t || _SceneComponent)();
};
_SceneComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: _SceneComponent,
  selectors: [["df-scene"]],
  outputs: {
    nodeSelected: "nodeSelected",
    nodeMoved: "nodeMoved",
    nodeDeleted: "nodeDeleted",
    connectionCreated: "connectionCreated",
    connectionDeleted: "connectionDeleted",
    connectionSelected: "connectionSelected"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.forwardRef)(() => _SceneComponent),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
  decls: 6,
  vars: 14,
  consts: [["data-element", "scene", 1, "scene"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "connectionCreated", 4, "ngIf"], [3, "invalid", "node", "connectorDeleted", "nodeDeleted", "nodeMoved", "nodeSelected"], [3, "connection", "connectionDeleted", "connectionSelected"], [3, "connectionCreated"]],
  template: function SceneComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SceneComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "keyvalue");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, SceneComponent_ng_container_3_Template, 2, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, SceneComponent_df_draft_connection_4_Template, 1, 0, "df-draft-connection", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("height", ctx.panSize, "px")("width", ctx.panSize, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 9, ctx.model == null ? null : ctx.model.nodes, ctx.originalOrder))("ngForTrackBy", ctx.trackByNodeFn);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.model == null ? null : ctx.model.connections)("ngForTrackBy", ctx.trackByConnectionsFn);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 12, ctx.isConnectionCreating$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.KeyValuePipe, _connections_connection_connection_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionComponent, _connections_draft_connection_draft_connection_component__WEBPACK_IMPORTED_MODULE_3__.DraftConnectionComponent, _node_node_component__WEBPACK_IMPORTED_MODULE_5__.NodeComponent],
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

/***/ 7116:
/*!*****************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/directives/errors/errors.directive.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorsDirective: () => (/* binding */ ErrorsDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 8065);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8015);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 870);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4406);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9746);
/* harmony import */ var _helpers_collect_invalid_node_ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/collect-invalid-node-ids */ 1415);
/* harmony import */ var _validators_invalid_nodes_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../validators/invalid-nodes.token */ 1565);
var _ErrorsDirective;







class ErrorsDirective {
  constructor() {
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.DestroyRef);
    this.ngControl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControl);
    this.$invalidNodes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_validators_invalid_nodes_token__WEBPACK_IMPORTED_MODULE_1__.INVALID_NODES);
  }
  ngOnInit() {
    if (!this.ngControl?.control) {
      return;
    }
    const control = this.ngControl.control;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.merge)(control.statusChanges, control.valueChanges).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(() => (0,_helpers_collect_invalid_node_ids__WEBPACK_IMPORTED_MODULE_0__.collectInvalidNodeIds)(control.errors)), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)((a, b) => {
      if (a.size !== b.size) {
        return false;
      }
      for (const id of a) {
        if (!b.has(id)) {
          return false;
        }
      }
      return true;
    }), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_7__.takeUntilDestroyed)(this.destroyRef)).subscribe(idsSet => {
      this.$invalidNodes.set(Array.from(idsSet));
    });
  }
}
_ErrorsDirective = ErrorsDirective;
_ErrorsDirective.ɵfac = function ErrorsDirective_Factory(t) {
  return new (t || _ErrorsDirective)();
};
_ErrorsDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: _ErrorsDirective,
  selectors: [["", "dfErrors", ""]],
  standalone: true
});

/***/ }),

/***/ 3602:
/*!******************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/directives/errors/index.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorsDirective: () => (/* reexport safe */ _errors_directive__WEBPACK_IMPORTED_MODULE_0__.ErrorsDirective)
/* harmony export */ });
/* harmony import */ var _errors_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.directive */ 7116);


/***/ }),

/***/ 2256:
/*!***********************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/directives/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DfDragDropStage: () => (/* reexport safe */ _drag_drop__WEBPACK_IMPORTED_MODULE_0__.DfDragDropStage),
/* harmony export */   DfResizeObserver: () => (/* reexport safe */ _resize_observer__WEBPACK_IMPORTED_MODULE_2__.DfResizeObserver),
/* harmony export */   DragDropDirective: () => (/* reexport safe */ _drag_drop__WEBPACK_IMPORTED_MODULE_0__.DragDropDirective),
/* harmony export */   DragDropService: () => (/* reexport safe */ _drag_drop__WEBPACK_IMPORTED_MODULE_0__.DragDropService),
/* harmony export */   ErrorsDirective: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.ErrorsDirective),
/* harmony export */   SelectableElementDirective: () => (/* reexport safe */ _selectable_element__WEBPACK_IMPORTED_MODULE_3__.SelectableElementDirective)
/* harmony export */ });
/* harmony import */ var _drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-drop */ 4967);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ 3602);
/* harmony import */ var _resize_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resize-observer */ 3470);
/* harmony import */ var _selectable_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectable-element */ 1408);





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
/* harmony import */ var _ng_web_apis_resize_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-web-apis/resize-observer */ 5238);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _services_selection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/selection.service */ 9989);
var _SelectableElementDirective;



class SelectableElementDirective {
  constructor() {
    this.selected = false;
    this.el = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    this.selectionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_selection_service__WEBPACK_IMPORTED_MODULE_0__.SelectionService);
    this.unregisterFn = null;
    this.selectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {
    // Register the element in the service and save the unregistration function.
    this.unregisterFn = this.selectionService.registerElement(this.el.nativeElement, selected => this.handleSelectionChange(selected));
  }
  ngOnDestroy() {
    // Unregister when the directive is destroyed
    if (this.unregisterFn) {
      this.unregisterFn();
      this.unregisterFn = null;
    }
  }
  handleSelectionChange(selected) {
    if (this.selected !== selected) {
      this.selected = selected;
      this.selectionChanged.emit(selected);
      if (selected) {
        this.el.nativeElement.classList.add('df-selected');
      } else {
        this.el.nativeElement.classList.remove('df-selected');
      }
    }
  }
}
_SelectableElementDirective = SelectableElementDirective;
_SelectableElementDirective.ɵfac = function SelectableElementDirective_Factory(t) {
  return new (t || _SelectableElementDirective)();
};
_SelectableElementDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: _SelectableElementDirective,
  selectors: [["", "dfSelectableElement", ""]],
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

/***/ 1415:
/*!***************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/helpers/collect-invalid-node-ids.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   collectInvalidNodeIds: () => (/* binding */ collectInvalidNodeIds)
/* harmony export */ });
function collectInvalidNodeIds(errors) {
  if (!errors) {
    return new Set();
  }
  const allIds = Object.values(errors).map(v => {
    if (Array.isArray(v) && v.every(x => typeof x === 'string')) {
      return v;
    }
    if (v && typeof v === 'object' && Array.isArray(v.nodeIds)) {
      return v.nodeIds;
    }
    return [];
  }).reduce((acc, arr) => acc.concat(arr), []);
  return new Set(allIds);
}

/***/ }),

/***/ 5048:
/*!************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/helpers/connector.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createConnectorHash: () => (/* binding */ createConnectorHash),
/* harmony export */   isConnectorType: () => (/* binding */ isConnectorType)
/* harmony export */ });
function isConnectorType(type) {
  return ['input', 'output'].includes(type);
}
/**
 * Creates a unique string identifier for a connector.
 *
 * The function generates a string that uniquely identifies a connector
 * based on its key properties: node identifier, connector type, and
 * connector identifier. The resulting identifier is used
 * as a key in various data structures (e.g., in connectionPointsMap)
 * for tracking and updating connector positions.
 *
 * @param connector - Connector object containing nodeId, connectorType, and connectorId
 * @returns String identifier in the format "nodeId:value,connectorType:value,connectorId:value"
 */
function createConnectorHash(connector) {
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
/* harmony export */   createConnectorHash: () => (/* reexport safe */ _connector__WEBPACK_IMPORTED_MODULE_1__.createConnectorHash),
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


/**
 * Base abstract class for DrawFlow nodes.
 * Provides common functionality and structure for all node types in the flow diagram.
 */
class DrawFlowBaseNode {
  constructor() {
    this.invalidState = false;
    /**
     * Unique identifier for the node.
     * Can be used to create connector names in format `${nodeId}-${uniqConnectorId}`.
     * @default ''
     */
    this.nodeId = '';
    /**
     * Indicates if this node is a starting node in the flow.
     * Can be used to apply special styling or behavior for start nodes.
     * @default false
     */
    this.startNode = false;
    /**
     * Indicates if this node is an ending node in the flow.
     * Can be used to hide output connectors or apply special styling.
     * @default false
     */
    this.endNode = false;
    /**
     * Selection state of the node.
     * Changes when the node is clicked or deselected.
     * Applied as 'df-selected' CSS class when true.
     * @default false
     */
    this.selected = false;
  }
  /**
   * Validation state of the node.
   * Can be manually set to highlight the node with red color,
   * for example when a form inside the node is invalid.
   * Applied as 'df-invalid' CSS class when true.
   * @default false
   */
  set invalid(value) {
    this.invalidState = value;
  }
  get invalid() {
    return this.invalidState;
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
  hostVars: 4,
  hostBindings: function DrawFlowBaseNode_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("df-invalid", ctx.invalid)("df-selected", ctx.selected);
    }
  },
  inputs: {
    nodeId: "nodeId",
    model: "model",
    startNode: "startNode",
    endNode: "endNode",
    selected: "selected",
    invalid: "invalid"
  },
  standalone: true
});

/***/ }),

/***/ 6607:
/*!*****************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/ng-draw-flow.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgDrawFlowComponent: () => (/* binding */ NgDrawFlowComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 9191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 8065);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8015);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 5536);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 1856);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 3396);
/* harmony import */ var _components_connections_connections_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/connections/connections.service */ 9976);
/* harmony import */ var _components_connections_draft_connection_draft_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connections/draft-connection/draft-connection.service */ 7232);
/* harmony import */ var _components_pan_zoom_pan_zoom_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pan-zoom/pan-zoom.component */ 4408);
/* harmony import */ var _components_pan_zoom_pan_zoom_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pan-zoom/pan-zoom.service */ 6592);
/* harmony import */ var _components_scene_scene_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/scene/scene.component */ 5407);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives */ 2256);
/* harmony import */ var _ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ng-draw-flow.token */ 9497);
/* harmony import */ var _services_coordinates_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/coordinates.service */ 5092);
/* harmony import */ var _services_selection_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/selection.service */ 9989);
/* harmony import */ var _directives_errors_errors_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/errors/errors.directive */ 7116);
var _NgDrawFlowComponent;

















function NgDrawFlowComponent_df_scene_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "df-scene", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("connectionCreated", function NgDrawFlowComponent_df_scene_2_Template_df_scene_connectionCreated_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.onConnectionCreated($event));
    })("connectionDeleted", function NgDrawFlowComponent_df_scene_2_Template_df_scene_connectionDeleted_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r3.onConnectionDeleted($event));
    })("connectionSelected", function NgDrawFlowComponent_df_scene_2_Template_df_scene_connectionSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r4.connectionSelected.emit($event));
    })("nodeDeleted", function NgDrawFlowComponent_df_scene_2_Template_df_scene_nodeDeleted_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r5.onNodeDeleted($event));
    })("nodeMoved", function NgDrawFlowComponent_df_scene_2_Template_df_scene_nodeMoved_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r6.onNodeMoved($event));
    })("nodeSelected", function NgDrawFlowComponent_df_scene_2_Template_df_scene_nodeSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r7.nodeSelected.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx_r0.form);
  }
}
class NgDrawFlowComponent {
  constructor() {
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_10__.DestroyRef);
    this.scale = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    this.connectionCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    this.connectionDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    this.connectionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    this.nodeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    this.nodeMoved = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    this.nodeDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl({
      nodes: new Map(),
      connections: []
    });
    this.rootReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject(false);
    this.onChange = _ => {};
    // @ts-ignore
    this.onTouched = () => {};
  }
  ngOnInit() {
    this.watchFormChanges();
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
  onConnectionCreated(event) {
    this.connectionCreated.emit(event);
    this.form.setValue(event.model);
  }
  onConnectionDeleted(event) {
    this.connectionDeleted.emit(event);
    this.form.setValue(event.model);
  }
  onNodeDeleted(event) {
    this.nodeDeleted.emit(event);
    this.form.setValue(event.model);
  }
  onNodeMoved(event) {
    this.nodeMoved.emit(event);
    this.form.setValue(event.model);
  }
  onResize(event) {
    const {
      width,
      height
    } = event[0].contentRect;
    this.rootReady$.next(width && height);
  }
  watchFormChanges() {
    this.form.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.debounceTime)(10), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_15__.takeUntilDestroyed)(this.destroyRef)).subscribe(value => {
      this.onChange(value);
    });
  }
}
_NgDrawFlowComponent = NgDrawFlowComponent;
_NgDrawFlowComponent.ɵfac = function NgDrawFlowComponent_Factory(t) {
  return new (t || _NgDrawFlowComponent)();
};
_NgDrawFlowComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: _NgDrawFlowComponent,
  selectors: [["ng-draw-flow"]],
  viewQuery: function NgDrawFlowComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_components_pan_zoom_pan_zoom_component__WEBPACK_IMPORTED_MODULE_2__.PanZoomComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.panzoom = _t.first);
    }
  },
  outputs: {
    scale: "scale",
    connectionCreated: "connectionCreated",
    connectionDeleted: "connectionDeleted",
    connectionSelected: "connectionSelected",
    nodeSelected: "nodeSelected",
    nodeMoved: "nodeMoved",
    nodeDeleted: "nodeDeleted"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([_components_pan_zoom_pan_zoom_service__WEBPACK_IMPORTED_MODULE_3__.PanZoomService, _components_connections_connections_service__WEBPACK_IMPORTED_MODULE_0__.ConnectionsService, _services_coordinates_service__WEBPACK_IMPORTED_MODULE_7__.CoordinatesService, _components_connections_draft_connection_draft_connection_service__WEBPACK_IMPORTED_MODULE_1__.DraftConnectionService, _services_selection_service__WEBPACK_IMPORTED_MODULE_8__.SelectionService, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.forwardRef)(() => _NgDrawFlowComponent),
    multi: true
  }, {
    provide: _ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_6__.DRAW_FLOW_ROOT_ELEMENT,
    useFactory: ({
      nativeElement
    }) => nativeElement,
    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef]
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵHostDirectivesFeature"]([_directives_errors_errors_directive__WEBPACK_IMPORTED_MODULE_9__.ErrorsDirective])],
  decls: 4,
  vars: 3,
  consts: [[1, "drawflow", 3, "dfResizeObserver"], [3, "scale"], [3, "formControl", "connectionCreated", "connectionDeleted", "connectionSelected", "nodeDeleted", "nodeMoved", "nodeSelected", 4, "ngIf"], [3, "formControl", "connectionCreated", "connectionDeleted", "connectionSelected", "nodeDeleted", "nodeMoved", "nodeSelected"]],
  template: function NgDrawFlowComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("dfResizeObserver", function NgDrawFlowComponent_Template_div_dfResizeObserver_0_listener($event) {
        return ctx.onResize($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "df-pan-zoom", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("scale", function NgDrawFlowComponent_Template_df_pan_zoom_scale_1_listener($event) {
        return ctx.scale.emit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, NgDrawFlowComponent_df_scene_2_Template, 1, 1, "df-scene", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, ctx.rootReady$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _directives__WEBPACK_IMPORTED_MODULE_5__.DfResizeObserver, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _components_pan_zoom_pan_zoom_component__WEBPACK_IMPORTED_MODULE_2__.PanZoomComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlDirective, _components_scene_scene_component__WEBPACK_IMPORTED_MODULE_4__.SceneComponent],
  styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: block;\n  block-size: 100%;\n  inline-size: 100%;\n  overflow: hidden;\n  --df-connection-color: #428bf9;\n  --df-connection-color-hover: #336fee;\n  --df-connection-color-active: #156ed4;\n  --df-connection-stroke-width: 2px;\n  --df-connection-selectable-area-color: rgba(66, 139, 249, 0.5);\n  --df-connection-selectable-area-stroke-width: 4px;\n  --df-connector-color: #156ed4;\n  --df-connector-color-hover: #428bf9;\n}\n.drawflow[_ngcontent-%COMP%] {\n  inline-size: 100%;\n  block-size: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5nLWRyYXctZmxvdy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUVBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsOERBQUE7RUFDQSxpREFBQTtFQUNBLDZCQUFBO0VBQ0EsbUNBQUE7QUFBSjtBQUdBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQURKIiwiZmlsZSI6Im5nLWRyYXctZmxvdy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmxvY2stc2l6ZTogMTAwJTtcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLS1kZi1jb25uZWN0aW9uLWNvbG9yOiAjNDI4YmY5O1xuICAgIC0tZGYtY29ubmVjdGlvbi1jb2xvci1ob3ZlcjogIzMzNmZlZTtcbiAgICAtLWRmLWNvbm5lY3Rpb24tY29sb3ItYWN0aXZlOiAjMTU2ZWQ0O1xuICAgIC0tZGYtY29ubmVjdGlvbi1zdHJva2Utd2lkdGg6IDJweDtcbiAgICAtLWRmLWNvbm5lY3Rpb24tc2VsZWN0YWJsZS1hcmVhLWNvbG9yOiByZ2JhKCM0MjhiZjksIDAuNSk7XG4gICAgLS1kZi1jb25uZWN0aW9uLXNlbGVjdGFibGUtYXJlYS1zdHJva2Utd2lkdGg6IDRweDtcbiAgICAtLWRmLWNvbm5lY3Rvci1jb2xvcjogIzE1NmVkNDtcbiAgICAtLWRmLWNvbm5lY3Rvci1jb2xvci1ob3ZlcjogIzQyOGJmOTtcbn1cblxuLmRyYXdmbG93IHtcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICBibG9jay1zaXplOiAxMDAlO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLWRyYXctZmxvdy9zcmMvbGliL25nLWRyYXctZmxvdy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUVBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsOERBQUE7RUFDQSxpREFBQTtFQUNBLDZCQUFBO0VBQ0EsbUNBQUE7QUFBSjtBQUdBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQURKOztBQUVBLHdzQ0FBd3NDIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBibG9jay1zaXplOiAxMDAlO1xuICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAtLWRmLWNvbm5lY3Rpb24tY29sb3I6ICM0MjhiZjk7XG4gICAgLS1kZi1jb25uZWN0aW9uLWNvbG9yLWhvdmVyOiAjMzM2ZmVlO1xuICAgIC0tZGYtY29ubmVjdGlvbi1jb2xvci1hY3RpdmU6ICMxNTZlZDQ7XG4gICAgLS1kZi1jb25uZWN0aW9uLXN0cm9rZS13aWR0aDogMnB4O1xuICAgIC0tZGYtY29ubmVjdGlvbi1zZWxlY3RhYmxlLWFyZWEtY29sb3I6IHJnYmEoIzQyOGJmOSwgMC41KTtcbiAgICAtLWRmLWNvbm5lY3Rpb24tc2VsZWN0YWJsZS1hcmVhLXN0cm9rZS13aWR0aDogNHB4O1xuICAgIC0tZGYtY29ubmVjdG9yLWNvbG9yOiAjMTU2ZWQ0O1xuICAgIC0tZGYtY29ubmVjdG9yLWNvbG9yLWhvdmVyOiAjNDI4YmY5O1xufVxuXG4uZHJhd2Zsb3cge1xuICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgIGJsb2NrLXNpemU6IDEwMCU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 167:
/*!***************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/ng-draw-flow.configs.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DRAW_FLOW_DEFAULT_OPTIONS: () => (/* binding */ DRAW_FLOW_DEFAULT_OPTIONS),
/* harmony export */   DRAW_FLOW_OPTIONS: () => (/* binding */ DRAW_FLOW_OPTIONS),
/* harmony export */   provideNgDrawFlowConfigs: () => (/* binding */ provideNgDrawFlowConfigs)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng-draw-flow.interfaces */ 1954);


const DRAW_FLOW_DEFAULT_OPTIONS = {
  connection: {
    arrowhead: 'none',
    type: _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectionType.Bezier,
    curvature: 50
  },
  nodes: {}
};
const DRAW_FLOW_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('[DRAW_FLOW_OPTIONS]: Options', {
  factory: () => DRAW_FLOW_DEFAULT_OPTIONS
});
function provideNgDrawFlowConfigs(options) {
  return {
    provide: DRAW_FLOW_OPTIONS,
    useFactory: () => ({
      ...DRAW_FLOW_DEFAULT_OPTIONS,
      ...options
    })
  };
}

/***/ }),

/***/ 1954:
/*!******************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/ng-draw-flow.interfaces.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DfConnectionPoint: () => (/* binding */ DfConnectionPoint),
/* harmony export */   DfConnectionType: () => (/* binding */ DfConnectionType),
/* harmony export */   DfConnectorPosition: () => (/* binding */ DfConnectorPosition)
/* harmony export */ });
var DfConnectionType;
(function (DfConnectionType) {
  DfConnectionType["Bezier"] = "bezier";
  DfConnectionType["SmoothStep"] = "smoothStep";
  DfConnectionType["Step"] = "step";
})(DfConnectionType || (DfConnectionType = {}));
var DfConnectorPosition;
(function (DfConnectorPosition) {
  DfConnectorPosition["Top"] = "top";
  DfConnectorPosition["Right"] = "right";
  DfConnectorPosition["Bottom"] = "bottom";
  DfConnectorPosition["Left"] = "left";
})(DfConnectorPosition || (DfConnectorPosition = {}));
var DfConnectionPoint;
(function (DfConnectionPoint) {
  DfConnectionPoint["Input"] = "input";
  DfConnectionPoint["Output"] = "output";
})(DfConnectionPoint || (DfConnectionPoint = {}));

/***/ }),

/***/ 9497:
/*!*************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/ng-draw-flow.token.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DRAW_FLOW_ROOT_ELEMENT: () => (/* binding */ DRAW_FLOW_ROOT_ELEMENT)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6623);

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
  getConnectionPoint(connectorHash) {
    return this.connectionPointsMap[connectorHash] || new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
  }
  addConnectionPoint(connectorHash, point, position) {
    if (this.connectionPointsMap[connectorHash]) {
      this.connectionPointsMap[connectorHash].next({
        point,
        position
      });
    } else {
      this.connectionPointsMap[connectorHash] = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({
        point,
        position
      });
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

/***/ }),

/***/ 9989:
/*!*********************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/services/selection.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectionService: () => (/* binding */ SelectionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6623);
var _SelectionService;


class SelectionService {
  constructor() {
    this.ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    this.selectedElements = new Set();
    this.registeredElements = new Map();
    this.isDragging = false;
    this.clickedOnScene = false;
    this.startX = null;
    this.startY = null;
    this.dragThreshold = 5;
    this.currentTarget = null;
    // Use NgZone.runOutsideAngular to prevent change detection
    // from running on every mouse event
    this.ngZone.runOutsideAngular(() => {
      document.addEventListener('mousedown', this.onMouseDown.bind(this));
      document.addEventListener('mousemove', this.onMouseMove.bind(this));
      document.addEventListener('mouseup', this.onMouseUp.bind(this));
    });
  }
  ngOnDestroy() {
    document.removeEventListener('mousedown', this.onMouseDown.bind(this));
    document.removeEventListener('mousemove', this.onMouseMove.bind(this));
    document.removeEventListener('mouseup', this.onMouseUp.bind(this));
    this.registeredElements.clear();
    this.selectedElements.clear();
  }
  /**
   * Registers an element for selection tracking
   * @param element HTML element to track
   * @param callback Callback function triggered when selection changes
   * @returns Function to unregister
   */
  registerElement(element, callback) {
    this.registeredElements.set(element, {
      element,
      callback
    });
    // Return a function to unregister
    return () => {
      this.unregisterElement(element);
    };
  }
  /**
   * Unregisters an element
   * @param element HTML element to unregister
   */
  unregisterElement(element) {
    if (this.selectedElements.has(element)) {
      this.selectedElements.delete(element);
    }
    this.registeredElements.delete(element);
  }
  /**
   * Selects an element
   * @param element HTML element to select
   * @param exclusive If true, deselects all other elements
   */
  selectElement(element, exclusive = true) {
    if (exclusive) {
      this.clearSelection(element);
    }
    if (!this.selectedElements.has(element)) {
      this.selectedElements.add(element);
      const item = this.registeredElements.get(element);
      if (item) {
        // Run callback inside Angular zone for change detection
        this.ngZone.run(() => {
          item.callback(true);
        });
      }
    }
  }
  /**
   * Deselects an element
   * @param element HTML element to deselect
   */
  deselectElement(element) {
    if (this.selectedElements.has(element)) {
      this.selectedElements.delete(element);
      const item = this.registeredElements.get(element);
      if (item) {
        this.ngZone.run(() => {
          item.callback(false);
        });
      }
    }
  }
  /**
   * Clears selection of all elements except the excluded one
   * @param exceptElement Element to exclude from clearing
   */
  clearSelection(exceptElement) {
    this.selectedElements.forEach(element => {
      if (element !== exceptElement) {
        this.deselectElement(element);
      }
    });
  }
  /**
   * Checks if an element is selected
   * @param element HTML element to check
   * @returns true if the element is selected
   */
  isSelected(element) {
    return this.selectedElements.has(element);
  }
  /**
   * Gets all selected elements
   * @returns Array of selected HTML elements
   */
  getSelectedElements() {
    return Array.from(this.selectedElements);
  }
  /**
   * Mouse down event handler
   */
  onMouseDown(event) {
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.isDragging = false;
    this.currentTarget = event.target;
    // Find the nearest registered element
    const targetElement = this.findRegisteredParent(this.currentTarget);
    // If clicked on a registered element
    if (targetElement) {
      // If Ctrl or Shift key is pressed, add to selection
      const multiSelect = event.ctrlKey || event.shiftKey;
      this.selectElement(targetElement, !multiSelect);
    }
    // If clicked on the scene and it's not the start of dragging
    else if (this.currentTarget.dataset.element === 'scene') {
      // Remember that the click was on the scene
      this.clickedOnScene = true;
    }
  }
  /**
   * Mouse move event handler
   */
  onMouseMove(event) {
    if (!this.startX || !this.startY) {
      return;
    }
    const dx = event.clientX - this.startX;
    const dy = event.clientY - this.startY;
    // Check if the drag threshold has been exceeded
    if (!this.isDragging && Math.sqrt(dx * dx + dy * dy) > this.dragThreshold) {
      this.isDragging = true;
    }
  }
  /**
   * Mouse up event handler
   */
  onMouseUp(event) {
    const target = event.target;
    // If it was dragging and releasing on the scene,
    // just reset the state without changing the selection
    if (this.isDragging) {
      this.reset();
      return;
    }
    // If it was a click (not dragging)
    const targetElement = this.findRegisteredParent(target);
    // If clicked on a registered element
    if (targetElement) {
      // If Ctrl or Shift key is pressed, toggle selection
      if (event.ctrlKey || event.shiftKey) {
        if (this.isSelected(targetElement)) {
          this.deselectElement(targetElement);
        } else {
          this.selectElement(targetElement, false);
        }
      }
    }
    // If clicked on the scene (not while dragging)
    else if (this.clickedOnScene && !this.isDragging) {
      // Clear selection only when clicking on the scene, not when dragging
      this.clearSelection();
    }
    this.reset();
  }
  /**
   * Finds the closest parent element that is registered in the service
   */
  findRegisteredParent(element) {
    let current = element;
    while (current) {
      if (this.registeredElements.has(current)) {
        return current;
      }
      current = current.parentElement;
    }
    return null;
  }
  /**
   * Resets the drag state
   */
  reset() {
    this.startX = null;
    this.startY = null;
    this.isDragging = false;
    this.currentTarget = null;
    this.clickedOnScene = false; // Reset the scene click flag
  }
}
_SelectionService = SelectionService;
_SelectionService.ɵfac = function SelectionService_Factory(t) {
  return new (t || _SelectionService)();
};
_SelectionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _SelectionService,
  factory: _SelectionService.ɵfac
});

/***/ }),

/***/ 802:
/*!***********************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/validators/cycle-detection/cycle-detection.validator.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dfCycleDetectionValidator: () => (/* binding */ dfCycleDetectionValidator)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ 815);

/**
 * Validator for checking cycles in a graph
 *
 * ### Validation error shape
 * ```ts
 * {
 *   hasCycle: true,
 *   cycleNodes: DfId[] // array of nodeIds that form a cycle
 * }
 * ```
 * @returns ValidatorFn that returns an error if a cycle is detected in the graph
 */
function dfCycleDetectionValidator() {
  // Cache for storing previous state
  let previousConnectionsHash = null;
  let previousResult = null;
  return control => {
    const model = control.value;
    if (!model?.connections || model.connections.length === 0) {
      previousConnectionsHash = null;
      previousResult = null;
      return null; // No connections - no cycles
    }
    // Create a hash of current connections for comparison
    const currentConnectionsHash = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateConnectionsHash)(model.connections);
    // If the hash hasn't changed, return the previous result
    if (previousConnectionsHash === currentConnectionsHash && previousResult !== undefined) {
      return previousResult;
    }
    // Save the new hash
    previousConnectionsHash = currentConnectionsHash;
    // Build the adjacency map
    const {
      adjacencyMap,
      nodeIds
    } = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.buildAdjacencyMap)(model.connections);
    // Check for cycles and get the cycle nodes if any
    const cycleNodes = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.findCycleNodes)(adjacencyMap, nodeIds);
    if (cycleNodes.length > 0) {
      previousResult = {
        hasCycle: true,
        cycleNodes
      };
      return previousResult;
    }
    previousResult = null;
    return null; // No cycles detected
  };
}

/***/ }),

/***/ 815:
/*!*****************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/validators/cycle-detection/helpers.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildAdjacencyMap: () => (/* binding */ buildAdjacencyMap),
/* harmony export */   findCycleNodes: () => (/* binding */ findCycleNodes),
/* harmony export */   generateConnectionsHash: () => (/* binding */ generateConnectionsHash)
/* harmony export */ });
/**
 * Builds an adjacency map from a list of connections
 * @param connections List of graph connections
 * @returns Object with adjacency map and array of unique node IDs
 */
function buildAdjacencyMap(connections) {
  const adjacencyMap = new Map();
  const nodeIdsSet = new Set();
  connections.forEach(connection => {
    const sourceNodeId = connection.source.nodeId;
    const targetNodeId = connection.target.nodeId;
    nodeIdsSet.add(sourceNodeId);
    nodeIdsSet.add(targetNodeId);
    if (!adjacencyMap.has(sourceNodeId)) {
      adjacencyMap.set(sourceNodeId, new Set());
    }
    adjacencyMap.get(sourceNodeId).add(targetNodeId);
  });
  return {
    adjacencyMap,
    nodeIds: Array.from(nodeIdsSet)
  };
}
/**
 * Iterative function to find cycle nodes
 * @param adjacencyMap Adjacency map
 * @param nodeIds Array of node IDs
 * @returns Array of node IDs that form a cycle, or empty array if no cycle is found
 */
function findCycleNodes(adjacencyMap, nodeIds) {
  // Node states: 0 - not visited, 1 - in current path, 2 - fully processed
  const nodeStates = new Map();
  // Initialize all nodes as not visited
  nodeIds.forEach(nodeId => {
    nodeStates.set(nodeId, 0);
  });
  // Check each node as a possible starting point
  for (const nodeId of nodeIds) {
    if (nodeStates.get(nodeId) !== 0) {
      continue;
    }
    const cycleResult = checkNodeForCycle(nodeId, adjacencyMap, nodeStates);
    if (cycleResult.length > 0) {
      return cycleResult;
    }
  }
  return []; // No cycle found
}
/**
 * Helper function to check a specific node for cycles
 * @param startNodeId Starting node ID
 * @param adjacencyMap Adjacency map
 * @param nodeStates Map of node states
 * @returns Array of node IDs that form a cycle, or empty array if no cycle is found
 */
function checkNodeForCycle(startNodeId, adjacencyMap, nodeStates) {
  // Use a stack for iterative DFS and a path array to track the current path
  const stack = [{
    id: startNodeId,
    processed: false
  }];
  const path = [];
  while (stack.length > 0) {
    const {
      id,
      processed
    } = stack[stack.length - 1];
    if (processed) {
      // Node is fully processed
      nodeStates.set(id, 2);
      stack.pop();
      // Remove the node from the current path when backtracking
      if (path.length > 0 && path[path.length - 1] === id) {
        path.pop();
      }
      continue;
    }
    // Mark the node as being in the current path
    nodeStates.set(id, 1);
    stack[stack.length - 1].processed = true;
    path.push(id);
    // Process neighbors
    const cycleFound = processNeighbors(id, adjacencyMap, nodeStates, path, stack);
    if (cycleFound.length > 0) {
      return cycleFound;
    }
  }
  return []; // No cycle found from this starting node
}
/**
 * Process all neighbors of a node
 * @param nodeId Current node ID
 * @param adjacencyMap Adjacency map
 * @param nodeStates Map of node states
 * @param path Current path
 * @param stack DFS stack
 * @returns Array of node IDs that form a cycle, or empty array if no cycle is found
 */
function processNeighbors(nodeId, adjacencyMap, nodeStates, path, stack) {
  const neighbors = adjacencyMap.get(nodeId) || new Set();
  for (const neighbor of neighbors) {
    const neighborState = nodeStates.get(neighbor);
    if (neighborState === 1) {
      // Cycle found - extract the cycle nodes from the path
      const cycleStartIndex = path.indexOf(neighbor);
      return path.slice(cycleStartIndex).concat([neighbor]);
    }
    if (neighborState === 0) {
      // Add unvisited node to the stack
      stack.push({
        id: neighbor,
        processed: false
      });
    }
  }
  return []; // No cycle found among neighbors
}
/**
 * Generates a hash for an array of connections
 * @param connections Array of connections
 * @returns String hash representing the current state of connections
 */
function generateConnectionsHash(connections) {
  let hash = 0;
  for (const conn of connections) {
    // Create a string representation of the connection
    const connStr = `${conn.source.nodeId}:${conn.source.connectorId}->${conn.target.nodeId}:${conn.target.connectorId}`;
    // Calculate the string hash (simple hash function)
    for (let i = 0; i < connStr.length; i++) {
      const char = connStr.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash &= hash; // Convert to 32-bit integer
    }
  }
  return hash.toString(36); // Convert to base-36 string for compactness
}

/***/ }),

/***/ 5657:
/*!***********************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/validators/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dfCycleDetectionValidator: () => (/* reexport safe */ _cycle_detection_cycle_detection_validator__WEBPACK_IMPORTED_MODULE_0__.dfCycleDetectionValidator),
/* harmony export */   dfIsolatedNodesValidator: () => (/* reexport safe */ _isolated_nodes_isolated_nodes_validator__WEBPACK_IMPORTED_MODULE_1__.dfIsolatedNodesValidator)
/* harmony export */ });
/* harmony import */ var _cycle_detection_cycle_detection_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cycle-detection/cycle-detection.validator */ 802);
/* harmony import */ var _isolated_nodes_isolated_nodes_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isolated-nodes/isolated-nodes.validator */ 7826);



/***/ }),

/***/ 1565:
/*!*************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/validators/invalid-nodes.token.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INVALID_NODES: () => (/* binding */ INVALID_NODES)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6623);

const INVALID_NODES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('[INVALID_NODES]: Invalid nodes signal', {
  factory: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([])
});

/***/ }),

/***/ 7826:
/*!*********************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/validators/isolated-nodes/isolated-nodes.validator.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dfIsolatedNodesValidator: () => (/* binding */ dfIsolatedNodesValidator)
/* harmony export */ });
/**
 * Validator that checks for *isolated* (disconnected) nodes — nodes that do **not** appear in any connection.
 *
 * ### Validation error shape
 * ```ts
 * {
 *   hasIsolatedNodes: boolean;
 *   isolatedNodes: DfId[] // array of nodeIds without connections
 * }
 * ```
 * When there are **no** isolated nodes, it returns `null` so the control is valid.
 */
function dfIsolatedNodesValidator() {
  return control => {
    const model = control.value;
    if (!model?.nodes?.size) {
      return null; // nothing to validate
    }
    // Collect all node ids that participate in at least one connection
    const connectedIds = new Set();
    if (model.connections?.length) {
      model.connections.forEach(connection => {
        connectedIds.add(connection.source.nodeId);
        connectedIds.add(connection.target.nodeId);
      });
    }
    // Every node absent in connectedIds is isolated
    const isolatedNodes = [];
    Array.from(model.nodes.keys()).forEach(nodeId => {
      if (!connectedIds.has(nodeId)) {
        isolatedNodes.push(nodeId);
      }
    });
    if (isolatedNodes.length) {
      return {
        hasIsolatedNodes: true,
        isolatedNodes
      };
    }
    // All nodes have at least one connection
    return null;
  };
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(9550)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map