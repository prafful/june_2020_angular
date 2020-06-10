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
    this.getRemotUsers()
  }

  getRemotUsers(){
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

/*   successHandler(response){
    console.log(response)
  }

  errorHandler(error){
    console.log(error)
  } */

}
