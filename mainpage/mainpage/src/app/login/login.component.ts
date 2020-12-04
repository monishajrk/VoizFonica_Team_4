import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { DataService} from '../data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user=new User();
 msg="";
 message:string;
 sub;
 info;
stud;
  constructor(private _service:RegistrationService,private _data:DataService,private routes:ActivatedRoute,private _router : Router) { }

  ngOnInit() {
    this.stud=new FormGroup({
      
      email:new FormControl("",Validators.compose(
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z]+[a-zA-Z0-9_]+@gmail+.com+$')
        ]
      )),
      password:new FormControl("",Validators.compose(
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10)
         
        ]
      ))
   
    })
    
  }
  
loginUser(obj,id:string){
  console.log("ReactiveForms Module");
    console.log(obj);
this._service.loginUserFromRemote( this.user).subscribe(
  data=>{
    this._router.navigate(['/cruduser',id])
    console.log("response received");
this.msg="response received";

},
  error=>{console.log("exception occured");
  this.msg="Bad Credentials";},
)
}
gotohome(){
  this._router.navigate(['/main'])
}
gotocrud(id:string){
  this._router.navigate(['/cruduser',id])
}
gotoreg(){
  this._router.navigate(['/registration'])
}



}
