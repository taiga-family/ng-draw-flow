"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_quickstart_quickstart_component_ts"],{

/***/ 74856
/*!**********************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/quickstart/examples/first-example/component.ts ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FirstExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
var _FirstExampleComponent;




class FirstExampleComponent {
  constructor() {
    this.data = {
      nodes: [{
        id: 'node-1',
        data: {
          type: 'simpleNode',
          text: 'This base node'
        },
        position: {
          x: 0,
          y: 0
        },
        startNode: true
      }, {
        id: 'node-2',
        data: {
          type: 'simpleNode',
          text: 'This child node 1'
        },
        position: {
          x: 250,
          y: 50
        }
      }, {
        id: 'node-3',
        data: {
          type: 'simpleNode',
          text: 'This child node 2'
        },
        position: {
          x: 250,
          y: -50
        }
      }, {
        id: 'node-4',
        data: {
          type: 'simpleNode',
          text: 'This child node 3'
        },
        position: {
          x: 500,
          y: 0
        },
        endNode: true
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
          connectorId: 'node-2-input-1'
        }
      }, {
        source: {
          nodeId: 'node-1',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Output,
          connectorId: 'node-1-output-1'
        },
        target: {
          nodeId: 'node-3',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Input,
          connectorId: 'node-3-input-1'
        }
      }, {
        source: {
          nodeId: 'node-2',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Output,
          connectorId: 'node-2-output-1'
        },
        target: {
          nodeId: 'node-4',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Input,
          connectorId: 'node-4-input-1'
        }
      }, {
        source: {
          nodeId: 'node-3',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Output,
          connectorId: 'node-3-output-1'
        },
        target: {
          nodeId: 'node-4',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Input,
          connectorId: 'node-4-input-1'
        }
      }]
    };
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(this.data);
  }
}
_FirstExampleComponent = FirstExampleComponent;
_FirstExampleComponent.ɵfac = function FirstExampleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FirstExampleComponent)();
};
_FirstExampleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _FirstExampleComponent,
  selectors: [["first-example"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.dfPanZoomOptionsProvider)({
    leftPosition: 50
  })])],
  decls: 2,
  vars: 1,
  consts: [[1, "editor"], [3, "formControl"]],
  template: function FirstExampleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ng-draw-flow", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.form);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective],
  styles: [".editor[_ngcontent-%COMP%] {\n  block-size: 25rem;\n  inline-size: 100%;\n  margin: 0 auto;\n  background: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vcXVpY2tzdGFydC9leGFtcGxlcy9maXJzdC1leGFtcGxlL3N0eWxlcy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRvciB7XG4gICAgYmxvY2stc2l6ZTogMjVyZW07XG4gICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ },

/***/ 76849
/*!**********************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/quickstart/quickstart.component.ts ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuickstartComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 76380);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ 11498);
/* harmony import */ var _examples_first_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/first-example/component */ 74856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 94841);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core */ 90795);
var _QuickstartComponent;









class QuickstartComponent {
  constructor() {
    this.gettingStarted = {
      editor: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_quickstart_examples_editor_component_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/editor.component.md?raw */ 45552, 17)),
      installation: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_quickstart_examples_installation_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/installation.md?raw */ 6264, 17))
    };
    this.customNodeExample = {
      TypeScript: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_quickstart_examples_node_component_ts_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/node.component.ts?raw */ 8341, 17)),
      Styles: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_quickstart_examples_node_styles_less_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/node.styles.less?raw */ 57952, 17)),
      Template: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_quickstart_examples_node_template_html_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/node.template.html?raw */ 30724, 17))
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
    this.nodeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(this.nodeData, {
      nonNullable: true
    });
  }
}
_QuickstartComponent = QuickstartComponent;
_QuickstartComponent.ɵfac = function QuickstartComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _QuickstartComponent)();
};
_QuickstartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _QuickstartComponent,
  selectors: [["quickstart-doc-page"]],
  decls: 113,
  vars: 4,
  consts: [["header", "Getting Started"], [1, "docs-lead"], [1, "docs-summary"], [1, "docs-actions"], ["appearance", "secondary", "routerLink", "/examples/overview", "size", "m", "tuiButton", ""], ["appearance", "flat", "routerLink", "/documentation/terms-and-definitions", "size", "m", "tuiButton", ""], [3, "code"], [1, "docs-flow"], [2, "padding", "0", 3, "content"], [1, "node-demo"], [3, "formControl"], ["appearance", "info", "size", "m", "tuiNotification", ""], ["filename", "graph-editor.component.ts", 3, "code"]],
  template: function QuickstartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Build a working Angular graph from one custom node component, one immutable data model and one reactive form control. Core owns the editor surface and interactions; your application owns node content and graph data. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2)(4, "div")(5, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Angular components");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Render any domain UI inside a node.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div")(10, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Reactive Forms");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Read and replace the complete graph as one value.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div")(15, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Application-owned data");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Persist, validate and synchronize plain node and connection objects.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 3)(20, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Explore the feature overview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " Learn the graph model ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "section")(25, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Install Core");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " NgDrawFlow requires Angular 19 or later. Install the core package, then import ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "ReactiveFormsModule");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " in the standalone component that owns the graph. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "tui-doc-code", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "section")(34, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Build the First Graph");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "ol", 7)(37, "li")(38, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Render a node");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, " Extend ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "DrawFlowBaseNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, " and place input and output connectors. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "li")(46, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Register its type");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, " Map ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "data.type");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, " to the Angular component in the core provider. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "li")(54, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Bind the model");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, " Pass a non-nullable ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "FormControl<DfDataModel>");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, " to the editor. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "section")(62, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "1. Custom Node Component");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, " Connector placement belongs to the custom node. The example hides the input for a start node and the output for an end node, and uses signal inputs from the base class. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "tui-doc-example", 8)(67, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "ng-draw-flow", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "section", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, " Connector ids must be unique across the complete graph. Prefix them with the node id, for example ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "task-1-output-1");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "section")(75, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "2. Standalone Editor Component");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, " This complete component registers the node, configures the editor, defines two positioned nodes and connects their rendered connector ids. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](79, "tui-doc-code", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, " User interactions write a new value to the control. For application-side changes, create the next immutable model and call ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "form.setValue(nextModel)");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, " . Disable the control with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "form.disable()");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, " when the graph should remain visible but non-interactive. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "section")(89, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "3. Working Result");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, " The same model can branch, merge and use multiple connectors. Positions are world coordinates for the top-left corner of each node wrapper. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](93, "first-example");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "section")(95, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Where to Go Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 2)(98, "div")(99, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "Custom nodes");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "Typed node data, reactive content and wrapper styling.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div")(104, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, "Connectors");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, "Multiple handles, custom content and connection constraints.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "div")(109, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, "Dynamic layouts");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "Optional strict-tree positioning with measured node sizes.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("code", ctx.gettingStarted.installation);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("content", ctx.customNodeExample);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.nodeForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("code", ctx.gettingStarted.editor);
    }
  },
  dependencies: [_examples_first_example_component__WEBPACK_IMPORTED_MODULE_4__["default"], _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_6__.TuiDocCode, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_6__.TuiDocExample, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_6__.TuiDocPage, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__.TuiButton, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__.TuiNotificationDirective],
  styles: [".node-demo[_ngcontent-%COMP%] {\n  block-size: 6.25rem;\n  inline-size: 100%;\n  margin: 0 auto;\n  background: #fff;\n}\ntui-doc-code[_ngcontent-%COMP%], \ntui-doc-example[_ngcontent-%COMP%], \n[tuiNotification][_ngcontent-%COMP%] {\n  display: block;\n  margin-block: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vcXVpY2tzdGFydC9xdWlja3N0YXJ0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUE7OztFQUdJLGNBQUE7RUFDQSxrQkFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiLm5vZGUtZGVtbyB7XG4gICAgYmxvY2stc2l6ZTogNi4yNXJlbTtcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG50dWktZG9jLWNvZGUsXG50dWktZG9jLWV4YW1wbGUsXG5bdHVpTm90aWZpY2F0aW9uXSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJsb2NrOiAxcmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_quickstart_quickstart_component_ts.js.map