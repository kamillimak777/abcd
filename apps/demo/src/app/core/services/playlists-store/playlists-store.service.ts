import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, of } from 'rxjs';
import { PagingObject } from '../../model/Album';
import { Playlist } from '../../model/Playlist';
import { INITIAL_PLAYLISTS_DATA } from '../../tokens';

@Injectable({
  providedIn: 'root',
})
export class PlaylistsStoreService {
  constructor(
    private http: HttpClient,
    @Inject(INITIAL_PLAYLISTS_DATA)
    private _playlists: Playlist[] = []
  ) {}

  private playlists = new BehaviorSubject<Playlist[]>([]);
  readonly playlistsChange = this.playlists.asObservable();

  findPlaylists() {
    // return this.playlists.next(this._playlists)
    return this.http
      .get<PagingObject<Playlist>>('me/playlists')
      .pipe(map((res) => res.items));
  }

  getPlaylistById(id: Playlist['id']) {
    // return of(this.playlists.getValue().find((p) => p.id === id));
    return this.http.get<Playlist>('playlists/' + id);
  }

  save(draft: Playlist) {
    // const index = this.playlists.findIndex((p) => p.id == draft.id);
    // this.playlists[index] = draft;
    // this.playlists = [...this.playlists]

    return of(draft);
  }

  create(draft: Playlist) {
    // draft.id = (Date.now()).toString()
    // this.playlists.push(draft);
    // this.playlists = [...this.playlists]
    return of(draft);
  }
}
