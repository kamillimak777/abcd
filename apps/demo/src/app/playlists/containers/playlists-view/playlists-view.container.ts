import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../components/playlist-list/Playlist';

const mockPlaylists = [
  {
    id: '123',
    name: 'Playlist 123',
    public: true,
    description: 'BEst Playlist',
  },
  {
    id: '234',
    name: 'Playlist 234',
    public: false,
    description: 'Awesome Playlist',
  },
  {
    id: '345',
    name: 'Playlist 345',
    public: true,
    description: 'Cool Playlist',
  },
];
@Component({
  selector: 'app-playlists-view',
  templateUrl: './playlists-view.container.html',
  styleUrls: ['./playlists-view.container.css'],
})
export class PlaylistsViewContainer implements OnInit {
  mode: 'details' | 'editor' = 'details';

  playlists: Playlist[] = mockPlaylists;
  selectedId: Playlist['id'] = '';
  // selected: Playlist | undefined = this.playlists[0];
  selected: Playlist  = this.playlists[0];

  constructor() {}

  selectPlaylistById(id: Playlist['id']) {
    this.selectedId = id 
    this.selected = this.playlists.find((p) => p.id === id)!
  }

  showEditor() {
    this.mode = 'editor';
  }

  showDetails() {
    this.mode = 'details';
  }

  savePlaylist(draft: Playlist) {
    console.log('Saving...', draft);
  }

  ngOnInit(): void {}
}
