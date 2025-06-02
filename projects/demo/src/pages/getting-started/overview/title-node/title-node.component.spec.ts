import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {TitleNodeComponent} from './title-node.component';

describe('TitleNodeComponent', () => {
    let component: TitleNodeComponent;
    let fixture: ComponentFixture<TitleNodeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TitleNodeComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TitleNodeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
