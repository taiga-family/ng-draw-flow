"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_terms-and-definitions_terms-and-definitions_component_ts"],{

/***/ 88927:
/*!************************************************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/terms-and-definitions/examplaes/connections-example/connections-example.component.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _app_modules_nodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../app/modules/nodes */ 85989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
var _ConnectionsExampleComponent;





class ConnectionsExampleComponent {
  constructor() {
    this.data = {
      nodes: [{
        id: 'node-1',
        data: {
          type: 'simpleNode'
        },
        position: {
          x: -150,
          y: -50
        },
        startNode: true
      }, {
        id: 'node-2',
        data: {
          type: 'simpleNode'
        },
        position: {
          x: 150,
          y: 50
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
      }]
    };
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.data);
  }
}
_ConnectionsExampleComponent = ConnectionsExampleComponent;
_ConnectionsExampleComponent.ɵfac = function ConnectionsExampleComponent_Factory(t) {
  return new (t || _ConnectionsExampleComponent)();
};
_ConnectionsExampleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _ConnectionsExampleComponent,
  selectors: [["app-connections-example"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.provideNgDrawFlowConfigs)({
    nodes: {
      simpleNode: _app_modules_nodes__WEBPACK_IMPORTED_MODULE_1__.SimpleNodeComponent
    }
  })]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 1,
  vars: 1,
  consts: [[3, "formControl"]],
  template: function ConnectionsExampleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ng-draw-flow", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.form);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  block-size: 12.5rem;\n  background: #fff;\n  border-radius: 0.3125rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3Rpb25zLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBQ0oiLCJmaWxlIjoiY29ubmVjdGlvbnMtZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBibG9jay1zaXplOiAxMi41cmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zMTI1cmVtO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vdGVybXMtYW5kLWRlZmluaXRpb25zL2V4YW1wbGFlcy9jb25uZWN0aW9ucy1leGFtcGxlL2Nvbm5lY3Rpb25zLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUEsNGRBQTRkIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJsb2NrLXNpemU6IDEyLjVyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectionsExampleComponent);

/***/ }),

/***/ 22363:
/*!**********************************************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/terms-and-definitions/examplaes/connectors-example/connectors-example.component.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _nodes_connectors_connectors_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nodes/connectors/connectors.component */ 50955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
var _ConnectorsExampleComponent;





class ConnectorsExampleComponent {
  constructor() {
    this.data = {
      nodes: [{
        id: 'node-1',
        data: {
          type: 'connectors'
        },
        position: {
          x: 0,
          y: 0
        },
        startNode: true
      }],
      connections: []
    };
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.data);
  }
}
_ConnectorsExampleComponent = ConnectorsExampleComponent;
_ConnectorsExampleComponent.ɵfac = function ConnectorsExampleComponent_Factory(t) {
  return new (t || _ConnectorsExampleComponent)();
};
_ConnectorsExampleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _ConnectorsExampleComponent,
  selectors: [["app-connectors-example"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.provideNgDrawFlowConfigs)({
    nodes: {
      connectors: _nodes_connectors_connectors_component__WEBPACK_IMPORTED_MODULE_1__.ConnectorsComponent
    }
  })]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 1,
  vars: 1,
  consts: [[3, "formControl"]],
  template: function ConnectorsExampleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ng-draw-flow", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.form);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  block-size: 12.5rem;\n  background: #fff;\n  border-radius: 0.3125rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3RvcnMtZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFDSiIsImZpbGUiOiJjb25uZWN0b3JzLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmxvY2stc2l6ZTogMTIuNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vdGVybXMtYW5kLWRlZmluaXRpb25zL2V4YW1wbGFlcy9jb25uZWN0b3JzLWV4YW1wbGUvY29ubmVjdG9ycy1leGFtcGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBLDRkQUE0ZCIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBibG9jay1zaXplOiAxMi41cmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zMTI1cmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectorsExampleComponent);

/***/ }),

/***/ 84619:
/*!************************************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/terms-and-definitions/examplaes/nodes-example/nodes-example.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _nodes_node_node_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nodes/node/node.component */ 67323);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
var _NodesExampleComponent;





class NodesExampleComponent {
  constructor() {
    this.data = {
      nodes: [{
        id: 'node-1',
        data: {
          type: 'node',
          text: 'This is a node'
        },
        position: {
          x: 0,
          y: 0
        }
      }],
      connections: []
    };
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.data);
  }
}
_NodesExampleComponent = NodesExampleComponent;
_NodesExampleComponent.ɵfac = function NodesExampleComponent_Factory(t) {
  return new (t || _NodesExampleComponent)();
};
_NodesExampleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _NodesExampleComponent,
  selectors: [["app-nodes-example"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.provideNgDrawFlowConfigs)({
    nodes: {
      node: _nodes_node_node_component__WEBPACK_IMPORTED_MODULE_1__.NodeComponent
    }
  })]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 1,
  vars: 1,
  consts: [[3, "formControl"]],
  template: function NodesExampleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ng-draw-flow", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.form);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  block-size: 12.5rem;\n  background: #fff;\n  border-radius: 0.3125rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVzLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBQ0oiLCJmaWxlIjoibm9kZXMtZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBibG9jay1zaXplOiAxMi41cmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zMTI1cmVtO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vdGVybXMtYW5kLWRlZmluaXRpb25zL2V4YW1wbGFlcy9ub2Rlcy1leGFtcGxlL25vZGVzLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUEsNGNBQTRjIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJsb2NrLXNpemU6IDEyLjVyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NodesExampleComponent);

/***/ }),

/***/ 50955:
/*!************************************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/terms-and-definitions/examplaes/nodes/connectors/connectors.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectorsComponent: () => (/* binding */ ConnectorsComponent)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
var _ConnectorsComponent;


const _c0 = function (a0, a1) {
  return {
    nodeId: a0,
    connectorId: a1,
    single: false
  };
};
class ConnectorsComponent extends _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DrawFlowBaseNode {}
_ConnectorsComponent = ConnectorsComponent;
_ConnectorsComponent.ɵfac = /*@__PURE__*/function () {
  let ɵConnectorsComponent_BaseFactory;
  return function ConnectorsComponent_Factory(t) {
    return (ɵConnectorsComponent_BaseFactory || (ɵConnectorsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_ConnectorsComponent)))(t || _ConnectorsComponent);
  };
}();
_ConnectorsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _ConnectorsComponent,
  selectors: [["app-node"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 4,
  vars: 8,
  consts: [[1, "input", 3, "connectorData"], [1, "tui-text_body-xs", "text"], [1, "output", 3, "connectorData"]],
  template: function ConnectorsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "df-input", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "This node contains input and output connectors");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "df-output", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, ctx.nodeId, ctx.nodeId + "-input-1"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c0, ctx.nodeId, ctx.nodeId + "-output-1"));
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfInputComponent, _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfOutputComponent],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  background: #fff;\n  inline-size: 10rem;\n  box-shadow: var(--tui-shadow-small);\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  border: 0.0625rem solid transparent;\n  transition: border-color 0.2s ease-in-out;\n  color: #000;\n}\n.text[_ngcontent-%COMP%] {\n  inline-size: 100%;\n  text-align: center;\n  font-weight: bold;\n}\n.input[_ngcontent-%COMP%], .output[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n}\n.input[_ngcontent-%COMP%] {\n  left: -0.5rem;\n  top: 0.25rem;\n}\n.output-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.output[_ngcontent-%COMP%] {\n  right: -0.5rem;\n  top: auto;\n  bottom: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3RvcnMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7QUFDSjtBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUo7QUFHQTs7RUFFSSxrQkFBQTtFQUNBLFVBQUE7QUFESjtBQUlBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFGSjtBQUtBO0VBQ0ksa0JBQUE7QUFISjtBQU1BO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBSkoiLCJmaWxlIjoiY29ubmVjdG9ycy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgaW5saW5lLXNpemU6IDEwcmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXR1aS1zaGFkb3ctc21hbGwpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi50ZXh0IHtcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbnB1dCxcbi5vdXRwdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uaW5wdXQge1xuICAgIGxlZnQ6IC0wLjVyZW07XG4gICAgdG9wOiAwLjI1cmVtO1xufVxuXG4ub3V0cHV0LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm91dHB1dCB7XG4gICAgcmlnaHQ6IC0wLjVyZW07XG4gICAgdG9wOiBhdXRvO1xuICAgIGJvdHRvbTogMDtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vdGVybXMtYW5kLWRlZmluaXRpb25zL2V4YW1wbGFlcy9ub2Rlcy9jb25uZWN0b3JzL2Nvbm5lY3RvcnMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7QUFDSjtBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUo7QUFHQTs7RUFFSSxrQkFBQTtFQUNBLFVBQUE7QUFESjtBQUlBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFGSjtBQUtBO0VBQ0ksa0JBQUE7QUFISjtBQU1BO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBSko7O0FBRUEsNDNDQUE0M0MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGlubGluZS1zaXplOiAxMHJlbTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS10dWktc2hhZG93LXNtYWxsKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4udGV4dCB7XG4gICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW5wdXQsXG4ub3V0cHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmlucHV0IHtcbiAgICBsZWZ0OiAtMC41cmVtO1xuICAgIHRvcDogMC4yNXJlbTtcbn1cblxuLm91dHB1dC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5vdXRwdXQge1xuICAgIHJpZ2h0OiAtMC41cmVtO1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IDA7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});


/***/ }),

/***/ 67323:
/*!************************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/terms-and-definitions/examplaes/nodes/node/node.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeComponent: () => (/* binding */ NodeComponent)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
var _NodeComponent;


class NodeComponent extends _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DrawFlowBaseNode {}
_NodeComponent = NodeComponent;
_NodeComponent.ɵfac = /*@__PURE__*/function () {
  let ɵNodeComponent_BaseFactory;
  return function NodeComponent_Factory(t) {
    return (ɵNodeComponent_BaseFactory || (ɵNodeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_NodeComponent)))(t || _NodeComponent);
  };
}();
_NodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _NodeComponent,
  selectors: [["app-node"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 1,
  consts: [[1, "tui-text_body-xs", "text"]],
  template: function NodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.model.text);
    }
  },
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  background: #fff;\n  inline-size: 10rem;\n  box-shadow: var(--tui-shadow-small);\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  border: 0.2rem solid var(--df-connection-color);\n  transition: border-color 0.2s ease-in-out;\n  color: #000;\n}\n.df-selected[_nghost-%COMP%] {\n  border-color: var(--df-connection-color-active);\n}\n.text[_ngcontent-%COMP%] {\n  inline-size: 100%;\n  text-align: center;\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0NBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7QUFDSjtBQUNJO0VBQ0ksK0NBQUE7QUFDUjtBQUdBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBREoiLCJmaWxlIjoibm9kZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgaW5saW5lLXNpemU6IDEwcmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXR1aS1zaGFkb3ctc21hbGwpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyOiAwLjJyZW0gc29saWQgdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvcik7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgY29sb3I6ICMwMDA7XG5cbiAgICAmLmRmLXNlbGVjdGVkIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kZi1jb25uZWN0aW9uLWNvbG9yLWFjdGl2ZSk7XG4gICAgfVxufVxuXG4udGV4dCB7XG4gICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vdGVybXMtYW5kLWRlZmluaXRpb25zL2V4YW1wbGFlcy9ub2Rlcy9ub2RlL25vZGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0NBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7QUFDSjtBQUNJO0VBQ0ksK0NBQUE7QUFDUjtBQUdBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBRUEsd2lDQUF3aUMiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGlubGluZS1zaXplOiAxMHJlbTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS10dWktc2hhZG93LXNtYWxsKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlcjogMC4ycmVtIHNvbGlkIHZhcigtLWRmLWNvbm5lY3Rpb24tY29sb3IpO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGNvbG9yOiAjMDAwO1xuXG4gICAgJi5kZi1zZWxlY3RlZCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGYtY29ubmVjdGlvbi1jb2xvci1hY3RpdmUpO1xuICAgIH1cbn1cblxuLnRleHQge1xuICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});


/***/ }),

/***/ 70509:
/*!********************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/terms-and-definitions/terms-and-definitions.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ 71534);
/* harmony import */ var _examplaes_connections_example_connections_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examplaes/connections-example/connections-example.component */ 88927);
/* harmony import */ var _examplaes_connectors_example_connectors_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examplaes/connectors-example/connectors-example.component */ 22363);
/* harmony import */ var _examplaes_nodes_example_nodes_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./examplaes/nodes-example/nodes-example.component */ 84619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 94841);
var _TermsAndDefinitionsComponent;







class TermsAndDefinitionsComponent {}
_TermsAndDefinitionsComponent = TermsAndDefinitionsComponent;
_TermsAndDefinitionsComponent.ɵfac = function TermsAndDefinitionsComponent_Factory(t) {
  return new (t || _TermsAndDefinitionsComponent)();
};
_TermsAndDefinitionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _TermsAndDefinitionsComponent,
  selectors: [["terms-and-definitions"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 63,
  vars: 0,
  consts: [["header", "Terms and Definitions"], [1, "tui-list", "tui-list_small"], [1, "tui-list__item"], ["routerLink", "/documentation/connectors", "tuiLink", ""], ["routerLink", "/documentation/connections", "tuiLink", ""]],
  template: function TermsAndDefinitionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " In this part of the docs we are explaining some basic NgDrawFlow terms and definition. Three things you\u2019ll be using a lot in NgDrawFlow are nodes, connections, and connectors. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "section")(4, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Nodes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-nodes-example");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Node in NgDrawFlow is an Angular component. This means it can display anything you desire. Each node has X and Y coordinates that refer to the point at the center of the node, relative to the workspace. To create a node, you need to extend from ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "DrawFlowBaseNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " To delete a node, select it and press ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " or ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Backspace");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Some of the things you might do with a custom node are:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ul", 1)(22, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Render form elements");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Visualize data");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Support multiple connectors");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "section")(29, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Connectors");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "app-connectors-example");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " A Connector is used to link nodes together. By default they are displayed as blue circles but the colour can be changed using css variables. When creating a custom node, you may use as many connector handles as you need. The main requirement is that each connector has a unique name starting with its nodeId (example: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "node-1-input-1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " ). More information can be found in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " the connector documentation ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Connectors are divided into two types: input connectors and output connectors.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, " To connect two nodes, simply drag an output connector from one node to an input connector of another node. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "section")(45, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Connections");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "app-connections-example");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, " A Connection links two nodes together. It is represented by a Bezier curve. An edge is an SVG path, allowing its line thickness and color to be adjusted through CSS variables. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, " More details can be found in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, " the connection lines documentation ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, " To delete a connection, select it and press the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, " or ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Backspace key");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_examplaes_connections_example_connections_example_component__WEBPACK_IMPORTED_MODULE_0__["default"], _examplaes_connectors_example_connectors_example_component__WEBPACK_IMPORTED_MODULE_1__["default"], _examplaes_nodes_example_nodes_example_component__WEBPACK_IMPORTED_MODULE_2__["default"], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_5__.TuiDocPage, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__.TuiLink],
  encapsulation: 2,
  changeDetection: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TermsAndDefinitionsComponent);

/***/ })

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_terms-and-definitions_terms-and-definitions_component_ts.js.map