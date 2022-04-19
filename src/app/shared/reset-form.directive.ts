import { Directive } from '@angular/core';

@Directive({
  selector: 'form: not([ngNoForm]):not([formGroup]), ng-form, [ngForm]',
  host: {'(submit)': 'onSubmit($event)', '(reset)': 'onReset()'},
  outputs: ['ngSubmit'],
  exportAs: 'ngForm'
})
export class ResetFormDirective  {

  constructor() { }

}
