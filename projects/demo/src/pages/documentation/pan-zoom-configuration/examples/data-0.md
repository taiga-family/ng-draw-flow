```ts
import {dfPanZoomOptionsProvider} from '@ng-draw-flow/core';

providers: [
  dfPanZoomOptionsProvider({
    // deprecated and ignored by dynamic workspace sizing
    panSize: 6000,
    // deprecated and ignored as well
    // panSize: {width: 8000, height: 4000},
    // place world zero 50px from the left viewport edge
    // leftPosition: 50,
    // ...other options
  }),
];
```
