import { Component } from '@angular/core';


type Work = {
  position: string;
  company: string;
  years: string;
  description: string;
}

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {
  // <h3>{{itm.position}}</h3>
  // <p>{{itm.company}}</p>
  // <p>{{itm.years}}</p>
  // <p>{{itm.description}}</p>


  work: Work[] = [];

  constructor() {


    this.work.push({ position: 'Full Stack Developer', company: 'Fixtzya', years: '2019-2020', description: 'Developing a new product' });
    this.work.push({ position: 'Full Stack Developer', company: 'cisco', years: '2017-2019', description: 'Developing a new product' });
    this.work.push({ position: 'Frontend Developer', company: 'Mix', years: '2015-2017', description: 'Developing a new product' });
    this.work.push({ position: 'Full Stack Developer', company: 'Wix', years: '2013-current', description: 'Developing a new product' });






  }

}

