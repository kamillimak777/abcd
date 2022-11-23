import { Component, EventEmitter, Output, placki } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  UntypedFormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
  providers: [
    // { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    {
      provide: ErrorStateMatcher,
      useClass: class extends ErrorStateMatcher {
        override isErrorState(control: AbstractControl) {
          return control.dirty || control.touched;
        }
      },
    },
  ],
})
export class SearchFormComponent {
  @Output() search = new EventEmitter<string>();

  censor = (control: AbstractControl<string>): ValidationErrors | null => {
    const badword = 'batman';
    if (!control.value.includes(badword)) return null;

    return {
      censor: { badword },
    };
  };

  searchForm = this.fb.group({
    // query: this.fb.control('Batman')
    query: this.fb.control('', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        this.censor, //
      ],
    }),

    type: ['album'],
  });

  constructor(private fb: NonNullableFormBuilder) {
    window.form = this.searchForm;

    this.searchForm.controls.query.valueChanges
      .pipe(
        // wait for 500ms silence
        debounceTime(500),

        // no duplicates
        distinctUntilChanged(),

        // minimum 3 characters
        filter((x) => x.length >= 3)
      )
      .subscribe(this.search);

    // .subscribe(console.log);
    // .subscribe((query) => this.search.emit(query));
    // .subscribe({
    //   next: res => this.search.next(res),
    //   error: res => this.search.error(res),
    //   complete: () => this.search.complete(),
    // })
  }

  submit() {
    this.search.emit(this.searchForm.value.query);
  }
}

declare global {
  interface Window {
    // form: FormGroup<{
    //   query: FormControl<string>;
    //   type: FormControl<string>;
    // }>;
    form?: typeof SearchFormComponent.prototype.searchForm;
  }
}

declare module '@angular/core' {
  export const placki = 123;
}
