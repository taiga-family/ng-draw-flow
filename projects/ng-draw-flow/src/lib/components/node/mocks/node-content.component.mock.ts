import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

import {DrawFlowBaseNode} from '../../../ng-draw-flow-node.base';

@Component({
    standalone: true,
    selector: 'mock-node-content',
    imports: [ReactiveFormsModule],
    template: '<input class="mock-node" [formControl]="control" />',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MockNodeContentComponent extends DrawFlowBaseNode {
    public readonly control = new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
    });

    protected override get invalidState(): boolean {
        return this.invalidSignal() || (this.control.touched && this.control.invalid);
    }
}
