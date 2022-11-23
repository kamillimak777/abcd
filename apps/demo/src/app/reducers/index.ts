import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import * as fromUserSession from './user-session/user-session.reducer';

export interface AppState {
  [fromUserSession.userSessionFeatureKey]: fromUserSession.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromUserSession.userSessionFeatureKey]: fromUserSession.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
