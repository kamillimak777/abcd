import { TestBed } from '@angular/core/testing';

import { MusicStoreService } from './music-store.service';

describe('MusicStoreService', () => {
  let service: MusicStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
