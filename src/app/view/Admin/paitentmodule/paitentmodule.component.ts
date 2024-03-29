import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../../Services/login.service';


@Component({
  selector: 'app-paitentmodule',
  templateUrl: './paitentmodule.component.html',
  styleUrls: ['./paitentmodule.component.css'],
  
})
export class PaitentmoduleComponent implements OnInit {
  /* variables*/
  isShowList: boolean = true;
  isAdd: boolean = false;
  takePaitent: boolean = false;
  paitentForm!: FormGroup;
  res: any;
  doctorList: any;
  departmentList: any;
  response: any;
  medicineList: any;
  loginData: any;
  empId: any;
  employeeType: any;
  /*end variable*/


  ngOnInit() {
    this.login.shareLoginData.subscribe((x: any) => this.loginData = x);
    console.log("from paitent  : " + this.loginData);
    this.empId = this.loginData[0].employeeId;
    this.employeeType = this.loginData[0].employeeType;

    this.getAllPaitent();
    this.createForm();   
    this.getDepartment();
    this.getAllMedicine();
  }


  displayedColumns: string[] = ['firstName', 'lastName', 'mobileNo', 'emergencyContectNo', 'birthDate', 'email', 'gender', 'address', 'bloodGroup', 'medicalIssue', 'doctorId', 'visiteDate','timeingShift','edit','delete'];
  dataSource: any;
  medicines = new FormControl('');
  
  constructor(public formBuilder: FormBuilder, private http: HttpClient, private toastr: ToastrService, private login: LoginService) { }

  createForm() {
    this.paitentForm = this.formBuilder.group({
      paitentId: [''],
      paitentName: ['', [Validators.required]],
      medicalIssue: ['', [Validators.required]],
      assignToId: ['', [Validators.required]],
      addedById:['2'],
      status: [''],
      description: [''],
      medicineIds:[''],

    });
  }

  //openDialog() {
  //  const dialogRef = this.dialog.open(NewdoctorComponent, {
  //    //backdropClass: 'dialogstyle'
  //    // height: '600px', width: '1500px',
  //    //data: [this.admissionById, this.isEditScreen],
  //    //  admissionData : this.admissionById,
  //  });

  //  dialogRef.afterClosed().subscribe(result => {
  //    console.log(`Dialog result: ${result}`);
  //  });
  //}


  onAddBtnClick() {
    this.isShowList = false;
    this.isAdd = true;
  }

  onBackBtnClick() {
    this.isShowList = true;
    this.isAdd = false;
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

  getAllMedicine() {

    this.http.get<any>(`https://localhost:7087/api/medicine/GetAllMedicine`)
      .subscribe((res) => {
        this.medicineList = res;
      });

  }

  onEdit(element: any) {
    
    this.takePaitent = true;
    this.isShowList = false;
    this.res = element;
    this.paitentForm.patchValue({
      paitentName: this.res.firstName + " " + this.res.lastName,
      paitentId: this.res.paitentId,
      medicalIssue: this.res.medicalIssue,
    });
  }
  getAllPaitent() {
    const employeeId = this.empId;
    const empType = this.employeeType;
    this.http.get<any>(`https://localhost:7087/api/Paitent/GetAll/${employeeId}/${empType}`).subscribe((res) => {
      //this.dataSource = res;
      this.dataSource = new MatTableDataSource(res);
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addPaitentVisite() {
    console.log(this.paitentForm.value);
    this.http.post<any>("https://localhost:7087/api/PaitentVisite/Add", this.paitentForm.value)
      .subscribe((res) => {
        this.response = res;
       
         if (this.response > 0) {
           this.toastr.success("Paitent Visite Created. 😎")
           this.onBackBtnClick();
          }
         else {
           this.toastr.error("Error While Paitent Visite. 😒😰")
         }
      });
  }
}
