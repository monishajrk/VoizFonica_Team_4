import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import{HttpClient} from '@angular/common/http';
import { Admin } from './admin';
import { Services } from './services';
import { OffersComponent } from './crudadmin/offers/offers.component';
import { Offers } from './offers';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  
  constructor( private _http:HttpClient) { }
  

  

 

  public loginUserFromRemote(user:User):Observable<any>{
return this._http.post<any>("http://localhost:4322/login", user)
  }
  public loginAdminFromRemote(admin:Admin):Observable<any>{
    return this._http.post<any>("http://localhost:4322/loginadmin", admin)
      }

  public registerUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:4322/registeruser", user)
      }
      public registerOfferFromRemote(offer:Offers):Observable<any>{
        return this._http.post<any>("http://localhost:4322/registeroffer", offer)
          }
      public payFromRemote(serv:Services):Observable<any>{
        return this._http.post<any>("http://localhost:4322/pay", serv)
          }
          public payOfferFromRemote(serv:Services):Observable<any>{
            return this._http.post<any>("http://localhost:4322/payOffers", serv)
              }

      public deleteUserFromRemote(id:number):Observable<any>{
        return this._http.delete<any>("http://localhost:4322/removeuser/"+id)
          }
          public deleteOfferFromRemote(id:number):Observable<any>{
            return this._http.delete<any>("http://localhost:4322/removeoffer/"+id)
              }

          public updateUserFromRemote(id2:number,user:User):Observable<any>{
            return this._http.put<any>("http://localhost:4322/update/"+id2, user)
              }
              public updateUserProfFromRemote(id3:number,user:User):Observable<any>{
                return this._http.put<any>("http://localhost:4322/updateprofile/"+id3, user)
                  }
                  public updateOfferFromRemote(id3:number,offer:Offers):Observable<any>{
                    return this._http.put<any>("http://localhost:4322/updateoffer/"+id3, offer)
                      }
                  public updateUserPasswordFromRemote(id4:string,pass:string):Observable<any>{
                    return this._http.put<any>("http://localhost:4322/updatepassword/"+id4, pass)
                      }
                      public updateAdminPasswordFromRemote(id5:string,pass1:string):Observable<any>{
                        return this._http.put<any>("http://localhost:4322/updateadminpassword/"+id5, pass1)
                          }
              public getByIdFromRemote(em:String):Observable<any>{
                return this._http.get<any>("http://localhost:4322/users/"+em)
                  }
                  public getServicesByIdFromRemote(em:String):Observable<any>{
                    return this._http.get<any>("http://localhost:4322/services/"+em)
                      }
                      public getServicesByUIdFromRemote(em:number):Observable<any>{
                        return this._http.get<any>("http://localhost:4322/servicesplan/"+em)
                          }
                      public ebillFromRemote(em:Services):Observable<any>{
                        return this._http.post<any>("http://localhost:4322/ebill",em)
                          }

                          public ebillOffFromRemote(em:Services):Observable<any>{
                            return this._http.post<any>("http://localhost:4322/ebillOff",em)
                              }
    
                  public getUsersFromRemote():Observable<any>{
                    return this._http.get<any>("http://localhost:4322/users")
                      }
                      public getOffersFromRemote():Observable<any>{
                        return this._http.get<any>("http://localhost:4322/offers")
                          }

                      public getUsersCountFromRemote():Observable<any>{
                        return this._http.get<any>("http://localhost:4322/count")
                          }

                          public getPrepaidCountFromRemote():Observable<any>{
                            return this._http.get<any>("http://localhost:4322/precount")
                              }
                              public getPostpaidCountFromRemote():Observable<any>{
                                return this._http.get<any>("http://localhost:4322/postcount")
                                  }
                                  public getDongleCountFromRemote():Observable<any>{
                                    return this._http.get<any>("http://localhost:4322/donglecount")
                                      }


                      public getServicesFromRemote():Observable<any>{
                        return this._http.get<any>("http://localhost:4322/serusers")
                          }
                          public getPlansFromRemote():Observable<any>{
                            return this._http.get<any>("http://localhost:4322/plans")
                              }
                          public getByPlanIdFromRemote(planId:string):Observable<any>{
                            return this._http.get<any>("http://localhost:4322/serusers/"+planId)
                              }

                              public getByOfferIdFromRemote(planId:string):Observable<any>{
                                return this._http.get<any>("http://localhost:4322/seroffers/"+planId)
                                  }
                                  public getByOffIdFromRemote(planId:number):Observable<any>{
                                    return this._http.get<any>("http://localhost:4322/seroff/"+planId)
                                      }
        
}
