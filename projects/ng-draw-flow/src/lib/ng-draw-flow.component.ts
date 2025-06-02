import {NgIf} from '@angular/common';
import type {OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    ElementRef,
    EventEmitter,
    forwardRef,
    inject,
    Output,
    signal,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {ControlValueAccessor} from '@angular/forms';
import {FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import type {Observable} from 'rxjs';
import {debounceTime, filter, of} from 'rxjs';

import {ConnectionsService} from './components/connections/connections.service';
import {DraftConnectionService} from './components/connections/draft-connection/draft-connection.service';
import {PanZoomComponent} from './components/pan-zoom/pan-zoom.component';
import {PanZoomService} from './components/pan-zoom/pan-zoom.service';
import {SceneComponent} from './components/scene/scene.component';
import {DfResizeObserver, ErrorsDirective} from './directives';
import type {
    DfDataConnection,
    DfDataModel,
    DfDataNode,
    DfEvent,
    DfPoint,
} from './ng-draw-flow.interfaces';
import {DRAW_FLOW_ROOT_ELEMENT} from './ng-draw-flow.token';
import {CoordinatesService} from './services/coordinates.service';
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
 *   `removeConnection`) for programmatic control.
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
export class NgDrawFlowComponent implements ControlValueAccessor, OnInit {
    private readonly destroyRef = inject(DestroyRef);
    private readonly connectionsService = inject(ConnectionsService);

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
        nodes: new Map(),
        connections: [],
    });

    protected readonly $rootReady = signal<boolean>(false);

    public ngOnInit(): void {
        this.watchFormChanges();
    }

    public writeValue(value: DfDataModel): void {
        if (!value) {
            return;
        }

        this.form.setValue(value, {emitEvent: false});
    }

    public registerOnChange(fn: (value: DfDataModel) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    /** Zooms one step *in* towards the centre of the scene. */
    public zoomIn(): void {
        this.panzoom.zoomIn();
    }

    /** Zooms one step *out* from the centre of the scene. */
    public zoomOut(): void {
        this.panzoom.zoomOut();
    }

    /** Resets both zoom factor and pan offset to their defaults. */
    public resetPosition(): void {
        this.panzoom.resetPanzoom();
    }

    /** Method that removes an existing edge. */
    public removeConnection(connection: DfDataConnection): void {
        this.connectionsService.removeConnection(connection);
    }

    /**
     * Sets the zoom level programmatically and optionally updates the pan position.
     * @param zoom The zoom level to set (0.25 to 3)
     * @param coordinates Optional coordinates to position the viewport at
     */
    public setPanZoom(zoom: number, coordinates?: DfPoint): void {
        if (this.panzoom) {
            this.panzoom.setPanZoom(zoom, coordinates);
        }
    }

    /**
     * Sets zoom level based on screen width comparison to a standard width
     * @param standardWidth The reference width to compare against (e.g. 1366 for standard laptop)
     * @param minScale Optional minimum scale factor
     * @param maxScale Optional maximum scale factor
     * @returns The calculated zoom factor that was applied
     */
    public setZoomBasedOnScreenWidth(
        standardWidth: number,
        minScale?: number,
        maxScale?: number,
    ): number {
        if (this.panzoom) {
            return this.panzoom.setZoomBasedOnScreenWidth(
                standardWidth,
                minScale,
                maxScale,
            );
        }

        return 0;
    }

    /**
     * Sets zoom level based on screen height comparison to a standard height
     * @param standardHeight The reference height to compare against (e.g. 768 for standard laptop)
     * @param minScale Optional minimum scale factor
     * @param maxScale Optional maximum scale factor
     * @returns The calculated zoom factor that was applied
     */
    public setZoomBasedOnScreenHeight(
        standardHeight: number,
        minScale?: number,
        maxScale?: number,
    ): number {
        if (this.panzoom) {
            return this.panzoom.setZoomBasedOnScreenHeight(
                standardHeight,
                minScale,
                maxScale,
            );
        }

        return 0;
    }

    /**
     * Sets up a window resize listener that automatically adjusts zoom level
     * based on window dimensions compared to provided standard dimensions.
     * @param standardWidth Reference width (defaults to 1366px)
     * @param standardHeight Reference height (defaults to 768px)
     * @param useHeight Whether to prioritize height-based scaling (defaults to false)
     * @returns Observable that emits the current zoom factor after each adjustment
     */
    public zoomBasedOnWindowResize(
        standardWidth = 1366,
        standardHeight = 768,
        useHeight = false,
    ): Observable<number> {
        if (this.panzoom) {
            return this.panzoom.zoomBasedOnWindowResize(
                standardWidth,
                standardHeight,
                useHeight,
            );
        }

        // Return an empty observable if panzoom isn't available
        return of(0);
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
    }

    private watchFormChanges(): void {
        this.form.valueChanges
            .pipe(filter(Boolean), debounceTime(10), takeUntilDestroyed(this.destroyRef))
            .subscribe((value: DfDataModel) => {
                this.onChange(value);
            });
    }

    private onChange: (value: DfDataModel) => void = (_: DfDataModel) => {};
    // @ts-ignore
    private onTouched: () => void = () => {};
}
