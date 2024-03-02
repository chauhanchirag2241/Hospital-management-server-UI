import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../../Services/login.service';

@Component({
  selector: 'app-paitentvisitedashboard',
  templateUrl: './paitentvisitedashboard.component.html',
  styleUrls: ['./paitentvisitedashboard.component.css']
})
export class PaitentvisitedashboardComponent {
  /*Variable*/
  paitentVissiteList: any;
  allPaitentVissiteList: any;
  dataSource: any;
  isShowList: any = true;
  loginData: any;
  userName: any;
  paitentForm!: FormGroup;
  response: any;
  medicineList: any;
  departmentList: any;
  doctorList: any;
  paitentList: any;
  /*end variable*/
  constructor(public formBuilder: FormBuilder, private http: HttpClient, private login: LoginService) { }
  displayedColumns: string[] = ['paitentName', 'description', 'status', 'assignbyname', 'edit', 'delete'];
  ngOnInit(): void {
    this.login.shareLoginData.subscribe((x: any) => this.loginData = x);
    console.log("from paitentvisite : " + this.loginData);
    this.userName = this.loginData[0].employeeName;
    this.createForm();
    this.getDepartment();
    this.getAllPaitentVisiteByEmployeeId();
  }

  getAllPaitentVisiteByEmployeeId() {
    const emplooyeeId = this.loginData[0].employeeId;
    this.http.get<any>(`https://localhost:7087/api/PaitentVisite/GetAllAssignPaitentInfo/${emplooyeeId}`).subscribe((res) => {
      this.allPaitentVissiteList = res;
      this.dataSource = this.allPaitentVissiteList;
    });
  }

  onEdit(paitentVisiteDetail: any) {
    this.isShowList = false;
    this.getAllMedicine();
    this.getPaitentVisiteByEmployeeId(paitentVisiteDetail.paitentId);
  }

  getPaitentVisiteByEmployeeId(paitentId: any) {
    const emplooyeeId = this.loginData[0].employeeId;
    this.http.get<any>(`https://localhost:7087/api/PaitentVisite/GetAllAssignPaitent/${emplooyeeId}/${paitentId}`).subscribe((res) => {
      this.paitentVissiteList = res[0];
      console.log(this.paitentVissiteList);
      this.paitentForm.patchValue({
        description: this.paitentVissiteList.description,
        paitentId: this.paitentVissiteList.paitentId,

      });
      this.getPaitent();
    })
  }
  getPaitent() {
    const paitentId = this.paitentVissiteList.paitentId;
    this.http.get<any>(`https://localhost:7087/api/Paitent/GetPaitentByPaitentId/${paitentId}`)
      .subscribe((res) => {
        this.paitentList = res[0];
        this.paitentForm.patchValue({
          paitentName: this.paitentList.firstName + " " + this.paitentList.lastName,
          paitentId: this.paitentList.paitentId,
          medicalIssue: this.paitentList.medicalIssue,
        });
      });
  }
  createForm() {
    this.paitentForm = this.formBuilder.group({
      paitentId: [''],
      paitentName: ['', [Validators.required]],
      medicalIssue: ['', [Validators.required]],
      assignToId: ['', [Validators.required]],
      addedById: [''],
      status: [''],
      description: [''],
      medicineIdsArr: [''],
      medicineIds: [''],
    });
  }

  addPaitentVisite() {
    console.log(this.paitentForm.value);
    this.paitentForm.patchValue({
      addedById: this.loginData[0].employeeId,
    });
    const medicineIdsArrControl = this.paitentForm.get('medicineIdsArr')?.value;
    if (medicineIdsArrControl != "") {
      const medicine = medicineIdsArrControl.value.join(",");
      this.paitentForm.patchValue({
        medicineIds: medicine,
      });
    }
    //var medicine = this.paitentForm.get('medicineIdsArr')?.value.join(",");

    //this.paitentForm.patchValue({
    //  medicineIds : medicine,
    //});
    this.http.post<any>("https://localhost:7087/api/PaitentVisite/Add", this.paitentForm.value)
      .subscribe((res) => {
        this.response = res;
      });
  }


  getAllMedicine() {

    this.http.get<any>(`https://localhost:7087/api/medicine/GetAllMedicine`)
      .subscribe((res) => {
        this.medicineList = res;
      });

  }

  getDepartment() {
    this.http.get<any>("https://localhost:7087/api/Department/GetAllDepartment").subscribe((response) => {
      this.departmentList = response;
    })
  }
  getDoctors(depId: any) {

    this.http.get<any>(`https://localhost:7087/api/employee/GetDoctor/${depId}`)
      .subscribe((res) => {
        this.doctorList = res;
      });

    //this.http.get<any>("https://localhost:7087/api/employee/GetDoctor").subscribe((response) => {
    //  this.doctorList = response;
    //})
  }

}
