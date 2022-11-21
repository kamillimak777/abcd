import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlists-view',
  templateUrl: './playlists-view.container.html',
  styleUrls: ['./playlists-view.container.css'],
})
export class PlaylistsViewContainer implements OnInit {
  mode: 'details' | 'editor' = 'details';

  constructor() {}

  showEditor() {
    this.mode = 'editor'
  }
  
  showDetails() {
    this.mode = 'details'
  }

  ngOnInit(): void {}
}
