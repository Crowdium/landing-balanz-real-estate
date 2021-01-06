import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibleProjectComponent } from './responsible-project.component';

describe('ResponsibleProjectComponent', () => {
  let component: ResponsibleProjectComponent;
  let fixture: ComponentFixture<ResponsibleProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsibleProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsibleProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
