import { Component } from '@angular/core';
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

  constructor(private store: MusicStoreService) {}

  search(query = '') {
    this.store.searchAlbums(query).subscribe({
      next: (albums) => (this.results = albums), // -O-
      error: (error) => (this.message = error.error.error.message), // -X-
      complete: () => console.log('complete'), // --|
    });
  }

  ngOnInit() {
    this.search('Batman');
  }
}
