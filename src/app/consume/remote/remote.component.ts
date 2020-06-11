import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cts-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  users:any= null

  constructor(private restapi:RestapiService, private router:Router) { }

  ngOnInit(): void {
    this.getRemoteUsers()
  }

  getRemoteUsers(){
    //this.restapi.getAllUsers().subscribe(this.successHandler, this.errorHandler)

    this.restapi.getAllFriends()
    .subscribe(data =>{
      console.log(data)
      this.users = data
    }, error => {
      console.log(error)
    })
  }

  goToAddFriendPage(){
    this.router.navigate(['addfriend'])
  }

  findAndDeleteFriendById(id){
    this.restapi.deleteFriend(id)
                .subscribe(res =>{
                  console.log(res)
                  this.getRemoteUsers()
                }, err=>{})
  }

  findAndEditFriendById(id){
    this.router.navigate(['editfriend', id])
  }

/*   successHandler(response){
    console.log(response)
  }

  errorHandler(error){
    console.log(error)
  } */

}
