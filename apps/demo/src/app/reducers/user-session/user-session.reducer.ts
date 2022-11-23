import { Action, createReducer, on, createAction } from '@ngrx/store';

export const userSessionFeatureKey = 'userSession';

export interface State {
  currentUser?: UserProfile;
}

export const initialState: State = {};

export const loadUser = createAction(
  '[User] Load',
  (props: { data: UserProfile }) => props
);

interface UserProfile {
  display_name: string;
}

export const reducer = createReducer(
  initialState,
  
  on(loadUser, (state, action) => {
    return {
      ...state,
      currentUser: action.data,
    };
  })
);
