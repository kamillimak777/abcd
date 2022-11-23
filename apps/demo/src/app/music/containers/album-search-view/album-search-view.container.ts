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
  message = '';
  query: string | null = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: MusicStoreService
  ) {
    this.route.queryParamMap
      .pipe(
        map((qpm) => qpm.get('q')),
        tap((q) => (this.query = q)),
        filter(Boolean),
        switchMap((query) =>
          this.store.searchAlbums(query).pipe(catchError(() => EMPTY))
        )
      )
      .subscribe({
        next: (albums) => (this.results = albums),
        // error: (error) => (this.message = error.message),
      });
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
