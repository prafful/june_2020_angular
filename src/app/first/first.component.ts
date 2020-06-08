import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  message = 'My First Component!!!!'

  constructor() { }

  ngOnInit(): void {
  }

}
