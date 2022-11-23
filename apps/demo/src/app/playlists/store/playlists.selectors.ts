import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPlaylists from './playlists.reducer';

export const selectPlaylistsState = createFeatureSelector<fromPlaylists.State>(
  fromPlaylists.playlistsFeatureKey
);

export const selectPlaylists = createSelector(
  selectPlaylistsState,
  (state) => state.playlists
);

export const selectCurrentPlaylist = createSelector(
  selectPlaylistsState,
  (state) => state.selected
);
