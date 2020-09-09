import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {navigateTo} from "../actions/router.actions";

@Injectable()
export class RouterEffects {
  navigateTo$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(navigateTo),
        tap(({payload}) => {
          this.router.navigate(payload.path, payload.extras);
        }),
      ),
    {dispatch: false},
  );

  constructor(
    private readonly actions$: Actions,
    private readonly router: Router,
  ) {}
}
