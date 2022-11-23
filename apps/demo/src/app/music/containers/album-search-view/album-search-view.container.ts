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
  results: Album[] = [];
  query: string | null = '';
  message = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: MusicStoreService
  ) {
    const queryChanges = this.route.queryParamMap.pipe(
      map((qpm) => qpm.get('q')),
      takeUntil(this.$onDestroy)
    );

    const resultsChanges = queryChanges.pipe(
      filter(Boolean),
      switchMap((query) =>
        this.store.searchAlbums(query).pipe(catchError(() => EMPTY))
      ),
      // take(n), takeWhile(fn) , takeUntil(obs)
      takeUntil(this.$onDestroy)
    );

    queryChanges.subscribe((q) => (this.query = q));
    resultsChanges.subscribe((albums) => (this.results = albums));
  }

  $onDestroy = new Subject();

  ngOnDestroy(): void {
    this.$onDestroy.next(null);
  }

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
