import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catfacts',
  templateUrl: './catfacts.component.html',
  styleUrls: ['./catfacts.component.scss']
})
export class CatfactsComponent {

  constructor(private http:HttpClient) {
    http.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=3').subscribe(
      (data:any)=>{console.log(data);});
 }

  //שיעור הבא RXJS תוספת
}
