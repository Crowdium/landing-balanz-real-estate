import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollSpyMenuComponent } from './scroll-spy-menu.component';

describe('TabPanelComponent', () => {
  let component: ScrollSpyMenuComponent;
  let fixture: ComponentFixture<ScrollSpyMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollSpyMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollSpyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
