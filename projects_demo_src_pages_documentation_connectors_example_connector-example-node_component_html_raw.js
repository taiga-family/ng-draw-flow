"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_connectors_example_connector-example-node_component_html_raw"],{

/***/ 50018
/*!************************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/connectors/example/connector-example-node.component.html?raw ***!
  \************************************************************************************************************/
(module) {

module.exports = "@if (!startNodeSignal()) {\n    <df-input\n        class=\"input\"\n        [connectorData]=\"{\n            nodeId: nodeIdSignal(),\n            connectorId: nodeIdSignal() + '-input-1',\n            single: false,\n        }\"\n    />\n}\n\n<strong>{{ modelSignal().text }}</strong>\n<span>{{ startNodeSignal() ? 'Drag the orange output' : 'Drop the edge here' }}</span>\n\n@if (!endNodeSignal()) {\n    <df-output\n        class=\"output\"\n        [connectorData]=\"{\n            nodeId: nodeIdSignal(),\n            connectorId: nodeIdSignal() + '-output-1',\n            single: false,\n        }\"\n    />\n}\n";

/***/ }

}]);