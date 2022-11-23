import {
  HttpClient,
  HttpContext,
  HttpContextToken,
  HttpErrorResponse,
} from '@angular/common/http';
import { ErrorHandler, Inject, Injectable } from '@angular/core';
import {
  catchError,
  delay,
  EMPTY,
  iif,
  map,
  of,
  retry,
  switchMap,
  throwError,
  timer,
} from 'rxjs';
import { albumsMock } from '../../mocks/albumsMock';
import {
  AlbumResponse,
  AlbumSearchResponse,
  isAlbumSearchResponse,
} from '../../model/Album';
import { API_URL } from '../../tokens';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class MusicStoreService {
  constructor(private http: HttpClient) {}

  getAlbumById(id: string) {
    return this.http.get<AlbumResponse>('albums/' + id);
  }

  searchAlbums(query: string) {
    return this.http
      .get<unknown>('search', {
        params: { type: 'album', query },
      })
      .pipe(
        map((res) => {
          isAlbumSearchResponse(res);
          return res.albums.items;
        })
      );
  }
}
