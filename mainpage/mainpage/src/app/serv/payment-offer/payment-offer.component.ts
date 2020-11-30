import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Offers } from 'src/app/offers';
import { Plans } from 'src/app/plans';
import { RegistrationService } from 'src/app/registration.service';
import { Services } from 'src/app/services';
import { User } from 'src/app/user';

@Component({
  selector: 'app-payment-offer',
  templateUrl: './payment-offer.component.html',
  styleUrls: ['./payment-offer.component.css']
})
export class PaymentOfferComponent implements OnInit {
  plan:string;
  planid:string;
  use=new User;
  pla= new Offers;
  services= new Services;
  ser= new Services;
  msg="";
  mail:string;
  constructor(private _service:RegistrationService,private _data:DataService,private _router : Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id= this._activatedRoute.snapshot.paramMap.get('id');
    this.plan=id;
    let id1= this._activatedRoute.snapshot.paramMap.get('em');
    this.mail=id1;
    this._service.getByIdFromRemote(this.mail).subscribe(
      data=>this.use=data)
    this._service.getByOfferIdFromRemote(this.plan).subscribe(
      
      data=>{
        this.pla=data
        console.log("offers response received");
      
      },
        error=>{console.log("exception occured");
        this.msg="some error occured";},
      
    )
  }
 
paynow(id:string){
  

  this._service.payOfferFromRemote( this.services).subscribe(
    data=>{this.ser=data
      console.log("response received");
  this.msg="Payment Successful";
  this._router.navigate(['/paysucceess',this.plan,this.mail,this.ser.id])
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
gotomain(){
  this._router.navigate(['/main'])
}
gotorecharge()
      {
        this._router.navigate(['/recharge',this.mail])
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
}
