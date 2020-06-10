import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'cts-localone',
  templateUrl: './localone.component.html',
  styleUrls: ['./localone.component.css']
})
export class LocaloneComponent implements OnInit {

  message: string = null
  scores: number[] = null
  score: number = null


  constructor(private local: LocalService) { }

  ngOnInit(): void {

    this.tryMe()

  }

  tryMe = () => {
    this.message = this.local.welcome()
    this.scores = this.local.getScores()
  }

  addToScore = () => {
    this.local.setScore(this.score)
    console.log(this.score)
    this.tryMe()
    console.log(this.local.getScores())
  }

}
