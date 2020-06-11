import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cts-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() iWillGo 

  constructor() { }

  ngOnInit(): void {
  }

}
