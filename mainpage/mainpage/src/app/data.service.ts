import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private messageSource = new BehaviorSubject('default message');
  // currentMessage = this.messageSource.asObservable();
mes:string;
  constructor() { }
// public store(email:string):Observable<any>
// {
//   this.mes=email;
//   console.log(this.mes);

// }
// public retrieve():Observable<any>
// {
//   console.log("retrieve");
//   return this.mes;
// }
  // changeMessage(message: string) {
  //   this.messageSource.next(message);
  // }

}
