import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  BehaviorSubject,
  catchError,
  concatMap,
  EMPTY,
  exhaustMap,
  filter,
  map,
  mergeMap,
  Observable,
  ReplaySubject,
  share,
  shareReplay,
  Subject,
  Subscription,
  switchMap,
  takeUntil,
  takeWhile,
  tap,
} from 'rxjs';
import { albumsMock } from '../../../core/mocks/albumsMock';
import { Album, AlbumResponse } from '../../../core/model/Album';
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

  resultsChanges?: Observable<AlbumResponse[]>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: MusicStoreService
  ) {}

  cancel() {
    this.resultsChanges = undefined; // AsyncPipe unsubscribes!
  }

  ngOnInit() {
    this.resultsChanges = this.queryChanges.pipe(
      filter(Boolean),
      switchMap((query) =>
        this.store.searchAlbums(query).pipe(catchError(() => EMPTY))
      ),
      share()
    );
  }

  search(query = '') {
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParams: {
        q: query,
      },
    });
  }
}
