import { TestBed } from '@angular/core/testing';

import { PlaylistsStoreService } from './playlists-store.service';

describe('PlaylistsStoreService', () => {
  let service: PlaylistsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaylistsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
