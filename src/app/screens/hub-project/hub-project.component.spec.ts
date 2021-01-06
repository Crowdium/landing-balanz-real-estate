import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubProjectComponent } from './hub-project.component';

describe('HubProjectComponent', () => {
  let component: HubProjectComponent;
  let fixture: ComponentFixture<HubProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HubProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HubProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
