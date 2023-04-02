import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDiversifityComponent } from './icon-diversifity.component';

describe('IconDiversifityComponent', () => {
    let component: IconDiversifityComponent;
    let fixture: ComponentFixture<IconDiversifityComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IconDiversifityComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(IconDiversifityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
