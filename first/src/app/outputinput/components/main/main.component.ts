import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
ronArray=[1,2,3,4,5,6,7,8,9,10];

constructor() {

 // setTimeout(() => { this.ronArray.push(11); }, 3000);
}

myFunc(eventData:string){
  //this.ronArray.push(11);

  alert(`myFunc ${eventData}`);
}

ngOnInit(): void {
  //setTimeout(() => { this.ronArray.push(11); }, 3000);
}

}
