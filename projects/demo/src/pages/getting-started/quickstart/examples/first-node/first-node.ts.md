```ts
import {Component} from '@angular/core';
import {DrawFlowBaseNode} from 'dist/ng-draw-flow/fesm2022/ng-draw-flow-core.mjs';

@Component({
  selector: 'app-first-node',
  standalone: true,
  imports: [],
  templateUrl: './first-node.html',
  styleUrls: ['./first-node.css'],
})
export class FirstNode extends DrawFlowBaseNode {}
```
