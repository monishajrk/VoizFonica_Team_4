import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offers } from 'src/app/offers';
import { RegistrationService } from 'src/app/registration.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-createoffers',
  templateUrl: './createoffers.component.html',
  styleUrls: ['./createoffers.component.css']
})
export class CreateoffersComponent implements OnInit {
  user =new Offers();
  msg="";
  stent;
  constructor(private _service:RegistrationService,private _router:Router) { }

  ngOnInit(): void {
    this.stent=new FormGroup({
     
      email:new FormControl("",Validators.compose(
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z]+[a-zA-Z0-9]+$')
        ]
      )),
      password:new FormControl("",Validators.compose(
        [
          
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9 ]+[a-zA-Z0-9_]+$')
        ]
      )),
     
   
      lastName:new FormControl("",Validators.compose(
        [
          
          Validators.required,
          Validators.pattern("^[0-9]+$")
        ]
      )),
      firstName:new FormControl("",Validators.compose(
        [
          
          Validators.required
        ]
      )),
      PhoneNo:new FormControl("",Validators.compose(
        [
          Validators.required,
          Validators.pattern('^[0-9]+[a-zA-Z]+$')
         
        ]
      )),
     
      city:new FormControl("",Validators.compose(
        [
          Validators.required,
          Validators.pattern("^[0-9]+$")
        ]
      )),
    
    })
  }
registerOff(obj){
  console.log("ReactiveForms Module");
  console.log(obj);
  this._service.registerOfferFromRemote( this.user).subscribe(
    data=>{console.log("response received");
  this.msg="Offer created Successful";
  }
  ,
  error=>{console.log("exception occured");
  this.msg="Error";},

  )
}
}
