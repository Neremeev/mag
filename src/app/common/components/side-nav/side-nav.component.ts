import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {navigateTo} from "../../../root-state/actions/router.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.less']
})
export class SideNavComponent {


  items = ['patients', 'parameters', 'groups'];
  activeItem: string;

  constructor(
    private readonly store$: Store<any>,
    router: Router
  ) {
    router.events.subscribe((data: any) => data.url ? this.activeItem = data.url.split('/')[1] : null);
  }

  goTo(path) {
    this.activeItem = path;
    this.store$.dispatch(navigateTo({payload: {path: [path]}}));
  }
}
