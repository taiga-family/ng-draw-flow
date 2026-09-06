import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DfInputComponent, DfOutputComponent, DrawFlowBaseNode} from '@ng-draw-flow/core';

@Component({
    standalone: true,
    selector: 'app-consumer-node',
    imports: [DfInputComponent, DfOutputComponent],
    template: `
        <df-input
            [connectorData]="{
                nodeId,
                connectorId: nodeId + '-input',
                single: false,
            }"
        />

        <button
            data-test-node-control
            type="button"
            [attr.aria-readonly]="readonlySignal() || null"
            [disabled]="disabledSignal()"
        >
            {{ modelSignal()['label'] }}
        </button>

        <df-output
            [connectorData]="{
                nodeId,
                connectorId: nodeId + '-output',
                single: false,
            }"
        />
    `,
    styles: `
        :host {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        df-output {
            position: absolute;
            top: -8px;
            right: -8px;
        }

        df-input {
            position: absolute;
            top: -8px;
            left: -8px;
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsumerNodeComponent extends DrawFlowBaseNode {}
