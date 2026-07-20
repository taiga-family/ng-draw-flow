```html
<ng-template #addChildIcon>
  <tui-icon icon="@tui.plus" />
</ng-template>

<df-output
  title="Add child"
  [connectorData]="{
    nodeId: nodeIdSignal(),
    connectorId: nodeIdSignal() + '-add-child',
    single: false,
    data: {childType: 'task'},
  }"
  [content]="addChildIcon"
  [layoutOrder]="0"
  [mode]="outputMode.Action"
  (activated)="addChild($event)"
/>
```
