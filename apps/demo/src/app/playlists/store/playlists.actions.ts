import {
  createAction,
  props,
  createActionGroup,
  emptyProps,
} from '@ngrx/store';
import { Playlist } from '../../core/model/Playlist';

export const loadPlaylists = createAction('[Playlists] Load Playlists');

// export const loadPlaylistsSuccess = createAction(
//   '[Playlists] Load Playlists Success',
//   props<{ data: Playlist[] }>()
// );

// export const loadPlaylistsFailure = createAction(
//   '[Playlists] Load Playlists Failure',
//   props<{ error: any }>()
// );

export const PlaylistsActions = createActionGroup({
  source: 'Playlists',
  events: {
    'Load Playlists': emptyProps(),
    'Load Playlists Success': props<{ data: Playlist[] }>(),
    'Load Playlists Failure': props<{ error: any }>(),

    'Select Playlist': props<{ id: Playlist['id'] }>(),
    'Select Playlist Success': props<{ data: Playlist }>(),

    'Save Playlist': props<{ draft: Playlist }>(),
    'Save Playlist Success': props<{ data: Playlist }>(),
  },
});

// const playlistApiActions = createActionGroup({
//   source: 'Playlist API',
//   events: {
//     // defining events with payload using the `props` function
//     'Login Success': props<{ userId: number; token: string }>(),
//     'Login Failure': props<{ error: string }>(),

//     // defining an event without payload using the `emptyProps` function
//     'Logout Success': emptyProps(),

//     // defining an event with payload using the props factory
//     'Logout Failure': (error: Error) => ({ error }),
//   },
// });

// // action type: "[Auth API] Login Success"
// playlistApiActions.loginSuccess({ userId: 10, token: 'ngrx' });

// // action type: "[Auth API] Login Failure"
// playlistApiActions.loginFailure({ error: 'Login Failure!' });

// // action type: "[Auth API] Logout Success"
// playlistApiActions.logoutSuccess();

// // action type: "[Auth API] Logout Failure";
// playlistApiActions.logoutFailure(new Error('Logout Failure!'));
