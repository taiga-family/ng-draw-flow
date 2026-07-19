```html
<ng-template
  #connectorContent
  let-connector
>
  <tui-icon icon="@tui.plus" />
  <span>{{ connector.data?.['label'] }}</span>
</ng-template>

<df-output
  [connectorData]="{
    nodeId,
    connectorId: nodeId + '-output-1',
    single: false,
    data: {label: 'Add child'},
  }"
  [content]="connectorContent"
/>
```
