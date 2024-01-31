import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { MustMatch } from 'src/app/shared/confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  signupForm!: FormGroup
  role:string=""
  constructor(private formBuilder: FormBuilder , private userService:UsersService) { }

  ngOnInit(): void {  

 

    this.role=window.location.pathname==="/signupAdmin" ?"admin":"user"
    


    this.signupForm = this.formBuilder.group({
      firstName:['' ,  [Validators.minLength(3) , Validators.required]],
      lastName:['' , [Validators.minLength(3), Validators.required]  ],
      email:['' , [Validators.email, Validators.required]],
      password:[''],
      cPassword:[''],
       role:[this.role],
    }
    ,
    {
      validators:MustMatch('password','cPassword')
    }
    )
  }


  signup() {
 
    console.log(this.signupForm.value);
  

    this.userService.signup(this.signupForm.value).subscribe((res)=>{
      console.log(res.message);
      
    })
  
  }

}
