import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


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
  /*end variable*/


  ngOnInit() {
    this.getAllPaitent();
    this.createForm();   
    this.getDepartment();
  }


  displayedColumns: string[] = ['firstName', 'lastName', 'mobileNo', 'emergencyContectNo', 'birthDate', 'email', 'gender', 'address', 'bloodGroup', 'medicalIssue', 'doctorId', 'visiteDate','timeingShift','edit','delete'];
  dataSource: any;
  medicines = new FormControl('');
  medicineList: string[] = ['Adrenaline', 'Dopamine', 'paracetamol', 'Dupixent', 'Plan B', 'Lexapro', 'Nurtec', 'Entresto', 'Meloxicam','Naproxen'];
  constructor(public formBuilder: FormBuilder, private http: HttpClient) { }

  createForm() {
    this.paitentForm = this.formBuilder.group({
      paitentId: [''],
      paitentName: ['', [Validators.required]],
      medicalIssue: ['', [Validators.required]],
      assignId: ['', [Validators.required]],
      description: [''],
      medicinecon:[''],

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
    this.http.get<any>("https://localhost:7087/api/Paitent/GetAll").subscribe((res) => {
      this.dataSource = res;
    })
  }
}
