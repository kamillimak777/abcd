import { AuthConfig } from 'angular-oauth2-oidc';


export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  // issuer: 'https://idsvr4.azurewebsites.net',
  oidc:false,

  loginUrl:'https://accounts.spotify.com/authorize',

  // URL of the SPA to redirect the user to after login
  // redirectUri: window.location.origin + '/popup.html', +window.parent.postMessage(token)
  redirectUri: window.location.origin + '/index.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: '9cda7523d9a24be1aafa8497a421e33a',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
  // dummyClientSecret: 'secret',
  responseType: 'token',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  scope: 'user-read-private user-read-email',

  showDebugInformation: true,
};
