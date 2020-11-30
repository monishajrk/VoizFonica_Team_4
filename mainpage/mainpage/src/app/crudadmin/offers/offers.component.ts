import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Offers } from 'src/app/offers';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  user=new Offers;
  use=new Offers;
  // users=new User;
  id:number;
  id1:number;
  id2:number;
  em:String;
  msg="";
  mes="";
  users:any;
  dtTrigger: Subject<any>= new Subject();  
  constructor(private _service:RegistrationService,private _router : Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let resp = this._service.getOffersFromRemote();
    resp.subscribe((data)=>this.users=data);
   this._service.getOffersFromRemote().subscribe(
     data=>{this.users=data;
      console.log("response occured");
      this.dtTrigger.next();
    },
    error=>{console.log("exception occured");
    this.msg="some error occured";}
   )
  }
  delOffer(id:number){
    this._service.deleteOfferFromRemote(id).subscribe(
      data=>{console.log("response received");
    this.msg="response received";
    },
      error=>{console.log("exception occured");
      this.msg="some error occured";},
    )
    }
  gotoupdateoffer(id:string){
    this._router.navigate(['/updateoffers',id])
  }
  gotooffers(){
    this._router.navigate(['/offers'])
  }
  gotocoffers(){
    this._router.navigate(['/createoffers'])
  }
  gotomain(){
    this._router.navigate(['/main'])
  }
  gotochat(){
    this._router.navigate(['/chat'])
  }
  
  gotouserdata(){
    this._router.navigate(['/userdata'])
  }
  gotomodify(){
    this._router.navigate(['/updateprofile',this.mes])
  }
  gotoview(){
    this._router.navigate(['/viewuser',this.mes])
  }
  

  getUser(){
    this._service.getByIdFromRemote(this.em).subscribe(
      data=>this.use=data
    )
  }
  getAll(){
    let resp = this._service.getUsersFromRemote();
resp.subscribe((data)=>this.users=data);        
  }
  
 
}
