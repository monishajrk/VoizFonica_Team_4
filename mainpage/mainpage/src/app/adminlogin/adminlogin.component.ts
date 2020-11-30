import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import {NgForm} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { RegistrationService } from '../registration.service';
import { DataService } from '../data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  stud;
  admin = new Admin();
  msg="";
  constructor(private _service:RegistrationService,private _data:DataService,private routes:ActivatedRoute,private _router : Router) { }

  ngOnInit(): void {
    this.stud=new FormGroup({
      
      email:new FormControl("",Validators.compose(
        [
          Validators.required
         
        ]
      )),
      password:new FormControl("",Validators.compose(
        [
          Validators.required
         
        ]
      ))
   
    })
    
  }
  loginAdmin(obj,id:string){
    console.log("ReactiveForms Module");
      console.log(obj);
  this._service.loginAdminFromRemote( this.admin).subscribe(
    data=>{
      this._router.navigate(['/crudadmin',id])
      console.log("response received");
  this.msg="response received";
  
  },
    error=>{console.log("exception occured");
    this.msg="Bad Credentials";},
  )
  }
  }
  
