import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconUbicacionComponent } from './icon-ubicacion.component';

describe('IconUbicacionComponent', () => {
  let component: IconUbicacionComponent;
  let fixture: ComponentFixture<IconUbicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconUbicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
