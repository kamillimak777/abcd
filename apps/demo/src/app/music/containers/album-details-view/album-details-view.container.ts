import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { albumsMock } from '../../../core/mocks/albumsMock';
import { MusicStoreService } from '../../../core/services/music-store/music-store.service';

@Component({
  selector: 'sages-ang-adv-album-details-view',
  templateUrl: './album-details-view.container.html',
  styleUrls: ['./album-details-view.container.css'],
})
export class AlbumDetailsViewContainer {
  constructor(
    private store: MusicStoreService,
    private route: ActivatedRoute
  ) {}

  // paramMap.get('albumId')
  // store.getAlbumById(albumId)

  albumChanges = of(albumsMock[0])
  album =albumsMock[0]
}
