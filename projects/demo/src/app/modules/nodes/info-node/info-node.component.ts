import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DrawFlowBaseNode} from '@ng-draw-flow/core';

@Component({
    standalone: true,
    selector: 'app-info-node',
    imports: [CommonModule],
    templateUrl: './info-node.component.html',
    styleUrls: ['./info-node.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoNodeComponent extends DrawFlowBaseNode {}
