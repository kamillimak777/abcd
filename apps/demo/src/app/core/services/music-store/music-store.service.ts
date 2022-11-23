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

export const HTTPAuthToken = new HttpContextToken(() => true);

@Injectable({
  providedIn: 'root',
})
export class MusicStoreService {
  constructor(private http: HttpClient) {}

  getAlbumById(id: string) {
    return this.http.get<unknown>('albums' + id);
  }

  searchAlbums(query: string) {
    const AuthCtx = new HttpContext();
    AuthCtx.set(HTTPAuthToken, false);
    
    return this.http
      .get<unknown>('search', {
        params: { type: 'album', query },
        context: AuthCtx,
      })
      .pipe(
        map((res) => {
          isAlbumSearchResponse(res);
          return res.albums.items;
        })
      );
  }
}
