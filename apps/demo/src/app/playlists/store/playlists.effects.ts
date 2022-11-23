import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap, filter } from 'rxjs/operators';
import { Observable, EMPTY, of, from } from 'rxjs';
import { PlaylistsActions } from './playlists.actions';
import { PlaylistsStoreService } from '../../core/services/playlists-store/playlists-store.service';
import { mockPlaylists } from '../../core/mocks/playlistsMocks';

@Injectable()
export class PlaylistsEffects {
  loadPlaylistss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlaylistsActions.loadPlaylists),
      switchMap((action) => {
        return this.store.findPlaylists();
      }),
      map((result) => PlaylistsActions.loadPlaylistsSuccess({ data: result }))
    );
  });

  selectPlaylists$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlaylistsActions.selectPlaylist),
      switchMap((action) => {
        return this.store.getPlaylistById(action.id);
      }),
      filter(Boolean),
      map((result) => PlaylistsActions.selectPlaylistSuccess({ data: result }))
    );
  });

  loadPlaylistssMock$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlaylistsActions.loadPlaylists),
      concatMap((action) => {
        return from([]);

        return from([
          PlaylistsActions.loadPlaylistsSuccess({ data: mockPlaylists }),
          PlaylistsActions.loadPlaylistsSuccess({ data: mockPlaylists }),
        ]);
      })
    );
  });

  // /** An EMPTY observable only emits completion. Replace with your own observable API request */
  // EMPTY.pipe(
  //   map((data) => PlaylistsActions.loadPlaylistssSuccess({ data })),
  //   catchError((error) =>
  //     of(PlaylistsActions.loadPlaylistssFailure({ error }))
  //   )
  // )
  // })

  constructor(
    private actions$: Actions,
    private store: PlaylistsStoreService
  ) {}
}
