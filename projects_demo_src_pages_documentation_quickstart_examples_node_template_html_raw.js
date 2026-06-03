"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_quickstart_examples_node_template_html_raw"],{

/***/ 30724
/*!******************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/quickstart/examples/node.template.html?raw ***!
  \******************************************************************************************/
(module) {

module.exports = "@if (!startNodeSignal()) {\n    <df-input\n        class=\"input\"\n        [connectorData]=\"{nodeId: nodeIdSignal(), connectorId: nodeIdSignal() + '-input-1', single: false}\"\n    />\n}\n\n<p class=\"tui-text_body-xs\">{{ modelSignal().text }}</p>\n\n@if (!endNodeSignal()) {\n    <df-output\n        class=\"output\"\n        [connectorData]=\"{nodeId: nodeIdSignal(), connectorId: nodeIdSignal() + '-output-1', single: false}\"\n    />\n}\n";

/***/ }

}]);