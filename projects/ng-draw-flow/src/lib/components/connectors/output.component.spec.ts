import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {TestBed} from '@angular/core/testing';

import {DRAW_FLOW_DEFAULT_OPTIONS, DRAW_FLOW_OPTIONS} from '../../ng-draw-flow.configs';
import {
    DfConnectionPoint,
    type DfDataConnectorConfig,
    DfOutputMode,
} from '../../ng-draw-flow.interfaces';
import {
    DF_CONNECTOR_ORDER_REGISTRY,
    DfConnectorOrderRegistryService,
} from '../../services/connector-order-registry.service';
import {ConnectionsService} from '../connections/connections.service';
import {DraftConnectionService} from '../connections/draft-connection/draft-connection.service';
import {DfOutputComponent} from './output.component';

@Component({
    standalone: true,
    imports: [DfOutputComponent],
    template: `
        <ng-template
            #connectorContent
            let-connector
        >
            {{ connector.connectorId }}
        </ng-template>

        <df-output
            [connectorData]="connectorData"
            [content]="connectorContent"
            [layoutOrder]="layoutOrder()"
            [mode]="mode"
            (activated)="onActivated($event)"
        />
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class HostComponent {
    public readonly connectorData: DfDataConnectorConfig = {
        nodeId: 'node-1',
        connectorId: 'output-1',
        single: true,
        data: {childType: 'task'},
    };

    public mode = DfOutputMode.Action;
    public readonly layoutOrder = signal(2);
    public readonly onActivated = jest.fn();
}

describe('DfOutputComponent', () => {
    const startDraft = jest.fn();

    beforeEach(async () => {
        startDraft.mockReset();

        await TestBed.configureTestingModule({
            imports: [HostComponent],
            providers: [
                ConnectionsService,
                DfConnectorOrderRegistryService,
                {
                    provide: DF_CONNECTOR_ORDER_REGISTRY,
                    useExisting: DfConnectorOrderRegistryService,
                },
                {
                    provide: DraftConnectionService,
                    useValue: {connection$: {next: startDraft}},
                },
            ],
        }).compileComponents();
    });

    afterEach(() => {
        TestBed.resetTestingModule();
    });

    it('activates without starting a draft connection', () => {
        TestBed.overrideProvider(DRAW_FLOW_OPTIONS, {
            useValue: {
                ...DRAW_FLOW_DEFAULT_OPTIONS,
                options: {
                    ...DRAW_FLOW_DEFAULT_OPTIONS.options,
                    connectionsCreatable: false,
                },
            },
        });

        const fixture = TestBed.createComponent(HostComponent);

        fixture.detectChanges();

        const connector = fixture.nativeElement.querySelector('df-output') as HTMLElement;

        connector.dispatchEvent(new MouseEvent('pointerdown', {bubbles: true}));
        connector.click();

        expect(startDraft).not.toHaveBeenCalled();
        expect(fixture.componentInstance.onActivated).toHaveBeenCalledWith(
            fixture.componentInstance.connectorData,
        );
        expect(connector.classList).toContain('df-action');
        expect(connector.classList).toContain('df-has-content');
        expect(connector.classList).not.toContain('df-not-creatable');
        expect(connector.hasAttribute('role')).toBe(false);
        expect(connector.hasAttribute('tabindex')).toBe(false);
        expect(connector.textContent?.trim()).toBe('output-1');
    });

    it('does not activate from the keyboard', () => {
        const fixture = TestBed.createComponent(HostComponent);

        fixture.detectChanges();

        const connector = fixture.nativeElement.querySelector('df-output') as HTMLElement;

        connector.dispatchEvent(
            new KeyboardEvent('keydown', {key: 'Enter', bubbles: true}),
        );
        connector.dispatchEvent(new KeyboardEvent('keydown', {key: ' ', bubbles: true}));

        expect(fixture.componentInstance.onActivated).not.toHaveBeenCalled();
        expect(connector.hasAttribute('tabindex')).toBe(false);
    });

    it('preserves regular connection behavior by default', () => {
        const fixture = TestBed.createComponent(HostComponent);

        fixture.componentInstance.mode = DfOutputMode.Connection;
        fixture.detectChanges();

        const connector = fixture.nativeElement.querySelector('df-output') as HTMLElement;

        connector.dispatchEvent(new MouseEvent('pointerdown', {bubbles: true}));
        connector.click();

        expect(startDraft).toHaveBeenCalledWith({
            nodeId: 'node-1',
            connectorId: 'output-1',
            connectorType: DfConnectionPoint.Output,
            position: expect.any(String),
            connectionLabel: undefined,
        });
        expect(fixture.componentInstance.onActivated).not.toHaveBeenCalled();
    });

    it('registers and updates its layout order', () => {
        const fixture = TestBed.createComponent(HostComponent);
        const registry = TestBed.inject(DfConnectorOrderRegistryService);

        fixture.detectChanges();

        const connector = fixture.nativeElement.querySelector('df-output') as HTMLElement;

        expect(registry.orders().get('node-1')?.get('output-1')).toBe(2);
        expect(connector.dataset.layoutOrder).toBe('2');

        fixture.componentInstance.layoutOrder.set(0);
        fixture.detectChanges();

        expect(registry.orders().get('node-1')?.get('output-1')).toBe(0);

        fixture.destroy();

        expect(registry.orders().has('node-1')).toBe(false);
    });

    it('honors the single connection constraint in action mode', async () => {
        const fixture = TestBed.createComponent(HostComponent);
        const connectionsService = TestBed.inject(ConnectionsService);

        fixture.detectChanges();
        connectionsService.setConnections([
            {
                source: {
                    nodeId: 'node-1',
                    connectorId: 'output-1',
                    connectorType: DfConnectionPoint.Output,
                },
                target: {
                    nodeId: 'node-2',
                    connectorId: 'input-1',
                    connectorType: DfConnectionPoint.Input,
                },
            },
        ]);
        fixture.detectChanges();
        await fixture.whenStable();

        const connector = fixture.nativeElement.querySelector('df-output') as HTMLElement;

        connector.click();

        expect(connector.classList).toContain('df-disabled');
        expect(fixture.componentInstance.onActivated).not.toHaveBeenCalled();
    });
});
