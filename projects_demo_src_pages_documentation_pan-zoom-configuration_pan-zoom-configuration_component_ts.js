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
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  block-size: 12.5rem;\n  inline-size: 100%;\n  background: #fff;\n  border-radius: 0.3125rem;\n}\n[_nghost-%COMP%]   ng-draw-flow[_ngcontent-%COMP%] {\n  --df-node-padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vcGFuLXpvb20tY29uZmlndXJhdGlvbi9leGFtcGxlcy9wYW4tem9vbS1jb25maWd1cmF0aW9uLWV4YW1wbGUtMS9zdHlsZXMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUNKO0FBTkE7RUFRUSxvQkFBQTtBQUNSIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJsb2NrLXNpemU6IDEyLjVyZW07XG4gICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XG5cbiAgICBuZy1kcmF3LWZsb3cge1xuICAgICAgICAtLWRmLW5vZGUtcGFkZGluZzogMDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
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
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  block-size: 12.5rem;\n  inline-size: 100%;\n  background: #fff;\n  border-radius: 0.3125rem;\n}\n[_nghost-%COMP%]   ng-draw-flow[_ngcontent-%COMP%] {\n  --df-node-padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vcGFuLXpvb20tY29uZmlndXJhdGlvbi9leGFtcGxlcy9wYW4tem9vbS1jb25maWd1cmF0aW9uLWV4YW1wbGUtMi9zdHlsZXMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUNKO0FBTkE7RUFRUSxvQkFBQTtBQUNSIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJsb2NrLXNpemU6IDEyLjVyZW07XG4gICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XG5cbiAgICBuZy1kcmF3LWZsb3cge1xuICAgICAgICAtLWRmLW5vZGUtcGFkZGluZzogMDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
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
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  block-size: 12.5rem;\n  inline-size: 100%;\n  background: #fff;\n  border-radius: 0.3125rem;\n}\n[_nghost-%COMP%]   ng-draw-flow[_ngcontent-%COMP%] {\n  --df-node-padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vcGFuLXpvb20tY29uZmlndXJhdGlvbi9leGFtcGxlcy9wYW4tem9vbS1jb25maWd1cmF0aW9uLWV4YW1wbGUtMy9zdHlsZXMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUNKO0FBTkE7RUFRUSxvQkFBQTtBQUNSIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJsb2NrLXNpemU6IDEyLjVyZW07XG4gICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XG5cbiAgICBuZy1kcmF3LWZsb3cge1xuICAgICAgICAtLWRmLW5vZGUtcGFkZGluZzogMDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
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
  styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  block-size: 5rem;\n  inline-size: 5rem;\n}\n[_nghost-%COMP%]::before, \n[_nghost-%COMP%]::after {\n  content: '';\n  position: absolute;\n  display: block;\n  background: var(--df-connection-color);\n}\n[_nghost-%COMP%]::before {\n  inset-block-start: 50%;\n  inset-inline-start: 0;\n  inline-size: 100%;\n  block-size: 0.125rem;\n  transform: translateY(-50%);\n}\n[_nghost-%COMP%]::after {\n  inset-block-start: 0;\n  inset-inline-start: 50%;\n  block-size: 100%;\n  inline-size: 0.125rem;\n  transform: translateX(-50%);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vcGFuLXpvb20tY29uZmlndXJhdGlvbi9ub2Rlcy9wYW4vcGFuLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQ0k7O0VBRUksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNDQUFBO0FBQ1I7QUFFSTtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7QUFBUjtBQUdJO0VBQ0ksb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQURSIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJsb2NrLXNpemU6IDVyZW07XG4gICAgaW5saW5lLXNpemU6IDVyZW07XG5cbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvcik7XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgICAgaW5zZXQtYmxvY2stc3RhcnQ6IDUwJTtcbiAgICAgICAgaW5zZXQtaW5saW5lLXN0YXJ0OiAwO1xuICAgICAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICAgICAgYmxvY2stc2l6ZTogMC4xMjVyZW07XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICAgIGluc2V0LWJsb2NrLXN0YXJ0OiAwO1xuICAgICAgICBpbnNldC1pbmxpbmUtc3RhcnQ6IDUwJTtcbiAgICAgICAgYmxvY2stc2l6ZTogMTAwJTtcbiAgICAgICAgaW5saW5lLXNpemU6IDAuMTI1cmVtO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
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
_PanZoomConfigurationComponent.ɵfac = function PanZoomConfigurationComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PanZoomConfigurationComponent)();
};
_PanZoomConfigurationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _PanZoomConfigurationComponent,
  selectors: [["app-pan-zoom-configuration"]],
  decls: 191,
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
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " This example shows the most common non-default placement options: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "leftPosition");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "topPosition");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " . They control initial and reset framing relative to the viewport edges. Deprecated options such as ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "panSize");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " are documented separately in the options reference below. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Placement of Elements on the Screen.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "app-pan-zoom-configuration-example-3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " By default, the base node is positioned at the coordinates ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "x: 0, y: 0");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " , which is centered on the screen. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 2)(30, "div", 3)(31, "div", 4)(32, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Horizontal Alignment");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "app-pan-zoom-configuration-example-1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " However, the initial viewport can be shifted. Configure ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "leftPosition");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "dfPanZoomOptionsProvider");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " to place the left edge of the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "startNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " at an exact offset from the left viewport edge. If there is no ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "startNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " , the left edge of all rendered content is used instead. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "leftPosition: 100");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " means the initial camera targets that left edge at 100px from the viewport. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "tui-doc-code", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 3)(55, "div", 4)(56, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Vertical Alignment");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "app-pan-zoom-configuration-example-2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Similarly, configure ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "topPosition");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " to place the top edge of the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "startNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " or, if there is no ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "startNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " , the top edge of the rendered content at an exact offset from the top viewport edge. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "tui-doc-code", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Other options for setting up PanZoom");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " The PanZoom component is highly customizable, offering several options to tailor the graph layout to your specific needs. Below is a detailed guide on the available ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "DfPanZoomOptions");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, " : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "ul", 7)(80, "li", 8)(81, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "panSize");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, " (default: 2000, deprecated): Previously defined the fixed size of the working area. Dynamic workspace sizing now ignores this option and derives bounds from rendered nodes instead. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " still means square area ( ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "width = height = value");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " ). ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "{ width, height }");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " still means rectangular area, but both forms are preserved only for backward compatibility and no longer affect runtime workspace sizing. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "li", 8)(94, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "topPosition");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, " (default: null): Initial and reset viewport padding from the top edge. If a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "startNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, " exists, its top edge is aligned to this offset; otherwise the top edge of the rendered node content is used. Null keeps default centered framing on Y. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "li", 8)(101, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "leftPosition");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, " (default: null): Initial and reset viewport padding from the left edge. If a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "startNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, " exists, its left edge is aligned to this offset; otherwise the left edge of the rendered node content is used. Null keeps default centered framing on X. This option does not redefine node world coordinates. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "li", 8)(108, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "minZoom");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, " (default: 0.25): The minimum zoom level allowed. This can prevent the graph from becoming too small to interact with. The default value 0.25 implies that the graph can be reduced to a quarter of its original size. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "li", 8)(112, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "maxZoom");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, " (default: 3): The maximum zoom level. It restricts how much the graph can be enlarged, thus avoiding excessive zoom-ins. A default value of 3 means that the graph can be magnified up to three times its normal size. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "li", 8)(116, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "zoomStep");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, " (default: 0.25): The incremental step for zooming in or out. Setting the zoomStep to 0.25 offers a comfortable gradual scaling at each zoom action, providing smooth transitions. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "li", 8)(120, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "zoomAnimationDuration");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, " (default: 300): The time, in milliseconds, it takes to animate the zoom action. A value of 300 represents a quick yet smooth transition that enhances the interactivity without causing disorientation. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "li", 8)(124, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "zoomWheelSensitivity");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, " (default: 0.01): Legacy fallback value for wheel zoom sensitivity. If ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "wheelStep");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, " is set (it is by default), it has priority. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "li", 8)(131, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "touchSensitivity");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, " (default: 0.01): Adjusts the pan and zoom sensitivity on touch devices. A low value such as 0.01 is used to achieve a fine-tuned control over the touch interactions. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "li", 8)(135, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "wheelBehavior");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, " (default: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "'zoom'");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, " ): Defines wheel behavior: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "'zoom'");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, " for mouse wheel zoom, or ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "'scroll'");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, " for panning with the wheel. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "li", 8)(148, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "wheelSpeed");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, " (default: 1): Additional multiplier for wheel zoom speed. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "li", 8)(152, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "wheelStep");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, " (default: 0.008): Base wheel zoom step. This option has priority over ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "zoomWheelSensitivity");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "li", 8)(159, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "pinchZoomSpeed");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, " (default: 1): Multiplier for trackpad pinch-to-zoom speed. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "li", 8)(163, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "backgroundCanvas.visible");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, " (default: true): Toggles the dedicated canvas background layer that renders the workspace fill, border, and point grid behind the scene. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, " Deprecated pan size examples kept for backward compatibility: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "dfPanZoomOptionsProvider({ panSize: 6000 })");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "dfPanZoomOptionsProvider({ panSize: { width: 8000, height: 4000 } })");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, " The workspace is now dynamic rather than a fixed rectangle. Node coordinates are stored in world space, and the usable workspace bounds are recalculated from the rendered node bounds as nodes move or resize. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, " As a result, there is no longer a hard ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "panSize");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, " border that blocks node dragging. Camera clamping and initial or reset framing are derived from the current rendered content instead. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, " Example for wheel scrolling mode: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "dfPanZoomOptionsProvider({ wheelBehavior: 'scroll' })");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "p")(185, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "leftPosition");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, " / ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "topPosition");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, " affect initial and reset framing only. They do not change the meaning of saved node coordinates, and new nodes are still created from the current viewport center. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.gettingStarted.data0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.gettingStarted.data1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.gettingStarted.data2);
    }
  },
  dependencies: [_examples__WEBPACK_IMPORTED_MODULE_0__.PanZoomConfigurationExample1Component, _examples__WEBPACK_IMPORTED_MODULE_0__.PanZoomConfigurationExample2Component, _examples__WEBPACK_IMPORTED_MODULE_0__.PanZoomConfigurationExample3Component, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_2__.TuiDocCode, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_2__.TuiDocPage],
  styles: [".pan-position-demo[_ngcontent-%COMP%] {\n  display: flex;\n}\n.pan-position-demo-item[_ngcontent-%COMP%] {\n  display: flex;\n  padding-inline-end: 0.3125rem;\n  inline-size: 50%;\n  box-sizing: border-box;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.pan-position-demo-item[_ngcontent-%COMP%]:last-child {\n  padding-inline-start: 0.3125rem;\n  padding-inline-end: 0;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vcGFuLXpvb20tY29uZmlndXJhdGlvbi9wYW4tem9vbS1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUNSO0FBQ1E7RUFDSSwrQkFBQTtFQUNBLHFCQUFBO0FBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuLXBvc2l0aW9uLWRlbW8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAmLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDAuMzEyNXJlbTtcbiAgICAgICAgaW5saW5lLXNpemU6IDUwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMC4zMTI1cmVtO1xuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_pan-zoom-configuration_pan-zoom-configuration_component_ts.js.map