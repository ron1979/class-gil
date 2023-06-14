import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-big',
  templateUrl: './image-big.component.html',
  styleUrls: ['./image-big.component.scss']
})
export class ImageBigComponent {
  @Input()
imgsrc='https://picsum.photos/id/12/500/500';



}
