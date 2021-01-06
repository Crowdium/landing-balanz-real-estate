import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqProjectComponent } from './faq-project.component';

describe('FaqProjectComponent', () => {
  let component: FaqProjectComponent;
  let fixture: ComponentFixture<FaqProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
