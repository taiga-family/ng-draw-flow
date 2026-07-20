"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_connections_connections_component_ts"],{

/***/ 99873
/*!********************************************************!*\
  !*** ./bezier-example/bezier-example.component.ts?raw ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BezierExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _app_modules_nodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app/modules/nodes */ 85989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
var _BezierExampleComponent;





class BezierExampleComponent {
  constructor() {
    this.data = {
      nodes: [{
        id: 'node-1',
        data: {
          type: 'outputNode',
          text: 'This base node'
        },
        position: {
          x: 0,
          y: 0
        }
      }, {
        id: 'node-2',
        data: {
          type: 'inputNode',
          text: 'This child node 1'
        },
        position: {
          x: 20,
          y: 150
        }
      }],
      connections: [{
        source: {
          nodeId: 'node-1',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Output,
          connectorId: 'node-1-output-1'
        },
        target: {
          nodeId: 'node-2',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Input,
          connectorId: 'node-2-input-3'
        }
      }, {
        source: {
          nodeId: 'node-1',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Output,
          connectorId: 'node-1-output-2'
        },
        target: {
          nodeId: 'node-2',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Input,
          connectorId: 'node-2-input-1'
        }
      }, {
        source: {
          nodeId: 'node-1',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Output,
          connectorId: 'node-1-output-3'
        },
        target: {
          nodeId: 'node-2',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Input,
          connectorId: 'node-2-input-4'
        }
      }, {
        source: {
          nodeId: 'node-1',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Output,
          connectorId: 'node-1-output-4'
        },
        target: {
          nodeId: 'node-2',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Input,
          connectorId: 'node-2-input-2'
        }
      }]
    };
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(this.data);
  }
}
_BezierExampleComponent = BezierExampleComponent;
_BezierExampleComponent.ɵfac = function BezierExampleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BezierExampleComponent)();
};
_BezierExampleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _BezierExampleComponent,
  selectors: [["bezier-example"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.dfPanZoomOptionsProvider)({
    topPosition: 50,
    leftPosition: null
  }), (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.provideNgDrawFlowConfigs)({
    connection: {
      type: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionType.Bezier,
      arrowhead: {
        type: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfArrowhead.ArrowClosed
      },
      curvature: 0.25
    },
    nodes: {
      inputNode: _app_modules_nodes__WEBPACK_IMPORTED_MODULE_2__.InputNodeComponent,
      outputNode: _app_modules_nodes__WEBPACK_IMPORTED_MODULE_2__.OutputNodeComponent
    }
  })])],
  decls: 1,
  vars: 1,
  consts: [[3, "formControl"]],
  template: function BezierExampleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ng-draw-flow", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.form);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective],
  encapsulation: 2,
  changeDetection: 0
});

/***/ },

/***/ 69445
/*!************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/connections/connections.component.ts ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConnectionsComponent)
/* harmony export */ });
/* harmony import */ var _bezier_example_bezier_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bezier-example/bezier-example.component */ 99873);
/* harmony import */ var _smooth_step_example_smooth_step_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smooth-step-example/smooth-step-example.component */ 86723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 94841);
var _ConnectionsComponent;




class ConnectionsComponent {
  constructor() {
    this.examples = {
      bezier: {
        TypeScript: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_connections_bezier-example_bezier-example_component_ts_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./bezier-example/bezier-example.component.ts?raw */ 68392, 17)),
        Template: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_connections_bezier-example_bezier-example_component_html_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./bezier-example/bezier-example.component.html?raw */ 67040, 17))
      },
      configuration: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_connections_examples_connection-options_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/connection-options.md?raw */ 84403, 17)),
      smoothStep: {
        TypeScript: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_connections_smooth-step-example_smooth-step-example_com-a9a3ca").then(__webpack_require__.t.bind(__webpack_require__, /*! ./smooth-step-example/smooth-step-example.component.ts?raw */ 73686, 17)),
        Template: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_connections_smooth-step-example_smooth-step-example_com-c589c5").then(__webpack_require__.t.bind(__webpack_require__, /*! ./smooth-step-example/smooth-step-example.component.html?raw */ 5770, 17))
      },
      theming: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_connections_examples_connection-theming_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/connection-theming.md?raw */ 53635, 17))
    };
  }
}
_ConnectionsComponent = ConnectionsComponent;
_ConnectionsComponent.ɵfac = function ConnectionsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConnectionsComponent)();
};
_ConnectionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _ConnectionsComponent,
  selectors: [["connections"]],
  decls: 131,
  vars: 4,
  consts: [["header", "Connection Lines"], [1, "docs-lead"], [1, "docs-summary"], ["filename", "graph-editor.component.ts", 3, "code"], [1, "docs-table-scroll"], [1, "docs-table"], [2, "padding", "0", 3, "content"], [1, "editor"], ["filename", "styles.less", 3, "code"]],
  template: function ConnectionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Connections are SVG paths between measured connector elements. Choose a flowing Bezier curve or an orthogonal SmoothStep path, then configure arrowheads, labels and CSS variables independently from the graph data. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div")(5, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Bezier");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Cubic curves driven by source and target directions.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div")(10, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "SmoothStep");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Horizontal and vertical segments with rounded corners.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div")(15, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Arrowheads");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "None, open arrow or closed arrow at the target.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "section")(20, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Configure Connection Rendering");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Connection rendering is shared by existing model edges and interactive draft creation. The connector's ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "position");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " input supplies the path direction. ");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "type");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "td")(44, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Bezier");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Selects Bezier or SmoothStep calculation.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "tr")(49, "td")(50, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "curvature");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "td")(53, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "0.25");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Bezier bend coefficient or SmoothStep radius in pixels.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "tr")(58, "td")(59, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "arrowhead.type");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "td")(62, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "None");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " Uses ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Arrow");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "ArrowClosed");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, " or no marker. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "tr")(73, "td")(74, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "arrowhead.width");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, " / ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "height");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "td")(80, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "8");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, " / ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Target marker dimensions in pixels.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "section")(88, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Bezier");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, " Bezier edges are cubic curves. Their dimensionless curvature coefficient scales with connector distance, so the same value remains useful across short and long edges. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "tui-doc-example", 6)(93, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "bezier-example");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "section")(96, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "SmoothStep");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, " SmoothStep edges use horizontal and vertical segments joined by rounded bends. Their curvature value is the corner radius in pixels, making them suitable for tree and process layouts. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "tui-doc-example", 6)(101, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "smooth-step-example");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "section")(104, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Selection and Deletion");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, " Selecting a node distinguishes both directions: incoming edges use the input highlight palette and outgoing edges use the output palette. Selecting an edge applies the active connection color. Delete or Backspace removes the selected edge when ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "connectionsDeletable");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, " is enabled. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, " Programmatic deletion is available through ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "removeConnection()");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, " on ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "NgDrawFlowComponent");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "NgDrawFlowStoreService");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, " . The source and target endpoints identify the matching connection. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "section")(123, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "Connection Theming");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, " Style the visible path, larger selectable hit area, active edge, directional node highlights and labels with CSS variables on ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "ng-draw-flow");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, " . The hit area width does not change the visible stroke. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](130, "tui-doc-code", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("code", ctx.examples.configuration);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](65);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("content", ctx.examples.bezier);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("content", ctx.examples.smoothStep);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("code", ctx.examples.theming);
    }
  },
  dependencies: [_bezier_example_bezier_example_component__WEBPACK_IMPORTED_MODULE_0__["default"], _smooth_step_example_smooth_step_example_component__WEBPACK_IMPORTED_MODULE_1__["default"], _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__.TuiDocCode, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__.TuiDocExample, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__.TuiDocPage],
  styles: [".editor[_ngcontent-%COMP%] {\n  position: relative;\n  block-size: 20rem;\n  inline-size: 100%;\n  margin: 0 auto;\n  background: #fff;\n}\ntui-doc-code[_ngcontent-%COMP%], \ntui-doc-example[_ngcontent-%COMP%] {\n  display: block;\n  margin-block: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3Rpb25zLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFQTs7RUFFSSxjQUFBO0VBQ0Esa0JBQUE7QUFBSiIsImZpbGUiOiJjb25uZWN0aW9ucy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3Ige1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBibG9jay1zaXplOiAyMHJlbTtcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG50dWktZG9jLWNvZGUsXG50dWktZG9jLWV4YW1wbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ibG9jazogMXJlbTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vY29ubmVjdGlvbnMvY29ubmVjdGlvbnMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVBOztFQUVJLGNBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVBLDRvQkFBNG9CIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRvciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJsb2NrLXNpemU6IDIwcmVtO1xuICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbnR1aS1kb2MtY29kZSxcbnR1aS1kb2MtZXhhbXBsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJsb2NrOiAxcmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ },

/***/ 86723
/*!******************************************************************!*\
  !*** ./smooth-step-example/smooth-step-example.component.ts?raw ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SmoothStepExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _app_modules_nodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app/modules/nodes */ 85989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
var _SmoothStepExampleComponent;





class SmoothStepExampleComponent {
  constructor() {
    this.data = {
      nodes: [{
        id: 'node-1',
        data: {
          type: 'outputNode',
          text: 'This base node'
        },
        position: {
          x: 0,
          y: 0
        }
      }, {
        id: 'node-2',
        data: {
          type: 'inputNode',
          text: 'This child node 1'
        },
        position: {
          x: 20,
          y: 150
        }
      }],
      connections: [{
        source: {
          nodeId: 'node-1',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Output,
          connectorId: 'node-1-output-1'
        },
        target: {
          nodeId: 'node-2',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Input,
          connectorId: 'node-2-input-3'
        }
      }, {
        source: {
          nodeId: 'node-1',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Output,
          connectorId: 'node-1-output-2'
        },
        target: {
          nodeId: 'node-2',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Input,
          connectorId: 'node-2-input-1'
        }
      }, {
        source: {
          nodeId: 'node-1',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Output,
          connectorId: 'node-1-output-3'
        },
        target: {
          nodeId: 'node-2',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Input,
          connectorId: 'node-2-input-4'
        }
      }, {
        source: {
          nodeId: 'node-1',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Output,
          connectorId: 'node-1-output-4'
        },
        target: {
          nodeId: 'node-2',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Input,
          connectorId: 'node-2-input-2'
        }
      }]
    };
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(this.data);
  }
}
_SmoothStepExampleComponent = SmoothStepExampleComponent;
_SmoothStepExampleComponent.ɵfac = function SmoothStepExampleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SmoothStepExampleComponent)();
};
_SmoothStepExampleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _SmoothStepExampleComponent,
  selectors: [["smooth-step-example"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.dfPanZoomOptionsProvider)({
    topPosition: 50,
    leftPosition: null
  }), (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.provideNgDrawFlowConfigs)({
    connection: {
      type: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionType.SmoothStep,
      arrowhead: {
        type: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfArrowhead.ArrowClosed
      },
      curvature: 10
    },
    nodes: {
      inputNode: _app_modules_nodes__WEBPACK_IMPORTED_MODULE_2__.InputNodeComponent,
      outputNode: _app_modules_nodes__WEBPACK_IMPORTED_MODULE_2__.OutputNodeComponent
    }
  })])],
  decls: 1,
  vars: 1,
  consts: [[3, "formControl"]],
  template: function SmoothStepExampleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ng-draw-flow", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.form);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_connections_connections_component_ts.js.map