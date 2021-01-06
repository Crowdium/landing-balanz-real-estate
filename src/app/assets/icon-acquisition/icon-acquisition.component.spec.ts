import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAcquisitionComponent } from './icon-acquisition.component';

describe('IconAcquisitionComponent', () => {
  let component: IconAcquisitionComponent;
  let fixture: ComponentFixture<IconAcquisitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconAcquisitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconAcquisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
