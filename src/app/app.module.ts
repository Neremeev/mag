import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from "./common/modules/material.module";
import {FormsModule} from "@angular/forms";
import {PatientsModule} from "./pages/patienst/patients.module";
import {SideNavModule} from "./common/components/side-nav/side-nav.module";
import {RootStoreModule} from "./root-state/root-store.module";
import {GroupModule} from "./pages/group/group.module";
import {ParameterModule} from "./pages/parameter/parameter.module";
import {TopMenuModule} from "./common/components/top-menu/top-menu.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    PatientsModule,
    GroupModule,
    ParameterModule,
    SideNavModule,
    RootStoreModule,
    TopMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
