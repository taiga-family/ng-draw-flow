```ts
providers: [
  provideNgDrawFlowConfigs({
    nodes: {
      yourNode1: YourNodeComponent1,
      yourNode2: YourNodeComponent2,
      yourNode3: YourNodeComponent3,
    },
    connection: {
      type: DfConnectionType.Bezier,
      curvature: 50,
    },
    options: {
      nodeDragThreshold: 1,
    },
  }),
];
```
