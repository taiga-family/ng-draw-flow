import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    ElementRef,
    EventEmitter,
    forwardRef,
    inject,
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
import {PanZoomComponent} from './components/pan-zoom/pan-zoom.component';
import {PanZoomService} from './components/pan-zoom/pan-zoom.service';
import {SceneComponent} from './components/scene/scene.component';
import {DfResizeObserver, ErrorsDirective} from './directives';
import {
    type DfDataConnection,
    type DfDataModel,
    type DfDataNode,
    type DfEvent,
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
        nodes: [],
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

    /** Zooms one step *in* towards the center of the scene. */
    public zoomIn(): void {
        this.panzoom.zoomIn();
    }

    /** Zooms one step *out* from the center of the scene. */
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
