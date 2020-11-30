import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Plans } from 'src/app/plans';
import { RegistrationService } from 'src/app/registration.service';
import { Services } from 'src/app/services';
import { User } from 'src/app/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
plan:string;
planid:string;
use=new User;
pla = new Plans;
services= new Services;
ser = new Services;
msg="";
mail:string;
stu;
  constructor(private _service:RegistrationService,private _data:DataService,private _router : Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id= this._activatedRoute.snapshot.paramMap.get('id');
    this.plan=id;
    let id1= this._activatedRoute.snapshot.paramMap.get('em');
    this.mail=id1;
    this._service.getByIdFromRemote(this.mail).subscribe(
      data=>this.use=data)
    this._service.getByPlanIdFromRemote(this.plan).subscribe(
      
      data=>{
        this.pla=data
        console.log("plans response received");
      
      },
        error=>{console.log("exception occured");
        this.msg="some error occured";},
      
        
    )

    this.stu=new FormGroup({
     
      email:new FormControl("",Validators.compose(
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z]+[a-zA-Z0-9_]+@gmail+.com+$')
        ]
      )),
      phoneNo:new FormControl("",Validators.compose(
        [
          Validators.required,
          
          Validators.pattern("^[0-9]{10}$")
         
        ]
      )),
     
      planId:new FormControl("",Validators.compose(
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z]+[a-zA-Z0-9]+$')
         
        ]
      )),
      year:new FormControl("",Validators.compose(
        [
          Validators.required
          
         
        ]
      )),

      month:new FormControl("",Validators.compose(
        [
          Validators.required
          
         
        ]
      )),
      type:new FormControl("",Validators.compose(
        [
          Validators.required
          
         
        ]
      )),
      cat:new FormControl("",Validators.compose(
        [
          Validators.required
          
         
        ]
      )),
      amount:new FormControl("",Validators.compose(
        [
          Validators.required,
          Validators.pattern('^[0-9]+$')
        ]
      )),
      cardname:new FormControl("",Validators.compose(
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z]+$')
         
        ]
      )),
      
      cardnumber:new FormControl("",Validators.compose(
        [
          Validators.required,
          Validators.pattern("^[0-9]{16}$")
         
        ]
      )),
      cvv:new FormControl("",Validators.compose(
        [
          Validators.required,
          Validators.pattern("^[0-9]{3}$")
        ]
      ))
      
    })

  }
  

  gotomain(){
    this._router.navigate(['/main'])
  }
paynow(obj,id:string){
  console.log("ReactiveForms Module");
  console.log(obj);

  this._service.payFromRemote( this.services).subscribe(
    data=>{this.ser=data
      console.log("response received");
  this.msg="Payment Successful";

  this._router.navigate(['/paysuc',this.plan,this.mail,this.ser.id])
  }
  ,
  error=>{console.log("exception occured");
  this.msg="Error";},

  )
}
gotomodify(){
  this._router.navigate(['/updateprofile',this.mail])
}
gotoview(){
  this._router.navigate(['/viewuser',this.mail])
}

gotoserv(id:string){
  this._router.navigate(['/serv',id])
}
gotomanage(mail:string){
  this._router.navigate(['/manage',mail])
}
gotofaqs(){
  this._router.navigate(['/faqs',this.mail])
}
gotohis(){
  this._router.navigate(['/history',this.mail])
}
gotorecharge()
      {
        this._router.navigate(['/recharge',this.mail])
      }
}
