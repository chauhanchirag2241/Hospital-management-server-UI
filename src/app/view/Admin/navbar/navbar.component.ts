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
  departmentId: any;
  empType: any;
  showMedicalModule: any;
  showDoctorModule: any;
  showAdmin: any;
  showPaitentVisite: any
  empCode: any;
  /*end variables*/
  constructor(private login: LoginService) { }

  ngOnInit(): void {
    this.login.shareLoginData.subscribe(x => this.loginData = x);
    console.log("from home work login details : " + this.loginData);
    this.userName = this.loginData[0].employeeName;
    this.departmentId = this.loginData[0].departmentId;
    this.empType = this.loginData[0].employeeType;
    this.empCode = this.loginData[0].employeeCode;
    if (this.departmentId == 4 && this.empType == 3) {
      this.showMedicalModule = true;
    }
    if (this.empType == 1) {
      this.showDoctorModule = true;
    }
    if (this.empType == 1 || this.empType == 2 || this.empType == 4) {
      this.showPaitentVisite = true;
    }
    if (this.departmentId == 0 && this.empType == 0 && this.empCode == '0000') {
      this.showAdmin = true;
      this.showDoctorModule = true;
      this.showPaitentVisite = true;
      this.showMedicalModule = true;
    }
  }
}
