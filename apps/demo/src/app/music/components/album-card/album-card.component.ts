import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Album } from '../../../core/model/Album';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumCardComponent {
  @Input() album?: Album;

  // @Input() album!: Album;
  // ngOnInit() {
  //   if (!this.album) throw 'Missing album Input';
  // }
}
