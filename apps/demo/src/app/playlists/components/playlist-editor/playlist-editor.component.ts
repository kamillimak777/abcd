import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
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
  playlist: Playlist = {
    id: '123',
    name: 'Playlist 123',
    public: true,
    description: 'Awesome Playlist',
  };

  // @ViewChild('ref',{read: ElementRef})
  // @ViewChild('ref', { read: NgModel })
  // modelRef?: NgModel;
  // @ViewChild(NgForm)
  @ViewChild('formRef', { read: NgForm })
  formRef?: NgForm;

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  submit() {
    if (this.formRef?.invalid) return;
    console.log(this.formRef?.value);

    // this.formRef?.setValue({
    //   name: '',
    //   public: false,
    //   description: '',
    // });
    
    this.formRef?.resetForm({
      name: '',
      public: false,
      description: '',
    })
  }

  constructor() {}

  ngOnInit(): void {}
}
