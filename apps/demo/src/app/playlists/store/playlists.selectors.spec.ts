import * as fromPlaylists from './playlists.reducer';
import { selectPlaylistsState } from './playlists.selectors';

describe('Playlists Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPlaylistsState({
      [fromPlaylists.playlistsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
