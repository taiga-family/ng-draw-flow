"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_connectors_connectors_component_ts"],{

/***/ 24823
/*!**********************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/connectors/connectors.component.ts ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConnectorsComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 76380);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core */ 71534);
/* harmony import */ var _example_connector_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example/connector-example.component */ 61160);
/* harmony import */ var _example_dynamic_connector_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example/dynamic-connector-example.component */ 30396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 94841);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ 90795);
var _ConnectorsComponent;







class ConnectorsComponent {
  constructor() {
    this.examples = {
      actionOutput: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_connectors_examples_action-output_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/action-output.md?raw */ 29079, 17)),
      actionHandler: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_connectors_examples_action-handler_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/action-handler.md?raw */ 9014, 17)),
      customContent: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_connectors_examples_custom-content_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/custom-content.md?raw */ 55102, 17)),
      regular: {
        TypeScript: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_connectors_example_connector-example_component_ts-1_css-7ee35a").then(__webpack_require__.t.bind(__webpack_require__, /*! ./example/connector-example.component.ts?raw */ 38421, 17)),
        'Node TypeScript': __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_connectors_example_connector-example-node_component_ts_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./example/connector-example-node.component.ts?raw */ 60158, 17)),
        'Node Template': __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_connectors_example_connector-example-node_component_html_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./example/connector-example-node.component.html?raw */ 50018, 17)),
        'Node Styles': __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_connectors_example_connector-example-node_component_les-37e6ea").then(__webpack_require__.t.bind(__webpack_require__, /*! ./example/connector-example-node.component.less?raw */ 1334, 17))
      },
      dynamic: {
        TypeScript: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_connectors_example_dynamic-connector-example_component_-46350e").then(__webpack_require__.t.bind(__webpack_require__, /*! ./example/dynamic-connector-example.component.ts?raw */ 83529, 17)),
        'Action Service': __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_connectors_example_dynamic-connector-example-actions_se-55ca88").then(__webpack_require__.t.bind(__webpack_require__, /*! ./example/dynamic-connector-example-actions.service.ts?raw */ 50127, 17)),
        'Node TypeScript': __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_connectors_example_dynamic-connector-example-node_compo-3de5b3").then(__webpack_require__.t.bind(__webpack_require__, /*! ./example/dynamic-connector-example-node.component.ts?raw */ 89618, 17)),
        'Node Template': __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_connectors_example_dynamic-connector-example-node_compo-4ddde6").then(__webpack_require__.t.bind(__webpack_require__, /*! ./example/dynamic-connector-example-node.component.html?raw */ 47110, 17)),
        'Node Styles': __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_connectors_example_dynamic-connector-example-node_compo-db6398").then(__webpack_require__.t.bind(__webpack_require__, /*! ./example/dynamic-connector-example-node.component.less?raw */ 31698, 17))
      }
    };
  }
}
_ConnectorsComponent = ConnectorsComponent;
_ConnectorsComponent.ɵfac = function ConnectorsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConnectorsComponent)();
};
_ConnectorsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _ConnectorsComponent,
  selectors: [["app-connectors"]],
  decls: 145,
  vars: 5,
  consts: [["header", "Connectors"], [1, "docs-lead"], [1, "docs-summary"], ["appearance", "warning", "size", "m", "tuiNotification", ""], ["filename", "task-node.component.html", 3, "code"], [2, "padding", "0", 3, "content"], ["filename", "tree-node.component.html", 3, "code"], ["filename", "dynamic-tree.component.ts", 3, "code"], ["routerLink", "/documentation/connections", "tuiLink", ""], ["routerLink", "/documentation/layouts", "tuiLink", ""]],
  template: function ConnectorsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Connectors are real elements rendered by custom nodes. They identify edge endpoints, provide path direction and can carry custom content, constraints and application data. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "div")(5, "strong")(6, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "df-input");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Accepts regular draggable connections.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div")(11, "strong")(12, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "df-output");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Starts a regular connection by default.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div")(17, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Action output");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Emits a click request without creating a draft edge.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "section")(22, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Connector Data");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Both connector types require ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "[connectorData]");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " with a node id, connector id and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "single");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " constraint. When ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "single");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " is true, a connected input rejects another edge and a connected output cannot start another edge or action. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "section", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Connector ids must be unique across the complete graph, not only inside one node. Use a convention such as ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "{nodeId}-input-1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "{nodeId}-output-1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "section")(44, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Placement and Path Direction");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, " Place connectors with the custom node's CSS. The ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "position");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, " input accepts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Top");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Right");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Bottom");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, " or ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "Left");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, " and tells Bezier or SmoothStep calculation which direction the path should leave or approach. It does not move the connector element. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "section")(64, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Custom Content");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, " The ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "[content]");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, " input accepts any Polymorpheus content: text, a component or an ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, " . A template receives the complete ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "DfDataConnectorConfig");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, " as its implicit context, including optional application ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "data");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](80, "tui-doc-code", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "section")(82, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Regular Graph Connectors");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "p")(85, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "DfOutputMode.Connection");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, " is the default output mode. A pointer drag starts a draft edge and dropping it on an input appends a connection to the bound model. Regular outputs do not emit application actions. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "tui-doc-example", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](89, "connector-example");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "section")(91, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "Dynamic Layout Connectors");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, " Set ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "DfOutputMode.Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, " when a click should request an application-owned graph mutation. The output remains visible when regular connection creation is disabled, never starts a draft edge and emits its connector config through ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, "(activated)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](101, "tui-doc-code", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, " The connector does not add a node itself. The handler creates both the child and its edge, then passes the complete next model to the layouts service. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](104, "tui-doc-code", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106, " Multiple action outputs can carry different ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108, "data");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, " or constraints. In strict-tree layouts, assign connected outputs a unique zero-based ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "layoutOrder");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112, " in visual order: top to bottom for horizontal trees and left to right for vertical trees. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114, "Working Dynamic Tree");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "tui-doc-example", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](116, "dynamic-connector-example");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "section")(118, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, "Connector Theming");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, " Override ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](123, "--df-connector-input-color");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](124, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, "--df-connector-output-color");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](127, " and their ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, "-hover");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130, " variants on ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](132, "ng-draw-flow");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133, " . The generic ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](135, "--df-connector-color");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](136, " remains a fallback for both types. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](138, " Continue with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](140, " connection rendering ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141, " or the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](143, " dynamic layouts guide ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](144, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](80);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("code", ctx.examples.customContent);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("content", ctx.examples.regular);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("code", ctx.examples.actionOutput);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("code", ctx.examples.actionHandler);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("content", ctx.examples.dynamic);
    }
  },
  dependencies: [_example_connector_example_component__WEBPACK_IMPORTED_MODULE_2__["default"], _example_dynamic_connector_example_component__WEBPACK_IMPORTED_MODULE_3__["default"], _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterLink, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_5__.TuiDocCode, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_5__.TuiDocExample, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_5__.TuiDocPage, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TuiLink, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__.TuiNotificationDirective],
  styles: ["tui-doc-code[_ngcontent-%COMP%], \ntui-doc-example[_ngcontent-%COMP%], \n[tuiNotification][_ngcontent-%COMP%] {\n  display: block;\n  margin-block: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3RvcnMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdJLGNBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6ImNvbm5lY3RvcnMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0dWktZG9jLWNvZGUsXG50dWktZG9jLWV4YW1wbGUsXG5bdHVpTm90aWZpY2F0aW9uXSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJsb2NrOiAxcmVtO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vY29ubmVjdG9ycy9jb25uZWN0b3JzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHSSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQSw0WkFBNFoiLCJzb3VyY2VzQ29udGVudCI6WyJ0dWktZG9jLWNvZGUsXG50dWktZG9jLWV4YW1wbGUsXG5bdHVpTm90aWZpY2F0aW9uXSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJsb2NrOiAxcmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ },

/***/ 78359
/*!*********************************************************!*\
  !*** ./example/connector-example-node.component.ts?raw ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectorExampleNodeComponent: () => (/* binding */ ConnectorExampleNodeComponent)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
var _ConnectorExampleNodeComponent;


const _c0 = (a0, a1) => ({
  nodeId: a0,
  connectorId: a1,
  single: false
});
function ConnectorExampleNodeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "df-input", 0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r0.nodeIdSignal(), ctx_r0.nodeIdSignal() + "-input-1"));
  }
}
function ConnectorExampleNodeComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "df-output", 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r0.nodeIdSignal(), ctx_r0.nodeIdSignal() + "-output-1"));
  }
}
class ConnectorExampleNodeComponent extends _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DrawFlowBaseNode {}
_ConnectorExampleNodeComponent = ConnectorExampleNodeComponent;
_ConnectorExampleNodeComponent.ɵfac = /*@__PURE__*/(() => {
  let ɵConnectorExampleNodeComponent_BaseFactory;
  return function ConnectorExampleNodeComponent_Factory(__ngFactoryType__) {
    return (ɵConnectorExampleNodeComponent_BaseFactory || (ɵConnectorExampleNodeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_ConnectorExampleNodeComponent)))(__ngFactoryType__ || _ConnectorExampleNodeComponent);
  };
})();
_ConnectorExampleNodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _ConnectorExampleNodeComponent,
  selectors: [["connector-example-node"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 6,
  vars: 4,
  consts: [[1, "input", 3, "connectorData"], [1, "output", 3, "connectorData"]],
  template: function ConnectorExampleNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ConnectorExampleNodeComponent_Conditional_0_Template, 1, 4, "df-input", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ConnectorExampleNodeComponent_Conditional_5_Template, 1, 4, "df-output", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](!ctx.startNodeSignal() ? 0 : -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.modelSignal().text);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.startNodeSignal() ? "Drag the orange output" : "Drop the edge here");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](!ctx.endNodeSignal() ? 5 : -1);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfInputComponent, _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfOutputComponent],
  styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: grid;\n  gap: 0.25rem;\n  inline-size: 11rem;\n  min-block-size: 3rem;\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--tui-text-secondary);\n  font-size: 0.75rem;\n}\n.input[_ngcontent-%COMP%], \n.output[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-block-start: 50%;\n  transform: translateY(-50%);\n}\n.input[_ngcontent-%COMP%] {\n  inset-inline-start: -1rem;\n}\n.output[_ngcontent-%COMP%] {\n  inset-inline-end: -1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3Rvci1leGFtcGxlLW5vZGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUNKO0FBTkE7RUFRUSxnQ0FBQTtFQUNBLGtCQUFBO0FBQ1I7QUFHQTs7RUFFSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFESjtBQUlBO0VBQ0kseUJBQUE7QUFGSjtBQUtBO0VBQ0ksdUJBQUE7QUFISiIsImZpbGUiOiJjb25uZWN0b3ItZXhhbXBsZS1ub2RlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMC4yNXJlbTtcbiAgICBpbmxpbmUtc2l6ZTogMTFyZW07XG4gICAgbWluLWJsb2NrLXNpemU6IDNyZW07XG5cbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXR1aS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICB9XG59XG5cbi5pbnB1dCxcbi5vdXRwdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldC1ibG9jay1zdGFydDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmlucHV0IHtcbiAgICBpbnNldC1pbmxpbmUtc3RhcnQ6IC0xcmVtO1xufVxuXG4ub3V0cHV0IHtcbiAgICBpbnNldC1pbmxpbmUtZW5kOiAtMXJlbTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vY29ubmVjdG9ycy9leGFtcGxlL2Nvbm5lY3Rvci1leGFtcGxlLW5vZGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUNKO0FBTkE7RUFRUSxnQ0FBQTtFQUNBLGtCQUFBO0FBQ1I7QUFHQTs7RUFFSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFESjtBQUlBO0VBQ0kseUJBQUE7QUFGSjtBQUtBO0VBQ0ksdUJBQUE7QUFISjs7QUFFQSxvakNBQW9qQyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDAuMjVyZW07XG4gICAgaW5saW5lLXNpemU6IDExcmVtO1xuICAgIG1pbi1ibG9jay1zaXplOiAzcmVtO1xuXG4gICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgfVxufVxuXG4uaW5wdXQsXG4ub3V0cHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQtYmxvY2stc3RhcnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5pbnB1dCB7XG4gICAgaW5zZXQtaW5saW5lLXN0YXJ0OiAtMXJlbTtcbn1cblxuLm91dHB1dCB7XG4gICAgaW5zZXQtaW5saW5lLWVuZDogLTFyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ },

/***/ 61160
/*!*************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/connectors/example/connector-example.component.ts ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConnectorExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _connector_example_node_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connector-example-node.component */ 78359);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
var _ConnectorExampleComponent;





class ConnectorExampleComponent {
  constructor() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl({
      nodes: [{
        id: 'source',
        data: {
          type: 'connectorExample',
          text: 'Source node'
        },
        position: {
          x: 0,
          y: 0
        },
        startNode: true
      }, {
        id: 'target',
        data: {
          type: 'connectorExample',
          text: 'Target node'
        },
        position: {
          x: 300,
          y: 80
        },
        endNode: true
      }],
      connections: []
    }, {
      nonNullable: true
    });
  }
}
_ConnectorExampleComponent = ConnectorExampleComponent;
_ConnectorExampleComponent.ɵfac = function ConnectorExampleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConnectorExampleComponent)();
};
_ConnectorExampleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _ConnectorExampleComponent,
  selectors: [["connector-example"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.dfPanZoomOptionsProvider)({
    leftPosition: 60
  }), (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.provideNgDrawFlowConfigs)({
    connection: {
      type: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionType.SmoothStep,
      arrowhead: {
        type: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfArrowhead.ArrowClosed
      },
      curvature: 12
    },
    nodes: {
      connectorExample: _connector_example_node_component__WEBPACK_IMPORTED_MODULE_2__.ConnectorExampleNodeComponent
    }
  })])],
  decls: 2,
  vars: 1,
  consts: [[1, "editor"], [3, "formControl"]],
  template: function ConnectorExampleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ng-draw-flow", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.form);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective],
  styles: ["[_nghost-%COMP%] {\n            display: block;\n        }\n\n        .editor[_ngcontent-%COMP%] {\n            block-size: 22rem;\n            background: #fff;\n        }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3Rvci1leGFtcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQ1E7WUFDSSxjQUFjO1FBQ2xCOztRQUVBO1lBQ0ksaUJBQWlCO1lBQ2pCLGdCQUFnQjtRQUNwQiIsImZpbGUiOiJjb25uZWN0b3ItZXhhbXBsZS5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuZWRpdG9yIHtcbiAgICAgICAgICAgIGJsb2NrLXNpemU6IDIycmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgfVxuICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vY29ubmVjdG9ycy9leGFtcGxlL2Nvbm5lY3Rvci1leGFtcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQ1E7WUFDSSxjQUFjO1FBQ2xCOztRQUVBO1lBQ0ksaUJBQWlCO1lBQ2pCLGdCQUFnQjtRQUNwQjs7QUFFUix3aEJBQXdoQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5lZGl0b3Ige1xuICAgICAgICAgICAgYmxvY2stc2l6ZTogMjJyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ },

/***/ 98178
/*!******************************************************************!*\
  !*** ./example/dynamic-connector-example-actions.service.ts?raw ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicConnectorExampleActionsService: () => (/* binding */ DynamicConnectorExampleActionsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
var _DynamicConnectorExampleActionsService;

class DynamicConnectorExampleActionsService {
  constructor() {
    this.addChildHandler = null;
  }
  configure(handler) {
    this.addChildHandler = handler;
  }
  addChild(connector) {
    var _this$addChildHandler;
    (_this$addChildHandler = this.addChildHandler) === null || _this$addChildHandler === void 0 || _this$addChildHandler.call(this, connector);
  }
}
_DynamicConnectorExampleActionsService = DynamicConnectorExampleActionsService;
_DynamicConnectorExampleActionsService.ɵfac = function DynamicConnectorExampleActionsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DynamicConnectorExampleActionsService)();
};
_DynamicConnectorExampleActionsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _DynamicConnectorExampleActionsService,
  factory: _DynamicConnectorExampleActionsService.ɵfac
});

/***/ },

/***/ 35691
/*!*****************************************************************!*\
  !*** ./example/dynamic-connector-example-node.component.ts?raw ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicConnectorExampleNodeComponent: () => (/* binding */ DynamicConnectorExampleNodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ 28613);
/* harmony import */ var _dynamic_connector_example_actions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic-connector-example-actions.service */ 98178);
var _DynamicConnectorExampleNodeComponent;





const _c0 = () => ({
  childType: "dynamicConnectorExample"
});
const _c1 = (a0, a1, a2) => ({
  nodeId: a0,
  connectorId: a1,
  single: false,
  data: a2
});
const _c2 = (a0, a1) => ({
  nodeId: a0,
  connectorId: a1,
  single: true
});
function DynamicConnectorExampleNodeComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-icon", 3);
  }
}
function DynamicConnectorExampleNodeComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "df-input", 1);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c2, ctx_r1.nodeIdSignal(), ctx_r1.nodeIdSignal() + "-input-1"));
  }
}
class DynamicConnectorExampleNodeComponent extends _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DrawFlowBaseNode {
  constructor() {
    super(...arguments);
    this.actions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_dynamic_connector_example_actions_service__WEBPACK_IMPORTED_MODULE_3__.DynamicConnectorExampleActionsService);
    this.outputMode = _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfOutputMode;
  }
  addChild(connector) {
    this.actions.addChild(connector);
  }
}
_DynamicConnectorExampleNodeComponent = DynamicConnectorExampleNodeComponent;
_DynamicConnectorExampleNodeComponent.ɵfac = /*@__PURE__*/(() => {
  let ɵDynamicConnectorExampleNodeComponent_BaseFactory;
  return function DynamicConnectorExampleNodeComponent_Factory(__ngFactoryType__) {
    return (ɵDynamicConnectorExampleNodeComponent_BaseFactory || (ɵDynamicConnectorExampleNodeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_DynamicConnectorExampleNodeComponent)))(__ngFactoryType__ || _DynamicConnectorExampleNodeComponent);
  };
})();
_DynamicConnectorExampleNodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _DynamicConnectorExampleNodeComponent,
  selectors: [["dynamic-connector-example-node"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 8,
  vars: 11,
  consts: [["addChildIcon", ""], [1, "input", 3, "connectorData"], ["title", "Add child", 1, "action-output", 3, "activated", "connectorData", "content", "layoutOrder", "mode"], ["icon", "@tui.plus"]],
  template: function DynamicConnectorExampleNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DynamicConnectorExampleNodeComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(2, DynamicConnectorExampleNodeComponent_Conditional_2_Template, 1, 4, "df-input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dynamic tree node");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "df-output", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activated", function DynamicConnectorExampleNodeComponent_Template_df_output_activated_7_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.addChild($event));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const addChildIcon_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!ctx.startNodeSignal() ? 2 : -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.modelSignal().title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](7, _c1, ctx.nodeIdSignal(), ctx.nodeIdSignal() + "-output-1", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0)))("content", addChildIcon_r3)("layoutOrder", 0)("mode", ctx.outputMode.Action);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfInputComponent, _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfOutputComponent, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiIcon],
  styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: grid;\n  gap: 0.25rem;\n  inline-size: 9rem;\n  min-block-size: 2.5rem;\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--tui-text-secondary);\n  font-size: 0.75rem;\n}\n.input[_ngcontent-%COMP%], \n.action-output[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-block-start: 50%;\n  transform: translateY(-50%);\n}\n.input[_ngcontent-%COMP%] {\n  inset-inline-start: -1rem;\n  opacity: 0;\n  pointer-events: none;\n}\n.action-output[_ngcontent-%COMP%] {\n  display: grid;\n  inset-inline-end: -1rem;\n  place-items: center;\n  color: var(--tui-text-action);\n  background: var(--tui-background-base);\n  border: 0.0625rem solid var(--tui-border-normal);\n}\n.action-output[_ngcontent-%COMP%]::after {\n  opacity: 0;\n}\n.action-output[_ngcontent-%COMP%]   tui-icon[_ngcontent-%COMP%] {\n  inline-size: 0.875rem;\n  block-size: 0.875rem;\n  font-size: 0.875rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMtY29ubmVjdG9yLWV4YW1wbGUtbm9kZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFOQTtFQVFRLGdDQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUdBOztFQUVJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQURKO0FBSUE7RUFDSSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQUZKO0FBS0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtBQUhKO0FBS0k7RUFDSSxVQUFBO0FBSFI7QUFOQTtFQWFRLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUpSIiwiZmlsZSI6ImR5bmFtaWMtY29ubmVjdG9yLWV4YW1wbGUtbm9kZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDAuMjVyZW07XG4gICAgaW5saW5lLXNpemU6IDlyZW07XG4gICAgbWluLWJsb2NrLXNpemU6IDIuNXJlbTtcblxuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIH1cbn1cblxuLmlucHV0LFxuLmFjdGlvbi1vdXRwdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldC1ibG9jay1zdGFydDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmlucHV0IHtcbiAgICBpbnNldC1pbmxpbmUtc3RhcnQ6IC0xcmVtO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5hY3Rpb24tb3V0cHV0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGluc2V0LWlubGluZS1lbmQ6IC0xcmVtO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLXR1aS10ZXh0LWFjdGlvbik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHVpLWJhY2tncm91bmQtYmFzZSk7XG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tdHVpLWJvcmRlci1ub3JtYWwpO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgIHR1aS1pY29uIHtcbiAgICAgICAgaW5saW5lLXNpemU6IDAuODc1cmVtO1xuICAgICAgICBibG9jay1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vY29ubmVjdG9ycy9leGFtcGxlL2R5bmFtaWMtY29ubmVjdG9yLWV4YW1wbGUtbm9kZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFOQTtFQVFRLGdDQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUdBOztFQUVJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQURKO0FBSUE7RUFDSSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQUZKO0FBS0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtBQUhKO0FBS0k7RUFDSSxVQUFBO0FBSFI7QUFOQTtFQWFRLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUpSOztBQUVBLDR4REFBNHhEIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMC4yNXJlbTtcbiAgICBpbmxpbmUtc2l6ZTogOXJlbTtcbiAgICBtaW4tYmxvY2stc2l6ZTogMi41cmVtO1xuXG4gICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgfVxufVxuXG4uaW5wdXQsXG4uYWN0aW9uLW91dHB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0LWJsb2NrLXN0YXJ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4uaW5wdXQge1xuICAgIGluc2V0LWlubGluZS1zdGFydDogLTFyZW07XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmFjdGlvbi1vdXRwdXQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgaW5zZXQtaW5saW5lLWVuZDogLTFyZW07XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtYWN0aW9uKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktYmFja2dyb3VuZC1iYXNlKTtcbiAgICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS10dWktYm9yZGVyLW5vcm1hbCk7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgdHVpLWljb24ge1xuICAgICAgICBpbmxpbmUtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGJsb2NrLXNpemU6IDAuODc1cmVtO1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ },

/***/ 30396
/*!*********************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/connectors/example/dynamic-connector-example.component.ts ***!
  \*********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DynamicConnectorExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _ng_draw_flow_layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-draw-flow/layouts */ 48503);
/* harmony import */ var _dynamic_connector_example_actions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamic-connector-example-actions.service */ 98178);
/* harmony import */ var _dynamic_connector_example_node_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic-connector-example-node.component */ 35691);
var _DynamicConnectorExampleComponent;








class DynamicConnectorExampleComponent {
  constructor() {
    this.actions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_dynamic_connector_example_actions_service__WEBPACK_IMPORTED_MODULE_4__.DynamicConnectorExampleActionsService);
    this.autoLayout = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ng_draw_flow_layouts__WEBPACK_IMPORTED_MODULE_3__.DfAutoLayoutService);
    this.counter = 2;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl({
      nodes: [this.createNode('root', 'Root', 0, true), this.createNode('node-1', 'Node 1', 260)],
      connections: [this.createConnection('root', 'node-1')]
    }, {
      nonNullable: true
    });
    this.actions.configure(connector => this.addChild(connector));
  }
  ngAfterViewInit() {
    this.autoLayout.apply();
  }
  addChild({
    nodeId,
    connectorId
  }) {
    const model = this.form.getRawValue();
    const parent = model.nodes.find(({
      id
    }) => id === nodeId);
    if (!parent) {
      return;
    }
    const id = `node-${this.counter++}`;
    const position = 'position' in parent ? parent.position : {
      x: 0,
      y: 0
    };
    const child = this.createNode(id, `Node ${this.counter - 1}`, position.x);
    this.autoLayout.apply({
      anchorNodeId: nodeId,
      model: {
        nodes: [...model.nodes, child],
        connections: [...model.connections, this.createConnection(nodeId, id, connectorId)]
      }
    });
  }
  createNode(id, title, x, startNode = false) {
    return {
      id,
      data: {
        type: 'dynamicConnectorExample',
        title
      },
      position: {
        x,
        y: 0
      },
      startNode
    };
  }
  createConnection(sourceId, targetId, sourceConnectorId = `${sourceId}-output-1`) {
    return {
      source: {
        nodeId: sourceId,
        connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.DfConnectionPoint.Output,
        connectorId: sourceConnectorId
      },
      target: {
        nodeId: targetId,
        connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.DfConnectionPoint.Input,
        connectorId: `${targetId}-input-1`
      }
    };
  }
}
_DynamicConnectorExampleComponent = DynamicConnectorExampleComponent;
_DynamicConnectorExampleComponent.ɵfac = function DynamicConnectorExampleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DynamicConnectorExampleComponent)();
};
_DynamicConnectorExampleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _DynamicConnectorExampleComponent,
  selectors: [["dynamic-connector-example"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_dynamic_connector_example_actions_service__WEBPACK_IMPORTED_MODULE_4__.DynamicConnectorExampleActionsService, (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.dfPanZoomOptionsProvider)({
    leftPosition: 60,
    topPosition: null
  }), (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.provideNgDrawFlowConfigs)({
    connection: {
      type: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.DfConnectionType.SmoothStep,
      arrowhead: {
        type: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.DfArrowhead.ArrowClosed
      },
      curvature: 12
    },
    nodes: {
      dynamicConnectorExample: _dynamic_connector_example_node_component__WEBPACK_IMPORTED_MODULE_5__.DynamicConnectorExampleNodeComponent
    },
    options: {
      nodesDraggable: false,
      connectionsCreatable: false,
      connectionsDeletable: false
    },
    positionAnimation: {
      duration: 240,
      easing: 'ease-in-out'
    }
  }), (0,_ng_draw_flow_layouts__WEBPACK_IMPORTED_MODULE_3__.provideNgDrawFlowLayouts)({
    tree: {
      direction: _ng_draw_flow_layouts__WEBPACK_IMPORTED_MODULE_3__.DfTreeLayoutDirection.LeftToRight,
      nodeSizing: {
        strategy: _ng_draw_flow_layouts__WEBPACK_IMPORTED_MODULE_3__.DfNodeSizingStrategy.Measured,
        fallback: {
          width: 176,
          height: 64
        }
      },
      levelGap: 80,
      siblingGap: 24
    }
  })])],
  decls: 2,
  vars: 1,
  consts: [[1, "editor"], [3, "formControl"]],
  template: function DynamicConnectorExampleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ng-draw-flow", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.form);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective],
  styles: ["[_nghost-%COMP%] {\n            display: block;\n        }\n\n        .editor[_ngcontent-%COMP%] {\n            block-size: 22rem;\n            background: #fff;\n        }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMtY29ubmVjdG9yLWV4YW1wbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFDUTtZQUNJLGNBQWM7UUFDbEI7O1FBRUE7WUFDSSxpQkFBaUI7WUFDakIsZ0JBQWdCO1FBQ3BCIiwiZmlsZSI6ImR5bmFtaWMtY29ubmVjdG9yLWV4YW1wbGUuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVkaXRvciB7XG4gICAgICAgICAgICBibG9jay1zaXplOiAyMnJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIH1cbiAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vY29ubmVjdG9ycy9leGFtcGxlL2R5bmFtaWMtY29ubmVjdG9yLWV4YW1wbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFDUTtZQUNJLGNBQWM7UUFDbEI7O1FBRUE7WUFDSSxpQkFBaUI7WUFDakIsZ0JBQWdCO1FBQ3BCOztBQUVSLDRpQkFBNGlCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVkaXRvciB7XG4gICAgICAgICAgICBibG9jay1zaXplOiAyMnJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_connectors_connectors_component_ts.js.map