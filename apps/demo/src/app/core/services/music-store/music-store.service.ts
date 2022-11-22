import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { albumsMock } from '../../mocks/albumsMock';
import { AlbumResponse } from '../../model/Album';
import { API_URL } from '../../tokens';

@Injectable({
  providedIn: 'root',
})
export class MusicStoreService {
  constructor(
    @Inject(API_URL) private api_url: string,
    private http: HttpClient
  ) {}

  searchAlbums(query: string) {
    const obs = this.http.get<AlbumResponse[]>(this.api_url + 'albums', {
      params: { type: 'album', query },
      headers: {},
    });

    // return of(albumsMock);
    return obs;
  }
}
