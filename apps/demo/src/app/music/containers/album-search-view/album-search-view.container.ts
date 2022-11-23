import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  catchError,
  concatMap,
  EMPTY,
  exhaustMap,
  filter,
  map,
  mergeMap,
  Subject,
  Subscription,
  switchMap,
  takeUntil,
  takeWhile,
  tap,
} from 'rxjs';
import { Album } from '../../../core/model/Album';
import { MusicStoreService } from '../../../core/services/music-store/music-store.service';
@Component({
  selector: 'sages-ang-adv-album-search-view',
  templateUrl: './album-search-view.container.html',
  styleUrls: ['./album-search-view.container.css'],
  providers: [],
})
export class AlbumSearchViewContainer {
  queryChanges = this.route.queryParamMap //
    .pipe(map((qpm) => qpm.get('q')));

  resultsChanges = this.queryChanges.pipe(
    filter(Boolean),
    switchMap((query) =>
      this.store.searchAlbums(query).pipe(catchError(() => EMPTY))
    )
  );

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: MusicStoreService
  ) {}

  search(query = '') {
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParams: {
        q: query,
      },
    });
  }

  ngOnInit() {}
}
