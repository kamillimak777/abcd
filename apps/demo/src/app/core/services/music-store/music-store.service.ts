import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { albumsMock } from '../../mocks/albumsMock';
import { AlbumResponse, AlbumSearchResponse } from '../../model/Album';
import { API_URL } from '../../tokens';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class MusicStoreService {
  constructor(
    @Inject(API_URL) private api_url: string,
    private http: HttpClient,
    private auth: AuthService
  ) {}

  searchAlbums(query: string) {
    return this.http
      .get<AlbumSearchResponse>(this.api_url + 'search', {
        params: { type: 'album', query },
        headers: {
          Authorization: 'Bearer ' + this.auth.getToken(),
        },
      })
      .pipe(
        map(res => res.albums.items)
      );

    // return of(albumsMock);
  }
}
