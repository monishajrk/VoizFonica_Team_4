import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  user=new User;
  use=new User;
  users=new User;
  id:number;
  id1:number;
  id2:number;
  em:String;
  msg="";
  mes="";
  
  constructor(private _service:RegistrationService,private _data:DataService,private _router : Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id= this._activatedRoute.snapshot.paramMap.get('id');
    this.mes=id;
    this.getUser();
  }
  getUser(){
    this._service.getByIdFromRemote(this.mes).subscribe(
      data=>this.use=data
    )
  }
  gotorecharge()
      {
        this._router.navigate(['/recharge',this.mes])
      }
  gotomain(){
    this._router.navigate(['/main'])
  }
  gotohis(){
    this._router.navigate(['/history',this.mes])
  }
  gotofaqs(){
    this._router.navigate(['/faqs',this.mes])
  }
  getAll(){
    let resp = this._service.getUsersFromRemote();
resp.subscribe((data)=>this.users=data);        
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
