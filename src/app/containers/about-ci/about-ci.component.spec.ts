import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCiComponent } from './about-ci.component';

describe('AboutCiComponent', () => {
  let component: AboutCiComponent;
  let fixture: ComponentFixture<AboutCiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
