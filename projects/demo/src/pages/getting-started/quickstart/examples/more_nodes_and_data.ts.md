```ts
public finalFlow: DfDataModel = {
    nodes: new Map()
    .set('node-1', {
        id: 'node-1',
        data: {
            type: 'firstNodeConnected',
            text: 'Start Node',
        },
        position: {x: -150, y: 0},
        startNode: true,
    })
    .set('node-2', {
        id: 'node-2',
        data: {
            type: 'firstNodeConnected',
            text: 'Child Node 1',
        },
        position: {x: 100, y: 50},
    })
    .set('node-3', {
        id: 'node-3',
        data: {
            type: 'firstNodeConnected',
            text: 'Child Node 2',
        },
        position: {x: 100, y: -50},
    })
    .set('node-4', {
        id: 'node-4',
        data: {
            type: 'firstNodeConnected',
            text: 'End Node',
        },
        position: {x: 350, y: 0},
        endNode: true,
    }),
    connections: [
        {
            source: { nodeId: 'node-1', connectorType: DfConnectionPoint.Output, connectorId: 'node-1-output-1'},
            target: { nodeId: 'node-2', connectorType: DfConnectionPoint.Input, connectorId: 'node-2-input-1' },
        },
        {
            source: { nodeId: 'node-1', connectorType: DfConnectionPoint.Output, connectorId: 'node-1-output-1'},
            target: { nodeId: 'node-3', connectorType: DfConnectionPoint.Input, connectorId: 'node-3-input-1' },
        },
        {
            source: { nodeId: 'node-2', connectorType: DfConnectionPoint.Output, connectorId: 'node-2-output-1'},
            target: { nodeId: 'node-4', connectorType: DfConnectionPoint.Input, connectorId: 'node-4-input-1' },
        },
        {
            source: { nodeId: 'node-3', connectorType: DfConnectionPoint.Output, connectorId: 'node-3-output-1'},
            target: { nodeId: 'node-4', connectorType: DfConnectionPoint.Input, connectorId: 'node-4-input-1' },
        },
    ],
};
```
