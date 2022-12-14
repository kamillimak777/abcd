import { ErrorHandler, Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, iif, Observable, retry, throwError, timer } from 'rxjs';
import { API_URL } from '../tokens';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    @Inject(API_URL) private api_url: string,
    private auth: AuthService,
    private errorHandler: ErrorHandler
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!request.url.match(/^https?/)) {
      request = request.clone({
        url: this.api_url + request.url,
      });
    }

    // const auth_enabled = request.context.get(HTTPAuthToken);

    if (request.url.match(new RegExp('^' + 'https://api.spotify.com'))) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.auth.getToken(),
        },
      });
    }

    return next.handle(request).pipe(
      retry({
        delay(error, retryCount) {
          // Retry (with Exponential Backoff) only if no connection
          if (error.status !== 0) return throwError(() => error);
          return iif(
            () => retryCount < 3,
            timer(retryCount ** 2 * 1500),
            throwError(() => new Error('No internet'))
          );
        },
      }),
      catchError((error, originalObs) => {
        this.errorHandler.handleError(error);

        if (!(error instanceof HttpErrorResponse)) throw error;
        // throw new Error('Unexpected Error');

        const errorResponse = error.error;

        if (!isSpotifyErrorResponse(errorResponse))
          throw new Error('Unexpected Error');

        if (error.status === 401) this.auth.login();

        return throwError(() => new Error(errorResponse.error.message));
      })
    );
  }
}

// HttpClient.get().subscribe()
// HttpClient.handler.handle()

// HttpClient.handler = IntA
// IntA.handler = IntB
// IntB.handler = IntC
// IntC.handler = HttpHandler

// Generated by https://quicktype.io
export interface SpotifyErrorResponse {
  error: {
    status: number;
    message: string;
  };
}

function isSpotifyErrorResponse(res: any): res is SpotifyErrorResponse {
  return (
    res &&
    'error' in res &&
    'message' in res.error &&
    typeof res.error.message === 'string'
  );
}
