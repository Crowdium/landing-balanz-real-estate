import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBuyerComponent } from './icon-buyer.component';

describe('IconBuyerComponent', () => {
  let component: IconBuyerComponent;
  let fixture: ComponentFixture<IconBuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconBuyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
