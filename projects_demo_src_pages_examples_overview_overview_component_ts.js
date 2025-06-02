"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_examples_overview_overview_component_ts"],{

/***/ 1882:
/*!*************************************************************************!*\
  !*** ./projects/demo/src/pages/examples/overview/overview.component.ts ***!
  \*************************************************************************/
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
var _OverviewComponent;






class OverviewComponent {
  constructor() {
    this.customNodeExample = {
      'app.module.ts': __webpack_require__.e(/*! import() */ "projects_demo_src_pages_examples_overview_examples_app_module_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/app.module.md?raw */ 6796, 17)),
      'app.component.ts': __webpack_require__.e(/*! import() */ "projects_demo_src_pages_examples_overview_examples_app_component_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/app.component.md?raw */ 407, 17)),
      'simple-node.component.ts': __webpack_require__.e(/*! import() */ "projects_demo_src_app_modules_nodes_simple-node_simple-node_component_ts_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../app/modules/nodes/simple-node/simple-node.component.ts?raw */ 8550, 17)),
      'simple-node.component.html': __webpack_require__.e(/*! import() */ "projects_demo_src_app_modules_nodes_simple-node_simple-node_component_html_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../app/modules/nodes/simple-node/simple-node.component.html?raw */ 5914, 17)),
      'simple-node.component.less': __webpack_require__.e(/*! import() */ "projects_demo_src_app_modules_nodes_simple-node_simple-node_component_less_ngResource").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../app/modules/nodes/simple-node/simple-node.component.less?raw */ 7422, 17)),
      'info-node.component.ts': __webpack_require__.e(/*! import() */ "projects_demo_src_app_modules_nodes_info-node_info-node_component_ts_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../app/modules/nodes/info-node/info-node.component.ts?raw */ 1370, 17)),
      'info-node.component.html': __webpack_require__.e(/*! import() */ "projects_demo_src_app_modules_nodes_info-node_info-node_component_html_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../app/modules/nodes/info-node/info-node.component.html?raw */ 5150, 17)),
      'info-node.component.less': __webpack_require__.e(/*! import() */ "projects_demo_src_app_modules_nodes_info-node_info-node_component_less_ngResource").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../app/modules/nodes/info-node/info-node.component.less?raw */ 4106, 17)),
      'form-node.component.ts': __webpack_require__.e(/*! import() */ "projects_demo_src_app_modules_nodes_form-node_form-node_component_ts_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../app/modules/nodes/form-node/form-node.component.ts?raw */ 814, 17)),
      'form-node.component.html': __webpack_require__.e(/*! import() */ "projects_demo_src_app_modules_nodes_form-node_form-node_component_html_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../app/modules/nodes/form-node/form-node.component.html?raw */ 3890, 17)),
      'form-node.component.less': __webpack_require__.e(/*! import() */ "projects_demo_src_app_modules_nodes_form-node_form-node_component_less_ngResource").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../app/modules/nodes/form-node/form-node.component.less?raw */ 470, 17))
    };
    this.data = {
      nodes: new Map().set('info-node', {
        id: 'info-node',
        data: {
          type: 'infoNode',
          text: 'This base node'
        },
        position: {
          x: 0,
          y: 0
        }
      }).set('node-1', {
        id: 'node-1',
        data: {
          type: 'simpleNode',
          text: 'The immutable starting point of the graph with no predecessors, marked by the startNode'
        },
        position: {
          x: 0,
          y: 280
        },
        startNode: true
      }).set('node-2', {
        id: 'node-2',
        data: {
          type: 'simpleNode',
          text: 'A flexible node that illustrates the flow from the start to various pathways within the graph'
        },
        position: {
          x: 250,
          y: 200
        }
      }).set('node-3', {
        id: 'node-3',
        data: {
          type: 'simpleNode',
          text: 'Another versatile node demonstrating multiple connections, highlighting the complex interactivity of the graph.'
        },
        position: {
          x: 250,
          y: 350
        }
      }).set('node-4', {
        id: 'node-4',
        data: {
          type: 'simpleNode',
          text: "The final destination in the graph's journey, characterized by the endNode parameter and lacking further paths."
        },
        position: {
          x: 500,
          y: 280
        },
        endNode: true
      }).set('node-5', {
        id: 'node-5',
        data: {
          type: 'formNode',
          value: {},
          text: 'Nodes can contain any kind of content, for example, a form for user interaction.'
        },
        position: {
          x: 200,
          y: 500
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
      }, {
        source: {
          nodeId: 'node-2',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Output,
          connectorId: 'node-2-output-1'
        },
        target: {
          nodeId: 'node-4',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Input,
          connectorId: 'node-4-input-1'
        }
      }, {
        source: {
          nodeId: 'node-3',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Output,
          connectorId: 'node-3-output-1'
        },
        target: {
          nodeId: 'node-4',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Input,
          connectorId: 'node-4-input-1'
        }
      }, {
        source: {
          nodeId: 'node-1',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Output,
          connectorId: 'node-1-output-1'
        },
        target: {
          nodeId: 'node-5',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Input,
          connectorId: 'node-5-input-1'
        }
      }]
    };
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.data, [(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.dfCycleDetectionValidator)(), (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.dfIsolatedNodesValidator)()]);
  }
}
_OverviewComponent = OverviewComponent;
_OverviewComponent.ɵfac = function OverviewComponent_Factory(t) {
  return new (t || _OverviewComponent)();
};
_OverviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _OverviewComponent,
  selectors: [["changelog"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.dfPanZoomOptionsProvider)({
    topPosition: 50,
    leftPosition: 50
  })]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 6,
  vars: 2,
  consts: [["header", "Feature Overview"], [1, "tui-space_top-4"], [2, "padding", "0", 3, "content"], [1, "editor-overview"], [3, "formControl"]],
  template: function OverviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tui-doc-page", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " This is an overview example of the capabilities of NgDrawFlow. Below, you can observe that nodes can contain absolutely anything inside. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "section", 1)(3, "tui-doc-example", 2)(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ng-draw-flow", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("content", ctx.customNodeExample);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.form);
    }
  },
  dependencies: [ngx_markdown__WEBPACK_IMPORTED_MODULE_3__.MarkdownModule, _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_4__.TuiDocExample, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_4__.TuiDocPage],
  styles: [".editor-overview {\n  block-size: 40rem;\n  inline-size: 100%;\n  margin: 0 auto;\n  background: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm92ZXJ2aWV3LnN0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoib3ZlcnZpZXcuc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3Itb3ZlcnZpZXcge1xuICAgIGJsb2NrLXNpemU6IDQwcmVtO1xuICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2V4YW1wbGVzL292ZXJ2aWV3L292ZXJ2aWV3LnN0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUEsd2JBQXdiIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRvci1vdmVydmlldyB7XG4gICAgYmxvY2stc2l6ZTogNDByZW07XG4gICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  encapsulation: 2,
  changeDetection: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverviewComponent);

/***/ })

}]);
//# sourceMappingURL=projects_demo_src_pages_examples_overview_overview_component_ts.js.map