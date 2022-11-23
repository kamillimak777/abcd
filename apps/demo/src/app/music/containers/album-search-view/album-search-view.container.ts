import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  concatMap,
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
    // this.route.snapshot.queryParamMap.get('q')
    this.route.queryParamMap
      .pipe(
        map((qpm) => qpm.get('q')),
        tap((q) => (this.query = q)),
        filter(Boolean),
        // map(query => this.store.searchAlbums(query)),
        // (obs) => obs // Observable<Observable<AlbumResponse[]>>

        // mergeMap((query) => this.store.searchAlbums(query)), // subscribe all
        // concatMap((query) => this.store.searchAlbums(query)), // subscribe one after one
        // exhaustMap((query) => this.store.searchAlbums(query)), // subscribe first and ingnore // throttle
        switchMap((query) => this.store.searchAlbums(query)), // subscribe lastone and unsubscribe prev // debounce
        // (obs) => obs // Observable<AlbumResponse[]>
      )
      .subscribe({
        next: (albums) => (this.results = albums),
        error: (error) => (this.message = error.message),
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
