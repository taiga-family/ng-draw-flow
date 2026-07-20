# @ng-draw-flow/layouts

Dynamic strict-tree positioning for graphs rendered by `@ng-draw-flow/core`.

- [Layouts documentation](https://taiga-family.github.io/ng-draw-flow/documentation/layouts)
- [Interactive dynamic-tree example](https://taiga-family.github.io/ng-draw-flow/examples/dynamic-layout)
- [`@ng-draw-flow/core`](https://npmjs.com/package/@ng-draw-flow/core)
- [Source and issues](https://github.com/taiga-family/ng-draw-flow)

## Features

- Left-to-right, right-to-left, top-to-bottom and bottom-to-top trees
- Fixed or measured node dimensions
- Configurable level and sibling gaps
- Stable branch ordering for nodes with multiple outputs
- Anchored updates that keep the activated parent under the pointer
- Position animation through the core configuration
- Signal-based running, result and error state

The package uses `d3-hierarchy` internally. Applications configure the supported tree behavior and inject
`DfAutoLayoutService`; they do not instantiate or manage a D3 engine.

## Installation

```bash
npm install @ng-draw-flow/layouts
```

A compatible `@ng-draw-flow/core` installation is required as a peer dependency.

## Basic Setup

Register layouts next to the core editor configuration. The following setup creates a non-draggable strict tree with
measured node dimensions and animated position updates.

```ts
import {DfArrowhead, DfConnectionType, provideNgDrawFlowConfigs} from '@ng-draw-flow/core';
import {DfNodeSizingStrategy, DfTreeLayoutDirection, provideNgDrawFlowLayouts} from '@ng-draw-flow/layouts';

providers: [
  provideNgDrawFlowConfigs({
    nodes: {
      treeNode: TreeNodeComponent,
    },
    connection: {
      type: DfConnectionType.SmoothStep,
      arrowhead: {type: DfArrowhead.ArrowClosed},
    },
    options: {
      nodesDraggable: false,
      connectionsCreatable: false,
      connectionsDeletable: false,
    },
    positionAnimation: {
      duration: 280,
      easing: 'ease-in-out',
    },
  }),
  provideNgDrawFlowLayouts({
    tree: {
      direction: DfTreeLayoutDirection.LeftToRight,
      nodeSizing: {
        strategy: DfNodeSizingStrategy.Measured,
        fallback: {width: 180, height: 64},
      },
      levelGap: 96,
      siblingGap: 32,
    },
  }),
];
```

Call `apply()` after the editor is attached. The service reads the current model from core, calculates positions and
writes the resulting model back through the editor and its form control.

```ts
import {type AfterViewInit, inject} from '@angular/core';
import {DfAutoLayoutService} from '@ng-draw-flow/layouts';

export class TreeEditorComponent implements AfterViewInit {
  private readonly autoLayout = inject(DfAutoLayoutService);

  readonly layoutRunning = this.autoLayout.running;
  readonly layoutResult = this.autoLayout.result;
  readonly layoutError = this.autoLayout.error;

  ngAfterViewInit(): void {
    this.autoLayout.apply();
  }
}
```

## Dynamic Children

An action output is a click-only `df-output` that requests an application action instead of starting a draggable draft
connection. It does not create a node automatically. The `(activated)` handler must update the model with both the new
node and its connection.

```html
<ng-template #addChildIcon>
  <tui-icon icon="@tui.plus" />
</ng-template>

<df-output
  title="Add child"
  [content]="addChildIcon"
  [layoutOrder]="0"
  [connectorData]="{
    nodeId: nodeIdSignal(),
    connectorId: nodeIdSignal() + '-output-1',
    single: false,
    data: {childType: 'treeNode'},
  }"
  [mode]="outputMode.Action"
  (activated)="addChild($event)"
/>
```

Pass the changed model directly to `apply()`. `anchorNodeId` translates the complete result so the activated parent
keeps its current canvas position while the rest of the tree is rearranged.

```ts
import {
  DfConnectionPoint,
  type DfDataConnectorConfig,
  type DfDataNode,
} from '@ng-draw-flow/core';

private addChild({nodeId, connectorId}: DfDataConnectorConfig): void {
  const model = this.form.getRawValue();
  const parent = model.nodes.find(({id}) => id === nodeId);

  if (!parent) {
    return;
  }

  const childId = crypto.randomUUID();
  const position = 'position' in parent ? parent.position : {x: 0, y: 0};
  const child: DfDataNode = {
    id: childId,
    data: {type: 'treeNode', title: 'New node'},
    position: {...position},
  };

  this.autoLayout.apply({
    anchorNodeId: nodeId,
    model: {
      nodes: [...model.nodes, child],
      connections: [
        ...model.connections,
        {
          source: {
            nodeId,
            connectorId,
            connectorType: DfConnectionPoint.Output,
          },
          target: {
            nodeId: childId,
            connectorId: childId + '-input-1',
            connectorType: DfConnectionPoint.Input,
          },
        },
      ],
    },
  });
}
```

The child component must render the target `df-input` with the same connector id. Connection paths continue to use the
real connector elements from core; layouts only calculate node positions.

## Node Sizing

### Fixed

Fixed sizing is the default and assumes `180 x 64px` nodes. Provide an explicit size when every node follows another
known dimension.

```ts
provideNgDrawFlowLayouts({
  tree: {
    nodeSizing: {
      strategy: DfNodeSizingStrategy.Fixed,
      size: {width: 240, height: 80},
    },
  },
});
```

### Measured

Use measured sizing when node dimensions depend on text, forms or expandable content. The fallback is used before every
current node has reported its DOM size.

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

Measured sizing opts into core's node `ResizeObserver`, coalesces size changes per animation frame and reapplies the
layout after all current nodes have measurements. DOM dimensions remain runtime view state and are not stored in
`DfDataModel`.

## Branch Order

When one parent has children connected through multiple outputs, assign every used output a unique zero-based
`layoutOrder`.

- Horizontal trees interpret output order from top to bottom.
- Vertical trees interpret output order from left to right.
- Children connected through the same output retain their order from `DfDataModel.connections`.
- A parent with only one connected output does not need `layoutOrder`.

## Tree Options

| Option                 | Behavior                                                                    |
| ---------------------- | --------------------------------------------------------------------------- |
| `direction`            | Tree orientation. Defaults to `LeftToRight`.                                |
| `nodeSizing`           | Fixed or measured node dimensions.                                          |
| `levelGap`             | Space between parent and child levels. Defaults to `80`.                    |
| `siblingGap`           | Space between sibling nodes. Defaults to `32`.                              |
| `preserveRootPosition` | Keeps the model's root position by default. Set to `false` to use `origin`. |
| `origin`               | Root position when the existing root position is not preserved.             |
| `rootId`               | Verifies the expected root id. The model must still have exactly one root.  |

## Strict-tree Constraints

The current package supports strict trees only. A valid model must have:

- exactly one root with no incoming connection;
- no cycles;
- at most one parent for every non-root node;
- no disconnected nodes;
- connections that reference existing nodes.

Invalid models are exposed through `DfAutoLayoutService.error` as `DfTreeLayoutError`. General DAG layouts and custom
layout engines are not supported.
