import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-targil',
  templateUrl: './targil.component.html',
  styleUrls: ['./targil.component.scss']
})
export class TargilComponent {
myCounter=0;



  constructor(private counterService: CounterService) { }

  minus(){
   // this.counterService.counter-- ;
    //this.myCounter=this.counterService.counter;
  }
  plus(){
    //this.counterService.counter++ ;
    //this.myCounter=this.counterService.counter;
  }
}
