import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';
import { Subject } from 'rxjs';
import { Plans } from 'src/app/plans';
@Component({
  selector: 'app-viewplan',
  templateUrl: './viewplan.component.html',
  styleUrls: ['./viewplan.component.css']
})
export class ViewplanComponent implements OnInit {
  user=new User;
  use=new User;
  plas = new Plans;
  users=new User;
  id:string;
  id1:number;
  id2:number;
  em:String;
  msg="";
  mes="";
  pla="";
  servs:any;
  dtTrigger: Subject<any>= new Subject();
  constructor(private _service:RegistrationService,private _data:DataService,private _router : Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id= this._activatedRoute.snapshot.paramMap.get('id');
      this.pla=id;
      this.getServicesByPlanId();
  }
  gotomain(){
    this._router.navigate(['/main'])
  }
  gotohis(){
    this._router.navigate(['/history',this.mes])
  }
  getServicesByPlanId(){
    this._service.getByPlanIdFromRemote(this.pla).subscribe(
      data=>this.plas=data
    )
  }
  getUser(){
    this._service.getByIdFromRemote(this.mes).subscribe(
      data=>this.use=data
    )
  }
  gotoviewplan(plid:string){
    this._router.navigate(['/viewplan',plid])
  }
  getAll(){
    let resp = this._service.getUsersFromRemote();
resp.subscribe((data)=>this.users=data);        
  }
  gotofaqs(){
    this._router.navigate(['/faqs',this.mes])
  }
  gotorecharge()
      {
        this._router.navigate(['/recharge',this.mes])
      }
upprof(){
  this._router.navigate(['/forget',this.mes])
}
  gotomodify(){
    this._router.navigate(['/updateprofile',this.mes])
  }
  gotoview(){
    this._router.navigate(['/viewuser',this.mes])
  }
  gotoserv(id:string){
    this._router.navigate(['/serv',id])
  }
  gotomanage(mail:string){
    this._router.navigate(['/manage',mail])
  }
}
