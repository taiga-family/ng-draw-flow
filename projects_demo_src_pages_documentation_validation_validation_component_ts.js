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






function ValidationComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tui-doc-code", 3);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("code", ctx);
  }
}
function ValidationComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tui-doc-code", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("code", ctx);
  }
}
function ValidationComponent_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tui-doc-code", 7);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("code", ctx);
  }
}
function ValidationComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tui-doc-code", 8);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("code", ctx);
  }
}
function ValidationComponent_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tui-doc-code", 10);
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
      IsolatedNodesValidatorError: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_validation_examples_isolated-nodes-validator-error_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/isolated-nodes-validator-error.md?raw */ 43433, 17)),
      Setup: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_validation_examples_validator-setup_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/validator-setup.md?raw */ 61332, 17)),
      CustomValidator: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_validation_examples_custom-validator_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/custom-validator.md?raw */ 79682, 17))
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
  decls: 97,
  vars: 5,
  consts: [["header", "Validation"], [1, "docs-lead"], [1, "docs-summary"], ["filename", "form-node.component.ts", 3, "code"], ["filename", "editor.component.ts", 3, "code"], [1, "docs-table-scroll"], [1, "docs-table"], ["filename", "cycle-error.ts", 3, "code"], ["filename", "isolated-nodes-error.ts", 3, "code"], ["appearance", "warning", "size", "m", "tuiNotification", ""], ["filename", "required-root.validator.ts", 3, "code"], ["routerLink", "/examples/editor", "tuiLink", ""]],
  template: function ValidationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Combine local node validity with Angular validators on the complete ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "DfDataModel");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " . Core maps validator node ids back to rendered nodes and applies the standard invalid wrapper state. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2)(7, "div")(8, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Local node state");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Forms and controls inside one custom node.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div")(13, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Graph validators");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Pure Angular validators over nodes and connections.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div")(18, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Visual feedback");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Invalid node ids receive the core wrapper style.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "section")(23, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Node-Level Validation");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Override the protected ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "invalidState");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " getter to combine local UI validity with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "invalidSignal()");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " supplied by graph validators. Core uses the result to apply ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, ".df-invalid");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " to the custom node host. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, ValidationComponent_Conditional_36_Template, 1, 1, "tui-doc-code", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "section")(38, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Graph-Level Validation");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " Attach validators to the same non-nullable form control bound to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "ng-draw-flow");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, " . They receive the complete graph value and participate in normal Angular form status and errors. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, ValidationComponent_Conditional_45_Template, 1, 1, "tui-doc-code", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 5)(47, "table", 6)(48, "thead")(49, "tr")(50, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Validator");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Checks");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Node ids");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "tbody")(57, "tr")(58, "td")(59, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "dfCycleDetectionValidator()");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Directed cycles in the connection structure.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "td")(64, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "cycleNodes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "tr")(67, "td")(68, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "dfIsolatedNodesValidator()");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Nodes absent from every source and target endpoint.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "td")(73, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "isolatedNodes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Built-in Error Shapes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](77, ValidationComponent_Conditional_77_Template, 1, 1, "tui-doc-code", 7)(78, ValidationComponent_Conditional_78_Template, 1, 1, "tui-doc-code", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "section")(80, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Custom Validators");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, " Implement a standard Angular ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "ValidatorFn");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, " and keep it pure. Return affected ids either as a top-level string array value or in a nested ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "{nodeIds: string[]}");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, " object so the editor can highlight those nodes. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, " Do not mutate nodes or connections inside a validator. Return validation metadata and let application code decide how the graph should be repaired. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](92, ValidationComponent_Conditional_92_Template, 1, 1, "tui-doc-code", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, " The built-in cycle validator caches by connection structure. Isolated-node validation also reads the node list, so replacing graph arrays and objects remains the predictable update model. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, " Open the editor validation example ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((tmp_0_0 = ctx.validationExamples.LocalValidation) ? 36 : -1, tmp_0_0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((tmp_1_0 = ctx.validationExamples.Setup) ? 45 : -1, tmp_1_0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((tmp_2_0 = ctx.validationExamples.CycleDetectionValidatorError) ? 77 : -1, tmp_2_0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((tmp_3_0 = ctx.validationExamples.IsolatedNodesValidatorError) ? 78 : -1, tmp_3_0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((tmp_4_0 = ctx.validationExamples.CustomValidator) ? 92 : -1, tmp_4_0);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_4__.TuiDocCode, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_4__.TuiDocPage, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLink, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__.TuiNotificationDirective],
  styles: ["tui-doc-code[_ngcontent-%COMP%], \n[tuiNotification][_ngcontent-%COMP%] {\n  display: block;\n  margin-block: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vdmFsaWRhdGlvbi92YWxpZGF0aW9uLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGNBQUE7RUFDQSxrQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsidHVpLWRvYy1jb2RlLFxuW3R1aU5vdGlmaWNhdGlvbl0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ibG9jazogMXJlbTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_validation_validation_component_ts.js.map