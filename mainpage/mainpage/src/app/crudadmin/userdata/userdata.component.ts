import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  user=new User;
  use=new User;
  // users=new User;
  id:number;
  id1:number;
  id2:number;
  em:String;
  msg="";
  mes="";
  users:any;
  dtTrigger: Subject<any>= new Subject();  
  constructor(private _service:RegistrationService,private _router : Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(){
    let resp = this._service.getUsersFromRemote();
    resp.subscribe((data)=>this.users=data);
   this._service.getUsersFromRemote().subscribe(
     data=>{this.users=data;
      console.log("response occured");
      this.dtTrigger.next();
    },
    error=>{console.log("exception occured");
    this.msg="some error occured";}
   )
    

  }
  delUser(id:number){
    this._service.deleteUserFromRemote(id).subscribe(
      data=>{console.log("response received");
    this.msg="response received";
    },
      error=>{console.log("exception occured");
      this.msg="some error occured";},
    )
    }
    upUser(){
      
      this._service.updateUserFromRemote(this.id1,this.user).subscribe(
        data=>{console.log("response received");
      this.msg="response received";
      },
        error=>{console.log("exception occured");
        this.msg="some error occured";},
      )
      }
      gotouserdata(){
        this._router.navigate(['/userdata'])
      }
      gotomodify1(id:string){
        this._router.navigate(['/updateuseradmin',id])
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
      gotoregister(){
        this._router.navigate(['/registration'])
      }
      gotooffers(){
        this._router.navigate(['/offers'])
      }
  
      getUser(){
        this._service.getByIdFromRemote(this.em).subscribe(
          data=>this.use=data
        )
      }
      
      getAll(){
    //     let resp = this._service.getUsersFromRemote();
    // resp.subscribe((data)=>this.users=data);    
    this._service.getUsersFromRemote().subscribe(
      data=>{this.users=data;
       console.log("response occured");
      //  this.dtTrigger.next();
     },
     error=>{console.log("exception occured");
     this.msg="some error occured";}
    )    
      }
}
