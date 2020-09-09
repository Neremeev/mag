import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.less']
})
export class TopMenuComponent {

  constructor(
    private readonly store$: Store<any>,
    router: Router
  ) {}

}
