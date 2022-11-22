import { Component, Inject, OnInit } from '@angular/core';
import { PlaylistsStoreService } from '../../../core/services/playlists-store/playlists-store.service';
import { Playlist } from '../../../core/model/Playlist';


@Component({
  selector: 'app-playlists-view',
  templateUrl: './playlists-view.container.html',
  styleUrls: ['./playlists-view.container.css'],
})
export class PlaylistsViewContainer implements OnInit {
  mode: 'details' | 'editor' | 'creator' = 'details';

  playlists: Playlist[] = [];
  selectedId: Playlist['id'] = '';
  // selected: Playlist | undefined = this.playlists[0];
  selected?: Playlist; //  = this.playlists[0];

  constructor(
    // @Inject(PlaylistsStoreService) 
    private service: PlaylistsStoreService
  ) {}
  
  ngOnInit(): void {
    this.playlists = this.service.findPlaylists()
  }


  savePlaylist(draft: Playlist) {
    console.log('Saving...', draft);
  }

  createPlaylist(draft: Playlist) {
    console.log('Saving...', draft);
  }

  selectPlaylistById(id: Playlist['id']) {
    this.selectedId = id;
    this.selected = this.playlists.find((p) => p.id === id)!;
  }

  showCreator() {
    this.mode = 'creator';
  }

  showEditor() {
    this.mode = 'editor';
  }

  showDetails() {
    this.mode = 'details';
  }

}
