import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {AngularMaterialModule} from "../../modules/material.module";
import {TopMenuComponent} from "./top-menu.component";

@NgModule({
  declarations: [
    TopMenuComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    TopMenuComponent
  ]
})
export class TopMenuModule { }
