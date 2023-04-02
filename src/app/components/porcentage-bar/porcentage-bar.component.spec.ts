import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcentageBarComponent } from './porcentage-bar.component';

describe('PorcentageBarComponent', () => {
    let component: PorcentageBarComponent;
    let fixture: ComponentFixture<PorcentageBarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PorcentageBarComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PorcentageBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
