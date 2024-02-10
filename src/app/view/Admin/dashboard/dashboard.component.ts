import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../Services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //Variables
  loginData: any;
  userName: any;
  /*end variables*/
  constructor(private login: LoginService) { }
  ngOnInit(): void {
    this.login.shareLoginData.subscribe(x => this.loginData = x);
    console.log("from Dashboard : " + this.loginData[0].userName);
    this.userName = this.loginData[0].userName;
  }
}
