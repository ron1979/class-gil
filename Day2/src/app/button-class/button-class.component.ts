import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-class',
  templateUrl: './button-class.component.html',
  styleUrls: ['./button-class.component.scss']
})
export class ButtonClassComponent {

  @Input()
  isBig=true;

  @Input()
  _isGil=true;

  isGil(){
    return this._isGil;
  }

}
