# @ng-draw-flow/core

The core Angular package for building node-based editors, workflow builders and interactive diagrams with custom node
components.

- [Documentation](https://taiga-family.github.io/ng-draw-flow/documentation/quickstart)
- [Examples](https://taiga-family.github.io/ng-draw-flow/examples/overview)
- [Source and issues](https://github.com/taiga-family/ng-draw-flow)

## Features

- Angular components as graph nodes
- Reactive Forms and Signal Forms CVA data model
- Custom input and output connectors
- Bezier and smooth-step connections
- Selection, dragging and deletion
- Pan, zoom and camera controls
- Configurable read-only and constrained modes
- Validation APIs
- Signal snapshots and RxJS event streams
- Polymorpheus content inside connectors

Node positions are part of `DfDataModel`. Core does not run an automatic layout, so applications retain complete control
over manually placed, draggable or externally calculated positions.

## Requirements

- `@angular/common` and `@angular/core` 19 or later
- `@angular/forms` 19 or later
- `@taiga-ui/polymorpheus` 5
- `@ng-web-apis/platform` and `@ng-web-apis/resize-observer` 5.2
- RxJS 7 or later

## Installation

```bash
npm install @ng-draw-flow/core
```

## Basic Usage

Create a custom node component. Connector ids must be unique across the complete graph; prefixing them with the node id
is the recommended convention.

```ts
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DfInputComponent, DfOutputComponent, DrawFlowBaseNode} from '@ng-draw-flow/core';

@Component({
  standalone: true,
  selector: 'app-task-node',
  imports: [DfInputComponent, DfOutputComponent],
  template: `
    @if (!startNodeSignal()) {
      <df-input
        class="input"
        [connectorData]="{
          nodeId: nodeIdSignal(),
          connectorId: nodeIdSignal() + '-input-1',
          single: false,
        }"
      />
    }

    <strong>{{ modelSignal().title }}</strong>

    @if (!endNodeSignal()) {
      <df-output
        class="output"
        [connectorData]="{
          nodeId: nodeIdSignal(),
          connectorId: nodeIdSignal() + '-output-1',
          single: false,
        }"
      />
    }
  `,
  styles: `
    :host {
      position: relative;
      display: block;
      min-inline-size: 10rem;
    }

    .input,
    .output {
      position: absolute;
      inset-block-start: 50%;
      transform: translateY(-50%);
    }

    .input {
      inset-inline-start: -1rem;
    }

    .output {
      inset-inline-end: -1rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskNodeComponent extends DrawFlowBaseNode {}
```

Register the node type and bind a graph model to `NgDrawFlowComponent`.

```ts
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
  DfArrowhead,
  DfConnectionPoint,
  DfConnectionType,
  type DfDataModel,
  NgDrawFlowComponent,
  provideNgDrawFlowConfigs,
} from '@ng-draw-flow/core';

import {TaskNodeComponent} from './task-node.component';

@Component({
  standalone: true,
  selector: 'app-task-editor',
  imports: [NgDrawFlowComponent, ReactiveFormsModule],
  template: `
    <ng-draw-flow [formControl]="graph" />
  `,
  providers: [
    provideNgDrawFlowConfigs({
      nodes: {task: TaskNodeComponent},
      connection: {
        type: DfConnectionType.SmoothStep,
        arrowhead: {type: DfArrowhead.ArrowClosed},
      },
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskEditorComponent {
  readonly graph = new FormControl<DfDataModel>(
    {
      nodes: [
        {
          id: 'task-1',
          data: {type: 'task', title: 'Plan'},
          position: {x: 0, y: 0},
          startNode: true,
        },
        {
          id: 'task-2',
          data: {type: 'task', title: 'Build'},
          position: {x: 280, y: 80},
          endNode: true,
        },
      ],
      connections: [
        {
          source: {
            nodeId: 'task-1',
            connectorId: 'task-1-output-1',
            connectorType: DfConnectionPoint.Output,
          },
          target: {
            nodeId: 'task-2',
            connectorId: 'task-2-input-1',
            connectorType: DfConnectionPoint.Input,
          },
        },
      ],
    },
    {nonNullable: true},
  );
}
```

User interactions update the form control. To apply an application-side graph change, create the next immutable model
and call `graph.setValue(nextModel)`.

## Forms Integration

The editor uses one public integration contract: the existing `ControlValueAccessor`. Reactive Forms continues to work
on the Angular 19 baseline, while a newer application can use Angular's Signal Forms CVA interoperability through
`[formField]`. There is no second editor component, adapter directive or manual value synchronization, and core does not
implement `FormValueControl` or import `@angular/forms/signals`.

### Verification matrix

| Forms integration        | Version pinned in this repository | Verification                                                                        |
| ------------------------ | --------------------------------- | ----------------------------------------------------------------------------------- |
| Reactive Forms           | Angular 19.2.25                   | Main workspace Jest suites and the production library build.                        |
| Signal Forms through CVA | Angular 22.1.4                    | Packaged-consumer AOT build and 13 real `FormField` runtime tests pass from `.tgz`. |

The second row is a pinned compatibility target, not a support claim for Angular 21.2 or any other untested release. The
target builds `@ng-draw-flow/core`, installs its generated tarball in `integration/angular-22-signal-forms`, compiles
strict/AOT templates and runs against the real `FormField`. It does not use source path aliases or a mocked `NgControl`.
The documentation demo stays on Angular 19 and Reactive Forms.

### Signal Forms

The following is the minimal Signal Forms binding. The validators are opt-in; omit either rule if it does not belong to
your application's schema.

```ts
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {disabled, form, FormField, readonly, validate} from '@angular/forms/signals';
import {
  type DfDataModel,
  dfCycleDetectionSignalValidator,
  dfIsolatedNodesSignalValidator,
  NgDrawFlowComponent,
} from '@ng-draw-flow/core';

@Component({
  standalone: true,
  selector: 'app-signal-editor',
  imports: [FormField, NgDrawFlowComponent],
  template: `
    <ng-draw-flow [formField]="editorForm.graph" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalEditorComponent {
  readonly editorDisabled = signal(false);
  readonly editorReadonly = signal(false);
  readonly model = signal<{graph: DfDataModel}>({
    graph: {nodes: [], connections: []},
  });

  readonly editorForm = form(this.model, (path) => {
    validate(path.graph, dfCycleDetectionSignalValidator());
    validate(path.graph, dfIsolatedNodesSignalValidator());
    disabled(path.graph, {when: () => this.editorDisabled()});
    readonly(path.graph, {when: () => this.editorReadonly()});
  });
}
```

`FormField` supplies value and form state (`errors`, `disabled`, `readonly`, `invalid`, `touched`, `dirty` and
`pending`) to the CVA host. Do not add a manual `[errors]` binding for this normal case.

### Validators and node errors

The built-in algorithms are available in three forms:

- `dfValidateCycles(model)` and `dfValidateIsolatedNodes(model)` are pure graph checks;
- `dfCycleDetectionValidator()` and `dfIsolatedNodesValidator()` retain their existing `ValidatorFn` API and error keys
  for Reactive Forms;
- `dfCycleDetectionSignalValidator()` and `dfIsolatedNodesSignalValidator()` are structurally compatible callbacks for
  Signal Forms `validate()` without adding a Signal Forms dependency to core.

Reactive Forms usage remains unchanged:

```ts
readonly graph = new FormControl<DfDataModel>(initialGraph, {
  nonNullable: true,
  validators: [dfCycleDetectionValidator(), dfIsolatedNodesValidator()],
});
```

Graph errors mark their referenced node wrappers invalid. Supported boundaries are:

```ts
// Existing Reactive Forms shapes
{hasCycle: true, cycleNodes: ['task-1', 'task-2']}
{hasIsolatedNodes: true, isolatedNodes: ['task-3']}
{invalidNodes: ['task-4']}

// Structural Signal Forms/custom shape
{kind: 'businessRule', message: 'Resolve this node', nodeIds: ['task-5']}

// Compatibility wrapper
{kind: 'businessRule', context: {nodeIds: ['task-5']}}
```

IDs are deduplicated. `null`, an empty error array or an empty map clears graph-level highlighting. Unknown objects and
Angular field trees are not traversed. With `[formField]`, its explicit `errors` state has priority (including an empty
value); without that input, a real Reactive Forms `NgControl` remains the source. Error state is local to each editor
instance and continues to combine with a custom node's `invalidState` override.

### Value, touch and reset semantics

- A completed node or connection edit produces one consistent `DfDataModel`. Removing a node publishes the node and all
  of its related connections as one atomic result.
- Incoming form values and `writeValue` never echo `onChange`. A public mutating command such as `setDataModel()`,
  `removeNode()` or `removeConnection()` still updates the bound form and its documented outputs.
- The editor does not mutate the application-owned input model. Node data may continue to contain component references,
  functions and Polymorpheus content.
- Pan, zoom and selection do not change the graph value or make the field dirty.
- A canvas interaction reports touch when it completes. A focused child reports touch only when focus leaves the whole
  editor; moving between inputs or buttons inside a node does not count as leaving it.
- A form reset or incoming replacement does not itself mark the control dirty/touched. Resetting a nullable binding to
  `null` (or writing `undefined`) renders an empty `{nodes: [], connections: []}` model, and the next completed
  interaction can mark the reset field touched again.
- `resetPosition()` keeps its separate public meaning: it resets pan/zoom camera state, not the form value.

Internal form value notifications use `debounceTime(10)`, while the graph and store update immediately. Public commands
remain synchronous and replace any pending notification. Reset, incoming model replacement and destruction cancel
pending notifications. The editor flushes the pending value before reporting touch, preserving Signal Forms
`debounce(path.graph, 'blur')` and Reactive Forms `updateOn: 'blur'` behavior without a delayed duplicate.

### Disabled, readonly and custom nodes

Reactive Forms disabled state is applied through `setDisabledState`; Signal Forms also supplies `disabled` and
`readonly` state inputs. Disabled and readonly both block node moves/deletes and connection creates/deletes, including
keyboard actions and an edit that was in progress when the state changed. Programmatic form writes and public commands
remain available. Readonly mode still permits viewing, focus, pan and zoom, subject to the existing editor options.

Reactive Forms applications disable the editor with `graph.disable()`/`graph.enable()`. Since Reactive Forms has no
readonly control state, bind that state explicitly when it is needed:

```html
<ng-draw-flow
  [formControl]="graph"
  [readonly]="editorReadonly()"
/>
```

The host exposes `aria-disabled`, `aria-readonly`, `aria-invalid` and `aria-busy`, plus explicit state classes. Signal
Forms does not need `ng-invalid` or `ng-touched` CSS classes for these states to be visible to the component.

Every component extending `DrawFlowBaseNode` receives `disabledSignal()` and `readonlySignal()`. Bind them explicitly to
interactive controls owned by the custom node:

```html
<input
  [disabled]="disabledSignal()"
  [readOnly]="readonlySignal()"
  [value]="modelSignal().title"
/>
<button
  type="button"
  [disabled]="disabledSignal() || readonlySignal()"
>
  Add item
</button>
```

This state does not automatically disable an arbitrary nested Angular form or implement its business validation. The
node component remains responsible for connecting those controls and for combining local validation with `invalidState`
when required.

### Conditional rendering

Signal Forms `hidden` state is application view state rather than an editor mutation. Render conditionally and keep the
graph model outside the `@if` block:

```html
@if (showEditor()) {
<ng-draw-flow [formField]="editorForm.graph" />
}
```

Destroying and recreating the view does not remove the graph from the model. The recreated editor receives the current
value. Hide/show does not call `resetPosition()`; camera state belongs to the component instance.

## Configuration

`provideNgDrawFlowConfigs` merges application options with the defaults:

```ts
provideNgDrawFlowConfigs({
  nodes: {task: TaskNodeComponent},
  connection: {
    type: DfConnectionType.SmoothStep,
    curvature: 16,
    arrowhead: {
      type: DfArrowhead.ArrowClosed,
      width: 10,
      height: 6,
    },
  },
  options: {
    nodesDraggable: true,
    nodesDeletable: true,
    connectionsCreatable: true,
    connectionsDeletable: true,
  },
});
```

See [Configuration & Public API](https://taiga-family.github.io/ng-draw-flow/documentation/configuration-and-public-api)
for all options and styling variables.

## Dynamic interaction permissions

Bind `[interactionOptions]="interactionOptions()"` on `ng-draw-flow` alongside your form binding:

```ts
import {signal} from '@angular/core';
import {type DfInteractionOptions} from '@ng-draw-flow/core';

readonly interactionOptions = signal<Partial<DfInteractionOptions>>({
  nodesDraggable: true,
  nodesDeletable: false,
  connectionsCreatable: true,
  connectionsDeletable: false,
});

allowDeletion(): void {
  this.interactionOptions.update((options) => ({...options, nodesDeletable: true}));
}
```

Replace the object when changing permissions. Each supplied field overrides its provider default. Omitted fields
(including after setting `{}`) inherit that default; all four defaults are `true`. Form `disabled` or `readonly` always
blocks all four actions; unlocking restores the latest configured permissions. Individual restrictions do not set the
form's readonly state.

Revoking dragging or connection creation cancels the matching active gesture; changing deletion permissions does not.
These permissions restrict user gestures only: programmatic model writes and public commands remain available. Custom
node content remains application-controlled.

The four matching fields under `provideNgDrawFlowConfigs({options: ...})` are deprecated but still supported as static
defaults. Other provider options are unchanged.

## State and Commands

`NgDrawFlowStoreService` exposes signal snapshots, RxJS streams and commands without requiring a component reference:

```ts
import {inject} from '@angular/core';
import {NgDrawFlowStoreService} from '@ng-draw-flow/core';

private readonly drawFlow = inject(NgDrawFlowStoreService);

readonly selectedNode = this.drawFlow.selectedNode;
readonly selectedConnection = this.drawFlow.selectedConnection;
readonly scale = this.drawFlow.scale;

zoomIn(): void {
  this.drawFlow.zoomIn();
}

removeSelectedNode(): void {
  const node = this.selectedNode();

  if (node) {
    this.drawFlow.removeNode(node.id);
  }
}
```

The same state is available as observables such as `dataModel$`, `selectedNode$`, `nodeMoved$` and `connectionCreated$`.

## Connectors

Regular `df-output` connectors start draggable connections. Both connector types accept custom Polymorpheus content,
position metadata and `single` constraints. `DfOutputMode.Action` is an opt-in click-only output that emits
`(activated)` instead of starting a draft connection; it is primarily useful when an application owns graph mutations,
including dynamic tree layouts.

See the [connector documentation](https://taiga-family.github.io/ng-draw-flow/documentation/connectors) for regular and
action-output examples.

## Dynamic Layouts

Automatic positioning is provided separately by
[`@ng-draw-flow/layouts`](https://npmjs.com/package/@ng-draw-flow/layouts). Core has no runtime dependency on the
layouts package.

## Migration

See the [migration guides](https://taiga-family.github.io/ng-draw-flow/documentation/migrations) when upgrading between
major versions.
