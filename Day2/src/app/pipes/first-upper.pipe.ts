import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUpper'
})
export class FirstUpperPipe implements PipeTransform {

  transform(value: string, allWord=false): string {
    console.log('FirstUpperPipe transform');
    console.log(value);

    if (allWord) {
      let words = value.split(' ');
      let newWords = [];
      for (let word of words) {
        newWords.push(word.charAt(0).toUpperCase() + word.slice(1));
      }
      return newWords.join(' ');
    }

    return value.charAt(0).toUpperCase() + value.slice(1);


  }

}
