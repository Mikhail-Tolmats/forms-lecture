import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsCustomValidatorComponent } from './reactive-forms-custom-validator.component';

describe('ReactiveFormsCustomValidatorComponent', () => {
  let component: ReactiveFormsCustomValidatorComponent;
  let fixture: ComponentFixture<ReactiveFormsCustomValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsCustomValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsCustomValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
