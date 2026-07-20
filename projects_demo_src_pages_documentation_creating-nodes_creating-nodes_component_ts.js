"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_creating-nodes_creating-nodes_component_ts"],{

/***/ 63997
/*!******************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/creating-nodes/creating-nodes.component.ts ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreatingNodesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 76380);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ 71534);
/* harmony import */ var _examples_node_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/node.component */ 31694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 94841);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core */ 90795);
var _CreatingNodesComponent;









class CreatingNodesComponent {
  constructor() {
    this.customNodeExample = {
      TypeScript: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_creating-nodes_examples_node_component_ts_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/node.component.ts?raw */ 12355, 17)),
      Styles: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_creating-nodes_examples_node_styles_less_ngResource").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/node.styles.less?raw */ 4594, 17)),
      Template: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_creating-nodes_examples_node_template_html_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/node.template.html?raw */ 3998, 17))
    };
    this.gettingStarted = {
      providing: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_creating-nodes_examples_providing_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/providing.md?raw */ 7248, 17)),
      typedModel: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_creating-nodes_examples_typed-model_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/typed-model.md?raw */ 51597, 17))
    };
    this.nodeData = {
      nodes: [{
        id: 'node-1',
        data: {
          type: 'yourNode',
          text: 'Custom node example'
        },
        position: {
          x: 0,
          y: 0
        }
      }],
      connections: []
    };
    this.nodeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(this.nodeData, {
      nonNullable: true
    });
  }
}
_CreatingNodesComponent = CreatingNodesComponent;
_CreatingNodesComponent.ɵfac = function CreatingNodesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreatingNodesComponent)();
};
_CreatingNodesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _CreatingNodesComponent,
  selectors: [["app-creating-nodes"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.provideNgDrawFlowConfigs)({
    nodes: {
      yourNode: _examples_node_component__WEBPACK_IMPORTED_MODULE_4__.YourNodeComponent
    }
  })])],
  decls: 162,
  vars: 4,
  consts: [["header", "Creating Nodes"], [1, "docs-lead"], [1, "docs-summary"], [1, "docs-table-scroll"], [1, "docs-table"], ["filename", "typed-task-node.component.ts", 3, "code"], ["appearance", "info", "size", "m", "tuiNotification", ""], ["filename", "graph-editor.component.ts", 3, "code"], [2, "padding", "0", 3, "content"], [1, "node-demo"], [3, "formControl"], ["routerLink", "/documentation/connectors", "tuiLink", ""]],
  template: function CreatingNodesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " A node is a standalone Angular component rendered inside the editor wrapper. Extend ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "DrawFlowBaseNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " to receive graph data and to expose any input and output connectors in the component view. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 2)(7, "div")(8, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Graph inputs");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Id, model, role, selection and validation arrive as signals.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div")(13, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Local UI");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Forms, menus and expanded state stay inside the Angular component.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div")(18, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Wrapper styling");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Core owns selection and validation chrome through CSS variables.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "section")(23, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Base Node API");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 3)(26, "table", 4)(27, "thead")(28, "tr")(29, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Signal");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Value");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Use");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "tbody")(36, "tr")(37, "td")(38, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "nodeIdSignal()");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "td")(41, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "string");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Build graph-wide unique connector ids.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "tr")(46, "td")(47, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "modelSignal()");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "td")(50, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Record<string, any> & {type: string}");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, " Render application data from ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "node.data");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "tr")(58, "td")(59, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "startNodeSignal()");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, " / ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "endNodeSignal()");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "td")(65, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "boolean");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Apply application role rules in the template.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "tr")(70, "td")(71, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "selectedSignal()");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "td")(74, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "boolean");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "React to editor selection inside node content.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "tr")(79, "td")(80, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "invalidSignal()");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "td")(83, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "boolean");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "Combine graph validation with local node validity.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "tr")(88, "td")(89, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "inputs()");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, " / ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, "outputs()");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "Connector arrays");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "Observe connectors currently rendered by conditional templates.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, " Read-only compatibility getters such as ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, "nodeId");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, "model");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, " are also available. Prefer signals in templates and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, "computed()");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, " values. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](109, "tui-doc-code", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "section")(111, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "Role Metadata");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, " Core does not automatically forbid incoming connections for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, "startNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, " or outgoing connections for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "endNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](120, " . These values are metadata passed to the custom component. Render or hide the corresponding connectors to enforce that policy in the UI. The editor also uses the first start node as a preferred camera-framing anchor. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122, " The physical connector position comes from your component CSS. The connector ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "position");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](125, " input only describes the direction used to calculate the path. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "section")(127, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](128, "Register the Node Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](130, " Register every component under the same key used by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, "node.data.type");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](133, " . Providers can be application-wide or scoped to one editor. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](134, "tui-doc-code", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "section")(136, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](137, "Complete Custom Node");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](139, " The preview combines a component, template and styles. Wrapper background, border, padding, selection and invalid states remain configurable on ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, "ng-draw-flow");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](142, " instead of being duplicated in every node type. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "tui-doc-example", 8)(144, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](145, "ng-draw-flow", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "section")(147, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](148, "Dynamic Content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](149, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, " Signal queries automatically detect connectors added or removed by Angular control flow. Emit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](152, "connectorsUpdated");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](153, " after a local UI change moves an existing connector without changing the query, so core can remeasure its anchor. Use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](155, "markForCheck()");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](156, " only after imperative state changes Angular cannot observe. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](157, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](158, " Continue with the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](160, " connector guide ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](161, " for multiple handles, Polymorpheus content and action outputs. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](109);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("code", ctx.gettingStarted.typedModel);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("code", ctx.gettingStarted.providing);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("content", ctx.customNodeExample);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.nodeForm);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_6__.TuiDocCode, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_6__.TuiDocExample, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_6__.TuiDocPage, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__.TuiLink, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__.TuiNotificationDirective],
  styles: [".node-demo[_ngcontent-%COMP%] {\n  block-size: 14rem;\n  background: #fff;\n}\ntui-doc-code[_ngcontent-%COMP%], \ntui-doc-example[_ngcontent-%COMP%], \n[tuiNotification][_ngcontent-%COMP%] {\n  display: block;\n  margin-block: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0aW5nLW5vZGVzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUE7OztFQUdJLGNBQUE7RUFDQSxrQkFBQTtBQUFKIiwiZmlsZSI6ImNyZWF0aW5nLW5vZGVzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vZGUtZGVtbyB7XG4gICAgYmxvY2stc2l6ZTogMTRyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxudHVpLWRvYy1jb2RlLFxudHVpLWRvYy1leGFtcGxlLFxuW3R1aU5vdGlmaWNhdGlvbl0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ibG9jazogMXJlbTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vY3JlYXRpbmctbm9kZXMvY3JlYXRpbmctbm9kZXMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFQTs7O0VBR0ksY0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUEsNGlCQUE0aUIiLCJzb3VyY2VzQ29udGVudCI6WyIubm9kZS1kZW1vIHtcbiAgICBibG9jay1zaXplOiAxNHJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG50dWktZG9jLWNvZGUsXG50dWktZG9jLWV4YW1wbGUsXG5bdHVpTm90aWZpY2F0aW9uXSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJsb2NrOiAxcmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ },

/***/ 31694
/*!****************************************!*\
  !*** ./examples/node.component.ts?raw ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YourNodeComponent: () => (/* binding */ YourNodeComponent)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
var _YourNodeComponent;


const _c0 = (a0, a1) => ({
  nodeId: a0,
  connectorId: a1,
  single: false
});
function YourNodeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "df-input", 0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r0.nodeIdSignal(), ctx_r0.nodeIdSignal() + "-input-1"));
  }
}
function YourNodeComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "df-output", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r0.nodeIdSignal(), ctx_r0.nodeIdSignal() + "-output-1"));
  }
}
class YourNodeComponent extends _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DrawFlowBaseNode {}
_YourNodeComponent = YourNodeComponent;
_YourNodeComponent.ɵfac = /*@__PURE__*/(() => {
  let ɵYourNodeComponent_BaseFactory;
  return function YourNodeComponent_Factory(__ngFactoryType__) {
    return (ɵYourNodeComponent_BaseFactory || (ɵYourNodeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_YourNodeComponent)))(__ngFactoryType__ || _YourNodeComponent);
  };
})();
_YourNodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _YourNodeComponent,
  selectors: [["app-your-node"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 3,
  consts: [[1, "input", 3, "connectorData"], [1, "tui-text_body-xs"], [1, "output", 3, "connectorData"]],
  template: function YourNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, YourNodeComponent_Conditional_0_Template, 1, 4, "df-input", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, YourNodeComponent_Conditional_3_Template, 1, 4, "df-output", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](!ctx.startNodeSignal() ? 0 : -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.modelSignal().text);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](!ctx.endNodeSignal() ? 3 : -1);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfInputComponent, _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfOutputComponent],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  inline-size: 10rem;\n}\n.input[_ngcontent-%COMP%], \n.output[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n}\n.input[_ngcontent-%COMP%] {\n  inset-inline-start: -0.5rem;\n  inset-block-start: 0.25rem;\n}\n.output-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.output[_ngcontent-%COMP%] {\n  inset-inline-end: -0.5rem;\n  inset-block-start: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGUuc3R5bGVzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUVBOztFQUVJLGtCQUFBO0VBQ0EsVUFBQTtBQUFKO0FBR0E7RUFDSSwyQkFBQTtFQUNBLDBCQUFBO0FBREo7QUFJQTtFQUNJLGtCQUFBO0FBRko7QUFLQTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7QUFISiIsImZpbGUiOiJub2RlLnN0eWxlcy5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGlubGluZS1zaXplOiAxMHJlbTtcbn1cblxuLmlucHV0LFxuLm91dHB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5pbnB1dCB7XG4gICAgaW5zZXQtaW5saW5lLXN0YXJ0OiAtMC41cmVtO1xuICAgIGluc2V0LWJsb2NrLXN0YXJ0OiAwLjI1cmVtO1xufVxuXG4ub3V0cHV0LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm91dHB1dCB7XG4gICAgaW5zZXQtaW5saW5lLWVuZDogLTAuNXJlbTtcbiAgICBpbnNldC1ibG9jay1zdGFydDogMDtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vY3JlYXRpbmctbm9kZXMvZXhhbXBsZXMvbm9kZS5zdHlsZXMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUE7O0VBRUksa0JBQUE7RUFDQSxVQUFBO0FBQUo7QUFHQTtFQUNJLDJCQUFBO0VBQ0EsMEJBQUE7QUFESjtBQUlBO0VBQ0ksa0JBQUE7QUFGSjtBQUtBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtBQUhKOztBQUVBLGcxQkFBZzFCIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGlubGluZS1zaXplOiAxMHJlbTtcbn1cblxuLmlucHV0LFxuLm91dHB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5pbnB1dCB7XG4gICAgaW5zZXQtaW5saW5lLXN0YXJ0OiAtMC41cmVtO1xuICAgIGluc2V0LWJsb2NrLXN0YXJ0OiAwLjI1cmVtO1xufVxuXG4ub3V0cHV0LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm91dHB1dCB7XG4gICAgaW5zZXQtaW5saW5lLWVuZDogLTAuNXJlbTtcbiAgICBpbnNldC1ibG9jay1zdGFydDogMDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_creating-nodes_creating-nodes_component_ts.js.map