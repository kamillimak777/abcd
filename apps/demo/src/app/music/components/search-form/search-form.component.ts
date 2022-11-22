import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  UntypedFormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent {
  @Output() search = new EventEmitter<string>();

  // searchForm = new FormGroup({
  //   query: new FormControl('batman', {
  //     nonNullable: true,
  //   }),
  // });

  searchForm = this.fb.group({
    // query: this.fb.control('Batman')
    query: ['batman'],
    type: ['album'],
  });

  // constructor(private fb: FormBuilder) {}
  constructor(private fb: NonNullableFormBuilder) {}
  // constructor(private fb: UntypedFormBuilder) {}

  submit() {
    this.search.emit(this.searchForm.value.query);
  }
}
