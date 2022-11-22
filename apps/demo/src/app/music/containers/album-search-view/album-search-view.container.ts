import { Component } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { Album } from '../../../core/model/Album';
import { MusicStoreService } from '../../../core/services/music-store/music-store.service';
@Component({
  selector: 'sages-ang-adv-album-search-view',
  templateUrl: './album-search-view.container.html',
  styleUrls: ['./album-search-view.container.css'],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
})
export class AlbumSearchViewContainer {
  results: Album[] = [];
  message = '';

  constructor(private store: MusicStoreService) {}

  search(query = '') {
    this.store.searchAlbums(query).subscribe({
      next: (res) => {
        this.results = res.albums.items;
      },
      error: (error) => {
        this.message = error.error.error.message;
      },
      complete: () => console.log('complete'),
    });
  }

  ngOnInit() {
    this.search('Batman');
  }
}
