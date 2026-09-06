# Angular 22 Signal Forms consumer

This application is an isolated distribution-level compatibility fixture for `@ng-draw-flow/core`. It deliberately uses
Angular `22.1.4` while the library is built by the main Angular 19 workspace.

The fixture imports `@angular/forms/signals` only in this directory and binds the published component as a regular CVA:

```html
<ng-draw-flow [formField]="editorForm.graph" />
```

There is no source path mapping and no Signal Forms adapter directive. Before building or testing, `prepare:core` packs
`dist/ng-draw-flow` and installs that tarball into this consumer with normal peer dependency resolution.

## Run locally

Use a Node version supported by Angular 22.1.4 (for example Node 24.15 or newer), then run from the repository root:

```bash
npx nx build ng-draw-flow --configuration=production
npm --prefix integration/angular-22-signal-forms ci
npm --prefix integration/angular-22-signal-forms run verify
```

`verify` installs the freshly built tarball, runs an AOT production build with `strictTemplates`, and executes the real
`[formField]` runtime tests in jsdom. The dependency versions in `package.json` are exact so this fixture does not
silently move to another Angular minor.

## Try the demo

After the commands above, start the isolated consumer:

```bash
npm --prefix integration/angular-22-signal-forms start
```

Open [http://127.0.0.1:4222](http://127.0.0.1:4222). The `src/index.html` file must be served by Angular; opening it as
a `file://` URL will not bootstrap the application. If core changes, rebuild it and run `prepare:core` again before
restarting the server.

The page displays the field state, schema errors, and live form model. A short manual check:

1. Drag a node or delete a selected connection. The model should update immediately and `dirty` should become `true`.
2. Click **Reset form**, then **Load cyclic graph**. Both nodes should be marked invalid with a `hasCycle` error; the
   application write should leave `dirty` as `false`.
3. Reset again and toggle **Toggle schema error** twice. The target node's error should appear and clear without a model
   change.
4. Focus a node button, then move focus outside the editor. `touched` should become `true`. Reset and repeat to check
   that touching still works after reset. Moving focus between nodes should not touch the field.
5. Toggle disabled or readonly and try dragging/deleting nodes or creating/deleting connections. Editing should be
   blocked. **Replace from application** should still work because programmatic writes are allowed.
6. Turn those toggles off, use **Reset to empty**, then **Reset form**. Toggle rendering off and on; the graph should be
   restored from the same form model.

The **through editor** buttons exercise public programmatic commands. They remain usable while disabled/readonly; the
editing restriction applies to user interactions inside the editor. Schema errors and state toggles are external
signals, so resetting the field does not clear them. Blur debounce and asynchronous validation are covered by the
runtime tests rather than enabled in this manual demo.

## What it covers

The runtime suite uses the actual `FormField` directive and the component's real `NG_VALUE_ACCESSOR`; it does not mock
`NgControl`. It covers:

- model-to-editor and editor-to-model propagation, synchronous public commands, and atomic node/connection deletion;
- `dfCycleDetectionSignalValidator()` and `dfIsolatedNodesSignalValidator()` passed directly to `validate()`;
- initial, reactive, and asynchronous graph errors, error clearing, and isolation between two editor instances;
- `dirty`, repeated touch/reset cycles, `debounce(path.graph, 'blur')`, composite focus transitions, and
  `focusBoundControl()`;
- form-level `disabled` and `readonly`, keyboard edit blocking, external writes, viewport-only interaction, and
  re-creation through `@if`.

The app also exposes buttons for exercising those states manually. Signal Forms compatibility here is intentionally
provided through Angular's CVA interoperability path. The library does not implement `FormValueControl`, which keeps its
Angular 19 baseline and existing Reactive/Template Forms contract.
