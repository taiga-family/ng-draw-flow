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
  decls: 69,
  vars: 1,
  consts: [["header", "Migrations"], ["filename", "styles.less", 3, "code"], [1, "tui-space_top-4"], [1, "tui-list", "tui-list_extra-small", "tui-space_bottom-4"], [1, "tui-list__item"]],
  template: function MigrationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "section")(2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "From 0.x to 1.x");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " In v1, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "NodeComponent");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " owns the visual wrapper of every node. Padding, text color, background, border, border radius, shadow, transition and selected or invalid states are now defined by the library and configured through CSS variables. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Move reusable node wrapper styles from custom node components to application styles. Keep custom node component styles focused on internal layout, form controls, labels, connector placement and other content details. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Set node variables on ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ng-draw-flow");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " to configure all nodes. For one node or a group of nodes, pass ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "className");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " in the node object and override variables through that class. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "tui-doc-code", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 2)(21, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Node variables");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 3)(24, "li", 4)(25, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "--df-node-background");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "--df-node-color");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "--df-node-padding");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 4)(34, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "--df-node-border");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "--df-node-border-width");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "--df-node-border-style");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "--df-node-border-color");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "--df-node-border-radius");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 4)(49, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "--df-node-box-shadow");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "--df-node-box-shadow-hover");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "--df-node-box-shadow-selected");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "--df-node-box-shadow-invalid");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 4)(61, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "--df-node-selected-border-color");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "--df-node-invalid-border-color");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "--df-node-transition");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
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