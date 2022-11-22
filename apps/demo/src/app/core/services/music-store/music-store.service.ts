import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { albumsMock } from '../../mocks/albumsMock';

@Injectable({
  providedIn: 'root',
})
export class MusicStoreService {
  constructor() {}

  searchAlbums(query: string) {
    return of(albumsMock);
  }
}
