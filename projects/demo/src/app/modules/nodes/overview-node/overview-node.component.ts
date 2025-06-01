import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DfInputComponent, DfOutputComponent, DrawFlowBaseNode} from '@ng-draw-flow/core';

@Component({
    standalone: true,
    selector: 'app-overview-node',
    imports: [DfInputComponent, DfOutputComponent, NgIf],
    templateUrl: './overview-node.component.html',
    styleUrls: ['./overview-node.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewNodeComponent extends DrawFlowBaseNode {}
