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
    this.sub.add(queryChanges.subscribe((q) => (this.query = q)));
    this.sub.add(resultsChanges.subscribe((albums) => (this.results = albums)));
  }

  sub = new Subscription();

  ngOnDestroy(): void {
    this.sub.unsubscribe();
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
