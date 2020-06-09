import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-classdir',
  templateUrl: './classdir.component.html',
  styleUrls: ['./classdir.component.css']
})
export class ClassdirComponent implements OnInit {

  status: boolean = true
  statusone: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}
