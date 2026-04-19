import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DfInputComponent, DfOutputComponent, DrawFlowBaseNode} from '@ng-draw-flow/core';

@Component({
    standalone: true,
    selector: 'app-your-node',
    imports: [DfInputComponent, DfOutputComponent],
    templateUrl: './node.template.html',
    styleUrl: './node.styles.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YourNodeComponent extends DrawFlowBaseNode {}
