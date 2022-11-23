import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistsComponent } from './playlists.component';
import { PlaylistsViewContainer } from './containers/playlists-view/playlists-view.container';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';
import { PlaylistDetailsComponent } from './components/playlist-details/playlist-details.component';
import { PlaylistEditorComponent } from './components/playlist-editor/playlist-editor.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromPlaylists from './store/playlists.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PlaylistsEffects } from './store/playlists.effects';

const routes: Routes = [
  {
    /* /playlists/ */
    path: '',
    component: PlaylistsComponent,
    children: [
      {
        path: '',
        component: PlaylistsViewContainer,
      },
    ],
  },
];

@NgModule({
  declarations: [
    PlaylistsComponent,
    PlaylistsViewContainer,
    PlaylistListComponent,
    PlaylistDetailsComponent,
    PlaylistEditorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    StoreModule.forFeature(
      fromPlaylists.playlistsFeatureKey,
      fromPlaylists.reducer
    ),
    EffectsModule.forFeature([PlaylistsEffects]),
  ],
})
export class PlaylistsModule {}
