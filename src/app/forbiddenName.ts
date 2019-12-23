import { ValidatorFn, AbstractControl } from '@angular/forms';

export const rangeValidator: ValidatorFn = (control: AbstractControl): {[key: string]: any} | null => {
  let min = control.get('min').value;
  let max = control.get('max').value;
  if(min > max || max < min) {
    return {'range': 'Wrong Range'}
  } else {
    return null;
  }
}


export const forbiddenNameValidator = (nameRe: RegExp): ValidatorFn =>
(control: AbstractControl): {[key: string]: any} | null => {
  const forbidden = nameRe.test(control.value);
  return forbidden ? {'forbiddenName': {value: control.value}} : null;
}

export const fieldsNotTheSame: ValidatorFn = (control: AbstractControl): {[key: string]: any} | null => {
  const fn = control.get('firstName');
  const ln = control.get('lastName');
  if(fn.value === ln.value) {
    return {'fieldsNotTheSame': 'first Name and Last Name are indenticall'}
  } else {
    return null;
  }
}
