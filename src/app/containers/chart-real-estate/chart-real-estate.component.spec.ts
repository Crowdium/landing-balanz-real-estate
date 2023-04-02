import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartRealEstateComponent } from './chart-real-estate.component';

describe('ChartRealEstateComponent', () => {
    let component: ChartRealEstateComponent;
    let fixture: ComponentFixture<ChartRealEstateComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ChartRealEstateComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ChartRealEstateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
