import {NgIf} from '@angular/common';
import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    ElementRef,
    EventEmitter,
    forwardRef,
    inject,
    type OnDestroy,
    type OnInit,
    Output,
    signal,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {
    type ControlValueAccessor,
    FormControl,
    NG_VALUE_ACCESSOR,
    ReactiveFormsModule,
} from '@angular/forms';
import {debounceTime, filter} from 'rxjs';

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
import {DfResizeObserver, ErrorsDirective} from './directives';
import {
    type DfDataConnection,
    type DfDataModel,
    type DfDataNode,
    type DfEvent,
    type DfPoint,
} from './ng-draw-flow.interfaces';
import {DRAW_FLOW_ROOT_ELEMENT} from './ng-draw-flow.token';
import {CoordinatesService} from './services/coordinates.service';
import {NgDrawFlowStoreService} from './services/ng-draw-flow-store.service';
import {SelectionService} from './services/selection.service';

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
 *   `setScale`, `removeConnection`) for programmatic control.
 * * Broadcasts state and events through `NgDrawFlowStoreService` so host apps
 *   can react without a direct reference to the component instance.
 */
@Component({
    standalone: true,
    selector: 'ng-draw-flow',
    imports: [
        DfResizeObserver,
        NgIf,
        PanZoomComponent,
        ReactiveFormsModule,
        SceneComponent,
    ],
    templateUrl: './ng-draw-flow.component.html',
    styleUrls: ['./ng-draw-flow.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        PanZoomService,
        ConnectionsService,
        CoordinatesService,
        DraftConnectionService,
        SelectionService,
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
        ErrorsDirective,
        {
            directive: DfResizeObserver,
            outputs: ['dfResizeObserver'],
        },
    ],
    host: {
        '(dfResizeObserver)': 'this.onResize($event)',
    },
})
export class NgDrawFlowComponent
    implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy
{
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly destroyRef = inject(DestroyRef);
    private readonly hostElement = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly connectionsService = inject(ConnectionsService);
    private readonly panZoomService = inject(PanZoomService);
    private readonly panZoomOptions = inject<DfPanZoomOptions>(DF_PAN_ZOOM_OPTIONS);
    private readonly selectionService = inject(SelectionService);
    private readonly store = inject(NgDrawFlowStoreService);
    private readonly maxViewportFrameRetries = 5;
    private frameRequestId: number | null = null;
    private viewportFrameRetryCount = 0;
    private shouldFrameViewport = false;
    private hasFramedExternalModel = false;

    @ViewChild(PanZoomComponent)
    protected panzoom!: PanZoomComponent;

    /** Emits the *current* zoom factor each time it changes. */
    @Output()
    protected readonly scale = new EventEmitter<number>();

    /** Fired after a new edge is successfully created. */
    @Output()
    protected readonly connectionCreated = new EventEmitter<DfEvent<DfDataConnection>>();

    /** Fired after an edge is removed—via UI or `removeConnection()`. */
    @Output()
    protected readonly connectionDeleted = new EventEmitter<DfEvent<DfDataConnection>>();

    /** Fired when an edge receives focus in the scene. */
    @Output()
    protected readonly connectionSelected = new EventEmitter<DfDataConnection>();

    /** Fired when a node receives focus in the scene. */
    @Output()
    protected readonly nodeSelected = new EventEmitter<DfDataNode>();

    /** Fired whenever the user drags a node to a new position. */
    @Output()
    protected readonly nodeMoved = new EventEmitter<DfEvent<DfDataNode>>();

    /** Fired when a node is removed from the graph. */
    @Output()
    protected readonly nodeDeleted = new EventEmitter<DfEvent<DfDataNode>>();

    protected readonly form = new FormControl<DfDataModel>({
        nodes: [],
        connections: [],
    });

    protected readonly $rootReady = signal<boolean>(false);

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
        this.cancelViewportFraming();
        this.store.detach(this);
    }

    public writeValue(value: DfDataModel): void {
        if (!value) {
            return;
        }

        this.store.clearSelectedNode();
        this.store.clearSelectedConnection();
        this.store.updateDataModel(value);
        this.form.setValue(value, {emitEvent: false});

        if (value.nodes.length) {
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

    /** Zooms one step *in* towards the center of the scene. */
    public zoomIn(): void {
        this.panzoom.zoomIn();
    }

    /** Zooms one step *out* from the center of the scene. */
    public zoomOut(): void {
        this.panzoom.zoomOut();
    }

    /** Set both zoom and coordinates. */
    public setPosition(position?: DfPoint & {zoom?: number}): void {
        this.panzoom.setPosition(position);
    }

    /** Resets both zoom factor and pan offset to their defaults. */
    public resetPosition(): void {
        this.panzoom.resetPanzoom();
        this.scheduleViewportFraming();
    }

    /**
     * Applies an absolute zoom factor to the scene (1 === 100%) while respecting
     * configured pan/zoom bounds.
     */
    public setScale(scale: number): void {
        this.panzoom.setScale(scale);
    }

    /** Method that removes an existing edge. */
    public removeConnection(connection: DfDataConnection): void {
        this.connectionsService.removeConnection(connection);
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
        this.form.setValue(event.model);
    }

    protected onConnectionDeleted(event: DfEvent<DfDataConnection>): void {
        this.connectionDeleted.emit(event);
        this.form.setValue(event.model);
    }

    protected onNodeDeleted(event: DfEvent<DfDataNode>): void {
        this.nodeDeleted.emit(event);
        this.form.setValue(event.model);
    }

    protected onNodeMoved(event: DfEvent<DfDataNode>): void {
        this.nodeMoved.emit(event);
        this.form.setValue(event.model);
    }

    protected onResize(event: any): void {
        const {width, height} = event[0].contentRect;

        this.$rootReady.set(width && height);
        this.scheduleViewportFraming();
    }

    private watchFormChanges(): void {
        this.form.valueChanges
            .pipe(filter(Boolean), debounceTime(10), takeUntilDestroyed(this.destroyRef))
            .subscribe((value: DfDataModel) => {
                this.store.updateDataModel(value);
                this.onChange(value);
            });
    }

    private onChange: (value: DfDataModel) => void = (_: DfDataModel) => {};
    // @ts-ignore
    private onTouched: () => void = () => {};

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

        if (!this.$rootReady() || !this.panzoom) {
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
