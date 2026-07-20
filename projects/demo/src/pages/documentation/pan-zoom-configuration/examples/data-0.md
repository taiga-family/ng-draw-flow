```ts
import {dfPanZoomOptionsProvider} from '@ng-draw-flow/core';

providers: [
  dfPanZoomOptionsProvider({
    leftPosition: 80,
    topPosition: 40,
    minZoom: 0.4,
    maxZoom: 2,
    wheelBehavior: 'zoom',
    backgroundCanvas: {visible: true},
  }),
];
```
