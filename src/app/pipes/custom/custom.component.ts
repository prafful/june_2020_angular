import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  friends:string[]=['abka','umra','jabra','leta','beta']

  constructor() { }

  ngOnInit(): void {
  }

}
