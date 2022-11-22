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
  selectedId: Playlist['id'] = '234';
  selected: Playlist = this.playlists[0];

  constructor() {}

  selectPlaylistById(id: Playlist['id']) {
    // const selected = this.playlists.find((p) => p.id === id) as any;
    // const x = selected.get.me.amillion.dollars() + 5

    // const selected = this.playlists.find((p) => p.id === id) as Playlist;
    // const selected = this.playlists.find((p) => p.id === id)!;
    // const palcki = {} as Playlist

    const selected = this.playlists.find((p) => p.id === id);

    // Type Narrowing (i.e. NullCheck )
    if (selected) {
      this.selected = selected; // Playlist
    } else if (selected == undefined) {
      selected; // undefined
    } else {
      // Exhaustiveness check
      const _never: never = selected; // never
      throw new Error('Unexpected data');
    }
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
