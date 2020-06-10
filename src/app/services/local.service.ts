import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private scores:number[] = [1,2,3]

  welcome(){
    return "Welcome to service!!!!"
  }

  getScores(){
    return this.scores
  }

  setScore(score:number){
    this.scores.push(score)
  }

  constructor() { }
}
