import {FormControl} from '@angular/forms';

import {INITIAL_COORDINATES} from '../../consts';
import type {DfDataModel} from '../../ng-draw-flow.interfaces';
import {DfConnectionPoint} from '../../ng-draw-flow.interfaces';
import {dfIsolatedNodesValidator} from './isolated-nodes.validator';

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
});
