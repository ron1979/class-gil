import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counterSubject=new Subject<number>();


  private counter=0;

  constructor() { }

  minus(){
    this.counter-- ;
    this.counterSubject.next(this.counter);
  }

}
