import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-updateuseradmin',
  templateUrl: './updateuseradmin.component.html',
  styleUrls: ['./updateuseradmin.component.css']
})
export class UpdateuseradminComponent implements OnInit {
  mes:string;
  use=new User;
  user=new User;
  stuent;
  id:number;
  id1:number;
 id2:number;
  msg="";
  constructor(private _service:RegistrationService,private _data:DataService,private _router : Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id= this._activatedRoute.snapshot.paramMap.get('id');
    this.mes=id;
    this._service.getByIdFromRemote(this.mes).subscribe(
      data=>{this.use=data;
      console.log("success");
      }
    )
    this.stuent=new FormGroup({
     
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
      )),
      id:new FormControl("",Validators.compose(
        [
          Validators.required,
          Validators.pattern("^[0-9]+$")
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
  upUserProf(obj){
    console.log("ReactiveForms Module");
    console.log(obj);
    this._service.updateUserProfFromRemote(this.id1,this.user).subscribe(
      data=>{console.log("response received");
    this.msg="response received";
    },
      error=>{console.log("exception occured");
      this.msg="some error occured";},
    )
    }
    getUser(){
      this._service.getByIdFromRemote(this.mes).subscribe(
        data=>{this.use=data;
        console.log("success");
        }
      )
    }
    gotoview(){
      this._router.navigate(['/viewuser',this.mes])
    }
    gotooffers(){
      this._router.navigate(['/offers'])
    }
}
