"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_terms-and-definitions_terms-and-definitions_component_ts"],{

/***/ 88927
/*!************************************************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/terms-and-definitions/examplaes/connections-example/connections-example.component.ts ***!
  \************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConnectionsExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _app_modules_nodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/modules/nodes */ 85989);
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
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Output,
          connectorId: 'node-1-output-1'
        },
        target: {
          nodeId: 'node-2',
          connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfConnectionPoint.Input,
          connectorId: 'node-2-input-1'
        }
      }]
    };
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(this.data);
  }
}
_ConnectionsExampleComponent = ConnectionsExampleComponent;
_ConnectionsExampleComponent.ɵfac = function ConnectionsExampleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConnectionsExampleComponent)();
};
_ConnectionsExampleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _ConnectionsExampleComponent,
  selectors: [["app-connections-example"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.provideNgDrawFlowConfigs)({
    nodes: {
      simpleNode: _app_modules_nodes__WEBPACK_IMPORTED_MODULE_2__.SimpleNodeComponent
    }
  })])],
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
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  block-size: 12.5rem;\n  background: #fff;\n  border-radius: 0.3125rem;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vdGVybXMtYW5kLWRlZmluaXRpb25zL2V4YW1wbGFlcy9jb25uZWN0aW9ucy1leGFtcGxlL2Nvbm5lY3Rpb25zLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmxvY2stc2l6ZTogMTIuNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ },

/***/ 22363
/*!**********************************************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/terms-and-definitions/examplaes/connectors-example/connectors-example.component.ts ***!
  \**********************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConnectorsExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _nodes_connectors_connectors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nodes/connectors/connectors.component */ 50955);
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
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(this.data);
  }
}
_ConnectorsExampleComponent = ConnectorsExampleComponent;
_ConnectorsExampleComponent.ɵfac = function ConnectorsExampleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConnectorsExampleComponent)();
};
_ConnectorsExampleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _ConnectorsExampleComponent,
  selectors: [["app-connectors-example"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.provideNgDrawFlowConfigs)({
    nodes: {
      connectors: _nodes_connectors_connectors_component__WEBPACK_IMPORTED_MODULE_2__.ConnectorsComponent
    }
  })])],
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
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  block-size: 12.5rem;\n  background: #fff;\n  border-radius: 0.3125rem;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vdGVybXMtYW5kLWRlZmluaXRpb25zL2V4YW1wbGFlcy9jb25uZWN0b3JzLWV4YW1wbGUvY29ubmVjdG9ycy1leGFtcGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJsb2NrLXNpemU6IDEyLjVyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ },

/***/ 84619
/*!************************************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/terms-and-definitions/examplaes/nodes-example/nodes-example.component.ts ***!
  \************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NodesExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _nodes_node_node_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nodes/node/node.component */ 67323);
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
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(this.data);
  }
}
_NodesExampleComponent = NodesExampleComponent;
_NodesExampleComponent.ɵfac = function NodesExampleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NodesExampleComponent)();
};
_NodesExampleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _NodesExampleComponent,
  selectors: [["app-nodes-example"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.provideNgDrawFlowConfigs)({
    nodes: {
      node: _nodes_node_node_component__WEBPACK_IMPORTED_MODULE_2__.NodeComponent
    }
  })])],
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
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  block-size: 12.5rem;\n  background: #fff;\n  border-radius: 0.3125rem;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vdGVybXMtYW5kLWRlZmluaXRpb25zL2V4YW1wbGFlcy9ub2Rlcy1leGFtcGxlL25vZGVzLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmxvY2stc2l6ZTogMTIuNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ },

/***/ 50955
/*!************************************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/terms-and-definitions/examplaes/nodes/connectors/connectors.component.ts ***!
  \************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectorsComponent: () => (/* binding */ ConnectorsComponent)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
var _ConnectorsComponent;


const _c0 = (a0, a1) => ({
  nodeId: a0,
  connectorId: a1,
  single: false
});
class ConnectorsComponent extends _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DrawFlowBaseNode {}
_ConnectorsComponent = ConnectorsComponent;
_ConnectorsComponent.ɵfac = /*@__PURE__*/(() => {
  let ɵConnectorsComponent_BaseFactory;
  return function ConnectorsComponent_Factory(__ngFactoryType__) {
    return (ɵConnectorsComponent_BaseFactory || (ɵConnectorsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_ConnectorsComponent)))(__ngFactoryType__ || _ConnectorsComponent);
  };
})();
_ConnectorsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _ConnectorsComponent,
  selectors: [["app-node"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
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
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  inline-size: 10rem;\n}\n.text[_ngcontent-%COMP%] {\n  inline-size: 100%;\n  text-align: center;\n  font-weight: bold;\n}\n.input[_ngcontent-%COMP%], \n.output[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n}\n.input[_ngcontent-%COMP%] {\n  inset-inline-start: -0.5rem;\n  inset-block-start: 0.25rem;\n}\n.output-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.output[_ngcontent-%COMP%] {\n  inset-inline-end: -0.5rem;\n  inset-block: auto 0;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vdGVybXMtYW5kLWRlZmluaXRpb25zL2V4YW1wbGFlcy9ub2Rlcy9jb25uZWN0b3JzL2Nvbm5lY3RvcnMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUo7QUFHQTs7RUFFSSxrQkFBQTtFQUNBLFVBQUE7QUFESjtBQUlBO0VBQ0ksMkJBQUE7RUFDQSwwQkFBQTtBQUZKO0FBS0E7RUFDSSxrQkFBQTtBQUhKO0FBTUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FBSkoiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBpbmxpbmUtc2l6ZTogMTByZW07XG59XG5cbi50ZXh0IHtcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbnB1dCxcbi5vdXRwdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uaW5wdXQge1xuICAgIGluc2V0LWlubGluZS1zdGFydDogLTAuNXJlbTtcbiAgICBpbnNldC1ibG9jay1zdGFydDogMC4yNXJlbTtcbn1cblxuLm91dHB1dC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5vdXRwdXQge1xuICAgIGluc2V0LWlubGluZS1lbmQ6IC0wLjVyZW07XG4gICAgaW5zZXQtYmxvY2s6IGF1dG8gMDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ },

/***/ 67323
/*!************************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/terms-and-definitions/examplaes/nodes/node/node.component.ts ***!
  \************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeComponent: () => (/* binding */ NodeComponent)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
var _NodeComponent;


class NodeComponent extends _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DrawFlowBaseNode {}
_NodeComponent = NodeComponent;
_NodeComponent.ɵfac = /*@__PURE__*/(() => {
  let ɵNodeComponent_BaseFactory;
  return function NodeComponent_Factory(__ngFactoryType__) {
    return (ɵNodeComponent_BaseFactory || (ɵNodeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_NodeComponent)))(__ngFactoryType__ || _NodeComponent);
  };
})();
_NodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _NodeComponent,
  selectors: [["app-node"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.model.text);
    }
  },
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  inline-size: 10rem;\n}\n.text[_ngcontent-%COMP%] {\n  inline-size: 100%;\n  text-align: center;\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vdGVybXMtYW5kLWRlZmluaXRpb25zL2V4YW1wbGFlcy9ub2Rlcy9ub2RlL25vZGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBpbmxpbmUtc2l6ZTogMTByZW07XG59XG5cbi50ZXh0IHtcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ },

/***/ 70509
/*!********************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/terms-and-definitions/terms-and-definitions.component.ts ***!
  \********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TermsAndDefinitionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 76380);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core */ 71534);
/* harmony import */ var _examplaes_connections_example_connections_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./examplaes/connections-example/connections-example.component */ 88927);
/* harmony import */ var _examplaes_connectors_example_connectors_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examplaes/connectors-example/connectors-example.component */ 22363);
/* harmony import */ var _examplaes_nodes_example_nodes_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examplaes/nodes-example/nodes-example.component */ 84619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 94841);
var _TermsAndDefinitionsComponent;







class TermsAndDefinitionsComponent {}
_TermsAndDefinitionsComponent = TermsAndDefinitionsComponent;
_TermsAndDefinitionsComponent.ɵfac = function TermsAndDefinitionsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TermsAndDefinitionsComponent)();
};
_TermsAndDefinitionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _TermsAndDefinitionsComponent,
  selectors: [["terms-and-definitions"]],
  decls: 65,
  vars: 0,
  consts: [["header", "Terms and Definitions"], [1, "tui-list", "tui-list_small"], [1, "tui-list__item"], ["routerLink", "/documentation/connectors", "tuiLink", ""], ["routerLink", "/documentation/connections", "tuiLink", ""]],
  template: function TermsAndDefinitionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " In this part of the docs we are explaining some basic NgDrawFlow terms and definition. Three things you\u2019ll be using a lot in NgDrawFlow are nodes, connections, and connectors. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "section")(4, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Nodes");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "app-nodes-example");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Node in NgDrawFlow is an Angular component. This means it can display anything you desire. Each node has X and Y coordinates that refer to the point at the center of the node, relative to the workspace. To create a node, you need to extend from ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "DrawFlowBaseNode");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " The workspace itself is dynamic. It is derived from the rendered node bounds rather than from a fixed predefined board size, so it expands together with the graph content. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " To delete a node, select it and press ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " or ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Backspace");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Some of the things you might do with a custom node are:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "ul", 1)(24, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Render form elements");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Visualize data");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Support multiple connectors");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "section")(31, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Connectors");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "app-connectors-example");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, " A Connector is used to link nodes together. By default they are displayed as blue circles but the colour can be changed using css variables. When creating a custom node, you may use as many connector handles as you need. The main requirement is that each connector has a unique name starting with its nodeId (example: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "node-1-input-1");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, " ). More information can be found in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, " the connector documentation ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Connectors are divided into two types: input connectors and output connectors.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, " To connect two nodes, simply drag an output connector from one node to an input connector of another node. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "section")(47, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Connections");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "app-connections-example");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, " A Connection links two nodes together. It is represented by a Bezier curve. An edge is an SVG path, allowing its line thickness and color to be adjusted through CSS variables. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, " More details can be found in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, " the connection lines documentation ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, " To delete a connection, select it and press the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, " or ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Backspace key");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_examplaes_connections_example_connections_example_component__WEBPACK_IMPORTED_MODULE_2__["default"], _examplaes_connectors_example_connectors_example_component__WEBPACK_IMPORTED_MODULE_3__["default"], _examplaes_nodes_example_nodes_example_component__WEBPACK_IMPORTED_MODULE_4__["default"], _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterLink, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_6__.TuiDocPage, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TuiLink],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_terms-and-definitions_terms-and-definitions_component_ts.js.map