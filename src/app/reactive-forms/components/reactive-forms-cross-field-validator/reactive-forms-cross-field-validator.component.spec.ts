import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsCrossFieldValidatorComponent } from './reactive-forms-cross-field-validator.component';

describe('ReactiveFormsCrossFieldValidatorComponent', () => {
  let component: ReactiveFormsCrossFieldValidatorComponent;
  let fixture: ComponentFixture<ReactiveFormsCrossFieldValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsCrossFieldValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsCrossFieldValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
