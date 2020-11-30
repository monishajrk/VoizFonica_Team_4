import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  student;
  user =new User();
msg="";

  constructor(private _service:RegistrationService,private _router:Router) { }
  ngOnInit(): void {
    this.student=new FormGroup({
      course:new FormControl("",Validators.compose(
        [
          Validators.required
         
        ]
      )),
      email:new FormControl("",Validators.compose(
        [
          Validators.required,
          // Validators.pattern('^[a-zA-Z0-9_]+@[a-zA-Z]+.[a-zA-Z]+$')
          Validators.pattern('^[a-zA-Z0-9_]+@gmail+.com+$')
        ]
      )),
      password:new FormControl("",Validators.compose(
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10)
         
        ]
      )),
      firstName:new FormControl("",Validators.compose(
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
          Validators.pattern('^[a-zA-Z]+$')
        ]
      )),
      lastName:new FormControl("",Validators.compose(
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
          Validators.pattern('^[a-zA-Z]+$')
         
        ]
      )),
      PhoneNo:new FormControl("",Validators.compose(
        [
          Validators.required,
          
          Validators.pattern("^[0-9]{10}$")
         
        ]
      )),
      gender:new FormControl("",Validators.compose(
        [
          Validators.required
         
        ]
      )),
      city:new FormControl("",Validators.compose(
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z]+$')
         
        ]
      )),
      pincode:new FormControl("",Validators.compose(
        [
          Validators.required,
          Validators.pattern("^[0-9]{6}$")
        ]
      ))
    })
  }
  gotohome(){
    this._router.navigate(['/main'])
  }
  

  registerUser(obj)
  {
    console.log("ReactiveForms Module");
    console.log(obj);
    this._service.registerUserFromRemote( this.user).subscribe(
      data=>{console.log("response received");
    this.msg="Registration Successful";
    }
    ,
    error=>{console.log("exception occured");
    this.msg="Error";},
  
    )

  }
  
}
