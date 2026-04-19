import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DfInputComponent, DfOutputComponent, DrawFlowBaseNode} from '@ng-draw-flow/core';

@Component({
    standalone: true,
    selector: 'app-mini-node',
    imports: [DfInputComponent, DfOutputComponent],
    templateUrl: './mini-node.component.html',
    styleUrl: './mini-node.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiniNodeComponent extends DrawFlowBaseNode {}
