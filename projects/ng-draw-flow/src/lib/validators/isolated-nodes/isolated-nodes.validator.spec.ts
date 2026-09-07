import {signal} from '@angular/core';
import {FormControl} from '@angular/forms';

import {INITIAL_COORDINATES} from '../../consts';
import {DfConnectionPoint, type DfDataModel} from '../../ng-draw-flow.interfaces';
import {
    dfIsolatedNodesSignalValidator,
    dfIsolatedNodesValidator,
    dfValidateIsolatedNodes,
} from './isolated-nodes.validator';

describe('dfIsolatedNodesValidator', () => {
    it('detects isolated nodes', () => {
        const model: DfDataModel = {
            nodes: [
                {id: 'a', position: INITIAL_COORDINATES, data: {type: ''}},
                {id: 'b', position: INITIAL_COORDINATES, data: {type: ''}},
            ],
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
        };
        const control = new FormControl(model);
        const validator = dfIsolatedNodesValidator();

        expect(validator(control)).toBeNull();
    });

    it('returns error when node is isolated', () => {
        const model: DfDataModel = {
            nodes: [
                {id: 'a', position: INITIAL_COORDINATES, data: {type: ''}},
                {id: 'b', position: INITIAL_COORDINATES, data: {type: ''}},
            ],
            connections: [],
        };
        const control = new FormControl(model);
        const validator = dfIsolatedNodesValidator();
        const result = validator(control);

        expect(result).toEqual({hasIsolatedNodes: true, isolatedNodes: ['a', 'b']});
    });

    it('exposes a structural Signal Forms validator', () => {
        const model: DfDataModel = {
            nodes: [
                {id: 'a', position: INITIAL_COORDINATES, data: {type: ''}},
                {id: 'b', position: INITIAL_COORDINATES, data: {type: ''}},
            ],
            connections: [],
        };
        const value = signal<DfDataModel | null | undefined>(model);
        const validator = dfIsolatedNodesSignalValidator();

        expect(validator({value})).toEqual({
            kind: 'hasIsolatedNodes',
            nodeIds: ['a', 'b'],
        });

        value.set(undefined);
        expect(validator({value})).toBeUndefined();
    });

    it('validates empty and nullable models in the pure function', () => {
        expect(dfValidateIsolatedNodes(null)).toBeNull();
        expect(dfValidateIsolatedNodes(undefined)).toBeNull();
        expect(dfValidateIsolatedNodes({nodes: [], connections: []})).toBeNull();
    });
});
