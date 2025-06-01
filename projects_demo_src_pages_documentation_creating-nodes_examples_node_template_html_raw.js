"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_creating-nodes_examples_node_template_html_raw"],{

/***/ 3998:
/*!**********************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/creating-nodes/examples/node.template.html?raw ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<df-input\n    *ngIf=\"!startNode\"\n    class=\"input\"\n    [connectorData]=\"{nodeId, connectorId: nodeId + '-input-1', single: false}\"\n/>\n\n<p class=\"tui-text_body-xs\">{{ model.text }}</p>\n\n<df-output\n    *ngIf=\"!endNode\"\n    class=\"output\"\n    [connectorData]=\"{nodeId, connectorId: nodeId + '-output-1', single: false}\"\n/>\n";

/***/ })

}]);