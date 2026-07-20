"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_layouts_layouts_component_ts"],{

/***/ 3677
/*!****************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/layouts/layouts.component.ts ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LayoutsComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 76380);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core */ 11498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 94841);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ 90795);
var _LayoutsComponent;





class LayoutsComponent {
  constructor() {
    this.examples = {
      animation: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_layouts_examples_animation_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/animation.md?raw */ 54452, 17)),
      dynamicTree: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_layouts_examples_dynamic-tree_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/dynamic-tree.md?raw */ 86106, 17)),
      installation: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_layouts_examples_installation_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/installation.md?raw */ 46310, 17)),
      measuredSizing: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_layouts_examples_measured-sizing_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/measured-sizing.md?raw */ 11035, 17)),
      model: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_layouts_examples_model_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/model.md?raw */ 93011, 17)),
      strictTreeErrors: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_layouts_examples_strict-tree-errors_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/strict-tree-errors.md?raw */ 91074, 17)),
      treeEngine: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_layouts_examples_tree-engine_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/tree-engine.md?raw */ 77919, 17)),
      treeEngineOptions: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_layouts_examples_tree-engine-options_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/tree-engine-options.md?raw */ 67800, 17)),
      treeNode: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_layouts_examples_tree-node_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/tree-node.md?raw */ 23789, 17))
    };
  }
}
_LayoutsComponent = LayoutsComponent;
_LayoutsComponent.ɵfac = function LayoutsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LayoutsComponent)();
};
_LayoutsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _LayoutsComponent,
  selectors: [["app-layouts"]],
  decls: 217,
  vars: 9,
  consts: [["header", "Dynamic Layouts"], [1, "docs-lead"], [1, "docs-summary"], [1, "docs-actions"], ["appearance", "secondary", "routerLink", "/examples/dynamic-layout", "size", "m", "tuiButton", ""], [1, "docs-flow"], [3, "code"], ["filename", "dynamic-tree.component.ts", 3, "code"], [1, "docs-table-scroll"], [1, "docs-table"], ["appearance", "info", "size", "m", "tuiNotification", ""], ["filename", "tree-node.component.ts", 3, "code"], ["filename", "tree-node.component.html", 3, "code"], ["filename", "graph-editor.component.ts", 3, "code"], ["filename", "layout-errors.ts", 3, "code"], ["appearance", "warning", "size", "m", "tuiNotification", ""]],
  template: function LayoutsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " The optional ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "@ng-draw-flow/layouts");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " package keeps a strict tree organized as nodes are added or resized. It calculates positions while core continues to render nodes, connectors, edges and interactions. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2)(7, "div")(8, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Strict tree");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "One root, one parent per child and no disconnected nodes.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div")(13, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Dynamic sizing");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Fixed dimensions or measured DOM wrappers with a fallback.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div")(18, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Stable interaction");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Anchored mutations keep the activated parent under the pointer.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 3)(23, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Open the interactive tree ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "section")(26, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "How It Fits Together");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ol", 5)(29, "li")(30, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Application changes data");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Add or remove nodes and connections as immutable objects.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "li")(35, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Layouts calculate positions");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span")(38, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "DfAutoLayoutService");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " validates and arranges the strict tree. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "li")(42, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Core renders the result");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Real connector anchors and optional position animation update together.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "section")(47, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Installation");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " Install layouts after ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "@ng-draw-flow/core");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " . Keep both packages on a compatible release line. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "tui-doc-code", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "section")(56, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Register the Layout");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, " Applications configure supported tree options and inject ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "DfAutoLayoutService");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " . D3 is an internal implementation detail; application code does not construct an engine. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "tui-doc-code", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " Call ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "apply()");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, " after the editor is attached. The method is synchronous and does not return a Promise or require a subscription. The latest operation is available through signals. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "tui-doc-code", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "section")(71, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Tree Options");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 8)(74, "table", 9)(75, "thead")(76, "tr")(77, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Option");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Default");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Behavior");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "tbody")(84, "tr")(85, "td")(86, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "direction");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "td")(89, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "LeftToRight");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Also supports RightToLeft, TopToBottom and BottomToTop.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "tr")(94, "td")(95, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "nodeSizing");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Fixed 180 x 64");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Uses one fixed size or measured wrapper dimensions.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "tr")(102, "td")(103, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "levelGap");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "td")(106, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Space between parent and child generations.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "tr")(111, "td")(112, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "siblingGap");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "td")(115, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "32");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "Space between nodes in the same generation.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "tr")(120, "td")(121, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "preserveRootPosition");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "td")(124, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "true");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "Keeps the root at its position from the input model.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "tr")(129, "td")(130, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "origin");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "td")(133, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "{x: 0, y: 0}");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "Root position when preservation is disabled.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "tr")(138, "td")(139, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "rootId");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, "Undefined");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "Requires the graph's only root to have a specific id.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "section")(146, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, "Dynamic Node Sizing");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, " Use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "DfNodeSizingStrategy.Fixed");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, " when every node has known dimensions. Use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154, "Measured");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, " for forms, variable text and expandable content. Measured mode opts into core's wrapper ResizeObserver and requires a fallback for the first calculation. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](156, "tui-doc-code", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, " DOM dimensions are runtime view state and are never written to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, "DfDataModel");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, " . Later size changes are coalesced per animation frame and trigger a new calculation automatically. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "section")(163, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "Real Connector Anchors");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, " Layouts calculate node positions only. Every connection still starts and ends at the actual ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, "df-output");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](171, "df-input");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, " rendered by custom nodes. This supports several independent branches from one form node without virtual center points. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](173, "tui-doc-code", 11)(174, "tui-doc-code", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, " When children use several outputs, assign each connected output a unique zero-based ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "layoutOrder");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, " . Horizontal trees read it top to bottom; vertical trees read it left to right. Children sharing one output retain their order from ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, "DfDataModel.connections");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "section")(184, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185, "End-to-End Child Creation");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187, " An action output asks the application to mutate the graph. The host creates a positioned child and its edge, then calls ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, "apply({model, anchorNodeId})");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190, " . Passing the next model directly avoids waiting for form-to-store synchronization, while the anchor keeps the activated parent at the same canvas position. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](191, "tui-doc-code", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](193, " Dynamic layouts do not force read-only interaction. Keep ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195, "nodesDraggable");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](196, " enabled to calculate an initial arrangement and then allow manual adjustment, or disable it when every mutation must remain under layout control. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "section")(198, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199, "Smooth Position Changes");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](201, " Position animation belongs to core and is opt-in. It applies to layout results and any other model update that changes node coordinates. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](202, "tui-doc-code", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "section")(204, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](205, "Strict Tree Requirements");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](207, " A valid model has exactly one root, unique node ids, existing endpoints, at most one parent for each child and no disconnected nodes. Failures are published to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](209, "DfAutoLayoutService.error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](210, " as ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](212, "DfTreeLayoutError");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](213, " instances. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](214, "tui-doc-code", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "section", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](216, " General DAGs, cycles, multiple parents and custom layout engines are not supported by the current layouts package. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("code", ctx.examples.installation);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("code", ctx.examples.treeEngineOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("code", ctx.examples.treeEngine);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](87);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("code", ctx.examples.measuredSizing);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("code", ctx.examples.treeNode);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("code", ctx.examples.model);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("code", ctx.examples.dynamicTree);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("code", ctx.examples.animation);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("code", ctx.examples.strictTreeErrors);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterLink, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__.TuiDocCode, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__.TuiDocPage, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TuiButton, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__.TuiNotificationDirective],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n}\ntui-doc-code[_ngcontent-%COMP%] {\n  display: block;\n  margin-block: 1rem;\n}\n[tuiNotification][_ngcontent-%COMP%] {\n  margin-block: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vbGF5b3V0cy9sYXlvdXRzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKO0FBRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdBO0VBQ0ksa0JBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxudHVpLWRvYy1jb2RlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYmxvY2s6IDFyZW07XG59XG5cblt0dWlOb3RpZmljYXRpb25dIHtcbiAgICBtYXJnaW4tYmxvY2s6IDFyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_layouts_layouts_component_ts.js.map