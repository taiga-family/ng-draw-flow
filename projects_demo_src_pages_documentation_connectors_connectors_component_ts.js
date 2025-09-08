"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_connectors_connectors_component_ts"],{

/***/ 24823:
/*!**********************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/connectors/connectors.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ 71534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 94841);
var _ConnectorsComponent;





class ConnectorsComponent {}
_ConnectorsComponent = ConnectorsComponent;
_ConnectorsComponent.ɵfac = function ConnectorsComponent_Factory(t) {
  return new (t || _ConnectorsComponent)();
};
_ConnectorsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _ConnectorsComponent,
  selectors: [["app-connectors"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 82,
  vars: 0,
  consts: [["header", "Connectors"], [1, "tui-list", "tui-list_extra-small"], [1, "tui-list__item"], ["routerLink", "/documentation/connections", "tuiLink", ""]],
  template: function ConnectorsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Connectors play a pivotal role in defining the interactions within a node-based flow architecture. They form the interactive endpoints for establishing relationships between different nodes in the system. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Input Connectors (df-input)");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " To ensure the correct functioning and tracking of connections, input connectors require specific parameters to be passed via the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "[connectorData]");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " parameter. These parameters include ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "nodeId");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "connectorId");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p")(17, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "nodeId");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " is the unique identifier of the node, while ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "connectorId");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " uniquely identifies the connector within that node. The ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "single");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " parameter dictates whether the input connector can accept multiple connections or just one. If ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "single");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " is set to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "true");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " , it means that once a connection is made to this input connector, no additional connections will be accepted. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Output Connectors (df-output)");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Similarly, output connectors are the points from which connections originate to other node's input connectors. Much like input connectors, output connectors also require the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "nodeId");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "connectorId");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " parameters for identification and functionality purposes. The ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "single");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " parameter, when set to true for an output connector, restricts it to create only one connection to another node, ensuring a one-to-one relationship. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Customizing Connectors");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " The color of the connectors, can be customized to fit the design requirements of your application. This is achieved by altering CSS custom properties: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul", 1)(50, "li", 2)(51, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "--df-connector-color");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " : This property controls the default color of the connectors. By setting this variable, you can ensure that all connectors in your application adhere to a consistent color scheme that matches your branding or design specifications. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 2)(55, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "--df-connector-color-hover");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " : When a user hovers over a connector, this property determines the color that the connector will change to. This interactive feedback is important for user experience, making it clear which connector is currently under consideration for connection creation. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Connector Positions");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " The ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "position");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " input param specifies where connectors appear on a node: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "DfConnectorPosition.Top");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "DfConnectorPosition.Right");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " , ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "DfConnectorPosition.Bottom");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " , or ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "DfConnectorPosition.Left");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " For information on adjusting connection curvature and line styles, refer to the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " connections documentation ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " . ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_3__.TuiDocPage, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__.TuiLink],
  styles: [".node-demo[_ngcontent-%COMP%] {\n  block-size: 31.25rem;\n  background: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3RvcnMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoiY29ubmVjdG9ycy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub2RlLWRlbW8ge1xuICAgIGJsb2NrLXNpemU6IDMxLjI1cmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2RvY3VtZW50YXRpb24vY29ubmVjdG9ycy9jb25uZWN0b3JzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBLDRXQUE0VyIsInNvdXJjZXNDb250ZW50IjpbIi5ub2RlLWRlbW8ge1xuICAgIGJsb2NrLXNpemU6IDMxLjI1cmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectorsComponent);

/***/ })

}]);
//# sourceMappingURL=projects_demo_src_pages_documentation_connectors_connectors_component_ts.js.map