import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Playlist } from '../playlist-list/Playlist';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class PlaylistDetailsComponent implements OnInit {
  playlist:Playlist = {
    id: '123',
    name: 'Playlist 123',
    public: true,
    description: 'Awesome Playlist',
  };

  constructor() {}

  ngOnInit(): void {}
}
