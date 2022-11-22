import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { albumsMock } from '../../mocks/albumsMock';
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
    this.http.get(this.api_url + 'albums');

    return of(albumsMock);
  }
}
