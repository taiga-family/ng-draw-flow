import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DrawFlowBaseNode} from '@ng-draw-flow/core';

@Component({
    standalone: true,
    selector: 'app-node',
    template: '',
    styleUrls: ['./pan.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanComponent extends DrawFlowBaseNode {}
