```ts
private readonly autoLayout = inject(DfAutoLayoutService);

readonly outputMode = DfOutputMode;

addChild({nodeId, connectorId}: DfDataConnectorConfig): void {
  const model = this.form.getRawValue();
  const parent = model.nodes.find(({id}) => id === nodeId);

  if (!parent) {
    return;
  }

  const childId = crypto.randomUUID();
  const position = 'position' in parent ? {...parent.position} : {x: 0, y: 0};

  this.autoLayout.apply({
    anchorNodeId: nodeId,
    model: {
      nodes: [
        ...model.nodes,
        {
          id: childId,
          data: {type: 'task', title: 'New task'},
          position,
        },
      ],
      connections: [
        ...model.connections,
        {
          source: {
            nodeId,
            connectorId,
            connectorType: DfConnectionPoint.Output,
          },
          target: {
            nodeId: childId,
            connectorId: `${childId}-input-1`,
            connectorType: DfConnectionPoint.Input,
          },
        },
      ],
    },
  });
}
```
