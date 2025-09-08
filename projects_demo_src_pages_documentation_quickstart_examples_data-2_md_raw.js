"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_quickstart_examples_data-2_md_raw"],{

/***/ 90739:
/*!*********************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/quickstart/examples/data-2.md?raw ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "```ts\ndata: DfDataModel = {\n  nodes: [\n    {\n      id: 'node-1',\n      data: {type: 'yourNode', text: 'This base node'},\n      position: {x: 0, y: 0},\n      startNode: true,\n    },\n    {id: 'node-2', data: {type: 'yourNode', text: 'This child node 1'}, position: {x: 250, y: 50}},\n    {id: 'node-3', data: {type: 'yourNode', text: 'This child node 2'}, position: {x: 250, y: -50}},\n    {\n      id: 'node-4',\n      data: {type: 'yourNode', text: 'This child node 3'},\n      position: {x: 500, y: 0},\n      endNode: true,\n    },\n  ],\n  connections: [\n    {\n      source: {nodeId: 'node-1', connectorType: DfConnectionPoint.Output, connectorId: 'node-1-output-1'},\n      target: {nodeId: 'node-2', connectorType: DfConnectionPoint.Input, connectorId: 'node-2-input-1'},\n    },\n    {\n      source: {nodeId: 'node-1', connectorType: DfConnectionPoint.Output, connectorId: 'node-1-output-1'},\n      target: {nodeId: 'node-3', connectorType: DfConnectionPoint.Input, connectorId: 'node-3-input-1'},\n    },\n    {\n      source: {nodeId: 'node-2', connectorType: DfConnectionPoint.Output, connectorId: 'node-2-output-1'},\n      target: {nodeId: 'node-4', connectorType: DfConnectionPoint.Input, connectorId: 'node-4-input-1'},\n    },\n    {\n      source: {nodeId: 'node-3', connectorType: DfConnectionPoint.Output, connectorId: 'node-3-output-1'},\n      target: {nodeId: 'node-4', connectorType: DfConnectionPoint.Input, connectorId: 'node-4-input-1'},\n    },\n  ],\n};\n```\n";

/***/ })

}]);