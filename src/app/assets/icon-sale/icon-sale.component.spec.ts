import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSaleComponent } from './icon-sale.component';

describe('IconSaleComponent', () => {
    let component: IconSaleComponent;
    let fixture: ComponentFixture<IconSaleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IconSaleComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(IconSaleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
