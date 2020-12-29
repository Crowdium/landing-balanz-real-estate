import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestInRealEstateComponent } from './invest-in-real-estate.component';

describe('InvestInRealEstateComponent', () => {
  let component: InvestInRealEstateComponent;
  let fixture: ComponentFixture<InvestInRealEstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestInRealEstateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestInRealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
