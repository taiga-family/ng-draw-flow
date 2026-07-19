```html
<df-input
  [connectorData]="{
    nodeId,
    connectorId: nodeId + '-input-1',
    single: true,
  }"
/>

@for (output of outputs; track output.id) {
<df-output
  [layoutOrder]="$index"
  [connectorData]="{
      nodeId,
      connectorId: output.id,
      single: false,
    }"
/>
}
```
