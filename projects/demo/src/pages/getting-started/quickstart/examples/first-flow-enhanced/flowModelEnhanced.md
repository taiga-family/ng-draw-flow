```ts
protected firstFlowEnhanced: DfDataModel = {
    nodes: new Map().set('node-1', {
        id: 'node-1',
        data: {
            type: 'enhancedNode',
            text: 'This is a base node with data injection',
        },
        position: {x: 0, y: 0},
    }),
    connections: [],
};
```
