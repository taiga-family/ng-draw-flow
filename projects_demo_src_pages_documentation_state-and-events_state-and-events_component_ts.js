"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_state-and-events_state-and-events_component_ts"],{

/***/ 64458
/*!********************************************************!*\
  !*** ./examples/state-events-example.component.ts?raw ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StateEventsExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ 11498);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ 28613);
/* harmony import */ var _app_modules_nodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app/modules/nodes */ 85989);
var _StateEventsExampleComponent;







const _forTrack0 = ($index, $item) => $item.id;
function StateEventsExampleComponent_For_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r1.text);
  }
}
class StateEventsExampleComponent {
  constructor() {
    this.eventEntries = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([{
      id: 0,
      text: 'Editor ready'
    }]);
    this.eventId = 0;
    this.nodeId = 3;
    this.store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.NgDrawFlowStoreService);
    this.events = this.eventEntries.asReadonly();
    this.selectedConnection = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const connection = this.store.selectedConnection();
      return connection ? `${connection.source.nodeId} -> ${connection.target.nodeId}` : 'None';
    });
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.createModel(), {
      nonNullable: true
    });
  }
  addNode() {
    const model = this.form.getRawValue();
    const id = `node-${this.nodeId++}`;
    const node = {
      id,
      data: {
        type: 'simpleNode',
        text: `Node ${id.slice(5)}`
      }
    };
    this.store.setDataModel({
      ...model,
      nodes: [...model.nodes, node]
    });
    this.record(`Added ${id}`);
  }
  removeSelectedNode() {
    const node = this.store.selectedNode();
    if (node) {
      this.store.removeNode(node.id);
    }
  }
  recordScale(scale) {
    this.record(`Scale ${scale}%`);
  }
  recordNode(action, node) {
    this.record(`${action}: ${node.id}`);
  }
  recordNodeEvent(action, event) {
    this.record(`${action}: ${event.target.id}`);
  }
  recordConnection(action, connection) {
    this.record(`${action}: ${connection.source.nodeId} -> ${connection.target.nodeId}`);
  }
  recordConnectionEvent(action, event) {
    this.recordConnection(action, event.target);
  }
  record(text) {
    this.eventEntries.update(events => [{
      id: ++this.eventId,
      text
    }, ...events.slice(0, 5)]);
  }
  createModel() {
    return {
      nodes: [{
        id: 'node-1',
        data: {
          type: 'simpleNode',
          text: 'Source'
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
          text: 'Target'
        },
        position: {
          x: 260,
          y: 80
        },
        endNode: true
      }],
      connections: [{
        source: {
          nodeId: 'node-1',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.DfConnectionPoint.Output,
          connectorId: 'node-1-output-1'
        },
        target: {
          nodeId: 'node-2',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.DfConnectionPoint.Input,
          connectorId: 'node-2-input-1'
        }
      }]
    };
  }
}
_StateEventsExampleComponent = StateEventsExampleComponent;
_StateEventsExampleComponent.ɵfac = function StateEventsExampleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StateEventsExampleComponent)();
};
_StateEventsExampleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _StateEventsExampleComponent,
  selectors: [["state-events-example"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.NgDrawFlowStoreService, (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.dfPanZoomOptionsProvider)({
    leftPosition: 40
  }), (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.provideNgDrawFlowConfigs)({
    connection: {
      type: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.DfConnectionType.SmoothStep,
      arrowhead: {
        type: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.DfArrowhead.ArrowClosed
      },
      curvature: 12
    },
    nodes: {
      simpleNode: _app_modules_nodes__WEBPACK_IMPORTED_MODULE_5__.SimpleNodeComponent
    },
    positionAnimation: {
      duration: 220,
      easing: 'ease-in-out'
    }
  })])],
  decls: 48,
  vars: 6,
  consts: [[1, "toolbar"], ["appearance", "secondary", "size", "s", "tuiButton", "", "type", "button", 3, "click"], ["icon", "@tui.minus"], ["icon", "@tui.plus"], ["icon", "@tui.rotate-ccw"], ["appearance", "primary", "size", "s", "tuiButton", "", "type", "button", 3, "click"], ["icon", "@tui.circle-plus"], ["appearance", "secondary", "size", "s", "tuiButton", "", "type", "button", 3, "click", "disabled"], ["icon", "@tui.trash-2"], [1, "workspace"], [1, "editor"], [3, "connectionCreated", "connectionDeleted", "connectionSelected", "nodeDeleted", "nodeMoved", "nodeSelected", "scale", "formControl"], [1, "inspector"]],
  template: function StateEventsExampleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StateEventsExampleComponent_Template_button_click_1_listener() {
        return ctx.store.zoomOut();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Zoom out ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StateEventsExampleComponent_Template_button_click_4_listener() {
        return ctx.store.zoomIn();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Zoom in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StateEventsExampleComponent_Template_button_click_7_listener() {
        return ctx.store.resetPosition();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Reset ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StateEventsExampleComponent_Template_button_click_10_listener() {
        return ctx.addNode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Add node ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StateEventsExampleComponent_Template_button_click_13_listener() {
        return ctx.removeSelectedNode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "tui-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Remove selected ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9)(17, "div", 10)(18, "ng-draw-flow", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("connectionCreated", function StateEventsExampleComponent_Template_ng_draw_flow_connectionCreated_18_listener($event) {
        return ctx.recordConnectionEvent("Created edge", $event);
      })("connectionDeleted", function StateEventsExampleComponent_Template_ng_draw_flow_connectionDeleted_18_listener($event) {
        return ctx.recordConnectionEvent("Deleted edge", $event);
      })("connectionSelected", function StateEventsExampleComponent_Template_ng_draw_flow_connectionSelected_18_listener($event) {
        return ctx.recordConnection("Selected edge", $event);
      })("nodeDeleted", function StateEventsExampleComponent_Template_ng_draw_flow_nodeDeleted_18_listener($event) {
        return ctx.recordNodeEvent("Deleted node", $event);
      })("nodeMoved", function StateEventsExampleComponent_Template_ng_draw_flow_nodeMoved_18_listener($event) {
        return ctx.recordNodeEvent("Moved node", $event);
      })("nodeSelected", function StateEventsExampleComponent_Template_ng_draw_flow_nodeSelected_18_listener($event) {
        return ctx.recordNode("Selected node", $event);
      })("scale", function StateEventsExampleComponent_Template_ng_draw_flow_scale_18_listener($event) {
        return ctx.recordScale($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "aside", 12)(20, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Live state");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "dl")(23, "div")(24, "dt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Scale");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "dd");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div")(29, "dt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Selected node");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "dd");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div")(34, "dt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Selected edge");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "dd");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div")(39, "dt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Nodes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "dd");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Recent events");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ol");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](46, StateEventsExampleComponent_For_47_Template, 2, 1, "li", null, _forTrack0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_5_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.store.selectedNode());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.store.scale(), "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((tmp_3_0 = (tmp_3_0 = ctx.store.selectedNode()) == null ? null : tmp_3_0.id) !== null && tmp_3_0 !== undefined ? tmp_3_0 : "None");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedConnection());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((tmp_5_0 = (tmp_5_0 = ctx.store.dataModel()) == null ? null : tmp_5_0.nodes == null ? null : tmp_5_0.nodes.length) !== null && tmp_5_0 !== undefined ? tmp_5_0 : 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.events());
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__.TuiButton, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__.TuiIcon],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  background: var(--tui-background-base);\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  border-block-end: 0.0625rem solid var(--tui-border-normal);\n}\n.workspace[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 16rem;\n  min-block-size: 28rem;\n}\n.editor[_ngcontent-%COMP%] {\n  min-inline-size: 0;\n  background: #fff;\n}\n.inspector[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: var(--tui-background-neutral-1);\n  border-inline-start: 0.0625rem solid var(--tui-border-normal);\n}\n.inspector[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-block: 0 0.75rem;\n  font-size: 1rem;\n}\n.inspector[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]    + ol[_ngcontent-%COMP%], \n.inspector[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]    + dl[_ngcontent-%COMP%] {\n  margin-block-start: 0;\n}\n.inspector[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n  margin-block-end: 1.5rem;\n}\n.inspector[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.inspector[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--tui-text-secondary);\n}\n.inspector[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: end;\n}\n.inspector[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.375rem;\n  padding-inline-start: 1.25rem;\n  font-size: 0.8125rem;\n}\n@media (max-width: 50rem) {\n  .workspace[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .editor[_ngcontent-%COMP%] {\n    block-size: 24rem;\n  }\n  .inspector[_ngcontent-%COMP%] {\n    border-block-start: 0.0625rem solid var(--tui-border-normal);\n    border-inline-start: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlLWV2ZW50cy1leGFtcGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLHNDQUFBO0FBQ0o7QUFFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMERBQUE7QUFBSjtBQUdBO0VBQ0ksYUFBQTtFQUNBLDJDQUFBO0VBQ0EscUJBQUE7QUFESjtBQUlBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUZKO0FBS0E7RUFDSSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSw2REFBQTtBQUhKO0FBQUE7RUFNUSx1QkFBQTtFQUNBLGVBQUE7QUFIUjtBQUpBOztFQVlRLHFCQUFBO0FBSlI7QUFSQTtFQWdCUSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0FBTFI7QUFiQTtFQXNCUSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBTlI7QUFsQkE7RUE0QlEsZ0NBQUE7QUFQUjtBQXJCQTtFQWdDUSxTQUFBO0VBQ0EsZUFBQTtBQVJSO0FBekJBO0VBcUNRLGFBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtBQVRSO0FBYUE7RUFDSTtJQUNJLDBCQUFBO0VBWE47RUFjRTtJQUNJLGlCQUFBO0VBWk47RUFlRTtJQUNJLDREQUFBO0lBQ0Esc0JBQUE7RUFiTjtBQUNGIiwiZmlsZSI6InN0YXRlLWV2ZW50cy1leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1iYWNrZ3JvdW5kLWJhc2UpO1xufVxuXG4udG9vbGJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgcGFkZGluZzogMC43NXJlbTtcbiAgICBib3JkZXItYmxvY2stZW5kOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tdHVpLWJvcmRlci1ub3JtYWwpO1xufVxuXG4ud29ya3NwYWNlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgMTZyZW07XG4gICAgbWluLWJsb2NrLXNpemU6IDI4cmVtO1xufVxuXG4uZWRpdG9yIHtcbiAgICBtaW4taW5saW5lLXNpemU6IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmluc3BlY3RvciB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktYmFja2dyb3VuZC1uZXV0cmFsLTEpO1xuICAgIGJvcmRlci1pbmxpbmUtc3RhcnQ6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS10dWktYm9yZGVyLW5vcm1hbCk7XG5cbiAgICBoMyB7XG4gICAgICAgIG1hcmdpbi1ibG9jazogMCAwLjc1cmVtO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuXG4gICAgaDMgKyBvbCxcbiAgICBoMyArIGRsIHtcbiAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICAgIH1cblxuICAgIGRsIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ2FwOiAwLjVyZW07XG4gICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDEuNXJlbTtcbiAgICB9XG5cbiAgICBkbCA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgZ2FwOiAxcmVtO1xuICAgIH1cblxuICAgIGR0IHtcbiAgICAgICAgY29sb3I6IHZhcigtLXR1aS10ZXh0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgZGQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB9XG5cbiAgICBvbCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdhcDogMC4zNzVyZW07XG4gICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxLjI1cmVtO1xuICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MHJlbSkge1xuICAgIC53b3Jrc3BhY2Uge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG5cbiAgICAuZWRpdG9yIHtcbiAgICAgICAgYmxvY2stc2l6ZTogMjRyZW07XG4gICAgfVxuXG4gICAgLmluc3BlY3RvciB7XG4gICAgICAgIGJvcmRlci1ibG9jay1zdGFydDogMC4wNjI1cmVtIHNvbGlkIHZhcigtLXR1aS1ib3JkZXItbm9ybWFsKTtcbiAgICAgICAgYm9yZGVyLWlubGluZS1zdGFydDogMDtcbiAgICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vc3RhdGUtYW5kLWV2ZW50cy9leGFtcGxlcy9zdGF0ZS1ldmVudHMtZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxzQ0FBQTtBQUNKO0FBRUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBEQUFBO0FBQUo7QUFHQTtFQUNJLGFBQUE7RUFDQSwyQ0FBQTtFQUNBLHFCQUFBO0FBREo7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQUtBO0VBQ0ksYUFBQTtFQUNBLDJDQUFBO0VBQ0EsNkRBQUE7QUFISjtBQUFBO0VBTVEsdUJBQUE7RUFDQSxlQUFBO0FBSFI7QUFKQTs7RUFZUSxxQkFBQTtBQUpSO0FBUkE7RUFnQlEsYUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtBQUxSO0FBYkE7RUFzQlEsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQU5SO0FBbEJBO0VBNEJRLGdDQUFBO0FBUFI7QUFyQkE7RUFnQ1EsU0FBQTtFQUNBLGVBQUE7QUFSUjtBQXpCQTtFQXFDUSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7QUFUUjtBQWFBO0VBQ0k7SUFDSSwwQkFBQTtFQVhOO0VBY0U7SUFDSSxpQkFBQTtFQVpOO0VBZUU7SUFDSSw0REFBQTtJQUNBLHNCQUFBO0VBYk47QUFDRjs7QUFFQSw0NEZBQTQ0RiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktYmFja2dyb3VuZC1iYXNlKTtcbn1cblxuLnRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMC41cmVtO1xuICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgYm9yZGVyLWJsb2NrLWVuZDogMC4wNjI1cmVtIHNvbGlkIHZhcigtLXR1aS1ib3JkZXItbm9ybWFsKTtcbn1cblxuLndvcmtzcGFjZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIDE2cmVtO1xuICAgIG1pbi1ibG9jay1zaXplOiAyOHJlbTtcbn1cblxuLmVkaXRvciB7XG4gICAgbWluLWlubGluZS1zaXplOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5pbnNwZWN0b3Ige1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHVpLWJhY2tncm91bmQtbmV1dHJhbC0xKTtcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0OiAwLjA2MjVyZW0gc29saWQgdmFyKC0tdHVpLWJvcmRlci1ub3JtYWwpO1xuXG4gICAgaDMge1xuICAgICAgICBtYXJnaW4tYmxvY2s6IDAgMC43NXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgIGgzICsgb2wsXG4gICAgaDMgKyBkbCB7XG4gICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcbiAgICB9XG5cbiAgICBkbCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdhcDogMC41cmVtO1xuICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAxLjVyZW07XG4gICAgfVxuXG4gICAgZGwgPiBkaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGdhcDogMXJlbTtcbiAgICB9XG5cbiAgICBkdCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgIGRkIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgfVxuXG4gICAgb2wge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBnYXA6IDAuMzc1cmVtO1xuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMS4yNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTByZW0pIHtcbiAgICAud29ya3NwYWNlIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuXG4gICAgLmVkaXRvciB7XG4gICAgICAgIGJsb2NrLXNpemU6IDI0cmVtO1xuICAgIH1cblxuICAgIC5pbnNwZWN0b3Ige1xuICAgICAgICBib3JkZXItYmxvY2stc3RhcnQ6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS10dWktYm9yZGVyLW5vcm1hbCk7XG4gICAgICAgIGJvcmRlci1pbmxpbmUtc3RhcnQ6IDA7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ },

/***/ 42541
/*!**********************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/state-and-events/state-and-events.component.ts ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StateAndEventsComponent)
/* harmony export */ });
/* harmony import */ var _examples_state_events_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examples/state-events-example.component */ 64458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 94841);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ 90795);
var _StateAndEventsComponent;




class StateAndEventsComponent {
  constructor() {
    this.examples = {
      componentEvents: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_state-and-events_examples_component-events_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/component-events.md?raw */ 52947, 17)),
      localStore: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_state-and-events_examples_local-store_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/local-store.md?raw */ 68259, 17)),
      storeSignals: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_state-and-events_examples_store-signals_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/store-signals.md?raw */ 68929, 17)),
      interactive: {
        TypeScript: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_state-and-events_examples_state-events-example_componen-215ecb").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/state-events-example.component.ts?raw */ 77175, 17)),
        Template: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_state-and-events_examples_state-events-example_componen-b97cd0").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/state-events-example.component.html?raw */ 39015, 17)),
        Styles: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_documentation_state-and-events_examples_state-events-example_componen-c064e1").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/state-events-example.component.less?raw */ 85767, 17))
      }
    };
  }
}
_StateAndEventsComponent = StateAndEventsComponent;
_StateAndEventsComponent.ɵfac = function StateAndEventsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StateAndEventsComponent)();
};
_StateAndEventsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _StateAndEventsComponent,
  selectors: [["app-state-and-events"]],
  decls: 195,
  vars: 4,
  consts: [["header", "State & Events"], [1, "docs-lead"], [1, "docs-summary"], ["appearance", "info", "size", "m", "tuiNotification", ""], [2, "padding", "0", 3, "content"], ["filename", "editor.component.html", 3, "code"], [1, "tui-list", "tui-list_extra-small"], [1, "tui-list__item"], ["filename", "toolbar.component.ts", 3, "code"], ["filename", "editor-host.component.ts", 3, "code"]],
  template: function StateAndEventsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "section")(2, "p", 1)(3, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "ng-draw-flow");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " is a ControlValueAccessor. Use an Angular form control as the source of truth, component outputs for local template reactions, and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "NgDrawFlowStoreService");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " when controls or observers live outside the editor component. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2)(10, "div")(11, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Form control");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Persistent graph state and application-side mutations.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div")(16, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Component outputs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Template-local reactions to user interactions.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div")(21, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Store facade");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Signal snapshots, RxJS events and commands for surrounding UI.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "section", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Treat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "DfDataModel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " as immutable application state. Replace node, connection and position objects when updating the control so Angular and the editor can reconcile them predictably. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "section")(31, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Interactive State Inspector");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Select and drag nodes, select an edge, use the camera controls, add a node, or remove the selected node. The inspector reads signals from the store while the event list is populated from component outputs. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "tui-doc-example", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "state-events-example");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "section")(38, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Component Outputs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Use outputs when the editor and its consumer share a template. Mutation events contain both the affected item and the complete resulting model through ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "DfEvent<T>");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " . Selection events return the selected item directly. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "tui-doc-code", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ul", 6)(47, "li", 7)(48, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "scale");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " : current zoom percentage, where 100 is actual size. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "li", 7)(52, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "nodeSelected");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " : selected ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "DfDataNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "li", 7)(59, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "connectionSelected");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " : selected ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "DfDataConnection");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li", 7)(66, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "nodeMoved");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "nodeDeleted");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "DfEvent<DfDataNode>");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "li", 7)(76, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "connectionCreated");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "connectionDeleted");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "DfEvent<DfDataConnection>");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "section")(86, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Signal-first Store");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " The root-scoped store mirrors live editor state. Every long-lived snapshot is available as an Angular signal and, where useful, as an RxJS stream. Event streams have a matching last-event signal for computed state and OnPush templates. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "tui-doc-code", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "ul", 6)(92, "li", 7)(93, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "dataModel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, " / ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "dataModel$");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "li", 7)(99, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "selectedNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, " / ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "selectedNode$");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "li", 7)(105, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "selectedConnection");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, " / ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "selectedConnection$");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "li", 7)(111, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "scale");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, " / ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "scale$");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "hasSelection");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "li", 7)(120, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "lastNodeMoved");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "lastNodeDeleted");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "lastNodeSelected");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "li", 7)(129, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "lastConnectionCreated");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "lastConnectionDeleted");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "lastConnectionSelected");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "section")(138, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Store Commands");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "p")(141, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "zoomIn()");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "zoomOut()");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "resetPosition()");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "setPosition()");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "setScale()");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "setDataModel()");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "removeNode()");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "removeConnection()");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "setDataModel()");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, " forward to the attached editor. Model replacement preserves node selection by node id and connection selection by source and target connector endpoints while those items still exist. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, " Read scale signals and events as percentages, but pass a factor to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "setScale()");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, " and the optional ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "setPosition().zoom");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, " field. For example, read ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "75");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, " for 75% and write ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "0.75");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, " to restore it. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, " Disable the bound form control to disable editor interaction while keeping the current graph rendered: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "form.disable()");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "section", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, " Use the form control as the persistent source of truth. Store snapshots are cloned runtime views intended for computed UI state and commands, not objects to mutate in place. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "section")(190, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Multiple Editors");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, " A root-scoped store controls the currently attached editor. When a page contains independent editors, scope one store instance to each editor host through component providers. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](194, "tui-doc-code", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx.examples.interactive);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.examples.componentEvents);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.examples.storeSignals);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](104);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx.examples.localStore);
    }
  },
  dependencies: [_examples_state_events_example_component__WEBPACK_IMPORTED_MODULE_0__["default"], _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_2__.TuiDocCode, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_2__.TuiDocExample, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_2__.TuiDocPage, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__.TuiNotificationDirective],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[tuiNotification][_ngcontent-%COMP%], \ntui-doc-code[_ngcontent-%COMP%] {\n  display: block;\n  margin-block: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlLWFuZC1ldmVudHMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7QUFFQTs7RUFFSSxjQUFBO0VBQ0Esa0JBQUE7QUFBSiIsImZpbGUiOiJzdGF0ZS1hbmQtZXZlbnRzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5bdHVpTm90aWZpY2F0aW9uXSxcbnR1aS1kb2MtY29kZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJsb2NrOiAxcmVtO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vc3RhdGUtYW5kLWV2ZW50cy9zdGF0ZS1hbmQtZXZlbnRzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKO0FBRUE7O0VBRUksY0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUEsNGRBQTRkIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5bdHVpTm90aWZpY2F0aW9uXSxcbnR1aS1kb2MtY29kZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJsb2NrOiAxcmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_state-and-events_state-and-events_component_ts.js.map