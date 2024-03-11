import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-doctor',

  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
  
})
export class DoctorComponent implements OnInit {
  /* variables*/
  isShowList: boolean = true;
  isAdd: boolean = false;
  response: any;
  departmentList: any;
  /*end variable*/

  ngOnInit() {
    this.getDepartment();
    this.getAllEmployee();    
  }
  displayedColumns: string[] = ['employeeCode', 'employeeName', 'gender', 'mobileNo', 'email', 'qualification','jobSpecification','edit','delete'];
  dataSource: any;

  constructor(public formBuilder: FormBuilder, private http: HttpClient, private toastr: ToastrService) { }
  //, private toasrt: ToastrService
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

  getDepartment() {
    this.http.get<any>("https://localhost:7087/api/Department/GetAllDepartment").subscribe((response) => {
      this.departmentList = response;
    })
  }

  employeeForm = this.formBuilder.group({
    employeeid:[0],
    departmentid: ['', [Validators.required]],
    employeetype: ['', [Validators.required]],
    employeecode: ['', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]],
    employeename: ['', [Validators.required, Validators.maxLength(25)]],
    gender: ['', [Validators.required]],
    mobileno: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    email: ['', [Validators.required, Validators.email]],
    qualification: ['', [Validators.required]],
    jobspecification: ['', [Validators.required]]
  });

  addNewEmployee() {
    console.log(this.employeeForm.value);
    this.http.post<any>("https://localhost:7087/api/Employee/Add", this.employeeForm.value)
      .subscribe((res) => {
        this.response = res;
        this.getAllEmployee();

        if (this.response > 0) {
          this.toastr.success("Employee Created. 😎")
          this.onBackBtnClick();
        }
        else {
          this.toastr.error("Error While Creating Employee. 😒😰")
        }
      });
  }

  getAllEmployee() {
    this.http.get<any>("https://localhost:7087/api/Employee/GetAllEmployee").subscribe((res) => {
         /*this.dataSource = res;*/
      this.dataSource = new MatTableDataSource(res);
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onAddBtnClick() {
    this.isShowList = false;
    this.isAdd = true;
  }

  onBackBtnClick() {
    this.isShowList = true;
    this.isAdd = false;
  }
}
