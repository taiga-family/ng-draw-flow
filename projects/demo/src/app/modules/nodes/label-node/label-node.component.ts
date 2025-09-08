import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DfInputComponent, DfOutputComponent, DrawFlowBaseNode} from '@ng-draw-flow/core';
import {TuiButton} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'app-label-node',
    imports: [AsyncPipe, DfInputComponent, DfOutputComponent, NgForOf, NgIf, TuiButton],
    templateUrl: './label-node.component.html',
    styleUrls: ['./label-node.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelNodeComponent extends DrawFlowBaseNode {
    public outputConnectors: number[] = [0];

    public addOutputConnector(): void {
        this.outputConnectors.push(this.outputs.length);
    }
}
