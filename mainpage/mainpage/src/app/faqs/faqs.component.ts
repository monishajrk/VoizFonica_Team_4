import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
  user=new User;
  use=new User;
  usek=new User;
  id:number;
  id1:number;
  id2:number;
  em:String;
  msg="";
  mes="";
  
  constructor(private _service:RegistrationService,private _data:DataService,private _router : Router,private _activatedRoute:ActivatedRoute) { }
 users:any;
  ngOnInit(): void {
    let id= this._activatedRoute.snapshot.paramMap.get('id');
    this.mes=id;
    this.getUser();
  }
gotochat(){
  this._router.navigate(['/chat'])
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
gotoview(){
  this._router.navigate(['/viewuser',this.mes])
}
gotomain(){
  this._router.navigate(['/main'])
}
gotohis(){
  this._router.navigate(['/history',this.mes])
}
getAll(){
  let resp = this._service.getUsersFromRemote();
resp.subscribe((data)=>this.users=data);        
}
gotomanage(mail:string){
  this._router.navigate(['/manage',mail])
}
gotoserv(id:string){
  this._router.navigate(['/serv',id])
}
gotofaqs(){
  this._router.navigate(['/faqs',this.mes])
}

}
