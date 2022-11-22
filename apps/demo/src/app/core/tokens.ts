import { InjectionToken } from '@angular/core';
import { Playlist } from './model/Playlist';


export const tokens = {};

export const INITIAL_PLAYLISTS_DATA = new InjectionToken<Playlist[]>(
  'INITIAL_PLAYLISTS_DATA'
);
