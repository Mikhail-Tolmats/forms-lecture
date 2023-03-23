import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomContolValueAccessorComponent } from './custom-contol-value-accessor.component';

describe('CustomContolValueAccessorComponent', () => {
  let component: CustomContolValueAccessorComponent;
  let fixture: ComponentFixture<CustomContolValueAccessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomContolValueAccessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomContolValueAccessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
