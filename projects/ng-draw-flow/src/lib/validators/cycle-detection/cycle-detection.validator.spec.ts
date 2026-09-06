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

    it('caches result for same connections', () => {
        const control = new FormControl({
            nodes: [],
            connections: [],
        });
        const validator = dfCycleDetectionValidator();
        const first = validator(control);

        control.setValue({nodes: [], connections: []});
        const second = validator(control);

        expect(first).toBe(second);
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
