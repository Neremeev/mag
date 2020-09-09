import { RouterReducerState } from '@ngrx/router-store';

/**
 * Корневой стейт приложения
 */
export interface RootState {
  route: RouterReducerState;
}
