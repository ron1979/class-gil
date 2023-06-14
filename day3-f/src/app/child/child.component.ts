import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,OnChanges,OnDestroy{
@Input()
counter=0;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
