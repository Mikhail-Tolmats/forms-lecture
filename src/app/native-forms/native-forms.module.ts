import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NativeFormsRoutingModule } from './native-forms-routing.module';
import { NativeFormComponent } from './components/native-form/native-form.component';
import { TagsComponent } from './components/tags/tags.component';


@NgModule({
  declarations: [
    NativeFormComponent,
    TagsComponent,
  ],
  imports: [
    CommonModule,
    NativeFormsRoutingModule,
  ]
})
export class NativeFormsModule { }
