import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition,  animate } from '@angular/animations';

@Component({
  selector: 'cts-textanimate',
  templateUrl: './textanimate.component.html',
  styleUrls: ['./textanimate.component.css'],
  animations:[
    trigger('basicanimate', [state('one', style({
      color:'red',
      fontSize:'22px',
      letterSpacing:'10px'
    })), state('two', style({
      color:'green',
      fontSize:'44px',
      letterSpacing:'-1px'
    })), transition('one <-> two', animate('500ms ease-out'))])
    
  ]
})
export class TextanimateComponent implements OnInit {

  currentState:string = 'one'

  constructor() { }

  ngOnInit(): void {
  }

  animateText(){
    this.currentState = this.currentState == 'one' ?'two':'one'
    console.log(this.currentState)
  }

}

/**
 Each animation will have a name. 
 We use animation name to trigger the animation.

 trigger -> animation name and animation states
 states -> collection of state. Each state is made of style.
 Style -> Each style is made of CSS rules.

 When animation is triggred, 
 element moves from one state to another.
 Transition happens, when element changes the state.
*/
