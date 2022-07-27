import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string | unknown, ...args: unknown[]): string {
    console.log(typeof value);
    if (typeof value === 'string') {
      const dateValid = value.includes('T');
      if (!dateValid) {
        value = `${value}T05:00:00.000Z`;
      }
    }

    console.log(value);
    return <string>value;
  }
}
