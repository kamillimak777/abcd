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
    this.service.playlistsChange.subscribe((data) => {
      this.playlists = data;
      // this.cdk.detectChangess()
    });

    this.service.findPlaylists();
  }

  savePlaylist(draft: Playlist) {
    this.service.save(draft).subscribe(() => {
      this.selectPlaylistById(draft.id);
    });
  }

  createPlaylist(draft: Playlist) {
    this.service.create(draft).subscribe(() => {
      this.selectPlaylistById(draft.id);
    });
  }

  selectPlaylistById(id: Playlist['id']) {
    this.service.getPlaylistById(id).subscribe((sel) => {
      this.selected = sel;
      this.showDetails();
    });
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
