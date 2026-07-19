```ts
providers: [
  provideNgDrawFlowConfigs({
    nodes: {
      task: TaskNodeComponent,
      decision: DecisionNodeComponent,
    },
    connection: {
      type: DfConnectionType.SmoothStep,
      curvature: 16,
      arrowhead: {type: DfArrowhead.ArrowClosed, width: 12, height: 8},
    },
    options: {
      nodeDragThreshold: 1,
      nodesDraggable: true,
      nodesDeletable: true,
      connectionsCreatable: true,
      connectionsDeletable: true,
    },
  }),
];
```
