import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Album } from '../../../core/model/Album';

@Component({
  selector: 'app-results-grid',
  templateUrl: './results-grid.component.html',
  styleUrls: ['./results-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsGridComponent {
  @Input() results: Album[] = [];
}
