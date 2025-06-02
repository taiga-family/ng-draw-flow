"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_app_modules_nodes_simple-node_simple-node_component_html_raw"],{

/***/ 65914:
/*!****************************************************************************************!*\
  !*** ./projects/demo/src/app/modules/nodes/simple-node/simple-node.component.html?raw ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<df-input\n    *ngIf=\"!startNode\"\n    class=\"input\"\n    [connectorData]=\"{nodeId, connectorId: nodeId + '-input-1', single: false}\"\n/>\n\n<p class=\"tui-text_body-xs\">{{ model.text }} {{ invalid }}</p>\n\n<df-output\n    *ngIf=\"!endNode\"\n    class=\"output\"\n    [connectorData]=\"{nodeId, connectorId: nodeId + '-output-1', single: false}\"\n/>\n";

/***/ })

}]);