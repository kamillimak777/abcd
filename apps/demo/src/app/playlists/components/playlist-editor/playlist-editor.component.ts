import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Playlist } from '../playlist-list/Playlist';

@Component({
  selector: 'app-playlist-editor',
  templateUrl: './playlist-editor.component.html',
  styleUrls: ['./playlist-editor.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistEditorComponent implements OnInit {
  @Input() playlist: Playlist = {
    id: '123',
    name: 'Playlist 123',
    public: true,
    description: 'Awesome Playlist',
  };

  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter<Playlist>();

  @ViewChild('formRef', { read: NgForm })
  formRef?: NgForm;

  ngAfterViewInit(): void {}

  submit() {
    if (this.formRef?.invalid) return;

    this.save.emit({
      ...this.playlist,
      ...this.formRef?.value,
    });

    // this.formRef?.resetForm({
    //   name: '',
    //   public: false,
    //   description: '',
    // });
  }

  constructor() {}

  ngOnInit(): void {}
}
