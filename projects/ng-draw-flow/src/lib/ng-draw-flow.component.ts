import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    computed,
    DestroyRef,
    effect,
    ElementRef,
    forwardRef,
    inject,
    input,
    type OnDestroy,
    type OnInit,
    output,
    Renderer2,
    signal,
    viewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {
    type ControlValueAccessor,
    FormControl,
    NG_VALUE_ACCESSOR,
    ReactiveFormsModule,
} from '@angular/forms';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';
import {debounceTime, startWith, Subject, switchMap, tap} from 'rxjs';

import {ConnectionsService} from './components/connections/connections.service';
import {DraftConnectionService} from './components/connections/draft-connection/draft-connection.service';
import {
    alignCameraToWorldRect,
    clampByUsableRect,
    type DfPanZoomWorldRectBounds,
    getViewportZeroPoint,
} from './components/pan-zoom/pan-zoom.camera.math';
import {PanZoomComponent} from './components/pan-zoom/pan-zoom.component';
import {
    DF_PAN_ZOOM_OPTIONS,
    type DfPanZoomOptions,
} from './components/pan-zoom/pan-zoom.options';
import {PanZoomService} from './components/pan-zoom/pan-zoom.service';
import {SceneComponent} from './components/scene/scene.component';
import {ErrorsDirective} from './directives';
import {DRAW_FLOW_OPTIONS} from './ng-draw-flow.configs';
import {
    type DfDataConnection,
    type DfDataModel,
    type DfDataNode,
    type DfEvent,
    type DfInteractionOptions,
    type DfPoint,
} from './ng-draw-flow.interfaces';
import {DRAW_FLOW_ROOT_ELEMENT} from './ng-draw-flow.token';
import {CoordinatesService} from './services/coordinates.service';
import {DfInteractionStateService} from './services/interaction-state.service';
import {NgDrawFlowStoreService} from './services/ng-draw-flow-store.service';
import {SelectionService} from './services/selection.service';
import {INVALID_NODES} from './validators/invalid-nodes.token';

/**
 * Root component of **ng-draw-flow** – a lightweight graph editor
 * capable of rendering and manipulating hundreds of nodes and edges.
 *
 * * Acts as a form-field (`ControlValueAccessor`) whose value is the
 *   entire diagram (`DfDataModel`).
 * * Wraps the low-level services (`PanZoomService`, `ConnectionsService`
 *   …) and re-emits high-level events so host applications can stay
 *   framework-agnostic.
 * * Exposes a minimal public API (`zoomIn`, `zoomOut`, `resetPosition`,
 *   `setScale`, `removeConnection`, `removeNode`) for programmatic control.
 * * Broadcasts state and events through `NgDrawFlowStoreService` so host apps
 *   can react without a direct reference to the component instance.
 */
@Component({
    standalone: true,
    selector: 'ng-draw-flow',
    imports: [PanZoomComponent, ReactiveFormsModule, SceneComponent],
    templateUrl: './ng-draw-flow.component.html',
    styleUrl: './ng-draw-flow.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        PanZoomService,
        ConnectionsService,
        CoordinatesService,
        DraftConnectionService,
        SelectionService,
        DfInteractionStateService,
        {
            provide: INVALID_NODES,
            useFactory: () => signal<string[]>([]),
        },
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NgDrawFlowComponent),
            multi: true,
        },
        {
            provide: DRAW_FLOW_ROOT_ELEMENT,
            useFactory: ({nativeElement}: ElementRef<HTMLElement>) => nativeElement,
            deps: [ElementRef],
        },
    ],
    hostDirectives: [
        {
            directive: ErrorsDirective,
            inputs: ['errors'],
        },
        {
            directive: WaResizeObserver,
            outputs: ['waResizeObserver'],
        },
    ],
    host: {
        '(waResizeObserver)': 'this.onResize($event)',
        '(focusout)': 'this.onFocusOut($event)',
        '(document:pointerup)': 'this.onPointerEnd($event)',
        '(document:pointercancel)': 'this.onPointerEnd($event)',
        '[attr.tabindex]': 'disabled() ? -1 : 0',
        '[attr.aria-disabled]': 'disabled() || null',
        '[attr.aria-readonly]': 'readonly() || null',
        '[attr.aria-invalid]': 'invalid() || null',
        '[attr.aria-busy]': 'pending() || null',
        '[class.ng-draw-flow_disabled]': 'disabled()',
        '[class.ng-draw-flow_readonly]': 'readonly()',
        '[class.ng-draw-flow_invalid]': 'invalid()',
        '[class.ng-draw-flow_touched]': 'touched()',
        '[class.ng-draw-flow_dirty]': 'dirty()',
        '[class.ng-draw-flow_pending]': 'pending()',
    },
})
export class NgDrawFlowComponent
    implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy
{
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly cancelPendingChanges$ = new Subject<void>();
    private pendingChange: DfDataModel | undefined;
    private readonly destroyRef = inject(DestroyRef);
    private readonly hostElement = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly renderer = inject(Renderer2);
    private readonly connectionsService = inject(ConnectionsService);
    private readonly panZoomService = inject(PanZoomService);
    private readonly panZoomOptions = inject<DfPanZoomOptions>(DF_PAN_ZOOM_OPTIONS);
    private readonly selectionService = inject(SelectionService);
    private readonly store = inject(NgDrawFlowStoreService);
    private readonly interactionState = inject(DfInteractionStateService);
    private readonly cvaDisabled = signal(false);
    private readonly maxViewportFrameRetries = 5;
    private frameRequestId: number | null = null;
    private viewportFrameRetryCount = 0;
    private shouldFrameViewport = false;
    private hasFramedExternalModel = false;
    private destroyed = false;
    private interactionVersion = 0;
    private readonly activePointers = new Set<number>();

    protected readonly panzoom = viewChild.required(PanZoomComponent);

    /** Form state inputs are populated automatically by Signal Forms. */
    public readonly disabledInput = input(false, {alias: 'disabled'});
    public readonly readonlyInput = input(false, {alias: 'readonly'});
    public readonly invalid = input(false);
    public readonly touched = input(false);
    public readonly dirty = input(false);
    public readonly pending = input(false);
    /** Dynamic overrides for the legacy provider's interaction defaults. */
    public readonly interactionOptions = input<Partial<DfInteractionOptions>>({});

    protected readonly disabled = computed(
        () => this.cvaDisabled() || this.disabledInput(),
    );

    protected readonly readonly = computed(() => this.readonlyInput());

    /** Emits the current zoom percentage (100 === actual size) each time it changes. */
    protected readonly scale = output<number>();

    /** Fired after a new edge is successfully created. */
    protected readonly connectionCreated = output<DfEvent<DfDataConnection>>();

    /** Fired after an edge is removed—via UI, `removeConnection()` or `removeNode()`. */
    protected readonly connectionDeleted = output<DfEvent<DfDataConnection>>();

    /** Fired when an edge receives focus in the scene. */
    protected readonly connectionSelected = output<DfDataConnection>();

    /** Fired when a node receives focus in the scene. */
    protected readonly nodeSelected = output<DfDataNode>();

    /** Fired whenever the user drags a node to a new position. */
    protected readonly nodeMoved = output<DfEvent<DfDataNode>>();

    /** Fired when a node is removed from the graph. */
    protected readonly nodeDeleted = output<DfEvent<DfDataNode>>();

    protected readonly form = new FormControl<DfDataModel>(
        {
            nodes: [],
            connections: [],
        },
        {
            nonNullable: true,
        },
    );

    protected readonly $rootReady = signal<boolean>(false);

    constructor() {
        this.interactionState.setDefaults(inject(DRAW_FLOW_OPTIONS).options);
        effect(() => this.interactionState.setOptions(this.interactionOptions()));
        effect(() => this.interactionState.setDisabled(this.disabled()));
        effect(() => this.interactionState.setReadonly(this.readonly()));
        this.destroyRef.onDestroy(
            this.renderer.listen(
                this.hostElement.nativeElement,
                'pointerdown',
                (event: PointerEvent) => this.onPointerDown(event),
                {capture: true},
            ),
        );
    }

    public ngOnInit(): void {
        this.watchFormChanges();
    }

    public ngAfterViewInit(): void {
        this.store.attach(this);

        const model = this.form.value;

        if (model) {
            this.store.updateDataModel(model);
        }

        this.scheduleViewportFraming();
    }

    public ngOnDestroy(): void {
        this.destroyed = true;
        this.cancelPendingChange();
        this.cancelViewportFraming();
        this.store.detach(this);
    }

    public writeValue(value: DfDataModel | null | undefined): void {
        const model = value ?? {nodes: [], connections: []};

        this.interactionVersion += 1;
        this.activePointers.clear();
        this.interactionState.cancelEditing();
        this.applyModel(model, false);

        if (model.nodes.length) {
            if (!this.hasFramedExternalModel) {
                this.hasFramedExternalModel = true;
                this.scheduleViewportFraming();
            }
        } else {
            this.hasFramedExternalModel = false;
        }
    }

    public registerOnChange(fn: (value: DfDataModel) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    public setDisabledState(isDisabled: boolean): void {
        this.cvaDisabled.set(isDisabled);
        this.interactionState.setDisabled(isDisabled || this.disabledInput());

        if (isDisabled) {
            this.form.disable({emitEvent: false});
        } else {
            this.form.enable({emitEvent: false});
        }
    }

    /** Zooms one step *in* towards the center of the scene. */
    public zoomIn(): void {
        this.panzoom().zoomIn();
    }

    /** Zooms one step *out* from the center of the scene. */
    public zoomOut(): void {
        this.panzoom().zoomOut();
    }

    /** Partially updates zoom and coordinates. */
    public setPosition(position?: Partial<DfPoint> & {zoom?: number}): void {
        this.panzoom().setPosition(position);
    }

    /** Resets both zoom factor and pan offset to their defaults. */
    public resetPosition(): void {
        this.panzoom().resetPanzoom();
        this.scheduleViewportFraming();
    }

    /**
     * Applies an absolute zoom factor to the scene (1 === 100%) while respecting
     * configured pan/zoom bounds.
     */
    public setScale(scale: number): void {
        this.panzoom().setScale(scale);
    }

    /** Replaces the current model and propagates the change to the bound control. */
    public setDataModel(model: DfDataModel): void {
        this.applyModel(model, true);
    }

    /** Method that removes an existing edge. */
    public removeConnection(connection: DfDataConnection): void {
        const current = this.form.value;
        const deleted = current.connections.find((existing) =>
            this.isSameConnection(existing, connection),
        );

        if (!deleted) {
            return;
        }

        const model: DfDataModel = {
            ...current,
            connections: current.connections.filter(
                (existing) => !this.isSameConnection(existing, connection),
            ),
        };
        const event: DfEvent<DfDataConnection> = {target: deleted, model};

        this.applyModel(model, false);
        const version = this.interactionVersion;

        this.store.emitConnectionDeleted(event);

        if (version === this.interactionVersion && this.form.value === model) {
            this.onChange(model);
        }

        this.connectionDeleted.emit(event);
    }

    /** Method that removes an existing node and all related edges. */
    public removeNode(node: DfDataNode | string): void {
        const nodeId = typeof node === 'string' ? node : node.id;
        const current = this.form.value;
        const deleted = current.nodes.find(({id}) => id === nodeId);

        if (!deleted) {
            return;
        }

        const deletedConnections = current.connections.filter(
            (connection) =>
                connection.source.nodeId === nodeId ||
                connection.target.nodeId === nodeId,
        );
        const model: DfDataModel = {
            ...current,
            nodes: current.nodes.filter(({id}) => id !== nodeId),
            connections: current.connections.filter(
                (connection) =>
                    connection.source.nodeId !== nodeId &&
                    connection.target.nodeId !== nodeId,
            ),
        };
        const event: DfEvent<DfDataNode> = {target: deleted as DfDataNode, model};

        this.applyModel(model, false);
        const version = this.interactionVersion;

        this.store.emitNodeDeleted(event);

        deletedConnections.forEach((connection) => {
            const connectionEvent: DfEvent<DfDataConnection> = {
                target: connection,
                model,
            };

            if (version === this.interactionVersion && this.form.value === model) {
                this.store.emitConnectionDeleted(connectionEvent);
            }
        });

        if (version === this.interactionVersion && this.form.value === model) {
            this.onChange(model);
        }

        this.nodeDeleted.emit(event);
        deletedConnections.forEach((connection) => {
            this.connectionDeleted.emit({target: connection, model});
        });
    }

    /** Clears any active selection in the scene. */
    public clearSelection(): void {
        this.selectionService.clearSelection();
    }

    protected onScaleChange(scale: number): void {
        this.store.setScaleValue(scale);
        this.scale.emit(scale);
    }

    protected onConnectionCreated(event: DfEvent<DfDataConnection>): void {
        this.connectionCreated.emit(event);
    }

    protected onConnectionDeleted(event: DfEvent<DfDataConnection>): void {
        this.connectionDeleted.emit(event);
    }

    protected onNodeDeleted(event: DfEvent<DfDataNode>): void {
        this.nodeDeleted.emit(event);
    }

    protected onNodeMoved(event: DfEvent<DfDataNode>): void {
        this.nodeMoved.emit(event);
    }

    protected onResize(event: readonly ResizeObserverEntry[]): void {
        const entry = event[0];

        if (!entry) {
            return;
        }

        const {width, height} = entry.contentRect;

        this.$rootReady.set(Boolean(width && height));
        this.scheduleViewportFraming();
    }

    protected onFocusOut(event: FocusEvent): void {
        const nextTarget = event.relatedTarget;

        if (
            nextTarget instanceof Node &&
            this.hostElement.nativeElement.contains(nextTarget)
        ) {
            return;
        }

        if (this.activePointers.size) {
            return;
        }

        if (nextTarget === null) {
            const version = this.interactionVersion;

            queueMicrotask(() => {
                if (
                    !this.destroyed &&
                    version === this.interactionVersion &&
                    !this.hostElement.nativeElement.contains(
                        this.hostElement.nativeElement.ownerDocument.activeElement,
                    )
                ) {
                    this.markAsTouched();
                }
            });

            return;
        }

        this.markAsTouched();
    }

    protected onPointerDown(event: PointerEvent): void {
        if (
            this.interactionState.editingDisabled() ||
            this.isFocusableDescendant(event.target)
        ) {
            return;
        }

        this.activePointers.add(event.pointerId);
    }

    protected onPointerEnd(event: PointerEvent): void {
        if (!this.activePointers.delete(event.pointerId)) {
            return;
        }

        if (!this.interactionState.editingDisabled()) {
            const version = this.interactionVersion;

            // Descendant document listeners finish the drag before the form's
            // blur/touch boundary flushes a pending value.
            queueMicrotask(() => {
                if (!this.destroyed && version === this.interactionVersion) {
                    this.markAsTouched();
                }
            });
        }
    }

    protected markAsTouched(): void {
        if (!this.disabled()) {
            const version = this.interactionVersion;

            this.flushPendingChange();

            if (version === this.interactionVersion && !this.destroyed) {
                this.onTouched();
            }
        }
    }

    private watchFormChanges(): void {
        this.cancelPendingChanges$
            .pipe(
                startWith(undefined),
                switchMap(() =>
                    this.form.valueChanges.pipe(
                        tap((value) => {
                            this.pendingChange = value;
                            this.store.updateDataModel(value);
                        }),
                        debounceTime(10),
                    ),
                ),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe(() => this.flushPendingChange());
    }

    private flushPendingChange(): void {
        const value = this.pendingChange;

        this.cancelPendingChange();

        if (value) {
            this.onChange(value);
        }
    }

    private cancelPendingChange(): void {
        this.pendingChange = undefined;
        this.cancelPendingChanges$.next();
    }

    private onChange: (value: DfDataModel) => void = (_: DfDataModel) => {};

    private onTouched: () => void = () => {};

    private applyModel(model: DfDataModel, emitChange: boolean): void {
        this.cancelPendingChange();
        this.form.setValue(model, {emitEvent: false});
        this.store.updateDataModel(model);
        this.connectionsService.setConnections(model.connections);

        if (emitChange) {
            this.onChange(model);
        }
    }

    private isFocusableDescendant(target: EventTarget | null): boolean {
        if (!(target instanceof Element)) {
            return false;
        }

        const focusable = target.closest(
            'input, textarea, select, button, a[href], [contenteditable="true"], [tabindex]:not([tabindex="-1"])',
        );

        return Boolean(focusable && focusable !== this.hostElement.nativeElement);
    }

    private isSameConnection(left: DfDataConnection, right: DfDataConnection): boolean {
        return (
            left.source.nodeId === right.source.nodeId &&
            left.source.connectorId === right.source.connectorId &&
            left.target.nodeId === right.target.nodeId &&
            left.target.connectorId === right.target.connectorId
        );
    }

    private scheduleViewportFraming(retry = false): void {
        if (
            this.panZoomOptions.leftPosition === null &&
            this.panZoomOptions.topPosition === null
        ) {
            return;
        }

        if (!retry) {
            this.shouldFrameViewport = true;
            this.viewportFrameRetryCount = 0;
        }

        if (!this.$rootReady()) {
            return;
        }

        if (typeof requestAnimationFrame !== 'function') {
            this.applyViewportFraming();

            return;
        }

        this.cancelViewportFraming();
        this.frameRequestId = requestAnimationFrame(() => {
            this.frameRequestId = requestAnimationFrame(() => {
                this.frameRequestId = null;
                this.applyViewportFraming();
            });
        });
    }

    private cancelViewportFraming(): void {
        if (this.frameRequestId !== null && typeof cancelAnimationFrame === 'function') {
            cancelAnimationFrame(this.frameRequestId);
            this.frameRequestId = null;
        }
    }

    private applyViewportFraming(): void {
        if (!this.shouldFrameViewport || !this.$rootReady()) {
            return;
        }

        const targetRect = this.getViewportFramingTargetRect();

        if (!targetRect) {
            this.retryViewportFraming();

            return;
        }

        const viewportSize = {
            width: this.hostElement.nativeElement.offsetWidth,
            height: this.hostElement.nativeElement.offsetHeight,
        };

        if (!viewportSize.width || !viewportSize.height) {
            this.retryViewportFraming();

            return;
        }

        const zeroPoint = getViewportZeroPoint(viewportSize, {
            leftPosition: this.panZoomOptions.leftPosition,
            topPosition: this.panZoomOptions.topPosition,
        });
        const nextCamera = clampByUsableRect(
            alignCameraToWorldRect(
                this.panZoomService.snapshot(),
                targetRect,
                viewportSize,
                {
                    leftPosition: this.panZoomOptions.leftPosition,
                    topPosition: this.panZoomOptions.topPosition,
                },
            ),
            this.panZoomService.usableRect(),
            viewportSize,
            zeroPoint,
        );

        this.shouldFrameViewport = false;
        this.panZoomService.setCamera(nextCamera);
        this.cdr.detectChanges();
    }

    private retryViewportFraming(): void {
        if (this.viewportFrameRetryCount >= this.maxViewportFrameRetries) {
            return;
        }

        this.viewportFrameRetryCount += 1;
        this.scheduleViewportFraming(true);
    }

    private getViewportFramingTargetRect(): DfPanZoomWorldRectBounds | null {
        const nodes = this.form.value?.nodes ?? [];

        if (!nodes.length) {
            return null;
        }

        const startNode = nodes.find((node) => node.startNode === true);

        return this.panZoomService.getBoundsForNodeIds(
            startNode ? [startNode.id] : nodes.map(({id}) => id),
        );
    }
}
