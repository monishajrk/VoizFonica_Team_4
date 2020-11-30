import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from './main/main.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CruduserComponent } from './cruduser/cruduser.component';
import { CrudadminComponent } from './crudadmin/crudadmin.component';
import { UpdateprofileComponent } from './cruduser/updateprofile/updateprofile.component';

import { ContactComponent } from './contact/contact.component';

import { ViewuserComponent } from './cruduser/viewuser/viewuser.component';
import { ForgetComponent } from './cruduser/forget/forget.component';
import { UserdataComponent } from './crudadmin/userdata/userdata.component';
import { UpdateuseradminComponent } from './crudadmin/updateuseradmin/updateuseradmin.component';
import { ServComponent } from './serv/serv.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PostpaidComponent } from './serv/postpaid/postpaid.component';
import { PrepaidComponent } from './serv/prepaid/prepaid.component';
import { DongleComponent } from './serv/dongle/dongle.component';
import { PaymentComponent } from './serv/payment/payment.component';
import { ForgotadminComponent } from './adminlogin/forgotadmin/forgotadmin.component';
import { ManageComponent } from './cruduser/manage/manage.component';
import { ViewplanComponent } from './cruduser/viewplan/viewplan.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ChatComponent } from './chat/chat.component';
import { AddonComponent } from './cruduser/addon/addon.component';
import { RechargeComponent } from './recharge/recharge.component';
import { DongleaddComponent } from './recharge/dongleadd/dongleadd.component';
import { PostpaidaddComponent } from './recharge/postpaidadd/postpaidadd.component';
import { PrepaidaddComponent } from './recharge/prepaidadd/prepaidadd.component';
import { ChartsModule } from 'ng2-charts';
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import { PieSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationAnnotationService,
  AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts';
import { OffersComponent } from './crudadmin/offers/offers.component';
import { UpdateoffersComponent } from './crudadmin/updateoffers/updateoffers.component';
import { CreateoffersComponent } from './crudadmin/createoffers/createoffers.component';
import { PaysucceessComponent } from './serv/paysucceess/paysucceess.component';
import { PaymentOfferComponent } from './serv/payment-offer/payment-offer.component';
import { PaysucComponent } from './serv/paysuc/paysuc.component';

import { HistoryComponent } from './cruduser/history/history.component';
import { BillComponent } from './serv/bill/bill.component';
import { BillOffComponent } from './serv/bill-off/bill-off.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,

    MainComponent,

     AdminloginComponent,

    CruduserComponent,

    CrudadminComponent,

    UpdateprofileComponent,

    

    ContactComponent,


   
    ViewuserComponent,

    ForgetComponent,

    UserdataComponent,

    UpdateuseradminComponent,

    ServComponent,

    AboutusComponent,

    PostpaidComponent,

    PrepaidComponent,

    DongleComponent,

    PaymentComponent,

    ForgotadminComponent,
    ManageComponent,
    ViewplanComponent,
    FaqsComponent,
    ChatComponent,
    AddonComponent,
    RechargeComponent,
    DongleaddComponent,
    PostpaidaddComponent,
    PrepaidaddComponent,
    OffersComponent,
    UpdateoffersComponent,
    CreateoffersComponent,
    PaysucceessComponent,
    PaymentOfferComponent,
    PaysucComponent,
    HistoryComponent,
    BillComponent,
    BillOffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    AccumulationChartModule
  ],
  providers: [PieSeriesService,AccumulationLegendService, AccumulationTooltipService, AccumulationAnnotationService,
    AccumulationDataLabelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
