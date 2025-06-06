import {FormControl} from '@angular/forms';

import {DfConnectionPoint} from '../../ng-draw-flow.interfaces';
import {dfCycleDetectionValidator} from './cycle-detection.validator';

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
});
