import {createAction, props} from '@ngrx/store';
import {NavigationPayload} from "../../interfaces/router";

export const navigateTo = createAction('[router] NAVIGATE_TO', props<{payload: NavigationPayload}>());
