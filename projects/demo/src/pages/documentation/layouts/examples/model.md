```html
<ng-template #addChildIcon>
  <tui-icon icon="@tui.plus" />
</ng-template>

@if (!startNodeSignal()) {
<df-input
  class="input"
  [connectorData]="{
      nodeId: nodeIdSignal(),
      connectorId: nodeIdSignal() + '-input-1',
      single: true,
    }"
/>
}

<strong>{{ modelSignal().title }}</strong>

<df-output
  class="output output-primary"
  [content]="addChildIcon"
  [connectorData]="{
    nodeId: nodeIdSignal(),
    connectorId: nodeIdSignal() + '-add-primary',
    single: false,
    data: {branch: 'primary'},
  }"
  [layoutOrder]="0"
  [mode]="outputMode.Action"
  (activated)="addChild($event)"
/>

<df-output
  class="output output-secondary"
  [content]="addChildIcon"
  [connectorData]="{
    nodeId: nodeIdSignal(),
    connectorId: nodeIdSignal() + '-add-secondary',
    single: false,
    data: {branch: 'secondary'},
  }"
  [layoutOrder]="1"
  [mode]="outputMode.Action"
  (activated)="addChild($event)"
/>
```
