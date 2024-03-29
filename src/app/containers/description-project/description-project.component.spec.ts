import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionProjectComponent } from './description-project.component';

describe('DescriptionProjectComponent', () => {
    let component: DescriptionProjectComponent;
    let fixture: ComponentFixture<DescriptionProjectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DescriptionProjectComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DescriptionProjectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
