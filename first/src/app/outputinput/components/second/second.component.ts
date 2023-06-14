import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {
@Input()
txt?:string;

@Output()
clickas=new EventEmitter<string>();

constructor() {
  if (!this.txt) {
   // throw new Error('The "label" input is required');
  }
}

  clickme(){
    alert('clickme');
    console.log('clickme');
  }
}
