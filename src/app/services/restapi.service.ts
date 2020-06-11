import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getAllFriends(){
    return this.http.get('http://localhost:3000/allfriends')
  }

  addFriend(friend){
    return this.http.post('http://localhost:3000/allfriends', friend)
  }

  updateFriend(id, friend){
    return this.http.put('http://localhost:3000/allfriends'+'/'+id, friend)
  }

  deleteFriend(id){
    return this.http.delete('http://localhost:3000/allfriends'+'/'+id)
  }

  getFriendById=(id):Observable<any>=>{
    return this.http.get('http://localhost:3000/allfriends'+'/'+id)
  }

 

}
