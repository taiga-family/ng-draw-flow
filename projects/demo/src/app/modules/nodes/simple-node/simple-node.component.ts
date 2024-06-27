import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DfInputComponent, DfOutputComponent, DrawFlowBaseNode} from '@ng-draw-flow/core';

@Component({
    standalone: true,
    selector: 'app-simple-node',
    imports: [NgIf, AsyncPipe, DfInputComponent, DfOutputComponent],
    templateUrl: './simple-node.component.html',
    styleUrls: ['./simple-node.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleNodeComponent extends DrawFlowBaseNode {}
