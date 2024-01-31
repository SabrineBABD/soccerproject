import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  connectedUser:any
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(this.connectedUser);
    
  }

  isLoggedIn(): Boolean {
    
    const token = sessionStorage.getItem('connectedUser');
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded) {
        this.connectedUser=decoded
      }
     
    }
     return !!token;
  }

  logout(){
    sessionStorage.removeItem('connectedUser')
    this.router.navigate(['/'])
  }



}

