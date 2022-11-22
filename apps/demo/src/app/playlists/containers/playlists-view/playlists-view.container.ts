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
  selected?: Playlist;

  constructor(private service: PlaylistsStoreService) {}

  ngOnInit(): void {
    this.playlists = this.service.findPlaylists();
  }

  savePlaylist(draft: Playlist) {
    console.log('Saving...', draft);
    this.service.save(draft);
    this.selectPlaylistById(draft.id);
    this.showDetails();
  }

  createPlaylist(draft: Playlist) {
    console.log('Saving...', draft);
    this.service.create(draft);
    this.selectPlaylistById(draft.id);
    this.showDetails();
  }

  selectPlaylistById(id: Playlist['id']) {
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
