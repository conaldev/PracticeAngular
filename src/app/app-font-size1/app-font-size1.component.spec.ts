import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFontSize1Component } from './app-font-size1.component';

describe('AppFontSize1Component', () => {
  let component: AppFontSize1Component;
  let fixture: ComponentFixture<AppFontSize1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFontSize1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFontSize1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
