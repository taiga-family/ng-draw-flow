import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DrawFlowBaseNode} from '@ng-draw-flow/core';

@Component({
    standalone: true,
    selector: 'app-simple-node',
    imports: [],
    templateUrl: './enhanced-node.html',
    styleUrls: ['./enhanced-node.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnhancedNode extends DrawFlowBaseNode {}
