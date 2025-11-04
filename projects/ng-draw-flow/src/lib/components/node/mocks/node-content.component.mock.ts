import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DrawFlowBaseNode} from '@ng-draw-flow/core';

@Component({
    standalone: true,
    selector: 'mock-node-content',
    template: '<div class="mock-node">Mock</div>',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MockNodeContentComponent extends DrawFlowBaseNode {}
