"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_connections_connections_component_ts"],{

/***/ 9445:
/*!************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/connections/connections.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConnectionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 9191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 5577);
/* harmony import */ var _app_modules_nodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app/modules/nodes */ 5989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 4841);
var _ConnectionsComponent;







class ConnectionsComponent {
  constructor() {
    this.data = {
      nodes: new Map().set('node-1', {
        id: 'node-1',
        data: {
          type: 'outputNode',
          text: 'This base node'
        },
        position: {
          x: 0,
          y: 0
        }
      }).set('node-2', {
        id: 'node-2',
        data: {
          type: 'inputNode',
          text: 'This child node 1'
        },
        position: {
          x: 90,
          y: -150
        }
      }),
      connections: [{
        source: {
          nodeId: 'node-1',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Output,
          connectorId: 'node-1-output-1'
        },
        target: {
          nodeId: 'node-2',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Input,
          connectorId: 'node-2-input-1'
        }
      }]
    };
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.data);
  }
}
_ConnectionsComponent = ConnectionsComponent;
_ConnectionsComponent.ɵfac = function ConnectionsComponent_Factory(t) {
  return new (t || _ConnectionsComponent)();
};
_ConnectionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _ConnectionsComponent,
  selectors: [["connections"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.dfPanZoomOptionsProvider)({
    topPosition: null,
    leftPosition: null
  }), (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.provideNgDrawFlowConfigs)({
    connection: {
      type: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionType.SmoothStep,
      arrowhead: 'triangle',
      curvature: 10
    },
    nodes: {
      inputNode: _app_modules_nodes__WEBPACK_IMPORTED_MODULE_1__.InputNodeComponent,
      outputNode: _app_modules_nodes__WEBPACK_IMPORTED_MODULE_1__.OutputNodeComponent
    }
  })]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 3,
  vars: 1,
  consts: [["header", "Connections"], [1, "editor", "tui-space_top-4"], [3, "formControl"]],
  template: function ConnectionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ng-draw-flow", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.form);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_5__.TuiDocPage],
  styles: [".editor {\n  position: relative;\n  block-size: 31.25rem;\n  inline-size: 100%;\n  margin: 0 auto;\n  background: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3Rpb25zLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoiY29ubmVjdGlvbnMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdG9yIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmxvY2stc2l6ZTogMzEuMjVyZW07XG4gICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vY29ubmVjdGlvbnMvY29ubmVjdGlvbnMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQSxvZkFBb2YiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdG9yIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmxvY2stc2l6ZTogMzEuMjVyZW07XG4gICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  encapsulation: 2,
  changeDetection: 0
});

/***/ })

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_connections_connections_component_ts.js.map