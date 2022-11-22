import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Playlist } from '../../model/Playlist';
import { INITIAL_PLAYLISTS_DATA } from '../../tokens';

@Injectable({
  providedIn: 'root',
})
export class PlaylistsStoreService {
  constructor(
    @Inject(INITIAL_PLAYLISTS_DATA)
    private _playlists: Playlist[] = []
  ) {}

  private playlists = new BehaviorSubject<Playlist[]>([])
  readonly playlistsChange = this.playlists.asObservable()

  findPlaylists()  {
    return this.playlists.next(this._playlists)
  }

  getPlaylistById(id: Playlist['id']) {
    return of(this.playlists.getValue().find((p) => p.id === id))
  }

  save(draft: Playlist) {
    // const index = this.playlists.findIndex((p) => p.id == draft.id);
    // this.playlists[index] = draft;
    // this.playlists = [...this.playlists]

    return of(draft)
  }

  create(draft: Playlist) {
    // draft.id = (Date.now()).toString()
    // this.playlists.push(draft);
    // this.playlists = [...this.playlists]
    return of(draft)
  }
}
