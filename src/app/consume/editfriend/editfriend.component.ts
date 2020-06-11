import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'cts-editfriend',
  templateUrl: './editfriend.component.html',
  styleUrls: ['./editfriend.component.css']
})
export class EditfriendComponent implements OnInit {

  editId:number = null
  name:string = null
  username:string = null
  email:string = null

  constructor(private activeRoute: ActivatedRoute, private api: RestapiService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.activeRoute)
    this.editId =  this.activeRoute.snapshot.params.activeid
    console.log(this.editId)
    //get friend with specific id
    this.api.getFriendById(this.editId)
            .subscribe(res =>{
              console.log(res)
              this.name = res.name
              this.username = res.username
              this.email = res.email
            }, err=>{
              console.log(err)
            })
  }

  editFriendViaAPI(ff){
    console.log(ff.value)
    this.api.updateFriend(this.editId, ff.value)
            .subscribe(res=>{
              console.log(res)
              this.name = null
              this.username = null
              this.email = null
              this.router.navigate(['service/remote'])
            }, err=>{
              console.log(err)
            })
  }

}
