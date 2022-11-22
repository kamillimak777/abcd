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

  constructor(private store: MusicStoreService) {}

  search(query = '') {
    this.store.searchAlbums(query).subscribe((data) => {
      this.results = data;
    });
  }

  ngOnInit() {
    // this.search('Batman');
  }
}
