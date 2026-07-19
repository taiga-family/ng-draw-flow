import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';

import {DfConnectionPoint} from '../../ng-draw-flow.interfaces';
import {ConnectionsService} from '../connections/connections.service';
import {DfInputComponent} from './input.component';

@Component({
    standalone: true,
    imports: [DfInputComponent],
    template: `
        <df-input
            content="Input"
            [connectorData]="{
                nodeId: 'node-1',
                connectorId: 'input-1',
                single: true,
            }"
        />
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class HostComponent {}

describe('BaseConnector', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HostComponent],
            providers: [ConnectionsService],
        }).compileComponents();
    });

    it('tracks used connector state from constructor effect after required input initialization', async () => {
        const fixture = TestBed.createComponent(HostComponent);
        const connectionsService = TestBed.inject(ConnectionsService);

        fixture.detectChanges();
        await fixture.whenStable();

        const connector = fixture.nativeElement.querySelector('df-input') as HTMLElement;

        expect(connector.classList.contains('df-disabled')).toBe(false);
        expect(connector.classList.contains('df-has-content')).toBe(true);
        expect(connector.hasAttribute('data-connected')).toBe(false);
        expect(connector.textContent?.trim()).toBe('Input');

        connectionsService.setConnections([
            {
                source: {
                    nodeId: 'node-2',
                    connectorType: DfConnectionPoint.Output,
                    connectorId: 'output-1',
                },
                target: {
                    nodeId: 'node-1',
                    connectorType: DfConnectionPoint.Input,
                    connectorId: 'input-1',
                },
            },
        ]);

        fixture.detectChanges();
        await fixture.whenStable();

        expect(connector.classList.contains('df-disabled')).toBe(true);
        expect(connector.getAttribute('data-connected')).toBe('true');
    });
});
