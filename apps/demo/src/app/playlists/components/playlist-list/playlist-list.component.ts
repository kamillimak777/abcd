import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

NgForOf

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.css'],
})
export class PlaylistListComponent implements OnInit {
  playlists = [
    {
      id: '123',
      name: 'Playlist 123',
      public: true,
      description: 'BEst Playlist',
    },
    {
      id: '234',
      name: 'Playlist 234',
      public: false,
      description: 'Awesome Playlist',
    },
    {
      id: '345',
      name: 'Playlist 345',
      public: true,
      description: 'Cool Playlist',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
