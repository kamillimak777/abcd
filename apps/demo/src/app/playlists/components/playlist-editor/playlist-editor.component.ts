import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-editor',
  templateUrl: './playlist-editor.component.html',
  styleUrls: ['./playlist-editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistEditorComponent implements OnInit {
  playlist = {
    id: '123',
    name: 'Playlist 123',
    public: true,
    description: 'Awesome Playlist',
  };

  constructor() {}

  ngOnInit(): void {}


}
