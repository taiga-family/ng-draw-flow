"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_examples_editor_editor_component_ts"],{

/***/ 8810
/*!*********************************************************************!*\
  !*** ./projects/demo/src/pages/examples/editor/editor.component.ts ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 42735);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 48065);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ 11498);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ 15592);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 79746);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 61856);
/* harmony import */ var _app_modules_nodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../app/modules/nodes */ 85989);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 94841);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @taiga-ui/kit */ 31200);
/* harmony import */ var _taiga_ui_core_components_label__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @taiga-ui/core/components/label */ 21028);
/* harmony import */ var _taiga_ui_core_components_textfield__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @taiga-ui/core/components/textfield */ 50957);
var _EditorComponent;
















const _c0 = a0 => ({
  fullscreen: a0
});
function EditorComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Selected node");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.id);
  }
}
function EditorComponent_Conditional_25_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Selected connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const connection_r1 = ctx;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", connection_r1.source.nodeId, " \u2192 ", connection_r1.target.nodeId, " ");
  }
}
function EditorComponent_Conditional_25_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nothing selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EditorComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, EditorComponent_Conditional_25_Conditional_0_Template, 4, 2)(1, EditorComponent_Conditional_25_Conditional_1_Template, 2, 0, "div", 15);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"]((tmp_1_0 = ctx_r1.drawFlowStore.selectedConnection()) ? 0 : 1, tmp_1_0);
  }
}
class EditorComponent {
  constructor() {
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DestroyRef);
    this.panZoomOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_4__.DF_PAN_ZOOM_OPTIONS);
    this.drawFlowStore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_4__.NgDrawFlowStoreService);
    this.customNodeExample = {
      Typescript: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_examples_editor_examples_editor_component_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/editor.component.md?raw */ 9749, 17)),
      Styles: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_examples_editor_editor_component_less_ngResource").then(__webpack_require__.t.bind(__webpack_require__, /*! ./editor.component.less?raw */ 19555, 17)),
      Template: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_examples_editor_examples_editor_template_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/editor.template.md?raw */ 53696, 17))
    };
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
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_4__.DfConnectionPoint.Output,
          connectorId: 'node-1-output-1'
        },
        target: {
          nodeId: 'node-2',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_4__.DfConnectionPoint.Input,
          connectorId: 'node-2-input-1'
        }
      }, {
        source: {
          nodeId: 'node-1',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_4__.DfConnectionPoint.Output,
          connectorId: 'node-1-output-1'
        },
        target: {
          nodeId: 'node-3',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_4__.DfConnectionPoint.Input,
          connectorId: 'node-3-input-1'
        }
      }, {
        source: {
          nodeId: 'node-2',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_4__.DfConnectionPoint.Output,
          connectorId: 'node-2-output-1'
        },
        target: {
          nodeId: 'node-4',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_4__.DfConnectionPoint.Input,
          connectorId: 'node-4-input-1'
        }
      }, {
        source: {
          nodeId: 'node-3',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_4__.DfConnectionPoint.Output,
          connectorId: 'node-3-output-1'
        },
        target: {
          nodeId: 'node-4',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_4__.DfConnectionPoint.Input,
          connectorId: 'node-4-input-1'
        }
      }]
    };
    this.scaleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(1, {
      nonNullable: true
    });
    this.fullscreen = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false);
    this.counter = 0;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data, [(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_4__.dfCycleDetectionValidator)(), (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_4__.dfIsolatedNodesValidator)()]);
  }
  ngOnInit() {
    this.form.statusChanges.subscribe(v => {
      console.warn(v, 'onStatusChange');
    });
    this.form.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.filter)(Boolean)).subscribe(value => {
      this.data = value;
    });
    this.scaleControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.takeUntilDestroyed)(this.destroyRef)).subscribe(value => {
      if (!Number.isFinite(value)) {
        return;
      }
      this.drawFlowStore.setScale(value);
    });
    this.drawFlowStore.connectionCreated$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.takeUntilDestroyed)(this.destroyRef)).subscribe(data => {
      console.warn(data, 'drawFlowStore connectionCreated');
    });
    this.drawFlowStore.connectionDeleted$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.takeUntilDestroyed)(this.destroyRef)).subscribe(data => {
      console.warn(data, 'drawFlowStore connectionDeleted');
    });
    this.drawFlowStore.connectionSelected$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.takeUntilDestroyed)(this.destroyRef)).subscribe(data => {
      console.warn(data, 'drawFlowStore connectionSelected');
    });
    this.drawFlowStore.nodeDeleted$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.takeUntilDestroyed)(this.destroyRef)).subscribe(data => {
      console.warn(data, 'drawFlowStore nodeDeleted');
    });
    this.drawFlowStore.nodeMoved$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.takeUntilDestroyed)(this.destroyRef)).subscribe(data => {
      console.warn(data, 'drawFlowStore nodeMoved');
    });
    this.drawFlowStore.nodeSelected$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.takeUntilDestroyed)(this.destroyRef)).subscribe(data => {
      console.warn(data, 'drawFlowStore nodeSelected');
    });
  }
  onScaleChange(zoomLevel) {
    this.scaleControl.setValue(zoomLevel / 100, {
      emitEvent: false
    });
  }
  onConnectionCreated(event) {
    console.warn(event, 'onConnectionCreated');
  }
  onConnectionDeleted(event) {
    console.warn(event, 'onConnectionDeleted');
  }
  onConnectionSelected(event) {
    console.warn(event, 'onConnectionSelected');
  }
  onNodeMoved(event) {
    console.warn(event, 'onNodeMoved');
  }
  onNodeSelected(event) {
    console.warn(event, 'onNodeSelected');
  }
  onNodeDeleted(event) {
    console.warn(event, 'onNodeDeleted');
  }
  toggleFullscreen() {
    this.fullscreen.update(value => !value);
    this.drawFlowStore.resetPosition();
  }
  addNodeToDrawFlow() {
    const id = `new-node-${this.counter}`;
    this.data.nodes.push({
      id,
      data: {
        type: 'simpleNode',
        text: `created node ${this.counter + 1}`
      }
    });
    this.form.setValue(this.data);
    this.counter++;
  }
}
_EditorComponent = EditorComponent;
_EditorComponent.ɵfac = function EditorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EditorComponent)();
};
_EditorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _EditorComponent,
  selectors: [["editor"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_4__.dfPanZoomOptionsProvider)({
    leftPosition: 50
  }), (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_4__.provideNgDrawFlowConfigs)({
    connection: {
      type: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_4__.DfConnectionType.SmoothStep,
      arrowhead: {
        type: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_4__.DfArrowhead.Arrow
      },
      curvature: 10
    },
    nodes: {
      simpleNode: _app_modules_nodes__WEBPACK_IMPORTED_MODULE_9__.SimpleNodeComponent
    },
    options: {
      nodesDraggable: true,
      nodesDeletable: true,
      connectionsDeletable: true,
      connectionsCreatable: true
    }
  })])],
  decls: 26,
  vars: 13,
  consts: [["header", "Editor"], [1, "tui-space_top-4"], [2, "padding", "0", 3, "content"], [1, "editor", 3, "ngClass"], [3, "connectionCreated", "connectionDeleted", "connectionSelected", "nodeDeleted", "nodeMoved", "nodeSelected", "scale", "formControl"], ["size", "s", "tuiButton", "", "type", "button", 1, "add", 3, "click"], ["size", "s", "tuiButton", "", "type", "button", 1, "fullscreen-btn", 3, "click"], ["size", "s", "tuiButton", "", "type", "button", 1, "remove-node-btn", 3, "click"], [1, "scale-controls"], ["size", "s", "tuiButton", "", "type", "button", 3, "click"], ["tuiTextfieldSize", "m", "tuiTheme", "light", 1, "scale-field", 3, "tuiTextfieldCleaner"], ["tuiLabel", ""], ["aria-label", "Set scale", "tuiInputNumber", "", 3, "formControl", "max", "min", "step"], [1, "scale-value"], [1, "selection-info"], [1, "selection-title"], [1, "selection-value"]],
  template: function EditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-doc-page", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Our graph editor is built to serve as an API-first platform, enabling developers to design their own UI elements and interact with the graph through exposed methods. This approach allows for the addition of new nodes and control over the zoom level, complete with the ability to display the current zoom, all while providing a customizable experience tailored to your application's needs. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 1)(3, "tui-doc-example", 2)(4, "div", 3)(5, "ng-draw-flow", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("connectionCreated", function EditorComponent_Template_ng_draw_flow_connectionCreated_5_listener($event) {
        return ctx.onConnectionCreated($event);
      })("connectionDeleted", function EditorComponent_Template_ng_draw_flow_connectionDeleted_5_listener($event) {
        return ctx.onConnectionDeleted($event);
      })("connectionSelected", function EditorComponent_Template_ng_draw_flow_connectionSelected_5_listener($event) {
        return ctx.onConnectionSelected($event);
      })("nodeDeleted", function EditorComponent_Template_ng_draw_flow_nodeDeleted_5_listener($event) {
        return ctx.onNodeDeleted($event);
      })("nodeMoved", function EditorComponent_Template_ng_draw_flow_nodeMoved_5_listener($event) {
        return ctx.onNodeMoved($event);
      })("nodeSelected", function EditorComponent_Template_ng_draw_flow_nodeSelected_5_listener($event) {
        return ctx.onNodeSelected($event);
      })("scale", function EditorComponent_Template_ng_draw_flow_scale_5_listener($event) {
        return ctx.onScaleChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_6_listener() {
        return ctx.addNodeToDrawFlow();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Add node ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_8_listener() {
        return ctx.toggleFullscreen();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_10_listener() {
        return ctx.drawFlowStore.removeNode("node-3");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Remove node-3 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8)(13, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_13_listener() {
        return ctx.drawFlowStore.zoomOut();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " zoomOut ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tui-textfield", 10)(16, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Set scale");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_21_listener() {
        return ctx.drawFlowStore.zoomIn();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " zoomIn ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, EditorComponent_Conditional_24_Template, 4, 1)(25, EditorComponent_Conditional_25_Template, 2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      let tmp_10_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx.customNodeExample);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx.fullscreen()));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.fullscreen() ? "Exit from fullscreen" : "Fullscreen", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tuiTextfieldCleaner", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.scaleControl)("max", ctx.panZoomOptions.maxZoom)("min", ctx.panZoomOptions.minZoom)("step", ctx.panZoomOptions.zoomStep);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.drawFlowStore.scale(), "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"]((tmp_10_0 = ctx.drawFlowStore.selectedNode()) ? 24 : 25, tmp_10_0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, ngx_markdown__WEBPACK_IMPORTED_MODULE_6__.MarkdownModule, _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_4__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocExample, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocPage, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__.TuiButton, _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_11__.TuiInputNumberDirective, _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_11__.TuiInputNumberStep, _taiga_ui_core_components_label__WEBPACK_IMPORTED_MODULE_12__.TuiLabel, _taiga_ui_core_components_textfield__WEBPACK_IMPORTED_MODULE_13__.TuiTextfieldComponent, _taiga_ui_core_components_textfield__WEBPACK_IMPORTED_MODULE_13__.TuiTextfieldOptionsDirective],
  styles: [".editor {\n  position: relative;\n  block-size: 31.25rem;\n  inline-size: 100%;\n  margin: 0 auto;\n  background: #fff;\n}\n.editor.fullscreen {\n  position: fixed;\n  z-index: 1;\n  inset-block-start: 0;\n  inset-inline-start: 0;\n  inline-size: 100%;\n  block-size: 100%;\n  background-color: #fff;\n}\n.editor.fullscreen .add {\n  inset-block-start: 5rem;\n}\n.editor.fullscreen .fullscreen-btn {\n  inset-block-start: 7.8rem;\n}\n.editor.fullscreen .remove-node-btn {\n  inset-block-start: 10.6rem;\n}\n.editor.fullscreen .selection-info {\n  inset-block-start: 5rem;\n}\n.add {\n  position: absolute;\n  inset-inline-end: 1.25rem;\n  inset-block-start: 1.25rem;\n}\n.fullscreen-btn {\n  position: absolute;\n  inset-inline-end: 1.25rem;\n  inset-block-start: 3.75rem;\n}\n.remove-node-btn {\n  position: absolute;\n  inset-inline-end: 1.25rem;\n  inset-block-start: 6.25rem;\n}\n.scale-controls {\n  position: absolute;\n  display: flex;\n  inset-block-end: 1.25rem;\n  inset-inline-end: 1.25rem;\n  align-items: center;\n  gap: 0.75rem;\n}\n.scale-value {\n  inline-size: 3.125rem;\n  text-align: center;\n  color: #333;\n}\n.scale-field {\n  background: #fff;\n}\n.selection-info {\n  position: absolute;\n  display: flex;\n  inset-block-start: 1.25rem;\n  inset-inline-start: 1.25rem;\n  flex-direction: column;\n  gap: 0.25rem;\n  padding: 0.75rem 1rem;\n  min-inline-size: 11rem;\n  background-color: rgba(255, 255, 255, 0.95);\n  border: 1px solid #dcdcdc;\n  border-radius: 0.5rem;\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.08);\n}\n.selection-title {\n  font-weight: 600;\n  color: #1f1f1f;\n}\n.selection-value {\n  font-size: 0.875rem;\n  color: #555;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2V4YW1wbGVzL2VkaXRvci9lZGl0b3IuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNJO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBQ1I7QUFSSTtFQVVRLHVCQUFBO0FBQ1o7QUFYSTtFQWNRLHlCQUFBO0FBQVo7QUFkSTtFQWtCUSwwQkFBQTtBQURaO0FBakJJO0VBc0JRLHVCQUFBO0FBRlo7QUFPQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQUxKO0FBUUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFOSjtBQVNBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBUEo7QUFVQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFSSjtBQVdBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFUSjtBQVlBO0VBQ0ksZ0JBQUE7QUFWSjtBQWFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpREFBQTtBQVhKO0FBY0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFaSjtBQWVBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FBYkoiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdG9yIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmxvY2stc2l6ZTogMzEuMjVyZW07XG4gICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcblxuICAgICYuZnVsbHNjcmVlbiB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgaW5zZXQtYmxvY2stc3RhcnQ6IDA7XG4gICAgICAgIGluc2V0LWlubGluZS1zdGFydDogMDtcbiAgICAgICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgICAgIGJsb2NrLXNpemU6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cbiAgICAgICAgLmFkZCB7XG4gICAgICAgICAgICBpbnNldC1ibG9jay1zdGFydDogNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mdWxsc2NyZWVuLWJ0biB7XG4gICAgICAgICAgICBpbnNldC1ibG9jay1zdGFydDogNy44cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlbW92ZS1ub2RlLWJ0biB7XG4gICAgICAgICAgICBpbnNldC1ibG9jay1zdGFydDogMTAuNnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWxlY3Rpb24taW5mbyB7XG4gICAgICAgICAgICBpbnNldC1ibG9jay1zdGFydDogNXJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmFkZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0LWlubGluZS1lbmQ6IDEuMjVyZW07XG4gICAgaW5zZXQtYmxvY2stc3RhcnQ6IDEuMjVyZW07XG59XG5cbi5mdWxsc2NyZWVuLWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0LWlubGluZS1lbmQ6IDEuMjVyZW07XG4gICAgaW5zZXQtYmxvY2stc3RhcnQ6IDMuNzVyZW07XG59XG5cbi5yZW1vdmUtbm9kZS1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldC1pbmxpbmUtZW5kOiAxLjI1cmVtO1xuICAgIGluc2V0LWJsb2NrLXN0YXJ0OiA2LjI1cmVtO1xufVxuXG4uc2NhbGUtY29udHJvbHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGluc2V0LWJsb2NrLWVuZDogMS4yNXJlbTtcbiAgICBpbnNldC1pbmxpbmUtZW5kOiAxLjI1cmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjc1cmVtO1xufVxuXG4uc2NhbGUtdmFsdWUge1xuICAgIGlubGluZS1zaXplOiAzLjEyNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi5zY2FsZS1maWVsZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnNlbGVjdGlvbi1pbmZvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBpbnNldC1ibG9jay1zdGFydDogMS4yNXJlbTtcbiAgICBpbnNldC1pbmxpbmUtc3RhcnQ6IDEuMjVyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuMjVyZW07XG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICAgIG1pbi1pbmxpbmUtc2l6ZTogMTFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC43NXJlbSByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG4uc2VsZWN0aW9uLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMWYxZjFmO1xufVxuXG4uc2VsZWN0aW9uLXZhbHVlIHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGNvbG9yOiAjNTU1O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }

}]);
//# sourceMappingURL=projects_demo_src_pages_examples_editor_editor_component_ts.js.map