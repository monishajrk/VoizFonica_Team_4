import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-serv',
  templateUrl: './serv.component.html',
  styleUrls: ['./serv.component.css']
})
export class ServComponent implements OnInit {
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
  gotodongle(){
    this._router.navigate(['/dongle',this.mes])
  }
  gotopostpaid(){
    this._router.navigate(['/postpaid',this.mes])
  }
  gotoprepaid(){
    this._router.navigate(['/prepaid',this.mes])
  }
  gotorecharge()
      {
        this._router.navigate(['/recharge',this.mes])
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
