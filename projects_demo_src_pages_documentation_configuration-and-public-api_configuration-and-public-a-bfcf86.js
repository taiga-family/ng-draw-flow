"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_configuration-and-public-api_configuration-and-public-a-bfcf86"],{

/***/ 28605:
/*!**********************************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/configuration-and-public-api/configuration-and-public-api.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 94841);
var _ConfigurationAndPublicApiComponent;


class ConfigurationAndPublicApiComponent {
  constructor() {
    this.data = {
      configurations: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_configuration-and-public-api_examples_configurations_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/configurations.md?raw */ 21483, 17))
    };
  }
}
_ConfigurationAndPublicApiComponent = ConfigurationAndPublicApiComponent;
_ConfigurationAndPublicApiComponent.ɵfac = function ConfigurationAndPublicApiComponent_Factory(t) {
  return new (t || _ConfigurationAndPublicApiComponent)();
};
_ConfigurationAndPublicApiComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _ConfigurationAndPublicApiComponent,
  selectors: [["configuration-and-public-api"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 232,
  vars: 1,
  consts: [["header", "Configuration & Public API"], ["filename", "app.module.ts", 3, "code"], [1, "tui-space_top-4"], [1, "tui-list", "tui-list_extra-small", "tui-space_bottom-4"], [1, "tui-list__item"], [1, "tui-text_body-s"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "connection:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 3)(22, "li", 4)(23, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "type");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " (default: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "DfConnectionType.Bezier");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " ) - connection line style: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul")(30, "li")(31, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Bezier");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " : Classic Bezier curves with control points ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li")(35, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "SmoothStep");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " : Connections with straight segments and rounded corners ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 4)(39, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "curvature");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul")(42, "li")(43, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " For ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Bezier");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " : A dimensionless coefficient that controls how strongly the connection bends ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 5)(49, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Since v0.14.0:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " The value is relative to the distance between connectors. In earlier versions it was a fixed pixel offset for control points. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " For ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "SmoothStep");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " : Determines the corner rounding radius in pixels ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 4)(58, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "arrowhead");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ul")(61, "li")(62, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "type");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " : arrowhead shape ( ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "DfArrowhead.Arrow");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "DfArrowhead.ArrowClosed");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "DfArrowhead.None");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " ) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li")(75, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "width");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " : arrowhead width in pixels ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li")(79, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "height");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " : arrowhead height in pixels ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "options:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "ul", 3)(86, "li", 4)(87, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "nodeDragThreshold");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " (default: 1) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Defines the minimum distance (in pixels) required to initiate node dragging:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "ul")(93, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Value ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " prevents accidental drag events during clicks ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li")(99, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Dragging starts immediately (may interfere with interactions) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li", 4)(103, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "nodesDraggable");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " (default: true) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Disables node dragging when set to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "false");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li", 4)(112, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "nodesDeletable");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " (default: true) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Prevents deleting nodes via keyboard when ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "false");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li", 4)(121, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "connectionsCreatable");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " (default: true) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Disallows creating new connections when set to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "false");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li", 4)(130, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "connectionsDeletable");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " (default: true) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Prevents connection deletion when set to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "false");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "section", 2)(140, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Public API");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " The ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "ng-draw-flow");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " component exposes these public methods for programmatic control: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "ul", 3)(148, "li", 4)(149, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "zoomIn(): void");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " : Zooms the workspace in by one step (as defined by the zoomStep configuration). ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li", 4)(153, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "zoomOut(): void");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " : Zooms the workspace out by one step (as defined by the zoomStep configuration). ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li", 4)(157, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "resetPosition(): void");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " : Resets zoom to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "1.0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " and pan to the default camera state. If ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "leftPosition");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " or ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "topPosition");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " are configured, the viewport is then reframed using the same content-based alignment rules as the initial render: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "ul")(170, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "With both values set to null, the camera returns to the world origin");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "With configured offsets, the viewport aligns to the start node or rendered content bounds");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "li", 4)(175, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "setPosition(position?: { x?: number; y?: number; zoom?: number }): void");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " : Partially updates the current camera state. Omitted fields keep their current values, so you can move only along one axis, change only the zoom level, or update both pan and zoom in one call. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "li", 4)(179, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "setScale(scale: number): void");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " : Applies an absolute zoom factor (1 === 100%), automatically clamped between the configured ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "minZoom");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "maxZoom");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " bounds. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li", 4)(189, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "removeConnection(connection: DfDataConnection): void");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " : Programmatically removes a connection between nodes. The connection object must match exactly one existing connection in the graph. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "li", 4)(193, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "NgDrawFlowStoreService");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " : Root-scoped facade for runtime state and controls\u2014inject it anywhere to mirror component actions ( ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "zoomIn");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "zoomOut");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "resetPosition");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "setPosition");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "setScale");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "removeConnection");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " ) and observe live data ( ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "dataModel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "scale");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "selectedNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "selectedConnection");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " , plus event streams like ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "nodeMoved$");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "connectionCreated$");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " ). ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.data.configurations);
    }
  },
  dependencies: [_taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_1__.TuiDocCode, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_1__.TuiDocPage],
  encapsulation: 2,
  changeDetection: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigurationAndPublicApiComponent);

/***/ })

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_configuration-and-public-api_configuration-and-public-a-bfcf86.js.map