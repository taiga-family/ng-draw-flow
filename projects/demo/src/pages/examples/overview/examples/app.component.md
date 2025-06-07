```ts
data: DfDataModel = {
  nodes: [
    {
      id: 'info-node',
      data: {type: 'infoNode', text: 'This base node'},
      position: {x: 160, y: 20},
    },
    {
      id: 'node-1',
      data: {
        type: 'simpleNode',
        text: 'The immutable starting point of the graph with no predecessors, marked by the startNode',
      },
      position: {x: 0, y: 280},
      startNode: true,
    },
    {
      id: 'node-2',
      data: {
        type: 'simpleNode',
        text: 'A flexible node that illustrates the flow from the start to various pathways within the graph',
      },
      position: {x: 250, y: 200},
    },
    {
      id: 'node-3',
      data: {
        type: 'simpleNode',
        text: 'Another versatile node demonstrating multiple connections, highlighting the complex interactivity of the graph.',
      },
      position: {x: 250, y: 350},
    },
    {
      id: 'node-4',
      data: {
        type: 'simpleNode',
        text: "The final destination in the graph's journey, characterized by the endNode parameter and lacking further paths.",
      },
      position: {x: 500, y: 280},
      endNode: true,
    },
    {
      id: 'node-5',
      data: {
        type: 'formNode',
        value: {},
        text: 'Nodes can contain any kind of content, for example, a form for user interaction.',
      },
      position: {x: 200, y: 550},
    },
  ],
  connections: [
    {
      source: {
        nodeId: 'node-1',
        connectorType: DfConnectionPoint.Output,
        connectorId: 'node-1-output-1',
      },
      target: {
        nodeId: 'node-2',
        connectorType: DfConnectionPoint.Input,
        connectorId: 'node-2-input-1',
      },
    },
    {
      source: {
        nodeId: 'node-1',
        connectorType: DfConnectionPoint.Output,
        connectorId: 'node-1-output-1',
      },
      target: {
        nodeId: 'node-3',
        connectorType: DfConnectionPoint.Input,
        connectorId: 'node-3-input-1',
      },
    },
    {
      source: {
        nodeId: 'node-2',
        connectorType: DfConnectionPoint.Output,
        connectorId: 'node-2-output-1',
      },
      target: {
        nodeId: 'node-4',
        connectorType: DfConnectionPoint.Input,
        connectorId: 'node-4-input-1',
      },
    },
    {
      source: {
        nodeId: 'node-3',
        connectorType: DfConnectionPoint.Output,
        connectorId: 'node-3-output-1',
      },
      target: {
        nodeId: 'node-4',
        connectorType: DfConnectionPoint.Input,
        connectorId: 'node-4-input-1',
      },
    },
    {
      source: {
        nodeId: 'node-1',
        connectorType: DfConnectionPoint.Output,
        connectorId: 'node-1-output-1',
      },
      target: {
        nodeId: 'node-5',
        connectorType: DfConnectionPoint.Input,
        connectorId: 'node-5-input-1',
      },
    },
  ],
};
```
