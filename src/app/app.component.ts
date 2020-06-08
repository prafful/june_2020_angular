import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class RootComponent {
  title = 'myfirst';
  score = 92


  welcome=()=>{
    return "Hello again from class method!!!!"
  }
}
