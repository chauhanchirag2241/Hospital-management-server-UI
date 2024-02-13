import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient, private login: LoginService, private router: Router) { }
  /*variables*/
  userName: any;
  password: any;
  response: any;
  userData: any;
  /*end variable*/
  Login() {
    const userName = this.userName;
    const password = this.password;

    this.http.get<any>(`https://localhost:7087/api/Employee/checkLogin/${userName}/${password}`)
      .subscribe(res => {
        this.response = res;
        console.log(this.response);
        //if (res.statusCode == 100) {
        // // this.toastr.error("Invalid UserName Or Password!! 😰😒");
        //}
        if (res != null) {
          this.userName = this.response[0].employeeName;
          this.userData = this.response;
          this.updateLogin(this.userData);
          this.router.navigateByUrl('/dashboardadmin')
        }
        
        //// this.data = this.response.dataList;
        //if (this.response.dataList[0].roleid == 2) {
        //  this.router.navigate(['dashboardadmin']);
        //}
        //else {
        //  this.router.navigate(['dashboaradstudent']);
        //}
        //this.toastr.success("Login Success!! 😎");
      }, err => {
        //this.toastr.error("Invalid UserName Or Password!!");

      });
    // if(this.userName == "")
    // {
    //   this.toastr.error("Invalid UserName Or Password!!");      
    // }
    console.log("user name is " + this.userName)
   // this.clear();
  }

  updateLogin(obj: any) {
    this.login.updateUserData(obj);
  }
}
