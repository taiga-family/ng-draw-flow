```ts
import {DfNodeSizingStrategy, provideNgDrawFlowLayouts} from '@ng-draw-flow/layouts';

@Component({
  providers: [
    provideNgDrawFlowLayouts({
      tree: {
        nodeSizing: {
          strategy: DfNodeSizingStrategy.Measured,
          fallback: {width: 180, height: 64},
        },
      },
    }),
  ],
})
export class DynamicTreeComponent {}
```
