import {CommonModule} from '@angular/common';
import type {OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    EventEmitter,
    forwardRef,
    inject,
    Output,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {ControlValueAccessor, FormControl} from '@angular/forms';
import {FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';
import {filter} from 'rxjs';

import type {
    DfDataConnection,
    DfDataModel,
    DfDataNode,
    DfEvent,
} from '../../ng-draw-flow.interfaces';
import {ConnectionComponent} from '../connections/connection/connection.component';
import {ConnectionsService} from '../connections/connections.service';
import {DraftConnectionComponent} from '../connections/draft-connection/draft-connection.component';
import {DraftConnectionService} from '../connections/draft-connection/draft-connection.service';
import {NodeComponent} from '../node/node.component';
import {DF_PAN_ZOOM_OPTIONS} from '../pan-zoom/pan-zoom.options';

@Component({
    standalone: true,
    selector: 'df-scene',
    imports: [CommonModule, ConnectionComponent, DraftConnectionComponent, NodeComponent],
    templateUrl: './scene.component.html',
    styleUrls: ['./scene.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SceneComponent),
            multi: true,
        },
    ],
})
export class SceneComponent implements ControlValueAccessor, OnInit {
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly connectionsService = inject(ConnectionsService);
    private readonly draftConnectionService = inject(DraftConnectionService);
    private readonly fb = inject(FormBuilder);
    private readonly destroyRef = inject(DestroyRef);

    @Output()
    protected readonly nodeSelected = new EventEmitter<DfDataNode>();

    @Output()
    protected readonly nodeMoved = new EventEmitter<DfEvent<DfDataNode>>();

    @Output()
    protected readonly nodeDeleted = new EventEmitter<DfEvent<DfDataNode>>();

    @Output()
    protected readonly connectionCreated = new EventEmitter<DfEvent<DfDataConnection>>();

    @Output()
    protected readonly connectionDeleted = new EventEmitter<DfEvent<DfDataConnection>>(
        true,
    );

    @Output()
    protected readonly connectionSelected = new EventEmitter<DfDataConnection>();

    protected form: FormControl = this.fb.control({});

    protected isConnectionCreating$ = this.draftConnectionService.isConnectionCreating$;
    protected readonly panSize = inject(DF_PAN_ZOOM_OPTIONS).panSize;
    protected model!: DfDataModel;

    public ngOnInit(): void {
        this.initializeConnectionsSubscription();
    }

    protected onConnectionCreated(connection: DfDataConnection): void {
        this.connectionsService.addConnections([connection]);
        this.connectionCreated.emit({
            target: connection,
            model: this.model,
        });
    }

    protected onConnectionDeleted(connection: DfDataConnection): void {
        this.connectionDeleted.emit({
            target: connection,
            model: this.model,
        });
    }

    protected onNodeMoved(name: string, data: DfDataNode): void {
        this.model.nodes.set(name, data);
        this.nodeMoved.emit({
            target: data,
            model: this.model,
        });
    }

    protected onNodeDeleted(key: string): void {
        const deletedNode = this.model.nodes.get(key) as DfDataNode;

        this.model.nodes.delete(key);
        this.nodeDeleted.emit({
            target: deletedNode,
            model: this.model,
        });
        this.connectionsService.removeConnectionsByNodeId(key);
    }

    protected onNodeSelected(node: DfDataNode): void {
        this.nodeSelected.emit(node);
    }

    protected trackByNodeFn(_: number, data: {key: string}): string {
        return data.key;
    }

    protected trackByConnectionsFn(_index: number, connection: DfDataConnection): any {
        return `${connection.source.nodeId}-${connection.source.connectorId}to${connection.target.nodeId}-${connection.target.connectorId}`;
    }

    protected originalOrder(): number {
        return 0;
    }

    public writeValue(value: DfDataModel): void {
        if (!value) {
            return;
        }

        this.form.setValue(value);
        this.model = value;
        this.connectionsService.addConnections(this.model.connections);

        this.cdr.markForCheck();
    }

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    private initializeConnectionsSubscription(): void {
        this.connectionsService.connections$
            .pipe(
                filter(() => !!this.model),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe((connections: DfDataConnection[]) => {
                this.model.connections = connections;
            });
    }

    // @ts-ignore
    private onChange: (value: DfDataModel) => void = (_: DfDataModel) => {};
    // @ts-ignore
    private onTouched: () => void = () => {};
}
