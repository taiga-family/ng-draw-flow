```ts
const connection: DfDataConnection = {
  source,
  target,
  label: {
    content: 'Approved',
    context: {status: 'success'},
  },
};

const node: DfDataNode = {
  id: 'review',
  position: {x: 0, y: 0},
  data: {
    type: 'review',
    connectionLabel: {content: 'Needs review'},
  },
};
```
