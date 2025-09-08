"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_labels_labels_component_ts"],{

/***/ 57368:
/*!***********************************!*\
  !*** ./examples/component.ts?raw ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _taiga_ui_polymorpheus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/polymorpheus */ 96636);
/* harmony import */ var _app_modules_nodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app/modules/nodes */ 85989);
/* harmony import */ var _labels_copy_copy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./labels/copy/copy.component */ 60829);
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
            content: new _taiga_ui_polymorpheus__WEBPACK_IMPORTED_MODULE_3__.PolymorpheusComponent(_labels_copy_copy_component__WEBPACK_IMPORTED_MODULE_2__.CopyComponent),
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
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Output,
          connectorId: 'node-1-output-1'
        },
        target: {
          nodeId: 'node-2',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionPoint.Input,
          connectorId: 'node-2-input-1'
        },
        label: {
          content: 'Label 1'
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
        },
        label: {
          content: new _taiga_ui_polymorpheus__WEBPACK_IMPORTED_MODULE_3__.PolymorpheusComponent(_labels_copy_copy_component__WEBPACK_IMPORTED_MODULE_2__.CopyComponent),
          context: 'https://taiga-ui.dev'
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
        },
        label: {
          content: 'Label 3'
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
        },
        label: {
          content: 'Label 4'
        }
      }]
    };
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.data);
  }
}
_ExampleComponent = ExampleComponent;
_ExampleComponent.ɵfac = function ExampleComponent_Factory(t) {
  return new (t || _ExampleComponent)();
};
_ExampleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _ExampleComponent,
  selectors: [["example-component"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.dfPanZoomOptionsProvider)({
    topPosition: null,
    leftPosition: 20
  }), (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.provideNgDrawFlowConfigs)({
    connection: {
      type: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionType.SmoothStep,
      arrowhead: {
        type: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfArrowhead.ArrowClosed
      },
      curvature: 10
    },
    nodes: {
      labelNode: _app_modules_nodes__WEBPACK_IMPORTED_MODULE_1__.LabelNodeComponent,
      simpleNode: _app_modules_nodes__WEBPACK_IMPORTED_MODULE_1__.SimpleNodeComponent
    }
  })]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
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
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective],
  encapsulation: 2,
  changeDetection: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExampleComponent);

/***/ }),

/***/ 60829:
/*!****************************************************!*\
  !*** ./examples/labels/copy/copy.component.ts?raw ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CopyComponent: () => (/* binding */ CopyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-web-apis/common */ 67788);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ 28613);
/* harmony import */ var _taiga_ui_polymorpheus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/polymorpheus */ 96636);
var _CopyComponent;





class CopyComponent {
  constructor() {
    this.navigator = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_1__.WA_NAVIGATOR);
    this.context = (0,_taiga_ui_polymorpheus__WEBPACK_IMPORTED_MODULE_2__.injectContext)();
    this.link = this.context.$implicit;
    this.copied = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
  }
  copy() {
    this.navigator.clipboard.writeText(this.link).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 3000);
    });
  }
}
_CopyComponent = CopyComponent;
_CopyComponent.ɵfac = function CopyComponent_Factory(t) {
  return new (t || _CopyComponent)();
};
_CopyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _CopyComponent,
  selectors: [["ng-component"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("copied", ctx.copied());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.copied() ? "@tui.check" : "@tui.copy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.copied() ? "Copied" : "Copy", " ");
    }
  },
  dependencies: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__.TuiIcon],
  styles: ["[_nghost-%COMP%] {\n  cursor: pointer;\n}\n.copy-icon[_ngcontent-%COMP%] {\n  block-size: 0.75rem;\n  inline-size: 0.75rem;\n  color: var(--tui-text-secondary);\n}\n.copy-icon.copied[_ngcontent-%COMP%] {\n  color: var(--tui-text-positive);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcHkuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQUFKO0FBRUk7RUFDSSwrQkFBQTtBQUFSIiwiZmlsZSI6ImNvcHkuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29weS1pY29uIHtcbiAgICBibG9jay1zaXplOiAwLjc1cmVtO1xuICAgIGlubGluZS1zaXplOiAwLjc1cmVtO1xuICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC1zZWNvbmRhcnkpO1xuXG4gICAgJi5jb3BpZWQge1xuICAgICAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtcG9zaXRpdmUpO1xuICAgIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vbGFiZWxzL2V4YW1wbGVzL2xhYmVscy9jb3B5L2NvcHkuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQUFKO0FBRUk7RUFDSSwrQkFBQTtBQUFSOztBQUVBLG9tQkFBb21CIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvcHktaWNvbiB7XG4gICAgYmxvY2stc2l6ZTogMC43NXJlbTtcbiAgICBpbmxpbmUtc2l6ZTogMC43NXJlbTtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtc2Vjb25kYXJ5KTtcblxuICAgICYuY29waWVkIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXR1aS10ZXh0LXBvc2l0aXZlKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});


/***/ }),

/***/ 87581:
/*!**************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/labels/labels.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _examples_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examples/component */ 57368);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 94841);
var _LabelsComponent;



class LabelsComponent {
  constructor() {
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
_LabelsComponent.ɵfac = function LabelsComponent_Factory(t) {
  return new (t || _LabelsComponent)();
};
_LabelsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _LabelsComponent,
  selectors: [["ng-component"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 51,
  vars: 1,
  consts: [["header", "Labels"], [1, "tui-space_top-4"], [1, "tui-list", "tui-list_extra-small"], [1, "tui-list__item"], [2, "padding", "0", 3, "content"], ["tuiTheme", "light", 1, "editor"]],
  template: function LabelsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "section")(2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Overview");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p")(5, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "DfConnectionLabel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " adds textual or templated annotations to connections. A label is defined by the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "content");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " that can be a string, template or component and an optional ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "context");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " passed to it. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "section", 1)(15, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Creation scenarios");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ul", 2)(18, "li", 3)(19, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Connection level");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " \u2013 specify the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " property for a particular item in the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "connections");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " array of the data model. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li", 3)(29, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Connector level");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " \u2013 provide ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "connectionLabel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " to a connector (for example, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "df-output");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " ) so every created connection inherits it. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li", 3)(39, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Node level");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " \u2013 define ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "data.connectionLabel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " for a node to apply the same label to all of its output connectors. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "section", 1)(46, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Example");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "tui-doc-example", 4)(49, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "example-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx.labelsExample);
    }
  },
  dependencies: [_examples_component__WEBPACK_IMPORTED_MODULE_0__["default"], _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_2__.TuiDocExample, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_2__.TuiDocPage],
  styles: [".editor[_ngcontent-%COMP%] {\n  position: relative;\n  block-size: 20rem;\n  inline-size: 100%;\n  margin: 0 auto;\n  background: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhYmVscy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6ImxhYmVscy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3Ige1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBibG9jay1zaXplOiAyMHJlbTtcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vbGFiZWxzL2xhYmVscy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBLGdlQUFnZSIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3Ige1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBibG9jay1zaXplOiAyMHJlbTtcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LabelsComponent);

/***/ })

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_labels_labels_component_ts.js.map