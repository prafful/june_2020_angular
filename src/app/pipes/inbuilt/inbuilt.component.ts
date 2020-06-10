import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-inbuilt',
  templateUrl: './inbuilt.component.html',
  styleUrls: ['./inbuilt.component.css']
})
export class InbuiltComponent implements OnInit {

  message:string = 'abkra Ka daBRA GILI GILI boom boom'
  birthday:Date = new Date()
  salary:number = 88888888

  constructor() { }

  ngOnInit(): void {
  }

}
