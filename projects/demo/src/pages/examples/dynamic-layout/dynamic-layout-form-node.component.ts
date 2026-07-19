import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormArray, FormControl, ReactiveFormsModule} from '@angular/forms';
import {
    type DfDataConnectorConfig,
    DfInputComponent,
    DfOutputComponent,
    DfOutputMode,
    DrawFlowBaseNode,
} from '@ng-draw-flow/core';
import {TuiButton, TuiIcon, TuiInput, TuiTextfield} from '@taiga-ui/core';

import {DynamicLayoutActionsService} from './dynamic-layout-actions.service';

@Component({
    standalone: true,
    selector: 'dynamic-layout-form-node',
    imports: [
        DfInputComponent,
        DfOutputComponent,
        ReactiveFormsModule,
        TuiButton,
        TuiIcon,
        TuiInput,
        TuiTextfield,
    ],
    templateUrl: './dynamic-layout-form-node.component.html',
    styleUrl: './dynamic-layout-form-node.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'(keydown.backspace.stop)': '0', '(keydown.delete.stop)': '0'},
})
export class DynamicLayoutFormNodeComponent extends DrawFlowBaseNode {
    private readonly actions = inject(DynamicLayoutActionsService);

    protected readonly outputMode = DfOutputMode;
    protected readonly fields = new FormArray([this.createField()]);

    protected addField(): void {
        this.fields.push(this.createField());
    }

    protected removeField(): void {
        if (this.fields.length > 1) {
            this.fields.removeAt(this.fields.length - 1);
        }
    }

    protected addChild(connector: DfDataConnectorConfig): void {
        this.actions.addChild(connector);
    }

    private createField(): FormControl<string> {
        return new FormControl('', {nonNullable: true});
    }
}
