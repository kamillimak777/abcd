import { Action, createReducer, on } from '@ngrx/store';
import { Playlist } from '../../core/model/Playlist';
import { PlaylistsActions } from './playlists.actions';

export const playlistsFeatureKey = 'playlists';

export interface State {
  loading?: boolean;
  error?: Error;
  playlists: Playlist[];
  selected?: Playlist;
  selectedId?: Playlist['id'];
}

export const initialState: State = {
  playlists: [],
  loading: false,
};

// https://www.npmjs.com/package/ngrx-immer

export const reducer = createReducer(
  initialState,

  on(PlaylistsActions.loadPlaylists, (state) => {
    return { ...state, playlists: [] };
  }),
  on(PlaylistsActions.loadPlaylistsFailure, (state, action) => {
    return { ...state, error: action.error };
  }),

  on(PlaylistsActions.loadPlaylistsSuccess, (state, action) => {
    return { ...state, playlists: action.data };
  }),
  on(PlaylistsActions.selectPlaylist, (state, action) => {
    return { ...state, selectedId: action.id };
  }),
  on(PlaylistsActions.selectPlaylistSuccess, (state, action) => {
    return { ...state, selected: action.data };
  })
);
