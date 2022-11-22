import { NgForOf } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { Playlist } from './Playlist';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.css'],
  // inputs: ['playlists:items'],
})
export class PlaylistListComponent implements OnInit {
  @Input('items') playlists: Playlist[] = [];

  @Input() selectedId = '';

  @Output() selectedIdChange = new EventEmitter<Playlist['id']>();

  constructor() {}

  @ViewChild('selectionList')
  selectionList?: MatSelectionList;

  select([id]: Playlist['id'][]) {
    this.selectedId = id;
    this.selectedIdChange.emit(id)
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
