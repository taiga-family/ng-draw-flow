import {
    ChangeDetectionStrategy,
    Component,
    resource,
    signal,
    type Type,
    viewChild,
} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {debounce, form, FormField, validate, validateAsync} from '@angular/forms/signals';
import {
    dfPanZoomOptionsProvider,
    NgDrawFlowComponent,
    provideNgDrawFlowConfigs,
} from '@ng-draw-flow/core';

import {App} from './app';
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
    imports: [FormField, NgDrawFlowComponent],
    template: `
        <ng-draw-flow [formField]="editorForm.graph" />
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideNgDrawFlowConfigs({nodes: {consumer: ConsumerNodeComponent}}),
        dfPanZoomOptionsProvider({
            backgroundCanvas: {visible: false},
            zoomAnimationDuration: 0,
        }),
    ],
})
class BlurHost {
    public readonly formModel = signal<EditorFormModel>({
        graph: createConnectedModel(),
    });

    public readonly editorForm = form(this.formModel, (path) => {
        debounce(path.graph, 'blur');
    });

    public readonly editor = viewChild.required(NgDrawFlowComponent);
}

@Component({
    standalone: true,
    imports: [FormField, NgDrawFlowComponent],
    template: `
        <ng-draw-flow [formField]="editorForm.graph" />
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideNgDrawFlowConfigs({nodes: {consumer: ConsumerNodeComponent}}),
        dfPanZoomOptionsProvider({
            backgroundCanvas: {visible: false},
            zoomAnimationDuration: 0,
        }),
    ],
})
class AsyncErrorsHost {
    private completeValidation: (() => void) | null = null;

    public readonly asyncErrorNodeIds = signal<readonly string[]>(['source']);
    public readonly formModel = signal<EditorFormModel>({
        graph: createConnectedModel(),
    });

    public readonly editorForm = form(this.formModel, (path) => {
        validateAsync(path.graph, {
            params: ({value}) => ({
                model: value(),
                nodeIds: this.asyncErrorNodeIds(),
            }),
            factory: (request) =>
                resource({
                    params: request,
                    loader: ({params}) =>
                        new Promise<readonly string[]>((resolve) => {
                            this.completeValidation = () => resolve(params.nodeIds);
                        }),
                }),
            onSuccess: (nodeIds) =>
                nodeIds?.length
                    ? {
                          kind: 'asyncGraph',
                          message: 'Asynchronous graph error',
                          nodeIds,
                      }
                    : undefined,
            onError: () => ({
                kind: 'asyncGraphRequest',
                message: 'Asynchronous validation failed',
            }),
        });
    });

    public finishValidation(): void {
        const complete = this.completeValidation;

        if (!complete) {
            throw new Error('The asynchronous validator has not started.');
        }

        this.completeValidation = null;
        complete();
    }
}

@Component({
    standalone: true,
    imports: [FormField, NgDrawFlowComponent],
    template: `
        <ng-draw-flow
            data-test-left
            [formField]="leftForm.graph"
        />
        <ng-draw-flow
            data-test-right
            [formField]="rightForm.graph"
        />
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideNgDrawFlowConfigs({nodes: {consumer: ConsumerNodeComponent}}),
        dfPanZoomOptionsProvider({
            backgroundCanvas: {visible: false},
            zoomAnimationDuration: 0,
        }),
    ],
})
class TwoEditorsHost {
    public readonly leftErrorNodeIds = signal<readonly string[]>([]);
    public readonly rightErrorNodeIds = signal<readonly string[]>([]);
    public readonly leftModel = signal<EditorFormModel>({
        graph: createConnectedModel(),
    });
    public readonly rightModel = signal<EditorFormModel>({
        graph: createConnectedModel(),
    });

    public readonly leftForm = form(this.leftModel, (path) => {
        validate(path.graph, () => this.toError(this.leftErrorNodeIds()));
    });

    public readonly rightForm = form(this.rightModel, (path) => {
        validate(path.graph, () => this.toError(this.rightErrorNodeIds()));
    });

    private toError(nodeIds: readonly string[]):
        | {
              readonly kind: string;
              readonly nodeIds: readonly string[];
          }
        | undefined {
        return nodeIds.length ? {kind: 'externalGraph', nodeIds} : undefined;
    }
}

describe('Angular 22 Signal Forms consumer', () => {
    afterEach(() => {
        TestBed.resetTestingModule();
    });

    it('binds a packaged CVA through [formField] and runs both graph validators', async () => {
        const fixture = await render(App);
        const component = fixture.componentInstance;
        const editor = getEditorElement(fixture);

        expect(getNode(editor, 'source')).not.toBeNull();
        expect(getNode(editor, 'target')).not.toBeNull();
        expect(component.editorForm.graph().errors()).toEqual([]);

        component.formModel.set({graph: createCycleModel()});
        await refresh(fixture);

        expect(errorKinds(component.editorForm.graph().errors())).toContain('hasCycle');
        expect(getNode(editor, 'source')?.classList.contains('df-invalid')).toBe(true);
        expect(getNode(editor, 'target')?.classList.contains('df-invalid')).toBe(true);
        expect(component.editorForm.graph().dirty()).toBe(false);

        component.formModel.set({graph: createIsolatedModel()});
        await refresh(fixture);

        expect(errorKinds(component.editorForm.graph().errors())).toContain(
            'hasIsolatedNodes',
        );
        expect(getNode(editor, 'isolated')?.classList.contains('df-invalid')).toBe(true);

        component.formModel.set({graph: createConnectedModel()});
        await refresh(fixture);

        expect(component.editorForm.graph().errors()).toEqual([]);
        expect(editor.querySelector('.df-invalid')).toBeNull();
    });

    it('reacts to a schema error without a value change and clears it', async () => {
        const fixture = await render(App);
        const component = fixture.componentInstance;
        const editor = getEditorElement(fixture);

        component.manualErrorNodeIds.set(['target']);
        await refresh(fixture);

        expect(errorKinds(component.editorForm.graph().errors())).toContain(
            'consumerError',
        );
        expect(getNode(editor, 'target')?.classList.contains('df-invalid')).toBe(true);

        component.manualErrorNodeIds.set([]);
        await refresh(fixture);

        expect(component.editorForm.graph().errors()).toEqual([]);
        expect(editor.querySelector('.df-invalid')).toBeNull();
    });

    it('publishes public editor commands synchronously and atomically', async () => {
        const fixture = await render(App);
        const component = fixture.componentInstance;

        component.editor().setDataModel(createIsolatedModel());

        expect(component.formModel().graph.nodes.map(({id}) => id)).toEqual([
            'source',
            'target',
            'isolated',
        ]);
        expect(component.editorForm.graph().dirty()).toBe(true);

        component.editor().removeNode('source');

        expect(component.formModel().graph.nodes.map(({id}) => id)).toEqual([
            'target',
            'isolated',
        ]);
        expect(component.formModel().graph.connections).toEqual([]);
    });

    it('publishes keyboard node and connection edits synchronously', async () => {
        const fixture = await render(App);
        const component = fixture.componentInstance;
        const editor = getEditorElement(fixture);
        const connection = editor.querySelector<HTMLElement>('.selectable-area');

        connection?.dispatchEvent(
            new MouseEvent('mousedown', {
                bubbles: true,
                clientX: 10,
                clientY: 10,
            }),
        );
        document.dispatchEvent(
            new KeyboardEvent('keydown', {bubbles: true, key: 'Delete'}),
        );

        expect(component.formModel().graph.connections).toEqual([]);
        expect(component.editorForm.graph().dirty()).toBe(true);

        component.editorForm.graph().reset(createConnectedModel());
        await refresh(fixture);
        selectNodeAndDelete(editor, 'target');

        expect(component.formModel().graph.nodes.map(({id}) => id)).toEqual(['source']);
        expect(component.formModel().graph.connections).toEqual([]);
    });

    it('does not mark the form dirty when the viewport is panned or zoomed', async () => {
        const fixture = await render(App);
        const component = fixture.componentInstance;
        const viewport = getEditorElement(fixture).querySelector<HTMLElement>(
            '[data-element="scene"]',
        );
        const modelBeforePan = component.formModel().graph;

        viewport?.dispatchEvent(
            new WheelEvent('wheel', {
                bubbles: true,
                clientX: 100,
                clientY: 100,
                deltaY: -100,
            }),
        );

        expect(component.editorForm.graph().dirty()).toBe(false);
        expect(component.formModel().graph).toBe(modelBeforePan);
    });

    it('focuses the CVA host and preserves the graph across an @if', async () => {
        const fixture = await render(App);
        const component = fixture.componentInstance;
        const original = component.formModel().graph;

        component.editorForm.graph().focusBoundControl();

        expect(document.activeElement).toBe(getEditorElement(fixture));

        component.rendered.set(false);
        await refresh(fixture);

        expect(
            (fixture.nativeElement as HTMLElement).querySelector('ng-draw-flow'),
        ).toBeNull();
        expect(component.formModel().graph).toBe(original);

        component.rendered.set(true);
        await refresh(fixture);

        expect(getNode(getEditorElement(fixture), 'source')).not.toBeNull();
        expect(component.formModel().graph).toBe(original);
    });

    it('updates deletion permissions through the packaged input without dirtying the field', async () => {
        const fixture = await render(App);
        const component = fixture.componentInstance;
        const editor = getEditorElement(fixture);

        component.interactionOptions.set({nodesDeletable: false});
        await refresh(fixture);
        expect(component.editorForm.graph().dirty()).toBe(false);
        expect(component.editorForm.graph().touched()).toBe(false);
        selectNodeAndDelete(editor, 'source');
        await refresh(fixture);
        expect(getNode(editor, 'source')).not.toBeNull();
        component.interactionOptions.set({nodesDeletable: true});
        await refresh(fixture);
        selectNodeAndDelete(editor, 'source');
        await refresh(fixture);
        expect(getNode(editor, 'source')).toBeNull();
        expect(component.editorForm.graph().dirty()).toBe(true);
    });

    it('toggles connection deletion independently of node deletion', async () => {
        const fixture = await render(App);
        const component = fixture.componentInstance;
        const editor = getEditorElement(fixture);

        for (const allowed of [false, true]) {
            component.interactionOptions.set({
                connectionsDeletable: allowed,
                nodesDeletable: false,
            });
            await refresh(fixture);
            editor
                .querySelector('.selectable-area')!
                .dispatchEvent(new MouseEvent('mousedown', {bubbles: true}));
            document.dispatchEvent(
                new KeyboardEvent('keydown', {bubbles: true, key: 'Delete'}),
            );
            expect(component.formModel().graph.connections).toHaveLength(allowed ? 0 : 1);
        }
    });

    it('toggles dragging and cancels a gesture even if reenabled before release', async () => {
        const fixture = await render(App);
        const component = fixture.componentInstance;
        const handle = getNode(
            getEditorElement(fixture),
            'source',
        )!.querySelector<HTMLElement>('.node-content')!;

        handle.dispatchEvent(pointerEvent('pointerdown', 20, 120, 120));
        document.dispatchEvent(pointerEvent('pointermove', 20, 160, 145));
        component.interactionOptions.set({nodesDraggable: false});
        await refresh(fixture);
        component.interactionOptions.set({nodesDraggable: true});
        await refresh(fixture);
        document.dispatchEvent(pointerEvent('pointerup', 20, 160, 145));
        expect(component.formModel().graph.nodes[0]).toMatchObject({
            position: {x: 120, y: 120},
        });
        expect(component.editorForm.graph().dirty()).toBe(false);

        handle.dispatchEvent(pointerEvent('pointerdown', 21, 120, 120));
        document.dispatchEvent(pointerEvent('pointermove', 21, 160, 145));
        document.dispatchEvent(pointerEvent('pointerup', 21, 160, 145));
        expect(component.formModel().graph.nodes[0]).toMatchObject({
            position: {x: 160, y: 145},
        });
    });

    it('toggles connection creation and cancels the old draft', async () => {
        const fixture = await render(App);
        const component = fixture.componentInstance;
        const editor = getEditorElement(fixture);
        const output = editor.querySelector<HTMLElement>(
            'df-output[data-connector-id="target-output"]',
        )!;
        const input = editor.querySelector<HTMLElement>(
            'df-input[data-connector-id="source-input"]',
        )!;

        output.dispatchEvent(pointerEvent('pointerdown', 30, 460, 120));
        fixture.detectChanges();
        component.interactionOptions.set({connectionsCreatable: false});
        await refresh(fixture);
        expect(output.classList.contains('df-not-creatable')).toBe(true);
        component.interactionOptions.set({connectionsCreatable: true});
        await refresh(fixture);
        input.dispatchEvent(pointerEvent('pointerup', 30, 120, 120));
        expect(component.formModel().graph.connections).toHaveLength(1);
        output.dispatchEvent(pointerEvent('pointerdown', 31, 460, 120));
        fixture.detectChanges();
        input.dispatchEvent(pointerEvent('pointerup', 31, 120, 120));
        expect(component.formModel().graph.connections).toHaveLength(2);
    });

    it('propagates disabled and readonly state, blocks keyboard edits, and still accepts writes', async () => {
        const fixture = await render(App);
        const component = fixture.componentInstance;
        const editor = getEditorElement(fixture);

        component.readonlyState.set(true);
        await refresh(fixture);

        expect(editor.getAttribute('aria-readonly')).toBe('true');
        expect(
            getNode(editor, 'source')
                ?.querySelector<HTMLButtonElement>('[data-test-node-control]')
                ?.getAttribute('aria-readonly'),
        ).toBe('true');

        selectNodeAndDelete(editor, 'source');
        fixture.detectChanges();

        expect(component.formModel().graph.nodes).toHaveLength(2);

        component.readonlyState.set(false);
        component.disabledState.set(true);
        await refresh(fixture);

        expect(editor.getAttribute('aria-disabled')).toBe('true');
        expect(
            getNode(editor, 'source')?.querySelector<HTMLButtonElement>(
                '[data-test-node-control]',
            )?.disabled,
        ).toBe(true);

        selectNodeAndDelete(editor, 'source');
        fixture.detectChanges();

        expect(component.formModel().graph.nodes).toHaveLength(2);

        editor.querySelector<HTMLElement>('.selectable-area')?.dispatchEvent(
            new MouseEvent('mousedown', {
                bubbles: true,
                clientX: 10,
                clientY: 10,
            }),
        );
        document.dispatchEvent(
            new KeyboardEvent('keydown', {bubbles: true, key: 'Delete'}),
        );

        expect(component.formModel().graph.connections).toHaveLength(1);

        component.formModel.set({graph: createReplacementModel()});
        await refresh(fixture);

        expect(getNode(editor, 'replacement')).not.toBeNull();
    });

    it('flushes debounce(blur), resets state, and can be touched again', async () => {
        const fixture = await render(BlurHost);
        const component = fixture.componentInstance;
        const editor = getEditorElement(fixture);

        component.editor().setDataModel(createReplacementModel());

        expect(component.editorForm.graph().controlValue().nodes[0]?.id).toBe(
            'replacement',
        );
        expect(component.formModel().graph.nodes[0]?.id).toBe('source');
        expect(component.editorForm.graph().touched()).toBe(false);

        touchCanvas(editor, 1);
        await refresh(fixture);

        expect(component.formModel().graph.nodes[0]?.id).toBe('replacement');
        expect(component.editorForm.graph().touched()).toBe(true);

        component.editorForm.graph().reset(createConnectedModel());
        await refresh(fixture);

        expect(component.editorForm.graph().dirty()).toBe(false);
        expect(component.editorForm.graph().touched()).toBe(false);
        expect(component.formModel().graph.nodes[0]?.id).toBe('source');

        component.editor().setDataModel(createReplacementModel());
        blurOutside(editor, fixture.nativeElement as HTMLElement);
        await refresh(fixture);

        expect(component.formModel().graph.nodes[0]?.id).toBe('replacement');
        expect(component.editorForm.graph().touched()).toBe(true);
    });

    it('commits a descendant node drag before pointer release flushes debounce(blur)', async () => {
        const fixture = await render(BlurHost);
        const component = fixture.componentInstance;
        const node = getNode(getEditorElement(fixture), 'source');
        const dragHandle = node?.querySelector<HTMLElement>('.node-content');
        const initialNode = {position: {x: 120, y: 120}};

        expect(dragHandle).not.toBeNull();

        dragHandle!.dispatchEvent(pointerEvent('pointerdown', 10, 120, 120));
        document.dispatchEvent(pointerEvent('pointermove', 10, 160, 145));

        expect(component.formModel().graph.nodes[0]).toMatchObject(initialNode);
        expect(component.editorForm.graph().controlValue().nodes[0]).toMatchObject(
            initialNode,
        );
        expect(component.editorForm.graph().touched()).toBe(false);

        document.dispatchEvent(pointerEvent('pointerup', 10, 160, 145));

        expect(component.editorForm.graph().controlValue().nodes[0]).toMatchObject({
            position: {x: 160, y: 145},
        });
        expect(component.formModel().graph.nodes[0]).toMatchObject(initialNode);

        await refresh(fixture);

        expect(component.formModel().graph.nodes[0]).toMatchObject({
            position: {x: 160, y: 145},
        });
        expect(component.editorForm.graph().dirty()).toBe(true);
        expect(component.editorForm.graph().touched()).toBe(true);
    });

    it('creates a connection through connector events and flushes debounce(blur)', async () => {
        const fixture = await render(BlurHost);
        const component = fixture.componentInstance;
        const editor = getEditorElement(fixture);
        const output = editor.querySelector<HTMLElement>(
            'df-output[data-connector-id="target-output"]',
        );
        const input = editor.querySelector<HTMLElement>(
            'df-input[data-connector-id="source-input"]',
        );

        expect(output).not.toBeNull();
        expect(input).not.toBeNull();

        output!.dispatchEvent(pointerEvent('pointerdown', 11, 460, 120));
        fixture.detectChanges();

        expect(component.editorForm.graph().touched()).toBe(false);
        expect(component.formModel().graph.connections).toHaveLength(1);

        input!.dispatchEvent(pointerEvent('pointerup', 11, 120, 120));

        expect(component.editorForm.graph().controlValue().connections).toHaveLength(2);
        expect(component.formModel().graph.connections).toHaveLength(1);

        await refresh(fixture);

        expect(component.formModel().graph.connections).toHaveLength(2);
        expect(component.formModel().graph.connections[1]).toMatchObject({
            source: {nodeId: 'target', connectorId: 'target-output'},
            target: {nodeId: 'source', connectorId: 'source-input'},
        });
        expect(component.editorForm.graph().dirty()).toBe(true);
        expect(component.editorForm.graph().touched()).toBe(true);
    });

    it('does not touch when focus moves inside the composite control', async () => {
        const fixture = await render(BlurHost);
        const component = fixture.componentInstance;
        const editor = getEditorElement(fixture);
        const first = document.createElement('input');
        const second = document.createElement('button');

        editor.append(first, second);
        first.dispatchEvent(
            new FocusEvent('focusout', {
                bubbles: true,
                relatedTarget: second,
            }),
        );
        fixture.detectChanges();

        expect(component.editorForm.graph().touched()).toBe(false);

        blurOutside(editor, fixture.nativeElement as HTMLElement);
        await refresh(fixture);

        expect(component.editorForm.graph().touched()).toBe(true);
    });

    it('updates and clears asynchronous node errors supplied by FormField', async () => {
        const fixture = await render(AsyncErrorsHost, false);
        const component = fixture.componentInstance;

        await startAsyncValidation(fixture);
        expect(component.editorForm.graph().pending()).toBe(true);

        component.finishValidation();
        await refresh(fixture);

        const editor = getEditorElement(fixture);

        expect(errorKinds(component.editorForm.graph().errors())).toContain('asyncGraph');
        expect(getNode(editor, 'source')?.classList.contains('df-invalid')).toBe(true);

        component.asyncErrorNodeIds.set([]);
        await startAsyncValidation(fixture);
        component.finishValidation();
        await refresh(fixture);

        expect(component.editorForm.graph().errors()).toEqual([]);
        expect(editor.querySelector('.df-invalid')).toBeNull();
    });

    it('keeps invalid-node state isolated between two editors', async () => {
        const fixture = await render(TwoEditorsHost);
        const component = fixture.componentInstance;
        const root = fixture.nativeElement as HTMLElement;

        component.leftErrorNodeIds.set(['source']);
        await refresh(fixture);

        const left = root.querySelector<HTMLElement>('[data-test-left]');
        const right = root.querySelector<HTMLElement>('[data-test-right]');

        expect(left).not.toBeNull();
        expect(right).not.toBeNull();
        expect(getNode(left!, 'source')?.classList.contains('df-invalid')).toBe(true);
        expect(right?.querySelector('.df-invalid')).toBeNull();

        component.leftErrorNodeIds.set([]);
        component.rightErrorNodeIds.set(['target']);
        await refresh(fixture);

        expect(left?.querySelector('.df-invalid')).toBeNull();
        expect(getNode(right!, 'target')?.classList.contains('df-invalid')).toBe(true);
    });
});

async function render<T>(
    component: Type<T>,
    settle = true,
): Promise<ComponentFixture<T>> {
    await TestBed.configureTestingModule({imports: [component]}).compileComponents();

    const fixture = TestBed.createComponent(component);

    fixture.detectChanges();

    if (settle) {
        await refresh(fixture);
    }

    return fixture;
}

async function refresh<T>(fixture: ComponentFixture<T>): Promise<void> {
    await fixture.whenStable();
    await Promise.resolve();
    fixture.detectChanges();
}

async function startAsyncValidation<T>(fixture: ComponentFixture<T>): Promise<void> {
    fixture.detectChanges();
    await Promise.resolve();
    fixture.detectChanges();
}

function getEditorElement<T>(fixture: ComponentFixture<T>): HTMLElement {
    const root = fixture.nativeElement as HTMLElement;
    const editor = root.querySelector<HTMLElement>('ng-draw-flow');

    if (!editor) {
        throw new Error('Expected ng-draw-flow to be rendered.');
    }

    return editor;
}

function getNode(editor: HTMLElement, id: string): HTMLElement | null {
    return editor.querySelector<HTMLElement>(`[data-node-id="${id}"]`);
}

function errorKinds(errors: readonly {readonly kind: string}[]): string[] {
    return errors.map(({kind}) => kind);
}

function selectNodeAndDelete(editor: HTMLElement, nodeId: string): void {
    getNode(editor, nodeId)?.dispatchEvent(
        new MouseEvent('mousedown', {bubbles: true, clientX: 10, clientY: 10}),
    );
    document.dispatchEvent(new KeyboardEvent('keydown', {bubbles: true, key: 'Delete'}));
}

function touchCanvas(editor: HTMLElement, pointerId: number): void {
    const target = document.createElement('div');
    const pointerDown = new MouseEvent('pointerdown', {bubbles: true});
    const pointerUp = new MouseEvent('pointerup', {bubbles: true});

    Object.defineProperty(pointerDown, 'pointerId', {value: pointerId});
    Object.defineProperty(pointerUp, 'pointerId', {value: pointerId});
    editor.append(target);
    target.dispatchEvent(pointerDown);
    document.dispatchEvent(pointerUp);
    target.remove();
}

function pointerEvent(
    type: string,
    pointerId: number,
    clientX: number,
    clientY: number,
): PointerEvent {
    return new PointerEvent(type, {bubbles: true, pointerId, clientX, clientY});
}

function blurOutside(editor: HTMLElement, host: HTMLElement): void {
    const outside = document.createElement('button');

    host.append(outside);
    editor.dispatchEvent(
        new FocusEvent('focusout', {
            bubbles: true,
            relatedTarget: outside,
        }),
    );
    outside.remove();
}
