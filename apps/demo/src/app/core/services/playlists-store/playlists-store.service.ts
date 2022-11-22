import { Inject, Injectable } from '@angular/core';
import { Playlist } from '../../model/Playlist';
import { INITIAL_PLAYLISTS_DATA } from '../../tokens';

@Injectable({
  providedIn: 'root',
})
export class PlaylistsStoreService {
  constructor(
    @Inject(INITIAL_PLAYLISTS_DATA)
    private playlists: Playlist[] = []
  ) {}

  findPlaylists(): Playlist[] {
    return this.playlists;
  }

  getPlaylistById(id: Playlist['id']) {
    return this.playlists.find((p) => p.id === id);
  }

  save(draft: Playlist) {
    const index = this.playlists.findIndex((p) => p.id == draft.id);
    this.playlists[index] = draft;
  }

  create(draft: Playlist) {
    draft.id = crypto.randomUUID();
    this.playlists.push(draft);
  }
}
