import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconOwnerComponent } from './icon-owner.component';

describe('IconOwnerComponent', () => {
  let component: IconOwnerComponent;
  let fixture: ComponentFixture<IconOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
