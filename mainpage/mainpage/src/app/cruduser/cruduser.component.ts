import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cruduser',
 templateUrl: './cruduser.component.html',
//template:'<app-updateprofile [mes]="mes"></app-updateprofile>',
  styleUrls: ['./cruduser.component.css']
})
export class CruduserComponent implements OnInit {
  user=new User;
  use=new User;
  usek=new User;
  id:number;
  id1:number;
  id2:number;
  em:String;
  msg="";
  mes="";
  plans:any;servs:any;offs:any;
  dtTrigger: Subject<any>= new Subject(); 
  constructor(private _service:RegistrationService,private _data:DataService,private _router : Router,private _activatedRoute:ActivatedRoute) { }
 users:any;
 
  ngOnInit(){
  // this._data.currentMessage.subscribe(message => this.message = message)
    let id= this._activatedRoute.snapshot.paramMap.get('id');
    this.mes=id;
    this.getUser();

    let resp = this._service.getPlansFromRemote();
    resp.subscribe((data)=>this.plans=data);
   this._service.getPlansFromRemote().subscribe(
     data=>{this.plans=data;
      console.log("response occured");
      this.dtTrigger.next();
    },
    error=>{console.log("exception occured");
    this.msg="some error occured";}
   )

   let resp1 = this._service.getServicesFromRemote();
    resp1.subscribe((data)=>this.servs=data);
   this._service.getServicesFromRemote().subscribe(
     data=>{this.servs=data;
      console.log("response occured");
      this.dtTrigger.next();
    },
    error=>{console.log("exception occured");
    this.msg="some error occured";}
   )

   let resp2 = this._service.getOffersFromRemote();
    resp2.subscribe((data)=>this.offs=data);
   this._service.getOffersFromRemote().subscribe(
     data=>{this.offs=data;
      console.log("response occured");
      this.dtTrigger.next();
    },
    error=>{console.log("exception occured");
    this.msg="some error occured";}
   )
}
gotorecharge()
{
  this._router.navigate(['/recharge',this.mes])
}
  delUser(){
    this._service.deleteUserFromRemote(this.id).subscribe(
      data=>{console.log("response received");
    this.msg="response received";
    },
      error=>{console.log("exception occured");
      this.msg="some error occured";},
    )
    }
    upUser(){
      
      this._service.updateUserFromRemote(this.id1,this.user).subscribe(
        data=>{console.log("response received");
      this.msg="response received";
      },
        error=>{console.log("exception occured");
        this.msg="some error occured";},
      )
      }
      getUser(){
        this._service.getByIdFromRemote(this.mes).subscribe(
          data=>this.use=data
        )
      }
     
      getAll(){
        let resp = this._service.getUsersFromRemote();
    resp.subscribe((data)=>this.users=data);        
      }

      gotomodify(){
        this._router.navigate(['/updateprofile',this.mes])
      }
      gotoview(){
        this._router.navigate(['/viewuser',this.mes])
      }
      gotomain(){
        this._router.navigate(['/main'])
      }
      gotoserv(id:string){
        this._router.navigate(['/serv',id])
      }
      gotomanage(mail:string){
        this._router.navigate(['/manage',mail])
      }
      gotofaqs(){
        this._router.navigate(['/faqs',this.mes])
      }
      gotohis(){
        this._router.navigate(['/history',this.mes])
      }
    
}
