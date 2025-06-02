"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_creating-nodes_creating-nodes_component_ts"],{

/***/ 3997:
/*!******************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/creating-nodes/creating-nodes.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 5577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 4841);
var _CreatingNodesComponent;





class CreatingNodesComponent {
  constructor() {
    this.customNodeExample = {
      TypeScript: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_creating-nodes_examples_node_component_ts_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/node.component.ts?raw */ 2355, 17)),
      Styles: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_creating-nodes_examples_node_styles_less_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/node.styles.less?raw */ 4594, 17)),
      Template: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_creating-nodes_examples_node_template_html_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/node.template.html?raw */ 3998, 17))
    };
    this.gettingStarted = {
      baseNode: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_creating-nodes_examples_base-node_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/base-node.md?raw */ 1558, 17))
    };
    this.nodeData = {
      nodes: new Map().set('node-1', {
        id: 'node-1',
        data: {
          type: 'simpleNode',
          text: 'Node example'
        },
        position: {
          x: 0,
          y: 0
        }
      }),
      connections: []
    };
    this.nodeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.nodeData);
  }
}
_CreatingNodesComponent = CreatingNodesComponent;
_CreatingNodesComponent.ɵfac = function CreatingNodesComponent_Factory(t) {
  return new (t || _CreatingNodesComponent)();
};
_CreatingNodesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _CreatingNodesComponent,
  selectors: [["app-creating-nodes"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 49,
  vars: 3,
  consts: [["header", "Creating Nodes"], [3, "code"], [2, "padding", "0", 3, "content"], [1, "node-demo"], [3, "formControl"]],
  template: function CreatingNodesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " In ng-draw-flow, nodes can be customized to look and function just how you want them to. To create your own node, you should develop a component that extends from the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "NgDrawFlowBaseNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " class. This component will incorporate directives such as ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "DrawFlowInputDirective");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "DrawFlowOutputDirective");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Here is what the DrawFlowBaseNode class entails:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "tui-doc-code", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " The use of ViewChildren with QueryList ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "DfInputComponent");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " and QueryList ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "DfOutputComponent");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " is crucial for managing input and output connectors of the node. These properties ensure the component remains aware of the existing connectors and detects any changes in their count, which is essential for maintaining the flow's data integrity and interaction logic. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " The ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "nodeId");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " provides a unique identifier for each node while ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "model");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " holds the necessary data for the node's functionality. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " The ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "selected");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " attribute aids in reflecting the node's selected state in the UI, enhancing the user's experience by providing visual feedback. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " The optional ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "startNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "endNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " inputs determine the node's ability to connect with others, defining its role within the flow as either the initiation or termination point. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Here is a basic blueprint for a simple node component:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "tui-doc-example", 2)(47, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "ng-draw-flow", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("code", ctx.gettingStarted.baseNode);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("content", ctx.customNodeExample);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.nodeForm);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__.TuiDocCode, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__.TuiDocExample, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__.TuiDocPage],
  styles: [".node-demo[_ngcontent-%COMP%] {\n  block-size: 31.25rem;\n  background: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0aW5nLW5vZGVzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6ImNyZWF0aW5nLW5vZGVzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vZGUtZGVtbyB7XG4gICAgYmxvY2stc2l6ZTogMzEuMjVyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vY3JlYXRpbmctbm9kZXMvY3JlYXRpbmctbm9kZXMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUEsd1hBQXdYIiwic291cmNlc0NvbnRlbnQiOlsiLm5vZGUtZGVtbyB7XG4gICAgYmxvY2stc2l6ZTogMzEuMjVyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreatingNodesComponent);

/***/ })

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_creating-nodes_creating-nodes_component_ts.js.map