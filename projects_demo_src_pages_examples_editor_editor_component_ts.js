"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_examples_editor_editor_component_ts"],{

/***/ 8810:
/*!*********************************************************************!*\
  !*** ./projects/demo/src/pages/examples/editor/editor.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 48065);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @taiga-ui/core */ 11498);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @taiga-ui/core */ 21028);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-markdown */ 15592);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 95536);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 61856);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 79746);
/* harmony import */ var _app_modules_nodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app/modules/nodes */ 85989);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 94841);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @taiga-ui/kit */ 31200);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @taiga-ui/core */ 50957);
var _EditorComponent;















function EditorComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Selected node");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const node_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](node_r5.id);
  }
}
function EditorComponent_ng_template_26_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Selected connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const connection_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", connection_r7.source.nodeId, " \u2192 ", connection_r7.target.nodeId, " ");
  }
}
function EditorComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EditorComponent_ng_template_26_ng_container_0_Template, 5, 2, "ng-container", 14);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.drawFlowStore.selectedConnection())("ngIfElse", _r3);
  }
}
function EditorComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Nothing selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    fullscreen: a0
  };
};
class EditorComponent {
  constructor() {
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.DestroyRef);
    this.panZoomOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DF_PAN_ZOOM_OPTIONS);
    this.drawFlowStore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.NgDrawFlowStoreService);
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
    this.scaleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(1, {
      nonNullable: true
    });
    this.fullscreen$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
    this.counter = 0;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data, [(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.dfCycleDetectionValidator)(), (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.dfIsolatedNodesValidator)()]);
  }
  ngOnInit() {
    this.form.statusChanges.subscribe(v => {
      console.warn(v, 'onStatusChange');
    });
    this.form.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(Boolean)).subscribe(value => {
      this.data = value;
    });
    this.scaleControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_7__.takeUntilDestroyed)(this.destroyRef)).subscribe(value => {
      if (!Number.isFinite(value)) {
        return;
      }
      this.drawFlowStore.setScale(value);
    });
    this.drawFlowStore.connectionCreated$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_7__.takeUntilDestroyed)(this.destroyRef)).subscribe(data => {
      console.warn(data, 'drawFlowStore connectionCreated');
    });
    this.drawFlowStore.connectionDeleted$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_7__.takeUntilDestroyed)(this.destroyRef)).subscribe(data => {
      console.warn(data, 'drawFlowStore connectionDeleted');
    });
    this.drawFlowStore.connectionSelected$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_7__.takeUntilDestroyed)(this.destroyRef)).subscribe(data => {
      console.warn(data, 'drawFlowStore connectionSelected');
    });
    this.drawFlowStore.nodeDeleted$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_7__.takeUntilDestroyed)(this.destroyRef)).subscribe(data => {
      console.warn(data, 'drawFlowStore nodeDeleted');
    });
    this.drawFlowStore.nodeMoved$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_7__.takeUntilDestroyed)(this.destroyRef)).subscribe(data => {
      console.warn(data, 'drawFlowStore nodeMoved');
    });
    this.drawFlowStore.nodeSelected$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_7__.takeUntilDestroyed)(this.destroyRef)).subscribe(data => {
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
    this.fullscreen$.next(!this.fullscreen$.value);
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
_EditorComponent.ɵfac = function EditorComponent_Factory(t) {
  return new (t || _EditorComponent)();
};
_EditorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _EditorComponent,
  selectors: [["editor"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.dfPanZoomOptionsProvider)({
    leftPosition: 50
  }), (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.provideNgDrawFlowConfigs)({
    connection: {
      type: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectionType.SmoothStep,
      arrowhead: {
        type: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfArrowhead.Arrow
      },
      curvature: 10
    },
    nodes: {
      simpleNode: _app_modules_nodes__WEBPACK_IMPORTED_MODULE_1__.SimpleNodeComponent
    },
    options: {
      nodesDraggable: true,
      nodesDeletable: true,
      connectionsDeletable: true,
      connectionsCreatable: true
    }
  })]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 30,
  vars: 20,
  consts: [["header", "Editor"], [1, "tui-space_top-4"], [2, "padding", "0", 3, "content"], [1, "editor", 3, "ngClass"], [3, "formControl", "connectionCreated", "connectionDeleted", "connectionSelected", "nodeDeleted", "nodeMoved", "nodeSelected", "scale"], ["size", "s", "tuiButton", "", "type", "button", 1, "add", 3, "click"], ["size", "s", "tuiButton", "", "type", "button", 1, "fullscreen-btn", 3, "click"], [1, "scale-controls"], ["size", "s", "tuiButton", "", "type", "button", 3, "click"], ["tuiTextfieldSize", "m", "tuiTheme", "light", 1, "scale-field", 3, "tuiTextfieldCleaner"], ["tuiLabel", ""], ["aria-label", "Set scale", "tuiInputNumber", "", 3, "formControl", "max", "min", "step"], [1, "scale-value"], [1, "selection-info"], [4, "ngIf", "ngIfElse"], ["connectionInfo", ""], ["noSelection", ""], [1, "selection-title"], [1, "selection-value"]],
  template: function EditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tui-doc-page", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Our graph editor is built to serve as an API-first platform, enabling developers to design their own UI elements and interact with the graph through exposed methods. This approach allows for the addition of new nodes and control over the zoom level, complete with the ability to display the current zoom, all while providing a customizable experience tailored to your application's needs. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "section", 1)(3, "tui-doc-example", 2)(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ng-draw-flow", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("connectionCreated", function EditorComponent_Template_ng_draw_flow_connectionCreated_6_listener($event) {
        return ctx.onConnectionCreated($event);
      })("connectionDeleted", function EditorComponent_Template_ng_draw_flow_connectionDeleted_6_listener($event) {
        return ctx.onConnectionDeleted($event);
      })("connectionSelected", function EditorComponent_Template_ng_draw_flow_connectionSelected_6_listener($event) {
        return ctx.onConnectionSelected($event);
      })("nodeDeleted", function EditorComponent_Template_ng_draw_flow_nodeDeleted_6_listener($event) {
        return ctx.onNodeDeleted($event);
      })("nodeMoved", function EditorComponent_Template_ng_draw_flow_nodeMoved_6_listener($event) {
        return ctx.onNodeMoved($event);
      })("nodeSelected", function EditorComponent_Template_ng_draw_flow_nodeSelected_6_listener($event) {
        return ctx.onNodeSelected($event);
      })("scale", function EditorComponent_Template_ng_draw_flow_scale_6_listener($event) {
        return ctx.onScaleChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_7_listener() {
        return ctx.addNodeToDrawFlow();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Add node ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_9_listener() {
        return ctx.toggleFullscreen();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7)(13, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_13_listener() {
        return ctx.drawFlowStore.zoomOut();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " zoomOut ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "tui-textfield", 9)(16, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Set scale");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_22_listener() {
        return ctx.drawFlowStore.zoomIn();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " zoomIn ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, EditorComponent_ng_container_25_Template, 5, 1, "ng-container", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, EditorComponent_ng_template_26_Template, 1, 2, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, EditorComponent_ng_template_28_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("content", ctx.customNodeExample);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](18, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 12, ctx.fullscreen$)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 14, ctx.fullscreen$) ? "Exit from fullscreen" : "Fullscreen", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tuiTextfieldCleaner", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.scaleControl)("max", ctx.panZoomOptions.maxZoom)("min", ctx.panZoomOptions.minZoom)("step", ctx.panZoomOptions.zoomStep);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 16, ctx.drawFlowStore.scale$), "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.drawFlowStore.selectedNode())("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ngx_markdown__WEBPACK_IMPORTED_MODULE_9__.MarkdownModule, _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocExample, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_10__.TuiDocPage, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_11__.TuiButton, _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_12__.TuiInputNumberDirective, _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_12__.TuiInputNumberStep, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_13__.TuiLabel, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_14__.TuiTextfieldComponent, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_14__.TuiTextfieldOptionsDirective],
  styles: [".editor {\n  position: relative;\n  block-size: 31.25rem;\n  inline-size: 100%;\n  margin: 0 auto;\n  background: #fff;\n}\n.editor.fullscreen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  inline-size: 100%;\n  block-size: 100%;\n  background-color: #fff;\n}\n.editor.fullscreen .add {\n  top: 5rem;\n}\n.editor.fullscreen .fullscreen-btn {\n  top: 7.8rem;\n}\n.editor.fullscreen .selection-info {\n  top: 5rem;\n}\n.add {\n  position: absolute;\n  right: 1.25rem;\n  top: 1.25rem;\n}\n.fullscreen-btn {\n  position: absolute;\n  right: 1.25rem;\n  top: 3.75rem;\n}\n.scale-controls {\n  position: absolute;\n  bottom: 1.25rem;\n  right: 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.scale-value {\n  inline-size: 3.125rem;\n  text-align: center;\n  color: #333;\n}\n.scale-field {\n  background: #fff;\n}\n.selection-info {\n  position: absolute;\n  top: 1.25rem;\n  left: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  padding: 0.75rem 1rem;\n  min-inline-size: 11rem;\n  background-color: rgba(255, 255, 255, 0.95);\n  border: 1px solid #dcdcdc;\n  border-radius: 0.5rem;\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.08);\n}\n.selection-title {\n  font-weight: 600;\n  color: #1f1f1f;\n}\n.selection-value {\n  font-size: 0.875rem;\n  color: #555;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBQ1I7QUFSSTtFQVVRLFNBQUE7QUFDWjtBQVhJO0VBY1EsV0FBQTtBQUFaO0FBZEk7RUFrQlEsU0FBQTtBQURaO0FBTUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBSko7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFMSjtBQVFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFOSjtBQVNBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFQSjtBQVVBO0VBQ0ksZ0JBQUE7QUFSSjtBQVdBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaURBQUE7QUFUSjtBQVlBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBVko7QUFhQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQVhKIiwiZmlsZSI6ImVkaXRvci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3Ige1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBibG9jay1zaXplOiAzMS4yNXJlbTtcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICAgJi5mdWxsc2NyZWVuIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgICAgICBibG9jay1zaXplOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG4gICAgICAgIC5hZGQge1xuICAgICAgICAgICAgdG9wOiA1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZ1bGxzY3JlZW4tYnRuIHtcbiAgICAgICAgICAgIHRvcDogNy44cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlbGVjdGlvbi1pbmZvIHtcbiAgICAgICAgICAgIHRvcDogNXJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmFkZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxLjI1cmVtO1xuICAgIHRvcDogMS4yNXJlbTtcbn1cblxuLmZ1bGxzY3JlZW4tYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEuMjVyZW07XG4gICAgdG9wOiAzLjc1cmVtO1xufVxuXG4uc2NhbGUtY29udHJvbHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEuMjVyZW07XG4gICAgcmlnaHQ6IDEuMjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC43NXJlbTtcbn1cblxuLnNjYWxlLXZhbHVlIHtcbiAgICBpbmxpbmUtc2l6ZTogMy4xMjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4uc2NhbGUtZmllbGQge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5zZWxlY3Rpb24taW5mbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMS4yNXJlbTtcbiAgICBsZWZ0OiAxLjI1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuMjVyZW07XG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICAgIG1pbi1pbmxpbmUtc2l6ZTogMTFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC43NXJlbSByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG4uc2VsZWN0aW9uLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMWYxZjFmO1xufVxuXG4uc2VsZWN0aW9uLXZhbHVlIHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGNvbG9yOiAjNTU1O1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2V4YW1wbGVzL2VkaXRvci9lZGl0b3IuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNJO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUNSO0FBUkk7RUFVUSxTQUFBO0FBQ1o7QUFYSTtFQWNRLFdBQUE7QUFBWjtBQWRJO0VBa0JRLFNBQUE7QUFEWjtBQU1BO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUpKO0FBT0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBTEo7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBTko7QUFTQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBUEo7QUFVQTtFQUNJLGdCQUFBO0FBUko7QUFXQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlEQUFBO0FBVEo7QUFZQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQVZKO0FBYUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUFYSjs7QUFFQSxvK0ZBQW8rRiIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3Ige1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBibG9jay1zaXplOiAzMS4yNXJlbTtcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICAgJi5mdWxsc2NyZWVuIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgICAgICBibG9jay1zaXplOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG4gICAgICAgIC5hZGQge1xuICAgICAgICAgICAgdG9wOiA1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZ1bGxzY3JlZW4tYnRuIHtcbiAgICAgICAgICAgIHRvcDogNy44cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlbGVjdGlvbi1pbmZvIHtcbiAgICAgICAgICAgIHRvcDogNXJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmFkZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxLjI1cmVtO1xuICAgIHRvcDogMS4yNXJlbTtcbn1cblxuLmZ1bGxzY3JlZW4tYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEuMjVyZW07XG4gICAgdG9wOiAzLjc1cmVtO1xufVxuXG4uc2NhbGUtY29udHJvbHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEuMjVyZW07XG4gICAgcmlnaHQ6IDEuMjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC43NXJlbTtcbn1cblxuLnNjYWxlLXZhbHVlIHtcbiAgICBpbmxpbmUtc2l6ZTogMy4xMjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4uc2NhbGUtZmllbGQge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5zZWxlY3Rpb24taW5mbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMS4yNXJlbTtcbiAgICBsZWZ0OiAxLjI1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuMjVyZW07XG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICAgIG1pbi1pbmxpbmUtc2l6ZTogMTFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC43NXJlbSByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG4uc2VsZWN0aW9uLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMWYxZjFmO1xufVxuXG4uc2VsZWN0aW9uLXZhbHVlIHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGNvbG9yOiAjNTU1O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  encapsulation: 2,
  changeDetection: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorComponent);

/***/ })

}]);
//# sourceMappingURL=projects_demo_src_pages_examples_editor_editor_component_ts.js.map