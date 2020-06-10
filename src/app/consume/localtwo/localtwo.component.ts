import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'cts-localtwo',
  templateUrl: './localtwo.component.html',
  styleUrls: ['./localtwo.component.css']
})
export class LocaltwoComponent implements OnInit {

  myscores = null
  score = null

  constructor(private ls:LocalService) { }

  ngOnInit(): void {
    this.getMe()

  }

  getMe =()=>{
    this.myscores = this.ls.getScores()
  }

  addToScore=()=>{
    this.ls.setScore(this.score)
  }
}
