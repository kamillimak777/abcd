import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs';
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
        filter(Boolean) // typeGuard
      )
      .subscribe((q) => {
        this.search(q);
      });
  }

  search(query = '') {
    // this.router.navigate(['/music','search'])
    // this.router.navigate(['..','albums', 123], { relativeTo: this.route})

    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParams: {
        q: query,
      },
    });

    this.store.searchAlbums(query).subscribe({
      next: (albums) => (this.results = albums),
      error: (error) => (this.message = error.message),
    });
  }

  ngOnInit() {}
}
