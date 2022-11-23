import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, of, switchMap } from 'rxjs';
import { albumsMock } from '../../../core/mocks/albumsMock';
import { MusicStoreService } from '../../../core/services/music-store/music-store.service';

@Component({
  selector: 'sages-ang-adv-album-details-view',
  templateUrl: './album-details-view.container.html',
  styleUrls: ['./album-details-view.container.css'],
})
export class AlbumDetailsViewContainer {
  albumId = this.route.paramMap.pipe(map((pm) => pm.get('albumId')));

  albumChanges = this.albumId.pipe(
    filter(Boolean),
    switchMap((id) => this.store.getAlbumById(id))
  );

  constructor(
    private store: MusicStoreService,
    private route: ActivatedRoute
  ) {}
}
