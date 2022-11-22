import { Album } from '../model/Album';

export const albumsMock: Album[] = [
  {
    id: '123',
    name: 'Album 123',
    images: [
      {
        height: 200,
        width: 200,
        url: 'https://www.placecage.com/c/300/300',
      },
    ],
  },
  {
    id: '234',
    name: 'Album 234',
    images: [
      {
        height: 200,
        width: 200,
        url: 'https://www.placecage.com/c/200/200',
      },
    ],
  },
  {
    id: '345',
    name: 'Album 345',
    images: [
      {
        height: 200,
        width: 200,
        url: 'https://www.placecage.com/c/400/400',
      },
    ],
  },
  {
    id: '456',
    name: 'Album 456',
    images: [
      {
        height: 200,
        width: 200,
        url: 'https://www.placecage.com/c/500/500',
      },
    ],
  },
];
