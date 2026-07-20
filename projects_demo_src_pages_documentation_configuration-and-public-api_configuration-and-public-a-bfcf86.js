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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 76380);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core */ 71534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 94841);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ 90795);
var _ConfigurationAndPublicApiComponent;





class ConfigurationAndPublicApiComponent {
  constructor() {
    this.data = {
      configurations: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_configuration-and-public-api_examples_configurations_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/configurations.md?raw */ 21483, 17)),
      nodeStyles: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_configuration-and-public-api_examples_node-styles_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/node-styles.md?raw */ 26333, 17)),
      positionAnimation: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_configuration-and-public-api_examples_position-animatio-cefe9b").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/position-animation.md?raw */ 69704, 17))
    };
  }
}
_ConfigurationAndPublicApiComponent = ConfigurationAndPublicApiComponent;
_ConfigurationAndPublicApiComponent.ɵfac = function ConfigurationAndPublicApiComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfigurationAndPublicApiComponent)();
};
_ConfigurationAndPublicApiComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _ConfigurationAndPublicApiComponent,
  selectors: [["configuration-and-public-api"]],
  decls: 259,
  vars: 3,
  consts: [["header", "Configuration & Public API"], [1, "docs-lead"], [1, "docs-summary"], ["filename", "graph-editor.component.ts", 3, "code"], [1, "docs-table-scroll"], [1, "docs-table"], ["filename", "styles.less", 3, "code"], ["appearance", "info", "size", "m", "tuiNotification", ""], ["routerLink", "/documentation/state-and-events", "tuiLink", ""], ["routerLink", "/documentation/pan-zoom-configuration", "tuiLink", ""]],
  template: function ConfigurationAndPublicApiComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Configure each editor with Angular providers, bind its graph through a form control and use either the component reference or the store facade for commands. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div")(5, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Core provider");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Node registry, connection rendering and interaction constraints.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div")(10, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Camera provider");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Initial framing, zoom limits and wheel behavior.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div")(15, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Public controls");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Camera, model, selection and deletion commands.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "section")(20, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Core Configuration");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Call ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "provideNgDrawFlowConfigs()");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " in application-level providers for shared defaults or in component providers when editors need independent node registries and behavior. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "tui-doc-code", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 4)(29, "table", 5)(30, "thead")(31, "tr")(32, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Option");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Default");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Behavior");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "tbody")(39, "tr")(40, "td")(41, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "connection.type");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "td")(44, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Bezier");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " Uses Bezier curves or orthogonal ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "SmoothStep");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " paths. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "tr")(52, "td")(53, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "connection.curvature");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "td")(56, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "0.25");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Bezier bend coefficient or SmoothStep corner radius in pixels.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "tr")(61, "td")(62, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "connection.arrowhead");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "td")(65, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "None");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, " , 8 x 4 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Arrow shape, width and height at the target connector.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "tr")(71, "td")(72, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "options.nodeDragThreshold");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "td")(75, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Pointer travel in pixels before a node drag begins.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "tr")(80, "td")(81, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "options.nodesDraggable");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "td")(84, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "true");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Allows users to move nodes.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "tr")(89, "td")(90, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "options.nodesDeletable");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "td")(93, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "true");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "Allows selected nodes to be deleted from the UI.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "tr")(98, "td")(99, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "options.connectionsCreatable");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "td")(102, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "true");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Allows regular outputs to start draggable connections.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "tr")(107, "td")(108, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "options.connectionsDeletable");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "td")(111, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "true");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "Allows selected connections to be deleted from the UI.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "tr")(116, "td")(117, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "positionAnimation.duration");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "td")(120, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "Animation duration for externally changed node coordinates.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "tr")(125, "td")(126, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "positionAnimation.easing");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "td")(129, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "ease-in-out");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, " Uses ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "ease-in-out");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, " or ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "linear");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, " interpolation. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "section")(140, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Node Wrapper Styling");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, " Override node CSS variables on ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, "ng-draw-flow");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, " . Set ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "className");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, " on a node to target one node or a domain-specific group without coupling wrapper styles to the custom component markup. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](150, "tui-doc-code", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "section")(152, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "Position Animation");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, " Position animation is opt-in and applies whenever a new model changes node coordinates, including layouts and application-side alignment. A duration of ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, " preserves immediate updates. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](159, "tui-doc-code", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "section")(161, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162, "Component Methods");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, " Call these methods through a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, "viewChild(NgDrawFlowComponent)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, " . The same graph and camera commands, except ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "clearSelection()");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, " , are available through ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, "NgDrawFlowStoreService");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "div", 4)(175, "table", 5)(176, "thead")(177, "tr")(178, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, "Method");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, "Behavior");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "tbody")(183, "tr")(184, "td")(185, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](186, "zoomIn()");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187, " / ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, "zoomOut()");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](191, " Changes zoom by the configured ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](193, "zoomStep");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](194, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "tr")(196, "td")(197, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](198, "resetPosition()");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, "Restores zoom and reframes content with current left/top placement options.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "tr")(202, "td")(203, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](204, "setPosition({x?, y?, zoom?})");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, "Partially updates camera coordinates or zoom; omitted fields keep their values.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "tr")(208, "td")(209, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](210, "setScale(scale)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](212, " Sets an absolute zoom factor and clamps it to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](214, "minZoom");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](215, " / ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](217, "maxZoom");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](218, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](219, "tr")(220, "td")(221, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](222, "setDataModel(model)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](224, "Replaces the model and propagates it to the bound form control.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "tr")(226, "td")(227, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](228, "removeNode(node | id)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](230, "Removes a node and every connection that references it.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "tr")(232, "td")(233, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](234, "removeConnection(connection)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](236, "Removes the edge with matching source and target endpoints.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](237, "tr")(238, "td")(239, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](240, "clearSelection()");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](241, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](242, "Clears the selected node or connection without changing the graph.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "section", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](244, " Camera commands accept scale factors where ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](246, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](247, " is 100%. Scale outputs and store snapshots expose percentages where ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](248, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](249, "100");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](250, " is actual size. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](251, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](252, " Component outputs, store signals and RxJS streams are covered in the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](253, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](254, " state and events guide ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](255, " . Camera options are listed in the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](257, " pan and zoom guide ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](258, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("code", ctx.data.configurations);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](123);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("code", ctx.data.nodeStyles);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("code", ctx.data.positionAnimation);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterLink, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__.TuiDocCode, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__.TuiDocPage, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TuiLink, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__.TuiNotificationDirective],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_configuration-and-public-api_configuration-and-public-a-bfcf86.js.map