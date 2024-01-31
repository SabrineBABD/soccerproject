import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userUrl = "http://localhost:3000/api"
  constructor(private http: HttpClient) { }


  signup(user: any) {
    return this.http.post<{message:any}>(this.userUrl + '/signup', user)

  }

  login(user: any) {
    return this.http.post<{message:any , user:any}>(this.userUrl + '/login', user)

  }
}
