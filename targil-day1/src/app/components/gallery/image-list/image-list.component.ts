import { Component,Output,EventEmitter,Input,OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit,OnChanges {
  intervalId: any;

  @Input()
  autoPlay=false;

    @Output()
    imageSelected=new EventEmitter<string>();

  constructor() {

    console.log('image list constructor: autoplay-'+this.autoPlay );
  }

  ngOnInit() {
    console.log('image list ngOnInit: autoplay-'+this.autoPlay );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('image list ngOnChanges: autoplay-'+this.autoPlay+ '  dd  ' +changes['autoPlay'].currentValue );

    if(changes['autoPlay'].currentValue===true) {

      this.startAutoPlay();
    }
    else {
      this.stopAutoPlay();
    }
  }
  stopAutoPlay() {
    console.log('stop autoplay');
    clearInterval(this.intervalId);

  }
  startAutoPlay() {
    console.log('start autoplay');
    this.intervalId = setInterval(() => {
      let index=Math.floor(Math.random()*this.list.length);
      this.imageSelected.emit(this.list[index]);
      console.log('image selected from list: ' + this.list[index]);
    }, 1000);

  }




list=['https://picsum.photos/id/12/500/300',
  'https://picsum.photos/id/13/500/300',
  'https://picsum.photos/id/14/500/300',
  'https://picsum.photos/id/15/500/300',
  'https://picsum.photos/id/16/500/300',
  'https://picsum.photos/id/17/500/300',
  'https://picsum.photos/id/18/500/300' ];


  imgSelected(val:string) {
  this.imageSelected.emit(val);
console.log('image selected from list: ' + val);

  }
}
