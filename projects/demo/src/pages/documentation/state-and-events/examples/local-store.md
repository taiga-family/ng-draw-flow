```ts
@Component({
  // The editor and every child toolbar resolve this local instance.
  providers: [NgDrawFlowStoreService],
  template: `
    <editor-toolbar />
    <ng-draw-flow [formControl]="form" />
  `,
})
export class EditorHostComponent {}
```
