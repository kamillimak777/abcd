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
  Subscription,
  switchMap,
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
      map((qpm) => qpm.get('q'))
    );

    const resultsChanges = queryChanges.pipe(
      filter(Boolean),
      switchMap((query) =>
        this.store.searchAlbums(query).pipe(catchError(() => EMPTY))
      )
    );
    this.sub1 = queryChanges.subscribe((q) => (this.query = q));
    this.sub2 = resultsChanges.subscribe((albums) => (this.results = albums));
  }

  sub1?: Subscription;
  sub2?: Subscription;

  ngOnDestroy(): void {
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe();
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
