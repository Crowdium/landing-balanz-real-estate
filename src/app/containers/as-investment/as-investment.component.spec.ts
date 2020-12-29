import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsInvestmentComponent } from './as-investment.component';

describe('AsInvestmentComponent', () => {
  let component: AsInvestmentComponent;
  let fixture: ComponentFixture<AsInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsInvestmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
