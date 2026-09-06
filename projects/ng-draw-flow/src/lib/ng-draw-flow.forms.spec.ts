import {ChangeDetectionStrategy, Component, signal, viewChild} from '@angular/core';
import {fakeAsync, flushMicrotasks, TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';

import {ConnectionsService} from './components/connections/connections.service';
import {type NgDrawFlowComponent as NgDrawFlowComponentInstance} from './ng-draw-flow.component';
import {
    DfConnectionPoint,
    type DfDataConnection,
    type DfDataModel,
} from './ng-draw-flow.interfaces';
import {NgDrawFlowStoreService} from './services/ng-draw-flow-store.service';
import {INVALID_NODES} from './validators/invalid-nodes.token';

jest.mock('./ng-draw-flow.component.html', () => '', {virtual: true});
jest.mock('./ng-draw-flow.component.less', () => '', {virtual: true});
jest.mock('./components/pan-zoom/pan-zoom.component.html', () => '', {virtual: true});
jest.mock('./components/pan-zoom/pan-zoom.component.less', () => '', {virtual: true});
jest.mock('./components/scene/scene.component.html', () => '', {virtual: true});
jest.mock('./components/scene/scene.component.less', () => '', {virtual: true});
jest.mock('./components/connections/connection/connection.component.svg', () => '', {
    virtual: true,
});
jest.mock(
    './components/connections/draft-connection/draft-connection.component.svg',
    () => '',
    {virtual: true},
);
jest.mock('./components/node/node.component.html', () => '', {virtual: true});
jest.mock('./components/node/node.component.less', () => '', {virtual: true});

const {NgDrawFlowComponent} = jest.requireActual<
    typeof import('./ng-draw-flow.component')
>('./ng-draw-flow.component');

const INITIAL_MODEL: DfDataModel = {
    nodes: [{id: 'initial', data: {type: 'test'}}],
    connections: [],
};

const UPDATED_MODEL: DfDataModel = {
    nodes: [{id: 'updated', data: {type: 'test'}}],
    connections: [],
};

@Component({
    standalone: true,
    selector: 'df-reactive-host',
    imports: [NgDrawFlowComponent, ReactiveFormsModule],
    template: '<ng-draw-flow [formControl]="graph" />',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class ReactiveHost {
    public readonly editor =
        viewChild.required<NgDrawFlowComponentInstance>(NgDrawFlowComponent);

    public readonly graph = new FormControl<DfDataModel>(INITIAL_MODEL, {
        nonNullable: true,
    });
}

@Component({
    standalone: true,
    selector: 'df-form-group-host',
    imports: [NgDrawFlowComponent, ReactiveFormsModule],
    template: `
        <form [formGroup]="form">
            <ng-draw-flow formControlName="graph" />
        </form>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class FormControlNameHost {
    public readonly editor =
        viewChild.required<NgDrawFlowComponentInstance>(NgDrawFlowComponent);

    public readonly form = new FormGroup({
        graph: new FormControl<DfDataModel>(INITIAL_MODEL, {nonNullable: true}),
    });
}

@Component({
    standalone: true,
    selector: 'df-ng-model-host',
    imports: [FormsModule, NgDrawFlowComponent],
    template: '<ng-draw-flow [(ngModel)]="graph" />',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class NgModelHost {
    public readonly editor =
        viewChild.required<NgDrawFlowComponentInstance>(NgDrawFlowComponent);

    public graph = INITIAL_MODEL;
}

@Component({
    standalone: true,
    selector: 'df-blur-host',
    imports: [NgDrawFlowComponent, ReactiveFormsModule],
    template: '<ng-draw-flow [formControl]="graph" />',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class BlurHost {
    public readonly editor =
        viewChild.required<NgDrawFlowComponentInstance>(NgDrawFlowComponent);

    public readonly graph = new FormControl<DfDataModel>(INITIAL_MODEL, {
        nonNullable: true,
        updateOn: 'blur',
    });
}

@Component({
    standalone: true,
    selector: 'df-nullable-host',
    imports: [NgDrawFlowComponent, ReactiveFormsModule],
    template: '<ng-draw-flow [formControl]="graph" />',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class NullableHost {
    public readonly editor =
        viewChild.required<NgDrawFlowComponentInstance>(NgDrawFlowComponent);

    public readonly graph = new FormControl<DfDataModel | null>(INITIAL_MODEL);
}

@Component({
    standalone: true,
    selector: 'df-error-isolation-host',
    imports: [NgDrawFlowComponent, ReactiveFormsModule],
    template: `
        <ng-draw-flow
            [errors]="firstErrors()"
            [formControl]="first"
        />
        <ng-draw-flow
            [errors]="secondErrors()"
            [formControl]="second"
        />
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class ErrorIsolationHost {
    public readonly first = new FormControl<DfDataModel>(INITIAL_MODEL, {
        nonNullable: true,
    });

    public readonly second = new FormControl<DfDataModel>(INITIAL_MODEL, {
        nonNullable: true,
    });

    public readonly firstErrors = signal<unknown>([
        {kind: 'first', nodeIds: ['first-node']},
    ]);

    public readonly secondErrors = signal<unknown>([
        {kind: 'second', nodeIds: ['second-node']},
    ]);
}

describe('NgDrawFlowComponent forms integration', () => {
    beforeEach(async () => {
        TestBed.overrideComponent(NgDrawFlowComponent, {
            set: {
                imports: [],
                template: '<div data-test-canvas></div>',
            },
        });

        await TestBed.configureTestingModule({
            imports: [
                BlurHost,
                ErrorIsolationHost,
                FormControlNameHost,
                NgModelHost,
                NullableHost,
                ReactiveHost,
            ],
        }).compileComponents();
    });

    afterEach(() => TestBed.resetTestingModule());

    it('keeps formControl value propagation synchronous without echo', () => {
        const fixture = TestBed.createComponent(ReactiveHost);
        const changes = jest.fn();

        fixture.componentInstance.graph.valueChanges.subscribe(changes);
        fixture.detectChanges();

        expect(fixture.componentInstance.graph.dirty).toBe(false);
        expect(changes).not.toHaveBeenCalled();

        fixture.componentInstance.editor().setDataModel(UPDATED_MODEL);

        expect(fixture.componentInstance.graph.value).toBe(UPDATED_MODEL);
        expect(fixture.componentInstance.graph.dirty).toBe(true);
        expect(changes).toHaveBeenCalledTimes(1);

        fixture.componentInstance.graph.setValue(INITIAL_MODEL);

        expect(changes).toHaveBeenCalledTimes(2);
        expect(fixture.componentInstance.graph.value).toBe(INITIAL_MODEL);
    });

    it('continues to support formControlName', () => {
        const fixture = TestBed.createComponent(FormControlNameHost);

        fixture.detectChanges();
        fixture.componentInstance.editor().setDataModel(UPDATED_MODEL);

        expect(fixture.componentInstance.form.controls.graph.value).toBe(UPDATED_MODEL);
        expect(fixture.componentInstance.form.controls.graph.dirty).toBe(true);
    });

    it('continues to support ngModel', async () => {
        const fixture = TestBed.createComponent(NgModelHost);

        fixture.detectChanges();
        await fixture.whenStable();
        fixture.componentInstance.editor().setDataModel(UPDATED_MODEL);
        fixture.detectChanges();
        await fixture.whenStable();

        expect(fixture.componentInstance.graph).toBe(UPDATED_MODEL);
    });

    it('flushes blur-based updates after descendant pointerup handlers', fakeAsync(() => {
        const fixture = TestBed.createComponent(BlurHost);
        const commitDrag = (): void => {
            fixture.componentInstance.editor().setDataModel(UPDATED_MODEL);
        };

        fixture.detectChanges();
        document.addEventListener('pointerup', commitDrag);

        try {
            expect(fixture.componentInstance.graph.value).toBe(INITIAL_MODEL);
            expect(fixture.componentInstance.graph.touched).toBe(false);

            completeCanvasInteraction(fixture.nativeElement, 1);

            expect(fixture.componentInstance.graph.value).toBe(INITIAL_MODEL);
            flushMicrotasks();
            expect(fixture.componentInstance.graph.value).toBe(UPDATED_MODEL);
            expect(fixture.componentInstance.graph.touched).toBe(true);

            fixture.componentInstance.graph.reset(INITIAL_MODEL);
            expect(fixture.componentInstance.graph.touched).toBe(false);

            completeCanvasInteraction(fixture.nativeElement, 2);
            flushMicrotasks();

            expect(fixture.componentInstance.graph.value).toBe(UPDATED_MODEL);
            expect(fixture.componentInstance.graph.touched).toBe(true);
        } finally {
            document.removeEventListener('pointerup', commitDrag);
        }
    }));

    it('does not report touch while focus moves inside the composite control', () => {
        const fixture = TestBed.createComponent(ReactiveHost);

        fixture.detectChanges();

        const editor = fixture.nativeElement.querySelector('ng-draw-flow') as HTMLElement;
        const first = document.createElement('input');
        const second = document.createElement('button');

        editor.append(first, second);
        first.dispatchEvent(
            new FocusEvent('focusout', {bubbles: true, relatedTarget: second}),
        );
        expect(fixture.componentInstance.graph.touched).toBe(false);

        first.dispatchEvent(
            new FocusEvent('focusout', {
                bubbles: true,
                relatedTarget: document.body,
            }),
        );
        expect(fixture.componentInstance.graph.touched).toBe(true);
    });

    it('tracks canvas interactions when a descendant stops pointerdown propagation', fakeAsync(() => {
        const fixture = TestBed.createComponent(BlurHost);

        fixture.detectChanges();

        const canvas = (fixture.nativeElement as HTMLElement).querySelector<HTMLElement>(
            '[data-test-canvas]',
        )!;

        canvas.addEventListener('pointerdown', (event) => event.stopPropagation());
        fixture.componentInstance.editor().setDataModel(UPDATED_MODEL);
        completeCanvasInteraction(fixture.nativeElement, 1);
        flushMicrotasks();

        expect(fixture.componentInstance.graph.value).toBe(UPDATED_MODEL);
        expect(fixture.componentInstance.graph.touched).toBe(true);
    }));

    it('does not apply a queued touch after an external reset', fakeAsync(() => {
        const fixture = TestBed.createComponent(ReactiveHost);

        fixture.detectChanges();
        completeCanvasInteraction(fixture.nativeElement, 1);
        fixture.componentInstance.graph.reset(INITIAL_MODEL);
        flushMicrotasks();

        expect(fixture.componentInstance.graph.untouched).toBe(true);
        expect(fixture.componentInstance.graph.pristine).toBe(true);
    }));

    it('does not apply a queued touch after disabling the form', fakeAsync(() => {
        const fixture = TestBed.createComponent(ReactiveHost);

        fixture.detectChanges();
        completeCanvasInteraction(fixture.nativeElement, 1);
        fixture.componentInstance.graph.disable();
        flushMicrotasks();

        expect(fixture.componentInstance.graph.untouched).toBe(true);
    }));

    it('makes the CVA host programmatically focusable', () => {
        const fixture = TestBed.createComponent(ReactiveHost);

        fixture.detectChanges();

        const editor = fixture.nativeElement.querySelector('ng-draw-flow') as HTMLElement;

        editor.focus();

        expect(editor.tabIndex).toBe(0);
        expect(document.activeElement).toBe(editor);
    });

    it('clears the old graph when a nullable control resets', () => {
        const fixture = TestBed.createComponent(NullableHost);
        const changes = jest.fn();

        fixture.componentInstance.graph.valueChanges.subscribe(changes);
        fixture.detectChanges();
        fixture.componentInstance.graph.reset();
        fixture.componentInstance.editor().removeNode('initial');

        expect(fixture.componentInstance.graph.value).toBeNull();
        expect(changes).toHaveBeenCalledTimes(1);
        expect(fixture.componentInstance.graph.pristine).toBe(true);
        expect(fixture.componentInstance.graph.untouched).toBe(true);
    });

    it('keeps invalid-node state local to each editor instance', () => {
        const fixture = TestBed.createComponent(ErrorIsolationHost);

        fixture.detectChanges();

        const editors = fixture.debugElement.queryAll(By.directive(NgDrawFlowComponent));
        const firstInvalidNodes = editors[0].injector.get(INVALID_NODES);
        const secondInvalidNodes = editors[1].injector.get(INVALID_NODES);

        expect(firstInvalidNodes()).toEqual(['first-node']);
        expect(secondInvalidNodes()).toEqual(['second-node']);

        fixture.componentInstance.firstErrors.set([]);
        fixture.detectChanges();

        expect(firstInvalidNodes()).toEqual([]);
        expect(secondInvalidNodes()).toEqual(['second-node']);
    });

    it('lets a re-entrant external reset win over a public mutation', () => {
        const fixture = TestBed.createComponent(ReactiveHost);
        const connection: DfDataConnection = {
            source: {
                nodeId: 'source',
                connectorId: 'output',
                connectorType: DfConnectionPoint.Output,
            },
            target: {
                nodeId: 'target',
                connectorId: 'input',
                connectorType: DfConnectionPoint.Input,
            },
        };
        const editableModel: DfDataModel = {
            nodes: [],
            connections: [connection],
        };
        const replacementConnection: DfDataConnection = {
            source: {
                nodeId: 'replacement-source',
                connectorId: 'replacement-output',
                connectorType: DfConnectionPoint.Output,
            },
            target: {
                nodeId: 'replacement-target',
                connectorId: 'replacement-input',
                connectorType: DfConnectionPoint.Input,
            },
        };
        const replacementModel: DfDataModel = {
            nodes: [{id: 'replacement', data: {type: 'test'}}],
            connections: [replacementConnection],
        };

        fixture.componentInstance.graph.setValue(editableModel);
        fixture.detectChanges();

        const editorElement = fixture.debugElement.query(
            By.directive(NgDrawFlowComponent),
        );
        const store = editorElement.injector.get(NgDrawFlowStoreService);
        const connections = editorElement.injector.get(ConnectionsService);
        const subscription = fixture.componentInstance.graph.valueChanges.subscribe(
            (model) => {
                if (
                    model.connections.length === 0 &&
                    !model.nodes.some(({id}) => id === 'replacement')
                ) {
                    fixture.componentInstance.graph.reset(replacementModel);
                }
            },
        );

        fixture.componentInstance.editor().removeConnection(connection);

        expect(fixture.componentInstance.graph.value).toBe(replacementModel);
        expect(store.dataModel()).toEqual(replacementModel);
        expect(connections.connections()).toEqual([replacementConnection]);

        subscription.unsubscribe();
    });

    it('preserves an external reset triggered by a store deletion event', () => {
        const fixture = TestBed.createComponent(ReactiveHost);
        const connection: DfDataConnection = {
            source: {
                nodeId: 'source',
                connectorId: 'output',
                connectorType: DfConnectionPoint.Output,
            },
            target: {
                nodeId: 'target',
                connectorId: 'input',
                connectorType: DfConnectionPoint.Input,
            },
        };
        const editableModel: DfDataModel = {
            nodes: [
                {id: 'source', data: {type: 'test'}, position: {x: 0, y: 0}},
                {id: 'target', data: {type: 'test'}, position: {x: 100, y: 0}},
            ],
            connections: [connection],
        };

        fixture.componentInstance.graph.setValue(editableModel);
        fixture.detectChanges();

        const editorElement = fixture.debugElement.query(
            By.directive(NgDrawFlowComponent),
        );
        const store = editorElement.injector.get(NgDrawFlowStoreService);
        const subscription = store.connectionDeleted$.subscribe(() => {
            fixture.componentInstance.graph.reset(UPDATED_MODEL);
        });

        fixture.componentInstance.editor().removeConnection(connection);

        expect(fixture.componentInstance.graph.value).toBe(UPDATED_MODEL);
        expect(fixture.componentInstance.graph.pristine).toBe(true);
        expect(store.dataModel()).toEqual(UPDATED_MODEL);
        subscription.unsubscribe();

        fixture.componentInstance.graph.setValue(editableModel);
        const nodeSubscription = store.nodeDeleted$.subscribe(() => {
            fixture.componentInstance.graph.reset(UPDATED_MODEL);
        });

        fixture.componentInstance.editor().removeNode('source');

        expect(fixture.componentInstance.graph.value).toBe(UPDATED_MODEL);
        expect(fixture.componentInstance.graph.pristine).toBe(true);
        expect(store.dataModel()).toEqual(UPDATED_MODEL);
        nodeSubscription.unsubscribe();
    });
});

function completeCanvasInteraction(root: HTMLElement, pointerId: number): void {
    const canvas = root.querySelector<HTMLElement>('[data-test-canvas]')!;
    const pointerDown = new Event('pointerdown', {bubbles: true});
    const pointerUp = new Event('pointerup', {bubbles: true});

    Object.defineProperty(pointerDown, 'pointerId', {value: pointerId});
    Object.defineProperty(pointerUp, 'pointerId', {value: pointerId});

    canvas.dispatchEvent(pointerDown);
    document.dispatchEvent(pointerUp);
}
