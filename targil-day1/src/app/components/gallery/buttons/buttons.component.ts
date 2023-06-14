import { Component,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
@Input()
  statusButton='stop';

  @Output()
  playClicked=new EventEmitter<string>();

  play() {
    this.statusButton='play';
    this.playClicked.emit(this.statusButton);
    console.log('play clicked');
    }

stop() {
  this.statusButton='stop';
  this.playClicked.emit(this.statusButton);
  console.log('stop clicked');
}


}
