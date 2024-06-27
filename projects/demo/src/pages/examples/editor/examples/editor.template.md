```html
<div
  class="editor"
  [ngClass]="{fullscreen: fullscreen$ | async}"
>
  <ng-draw-flow
    [formControl]="form"
    (connectionCreated)="onConnectionCreated($event)"
    (connectionDeleted)="onConnectionDeleted($event)"
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
      (click)="editor.zoomOut()"
    >
      zoomOut
    </button>

    <div class="scale-value">{{ currentScale$ | async }}%</div>

    <button
      size="s"
      tuiButton
      type="button"
      (click)="editor.zoomIn()"
    >
      zomIn
    </button>
  </div>
</div>
```
