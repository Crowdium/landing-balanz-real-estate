import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyRealEstateComponent } from './why-real-estate.component';

describe('WhyRealEstateComponent', () => {
  let component: WhyRealEstateComponent;
  let fixture: ComponentFixture<WhyRealEstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyRealEstateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyRealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
