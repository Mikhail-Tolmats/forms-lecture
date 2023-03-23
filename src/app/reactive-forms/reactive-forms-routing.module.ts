import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandaloneReactiveInputComponent } from './components/standalone-reactive-input/standalone-reactive-input.component';
import { SimpleReactiveFormComponent } from './components/simple-reactive-form/simple-reactive-form.component';
import { NestedReactiveFormComponent } from './components/nested-reactive-form/nested-reactive-form.component';
import { ReactiveFormsValidationComponent } from './components/reactive-forms-validation/reactive-forms-validation.component';
import { ReactiveFormsCustomValidatorComponent } from './components/reactive-forms-custom-validator/reactive-forms-custom-validator.component';
import { ReactiveFormsCustomAsyncValidatorComponent } from './components/reactive-forms-custom-async-validator/reactive-forms-custom-async-validator.component';
import { ReactiveFormsCrossFieldValidatorComponent } from './components/reactive-forms-cross-field-validator/reactive-forms-cross-field-validator.component';
import { CustomContolValueAccessorComponent } from './components/custom-contol-value-accessor/custom-contol-value-accessor.component';

const routes: Routes = [
    {
        path: "standalone",
        component: StandaloneReactiveInputComponent,
    },
    {
        path: "simple-reactive-form",
        component: SimpleReactiveFormComponent,
    },
    {
        path: "nested-forms",
        component: NestedReactiveFormComponent,
    },
    {
        path: "reactive-form-validation",
        component: ReactiveFormsValidationComponent,
    },
    {
        path: "custom-sync-validator",
        component: ReactiveFormsCustomValidatorComponent,
    },
    {
        path: "custom-async-validator",
        component: ReactiveFormsCustomAsyncValidatorComponent,
    },
    {
        path: "custom-cross-field-validator",
        component: ReactiveFormsCrossFieldValidatorComponent,
    },
    {
        path: "custom-contol-value-accessor",
        component: CustomContolValueAccessorComponent,
    },
    {
        path: "**",
        redirectTo: "standalone"
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormsRoutingModule { }
