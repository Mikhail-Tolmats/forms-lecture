import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';

const routes: Routes = [
    {
        path: "",
        component: AgendaComponent,
    },
    {
        path: "native",
        loadChildren: () => import("./native-forms/native-forms.module").then(m => m.NativeFormsModule),
    },
    {
        path: "reactive",
        loadChildren: () => import("./reactive-forms/reactive-forms-lecture.module").then(m => m.ReactiveFormsLectureModule),
    },
    {
        path: "template-driven",
        loadChildren: () => import("./template-driven-forms/template-driven-forms.module").then(m => m.TemplateDrivenFormsModule),
    },
    {
        path: "**",
        redirectTo: "",
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
