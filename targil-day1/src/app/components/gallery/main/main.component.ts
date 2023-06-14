import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
bigImage='https://picsum.photos/id/12/500/300';
isAutoPlay=false;


  changeBigImage(val:string) {
    this.bigImage=val;
    console.log(`image selected from list at main: ${val}`);
  }
  changeState(val:string) {
    console.log(`state changed at main: ${val}`);
    this.isAutoPlay=val==='play';
  }

}
