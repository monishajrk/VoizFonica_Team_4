import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { RegistrationService } from '../registration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { Subject } from 'rxjs';
import { inside } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-crudadmin',
  templateUrl: './crudadmin.component.html',
  styleUrls: ['./crudadmin.component.css']
})
export class CrudadminComponent implements OnInit {
  user=new User;
  use=new User;
  id:number;
  id1:number;
  id2:number;
  em:String;
  msg="";
  mes="";
  // q:number;
  // w:number;
  // d:number;
q=25;
w=25;
d=50;
  tot:number;

  dtTrigger: Subject<any>= new Subject();  
  public data:Object[];
  public z:string;
  public y:Object;
  public x:Object;
  public tool:Object;
  constructor(private _service:RegistrationService,private _router : Router,private _activatedRoute:ActivatedRoute) { 
    
  }
  users:any;
  count:number;
  precount:number;
  postcount:number;
  doncount:number;
  public palette: string[];
  ngOnInit(): void {

    
    let id= this._activatedRoute.snapshot.paramMap.get('id');
    this.mes=id;
    this.getUser();

    let resp = this._service.getUsersCountFromRemote();
    resp.subscribe((data)=>this.count=data);
   this._service.getUsersCountFromRemote().subscribe(
     data=>{this.count=data;
      console.log("response occured");
      this.dtTrigger.next();
    },
    error=>{console.log("exception occured");
    this.msg="some error occured";}
   )

   this._service.getPrepaidCountFromRemote().subscribe(
    data=>{this.precount=data;
     console.log("response occured");
     this.dtTrigger.next();
   },
   error=>{console.log("exception occured");
   this.msg="some error occured";}
  )

  this._service.getPostpaidCountFromRemote().subscribe(
    data=>{this.postcount=data;
     console.log("response occured");
     this.dtTrigger.next();
   },
   error=>{console.log("exception occured");
   this.msg="some error occured";}
  )
    
  this._service.getDongleCountFromRemote().subscribe(
    data=>{this.doncount=data;
     console.log("response occured");
     this.tot=(this.precount+this.postcount+this.doncount)
     console.log(this.tot)
     this.z='Service subscribers';

    this.data = [
      {
        name:'Prepaid',value:((this.precount*100)/this.tot),text:((this.precount*100)/this.tot)+'%'
      },
      {
        name:'Postpaid',value:((this.postcount*100)/this.tot),text:((this.postcount*100)/this.tot)+'%'
      },
      {
        name:'Dongle',value:((this.doncount*100)/this.tot),text:((this.doncount*100)/this.tot)+'%'
      }
      
    ];
    this.tool={
      enable:true,
      format:'${point.x}:<b>${point.y}%</b>'
    }
    this.y={
      visible:true,
      positiong:'Inside',
      name:'text'
    };
    this.palette = ["#3399FF","#E94649","#63cf63","#228B22","#F6B53F","#FF33F3","#6FAAB0", "#228B22"]
    this.x={
      visible:true,
      positiong:'Bottom',
      height:'8%',
      width:'35%'
    };  
     this.dtTrigger.next();
   },
   error=>{console.log("exception occured");
   this.msg="some error occured";}
  )
  // this.getpie();
  }
  
  getpie(){
    
    console.log(this.tot);
    console.log(this.w);
    this.z='Service subscribers';
    this.data = [
      {
        name:'Apple',value:this.precount
      },
      {
        name:'Orange',value:this.postcount
      },
      {
        name:'Mango',value:this.doncount
      }
      
    ];
    this.tool={
      enable:true,
      format:'${point.x}:<b>${point.y}%</b>'
    }
    this.y={
      visible:true,
      positiong:'Inside',
      name:'text'
    };
    this.x={
      visible:true,
      positiong:'Bottom',
      height:'8%',
      width:'35%'
    };
  }
  delUser(){
    this._service.deleteUserFromRemote(this.id).subscribe(
      data=>{console.log("response received");
    this.msg="response received";
    },
      error=>{console.log("exception occured");
      this.msg="some error occured";},
    )
    }
    gotoregister(){
      this._router.navigate(['/registration'])
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
      gotooffers(){
        this._router.navigate(['/offers'])
      }
      gotouserdata(){
        this._router.navigate(['/userdata'])
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
      gotochat(){
        this._router.navigate(['/chat'])
      }
  
      getUser(){
        this._service.getByIdFromRemote(this.em).subscribe(
          data=>this.use=data
        )
      }
      getAll(){
        let resp = this._service.getUsersFromRemote();
    resp.subscribe((data)=>this.users=data);        
      }
      
}
