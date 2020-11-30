import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-prepaidadd',
  templateUrl: './prepaidadd.component.html',
  styleUrls: ['./prepaidadd.component.css']
})
export class PrepaidaddComponent implements OnInit {
  user=new User;
  use=new User;
  users=new User;
  id:number;
  id1:number;
  id2:number;
  em:String;
  msg="";
  mes="";
  servs:any;
  dtTrigger: Subject<any>= new Subject();
  constructor(private _service:RegistrationService,private _data:DataService,private _router : Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id= this._activatedRoute.snapshot.paramMap.get('id');
    this.mes=id;
    this.getUser();

    let resp = this._service.getOffersFromRemote();
    resp.subscribe((data)=>this.servs=data);
   this._service.getOffersFromRemote().subscribe(
     data=>{this.servs=data;
      console.log("response occured");
      this.dtTrigger.next();
    },
    error=>{console.log("exception occured");
    this.msg="some error occured";}
   )
  }
  gotoview(){
    this._router.navigate(['/viewuser',this.mes])
  }
  gotoplan1(plan:string){
    this._router.navigate(['/payment-offer',plan,this.mes])
  }
gotoplan(plan:string){
  this._router.navigate(['/payment',plan,this.mes])
}
gotomain(){
  this._router.navigate(['/main'])
}
gotohis(){
  this._router.navigate(['/history',this.mes])
}
gotoserv(id:string){
  this._router.navigate(['/serv',id])
}
getUser(){
  this._service.getByIdFromRemote(this.mes).subscribe(
    data=>this.use=data
  )
}

gotodongle(){
  this._router.navigate(['/dongleadd'])
}
gotopostpaid(){
  this._router.navigate(['/postpaidadd'])
}
gotoprepaid(){
  this._router.navigate(['/prepaidadd'])
}


getAll(){
  let resp = this._service.getUsersFromRemote();
resp.subscribe((data)=>this.users=data);        
}

gotomodify(){
  this._router.navigate(['/updateprofile',this.mes])
}

gotomanage(mail:string){
  this._router.navigate(['/manage',mail])
}
gotofaqs(){
  this._router.navigate(['/faqs',this.mes])
}
gotorecharge()
    {
      this._router.navigate(['/recharge',this.mes])
    }
}

