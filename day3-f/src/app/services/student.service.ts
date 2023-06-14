import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
students=[  {id:1,name:"avi",grade:100},
{id:2,name:"beni",grade:90},
{id:3,name:"charlie",grade:80},
{id:4,name:"dani",grade:70},
{id:5,name:"eli",grade:60},
{id:6,name:"gabi",grade:50},
{id:7,name:"haim",grade:40},
{id:8,name:"yosi",grade:30},
{id:9,name:"kobi",grade:20},
{id:10,name:"lavi",grade:10},
];

addStudent(student:any){
  console.log(student);
  this.students.push(student);
}

removeStudent(id:number){
  let index=this.students.findIndex(s=>s.id==id);
  this.students.splice(index,1);
}

getAllsSudents(){
  return this.students;
}



  constructor() { }
}
