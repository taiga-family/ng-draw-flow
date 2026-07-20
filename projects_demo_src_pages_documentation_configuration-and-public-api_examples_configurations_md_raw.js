"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_configuration-and-public-api_examples_configurations_md_raw"],{

/***/ 21483
/*!***********************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/configuration-and-public-api/examples/configurations.md?raw ***!
  \***********************************************************************************************************/
(module) {

module.exports = "```ts\nproviders: [\n  provideNgDrawFlowConfigs({\n    nodes: {\n      task: TaskNodeComponent,\n      decision: DecisionNodeComponent,\n    },\n    connection: {\n      type: DfConnectionType.SmoothStep,\n      curvature: 16,\n      arrowhead: {type: DfArrowhead.ArrowClosed, width: 12, height: 8},\n    },\n    options: {\n      nodeDragThreshold: 1,\n      nodesDraggable: true,\n      nodesDeletable: true,\n      connectionsCreatable: true,\n      connectionsDeletable: true,\n    },\n  }),\n];\n```\n";

/***/ }

}]);