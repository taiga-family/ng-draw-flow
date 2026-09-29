import {type ComponentFixture, TestBed} from '@angular/core/testing';

import {createConnectorHash} from '../../../helpers';
import {
    DRAW_FLOW_DEFAULT_OPTIONS,
    DRAW_FLOW_OPTIONS,
} from '../../../ng-draw-flow.configs';
import {
    DfConnectionPoint,
    DfConnectorPosition,
    type DfDataConnection,
} from '../../../ng-draw-flow.interfaces';
import {DRAW_FLOW_ROOT_ELEMENT} from '../../../ng-draw-flow.token';
import {CoordinatesService} from '../../../services/coordinates.service';
import {NgDrawFlowStoreService} from '../../../services/ng-draw-flow-store.service';
import {SelectionService} from '../../../services/selection.service';
import {ConnectionsService} from '../connections.service';
import {ConnectionComponent} from './connection.component';

describe('ConnectionComponent keyboard editing', () => {
    let fixture: ComponentFixture<ConnectionComponent>;
    let root: HTMLElement;
    let service: ConnectionsService;
    const connection: DfDataConnection = {
        source: {
            nodeId: 'source',
            connectorId: 'output',
            connectorType: DfConnectionPoint.Output,
        },
        target: {
            nodeId: 'target',
            connectorId: 'input',
            connectorType: DfConnectionPoint.Input,
        },
    };

    beforeEach(() => {
        root = document.createElement('ng-draw-flow');
        document.body.append(root);
        TestBed.configureTestingModule({
            imports: [ConnectionComponent],
            providers: [
                ConnectionsService,
                CoordinatesService,
                NgDrawFlowStoreService,
                SelectionService,
                {provide: DRAW_FLOW_ROOT_ELEMENT, useValue: root},
                {provide: DRAW_FLOW_OPTIONS, useValue: DRAW_FLOW_DEFAULT_OPTIONS},
            ],
        });
        service = TestBed.inject(ConnectionsService);
        service.setConnections([connection]);
        fixture = TestBed.createComponent(ConnectionComponent);
        fixture.componentRef.setInput('connection', connection);
        root.append(fixture.nativeElement);
        fixture.detectChanges();
        const path: Element = fixture.nativeElement.querySelector('.selectable-area');

        path.dispatchEvent(new MouseEvent('mousedown', {bubbles: true}));
        path.dispatchEvent(new MouseEvent('mouseup', {bubbles: true}));
    });

    afterEach(() => {
        fixture.destroy();
        root.remove();
    });

    it('deletes the selected edge only for keyboard events inside its editor', () => {
        document.body.dispatchEvent(
            new KeyboardEvent('keydown', {key: 'Delete', bubbles: true}),
        );
        expect(service.connections()).toEqual([connection]);

        root.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'Delete',
                bubbles: true,
                cancelable: true,
            }),
        );
        expect(service.connections()).toEqual([]);
    });

    it('preserves text editing and previously handled keyboard events', () => {
        const input = document.createElement('input');
        const deleted = jest.fn();

        fixture.componentInstance.connectionDeleted.subscribe(deleted);
        root.append(input);
        const typing = new KeyboardEvent('keydown', {
            key: 'Backspace',
            bubbles: true,
            cancelable: true,
        });

        input.dispatchEvent(typing);
        expect(typing.defaultPrevented).toBe(false);

        const handled = new KeyboardEvent('keydown', {
            key: 'Delete',
            bubbles: true,
            cancelable: true,
        });

        handled.preventDefault();
        root.dispatchEvent(handled);
        expect(service.connections()).toEqual([connection]);
        expect(deleted).not.toHaveBeenCalled();
    });

    it('preserves the outer selection when Delete belongs to a nested editor', () => {
        const nestedEditor = document.createElement('ng-draw-flow');

        root.append(nestedEditor);
        nestedEditor.dispatchEvent(
            new KeyboardEvent('keydown', {key: 'Delete', bubbles: true}),
        );

        expect(service.connections()).toEqual([connection]);
    });

    it('preserves editing inside a custom node shadow root', () => {
        const node = document.createElement('custom-node');
        const input = document.createElement('input');
        const shadow = node.attachShadow({mode: 'open'});

        shadow.append(input);
        root.append(node);
        const event = new KeyboardEvent('keydown', {
            key: 'Backspace',
            bubbles: true,
            composed: true,
            cancelable: true,
        });

        input.dispatchEvent(event);

        expect(service.connections()).toEqual([connection]);
        expect(event.defaultPrevented).toBe(false);
    });

    it('deletes the selected edge when the editor itself is hosted in a shadow root', () => {
        const shell = document.createElement('custom-shell');

        shell.attachShadow({mode: 'open'}).append(root);
        document.body.append(shell);

        try {
            root.dispatchEvent(
                new KeyboardEvent('keydown', {
                    key: 'Delete',
                    bubbles: true,
                    composed: true,
                }),
            );

            expect(service.connections()).toEqual([]);
        } finally {
            shell.remove();
        }
    });

    it('rebinds retained connection geometry when endpoint coordinates are removed and recreated', () => {
        const coordinates = TestBed.inject(CoordinatesService);
        const sourceKey = createConnectorHash(connection.source);
        const targetKey = createConnectorHash(connection.target);
        const path: SVGPathElement = fixture.nativeElement.querySelector('.main-path');

        coordinates.addConnectionPoint(
            sourceKey,
            {x: 0, y: 0},
            DfConnectorPosition.Right,
        );
        fixture.detectChanges();
        expect(path.getAttribute('d')).toBe('');

        coordinates.removeConnectionPoint(targetKey);
        coordinates.addConnectionPoint(
            targetKey,
            {x: 100, y: 0},
            DfConnectorPosition.Left,
        );
        fixture.detectChanges();
        const original = path.getAttribute('d');

        expect(original).not.toBe('');
        coordinates.removeConnectionPoint(targetKey);
        fixture.detectChanges();
        expect(path.getAttribute('d')).toBe('');
        coordinates.addConnectionPoint(
            targetKey,
            {x: 200, y: 50},
            DfConnectorPosition.Left,
        );
        fixture.detectChanges();
        expect(path.getAttribute('d')).not.toBe('');
        expect(path.getAttribute('d')).not.toBe(original);
        const previous = path.getAttribute('d');

        coordinates.removeConnectionPoint(targetKey);
        coordinates.addConnectionPoint(
            targetKey,
            {x: 300, y: 50},
            DfConnectorPosition.Left,
        );
        fixture.detectChanges();
        expect(path.getAttribute('d')).not.toBe('');
        expect(path.getAttribute('d')).not.toBe(previous);
    });
});
