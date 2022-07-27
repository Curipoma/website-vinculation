import { UntypedFormControl, ValidationErrors } from '@angular/forms';
import { isDate, isBefore, isAfter, format } from 'date-fns';

export class DateValidators {
  static valid(control: UntypedFormControl): ValidationErrors | null {
    const value = control.value;

    if (value && !isNaN(new Date(value).getDate())) {
      return null;
    }

    return { dateInvalid: true };
  }

  static max(
    maxDate: Date
  ): (control: UntypedFormControl) => ValidationErrors | null {
    return (control: UntypedFormControl): ValidationErrors | null => {
      const value = new Date(control.value);
      const isValid = value ? isBefore(value, maxDate) : true;
      return isValid
        ? null
        : {
            dateMax: {
              actualDate: format(value, 'yyyy-MM-dd'),
              requiredDate: format(maxDate, 'yyyy-MM-dd'),
            },
          };
    };
  }

  static min(
    minDate: Date
  ): (control: UntypedFormControl) => ValidationErrors | null {
    return (control: UntypedFormControl): ValidationErrors | null => {
      const value = new Date(control.value);
      const isValid = value ? isAfter(value, minDate) : true;
      return isValid
        ? null
        : {
            dateMin: {
              actualDate: format(value, 'yyyy-MM-dd'),
              requiredDate: format(minDate, 'yyyy-MM-dd'),
            },
          };
    };
  }
}
