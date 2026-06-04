"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_configuration-and-public-api_configuration-and-public-a-bfcf86"],{

/***/ 28605
/*!**********************************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/configuration-and-public-api/configuration-and-public-api.component.ts ***!
  \**********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConfigurationAndPublicApiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 94841);
var _ConfigurationAndPublicApiComponent;


class ConfigurationAndPublicApiComponent {
  constructor() {
    this.data = {
      configurations: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_configuration-and-public-api_examples_configurations_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/configurations.md?raw */ 21483, 17)),
      nodeStyles: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_configuration-and-public-api_examples_node-styles_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/node-styles.md?raw */ 26333, 17))
    };
  }
}
_ConfigurationAndPublicApiComponent = ConfigurationAndPublicApiComponent;
_ConfigurationAndPublicApiComponent.ɵfac = function ConfigurationAndPublicApiComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfigurationAndPublicApiComponent)();
};
_ConfigurationAndPublicApiComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _ConfigurationAndPublicApiComponent,
  selectors: [["configuration-and-public-api"]],
  decls: 260,
  vars: 2,
  consts: [["header", "Configuration & Public API"], ["filename", "app.module.ts", 3, "code"], [1, "tui-space_top-4"], ["filename", "styles.less", 3, "code"], [1, "tui-list", "tui-list_extra-small", "tui-space_bottom-4"], [1, "tui-list__item"], [1, "tui-text_body-s"]],
  template: function ConfigurationAndPublicApiComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "section")(2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "NgDrawFlow Configuration");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " The library is configured via the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "provideNgDrawFlowConfigs()");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " provider in the application module. Available parameters: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 2)(11, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "nodes:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " A collection of Angular components that can be used as node content. The object keys serve as unique node type identifiers (specified in the node's ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "data.type");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " property). ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Node CSS variables:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Node wrapper styles are controlled by CSS variables on ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ng-draw-flow");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " . Override these variables globally from application styles to keep node content focused on layout, controls and connectors. For a particular node, set ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "className");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " in the node data, for example ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "className: 'warning-node'");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " , and override variables through that class. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "tui-doc-code", 3)(33, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "connection:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 4)(37, "li", 5)(38, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "type");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " (default: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "DfConnectionType.Bezier");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " ) - connection line style: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul")(45, "li")(46, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Bezier");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " : Classic Bezier curves with control points ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li")(50, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "SmoothStep");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " : Connections with straight segments and rounded corners ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 5)(54, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "curvature");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul")(57, "li")(58, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " For ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Bezier");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " : A dimensionless coefficient that controls how strongly the connection bends ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 6)(64, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Since v0.14.0:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " The value is relative to the distance between connectors. In earlier versions it was a fixed pixel offset for control points. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " For ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "SmoothStep");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " : Determines the corner rounding radius in pixels ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 5)(73, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "arrowhead");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul")(76, "li")(77, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "type");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " : arrowhead shape ( ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "DfArrowhead.Arrow");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "DfArrowhead.ArrowClosed");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "DfArrowhead.None");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " ) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li")(90, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "width");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " : arrowhead width in pixels ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li")(94, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "height");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " : arrowhead height in pixels ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "options:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "ul", 4)(101, "li", 5)(102, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "nodeDragThreshold");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " (default: 1) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Defines the minimum distance (in pixels) required to initiate node dragging:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "ul")(108, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Value ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " prevents accidental drag events during clicks ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li")(114, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Dragging starts immediately (may interfere with interactions) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li", 5)(118, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "nodesDraggable");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " (default: true) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Disables node dragging when set to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "false");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li", 5)(127, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "nodesDeletable");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " (default: true) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Prevents deleting nodes via keyboard when ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "false");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li", 5)(136, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "connectionsCreatable");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " (default: true) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Disallows creating new connections when set to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "false");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li", 5)(145, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "connectionsDeletable");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " (default: true) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Prevents connection deletion when set to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "false");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "section", 2)(155, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Public API");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " The ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "ng-draw-flow");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " component exposes these public methods for programmatic control: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "ul", 4)(163, "li", 5)(164, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "zoomIn(): void");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " : Zooms the workspace in by one step (as defined by the zoomStep configuration). ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "li", 5)(168, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "zoomOut(): void");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " : Zooms the workspace out by one step (as defined by the zoomStep configuration). ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li", 5)(172, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "resetPosition(): void");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " : Resets zoom to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "1.0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " and pan to the default camera state. If ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "leftPosition");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " or ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "topPosition");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " are configured, the viewport is then reframed using the same content-based alignment rules as the initial render: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "ul")(185, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "With both values set to null, the camera returns to the world origin");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "With configured offsets, the viewport aligns to the start node or rendered content bounds");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "li", 5)(190, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "setPosition(position?: { x?: number; y?: number; zoom?: number }): void");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " : Partially updates the current camera state. Omitted fields keep their current values, so you can move only along one axis, change only the zoom level, or update both pan and zoom in one call. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "li", 5)(194, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "setScale(scale: number): void");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " : Applies an absolute zoom factor (1 === 100%), automatically clamped between the configured ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "minZoom");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "maxZoom");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " bounds. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "li", 5)(204, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "removeConnection(connection: DfDataConnection): void");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " : Programmatically removes a connection between nodes. The connection object must match exactly one existing connection in the graph. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "li", 5)(208, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "removeNode(node: DfDataNode | string): void");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " : Programmatically removes a node by object or id and removes every connection that uses this node as a source or target. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "li", 5)(212, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "NgDrawFlowStoreService");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " : Root-scoped facade for runtime state and controls\u2014inject it anywhere to mirror component actions ( ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "zoomIn");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "zoomOut");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "resetPosition");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "setPosition");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "setScale");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "removeConnection");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "removeNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, " ) and observe live data ( ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "dataModel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "scale");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "selectedNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "selectedConnection");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, " , signal event snapshots like ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "lastNodeMoved");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "lastConnectionCreated");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, " , plus backward-compatible event streams like ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "nodeMoved$");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "connectionCreated$");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, " ). ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.data.configurations);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.data.nodeStyles);
    }
  },
  dependencies: [_taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_1__.TuiDocCode, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_1__.TuiDocPage],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_configuration-and-public-api_configuration-and-public-a-bfcf86.js.map