import { Playlist } from "../model/Playlist";

export const mockPlaylists: Playlist[] = [
  {
    id: '123',  type: 'playlist',
    name: 'Playlist 123',
    public: true,
    description: 'BEst Playlist',
  },
  {
    id: '234',  type: 'playlist',
    name: 'Playlist 234',
    public: false,
    description: 'Awesome Playlist',
  },
  {
    id: '345',  type: 'playlist',
    name: 'Playlist 345',
    public: true,
    description: 'Cool Playlist',
  },
];
