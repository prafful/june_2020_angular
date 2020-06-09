import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cts-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  
  personalForm:any = null
  fname:string = null
  lname:string = null
  hobby:string = null

  constructor() { }

  ngOnInit(): void {
    this.personalForm = new FormGroup({
                  fname: new FormControl("PD", Validators.compose([
                                                  Validators.required,
                                                  Validators.minLength(4),
                                                  Validators.pattern('^[a-zA-Z ]+$')
                  ])),
                  lname: new FormControl("", this.customValidation),
                  hobby: new FormControl("hacking")   
    })
  }


  customValidation =(control)=>{
    console.log(control)
    if(control.value.length < 3){
      return {lname: true}
    }

  }

  userAdd = (pf)=>{
    console.log(pf)
    console.log(pf.value)

  }

}
