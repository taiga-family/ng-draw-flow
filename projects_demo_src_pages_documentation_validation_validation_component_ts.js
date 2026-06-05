"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_validation_validation_component_ts"],{

/***/ 97149
/*!**********************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/validation/validation.component.ts ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ValidationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 76380);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ 71534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 94841);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ 90795);
var _ValidationComponent;






function ValidationComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tui-doc-code", 1);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("code", ctx);
  }
}
function ValidationComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tui-doc-code", 2);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("code", ctx);
  }
}
function ValidationComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tui-doc-code", 3);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("code", ctx);
  }
}
class ValidationComponent {
  constructor() {
    this.validationExamples = {
      LocalValidation: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_validation_examples_local-1_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/local-1.md?raw */ 83467, 17)),
      CycleDetectionValidatorError: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_validation_examples_cycle-detection-validator-error_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/cycle-detection-validator-error.md?raw */ 43270, 17)),
      IsolatedNodesValidatorError: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_validation_examples_isolated-nodes-validator-error_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/isolated-nodes-validator-error.md?raw */ 43433, 17))
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
_ValidationComponent = ValidationComponent;
_ValidationComponent.ɵfac = function ValidationComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ValidationComponent)();
};
_ValidationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _ValidationComponent,
  selectors: [["app-validation"]],
  decls: 55,
  vars: 3,
  consts: [["header", "Validation"], ["filename", "Example: Node with Form and Validation", 3, "code"], ["filename", "dfCycleDetectionValidator error", 1, "tui-space_bottom-4", 3, "code"], ["filename", "dfIsolatedNodesValidator error", 3, "code"], ["appearance", "warning", "size", "m", "tuiNotification", ""], ["routerLink", "/examples/editor", "tuiLink", "", 1, "tui-space_top-4", 2, "display", "block"]],
  template: function ValidationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " ng-draw-flow provides a flexible graph validation system at two levels: at the individual node level and at the entire graph level. This allows you to create complex validation rules for your diagrams and visually display errors. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Node-level Validation");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Each node in ng-draw-flow can have its own validation logic. For this purpose, the base class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "DrawFlowBaseNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " has an ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "invalid");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " flag, which when set to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "true");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " automatically adds the CSS class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, ".df-invalid");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " to the node. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "How to Use");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " You can independently manage the validity state of a node within your component. This is especially useful when a node contains a form or other input elements that require validation. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ValidationComponent_Conditional_23_Template, 1, 1, "tui-doc-code", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Graph-level Validation");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " ng-draw-flow also provides the ability to validate the entire graph as a whole. For this purpose, ready-made validators are available that can be applied to the FormControl associated with the ng-draw-flow component. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Built-in Validators");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " 1. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "dfCycleDetectionValidator");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " Checks the graph for cycles (cyclicity). A cycle occurs when there is a path that starts and ends at the same node. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, ValidationComponent_Conditional_36_Template, 1, 1, "tui-doc-code", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " 2. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "dfIsolatedNodesValidator");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Checks the graph for isolated nodes - nodes that have neither incoming nor outgoing connections.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, ValidationComponent_Conditional_43_Template, 1, 1, "tui-doc-code", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Creating Custom Validators");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " You can create your own validators for the graph by implementing a function that conforms to the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "ValidatorFn");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, " interface from Angular. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "section", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, " Important: If your validator should highlight problematic nodes, it must return an array with the IDs of these nodes. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " Example ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      let tmp_2_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((tmp_0_0 = ctx.validationExamples.LocalValidation) ? 23 : -1, tmp_0_0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((tmp_1_0 = ctx.validationExamples.CycleDetectionValidatorError) ? 36 : -1, tmp_1_0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((tmp_2_0 = ctx.validationExamples.IsolatedNodesValidatorError) ? 43 : -1, tmp_2_0);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_4__.TuiDocCode, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_4__.TuiDocPage, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLink, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__.TuiNotificationDirective],
  styles: [".node-demo[_ngcontent-%COMP%] {\n  block-size: 31.25rem;\n  background: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vdmFsaWRhdGlvbi92YWxpZGF0aW9uLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLm5vZGUtZGVtbyB7XG4gICAgYmxvY2stc2l6ZTogMzEuMjVyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_validation_validation_component_ts.js.map