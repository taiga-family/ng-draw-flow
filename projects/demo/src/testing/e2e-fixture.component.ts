import {JsonPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {
    type DfDataModel,
    DfInputComponent,
    dfIsolatedNodesValidator,
    DfOutputComponent,
    dfPanZoomOptionsProvider,
    DrawFlowBaseNode,
    NgDrawFlowComponent,
    provideNgDrawFlowConfigs,
} from '@ng-draw-flow/core';

@Component({
    standalone: true,
    selector: 'app-test-node',
    imports: [DfInputComponent, DfOutputComponent],
    template: `
        <df-input
            [connectorData]="{nodeId, connectorId: nodeId + '-in', single: false}"
        />
        <div
            class="handle"
            [attr.data-testid]="nodeId + '-handle'"
        >
            {{ nodeId }}
        </div>
        <input
            aria-label="Node text"
            value="Editable"
            [disabled]="disabled"
        />
        <div
            aria-label="Rich node text"
            contenteditable="true"
            role="textbox"
        >
            Rich text
        </div>
        <df-output
            [connectorData]="{nodeId, connectorId: nodeId + '-out', single: false}"
        />
    `,
    styles: `
        :host {
            display: block;
            inline-size: 150px;
            padding: 8px;
        }
        .handle {
            padding-block: 8px;
        }
        input {
            inline-size: 130px;
        }
        df-input,
        df-output {
            position: absolute;
            inset-block-start: 50%;
        }
        df-input {
            inset-inline-start: -8px;
        }
        df-output {
            inset-inline-end: -8px;
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class E2eNodeComponent extends DrawFlowBaseNode {}

@Component({
    standalone: true,
    selector: 'app-test-validation-node',
    imports: [DfInputComponent, DfOutputComponent, ReactiveFormsModule],
    template: `
        <df-input
            [connectorData]="{nodeId, connectorId: nodeId + '-in', single: false}"
        />
        <label>
            Required node text
            <input [formControl]="text" />
        </label>
        <output [attr.data-testid]="nodeId + '-local-invalid'">{{ text.invalid }}</output>
        <df-output
            [connectorData]="{nodeId, connectorId: nodeId + '-out', single: false}"
        />
    `,
    styles: `
        :host {
            display: block;
            inline-size: 150px;
            padding: 8px;
        }
        input {
            inline-size: 130px;
        }
        df-input,
        df-output {
            position: absolute;
            inset-block-start: 50%;
        }
        df-input {
            inset-inline-start: -8px;
        }
        df-output {
            inset-inline-end: -8px;
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class E2eValidationNodeComponent extends DrawFlowBaseNode {
    public readonly text = new FormControl('', {
        nonNullable: true,
        validators: Validators.required,
    });

    protected override get invalidState(): boolean {
        return this.invalidSignal() || this.text.invalid;
    }
}

function initialModel(type = 'test'): DfDataModel {
    return {
        nodes: [
            {id: 'first', data: {type}, position: {x: -220, y: 0}},
            {id: 'second', data: {type}, position: {x: 180, y: 0}},
        ],
        connections: [],
    };
}

/** Browser-only fixture entry; excluded from the public demo build. */
@Component({
    standalone: true,
    selector: 'app',
    imports: [JsonPipe, NgDrawFlowComponent, ReactiveFormsModule],
    template: `
        <main>
            <button
                type="button"
                (click)="toggleDisabled()"
            >
                Toggle disabled
            </button>
            <button
                type="button"
                (click)="reset()"
            >
                Reset model
            </button>
            <button
                type="button"
                (click)="mounted.set(!mounted())"
            >
                Toggle editor
            </button>
            <button
                type="button"
                (click)="loadMany()"
            >
                Load 500 nodes
            </button>
            <button
                type="button"
                (click)="enableValidation()"
            >
                Enable validation
            </button>
            @if (validationEnabled()) {
                <button
                    type="button"
                    (click)="graph.markAllAsTouched()"
                >
                    Mark all as touched
                </button>
                <button
                    type="button"
                    (click)="graph.markAsUntouched()"
                >
                    Mark as untouched
                </button>
            }
            <button type="button">Outside editor</button>
            @if (mounted()) {
                <ng-draw-flow
                    [formControl]="graph"
                    (connectionCreated)="created.set(created() + 1)"
                    (connectionDeleted)="deleted.set(deleted() + 1)"
                    (nodeMoved)="moves.set(moves() + 1)"
                />
            }
            <output data-testid="model">{{ model() | json }}</output>
            <output data-testid="state">
                {{
                    {
                        disabled: graph.disabled,
                        touched: graph.touched,
                        dirty: graph.dirty,
                        invalid: graph.invalid,
                        errors: graph.errors,
                        moves: moves(),
                        created: created(),
                        deleted: deleted(),
                    } | json
                }}
            </output>
        </main>
    `,
    styles: `
        main {
            padding: 16px;
            font-family: sans-serif;
        }
        button {
            margin: 4px;
            padding: 8px;
        }
        ng-draw-flow {
            display: block;
            block-size: 600px;
            inline-size: 1000px;
            border: 1px solid #999;
        }
        output {
            display: block;
            white-space: pre;
            max-block-size: 180px;
            overflow: auto;
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideNgDrawFlowConfigs({
            nodes: {test: E2eNodeComponent, validation: E2eValidationNodeComponent},
        }),
        dfPanZoomOptionsProvider({zoomAnimationDuration: 0}),
    ],
})
export class E2eFixtureComponent {
    public readonly graph = new FormControl(initialModel(), {nonNullable: true});
    public readonly model = toSignal(this.graph.valueChanges, {
        initialValue: this.graph.value,
    });

    public readonly mounted = signal(true);
    public readonly validationEnabled = signal(false);
    public readonly moves = signal(0);
    public readonly created = signal(0);
    public readonly deleted = signal(0);

    public toggleDisabled(): void {
        if (this.graph.disabled) {
            this.graph.enable();
        } else {
            this.graph.disable();
        }
    }

    public reset(): void {
        this.graph.reset(initialModel(this.validationEnabled() ? 'validation' : 'test'));
    }

    public enableValidation(): void {
        this.validationEnabled.set(true);
        this.graph.setValidators(dfIsolatedNodesValidator());
        this.reset();
    }

    public loadMany(): void {
        this.graph.setValue({
            nodes: Array.from({length: 500}, (_, index) => ({
                id: `node-${index}`,
                data: {type: 'test'},
                position: {x: (index % 25) * 200, y: Math.floor(index / 25) * 150},
            })),
            connections: [],
        });
    }
}
