import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {navigateTo} from "../../../root-state/actions/router.actions";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.less']
})
export class SideNavComponent {


  items = ['patients', 'parameters', 'groups']
  activeItem = this.items[0];

  constructor(
    private readonly store$: Store<any>
  ) {}

  goTo(path) {
    this.activeItem = path;
    this.store$.dispatch(navigateTo({payload: {path: [path]}}));
  }
}
