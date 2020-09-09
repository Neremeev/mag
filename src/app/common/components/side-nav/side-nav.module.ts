import { NgModule } from '@angular/core';
import {SideNavComponent} from "./side-nav.component";
import {CommonModule} from "@angular/common";
import {AngularMaterialModule} from "../../modules/material.module";

@NgModule({
  declarations: [
    SideNavComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    SideNavComponent
  ]
})
export class SideNavModule { }
