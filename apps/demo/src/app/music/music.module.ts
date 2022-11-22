import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MusicComponent } from './music.component';
import { AlbumSearchViewContainer } from './containers/album-search-view/album-search-view.container';
import { AlbumDetailsViewContainer } from './containers/album-details-view/album-details-view.container';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ResultsGridComponent } from './components/results-grid/results-grid.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MusicComponent,
    children: [
      { path: '', redirectTo: 'search', pathMatch: 'full' },
      { path: 'search', component: AlbumSearchViewContainer },
      { path: 'albums/:albumId', component: AlbumDetailsViewContainer },
    ],
  },
];

@NgModule({
  declarations: [
    MusicComponent,
    AlbumSearchViewContainer,
    AlbumDetailsViewContainer,
    SearchFormComponent,
    ResultsGridComponent,
    AlbumCardComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class MusicModule {}
