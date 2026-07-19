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
    nodeId: nodeIdSignal(),
    connectorId: nodeIdSignal() + '-output-1',
    single: false,
    data: {label: 'Add child'},
  }"
  [content]="connectorContent"
/>
```
