import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DfInputComponent, DfOutputComponent, DrawFlowBaseNode} from '@ng-draw-flow/core';

@Component({
    standalone: true,
    selector: 'app-example-node',
    imports: [DfInputComponent, DfOutputComponent, NgIf],
    templateUrl: './example-node.component.html',
    styleUrls: ['./example-node.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleNodeComponent extends DrawFlowBaseNode {}
