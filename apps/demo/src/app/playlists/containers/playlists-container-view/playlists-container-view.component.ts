import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../reducers';
import {
  selectCurrentPlaylist,
  selectPlaylists,
} from '../../store/playlists.selectors';
import { PlaylistsActions } from '../../store/playlists.actions';
import { Playlist } from '../../../core/model/Playlist';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-playlists-container-view',
  templateUrl: './playlists-container-view.component.html',
  styleUrls: ['./playlists-container-view.component.css'],
})
export class PlaylistsContainerViewComponent {
  playlists = this.store.select(selectPlaylists);
  selected = this.store.select(selectCurrentPlaylist);

  constructor(private router: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(PlaylistsActions.loadPlaylists());
  }
  
  selectPlaylist(id: Playlist['id']) {
    this.store.dispatch(PlaylistsActions.selectPlaylist({ id }));
  }

  save(draft: Playlist) {
    this.store.dispatch(PlaylistsActions.savePlaylist({ draft }));
  }

  // this.router.paramMap
  //   .pipe(
  //     map((p) => p.get('playlistId')),
  //     filter(Boolean)
  //   )
  //   .subscribe((id) =>
  //     this.store.dispatch(PlaylistsActions.selectPlaylist({ id }))
  //   );
}
