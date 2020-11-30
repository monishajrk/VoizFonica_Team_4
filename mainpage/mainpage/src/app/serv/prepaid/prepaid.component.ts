import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-prepaid',
  templateUrl: './prepaid.component.html',
  styleUrls: ['./prepaid.component.css']
})
export class PrepaidComponent implements OnInit {
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
  gotomodify(){
    this._router.navigate(['/updateprofile',this.mes])
  }
  gotoview(){
    this._router.navigate(['/viewuser',this.mes])
  }
  gotomain(){
    this._router.navigate(['/main'])
  }
  gotoplan(plan:string){
    this._router.navigate(['/payment',plan,this.mes])
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
  gotorecharge()
      {
        this._router.navigate(['/recharge',this.mes])
      }
}
