"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_pan-zoom-configuration_pan-zoom-configuration_component_ts"],{

/***/ 30608
/*!****************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/pan-zoom-configuration/examples/index.ts ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanZoomConfigurationExample1Component: () => (/* reexport safe */ _pan_zoom_configuration_example_1_component__WEBPACK_IMPORTED_MODULE_0__.PanZoomConfigurationExample1Component),
/* harmony export */   PanZoomConfigurationExample2Component: () => (/* reexport safe */ _pan_zoom_configuration_example_2_component__WEBPACK_IMPORTED_MODULE_1__.PanZoomConfigurationExample2Component),
/* harmony export */   PanZoomConfigurationExample3Component: () => (/* reexport safe */ _pan_zoom_configuration_example_3_component__WEBPACK_IMPORTED_MODULE_2__.PanZoomConfigurationExample3Component)
/* harmony export */ });
/* harmony import */ var _pan_zoom_configuration_example_1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pan-zoom-configuration-example-1/component */ 76909);
/* harmony import */ var _pan_zoom_configuration_example_2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pan-zoom-configuration-example-2/component */ 3116);
/* harmony import */ var _pan_zoom_configuration_example_3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pan-zoom-configuration-example-3/component */ 10499);




/***/ },

/***/ 76909
/*!*****************************************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/pan-zoom-configuration/examples/pan-zoom-configuration-example-1/component.ts ***!
  \*****************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanZoomConfigurationExample1Component: () => (/* binding */ PanZoomConfigurationExample1Component)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _nodes_pan_pan_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../nodes/pan/pan.component */ 43714);
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
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(this.data);
  }
}
_PanZoomConfigurationExample1Component = PanZoomConfigurationExample1Component;
_PanZoomConfigurationExample1Component.ɵfac = function PanZoomConfigurationExample1Component_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PanZoomConfigurationExample1Component)();
};
_PanZoomConfigurationExample1Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _PanZoomConfigurationExample1Component,
  selectors: [["app-pan-zoom-configuration-example-1"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.provideNgDrawFlowConfigs)({
    nodes: {
      pan: _nodes_pan_pan_component__WEBPACK_IMPORTED_MODULE_2__.PanComponent
    }
  }), (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.dfPanZoomOptionsProvider)({
    topPosition: null,
    leftPosition: 0
  })])],
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
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  block-size: 12.5rem;\n  inline-size: 100%;\n  background: #fff;\n  border-radius: 0.3125rem;\n}\n[_nghost-%COMP%]   ng-draw-flow[_ngcontent-%COMP%] {\n  --df-node-padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBQ0o7QUFOQTtFQVFRLG9CQUFBO0FBQ1IiLCJmaWxlIjoic3R5bGVzLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmxvY2stc2l6ZTogMTIuNXJlbTtcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcblxuICAgIG5nLWRyYXctZmxvdyB7XG4gICAgICAgIC0tZGYtbm9kZS1wYWRkaW5nOiAwO1xuICAgIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vcGFuLXpvb20tY29uZmlndXJhdGlvbi9leGFtcGxlcy9wYW4tem9vbS1jb25maWd1cmF0aW9uLWV4YW1wbGUtMS9zdHlsZXMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUNKO0FBTkE7RUFRUSxvQkFBQTtBQUNSOztBQUVBLDRqQkFBNGpCIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJsb2NrLXNpemU6IDEyLjVyZW07XG4gICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XG5cbiAgICBuZy1kcmF3LWZsb3cge1xuICAgICAgICAtLWRmLW5vZGUtcGFkZGluZzogMDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ },

/***/ 3116
/*!*****************************************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/pan-zoom-configuration/examples/pan-zoom-configuration-example-2/component.ts ***!
  \*****************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanZoomConfigurationExample2Component: () => (/* binding */ PanZoomConfigurationExample2Component)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _nodes_pan_pan_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../nodes/pan/pan.component */ 43714);
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
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(this.data);
  }
}
_PanZoomConfigurationExample2Component = PanZoomConfigurationExample2Component;
_PanZoomConfigurationExample2Component.ɵfac = function PanZoomConfigurationExample2Component_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PanZoomConfigurationExample2Component)();
};
_PanZoomConfigurationExample2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _PanZoomConfigurationExample2Component,
  selectors: [["app-pan-zoom-configuration-example-2"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.provideNgDrawFlowConfigs)({
    nodes: {
      pan: _nodes_pan_pan_component__WEBPACK_IMPORTED_MODULE_2__.PanComponent
    }
  }), (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.dfPanZoomOptionsProvider)({
    topPosition: 0,
    leftPosition: null
  })])],
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
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  block-size: 12.5rem;\n  inline-size: 100%;\n  background: #fff;\n  border-radius: 0.3125rem;\n}\n[_nghost-%COMP%]   ng-draw-flow[_ngcontent-%COMP%] {\n  --df-node-padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBQ0o7QUFOQTtFQVFRLG9CQUFBO0FBQ1IiLCJmaWxlIjoic3R5bGVzLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmxvY2stc2l6ZTogMTIuNXJlbTtcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcblxuICAgIG5nLWRyYXctZmxvdyB7XG4gICAgICAgIC0tZGYtbm9kZS1wYWRkaW5nOiAwO1xuICAgIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vcGFuLXpvb20tY29uZmlndXJhdGlvbi9leGFtcGxlcy9wYW4tem9vbS1jb25maWd1cmF0aW9uLWV4YW1wbGUtMi9zdHlsZXMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUNKO0FBTkE7RUFRUSxvQkFBQTtBQUNSOztBQUVBLDRqQkFBNGpCIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJsb2NrLXNpemU6IDEyLjVyZW07XG4gICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XG5cbiAgICBuZy1kcmF3LWZsb3cge1xuICAgICAgICAtLWRmLW5vZGUtcGFkZGluZzogMDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ },

/***/ 10499
/*!*****************************************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/pan-zoom-configuration/examples/pan-zoom-configuration-example-3/component.ts ***!
  \*****************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanZoomConfigurationExample3Component: () => (/* binding */ PanZoomConfigurationExample3Component)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _nodes_pan_pan_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../nodes/pan/pan.component */ 43714);
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
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(this.data);
  }
}
_PanZoomConfigurationExample3Component = PanZoomConfigurationExample3Component;
_PanZoomConfigurationExample3Component.ɵfac = function PanZoomConfigurationExample3Component_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PanZoomConfigurationExample3Component)();
};
_PanZoomConfigurationExample3Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _PanZoomConfigurationExample3Component,
  selectors: [["app-pan-zoom-configuration-example-3"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.provideNgDrawFlowConfigs)({
    nodes: {
      pan: _nodes_pan_pan_component__WEBPACK_IMPORTED_MODULE_2__.PanComponent
    }
  }), (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.dfPanZoomOptionsProvider)({
    topPosition: null,
    leftPosition: null
  })])],
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
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  block-size: 12.5rem;\n  inline-size: 100%;\n  background: #fff;\n  border-radius: 0.3125rem;\n}\n[_nghost-%COMP%]   ng-draw-flow[_ngcontent-%COMP%] {\n  --df-node-padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBQ0o7QUFOQTtFQVFRLG9CQUFBO0FBQ1IiLCJmaWxlIjoic3R5bGVzLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmxvY2stc2l6ZTogMTIuNXJlbTtcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcblxuICAgIG5nLWRyYXctZmxvdyB7XG4gICAgICAgIC0tZGYtbm9kZS1wYWRkaW5nOiAwO1xuICAgIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vcGFuLXpvb20tY29uZmlndXJhdGlvbi9leGFtcGxlcy9wYW4tem9vbS1jb25maWd1cmF0aW9uLWV4YW1wbGUtMy9zdHlsZXMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUNKO0FBTkE7RUFRUSxvQkFBQTtBQUNSOztBQUVBLDRqQkFBNGpCIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJsb2NrLXNpemU6IDEyLjVyZW07XG4gICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XG5cbiAgICBuZy1kcmF3LWZsb3cge1xuICAgICAgICAtLWRmLW5vZGUtcGFkZGluZzogMDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ },

/***/ 43714
/*!*************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/pan-zoom-configuration/nodes/pan/pan.component.ts ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanComponent: () => (/* binding */ PanComponent)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
var _PanComponent;


class PanComponent extends _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DrawFlowBaseNode {}
_PanComponent = PanComponent;
_PanComponent.ɵfac = /*@__PURE__*/(() => {
  let ɵPanComponent_BaseFactory;
  return function PanComponent_Factory(__ngFactoryType__) {
    return (ɵPanComponent_BaseFactory || (ɵPanComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_PanComponent)))(__ngFactoryType__ || _PanComponent);
  };
})();
_PanComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _PanComponent,
  selectors: [["app-node"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function PanComponent_Template(rf, ctx) {},
  styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  block-size: 5rem;\n  inline-size: 5rem;\n}\n[_nghost-%COMP%]::before, \n[_nghost-%COMP%]::after {\n  content: '';\n  position: absolute;\n  display: block;\n  background: var(--df-connection-color);\n}\n[_nghost-%COMP%]::before {\n  inset-block-start: 50%;\n  inset-inline-start: 0;\n  inline-size: 100%;\n  block-size: 0.125rem;\n  transform: translateY(-50%);\n}\n[_nghost-%COMP%]::after {\n  inset-block-start: 0;\n  inset-inline-start: 50%;\n  block-size: 100%;\n  inline-size: 0.125rem;\n  transform: translateX(-50%);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUNJOztFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQ0FBQTtBQUNSO0FBRUk7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0FBQVI7QUFHSTtFQUNJLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUFEUiIsImZpbGUiOiJwYW4uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmxvY2stc2l6ZTogNXJlbTtcbiAgICBpbmxpbmUtc2l6ZTogNXJlbTtcblxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kZi1jb25uZWN0aW9uLWNvbG9yKTtcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgICBpbnNldC1ibG9jay1zdGFydDogNTAlO1xuICAgICAgICBpbnNldC1pbmxpbmUtc3RhcnQ6IDA7XG4gICAgICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgICAgICBibG9jay1zaXplOiAwLjEyNXJlbTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgaW5zZXQtYmxvY2stc3RhcnQ6IDA7XG4gICAgICAgIGluc2V0LWlubGluZS1zdGFydDogNTAlO1xuICAgICAgICBibG9jay1zaXplOiAxMDAlO1xuICAgICAgICBpbmxpbmUtc2l6ZTogMC4xMjVyZW07XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vcGFuLXpvb20tY29uZmlndXJhdGlvbi9ub2Rlcy9wYW4vcGFuLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQ0k7O0VBRUksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNDQUFBO0FBQ1I7QUFFSTtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7QUFBUjtBQUdJO0VBQ0ksb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQURSOztBQUVBLDQyQ0FBNDJDIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJsb2NrLXNpemU6IDVyZW07XG4gICAgaW5saW5lLXNpemU6IDVyZW07XG5cbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvcik7XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgICAgaW5zZXQtYmxvY2stc3RhcnQ6IDUwJTtcbiAgICAgICAgaW5zZXQtaW5saW5lLXN0YXJ0OiAwO1xuICAgICAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICAgICAgYmxvY2stc2l6ZTogMC4xMjVyZW07XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICAgIGluc2V0LWJsb2NrLXN0YXJ0OiAwO1xuICAgICAgICBpbnNldC1pbmxpbmUtc3RhcnQ6IDUwJTtcbiAgICAgICAgYmxvY2stc2l6ZTogMTAwJTtcbiAgICAgICAgaW5saW5lLXNpemU6IDAuMTI1cmVtO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ },

/***/ 72251
/*!**********************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/pan-zoom-configuration/pan-zoom-configuration.component.ts ***!
  \**********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanZoomConfigurationComponent)
/* harmony export */ });
/* harmony import */ var _examples__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examples */ 30608);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 94841);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ 90795);
var _PanZoomConfigurationComponent;




class PanZoomConfigurationComponent {
  constructor() {
    this.gettingStarted = {
      data0: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_pan-zoom-configuration_examples_data-0_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/data-0.md?raw */ 84042, 17)),
      data1: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_pan-zoom-configuration_examples_data-1_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/data-1.md?raw */ 37589, 17)),
      data2: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_pan-zoom-configuration_examples_data-2_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/data-2.md?raw */ 30216, 17)),
      commands: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_pan-zoom-configuration_examples_camera-commands_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/camera-commands.md?raw */ 45825, 17)),
      theming: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_pan-zoom-configuration_examples_background-theming_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/background-theming.md?raw */ 57064, 17))
    };
  }
}
_PanZoomConfigurationComponent = PanZoomConfigurationComponent;
_PanZoomConfigurationComponent.ɵfac = function PanZoomConfigurationComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PanZoomConfigurationComponent)();
};
_PanZoomConfigurationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _PanZoomConfigurationComponent,
  selectors: [["app-pan-zoom-configuration"]],
  decls: 245,
  vars: 5,
  consts: [["header", "Pan and Zoom"], [1, "docs-lead"], [1, "docs-summary"], ["filename", "graph-editor.component.ts", 3, "code"], [1, "pan-position-demo"], [1, "pan-position-demo-item"], [1, "content"], [1, "code-example"], ["appearance", "info", "size", "m", "tuiNotification", ""], [1, "docs-table-scroll"], [1, "docs-table"], ["filename", "editor-toolbar.component.ts", 3, "code"], ["filename", "styles.less", 3, "code"]],
  template: function PanZoomConfigurationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " The camera maps graph world coordinates to the visible viewport. Users can pan, wheel, pinch and zoom while application controls use the same camera through the component or store API. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div")(5, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "World coordinates");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Node positions stay stable while the camera moves.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div")(10, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Dynamic workspace");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Bounds grow from rendered node dimensions.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div")(15, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Content framing");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Initial and reset positions can align to the start node.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "section")(20, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Configure the Camera");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Scope ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "dfPanZoomOptionsProvider()");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " to one editor component or provide shared defaults at application level. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "tui-doc-code", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "section")(29, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Initial and Reset Framing");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " With no placement options, world origin ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "{x: 0, y: 0}");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " is centered. Configure either axis independently to align rendered content to an exact viewport offset. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "app-pan-zoom-configuration-example-3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 4)(38, "div", 5)(39, "div", 6)(40, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Horizontal Alignment");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "app-pan-zoom-configuration-example-1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p")(44, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "leftPosition");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " aligns the left edge of the first ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "startNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " to the requested viewport offset. Without a start node it uses the left edge of all rendered content. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "tui-doc-code", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 5)(53, "div", 6)(54, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Vertical Alignment");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "app-pan-zoom-configuration-example-2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p")(58, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "topPosition");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " applies the same rule to the top edge. A ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "null");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " value keeps centered framing on that axis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "tui-doc-code", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "section", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Placement options affect initial and reset framing only. They do not change saved node coordinates or the position assigned to a newly created node. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "section")(69, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Options");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 9)(72, "table", 10)(73, "thead")(74, "tr")(75, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Option");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Default");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Behavior");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "tbody")(82, "tr")(83, "td")(84, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "leftPosition");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "td")(87, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "null");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Initial/reset offset from the left viewport edge.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "tr")(92, "td")(93, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "topPosition");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "td")(96, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "null");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Initial/reset offset from the top viewport edge.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "tr")(101, "td")(102, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "minZoom");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, " / ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "maxZoom");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "td")(108, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "0.25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, " / ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Lower and upper bounds for every zoom command and gesture.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "tr")(116, "td")(117, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "zoomStep");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "td")(120, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "0.25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, " Step used by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "zoomIn()");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "zoomOut()");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "tr")(131, "td")(132, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "zoomAnimationDuration");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "td")(135, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "300");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Camera zoom transition duration in milliseconds.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "tr")(140, "td")(141, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "wheelBehavior");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "td")(144, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "zoom");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, " Uses the wheel for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "zoom");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, " or viewport ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "scroll");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "tr")(155, "td")(156, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "wheelStep");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "td")(159, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "0.008");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Base wheel zoom step; takes priority over legacy sensitivity.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "tr")(164, "td")(165, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "wheelSpeed");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "td")(168, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "Additional multiplier for wheel zoom.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "tr")(173, "td")(174, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "pinchZoomSpeed");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "td")(177, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Multiplier for trackpad pinch zoom.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "tr")(182, "td")(183, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "touchSensitivity");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "td")(186, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "0.01");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "Touch gesture sensitivity.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "tr")(191, "td")(192, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "backgroundCanvas.visible");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "td")(195, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "true");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "Renders the workspace fill, border and point grid.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "tr")(200, "td")(201, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "panSize");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "Deprecated");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "Ignored by dynamic workspace sizing and retained for compatibility only.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "tr")(208, "td")(209, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "zoomWheelSensitivity");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "td")(212, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "0.01");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, " Used only when ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "wheelStep");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, " is undefined. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "section")(220, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "Dynamic Workspace");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, " The usable workspace is recalculated from rendered node bounds as nodes move or resize. There is no fixed ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "panSize");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, " border that blocks dragging. Camera clamping follows the current content instead. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "section")(228, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "Programmatic Camera Control");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, " Inject ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233, "NgDrawFlowStoreService");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, " in a toolbar or call the same methods on a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "viewChild(NgDrawFlowComponent)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, " . Coordinates and zoom are optional, so omitted camera fields keep their current values. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](238, "tui-doc-code", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "section")(240, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "Background Theming");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, " The dedicated canvas follows camera movement and workspace CSS variables. Disable it when the application supplies its own background. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](244, "tui-doc-code", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.gettingStarted.data0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.gettingStarted.data1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.gettingStarted.data2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](173);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.gettingStarted.commands);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.gettingStarted.theming);
    }
  },
  dependencies: [_examples__WEBPACK_IMPORTED_MODULE_0__.PanZoomConfigurationExample1Component, _examples__WEBPACK_IMPORTED_MODULE_0__.PanZoomConfigurationExample2Component, _examples__WEBPACK_IMPORTED_MODULE_0__.PanZoomConfigurationExample3Component, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_2__.TuiDocCode, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_2__.TuiDocPage, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__.TuiNotificationDirective],
  styles: [".pan-position-demo[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.pan-position-demo-item[_ngcontent-%COMP%] {\n  display: flex;\n  inline-size: 50%;\n  box-sizing: border-box;\n  flex-direction: column;\n  justify-content: space-between;\n}\n[tuiNotification][_ngcontent-%COMP%] {\n  margin-block: 1rem;\n}\n@media (max-width: 47.9375rem) {\n  .pan-position-demo[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .pan-position-demo-item[_ngcontent-%COMP%] {\n    inline-size: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbi16b29tLWNvbmZpZ3VyYXRpb24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsU0FBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFDUjtBQUdBO0VBQ0ksa0JBQUE7QUFESjtBQUlBO0VBQ0k7SUFDSSxzQkFBQTtFQUZOO0VBSU07SUFDSSxpQkFBQTtFQUZWO0FBQ0YiLCJmaWxlIjoicGFuLXpvb20tY29uZmlndXJhdGlvbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW4tcG9zaXRpb24tZGVtbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG5cbiAgICAmLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBpbmxpbmUtc2l6ZTogNTAlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxufVxuXG5bdHVpTm90aWZpY2F0aW9uXSB7XG4gICAgbWFyZ2luLWJsb2NrOiAxcmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTM3NXJlbSkge1xuICAgIC5wYW4tcG9zaXRpb24tZGVtbyB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgJi1pdGVtIHtcbiAgICAgICAgICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vcGFuLXpvb20tY29uZmlndXJhdGlvbi9wYW4tem9vbS1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFNBQUE7QUFDSjtBQUNJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBQ1I7QUFHQTtFQUNJLGtCQUFBO0FBREo7QUFJQTtFQUNJO0lBQ0ksc0JBQUE7RUFGTjtFQUlNO0lBQ0ksaUJBQUE7RUFGVjtBQUNGOztBQUVBLDRrQ0FBNGtDIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbi1wb3NpdGlvbi1kZW1vIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcblxuICAgICYtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGlubGluZS1zaXplOiA1MCU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG59XG5cblt0dWlOb3RpZmljYXRpb25dIHtcbiAgICBtYXJnaW4tYmxvY2s6IDFyZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45Mzc1cmVtKSB7XG4gICAgLnBhbi1wb3NpdGlvbi1kZW1vIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAmLWl0ZW0ge1xuICAgICAgICAgICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_pan-zoom-configuration_pan-zoom-configuration_component_ts.js.map