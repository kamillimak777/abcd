import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { INITIAL_PLAYLISTS_DATA } from './core/tokens';
import { mockPlaylists } from './core/mocks/playlistsMocks';
import { HttpClientModule } from '@angular/common/http';

import { OAuthModule } from 'angular-oauth2-oidc';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/music/search',
    pathMatch: 'full',
  },
  {
    path: 'playlists',
    loadChildren: () =>
      import('./playlists/playlists.module') //
        .then((m) => m.PlaylistsModule),
  },
  {
    path: 'music',
    loadChildren: () =>
      import('./music/music.module').then((m) => m.MusicModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Infrastructure
    OAuthModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    //// App Core
    CoreModule,
    
      // Features
      RouterModule.forRoot(routes, { useHash: true }),

    // UI and Helpers
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
