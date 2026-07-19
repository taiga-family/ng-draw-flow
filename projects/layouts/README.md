# @ng-draw-flow/layouts

Strict-tree automatic layouts for [`@ng-draw-flow/core`](../ng-draw-flow).

## Installation

```bash
npm install @ng-draw-flow/layouts
```

The package expects a compatible `@ng-draw-flow/core` version to already be installed as a peer dependency.

## Tree layout

The built-in strict-tree layout uses `d3-hierarchy` internally and supports left-to-right, right-to-left, top-to-bottom
and bottom-to-top trees. Applications do not instantiate the D3 implementation.

```ts
import {inject} from '@angular/core';
import {DfAutoLayoutService} from '@ng-draw-flow/layouts';

private readonly autoLayout = inject(DfAutoLayoutService);

readonly layoutRunning = this.autoLayout.running;
readonly layoutResult = this.autoLayout.result;
readonly layoutError = this.autoLayout.error;

ngAfterViewInit(): void {
  this.autoLayout.apply();
}
```

Configure the direction, node sizing and level or sibling gaps only when the defaults do not match the graph:

```ts
import {DfNodeSizingStrategy, DfTreeLayoutDirection, provideNgDrawFlowLayouts} from '@ng-draw-flow/layouts';

provideNgDrawFlowLayouts({
  tree: {
    direction: DfTreeLayoutDirection.TopToBottom,
    nodeSizing: {
      strategy: DfNodeSizingStrategy.Fixed,
      size: {width: 240, height: 80},
    },
    levelGap: 120,
    siblingGap: 40,
  },
});
```

Layouts calculate node positions only. Connection geometry continues to come from the `df-input` and `df-output`
components rendered by each custom node, so multiple outputs can create independent branches.

Fixed sizing is the default and assumes 180 x 64px nodes. For nodes whose dimensions depend on rendered content, opt
into measured sizing and provide the size used before DOM measurement is available:

```ts
provideNgDrawFlowLayouts({
  tree: {
    nodeSizing: {
      strategy: DfNodeSizingStrategy.Measured,
      fallback: {width: 180, height: 64},
    },
  },
});
```

Measured sizing reuses core's node `ResizeObserver`, coalesces updates per animation frame and reapplies the layout once
all current nodes have reported their dimensions. Measurements remain runtime view state and are not added to
`DfDataModel`.

`DfAutoLayoutService` reads the current graph from `NgDrawFlowStoreService`, applies the engine and writes the resulting
model back to the editor.

For interactive mutations, pass the node that should remain under the pointer. The service translates the whole layout
result without changing the relative node positions:

```ts
autoLayout.apply({
  model: createModelWithChild(parentId),
  anchorNodeId: parentId,
});
```

Use an action output in a custom node when clicking a connector should create a child instead of starting a draft
connection. The `activated` event returns the complete connector config, including optional application data:

```html
<ng-template #addChildIcon>
  <tui-icon icon="@tui.plus" />
</ng-template>

<df-output
  [content]="addChildIcon"
  [layoutOrder]="0"
  [connectorData]="{
    nodeId,
    connectorId: nodeId + '-add-child',
    single: false,
    data: {childType: 'task'},
  }"
  [mode]="outputMode.Action"
  (activated)="addChild($event)"
/>
```

`DfOutputMode.Action` remains interactive when regular connection creation is disabled and never starts a draggable
draft connection. Existing `single` connector constraints still apply.

When a tree node has children connected through multiple outputs, assign every used output a unique zero-based
`layoutOrder`. Horizontal trees interpret the order from top to bottom; vertical trees interpret it from left to right.
Children connected through the same output retain their order from the model. A single connected output does not require
`layoutOrder`.

Enable smooth position transitions in the core configuration:

```ts
provideNgDrawFlowConfigs({
  positionAnimation: {
    duration: 280,
    easing: 'ease-in-out',
  },
});
```

The tree layout requires exactly one root, no cycles and at most one parent per node. General directed acyclic graphs
and custom layout engines are not currently supported.
