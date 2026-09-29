import {signal} from '@angular/core';
import {FormControl} from '@angular/forms';

import {DfConnectionPoint, type DfDataModel} from '../../ng-draw-flow.interfaces';
import {
    dfCycleDetectionSignalValidator,
    dfCycleDetectionValidator,
    dfValidateCycles,
} from './cycle-detection.validator';

describe('dfCycleDetectionValidator', () => {
    it('detects cycle', () => {
        const control = new FormControl({
            nodes: [],
            connections: [
                {
                    source: {
                        nodeId: 'a',
                        connectorType: DfConnectionPoint.Output,
                        connectorId: '1',
                    },
                    target: {
                        nodeId: 'b',
                        connectorType: DfConnectionPoint.Input,
                        connectorId: '2',
                    },
                },
                {
                    source: {
                        nodeId: 'b',
                        connectorType: DfConnectionPoint.Output,
                        connectorId: '3',
                    },
                    target: {
                        nodeId: 'a',
                        connectorType: DfConnectionPoint.Input,
                        connectorId: '4',
                    },
                },
            ],
        });

        const validator = dfCycleDetectionValidator();
        const result = validator(control);

        expect(result).toEqual({hasCycle: true, cycleNodes: expect.any(Array)});
    });

    it('returns null for acyclic graph', () => {
        const control = new FormControl({
            nodes: [],
            connections: [
                {
                    source: {
                        nodeId: 'a',
                        connectorType: DfConnectionPoint.Output,
                        connectorId: '1',
                    },
                    target: {
                        nodeId: 'b',
                        connectorType: DfConnectionPoint.Input,
                        connectorId: '2',
                    },
                },
            ],
        });

        const validator = dfCycleDetectionValidator();

        expect(validator(control)).toBeNull();
    });

    it('reuses a nonempty result when connection topology is unchanged', () => {
        const control = new FormControl(collisionModel('Aa'));
        const validator = dfCycleDetectionValidator();
        const first = validator(control);

        control.setValue(collisionModel('Aa'));
        const second = validator(control);

        expect(first).toEqual({hasCycle: true, cycleNodes: ['Aa', 'Aa']});
        expect(first).toBe(second);
    });

    it('distinguishes cyclic and acyclic topologies with colliding string hashes', () => {
        const control = new FormControl(collisionModel('Aa'));
        const validator = dfCycleDetectionValidator();

        expect(validator(control)).toEqual({hasCycle: true, cycleNodes: ['Aa', 'Aa']});

        control.setValue(collisionModel('BB'));

        expect(validator(control)).toBeNull();

        control.setValue(collisionModel('Aa'));

        expect(validator(control)).toEqual({hasCycle: true, cycleNodes: ['Aa', 'Aa']});
    });

    it('invalidates Signal Forms cached results after an in-place topology change', () => {
        const model = collisionModel('BB');
        const target = {...model.connections[0]!.target};
        const value = signal(model);
        const validator = dfCycleDetectionSignalValidator();

        model.connections[0]!.target = target;

        expect(validator({value})).toBeUndefined();

        target.nodeId = 'Aa';

        expect(validator({value})).toEqual({kind: 'hasCycle', nodeIds: ['Aa', 'Aa']});

        target.nodeId = 'BB';

        expect(validator({value})).toBeUndefined();
    });

    it('clears a cached failure after reset and validates the next model', () => {
        const control = new FormControl<DfDataModel | null>(collisionModel('Aa'));
        const validator = dfCycleDetectionValidator();

        expect(validator(control)).not.toBeNull();

        control.reset();

        expect(validator(control)).toBeNull();

        control.setValue(collisionModel('BB'));

        expect(validator(control)).toBeNull();
    });

    it('exposes a structural Signal Forms validator without sharing its cache', () => {
        const model: DfDataModel = {
            nodes: [],
            connections: [
                {
                    source: {
                        nodeId: 'a',
                        connectorType: DfConnectionPoint.Output,
                        connectorId: '1',
                    },
                    target: {
                        nodeId: 'b',
                        connectorType: DfConnectionPoint.Input,
                        connectorId: '2',
                    },
                },
                {
                    source: {
                        nodeId: 'b',
                        connectorType: DfConnectionPoint.Output,
                        connectorId: '3',
                    },
                    target: {
                        nodeId: 'a',
                        connectorType: DfConnectionPoint.Input,
                        connectorId: '4',
                    },
                },
            ],
        };
        const value = signal<DfDataModel | null>(model);
        const firstValidator = dfCycleDetectionSignalValidator();
        const secondValidator = dfCycleDetectionSignalValidator();

        expect(firstValidator({value})).toEqual({
            kind: 'hasCycle',
            nodeIds: expect.arrayContaining(['a', 'b']),
        });
        expect(secondValidator({value})).toEqual({
            kind: 'hasCycle',
            nodeIds: expect.arrayContaining(['a', 'b']),
        });

        value.set(null);

        expect(firstValidator({value})).toBeUndefined();
        expect(secondValidator({value})).toBeUndefined();
    });

    it('validates empty and nullable models in the pure function', () => {
        expect(dfValidateCycles(null)).toBeNull();
        expect(dfValidateCycles(undefined)).toBeNull();
        expect(dfValidateCycles({nodes: [], connections: []})).toBeNull();
    });
});

function collisionModel(target: string): DfDataModel {
    return {
        nodes: [],
        connections: [
            {
                source: {
                    nodeId: 'Aa',
                    connectorId: 'out',
                    connectorType: DfConnectionPoint.Output,
                },
                target: {
                    nodeId: target,
                    connectorId: 'in',
                    connectorType: DfConnectionPoint.Input,
                },
            },
        ],
    };
}
