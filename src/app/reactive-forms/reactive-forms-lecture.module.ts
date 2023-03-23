import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StandaloneReactiveInputComponent } from './components/standalone-reactive-input/standalone-reactive-input.component';
import { SimpleReactiveFormComponent } from './components/simple-reactive-form/simple-reactive-form.component';
import { NestedReactiveFormComponent } from './components/nested-reactive-form/nested-reactive-form.component';
import { ReactiveFormsValidationComponent } from './components/reactive-forms-validation/reactive-forms-validation.component';
import { ReactiveFormsCustomValidatorComponent } from './components/reactive-forms-custom-validator/reactive-forms-custom-validator.component';
import { ReactiveFormsCustomAsyncValidatorComponent } from './components/reactive-forms-custom-async-validator/reactive-forms-custom-async-validator.component';
import { ReactiveFormsCrossFieldValidatorComponent } from './components/reactive-forms-cross-field-validator/reactive-forms-cross-field-validator.component';
import { CustomContolValueAccessorComponent } from './components/custom-contol-value-accessor/custom-contol-value-accessor.component';
import { CustomInputComponent } from './components/custom-contol-value-accessor/custom-input/custom-input.component';


@NgModule({
  declarations: [
    StandaloneReactiveInputComponent,
    SimpleReactiveFormComponent,
    NestedReactiveFormComponent,
    ReactiveFormsValidationComponent,
    ReactiveFormsCustomValidatorComponent,
    ReactiveFormsCustomAsyncValidatorComponent,
    ReactiveFormsCrossFieldValidatorComponent,
    CustomContolValueAccessorComponent,
    CustomInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ReactiveFormsLectureModule { }
