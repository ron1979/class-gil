import { Component,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

@Input()
myArr:number[]=[];


  @Output()
  txtChange=new EventEmitter<string>();

  constructor() { }

  // changeTxt(txt:string){
  //   this.txtChange.emit(txt);
  // }



  onClick(){
    //alert('click first');
   // alert(this.txtChange);
debugger;
   this.txtChange.emit( Math.random().toString());
  }





}
