```html
<ng-template #addChildIcon>
  <tui-icon icon="@tui.plus" />
</ng-template>

<df-output
  title="Add child"
  [connectorData]="{
    nodeId,
    connectorId: nodeId + '-add-child',
    single: false,
    data: {childType: 'task'},
  }"
  [content]="addChildIcon"
  [mode]="outputMode.Action"
  (activated)="addChild($event)"
/>
```
