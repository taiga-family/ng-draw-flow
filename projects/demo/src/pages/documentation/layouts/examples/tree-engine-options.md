```ts
import {DfNodeSizingStrategy, DfTreeLayoutDirection, provideNgDrawFlowLayouts} from '@ng-draw-flow/layouts';

@Component({
  providers: [
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
    }),
  ],
})
export class GraphEditorComponent {}
```
