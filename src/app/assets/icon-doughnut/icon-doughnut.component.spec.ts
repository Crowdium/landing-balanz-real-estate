import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDoughnutComponent } from './icon-doughnut.component';

describe('IconDoughnutComponent', () => {
    let component: IconDoughnutComponent;
    let fixture: ComponentFixture<IconDoughnutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IconDoughnutComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(IconDoughnutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
