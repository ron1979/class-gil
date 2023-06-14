import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simanKriaa'
})
export class SimanKriaaPipe implements PipeTransform {

  transform(value: string, howMany: number=1,isUpper=false): string {
    let simanKriaa='';

    for (let i=0; i<howMany; i++) {
      simanKriaa+='!';
    }
if(isUpper  )
      {
    return value.toUpperCase() + simanKriaa;
      }

    return value + simanKriaa;
  }

}
