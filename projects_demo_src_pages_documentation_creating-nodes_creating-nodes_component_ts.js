"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_creating-nodes_creating-nodes_component_ts"],{

/***/ 63997
/*!******************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/creating-nodes/creating-nodes.component.ts ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreatingNodesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 94841);
var _CreatingNodesComponent;





class CreatingNodesComponent {
  constructor() {
    this.customNodeExample = {
      TypeScript: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_creating-nodes_examples_node_component_ts_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/node.component.ts?raw */ 12355, 17)),
      Styles: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_creating-nodes_examples_node_styles_less_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/node.styles.less?raw */ 4594, 17)),
      Template: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_creating-nodes_examples_node_template_html_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/node.template.html?raw */ 3998, 17))
    };
    this.gettingStarted = {
      baseNode: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_creating-nodes_examples_base-node_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/base-node.md?raw */ 51558, 17))
    };
    this.nodeData = {
      nodes: [{
        id: 'node-1',
        data: {
          type: 'simpleNode',
          text: 'Node example'
        },
        position: {
          x: 0,
          y: 0
        }
      }],
      connections: []
    };
    this.nodeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(this.nodeData);
  }
}
_CreatingNodesComponent = CreatingNodesComponent;
_CreatingNodesComponent.ɵfac = function CreatingNodesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreatingNodesComponent)();
};
_CreatingNodesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _CreatingNodesComponent,
  selectors: [["app-creating-nodes"]],
  decls: 75,
  vars: 3,
  consts: [["header", "Creating Nodes"], [3, "code"], [2, "padding", "0", 3, "content"], [1, "node-demo"], [3, "formControl"]],
  template: function CreatingNodesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " In ng-draw-flow, nodes can be customized to look and function just how you want them to. To create your own node, you should develop a component that extends from the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "DrawFlowBaseNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " class. This component can render connector components such as ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "DfInputComponent");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "DfOutputComponent");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Here is what the DrawFlowBaseNode class entails:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "tui-doc-code", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " The base class uses signal queries ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "viewChildren()");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "DfInputComponent");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "DfOutputComponent");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " . These signals keep the node aware of existing connectors and detect changes in their count, which is essential for maintaining the flow's data integrity and interaction logic. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " The ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "nodeId");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " provides a unique identifier for each node while ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "model");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " holds the necessary data for the node's functionality. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " For backward compatibility these values are also available as plain properties on the base class. If you want to work with Angular signals directly, use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "nodeIdSignal()");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "modelSignal()");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "startNodeSignal()");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "endNodeSignal()");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "selectedSignal()");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "invalidSignal()");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " in your custom nodes. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " The ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "selected");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, " attribute is still passed to the node content for custom behavior, while the default wrapper selection styles are handled by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "NodeComponent");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, " and configured with CSS variables. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, " The optional ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "startNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "endNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, " inputs determine the node's ability to connect with others, defining its role within the flow as either the initiation or termination point. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Here is a basic blueprint for a simple node component:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "tui-doc-example", 2)(73, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "ng-draw-flow", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("code", ctx.gettingStarted.baseNode);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](58);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("content", ctx.customNodeExample);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.nodeForm);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__.TuiDocCode, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__.TuiDocExample, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__.TuiDocPage],
  styles: [".node-demo[_ngcontent-%COMP%] {\n  block-size: 31.25rem;\n  background: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vY3JlYXRpbmctbm9kZXMvY3JlYXRpbmctbm9kZXMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIubm9kZS1kZW1vIHtcbiAgICBibG9jay1zaXplOiAzMS4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_creating-nodes_creating-nodes_component_ts.js.map