```html
<df-input
  class="connector connector_left"
  *ngIf="!startNode"
  [connectorData]="{nodeId, connectorId: nodeId + '-input-1', single: false}"
  [position]="connectorPosition.Left"
/>
```
