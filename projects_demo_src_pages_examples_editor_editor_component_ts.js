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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 9191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 5577);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core */ 1498);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ 5592);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5536);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 4841);
var _EditorComponent;










const _c0 = function (a0) {
  return {
    fullscreen: a0
  };
};
class EditorComponent {
  constructor() {
    this.customNodeExample = {
      Typescript: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_examples_editor_examples_editor_component_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/editor.component.md?raw */ 9749, 17)),
      Styles: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_examples_editor_editor_component_less_ngResource").then(__webpack_require__.t.bind(__webpack_require__, /*! ./editor.component.less?raw */ 9555, 17)),
      Template: __webpack_require__.e(/*! import() */ "projects_demo_src_pages_examples_editor_examples_editor_template_md_raw").then(__webpack_require__.t.bind(__webpack_require__, /*! ./examples/editor.template.md?raw */ 3696, 17))
    };
    this.data = {
      nodes: new Map().set('node-1', {
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
      }).set('node-2', {
        id: 'node-2',
        data: {
          type: 'simpleNode',
          text: 'This child node 1'
        },
        position: {
          x: 250,
          y: 50
        }
      }).set('node-3', {
        id: 'node-3',
        data: {
          type: 'simpleNode',
          text: 'This child node 2'
        },
        position: {
          x: 250,
          y: -50
        }
      }).set('node-4', {
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
      }),
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
    this.currentScale$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(100);
    this.fullscreen$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    this.counter = 0;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.data, [(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.dfCycleDetectionValidator)(), (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.dfIsolatedNodesValidator)()]);
  }
  ngOnInit() {
    this.form.statusChanges.subscribe(v => {
      console.warn(v, 'onStatusChange');
    });
    this.form.valueChanges.subscribe(v => {
      console.warn(v, 'onValueChange');
    });
  }
  onScaleChange(zoomLevel) {
    this.currentScale$.next(zoomLevel);
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
    this.editor?.resetPosition();
  }
  addNodeToDrawFlow() {
    const id = `new-node-id-${this.counter}`;
    this.data.nodes.set(id, {
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
_EditorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _EditorComponent,
  selectors: [["editor"]],
  viewQuery: function EditorComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.NgDrawFlowComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.editor = _t.first);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.dfPanZoomOptionsProvider)({
    leftPosition: 50
  })]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 20,
  vars: 13,
  consts: [["header", "Editor"], [1, "tui-space_top-4"], [2, "padding", "0", 3, "content"], [1, "editor", 3, "ngClass"], [3, "formControl", "connectionCreated", "connectionDeleted", "connectionSelected", "nodeDeleted", "nodeMoved", "nodeSelected", "scale"], ["size", "s", "tuiButton", "", "type", "button", 1, "add", 3, "click"], ["size", "s", "tuiButton", "", "type", "button", 1, "fullscreen-btn", 3, "click"], [1, "scale-controls"], ["size", "s", "tuiButton", "", "type", "button", 3, "click"], [1, "scale-value"]],
  template: function EditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tui-doc-page", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Our graph editor is built to serve as an API-first platform, enabling developers to design their own UI elements and interact with the graph through exposed methods. This approach allows for the addition of new nodes and control over the zoom level, complete with the ability to display the current zoom, all while providing a customizable experience tailored to your application's needs. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "section", 1)(3, "tui-doc-example", 2)(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ng-draw-flow", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("connectionCreated", function EditorComponent_Template_ng_draw_flow_connectionCreated_6_listener($event) {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_7_listener() {
        return ctx.addNodeToDrawFlow();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Add node ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_9_listener() {
        return ctx.toggleFullscreen();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7)(13, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_13_listener() {
        return ctx.editor == null ? null : ctx.editor.zoomOut();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " zoomOut ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_18_listener() {
        return ctx.editor == null ? null : ctx.editor.zoomIn();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " zomIn ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("content", ctx.customNodeExample);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 5, ctx.fullscreen$)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 7, ctx.fullscreen$) ? "Exit from fullscreen" : "Fullscreen", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 9, ctx.currentScale$), "%");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, ngx_markdown__WEBPACK_IMPORTED_MODULE_5__.MarkdownModule, _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_6__.TuiDocExample, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_6__.TuiDocPage, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__.TuiButton],
  styles: [".editor {\n  position: relative;\n  block-size: 31.25rem;\n  inline-size: 100%;\n  margin: 0 auto;\n  background: #fff;\n}\n.editor.fullscreen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  inline-size: 100%;\n  block-size: 100%;\n  background-color: #fff;\n}\n.editor.fullscreen .add {\n  top: 5rem;\n}\n.editor.fullscreen .fullscreen-btn {\n  top: 7.8rem;\n}\n.add {\n  position: absolute;\n  right: 1.25rem;\n  top: 1.25rem;\n}\n.fullscreen-btn {\n  position: absolute;\n  right: 1.25rem;\n  top: 3.75rem;\n}\n.scale-controls {\n  position: absolute;\n  bottom: 1.25rem;\n  right: 1.25rem;\n  display: flex;\n  align-items: center;\n}\n.scale-value {\n  inline-size: 3.125rem;\n  text-align: center;\n  color: #333;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBQ1I7QUFSSTtFQVVRLFNBQUE7QUFDWjtBQVhJO0VBY1EsV0FBQTtBQUFaO0FBS0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBSEo7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFKSjtBQU9BO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUxKO0FBUUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQU5KIiwiZmlsZSI6ImVkaXRvci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3Ige1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBibG9jay1zaXplOiAzMS4yNXJlbTtcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICAgJi5mdWxsc2NyZWVuIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgICAgICBibG9jay1zaXplOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG4gICAgICAgIC5hZGQge1xuICAgICAgICAgICAgdG9wOiA1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZ1bGxzY3JlZW4tYnRuIHtcbiAgICAgICAgICAgIHRvcDogNy44cmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYWRkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEuMjVyZW07XG4gICAgdG9wOiAxLjI1cmVtO1xufVxuXG4uZnVsbHNjcmVlbi1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMS4yNXJlbTtcbiAgICB0b3A6IDMuNzVyZW07XG59XG5cbi5zY2FsZS1jb250cm9scyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMS4yNXJlbTtcbiAgICByaWdodDogMS4yNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zY2FsZS12YWx1ZSB7XG4gICAgaW5saW5lLXNpemU6IDMuMTI1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzMzMztcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2V4YW1wbGVzL2VkaXRvci9lZGl0b3IuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNJO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUNSO0FBUkk7RUFVUSxTQUFBO0FBQ1o7QUFYSTtFQWNRLFdBQUE7QUFBWjtBQUtBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUhKO0FBTUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBSko7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQVFBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFOSjs7QUFFQSw0ekRBQTR6RCIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3Ige1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBibG9jay1zaXplOiAzMS4yNXJlbTtcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICAgJi5mdWxsc2NyZWVuIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgICAgICBibG9jay1zaXplOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG4gICAgICAgIC5hZGQge1xuICAgICAgICAgICAgdG9wOiA1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZ1bGxzY3JlZW4tYnRuIHtcbiAgICAgICAgICAgIHRvcDogNy44cmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYWRkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEuMjVyZW07XG4gICAgdG9wOiAxLjI1cmVtO1xufVxuXG4uZnVsbHNjcmVlbi1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMS4yNXJlbTtcbiAgICB0b3A6IDMuNzVyZW07XG59XG5cbi5zY2FsZS1jb250cm9scyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMS4yNXJlbTtcbiAgICByaWdodDogMS4yNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zY2FsZS12YWx1ZSB7XG4gICAgaW5saW5lLXNpemU6IDMuMTI1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzMzMztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  encapsulation: 2,
  changeDetection: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorComponent);

/***/ })

}]);
//# sourceMappingURL=projects_demo_src_pages_examples_editor_editor_component_ts.js.map