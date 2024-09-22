"use strict";exports.id=124,exports.ids=[124],exports.modules={62124:module=>{module.exports="```ts\ndata: DfDataModel = {\n  nodes: new Map()\n    .set('info-node', {\n      id: 'info-node',\n      data: {type: 'infoNode', text: 'This base node'},\n      position: {x: 160, y: 20},\n    })\n    .set('node-1', {\n      id: 'node-1',\n      data: {\n        type: 'simpleNode',\n        text: 'The immutable starting point of the graph with no predecessors, marked by the startNode',\n      },\n      position: {x: 0, y: 280},\n      startNode: true,\n    })\n    .set('node-2', {\n      id: 'node-2',\n      data: {\n        type: 'simpleNode',\n        text: 'A flexible node that illustrates the flow from the start to various pathways within the graph',\n      },\n      position: {x: 250, y: 200},\n    })\n    .set('node-3', {\n      id: 'node-3',\n      data: {\n        type: 'simpleNode',\n        text: 'Another versatile node demonstrating multiple connections, highlighting the complex interactivity of the graph.',\n      },\n      position: {x: 250, y: 350},\n    })\n    .set('node-4', {\n      id: 'node-4',\n      data: {\n        type: 'simpleNode',\n        text: \"The final destination in the graph's journey, characterized by the endNode parameter and lacking further paths.\",\n      },\n      position: {x: 500, y: 280},\n      endNode: true,\n    })\n    .set('node-5', {\n      id: 'node-5',\n      data: {\n        type: 'formNode',\n        value: {},\n        text: 'Nodes can contain any kind of content, for example, a form for user interaction.',\n      },\n      position: {x: 200, y: 550},\n    }),\n  connections: [\n    {\n      source: {\n        nodeId: 'node-1',\n        connectorType: DfConnectionPoint.Output,\n        connectorId: 'node-1-output-1',\n      },\n      target: {\n        nodeId: 'node-2',\n        connectorType: DfConnectionPoint.Input,\n        connectorId: 'node-2-input-1',\n      },\n    },\n    {\n      source: {\n        nodeId: 'node-1',\n        connectorType: DfConnectionPoint.Output,\n        connectorId: 'node-1-output-1',\n      },\n      target: {\n        nodeId: 'node-3',\n        connectorType: DfConnectionPoint.Input,\n        connectorId: 'node-3-input-1',\n      },\n    },\n    {\n      source: {\n        nodeId: 'node-2',\n        connectorType: DfConnectionPoint.Output,\n        connectorId: 'node-2-output-1',\n      },\n      target: {\n        nodeId: 'node-4',\n        connectorType: DfConnectionPoint.Input,\n        connectorId: 'node-4-input-1',\n      },\n    },\n    {\n      source: {\n        nodeId: 'node-3',\n        connectorType: DfConnectionPoint.Output,\n        connectorId: 'node-3-output-1',\n      },\n      target: {\n        nodeId: 'node-4',\n        connectorType: DfConnectionPoint.Input,\n        connectorId: 'node-4-input-1',\n      },\n    },\n    {\n      source: {\n        nodeId: 'node-1',\n        connectorType: DfConnectionPoint.Output,\n        connectorId: 'node-1-output-1',\n      },\n      target: {\n        nodeId: 'node-5',\n        connectorType: DfConnectionPoint.Input,\n        connectorId: 'node-5-input-1',\n      },\n    },\n  ],\n};\n```\n"}};