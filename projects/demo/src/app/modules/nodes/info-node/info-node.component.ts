import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DfInputComponent, DfOutputComponent, DrawFlowBaseNode} from '@ng-draw-flow/core';

@Component({
    standalone: true,
    selector: 'app-info-node',
    imports: [CommonModule, DfInputComponent, DfOutputComponent],
    templateUrl: './info-node.component.html',
    styleUrls: ['./info-node.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoNodeComponent extends DrawFlowBaseNode {}
