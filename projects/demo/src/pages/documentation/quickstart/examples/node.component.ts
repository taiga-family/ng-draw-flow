import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DfInputComponent, DfOutputComponent, DrawFlowBaseNode} from '@ng-draw-flow/core';

@Component({
    standalone: true,
    selector: 'app-your-node',
    imports: [DfInputComponent, DfOutputComponent, NgIf],
    templateUrl: './your-node.component.html',
    styleUrls: ['./your-node.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YourNodeComponent extends DrawFlowBaseNode {}
