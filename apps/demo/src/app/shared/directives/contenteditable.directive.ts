import { Directive, ElementRef } from '@angular/core';
import {
  ControlValueAccessor,
  NgModel,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';


// Custom Form-Field Control
// https://material.angular.io/guide/creating-a-custom-form-field-control

@Directive({
  selector: '[contenteditable][ngModel]',
  providers: [
    // {provide: MatFormFieldControl, useExisting: MyTelInput}
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ContenteditableDirective,
      multi: true, // As Array
    },
  ],
})
export class ContenteditableDirective implements ControlValueAccessor {
  constructor(
    private elem: ElementRef<HTMLElement> // private model: NgModel,
  ) {
    // console.log('hello!', this.elem, this.model);
    console.log('hello!', this.elem.nativeElement);
  }

  writeValue(obj: any): void {
    if (this.elem.nativeElement.innerHTML !== obj)
      this.elem.nativeElement.innerHTML = obj;
  }

  registerOnChange(fn: any): void {
    this.elem.nativeElement.addEventListener('input', (e) => {
      fn(this.elem.nativeElement.innerHTML);
    });
  }

  registerOnTouched(fn: any): void {
    this.elem.nativeElement.addEventListener('blur', fn);
  }

  setDisabledState?(isDisabled: boolean): void {
    // if (isDisabled) this.elem.nativeElement.removeAttribute('contenteditable');
    // else this.elem.nativeElement.setAttribute('contenteditable', 'true');
  }
}
