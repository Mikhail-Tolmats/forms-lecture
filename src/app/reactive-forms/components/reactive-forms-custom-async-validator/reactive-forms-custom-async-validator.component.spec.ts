import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsCustomAsyncValidatorComponent } from './reactive-forms-custom-async-validator.component';

describe('ReactiveFormsCustomAsyncValidatorComponent', () => {
  let component: ReactiveFormsCustomAsyncValidatorComponent;
  let fixture: ComponentFixture<ReactiveFormsCustomAsyncValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsCustomAsyncValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsCustomAsyncValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
