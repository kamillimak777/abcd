import { Inject, Injectable } from '@angular/core';
import { Playlist } from '../../model/Playlist';
import { INITIAL_PLAYLISTS_DATA } from '../../tokens';

@Injectable({
  providedIn: 'root',
})
export class PlaylistsStoreService {
  constructor(
    @Inject(INITIAL_PLAYLISTS_DATA)
    private playlists: Playlist[] = [],
  ) {}

  findPlaylists(): Playlist[] {
    return this.playlists;
  }

  getPlaylistById(id: Playlist['id']) {}

  save(draft: Playlist) {}

  create(draft: Playlist) {}
}
