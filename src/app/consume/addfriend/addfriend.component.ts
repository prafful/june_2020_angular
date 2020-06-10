import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'cts-addfriend',
  templateUrl: './addfriend.component.html',
  styleUrls: ['./addfriend.component.css']
})
export class AddfriendComponent implements OnInit {

  name:string=null
  email:string = null
  username:string = null

  constructor(private router:Router, private api: RestapiService) { }

  ngOnInit(): void {
  }

  goToShowAllFriends(){
    this.router.navigate(['service/remote'])
  }

  addFriendViaAPI(ff){
    this.api.addFriend(ff.value)
            .subscribe(res =>{
              console.log(res)
              this.name=null
              this.email = null
              this.username = null
            },
            err=>{
              console.log(err)
            })
  }

}
