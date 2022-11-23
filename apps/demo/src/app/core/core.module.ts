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
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from '../reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
  ],
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
