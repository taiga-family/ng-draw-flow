"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_examples_stress-test_stress-test_component_ts"],{

/***/ 8922:
/*!*******************************************************************************!*\
  !*** ./projects/demo/src/pages/examples/stress-test/stress-test.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 5577);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ 5592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 4841);
var _StressTestComponent;






const ROWS_COUNT = 23;
const COLUMNS_COUNT = 23;
class StressTestComponent {
  constructor() {
    this.data = {
      nodes: this.createNodesMap(ROWS_COUNT, COLUMNS_COUNT),
      connections: this.createConnectionsArray(ROWS_COUNT, COLUMNS_COUNT)
    };
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.data, [(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.dfCycleDetectionValidator)()]);
  }
  ngOnInit() {
    this.form.statusChanges.subscribe(s => {
      console.warn(s, this.form, 'form status');
    });
  }
  createNodesMap(rows, columns) {
    const nodes = [];
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= columns; j++) {
        const nodeId = `node-${(i - 1) * columns + j}`;
        nodes.push({
          id: nodeId,
          data: {
            type: 'miniNode',
            index: (i - 1) * columns + j
          },
          position: {
            x: (j - 1) * 70,
            y: (i - 1) * 70
          }
        });
      }
    }
    return nodes;
  }
  createConnectionsArray(rows, columns) {
    const connectionsArray = [];
    for (let row = 1; row <= rows; row++) {
      for (let col = 1; col <= columns; col++) {
        const sourceId = `node-${(row - 1) * columns + col}`;
        // Check if it's not the last column
        if (col < columns) {
          const targetId = `node-${(row - 1) * columns + col + 1}`;
          connectionsArray.push({
            source: {
              nodeId: sourceId,
              connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Output,
              connectorId: 'output-1'
            },
            target: {
              nodeId: targetId,
              connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Input,
              connectorId: 'input-1'
            }
          });
        } else if (row < rows) {
          // It's the last column and not the last row
          const firstNodeNextRowId = `node-${row * columns + 1}`;
          connectionsArray.push({
            source: {
              nodeId: sourceId,
              connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Output,
              connectorId: 'output-1'
            },
            target: {
              nodeId: firstNodeNextRowId,
              connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Input,
              connectorId: 'input-1'
            }
          });
        }
      }
    }
    return connectionsArray;
  }
}
_StressTestComponent = StressTestComponent;
_StressTestComponent.ɵfac = function StressTestComponent_Factory(t) {
  return new (t || _StressTestComponent)();
};
_StressTestComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _StressTestComponent,
  selectors: [["stress-test"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.dfPanZoomOptionsProvider)({
    topPosition: 50,
    leftPosition: 50,
    panSize: 5000
  })]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 5,
  vars: 1,
  consts: [["header", "Stress test"], [1, "tui-space_top-4"], [1, "editor"], [3, "formControl"]],
  template: function StressTestComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tui-doc-page", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " You doubt we can render a lot of nodes and edges? See for yourself. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "section", 1)(3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ng-draw-flow", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.form);
    }
  },
  dependencies: [ngx_markdown__WEBPACK_IMPORTED_MODULE_3__.MarkdownModule, _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_4__.TuiDocPage],
  styles: [".editor {\n  block-size: 50rem;\n  inline-size: 100%;\n  margin: 0 auto;\n  background: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmVzcy10ZXN0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6InN0cmVzcy10ZXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRvciB7XG4gICAgYmxvY2stc2l6ZTogNTByZW07XG4gICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2V4YW1wbGVzL3N0cmVzcy10ZXN0L3N0cmVzcy10ZXN0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBLGdjQUFnYyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3Ige1xuICAgIGJsb2NrLXNpemU6IDUwcmVtO1xuICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  encapsulation: 2,
  changeDetection: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StressTestComponent);

/***/ })

}]);
//# sourceMappingURL=projects_demo_src_pages_examples_stress-test_stress-test_component_ts.js.map