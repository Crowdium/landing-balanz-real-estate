import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromYourMobileComponent } from './from-your-mobile.component';

describe('FromYourMobileComponent', () => {
  let component: FromYourMobileComponent;
  let fixture: ComponentFixture<FromYourMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromYourMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromYourMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
