import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {


  num=[3,1,9,7,6,8];
  private _num=[...this.num];

  add():void{
 //   this.num.push( parseInt( (Math.random() *10).toString() ,10) );

    //this.num.push(Number((Math.random() * 10).toFixed(0)));

    const randomNum =this.getRandomInt(1, 10);
    this.num.push(randomNum);
  }

  private  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ascending ():void{
    this.num.sort((a, b) =>  a - b); // sort in ascending  order
  }

  descending():void{
    this.num.sort((a, b) => b - a); // sort in descending order
  }

  originalOrder():void{
this.num=[...this._num];



  }

  originalOrderWithAddedNumbers():void{
    const addedNumbers = this.num.slice(this._num.length);
    this.num = [...this._num];
    this.num.push(...addedNumbers);
  }

//   parseInt( (Math.random() *10) ,10)


//   let num=[]
// undefined
// num.push(3)
// 1
// num.push(1)
// 2
// num.push(9)
// 3
// num.push(7)
// 4
// num.push(6)
// 5
// num.push(8)
// 6


//num.sort((a,b)=>{ if(   a>b) return 1; return -1;})

//num.sort((a,b)=>{ if(   a>b) return -1; return 1;})

}
