```ts
import {dfPanZoomOptionsProvider} from '@ng-draw-flow/core';

providers: [
  dfPanZoomOptionsProvider({
    // square working area
    panSize: 6000,
    // or rectangular working area
    // panSize: {width: 8000, height: 4000},
    // place world zero 50px from the left viewport edge
    // leftPosition: 50,
    // ...other options
  }),
];
```
