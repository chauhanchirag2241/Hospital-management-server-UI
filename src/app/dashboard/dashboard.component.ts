import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.router.navigateByUrl('/login')
  }
  ////Variables
  //loginData: any;
  //userName: any;
  ///*end variables*/
  ////constructor() { }
  ////ngOnInit(): void {
  ////  this.router.navigateByUrl('/studentlogin')
  ////}

  //constructor() {
    
  //}
  //ngOnInit(): void {
  //  //this.login.shareLoginData.subscribe(x => this.loginData = x);
  //  //console.log("from Dashboard : " + this.loginData[0].userName);
  //  //this.userName = this.loginData[0].userName;
  //}
}
