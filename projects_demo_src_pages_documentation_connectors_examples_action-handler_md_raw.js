"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_connectors_examples_action-handler_md_raw"],{

/***/ 9014
/*!*****************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/connectors/examples/action-handler.md?raw ***!
  \*****************************************************************************************/
(module) {

module.exports = "```ts\nprivate readonly autoLayout = inject(DfAutoLayoutService);\n\nreadonly outputMode = DfOutputMode;\n\naddChild({nodeId, connectorId}: DfDataConnectorConfig): void {\n  const model = this.form.getRawValue();\n  const parent = model.nodes.find(({id}) => id === nodeId);\n\n  if (!parent) {\n    return;\n  }\n\n  const childId = crypto.randomUUID();\n  const position = 'position' in parent ? {...parent.position} : {x: 0, y: 0};\n\n  this.autoLayout.apply({\n    anchorNodeId: nodeId,\n    model: {\n      nodes: [\n        ...model.nodes,\n        {\n          id: childId,\n          data: {type: 'task', title: 'New task'},\n          position,\n        },\n      ],\n      connections: [\n        ...model.connections,\n        {\n          source: {\n            nodeId,\n            connectorId,\n            connectorType: DfConnectionPoint.Output,\n          },\n          target: {\n            nodeId: childId,\n            connectorId: `${childId}-input-1`,\n            connectorType: DfConnectionPoint.Input,\n          },\n        },\n      ],\n    },\n  });\n}\n```\n";

/***/ }

}]);