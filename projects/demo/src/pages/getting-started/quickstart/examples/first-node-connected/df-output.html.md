```html
<df-output
  class="connector connector_right"
  *ngIf="!endNode"
  [connectorData]="{nodeId, connectorId: nodeId + '-output-1', single: false}"
  [position]="connectorPosition.Right"
/>
```
