"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["main"],{

/***/ 14699
/*!************************************************!*\
  !*** ./projects/demo/src/app/app.component.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 94841);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core */ 44246);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
var _AppComponent;



class AppComponent {}
_AppComponent = AppComponent;
_AppComponent.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
};
_AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _AppComponent,
  selectors: [["my-app"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tui-root");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "tui-doc-main");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_0__.TuiDocMain, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TuiRoot],
  encapsulation: 2,
  changeDetection: 0
});

/***/ },

/***/ 50332
/*!*********************************************!*\
  !*** ./projects/demo/src/app/app.config.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 79923);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ 91244);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 76380);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ 89331);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ 15592);
/* harmony import */ var _app_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.providers */ 93734);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routes */ 22516);








const appConfig = {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_3__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_7__.appRoutes, (0,_angular_router__WEBPACK_IMPORTED_MODULE_3__.withEnabledBlockingInitialNavigation)(), (0,_angular_router__WEBPACK_IMPORTED_MODULE_3__.withInMemoryScrolling)({
    scrollPositionRestoration: 'enabled'
  })), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.withFetch)()), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.importProvidersFrom)(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__.BrowserAnimationsModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_5__.MarkdownModule.forRoot({
    loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient,
    sanitize: _angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.NONE
  })), ..._app_providers__WEBPACK_IMPORTED_MODULE_6__.APP_PROVIDERS, ...(0,_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__.provideTaiga)()]
};

/***/ },

/***/ 93734
/*!************************************************!*\
  !*** ./projects/demo/src/app/app.providers.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_PROVIDERS: () => (/* binding */ APP_PROVIDERS)
/* harmony export */ });
/* harmony import */ var _home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 56207);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 43539);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 54171);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-highlightjs */ 45240);
/* harmony import */ var _pages_pages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/pages */ 18986);
/* harmony import */ var _modules_logo_logo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/logo/logo.component */ 89289);
/* harmony import */ var _modules_nodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/nodes */ 85989);









const APP_PROVIDERS = [{
  provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__.LocationStrategy,
  useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__.PathLocationStrategy
}, {
  provide: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__.TUI_DOC_TITLE,
  useValue: 'NgDrawFlow | '
}, {
  provide: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__.TUI_DOC_LOGO,
  useValue: _modules_logo_logo_component__WEBPACK_IMPORTED_MODULE_8__.LOGO_CONTENT
}, {
  provide: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__.TUI_DOC_DEFAULT_TABS,
  useValue: ['Description and examples', 'API']
}, {
  provide: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__.TUI_DOC_PAGES,
  useValue: _pages_pages__WEBPACK_IMPORTED_MODULE_7__.DEMO_PAGES
}, {
  provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__.HIGHLIGHT_OPTIONS,
  useFactory: () => {
    const isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)((0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID));
    return {
      coreLibraryLoader: function () {
        var _ref = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          return __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_core_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/core */ 85122));
        });
        return function coreLibraryLoader() {
          return _ref.apply(this, arguments);
        };
      }(),
      lineNumbersLoader: function () {
        var _ref2 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          return (
            // SSR ReferenceError: window is not defined
            isBrowser ? Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ngx-highlightjs/line-numbers */ 12726)) : Promise.resolve()
          );
        });
        return function lineNumbersLoader() {
          return _ref2.apply(this, arguments);
        };
      }(),
      languages: {
        typescript: function () {
          var _ref3 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_typescript_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/typescript */ 45758));
          });
          return function typescript() {
            return _ref3.apply(this, arguments);
          };
        }(),
        less: function () {
          var _ref4 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_less_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/less */ 55228));
          });
          return function less() {
            return _ref4.apply(this, arguments);
          };
        }(),
        xml: function () {
          var _ref5 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_xml_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/xml */ 69944));
          });
          return function xml() {
            return _ref5.apply(this, arguments);
          };
        }()
      }
    };
  }
}, (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_4__.provideNgDrawFlowConfigs)({
  nodes: {
    infoNode: _modules_nodes__WEBPACK_IMPORTED_MODULE_9__.InfoNodeComponent,
    simpleNode: _modules_nodes__WEBPACK_IMPORTED_MODULE_9__.SimpleNodeComponent,
    inputNode: _modules_nodes__WEBPACK_IMPORTED_MODULE_9__.InputNodeComponent,
    outputNode: _modules_nodes__WEBPACK_IMPORTED_MODULE_9__.OutputNodeComponent,
    miniNode: _modules_nodes__WEBPACK_IMPORTED_MODULE_9__.MiniNodeComponent,
    formNode: _modules_nodes__WEBPACK_IMPORTED_MODULE_9__.FormNodeComponent
  }
})];

/***/ },

/***/ 22516
/*!*********************************************!*\
  !*** ./projects/demo/src/app/app.routes.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appRoutes: () => (/* binding */ appRoutes)
/* harmony export */ });
/* harmony import */ var _home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 56207);
/* harmony import */ var _demo_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/constants */ 26899);


const appRoutes = [
// Quickstart
{
  path: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.Quickstart,
  loadComponent: function () {
    var _ref = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_quickstart_quickstart_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/documentation/quickstart/quickstart.component */ 76849));
    });
    return function loadComponent() {
      return _ref.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Quickstart'
  }
}, {
  path: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.Migrations,
  loadComponent: function () {
    var _ref2 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_migrations_migrations_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/documentation/migrations/migrations.component */ 17509));
    });
    return function loadComponent() {
      return _ref2.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Migrations'
  }
}, {
  path: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.TermsAndDefinitions,
  loadComponent: function () {
    var _ref3 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_terms-and-definitions_terms-and-definitions_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/documentation/terms-and-definitions/terms-and-definitions.component */ 70509));
    });
    return function loadComponent() {
      return _ref3.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Terms and Definitions'
  }
}, {
  path: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.ConfigurationAndPublicApi,
  loadComponent: function () {
    var _ref4 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_configuration-and-public-api_configuration-and-public-a-bfcf86").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/documentation/configuration-and-public-api/configuration-and-public-api.component */ 28605));
    });
    return function loadComponent() {
      return _ref4.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Configuration & Public API'
  }
}, {
  path: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.PanZoom,
  loadComponent: function () {
    var _ref5 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_pan-zoom-configuration_pan-zoom-configuration_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/documentation/pan-zoom-configuration/pan-zoom-configuration.component */ 72251));
    });
    return function loadComponent() {
      return _ref5.apply(this, arguments);
    };
  }(),
  data: {
    title: 'PanZoom Configuration'
  }
}, {
  path: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.Nodes,
  loadComponent: function () {
    var _ref6 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_creating-nodes_creating-nodes_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/documentation/creating-nodes/creating-nodes.component */ 63997));
    });
    return function loadComponent() {
      return _ref6.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Creating Nodes'
  }
}, {
  path: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.Connectors,
  loadComponent: function () {
    var _ref7 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_connectors_connectors_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/documentation/connectors/connectors.component */ 24823));
    });
    return function loadComponent() {
      return _ref7.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Connectors'
  }
}, {
  path: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.Connections,
  loadComponent: function () {
    var _ref8 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_connections_connections_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/documentation/connections/connections.component */ 69445));
    });
    return function loadComponent() {
      return _ref8.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Connection Lines'
  }
}, {
  path: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.Labels,
  loadComponent: function () {
    var _ref9 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_labels_labels_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/documentation/labels/labels.component */ 87581));
    });
    return function loadComponent() {
      return _ref9.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Labels'
  }
}, {
  path: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.Validation,
  loadComponent: function () {
    var _ref0 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_validation_validation_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/documentation/validation/validation.component */ 97149));
    });
    return function loadComponent() {
      return _ref0.apply(this, arguments);
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
    var _ref1 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "projects_demo_src_pages_examples_simple-example_simple-example_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/examples/simple-example/simple-example.component */ 34706));
    });
    return function loadComponent() {
      return _ref1.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Simple example'
  }
}, {
  path: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.Overview,
  loadComponent: function () {
    var _ref10 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "projects_demo_src_pages_examples_overview_overview_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/examples/overview/overview.component */ 21882));
    });
    return function loadComponent() {
      return _ref10.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Feature Overview'
  }
}, {
  path: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.Editor,
  loadComponent: function () {
    var _ref11 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "projects_demo_src_pages_examples_editor_editor_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/examples/editor/editor.component */ 8810));
    });
    return function loadComponent() {
      return _ref11.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Editor example'
  }
}, {
  path: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.StressTest,
  loadComponent: function () {
    var _ref12 = (0,_home_runner_work_ng_draw_flow_ng_draw_flow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return __webpack_require__.e(/*! import() */ "projects_demo_src_pages_examples_stress-test_stress-test_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/examples/stress-test/stress-test.component */ 48922));
    });
    return function loadComponent() {
      return _ref12.apply(this, arguments);
    };
  }(),
  data: {
    title: 'Stress Test'
  }
}, {
  path: '**',
  redirectTo: _demo_constants__WEBPACK_IMPORTED_MODULE_1__.DemoPath.Quickstart
}];

/***/ },

/***/ 15858
/*!******************************************************!*\
  !*** ./projects/demo/src/app/constants/demo-path.ts ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoPath: () => (/* binding */ DemoPath)
/* harmony export */ });
const DemoPath = {
  Quickstart: 'documentation/quickstart',
  Migrations: 'documentation/migrations',
  TermsAndDefinitions: 'documentation/terms-and-definitions',
  ConfigurationAndPublicApi: 'documentation/configuration-and-public-api',
  PanZoom: 'documentation/pan-zoom-configuration',
  Nodes: 'documentation/creating-nodes',
  Connectors: 'documentation/connectors',
  Connections: 'documentation/connections',
  Labels: 'documentation/labels',
  Validation: 'documentation/validation',
  SimpleExample: 'examples/simple-example',
  Overview: 'examples/overview',
  Editor: 'examples/editor',
  StressTest: 'examples/stress-test',
  CustomNodes: 'examples/nodes-example/custom-nodes-example'
};

/***/ },

/***/ 19785
/*!*******************************************************!*\
  !*** ./projects/demo/src/app/constants/github-api.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GITHUB_API: () => (/* binding */ GITHUB_API)
/* harmony export */ });
const GITHUB_API = 'https://api.github.com/repos/taiga-family/ng-draw-flow';

/***/ },

/***/ 26899
/*!**************************************************!*\
  !*** ./projects/demo/src/app/constants/index.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoPath: () => (/* reexport safe */ _demo_path__WEBPACK_IMPORTED_MODULE_0__.DemoPath),
/* harmony export */   GITHUB_API: () => (/* reexport safe */ _github_api__WEBPACK_IMPORTED_MODULE_1__.GITHUB_API)
/* harmony export */ });
/* harmony import */ var _demo_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo-path */ 15858);
/* harmony import */ var _github_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./github-api */ 19785);



/***/ },

/***/ 89289
/*!**************************************************************!*\
  !*** ./projects/demo/src/app/modules/logo/logo.component.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOGO_CONTENT: () => (/* binding */ LOGO_CONTENT),
/* harmony export */   LogoComponent: () => (/* binding */ LogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 43539);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 79923);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 48065);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 76380);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ 11498);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ 28613);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core */ 71534);
/* harmony import */ var _taiga_ui_polymorpheus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/polymorpheus */ 96636);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants */ 26899);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @taiga-ui/kit */ 12665);
var _LogoComponent;










class LogoComponent {
  constructor() {
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.DestroyRef);
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
    this.platformId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID);
    this.stars = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)('');
  }
  ngOnInit() {
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId)) {
      return;
    }
    this.http.get(_constants__WEBPACK_IMPORTED_MODULE_9__.GITHUB_API).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__.takeUntilDestroyed)(this.destroyRef)).subscribe(response => this.stars.set(Intl.NumberFormat('en', {
      notation: 'compact'
    }).format(response['stargazers_count'])));
  }
}
_LogoComponent = LogoComponent;
_LogoComponent.ɵfac = function LogoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LogoComponent)();
};
_LogoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _LogoComponent,
  selectors: [["logo"]],
  decls: 14,
  vars: 7,
  consts: [[1, "container"], ["routerLink", "/", "tuiLink", "", 1, "logo-link"], [1, "logo-name"], ["alt", "ng-draw-flow logo", "src", "assets/icons/logo.svg", 1, "logo"], ["alt", "by t-bank", "src", "assets/icons/by.svg", 1, "by"], [1, "link-group-container", "link-group-items"], [1, "app-link"], ["icon", "@tui.star", "size", "s", "tuiSlot", "bottom"], ["href", "https://github.com/taiga-family/ng-draw-flow", "rel", "noreferrer", "target", "_blank", "title", "NgDrawFlow source code on GitHub"], ["appearance", "outline-grayscale", "size", "s", "tuiButton", "", "type", "button", 1, "app-link"], ["icon", "@tui.github"], ["appearance", "icon", "href", "https://codesandbox.io/p/devbox/ng-drae-flow-demo-y9qd4s?file=%2Fsrc%2Fapp%2Fapp.component.ts", "iconStart", "assets/icons/codesandbox.svg", "rel", "noreferrer", "target", "_blank", "title", "Test it in CodeSandbox", "tuiLink", "", 1, "app-link"]],
  template: function LogoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "a", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " NgDrawFlow ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "tui-badged-content", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "tui-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 8)(10, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "tui-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", "orange")("font-size", 1, "rem");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", 1, "rem");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.stars(), " ");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__.TuiBadgedContentDirective, _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__.TuiBadgedContentComponent, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__.TuiButton, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__.TuiIcon, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__.TuiLink],
  styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  inline-size: 100%;\n}\n.container   tui-root._mobile[_nghost-%COMP%], tui-root._mobile   [_nghost-%COMP%] {\n  font-size: 0;\n}\n.logo-link[_ngcontent-%COMP%] {\n  display: flex;\n}\n.logo-name[_ngcontent-%COMP%] {\n  display: flex;\n  color: var(--tui-text-primary);\n}\n.logo[_ngcontent-%COMP%] {\n  margin-inline-end: 0.625rem;\n  inline-size: 2rem;\n  block-size: 2rem;\n}\n.by[_ngcontent-%COMP%] {\n  margin-inline-start: 0.875rem;\n}\ntui-root._mobile[_nghost-%COMP%]   .by[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .by[_ngcontent-%COMP%] {\n  display: none;\n}\n.link-group-container[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  inset-block-start: 50%;\n  inset-inline-end: 2rem;\n  margin-inline-end: 2.2rem;\n  transform: translateY(-50%);\n}\n.link-group-items[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9tb2R1bGVzL2xvZ28vbG9nby5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUpBO0VBTVEsWUFBQTtBQUNSO0FBR0E7RUFDSSxhQUFBO0FBREo7QUFJQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUZKO0FBS0E7RUFDSSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQU1BO0VBQ0ksNkJBQUE7QUFKSjtBQU1JO0VBQ0ksYUFBQTtBQUpSO0FBUUE7RUFFSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQVBKO0FBVUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBUkoiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaW5saW5lLXNpemU6IDEwMCU7XG5cbiAgICA6aG9zdC1jb250ZXh0KHR1aS1yb290Ll9tb2JpbGUpIHtcbiAgICAgICAgZm9udC1zaXplOiAwO1xuICAgIH1cbn1cblxuLmxvZ28tbGluayB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmxvZ28tbmFtZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtcHJpbWFyeSk7XG59XG5cbi5sb2dvIHtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMC42MjVyZW07XG4gICAgaW5saW5lLXNpemU6IDJyZW07XG4gICAgYmxvY2stc2l6ZTogMnJlbTtcbn1cblxuLmJ5IHtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwLjg3NXJlbTtcblxuICAgIDpob3N0LWNvbnRleHQodHVpLXJvb3QuX21vYmlsZSkgJiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4ubGluay1ncm91cC1jb250YWluZXIge1xuICAgIC8vIHB1c2hpbmcgdGhlIGJ1dHRvbiBncm91cCB0byB0aGUgcmlnaHRcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBpbnNldC1ibG9jay1zdGFydDogNTAlO1xuICAgIGluc2V0LWlubGluZS1lbmQ6IDJyZW07IC8vIHdpZHRoIG9mIERhcmstTW9kZS1CdXR0b25cbiAgICBtYXJnaW4taW5saW5lLWVuZDogMi4ycmVtOyAvLyB3aWR0aCBvZiBEYXJrLU1vZGUtQnV0dG9uICsgbWFyZ2luXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ubGluay1ncm91cC1pdGVtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMS4yNXJlbTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});
const LOGO_CONTENT = new _taiga_ui_polymorpheus__WEBPACK_IMPORTED_MODULE_8__.PolymorpheusComponent(LogoComponent);

/***/ },

/***/ 75979
/*!***********************************************************************!*\
  !*** ../../../app/modules/nodes/form-node/form-node.component.ts?raw ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormNodeComponent: () => (/* binding */ FormNodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 48065);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ 11498);
/* harmony import */ var _taiga_ui_core_components_textfield__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core/components/textfield */ 50957);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ 2490);
var _FormNodeComponent;









const _c0 = (a0, a1) => ({
  nodeId: a0,
  connectorId: a1,
  single: false
});
function FormNodeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "df-input", 0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx_r0.nodeId, ctx_r0.nodeId + "-input-1"));
  }
}
function FormNodeComponent_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "df-output", 8);
  }
  if (rf & 2) {
    const fieldName_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx_r0.nodeId, ctx_r0.getConnectorId(fieldName_r2)));
  }
}
function FormNodeComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 5)(2, "tui-textfield", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormNodeComponent_For_5_Conditional_4_Template, 1, 4, "df-output", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fieldName_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", fieldName_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!!ctx_r0.getConnectorId(fieldName_r2) ? 4 : -1);
  }
}
class FormNodeComponent extends _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_3__.DrawFlowBaseNode {
  constructor() {
    super(...arguments);
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef);
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormRecord({
      field1: this.createFieldGroup(1, true),
      field2: this.createFieldGroup(2, true)
    });
  }
  get fieldNames() {
    return Object.keys(this.form.controls);
  }
  getConnectorId(fieldName) {
    if (!fieldName) {
      return null;
    }
    const group = this.form.controls[fieldName];
    if (!group) {
      return null;
    }
    return group.controls.connectorId.value;
  }
  ngAfterViewInit() {
    this.form.valueChanges.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.takeUntilDestroyed)(this.destroyRef)).subscribe(value => {
      this.model.value = value;
    });
  }
  add() {
    const index = Object.keys(this.form.controls).length + 1;
    const newFieldKey = `field${index}`;
    this.form.addControl(newFieldKey, this.createFieldGroup(index, false));
  }
  get invalidState() {
    const formInvalid = Object.values(this.form.controls).some(fieldGroup => fieldGroup.controls.fieldValue.touched && fieldGroup.controls.fieldValue.invalid);
    return this.invalidSignal() || formInvalid;
  }
  createFieldGroup(index, required) {
    return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      connectorId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(`node-5-output-${index}`, {
        nonNullable: true
      }),
      fieldValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', {
        nonNullable: true,
        validators: required ? [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required] : []
      })
    });
  }
}
_FormNodeComponent = FormNodeComponent;
_FormNodeComponent.ɵfac = /*@__PURE__*/(() => {
  let ɵFormNodeComponent_BaseFactory;
  return function FormNodeComponent_Factory(__ngFactoryType__) {
    return (ɵFormNodeComponent_BaseFactory || (ɵFormNodeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_FormNodeComponent)))(__ngFactoryType__ || _FormNodeComponent);
  };
})();
_FormNodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _FormNodeComponent,
  selectors: [["app-form-node"]],
  hostBindings: function FormNodeComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.backspace.stop", function FormNodeComponent_keydown_backspace_stop_HostBindingHandler() {
        return 0;
      })("keydown.delete.stop", function FormNodeComponent_keydown_delete_stop_HostBindingHandler() {
        return 0;
      });
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 8,
  vars: 3,
  consts: [[1, "input", 3, "connectorData"], [1, "tui-space_bottom-4", "tui-text_body-s"], ["tuiTheme", "light", 3, "formGroup"], [3, "formGroupName"], ["size", "s", "tuiButton", "", "type", "button", 3, "click"], [1, "field", "tui-space_bottom-4"], ["tuiTextfieldSize", "s", "tuiTheme", "light", 1, "text-field"], ["formControlName", "fieldValue", "tuiInput", ""], [1, "output", 3, "connectorData"]],
  template: function FormNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormNodeComponent_Conditional_0_Template, 1, 4, "df-input", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](4, FormNodeComponent_For_5_Template, 5, 2, "div", 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormNodeComponent_Template_button_click_6_listener() {
        return ctx.add();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Add field\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!ctx.startNode ? 0 : -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.model.text, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.fieldNames);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_3__.DfInputComponent, _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_3__.DfOutputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__.TuiButton, _taiga_ui_core_components_textfield__WEBPACK_IMPORTED_MODULE_5__.TuiTextfieldComponent, _taiga_ui_core_components_textfield__WEBPACK_IMPORTED_MODULE_5__.TuiTextfieldOptionsDirective, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__.TuiInputDirective],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  inline-size: 12.5rem;\n  min-block-size: 2.5rem;\n}\n.field[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.field[_ngcontent-%COMP%]   .text-field[_ngcontent-%COMP%] {\n  inline-size: 100%;\n}\n.input[_ngcontent-%COMP%], \n.output[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n}\n.input[_ngcontent-%COMP%] {\n  inset-inline-start: -0.5rem;\n  inset-block-start: 0.25rem;\n}\n.output-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.output[_ngcontent-%COMP%] {\n  inset-inline-end: -0.5rem;\n  inset-block-start: 0.75rem;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9tb2R1bGVzL25vZGVzL2Zvcm0tbm9kZS9mb3JtLW5vZGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFKO0FBSEE7RUFNUSxpQkFBQTtBQUFSO0FBSUE7O0VBRUksa0JBQUE7RUFDQSxVQUFBO0FBRko7QUFLQTtFQUNJLDJCQUFBO0VBQ0EsMEJBQUE7QUFISjtBQU1BO0VBQ0ksa0JBQUE7QUFKSjtBQU9BO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtBQUxKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGlubGluZS1zaXplOiAxMi41cmVtO1xuICAgIG1pbi1ibG9jay1zaXplOiAyLjVyZW07XG59XG5cbi5maWVsZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC50ZXh0LWZpZWxkIHtcbiAgICAgICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgfVxufVxuXG4uaW5wdXQsXG4ub3V0cHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmlucHV0IHtcbiAgICBpbnNldC1pbmxpbmUtc3RhcnQ6IC0wLjVyZW07XG4gICAgaW5zZXQtYmxvY2stc3RhcnQ6IDAuMjVyZW07XG59XG5cbi5vdXRwdXQtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ub3V0cHV0IHtcbiAgICBpbnNldC1pbmxpbmUtZW5kOiAtMC41cmVtO1xuICAgIGluc2V0LWJsb2NrLXN0YXJ0OiAwLjc1cmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ },

/***/ 85989
/*!******************************************************!*\
  !*** ./projects/demo/src/app/modules/nodes/index.ts ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormNodeComponent: () => (/* reexport safe */ _form_node_form_node_component__WEBPACK_IMPORTED_MODULE_0__.FormNodeComponent),
/* harmony export */   InfoNodeComponent: () => (/* reexport safe */ _info_node_info_node_component__WEBPACK_IMPORTED_MODULE_1__.InfoNodeComponent),
/* harmony export */   InputNodeComponent: () => (/* reexport safe */ _input_node_input_node_component__WEBPACK_IMPORTED_MODULE_2__.InputNodeComponent),
/* harmony export */   LabelNodeComponent: () => (/* reexport safe */ _label_node_label_node_component__WEBPACK_IMPORTED_MODULE_3__.LabelNodeComponent),
/* harmony export */   MiniNodeComponent: () => (/* reexport safe */ _mini_node_mini_node_component__WEBPACK_IMPORTED_MODULE_4__.MiniNodeComponent),
/* harmony export */   OutputNodeComponent: () => (/* reexport safe */ _output_node_output_node_component__WEBPACK_IMPORTED_MODULE_5__.OutputNodeComponent),
/* harmony export */   SimpleNodeComponent: () => (/* reexport safe */ _simple_node_simple_node_component__WEBPACK_IMPORTED_MODULE_6__.SimpleNodeComponent)
/* harmony export */ });
/* harmony import */ var _form_node_form_node_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-node/form-node.component */ 75979);
/* harmony import */ var _info_node_info_node_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info-node/info-node.component */ 98367);
/* harmony import */ var _input_node_input_node_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-node/input-node.component */ 58839);
/* harmony import */ var _label_node_label_node_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./label-node/label-node.component */ 13383);
/* harmony import */ var _mini_node_mini_node_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mini-node/mini-node.component */ 59951);
/* harmony import */ var _output_node_output_node_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./output-node/output-node.component */ 15607);
/* harmony import */ var _simple_node_simple_node_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./simple-node/simple-node.component */ 73539);








/***/ },

/***/ 98367
/*!***********************************************************************!*\
  !*** ../../../app/modules/nodes/info-node/info-node.component.ts?raw ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfoNodeComponent: () => (/* binding */ InfoNodeComponent)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
var _InfoNodeComponent;


class InfoNodeComponent extends _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DrawFlowBaseNode {}
_InfoNodeComponent = InfoNodeComponent;
_InfoNodeComponent.ɵfac = /*@__PURE__*/(() => {
  let ɵInfoNodeComponent_BaseFactory;
  return function InfoNodeComponent_Factory(__ngFactoryType__) {
    return (ɵInfoNodeComponent_BaseFactory || (ɵInfoNodeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_InfoNodeComponent)))(__ngFactoryType__ || _InfoNodeComponent);
  };
})();
_InfoNodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _InfoNodeComponent,
  selectors: [["app-info-node"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
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
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  inline-size: 30rem;\n}\n.tui-list__item[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9tb2R1bGVzL25vZGVzL2luZm8tbm9kZS9pbmZvLW5vZGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUVBO0VBQ0ksV0FBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGlubGluZS1zaXplOiAzMHJlbTtcbn1cblxuLnR1aS1saXN0X19pdGVtIHtcbiAgICBjb2xvcjogIzAwMDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ },

/***/ 58839
/*!********************************************************************************!*\
  !*** ./projects/demo/src/app/modules/nodes/input-node/input-node.component.ts ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputNodeComponent: () => (/* binding */ InputNodeComponent)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
var _InputNodeComponent;


const _c0 = (a0, a1) => ({
  nodeId: a0,
  connectorId: a1,
  single: false
});
class InputNodeComponent extends _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DrawFlowBaseNode {
  constructor() {
    super(...arguments);
    this.connectorPosition = _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition;
  }
}
_InputNodeComponent = InputNodeComponent;
_InputNodeComponent.ɵfac = /*@__PURE__*/(() => {
  let ɵInputNodeComponent_BaseFactory;
  return function InputNodeComponent_Factory(__ngFactoryType__) {
    return (ɵInputNodeComponent_BaseFactory || (ɵInputNodeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_InputNodeComponent)))(__ngFactoryType__ || _InputNodeComponent);
  };
})();
_InputNodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _InputNodeComponent,
  selectors: [["app-input-node"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](12, _c0, ctx.nodeId, ctx.nodeId + "-input-2"))("position", ctx.connectorPosition.Top);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.model.text);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](15, _c0, ctx.nodeId, ctx.nodeId + "-input-3"))("position", ctx.connectorPosition.Right);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](18, _c0, ctx.nodeId, ctx.nodeId + "-input-4"))("position", ctx.connectorPosition.Bottom);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfInputComponent],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  inline-size: 10rem;\n}\n.input[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n}\n.input_top[_ngcontent-%COMP%] {\n  inset-inline-start: 50%;\n  inset-block-start: -0.5rem;\n}\n.input_left[_ngcontent-%COMP%] {\n  inset-inline-start: -0.5rem;\n  inset-block-start: 50%;\n}\n.input_right[_ngcontent-%COMP%] {\n  inset-inline-end: -0.5rem;\n  inset-block-start: 50%;\n}\n.input_bottom[_ngcontent-%COMP%] {\n  inset-block-end: -0.5rem;\n  inset-inline-end: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9tb2R1bGVzL25vZGVzL2lucHV0LW5vZGUvaW5wdXQtbm9kZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFBSjtBQUVJO0VBQ0ksdUJBQUE7RUFDQSwwQkFBQTtBQUFSO0FBR0k7RUFDSSwyQkFBQTtFQUNBLHNCQUFBO0FBRFI7QUFJSTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7QUFGUjtBQUtJO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtBQUhSIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaW5saW5lLXNpemU6IDEwcmVtO1xufVxuXG4uaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgJl90b3Age1xuICAgICAgICBpbnNldC1pbmxpbmUtc3RhcnQ6IDUwJTtcbiAgICAgICAgaW5zZXQtYmxvY2stc3RhcnQ6IC0wLjVyZW07XG4gICAgfVxuXG4gICAgJl9sZWZ0IHtcbiAgICAgICAgaW5zZXQtaW5saW5lLXN0YXJ0OiAtMC41cmVtO1xuICAgICAgICBpbnNldC1ibG9jay1zdGFydDogNTAlO1xuICAgIH1cblxuICAgICZfcmlnaHQge1xuICAgICAgICBpbnNldC1pbmxpbmUtZW5kOiAtMC41cmVtO1xuICAgICAgICBpbnNldC1ibG9jay1zdGFydDogNTAlO1xuICAgIH1cblxuICAgICZfYm90dG9tIHtcbiAgICAgICAgaW5zZXQtYmxvY2stZW5kOiAtMC41cmVtO1xuICAgICAgICBpbnNldC1pbmxpbmUtZW5kOiA1MCU7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ },

/***/ 13383
/*!*************************************************************************!*\
  !*** ../../../app/modules/nodes/label-node/label-node.component.ts?raw ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LabelNodeComponent: () => (/* binding */ LabelNodeComponent)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core */ 11498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
var _LabelNodeComponent;



const _c0 = a0 => ({
  content: a0
});
const _c1 = (a0, a1) => ({
  nodeId: a0,
  connectorId: a1,
  single: false
});
function LabelNodeComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "df-output", 2);
  }
  if (rf & 2) {
    const ɵ$index_6_r1 = ctx.$index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("connectionLabel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ɵ$index_6_r1))("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c1, ctx_r1.nodeId, ctx_r1.nodeId + "-output-" + (ɵ$index_6_r1 + 1)));
  }
}
class LabelNodeComponent extends _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DrawFlowBaseNode {
  constructor() {
    super(...arguments);
    this.outputConnectors = [0];
  }
  addOutputConnector() {
    this.outputConnectors.push(this.outputs().length);
  }
}
_LabelNodeComponent = LabelNodeComponent;
_LabelNodeComponent.ɵfac = /*@__PURE__*/(() => {
  let ɵLabelNodeComponent_BaseFactory;
  return function LabelNodeComponent_Factory(__ngFactoryType__) {
    return (ɵLabelNodeComponent_BaseFactory || (ɵLabelNodeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_LabelNodeComponent)))(__ngFactoryType__ || _LabelNodeComponent);
  };
})();
_LabelNodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _LabelNodeComponent,
  selectors: [["app-label-node"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 7,
  vars: 1,
  consts: [[1, "tui-text_body-xs"], [1, "output-wrapper"], [1, "output", 3, "connectionLabel", "connectorData"], ["size", "xs", "tuiButton", "", "type", "button", 3, "click"]],
  template: function LabelNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](3, LabelNodeComponent_For_4_Template, 1, 7, "df-output", 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LabelNodeComponent_Template_button_click_5_listener() {
        return ctx.addOutputConnector();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Add output\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.model.text);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.outputConnectors);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfOutputComponent, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TuiButton],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  inline-size: 12.5rem;\n}\n.output-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  inset-inline-end: -0.4375rem;\n  inset-block-start: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-block-end: 0.25rem;\n  block-size: 100%;\n}\n.output-label[_ngcontent-%COMP%] {\n  margin-inline-end: 0.5rem;\n}\n.output[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9tb2R1bGVzL25vZGVzL2xhYmVsLW5vZGUvbGFiZWwtbm9kZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdBO0VBQ0kseUJBQUE7QUFESjtBQUlBO0VBQ0ksa0JBQUE7QUFGSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBpbmxpbmUtc2l6ZTogMTIuNXJlbTtcbn1cblxuLm91dHB1dC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBpbnNldC1pbmxpbmUtZW5kOiAtMC40Mzc1cmVtO1xuICAgIGluc2V0LWJsb2NrLXN0YXJ0OiAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMC4yNXJlbTtcbiAgICBibG9jay1zaXplOiAxMDAlO1xufVxuXG4ub3V0cHV0LWxhYmVsIHtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMC41cmVtO1xufVxuXG4ub3V0cHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ },

/***/ 59951
/*!******************************************************************************!*\
  !*** ./projects/demo/src/app/modules/nodes/mini-node/mini-node.component.ts ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MiniNodeComponent: () => (/* binding */ MiniNodeComponent)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
var _MiniNodeComponent;


const _c0 = a0 => ({
  nodeId: a0,
  connectorId: "input-1",
  single: false
});
const _c1 = a0 => ({
  nodeId: a0,
  connectorId: "output-1",
  single: false
});
function MiniNodeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "df-input", 0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r0.nodeId));
  }
}
function MiniNodeComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "df-output", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c1, ctx_r0.nodeId));
  }
}
class MiniNodeComponent extends _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DrawFlowBaseNode {}
_MiniNodeComponent = MiniNodeComponent;
_MiniNodeComponent.ɵfac = /*@__PURE__*/(() => {
  let ɵMiniNodeComponent_BaseFactory;
  return function MiniNodeComponent_Factory(__ngFactoryType__) {
    return (ɵMiniNodeComponent_BaseFactory || (ɵMiniNodeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_MiniNodeComponent)))(__ngFactoryType__ || _MiniNodeComponent);
  };
})();
_MiniNodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _MiniNodeComponent,
  selectors: [["app-mini-node"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 3,
  consts: [[1, "input", 3, "connectorData"], [1, "tui-text_body-xs"], [1, "output", 3, "connectorData"]],
  template: function MiniNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MiniNodeComponent_Conditional_0_Template, 1, 3, "df-input", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MiniNodeComponent_Conditional_3_Template, 1, 3, "df-output", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](!ctx.startNode ? 0 : -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Node ", ctx.model.index, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](!ctx.endNode ? 3 : -1);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfInputComponent, _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfOutputComponent],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  inline-size: 3.125rem;\n  block-size: 3.125rem;\n  align-items: center;\n  justify-content: center;\n}\n.input[_ngcontent-%COMP%], \n.output[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.input[_ngcontent-%COMP%] {\n  inset-inline-start: -0.5rem;\n  inset-block-start: 0.5rem;\n}\n.output-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.output[_ngcontent-%COMP%] {\n  inset-inline-end: -0.5rem;\n  inset-block-end: 0.5rem;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9tb2R1bGVzL25vZGVzL21pbmktbm9kZS9taW5pLW5vZGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUVBOztFQUVJLGtCQUFBO0FBQUo7QUFHQTtFQUNJLDJCQUFBO0VBQ0EseUJBQUE7QUFESjtBQUlBO0VBQ0ksa0JBQUE7QUFGSjtBQUtBO0VBQ0kseUJBQUE7RUFDQSx1QkFBQTtBQUhKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaW5saW5lLXNpemU6IDMuMTI1cmVtO1xuICAgIGJsb2NrLXNpemU6IDMuMTI1cmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbnB1dCxcbi5vdXRwdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmlucHV0IHtcbiAgICBpbnNldC1pbmxpbmUtc3RhcnQ6IC0wLjVyZW07XG4gICAgaW5zZXQtYmxvY2stc3RhcnQ6IDAuNXJlbTtcbn1cblxuLm91dHB1dC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5vdXRwdXQge1xuICAgIGluc2V0LWlubGluZS1lbmQ6IC0wLjVyZW07XG4gICAgaW5zZXQtYmxvY2stZW5kOiAwLjVyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ },

/***/ 15607
/*!**********************************************************************************!*\
  !*** ./projects/demo/src/app/modules/nodes/output-node/output-node.component.ts ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutputNodeComponent: () => (/* binding */ OutputNodeComponent)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
var _OutputNodeComponent;


const _c0 = (a0, a1) => ({
  nodeId: a0,
  connectorId: a1,
  single: false
});
class OutputNodeComponent extends _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DrawFlowBaseNode {
  constructor() {
    super(...arguments);
    this.connectorPosition = _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition;
  }
}
_OutputNodeComponent = OutputNodeComponent;
_OutputNodeComponent.ɵfac = /*@__PURE__*/(() => {
  let ɵOutputNodeComponent_BaseFactory;
  return function OutputNodeComponent_Factory(__ngFactoryType__) {
    return (ɵOutputNodeComponent_BaseFactory || (ɵOutputNodeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_OutputNodeComponent)))(__ngFactoryType__ || _OutputNodeComponent);
  };
})();
_OutputNodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _OutputNodeComponent,
  selectors: [["app-output-node"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](12, _c0, ctx.nodeId, ctx.nodeId + "-output-2"))("position", ctx.connectorPosition.Top);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.model.text);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](15, _c0, ctx.nodeId, ctx.nodeId + "-output-3"))("position", ctx.connectorPosition.Right);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](18, _c0, ctx.nodeId, ctx.nodeId + "-output-4"))("position", ctx.connectorPosition.Bottom);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfOutputComponent],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  inline-size: 10rem;\n}\n.output[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n}\n.output_top[_ngcontent-%COMP%] {\n  inset-inline-start: 50%;\n  inset-block-start: -0.5rem;\n}\n.output_left[_ngcontent-%COMP%] {\n  inset-inline-start: -0.5rem;\n  inset-block-start: 50%;\n}\n.output_right[_ngcontent-%COMP%] {\n  inset-inline-end: -0.5rem;\n  inset-block-start: 50%;\n}\n.output_bottom[_ngcontent-%COMP%] {\n  inset-block-end: -0.5rem;\n  inset-inline-end: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9tb2R1bGVzL25vZGVzL291dHB1dC1ub2RlL291dHB1dC1ub2RlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUFKO0FBRUk7RUFDSSx1QkFBQTtFQUNBLDBCQUFBO0FBQVI7QUFHSTtFQUNJLDJCQUFBO0VBQ0Esc0JBQUE7QUFEUjtBQUlJO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtBQUZSO0FBS0k7RUFDSSx3QkFBQTtFQUNBLHFCQUFBO0FBSFIiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBpbmxpbmUtc2l6ZTogMTByZW07XG59XG5cbi5vdXRwdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgJl90b3Age1xuICAgICAgICBpbnNldC1pbmxpbmUtc3RhcnQ6IDUwJTtcbiAgICAgICAgaW5zZXQtYmxvY2stc3RhcnQ6IC0wLjVyZW07XG4gICAgfVxuXG4gICAgJl9sZWZ0IHtcbiAgICAgICAgaW5zZXQtaW5saW5lLXN0YXJ0OiAtMC41cmVtO1xuICAgICAgICBpbnNldC1ibG9jay1zdGFydDogNTAlO1xuICAgIH1cblxuICAgICZfcmlnaHQge1xuICAgICAgICBpbnNldC1pbmxpbmUtZW5kOiAtMC41cmVtO1xuICAgICAgICBpbnNldC1ibG9jay1zdGFydDogNTAlO1xuICAgIH1cblxuICAgICZfYm90dG9tIHtcbiAgICAgICAgaW5zZXQtYmxvY2stZW5kOiAtMC41cmVtO1xuICAgICAgICBpbnNldC1pbmxpbmUtZW5kOiA1MCU7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ },

/***/ 73539
/*!***************************************************************************!*\
  !*** ../../../app/modules/nodes/simple-node/simple-node.component.ts?raw ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleNodeComponent: () => (/* binding */ SimpleNodeComponent)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
var _SimpleNodeComponent;


const _c0 = (a0, a1) => ({
  nodeId: a0,
  connectorId: a1,
  single: false
});
function SimpleNodeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "df-input", 0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r0.nodeId, ctx_r0.nodeId + "-input-1"));
  }
}
function SimpleNodeComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "df-output", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r0.nodeId, ctx_r0.nodeId + "-output-1"));
  }
}
class SimpleNodeComponent extends _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DrawFlowBaseNode {}
_SimpleNodeComponent = SimpleNodeComponent;
_SimpleNodeComponent.ɵfac = /*@__PURE__*/(() => {
  let ɵSimpleNodeComponent_BaseFactory;
  return function SimpleNodeComponent_Factory(__ngFactoryType__) {
    return (ɵSimpleNodeComponent_BaseFactory || (ɵSimpleNodeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_SimpleNodeComponent)))(__ngFactoryType__ || _SimpleNodeComponent);
  };
})();
_SimpleNodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _SimpleNodeComponent,
  selectors: [["app-simple-node"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 3,
  consts: [[1, "input", 3, "connectorData"], [1, "tui-text_body-xs"], [1, "output", 3, "connectorData"]],
  template: function SimpleNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SimpleNodeComponent_Conditional_0_Template, 1, 4, "df-input", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SimpleNodeComponent_Conditional_3_Template, 1, 4, "df-output", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](!ctx.startNode ? 0 : -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.model.text);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](!ctx.endNode ? 3 : -1);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfInputComponent, _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfOutputComponent],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  inline-size: 10rem;\n}\n.input[_ngcontent-%COMP%], \n.output[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n}\n.input[_ngcontent-%COMP%] {\n  inset-inline-start: -0.5rem;\n  inset-block-start: 0.25rem;\n}\n.output-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.output[_ngcontent-%COMP%] {\n  inset-inline-end: -0.5rem;\n  inset-block-start: 0;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9tb2R1bGVzL25vZGVzL3NpbXBsZS1ub2RlL3NpbXBsZS1ub2RlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFFQTs7RUFFSSxrQkFBQTtFQUNBLFVBQUE7QUFBSjtBQUdBO0VBQ0ksMkJBQUE7RUFDQSwwQkFBQTtBQURKO0FBSUE7RUFDSSxrQkFBQTtBQUZKO0FBS0E7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0FBSEoiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBpbmxpbmUtc2l6ZTogMTByZW07XG59XG5cbi5pbnB1dCxcbi5vdXRwdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uaW5wdXQge1xuICAgIGluc2V0LWlubGluZS1zdGFydDogLTAuNXJlbTtcbiAgICBpbnNldC1ibG9jay1zdGFydDogMC4yNXJlbTtcbn1cblxuLm91dHB1dC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5vdXRwdXQge1xuICAgIGluc2V0LWlubGluZS1lbmQ6IC0wLjVyZW07XG4gICAgaW5zZXQtYmxvY2stc3RhcnQ6IDA7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ },

/***/ 92913
/*!*******************************************************!*\
  !*** ./projects/demo/src/environments/environment.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false
};

/***/ },

/***/ 89550
/*!*******************************************!*\
  !*** ./projects/demo/src/main.browser.ts ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ 41541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 21527);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.component */ 14699);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.config */ 50332);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ 92913);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.enableProdMode)();
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_4__.appConfig).catch(err => console.error(err));

/***/ },

/***/ 18986
/*!******************************************!*\
  !*** ./projects/demo/src/pages/pages.ts ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEMO_PAGES: () => (/* binding */ DEMO_PAGES)
/* harmony export */ });
/* harmony import */ var _demo_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @demo/constants */ 26899);

const DEMO_PAGES = [{
  section: 'Documentation',
  title: 'Quickstart',
  route: _demo_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.Quickstart
}, {
  section: 'Documentation',
  title: 'Migrations',
  route: _demo_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.Migrations
}, {
  section: 'Documentation',
  title: 'Terms and Definitions',
  route: _demo_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.TermsAndDefinitions
}, {
  section: 'Documentation',
  title: 'Configuration & Public API',
  route: _demo_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.ConfigurationAndPublicApi
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
  title: 'Connection Lines',
  route: _demo_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.Connections
}, {
  section: 'Documentation',
  title: 'Labels',
  route: _demo_constants__WEBPACK_IMPORTED_MODULE_0__.DemoPath.Labels
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

/***/ },

/***/ 41541
/*!****************************************!*\
  !*** ./projects/demo/src/polyfills.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js */ 27203);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ },

/***/ 85577
/*!********************************************!*\
  !*** ./projects/ng-draw-flow/src/index.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DF_PAN_ZOOM_DEFAULT_OPTIONS: () => (/* reexport safe */ _lib_components_pan_zoom_pan_zoom_options__WEBPACK_IMPORTED_MODULE_1__.DF_PAN_ZOOM_DEFAULT_OPTIONS),
/* harmony export */   DF_PAN_ZOOM_OPTIONS: () => (/* reexport safe */ _lib_components_pan_zoom_pan_zoom_options__WEBPACK_IMPORTED_MODULE_1__.DF_PAN_ZOOM_OPTIONS),
/* harmony export */   DRAW_FLOW_DEFAULT_OPTIONS: () => (/* reexport safe */ _lib_ng_draw_flow_configs__WEBPACK_IMPORTED_MODULE_4__.DRAW_FLOW_DEFAULT_OPTIONS),
/* harmony export */   DRAW_FLOW_OPTIONS: () => (/* reexport safe */ _lib_ng_draw_flow_configs__WEBPACK_IMPORTED_MODULE_4__.DRAW_FLOW_OPTIONS),
/* harmony export */   DRAW_FLOW_ROOT_ELEMENT: () => (/* reexport safe */ _lib_ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_6__.DRAW_FLOW_ROOT_ELEMENT),
/* harmony export */   DfArrowhead: () => (/* reexport safe */ _lib_ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_5__.DfArrowhead),
/* harmony export */   DfConnectionPoint: () => (/* reexport safe */ _lib_ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_5__.DfConnectionPoint),
/* harmony export */   DfConnectionType: () => (/* reexport safe */ _lib_ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_5__.DfConnectionType),
/* harmony export */   DfConnectorPosition: () => (/* reexport safe */ _lib_ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_5__.DfConnectorPosition),
/* harmony export */   DfInputComponent: () => (/* reexport safe */ _lib_components_connectors__WEBPACK_IMPORTED_MODULE_0__.DfInputComponent),
/* harmony export */   DfOutputComponent: () => (/* reexport safe */ _lib_components_connectors__WEBPACK_IMPORTED_MODULE_0__.DfOutputComponent),
/* harmony export */   DrawFlowBaseNode: () => (/* reexport safe */ _lib_ng_draw_flow_node_base__WEBPACK_IMPORTED_MODULE_7__.DrawFlowBaseNode),
/* harmony export */   ErrorsDirective: () => (/* reexport safe */ _lib_directives_errors_errors_directive__WEBPACK_IMPORTED_MODULE_2__.ErrorsDirective),
/* harmony export */   NgDrawFlowComponent: () => (/* reexport safe */ _lib_ng_draw_flow_component__WEBPACK_IMPORTED_MODULE_3__.NgDrawFlowComponent),
/* harmony export */   NgDrawFlowStoreService: () => (/* reexport safe */ _lib_services_ng_draw_flow_store_service__WEBPACK_IMPORTED_MODULE_8__.NgDrawFlowStoreService),
/* harmony export */   dfCycleDetectionValidator: () => (/* reexport safe */ _lib_validators__WEBPACK_IMPORTED_MODULE_9__.dfCycleDetectionValidator),
/* harmony export */   dfIsolatedNodesValidator: () => (/* reexport safe */ _lib_validators__WEBPACK_IMPORTED_MODULE_9__.dfIsolatedNodesValidator),
/* harmony export */   dfPanZoomOptionsProvider: () => (/* reexport safe */ _lib_components_pan_zoom_pan_zoom_options__WEBPACK_IMPORTED_MODULE_1__.dfPanZoomOptionsProvider),
/* harmony export */   provideNgDrawFlowConfigs: () => (/* reexport safe */ _lib_ng_draw_flow_configs__WEBPACK_IMPORTED_MODULE_4__.provideNgDrawFlowConfigs)
/* harmony export */ });
/* harmony import */ var _lib_components_connectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/components/connectors */ 58783);
/* harmony import */ var _lib_components_pan_zoom_pan_zoom_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components/pan-zoom/pan-zoom.options */ 25741);
/* harmony import */ var _lib_directives_errors_errors_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/directives/errors/errors.directive */ 87116);
/* harmony import */ var _lib_ng_draw_flow_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/ng-draw-flow.component */ 46607);
/* harmony import */ var _lib_ng_draw_flow_configs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/ng-draw-flow.configs */ 90167);
/* harmony import */ var _lib_ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/ng-draw-flow.interfaces */ 1954);
/* harmony import */ var _lib_ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/ng-draw-flow.token */ 59497);
/* harmony import */ var _lib_ng_draw_flow_node_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/ng-draw-flow-node.base */ 29440);
/* harmony import */ var _lib_services_ng_draw_flow_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/services/ng-draw-flow-store.service */ 24410);
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/validators */ 75657);











/***/ },

/***/ 53700
/*!*************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/connection/connection.component.ts ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectionComponent: () => (/* binding */ ConnectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 48065);
/* harmony import */ var _taiga_ui_polymorpheus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/polymorpheus */ 96636);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 97757);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 36812);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 13901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 65171);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 79746);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 39721);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 99473);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 56816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 21082);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../directives */ 52256);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../helpers */ 50315);
/* harmony import */ var _ng_draw_flow_configs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ng-draw-flow.configs */ 90167);
/* harmony import */ var _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../ng-draw-flow.interfaces */ 1954);
/* harmony import */ var _services_coordinates_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../services/coordinates.service */ 65092);
/* harmony import */ var _services_ng_draw_flow_store_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../services/ng-draw-flow-store.service */ 24410);
/* harmony import */ var _connections_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../connections.service */ 39976);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utils */ 77846);
var _ConnectionComponent;













function ConnectionComponent_Conditional_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const label_r1 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", label_r1, " ");
  }
}
function ConnectionComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "foreignObject", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConnectionComponent_Conditional_8_ng_container_2_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx_r1.labelPosition().x, "px")("top", ctx_r1.labelPosition().y, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("polymorpheusOutlet", ctx_r1.connection.label.content)("polymorpheusOutletContext", ctx_r1.connection.label.context);
  }
}
class ConnectionComponent {
  constructor() {
    this.connectionsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_connections_service__WEBPACK_IMPORTED_MODULE_18__.ConnectionsService);
    this.coordinatesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_coordinates_service__WEBPACK_IMPORTED_MODULE_16__.CoordinatesService);
    this.store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_ng_draw_flow_store_service__WEBPACK_IMPORTED_MODULE_17__.NgDrawFlowStoreService);
    this.options = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ng_draw_flow_configs__WEBPACK_IMPORTED_MODULE_14__.DRAW_FLOW_OPTIONS);
    this.arrowhead = this.options.connection.arrowhead;
    this.arrowWidth = this.arrowhead.width;
    this.arrowHeight = this.arrowhead.height;
    this.pathWithLabel = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const sourcePoint = this.getConnectionPoint(this.connection.source)();
      const targetPoint = this.getConnectionPoint(this.connection.target)();
      if (!sourcePoint || !targetPoint) {
        return {
          path: '',
          labelX: 0,
          labelY: 0
        };
      }
      switch (this.options.connection.type) {
        case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_15__.DfConnectionType.SmoothStep:
          {
            const [path, labelX, labelY] = (0,_utils__WEBPACK_IMPORTED_MODULE_19__.createSmoothStepPath)(sourcePoint, targetPoint, this.options.connection.curvature);
            return {
              path,
              labelX,
              labelY
            };
          }
        case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_15__.DfConnectionType.Bezier:
        default:
          {
            const curvature = this.options.connection.curvature;
            const [path, labelX, labelY] = (0,_utils__WEBPACK_IMPORTED_MODULE_19__.createBezierPath)(sourcePoint, targetPoint, curvature);
            return {
              path,
              labelX,
              labelY
            };
          }
      }
    });
    this.selected = false;
    this.arrowMarkerWidth = this.arrowWidth + this.arrowHeight;
    this.arrowMarkerHeight = this.arrowHeight * 2;
    this.arrowViewBox = `-${this.arrowMarkerWidth} -${this.arrowMarkerHeight / 2} ${this.arrowMarkerWidth} ${this.arrowMarkerHeight}`;
    this.arrowPoints = `-${this.arrowWidth},-${this.arrowHeight / 2} 0,0 -${this.arrowWidth},${this.arrowHeight / 2}`;
    this.arrowClosedPoints = `${this.arrowPoints} -${this.arrowWidth},-${this.arrowHeight / 2}`;
    this.markerEnd = this.arrowhead.type === _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_15__.DfArrowhead.None ? null : `url(#df-arrowhead-${this.arrowhead.type})`;
    this.path = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => this.pathWithLabel().path);
    this.labelPosition = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const {
        labelX,
        labelY
      } = this.pathWithLabel();
      return {
        x: labelX,
        y: labelY
      };
    });
    this.optimization = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.toSignal)((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.toObservable)(this.path).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.observeOn)(rxjs__WEBPACK_IMPORTED_MODULE_3__.animationFrameScheduler), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.skip)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.concat)((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(true), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(false).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.delay)(400)))), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(false)), {
      initialValue: false
    });
    this.deletable = this.options.options.connectionsDeletable;
    this.selectedNodeInput = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => this.connection.target.nodeId === this.connectionsService.selectedNodeId());
    this.selectedNodeOutput = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => this.connection.source.nodeId === this.connectionsService.selectedNodeId());
    this.connectionDeleted = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    this.connectionSelected = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    this.connectionInput = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required({
      alias: 'connection'
    });
  }
  get connection() {
    return this.connectionInput();
  }
  handleKeyboardEvent(event) {
    if (!this.selected || !this.deletable) {
      return;
    }
    event.preventDefault();
    this.store.clearSelectedConnection(this.connection);
    this.connectionsService.removeConnection(this.connection);
    this.connectionDeleted.emit();
  }
  onSelectedChanged(selected) {
    this.selected = selected;
    if (selected) {
      this.store.emitConnectionSelected(this.connection);
      this.connectionSelected.emit();
    } else {
      this.store.clearSelectedConnection(this.connection);
    }
  }
  getConnectionPoint(connector) {
    return this.coordinatesService.getConnectionPointSignal((0,_helpers__WEBPACK_IMPORTED_MODULE_13__.createConnectorHash)(connector));
  }
}
_ConnectionComponent = ConnectionComponent;
_ConnectionComponent.ɵfac = function ConnectionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConnectionComponent)();
};
_ConnectionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _ConnectionComponent,
  selectors: [["df-connection"]],
  hostVars: 4,
  hostBindings: function ConnectionComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.backspace", function ConnectionComponent_keydown_backspace_HostBindingHandler($event) {
        return ctx.handleKeyboardEvent($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown.delete", function ConnectionComponent_keydown_delete_HostBindingHandler($event) {
        return ctx.handleKeyboardEvent($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("df-selected-node-input", ctx.selectedNodeInput())("df-selected-node-output", ctx.selectedNodeOutput());
    }
  },
  inputs: {
    connectionInput: [1, "connection", "connectionInput"]
  },
  outputs: {
    connectionDeleted: "connectionDeleted",
    connectionSelected: "connectionSelected"
  },
  decls: 9,
  vars: 16,
  consts: [["width", "1", "height", "1", "overflow", "visible", "preserveAspectRatio", "none", 1, "connection"], ["id", "df-arrowhead-arrowClosed", "refX", "0", "refY", "0", "orient", "auto-start-reverse", "markerUnits", "strokeWidth"], ["stroke-linecap", "round", "stroke-linejoin", "round", "fill", "context-stroke", "stroke", "context-stroke"], ["id", "df-arrowhead-arrow", "refX", "0", "refY", "0", "orient", "auto-start-reverse", "markerUnits", "strokeWidth"], ["stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none", "stroke", "context-stroke"], [1, "selectable-area", 3, "dfSelectableElement"], [1, "main-path"], ["width", "1", "height", "1", "overflow", "visible", 1, "label-container"], ["xmlns", "http://www.w3.org/1999/xhtml", 1, "label"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
  template: function ConnectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0)(1, "defs")(2, "marker", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "polyline", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "marker", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "polyline", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "path", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dfSelectableElement", function ConnectionComponent_Template_path_dfSelectableElement_6_listener($event) {
        return ctx.onSelectedChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ConnectionComponent_Conditional_8_Template, 3, 6, ":svg:foreignObject", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("optimize-speed", ctx.optimization());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx.arrowViewBox)("markerWidth", ctx.arrowMarkerWidth)("markerHeight", ctx.arrowMarkerHeight);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("points", ctx.arrowClosedPoints);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx.arrowViewBox)("markerWidth", ctx.arrowMarkerWidth)("markerHeight", ctx.arrowMarkerHeight);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("points", ctx.arrowPoints);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", ctx.path());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("df-selected", ctx.selected);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", ctx.path())("marker-end", ctx.markerEnd);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.connection.label ? 8 : -1);
    }
  },
  dependencies: [_taiga_ui_polymorpheus__WEBPACK_IMPORTED_MODULE_2__.PolymorpheusOutlet, _directives__WEBPACK_IMPORTED_MODULE_12__.SelectableElementDirective],
  styles: [".connection[_ngcontent-%COMP%] {\n  --df-connection-current-color: var(--df-connection-color);\n  --df-connection-current-hover-color: var(--df-connection-color-hover);\n  --df-connection-current-selectable-color: var(--df-connection-selectable-area-color);\n  position: absolute;\n  inset-block-start: 0;\n  inset-inline-start: 0;\n  inline-size: 1px;\n  block-size: 1px;\n  overflow: visible;\n  pointer-events: none;\n  shape-rendering: auto;\n}\n.connection.optimize-speed[_ngcontent-%COMP%] {\n  shape-rendering: optimizespeed;\n}\n.connection.optimize-speed[_ngcontent-%COMP%]   .main-path[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n}\n.connection[_ngcontent-%COMP%]   .main-path[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: var(--df-connection-stroke-width);\n  stroke: var(--df-connection-current-color);\n  pointer-events: none;\n}\n.connection[_ngcontent-%COMP%]   .main-path.df-selected[_ngcontent-%COMP%] {\n  stroke: var(--df-connection-color-active);\n}\n.connection[_ngcontent-%COMP%]   .selectable-area[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: var(--df-connection-selectable-area-stroke-width);\n  stroke: transparent;\n  pointer-events: stroke;\n  cursor: pointer;\n  transition: stroke 0.3s;\n}\n.connection[_ngcontent-%COMP%]   .selectable-area[_ngcontent-%COMP%]:hover {\n  stroke: var(--df-connection-current-selectable-color);\n}\n.connection[_ngcontent-%COMP%]   .selectable-area[_ngcontent-%COMP%]:hover    + .main-path[_ngcontent-%COMP%] {\n  stroke: var(--df-connection-current-hover-color);\n}\n.connection[_ngcontent-%COMP%]   .label-container[_ngcontent-%COMP%] {\n  inline-size: 1px;\n  block-size: 1px;\n  overflow: visible;\n}\n.connection[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  -webkit-user-select: none;\n          user-select: none;\n  pointer-events: all;\n  white-space: nowrap;\n  font: var(--df-connection-label-font, 0.625rem/1 sans-serif);\n  color: var(--df-connection-label-color, var(--df-connection-color));\n  background: var(--df-connection-label-background, #fff);\n  border: 0.0625rem solid var(--df-connection-label-border-color, #b1b1b7);\n  border-radius: var(--df-connection-label-border-radius, 0.125rem);\n  padding: var(--df-connection-label-padding, 0.125rem 0.25rem);\n}\n.df-selected-node-input[_nghost-%COMP%]   .connection[_ngcontent-%COMP%] {\n  --df-connection-current-color: var(--df-connection-selected-node-input-color, var(--df-connector-input-color, var(--df-connection-color)));\n  --df-connection-current-hover-color: var(--df-connection-selected-node-input-hover-color, var(--df-connector-input-color-hover, var(--df-connection-color-hover)));\n  --df-connection-current-selectable-color: var(--df-connection-selected-node-input-hover-color, var(--df-connector-input-color-hover, var(--df-connection-selectable-area-color)));\n}\n.df-selected-node-output[_nghost-%COMP%]   .connection[_ngcontent-%COMP%] {\n  --df-connection-current-color: var(--df-connection-selected-node-output-color, var(--df-connector-output-color, var(--df-connection-color)));\n  --df-connection-current-hover-color: var(--df-connection-selected-node-output-hover-color, var(--df-connector-output-color-hover, var(--df-connection-color-hover)));\n  --df-connection-current-selectable-color: var(--df-connection-selected-node-output-hover-color, var(--df-connector-output-color-hover, var(--df-connection-selectable-area-color)));\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLWRyYXctZmxvdy9zcmMvbGliL2NvbXBvbmVudHMvY29ubmVjdGlvbnMvY29ubmVjdGlvbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlEQUFBO0VBQ0EscUVBQUE7RUFDQSxvRkFBQTtFQUVBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUFKO0FBRUk7RUFDSSw4QkFBQTtBQUFSO0FBREk7RUFJUSx3QkFBQTtBQUFaO0FBbEJBO0VBdUJRLFVBQUE7RUFDQSwrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esb0JBQUE7QUFGUjtBQUlRO0VBQ0kseUNBQUE7QUFGWjtBQTNCQTtFQWtDUSxVQUFBO0VBQ0EsK0RBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBSlI7QUFNUTtFQUNJLHFEQUFBO0FBSlo7QUFNWTtFQUNJLGdEQUFBO0FBSmhCO0FBekNBO0VBbURRLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBUFI7QUE5Q0E7RUF5RFEsa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNERBQUE7RUFDQSxtRUFBQTtFQUNBLHVEQUFBO0VBQ0Esd0VBQUE7RUFDQSxpRUFBQTtFQUNBLDZEQUFBO0FBUlI7QUFZQTtFQUVRLDBJQUFBO0VBSUEsa0tBQUE7RUFJQSxpTEFBQTtBQWpCUjtBQXdCQTtFQUVRLDRJQUFBO0VBSUEsb0tBQUE7RUFJQSxtTEFBQTtBQTdCUiIsInNvdXJjZXNDb250ZW50IjpbIi5jb25uZWN0aW9uIHtcbiAgICAtLWRmLWNvbm5lY3Rpb24tY3VycmVudC1jb2xvcjogdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvcik7XG4gICAgLS1kZi1jb25uZWN0aW9uLWN1cnJlbnQtaG92ZXItY29sb3I6IHZhcigtLWRmLWNvbm5lY3Rpb24tY29sb3ItaG92ZXIpO1xuICAgIC0tZGYtY29ubmVjdGlvbi1jdXJyZW50LXNlbGVjdGFibGUtY29sb3I6IHZhcigtLWRmLWNvbm5lY3Rpb24tc2VsZWN0YWJsZS1hcmVhLWNvbG9yKTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldC1ibG9jay1zdGFydDogMDtcbiAgICBpbnNldC1pbmxpbmUtc3RhcnQ6IDA7XG4gICAgaW5saW5lLXNpemU6IDFweDtcbiAgICBibG9jay1zaXplOiAxcHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1xuXG4gICAgJi5vcHRpbWl6ZS1zcGVlZCB7XG4gICAgICAgIHNoYXBlLXJlbmRlcmluZzogb3B0aW1pemVzcGVlZDtcblxuICAgICAgICAubWFpbi1wYXRoIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5tYWluLXBhdGgge1xuICAgICAgICBmaWxsOiBub25lO1xuICAgICAgICBzdHJva2Utd2lkdGg6IHZhcigtLWRmLWNvbm5lY3Rpb24tc3Ryb2tlLXdpZHRoKTtcbiAgICAgICAgc3Ryb2tlOiB2YXIoLS1kZi1jb25uZWN0aW9uLWN1cnJlbnQtY29sb3IpO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICAgICAmLmRmLXNlbGVjdGVkIHtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvci1hY3RpdmUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNlbGVjdGFibGUtYXJlYSB7XG4gICAgICAgIGZpbGw6IG5vbmU7XG4gICAgICAgIHN0cm9rZS13aWR0aDogdmFyKC0tZGYtY29ubmVjdGlvbi1zZWxlY3RhYmxlLWFyZWEtc3Ryb2tlLXdpZHRoKTtcbiAgICAgICAgc3Ryb2tlOiB0cmFuc3BhcmVudDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IHN0cm9rZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBzdHJva2UgMC4zcztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyKC0tZGYtY29ubmVjdGlvbi1jdXJyZW50LXNlbGVjdGFibGUtY29sb3IpO1xuXG4gICAgICAgICAgICAmICsgLm1haW4tcGF0aCB7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1kZi1jb25uZWN0aW9uLWN1cnJlbnQtaG92ZXItY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmxhYmVsLWNvbnRhaW5lciB7XG4gICAgICAgIGlubGluZS1zaXplOiAxcHg7XG4gICAgICAgIGJsb2NrLXNpemU6IDFweDtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgfVxuXG4gICAgLmxhYmVsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQ6IHZhcigtLWRmLWNvbm5lY3Rpb24tbGFiZWwtZm9udCwgMC42MjVyZW0vMSBzYW5zLXNlcmlmKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWRmLWNvbm5lY3Rpb24tbGFiZWwtY29sb3IsIHZhcigtLWRmLWNvbm5lY3Rpb24tY29sb3IpKTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGYtY29ubmVjdGlvbi1sYWJlbC1iYWNrZ3JvdW5kLCAjZmZmKTtcbiAgICAgICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tZGYtY29ubmVjdGlvbi1sYWJlbC1ib3JkZXItY29sb3IsICNiMWIxYjcpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1kZi1jb25uZWN0aW9uLWxhYmVsLWJvcmRlci1yYWRpdXMsIDAuMTI1cmVtKTtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tZGYtY29ubmVjdGlvbi1sYWJlbC1wYWRkaW5nLCAwLjEyNXJlbSAwLjI1cmVtKTtcbiAgICB9XG59XG5cbjpob3N0KC5kZi1zZWxlY3RlZC1ub2RlLWlucHV0KSB7XG4gICAgLmNvbm5lY3Rpb24ge1xuICAgICAgICAtLWRmLWNvbm5lY3Rpb24tY3VycmVudC1jb2xvcjogdmFyKFxuICAgICAgICAgICAgLS1kZi1jb25uZWN0aW9uLXNlbGVjdGVkLW5vZGUtaW5wdXQtY29sb3IsXG4gICAgICAgICAgICB2YXIoLS1kZi1jb25uZWN0b3ItaW5wdXQtY29sb3IsIHZhcigtLWRmLWNvbm5lY3Rpb24tY29sb3IpKSxcbiAgICAgICAgKTtcbiAgICAgICAgLS1kZi1jb25uZWN0aW9uLWN1cnJlbnQtaG92ZXItY29sb3I6IHZhcihcbiAgICAgICAgICAgIC0tZGYtY29ubmVjdGlvbi1zZWxlY3RlZC1ub2RlLWlucHV0LWhvdmVyLWNvbG9yLFxuICAgICAgICAgICAgdmFyKC0tZGYtY29ubmVjdG9yLWlucHV0LWNvbG9yLWhvdmVyLCB2YXIoLS1kZi1jb25uZWN0aW9uLWNvbG9yLWhvdmVyKSksXG4gICAgICAgICk7XG4gICAgICAgIC0tZGYtY29ubmVjdGlvbi1jdXJyZW50LXNlbGVjdGFibGUtY29sb3I6IHZhcihcbiAgICAgICAgICAgIC0tZGYtY29ubmVjdGlvbi1zZWxlY3RlZC1ub2RlLWlucHV0LWhvdmVyLWNvbG9yLFxuICAgICAgICAgICAgdmFyKC0tZGYtY29ubmVjdG9yLWlucHV0LWNvbG9yLWhvdmVyLCB2YXIoLS1kZi1jb25uZWN0aW9uLXNlbGVjdGFibGUtYXJlYS1jb2xvcikpLFxuICAgICAgICApO1xuICAgIH1cbn1cblxuOmhvc3QoLmRmLXNlbGVjdGVkLW5vZGUtb3V0cHV0KSB7XG4gICAgLmNvbm5lY3Rpb24ge1xuICAgICAgICAtLWRmLWNvbm5lY3Rpb24tY3VycmVudC1jb2xvcjogdmFyKFxuICAgICAgICAgICAgLS1kZi1jb25uZWN0aW9uLXNlbGVjdGVkLW5vZGUtb3V0cHV0LWNvbG9yLFxuICAgICAgICAgICAgdmFyKC0tZGYtY29ubmVjdG9yLW91dHB1dC1jb2xvciwgdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvcikpLFxuICAgICAgICApO1xuICAgICAgICAtLWRmLWNvbm5lY3Rpb24tY3VycmVudC1ob3Zlci1jb2xvcjogdmFyKFxuICAgICAgICAgICAgLS1kZi1jb25uZWN0aW9uLXNlbGVjdGVkLW5vZGUtb3V0cHV0LWhvdmVyLWNvbG9yLFxuICAgICAgICAgICAgdmFyKC0tZGYtY29ubmVjdG9yLW91dHB1dC1jb2xvci1ob3ZlciwgdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvci1ob3ZlcikpLFxuICAgICAgICApO1xuICAgICAgICAtLWRmLWNvbm5lY3Rpb24tY3VycmVudC1zZWxlY3RhYmxlLWNvbG9yOiB2YXIoXG4gICAgICAgICAgICAtLWRmLWNvbm5lY3Rpb24tc2VsZWN0ZWQtbm9kZS1vdXRwdXQtaG92ZXItY29sb3IsXG4gICAgICAgICAgICB2YXIoLS1kZi1jb25uZWN0b3Itb3V0cHV0LWNvbG9yLWhvdmVyLCB2YXIoLS1kZi1jb25uZWN0aW9uLXNlbGVjdGFibGUtYXJlYS1jb2xvcikpLFxuICAgICAgICApO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ },

/***/ 39976
/*!*************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/connections.service.ts ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectionsService: () => (/* binding */ ConnectionsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 48065);
var _ConnectionsService;



class ConnectionsService {
  constructor() {
    this.connectionsSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
    this.usedConnectorsSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
    this.selectedNodeIdSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    this.connections = this.connectionsSignal.asReadonly();
    this.usedConnectors = this.usedConnectorsSignal.asReadonly();
    this.selectedNodeId = this.selectedNodeIdSignal.asReadonly();
    this.connections$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.toObservable)(this.connectionsSignal);
    this.usedConnectors$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.toObservable)(this.usedConnectorsSignal);
    this.selectedNodeId$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.toObservable)(this.selectedNodeIdSignal);
  }
  setConnections(connections) {
    const usedConnectors = this.collectUsedConnectors(connections);
    this.usedConnectorsSignal.set(usedConnectors);
    this.connectionsSignal.set([...connections]);
  }
  addConnections(connections) {
    const newConnections = connections.filter(newConnection => !this.connectionsSignal().some(existingConnection => this.areConnectionsEqual(existingConnection, newConnection)));
    if (newConnections.length === 0) {
      return;
    }
    const updatedUsedConnectors = [...this.usedConnectorsSignal()];
    newConnections.forEach(connection => {
      if (!updatedUsedConnectors.includes(connection.source.connectorId)) {
        updatedUsedConnectors.push(connection.source.connectorId);
      }
      if (!updatedUsedConnectors.includes(connection.target.connectorId)) {
        updatedUsedConnectors.push(connection.target.connectorId);
      }
    });
    this.usedConnectorsSignal.set(updatedUsedConnectors);
    this.connectionsSignal.set([...this.connectionsSignal(), ...newConnections]);
  }
  removeConnection(connectionToRemove) {
    const filteredConnections = this.connectionsSignal().filter(existingConnection => !this.areConnectionsEqual(existingConnection, connectionToRemove));
    const usedConnectors = this.usedConnectorsSignal().filter(connectorId => filteredConnections.some(connection => connection.source.connectorId === connectorId || connection.target.connectorId === connectorId));
    this.usedConnectorsSignal.set(usedConnectors);
    this.connectionsSignal.set(filteredConnections);
  }
  removeConnectionsByNodeId(id) {
    const connectionsToKeep = this.connectionsSignal().filter(connection => connection.source.nodeId !== id && connection.target.nodeId !== id);
    const usedConnectors = this.usedConnectorsSignal().filter(connectorId => connectionsToKeep.some(connection => connection.source.connectorId === connectorId || connection.target.connectorId === connectorId));
    this.usedConnectorsSignal.set(usedConnectors);
    this.connectionsSignal.set(connectionsToKeep);
  }
  removeConnectionsByConnectorId(connectorIdToRemove) {
    if (!connectorIdToRemove) {
      return;
    }
    const connectionsToKeep = this.connectionsSignal().filter(connection => connection.source.connectorId !== connectorIdToRemove && connection.target.connectorId !== connectorIdToRemove);
    const usedConnectors = this.usedConnectorsSignal().filter(connectorId => connectorId !== connectorIdToRemove);
    this.usedConnectorsSignal.set(usedConnectors);
    this.connectionsSignal.set(connectionsToKeep);
  }
  highlightConnectionsForNode(nodeId) {
    if (this.selectedNodeIdSignal() === nodeId) {
      return;
    }
    this.selectedNodeIdSignal.set(nodeId);
  }
  areConnectionsEqual(connection1, connection2) {
    return connection1.source.nodeId === connection2.source.nodeId && connection1.source.connectorType === connection2.source.connectorType && connection1.source.connectorId === connection2.source.connectorId && connection1.target.nodeId === connection2.target.nodeId && connection1.target.connectorType === connection2.target.connectorType && connection1.target.connectorId === connection2.target.connectorId;
  }
  collectUsedConnectors(connections) {
    const connectorIds = new Set();
    connections.forEach(connection => {
      connectorIds.add(connection.source.connectorId);
      connectorIds.add(connection.target.connectorId);
    });
    return Array.from(connectorIds);
  }
}
_ConnectionsService = ConnectionsService;
_ConnectionsService.ɵfac = function ConnectionsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConnectionsService)();
};
_ConnectionsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _ConnectionsService,
  factory: _ConnectionsService.ɵfac
});

/***/ },

/***/ 71848
/*!*************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/draft-connection/draft-connection.component.ts ***!
  \*************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DraftConnectionComponent: () => (/* binding */ DraftConnectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 48065);
/* harmony import */ var _ng_draw_flow_configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ng-draw-flow.configs */ 90167);
/* harmony import */ var _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ng-draw-flow.interfaces */ 1954);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ 77846);
/* harmony import */ var _draft_connection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./draft-connection.service */ 27232);
var _DraftConnectionComponent;







class DraftConnectionComponent {
  constructor() {
    this.draftConnectionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_draft_connection_service__WEBPACK_IMPORTED_MODULE_5__.DraftConnectionService);
    this.options = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ng_draw_flow_configs__WEBPACK_IMPORTED_MODULE_2__.DRAW_FLOW_OPTIONS);
    this.connectionCreated = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.outputFromObservable)(this.draftConnectionService.connectionCreated$);
    this.pathData = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const sourcePoint = this.draftConnectionService.source();
      const targetPoint = this.draftConnectionService.target();
      const curvature = this.options.connection.curvature;
      switch (this.options.connection.type) {
        case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_3__.DfConnectionType.SmoothStep:
          {
            const [path] = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.createSmoothStepPath)(sourcePoint, targetPoint, curvature);
            return path;
          }
        case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_3__.DfConnectionType.Bezier:
        default:
          {
            const [path] = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.createBezierPath)(sourcePoint, targetPoint, curvature);
            return path;
          }
      }
    });
  }
}
_DraftConnectionComponent = DraftConnectionComponent;
_DraftConnectionComponent.ɵfac = function DraftConnectionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DraftConnectionComponent)();
};
_DraftConnectionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _DraftConnectionComponent,
  selectors: [["df-draft-connection"]],
  outputs: {
    connectionCreated: "connectionCreated"
  },
  decls: 2,
  vars: 1,
  consts: [["width", "1", "height", "1", "overflow", "visible", "preserveAspectRatio", "none", 1, "connection", "draft-connection"], [1, "main-path"]],
  template: function DraftConnectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", ctx.pathData());
    }
  },
  styles: [".connection[_ngcontent-%COMP%] {\n  --df-connection-current-color: var(--df-connection-color);\n  --df-connection-current-hover-color: var(--df-connection-color-hover);\n  --df-connection-current-selectable-color: var(--df-connection-selectable-area-color);\n  position: absolute;\n  inset-block-start: 0;\n  inset-inline-start: 0;\n  inline-size: 1px;\n  block-size: 1px;\n  overflow: visible;\n  pointer-events: none;\n  shape-rendering: auto;\n}\n.connection.optimize-speed[_ngcontent-%COMP%] {\n  shape-rendering: optimizespeed;\n}\n.connection.optimize-speed[_ngcontent-%COMP%]   .main-path[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n}\n.connection[_ngcontent-%COMP%]   .main-path[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: var(--df-connection-stroke-width);\n  stroke: var(--df-connection-current-color);\n  pointer-events: none;\n}\n.connection[_ngcontent-%COMP%]   .main-path.df-selected[_ngcontent-%COMP%] {\n  stroke: var(--df-connection-color-active);\n}\n.connection[_ngcontent-%COMP%]   .selectable-area[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: var(--df-connection-selectable-area-stroke-width);\n  stroke: transparent;\n  pointer-events: stroke;\n  cursor: pointer;\n  transition: stroke 0.3s;\n}\n.connection[_ngcontent-%COMP%]   .selectable-area[_ngcontent-%COMP%]:hover {\n  stroke: var(--df-connection-current-selectable-color);\n}\n.connection[_ngcontent-%COMP%]   .selectable-area[_ngcontent-%COMP%]:hover    + .main-path[_ngcontent-%COMP%] {\n  stroke: var(--df-connection-current-hover-color);\n}\n.connection[_ngcontent-%COMP%]   .label-container[_ngcontent-%COMP%] {\n  inline-size: 1px;\n  block-size: 1px;\n  overflow: visible;\n}\n.connection[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  -webkit-user-select: none;\n          user-select: none;\n  pointer-events: all;\n  white-space: nowrap;\n  font: var(--df-connection-label-font, 0.625rem/1 sans-serif);\n  color: var(--df-connection-label-color, var(--df-connection-color));\n  background: var(--df-connection-label-background, #fff);\n  border: 0.0625rem solid var(--df-connection-label-border-color, #b1b1b7);\n  border-radius: var(--df-connection-label-border-radius, 0.125rem);\n  padding: var(--df-connection-label-padding, 0.125rem 0.25rem);\n}\n.df-selected-node-input[_nghost-%COMP%]   .connection[_ngcontent-%COMP%] {\n  --df-connection-current-color: var(--df-connection-selected-node-input-color, var(--df-connector-input-color, var(--df-connection-color)));\n  --df-connection-current-hover-color: var(--df-connection-selected-node-input-hover-color, var(--df-connector-input-color-hover, var(--df-connection-color-hover)));\n  --df-connection-current-selectable-color: var(--df-connection-selected-node-input-hover-color, var(--df-connector-input-color-hover, var(--df-connection-selectable-area-color)));\n}\n.df-selected-node-output[_nghost-%COMP%]   .connection[_ngcontent-%COMP%] {\n  --df-connection-current-color: var(--df-connection-selected-node-output-color, var(--df-connector-output-color, var(--df-connection-color)));\n  --df-connection-current-hover-color: var(--df-connection-selected-node-output-hover-color, var(--df-connector-output-color-hover, var(--df-connection-color-hover)));\n  --df-connection-current-selectable-color: var(--df-connection-selected-node-output-hover-color, var(--df-connector-output-color-hover, var(--df-connection-selectable-area-color)));\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLWRyYXctZmxvdy9zcmMvbGliL2NvbXBvbmVudHMvY29ubmVjdGlvbnMvY29ubmVjdGlvbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlEQUFBO0VBQ0EscUVBQUE7RUFDQSxvRkFBQTtFQUVBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUFKO0FBRUk7RUFDSSw4QkFBQTtBQUFSO0FBREk7RUFJUSx3QkFBQTtBQUFaO0FBbEJBO0VBdUJRLFVBQUE7RUFDQSwrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esb0JBQUE7QUFGUjtBQUlRO0VBQ0kseUNBQUE7QUFGWjtBQTNCQTtFQWtDUSxVQUFBO0VBQ0EsK0RBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBSlI7QUFNUTtFQUNJLHFEQUFBO0FBSlo7QUFNWTtFQUNJLGdEQUFBO0FBSmhCO0FBekNBO0VBbURRLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBUFI7QUE5Q0E7RUF5RFEsa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNERBQUE7RUFDQSxtRUFBQTtFQUNBLHVEQUFBO0VBQ0Esd0VBQUE7RUFDQSxpRUFBQTtFQUNBLDZEQUFBO0FBUlI7QUFZQTtFQUVRLDBJQUFBO0VBSUEsa0tBQUE7RUFJQSxpTEFBQTtBQWpCUjtBQXdCQTtFQUVRLDRJQUFBO0VBSUEsb0tBQUE7RUFJQSxtTEFBQTtBQTdCUiIsInNvdXJjZXNDb250ZW50IjpbIi5jb25uZWN0aW9uIHtcbiAgICAtLWRmLWNvbm5lY3Rpb24tY3VycmVudC1jb2xvcjogdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvcik7XG4gICAgLS1kZi1jb25uZWN0aW9uLWN1cnJlbnQtaG92ZXItY29sb3I6IHZhcigtLWRmLWNvbm5lY3Rpb24tY29sb3ItaG92ZXIpO1xuICAgIC0tZGYtY29ubmVjdGlvbi1jdXJyZW50LXNlbGVjdGFibGUtY29sb3I6IHZhcigtLWRmLWNvbm5lY3Rpb24tc2VsZWN0YWJsZS1hcmVhLWNvbG9yKTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldC1ibG9jay1zdGFydDogMDtcbiAgICBpbnNldC1pbmxpbmUtc3RhcnQ6IDA7XG4gICAgaW5saW5lLXNpemU6IDFweDtcbiAgICBibG9jay1zaXplOiAxcHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1xuXG4gICAgJi5vcHRpbWl6ZS1zcGVlZCB7XG4gICAgICAgIHNoYXBlLXJlbmRlcmluZzogb3B0aW1pemVzcGVlZDtcblxuICAgICAgICAubWFpbi1wYXRoIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5tYWluLXBhdGgge1xuICAgICAgICBmaWxsOiBub25lO1xuICAgICAgICBzdHJva2Utd2lkdGg6IHZhcigtLWRmLWNvbm5lY3Rpb24tc3Ryb2tlLXdpZHRoKTtcbiAgICAgICAgc3Ryb2tlOiB2YXIoLS1kZi1jb25uZWN0aW9uLWN1cnJlbnQtY29sb3IpO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICAgICAmLmRmLXNlbGVjdGVkIHtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvci1hY3RpdmUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNlbGVjdGFibGUtYXJlYSB7XG4gICAgICAgIGZpbGw6IG5vbmU7XG4gICAgICAgIHN0cm9rZS13aWR0aDogdmFyKC0tZGYtY29ubmVjdGlvbi1zZWxlY3RhYmxlLWFyZWEtc3Ryb2tlLXdpZHRoKTtcbiAgICAgICAgc3Ryb2tlOiB0cmFuc3BhcmVudDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IHN0cm9rZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBzdHJva2UgMC4zcztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyKC0tZGYtY29ubmVjdGlvbi1jdXJyZW50LXNlbGVjdGFibGUtY29sb3IpO1xuXG4gICAgICAgICAgICAmICsgLm1haW4tcGF0aCB7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1kZi1jb25uZWN0aW9uLWN1cnJlbnQtaG92ZXItY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmxhYmVsLWNvbnRhaW5lciB7XG4gICAgICAgIGlubGluZS1zaXplOiAxcHg7XG4gICAgICAgIGJsb2NrLXNpemU6IDFweDtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgfVxuXG4gICAgLmxhYmVsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQ6IHZhcigtLWRmLWNvbm5lY3Rpb24tbGFiZWwtZm9udCwgMC42MjVyZW0vMSBzYW5zLXNlcmlmKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWRmLWNvbm5lY3Rpb24tbGFiZWwtY29sb3IsIHZhcigtLWRmLWNvbm5lY3Rpb24tY29sb3IpKTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGYtY29ubmVjdGlvbi1sYWJlbC1iYWNrZ3JvdW5kLCAjZmZmKTtcbiAgICAgICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tZGYtY29ubmVjdGlvbi1sYWJlbC1ib3JkZXItY29sb3IsICNiMWIxYjcpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1kZi1jb25uZWN0aW9uLWxhYmVsLWJvcmRlci1yYWRpdXMsIDAuMTI1cmVtKTtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tZGYtY29ubmVjdGlvbi1sYWJlbC1wYWRkaW5nLCAwLjEyNXJlbSAwLjI1cmVtKTtcbiAgICB9XG59XG5cbjpob3N0KC5kZi1zZWxlY3RlZC1ub2RlLWlucHV0KSB7XG4gICAgLmNvbm5lY3Rpb24ge1xuICAgICAgICAtLWRmLWNvbm5lY3Rpb24tY3VycmVudC1jb2xvcjogdmFyKFxuICAgICAgICAgICAgLS1kZi1jb25uZWN0aW9uLXNlbGVjdGVkLW5vZGUtaW5wdXQtY29sb3IsXG4gICAgICAgICAgICB2YXIoLS1kZi1jb25uZWN0b3ItaW5wdXQtY29sb3IsIHZhcigtLWRmLWNvbm5lY3Rpb24tY29sb3IpKSxcbiAgICAgICAgKTtcbiAgICAgICAgLS1kZi1jb25uZWN0aW9uLWN1cnJlbnQtaG92ZXItY29sb3I6IHZhcihcbiAgICAgICAgICAgIC0tZGYtY29ubmVjdGlvbi1zZWxlY3RlZC1ub2RlLWlucHV0LWhvdmVyLWNvbG9yLFxuICAgICAgICAgICAgdmFyKC0tZGYtY29ubmVjdG9yLWlucHV0LWNvbG9yLWhvdmVyLCB2YXIoLS1kZi1jb25uZWN0aW9uLWNvbG9yLWhvdmVyKSksXG4gICAgICAgICk7XG4gICAgICAgIC0tZGYtY29ubmVjdGlvbi1jdXJyZW50LXNlbGVjdGFibGUtY29sb3I6IHZhcihcbiAgICAgICAgICAgIC0tZGYtY29ubmVjdGlvbi1zZWxlY3RlZC1ub2RlLWlucHV0LWhvdmVyLWNvbG9yLFxuICAgICAgICAgICAgdmFyKC0tZGYtY29ubmVjdG9yLWlucHV0LWNvbG9yLWhvdmVyLCB2YXIoLS1kZi1jb25uZWN0aW9uLXNlbGVjdGFibGUtYXJlYS1jb2xvcikpLFxuICAgICAgICApO1xuICAgIH1cbn1cblxuOmhvc3QoLmRmLXNlbGVjdGVkLW5vZGUtb3V0cHV0KSB7XG4gICAgLmNvbm5lY3Rpb24ge1xuICAgICAgICAtLWRmLWNvbm5lY3Rpb24tY3VycmVudC1jb2xvcjogdmFyKFxuICAgICAgICAgICAgLS1kZi1jb25uZWN0aW9uLXNlbGVjdGVkLW5vZGUtb3V0cHV0LWNvbG9yLFxuICAgICAgICAgICAgdmFyKC0tZGYtY29ubmVjdG9yLW91dHB1dC1jb2xvciwgdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvcikpLFxuICAgICAgICApO1xuICAgICAgICAtLWRmLWNvbm5lY3Rpb24tY3VycmVudC1ob3Zlci1jb2xvcjogdmFyKFxuICAgICAgICAgICAgLS1kZi1jb25uZWN0aW9uLXNlbGVjdGVkLW5vZGUtb3V0cHV0LWhvdmVyLWNvbG9yLFxuICAgICAgICAgICAgdmFyKC0tZGYtY29ubmVjdG9yLW91dHB1dC1jb2xvci1ob3ZlciwgdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvci1ob3ZlcikpLFxuICAgICAgICApO1xuICAgICAgICAtLWRmLWNvbm5lY3Rpb24tY3VycmVudC1zZWxlY3RhYmxlLWNvbG9yOiB2YXIoXG4gICAgICAgICAgICAtLWRmLWNvbm5lY3Rpb24tc2VsZWN0ZWQtbm9kZS1vdXRwdXQtaG92ZXItY29sb3IsXG4gICAgICAgICAgICB2YXIoLS1kZi1jb25uZWN0b3Itb3V0cHV0LWNvbG9yLWhvdmVyLCB2YXIoLS1kZi1jb25uZWN0aW9uLXNlbGVjdGFibGUtYXJlYS1jb2xvcikpLFxuICAgICAgICApO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ },

/***/ 27232
/*!***********************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/draft-connection/draft-connection.service.ts ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DraftConnectionService: () => (/* binding */ DraftConnectionService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 54247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 48065);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 63150);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 97757);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 47066);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 61856);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 24406);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 39721);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 23246);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 42393);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 21082);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 65213);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 61969);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../consts */ 82110);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../helpers */ 50315);
/* harmony import */ var _ng_draw_flow_configs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../ng-draw-flow.configs */ 90167);
/* harmony import */ var _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../ng-draw-flow.interfaces */ 1954);
/* harmony import */ var _services_coordinates_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../services/coordinates.service */ 65092);
/* harmony import */ var _pan_zoom_pan_zoom_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../pan-zoom/pan-zoom.service */ 96592);
/* harmony import */ var _utils_get_coonector_dataset_util__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/get-coonector-dataset.util */ 30134);
var _DraftConnectionService;












class DraftConnectionService {
  constructor() {
    this.document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    this.panZoomService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_pan_zoom_pan_zoom_service__WEBPACK_IMPORTED_MODULE_19__.PanZoomService);
    this.coordinatesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_coordinates_service__WEBPACK_IMPORTED_MODULE_18__.CoordinatesService);
    this.options = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_ng_draw_flow_configs__WEBPACK_IMPORTED_MODULE_16__.DRAW_FLOW_OPTIONS);
    this.activeConnectorSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null);
    this.lastConnectionCreatedSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null);
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.source = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)({
      point: _consts__WEBPACK_IMPORTED_MODULE_14__.INITIAL_COORDINATES,
      position: _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_17__.DfConnectorPosition.Right
    });
    this.target = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)({
      point: _consts__WEBPACK_IMPORTED_MODULE_14__.INITIAL_COORDINATES,
      position: _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_17__.DfConnectorPosition.Left
    });
    this.isConnectionCreating = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false);
    this.isConnectionCreating$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.toObservable)(this.isConnectionCreating);
    this.activeConnector = this.activeConnectorSignal.asReadonly();
    this.lastConnectionCreated = this.lastConnectionCreatedSignal.asReadonly();
    this.connectionCreated$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.connection$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.connectionSubscription();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  connectionSubscription() {
    this.connection$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(() => this.options.options.connectionsCreatable), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.tap)(connectorData => this.onDragStart(connectorData)), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(this.document, 'pointermove')), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(() => this.isConnectionCreating()), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.observeOn)(rxjs__WEBPACK_IMPORTED_MODULE_4__.animationFrameScheduler), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.pairwise)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(([previousEvent, currentEvent]) => this.onDragMove(previousEvent, currentEvent)), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(this.document, 'pointerup').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(() => this.isConnectionCreating()), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.tap)(event => this.onDragEnd(event)))), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.repeat)()).subscribe();
  }
  onDragStart(connector) {
    if (!this.options.options.connectionsCreatable) {
      return;
    }
    this.sourceConnector = connector;
    this.activeConnectorSignal.set(connector);
    this.isConnectionCreating.set(true);
    const sourceId = (0,_helpers__WEBPACK_IMPORTED_MODULE_15__.createConnectorHash)(connector);
    const sourcePoint = this.coordinatesService.getConnectionPointSignal(sourceId)();
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
    } = (0,_helpers__WEBPACK_IMPORTED_MODULE_15__.dfDistanceBetweenPoints)(previousEvent, currentEvent);
    const {
      zoom
    } = this.panZoomService.snapshot();
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
      case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_17__.DfConnectorPosition.Bottom:
        return _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_17__.DfConnectorPosition.Top;
      case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_17__.DfConnectorPosition.Left:
        return _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_17__.DfConnectorPosition.Right;
      case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_17__.DfConnectorPosition.Right:
        return _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_17__.DfConnectorPosition.Left;
      case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_17__.DfConnectorPosition.Top:
        return _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_17__.DfConnectorPosition.Bottom;
      default:
        return null;
    }
  }
  onDragEnd(event) {
    const target = event.target;
    const targetConnector = target ? (0,_utils_get_coonector_dataset_util__WEBPACK_IMPORTED_MODULE_20__.getConnectorDataset)(target) : null;
    if (targetConnector?.connectorType === _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_17__.DfConnectionPoint.Input) {
      const connection = {
        source: this.sourceConnector,
        target: targetConnector,
        label: this.sourceConnector.connectionLabel
      };
      this.lastConnectionCreatedSignal.set(connection);
      this.connectionCreated$.next(connection);
    }
    this.resetConnectors();
    this.isConnectionCreating.set(false);
  }
  resetConnectors() {
    this.activeConnectorSignal.set(null);
    this.source.set({
      point: _consts__WEBPACK_IMPORTED_MODULE_14__.INITIAL_COORDINATES,
      position: _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_17__.DfConnectorPosition.Right
    });
    this.target.set({
      point: _consts__WEBPACK_IMPORTED_MODULE_14__.INITIAL_COORDINATES,
      position: null
    });
  }
}
_DraftConnectionService = DraftConnectionService;
_DraftConnectionService.ɵfac = function DraftConnectionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DraftConnectionService)();
};
_DraftConnectionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _DraftConnectionService,
  factory: _DraftConnectionService.ɵfac
});

/***/ },

/***/ 89176
/*!***********************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/calculate-distance.util.ts ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateDistance: () => (/* binding */ calculateDistance)
/* harmony export */ });
const calculateDistance = (source, target) => Math.hypot(target.x - source.x, target.y - source.y);

/***/ },

/***/ 39253
/*!******************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/connection-paths/bezier/bezier.ts ***!
  \******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBezierPath: () => (/* binding */ createBezierPath)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ 34890);

function createBezierPath(startConnector, endConnector, curvature = 0.25) {
  const sourceControlPoint = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getControlWithCurvature)(startConnector, endConnector.point, curvature);
  const targetControlPoint = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getControlWithCurvature)(endConnector, startConnector.point, curvature);
  const [labelX, labelY, offsetX, offsetY] = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getBezierEdgeCenter)({
    source: startConnector.point,
    target: endConnector.point,
    sourceControlPoint,
    targetControlPoint
  });
  return [`M${startConnector.point.x},${startConnector.point.y} C${sourceControlPoint.x},${sourceControlPoint.y} ${targetControlPoint.x},${targetControlPoint.y} ${endConnector.point.x},${endConnector.point.y}`, labelX, labelY, offsetX, offsetY];
}

/***/ },

/***/ 46595
/*!**************************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/connection-paths/bezier/helpers/bezier-edge-center.ts ***!
  \**************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBezierEdgeCenter: () => (/* binding */ getBezierEdgeCenter)
/* harmony export */ });
function getBezierEdgeCenter({
  source,
  target,
  sourceControlPoint,
  targetControlPoint
}) {
  const centerX = source.x * 0.125 + sourceControlPoint.x * 0.375 + targetControlPoint.x * 0.375 + target.x * 0.125;
  const centerY = source.y * 0.125 + sourceControlPoint.y * 0.375 + targetControlPoint.y * 0.375 + target.y * 0.125;
  const offsetX = Math.abs(centerX - source.x);
  const offsetY = Math.abs(centerY - source.y);
  return [centerX, centerY, offsetX, offsetY];
}

/***/ },

/***/ 13015
/*!**********************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/connection-paths/bezier/helpers/control-offset.ts ***!
  \**********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateControlOffset: () => (/* binding */ calculateControlOffset)
/* harmony export */ });
function calculateControlOffset(distance, curvature) {
  if (distance >= 0) {
    return 0.5 * distance;
  }
  return curvature * 25 * Math.sqrt(-distance);
}

/***/ },

/***/ 73476
/*!******************************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/connection-paths/bezier/helpers/control-with-curvature.ts ***!
  \******************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getControlWithCurvature: () => (/* binding */ getControlWithCurvature)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../ng-draw-flow.interfaces */ 1954);
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../point */ 77292);
/* harmony import */ var _control_offset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control-offset */ 13015);



function getControlWithCurvature(sourceConnector, target, curvature) {
  switch (sourceConnector.position) {
    case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Bottom:
      return (0,_point__WEBPACK_IMPORTED_MODULE_1__.point)(sourceConnector.point.x, sourceConnector.point.y + (0,_control_offset__WEBPACK_IMPORTED_MODULE_2__.calculateControlOffset)(target.y - sourceConnector.point.y, curvature));
    case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Left:
      return (0,_point__WEBPACK_IMPORTED_MODULE_1__.point)(sourceConnector.point.x - (0,_control_offset__WEBPACK_IMPORTED_MODULE_2__.calculateControlOffset)(sourceConnector.point.x - target.x, curvature), sourceConnector.point.y);
    case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Right:
      return (0,_point__WEBPACK_IMPORTED_MODULE_1__.point)(sourceConnector.point.x + (0,_control_offset__WEBPACK_IMPORTED_MODULE_2__.calculateControlOffset)(target.x - sourceConnector.point.x, curvature), sourceConnector.point.y);
    case _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Top:
      return (0,_point__WEBPACK_IMPORTED_MODULE_1__.point)(sourceConnector.point.x, sourceConnector.point.y - (0,_control_offset__WEBPACK_IMPORTED_MODULE_2__.calculateControlOffset)(sourceConnector.point.y - target.y, curvature));
  }
}

/***/ },

/***/ 34890
/*!*************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/connection-paths/bezier/helpers/index.ts ***!
  \*************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateControlOffset: () => (/* reexport safe */ _control_offset__WEBPACK_IMPORTED_MODULE_1__.calculateControlOffset),
/* harmony export */   getBezierEdgeCenter: () => (/* reexport safe */ _bezier_edge_center__WEBPACK_IMPORTED_MODULE_0__.getBezierEdgeCenter),
/* harmony export */   getControlWithCurvature: () => (/* reexport safe */ _control_with_curvature__WEBPACK_IMPORTED_MODULE_2__.getControlWithCurvature)
/* harmony export */ });
/* harmony import */ var _bezier_edge_center__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bezier-edge-center */ 46595);
/* harmony import */ var _control_offset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control-offset */ 13015);
/* harmony import */ var _control_with_curvature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control-with-curvature */ 73476);




/***/ },

/***/ 48548
/*!*****************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/connection-paths/bezier/index.ts ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBezierPath: () => (/* reexport safe */ _bezier__WEBPACK_IMPORTED_MODULE_0__.createBezierPath)
/* harmony export */ });
/* harmony import */ var _bezier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bezier */ 39253);


/***/ },

/***/ 51371
/*!**********************************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/connection-paths/smooth-step/helpers/get-primary-direction.ts ***!
  \**********************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPrimaryDirection: () => (/* binding */ getPrimaryDirection)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../ng-draw-flow.interfaces */ 1954);

/**
 * Returns a unit vector (±1 on one axis, 0 on the other)
 * representing the first axial step of the edge immediately
 * after it leaves the source connector.
 *
 * ─ If the connector is **Left** or **Right**, movement is along **X**.
 * ─ Otherwise (Top / Bottom), movement is along **Y**.
 *
 * @param source      coordinates of the source connector
 * @param sourcePos   side of the source node (Left | Right | Top | Bottom)
 * @param target      coordinates of the target connector (used for direction)
 */
function getPrimaryDirection(source, sourcePos, target) {
  // Horizontal connectors → move along X
  if (sourcePos === _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Left || sourcePos === _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Right) {
    return source.x < target.x ? {
      x: 1,
      y: 0
    } : {
      x: -1,
      y: 0
    };
  }
  // Vertical connectors → move along Y
  return source.y < target.y ? {
    x: 0,
    y: 1
  } : {
    x: 0,
    y: -1
  };
}

/***/ },

/***/ 50335
/*!************************************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/connection-paths/smooth-step/helpers/smooth-step-edge-center.ts ***!
  \************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSmoothStepEdgeCenter: () => (/* binding */ getSmoothStepEdgeCenter)
/* harmony export */ });
/**
 * Computes the geometric center between two endpoints **and**
 * returns the half-length (offset) on each axis.
 *
 * Tuple structure:
 *   [centerX, centerY, offsetX, offsetY]
 *
 * These values are later used for label placement and
 * “long-edge” detection in the renderer.
 */
function getSmoothStepEdgeCenter({
  source,
  target
}) {
  // Half of the absolute distance on each axis (always positive)
  const offsetX = Math.abs(source.x - target.x) / 2;
  const offsetY = Math.abs(source.y - target.y) / 2;
  // Add the offset to the smaller coordinate on each axis
  const centerX = target.x < source.x ? target.x + offsetX : source.x + offsetX;
  const centerY = target.y < source.y ? target.y + offsetY : source.y + offsetY;
  return [centerX, centerY, offsetX, offsetY];
}

/***/ },

/***/ 80602
/*!**********************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/connection-paths/smooth-step/index.ts ***!
  \**********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSmoothStepPath: () => (/* reexport safe */ _smooth_step__WEBPACK_IMPORTED_MODULE_0__.createSmoothStepPath)
/* harmony export */ });
/* harmony import */ var _smooth_step__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smooth-step */ 29453);


/***/ },

/***/ 96508
/*!********************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/connection-paths/smooth-step/path-parts/bend.ts ***!
  \********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bend: () => (/* binding */ bend)
/* harmony export */ });
/* harmony import */ var _calculate_distance_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../calculate-distance.util */ 89176);

/**
 * Builds an SVG path segment describing a rounded bend that smoothly joins
 * the straight legs coming **into** and **out of** the waypoint **cornerPoint**.
 *
 * @param startPoint  point before the bend
 * @param cornerPoint the actual “corner” point
 * @param endPoint    point after the bend
 * @param maxRadius   upper bound for the smoothing radius
 */
function bend(startPoint, cornerPoint, endPoint, maxRadius) {
  // Choose the largest radius that “fits” both legs and does not exceed maxRadius
  const bendRadius = Math.min((0,_calculate_distance_util__WEBPACK_IMPORTED_MODULE_0__.calculateDistance)(startPoint, cornerPoint) / 2, (0,_calculate_distance_util__WEBPACK_IMPORTED_MODULE_0__.calculateDistance)(cornerPoint, endPoint) / 2, maxRadius);
  // If all three points lie on the same straight line, no rounding is needed
  const isColinear = startPoint.x === cornerPoint.x && cornerPoint.x === endPoint.x || startPoint.y === cornerPoint.y && cornerPoint.y === endPoint.y;
  if (isColinear) {
    return `L${cornerPoint.x} ${cornerPoint.y}`; // simple straight-line segment
  }
  // Determine whether we are entering the corner horizontally */
  const enteringHorizontally = startPoint.y === cornerPoint.y;
  // horizontal → vertical turn
  if (enteringHorizontally) {
    const xDir = startPoint.x < endPoint.x ? -1 : 1; // step “back” along X
    const yDir = startPoint.y < endPoint.y ? 1 : -1; // and “forward” along Y
    return `L ${cornerPoint.x + bendRadius * xDir},${cornerPoint.y}` +
    // straight segment
    `Q ${cornerPoint.x},${cornerPoint.y} ${cornerPoint.x},${cornerPoint.y + bendRadius * yDir}` // quarter-circle
    ;
  }
  // vertical → horizontal turn
  const xDir = startPoint.x < endPoint.x ? 1 : -1; // “forward” along X
  const yDir = startPoint.y < endPoint.y ? -1 : 1; // step “back” along Y
  return `L ${cornerPoint.x},${cornerPoint.y + bendRadius * yDir}` +
  // straight segment
  `Q ${cornerPoint.x},${cornerPoint.y} ${cornerPoint.x + bendRadius * xDir},${cornerPoint.y}` // quarter-circle
  ;
}

/***/ },

/***/ 69387
/*!*************************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/connection-paths/smooth-step/path-parts/waypoints.ts ***!
  \*************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeWaypoints: () => (/* binding */ computeWaypoints)
/* harmony export */ });
/* harmony import */ var _helpers_get_primary_direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/get-primary-direction */ 51371);
/* harmony import */ var _helpers_smooth_step_edge_center__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/smooth-step-edge-center */ 50335);
/* harmony import */ var _smooth_step_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../smooth-step.consts */ 15939);



/**
 * Returns all points that form the polyline **before** the bezier smoothing is
 * applied. Additionally returns the center of the longest straight segment –
 * handy for label placement.
 */
function computeWaypoints(pointsParams) {
  /**
   * Unpack input, apply fall-backs
   */
  const {
    source,
    sourcePos,
    target,
    targetPos,
    offset = _smooth_step_consts__WEBPACK_IMPORTED_MODULE_2__.MIN_SEGMENT_LENGTH,
    centerOverride = {}
  } = pointsParams;
  /**
   * Compute the unit directions for each connector
   */
  const sourceDir = _smooth_step_consts__WEBPACK_IMPORTED_MODULE_2__.CONNECTOR_DIRECTIONS[sourcePos];
  const targetDir = _smooth_step_consts__WEBPACK_IMPORTED_MODULE_2__.CONNECTOR_DIRECTIONS[targetPos];
  /**
   * Create “gap points” that leave a small offset straight out
   * of each connector so the edge never starts/ends inside a node
   */
  const sourceGap = {
    x: source.x + sourceDir.x * offset,
    y: source.y + sourceDir.y * offset
  };
  const targetGap = {
    x: target.x + targetDir.x * offset,
    y: target.y + targetDir.y * offset
  };
  /**
   * Decide whether the first long segment should run horizontally
   * or vertically.  This is the “primary axis” chosen so that we
   * head *towards* the target rather than backwards.
   */
  const firstStep = (0,_helpers_get_primary_direction__WEBPACK_IMPORTED_MODULE_0__.getPrimaryDirection)(sourceGap, sourcePos, targetGap);
  const primaryAxis = firstStep.x === 0 ? 'y' : 'x';
  const axisSign = firstStep[primaryAxis]; //  +1 or -1
  /**
   * Fallback geometric center used for label placement
   */
  const [fallbackCX, fallbackCY] = (0,_helpers_smooth_step_edge_center__WEBPACK_IMPORTED_MODULE_1__.getSmoothStepEdgeCenter)({
    source,
    target
  });
  let labelCenterX = centerOverride.x ?? fallbackCX;
  let labelCenterY = centerOverride.y ?? fallbackCY;
  /**
   * Build the elbow(s) — the intermediate waypoints
   */
  let elbows = [];
  const sourceOpposesTarget = sourceDir[primaryAxis] * targetDir[primaryAxis] === -1; // true for Left→Right, Top→Bottom
  // Case A ─ Opposite sides
  if (sourceOpposesTarget) {
    const verticalSplit = [{
      x: labelCenterX,
      y: sourceGap.y
    }, {
      x: labelCenterX,
      y: targetGap.y
    }];
    const horizontalSplit = [{
      x: sourceGap.x,
      y: labelCenterY
    }, {
      x: targetGap.x,
      y: labelCenterY
    }];
    const keepDirection = sourceDir[primaryAxis] === axisSign;
    if (primaryAxis === 'x') {
      elbows = keepDirection ? verticalSplit : horizontalSplit;
    } else {
      elbows = keepDirection ? horizontalSplit : verticalSplit;
    }
  }
  // Case B ─ Same / mixed
  else {
    const sourceToTarget = [{
      x: sourceGap.x,
      y: targetGap.y
    }];
    const targetToSource = [{
      x: targetGap.x,
      y: sourceGap.y
    }];
    if (primaryAxis === 'x') {
      elbows = sourceDir.x === axisSign ? targetToSource : sourceToTarget;
    } else {
      elbows = sourceDir.y === axisSign ? sourceToTarget : targetToSource;
    }
    /** Detect & flip elbow to avoid overlap with the nodes */
    if (sourcePos !== targetPos) {
      const crossAxis = primaryAxis === 'x' ? 'y' : 'x';
      const sameCardinal = sourceDir[primaryAxis] === targetDir[crossAxis];
      const mustFlip = sourceDir[primaryAxis] === 1 && (!sameCardinal && sourceGap[crossAxis] > targetGap[crossAxis] || sameCardinal && sourceGap[crossAxis] <= targetGap[crossAxis]) || sourceDir[primaryAxis] === -1 && (!sameCardinal && sourceGap[crossAxis] < targetGap[crossAxis] || sameCardinal && sourceGap[crossAxis] >= targetGap[crossAxis]);
      if (mustFlip) {
        elbows = primaryAxis === 'x' ? sourceToTarget : targetToSource;
      }
    }
    /** Re-compute label center so it sits on the longest straight leg */
    const longestX = Math.max(Math.abs(sourceGap.x - elbows[0].x), Math.abs(targetGap.x - elbows[0].x));
    const longestY = Math.max(Math.abs(sourceGap.y - elbows[0].y), Math.abs(targetGap.y - elbows[0].y));
    if (longestX >= longestY) {
      labelCenterX = (sourceGap.x + targetGap.x) / 2;
      labelCenterY = elbows[0].y;
    } else {
      labelCenterX = elbows[0].x;
      labelCenterY = (sourceGap.y + targetGap.y) / 2;
    }
  }
  /**
   * Assemble the full polyline: connector-center ➜ gap ➜ elbows
   */
  const polyline = [source,
  // 0. start at connector center
  sourceGap,
  // 1. leave the node
  ...elbows,
  // 2. one or two elbows
  targetGap,
  // 3. enter the target node
  target // 4. finish at connector center
  ];
  /**
   * Return: [polyline points, labelCenterX, labelCenterY]
   */
  return [polyline, labelCenterX, labelCenterY];
}

/***/ },

/***/ 15939
/*!***********************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/connection-paths/smooth-step/smooth-step.consts.ts ***!
  \***********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONNECTOR_DIRECTIONS: () => (/* binding */ CONNECTOR_DIRECTIONS),
/* harmony export */   MIN_SEGMENT_LENGTH: () => (/* binding */ MIN_SEGMENT_LENGTH)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../ng-draw-flow.interfaces */ 1954);

/**
 * Minimum length (in px) of the first straight segment that leaves a connector.
 */
const MIN_SEGMENT_LENGTH = 20;
/**
 * Unit vectors that describe where a connection should leave a connector
 * depending on its declared position.
 */
const CONNECTOR_DIRECTIONS = {
  [_ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Left]: {
    x: -1,
    y: 0
  },
  [_ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Right]: {
    x: 1,
    y: 0
  },
  [_ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Top]: {
    x: 0,
    y: -1
  },
  [_ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Bottom]: {
    x: 0,
    y: 1
  }
};

/***/ },

/***/ 29453
/*!****************************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/connection-paths/smooth-step/smooth-step.ts ***!
  \****************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSmoothStepPath: () => (/* binding */ createSmoothStepPath)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../ng-draw-flow.interfaces */ 1954);
/* harmony import */ var _path_parts_bend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path-parts/bend */ 96508);
/* harmony import */ var _path_parts_waypoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path-parts/waypoints */ 69387);



/**
 * Draws a smooth-step SVG path between two connectors.
 *
 * @param startConnector   Data for the start connector.
 * @param endConnector     Data for the end connector.
 * @param radius           Radius of each bend (in pixels).
 * @returns                A tuple with an SVG `d` attribute and label coordinates.
 */
function createSmoothStepPath(startConnector, endConnector, radius = 5) {
  // Default to Bottom/Top when the position is null (e.g. while a draft edge is dragged).
  const sourcePos = startConnector.position ?? _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Bottom;
  const targetPos = endConnector.position ?? _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_0__.DfConnectorPosition.Top;
  const [polyline, labelX, labelY] = (0,_path_parts_waypoints__WEBPACK_IMPORTED_MODULE_2__.computeWaypoints)({
    source: startConnector.point,
    sourcePos,
    target: endConnector.point,
    targetPos
  });
  /** Convert the polyline to an SVG path (M, L, Q commands). */
  const path = polyline.reduce((computedPath, point, pathStepIndex, arr) => {
    /* a) First point — use `M` (move-to). */
    if (pathStepIndex === 0) {
      return `M${point.x} ${point.y}`;
    }
    /* b) Last point — straight segment `L`. */
    if (pathStepIndex === arr.length - 1) {
      return `${computedPath}L${point.x} ${point.y}`;
    }
    /* c) Intermediate waypoint — insert a rounded bend (`L` + `Q`). */
    return `${computedPath}${(0,_path_parts_bend__WEBPACK_IMPORTED_MODULE_1__.bend)(arr[pathStepIndex - 1], point, arr[pathStepIndex + 1], radius)}`;
  }, '');
  return [path, labelX, labelY]; // ready-made `d` attribute for <path>
}

/***/ },

/***/ 30134
/*!**************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/get-coonector-dataset.util.ts ***!
  \**************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getConnectorDataset: () => (/* binding */ getConnectorDataset)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers */ 50315);

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

/***/ },

/***/ 77846
/*!*****************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/index.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateDistance: () => (/* reexport safe */ _calculate_distance_util__WEBPACK_IMPORTED_MODULE_0__.calculateDistance),
/* harmony export */   createBezierPath: () => (/* reexport safe */ _connection_paths_bezier__WEBPACK_IMPORTED_MODULE_1__.createBezierPath),
/* harmony export */   createSmoothStepPath: () => (/* reexport safe */ _connection_paths_smooth_step__WEBPACK_IMPORTED_MODULE_2__.createSmoothStepPath),
/* harmony export */   point: () => (/* reexport safe */ _point__WEBPACK_IMPORTED_MODULE_3__.point)
/* harmony export */ });
/* harmony import */ var _calculate_distance_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculate-distance.util */ 89176);
/* harmony import */ var _connection_paths_bezier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection-paths/bezier */ 48548);
/* harmony import */ var _connection_paths_smooth_step__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connection-paths/smooth-step */ 80602);
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point */ 77292);





/***/ },

/***/ 77292
/*!*****************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connections/utils/point.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   point: () => (/* binding */ point)
/* harmony export */ });
const point = (x, y) => ({
  x,
  y
});

/***/ },

/***/ 11008
/*!*******************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connectors/base-connector.ts ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseConnector: () => (/* binding */ BaseConnector)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _connections_connections_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../connections/connections.service */ 39976);
var _BaseConnector;



class BaseConnector {
  constructor() {
    this.isDisabled = false;
    this.connectionsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_connections_connections_service__WEBPACK_IMPORTED_MODULE_1__.ConnectionsService);
    this.nativeElement = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef).nativeElement;
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
      const connectorId = this.data?.connectorId;
      if (!connectorId) {
        return;
      }
      this.setupDisabledState(this.connectionsService.usedConnectors().includes(connectorId));
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
  destroy() {
    if (!this.data?.connectorId) {
      return;
    }
    this.connectionsService.removeConnectionsByConnectorId(this.data.connectorId);
  }
  setupDisabledState(connected) {
    if (connected) {
      this.nativeElement.setAttribute('data-connected', 'true');
    } else {
      this.nativeElement.removeAttribute('data-connected');
    }
    this.isDisabled = this.data?.single && connected;
    this.nativeElement.classList.toggle('df-disabled', this.isDisabled);
  }
}
_BaseConnector = BaseConnector;
_BaseConnector.ɵfac = function BaseConnector_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BaseConnector)();
};
_BaseConnector.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _BaseConnector,
  hostVars: 4,
  hostBindings: function BaseConnector_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-connector-type", ctx.connectorType)("data-node-id", ctx.bindNodeId)("data-connector-id", ctx.bindConnectorId)("data-position", ctx.bindPosition);
    }
  }
});

/***/ },

/***/ 58783
/*!**********************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connectors/index.ts ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DfInputComponent: () => (/* reexport safe */ _input_component__WEBPACK_IMPORTED_MODULE_0__.DfInputComponent),
/* harmony export */   DfOutputComponent: () => (/* reexport safe */ _output_component__WEBPACK_IMPORTED_MODULE_1__.DfOutputComponent)
/* harmony export */ });
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.component */ 40750);
/* harmony import */ var _output_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./output.component */ 33451);



/***/ },

/***/ 40750
/*!********************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connectors/input.component.ts ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DfInputComponent: () => (/* binding */ DfInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ng-draw-flow.interfaces */ 1954);
/* harmony import */ var _base_connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-connector */ 11008);
var _DfInputComponent;




class DfInputComponent extends _base_connector__WEBPACK_IMPORTED_MODULE_2__.BaseConnector {
  constructor() {
    super(...arguments);
    this.connectorType = _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Input;
    this.dataInput = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required({
      alias: 'connectorData'
    });
    this.positionInput = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(_ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_1__.DfConnectorPosition.Left, {
      alias: 'position'
    });
  }
  get data() {
    return this.dataInput();
  }
  get position() {
    return this.positionInput();
  }
}
_DfInputComponent = DfInputComponent;
_DfInputComponent.ɵfac = /*@__PURE__*/(() => {
  let ɵDfInputComponent_BaseFactory;
  return function DfInputComponent_Factory(__ngFactoryType__) {
    return (ɵDfInputComponent_BaseFactory || (ɵDfInputComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_DfInputComponent)))(__ngFactoryType__ || _DfInputComponent);
  };
})();
_DfInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _DfInputComponent,
  selectors: [["df-input"]],
  inputs: {
    dataInput: [1, "connectorData", "dataInput"],
    positionInput: [1, "position", "positionInput"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function DfInputComponent_Template(rf, ctx) {},
  styles: ["[_nghost-%COMP%] {\n  --df-connector-color-current: var(--df-connector-color);\n  --df-connector-color-hover-current: var(--df-connector-color-hover);\n  display: block;\n  inline-size: 1rem;\n  block-size: 1rem;\n  background: transparent;\n  border-radius: 50%;\n  cursor: crosshair;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]::before, \n[_nghost-%COMP%]::after {\n  content: '';\n  position: absolute;\n  inset-inline-start: 50%;\n  inset-block-start: 50%;\n  border-radius: 50%;\n  inline-size: 0.5rem;\n  block-size: 0.5rem;\n}\n[_nghost-%COMP%]::before {\n  z-index: 1;\n  background: var(--df-connector-color-current);\n  transform: translate(-50%, -50%);\n}\n[_nghost-%COMP%]::after {\n  z-index: 0;\n  inline-size: 1rem;\n  block-size: 1rem;\n  background: var(--df-connector-color-hover-current);\n  transform: translate(-50%, -50%) scale(0);\n  transition: transform 0.2s ease-in-out;\n}\n[_nghost-%COMP%]:hover::after {\n  animation: _ngcontent-%COMP%_dfPulse 1.5s infinite;\n}\n.df-disabled[_nghost-%COMP%] {\n  pointer-events: none;\n}\n[data-connector-type='input'][_nghost-%COMP%] {\n  --df-connector-color-current: var(--df-connector-input-color, var(--df-connector-color));\n  --df-connector-color-hover-current: var(--df-connector-input-color-hover, var(--df-connector-color-hover));\n}\n[data-connector-type='output'][_nghost-%COMP%] {\n  --df-connector-color-current: var(--df-connector-output-color, var(--df-connector-color));\n  --df-connector-color-hover-current: var(--df-connector-output-color-hover, var(--df-connector-color-hover));\n}\n@keyframes _ngcontent-%COMP%_dfPulse {\n  0%,\n  100% {\n    transform: translate(-50%, -50%) scale(0);\n  }\n  50% {\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLWRyYXctZmxvdy9zcmMvbGliL2NvbXBvbmVudHMvY29ubmVjdG9ycy9jb25uZWN0b3Iuc3R5bGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVEQUFBO0VBQ0EsbUVBQUE7RUFFQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBQUo7QUFFSTs7RUFFSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQVI7QUFHSTtFQUNJLFVBQUE7RUFDQSw2Q0FBQTtFQUNBLGdDQUFBO0FBRFI7QUFJSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbURBQUE7RUFDQSx5Q0FBQTtFQUNBLHNDQUFBO0FBRlI7QUFLSTtFQUNJLGdDQUFBO0FBSFI7QUFNSTtFQUNJLG9CQUFBO0FBSlI7QUFRQTtFQUNJLHdGQUFBO0VBQ0EsMEdBQUE7QUFOSjtBQVNBO0VBQ0kseUZBQUE7RUFDQSwyR0FBQTtBQVBKO0FBVUE7RUFDSTs7SUFFSSx5Q0FBQTtFQVJOO0VBV0U7SUFDSSx5Q0FBQTtFQVROO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLS1kZi1jb25uZWN0b3ItY29sb3ItY3VycmVudDogdmFyKC0tZGYtY29ubmVjdG9yLWNvbG9yKTtcbiAgICAtLWRmLWNvbm5lY3Rvci1jb2xvci1ob3Zlci1jdXJyZW50OiB2YXIoLS1kZi1jb25uZWN0b3ItY29sb3ItaG92ZXIpO1xuXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaW5saW5lLXNpemU6IDFyZW07XG4gICAgYmxvY2stc2l6ZTogMXJlbTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGluc2V0LWlubGluZS1zdGFydDogNTAlO1xuICAgICAgICBpbnNldC1ibG9jay1zdGFydDogNTAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGlubGluZS1zaXplOiAwLjVyZW07XG4gICAgICAgIGJsb2NrLXNpemU6IDAuNXJlbTtcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kZi1jb25uZWN0b3ItY29sb3ItY3VycmVudCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgaW5saW5lLXNpemU6IDFyZW07XG4gICAgICAgIGJsb2NrLXNpemU6IDFyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRmLWNvbm5lY3Rvci1jb2xvci1ob3Zlci1jdXJyZW50KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIH1cblxuICAgICY6aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgYW5pbWF0aW9uOiBkZlB1bHNlIDEuNXMgaW5maW5pdGU7XG4gICAgfVxuXG4gICAgJi5kZi1kaXNhYmxlZCB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cblxuOmhvc3QoW2RhdGEtY29ubmVjdG9yLXR5cGU9J2lucHV0J10pIHtcbiAgICAtLWRmLWNvbm5lY3Rvci1jb2xvci1jdXJyZW50OiB2YXIoLS1kZi1jb25uZWN0b3ItaW5wdXQtY29sb3IsIHZhcigtLWRmLWNvbm5lY3Rvci1jb2xvciksKTtcbiAgICAtLWRmLWNvbm5lY3Rvci1jb2xvci1ob3Zlci1jdXJyZW50OiB2YXIoLS1kZi1jb25uZWN0b3ItaW5wdXQtY29sb3ItaG92ZXIsIHZhcigtLWRmLWNvbm5lY3Rvci1jb2xvci1ob3ZlciksKTtcbn1cblxuOmhvc3QoW2RhdGEtY29ubmVjdG9yLXR5cGU9J291dHB1dCddKSB7XG4gICAgLS1kZi1jb25uZWN0b3ItY29sb3ItY3VycmVudDogdmFyKC0tZGYtY29ubmVjdG9yLW91dHB1dC1jb2xvciwgdmFyKC0tZGYtY29ubmVjdG9yLWNvbG9yKSwpO1xuICAgIC0tZGYtY29ubmVjdG9yLWNvbG9yLWhvdmVyLWN1cnJlbnQ6IHZhcigtLWRmLWNvbm5lY3Rvci1vdXRwdXQtY29sb3ItaG92ZXIsIHZhcigtLWRmLWNvbm5lY3Rvci1jb2xvci1ob3ZlciksKTtcbn1cblxuQGtleWZyYW1lcyBkZlB1bHNlIHtcbiAgICAwJSxcbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XG4gICAgfVxuXG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ },

/***/ 33451
/*!*********************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/connectors/output.component.ts ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DfOutputComponent: () => (/* binding */ DfOutputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ng_draw_flow_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ng-draw-flow.configs */ 90167);
/* harmony import */ var _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ng-draw-flow.interfaces */ 1954);
/* harmony import */ var _connections_draft_connection_draft_connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connections/draft-connection/draft-connection.service */ 27232);
/* harmony import */ var _base_connector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-connector */ 11008);
var _DfOutputComponent;






class DfOutputComponent extends _base_connector__WEBPACK_IMPORTED_MODULE_4__.BaseConnector {
  constructor() {
    super(...arguments);
    this.draftConnectionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_connections_draft_connection_draft_connection_service__WEBPACK_IMPORTED_MODULE_3__.DraftConnectionService);
    this.options = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ng_draw_flow_configs__WEBPACK_IMPORTED_MODULE_1__.DRAW_FLOW_OPTIONS);
    this.connectorType = _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_2__.DfConnectionPoint.Output;
    this.dataInput = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required({
      alias: 'connectorData'
    });
    this.positionInput = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(_ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_2__.DfConnectorPosition.Right, {
      alias: 'position'
    });
    this.connectionLabelInput = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(undefined, {
      alias: 'connectionLabel'
    });
  }
  get data() {
    return this.dataInput();
  }
  get position() {
    return this.positionInput();
  }
  get connectionLabel() {
    return this.connectionLabelOverride ?? this.connectionLabelInput();
  }
  setConnectionLabel(value) {
    this.connectionLabelOverride = value;
  }
  onDragStart(event) {
    event.stopPropagation();
    const {
      nodeId,
      connectorId
    } = this.data;
    if (!nodeId || !connectorId || this.isDisabled || !this.options.options.connectionsCreatable) {
      return;
    }
    this.draftConnectionService.connection$.next({
      nodeId,
      connectorId,
      connectorType: _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_2__.DfConnectionPoint.Output,
      position: this.position,
      connectionLabel: this.connectionLabel
    });
  }
}
_DfOutputComponent = DfOutputComponent;
_DfOutputComponent.ɵfac = /*@__PURE__*/(() => {
  let ɵDfOutputComponent_BaseFactory;
  return function DfOutputComponent_Factory(__ngFactoryType__) {
    return (ɵDfOutputComponent_BaseFactory || (ɵDfOutputComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_DfOutputComponent)))(__ngFactoryType__ || _DfOutputComponent);
  };
})();
_DfOutputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _DfOutputComponent,
  selectors: [["df-output"]],
  hostBindings: function DfOutputComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pointerdown", function DfOutputComponent_pointerdown_HostBindingHandler($event) {
        return ctx.onDragStart($event);
      });
    }
  },
  inputs: {
    dataInput: [1, "connectorData", "dataInput"],
    positionInput: [1, "position", "positionInput"],
    connectionLabelInput: [1, "connectionLabel", "connectionLabelInput"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function DfOutputComponent_Template(rf, ctx) {},
  styles: ["[_nghost-%COMP%] {\n  --df-connector-color-current: var(--df-connector-color);\n  --df-connector-color-hover-current: var(--df-connector-color-hover);\n  display: block;\n  inline-size: 1rem;\n  block-size: 1rem;\n  background: transparent;\n  border-radius: 50%;\n  cursor: crosshair;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]::before, \n[_nghost-%COMP%]::after {\n  content: '';\n  position: absolute;\n  inset-inline-start: 50%;\n  inset-block-start: 50%;\n  border-radius: 50%;\n  inline-size: 0.5rem;\n  block-size: 0.5rem;\n}\n[_nghost-%COMP%]::before {\n  z-index: 1;\n  background: var(--df-connector-color-current);\n  transform: translate(-50%, -50%);\n}\n[_nghost-%COMP%]::after {\n  z-index: 0;\n  inline-size: 1rem;\n  block-size: 1rem;\n  background: var(--df-connector-color-hover-current);\n  transform: translate(-50%, -50%) scale(0);\n  transition: transform 0.2s ease-in-out;\n}\n[_nghost-%COMP%]:hover::after {\n  animation: _ngcontent-%COMP%_dfPulse 1.5s infinite;\n}\n.df-disabled[_nghost-%COMP%] {\n  pointer-events: none;\n}\n[data-connector-type='input'][_nghost-%COMP%] {\n  --df-connector-color-current: var(--df-connector-input-color, var(--df-connector-color));\n  --df-connector-color-hover-current: var(--df-connector-input-color-hover, var(--df-connector-color-hover));\n}\n[data-connector-type='output'][_nghost-%COMP%] {\n  --df-connector-color-current: var(--df-connector-output-color, var(--df-connector-color));\n  --df-connector-color-hover-current: var(--df-connector-output-color-hover, var(--df-connector-color-hover));\n}\n@keyframes _ngcontent-%COMP%_dfPulse {\n  0%,\n  100% {\n    transform: translate(-50%, -50%) scale(0);\n  }\n  50% {\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLWRyYXctZmxvdy9zcmMvbGliL2NvbXBvbmVudHMvY29ubmVjdG9ycy9jb25uZWN0b3Iuc3R5bGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVEQUFBO0VBQ0EsbUVBQUE7RUFFQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBQUo7QUFFSTs7RUFFSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQVI7QUFHSTtFQUNJLFVBQUE7RUFDQSw2Q0FBQTtFQUNBLGdDQUFBO0FBRFI7QUFJSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbURBQUE7RUFDQSx5Q0FBQTtFQUNBLHNDQUFBO0FBRlI7QUFLSTtFQUNJLGdDQUFBO0FBSFI7QUFNSTtFQUNJLG9CQUFBO0FBSlI7QUFRQTtFQUNJLHdGQUFBO0VBQ0EsMEdBQUE7QUFOSjtBQVNBO0VBQ0kseUZBQUE7RUFDQSwyR0FBQTtBQVBKO0FBVUE7RUFDSTs7SUFFSSx5Q0FBQTtFQVJOO0VBV0U7SUFDSSx5Q0FBQTtFQVROO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLS1kZi1jb25uZWN0b3ItY29sb3ItY3VycmVudDogdmFyKC0tZGYtY29ubmVjdG9yLWNvbG9yKTtcbiAgICAtLWRmLWNvbm5lY3Rvci1jb2xvci1ob3Zlci1jdXJyZW50OiB2YXIoLS1kZi1jb25uZWN0b3ItY29sb3ItaG92ZXIpO1xuXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaW5saW5lLXNpemU6IDFyZW07XG4gICAgYmxvY2stc2l6ZTogMXJlbTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGluc2V0LWlubGluZS1zdGFydDogNTAlO1xuICAgICAgICBpbnNldC1ibG9jay1zdGFydDogNTAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGlubGluZS1zaXplOiAwLjVyZW07XG4gICAgICAgIGJsb2NrLXNpemU6IDAuNXJlbTtcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kZi1jb25uZWN0b3ItY29sb3ItY3VycmVudCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgaW5saW5lLXNpemU6IDFyZW07XG4gICAgICAgIGJsb2NrLXNpemU6IDFyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRmLWNvbm5lY3Rvci1jb2xvci1ob3Zlci1jdXJyZW50KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIH1cblxuICAgICY6aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgYW5pbWF0aW9uOiBkZlB1bHNlIDEuNXMgaW5maW5pdGU7XG4gICAgfVxuXG4gICAgJi5kZi1kaXNhYmxlZCB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cblxuOmhvc3QoW2RhdGEtY29ubmVjdG9yLXR5cGU9J2lucHV0J10pIHtcbiAgICAtLWRmLWNvbm5lY3Rvci1jb2xvci1jdXJyZW50OiB2YXIoLS1kZi1jb25uZWN0b3ItaW5wdXQtY29sb3IsIHZhcigtLWRmLWNvbm5lY3Rvci1jb2xvciksKTtcbiAgICAtLWRmLWNvbm5lY3Rvci1jb2xvci1ob3Zlci1jdXJyZW50OiB2YXIoLS1kZi1jb25uZWN0b3ItaW5wdXQtY29sb3ItaG92ZXIsIHZhcigtLWRmLWNvbm5lY3Rvci1jb2xvci1ob3ZlciksKTtcbn1cblxuOmhvc3QoW2RhdGEtY29ubmVjdG9yLXR5cGU9J291dHB1dCddKSB7XG4gICAgLS1kZi1jb25uZWN0b3ItY29sb3ItY3VycmVudDogdmFyKC0tZGYtY29ubmVjdG9yLW91dHB1dC1jb2xvciwgdmFyKC0tZGYtY29ubmVjdG9yLWNvbG9yKSwpO1xuICAgIC0tZGYtY29ubmVjdG9yLWNvbG9yLWhvdmVyLWN1cnJlbnQ6IHZhcigtLWRmLWNvbm5lY3Rvci1vdXRwdXQtY29sb3ItaG92ZXIsIHZhcigtLWRmLWNvbm5lY3Rvci1jb2xvci1ob3ZlciksKTtcbn1cblxuQGtleWZyYW1lcyBkZlB1bHNlIHtcbiAgICAwJSxcbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XG4gICAgfVxuXG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ },

/***/ 34416
/*!*************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/node/node-connectors.controller.ts ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeConnectorsController: () => (/* binding */ NodeConnectorsController)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 48065);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 870);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 24406);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 61969);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers */ 50315);
/* harmony import */ var _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ng-draw-flow.interfaces */ 1954);





class NodeConnectorsController {
  constructor(options) {
    this.options = options;
    this.previousInputs = [];
    this.previousOutputs = [];
    this.connectorUpdatesSubscription = null;
  }
  updateCoordinates() {
    const node = this.options.getNode();
    const nodeContentRenderer = this.options.getNodeContentRenderer();
    const centeredCoordinates = this.options.getCenteredPosition(node);
    nodeContentRenderer.inputConnectors().forEach(input => {
      this.updateConnectorCoordinates(centeredCoordinates, node.id, input, _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_6__.DfConnectionPoint.Input);
    });
    nodeContentRenderer.outputConnectors().forEach(output => {
      this.updateConnectorCoordinates(centeredCoordinates, node.id, output, _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_6__.DfConnectionPoint.Output);
    });
  }
  recalculatePositions(distance, zoom) {
    const nodeContentRenderer = this.options.getNodeContentRenderer();
    const currentMoveDistance = {
      deltaX: distance.deltaX / zoom,
      deltaY: distance.deltaY / zoom
    };
    nodeContentRenderer.inputConnectors().forEach(input => {
      this.recalculateConnectorPositionFromLast(currentMoveDistance, input, _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_6__.DfConnectionPoint.Input);
    });
    nodeContentRenderer.outputConnectors().forEach(output => {
      this.recalculateConnectorPositionFromLast(currentMoveDistance, output, _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_6__.DfConnectionPoint.Output);
    });
  }
  watch() {
    const nodeContentRenderer = this.options.getNodeContentRenderer();
    this.connectorUpdatesSubscription?.unsubscribe();
    this.previousOutputs = [...nodeContentRenderer.outputConnectors()];
    this.previousInputs = [...nodeContentRenderer.inputConnectors()];
    const connectorsUpdates$ = this.collectConnectorUpdateSources(nodeContentRenderer, () => this.applyOutputsConnectionLabel());
    if (!connectorsUpdates$.length) {
      return;
    }
    this.connectorUpdatesSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(...connectorsUpdates$).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.takeUntilDestroyed)(this.options.destroyRef)).subscribe(() => this.updateCoordinates());
  }
  disconnect() {
    this.connectorUpdatesSubscription?.unsubscribe();
    this.connectorUpdatesSubscription = null;
  }
  applyOutputsConnectionLabel() {
    const node = this.options.getNode();
    const connectionLabel = node.data.connectionLabel;
    this.options.getNodeContentRenderer().applyConnectionLabel(connectionLabel);
  }
  recalculateConnectorPositionFromLast(distance, connector, connectorType) {
    const newConnectorPosition = {
      x: (connector.coordinates?.x ?? 0) + distance.deltaX,
      y: (connector.coordinates?.y ?? 0) + distance.deltaY
    };
    const connectorData = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.createConnectorHash)({
      nodeId: connector.data.nodeId,
      connectorType,
      connectorId: connector.data.connectorId
    });
    connector.coordinates = newConnectorPosition;
    this.options.coordinatesService.addConnectionPoint(connectorData, newConnectorPosition, connector.position);
  }
  updateConnectorCoordinates(position, nodeId, connector, connectorType) {
    const calculatedConnectorPosition = this.calculateConnectorPosition(connector.nativeElement, position);
    connector.coordinates = calculatedConnectorPosition;
    const connectorData = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.createConnectorHash)({
      nodeId,
      connectorType,
      connectorId: connector.nativeElement.dataset.connectorId
    });
    this.options.coordinatesService.addConnectionPoint(connectorData, calculatedConnectorPosition, connector.position);
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
  collectConnectorUpdateSources(nodeContentRenderer, onOutputsChanged) {
    const sources = [];
    this.addContentRendererUpdates(sources, nodeContentRenderer);
    this.addInputsUpdates(sources, nodeContentRenderer);
    this.addOutputsUpdates(sources, nodeContentRenderer, onOutputsChanged);
    return sources;
  }
  addContentRendererUpdates(sources, nodeContentRenderer) {
    sources.push(nodeContentRenderer.connectorUpdates$);
  }
  addInputsUpdates(sources, nodeContentRenderer) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.runInInjectionContext)(this.options.environmentInjector, () => {
      sources.push((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.toObservable)(nodeContentRenderer.inputConnectors).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(currentInputs => {
        this.handleRemovedInputs(currentInputs);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(() => undefined)));
    });
  }
  addOutputsUpdates(sources, nodeContentRenderer, onOutputsChanged) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.runInInjectionContext)(this.options.environmentInjector, () => {
      sources.push((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.toObservable)(nodeContentRenderer.outputConnectors).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(currentOutputs => {
        this.handleRemovedOutputs(currentOutputs);
        onOutputsChanged();
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(() => undefined)));
    });
  }
  handleRemovedInputs(currentArray) {
    const removedInputs = this.previousInputs.filter(prev => !currentArray.some(curr => curr === prev));
    if (removedInputs.length > 0) {
      removedInputs.forEach(input => {
        this.options.onConnectorDeleted(input.data.connectorId);
      });
    }
    this.previousInputs = [...currentArray];
  }
  handleRemovedOutputs(currentArray) {
    const removedOutputs = this.previousOutputs.filter(prev => !currentArray.some(curr => curr === prev));
    if (removedOutputs.length > 0) {
      removedOutputs.forEach(output => {
        this.options.onConnectorDeleted(output.data.connectorId);
      });
    }
    this.previousOutputs = [...currentArray];
  }
}

/***/ },

/***/ 92599
/*!****************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/node/node-content.host.ts ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeContentHost: () => (/* binding */ NodeContentHost)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _node_content_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node-content.renderer */ 16274);


class NodeContentHost {
  constructor(environmentInjector) {
    this.environmentInjector = environmentInjector;
    this.rendererSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    this.renderer = this.rendererSignal.asReadonly();
  }
  renderComponent(containerRef, componentType) {
    this.clear(containerRef);
    const renderer = (0,_node_content_renderer__WEBPACK_IMPORTED_MODULE_1__.createComponentNodeContentRenderer)(containerRef, componentType, this.environmentInjector);
    this.rendererSignal.set(renderer);
    return renderer;
  }
  clear(containerRef) {
    containerRef.clear();
    this.rendererSignal.set(null);
  }
  syncInputs(inputs) {
    this.rendererSignal()?.syncInputs(inputs);
  }
  nativeElement() {
    return this.rendererSignal()?.nativeElement ?? null;
  }
}

/***/ },

/***/ 16274
/*!********************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/node/node-content.renderer.ts ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createComponentNodeContentRenderer: () => (/* binding */ createComponentNodeContentRenderer)
/* harmony export */ });
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 48065);

class ComponentNodeContentRenderer {
  constructor(componentRef) {
    this.componentRef = componentRef;
    this.inputConnectors = this.componentRef.instance.inputs;
    this.outputConnectors = this.componentRef.instance.outputs;
    this.connectorUpdates$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_0__.outputToObservable)(this.componentRef.instance.connectorsUpdated);
  }
  get nativeElement() {
    return this.componentRef.location.nativeElement;
  }
  syncInputs(inputs) {
    this.componentRef.setInput('nodeId', inputs.nodeId);
    this.componentRef.setInput('startNode', inputs.startNode);
    this.componentRef.setInput('endNode', inputs.endNode);
    this.componentRef.setInput('model', inputs.model);
    this.componentRef.setInput('selected', inputs.selected);
    this.componentRef.setInput('invalid', inputs.invalid);
  }
  applyConnectionLabel(label) {
    this.outputConnectors().forEach(output => {
      output.setConnectionLabel(label);
    });
  }
}
function createComponentNodeContentRenderer(containerRef, componentType, environmentInjector) {
  const componentRef = containerRef.createComponent(componentType, {
    environmentInjector
  });
  return new ComponentNodeContentRenderer(componentRef);
}

/***/ },

/***/ 23384
/*!***********************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/node/node-geometry.controller.ts ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeGeometryController: () => (/* binding */ NodeGeometryController)
/* harmony export */ });
/* harmony import */ var _pan_zoom_pan_zoom_camera_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pan-zoom/pan-zoom.camera.math */ 64238);

class NodeGeometryController {
  constructor(options) {
    this.options = options;
    this.nodeWidth = 0;
    this.nodeHeight = 0;
    this.resizeObserver = null;
  }
  resolveNode(node) {
    if (this.hasPosition(node)) {
      return node;
    }
    return {
      ...node,
      position: this.getCenterOfViewport()
    };
  }
  resolveUpdatedNode(node, currentNode) {
    if (this.hasPosition(node)) {
      return node;
    }
    if (node.id === currentNode.id) {
      return {
        ...node,
        position: currentNode.position
      };
    }
    return this.resolveNode(node);
  }
  hasPositionChanged(previousNode, currentNode) {
    return previousNode.position.x !== currentNode.position.x || previousNode.position.y !== currentNode.position.y;
  }
  measureContent(nativeElement) {
    if (!nativeElement) {
      return;
    }
    this.nodeWidth = nativeElement.offsetWidth;
    this.nodeHeight = nativeElement.offsetHeight;
  }
  getCenteredPosition(node) {
    const halfOfNodeWidth = this.nodeWidth / 2;
    const halfOfNodeHeight = this.nodeHeight / 2;
    return {
      x: node.position.x - halfOfNodeWidth,
      y: node.position.y - halfOfNodeHeight
    };
  }
  applyPositionToStyle(nativeElement, position, dynamic) {
    nativeElement.style.transform = dynamic ? `translate3D(${position.x}px, ${position.y}px, 0)` : `translate(${position.x}px, ${position.y}px)`;
  }
  syncWorkspaceGeometry(node) {
    const halfOfNodeWidth = this.nodeWidth / 2;
    const halfOfNodeHeight = this.nodeHeight / 2;
    this.options.panZoomService.upsertNodeBounds(node.id, {
      minX: node.position.x - halfOfNodeWidth,
      minY: node.position.y - halfOfNodeHeight,
      maxX: node.position.x + halfOfNodeWidth,
      maxY: node.position.y + halfOfNodeHeight
    });
  }
  removeWorkspaceGeometry(nodeId) {
    this.options.panZoomService.removeNodeBounds(nodeId);
  }
  observeNodeSize(nativeElement, onResize) {
    if (typeof ResizeObserver !== 'function') {
      return;
    }
    this.resizeObserver = new ResizeObserver(onResize);
    this.resizeObserver.observe(nativeElement);
  }
  disconnect() {
    this.resizeObserver?.disconnect();
    this.resizeObserver = null;
  }
  getCenterOfViewport() {
    const {
      x: cameraX,
      y: cameraY,
      zoom
    } = this.options.panZoomService.snapshot();
    const viewportWidth = this.options.drawFlowElement.offsetWidth;
    const viewportHeight = this.options.drawFlowElement.offsetHeight;
    const viewportCenterX = viewportWidth / 2;
    const viewportCenterY = viewportHeight / 2;
    const zeroPoint = (0,_pan_zoom_pan_zoom_camera_math__WEBPACK_IMPORTED_MODULE_0__.getViewportZeroPoint)({
      width: viewportWidth,
      height: viewportHeight
    }, {
      leftPosition: this.options.panZoomOptions.leftPosition,
      topPosition: this.options.panZoomOptions.topPosition
    });
    return {
      x: (viewportCenterX - zeroPoint.x - cameraX) / zoom,
      y: (viewportCenterY - zeroPoint.y - cameraY) / zoom
    };
  }
  clampPositionToPanBounds(position) {
    return position;
  }
  hasPosition(node) {
    const position = node.position;
    return !!position && Number.isFinite(position.x) && Number.isFinite(position.y);
  }
}

/***/ },

/***/ 86786
/*!**************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/node/node-interaction.controller.ts ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeInteractionController: () => (/* binding */ NodeInteractionController)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../consts */ 82110);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives */ 52256);



function createInitialCoordinates() {
  return {
    ..._consts__WEBPACK_IMPORTED_MODULE_1__.INITIAL_COORDINATES
  };
}
class NodeInteractionController {
  constructor(options) {
    this.options = options;
    this.cursorSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('initial');
    this.selectedSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
    this.accumulatedDelta = createInitialCoordinates();
    this.moved = false;
    this.cursor = this.cursorSignal.asReadonly();
    this.selected = this.selectedSignal.asReadonly();
  }
  handleKeyboardEvent(event) {
    if (!this.selectedSignal() || !this.options.deletable || this.options.isStartNode()) {
      return;
    }
    const node = this.options.getNode();
    event.preventDefault();
    this.options.store.clearSelectedNode(node.id);
    this.options.emitNodeDeleted();
  }
  setSelected(selected) {
    const node = this.options.getNode();
    this.selectedSignal.set(selected);
    if (selected) {
      this.options.connectionsService.highlightConnectionsForNode(node.id);
      this.options.store.emitNodeSelected(node);
      this.options.emitNodeSelected(node);
    } else {
      this.options.connectionsService.highlightConnectionsForNode(null);
      this.options.store.clearSelectedNode(node.id);
    }
  }
  handleDrag(event) {
    if (this.options.isStartNode() || !this.options.draggable) {
      return;
    }
    if (event.stage === _directives__WEBPACK_IMPORTED_MODULE_2__.DfDragDropStage.Move) {
      this.handleDragMove(event.distance);
    } else {
      this.handleDragEnd();
    }
  }
  clearHighlightedConnectionsFor(nodeId) {
    if (this.options.connectionsService.selectedNodeId() === nodeId) {
      this.options.connectionsService.highlightConnectionsForNode(null);
    }
  }
  handleDragMove(distance) {
    const node = this.options.getNode();
    const {
      zoom
    } = this.options.panZoomService.snapshot();
    if (distance.deltaX || distance.deltaY) {
      this.moved = true;
    }
    this.cursorSignal.set('grabbing');
    this.options.panZoomService.setDisabled(true);
    this.accumulatedDelta.x += distance.deltaX / zoom;
    this.accumulatedDelta.y += distance.deltaY / zoom;
    const applyX = Math.abs(this.accumulatedDelta.x) >= this.options.nodeDragThreshold;
    const applyY = Math.abs(this.accumulatedDelta.y) >= this.options.nodeDragThreshold;
    if (!applyX && !applyY) {
      return;
    }
    const previousPosition = {
      ...node.position
    };
    const requestedDeltaX = applyX ? this.accumulatedDelta.x : 0;
    const requestedDeltaY = applyY ? this.accumulatedDelta.y : 0;
    const unclampedPosition = {
      x: node.position.x + requestedDeltaX,
      y: node.position.y + requestedDeltaY
    };
    node.position = this.options.clampPosition(unclampedPosition);
    const appliedDeltaX = node.position.x - previousPosition.x;
    const appliedDeltaY = node.position.y - previousPosition.y;
    this.options.syncWorkspaceGeometry();
    this.options.applyPositionToStyle(this.options.getCenteredPosition(node), true);
    this.options.recalculateConnectorsPosition({
      deltaX: appliedDeltaX * zoom,
      deltaY: appliedDeltaY * zoom
    }, zoom);
    if (applyX) {
      this.accumulatedDelta.x = 0;
    }
    if (applyY) {
      this.accumulatedDelta.y = 0;
    }
  }
  handleDragEnd() {
    this.cursorSignal.set('initial');
    if (this.moved) {
      this.options.emitNodeMoved(this.options.getNode());
      this.options.refreshRenderedGeometry(false);
    }
    this.accumulatedDelta = createInitialCoordinates();
    this.moved = false;
    this.options.panZoomService.setDisabled(false);
  }
}

/***/ },

/***/ 76458
/*!*************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/node/node.component.ts ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeComponent: () => (/* binding */ NodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 97757);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives */ 52256);
/* harmony import */ var _ng_draw_flow_configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ng-draw-flow.configs */ 90167);
/* harmony import */ var _ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ng-draw-flow.token */ 59497);
/* harmony import */ var _services_coordinates_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/coordinates.service */ 65092);
/* harmony import */ var _services_ng_draw_flow_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ng-draw-flow-store.service */ 24410);
/* harmony import */ var _connections_connections_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../connections/connections.service */ 39976);
/* harmony import */ var _pan_zoom_pan_zoom_options__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pan-zoom/pan-zoom.options */ 25741);
/* harmony import */ var _pan_zoom_pan_zoom_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pan-zoom/pan-zoom.service */ 96592);
/* harmony import */ var _node_connectors_controller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node-connectors.controller */ 34416);
/* harmony import */ var _node_content_host__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node-content.host */ 92599);
/* harmony import */ var _node_geometry_controller__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node-geometry.controller */ 23384);
/* harmony import */ var _node_interaction_controller__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node-interaction.controller */ 86786);
var _NodeComponent;















const _c0 = ["nodeElement"];
const _c1 = ["container"];
class NodeComponent {
  constructor() {
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef);
    this.panZoomService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_pan_zoom_pan_zoom_service__WEBPACK_IMPORTED_MODULE_9__.PanZoomService);
    this.coordinatesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_coordinates_service__WEBPACK_IMPORTED_MODULE_5__.CoordinatesService);
    this.store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_ng_draw_flow_store_service__WEBPACK_IMPORTED_MODULE_6__.NgDrawFlowStoreService);
    this.drawFlowOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ng_draw_flow_configs__WEBPACK_IMPORTED_MODULE_3__.DRAW_FLOW_OPTIONS);
    this.environmentInjector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.EnvironmentInjector);
    this.drawFlowComponents = this.drawFlowOptions.nodes;
    this.connectionsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_connections_connections_service__WEBPACK_IMPORTED_MODULE_7__.ConnectionsService);
    this.nodeGeometry = new _node_geometry_controller__WEBPACK_IMPORTED_MODULE_12__.NodeGeometryController({
      drawFlowElement: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_4__.DRAW_FLOW_ROOT_ELEMENT),
      panZoomOptions: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_pan_zoom_pan_zoom_options__WEBPACK_IMPORTED_MODULE_8__.DF_PAN_ZOOM_OPTIONS),
      panZoomService: this.panZoomService
    });
    this.nodeContentHost = new _node_content_host__WEBPACK_IMPORTED_MODULE_11__.NodeContentHost(this.environmentInjector);
    this.resolvedNodeValue = null;
    this.nodeSizeSyncSubscription = null;
    this.nodeElementRef = _angular_core__WEBPACK_IMPORTED_MODULE_0__.viewChild.required('nodeElement');
    this.containerRef = _angular_core__WEBPACK_IMPORTED_MODULE_0__.viewChild.required('container', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    });
    this.node = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    this.invalid = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(false);
    this.nodeMoved = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    this.nodeDeleted = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    this.nodeSelected = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    this.connectorDeleted = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    this.cursor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => this.nodeInteraction.cursor());
    this.nodeConnectors = this.createNodeConnectorsController();
    this.nodeInteraction = this.createNodeInteractionController();
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
      const nodeContentRenderer = this.nodeContentHost.renderer();
      if (!nodeContentRenderer) {
        return;
      }
      this.nodeContentHost.syncInputs(this.getNodeContentInputs());
    });
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
      const node = this.node();
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.untracked)(() => {
        this.applyNodeInputUpdate(node);
      });
    });
  }
  ngAfterViewInit() {
    this.initializeResolvedNode();
    this.createNodeContentComponent();
    this.measureNodeContent();
    this.nodeConnectors.applyOutputsConnectionLabel();
    this.nodeConnectors.watch();
    this.syncWorkspaceGeometry();
    this.refreshRenderedGeometry(false);
    this.observeNodeSize();
  }
  ngOnDestroy() {
    this.cancelScheduledNodeSizeSync();
    if (!this.resolvedNodeValue) {
      this.nodeConnectors.disconnect();
      this.nodeGeometry.disconnect();
      return;
    }
    this.nodeInteraction.clearHighlightedConnectionsFor(this.getResolvedNode().id);
    this.nodeConnectors.disconnect();
    this.nodeGeometry.disconnect();
    this.nodeGeometry.removeWorkspaceGeometry(this.getResolvedNode().id);
  }
  handleKeyboardEvent(event) {
    this.nodeInteraction.handleKeyboardEvent(event);
  }
  createNodeContentComponent() {
    const nodeType = this.getResolvedNode().data.type;
    const nodeContentComponent = this.getNodeContentComponent(nodeType);
    const nodeContentRenderer = this.nodeContentHost.renderComponent(this.containerRef(), nodeContentComponent);
    nodeContentRenderer.syncInputs(this.getNodeContentInputs());
    this.cdr.detectChanges();
  }
  onSelectedChanged(selected) {
    this.nodeInteraction.setSelected(selected);
  }
  onDrag(event) {
    this.nodeInteraction.handleDrag(event);
  }
  isSelected() {
    return this.nodeInteraction.selected();
  }
  nodeClassName() {
    const classNames = ['draw-flow-node'];
    if (this.invalid()) {
      classNames.push('df-invalid');
    }
    if (this.isSelected()) {
      classNames.push('df-selected');
    }
    classNames.push(...this.getCustomClassNames());
    return classNames.join(' ');
  }
  createNodeConnectorsController() {
    return new _node_connectors_controller__WEBPACK_IMPORTED_MODULE_10__.NodeConnectorsController({
      coordinatesService: this.coordinatesService,
      destroyRef: this.destroyRef,
      environmentInjector: this.environmentInjector,
      getCenteredPosition: node => this.nodeGeometry.getCenteredPosition(node),
      getNode: () => this.getResolvedNode(),
      getNodeContentRenderer: () => this.getNodeContentRenderer(),
      onConnectorDeleted: connectorId => {
        this.connectorDeleted.emit(connectorId);
      }
    });
  }
  createNodeInteractionController() {
    return new _node_interaction_controller__WEBPACK_IMPORTED_MODULE_13__.NodeInteractionController({
      connectionsService: this.connectionsService,
      deletable: this.drawFlowOptions.options.nodesDeletable,
      draggable: this.drawFlowOptions.options.nodesDraggable,
      getCenteredPosition: node => this.nodeGeometry.getCenteredPosition(node),
      getNode: () => this.getResolvedNode(),
      isStartNode: () => this.node().startNode === true,
      nodeDragThreshold: this.drawFlowOptions.options.nodeDragThreshold,
      panZoomService: this.panZoomService,
      store: this.store,
      applyPositionToStyle: (position, dynamic) => {
        this.nodeGeometry.applyPositionToStyle(this.nodeElementRef().nativeElement, position, dynamic);
      },
      clampPosition: position => this.nodeGeometry.clampPositionToPanBounds(position),
      emitNodeDeleted: () => {
        this.nodeDeleted.emit();
      },
      emitNodeMoved: node => {
        this.nodeMoved.emit(node);
      },
      emitNodeSelected: node => {
        this.nodeSelected.emit(node);
      },
      recalculateConnectorsPosition: (distance, zoom) => {
        this.nodeConnectors.recalculatePositions(distance, zoom);
      },
      refreshRenderedGeometry: dynamic => {
        this.refreshRenderedGeometry(dynamic);
      },
      syncWorkspaceGeometry: () => {
        this.syncWorkspaceGeometry();
      }
    });
  }
  getCustomClassNames() {
    const className = this.node().className;
    if (!className) {
      return [];
    }
    return Array.isArray(className) ? className : [className];
  }
  initializeResolvedNode() {
    this.resolvedNodeValue = this.nodeGeometry.resolveNode(this.node());
  }
  applyNodeInputUpdate(node) {
    if (!this.resolvedNodeValue) {
      return;
    }
    const previousNode = this.resolvedNodeValue;
    this.resolvedNodeValue = this.nodeGeometry.resolveUpdatedNode(node, this.resolvedNodeValue);
    const nodeTypeChanged = this.resolvedNodeValue.data.type !== previousNode.data.type;
    const positionChanged = this.nodeGeometry.hasPositionChanged(previousNode, this.resolvedNodeValue);
    const startNodeChanged = this.resolvedNodeValue.startNode === true !== (previousNode.startNode === true);
    const endNodeChanged = this.resolvedNodeValue.endNode === true !== (previousNode.endNode === true);
    const nodeIdentityChanged = this.resolvedNodeValue.id !== previousNode.id;
    const nodeDataChanged = this.resolvedNodeValue.data !== previousNode.data;
    const connectionLabelChanged = this.resolvedNodeValue.data.connectionLabel !== previousNode.data.connectionLabel;
    const contentInputsChanged = nodeIdentityChanged || nodeDataChanged || startNodeChanged || endNodeChanged;
    if (!nodeTypeChanged && !positionChanged && !contentInputsChanged && !connectionLabelChanged) {
      return;
    }
    if (nodeTypeChanged) {
      this.createNodeContentComponent();
      this.measureNodeContent();
      this.nodeConnectors.watch();
    } else if (contentInputsChanged) {
      this.nodeContentHost.syncInputs(this.getNodeContentInputs());
    }
    if (nodeTypeChanged || connectionLabelChanged) {
      this.nodeConnectors.applyOutputsConnectionLabel();
    }
    if (nodeTypeChanged || positionChanged || nodeIdentityChanged || startNodeChanged || endNodeChanged) {
      this.syncWorkspaceGeometry();
      this.refreshRenderedGeometry(false);
    }
  }
  getResolvedNode() {
    if (!this.resolvedNodeValue) {
      throw new Error('NodeComponent resolved node is not initialized');
    }
    return this.resolvedNodeValue;
  }
  measureNodeContent() {
    this.nodeGeometry.measureContent(this.nodeContentHost.nativeElement());
  }
  observeNodeSize() {
    this.nodeGeometry.observeNodeSize(this.nodeElementRef().nativeElement, () => {
      this.scheduleNodeSizeSync();
    });
  }
  scheduleNodeSizeSync() {
    if (this.nodeSizeSyncSubscription) {
      return;
    }
    this.nodeSizeSyncSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__.animationFrameScheduler.schedule(() => {
      this.nodeSizeSyncSubscription = null;
      this.syncNodeSize();
    });
  }
  cancelScheduledNodeSizeSync() {
    this.nodeSizeSyncSubscription?.unsubscribe();
    this.nodeSizeSyncSubscription = null;
  }
  syncNodeSize() {
    this.measureNodeContent();
    this.syncWorkspaceGeometry();
    this.refreshRenderedGeometry(false);
  }
  refreshRenderedGeometry(dynamic) {
    this.nodeGeometry.applyPositionToStyle(this.nodeElementRef().nativeElement, this.nodeGeometry.getCenteredPosition(this.getResolvedNode()), dynamic);
    this.nodeConnectors.updateCoordinates();
  }
  syncWorkspaceGeometry() {
    this.nodeGeometry.syncWorkspaceGeometry(this.getResolvedNode());
  }
  getNodeContentComponent(nodeType) {
    const nodeContentComponent = this.drawFlowComponents[nodeType];
    if (!nodeContentComponent) {
      throw new Error(`NodeComponent cannot render node "${this.getResolvedNode().id}" because node type "${nodeType}" is not registered`);
    }
    return nodeContentComponent;
  }
  getNodeContentRenderer() {
    const nodeContentRenderer = this.nodeContentHost.renderer();
    if (!nodeContentRenderer) {
      throw new Error('NodeComponent content renderer is not initialized');
    }
    return nodeContentRenderer;
  }
  getNodeContentInputs() {
    const node = this.getResolvedNode();
    return {
      nodeId: node.id,
      startNode: node.startNode === true,
      endNode: node.endNode === true,
      model: node.data,
      selected: this.nodeInteraction.selected(),
      invalid: this.invalid()
    };
  }
}
_NodeComponent = NodeComponent;
_NodeComponent.ɵfac = function NodeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NodeComponent)();
};
_NodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _NodeComponent,
  selectors: [["df-node"]],
  viewQuery: function NodeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuerySignal"](ctx.nodeElementRef, _c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuerySignal"](ctx.containerRef, _c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryAdvance"](2);
    }
  },
  hostBindings: function NodeComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.backspace", function NodeComponent_keydown_backspace_HostBindingHandler($event) {
        return ctx.handleKeyboardEvent($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown.delete", function NodeComponent_keydown_delete_HostBindingHandler($event) {
        return ctx.handleKeyboardEvent($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    }
  },
  inputs: {
    node: [1, "node"],
    invalid: [1, "invalid"]
  },
  outputs: {
    nodeMoved: "nodeMoved",
    nodeDeleted: "nodeDeleted",
    nodeSelected: "nodeSelected",
    connectorDeleted: "connectorDeleted"
  },
  decls: 5,
  vars: 6,
  consts: [["nodeElement", ""], ["container", ""], ["data-draw-flow-node", "", 3, "dfDragDrop", "dfSelectableElement"], [1, "node-content"]],
  template: function NodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dfDragDrop", function NodeComponent_Template_div_dfDragDrop_0_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onDrag($event));
      })("dfSelectableElement", function NodeComponent_Template_div_dfSelectableElement_0_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onSelectedChanged($event));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](3, null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.nodeClassName());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("cursor", ctx.cursor());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-node-id", ctx.node().id)("data-start-node", ctx.node().startNode ? "true" : null);
    }
  },
  dependencies: [_directives__WEBPACK_IMPORTED_MODULE_2__.DragDropDirective, _directives__WEBPACK_IMPORTED_MODULE_2__.SelectableElementDirective],
  styles: [".draw-flow-node[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  inset-block-start: 0;\n  inset-inline-start: 0;\n  box-sizing: border-box;\n  padding: var(--df-node-padding, var(--df-node-padding-default));\n  color: var(--df-node-color, var(--df-node-color-default));\n  background: var(--df-node-background, var(--df-node-background-default));\n  border: var(--df-node-border, var(--df-node-border-default));\n  border-radius: var(--df-node-border-radius, var(--df-node-border-radius-default));\n  box-shadow: var(--df-node-box-shadow-current, var(--df-node-box-shadow, var(--df-node-box-shadow-default)));\n  touch-action: none;\n  transition: var(--df-node-transition, var(--df-node-transition-default));\n}\n.draw-flow-node.df-selected[_ngcontent-%COMP%] {\n  --df-node-box-shadow-current: var(--df-node-box-shadow-selected, var(--df-node-box-shadow-selected-default));\n  z-index: 3;\n  border-color: var(--df-node-selected-border-color, var(--df-node-selected-border-color-default));\n}\n.draw-flow-node.df-invalid[_ngcontent-%COMP%] {\n  --df-node-box-shadow-current: var(--df-node-box-shadow-invalid, var(--df-node-box-shadow-invalid-default));\n  border-color: var(--df-node-invalid-border-color, var(--df-node-invalid-border-color-default));\n}\n.draw-flow-node[_ngcontent-%COMP%]:hover {\n  will-change: transform;\n  box-shadow: var(--df-node-box-shadow-hover, var(--df-node-box-shadow-current, var(--df-node-box-shadow-hover-default)));\n}\n.draw-flow-node[_ngcontent-%COMP%]   .drag-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  inline-size: 100%;\n  block-size: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLWRyYXctZmxvdy9zcmMvbGliL2NvbXBvbmVudHMvbm9kZS9ub2RlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0RBQUE7RUFDQSx5REFBQTtFQUNBLHdFQUFBO0VBQ0EsNERBQUE7RUFDQSxpRkFBQTtFQUNBLDJHQUFBO0VBQ0Esa0JBQUE7RUFDQSx3RUFBQTtBQUNKO0FBQ0k7RUFDSSw0R0FBQTtFQUVBLFVBQUE7RUFDQSxnR0FBQTtBQUFSO0FBR0k7RUFDSSwwR0FBQTtFQUVBLDhGQUFBO0FBRlI7QUFLSTtFQUNJLHNCQUFBO0VBQ0EsdUhBQUE7QUFIUjtBQTNCQTtFQXFDUSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFQUiIsInNvdXJjZXNDb250ZW50IjpbIi5kcmF3LWZsb3ctbm9kZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgaW5zZXQtYmxvY2stc3RhcnQ6IDA7XG4gICAgaW5zZXQtaW5saW5lLXN0YXJ0OiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogdmFyKC0tZGYtbm9kZS1wYWRkaW5nLCB2YXIoLS1kZi1ub2RlLXBhZGRpbmctZGVmYXVsdCkpO1xuICAgIGNvbG9yOiB2YXIoLS1kZi1ub2RlLWNvbG9yLCB2YXIoLS1kZi1ub2RlLWNvbG9yLWRlZmF1bHQpKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kZi1ub2RlLWJhY2tncm91bmQsIHZhcigtLWRmLW5vZGUtYmFja2dyb3VuZC1kZWZhdWx0KSk7XG4gICAgYm9yZGVyOiB2YXIoLS1kZi1ub2RlLWJvcmRlciwgdmFyKC0tZGYtbm9kZS1ib3JkZXItZGVmYXVsdCkpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWRmLW5vZGUtYm9yZGVyLXJhZGl1cywgdmFyKC0tZGYtbm9kZS1ib3JkZXItcmFkaXVzLWRlZmF1bHQpKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kZi1ub2RlLWJveC1zaGFkb3ctY3VycmVudCwgdmFyKC0tZGYtbm9kZS1ib3gtc2hhZG93LCB2YXIoLS1kZi1ub2RlLWJveC1zaGFkb3ctZGVmYXVsdCkpKTtcbiAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tZGYtbm9kZS10cmFuc2l0aW9uLCB2YXIoLS1kZi1ub2RlLXRyYW5zaXRpb24tZGVmYXVsdCkpO1xuXG4gICAgJi5kZi1zZWxlY3RlZCB7XG4gICAgICAgIC0tZGYtbm9kZS1ib3gtc2hhZG93LWN1cnJlbnQ6IHZhcigtLWRmLW5vZGUtYm94LXNoYWRvdy1zZWxlY3RlZCwgdmFyKC0tZGYtbm9kZS1ib3gtc2hhZG93LXNlbGVjdGVkLWRlZmF1bHQpKTtcblxuICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWRmLW5vZGUtc2VsZWN0ZWQtYm9yZGVyLWNvbG9yLCB2YXIoLS1kZi1ub2RlLXNlbGVjdGVkLWJvcmRlci1jb2xvci1kZWZhdWx0KSk7XG4gICAgfVxuXG4gICAgJi5kZi1pbnZhbGlkIHtcbiAgICAgICAgLS1kZi1ub2RlLWJveC1zaGFkb3ctY3VycmVudDogdmFyKC0tZGYtbm9kZS1ib3gtc2hhZG93LWludmFsaWQsIHZhcigtLWRmLW5vZGUtYm94LXNoYWRvdy1pbnZhbGlkLWRlZmF1bHQpKTtcblxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWRmLW5vZGUtaW52YWxpZC1ib3JkZXItY29sb3IsIHZhcigtLWRmLW5vZGUtaW52YWxpZC1ib3JkZXItY29sb3ItZGVmYXVsdCkpO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoXG4gICAgICAgICAgICAtLWRmLW5vZGUtYm94LXNoYWRvdy1ob3ZlcixcbiAgICAgICAgICAgIHZhcigtLWRmLW5vZGUtYm94LXNoYWRvdy1jdXJyZW50LCB2YXIoLS1kZi1ub2RlLWJveC1zaGFkb3ctaG92ZXItZGVmYXVsdCkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLmRyYWctaGFuZGxlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICAgICAgYmxvY2stc2l6ZTogMTAwJTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ },

/***/ 80166
/*!***************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/pan-zoom/pan-zoom-background-canvas.component.ts ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanZoomBackgroundCanvasComponent: () => (/* binding */ PanZoomBackgroundCanvasComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 43539);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 48065);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 97757);
/* harmony import */ var _ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ng-draw-flow.token */ 59497);
/* harmony import */ var _pan_zoom_controller_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pan-zoom.controller.service */ 70310);
/* harmony import */ var _pan_zoom_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pan-zoom.service */ 96592);
var _PanZoomBackgroundCanvasComponent;








const _c0 = ["backgroundCanvas"];
const GRID_SIZE = 20;
const GRID_PATTERN_REPEAT = 5;
const GRID_DOT_SIZE = 2;
const GRID_MAJOR_DOT_SIZE = GRID_DOT_SIZE * 2;
const GRID_MAJOR_SIMPLE_DOT_SIZE = GRID_DOT_SIZE * 3;
const GRID_VISIBILITY_THRESHOLD = 0.125;
const GRID_PATTERN_SWITCH_SCALE = 0.7;
class PanZoomBackgroundCanvasComponent {
  constructor() {
    this.backgroundCanvasRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.viewChild)('backgroundCanvas');
    this.host = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DestroyRef);
    this.drawFlowElement = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_4__.DRAW_FLOW_ROOT_ELEMENT);
    this.platformId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID);
    this.panZoomService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_pan_zoom_service__WEBPACK_IMPORTED_MODULE_6__.PanZoomService);
    this.panZoomController = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_pan_zoom_controller_service__WEBPACK_IMPORTED_MODULE_5__.PanZoomControllerService);
    this.renderScheduled = false;
    this.backgroundCanvas = null;
    this.backgroundContext = null;
    this.backgroundPatterns = null;
    this.watchRenderRequests();
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.effect)(() => {
      this.panZoomService.camera();
      this.panZoomService.workspaceRect();
      this.panZoomController.viewportZeroPoint();
      if (!this.backgroundCanvas) {
        return;
      }
      this.requestDraw();
    });
  }
  ngAfterViewInit() {
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId)) {
      return;
    }
    this.backgroundCanvas = this.backgroundCanvasRef()?.nativeElement ?? null;
    this.drawNow();
  }
  watchRenderRequests() {
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId)) {
      return;
    }
    this.panZoomController.renderRequests$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.takeUntilDestroyed)(this.destroyRef)).subscribe(mode => {
      if (mode === 'sync') {
        this.drawNow();
      } else {
        this.requestDraw();
      }
    });
  }
  requestDraw() {
    if (this.renderScheduled) {
      return;
    }
    this.renderScheduled = true;
    rxjs__WEBPACK_IMPORTED_MODULE_3__.animationFrameScheduler.schedule(() => {
      this.renderScheduled = false;
      this.drawBackground();
    });
  }
  drawNow() {
    this.drawBackground();
  }
  drawBackground() {
    const canvas = this.backgroundCanvas ?? this.backgroundCanvasRef()?.nativeElement;
    const context = this.getBackgroundContext(canvas);
    const {
      width,
      height
    } = this.getViewportSize();
    if (!canvas || !context || !width || !height) {
      return;
    }
    const dpr = typeof window === 'undefined' ? 1 : window.devicePixelRatio || 1;
    const pixelWidth = Math.round(width * dpr);
    const pixelHeight = Math.round(height * dpr);
    if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
      this.backgroundContext = canvas.getContext('2d');
    }
    const ctx = this.backgroundContext;
    if (!ctx) {
      return;
    }
    const palette = this.readBackgroundPalette();
    const camera = this.panZoomService.snapshot();
    const workspaceRect = this.panZoomService.workspaceRect();
    const zeroPoint = this.panZoomController.viewportZeroPoint();
    const workspaceScreenX = camera.x + zeroPoint.x + workspaceRect.minX * camera.zoom;
    const workspaceScreenY = camera.y + zeroPoint.y + workspaceRect.minY * camera.zoom;
    const workspaceScreenWidth = workspaceRect.width * camera.zoom;
    const workspaceScreenHeight = workspaceRect.height * camera.zoom;
    this.ensureBackgroundPatterns(ctx, palette.gridColor);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = palette.viewportBackground;
    ctx.fillRect(0, 0, width, height);
    if (!workspaceScreenWidth || !workspaceScreenHeight) {
      return;
    }
    ctx.fillStyle = palette.workspaceBackground;
    ctx.fillRect(workspaceScreenX, workspaceScreenY, workspaceScreenWidth, workspaceScreenHeight);
    ctx.strokeStyle = palette.borderColor;
    ctx.lineWidth = 1;
    ctx.strokeRect(workspaceScreenX, workspaceScreenY, workspaceScreenWidth, workspaceScreenHeight);
    const pattern = camera.zoom > GRID_PATTERN_SWITCH_SCALE ? this.backgroundPatterns?.normal : this.backgroundPatterns?.simple;
    if (!pattern || camera.zoom < GRID_VISIBILITY_THRESHOLD) {
      return;
    }
    ctx.save();
    ctx.beginPath();
    ctx.rect(workspaceScreenX, workspaceScreenY, workspaceScreenWidth, workspaceScreenHeight);
    ctx.clip();
    ctx.translate(camera.x + zeroPoint.x, camera.y + zeroPoint.y);
    ctx.scale(camera.zoom, camera.zoom);
    ctx.fillStyle = pattern;
    ctx.fillRect(workspaceRect.minX, workspaceRect.minY, workspaceRect.width, workspaceRect.height);
    ctx.restore();
  }
  getBackgroundContext(canvas) {
    if (this.backgroundContext) {
      return this.backgroundContext;
    }
    if (!canvas) {
      return null;
    }
    this.backgroundContext = canvas.getContext('2d');
    return this.backgroundContext;
  }
  getViewportSize() {
    return {
      width: this.drawFlowElement.offsetWidth || this.host.nativeElement.clientWidth,
      height: this.drawFlowElement.offsetHeight || this.host.nativeElement.clientHeight
    };
  }
  readBackgroundPalette() {
    const styles = getComputedStyle(this.drawFlowElement);
    return {
      viewportBackground: styles.getPropertyValue('--df-pan-zoom-viewport-background').trim() || '#eaeaea',
      workspaceBackground: styles.getPropertyValue('--df-pan-zoom-workspace-background').trim() || '#f9f9f9',
      gridColor: styles.getPropertyValue('--df-pan-zoom-grid-color').trim() || '#d0d2ce',
      borderColor: styles.getPropertyValue('--df-pan-zoom-border-color').trim() || '#eaeaea'
    };
  }
  ensureBackgroundPatterns(ctx, gridColor) {
    if (this.backgroundPatterns?.gridColor === gridColor) {
      return;
    }
    this.backgroundPatterns = {
      gridColor,
      normal: this.createGridPattern(ctx, gridColor, false),
      simple: this.createGridPattern(ctx, gridColor, true)
    };
  }
  createGridPattern(ctx, color, simple) {
    const patternCanvas = document.createElement('canvas');
    const patternContext = patternCanvas.getContext('2d');
    if (!patternContext) {
      return null;
    }
    const patternSize = GRID_PATTERN_REPEAT * GRID_SIZE;
    const majorDotSize = simple ? GRID_MAJOR_SIMPLE_DOT_SIZE : GRID_MAJOR_DOT_SIZE;
    patternCanvas.width = patternSize;
    patternCanvas.height = patternSize;
    patternContext.clearRect(0, 0, patternSize, patternSize);
    patternContext.fillStyle = color;
    for (let x = -1; x < GRID_PATTERN_REPEAT + 1; x++) {
      for (let y = -1; y < GRID_PATTERN_REPEAT + 1; y++) {
        if (x % GRID_PATTERN_REPEAT === 0 && y % GRID_PATTERN_REPEAT === 0) {
          patternContext.fillRect(x * GRID_SIZE - majorDotSize / 2, y * GRID_SIZE - majorDotSize / 2, majorDotSize, majorDotSize);
        } else if (!simple) {
          patternContext.fillRect(x * GRID_SIZE - GRID_DOT_SIZE / 2, y * GRID_SIZE - GRID_DOT_SIZE / 2, GRID_DOT_SIZE, GRID_DOT_SIZE);
        }
      }
    }
    return ctx.createPattern(patternCanvas, 'repeat');
  }
}
_PanZoomBackgroundCanvasComponent = PanZoomBackgroundCanvasComponent;
_PanZoomBackgroundCanvasComponent.ɵfac = function PanZoomBackgroundCanvasComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PanZoomBackgroundCanvasComponent)();
};
_PanZoomBackgroundCanvasComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _PanZoomBackgroundCanvasComponent,
  selectors: [["df-pan-zoom-background-canvas"]],
  viewQuery: function PanZoomBackgroundCanvasComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuerySignal"](ctx.backgroundCanvasRef, _c0, 5);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryAdvance"]();
    }
  },
  decls: 2,
  vars: 0,
  consts: [["backgroundCanvas", ""], ["aria-hidden", "true", 1, "pan-zoom-background__canvas"]],
  template: function PanZoomBackgroundCanvasComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 1, 0);
    }
  },
  styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  display: block;\n  inset: 0;\n  pointer-events: none;\n}\n.pan-zoom-background__canvas[_ngcontent-%COMP%] {\n  display: block;\n  inline-size: 100%;\n  block-size: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLWRyYXctZmxvdy9zcmMvbGliL2NvbXBvbmVudHMvcGFuLXpvb20vcGFuLXpvb20tYmFja2dyb3VuZC1jYW52YXMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaW5zZXQ6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5wYW4tem9vbS1iYWNrZ3JvdW5kX19jYW52YXMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgIGJsb2NrLXNpemU6IDEwMCU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ },

/***/ 82535
/*!****************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/pan-zoom/pan-zoom-gestures.service.ts ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanZoomGesturesService: () => (/* binding */ PanZoomGesturesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 47066);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 870);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 61856);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 24406);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 29155);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 95603);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 56816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 21082);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 65213);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 61969);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 35733);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../helpers */ 50315);
/* harmony import */ var _pan_zoom_options__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pan-zoom.options */ 25741);
/* harmony import */ var _pan_zoom_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pan-zoom.service */ 96592);
var _PanZoomGesturesService;






const TRACKPAD_DETECTION_STATE_TIMEOUT = 60_000;
class PanZoomGesturesService {
  constructor() {
    this.panZoomOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_pan_zoom_options__WEBPACK_IMPORTED_MODULE_13__.DF_PAN_ZOOM_OPTIONS);
    this.panZoomService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_pan_zoom_service__WEBPACK_IMPORTED_MODULE_14__.PanZoomService);
    this.streams = new WeakMap();
    this.trackpadDetected = false;
    this.lastTrackpadDetectionTime = null;
    this.lastTrackpadDpr = 0;
  }
  streamFor(nativeElement) {
    const cached = this.streams.get(nativeElement);
    if (cached) {
      return cached;
    }
    const gestures$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(this.createWheelStream(nativeElement), this.createTouchStream(nativeElement)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.share)());
    this.streams.set(nativeElement, gestures$);
    return gestures$;
  }
  createWheelStream(nativeElement) {
    const pointerPosition$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(nativeElement, 'pointermove', {
      passive: true
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(nativeElement, 'mousemove', {
      passive: true
    })).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(({
      clientX,
      clientY
    }) => ({
      clientX,
      clientY
    })), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.startWith)(this.getElementCenter(nativeElement)));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(nativeElement, 'wheel', {
      passive: false
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(event => {
      event.preventDefault();
      event.stopPropagation();
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.withLatestFrom)(pointerPosition$), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(([event, pointer]) => this.mapWheelToGesture(event, nativeElement, pointer)));
  }
  createTouchStream(nativeElement) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(nativeElement, 'touchstart', {
      passive: true
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.filter)(({
      touches
    }) => touches.length > 1), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(startEvent => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(nativeElement, 'touchmove', {
      passive: false
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(event => {
      event.preventDefault();
      event.stopPropagation();
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.scan)((prev, event) => {
      const distance = (0,_helpers__WEBPACK_IMPORTED_MODULE_12__.dfDistanceBetweenTouches)(event);
      return {
        event,
        distance,
        deltaScale: (distance - prev.distance) * this.panZoomOptions.touchSensitivity
      };
    }, {
      event: startEvent,
      distance: (0,_helpers__WEBPACK_IMPORTED_MODULE_12__.dfDistanceBetweenTouches)(startEvent),
      deltaScale: 0
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(({
      event,
      deltaScale
    }) => {
      const [touch1, touch2] = [event.touches[0] ?? {
        clientX: 0,
        clientY: 0
      }, event.touches[1] ?? {
        clientX: 0,
        clientY: 0
      }];
      return {
        type: 'zoom',
        clientX: (touch1.clientX + touch2.clientX) / 2,
        clientY: (touch1.clientY + touch2.clientY) / 2,
        deltaScale,
        event
      };
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(nativeElement, 'touchend'), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(nativeElement, 'touchcancel'))))));
  }
  mapWheelToGesture(event, nativeElement, pointer) {
    const isTrackpad = this.isTrackpadWheelEvent(event);
    const isPinchLike = this.isPinchGesture(event);
    const isTrackpadMove = isTrackpad && !isPinchLike;
    const clientPosition = this.resolveWheelClientPosition(event, nativeElement, pointer);
    if (isTrackpadMove || !isTrackpad && !this.isMetaKeyEvent(event) && this.panZoomOptions.wheelBehavior === 'scroll') {
      return this.createPanGestureFromWheel(event);
    }
    const isPinchToZoom = isTrackpad && isPinchLike;
    const acceleration = isPinchToZoom ? this.panZoomOptions.pinchZoomSpeed : 1;
    return this.createZoomGestureFromWheel(event, acceleration, clientPosition);
  }
  createPanGestureFromWheel(event) {
    const hasWrongHorizontalScroll = event.shiftKey && Math.abs(event.deltaY) > 0.001;
    return {
      type: 'pan',
      deltaX: hasWrongHorizontalScroll ? -event.deltaY : -event.deltaX,
      deltaY: hasWrongHorizontalScroll ? -event.deltaX : -event.deltaY,
      event
    };
  }
  createZoomGestureFromWheel(event, acceleration, clientPosition) {
    if (!event.deltaY) {
      return {
        type: 'zoom',
        clientX: clientPosition.clientX,
        clientY: clientPosition.clientY,
        deltaScale: 0,
        event
      };
    }
    const pinchSpeed = Math.sign(event.deltaY) * (0,_helpers__WEBPACK_IMPORTED_MODULE_12__.dfClamp)(Math.abs(event.deltaY), 1, 20);
    // `wheelStep` has priority over deprecated `zoomWheelSensitivity`.
    const wheelStep = this.panZoomOptions.wheelStep ?? this.panZoomOptions.zoomWheelSensitivity;
    const dScale = wheelStep * this.panZoomOptions.wheelSpeed * pinchSpeed * acceleration;
    const cameraScale = this.panZoomService.snapshot().zoom;
    return {
      type: 'zoom',
      clientX: clientPosition.clientX,
      clientY: clientPosition.clientY,
      deltaScale: -dScale * cameraScale,
      event
    };
  }
  isMetaKeyEvent(event) {
    return event.ctrlKey || event.metaKey;
  }
  isPinchGesture(event) {
    return this.isMetaKeyEvent(event) || event.deltaZ !== 0;
  }
  isTrackpadWheelEvent(event, dpr = globalThis.devicePixelRatio || 1) {
    const now = globalThis.performance.now();
    if (this.trackpadDetected && this.lastTrackpadDetectionTime !== null) {
      if (now - this.lastTrackpadDetectionTime >= TRACKPAD_DETECTION_STATE_TIMEOUT || this.lastTrackpadDpr !== dpr) {
        this.trackpadDetected = false;
        this.lastTrackpadDetectionTime = null;
      }
    }
    const normalizedDeltaY = event.deltaY * dpr;
    const normalizedDeltaX = event.deltaX * dpr;
    const hasFractionalDelta = !Number.isInteger(event.deltaY) || !Number.isInteger(event.deltaX) || !Number.isInteger(normalizedDeltaY) || !Number.isInteger(normalizedDeltaX);
    const isSmallDelta = Math.abs(event.deltaY) < 50 && Math.abs(event.deltaX) < 50;
    if ((event.ctrlKey || event.metaKey) && (hasFractionalDelta || isSmallDelta)) {
      this.markAsTrackpad(dpr, now);
      return true;
    }
    if (normalizedDeltaX !== 0 && !event.shiftKey) {
      this.markAsTrackpad(dpr, now);
      return true;
    }
    if (hasFractionalDelta) {
      this.markAsTrackpad(dpr, now);
      return true;
    }
    if (this.trackpadDetected && this.lastTrackpadDetectionTime !== null) {
      if (isSmallDelta) {
        this.lastTrackpadDetectionTime = now;
      }
      return true;
    }
    this.trackpadDetected = false;
    this.lastTrackpadDetectionTime = null;
    return false;
  }
  markAsTrackpad(dpr, now) {
    this.trackpadDetected = true;
    this.lastTrackpadDetectionTime = now;
    this.lastTrackpadDpr = dpr;
  }
  resolveWheelClientPosition(event, nativeElement, fallback) {
    if (event.clientX !== 0 || event.clientY !== 0) {
      return {
        clientX: event.clientX,
        clientY: event.clientY
      };
    }
    const rect = nativeElement.getBoundingClientRect();
    if (this.isPointInsideRect(fallback, rect)) {
      return fallback;
    }
    return this.getElementCenter(nativeElement);
  }
  isPointInsideRect(point, rect) {
    return point.clientX >= rect.left && point.clientX <= rect.right && point.clientY >= rect.top && point.clientY <= rect.bottom;
  }
  getElementCenter(nativeElement) {
    const rect = nativeElement.getBoundingClientRect();
    return {
      clientX: rect.left + rect.width / 2,
      clientY: rect.top + rect.height / 2
    };
  }
}
_PanZoomGesturesService = PanZoomGesturesService;
_PanZoomGesturesService.ɵfac = function PanZoomGesturesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PanZoomGesturesService)();
};
_PanZoomGesturesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _PanZoomGesturesService,
  factory: _PanZoomGesturesService.ɵfac
});

/***/ },

/***/ 50107
/*!**************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/pan-zoom/pan-zoom.bounds-tracker.ts ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanZoomBoundsTracker: () => (/* binding */ PanZoomBoundsTracker)
/* harmony export */ });
class PanZoomBoundsTracker {
  constructor() {
    this.items = new Set();
    this.bounds = {
      minX: Infinity,
      minY: Infinity,
      maxX: -Infinity,
      maxY: -Infinity
    };
    this.boundaryItems = {
      minX: new Set(),
      minY: new Set(),
      maxX: new Set(),
      maxY: new Set()
    };
  }
  has(item) {
    return this.items.has(item);
  }
  add(item) {
    this.items.add(item);
    if (this.hasValidBounds(item)) {
      this.updateBoundsIncremental(item);
    }
  }
  update(item, nextBounds) {
    if (!this.items.has(item)) {
      this.add(item);
      return;
    }
    const previousBounds = {
      ...item
    };
    Object.assign(item, nextBounds);
    if (!this.hasValidBounds(item)) {
      this.removeFromBoundaryTracking(item, previousBounds);
      if (this.needsRecalculation(previousBounds)) {
        this.recalculateBounds();
      }
      return;
    }
    this.removeFromBoundaryTracking(item, previousBounds);
    if (this.needsRecalculation(previousBounds)) {
      this.recalculateBounds();
    } else {
      this.updateBoundsIncremental(item);
    }
  }
  remove(item) {
    if (!this.items.delete(item)) {
      return;
    }
    const wasBoundaryItem = this.isOnBoundary(item);
    this.removeFromBoundaryTracking(item);
    if (wasBoundaryItem) {
      this.recalculateBounds();
    }
  }
  clear() {
    this.items.clear();
    this.bounds = {
      minX: Infinity,
      minY: Infinity,
      maxX: -Infinity,
      maxY: -Infinity
    };
    this.boundaryItems = {
      minX: new Set(),
      minY: new Set(),
      maxX: new Set(),
      maxY: new Set()
    };
  }
  toJSON() {
    if (!this.items.size) {
      return {
        length: 0,
        minX: 0,
        minY: 0,
        maxX: 0,
        maxY: 0
      };
    }
    if (this.bounds.minX === Infinity || this.bounds.maxX === -Infinity) {
      return {
        length: this.items.size,
        minX: 0,
        minY: 0,
        maxX: 0,
        maxY: 0
      };
    }
    return {
      length: this.items.size,
      ...this.bounds
    };
  }
  updateBoundsIncremental(item) {
    if (!this.hasValidBounds(item)) {
      return;
    }
    if (this.bounds.minX === Infinity || item.minX <= this.bounds.minX) {
      if (item.minX < this.bounds.minX) {
        this.boundaryItems.minX.clear();
        this.bounds.minX = item.minX;
      }
      this.boundaryItems.minX.add(item);
    }
    if (this.bounds.minY === Infinity || item.minY <= this.bounds.minY) {
      if (item.minY < this.bounds.minY) {
        this.boundaryItems.minY.clear();
        this.bounds.minY = item.minY;
      }
      this.boundaryItems.minY.add(item);
    }
    if (item.maxX >= this.bounds.maxX) {
      if (item.maxX > this.bounds.maxX) {
        this.boundaryItems.maxX.clear();
        this.bounds.maxX = item.maxX;
      }
      this.boundaryItems.maxX.add(item);
    }
    if (item.maxY >= this.bounds.maxY) {
      if (item.maxY > this.bounds.maxY) {
        this.boundaryItems.maxY.clear();
        this.bounds.maxY = item.maxY;
      }
      this.boundaryItems.maxY.add(item);
    }
  }
  recalculateBounds() {
    this.bounds = {
      minX: Infinity,
      minY: Infinity,
      maxX: -Infinity,
      maxY: -Infinity
    };
    this.boundaryItems = {
      minX: new Set(),
      minY: new Set(),
      maxX: new Set(),
      maxY: new Set()
    };
    for (const item of this.items) {
      this.updateBoundsIncremental(item);
    }
  }
  isOnBoundary(item) {
    return this.boundaryItems.minX.has(item) || this.boundaryItems.minY.has(item) || this.boundaryItems.maxX.has(item) || this.boundaryItems.maxY.has(item);
  }
  removeFromBoundaryTracking(item, bounds = item) {
    if (bounds.minX === this.bounds.minX) {
      this.boundaryItems.minX.delete(item);
    }
    if (bounds.minY === this.bounds.minY) {
      this.boundaryItems.minY.delete(item);
    }
    if (bounds.maxX === this.bounds.maxX) {
      this.boundaryItems.maxX.delete(item);
    }
    if (bounds.maxY === this.bounds.maxY) {
      this.boundaryItems.maxY.delete(item);
    }
  }
  needsRecalculation(previousBounds) {
    return previousBounds.minX === this.bounds.minX && this.boundaryItems.minX.size === 0 || previousBounds.minY === this.bounds.minY && this.boundaryItems.minY.size === 0 || previousBounds.maxX === this.bounds.maxX && this.boundaryItems.maxX.size === 0 || previousBounds.maxY === this.bounds.maxY && this.boundaryItems.maxY.size === 0;
  }
  hasValidBounds(item) {
    return Number.isFinite(item.minX) && Number.isFinite(item.minY) && Number.isFinite(item.maxX) && Number.isFinite(item.maxY);
  }
}

/***/ },

/***/ 64238
/*!***********************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/pan-zoom/pan-zoom.camera.math.ts ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alignCameraToWorldRect: () => (/* binding */ alignCameraToWorldRect),
/* harmony export */   clampByPanSize: () => (/* binding */ clampByPanSize),
/* harmony export */   clampByUsableRect: () => (/* binding */ clampByUsableRect),
/* harmony export */   clampScale: () => (/* binding */ clampScale),
/* harmony export */   getContainerOffsets: () => (/* binding */ getContainerOffsets),
/* harmony export */   getViewportCenter: () => (/* binding */ getViewportCenter),
/* harmony export */   getViewportZeroPoint: () => (/* binding */ getViewportZeroPoint),
/* harmony export */   moveBy: () => (/* binding */ moveBy),
/* harmony export */   zoomAtPoint: () => (/* binding */ zoomAtPoint)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ 50315);

function clampScale(scale, min, max) {
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.dfClamp)(scale, min, max);
}
function moveBy(camera, deltaX, deltaY) {
  return {
    ...camera,
    x: camera.x + deltaX,
    y: camera.y + deltaY
  };
}
function clampByPanSize(camera, panSize) {
  const maxOffsetX = camera.zoom * panSize.width;
  const maxOffsetY = camera.zoom * panSize.height;
  return {
    ...camera,
    x: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.dfClamp)(camera.x, -maxOffsetX, maxOffsetX),
    y: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.dfClamp)(camera.y, -maxOffsetY, maxOffsetY)
  };
}
function clampByUsableRect(camera, usableRect, viewportSize, zeroPoint) {
  if (!viewportSize.width || !viewportSize.height || !camera.zoom) {
    return camera;
  }
  const minCameraX = -usableRect.maxX * camera.zoom - zeroPoint.x;
  const maxCameraX = -usableRect.minX * camera.zoom + viewportSize.width - zeroPoint.x;
  const minCameraY = -usableRect.maxY * camera.zoom - zeroPoint.y;
  const maxCameraY = -usableRect.minY * camera.zoom + viewportSize.height - zeroPoint.y;
  return {
    ...camera,
    x: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.dfClamp)(camera.x, Math.min(minCameraX, maxCameraX), Math.max(minCameraX, maxCameraX)),
    y: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.dfClamp)(camera.y, Math.min(minCameraY, maxCameraY), Math.max(minCameraY, maxCameraY))
  };
}
function zoomAtPoint(camera, point, targetScale, options) {
  const zoom = clampScale(targetScale, options.minZoom, options.maxZoom);
  const dx = (point.x - camera.x) / camera.zoom;
  const dy = (point.y - camera.y) / camera.zoom;
  const dxNext = (point.x - camera.x) / zoom;
  const dyNext = (point.y - camera.y) / zoom;
  return {
    ...camera,
    x: camera.x + (dxNext - dx) * zoom,
    y: camera.y + (dyNext - dy) * zoom,
    zoom
  };
}
function getViewportZeroPoint(rootSize, options) {
  return {
    x: options.leftPosition ?? rootSize.width / 2,
    y: options.topPosition ?? rootSize.height / 2
  };
}
function getContainerOffsets(rootSize, options) {
  const zeroPoint = getViewportZeroPoint(rootSize, options);
  const translateX = zeroPoint.x - rootSize.width / 2;
  const translateY = zeroPoint.y - rootSize.height / 2;
  return {
    offsetX: -translateX,
    offsetY: -translateY,
    translateX,
    translateY
  };
}
function getViewportCenter(camera, panSize) {
  const halfOfPanWidth = panSize.width / 2;
  const halfOfPanHeight = panSize.height / 2;
  return {
    x: halfOfPanWidth + camera.x * -1 / camera.zoom - halfOfPanWidth,
    y: halfOfPanHeight + camera.y * -1 / camera.zoom - halfOfPanHeight
  };
}
function alignCameraToWorldRect(camera, targetRect, viewportSize, options) {
  const zeroPoint = getViewportZeroPoint(viewportSize, options);
  return {
    ...camera,
    x: options.leftPosition === null ? camera.x : options.leftPosition - zeroPoint.x - targetRect.minX * camera.zoom,
    y: options.topPosition === null ? camera.y : options.topPosition - zeroPoint.y - targetRect.minY * camera.zoom
  };
}

/***/ },

/***/ 24408
/*!*********************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/pan-zoom/pan-zoom.component.ts ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanZoomComponent: () => (/* binding */ PanZoomComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 43539);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 48065);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 97757);
/* harmony import */ var _directives_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/drag-drop */ 84967);
/* harmony import */ var _ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ng-draw-flow.token */ 59497);
/* harmony import */ var _pan_zoom_controller_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pan-zoom.controller.service */ 70310);
/* harmony import */ var _pan_zoom_options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pan-zoom.options */ 25741);
/* harmony import */ var _pan_zoom_background_canvas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pan-zoom-background-canvas.component */ 80166);
/* harmony import */ var _pan_zoom_gestures_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pan-zoom-gestures.service */ 82535);
/* harmony import */ var _ng_web_apis_resize_observer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-web-apis/resize-observer */ 65238);
var _PanZoomComponent;












const _c0 = ["*"];
function PanZoomComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "df-pan-zoom-background-canvas");
  }
}
class PanZoomComponent {
  constructor() {
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef);
    this.el = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    this.drawFlowElement = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_5__.DRAW_FLOW_ROOT_ELEMENT);
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DestroyRef);
    this.ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
    this.platformId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID);
    this.panZoomOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_pan_zoom_options__WEBPACK_IMPORTED_MODULE_7__.DF_PAN_ZOOM_OPTIONS);
    this.panZoomController = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_pan_zoom_controller_service__WEBPACK_IMPORTED_MODULE_6__.PanZoomControllerService);
    this.panZoomGestures = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_pan_zoom_gestures_service__WEBPACK_IMPORTED_MODULE_9__.PanZoomGesturesService);
    this.dragDropService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_directives_drag_drop__WEBPACK_IMPORTED_MODULE_4__.DragDropService);
    this.renderFrameSubscription = null;
    this.containerOffsetSyncSubscription = null;
    this.scale = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.output)();
    this.cursor = this.panZoomController.cursor;
    this.panTransform = this.panZoomController.panTransform;
    this.transitionDuration = this.panZoomController.transitionDuration;
    this.watchController();
    this.watchGestures();
  }
  ngOnInit() {
    this.syncContainerOffsets();
  }
  ngOnDestroy() {
    this.cancelScheduledRender();
    this.cancelScheduledContainerOffsetSync();
  }
  resetPanzoom() {
    this.panZoomController.resetPanzoom();
  }
  setPosition(position) {
    this.panZoomController.setPosition(position);
  }
  setScale(scale) {
    this.panZoomController.setScale(scale);
  }
  zoomIn() {
    this.panZoomController.zoomIn();
  }
  zoomOut() {
    this.panZoomController.zoomOut();
  }
  get backgroundCanvasVisible() {
    return this.panZoomOptions.backgroundCanvas.visible;
  }
  onPan(event) {
    this.panZoomController.handlePan(event);
  }
  onBoardResize(entries) {
    if (!entries.length) {
      return;
    }
    this.requestContainerOffsetSync();
  }
  watchController() {
    this.panZoomController.scaleChanges$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.takeUntilDestroyed)(this.destroyRef)).subscribe(scale => this.scale.emit(scale));
    this.panZoomController.renderRequests$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.takeUntilDestroyed)(this.destroyRef)).subscribe(mode => {
      if (mode === 'sync') {
        this.renderNow();
      } else {
        this.requestRender();
      }
    });
  }
  watchGestures() {
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId)) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      this.panZoomGestures.streamFor(this.el.nativeElement).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.takeUntilDestroyed)(this.destroyRef)).subscribe(gesture => this.processGesture(gesture));
      this.dragDropService.streamFor(this.el.nativeElement).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.takeUntilDestroyed)(this.destroyRef)).subscribe(event => this.onPan(event));
    });
  }
  processGesture(gesture) {
    if (gesture.type === 'pan') {
      this.panZoomController.queueGesture(gesture);
      return;
    }
    const viewportRect = this.el.nativeElement.getBoundingClientRect();
    const zeroPoint = this.panZoomController.viewportZeroPoint();
    const point = {
      x: gesture.clientX - viewportRect.x - zeroPoint.x,
      y: gesture.clientY - viewportRect.y - zeroPoint.y
    };
    this.panZoomController.queueGesture({
      type: 'zoom',
      point,
      deltaScale: gesture.deltaScale
    });
  }
  requestRender() {
    if (this.renderFrameSubscription) {
      return;
    }
    this.renderFrameSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.animationFrameScheduler.schedule(() => {
      this.renderFrameSubscription = null;
      this.cdr.detectChanges();
    });
  }
  renderNow() {
    this.cancelScheduledRender();
    this.cdr.detectChanges();
  }
  cancelScheduledRender() {
    this.renderFrameSubscription?.unsubscribe();
    this.renderFrameSubscription = null;
  }
  requestContainerOffsetSync() {
    if (this.containerOffsetSyncSubscription) {
      return;
    }
    this.containerOffsetSyncSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.animationFrameScheduler.schedule(() => {
      this.containerOffsetSyncSubscription = null;
      this.syncContainerOffsets();
    });
  }
  cancelScheduledContainerOffsetSync() {
    this.containerOffsetSyncSubscription?.unsubscribe();
    this.containerOffsetSyncSubscription = null;
  }
  syncContainerOffsets() {
    const rootSize = {
      width: this.drawFlowElement.offsetWidth,
      height: this.drawFlowElement.offsetHeight
    };
    if (!rootSize.width || !rootSize.height) {
      return;
    }
    this.panZoomController.syncContainerOffsets(rootSize);
  }
}
_PanZoomComponent = PanZoomComponent;
_PanZoomComponent.ɵfac = function PanZoomComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PanZoomComponent)();
};
_PanZoomComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _PanZoomComponent,
  selectors: [["df-pan-zoom"]],
  hostBindings: function PanZoomComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("waResizeObserver", function PanZoomComponent_waResizeObserver_HostBindingHandler($event) {
        return ctx.onBoardResize($event);
      });
    }
  },
  outputs: {
    scale: "scale"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_pan_zoom_controller_service__WEBPACK_IMPORTED_MODULE_6__.PanZoomControllerService, _pan_zoom_gestures_service__WEBPACK_IMPORTED_MODULE_9__.PanZoomGesturesService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵHostDirectivesFeature"]([{
    directive: _ng_web_apis_resize_observer__WEBPACK_IMPORTED_MODULE_10__.WaResizeObserver,
    outputs: ["waResizeObserver", "waResizeObserver"]
  }])],
  ngContentSelectors: _c0,
  decls: 5,
  vars: 7,
  consts: [["data-element", "scene", 1, "pan-zoom__viewport"], [1, "pan-zoom"], [1, "pan-zoom__container", 2, "position", "relative", "width", "0", "height", "0"]],
  template: function PanZoomComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PanZoomComponent_Conditional_1_Template, 1, 0, "df-pan-zoom-background-canvas");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.backgroundCanvasVisible ? 1 : -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("cursor", ctx.cursor())("transform", ctx.panTransform())("transition-duration", ctx.transitionDuration());
    }
  },
  dependencies: [_pan_zoom_background_canvas_component__WEBPACK_IMPORTED_MODULE_8__.PanZoomBackgroundCanvasComponent],
  styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: block;\n  inline-size: 100%;\n  block-size: 100%;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.pan-zoom__viewport[_ngcontent-%COMP%] {\n  position: relative;\n  inline-size: 100%;\n  block-size: 100%;\n}\n.pan-zoom[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  inset-block-start: 0;\n  inset-inline-start: 0;\n  inline-size: 0;\n  block-size: 0;\n  transform-origin: 0 0;\n  will-change: transform;\n  touch-action: none;\n}\n.pan-zoom__container[_ngcontent-%COMP%] {\n  position: relative;\n  inline-size: 0;\n  block-size: 0;\n}\n.transitive[_ngcontent-%COMP%] {\n  transition-duration: 0.3s;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLWRyYXctZmxvdy9zcmMvbGliL2NvbXBvbmVudHMvcGFuLXpvb20vcGFuLXpvb20uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBREo7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFGSjtBQUtBO0VBQ0kseUJBQUE7QUFISiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgYmxvY2stc2l6ZTogMTAwJTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnBhbi16b29tX192aWV3cG9ydCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgIGJsb2NrLXNpemU6IDEwMCU7XG59XG5cbi5wYW4tem9vbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgaW5zZXQtYmxvY2stc3RhcnQ6IDA7XG4gICAgaW5zZXQtaW5saW5lLXN0YXJ0OiAwO1xuICAgIGlubGluZS1zaXplOiAwO1xuICAgIGJsb2NrLXNpemU6IDA7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgdG91Y2gtYWN0aW9uOiBub25lO1xufVxuXG4ucGFuLXpvb21fX2NvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGlubGluZS1zaXplOiAwO1xuICAgIGJsb2NrLXNpemU6IDA7XG59XG5cbi50cmFuc2l0aXZlIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ },

/***/ 69104
/*!*****************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/pan-zoom/pan-zoom.const.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DF_PAN_ZOOM_INITIAL_SCALE: () => (/* binding */ DF_PAN_ZOOM_INITIAL_SCALE)
/* harmony export */ });
const DF_PAN_ZOOM_INITIAL_SCALE = 1;

/***/ },

/***/ 70310
/*!******************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/pan-zoom/pan-zoom.controller.service.ts ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanZoomControllerService: () => (/* binding */ PanZoomControllerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 48065);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 63150);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 97757);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5219);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 75117);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../consts */ 82110);
/* harmony import */ var _directives_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/drag-drop */ 84967);
/* harmony import */ var _pan_zoom_camera_math__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pan-zoom.camera.math */ 64238);
/* harmony import */ var _pan_zoom_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pan-zoom.const */ 69104);
/* harmony import */ var _pan_zoom_options__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pan-zoom.options */ 25741);
/* harmony import */ var _pan_zoom_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pan-zoom.service */ 96592);
var _PanZoomControllerService;










class PanZoomControllerService {
  constructor() {
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef);
    this.panZoomService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_pan_zoom_service__WEBPACK_IMPORTED_MODULE_11__.PanZoomService);
    this.panZoomOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_pan_zoom_options__WEBPACK_IMPORTED_MODULE_10__.DF_PAN_ZOOM_OPTIONS);
    this.draggingSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
    this.transitionedSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(true);
    this.viewportSizeSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)({
      width: 0,
      height: 0
    });
    this.viewportZeroPointSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(_consts__WEBPACK_IMPORTED_MODULE_6__.INITIAL_COORDINATES);
    this.layoutOffsetSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(_consts__WEBPACK_IMPORTED_MODULE_6__.INITIAL_COORDINATES);
    this.renderRequestsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.scaleChangesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.pendingGestures = [];
    this.emittedZoom = Number.NaN;
    this.flushScheduled = false;
    this.dragging = this.draggingSignal.asReadonly();
    this.transitioned = this.transitionedSignal.asReadonly();
    this.viewportSize = this.viewportSizeSignal.asReadonly();
    this.viewportZeroPoint = this.viewportZeroPointSignal.asReadonly();
    this.layoutOffset = this.layoutOffsetSignal.asReadonly();
    this.renderRequests$ = this.renderRequestsSubject.asObservable();
    this.scaleChanges$ = this.scaleChangesSubject.asObservable();
    this.cursor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => this.draggingSignal() ? 'grabbing' : 'initial');
    this.panTransform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const {
        x,
        y,
        zoom
      } = this.panZoomService.camera();
      const {
        x: zeroPointX,
        y: zeroPointY
      } = this.viewportZeroPointSignal();
      const translateX = x + zeroPointX;
      const translateY = y + zeroPointY;
      return `translate3d(${translateX}px, ${translateY}px, 0) scale(${zoom})`;
    });
    this.transitionDuration = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => this.transitionedSignal() ? `${this.panZoomOptions.zoomAnimationDuration}ms` : '0s');
  }
  resetPanzoom() {
    this.setPosition({
      ..._consts__WEBPACK_IMPORTED_MODULE_6__.INITIAL_COORDINATES,
      zoom: _pan_zoom_const__WEBPACK_IMPORTED_MODULE_9__.DF_PAN_ZOOM_INITIAL_SCALE
    });
  }
  setPosition(position) {
    const camera = this.panZoomService.snapshot();
    const nextCamera = {
      ...camera,
      ...position,
      zoom: position?.zoom || camera.zoom
    };
    this.panZoomService.setCamera(nextCamera);
    if (position?.zoom) {
      this.emitScale(nextCamera.zoom);
    }
    this.requestRender();
  }
  setScale(scale) {
    const clampedScale = (0,_pan_zoom_camera_math__WEBPACK_IMPORTED_MODULE_8__.clampScale)(scale, this.panZoomOptions.minZoom, this.panZoomOptions.maxZoom);
    this.setZoom(clampedScale);
  }
  zoomIn() {
    const {
      zoomStep,
      maxZoom
    } = this.panZoomOptions;
    const zoom = this.panZoomService.snapshot().zoom + zoomStep;
    this.setZoom(zoom <= maxZoom ? zoom : maxZoom);
  }
  zoomOut() {
    const {
      zoomStep,
      minZoom
    } = this.panZoomOptions;
    const zoom = this.panZoomService.snapshot().zoom - zoomStep;
    this.setZoom(zoom >= minZoom ? zoom : minZoom);
  }
  handlePan({
    distance,
    stage
  }) {
    if (stage === _directives_drag_drop__WEBPACK_IMPORTED_MODULE_7__.DfDragDropStage.Move) {
      if (this.panZoomService.isDisabled()) {
        return;
      }
      this.draggingSignal.set(true);
      this.transitionedSignal.set(false);
      this.panZoomService.setCamera(this.clampCamera((0,_pan_zoom_camera_math__WEBPACK_IMPORTED_MODULE_8__.moveBy)(this.panZoomService.snapshot(), distance.deltaX, distance.deltaY)));
      this.renderNow();
      return;
    }
    this.draggingSignal.set(false);
    this.transitionedSignal.set(true);
    this.requestRender();
  }
  syncContainerOffsets(rootSize) {
    if (!rootSize.width || !rootSize.height) {
      return;
    }
    this.viewportSizeSignal.set(rootSize);
    this.viewportZeroPointSignal.set((0,_pan_zoom_camera_math__WEBPACK_IMPORTED_MODULE_8__.getViewportZeroPoint)(rootSize, {
      leftPosition: this.panZoomOptions.leftPosition,
      topPosition: this.panZoomOptions.topPosition
    }));
    const offsets = (0,_pan_zoom_camera_math__WEBPACK_IMPORTED_MODULE_8__.getContainerOffsets)(rootSize, {
      leftPosition: this.panZoomOptions.leftPosition,
      topPosition: this.panZoomOptions.topPosition
    });
    this.panZoomService.patchCamera({
      offsetX: offsets.offsetX,
      offsetY: offsets.offsetY
    });
    this.layoutOffsetSignal.set({
      x: offsets.translateX,
      y: offsets.translateY
    });
    this.requestRender();
  }
  queueGesture(gesture) {
    if (gesture.type === 'pan' && this.panZoomService.isDisabled()) {
      return;
    }
    this.transitionedSignal.set(false);
    this.pendingGestures.push(gesture);
    this.scheduleGestureFlush();
  }
  flushGestures() {
    this.flushScheduled = false;
    if (!this.pendingGestures.length) {
      return;
    }
    const queue = this.pendingGestures.splice(0);
    const camera = this.panZoomService.snapshot();
    let nextCamera = camera;
    let zoomChanged = false;
    for (const gesture of queue) {
      if (gesture.type === 'pan') {
        nextCamera = this.clampCamera((0,_pan_zoom_camera_math__WEBPACK_IMPORTED_MODULE_8__.moveBy)(nextCamera, gesture.deltaX, gesture.deltaY));
        continue;
      }
      if (!gesture.deltaScale) {
        continue;
      }
      const previousZoom = nextCamera.zoom;
      nextCamera = this.clampCamera((0,_pan_zoom_camera_math__WEBPACK_IMPORTED_MODULE_8__.zoomAtPoint)(nextCamera, gesture.point, nextCamera.zoom + gesture.deltaScale, this.panZoomOptions));
      if (nextCamera.zoom !== previousZoom) {
        zoomChanged = true;
      }
    }
    if (nextCamera.x !== camera.x || nextCamera.y !== camera.y || nextCamera.zoom !== camera.zoom) {
      this.panZoomService.setCamera(nextCamera);
    }
    if (zoomChanged) {
      this.emitScale(nextCamera.zoom);
    }
    this.renderNow();
  }
  scheduleGestureFlush() {
    if (this.flushScheduled) {
      return;
    }
    this.flushScheduled = true;
    rxjs__WEBPACK_IMPORTED_MODULE_3__.animationFrameScheduler.schedule(() => this.flushGestures());
  }
  setZoom(zoom) {
    const camera = this.panZoomService.snapshot();
    this.transitionedSignal.set(true);
    const nextCamera = this.clampCamera({
      ...camera,
      zoom
    });
    this.panZoomService.setCamera(nextCamera);
    this.emitScale(nextCamera.zoom);
    this.requestRender();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.timer)(this.panZoomOptions.zoomAnimationDuration).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.takeUntilDestroyed)(this.destroyRef)).subscribe(() => {
      this.transitionedSignal.set(false);
      this.requestRender();
    });
  }
  emitScale(zoom) {
    if (zoom === this.emittedZoom) {
      return;
    }
    this.scaleChangesSubject.next(Math.round(zoom * 100));
    this.emittedZoom = zoom;
  }
  requestRender() {
    this.renderRequestsSubject.next('async');
  }
  renderNow() {
    this.renderRequestsSubject.next('sync');
  }
  clampCamera(camera) {
    const viewportSize = this.viewportSizeSignal();
    if (!viewportSize.width || !viewportSize.height) {
      return camera;
    }
    const zeroPoint = (0,_pan_zoom_camera_math__WEBPACK_IMPORTED_MODULE_8__.getViewportZeroPoint)(viewportSize, {
      leftPosition: this.panZoomOptions.leftPosition,
      topPosition: this.panZoomOptions.topPosition
    });
    return (0,_pan_zoom_camera_math__WEBPACK_IMPORTED_MODULE_8__.clampByUsableRect)(camera, this.panZoomService.usableRect(), viewportSize, zeroPoint);
  }
}
_PanZoomControllerService = PanZoomControllerService;
_PanZoomControllerService.ɵfac = function PanZoomControllerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PanZoomControllerService)();
};
_PanZoomControllerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _PanZoomControllerService,
  factory: _PanZoomControllerService.ɵfac
});

/***/ },

/***/ 25741
/*!*******************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/pan-zoom/pan-zoom.options.ts ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DF_PAN_ZOOM_DEFAULT_OPTIONS: () => (/* binding */ DF_PAN_ZOOM_DEFAULT_OPTIONS),
/* harmony export */   DF_PAN_ZOOM_OPTIONS: () => (/* binding */ DF_PAN_ZOOM_OPTIONS),
/* harmony export */   dfPanZoomOptionsProvider: () => (/* binding */ dfPanZoomOptionsProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);

const DF_PAN_ZOOM_DEFAULT_OPTIONS = {
  panSize: 2000,
  topPosition: null,
  leftPosition: null,
  minZoom: 0.25,
  maxZoom: 3,
  zoomStep: 0.25,
  zoomAnimationDuration: 300,
  zoomWheelSensitivity: 0.01,
  touchSensitivity: 0.01,
  wheelBehavior: 'zoom',
  wheelSpeed: 1,
  wheelStep: 0.008,
  pinchZoomSpeed: 1,
  backgroundCanvas: {
    visible: true
  }
};
const DF_PAN_ZOOM_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('[DF_PAN_ZOOM_OPTIONS]: [PAN_ZOOM_OPTIONS]', {
  factory: () => DF_PAN_ZOOM_DEFAULT_OPTIONS
});
function dfPanZoomOptionsProvider(options) {
  return {
    provide: DF_PAN_ZOOM_OPTIONS,
    useFactory: () => ({
      ...DF_PAN_ZOOM_DEFAULT_OPTIONS,
      ...options,
      backgroundCanvas: {
        ...DF_PAN_ZOOM_DEFAULT_OPTIONS.backgroundCanvas,
        ...options.backgroundCanvas
      }
    })
  };
}

/***/ },

/***/ 96592
/*!*******************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/pan-zoom/pan-zoom.service.ts ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanZoomService: () => (/* binding */ PanZoomService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _pan_zoom_bounds_tracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pan-zoom.bounds-tracker */ 50107);
var _PanZoomService;



const INITIAL_CAMERA = {
  x: 0,
  y: 0,
  offsetX: 0,
  offsetY: 0,
  zoom: 1
};
const DEFAULT_WORKSPACE_GAP = 400;
class PanZoomService {
  constructor() {
    this.cameraSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(INITIAL_CAMERA);
    this.disabledSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
    this.trackedNodesCountSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(0);
    this.usableRectSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)({
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0
    });
    this.boundsTracker = new _pan_zoom_bounds_tracker__WEBPACK_IMPORTED_MODULE_1__.PanZoomBoundsTracker();
    this.nodeBounds = new Map();
    this.legacyModelProxy = new Proxy({}, {
      get: (_target, property) => {
        if (typeof property !== 'string') {
          return undefined;
        }
        return this.cameraSignal()[property];
      },
      set: (_target, property, value) => {
        if (typeof property !== 'string') {
          return false;
        }
        this.patchCamera({
          [property]: value
        });
        return true;
      },
      ownKeys: () => Reflect.ownKeys(this.cameraSignal()),
      getOwnPropertyDescriptor: (_target, property) => {
        if (typeof property !== 'string') {
          return;
        }
        return {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.cameraSignal()[property]
        };
      }
    });
    this.camera = this.cameraSignal.asReadonly();
    this.disabled = this.disabledSignal.asReadonly();
    this.usableRect = this.usableRectSignal.asReadonly();
    this.workspaceRect = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const usableRect = this.usableRectSignal();
      if (!this.trackedNodesCountSignal()) {
        return toWorkspaceRect({
          minX: -DEFAULT_WORKSPACE_GAP,
          minY: -DEFAULT_WORKSPACE_GAP,
          maxX: DEFAULT_WORKSPACE_GAP,
          maxY: DEFAULT_WORKSPACE_GAP
        });
      }
      return toWorkspaceRect({
        minX: usableRect.minX - DEFAULT_WORKSPACE_GAP,
        minY: usableRect.minY - DEFAULT_WORKSPACE_GAP,
        maxX: usableRect.maxX + DEFAULT_WORKSPACE_GAP,
        maxY: usableRect.maxY + DEFAULT_WORKSPACE_GAP
      });
    });
    this.panSize = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const workspaceRect = this.workspaceRect();
      return {
        width: workspaceRect.width,
        height: workspaceRect.height
      };
    });
    this.workspaceOrigin = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const workspaceRect = this.workspaceRect();
      return {
        x: -workspaceRect.minX,
        y: -workspaceRect.minY
      };
    });
    this.workspaceCenter = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const workspaceRect = this.workspaceRect();
      return {
        x: workspaceRect.minX + workspaceRect.width / 2,
        y: workspaceRect.minY + workspaceRect.height / 2
      };
    });
  }
  /** @deprecated Backward-compatible mutable camera access */
  get panzoomModel() {
    return this.legacyModelProxy;
  }
  set panzoomModel(model) {
    this.setCamera(model);
  }
  /** @deprecated Backward-compatible mutable flag access */
  get panzoomDisabled() {
    return this.disabledSignal();
  }
  set panzoomDisabled(value) {
    this.setDisabled(value);
  }
  snapshot() {
    return this.cameraSignal();
  }
  setCamera(camera) {
    this.cameraSignal.set({
      ...camera
    });
  }
  patchCamera(camera) {
    this.cameraSignal.update(current => ({
      ...current,
      ...camera
    }));
  }
  setDisabled(value) {
    this.disabledSignal.set(value);
  }
  isDisabled() {
    return this.disabledSignal();
  }
  upsertNodeBounds(id, bounds) {
    const tracked = this.nodeBounds.get(id);
    if (tracked) {
      this.boundsTracker.update(tracked, bounds);
    } else {
      const item = {
        id,
        ...bounds
      };
      this.nodeBounds.set(id, item);
      this.boundsTracker.add(item);
      this.trackedNodesCountSignal.set(this.nodeBounds.size);
    }
    this.syncUsableRect();
  }
  removeNodeBounds(id) {
    const tracked = this.nodeBounds.get(id);
    if (!tracked) {
      return;
    }
    this.boundsTracker.remove(tracked);
    this.nodeBounds.delete(id);
    this.trackedNodesCountSignal.set(this.nodeBounds.size);
    this.syncUsableRect();
  }
  getBoundsForNodeIds(ids) {
    if (!ids.length) {
      return null;
    }
    let minX = Number.POSITIVE_INFINITY;
    let minY = Number.POSITIVE_INFINITY;
    let maxX = Number.NEGATIVE_INFINITY;
    let maxY = Number.NEGATIVE_INFINITY;
    for (const id of ids) {
      const bounds = this.nodeBounds.get(id);
      if (!bounds) {
        return null;
      }
      minX = Math.min(minX, bounds.minX);
      minY = Math.min(minY, bounds.minY);
      maxX = Math.max(maxX, bounds.maxX);
      maxY = Math.max(maxY, bounds.maxY);
    }
    return {
      minX,
      minY,
      maxX,
      maxY
    };
  }
  syncUsableRect() {
    const rect = this.boundsTracker.toJSON();
    const nextRect = {
      minX: rect.minX,
      minY: rect.minY,
      maxX: rect.maxX,
      maxY: rect.maxY
    };
    const currentRect = this.usableRectSignal();
    if (currentRect.minX === nextRect.minX && currentRect.minY === nextRect.minY && currentRect.maxX === nextRect.maxX && currentRect.maxY === nextRect.maxY) {
      return;
    }
    this.usableRectSignal.set(nextRect);
  }
}
_PanZoomService = PanZoomService;
_PanZoomService.ɵfac = function PanZoomService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PanZoomService)();
};
_PanZoomService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _PanZoomService,
  factory: _PanZoomService.ɵfac
});
function toWorkspaceRect(bounds) {
  return {
    ...bounds,
    width: bounds.maxX - bounds.minX,
    height: bounds.maxY - bounds.minY
  };
}

/***/ },

/***/ 17788
/*!***************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/components/scene/scene.component.ts ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SceneComponent: () => (/* binding */ SceneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 48065);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _services_ng_draw_flow_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ng-draw-flow-store.service */ 24410);
/* harmony import */ var _validators_invalid_nodes_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../validators/invalid-nodes.token */ 91565);
/* harmony import */ var _connections_connection_connection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../connections/connection/connection.component */ 53700);
/* harmony import */ var _connections_connections_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../connections/connections.service */ 39976);
/* harmony import */ var _connections_draft_connection_draft_connection_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../connections/draft-connection/draft-connection.component */ 71848);
/* harmony import */ var _connections_draft_connection_draft_connection_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../connections/draft-connection/draft-connection.service */ 27232);
/* harmony import */ var _node_node_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../node/node.component */ 76458);
var _SceneComponent;











function SceneComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "df-node", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("connectorDeleted", function SceneComponent_For_1_Template_df_node_connectorDeleted_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onConnectorDeleted($event));
    })("nodeDeleted", function SceneComponent_For_1_Template_df_node_nodeDeleted_0_listener() {
      const node_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onNodeDeleted(node_r3.id));
    })("nodeMoved", function SceneComponent_For_1_Template_df_node_nodeMoved_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onNodeMoved($event));
    })("nodeSelected", function SceneComponent_For_1_Template_df_node_nodeSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onNodeSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invalid", ctx_r1.$invalidNodes().includes(node_r3.id))("node", node_r3);
  }
}
function SceneComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "df-connection", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("connectionDeleted", function SceneComponent_For_3_Template_df_connection_connectionDeleted_0_listener() {
      const connection_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onConnectionDeleted(connection_r5));
    })("connectionSelected", function SceneComponent_For_3_Template_df_connection_connectionSelected_0_listener() {
      const connection_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onConnectionSelected(connection_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const connection_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("connection", connection_r5);
  }
}
function SceneComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "df-draft-connection", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("connectionCreated", function SceneComponent_Conditional_4_Template_df_draft_connection_connectionCreated_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onConnectionCreated($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class SceneComponent {
  constructor() {
    this.connectionsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_connections_connections_service__WEBPACK_IMPORTED_MODULE_6__.ConnectionsService);
    this.draftConnectionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_connections_draft_connection_draft_connection_service__WEBPACK_IMPORTED_MODULE_8__.DraftConnectionService);
    this.store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_ng_draw_flow_store_service__WEBPACK_IMPORTED_MODULE_3__.NgDrawFlowStoreService);
    this.syncingExternalValue = false;
    this.nodeSelected = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    this.nodeMoved = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    this.nodeDeleted = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    this.connectionCreated = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    this.connectionDeleted = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    this.connectionSelected = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    this.isConnectionCreating = this.draftConnectionService.isConnectionCreating;
    this.model = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)({
      nodes: [],
      connections: []
    });
    this.$invalidNodes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_validators_invalid_nodes_token__WEBPACK_IMPORTED_MODULE_4__.INVALID_NODES);
    this.onChange = _ => {};
    this.onTouched = () => {};
    this.initializeConnectionsSubscription();
  }
  writeValue(value) {
    if (!value) {
      return;
    }
    this.model.set(value);
    this.store.updateDataModel(value);
    this.syncingExternalValue = true;
    this.connectionsService.setConnections(value.connections);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(_isDisabled) {}
  onConnectionCreated(connection) {
    this.connectionsService.addConnections([connection]);
    const event = {
      target: connection,
      model: this.model()
    };
    this.store.emitConnectionCreated(event);
    this.connectionCreated.emit(event);
  }
  onConnectionDeleted(connection) {
    const model = this.updateModel(current => ({
      ...current,
      connections: current.connections.filter(existing => !this.isSameConnection(existing, connection))
    }));
    const event = {
      target: connection,
      model
    };
    this.store.emitConnectionDeleted(event);
    this.connectionDeleted.emit(event);
  }
  onConnectionSelected(connection) {
    this.connectionSelected.emit(connection);
  }
  onConnectorDeleted(connectorId) {
    this.connectionsService.removeConnectionsByConnectorId(connectorId);
  }
  onNodeMoved(updated) {
    const model = this.updateModel(current => ({
      ...current,
      nodes: current.nodes.map(n => n.id === updated.id ? updated : n)
    }));
    const event = {
      target: updated,
      model
    };
    this.store.emitNodeMoved(event);
    this.nodeMoved.emit(event);
    this.emitModelChange();
  }
  onNodeDeleted(id) {
    const deleted = this.model().nodes.find(n => n.id === id);
    const model = this.updateModel(current => ({
      ...current,
      nodes: current.nodes.filter(n => n.id !== id)
    }));
    const event = {
      target: deleted,
      model
    };
    this.store.emitNodeDeleted(event);
    this.nodeDeleted.emit(event);
    this.emitConnectionDeletedByNodeId(id);
    this.connectionsService.removeConnectionsByNodeId(id);
    this.emitModelChange();
  }
  onNodeSelected(node) {
    this.nodeSelected.emit(node);
  }
  trackByNodeId(_, node) {
    return node.id;
  }
  trackByConnectionsFn(index, connection) {
    return `${connection.source.nodeId}-${connection.source.connectorId}to${connection.target.nodeId}-${connection.target.connectorId}-${index}`;
  }
  initializeConnectionsSubscription() {
    this.connectionsService.connections$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.takeUntilDestroyed)()).subscribe(connections => {
      const model = this.updateModel(current => ({
        ...current,
        connections
      }));
      this.store.updateDataModel(model);
      this.emitModelChange();
    });
  }
  emitConnectionDeletedByNodeId(nodeId) {
    this.connectionsService.connections().filter(connection => connection.source.nodeId === nodeId || connection.target.nodeId === nodeId).forEach(connection => {
      const model = this.updateModel(current => ({
        ...current,
        connections: current.connections.filter(existing => !this.isSameConnection(existing, connection))
      }));
      const event = {
        target: connection,
        model
      };
      this.store.emitConnectionDeleted(event);
      this.connectionDeleted.emit(event);
    });
  }
  isSameConnection(left, right) {
    return left.source.nodeId === right.source.nodeId && left.source.connectorId === right.source.connectorId && left.target.nodeId === right.target.nodeId && left.target.connectorId === right.target.connectorId;
  }
  updateModel(update) {
    const model = update(this.model());
    this.model.set(model);
    return model;
  }
  emitModelChange() {
    if (this.syncingExternalValue) {
      this.syncingExternalValue = false;
      return;
    }
    this.onTouched();
    this.onChange(this.model());
  }
}
_SceneComponent = SceneComponent;
_SceneComponent.ɵfac = function SceneComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SceneComponent)();
};
_SceneComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _SceneComponent,
  selectors: [["df-scene"]],
  hostAttrs: ["data-element", "scene"],
  outputs: {
    nodeSelected: "nodeSelected",
    nodeMoved: "nodeMoved",
    nodeDeleted: "nodeDeleted",
    connectionCreated: "connectionCreated",
    connectionDeleted: "connectionDeleted",
    connectionSelected: "connectionSelected"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => _SceneComponent),
    multi: true
  }])],
  decls: 5,
  vars: 1,
  consts: [[3, "invalid", "node"], [3, "connection"], [3, "connectorDeleted", "nodeDeleted", "nodeMoved", "nodeSelected", "invalid", "node"], [3, "connectionDeleted", "connectionSelected", "connection"], [3, "connectionCreated"]],
  template: function SceneComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](0, SceneComponent_For_1_Template, 1, 2, "df-node", 0, ctx.trackByNodeId, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](2, SceneComponent_For_3_Template, 1, 1, "df-connection", 1, ctx.trackByConnectionsFn, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SceneComponent_Conditional_4_Template, 1, 0, "df-draft-connection");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.model().nodes);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.model().connections);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.isConnectionCreating() ? 4 : -1);
    }
  },
  dependencies: [_connections_connection_connection_component__WEBPACK_IMPORTED_MODULE_5__.ConnectionComponent, _connections_draft_connection_draft_connection_component__WEBPACK_IMPORTED_MODULE_7__.DraftConnectionComponent, _node_node_component__WEBPACK_IMPORTED_MODULE_9__.NodeComponent],
  styles: ["[_nghost-%COMP%] {\n  display: contents;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLWRyYXctZmxvdy9zcmMvbGliL2NvbXBvbmVudHMvc2NlbmUvc2NlbmUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ },

/***/ 81725
/*!**********************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/consts/handlers.ts ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ 82110
/*!*******************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/consts/index.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DF_FALSE_HANDLER: () => (/* reexport safe */ _handlers__WEBPACK_IMPORTED_MODULE_0__.DF_FALSE_HANDLER),
/* harmony export */   DF_TRUE_HANDLER: () => (/* reexport safe */ _handlers__WEBPACK_IMPORTED_MODULE_0__.DF_TRUE_HANDLER),
/* harmony export */   INITIAL_COORDINATES: () => (/* reexport safe */ _initial_coordinates__WEBPACK_IMPORTED_MODULE_1__.INITIAL_COORDINATES)
/* harmony export */ });
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers */ 81725);
/* harmony import */ var _initial_coordinates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial-coordinates */ 98072);



/***/ },

/***/ 98072
/*!*********************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/consts/initial-coordinates.ts ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INITIAL_COORDINATES: () => (/* binding */ INITIAL_COORDINATES)
/* harmony export */ });
const INITIAL_COORDINATES = {
  x: 0,
  y: 0
};

/***/ },

/***/ 88760
/*!***********************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/directives/drag-drop/drag-drop.directive.ts ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragDropDirective: () => (/* binding */ DragDropDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 48065);
/* harmony import */ var _drag_drop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag-drop.service */ 72830);
var _DragDropDirective;




class DragDropDirective {
  constructor() {
    this.elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    this.dfDragDrop = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.outputFromObservable)((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_drag_drop_service__WEBPACK_IMPORTED_MODULE_2__.DragDropService).streamFor(this.elementRef.nativeElement), {
      alias: 'dfDragDrop'
    });
  }
}
_DragDropDirective = DragDropDirective;
_DragDropDirective.ɵfac = function DragDropDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DragDropDirective)();
};
_DragDropDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _DragDropDirective,
  selectors: [["", "dfDragDrop", ""]],
  outputs: {
    dfDragDrop: "dfDragDrop"
  }
});

/***/ },

/***/ 16984
/*!******************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/directives/drag-drop/drag-drop.enum.ts ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ 72830
/*!*********************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/directives/drag-drop/drag-drop.service.ts ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragDropService: () => (/* binding */ DragDropService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 54247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 97757);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 47066);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 870);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 61856);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 24406);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 42393);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 95603);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 95840);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 21082);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 75117);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 65213);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 83919);
/* harmony import */ var _drag_drop_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./drag-drop.enum */ 16984);
var _DragDropService;





/**
 * Centralised RxJS-based drag-and-drop stream factory.
 * Creates **one** `pointermove / pointerup` listener on `document`
 * and produces per-element drag streams filtered by `pointerId`.
 */
class DragDropService {
  constructor() {
    this.document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    /** Cache for element-scoped `pointerdown` observables (lazy–created). */
    this.pointerDownMap = new WeakMap();
    /** Cache for ready-made drag-stream observables (so we never duplicate work). */
    this.dragDropStreams = new WeakMap();
    /** Shared `pointermove` stream on the whole document (ref-counted). */
    this.pointerMove$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(this.document, 'pointermove').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.share)());
    /** Shared `pointerup` stream on the whole document (ref-counted). */
    this.pointerUp$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(this.document, 'pointerup').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.share)());
  }
  /**
   * Returns (and caches) a drag-and-drop observable for the provided element.
   * The observable emits:
   *   • `DfDragDropStage.Move` every animation frame while the pointer is down;
   *   • a final `DfDragDropStage.End` when the pointer is released.
   */
  streamFor(el) {
    const cached = this.dragDropStreams.get(el);
    if (cached) {
      return cached;
    }
    const pointerDown$ = this.pointerDownMap.get(el) ?? (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(el, 'pointerdown', {
      passive: true
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.share)());
    this.pointerDownMap.set(el, pointerDown$);
    const drag$ = pointerDown$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.switchMap)(startEvent => {
      const id = startEvent.pointerId;
      let lastPointerEvent = startEvent;
      const pointerUpStream$ = this.pointerUp$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(e => e.pointerId === id), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(() => ({
        stage: _drag_drop_enum__WEBPACK_IMPORTED_MODULE_14__.DfDragDropStage.End,
        sourceElement: el,
        distance: {
          deltaX: 0,
          deltaY: 0
        }
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.shareReplay)({
        bufferSize: 1,
        refCount: false
      }));
      const pointerMoveStream$ = this.pointerMove$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(e => e.pointerId === id), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.throttleTime)(16, rxjs__WEBPACK_IMPORTED_MODULE_2__.animationFrameScheduler, {
        leading: true,
        trailing: true
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(e => {
        const dx = e.clientX - lastPointerEvent.clientX;
        const dy = e.clientY - lastPointerEvent.clientY;
        lastPointerEvent = e;
        return {
          stage: _drag_drop_enum__WEBPACK_IMPORTED_MODULE_14__.DfDragDropStage.Move,
          sourceElement: el,
          distance: {
            deltaX: dx,
            deltaY: dy
          }
        };
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(pointerUpStream$));
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.merge)(pointerMoveStream$, pointerUpStream$);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.repeat)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.share)());
    this.dragDropStreams.set(el, drag$);
    return drag$;
  }
}
_DragDropService = DragDropService;
_DragDropService.ɵfac = function DragDropService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DragDropService)();
};
_DragDropService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _DragDropService,
  factory: _DragDropService.ɵfac,
  providedIn: 'root'
});

/***/ },

/***/ 84967
/*!*********************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/directives/drag-drop/index.ts ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DfDragDropStage: () => (/* reexport safe */ _drag_drop_enum__WEBPACK_IMPORTED_MODULE_1__.DfDragDropStage),
/* harmony export */   DragDropDirective: () => (/* reexport safe */ _drag_drop_directive__WEBPACK_IMPORTED_MODULE_0__.DragDropDirective),
/* harmony export */   DragDropService: () => (/* reexport safe */ _drag_drop_service__WEBPACK_IMPORTED_MODULE_2__.DragDropService)
/* harmony export */ });
/* harmony import */ var _drag_drop_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-drop.directive */ 88760);
/* harmony import */ var _drag_drop_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag-drop.enum */ 16984);
/* harmony import */ var _drag_drop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag-drop.service */ 72830);




/***/ },

/***/ 87116
/*!*****************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/directives/errors/errors.directive.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorsDirective: () => (/* binding */ ErrorsDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 48065);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 11640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 79746);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 24406);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 56816);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers */ 50315);
/* harmony import */ var _helpers_collect_invalid_node_ids__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/collect-invalid-node-ids */ 31415);
/* harmony import */ var _validators_invalid_nodes_token__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../validators/invalid-nodes.token */ 91565);
var _ErrorsDirective;








class ErrorsDirective {
  constructor() {
    this.injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    this.ngControl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControl);
    this.$invalidNodes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_validators_invalid_nodes_token__WEBPACK_IMPORTED_MODULE_9__.INVALID_NODES);
  }
  ngOnInit() {
    if (!this.ngControl.control) {
      return;
    }
    const control = this.ngControl.control;
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.runInInjectionContext)(this.injector, () => {
      const invalidNodeIds = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.toSignal)((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.combineLatest)([control.statusChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.startWith)(control.status)), control.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.startWith)(control.value))]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(() => (0,_helpers_collect_invalid_node_ids__WEBPACK_IMPORTED_MODULE_8__.collectInvalidNodeIds)(control.errors)), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(_helpers__WEBPACK_IMPORTED_MODULE_7__.deepEqual)), {
        initialValue: (0,_helpers_collect_invalid_node_ids__WEBPACK_IMPORTED_MODULE_8__.collectInvalidNodeIds)(control.errors)
      });
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
        this.$invalidNodes.set(Array.from(invalidNodeIds()));
      });
    });
  }
}
_ErrorsDirective = ErrorsDirective;
_ErrorsDirective.ɵfac = function ErrorsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ErrorsDirective)();
};
_ErrorsDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _ErrorsDirective,
  selectors: [["", "dfErrors", ""]]
});

/***/ },

/***/ 63602
/*!******************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/directives/errors/index.ts ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorsDirective: () => (/* reexport safe */ _errors_directive__WEBPACK_IMPORTED_MODULE_0__.ErrorsDirective)
/* harmony export */ });
/* harmony import */ var _errors_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.directive */ 87116);


/***/ },

/***/ 52256
/*!***********************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/directives/index.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DfDragDropStage: () => (/* reexport safe */ _drag_drop__WEBPACK_IMPORTED_MODULE_0__.DfDragDropStage),
/* harmony export */   DragDropDirective: () => (/* reexport safe */ _drag_drop__WEBPACK_IMPORTED_MODULE_0__.DragDropDirective),
/* harmony export */   DragDropService: () => (/* reexport safe */ _drag_drop__WEBPACK_IMPORTED_MODULE_0__.DragDropService),
/* harmony export */   ErrorsDirective: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.ErrorsDirective),
/* harmony export */   SelectableElementDirective: () => (/* reexport safe */ _selectable_element__WEBPACK_IMPORTED_MODULE_2__.SelectableElementDirective)
/* harmony export */ });
/* harmony import */ var _drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-drop */ 84967);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ 63602);
/* harmony import */ var _selectable_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectable-element */ 41408);




/***/ },

/***/ 41408
/*!******************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/directives/selectable-element/index.ts ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectableElementDirective: () => (/* reexport safe */ _selectable_element_directive__WEBPACK_IMPORTED_MODULE_0__.SelectableElementDirective)
/* harmony export */ });
/* harmony import */ var _selectable_element_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectable-element.directive */ 25732);


/***/ },

/***/ 25732
/*!*****************************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/directives/selectable-element/selectable-element.directive.ts ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectableElementDirective: () => (/* binding */ SelectableElementDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _services_selection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/selection.service */ 79989);
var _SelectableElementDirective;



class SelectableElementDirective {
  constructor() {
    this.selected = false;
    this.el = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    this.selectionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_selection_service__WEBPACK_IMPORTED_MODULE_1__.SelectionService);
    this.unregisterFn = null;
    this.selectionChanged = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)({
      alias: 'dfSelectableElement'
    });
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
    }
  }
}
_SelectableElementDirective = SelectableElementDirective;
_SelectableElementDirective.ɵfac = function SelectableElementDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SelectableElementDirective)();
};
_SelectableElementDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _SelectableElementDirective,
  selectors: [["", "dfSelectableElement", ""]],
  outputs: {
    selectionChanged: "dfSelectableElement"
  }
});

/***/ },

/***/ 66572
/*!********************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/helpers/clamp.ts ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ 31415
/*!***************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/helpers/collect-invalid-node-ids.ts ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ 45048
/*!************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/helpers/connector.ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ 72248
/*!*************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/helpers/deep-equal.ts ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deepEqual: () => (/* binding */ deepEqual)
/* harmony export */ });
/**
 * Deep comparison of two values
 * @param a - first value to compare
 * @param b - second value to compare
 * @param visited - Map to track visited objects (for circular reference detection)
 * @returns boolean result of comparison
 */
function deepEqual(a, b, visited = new Map()) {
  // 1. Strict equality & primitives
  if (a === b) {
    return true;
  }
  if (a == null || b == null) {
    return false;
  } // handles null & undefined
  const typeA = typeof a;
  const typeB = typeof b;
  if (typeA !== typeB) {
    return false;
  }
  // Special-case NaN
  if (typeA !== 'object') {
    return typeA === 'number' && Number.isNaN(a) && Number.isNaN(b);
  }
  // 2. Circular-reference handling
  if (visited.has(a)) {
    return visited.get(a) === b;
  }
  visited.set(a, b);
  // 3. Arrays
  const isArrayA = Array.isArray(a);
  const isArrayB = Array.isArray(b);
  if (isArrayA !== isArrayB) {
    return false;
  }
  if (isArrayA) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i], visited)) {
        return false;
      }
    }
    return true;
  }
  // 4. Special built-ins
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }
  if (a instanceof RegExp && b instanceof RegExp) {
    return a.toString() === b.toString();
  }
  // 5. Map
  if (a instanceof Map && b instanceof Map) {
    if (a.size !== b.size) {
      return false;
    }
    for (const [key, value] of a.entries()) {
      if (!b.has(key) || !deepEqual(value, b.get(key), visited)) {
        return false;
      }
    }
    return true;
  }
  // 6. Set
  if (a instanceof Set && b instanceof Set) {
    if (a.size !== b.size) {
      return false;
    }
    const arrA = Array.from(a);
    const arrB = Array.from(b);
    const primitivesOnly = arr => arr.every(item => typeof item !== 'object' || item === null);
    // Primitive sets → sort with comparator for deterministic equality
    if (primitivesOnly(arrA) && primitivesOnly(arrB)) {
      const primitiveCompare = (x, y) => typeof x === 'number' && typeof y === 'number' ? x - y : String(x).localeCompare(String(y));
      arrA.sort(primitiveCompare);
      arrB.sort(primitiveCompare);
      for (let i = 0; i < arrA.length; i++) {
        if (arrA[i] !== arrB[i]) {
          return false;
        }
      }
      return true;
    }
    // Non-primitive sets → element-wise deep comparison
    return arrA.every(itemA => arrB.some(itemB => deepEqual(itemA, itemB, new Map(visited)))) && arrB.every(itemB => arrA.some(itemA => deepEqual(itemA, itemB, new Map(visited))));
  }
  // 7. Plain objects
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) {
    return false;
  }
  return keysA.every(key => Object.prototype.hasOwnProperty.call(b, key) && deepEqual(a[key], b[key], visited));
}

/***/ },

/***/ 86061
/*!**************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/helpers/distance-between-points.ts ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ 36199
/*!***************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/helpers/distance-between-touches.ts ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dfDistanceBetweenTouches: () => (/* binding */ dfDistanceBetweenTouches)
/* harmony export */ });
function dfDistanceBetweenTouches({
  touches
}) {
  return Math.hypot((touches[0]?.clientX ?? 0) - (touches[1]?.clientX ?? 0), (touches[0]?.clientY ?? 0) - (touches[1]?.clientY ?? 0));
}

/***/ },

/***/ 63666
/*!*********************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/helpers/events.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dfPreventDefault: () => (/* binding */ dfPreventDefault),
/* harmony export */   dfStopPropagation: () => (/* binding */ dfStopPropagation)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 61969);

function dfPreventDefault() {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)(event => event.preventDefault());
}
function dfStopPropagation() {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)(event => event.stopPropagation());
}

/***/ },

/***/ 50315
/*!********************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/helpers/index.ts ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createConnectorHash: () => (/* reexport safe */ _connector__WEBPACK_IMPORTED_MODULE_1__.createConnectorHash),
/* harmony export */   deepEqual: () => (/* reexport safe */ _deep_equal__WEBPACK_IMPORTED_MODULE_2__.deepEqual),
/* harmony export */   dfClamp: () => (/* reexport safe */ _clamp__WEBPACK_IMPORTED_MODULE_0__.dfClamp),
/* harmony export */   dfDistanceBetweenPoints: () => (/* reexport safe */ _distance_between_points__WEBPACK_IMPORTED_MODULE_3__.dfDistanceBetweenPoints),
/* harmony export */   dfDistanceBetweenTouches: () => (/* reexport safe */ _distance_between_touches__WEBPACK_IMPORTED_MODULE_4__.dfDistanceBetweenTouches),
/* harmony export */   dfPreventDefault: () => (/* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_5__.dfPreventDefault),
/* harmony export */   dfPx: () => (/* reexport safe */ _px__WEBPACK_IMPORTED_MODULE_6__.dfPx),
/* harmony export */   dfStopPropagation: () => (/* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_5__.dfStopPropagation),
/* harmony export */   isConnectorType: () => (/* reexport safe */ _connector__WEBPACK_IMPORTED_MODULE_1__.isConnectorType)
/* harmony export */ });
/* harmony import */ var _clamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clamp */ 66572);
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connector */ 45048);
/* harmony import */ var _deep_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deep-equal */ 72248);
/* harmony import */ var _distance_between_points__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./distance-between-points */ 86061);
/* harmony import */ var _distance_between_touches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./distance-between-touches */ 36199);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events */ 63666);
/* harmony import */ var _px__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./px */ 63407);








/***/ },

/***/ 63407
/*!*****************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/helpers/px.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ 29440
/*!*****************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/ng-draw-flow-node.base.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DrawFlowBaseNode: () => (/* binding */ DrawFlowBaseNode)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _components_connectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectors */ 58783);
var _DrawFlowBaseNode;



/**
 * Base abstract class for DrawFlow nodes.
 * Provides common functionality and structure for all node types in the flow diagram.
 */
class DrawFlowBaseNode {
  constructor() {
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
    /**
     * Collection of input connectors for this node.
     * Accessible from outside to monitor changes in the number of inputs.
     */
    this.inputs = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.viewChildren)(_components_connectors__WEBPACK_IMPORTED_MODULE_1__.DfInputComponent);
    /**
     * Collection of output connectors for this node.
     * Accessible from outside to monitor changes in the number of outputs.
     */
    this.outputs = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.viewChildren)(_components_connectors__WEBPACK_IMPORTED_MODULE_1__.DfOutputComponent);
    this.connectorsUpdated = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    /**
     * Unique identifier for the node.
     * Can be used to create connector names in format `${nodeId}-${uniqConnectorId}`.
     * @default ''
     */
    this.nodeIdSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)('', {
      alias: 'nodeId'
    });
    /**
     * Metadata for the node.
     * Contains type information and other node-specific data.
     */
    this.modelSignal = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required({
      alias: 'model'
    });
    /**
     * Indicates if this node is a starting node in the flow.
     * Can be used to apply special styling or behavior for start nodes.
     * @default false
     */
    this.startNodeSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(false, {
      alias: 'startNode'
    });
    /**
     * Indicates if this node is an ending node in the flow.
     * Can be used to hide output connectors or apply special styling.
     * @default false
     */
    this.endNodeSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(false, {
      alias: 'endNode'
    });
    /**
     * Selection state of the node.
     * Changes when the node is clicked or deselected.
     * Applied as 'df-selected' CSS class when true.
     * @default false
     */
    this.selectedSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(false, {
      alias: 'selected'
    });
    /**
     * Validation state of the node.
     * Can be manually set to highlight the node with red color,
     * for example when a form inside the node is invalid.
     * Applied as 'df-invalid' CSS class when true.
     * @default false
     */
    this.invalidSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(false, {
      alias: 'invalid'
    });
  }
  get nodeId() {
    return this.nodeIdSignal();
  }
  get model() {
    return this.modelSignal();
  }
  get startNode() {
    return this.startNodeSignal();
  }
  get endNode() {
    return this.endNodeSignal();
  }
  get selected() {
    return this.selectedSignal();
  }
  get invalid() {
    return this.invalidState;
  }
  markForCheck() {
    this.cdr.markForCheck();
  }
  get invalidState() {
    return this.invalidSignal();
  }
}
_DrawFlowBaseNode = DrawFlowBaseNode;
_DrawFlowBaseNode.ɵfac = function DrawFlowBaseNode_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DrawFlowBaseNode)();
};
_DrawFlowBaseNode.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _DrawFlowBaseNode,
  viewQuery: function DrawFlowBaseNode_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuerySignal"](ctx.inputs, _components_connectors__WEBPACK_IMPORTED_MODULE_1__.DfInputComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuerySignal"](ctx.outputs, _components_connectors__WEBPACK_IMPORTED_MODULE_1__.DfOutputComponent, 5);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryAdvance"](2);
    }
  },
  hostVars: 4,
  hostBindings: function DrawFlowBaseNode_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("df-invalid", ctx.invalidState)("df-selected", ctx.selected);
    }
  },
  inputs: {
    nodeIdSignal: [1, "nodeId", "nodeIdSignal"],
    modelSignal: [1, "model", "modelSignal"],
    startNodeSignal: [1, "startNode", "startNodeSignal"],
    endNodeSignal: [1, "endNode", "endNodeSignal"],
    selectedSignal: [1, "selected", "selectedSignal"],
    invalidSignal: [1, "invalid", "invalidSignal"]
  },
  outputs: {
    connectorsUpdated: "connectorsUpdated"
  }
});

/***/ },

/***/ 46607
/*!*****************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/ng-draw-flow.component.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgDrawFlowComponent: () => (/* binding */ NgDrawFlowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 48065);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 43396);
/* harmony import */ var _components_connections_connections_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/connections/connections.service */ 39976);
/* harmony import */ var _components_connections_draft_connection_draft_connection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/connections/draft-connection/draft-connection.service */ 27232);
/* harmony import */ var _components_pan_zoom_pan_zoom_camera_math__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pan-zoom/pan-zoom.camera.math */ 64238);
/* harmony import */ var _components_pan_zoom_pan_zoom_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pan-zoom/pan-zoom.component */ 24408);
/* harmony import */ var _components_pan_zoom_pan_zoom_options__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pan-zoom/pan-zoom.options */ 25741);
/* harmony import */ var _components_pan_zoom_pan_zoom_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pan-zoom/pan-zoom.service */ 96592);
/* harmony import */ var _components_scene_scene_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/scene/scene.component */ 17788);
/* harmony import */ var _ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ng-draw-flow.token */ 59497);
/* harmony import */ var _services_coordinates_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/coordinates.service */ 65092);
/* harmony import */ var _services_ng_draw_flow_store_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/ng-draw-flow-store.service */ 24410);
/* harmony import */ var _services_selection_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/selection.service */ 79989);
/* harmony import */ var _directives_errors_errors_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/errors/errors.directive */ 87116);
/* harmony import */ var _ng_web_apis_resize_observer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-web-apis/resize-observer */ 65238);
var _NgDrawFlowComponent;



















function NgDrawFlowComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "df-scene", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("connectionCreated", function NgDrawFlowComponent_Conditional_1_Template_df_scene_connectionCreated_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onConnectionCreated($event));
    })("connectionDeleted", function NgDrawFlowComponent_Conditional_1_Template_df_scene_connectionDeleted_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onConnectionDeleted($event));
    })("connectionSelected", function NgDrawFlowComponent_Conditional_1_Template_df_scene_connectionSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.connectionSelected.emit($event));
    })("nodeDeleted", function NgDrawFlowComponent_Conditional_1_Template_df_scene_nodeDeleted_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onNodeDeleted($event));
    })("nodeMoved", function NgDrawFlowComponent_Conditional_1_Template_df_scene_nodeMoved_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onNodeMoved($event));
    })("nodeSelected", function NgDrawFlowComponent_Conditional_1_Template_df_scene_nodeSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.nodeSelected.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.form);
  }
}
/**
 * Root component of **ng-draw-flow** – a lightweight graph editor
 * capable of rendering and manipulating hundreds of nodes and edges.
 *
 * * Acts as a form-field (`ControlValueAccessor`) whose value is the
 *   entire diagram (`DfDataModel`).
 * * Wraps the low-level services (`PanZoomService`, `ConnectionsService`
 *   …) and re-emits high-level events so host applications can stay
 *   framework-agnostic.
 * * Exposes a minimal public API (`zoomIn`, `zoomOut`, `resetPosition`,
 *   `setScale`, `removeConnection`, `removeNode`) for programmatic control.
 * * Broadcasts state and events through `NgDrawFlowStoreService` so host apps
 *   can react without a direct reference to the component instance.
 */
class NgDrawFlowComponent {
  constructor() {
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef);
    this.hostElement = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    this.connectionsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_components_connections_connections_service__WEBPACK_IMPORTED_MODULE_4__.ConnectionsService);
    this.panZoomService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_components_pan_zoom_pan_zoom_service__WEBPACK_IMPORTED_MODULE_9__.PanZoomService);
    this.panZoomOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_components_pan_zoom_pan_zoom_options__WEBPACK_IMPORTED_MODULE_8__.DF_PAN_ZOOM_OPTIONS);
    this.selectionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_selection_service__WEBPACK_IMPORTED_MODULE_14__.SelectionService);
    this.store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_ng_draw_flow_store_service__WEBPACK_IMPORTED_MODULE_13__.NgDrawFlowStoreService);
    this.maxViewportFrameRetries = 5;
    this.frameRequestId = null;
    this.viewportFrameRetryCount = 0;
    this.shouldFrameViewport = false;
    this.hasFramedExternalModel = false;
    this.touched = false;
    this.panzoom = _angular_core__WEBPACK_IMPORTED_MODULE_0__.viewChild.required(_components_pan_zoom_pan_zoom_component__WEBPACK_IMPORTED_MODULE_7__.PanZoomComponent);
    this.disabled = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
    /** Emits the *current* zoom factor each time it changes. */
    this.scale = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    /** Fired after a new edge is successfully created. */
    this.connectionCreated = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    /** Fired after an edge is removed—via UI, `removeConnection()` or `removeNode()`. */
    this.connectionDeleted = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    /** Fired when an edge receives focus in the scene. */
    this.connectionSelected = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    /** Fired when a node receives focus in the scene. */
    this.nodeSelected = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    /** Fired whenever the user drags a node to a new position. */
    this.nodeMoved = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    /** Fired when a node is removed from the graph. */
    this.nodeDeleted = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl({
      nodes: [],
      connections: []
    }, {
      nonNullable: true
    });
    this.$rootReady = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
    this.onChange = _ => {};
    this.onTouched = () => {};
  }
  ngOnInit() {
    this.watchFormChanges();
  }
  ngAfterViewInit() {
    this.store.attach(this);
    const model = this.form.value;
    if (model) {
      this.store.updateDataModel(model);
    }
    this.scheduleViewportFraming();
  }
  ngOnDestroy() {
    this.cancelViewportFraming();
    this.store.detach(this);
  }
  writeValue(value) {
    if (!value) {
      return;
    }
    this.store.clearSelectedNode();
    this.store.clearSelectedConnection();
    this.store.updateDataModel(value);
    this.form.setValue(value, {
      emitEvent: false
    });
    if (value.nodes.length) {
      if (!this.hasFramedExternalModel) {
        this.hasFramedExternalModel = true;
        this.scheduleViewportFraming();
      }
    } else {
      this.hasFramedExternalModel = false;
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled.set(isDisabled);
    if (isDisabled) {
      this.form.disable({
        emitEvent: false
      });
    } else {
      this.form.enable({
        emitEvent: false
      });
    }
  }
  /** Zooms one step *in* towards the center of the scene. */
  zoomIn() {
    this.panzoom().zoomIn();
  }
  /** Zooms one step *out* from the center of the scene. */
  zoomOut() {
    this.panzoom().zoomOut();
  }
  /** Set both zoom and coordinates. */
  setPosition(position) {
    this.panzoom().setPosition(position);
  }
  /** Resets both zoom factor and pan offset to their defaults. */
  resetPosition() {
    this.panzoom().resetPanzoom();
    this.scheduleViewportFraming();
  }
  /**
   * Applies an absolute zoom factor to the scene (1 === 100%) while respecting
   * configured pan/zoom bounds.
   */
  setScale(scale) {
    this.panzoom().setScale(scale);
  }
  /** Method that removes an existing edge. */
  removeConnection(connection) {
    this.connectionsService.removeConnection(connection);
  }
  /** Method that removes an existing node and all related edges. */
  removeNode(node) {
    const nodeId = typeof node === 'string' ? node : node.id;
    const current = this.form.value;
    const deleted = current.nodes.find(({
      id
    }) => id === nodeId);
    if (!deleted) {
      return;
    }
    const deletedConnections = current.connections.filter(connection => connection.source.nodeId === nodeId || connection.target.nodeId === nodeId);
    const model = {
      ...current,
      nodes: current.nodes.filter(({
        id
      }) => id !== nodeId),
      connections: current.connections.filter(connection => connection.source.nodeId !== nodeId && connection.target.nodeId !== nodeId)
    };
    const event = {
      target: deleted,
      model
    };
    this.form.setValue(model);
    this.connectionsService.setConnections(model.connections);
    this.store.emitNodeDeleted(event);
    this.nodeDeleted.emit(event);
    deletedConnections.forEach(connection => {
      const connectionEvent = {
        target: connection,
        model
      };
      this.store.emitConnectionDeleted(connectionEvent);
      this.connectionDeleted.emit(connectionEvent);
    });
  }
  /** Clears any active selection in the scene. */
  clearSelection() {
    this.selectionService.clearSelection();
  }
  onScaleChange(scale) {
    this.store.setScaleValue(scale);
    this.scale.emit(scale);
  }
  onConnectionCreated(event) {
    this.connectionCreated.emit(event);
  }
  onConnectionDeleted(event) {
    this.connectionDeleted.emit(event);
  }
  onNodeDeleted(event) {
    this.nodeDeleted.emit(event);
  }
  onNodeMoved(event) {
    this.nodeMoved.emit(event);
  }
  onResize(event) {
    const entry = event[0];
    if (!entry) {
      return;
    }
    const {
      width,
      height
    } = entry.contentRect;
    this.$rootReady.set(Boolean(width && height));
    this.scheduleViewportFraming();
  }
  markAsTouched() {
    if (this.touched) {
      return;
    }
    this.touched = true;
    this.onTouched();
  }
  watchFormChanges() {
    this.form.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(10), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.takeUntilDestroyed)(this.destroyRef)).subscribe(value => {
      this.store.updateDataModel(value);
      this.onChange(value);
    });
  }
  scheduleViewportFraming(retry = false) {
    if (this.panZoomOptions.leftPosition === null && this.panZoomOptions.topPosition === null) {
      return;
    }
    if (!retry) {
      this.shouldFrameViewport = true;
      this.viewportFrameRetryCount = 0;
    }
    if (!this.$rootReady()) {
      return;
    }
    if (typeof requestAnimationFrame !== 'function') {
      this.applyViewportFraming();
      return;
    }
    this.cancelViewportFraming();
    this.frameRequestId = requestAnimationFrame(() => {
      this.frameRequestId = requestAnimationFrame(() => {
        this.frameRequestId = null;
        this.applyViewportFraming();
      });
    });
  }
  cancelViewportFraming() {
    if (this.frameRequestId !== null && typeof cancelAnimationFrame === 'function') {
      cancelAnimationFrame(this.frameRequestId);
      this.frameRequestId = null;
    }
  }
  applyViewportFraming() {
    if (!this.shouldFrameViewport || !this.$rootReady()) {
      return;
    }
    const targetRect = this.getViewportFramingTargetRect();
    if (!targetRect) {
      this.retryViewportFraming();
      return;
    }
    const viewportSize = {
      width: this.hostElement.nativeElement.offsetWidth,
      height: this.hostElement.nativeElement.offsetHeight
    };
    if (!viewportSize.width || !viewportSize.height) {
      this.retryViewportFraming();
      return;
    }
    const zeroPoint = (0,_components_pan_zoom_pan_zoom_camera_math__WEBPACK_IMPORTED_MODULE_6__.getViewportZeroPoint)(viewportSize, {
      leftPosition: this.panZoomOptions.leftPosition,
      topPosition: this.panZoomOptions.topPosition
    });
    const nextCamera = (0,_components_pan_zoom_pan_zoom_camera_math__WEBPACK_IMPORTED_MODULE_6__.clampByUsableRect)((0,_components_pan_zoom_pan_zoom_camera_math__WEBPACK_IMPORTED_MODULE_6__.alignCameraToWorldRect)(this.panZoomService.snapshot(), targetRect, viewportSize, {
      leftPosition: this.panZoomOptions.leftPosition,
      topPosition: this.panZoomOptions.topPosition
    }), this.panZoomService.usableRect(), viewportSize, zeroPoint);
    this.shouldFrameViewport = false;
    this.panZoomService.setCamera(nextCamera);
    this.cdr.detectChanges();
  }
  retryViewportFraming() {
    if (this.viewportFrameRetryCount >= this.maxViewportFrameRetries) {
      return;
    }
    this.viewportFrameRetryCount += 1;
    this.scheduleViewportFraming(true);
  }
  getViewportFramingTargetRect() {
    const nodes = this.form.value?.nodes ?? [];
    if (!nodes.length) {
      return null;
    }
    const startNode = nodes.find(node => node.startNode === true);
    return this.panZoomService.getBoundsForNodeIds(startNode ? [startNode.id] : nodes.map(({
      id
    }) => id));
  }
}
_NgDrawFlowComponent = NgDrawFlowComponent;
_NgDrawFlowComponent.ɵfac = function NgDrawFlowComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgDrawFlowComponent)();
};
_NgDrawFlowComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _NgDrawFlowComponent,
  selectors: [["ng-draw-flow"]],
  viewQuery: function NgDrawFlowComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuerySignal"](ctx.panzoom, _components_pan_zoom_pan_zoom_component__WEBPACK_IMPORTED_MODULE_7__.PanZoomComponent, 5);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryAdvance"]();
    }
  },
  hostVars: 2,
  hostBindings: function NgDrawFlowComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("waResizeObserver", function NgDrawFlowComponent_waResizeObserver_HostBindingHandler($event) {
        return ctx.onResize($event);
      })("focusout", function NgDrawFlowComponent_focusout_HostBindingHandler() {
        return ctx.markAsTouched();
      })("pointerdown", function NgDrawFlowComponent_pointerdown_HostBindingHandler() {
        return ctx.markAsTouched();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-draw-flow_disabled", ctx.disabled());
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
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_components_pan_zoom_pan_zoom_service__WEBPACK_IMPORTED_MODULE_9__.PanZoomService, _components_connections_connections_service__WEBPACK_IMPORTED_MODULE_4__.ConnectionsService, _services_coordinates_service__WEBPACK_IMPORTED_MODULE_12__.CoordinatesService, _components_connections_draft_connection_draft_connection_service__WEBPACK_IMPORTED_MODULE_5__.DraftConnectionService, _services_selection_service__WEBPACK_IMPORTED_MODULE_14__.SelectionService, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => _NgDrawFlowComponent),
    multi: true
  }, {
    provide: _ng_draw_flow_token__WEBPACK_IMPORTED_MODULE_11__.DRAW_FLOW_ROOT_ELEMENT,
    useFactory: ({
      nativeElement
    }) => nativeElement,
    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef]
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵHostDirectivesFeature"]([_directives_errors_errors_directive__WEBPACK_IMPORTED_MODULE_15__.ErrorsDirective, {
    directive: _ng_web_apis_resize_observer__WEBPACK_IMPORTED_MODULE_16__.WaResizeObserver,
    outputs: ["waResizeObserver", "waResizeObserver"]
  }])],
  decls: 2,
  vars: 1,
  consts: [[3, "scale"], [3, "formControl"], [3, "connectionCreated", "connectionDeleted", "connectionSelected", "nodeDeleted", "nodeMoved", "nodeSelected", "formControl"]],
  template: function NgDrawFlowComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "df-pan-zoom", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scale", function NgDrawFlowComponent_Template_df_pan_zoom_scale_0_listener($event) {
        return ctx.onScaleChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgDrawFlowComponent_Conditional_1_Template, 1, 1, "df-scene", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.$rootReady() ? 1 : -1);
    }
  },
  dependencies: [_components_pan_zoom_pan_zoom_component__WEBPACK_IMPORTED_MODULE_7__.PanZoomComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _components_scene_scene_component__WEBPACK_IMPORTED_MODULE_10__.SceneComponent],
  styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: block;\n  block-size: 100%;\n  inline-size: 100%;\n  overflow: hidden;\n  --df-connection-color: #428bf9;\n  --df-connection-color-hover: #336fee;\n  --df-connection-color-active: #156ed4;\n  --df-connection-stroke-width: 0.125rem;\n  --df-connection-selectable-area-color: rgba(66, 139, 249, 0.5);\n  --df-connection-selectable-area-stroke-width: 0.25rem;\n  --df-connector-color: #156ed4;\n  --df-connector-input-color: #156ed4;\n  --df-connector-input-color-hover: #428bf9;\n  --df-connector-output-color: #f97316;\n  --df-connector-output-color-hover: #fb923c;\n  --df-connection-selected-node-input-color: var(--df-connector-input-color);\n  --df-connection-selected-node-input-hover-color: var(--df-connector-input-color-hover);\n  --df-connection-selected-node-output-color: var(--df-connector-output-color);\n  --df-connection-selected-node-output-hover-color: var(--df-connector-output-color-hover);\n  --df-connector-color-hover: #428bf9;\n  --df-connection-label-color: #222;\n  --df-connection-label-background: #fff;\n  --df-connection-label-border-color: #b1b1b7;\n  --df-connection-label-border-radius: 0.125rem;\n  --df-connection-label-font: inherit;\n  --df-connection-label-padding: 0.125rem 0.25rem;\n  --df-node-background-default: #fff;\n  --df-node-color-default: inherit;\n  --df-node-border-color-default: #d0d2ce;\n  --df-node-border-width-default: 0.0625rem;\n  --df-node-border-style-default: solid;\n  --df-node-border-default: var(--df-node-border-width, var(--df-node-border-width-default)) var(--df-node-border-style, var(--df-node-border-style-default)) var(--df-node-border-color, var(--df-node-border-color-default));\n  --df-node-border-radius-default: 0.5rem;\n  --df-node-box-shadow-default: none;\n  --df-node-box-shadow-hover-default: var(--df-node-box-shadow, var(--df-node-box-shadow-default));\n  --df-node-box-shadow-selected-default: 0 0 0 0.125rem rgba(21, 110, 212, 0.16);\n  --df-node-box-shadow-invalid-default: 0 0 0 0.125rem rgba(240, 68, 56, 0.16);\n  --df-node-padding-default: 0.5rem;\n  --df-node-selected-border-color-default: var(--df-connection-color-active);\n  --df-node-invalid-border-color-default: #f04438;\n  --df-node-transition-default: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out;\n  --df-pan-zoom-viewport-background: #eaeaea;\n  --df-pan-zoom-workspace-background: #f9f9f9;\n  --df-pan-zoom-grid-color: #d0d2ce;\n  --df-pan-zoom-border-color: #eaeaea;\n}\n.ng-draw-flow_disabled[_nghost-%COMP%] {\n  pointer-events: none;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLWRyYXctZmxvdy9zcmMvbGliL25nLWRyYXctZmxvdy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUVBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOERBQUE7RUFDQSxxREFBQTtFQUNBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSx5Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7RUFDQSwwRUFBQTtFQUNBLHNGQUFBO0VBQ0EsNEVBQUE7RUFDQSx3RkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSxxQ0FBQTtFQUNBLDROQUFBO0VBR0EsdUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdHQUFBO0VBQ0EsOEVBQUE7RUFDQSw0RUFBQTtFQUNBLGlDQUFBO0VBQ0EsMEVBQUE7RUFDQSwrQ0FBQTtFQUNBLDJIQUFBO0VBRUEsMENBQUE7RUFDQSwyQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7QUFISjtBQU1BO0VBQ0ksb0JBQUE7QUFKSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmxvY2stc2l6ZTogMTAwJTtcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLS1kZi1jb25uZWN0aW9uLWNvbG9yOiAjNDI4YmY5O1xuICAgIC0tZGYtY29ubmVjdGlvbi1jb2xvci1ob3ZlcjogIzMzNmZlZTtcbiAgICAtLWRmLWNvbm5lY3Rpb24tY29sb3ItYWN0aXZlOiAjMTU2ZWQ0O1xuICAgIC0tZGYtY29ubmVjdGlvbi1zdHJva2Utd2lkdGg6IDAuMTI1cmVtO1xuICAgIC0tZGYtY29ubmVjdGlvbi1zZWxlY3RhYmxlLWFyZWEtY29sb3I6IHJnYmEoIzQyOGJmOSwgMC41KTtcbiAgICAtLWRmLWNvbm5lY3Rpb24tc2VsZWN0YWJsZS1hcmVhLXN0cm9rZS13aWR0aDogMC4yNXJlbTtcbiAgICAtLWRmLWNvbm5lY3Rvci1jb2xvcjogIzE1NmVkNDtcbiAgICAtLWRmLWNvbm5lY3Rvci1pbnB1dC1jb2xvcjogIzE1NmVkNDtcbiAgICAtLWRmLWNvbm5lY3Rvci1pbnB1dC1jb2xvci1ob3ZlcjogIzQyOGJmOTtcbiAgICAtLWRmLWNvbm5lY3Rvci1vdXRwdXQtY29sb3I6ICNmOTczMTY7XG4gICAgLS1kZi1jb25uZWN0b3Itb3V0cHV0LWNvbG9yLWhvdmVyOiAjZmI5MjNjO1xuICAgIC0tZGYtY29ubmVjdGlvbi1zZWxlY3RlZC1ub2RlLWlucHV0LWNvbG9yOiB2YXIoLS1kZi1jb25uZWN0b3ItaW5wdXQtY29sb3IpO1xuICAgIC0tZGYtY29ubmVjdGlvbi1zZWxlY3RlZC1ub2RlLWlucHV0LWhvdmVyLWNvbG9yOiB2YXIoLS1kZi1jb25uZWN0b3ItaW5wdXQtY29sb3ItaG92ZXIpO1xuICAgIC0tZGYtY29ubmVjdGlvbi1zZWxlY3RlZC1ub2RlLW91dHB1dC1jb2xvcjogdmFyKC0tZGYtY29ubmVjdG9yLW91dHB1dC1jb2xvcik7XG4gICAgLS1kZi1jb25uZWN0aW9uLXNlbGVjdGVkLW5vZGUtb3V0cHV0LWhvdmVyLWNvbG9yOiB2YXIoLS1kZi1jb25uZWN0b3Itb3V0cHV0LWNvbG9yLWhvdmVyKTtcbiAgICAtLWRmLWNvbm5lY3Rvci1jb2xvci1ob3ZlcjogIzQyOGJmOTtcbiAgICAtLWRmLWNvbm5lY3Rpb24tbGFiZWwtY29sb3I6ICMyMjI7XG4gICAgLS1kZi1jb25uZWN0aW9uLWxhYmVsLWJhY2tncm91bmQ6ICNmZmY7XG4gICAgLS1kZi1jb25uZWN0aW9uLWxhYmVsLWJvcmRlci1jb2xvcjogI2IxYjFiNztcbiAgICAtLWRmLWNvbm5lY3Rpb24tbGFiZWwtYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG4gICAgLS1kZi1jb25uZWN0aW9uLWxhYmVsLWZvbnQ6IGluaGVyaXQ7XG4gICAgLS1kZi1jb25uZWN0aW9uLWxhYmVsLXBhZGRpbmc6IDAuMTI1cmVtIDAuMjVyZW07XG4gICAgLS1kZi1ub2RlLWJhY2tncm91bmQtZGVmYXVsdDogI2ZmZjtcbiAgICAtLWRmLW5vZGUtY29sb3ItZGVmYXVsdDogaW5oZXJpdDtcbiAgICAtLWRmLW5vZGUtYm9yZGVyLWNvbG9yLWRlZmF1bHQ6ICNkMGQyY2U7XG4gICAgLS1kZi1ub2RlLWJvcmRlci13aWR0aC1kZWZhdWx0OiAwLjA2MjVyZW07XG4gICAgLS1kZi1ub2RlLWJvcmRlci1zdHlsZS1kZWZhdWx0OiBzb2xpZDtcbiAgICAtLWRmLW5vZGUtYm9yZGVyLWRlZmF1bHQ6IHZhcigtLWRmLW5vZGUtYm9yZGVyLXdpZHRoLCB2YXIoLS1kZi1ub2RlLWJvcmRlci13aWR0aC1kZWZhdWx0KSlcbiAgICAgICAgdmFyKC0tZGYtbm9kZS1ib3JkZXItc3R5bGUsIHZhcigtLWRmLW5vZGUtYm9yZGVyLXN0eWxlLWRlZmF1bHQpKVxuICAgICAgICB2YXIoLS1kZi1ub2RlLWJvcmRlci1jb2xvciwgdmFyKC0tZGYtbm9kZS1ib3JkZXItY29sb3ItZGVmYXVsdCkpO1xuICAgIC0tZGYtbm9kZS1ib3JkZXItcmFkaXVzLWRlZmF1bHQ6IDAuNXJlbTtcbiAgICAtLWRmLW5vZGUtYm94LXNoYWRvdy1kZWZhdWx0OiBub25lO1xuICAgIC0tZGYtbm9kZS1ib3gtc2hhZG93LWhvdmVyLWRlZmF1bHQ6IHZhcigtLWRmLW5vZGUtYm94LXNoYWRvdywgdmFyKC0tZGYtbm9kZS1ib3gtc2hhZG93LWRlZmF1bHQpKTtcbiAgICAtLWRmLW5vZGUtYm94LXNoYWRvdy1zZWxlY3RlZC1kZWZhdWx0OiAwIDAgMCAwLjEyNXJlbSByZ2JhKDIxLCAxMTAsIDIxMiwgMC4xNik7XG4gICAgLS1kZi1ub2RlLWJveC1zaGFkb3ctaW52YWxpZC1kZWZhdWx0OiAwIDAgMCAwLjEyNXJlbSByZ2JhKDI0MCwgNjgsIDU2LCAwLjE2KTtcbiAgICAtLWRmLW5vZGUtcGFkZGluZy1kZWZhdWx0OiAwLjVyZW07XG4gICAgLS1kZi1ub2RlLXNlbGVjdGVkLWJvcmRlci1jb2xvci1kZWZhdWx0OiB2YXIoLS1kZi1jb25uZWN0aW9uLWNvbG9yLWFjdGl2ZSk7XG4gICAgLS1kZi1ub2RlLWludmFsaWQtYm9yZGVyLWNvbG9yLWRlZmF1bHQ6ICNmMDQ0Mzg7XG4gICAgLS1kZi1ub2RlLXRyYW5zaXRpb24tZGVmYXVsdDpcbiAgICAgICAgYm9yZGVyLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tZGYtcGFuLXpvb20tdmlld3BvcnQtYmFja2dyb3VuZDogI2VhZWFlYTtcbiAgICAtLWRmLXBhbi16b29tLXdvcmtzcGFjZS1iYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAgIC0tZGYtcGFuLXpvb20tZ3JpZC1jb2xvcjogI2QwZDJjZTtcbiAgICAtLWRmLXBhbi16b29tLWJvcmRlci1jb2xvcjogI2VhZWFlYTtcbn1cblxuOmhvc3QubmctZHJhdy1mbG93X2Rpc2FibGVkIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ },

/***/ 90167
/*!***************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/ng-draw-flow.configs.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DRAW_FLOW_DEFAULT_OPTIONS: () => (/* binding */ DRAW_FLOW_DEFAULT_OPTIONS),
/* harmony export */   DRAW_FLOW_OPTIONS: () => (/* binding */ DRAW_FLOW_OPTIONS),
/* harmony export */   provideNgDrawFlowConfigs: () => (/* binding */ provideNgDrawFlowConfigs)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-draw-flow.interfaces */ 1954);


const DRAW_FLOW_DEFAULT_OPTIONS = {
  connection: {
    arrowhead: {
      type: _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_1__.DfArrowhead.None,
      width: 8,
      height: 4
    },
    type: _ng_draw_flow_interfaces__WEBPACK_IMPORTED_MODULE_1__.DfConnectionType.Bezier,
    curvature: 0.25
  },
  nodes: {},
  options: {
    nodeDragThreshold: 1,
    nodesDraggable: true,
    nodesDeletable: true,
    connectionsDeletable: true,
    connectionsCreatable: true
  }
};
const DRAW_FLOW_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('[DRAW_FLOW_OPTIONS]: Options', {
  factory: () => DRAW_FLOW_DEFAULT_OPTIONS
});
function provideNgDrawFlowConfigs(options = {}) {
  return {
    provide: DRAW_FLOW_OPTIONS,
    useFactory: () => ({
      connection: {
        ...DRAW_FLOW_DEFAULT_OPTIONS.connection,
        ...options.connection,
        arrowhead: {
          ...DRAW_FLOW_DEFAULT_OPTIONS.connection.arrowhead,
          ...options.connection?.arrowhead
        }
      },
      nodes: {
        ...DRAW_FLOW_DEFAULT_OPTIONS.nodes,
        ...options.nodes
      },
      options: {
        ...DRAW_FLOW_DEFAULT_OPTIONS.options,
        ...options.options
      }
    })
  };
}

/***/ },

/***/ 1954
/*!******************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/ng-draw-flow.interfaces.ts ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DfArrowhead: () => (/* binding */ DfArrowhead),
/* harmony export */   DfConnectionPoint: () => (/* binding */ DfConnectionPoint),
/* harmony export */   DfConnectionType: () => (/* binding */ DfConnectionType),
/* harmony export */   DfConnectorPosition: () => (/* binding */ DfConnectorPosition)
/* harmony export */ });
var DfConnectionType;
(function (DfConnectionType) {
  DfConnectionType["Bezier"] = "bezier";
  DfConnectionType["SmoothStep"] = "smoothStep";
})(DfConnectionType || (DfConnectionType = {}));
var DfConnectorPosition;
(function (DfConnectorPosition) {
  DfConnectorPosition["Top"] = "top";
  DfConnectorPosition["Right"] = "right";
  DfConnectorPosition["Bottom"] = "bottom";
  DfConnectorPosition["Left"] = "left";
})(DfConnectorPosition || (DfConnectorPosition = {}));
var DfArrowhead;
(function (DfArrowhead) {
  DfArrowhead["Arrow"] = "arrow";
  DfArrowhead["ArrowClosed"] = "arrowClosed";
  DfArrowhead["None"] = "none";
})(DfArrowhead || (DfArrowhead = {}));
var DfConnectionPoint;
(function (DfConnectionPoint) {
  DfConnectionPoint["Input"] = "input";
  DfConnectionPoint["Output"] = "output";
})(DfConnectionPoint || (DfConnectionPoint = {}));

/***/ },

/***/ 59497
/*!*************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/ng-draw-flow.token.ts ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DRAW_FLOW_ROOT_ELEMENT: () => (/* binding */ DRAW_FLOW_ROOT_ELEMENT)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);

const DRAW_FLOW_ROOT_ELEMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('DRAW_FLOW_ROOT_ELEMENT');

/***/ },

/***/ 65092
/*!***********************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/services/coordinates.service.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoordinatesService: () => (/* binding */ CoordinatesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
var _CoordinatesService;


class CoordinatesService {
  constructor() {
    this.connectionPointsMap = {};
  }
  getConnectionPointSignal(connectorHash) {
    return this.ensureConnectionPointSignal(connectorHash);
  }
  addConnectionPoint(connectorHash, point, position) {
    this.ensureConnectionPointSignal(connectorHash).set({
      point,
      position
    });
  }
  ensureConnectionPointSignal(connectorHash) {
    const pointSignal = this.connectionPointsMap[connectorHash];
    if (pointSignal) {
      return pointSignal;
    }
    const nextSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    this.connectionPointsMap[connectorHash] = nextSignal;
    return nextSignal;
  }
}
_CoordinatesService = CoordinatesService;
_CoordinatesService.ɵfac = function CoordinatesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CoordinatesService)();
};
_CoordinatesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _CoordinatesService,
  factory: _CoordinatesService.ɵfac
});

/***/ },

/***/ 24410
/*!******************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/services/ng-draw-flow-store.service.ts ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgDrawFlowStoreService: () => (/* binding */ NgDrawFlowStoreService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 48065);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 63150);
var _NgDrawFlowStoreService;




/**
 * Root-scoped facade that mirrors `NgDrawFlowComponent` state and public
 * controls so host applications can interact with the editor without a
 * component reference.
 */
class NgDrawFlowStoreService {
  constructor() {
    this.selectedNodeSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    this.dataModelSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    this.selectedConnectionSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    this.scaleSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(100);
    this.nodeDeletedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.nodeMovedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.nodeSelectedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.connectionCreatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.connectionDeletedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.connectionSelectedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.lastNodeDeletedSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    this.lastNodeMovedSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    this.lastNodeSelectedSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    this.lastConnectionCreatedSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    this.lastConnectionDeletedSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    this.lastConnectionSelectedSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    /** Snapshot of the current editor data model. */
    this.dataModel = this.dataModelSignal.asReadonly();
    /** Stream of data model updates emitted after each change. */
    this.dataModel$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.toObservable)(this.dataModelSignal);
    /** Snapshot of the currently selected node (if any). */
    this.selectedNode = this.selectedNodeSignal.asReadonly();
    /** Stream of node selection changes. */
    this.selectedNode$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.toObservable)(this.selectedNodeSignal);
    /** Snapshot of the currently selected connection (if any). */
    this.selectedConnection = this.selectedConnectionSignal.asReadonly();
    /** Stream of connection selection changes. */
    this.selectedConnection$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.toObservable)(this.selectedConnectionSignal);
    /** Snapshot of the current zoom scale in percents. */
    this.scale = this.scaleSignal.asReadonly();
    /** Stream of zoom scale updates. */
    this.scale$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.toObservable)(this.scaleSignal);
    /** Whether a node or a connection is selected. */
    this.hasSelection = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => !!this.selectedNodeSignal() || !!this.selectedConnectionSignal());
    /** Emits whenever a node is deleted (UI or API). */
    this.nodeDeleted$ = this.nodeDeletedSubject.asObservable();
    /** Last node deletion event. Signal-first counterpart of `nodeDeleted$`. */
    this.lastNodeDeleted = this.lastNodeDeletedSignal.asReadonly();
    /** Emits whenever a node moves. */
    this.nodeMoved$ = this.nodeMovedSubject.asObservable();
    /** Last node movement event. Signal-first counterpart of `nodeMoved$`. */
    this.lastNodeMoved = this.lastNodeMovedSignal.asReadonly();
    /** Emits whenever a node becomes selected. */
    this.nodeSelected$ = this.nodeSelectedSubject.asObservable();
    /** Last selected node event payload. Signal-first counterpart of `nodeSelected$`. */
    this.lastNodeSelected = this.lastNodeSelectedSignal.asReadonly();
    /** Emits whenever a connection is created. */
    this.connectionCreated$ = this.connectionCreatedSubject.asObservable();
    /** Last connection creation event. Signal-first counterpart of `connectionCreated$`. */
    this.lastConnectionCreated = this.lastConnectionCreatedSignal.asReadonly();
    /** Emits whenever a connection is removed. */
    this.connectionDeleted$ = this.connectionDeletedSubject.asObservable();
    /** Last connection deletion event. Signal-first counterpart of `connectionDeleted$`. */
    this.lastConnectionDeleted = this.lastConnectionDeletedSignal.asReadonly();
    /** Emits whenever a connection becomes selected. */
    this.connectionSelected$ = this.connectionSelectedSubject.asObservable();
    /** Last selected connection payload. Signal-first counterpart of `connectionSelected$`. */
    this.lastConnectionSelected = this.lastConnectionSelectedSignal.asReadonly();
  }
  /**
   * Binds a component instance so store methods can forward commands and
   * reflect state changes.
   */
  attach(host) {
    this.host = host;
  }
  /**
   * Unbinds the current component instance and clears all cached state.
   */
  detach(host) {
    if (this.host !== host) {
      return;
    }
    this.reset();
    this.host = undefined;
  }
  /** Forwards a zoom-in command to the live editor. */
  zoomIn() {
    this.host?.zoomIn();
  }
  /** Forwards a zoom-out command to the live editor. */
  zoomOut() {
    this.host?.zoomOut();
  }
  /** Resets pan and zoom on the live editor. */
  resetPosition() {
    this.host?.resetPosition();
  }
  /** Set both zoom and coordinates. */
  setPosition(position) {
    this.host?.setPosition(position);
  }
  /**
   * Applies an absolute zoom factor on the live editor and stores its
   * percentage representation.
   */
  setScale(scale) {
    this.host?.setScale(scale);
    const percent = Math.round(scale * 100);
    this.scaleSignal.set(percent);
  }
  /**
   * Removes the provided connection via the live editor instance.
   */
  removeConnection(connection) {
    this.host?.removeConnection(connection);
  }
  /**
   * Removes the provided node via the live editor instance.
   */
  removeNode(node) {
    this.host?.removeNode(node);
  }
  /**
   * Replaces the cached data model and revalidates current selections.
   */
  updateDataModel(model) {
    this.dataModelSignal.set(this.cloneModel(model));
    const selectedNode = this.selectedNodeSignal();
    if (selectedNode && !model.nodes.some(node => node.id === selectedNode.id)) {
      this.selectedNodeSignal.set(null);
    }
    const selectedConnection = this.selectedConnectionSignal();
    if (selectedConnection && !model.connections.some(connection => this.isSameConnection(connection, selectedConnection))) {
      this.selectedConnectionSignal.set(null);
    }
    this.clearSelectionOnScene();
  }
  /** Pushes a new zoom scale in percents without touching the live editor. */
  setScaleValue(scale) {
    this.scaleSignal.set(scale);
  }
  /** Stores the provided node as selected and clears connection selection. */
  setSelectedNode(node) {
    this.selectedNodeSignal.set(this.cloneNode(node));
    this.selectedConnectionSignal.set(null);
    this.lastNodeSelectedSignal.set(this.cloneNode(node));
    this.nodeSelectedSubject.next(node);
  }
  /** Clears node selection optionally guarding against mismatched ids. */
  clearSelectedNode(id) {
    const current = this.selectedNodeSignal();
    if (!current) {
      return;
    }
    if (!id || current.id === id) {
      this.selectedNodeSignal.set(null);
      this.clearSelectionOnScene();
    }
  }
  /** Updates cached node data when the selected node changes externally. */
  updateSelectedNode(node) {
    const current = this.selectedNodeSignal();
    if (current?.id === node.id) {
      this.selectedNodeSignal.set(this.cloneNode(node));
    }
  }
  /** Stores the provided connection as selected and clears node selection. */
  setSelectedConnection(connection) {
    this.selectedConnectionSignal.set(this.cloneConnection(connection));
    this.selectedNodeSignal.set(null);
    this.lastConnectionSelectedSignal.set(this.cloneConnection(connection));
    this.connectionSelectedSubject.next(connection);
  }
  /** Clears connection selection optionally guarding by equality check. */
  clearSelectedConnection(connection) {
    const current = this.selectedConnectionSignal();
    if (!current) {
      return;
    }
    if (!connection || this.isSameConnection(current, connection)) {
      this.selectedConnectionSignal.set(null);
      this.clearSelectionOnScene();
    }
  }
  /** Updates cached connection data when the selected connection changes. */
  updateSelectedConnection(connection) {
    const current = this.selectedConnectionSignal();
    if (current && this.isSameConnection(current, connection)) {
      this.selectedConnectionSignal.set(this.cloneConnection(connection));
    }
  }
  /** Emits a node deletion event and reconciles cached state. */
  emitNodeDeleted(event) {
    this.lastNodeDeletedSignal.set(this.cloneNodeEvent(event));
    this.nodeDeletedSubject.next(event);
    if (this.selectedNodeSignal()?.id === event.target.id) {
      this.selectedNodeSignal.set(null);
    }
    this.updateDataModel(event.model);
  }
  /** Emits a node movement event and reconciles cached state. */
  emitNodeMoved(event) {
    this.lastNodeMovedSignal.set(this.cloneNodeEvent(event));
    this.nodeMovedSubject.next(event);
    this.updateSelectedNode(event.target);
    this.updateDataModel(event.model);
  }
  /** Emits a connection creation event and reconciles cached state. */
  emitConnectionCreated(event) {
    this.lastConnectionCreatedSignal.set(this.cloneConnectionEvent(event));
    this.connectionCreatedSubject.next(event);
    this.updateDataModel(event.model);
  }
  /** Emits a connection deletion event and reconciles cached state. */
  emitConnectionDeleted(event) {
    this.lastConnectionDeletedSignal.set(this.cloneConnectionEvent(event));
    this.connectionDeletedSubject.next(event);
    this.clearSelectedConnection(event.target);
    this.updateDataModel(event.model);
  }
  /** Records a connection as selected and notifies subscribers. */
  emitConnectionSelected(connection) {
    this.setSelectedConnection(connection);
  }
  /** Records a node as selected and notifies subscribers. */
  emitNodeSelected(node) {
    this.setSelectedNode(node);
  }
  /** Clears all cached state (model, selections, scale). */
  clear() {
    this.reset();
  }
  reset() {
    this.dataModelSignal.set(null);
    this.selectedNodeSignal.set(null);
    this.selectedConnectionSignal.set(null);
    this.scaleSignal.set(100);
    this.lastNodeDeletedSignal.set(null);
    this.lastNodeMovedSignal.set(null);
    this.lastNodeSelectedSignal.set(null);
    this.lastConnectionCreatedSignal.set(null);
    this.lastConnectionDeletedSignal.set(null);
    this.lastConnectionSelectedSignal.set(null);
    this.clearSelectionOnScene();
  }
  cloneModel(model) {
    return {
      ...model,
      nodes: model.nodes.map(node => 'position' in node ? this.cloneNode(node) : {
        ...node,
        data: {
          ...node.data
        }
      }),
      connections: model.connections.map(connection => this.cloneConnection(connection))
    };
  }
  cloneNode(node) {
    return {
      ...node,
      data: {
        ...node.data
      },
      position: {
        ...node.position
      }
    };
  }
  cloneConnection(connection) {
    return {
      ...connection,
      source: {
        ...connection.source
      },
      target: {
        ...connection.target
      },
      label: connection.label ? {
        ...connection.label
      } : undefined
    };
  }
  cloneNodeEvent(event) {
    return {
      target: this.cloneNode(event.target),
      model: this.cloneModel(event.model)
    };
  }
  cloneConnectionEvent(event) {
    return {
      target: this.cloneConnection(event.target),
      model: this.cloneModel(event.model)
    };
  }
  clearSelectionOnScene() {
    if (!this.host || this.hasSelection()) {
      return;
    }
    this.host.clearSelection();
  }
  isSameConnection(left, right) {
    return left.source.nodeId === right.source.nodeId && left.source.connectorId === right.source.connectorId && left.target.nodeId === right.target.nodeId && left.target.connectorId === right.target.connectorId;
  }
}
_NgDrawFlowStoreService = NgDrawFlowStoreService;
_NgDrawFlowStoreService.ɵfac = function NgDrawFlowStoreService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgDrawFlowStoreService)();
};
_NgDrawFlowStoreService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _NgDrawFlowStoreService,
  factory: _NgDrawFlowStoreService.ɵfac,
  providedIn: 'root'
});

/***/ },

/***/ 79989
/*!*********************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/services/selection.service.ts ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectionService: () => (/* binding */ SelectionService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 43539);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
var _SelectionService;



class SelectionService {
  constructor() {
    this.document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT);
    this.ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone);
    this.platformId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID);
    this.selectedElements = new Set();
    this.registeredElements = new Map();
    this.isDragging = false;
    this.clickedOnScene = false;
    this.startX = null;
    this.startY = null;
    this.dragThreshold = 5;
    this.currentTarget = null;
    this.boundMouseDown = this.onMouseDown.bind(this);
    this.boundMouseMove = this.onMouseMove.bind(this);
    this.boundMouseUp = this.onMouseUp.bind(this);
    // Use NgZone.runOutsideAngular to prevent change detection
    // from running on every mouse event
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        this.document.addEventListener('mousedown', this.boundMouseDown);
        this.document.addEventListener('mousemove', this.boundMouseMove);
        this.document.addEventListener('mouseup', this.boundMouseUp);
      });
    }
  }
  ngOnDestroy() {
    this.document.removeEventListener('mousedown', this.boundMouseDown);
    this.document.removeEventListener('mousemove', this.boundMouseMove);
    this.document.removeEventListener('mouseup', this.boundMouseUp);
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
      this.selectElement(targetElement);
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
  onMouseUp(_event) {
    // If it was dragging and releasing on the scene,
    // just reset the state without changing the selection
    if (this.isDragging) {
      this.reset();
      return;
    }
    // If clicked on the scene (not while dragging)
    if (this.clickedOnScene && !this.isDragging) {
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
_SelectionService.ɵfac = function SelectionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SelectionService)();
};
_SelectionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _SelectionService,
  factory: _SelectionService.ɵfac
});

/***/ },

/***/ 50802
/*!***********************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/validators/cycle-detection/cycle-detection.validator.ts ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dfCycleDetectionValidator: () => (/* binding */ dfCycleDetectionValidator)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ 60815);

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

/***/ },

/***/ 60815
/*!*****************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/validators/cycle-detection/helpers.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    nodeId: startNodeId,
    processed: false
  }];
  const path = [];
  while (stack.length > 0) {
    const {
      nodeId,
      processed
    } = stack[stack.length - 1];
    if (processed) {
      // Node is fully processed
      nodeStates.set(nodeId, 2);
      stack.pop();
      // Remove the node from the current path when backtracking
      if (path.length > 0 && path[path.length - 1] === nodeId) {
        path.pop();
      }
      continue;
    }
    // Mark the node as being in the current path
    nodeStates.set(nodeId, 1);
    stack[stack.length - 1].processed = true;
    path.push(nodeId);
    // Process neighbors
    const cycleFound = processNeighbors({
      nodeId,
      adjacencyMap,
      nodeStates,
      path,
      stack
    });
    if (cycleFound.length > 0) {
      return cycleFound;
    }
  }
  return []; // No cycle found from this starting node
}
/**
 * Processes all neighbors of a given node during DFS.
 *
 * @param context Object containing traversal context, adjacency map and state tracking.
 * @returns Array of node IDs forming a cycle, or empty array if no cycle is found.
 */
function processNeighbors({
  nodeId,
  adjacencyMap,
  nodeStates,
  path,
  stack
}) {
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
        nodeId: neighbor,
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

/***/ },

/***/ 75657
/*!***********************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/validators/index.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dfCycleDetectionValidator: () => (/* reexport safe */ _cycle_detection_cycle_detection_validator__WEBPACK_IMPORTED_MODULE_0__.dfCycleDetectionValidator),
/* harmony export */   dfIsolatedNodesValidator: () => (/* reexport safe */ _isolated_nodes_isolated_nodes_validator__WEBPACK_IMPORTED_MODULE_1__.dfIsolatedNodesValidator)
/* harmony export */ });
/* harmony import */ var _cycle_detection_cycle_detection_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cycle-detection/cycle-detection.validator */ 50802);
/* harmony import */ var _isolated_nodes_isolated_nodes_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isolated-nodes/isolated-nodes.validator */ 37826);



/***/ },

/***/ 91565
/*!*************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/validators/invalid-nodes.token.ts ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INVALID_NODES: () => (/* binding */ INVALID_NODES)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);

const INVALID_NODES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('[INVALID_NODES]: Invalid nodes signal', {
  factory: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([])
});

/***/ },

/***/ 37826
/*!*********************************************************************************************!*\
  !*** ./projects/ng-draw-flow/src/lib/validators/isolated-nodes/isolated-nodes.validator.ts ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    if (!model.nodes.length) {
      return null;
    }
    const connectedIds = new Set();
    model.connections.forEach(c => {
      connectedIds.add(c.source.nodeId);
      connectedIds.add(c.target.nodeId);
    });
    const isolatedNodes = model.nodes.filter(node => !connectedIds.has(node.id)).map(node => node.id);
    return isolatedNodes.length ? {
      hasIsolatedNodes: true,
      isolatedNodes
    } : null;
  };
}

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(89550)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map