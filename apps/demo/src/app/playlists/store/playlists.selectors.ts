import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPlaylists from './playlists.reducer';

export const selectPlaylistsState = createFeatureSelector<fromPlaylists.State>(
  fromPlaylists.playlistsFeatureKey
);
