import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-styledir',
  templateUrl: './styledir.component.html',
  styleUrls: ['./styledir.component.css']
})
export class StyledirComponent implements OnInit {

  boxWidth:string = '200px'
  boxHeight:number = 200
  bgColor:string = 'red'

  constructor() { }

  ngOnInit(): void {
  }

  getWidth=()=>{
    return this.boxWidth
  }

  getHeight=()=>{
    return this.boxHeight+"px"
  }

  getColor=()=>{
    return this.bgColor
  }

}
