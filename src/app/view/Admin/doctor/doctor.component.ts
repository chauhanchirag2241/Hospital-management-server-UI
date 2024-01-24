import { CommonModule } from '@angular/common';
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
import { NewdoctorComponent } from './newdoctor/newdoctor.component';


@Component({
  selector: 'app-doctor',
  standalone: true,
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
  imports: [CommonModule, MatDialogModule, MatFormFieldModule, MatTableModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule, MatCardModule, MatSelectModule, MatDividerModule, ReactiveFormsModule]
})
export class DoctorComponent implements OnInit {
  /* variables*/
  isShowList: boolean = true;
  isAdd: boolean = false;
  /*end variable*/

  ngOnInit() {

    this.dataSource = [
      {doctorcode: '2241',doctorname: 'chirag', qualification: 'MBBS', jobspecification: 'ABC' },
      {doctorcode: '2241',doctorname: 'chirag', qualification: 'MBBS', jobspecification: 'ABC' },
      {doctorcode: '2241',doctorname: 'chirag', qualification: 'MBBS', jobspecification: 'ABC' },
      {doctorcode: '2241',doctorname: 'chirag', qualification: 'MBBS', jobspecification: 'ABC' },
      {doctorcode: '2241',doctorname: 'chirag', qualification: 'MBBS', jobspecification: 'ABC' },
      {doctorcode: '2241',doctorname: 'chirag', qualification: 'MBBS', jobspecification: 'ABC' },
      {doctorcode: '2241',doctorname: 'chirag', qualification: 'MBBS', jobspecification: 'ABC' },
      {doctorcode: '2241',doctorname: 'chirag', qualification: 'MBBS', jobspecification: 'ABC' },
      {doctorcode: '2241',doctorname: 'chirag', qualification: 'MBBS', jobspecification: 'ABC' },
      {doctorcode: '2241',doctorname: 'chirag', qualification: 'MBBS', jobspecification: 'ABC' },
      {doctorcode: '2241',doctorname: 'chirag', qualification: 'MBBS', jobspecification: 'ABC' },
      { doctorcod: '2241', doctorname: 'chirag', qualification: 'MBBS', jobspecification: 'ABC' },

    ]
  }
  displayedColumns: string[] = ['doctorcode','doctorname', 'qualification', 'jobspecification','edit','delete'];
  dataSource: any;

  constructor(public dialog: MatDialog, public formBuilder: FormBuilder,) { }

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
    department: ['', [Validators.required]],
    emptype: ['', [Validators.required]],
    empcode: ['', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]],
    empname: ['', [Validators.required, Validators.maxLength(25)]],
    gender: ['', [Validators.required]],
    mobileno: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    email: ['', [Validators.required, Validators.email]],
    qualification: ['', [Validators.required]],
    jobspecification: ['', [Validators.required]]
  });

  addNewEmployee() {
    console.log(this.employeeForm.value);
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
