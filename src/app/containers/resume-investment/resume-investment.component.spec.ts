import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeInvestmentComponent } from './resume-investment.component';

describe('ResumeInvestmentComponent', () => {
  let component: ResumeInvestmentComponent;
  let fixture: ComponentFixture<ResumeInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeInvestmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
