import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetComponent } from './pet-image.component';

describe('PetImageComponent', () => {
  let component: PetComponent;
  let fixture: ComponentFixture<PetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
