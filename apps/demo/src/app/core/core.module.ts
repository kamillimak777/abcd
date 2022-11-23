import { ErrorHandler, InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { API_URL, INITIAL_PLAYLISTS_DATA } from './tokens';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AuthConfig } from 'angular-oauth2-oidc';
import { authConfig } from './authConfig';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    // { provide: HttpClient, useClass: MyMuchBetterHttpClient },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    // {
    //   provide: ErrorHandler,
    //   useClass: AwesomeTelemetryErrorHandler
    // },
    {
      provide: INITIAL_PLAYLISTS_DATA,
      useValue: [],
    },
    {
      provide: API_URL,
      useValue: 'https://api.spotify.com/v1/',
    },
    {
      provide: AuthConfig,
      useFactory() {
        return authConfig;
      },
    },
  ],
})
export class CoreModule {}
