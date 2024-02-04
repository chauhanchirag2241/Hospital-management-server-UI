import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { ToastPackage, ToastrModule, ToastrService,  } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  /*end variable*/

  ngOnInit() {
    this.getAllEmployee();
    //this.dataSource = [
    //  {doctorcode: '2241',doctorname: 'chirag', qualification: 'MBBS', jobspecification: 'ABC' },
    //  {doctorcode: '2241',doctorname: 'chirag', qualification: 'MBBS', jobspecification: 'ABC' },
    //  {doctorcode: '2241',doctorname: 'chirag', qualification: 'MBBS', jobspecification: 'ABC' },
    //  {doctorcode: '2241',doctorname: 'chirag', qualification: 'MBBS', jobspecification: 'ABC' },
    //  {doctorcode: '2241',doctorname: 'chirag', qualification: 'MBBS', jobspecification: 'ABC' },
    //  {doctorcode: '2241',doctorname: 'chirag', qualification: 'MBBS', jobspecification: 'ABC' },
    //  {doctorcode: '2241',doctorname: 'chirag', qualification: 'MBBS', jobspecification: 'ABC' },
    //  {doctorcode: '2241',doctorname: 'chirag', qualification: 'MBBS', jobspecification: 'ABC' },
    //  {doctorcode: '2241',doctorname: 'chirag', qualification: 'MBBS', jobspecification: 'ABC' },
    //  {doctorcode: '2241',doctorname: 'chirag', qualification: 'MBBS', jobspecification: 'ABC' },
    //  {doctorcode: '2241',doctorname: 'chirag', qualification: 'MBBS', jobspecification: 'ABC' },
    //  { doctorcod: '2241', doctorname: 'chirag', qualification: 'MBBS', jobspecification: 'ABC' },

    //]
  }
  displayedColumns: string[] = ['employeeCode', 'employeeName', 'gender', 'mobileNo', 'email', 'qualification','jobSpecification','edit','delete'];
  dataSource: any;

  constructor(public formBuilder: FormBuilder, private http: HttpClient) { }
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
       // if (this.response.statusCode == 200) {
          //this.toasrt.success("Employee Created. 😎")
          //this.router.navigate(['employee']);
      //  }
       // else {
         // this.toasrt.error("Error While Creating Employee. 😒😰")
       // }
      });
  }

  getAllEmployee() {
    this.http.get<any>("https://localhost:7087/api/Employee/GetAllEmployee").subscribe((res) => {
      this.dataSource = res;
    })
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
