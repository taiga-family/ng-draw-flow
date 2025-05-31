import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DfInputComponent, DfOutputComponent, DrawFlowBaseNode} from '@ng-draw-flow/core';

@Component({
    standalone: true,
    selector: 'app-your-node',
    imports: [DfInputComponent, DfOutputComponent, NgIf],
    templateUrl: './node.template.html',
    styleUrls: ['./node.styles.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YourNodeComponent extends DrawFlowBaseNode {}
