import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryMapComponent } from './gallery-map.component';

describe('GalleryMapComponent', () => {
    let component: GalleryMapComponent;
    let fixture: ComponentFixture<GalleryMapComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GalleryMapComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GalleryMapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
