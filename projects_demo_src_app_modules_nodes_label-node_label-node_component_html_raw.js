"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_app_modules_nodes_label-node_label-node_component_html_raw"],{

/***/ 7574:
/*!**************************************************************************************!*\
  !*** ./projects/demo/src/app/modules/nodes/label-node/label-node.component.html?raw ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<p class=\"tui-text_body-xs\">{{ model.text }}</p>\n\n<div class=\"output-wrapper\">\n    <ng-container *ngFor=\"let output of outputConnectors; let i = index\">\n        <df-output\n            class=\"output\"\n            [connectionLabel]=\"{content: i}\"\n            [connectorData]=\"{nodeId, connectorId: nodeId + '-output-' + (i + 1), single: false}\"\n        />\n    </ng-container>\n</div>\n\n<button\n    size=\"xs\"\n    tuiButton\n    type=\"button\"\n    (click)=\"addOutputConnector()\"\n>\n    Add output\n</button>\n";

/***/ })

}]);