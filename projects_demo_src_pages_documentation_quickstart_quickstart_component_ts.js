"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_quickstart_quickstart_component_ts"],{

/***/ 4856:
/*!**********************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/quickstart/examples/first-example/component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 5577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6623);
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
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Output,
          connectorId: 'node-1-output-1'
        },
        target: {
          nodeId: 'node-2',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Input,
          connectorId: 'node-2-input-1'
        }
      }, {
        source: {
          nodeId: 'node-1',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Output,
          connectorId: 'node-1-output-1'
        },
        target: {
          nodeId: 'node-3',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Input,
          connectorId: 'node-3-input-1'
        }
      }, {
        source: {
          nodeId: 'node-2',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Output,
          connectorId: 'node-2-output-1'
        },
        target: {
          nodeId: 'node-4',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Input,
          connectorId: 'node-4-input-1'
        }
      }, {
        source: {
          nodeId: 'node-3',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Output,
          connectorId: 'node-3-output-1'
        },
        target: {
          nodeId: 'node-4',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Input,
          connectorId: 'node-4-input-1'
        }
      }]
    };
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.data);
  }
}
_FirstExampleComponent = FirstExampleComponent;
_FirstExampleComponent.ɵfac = function FirstExampleComponent_Factory(t) {
  return new (t || _FirstExampleComponent)();
};
_FirstExampleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _FirstExampleComponent,
  selectors: [["first-example"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.dfPanZoomOptionsProvider)({
    leftPosition: 50
  })]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.form);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective],
  styles: [".editor[_ngcontent-%COMP%] {\n  block-size: 25rem;\n  inline-size: 100%;\n  margin: 0 auto;\n  background: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6InN0eWxlcy5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRvciB7XG4gICAgYmxvY2stc2l6ZTogMjVyZW07XG4gICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vcXVpY2tzdGFydC9leGFtcGxlcy9maXJzdC1leGFtcGxlL3N0eWxlcy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBLHdaQUF3WiIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3Ige1xuICAgIGJsb2NrLXNpemU6IDI1cmVtO1xuICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FirstExampleComponent);

/***/ }),

/***/ 6849:
/*!**********************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/quickstart/quickstart.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 5577);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ 1534);
/* harmony import */ var _examples_first_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examples/first-example/component */ 4856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 4841);
var _QuickstartComponent;







class QuickstartComponent {
  constructor() {
    this.gettingStarted = {
      imports: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_quickstart_examples_imports_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/imports.md?raw */ 4698, 17)),
      providing: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_quickstart_examples_providing_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/providing.md?raw */ 8638, 17)),
      data1: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_quickstart_examples_data-1_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/data-1.md?raw */ 3562, 17)),
      template: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_quickstart_examples_template_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/template.md?raw */ 7290, 17)),
      data2: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_quickstart_examples_data-2_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/data-2.md?raw */ 739, 17))
    };
    this.customNodeExample = {
      TypeScript: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_quickstart_examples_node_component_ts_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/node.component.ts?raw */ 8341, 17)),
      Styles: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_quickstart_examples_node_styles_less_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/node.styles.less?raw */ 7952, 17)),
      Template: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_quickstart_examples_node_template_html_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/node.template.html?raw */ 724, 17))
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
    this.nodeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.nodeData);
  }
}
_QuickstartComponent = QuickstartComponent;
_QuickstartComponent.ɵfac = function QuickstartComponent_Factory(t) {
  return new (t || _QuickstartComponent)();
};
_QuickstartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _QuickstartComponent,
  selectors: [["quickstart-doc-page"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 136,
  vars: 7,
  consts: [["header", "Getting started"], ["alt", "ng-draw-flow logo", "src", "assets/icons/logo.svg", 1, "logo"], ["href", "https://codesandbox.io/p/devbox/ng-drae-flow-demo-y9qd4s?file=%2Fsrc%2Fapp%2Fapp.component.ts", "target", "_blank", "tuiLink", ""], [1, "tui-list", "tui-list_small"], [1, "tui-list__item"], ["href", "https://nodejs.org/", "tuiLink", ""], ["href", "https://angular.dev/", "tuiLink", ""], ["filename", "app.module.ts", 3, "code"], ["filename", "app.connectors.component.ts", 3, "code"], ["filename", "app.component.html", 3, "code"], [1, "tui-space_top-4"], [2, "padding", "0", 3, "content"], [1, "node-demo"], [3, "formControl"]],
  template: function QuickstartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " If you're looking to get up and running swiftly, you're in the right spot! This guide will expedite your journey from the starting point to a working application with NgDrawFlow in just a few minutes. Following this, you'll have the opportunity to explore NgDrawFlow more thoroughly through examples or by delving into the API documentation. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "section")(6, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Play online");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " You can try NgDrawFlow without setting anything up locally by checking out the starter projects we have on ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " CodeSandbox ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "section")(13, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Installation");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "To get started locally you should have a few things:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ul", 3)(18, "li", 4)(19, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Node.js ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " installed. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "li", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " A working knowledge of ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Angular ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " . You don't need to be an expert, but you should be comfortable with the basics. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "First, spin up a new Angular project");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "ng new my-app");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "NgDrawFlow is published on npm as ng-draw-flow, so go ahead and add it next.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "npm i @ng-draw-flow/core --save");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Lastly, spin up the dev server and we're good to go!");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "ng serve");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "section")(40, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Import Dependencies and Register Node Components");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, " To get started with the ng-draw-flow library, begin by setting up your module with the necessary imports and component registrations. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, " Add the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "NgDrawFlowComponent");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "ReactiveFormsModule");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, " to your module's imports array: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "tui-doc-code", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " Then, within the providers section, register the components that you want to be available for use as nodes within the graph editor: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "tui-doc-code", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, " Make sure to replace ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "yourNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, " with your specific component identifier for the node within the editor, and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "YourNodeComponent");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, " with the actual component class you intend to use. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "section")(65, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Set Up Data Model and Control for Graph Structure");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, " In the component where you intend to construct your graph, you need to create a data structure that defines the nodes and connections. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "tui-doc-code", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, " Next, link this data structure to your ng-draw-flow component using a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "FormControl");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, " . This will allow for reactive updates and interactions within your graph editor: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "tui-doc-code", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, " This setup ensures that your ng-draw-flow component is fully integrated with the Angular forms system, enabling seamless data flow and state management for your graph. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "section")(79, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Populate Example DfDataModel");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, " To illustrate how to set up the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "DfDataModel");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, " with actual data, the following example lays out a scenario with a collection of nodes and their connections: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "tui-doc-code", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, " Each ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "node");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, " mainly consists of an ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "id");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, " , a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "position");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, " , and a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "data");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, " field. Inside the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "data");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, " field, you need to specify the node type that was previously registered and all the data you want to provide to the node. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, " The ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "connections");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, " array contains objects that describe the start and end points of each connection. The ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "source");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "target");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, " holds information about which node and specific connector are used for each connection. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](116, "first-example");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "section")(118, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "Creating Nodes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, " In ng-draw-flow, nodes can be customized to look and function just how you want them to. To create your own node, you should develop a component that extends from the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "NgDrawFlowBaseNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, " class. This component will incorporate directives such as ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "DrawFlowInputDirective");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "DrawFlowOutputDirective");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "Here is a basic blueprint for a simple node component:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "tui-doc-example", 11)(134, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](135, "ng-draw-flow", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("code", ctx.gettingStarted.imports);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("code", ctx.gettingStarted.providing);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("code", ctx.gettingStarted.data1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("code", ctx.gettingStarted.template);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("code", ctx.gettingStarted.data2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("content", ctx.customNodeExample);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.nodeForm);
    }
  },
  dependencies: [_examples_first_example_component__WEBPACK_IMPORTED_MODULE_1__["default"], _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_4__.TuiDocCode, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_4__.TuiDocExample, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_4__.TuiDocPage, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__.TuiLink],
  styles: [".editor[_ngcontent-%COMP%] {\n  block-size: 31.25rem;\n  inline-size: 100%;\n  margin: 0 auto;\n  background: #fff;\n}\n.logo[_ngcontent-%COMP%] {\n  display: block;\n  inline-size: 9.375rem;\n  block-size: 9.375rem;\n  margin: 0 auto 2.5rem;\n}\n.node-demo[_ngcontent-%COMP%] {\n  block-size: 6.25rem;\n  inline-size: 100%;\n  margin: 0 auto;\n  background: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aWNrc3RhcnQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFBSjtBQUdBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQURKIiwiZmlsZSI6InF1aWNrc3RhcnQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdG9yIHtcbiAgICBibG9jay1zaXplOiAzMS4yNXJlbTtcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ubG9nbyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaW5saW5lLXNpemU6IDkuMzc1cmVtO1xuICAgIGJsb2NrLXNpemU6IDkuMzc1cmVtO1xuICAgIG1hcmdpbjogMCBhdXRvIDIuNXJlbTtcbn1cblxuLm5vZGUtZGVtbyB7XG4gICAgYmxvY2stc2l6ZTogNi4yNXJlbTtcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vcXVpY2tzdGFydC9xdWlja3N0YXJ0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBQUo7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFFQSxnNEJBQWc0QiIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3Ige1xuICAgIGJsb2NrLXNpemU6IDMxLjI1cmVtO1xuICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5sb2dvIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBpbmxpbmUtc2l6ZTogOS4zNzVyZW07XG4gICAgYmxvY2stc2l6ZTogOS4zNzVyZW07XG4gICAgbWFyZ2luOiAwIGF1dG8gMi41cmVtO1xufVxuXG4ubm9kZS1kZW1vIHtcbiAgICBibG9jay1zaXplOiA2LjI1cmVtO1xuICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuickstartComponent);

/***/ })

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_quickstart_quickstart_component_ts.js.map