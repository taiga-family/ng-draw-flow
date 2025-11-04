```html
<div
  class="editor"
  [ngClass]="{fullscreen: fullscreen$ | async}"
>
  <ng-draw-flow
    [formControl]="form"
    (connectionCreated)="onConnectionCreated($event)"
    (connectionDeleted)="onConnectionDeleted($event)"
    (connectionSelected)="onConnectionSelected($event)"
    (nodeDeleted)="onNodeDeleted($event)"
    (nodeMoved)="onNodeMoved($event)"
    (nodeSelected)="onNodeSelected($event)"
    (scale)="onScaleChange($event)"
  />

  <button
    class="add"
    size="s"
    tuiButton
    type="button"
    (click)="addNodeToDrawFlow()"
  >
    Add node
  </button>

  <button
    class="fullscreen-btn"
    size="s"
    tuiButton
    type="button"
    (click)="toggleFullscreen()"
  >
    {{ (fullscreen$ | async) ? 'Exit from fullscreen' : 'Fullscreen' }}
  </button>

  <div class="scale-controls">
    <button
      size="s"
      tuiButton
      type="button"
      (click)="drawFlowStore.zoomOut()"
    >
      zoomOut
    </button>

    <tui-textfield
      class="scale-field"
      tuiTextfieldSize="m"
      tuiTheme="light"
      [tuiTextfieldCleaner]="false"
    >
      <label tuiLabel>Set scale</label>

      <input
        aria-label="Set scale"
        tuiInputNumber
        [formControl]="scaleControl"
        [max]="panZoomOptions.maxZoom"
        [min]="panZoomOptions.minZoom"
        [step]="0.05"
      />
    </tui-textfield>

    <div class="scale-value">{{ drawFlowStore.scale$ | async }}%</div>

    <button
      size="s"
      tuiButton
      type="button"
      (click)="drawFlowStore.zoomIn()"
    >
      zoomIn
    </button>
  </div>

  <div class="selection-info">
    <ng-container *ngIf="drawFlowStore.selectedNode() as node; else connectionInfo">
      <div class="selection-title">Selected node</div>
      <div class="selection-value">{{ node.id }}</div>
    </ng-container>

    <ng-template #connectionInfo>
      <ng-container
        *ngIf="
          drawFlowStore.selectedConnection() as connection;
          else noSelection
        "
      >
        <div class="selection-title">Selected connection</div>
        <div class="selection-value">{{ connection.source.nodeId }} → {{ connection.target.nodeId }}</div>
      </ng-container>
    </ng-template>

    <ng-template #noSelection>
      <div class="selection-title">Nothing selected</div>
    </ng-template>
  </div>
</div>
```
