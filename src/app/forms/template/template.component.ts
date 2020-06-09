import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  firstname:string = 'Prafful'
  lastname:string = ''
  hobby:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  userAdd =(pf)=>{
    console.log("userAdd() called!!!!")
    console.log(pf)
    console.log(pf.value)
    //some statement to send pf.value to rest endpoint
  }

}
