import {JsonPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, signal, viewChild} from '@angular/core';
import {
    disabled,
    form,
    FormField,
    readonly as readonlyField,
    validate,
} from '@angular/forms/signals';
import {
    dfCycleDetectionSignalValidator,
    dfIsolatedNodesSignalValidator,
    dfPanZoomOptionsProvider,
    type DfInteractionOptions,
    NgDrawFlowComponent,
    provideNgDrawFlowConfigs,
} from '@ng-draw-flow/core';

import {ConsumerNodeComponent} from './consumer-node.component';
import {
    createConnectedModel,
    createCycleModel,
    createIsolatedModel,
    createReplacementModel,
    type EditorFormModel,
} from './models';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [FormField, JsonPipe, NgDrawFlowComponent],
    templateUrl: './app.html',
    styleUrl: './app.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideNgDrawFlowConfigs({
            nodes: {consumer: ConsumerNodeComponent},
        }),
        dfPanZoomOptionsProvider({
            backgroundCanvas: {visible: false},
            zoomAnimationDuration: 0,
        }),
    ],
})
export class App {
    public readonly interactionOptions = signal<Partial<DfInteractionOptions>>({});
    public readonly disabledState = signal(false);
    public readonly readonlyState = signal(false);
    public readonly rendered = signal(true);
    public readonly manualErrorNodeIds = signal<readonly string[]>([]);
    public readonly formModel = signal<EditorFormModel>({
        graph: createConnectedModel(),
    });

    public readonly editorForm = form(this.formModel, (path) => {
        validate(path.graph, dfCycleDetectionSignalValidator());
        validate(path.graph, dfIsolatedNodesSignalValidator());
        validate(path.graph, () => {
            const nodeIds = this.manualErrorNodeIds();

            return nodeIds.length
                ? {
                      kind: 'consumerError',
                      message: 'Error supplied by the consumer schema',
                      nodeIds,
                  }
                : undefined;
        });
        disabled(path.graph, {when: () => this.disabledState()});
        readonlyField(path.graph, {when: () => this.readonlyState()});
    });

    public readonly editor = viewChild.required(NgDrawFlowComponent);

    public replaceFromApplication(): void {
        this.formModel.set({graph: createReplacementModel()});
    }

    public loadCycleFromApplication(): void {
        this.formModel.set({graph: createCycleModel()});
    }

    public addIsolatedNodeThroughEditor(): void {
        this.editor().setDataModel(createIsolatedModel());
    }

    public removeFirstConnectionThroughEditor(): void {
        const [connection] = this.formModel().graph.connections;

        if (connection) {
            this.editor().removeConnection(connection);
        }
    }

    public resetForm(): void {
        this.editorForm.graph().reset(createConnectedModel());
    }

    public resetEmpty(): void {
        this.editorForm.graph().reset({nodes: [], connections: []});
    }

    public toggleSchemaError(): void {
        const nodes = this.formModel().graph.nodes;
        const node = nodes.find(({id}) => id === 'target') ?? nodes[0];

        this.manualErrorNodeIds.update((nodeIds) =>
            nodeIds.length || !node ? [] : [node.id],
        );
    }

    public focusEditor(): void {
        this.editorForm.graph().focusBoundControl();
    }
}
