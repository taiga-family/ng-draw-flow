"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_migrations_migrations_component_ts"],{

/***/ 17509
/*!**********************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/migrations/migrations.component.ts ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MigrationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 94841);
var _MigrationsComponent;


class MigrationsComponent {
  constructor() {
    this.data = {
      nodeVariables: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_migrations_examples_v1-node-variables_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/v1-node-variables.md?raw */ 50456, 17))
    };
  }
}
_MigrationsComponent = MigrationsComponent;
_MigrationsComponent.ɵfac = function MigrationsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MigrationsComponent)();
};
_MigrationsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _MigrationsComponent,
  selectors: [["migrations-doc-page"]],
  decls: 82,
  vars: 1,
  consts: [["header", "Migrations"], [1, "docs-lead"], [1, "docs-summary"], ["filename", "styles.less", 3, "code"], [1, "tui-space_top-4"], [1, "tui-list", "tui-list_extra-small", "tui-space_bottom-4"], [1, "tui-list__item"]],
  template: function MigrationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Breaking changes are documented by release line. Apply migrations before adopting new examples so node wrappers and application styles have one clear owner. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section")(4, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "From 0.x to 1.x");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2)(7, "div")(8, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Before");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Every custom node repeated wrapper background, border and selection styles.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div")(13, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Core owns the wrapper and custom components own their internal content.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " In v1, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "NodeComponent");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " owns the visual wrapper of every node. Padding, text color, background, border, border radius, shadow, transition and selected or invalid states are now defined by the library and configured through CSS variables. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Move reusable node wrapper styles from custom node components to application styles. Keep custom node component styles focused on internal layout, form controls, labels, connector placement and other content details. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Set node variables on ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "ng-draw-flow");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " to configure all nodes. For one node or a group of nodes, pass ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "className");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " in the node object and override variables through that class. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "tui-doc-code", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 4)(34, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Node variables");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 5)(37, "li", 6)(38, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "--df-node-background");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "--df-node-color");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "--df-node-padding");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 6)(47, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "--df-node-border");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "--df-node-border-width");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "--df-node-border-style");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "--df-node-border-color");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "--df-node-border-radius");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 6)(62, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "--df-node-box-shadow");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "--df-node-box-shadow-hover");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "--df-node-box-shadow-selected");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "--df-node-box-shadow-invalid");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 6)(74, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "--df-node-selected-border-color");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "--df-node-invalid-border-color");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "--df-node-transition");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.data.nodeVariables);
    }
  },
  dependencies: [_taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_1__.TuiDocCode, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_1__.TuiDocPage],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_migrations_migrations_component_ts.js.map