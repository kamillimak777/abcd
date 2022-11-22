import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { API_URL, INITIAL_PLAYLISTS_DATA } from './tokens';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    // HttpClient,
    {
      provide: INITIAL_PLAYLISTS_DATA,
      useValue: [],
    },
    {
      provide: API_URL,
      useValue: 'https://api.spotify.com/v1/'
    }
  ],
})
export class CoreModule {}
