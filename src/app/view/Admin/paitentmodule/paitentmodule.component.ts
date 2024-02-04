import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


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
  /*end variable*/


  ngOnInit() {
    this.getAllPaitent();
  }


  displayedColumns: string[] = ['firstName', 'lastName', 'mobileNo', 'emergencyContectNo', 'birthDate', 'email', 'gender', 'address', 'bloodGroup', 'medicalIssue', 'doctorId', 'visiteDate','timeingShift','edit','delete'];
  dataSource: any;
  medicines = new FormControl('');
  medicineList: string[] = ['Adrenaline', 'Dopamine', 'paracetamol', 'Dupixent', 'Plan B', 'Lexapro', 'Nurtec', 'Entresto', 'Meloxicam','Naproxen'];
  constructor( private http: HttpClient) { }

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

  onEdit(id: any) {
    this.takePaitent = true;
    this.isShowList = false;
  }
  getAllPaitent() {
    this.http.get<any>("https://localhost:7087/api/Paitent/GetAll").subscribe((res) => {
      this.dataSource = res;
    })
  }
}
