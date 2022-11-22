import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oauth: OAuthService) {
    debugger;
    this.oauth.tryLogin();
  }

  login() {
    this.oauth.initLoginFlow();
  }

  logout() {
    this.oauth.logOut();
  }

  getToken() {
    return this.oauth.getAccessToken();
  }
}
