import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-ifdir',
  templateUrl: './ifdir.component.html',
  styleUrls: ['./ifdir.component.css']
})
export class IfdirComponent implements OnInit {

  display:boolean = true
  elseDisplay : boolean = true

  toggleDisplay =()=>{
    this.display = !this.display
    console.log(this.display)
  }

  toggleElseDisplay=()=>{
    this.elseDisplay = !this.elseDisplay
  }

  constructor() { }

  ngOnInit(): void {
  }

}
