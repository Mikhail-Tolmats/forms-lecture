import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NativeFormComponent } from './components/native-form/native-form.component';
import { TagsComponent } from './components/tags/tags.component';
import { NativeFormsRoutes } from '../constants/paths';



const routes: Routes = [
    {
        path: NativeFormsRoutes.OVERVIEW,
        component: NativeFormComponent,
    },
    {
        path: NativeFormsRoutes.TAGS,
        component: TagsComponent,
    },
    {
        path: "**",
        redirectTo: NativeFormsRoutes.OVERVIEW,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NativeFormsRoutingModule { }
