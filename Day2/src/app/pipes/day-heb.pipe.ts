import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayHeb'
})
export class DayHebPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): unknown {

    console.log('DayHebPipe transform');
    console.log(value);

    switch (value.getDay()) {
      case 0:
        return 'ראשון';
      case 1:
        return 'שני';
      case 2:
        return 'שלישי';
      case 3:
        return 'רביעי';
      case 4:
        return 'חמישי';
      case 5:
        return 'שישי';
      case 6:
        return 'שבת';

    }


    return null;
  }

}
