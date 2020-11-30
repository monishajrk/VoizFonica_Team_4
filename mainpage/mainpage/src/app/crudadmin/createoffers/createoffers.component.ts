import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offers } from 'src/app/offers';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-createoffers',
  templateUrl: './createoffers.component.html',
  styleUrls: ['./createoffers.component.css']
})
export class CreateoffersComponent implements OnInit {
  user =new Offers();
  msg="";
  constructor(private _service:RegistrationService,private _router:Router) { }

  ngOnInit(): void {
    
  }
registerOff(){
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
