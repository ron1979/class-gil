
import { Component, Output ,EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'image-small',
  templateUrl: './image-small.component.html',
  styleUrls: ['./image-small.component.scss']
})
export class ImageSmallComponent {
  @Output()
  imageClicked=new EventEmitter<string>();

  @Input()
  src='https://picsum.photos/id/12/500/300';


  imgclicked000(val:string) {
  this.imageClicked.emit(val);
console.log(`image clicked from small ${val}`)
}

}
