import {AsyncPipe, NgIf} from '@angular/common';
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
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {ControlValueAccessor} from '@angular/forms';
import {FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {BehaviorSubject, debounceTime, filter} from 'rxjs';

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
} from './ng-draw-flow.interfaces';
import {DRAW_FLOW_ROOT_ELEMENT} from './ng-draw-flow.token';
import {CoordinatesService} from './services/coordinates.service';
import {SelectionService} from './services/selection.service';

@Component({
    standalone: true,
    selector: 'ng-draw-flow',
    imports: [
        AsyncPipe,
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
    hostDirectives: [ErrorsDirective],
})
export class NgDrawFlowComponent implements ControlValueAccessor, OnInit {
    private readonly destroyRef = inject(DestroyRef);
    private readonly connectionsService = inject(ConnectionsService);

    @ViewChild(PanZoomComponent)
    protected panzoom!: PanZoomComponent;

    @Output()
    protected readonly scale = new EventEmitter<number>();

    @Output()
    protected readonly connectionCreated = new EventEmitter<DfEvent<DfDataConnection>>();

    @Output()
    protected readonly connectionDeleted = new EventEmitter<DfEvent<DfDataConnection>>();

    @Output()
    protected readonly connectionSelected = new EventEmitter<DfDataConnection>();

    @Output()
    protected readonly nodeSelected = new EventEmitter<DfDataNode>();

    @Output()
    protected readonly nodeMoved = new EventEmitter<DfEvent<DfDataNode>>();

    @Output()
    protected readonly nodeDeleted = new EventEmitter<DfEvent<DfDataNode>>();

    protected readonly form = new FormControl<DfDataModel>({
        nodes: new Map(),
        connections: [],
    });

    protected readonly rootReady$ = new BehaviorSubject<boolean>(false);

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

    public zoomIn(): void {
        this.panzoom.zoomIn();
    }

    public zoomOut(): void {
        this.panzoom.zoomOut();
    }

    public resetPosition(): void {
        this.panzoom.resetPanzoom();
    }

    protected onConnectionCreated(event: DfEvent<DfDataConnection>): void {
        this.connectionCreated.emit(event);
        this.form.setValue(event.model);
    }

    public removeConnection(connection: DfDataConnection): void {
        this.connectionsService.removeConnection(connection);
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

        this.rootReady$.next(width && height);
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
