import { NgForOf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { Playlist } from './Playlist';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.css'],
})
export class PlaylistListComponent implements OnInit {
  playlists: Playlist[] = [
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

  selectedId = '234';

  constructor() {}

  @ViewChild('selectionList')
  selectionList?: MatSelectionList;

  select([id]: Playlist['id'][]) {
    this.selectedId = id;
  }

  ngAfterViewInit(): void {
    // const option = this.selectionList?.options.find(
    //   (option) => option.value == this.selectedId
    // );
    // if (option) this.selectionList?.selectedOptions.select(option);
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.playlists.push(this.playlists.shift()!);
    //   this.playlists = JSON.parse(JSON.stringify(this.playlists));
    // }, 1000);
  }

  trackFn(index: number, item: Playlist) {
    return item.id;
  }
}
