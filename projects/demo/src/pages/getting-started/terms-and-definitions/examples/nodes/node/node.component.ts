import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DrawFlowBaseNode} from '@ng-draw-flow/core';
import {TuiNotification} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'app-node',
    imports: [TuiNotification],
    templateUrl: './node.component.html',
    styleUrls: ['./node.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NodeComponent extends DrawFlowBaseNode {}
