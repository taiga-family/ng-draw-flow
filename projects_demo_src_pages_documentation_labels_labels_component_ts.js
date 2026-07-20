"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_labels_labels_component_ts"],{

/***/ 57368
/*!***********************************!*\
  !*** ./examples/component.ts?raw ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _taiga_ui_polymorpheus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/polymorpheus */ 96636);
/* harmony import */ var _app_modules_nodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app/modules/nodes */ 85989);
/* harmony import */ var _labels_copy_copy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./labels/copy/copy.component */ 60829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
var _ExampleComponent;







class ExampleComponent {
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
      }, {
        id: 'node-5',
        data: {
          type: 'simpleNode',
          text: 'This node creates connections with a label',
          connectionLabel: {
            content: new _taiga_ui_polymorpheus__WEBPACK_IMPORTED_MODULE_2__.PolymorpheusComponent(_labels_copy_copy_component__WEBPACK_IMPORTED_MODULE_4__.CopyComponent),
            context: 'some text'
          }
        },
        position: {
          x: 0,
          y: -100
        }
      }, {
        id: 'node-6',
        data: {
          type: 'labelNode',
          text: 'This node defines label content dynamically'
        },
        position: {
          x: 0,
          y: 100
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
          connectorId: 'node-2-input-1'
        },
        label: {
          content: 'Label 1'
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
        },
        label: {
          content: new _taiga_ui_polymorpheus__WEBPACK_IMPORTED_MODULE_2__.PolymorpheusComponent(_labels_copy_copy_component__WEBPACK_IMPORTED_MODULE_4__.CopyComponent),
          context: 'https://taiga-ui.dev'
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
        },
        label: {
          content: 'Label 3'
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
        },
        label: {
          content: 'Label 4'
        }
      }]
    };
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(this.data);
  }
}
_ExampleComponent = ExampleComponent;
_ExampleComponent.ɵfac = function ExampleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExampleComponent)();
};
_ExampleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _ExampleComponent,
  selectors: [["example-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.dfPanZoomOptionsProvider)({
    topPosition: null,
    leftPosition: 20
  }), (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.provideNgDrawFlowConfigs)({
    connection: {
      type: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionType.SmoothStep,
      arrowhead: {
        type: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfArrowhead.ArrowClosed
      },
      curvature: 10
    },
    nodes: {
      labelNode: _app_modules_nodes__WEBPACK_IMPORTED_MODULE_3__.LabelNodeComponent,
      simpleNode: _app_modules_nodes__WEBPACK_IMPORTED_MODULE_3__.SimpleNodeComponent
    }
  })])],
  decls: 1,
  vars: 1,
  consts: [[3, "formControl"]],
  template: function ExampleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ng-draw-flow", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.form);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective],
  encapsulation: 2,
  changeDetection: 0
});

/***/ },

/***/ 60829
/*!****************************************************!*\
  !*** ./examples/labels/copy/copy.component.ts?raw ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CopyComponent: () => (/* binding */ CopyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-web-apis/common */ 67788);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ 28613);
/* harmony import */ var _taiga_ui_polymorpheus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/polymorpheus */ 96636);
var _CopyComponent;





class CopyComponent {
  constructor() {
    this.navigator = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_1__.WA_NAVIGATOR);
    this.context = (0,_taiga_ui_polymorpheus__WEBPACK_IMPORTED_MODULE_3__.injectContext)();
    this.copied = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
    this.link = this.context.$implicit;
  }
  copy() {
    this.navigator.clipboard.writeText(this.link).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 3000);
    });
  }
}
_CopyComponent = CopyComponent;
_CopyComponent.ɵfac = function CopyComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CopyComponent)();
};
_CopyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _CopyComponent,
  selectors: [["ng-component"]],
  decls: 3,
  vars: 4,
  consts: [[1, "copy", 3, "click"], [1, "copy-icon", 3, "icon"]],
  template: function CopyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CopyComponent_Template_div_click_0_listener() {
        return ctx.copy();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("copied", ctx.copied());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.copied() ? "@tui.check" : "@tui.copy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.copied() ? "Copied" : "Copy", " ");
    }
  },
  dependencies: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiIcon],
  styles: ["[_nghost-%COMP%] {\n  cursor: pointer;\n}\n.copy-icon[_ngcontent-%COMP%] {\n  block-size: 0.75rem;\n  inline-size: 0.75rem;\n  color: var(--tui-text-secondary);\n}\n.copy-icon.copied[_ngcontent-%COMP%] {\n  color: var(--tui-text-positive);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vbGFiZWxzL2V4YW1wbGVzL2xhYmVscy9jb3B5L2NvcHkuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQUFKO0FBRUk7RUFDSSwrQkFBQTtBQUFSIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvcHktaWNvbiB7XG4gICAgYmxvY2stc2l6ZTogMC43NXJlbTtcbiAgICBpbmxpbmUtc2l6ZTogMC43NXJlbTtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtc2Vjb25kYXJ5KTtcblxuICAgICYuY29waWVkIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXR1aS10ZXh0LXBvc2l0aXZlKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ },

/***/ 87581
/*!**************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/labels/labels.component.ts ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LabelsComponent)
/* harmony export */ });
/* harmony import */ var _examples_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examples/component */ 57368);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 94841);
var _LabelsComponent;



class LabelsComponent {
  constructor() {
    this.labelCreation = __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_labels_examples_label-creation_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/label-creation.md?raw */ 81598, 17));
    this.labelsExample = {
      TypeScript: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_labels_examples_component_ts_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/component.ts?raw */ 62781, 17)),
      Template: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_labels_examples_template_html_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/template.html?raw */ 69724, 17)),
      'Copy label example': __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_labels_examples_labels_copy_copy_component_ts_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/labels/copy/copy.component.ts?raw */ 95772, 17)),
      'Label node component': __webpack_require__.e(/*! import() */ "projects_demo_src_app_modules_nodes_label-node_label-node_component_ts_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../app/modules/nodes/label-node/label-node.component.ts?raw */ 72450, 17)),
      'Label node template': __webpack_require__.e(/*! import() */ "projects_demo_src_app_modules_nodes_label-node_label-node_component_html_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../app/modules/nodes/label-node/label-node.component.html?raw */ 7574, 17))
    };
  }
}
_LabelsComponent = LabelsComponent;
_LabelsComponent.ɵfac = function LabelsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LabelsComponent)();
};
_LabelsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _LabelsComponent,
  selectors: [["ng-component"]],
  decls: 74,
  vars: 2,
  consts: [["header", "Connection Labels"], [1, "docs-lead"], [1, "docs-summary"], ["filename", "graph-model.ts", 3, "code"], [1, "docs-flow"], [2, "padding", "0", 3, "content"], ["tuiTheme", "light", 1, "editor"]],
  template: function LabelsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p", 1)(2, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "DfConnectionLabel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " adds text, templates or Angular components to an edge. Labels can be persisted on one connection or supplied as defaults while users create new connections. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2)(6, "div")(7, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Connection label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Final persisted value for one edge.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div")(12, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Output label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Default inherited by edges created from that output.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div")(17, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Node label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Shared default applied to all outputs in a node.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "section")(22, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Define Labels");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Label ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "content");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " is Polymorpheus content and optional ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "context");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " is passed through unchanged. Use a typed application object when a template or component exposes controls. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "tui-doc-code", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "section")(34, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Precedence");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ol", 4)(37, "li")(38, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Connection");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span")(41, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "connection.label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " is the stored value rendered for that edge. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li")(45, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Output connector");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span")(48, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "[connectionLabel]");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " is copied during interactive creation. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "li")(52, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Node data");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span")(55, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "data.connectionLabel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " supplies a fallback to every output. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " An output connector label overrides the node-level default. Call ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "setConnectionLabel()");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " on a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "DfOutputComponent");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " reference when the next created edge needs an imperative override. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "section")(67, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Interactive Example");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " This graph demonstrates text labels and a component label with a copy action. Inspect the source tabs for the model, label component and node template. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "tui-doc-example", 5)(72, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "example-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.labelCreation);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx.labelsExample);
    }
  },
  dependencies: [_examples_component__WEBPACK_IMPORTED_MODULE_0__["default"], _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_2__.TuiDocCode, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_2__.TuiDocExample, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_2__.TuiDocPage],
  styles: [".editor[_ngcontent-%COMP%] {\n  position: relative;\n  block-size: 20rem;\n  inline-size: 100%;\n  margin: 0 auto;\n  background: #fff;\n}\ntui-doc-code[_ngcontent-%COMP%], \ntui-doc-example[_ngcontent-%COMP%] {\n  display: block;\n  margin-block: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vbGFiZWxzL2xhYmVscy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUE7O0VBRUksY0FBQTtFQUNBLGtCQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdG9yIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmxvY2stc2l6ZTogMjByZW07XG4gICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxudHVpLWRvYy1jb2RlLFxudHVpLWRvYy1leGFtcGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYmxvY2s6IDFyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_labels_labels_component_ts.js.map