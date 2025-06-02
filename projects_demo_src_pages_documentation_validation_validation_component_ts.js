"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_validation_validation_component_ts"],{

/***/ 97149:
/*!**********************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/validation/validation.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ 71534);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ 90795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 94841);
var _ValidationComponent;






function ValidationComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-doc-code", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const localValidation_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", localValidation_r3);
  }
}
function ValidationComponent_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-doc-code", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const cycleDetectionValidatorError_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", cycleDetectionValidatorError_r4);
  }
}
function ValidationComponent_ng_container_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-doc-code", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const isolatedNodesValidatorError_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", isolatedNodesValidatorError_r5);
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
_ValidationComponent = ValidationComponent;
_ValidationComponent.ɵfac = function ValidationComponent_Factory(t) {
  return new (t || _ValidationComponent)();
};
_ValidationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _ValidationComponent,
  selectors: [["app-validation"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 55,
  vars: 3,
  consts: [["header", "Validation"], [4, "ngIf"], ["appearance", "warning", "size", "m"], ["routerLink", "/examples/editor", "tuiLink", "", 1, "tui-space_top-4", 2, "display", "block"], ["filename", "Example: Node with Form and Validation", 3, "code"], ["filename", "dfCycleDetectionValidator error", 1, "tui-space_bottom-4", 3, "code"], ["filename", "dfIsolatedNodesValidator error", 3, "code"]],
  template: function ValidationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " ng-draw-flow provides a flexible graph validation system at two levels: at the individual node level and at the entire graph level. This allows you to create complex validation rules for your diagrams and visually display errors. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Node-level Validation");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Each node in ng-draw-flow can have its own validation logic. For this purpose, the base class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "DrawFlowBaseNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " has an ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "invalid");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " flag, which when set to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "true");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " automatically adds the CSS class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, ".df-invalid");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " to the node. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "How to Use");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " You can independently manage the validity state of a node within your component. This is especially useful when a node contains a form or other input elements that require validation. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ValidationComponent_ng_container_23_Template, 2, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Graph-level Validation");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " ng-draw-flow also provides the ability to validate the entire graph as a whole. For this purpose, ready-made validators are available that can be applied to the FormControl associated with the ng-draw-flow component. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Built-in Validators");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " 1. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "dfCycleDetectionValidator");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Checks the graph for cycles (cyclicity). A cycle occurs when there is a path that starts and ends at the same node. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ValidationComponent_ng_container_36_Template, 2, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " 2. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "dfIsolatedNodesValidator");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Checks the graph for isolated nodes - nodes that have neither incoming nor outgoing connections.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ValidationComponent_ng_container_43_Template, 2, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Creating Custom Validators");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " You can create your own validators for the graph by implementing a function that conforms to the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "ValidatorFn");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " interface from Angular. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tui-notification", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Important: If your validator should highlight problematic nodes, it must return an array with the IDs of these nodes. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Example ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validationExamples.LocalValidation);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validationExamples.CycleDetectionValidatorError);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validationExamples.IsolatedNodesValidatorError);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_4__.TuiDocCode, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_4__.TuiDocPage, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__.TuiLink, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__.TuiNotification],
  styles: [".node-demo[_ngcontent-%COMP%] {\n  block-size: 31.25rem;\n  background: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRpb24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoidmFsaWRhdGlvbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub2RlLWRlbW8ge1xuICAgIGJsb2NrLXNpemU6IDMxLjI1cmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vdmFsaWRhdGlvbi92YWxpZGF0aW9uLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBLDRXQUE0VyIsInNvdXJjZXNDb250ZW50IjpbIi5ub2RlLWRlbW8ge1xuICAgIGJsb2NrLXNpemU6IDMxLjI1cmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidationComponent);

/***/ })

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_validation_validation_component_ts.js.map