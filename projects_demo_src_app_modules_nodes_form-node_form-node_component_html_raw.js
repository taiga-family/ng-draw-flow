"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_app_modules_nodes_form-node_form-node_component_html_raw"],{

/***/ 3890
/*!************************************************************************************!*\
  !*** ./projects/demo/src/app/modules/nodes/form-node/form-node.component.html?raw ***!
  \************************************************************************************/
(module) {

module.exports = "@if (!startNode) {\n    <df-input\n        class=\"input\"\n        [connectorData]=\"{nodeId, connectorId: nodeId + '-input-1', single: false}\"\n    />\n}\n\n<div class=\"tui-space_bottom-4 tui-text_body-s\">\n    {{ model.text }}\n</div>\n\n<form\n    tuiTheme=\"light\"\n    [formGroup]=\"form\"\n>\n    @for (fieldName of fieldNames; track fieldName; let i = $index) {\n        <div [formGroupName]=\"fieldName\">\n            <div class=\"field tui-space_bottom-4\">\n                <tui-textfield\n                    tuiTextfieldSize=\"s\"\n                    tuiTheme=\"light\"\n                    class=\"text-field\"\n                >\n                    <input\n                        formControlName=\"fieldValue\"\n                        tuiInput\n                    />\n                </tui-textfield>\n                @if (!!getConnectorId(fieldName)) {\n                    <df-output\n                        class=\"output\"\n                        [connectorData]=\"{nodeId, connectorId: getConnectorId(fieldName)!, single: false}\"\n                    />\n                }\n            </div>\n        </div>\n    }\n</form>\n\n<button\n    size=\"s\"\n    tuiButton\n    type=\"button\"\n    (click)=\"add()\"\n>\n    Add field\n</button>\n";

/***/ }

}]);