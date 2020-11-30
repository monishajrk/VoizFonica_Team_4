import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/admin';
import { DataService } from 'src/app/data.service';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-forgotadmin',
  templateUrl: './forgotadmin.component.html',
  styleUrls: ['./forgotadmin.component.css']
})
export class ForgotadminComponent implements OnInit {
  mes:string;
  use=new User;
  user=new User;
admin = new Admin;
 id:number;
 id1:number;
// id2:string;
 msg="";
  constructor(private _service:RegistrationService,private _data:DataService,private _router : Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  upAdmin(id2:string,pas:string){
      
    this._service.updateAdminPasswordFromRemote(id2,pas).subscribe(
      data=>{console.log("response received");
    this.msg="response received";
    },
      error=>{console.log("exception occured");
      this.msg="some error occured";},
    )
    }
}
