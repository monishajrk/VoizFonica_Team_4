import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ContactComponent } from './contact/contact.component';
import { CrudadminComponent } from './crudadmin/crudadmin.component';
import { CruduserComponent } from './cruduser/cruduser.component';
import { UpdateprofileComponent } from './cruduser/updateprofile/updateprofile.component';
import { ViewuserComponent } from './cruduser/viewuser/viewuser.component';
import { ForgetComponent } from './cruduser/forget/forget.component';

import { LoginComponent } from './login/login.component';

import { MainComponent } from './main/main.component';
import { RegistrationComponent } from './registration/registration.component';
import { User } from './user';
import { UserdataComponent } from './crudadmin/userdata/userdata.component';
import { UpdateuseradminComponent } from './crudadmin/updateuseradmin/updateuseradmin.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServComponent } from './serv/serv.component';
import { DongleComponent } from './serv/dongle/dongle.component';
import { PostpaidComponent } from './serv/postpaid/postpaid.component';
import { PrepaidComponent } from './serv/prepaid/prepaid.component';
import { PaymentComponent } from './serv/payment/payment.component';
import { ForgotadminComponent } from './adminlogin/forgotadmin/forgotadmin.component';
import { ManageComponent } from './cruduser/manage/manage.component';
import { ViewplanComponent } from './cruduser/viewplan/viewplan.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ChatComponent } from './chat/chat.component';
import { AddonComponent } from './cruduser/addon/addon.component';
import { DongleaddComponent } from './recharge/dongleadd/dongleadd.component';
import { PrepaidaddComponent } from './recharge/prepaidadd/prepaidadd.component';
import { PostpaidaddComponent } from './recharge/postpaidadd/postpaidadd.component';
import { RechargeComponent } from './recharge/recharge.component';
import { OffersComponent } from './crudadmin/offers/offers.component';
import { UpdateoffersComponent } from './crudadmin/updateoffers/updateoffers.component';
import { CreateoffersComponent } from './crudadmin/createoffers/createoffers.component';
import { PaysucceessComponent } from './serv/paysucceess/paysucceess.component';
import { PaymentOfferComponent } from './serv/payment-offer/payment-offer.component';
import { HistoryComponent } from './cruduser/history/history.component';
import { PaysucComponent } from './serv/paysuc/paysuc.component';
import { BillComponent } from './serv/bill/bill.component';
import { BillOffComponent } from './serv/bill-off/bill-off.component';


const routes: Routes = [
  {
    path:'',component:MainComponent
  },
  {
    path:'login',component:LoginComponent
  },
  
  {
    path:'registration',component:RegistrationComponent
  },
  {
    path:'main',component:MainComponent
  },
  {
    path:'adminlogin',component:AdminloginComponent
  },
  {
    path:'cruduser/:id' , component:CruduserComponent
  },
  {
    path:'cruduser' , component:CruduserComponent
  },
  {
    path:'crudadmin/:id' , component:CrudadminComponent 
  },
  {
    path:'userdata' , component:UserdataComponent
  },
  {
    path:'crudadmin' , component:CrudadminComponent 
  },
  {
    path:'updateprofile/:id' , component:UpdateprofileComponent
  },
  {
    path:'updateprofile' , component:UpdateprofileComponent
  },
  {
    path:'contact' , component:ContactComponent
  },
  {
    path:'serv' , component:ServComponent
  },
  {
    path:'viewuser/:id' , component:ViewuserComponent
  },
  {
    path:'viewuser' , component:ViewuserComponent
  },
  {
    path:'aboutus' , component:AboutusComponent
  },
  {
    path:'forget/:id' , component:ForgetComponent
  },
  {
    path:'forget' , component:ForgetComponent
  },
  {
    path:'updateuseradmin' , component:UpdateuseradminComponent
  },
  {
    path:'updateuseradmin/:id' , component:UpdateuseradminComponent
  },
  {
    path:'serv/:id' , component:ServComponent
  },
  {
    path:'dongle' , component:DongleComponent
  },
  {
    path:'postpaid' , component:PostpaidComponent
  },
  {
    path:'prepaid' , component:PrepaidComponent
  },
  {
    path:'payment' , component:PaymentComponent
  },
  {
    path:'payment/:id' , component:PaymentComponent
  },
  {
    path:'payment/:id/:em' , component:PaymentComponent
  },
  {
    path:'payment-offer' , component:PaymentComponent
  },
  {
    path:'payment-offer/:id' , component:PaymentOfferComponent
  },
  {
    path:'payment-offer/:id/:em' , component:PaymentOfferComponent
  },
  
  {
    path:'dongle/:id' , component:DongleComponent
  },
  {
    path:'postpaid/:id' , component:PostpaidComponent
  },
  {
    path:'prepaid/:id' , component:PrepaidComponent
  },
  {
    path:'forgotadmin' , component:ForgotadminComponent
  },
  {
    path:'manage' , component:ManageComponent
  },
  {
    path:'manage/:id' , component:ManageComponent
  },
  {
    path:'viewplan' , component:ViewplanComponent
  },
  {
    path:'viewplan/:id' , component:ViewplanComponent
  },
  {
    path:'faqs' , component:FaqsComponent
  },
  {
    path:'faqs/:id' , component:FaqsComponent
  },
  {
    path:'chat' , component:ChatComponent
  },
  {
    path:'addon' , component:AddonComponent
  },
  {
    path:'addon/:id' , component:AddonComponent
  },

  {
    path:'dongleadd' ,component:DongleaddComponent
  },
  {
    path:'prepaidadd' ,component:PrepaidaddComponent
  },
  {
    path:'postpaidadd' ,component:PostpaidaddComponent
  },
  {
    path:'offers' ,component:OffersComponent
  },
  {
    path:'updateoffers' ,component:UpdateoffersComponent
  },
  {
    path:'createoffers' ,component:CreateoffersComponent
  },
  {
    path:'updateoffers/:id' ,component:UpdateoffersComponent
  },

  {
    path:'dongleadd/:id' ,component:DongleaddComponent
  },
  {
    path:'prepaidadd/:id' ,component:PrepaidaddComponent
  },
  {
    path:'postpaidadd/:id' ,component:PostpaidaddComponent
  },
{
    path:'recharge' ,component:RechargeComponent
  },
  {
      path:'recharge/:id' ,component:RechargeComponent
    },
    {
      path:'paysucceess' ,component:PaysucceessComponent
    },
    {
      path:'paysucceess/:id/:em' ,component:PaysucceessComponent
    },
    {
      path:'paysucceess/:id/:em/:id1' ,component:PaysucceessComponent
    },
    {
      path:'paysuc' ,component:PaysucComponent
    },
    {
      path:'paysuc/:id/:em' ,component:PaysucComponent
    },
    {
      path:'paysuc/:id/:em/:id1' ,component:PaysucComponent
    },
    {
      path:'history/:id' ,component:HistoryComponent
    },
    {
      path:'bill/:em/:id/:pid' ,component:BillComponent
    },
    {
      path:'bill-off/:em/:id/:pid' ,component:BillOffComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
