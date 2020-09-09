import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatienstComponent} from "./pages/patienst/patienst.component";
import {ParameterComponent} from "./pages/parameter/parameter.component";
import {GroupComponent} from "./pages/group/group.component";


const routes: Routes = [
  {
    path: 'patients',
    component: PatienstComponent
  },
  {
    path: 'parameters',
    component: ParameterComponent
  },
  {
    path: 'groups',
    component: GroupComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'patients'
  },
  {
    path: '**',
    redirectTo: 'patients'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
