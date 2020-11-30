import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Plans } from 'src/app/plans';
import { RegistrationService } from 'src/app/registration.service';
import { Services } from 'src/app/services';
import { User } from 'src/app/user';

@Component({
  selector: 'app-paysuc',
  templateUrl: './paysuc.component.html',
  styleUrls: ['./paysuc.component.css']
})
export class PaysucComponent implements OnInit {
  plan:string;
  planid:string;
  use=new User;
  pla = new Services;
  pl = new Services;
  services= new Services;
  msg="";
  mail:string;
  id3:string;
  servs:any;
  constructor(private _service:RegistrationService,private _data:DataService,private _router : Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id= this._activatedRoute.snapshot.paramMap.get('id');
    this.plan=id;
    let id1= this._activatedRoute.snapshot.paramMap.get('em');
    this.mail=id1;
    this.id3= this._activatedRoute.snapshot.paramMap.get('id1');
    //this.id3=id2;
    this._service.getByIdFromRemote(this.mail).subscribe(
      data=>{
        this.use=data
        console.log("user data received");
      
      },
        error=>{console.log("user exception occured");
        this.msg="some error occured";},
    )
    this._service.getServicesByUIdFromRemote(Number(this.id3)).subscribe(
      data=>{
        this.pla=data
        console.log("plans data received");
      
      },
        error=>{console.log("plans exception occured");
        this.msg="some error occured";},
    )

  }
ebill(){
  
this._service.ebillFromRemote(this.pla).subscribe(
  data=>{
    this.pl=data
    console.log("ebill response received");
    this.msg="Ebill sent to your mail"
  },
    error=>{console.log("ebill exception occured");
    this.msg="some error occured";},
)
}
gotomodify(){
  this._router.navigate(['/updateprofile',this.mail])
}
gotoview(){
  this._router.navigate(['/viewuser',this.mail])
}
gotomain(){
  this._router.navigate(['/main'])
}
gotobill(){
  this._router.navigate(['/bill',this.mail,this.id3,this.plan])
}
gotohome(){
  this._router.navigate(['/cruduser',this.mail])
}
gotoserv(id:string){
  this._router.navigate(['/serv',id])
}
gotomanage(mail:string){
  this._router.navigate(['/manage',mail])
}
gotofaqs(){
  this._router.navigate(['/faqs',this.mail])
}
gotohis(){
  this._router.navigate(['/history',this.mail])
}
gotorecharge()
      {
        this._router.navigate(['/recharge',this.mail])
      }
}
