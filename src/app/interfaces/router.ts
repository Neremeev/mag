import {NavigationExtras} from '@angular/router';

/**
 * Параметры action navigateTo
 */
export interface NavigationPayload {
  path: any[];
  extras?: NavigationExtras;
}
