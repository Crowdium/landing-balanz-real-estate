import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconToolsComponent } from './icon-tools.component';

describe('IconToolsComponent', () => {
  let component: IconToolsComponent;
  let fixture: ComponentFixture<IconToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
