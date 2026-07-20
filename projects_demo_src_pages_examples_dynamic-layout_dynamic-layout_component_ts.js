"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_examples_dynamic-layout_dynamic-layout_component_ts"],{

/***/ 12358
/*!*******************************************************************************************!*\
  !*** ./projects/demo/src/pages/examples/dynamic-layout/dynamic-layout-actions.service.ts ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicLayoutActionsService: () => (/* binding */ DynamicLayoutActionsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
var _DynamicLayoutActionsService;

class DynamicLayoutActionsService {
  constructor() {
    this.handlers = null;
  }
  configure(handlers) {
    this.handlers = handlers;
  }
  addChild(connector) {
    var _this$handlers;
    (_this$handlers = this.handlers) === null || _this$handlers === void 0 || _this$handlers.addChild(connector);
  }
}
_DynamicLayoutActionsService = DynamicLayoutActionsService;
_DynamicLayoutActionsService.ɵfac = function DynamicLayoutActionsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DynamicLayoutActionsService)();
};
_DynamicLayoutActionsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _DynamicLayoutActionsService,
  factory: _DynamicLayoutActionsService.ɵfac
});

/***/ },

/***/ 23660
/*!***********************************************************************************************!*\
  !*** ./projects/demo/src/pages/examples/dynamic-layout/dynamic-layout-form-node.component.ts ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicLayoutFormNodeComponent: () => (/* binding */ DynamicLayoutFormNodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ 11498);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ 28613);
/* harmony import */ var _dynamic_layout_actions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic-layout-actions.service */ 12358);
/* harmony import */ var _taiga_ui_core_components_textfield__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core/components/textfield */ 50957);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core */ 2490);
var _DynamicLayoutFormNodeComponent;









const _c0 = (a0, a1) => ({
  nodeId: a0,
  connectorId: a1,
  single: true
});
const _c1 = a0 => ({
  childType: "dynamicNode",
  fieldIndex: a0
});
const _c2 = (a0, a1, a2) => ({
  nodeId: a0,
  connectorId: a1,
  single: false,
  data: a2
});
function DynamicLayoutFormNodeComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-icon", 8);
  }
}
function DynamicLayoutFormNodeComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "df-input", 1);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx_r1.nodeId, ctx_r1.nodeId + "-input-1"));
  }
}
function DynamicLayoutFormNodeComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "tui-textfield", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "df-output", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activated", function DynamicLayoutFormNodeComponent_For_7_Template_df_output_activated_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.addChild($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const field_r4 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const addChildIcon_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "Field ", $index_r5 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", field_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](10, _c2, ctx_r1.nodeId, ctx_r1.nodeId + "-field-" + ($index_r5 + 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, $index_r5)))("content", addChildIcon_r6)("layoutOrder", $index_r5)("mode", ctx_r1.outputMode.Action)("title", "Add child from field " + ($index_r5 + 1));
  }
}
class DynamicLayoutFormNodeComponent extends _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.DrawFlowBaseNode {
  constructor() {
    super(...arguments);
    this.actions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_dynamic_layout_actions_service__WEBPACK_IMPORTED_MODULE_5__.DynamicLayoutActionsService);
    this.outputMode = _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.DfOutputMode;
    this.fields = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormArray([this.createField()]);
  }
  addField() {
    this.fields.push(this.createField());
  }
  removeField() {
    if (this.fields.length > 1) {
      this.fields.removeAt(this.fields.length - 1);
    }
  }
  addChild(connector) {
    this.actions.addChild(connector);
  }
  createField() {
    return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', {
      nonNullable: true
    });
  }
}
_DynamicLayoutFormNodeComponent = DynamicLayoutFormNodeComponent;
_DynamicLayoutFormNodeComponent.ɵfac = /*@__PURE__*/(() => {
  let ɵDynamicLayoutFormNodeComponent_BaseFactory;
  return function DynamicLayoutFormNodeComponent_Factory(__ngFactoryType__) {
    return (ɵDynamicLayoutFormNodeComponent_BaseFactory || (ɵDynamicLayoutFormNodeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_DynamicLayoutFormNodeComponent)))(__ngFactoryType__ || _DynamicLayoutFormNodeComponent);
  };
})();
_DynamicLayoutFormNodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _DynamicLayoutFormNodeComponent,
  selectors: [["dynamic-layout-form-node"]],
  hostBindings: function DynamicLayoutFormNodeComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.backspace.stop", function DynamicLayoutFormNodeComponent_keydown_backspace_stop_HostBindingHandler() {
        return 0;
      })("keydown.delete.stop", function DynamicLayoutFormNodeComponent_keydown_delete_stop_HostBindingHandler() {
        return 0;
      });
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 13,
  vars: 3,
  consts: [["addChildIcon", ""], [1, "input", 3, "connectorData"], [1, "title"], [1, "fields"], [1, "field"], [1, "field-actions"], ["appearance", "secondary", "size", "s", "tuiButton", "", "type", "button", 3, "click"], ["appearance", "flat", "size", "s", "tuiButton", "", "type", "button", 3, "click", "disabled"], ["icon", "@tui.plus", 1, "add-child-icon"], ["tuiTextfieldSize", "s", "tuiTheme", "light", 1, "text-field"], ["tuiInput", "", 3, "placeholder", "formControl"], [1, "field-output", 3, "activated", "connectorData", "content", "layoutOrder", "mode", "title"]],
  template: function DynamicLayoutFormNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DynamicLayoutFormNodeComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(2, DynamicLayoutFormNodeComponent_Conditional_2_Template, 1, 4, "df-input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](6, DynamicLayoutFormNodeComponent_For_7_Template, 4, 14, "div", 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5)(9, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicLayoutFormNodeComponent_Template_button_click_9_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.addField());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Add field ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicLayoutFormNodeComponent_Template_button_click_11_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.removeField());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Remove ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!ctx.startNode ? 2 : -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.fields.controls);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.fields.length === 1);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.DfInputComponent, _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.DfOutputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__.TuiButton, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__.TuiIcon, _taiga_ui_core_components_textfield__WEBPACK_IMPORTED_MODULE_6__.TuiTextfieldComponent, _taiga_ui_core_components_textfield__WEBPACK_IMPORTED_MODULE_6__.TuiTextfieldOptionsDirective, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__.TuiInputDirective],
  styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: block;\n  inline-size: 14rem;\n}\n.title[_ngcontent-%COMP%] {\n  display: block;\n  margin-block-end: 0.75rem;\n}\n.input[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-block-start: 50%;\n  inset-inline-start: -1.0625rem;\n  opacity: 0;\n  pointer-events: none;\n  transform: translateY(-50%);\n}\n.fields[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n}\n.field[_ngcontent-%COMP%] {\n  position: relative;\n}\n.text-field[_ngcontent-%COMP%] {\n  inline-size: 100%;\n}\n.field-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-block-start: 0.75rem;\n}\n.field-output[_ngcontent-%COMP%] {\n  position: absolute;\n  display: grid;\n  inset-block-start: 50%;\n  inset-inline-end: -0.75rem;\n  place-items: center;\n  inline-size: 1rem;\n  block-size: 1rem;\n  color: #155eef;\n  background: #fff;\n  border: 0.0625rem solid #84adff;\n  border-radius: 50%;\n  transform: translateY(-50%);\n}\n.field-output[_ngcontent-%COMP%]::after {\n  opacity: 0;\n}\n.add-child-icon[_ngcontent-%COMP%] {\n  inline-size: 1rem;\n  block-size: 1rem;\n  font-size: 0.625rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMtbGF5b3V0LWZvcm0tbm9kZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0o7QUFFQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQUFKO0FBR0E7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtBQURKO0FBSUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQUZKO0FBS0E7RUFDSSxrQkFBQTtBQUhKO0FBTUE7RUFDSSxpQkFBQTtBQUpKO0FBT0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBTEo7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFOSjtBQVFJO0VBQ0ksVUFBQTtBQU5SO0FBVUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFSSiIsImZpbGUiOiJkeW5hbWljLWxheW91dC1mb3JtLW5vZGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGlubGluZS1zaXplOiAxNHJlbTtcbn1cblxuLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwLjc1cmVtO1xufVxuXG4uaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldC1ibG9jay1zdGFydDogNTAlO1xuICAgIGluc2V0LWlubGluZS1zdGFydDogLTEuMDYyNXJlbTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmZpZWxkcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuLmZpZWxkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50ZXh0LWZpZWxkIHtcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcbn1cblxuLmZpZWxkLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjc1cmVtO1xufVxuXG4uZmllbGQtb3V0cHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBpbnNldC1ibG9jay1zdGFydDogNTAlO1xuICAgIGluc2V0LWlubGluZS1lbmQ6IC0wLjc1cmVtO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgaW5saW5lLXNpemU6IDFyZW07XG4gICAgYmxvY2stc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogIzE1NWVlZjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkICM4NGFkZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59XG5cbi5hZGQtY2hpbGQtaWNvbiB7XG4gICAgaW5saW5lLXNpemU6IDFyZW07XG4gICAgYmxvY2stc2l6ZTogMXJlbTtcbiAgICBmb250LXNpemU6IDAuNjI1cmVtO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2V4YW1wbGVzL2R5bmFtaWMtbGF5b3V0L2R5bmFtaWMtbGF5b3V0LWZvcm0tbm9kZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0o7QUFFQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQUFKO0FBR0E7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtBQURKO0FBSUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQUZKO0FBS0E7RUFDSSxrQkFBQTtBQUhKO0FBTUE7RUFDSSxpQkFBQTtBQUpKO0FBT0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBTEo7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFOSjtBQVFJO0VBQ0ksVUFBQTtBQU5SO0FBVUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFSSjs7QUFFQSxvdkVBQW92RSIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaW5saW5lLXNpemU6IDE0cmVtO1xufVxuXG4udGl0bGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDAuNzVyZW07XG59XG5cbi5pbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0LWJsb2NrLXN0YXJ0OiA1MCU7XG4gICAgaW5zZXQtaW5saW5lLXN0YXJ0OiAtMS4wNjI1cmVtO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4uZmllbGRzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMC41cmVtO1xufVxuXG4uZmllbGQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRleHQtZmllbGQge1xuICAgIGlubGluZS1zaXplOiAxMDAlO1xufVxuXG4uZmllbGQtYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuNzVyZW07XG59XG5cbi5maWVsZC1vdXRwdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGluc2V0LWJsb2NrLXN0YXJ0OiA1MCU7XG4gICAgaW5zZXQtaW5saW5lLWVuZDogLTAuNzVyZW07XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICBpbmxpbmUtc2l6ZTogMXJlbTtcbiAgICBibG9jay1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiAjMTU1ZWVmO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgIzg0YWRmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cblxuLmFkZC1jaGlsZC1pY29uIHtcbiAgICBpbmxpbmUtc2l6ZTogMXJlbTtcbiAgICBibG9jay1zaXplOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMC42MjVyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ },

/***/ 11231
/*!******************************************************************************************!*\
  !*** ./projects/demo/src/pages/examples/dynamic-layout/dynamic-layout-node.component.ts ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicLayoutNodeComponent: () => (/* binding */ DynamicLayoutNodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ 28613);
/* harmony import */ var _dynamic_layout_actions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic-layout-actions.service */ 12358);
var _DynamicLayoutNodeComponent;





const _c0 = () => ({
  childType: "dynamicNode"
});
const _c1 = (a0, a1, a2) => ({
  nodeId: a0,
  connectorId: a1,
  single: false,
  data: a2
});
const _c2 = (a0, a1) => ({
  nodeId: a0,
  connectorId: a1,
  single: true
});
function DynamicLayoutNodeComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-icon", 4);
  }
}
function DynamicLayoutNodeComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "df-input", 1);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c2, ctx_r1.nodeId, ctx_r1.nodeId + "-input-1"));
  }
}
class DynamicLayoutNodeComponent extends _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DrawFlowBaseNode {
  constructor() {
    super(...arguments);
    this.actions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_dynamic_layout_actions_service__WEBPACK_IMPORTED_MODULE_3__.DynamicLayoutActionsService);
    this.outputMode = _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfOutputMode;
  }
  addChild(connector) {
    this.actions.addChild(connector);
  }
}
_DynamicLayoutNodeComponent = DynamicLayoutNodeComponent;
_DynamicLayoutNodeComponent.ɵfac = /*@__PURE__*/(() => {
  let ɵDynamicLayoutNodeComponent_BaseFactory;
  return function DynamicLayoutNodeComponent_Factory(__ngFactoryType__) {
    return (ɵDynamicLayoutNodeComponent_BaseFactory || (ɵDynamicLayoutNodeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_DynamicLayoutNodeComponent)))(__ngFactoryType__ || _DynamicLayoutNodeComponent);
  };
})();
_DynamicLayoutNodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _DynamicLayoutNodeComponent,
  selectors: [["dynamic-layout-node"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 6,
  vars: 11,
  consts: [["addChildIcon", ""], [1, "input", 3, "connectorData"], [1, "title"], ["title", "Add child", 1, "add-child", 3, "activated", "connectorData", "content", "layoutOrder", "mode"], ["icon", "@tui.plus", 1, "add-child-icon"]],
  template: function DynamicLayoutNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DynamicLayoutNodeComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(2, DynamicLayoutNodeComponent_Conditional_2_Template, 1, 4, "df-input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "df-output", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activated", function DynamicLayoutNodeComponent_Template_df_output_activated_5_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.addChild($event));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const addChildIcon_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!ctx.startNode ? 2 : -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("connectorData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](7, _c1, ctx.nodeId, ctx.nodeId + "-output-1", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0)))("content", addChildIcon_r3)("layoutOrder", 0)("mode", ctx.outputMode.Action);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfInputComponent, _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DfOutputComponent, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiIcon],
  styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  min-inline-size: 8rem;\n  min-block-size: 2.5rem;\n}\n.title[_ngcontent-%COMP%] {\n  padding-inline-start: 0.5rem;\n  padding-inline-end: 1.75rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.input[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-block-start: 50%;\n  inset-inline-start: -1.0625rem;\n  opacity: 0;\n  pointer-events: none;\n  transform: translateY(-50%);\n}\n.add-child[_ngcontent-%COMP%] {\n  position: absolute;\n  display: grid;\n  inset-inline-end: -0.75rem;\n  place-items: center;\n  inline-size: 1rem;\n  block-size: 1rem;\n  color: #155eef;\n  background: #fff;\n  border: 0.0625rem solid #84adff;\n  border-radius: 50%;\n}\n.add-child[_ngcontent-%COMP%]::after {\n  opacity: 0;\n}\n.add-child-icon[_ngcontent-%COMP%] {\n  inline-size: 1rem;\n  block-size: 1rem;\n  font-size: 0.625rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMtbGF5b3V0LW5vZGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUVBO0VBQ0ksNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7QUFESjtBQUlBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0FBRko7QUFJSTtFQUNJLFVBQUE7QUFGUjtBQU1BO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSkoiLCJmaWxlIjoiZHluYW1pYy1sYXlvdXQtbm9kZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1pbmxpbmUtc2l6ZTogOHJlbTtcbiAgICBtaW4tYmxvY2stc2l6ZTogMi41cmVtO1xufVxuXG4udGl0bGUge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwLjVyZW07XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxLjc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQtYmxvY2stc3RhcnQ6IDUwJTtcbiAgICBpbnNldC1pbmxpbmUtc3RhcnQ6IC0xLjA2MjVyZW07XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5hZGQtY2hpbGQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGluc2V0LWlubGluZS1lbmQ6IC0wLjc1cmVtO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgaW5saW5lLXNpemU6IDFyZW07XG4gICAgYmxvY2stc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogIzE1NWVlZjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkICM4NGFkZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cblxuLmFkZC1jaGlsZC1pY29uIHtcbiAgICBpbmxpbmUtc2l6ZTogMXJlbTtcbiAgICBibG9jay1zaXplOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMC42MjVyZW07XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2V4YW1wbGVzL2R5bmFtaWMtbGF5b3V0L2R5bmFtaWMtbGF5b3V0LW5vZGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUVBO0VBQ0ksNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7QUFESjtBQUlBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0FBRko7QUFJSTtFQUNJLFVBQUE7QUFGUjtBQU1BO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSko7O0FBRUEsbzREQUFvNEQiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taW5saW5lLXNpemU6IDhyZW07XG4gICAgbWluLWJsb2NrLXNpemU6IDIuNXJlbTtcbn1cblxuLnRpdGxlIHtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMC41cmVtO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMS43NXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5pbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0LWJsb2NrLXN0YXJ0OiA1MCU7XG4gICAgaW5zZXQtaW5saW5lLXN0YXJ0OiAtMS4wNjI1cmVtO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4uYWRkLWNoaWxkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBpbnNldC1pbmxpbmUtZW5kOiAtMC43NXJlbTtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIGlubGluZS1zaXplOiAxcmVtO1xuICAgIGJsb2NrLXNpemU6IDFyZW07XG4gICAgY29sb3I6ICMxNTVlZWY7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCAjODRhZGZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59XG5cbi5hZGQtY2hpbGQtaWNvbiB7XG4gICAgaW5saW5lLXNpemU6IDFyZW07XG4gICAgYmxvY2stc2l6ZTogMXJlbTtcbiAgICBmb250LXNpemU6IDAuNjI1cmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ },

/***/ 17776
/*!*************************************************************************************!*\
  !*** ./projects/demo/src/pages/examples/dynamic-layout/dynamic-layout.component.ts ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DynamicLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _ng_draw_flow_layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-draw-flow/layouts */ 48503);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ 11498);
/* harmony import */ var _dynamic_layout_actions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic-layout-actions.service */ 12358);
/* harmony import */ var _dynamic_layout_form_node_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamic-layout-form-node.component */ 23660);
/* harmony import */ var _dynamic_layout_node_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dynamic-layout-node.component */ 11231);
/* harmony import */ var _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/addon-doc/components */ 94841);
var _DynamicLayoutComponent;











class DynamicLayoutComponent {
  constructor() {
    this.actions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_dynamic_layout_actions_service__WEBPACK_IMPORTED_MODULE_5__.DynamicLayoutActionsService);
    this.autoLayout = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ng_draw_flow_layouts__WEBPACK_IMPORTED_MODULE_3__.DfAutoLayoutService);
    this.counter = 1;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.createInitialModel(), {
      nonNullable: true
    });
    this.actions.configure({
      addChild: ({
        nodeId,
        connectorId
      }) => this.addChild(nodeId, connectorId)
    });
  }
  ngAfterViewInit() {
    this.autoLayout.apply();
  }
  reset() {
    this.counter = 1;
    this.autoLayout.apply({
      model: this.createInitialModel()
    });
  }
  createInitialModel() {
    const root = {
      id: 'root',
      data: {
        type: 'dynamicNode',
        title: 'Root'
      },
      position: {
        x: 0,
        y: 0
      },
      startNode: true
    };
    const firstChild = this.createChild(root);
    const secondChild = this.createChild(root);
    return {
      nodes: [root, firstChild, secondChild],
      connections: [this.createConnection(root.id, firstChild.id), this.createConnection(root.id, secondChild.id)]
    };
  }
  addChild(parentId, sourceConnectorId) {
    const model = this.form.getRawValue();
    const parent = model.nodes.find(({
      id
    }) => id === parentId);
    if (!parent) {
      return;
    }
    const child = this.createChild(parent);
    this.applyMutation({
      ...model,
      nodes: [...model.nodes, child],
      connections: [...model.connections, this.createConnection(parentId, child.id, sourceConnectorId)]
    }, parentId);
  }
  applyMutation(model, anchorNodeId) {
    this.autoLayout.apply({
      anchorNodeId,
      model
    });
  }
  createChild(parent) {
    const number = this.counter++;
    const id = `node-${number}`;
    const formNode = number % 2 === 0;
    let title = `Node ${number}`;
    if (formNode) {
      title = `Form ${number}`;
    } else if (number % 3 === 0) {
      title = `Node ${number} with variable width`;
    }
    return {
      id,
      data: {
        type: formNode ? 'dynamicFormNode' : 'dynamicNode',
        title
      },
      position: this.getPosition(parent)
    };
  }
  createConnection(sourceId, targetId, sourceConnectorId = `${sourceId}-output-1`) {
    return {
      source: {
        nodeId: sourceId,
        connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.DfConnectionPoint.Output,
        connectorId: sourceConnectorId
      },
      target: {
        nodeId: targetId,
        connectorType: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.DfConnectionPoint.Input,
        connectorId: `${targetId}-input-1`
      }
    };
  }
  getPosition(node) {
    return 'position' in node ? {
      ...node.position
    } : {
      x: 0,
      y: 0
    };
  }
}
_DynamicLayoutComponent = DynamicLayoutComponent;
_DynamicLayoutComponent.ɵfac = function DynamicLayoutComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DynamicLayoutComponent)();
};
_DynamicLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _DynamicLayoutComponent,
  selectors: [["dynamic-layout"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_dynamic_layout_actions_service__WEBPACK_IMPORTED_MODULE_5__.DynamicLayoutActionsService, (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.dfPanZoomOptionsProvider)({
    leftPosition: 48,
    topPosition: null
  }), (0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.provideNgDrawFlowConfigs)({
    connection: {
      type: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.DfConnectionType.SmoothStep,
      arrowhead: {
        type: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.DfArrowhead.ArrowClosed
      },
      curvature: 16
    },
    nodes: {
      dynamicFormNode: _dynamic_layout_form_node_component__WEBPACK_IMPORTED_MODULE_6__.DynamicLayoutFormNodeComponent,
      dynamicNode: _dynamic_layout_node_component__WEBPACK_IMPORTED_MODULE_7__.DynamicLayoutNodeComponent
    },
    options: {
      nodesDraggable: false,
      connectionsCreatable: false,
      connectionsDeletable: false
    },
    positionAnimation: {
      duration: 280,
      easing: 'ease-in-out'
    }
  }), (0,_ng_draw_flow_layouts__WEBPACK_IMPORTED_MODULE_3__.provideNgDrawFlowLayouts)({
    tree: {
      direction: _ng_draw_flow_layouts__WEBPACK_IMPORTED_MODULE_3__.DfTreeLayoutDirection.LeftToRight,
      nodeSizing: {
        strategy: _ng_draw_flow_layouts__WEBPACK_IMPORTED_MODULE_3__.DfNodeSizingStrategy.Measured,
        fallback: {
          width: 160,
          height: 64
        }
      },
      levelGap: 96,
      siblingGap: 32
    }
  })])],
  decls: 6,
  vars: 1,
  consts: [["header", "Dynamic Layouts"], [1, "toolbar"], ["appearance", "secondary", "size", "s", "tuiButton", "", "type", "button", 3, "click"], [1, "editor"], [3, "formControl"]],
  template: function DynamicLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicLayoutComponent_Template_button_click_2_listener() {
        return ctx.reset();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Reset graph ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ng-draw-flow", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.form);
    }
  },
  dependencies: [_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_2__.NgDrawFlowComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_8__.TuiDocPage, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__.TuiButton],
  styles: [".toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-block-end: 0.75rem;\n}\n.editor[_ngcontent-%COMP%] {\n  block-size: 38rem;\n  inline-size: 100%;\n  overflow: hidden;\n  border: 0.0625rem solid var(--tui-border-normal);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMtbGF5b3V0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0RBQUE7QUFBSiIsImZpbGUiOiJkeW5hbWljLWxheW91dC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMC43NXJlbTtcbn1cblxuLmVkaXRvciB7XG4gICAgYmxvY2stc2l6ZTogMzhyZW07XG4gICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS10dWktYm9yZGVyLW5vcm1hbCk7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL3BhZ2VzL2V4YW1wbGVzL2R5bmFtaWMtbGF5b3V0L2R5bmFtaWMtbGF5b3V0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0RBQUE7QUFBSjs7QUFFQSxvckJBQW9yQiIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMC43NXJlbTtcbn1cblxuLmVkaXRvciB7XG4gICAgYmxvY2stc2l6ZTogMzhyZW07XG4gICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS10dWktYm9yZGVyLW5vcm1hbCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }

}]);
//# sourceMappingURL=projects_demo_src_pages_examples_dynamic-layout_dynamic-layout_component_ts.js.map