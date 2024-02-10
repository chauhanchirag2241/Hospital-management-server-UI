import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginData = new BehaviorSubject<any>("notlogin");
  public shareLoginData = this.loginData.asObservable();

  constructor() { }

  updateUserData(obj: any) {
    this.loginData.next(obj);
  }
}
