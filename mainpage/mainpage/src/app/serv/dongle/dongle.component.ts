import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-dongle',
  templateUrl: './dongle.component.html',
  styleUrls: ['./dongle.component.css']
})
export class DongleComponent implements OnInit {
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
  gotoview(){
    this._router.navigate(['/viewuser',this.mes])
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
  gotofaqs(){
    this._router.navigate(['/faqs',this.mes])
  }
gotoplan(plan:string){
  this._router.navigate(['/payment',plan,this.mes])
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
gotomodify(){
  this._router.navigate(['/updateprofile',this.mes])
}
gotohis(){
  this._router.navigate(['/history',this.mes])
}
}
