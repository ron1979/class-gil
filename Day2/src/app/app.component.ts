import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Day2';

  names= ['John', 'Mary', 'Joe', 'Jane'];

  today=new Date();
dateFormat = "dd/MM/yyyy";

pepole= [
  {name: 'John', age: 30},
  {name: 'Mary', age: 25},
  {name: 'Joe', age: 20},
  {name: 'koko', age: 20}
];

// getDate(ii:  Date) {
// return ii.getDate( dd/MM/yyyy');
// }


  print(_t23: string) {
   return "my name is " + _t23
    }
}
