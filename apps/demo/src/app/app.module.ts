import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { INITIAL_PLAYLISTS_DATA } from './core/tokens';
import { mockPlaylists } from './core/mocks/playlistsMocks';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/playlists',
    pathMatch: 'full',
  },
  {
    path: 'playlists',
    loadChildren: () =>
      import('./playlists/playlists.module') //
        .then((m) => m.PlaylistsModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
    SharedModule,
    // environment.production ? [] : [MockModule],
  ],
  providers: [
    // TreeShaking // Dead Code Removal
    {
      provide: INITIAL_PLAYLISTS_DATA,
      useValue: mockPlaylists,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
