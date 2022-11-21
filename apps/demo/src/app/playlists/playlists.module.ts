import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistsComponent } from './playlists.component';
import { PlaylistsViewContainer } from './containers/playlists-view/playlists-view.container';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';
import { PlaylistDetailsComponent } from './components/playlist-details/playlist-details.component';
import { PlaylistEditorComponent } from './components/playlist-editor/playlist-editor.component';

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
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PlaylistsModule {}
