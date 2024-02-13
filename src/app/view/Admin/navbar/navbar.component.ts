import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../Services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //Variables
  loginData: any;
  userName: any;
  /*end variables*/
  constructor(private login: LoginService) { }

  ngOnInit(): void {
    this.login.shareLoginData.subscribe(x => this.loginData = x);
    console.log("from home work login details : " + this.loginData);
    this.userName = this.loginData[0].employeeName;
  }
}
