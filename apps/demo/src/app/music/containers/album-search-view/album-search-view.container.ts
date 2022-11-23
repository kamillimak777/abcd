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
  query: string | null = '';

  queryChanges = this.route.queryParamMap //
    .pipe(
      map((qpm) => qpm.get('q')),
      tap((q) => (this.query = q))
      // tap((q) => doSomethingWithQuery(q))
    );

  resultsChanges = this.queryChanges.pipe(
    filter(Boolean),
    switchMap((query) =>
      this.store.searchAlbums(query).pipe(catchError(() => EMPTY))
    ),
    // share({
    // connector: () => new Subject<AlbumResponse[]>(),
    // connector: () => new BehaviorSubject<Album[]>(albumsMock),
    // connector: () => new ReplaySubject<AlbumResponse[]>(3,10_000),
    // })
    shareReplay()
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
