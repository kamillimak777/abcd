import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Playlist } from '../../../core/model/Playlist';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // encapsulation: ViewEncapsulation.None
})
export class PlaylistDetailsComponent implements OnInit {
  @Input() playlist?: Playlist;

  @Output() edit = new EventEmitter();

  constructor() {}

  editClick() {
    this.edit.emit();
  }

  ngOnInit(): void {}
}
