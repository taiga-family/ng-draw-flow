"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_examples_simple-example_simple-example_component_ts"],{

/***/ 4706:
/*!*************************************************************************************!*\
  !*** ./projects/demo/src/pages/examples/simple-example/simple-example.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 5577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 4841);
var _SimpleExampleComponent;





class SimpleExampleComponent {
  constructor() {
    this.gettingStartedExample = {
      TypeScript: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_examples_simple-example_examples_component_ts_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/component.ts?raw */ 9568, 17)),
      Styles: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_examples_simple-example_examples_styles_less_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/styles.less?raw */ 5815, 17)),
      Template: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_examples_simple-example_examples_template_html_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/template.html?raw */ 6003, 17))
    };
    this.data = {
      nodes: new Map().set('node-1', {
        id: 'node-1',
        data: {
          type: 'simpleNode',
          text: 'This base node'
        },
        position: {
          x: 50,
          y: 0
        },
        startNode: true
      }).set('node-2', {
        id: 'node-2',
        data: {
          type: 'simpleNode',
          text: 'This child node 1'
        },
        position: {
          x: 350,
          y: -50
        }
      }).set('node-3', {
        id: 'node-3',
        data: {
          type: 'simpleNode',
          text: 'This child node 2'
        },
        position: {
          x: 350,
          y: 50
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
      }, {
        source: {
          nodeId: 'node-1',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Output,
          connectorId: 'node-1-output-1'
        },
        target: {
          nodeId: 'node-3',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Input,
          connectorId: 'node-3-input-1'
        }
      }]
    };
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.data);
  }
}
_SimpleExampleComponent = SimpleExampleComponent;
_SimpleExampleComponent.ɵfac = function SimpleExampleComponent_Factory(t) {
  return new (t || _SimpleExampleComponent)();
};
_SimpleExampleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _SimpleExampleComponent,
  selectors: [["simple-example"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.dfPanZoomOptionsProvider)({
    leftPosition: 0
  })]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 5,
  vars: 2,
  consts: [["header", "Simple example"], [2, "padding", "0", 3, "content"], [1, "editor"], [3, "formControl"]],
  template: function SimpleExampleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tui-doc-page", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " This is a very basic example of a NgDrawFlow graph. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tui-doc-example", 1)(3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ng-draw-flow", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("content", ctx.gettingStartedExample);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.form);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__.TuiDocExample, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__.TuiDocPage],
  styles: [".editor[_ngcontent-%COMP%] {\n  block-size: 25rem;\n  inline-size: 100%;\n  margin: 0 auto;\n  background: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbXBsZS1leGFtcGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6InNpbXBsZS1leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRvciB7XG4gICAgYmxvY2stc2l6ZTogMjVyZW07XG4gICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2V4YW1wbGVzL3NpbXBsZS1leGFtcGxlL3NpbXBsZS1leGFtcGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBLHdjQUF3YyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3Ige1xuICAgIGJsb2NrLXNpemU6IDI1cmVtO1xuICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleExampleComponent);

/***/ })

}]);
//# sourceMappingURL=projects_demo_src_pages_examples_simple-example_simple-example_component_ts.js.map