import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DrawFlowBaseNode} from '@ng-draw-flow/core';

@Component({
    standalone: true,
    selector: 'app-first-node',
    imports: [],
    templateUrl: './first-node.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstNode extends DrawFlowBaseNode {}
