import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as PlaylistsActions from './playlists.actions';


@Injectable()
export class PlaylistsEffects {

  loadPlaylistss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(PlaylistsActions.loadPlaylistss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => PlaylistsActions.loadPlaylistssSuccess({ data })),
          catchError(error => of(PlaylistsActions.loadPlaylistssFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
