import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Offers } from 'src/app/offers';
import { Plans } from 'src/app/plans';
import { RegistrationService } from 'src/app/registration.service';
import { Services } from 'src/app/services';
import { User } from 'src/app/user';

@Component({
  selector: 'app-bill-off',
  templateUrl: './bill-off.component.html',
  styleUrls: ['./bill-off.component.css']
})
export class BillOffComponent implements OnInit {
  plan:string;
  planid:string;
  use=new User;
  pla = new Services;
  pl = new Offers;
  services= new Services;
  msg="";
  mail:string;
  id3:string;
  servs:any;
  pid:string;
  constructor(private _service:RegistrationService,private _data:DataService,private _router : Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id1= this._activatedRoute.snapshot.paramMap.get('em');
    this.mail=id1;
    this.id3= this._activatedRoute.snapshot.paramMap.get('id');
    this.pid=this._activatedRoute.snapshot.paramMap.get('pid');
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
          console.log("plan details received received");
        
        },
          error=>{console.log("plans exception occured");
          this.msg="some error occured";},
      )
      this._service.getByOfferIdFromRemote(this.pid).subscribe(
      
        data=>{
          this.pl=data
          console.log("offers response received");
        
        },
          error=>{console.log("exception occured");
          this.msg="some error occured";},
        
      )
  }
  gotohome(){
    this._router.navigate(['/cruduser',this.mail])
  }
}
