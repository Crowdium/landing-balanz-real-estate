import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBarsComponent } from './icon-bars.component';

describe('IconBarsComponent', () => {
  let component: IconBarsComponent;
  let fixture: ComponentFixture<IconBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconBarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
