import { InjectionToken } from '@angular/core';
import { Playlist } from './model/Playlist';



export const API_URL = new InjectionToken<string>('API_URL')

export const INITIAL_PLAYLISTS_DATA = new InjectionToken<Playlist[]>(
  'INITIAL_PLAYLISTS_DATA'
);
