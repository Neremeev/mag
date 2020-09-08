import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatienstComponent} from "./pages/patienst/patienst.component";


const routes: Routes = [
  {
    path: 'patients',
    component: PatienstComponent
  },
  {
    path: 'parameters',
    component: PatienstComponent
  },
  {
    path: 'groups',
    component: PatienstComponent
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
