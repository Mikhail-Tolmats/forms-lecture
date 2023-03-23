import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenFormsRoutingModule } from './template-driven-forms-routing.module';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { FormsModule } from '@angular/forms';
import { CustomPasswordValidatorDirective } from './validators/custom-password-validator.directive';


@NgModule({
  declarations: [
    TemplateDrivenFormComponent,
    CustomPasswordValidatorDirective
  ],
  imports: [
    CommonModule,
    TemplateDrivenFormsRoutingModule,
    FormsModule,
  ]
})
export class TemplateDrivenFormsModule { }
