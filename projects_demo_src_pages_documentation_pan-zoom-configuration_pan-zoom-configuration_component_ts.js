"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_pan-zoom-configuration_pan-zoom-configuration_component_ts"],{

/***/ 30608:
/*!****************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/pan-zoom-configuration/examples/index.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanZoomConfigurationExample1Component: () => (/* reexport safe */ _pan_zoom_configuration_example_1_component__WEBPACK_IMPORTED_MODULE_0__.PanZoomConfigurationExample1Component),
/* harmony export */   PanZoomConfigurationExample2Component: () => (/* reexport safe */ _pan_zoom_configuration_example_2_component__WEBPACK_IMPORTED_MODULE_1__.PanZoomConfigurationExample2Component),
/* harmony export */   PanZoomConfigurationExample3Component: () => (/* reexport safe */ _pan_zoom_configuration_example_3_component__WEBPACK_IMPORTED_MODULE_2__.PanZoomConfigurationExample3Component)
/* harmony export */ });
/* harmony import */ var _pan_zoom_configuration_example_1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pan-zoom-configuration-example-1/component */ 76909);
/* harmony import */ var _pan_zoom_configuration_example_2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pan-zoom-configuration-example-2/component */ 3116);
/* harmony import */ var _pan_zoom_configuration_example_3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pan-zoom-configuration-example-3/component */ 10499);




/***/ }),

/***/ 76909:
/*!*****************************************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/pan-zoom-configuration/examples/pan-zoom-configuration-example-1/component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanZoomConfigurationExample1Component: () => (/* binding */ PanZoomConfigurationExample1Component)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _nodes_pan_pan_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nodes/pan/pan.component */ 43714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
var _PanZoomConfigurationExample1Component;





class PanZoomConfigurationExample1Component {
  constructor() {
    this.data = {
      nodes: [{
        id: 'node-1',
        data: {
          type: 'pan'
        },
        position: {
          x: 0,
          y: 0
        }
      }],
      connections: []
    };
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.data);
  }
}
_PanZoomConfigurationExample1Component = PanZoomConfigurationExample1Component;
_PanZoomConfigurationExample1Component.ɵfac = function PanZoomConfigurationExample1Component_Factory(t) {
  return new (t || _PanZoomConfigurationExample1Component)();
};
_PanZoomConfigurationExample1Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _PanZoomConfigurationExample1Component,
  selectors: [["app-pan-zoom-configuration-example-1"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.provideNgDrawFlowConfigs)({
    nodes: {
      pan: _nodes_pan_pan_component__WEBPACK_IMPORTED_MODULE_1__.PanComponent
    }
  }), (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.dfPanZoomOptionsProvider)({
    topPosition: null,
    leftPosition: 0
  })]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 1,
  vars: 1,
  consts: [[3, "formControl"]],
  template: function PanZoomConfigurationExample1Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ng-draw-flow", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.form);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  block-size: 12.5rem;\n  inline-size: 100%;\n  background: #fff;\n  border-radius: 0.3125rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBQ0oiLCJmaWxlIjoic3R5bGVzLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmxvY2stc2l6ZTogMTIuNXJlbTtcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vcGFuLXpvb20tY29uZmlndXJhdGlvbi9leGFtcGxlcy9wYW4tem9vbS1jb25maWd1cmF0aW9uLWV4YW1wbGUtMS9zdHlsZXMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBLGdkQUFnZCIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBibG9jay1zaXplOiAxMi41cmVtO1xuICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zMTI1cmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});


/***/ }),

/***/ 3116:
/*!*****************************************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/pan-zoom-configuration/examples/pan-zoom-configuration-example-2/component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanZoomConfigurationExample2Component: () => (/* binding */ PanZoomConfigurationExample2Component)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _nodes_pan_pan_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nodes/pan/pan.component */ 43714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
var _PanZoomConfigurationExample2Component;





class PanZoomConfigurationExample2Component {
  constructor() {
    this.data = {
      nodes: [{
        id: 'node-1',
        data: {
          type: 'pan'
        },
        position: {
          x: 0,
          y: 0
        }
      }],
      connections: []
    };
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.data);
  }
}
_PanZoomConfigurationExample2Component = PanZoomConfigurationExample2Component;
_PanZoomConfigurationExample2Component.ɵfac = function PanZoomConfigurationExample2Component_Factory(t) {
  return new (t || _PanZoomConfigurationExample2Component)();
};
_PanZoomConfigurationExample2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _PanZoomConfigurationExample2Component,
  selectors: [["app-pan-zoom-configuration-example-2"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.provideNgDrawFlowConfigs)({
    nodes: {
      pan: _nodes_pan_pan_component__WEBPACK_IMPORTED_MODULE_1__.PanComponent
    }
  }), (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.dfPanZoomOptionsProvider)({
    topPosition: 0,
    leftPosition: null
  })]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 1,
  vars: 1,
  consts: [[3, "formControl"]],
  template: function PanZoomConfigurationExample2Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ng-draw-flow", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.form);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  block-size: 12.5rem;\n  inline-size: 100%;\n  background: #fff;\n  border-radius: 0.3125rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBQ0oiLCJmaWxlIjoic3R5bGVzLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmxvY2stc2l6ZTogMTIuNXJlbTtcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vcGFuLXpvb20tY29uZmlndXJhdGlvbi9leGFtcGxlcy9wYW4tem9vbS1jb25maWd1cmF0aW9uLWV4YW1wbGUtMi9zdHlsZXMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBLGdkQUFnZCIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBibG9jay1zaXplOiAxMi41cmVtO1xuICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zMTI1cmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});


/***/ }),

/***/ 10499:
/*!*****************************************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/pan-zoom-configuration/examples/pan-zoom-configuration-example-3/component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanZoomConfigurationExample3Component: () => (/* binding */ PanZoomConfigurationExample3Component)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _nodes_pan_pan_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nodes/pan/pan.component */ 43714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
var _PanZoomConfigurationExample3Component;





class PanZoomConfigurationExample3Component {
  constructor() {
    this.data = {
      nodes: [{
        id: 'node-1',
        data: {
          type: 'pan'
        },
        position: {
          x: 0,
          y: 0
        }
      }],
      connections: []
    };
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.data);
  }
}
_PanZoomConfigurationExample3Component = PanZoomConfigurationExample3Component;
_PanZoomConfigurationExample3Component.ɵfac = function PanZoomConfigurationExample3Component_Factory(t) {
  return new (t || _PanZoomConfigurationExample3Component)();
};
_PanZoomConfigurationExample3Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _PanZoomConfigurationExample3Component,
  selectors: [["app-pan-zoom-configuration-example-3"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.provideNgDrawFlowConfigs)({
    nodes: {
      pan: _nodes_pan_pan_component__WEBPACK_IMPORTED_MODULE_1__.PanComponent
    }
  }), (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.dfPanZoomOptionsProvider)({
    topPosition: null,
    leftPosition: null
  })]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 1,
  vars: 1,
  consts: [[3, "formControl"]],
  template: function PanZoomConfigurationExample3Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ng-draw-flow", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.form);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  block-size: 12.5rem;\n  inline-size: 100%;\n  background: #fff;\n  border-radius: 0.3125rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBQ0oiLCJmaWxlIjoic3R5bGVzLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmxvY2stc2l6ZTogMTIuNXJlbTtcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vcGFuLXpvb20tY29uZmlndXJhdGlvbi9leGFtcGxlcy9wYW4tem9vbS1jb25maWd1cmF0aW9uLWV4YW1wbGUtMy9zdHlsZXMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBLGdkQUFnZCIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBibG9jay1zaXplOiAxMi41cmVtO1xuICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zMTI1cmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});


/***/ }),

/***/ 43714:
/*!*************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/pan-zoom-configuration/nodes/pan/pan.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanComponent: () => (/* binding */ PanComponent)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
var _PanComponent;


class PanComponent extends _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DrawFlowBaseNode {}
_PanComponent = PanComponent;
_PanComponent.ɵfac = /*@__PURE__*/function () {
  let ɵPanComponent_BaseFactory;
  return function PanComponent_Factory(t) {
    return (ɵPanComponent_BaseFactory || (ɵPanComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_PanComponent)))(t || _PanComponent);
  };
}();
_PanComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _PanComponent,
  selectors: [["app-node"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 0,
  vars: 0,
  template: function PanComponent_Template(rf, ctx) {},
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  background: #fff;\n  block-size: 5rem;\n  inline-size: 5rem;\n  box-shadow: var(--tui-shadow-small);\n  border-radius: 0.5rem;\n  transition: border-color 0.2s ease-in-out;\n  color: #000;\n}\n[_nghost-%COMP%]::before, [_nghost-%COMP%]::after {\n  content: '';\n  position: absolute;\n  display: block;\n  background: var(--df-connection-color);\n}\n[_nghost-%COMP%]::before {\n  top: 50%;\n  left: 0;\n  inline-size: 100%;\n  block-size: 0.125rem;\n  transform: translateY(-50%);\n}\n[_nghost-%COMP%]::after {\n  top: 0;\n  left: 50%;\n  block-size: 100%;\n  inline-size: 0.125rem;\n  transform: translateX(-50%);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EseUNBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDSTs7RUFFSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0NBQUE7QUFDUjtBQUVJO0VBQ0ksUUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7QUFBUjtBQUdJO0VBQ0ksTUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUFEUiIsImZpbGUiOiJwYW4uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJsb2NrLXNpemU6IDVyZW07XG4gICAgaW5saW5lLXNpemU6IDVyZW07XG4gICAgYm94LXNoYWRvdzogdmFyKC0tdHVpLXNoYWRvdy1zbWFsbCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGNvbG9yOiAjMDAwO1xuXG4gICAgJjo6YmVmb3JlLFxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRmLWNvbm5lY3Rpb24tY29sb3IpO1xuICAgIH1cblxuICAgICY6OmJlZm9yZSB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICAgICAgYmxvY2stc2l6ZTogMC4xMjVyZW07XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBibG9jay1zaXplOiAxMDAlO1xuICAgICAgICBpbmxpbmUtc2l6ZTogMC4xMjVyZW07XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vcGFuLXpvb20tY29uZmlndXJhdGlvbi9ub2Rlcy9wYW4vcGFuLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7QUFDSjtBQUNJOztFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQ0FBQTtBQUNSO0FBRUk7RUFDSSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtBQUFSO0FBR0k7RUFDSSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQURSOztBQUVBLHdnREFBd2dEIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBibG9jay1zaXplOiA1cmVtO1xuICAgIGlubGluZS1zaXplOiA1cmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXR1aS1zaGFkb3ctc21hbGwpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbiAgICBjb2xvcjogIzAwMDtcblxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kZi1jb25uZWN0aW9uLWNvbG9yKTtcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgICAgIGJsb2NrLXNpemU6IDAuMTI1cmVtO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgYmxvY2stc2l6ZTogMTAwJTtcbiAgICAgICAgaW5saW5lLXNpemU6IDAuMTI1cmVtO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});


/***/ }),

/***/ 72251:
/*!**********************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/pan-zoom-configuration/pan-zoom-configuration.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _examples__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examples */ 30608);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 94841);
var _PanZoomConfigurationComponent;



class PanZoomConfigurationComponent {
  constructor() {
    this.gettingStarted = {
      data0: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_pan-zoom-configuration_examples_data-0_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/data-0.md?raw */ 84042, 17)),
      data1: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_pan-zoom-configuration_examples_data-1_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/data-1.md?raw */ 37589, 17)),
      data2: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_pan-zoom-configuration_examples_data-2_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/data-2.md?raw */ 30216, 17))
    };
  }
}
_PanZoomConfigurationComponent = PanZoomConfigurationComponent;
_PanZoomConfigurationComponent.ɵfac = function PanZoomConfigurationComponent_Factory(t) {
  return new (t || _PanZoomConfigurationComponent)();
};
_PanZoomConfigurationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _PanZoomConfigurationComponent,
  selectors: [["app-pan-zoom-configuration"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 90,
  vars: 3,
  consts: [["header", "PanZoom Configuration Guide"], [3, "code"], [1, "pan-position-demo"], [1, "pan-position-demo-item"], [1, "content"], [1, "code-example"], ["filename", "app.module.ts", 3, "code"], [1, "tui-list", "tui-list_extra-small", "tui-space_bottom-4"], [1, "tui-list__item"]],
  template: function PanZoomConfigurationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Introduction to PanZoom Component");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " The PanZoom component is a critical element in NgDrawFlow. It provides an interactive \"board\" on which nodes are placed, allowing users to easily navigate the graph by moving (panning) and zooming the viewport to focus on different parts of the data set. The component enhances the user experience by making complex graphs readable and navigable, even when dealing with extensive data. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Configuring PanZoom in Your Application");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " To configure the Panzoom component for your Angular application, you can set up the PanzoomOptions in your app.module.ts file as follows: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "tui-doc-code", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Placement of Elements on the Screen.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-pan-zoom-configuration-example-3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " By default, the base node is positioned at the coordinates ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "x: 0, y: 0");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " , which is centered on the screen. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 2)(19, "div", 3)(20, "div", 4)(21, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Horizontal Alignment");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "app-pan-zoom-configuration-example-1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " However, the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "x: 0, y: 0");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " position can be altered. If you prefer the base node to be aligned to the left, you need to configure the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "leftPosition");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "dfPanzoomOptionsProvider");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "tui-doc-code", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 3)(38, "div", 4)(39, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Vertical Alignment");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "app-pan-zoom-configuration-example-2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Similarly, to adjust the positioning towards the top of the viewport, you should set up topPosition. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "tui-doc-code", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Other options for setting up PanZoom");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " The PanZoom component is highly customizable, offering several options to tailor the graph layout to your specific needs. Below is a detailed guide on the available ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "DfPanZoomOptions");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ul", 7)(54, "li", 8)(55, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "panSize");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " (default: 20000): Defines the total size of the layout where the nodes are placed. This determines the area's dimensions that can be panned around. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "li", 8)(59, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "topPosition");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " (default: null): Sets the y-coordinate of the base node's position. When set to null, the base node is centered vertically. Specifying 0 will align the base node to the top of the layout. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li", 8)(63, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "leftPosition");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " (default: null): Similar to topPosition, but for the x-coordinate. A null value centers the base node horizontally, while setting it to 0 aligns it to the left edge of the layout. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "li", 8)(67, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "minZoom");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " (default: 0.25): The minimum zoom level allowed. This can prevent the graph from becoming too small to interact with. The default value 0.25 implies that the graph can be reduced to a quarter of its original size. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "li", 8)(71, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "maxZoom");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " (default: 3): The maximum zoom level. It restricts how much the graph can be enlarged, thus avoiding excessive zoom-ins. A default value of 3 means that the graph can be magnified up to three times its normal size. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "li", 8)(75, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "zoomStep");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, " (default: 0.25): The incremental step for zooming in or out. Setting the zoomStep to 0.25 offers a comfortable gradual scaling at each zoom action, providing smooth transitions. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "li", 8)(79, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "zoomAnimationDuration");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " (default: 300): The time, in milliseconds, it takes to animate the zoom action. A value of 300 represents a quick yet smooth transition that enhances the interactivity without causing disorientation. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "li", 8)(83, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "zoomWheelSensitivity");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, " (default: 0.01): Controls the zoom sensitivity when using a mouse wheel. The recommended value 0.01 ensures that each scroll step results in a slight, controlled zoom change. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "li", 8)(87, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "touchSensitivity");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " (default: 0.01): Adjusts the pan and zoom sensitivity on touch devices. A low value such as 0.01 is used to achieve a fine-tuned control over the touch interactions. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.gettingStarted.data0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.gettingStarted.data1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.gettingStarted.data2);
    }
  },
  dependencies: [_examples__WEBPACK_IMPORTED_MODULE_0__.PanZoomConfigurationExample1Component, _examples__WEBPACK_IMPORTED_MODULE_0__.PanZoomConfigurationExample2Component, _examples__WEBPACK_IMPORTED_MODULE_0__.PanZoomConfigurationExample3Component, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_2__.TuiDocCode, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_2__.TuiDocPage],
  styles: [".pan-position-demo[_ngcontent-%COMP%] {\n  display: flex;\n}\n.pan-position-demo-item[_ngcontent-%COMP%] {\n  display: flex;\n  padding-inline-end: 0.3125rem;\n  inline-size: 50%;\n  box-sizing: border-box;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.pan-position-demo-item[_ngcontent-%COMP%]:last-child {\n  padding-inline-start: 0.3125rem;\n  padding-inline-end: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbi16b29tLWNvbmZpZ3VyYXRpb24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBQ1I7QUFDUTtFQUNJLCtCQUFBO0VBQ0EscUJBQUE7QUFDWiIsImZpbGUiOiJwYW4tem9vbS1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbi1wb3NpdGlvbi1kZW1vIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgJi1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwLjMxMjVyZW07XG4gICAgICAgIGlubGluZS1zaXplOiA1MCU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAuMzEyNXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vcGFuLXpvb20tY29uZmlndXJhdGlvbi9wYW4tem9vbS1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUNSO0FBQ1E7RUFDSSwrQkFBQTtFQUNBLHFCQUFBO0FBQ1o7O0FBRUEsbzdCQUFvN0IiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuLXBvc2l0aW9uLWRlbW8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAmLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDAuMzEyNXJlbTtcbiAgICAgICAgaW5saW5lLXNpemU6IDUwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMC4zMTI1cmVtO1xuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanZoomConfigurationComponent);

/***/ })

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_pan-zoom-configuration_pan-zoom-configuration_component_ts.js.map