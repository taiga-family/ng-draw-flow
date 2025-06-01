import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {DfDataConnection, DfDataModel, DfDataNode} from '@ng-draw-flow/core';
import {
    DfConnectionPoint,
    dfCycleDetectionValidator,
    dfPanZoomOptionsProvider,
    NgDrawFlowComponent,
} from '@ng-draw-flow/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {MarkdownModule} from 'ngx-markdown';

const ROWS_COUNT = 23;
const COLUMNS_COUNT = 23;

@Component({
    standalone: true,
    selector: 'stress-test',
    imports: [MarkdownModule, NgDrawFlowComponent, ReactiveFormsModule, TuiAddonDoc],
    templateUrl: './stress-test.component.html',
    styleUrls: ['./stress-test.component.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        dfPanZoomOptionsProvider({
            topPosition: 50,
            leftPosition: 50,
            panSize: 5000,
        }),
    ],
})
export default class StressTestComponent implements OnInit {
    public data: DfDataModel = {
        nodes: this.createNodesMap(ROWS_COUNT, COLUMNS_COUNT),
        connections: this.createConnectionsArray(ROWS_COUNT, COLUMNS_COUNT),
    };

    public form = new FormControl(this.data, [dfCycleDetectionValidator()]);

    public ngOnInit(): void {
        this.form.statusChanges.subscribe((s) => {
            console.warn(s, this.form, 'form status');
        });
    }

    public createNodesMap(rows: number, columns: number): Map<string, DfDataNode> {
        const nodesMap = new Map();

        for (let i = 1; i <= rows; i++) {
            for (let j = 1; j <= columns; j++) {
                const nodeId = `node-${(i - 1) * columns + j}`;

                nodesMap.set(nodeId, {
                    id: nodeId,
                    data: {type: 'miniNode', index: (i - 1) * columns + j},
                    position: {x: (j - 1) * 70, y: (i - 1) * 70},
                });
            }
        }

        return nodesMap;
    }

    public createConnectionsArray(rows: number, columns: number): DfDataConnection[] {
        const connectionsArray: DfDataConnection[] = [];

        for (let row = 1; row <= rows; row++) {
            for (let col = 1; col <= columns; col++) {
                const sourceId = `node-${(row - 1) * columns + col}`;

                // Check if it's not the last column
                if (col < columns) {
                    const targetId = `node-${(row - 1) * columns + col + 1}`;

                    connectionsArray.push({
                        source: {
                            nodeId: sourceId,
                            connectorType: DfConnectionPoint.Output,
                            connectorId: 'output-1',
                        },
                        target: {
                            nodeId: targetId,
                            connectorType: DfConnectionPoint.Input,
                            connectorId: 'input-1',
                        },
                    });
                } else if (row < rows) {
                    // It's the last column and not the last row
                    const firstNodeNextRowId = `node-${row * columns + 1}`;

                    connectionsArray.push({
                        source: {
                            nodeId: sourceId,
                            connectorType: DfConnectionPoint.Output,
                            connectorId: 'output-1',
                        },
                        target: {
                            nodeId: firstNodeNextRowId,
                            connectorType: DfConnectionPoint.Input,
                            connectorId: 'input-1',
                        },
                    });
                }
            }
        }

        return connectionsArray;
    }
}
