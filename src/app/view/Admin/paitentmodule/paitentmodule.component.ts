import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-paitentmodule',
  standalone: true,
  templateUrl: './paitentmodule.component.html',
  styleUrls: ['./paitentmodule.component.css'],
  imports: [CommonModule, MatDialogModule, MatFormFieldModule, ReactiveFormsModule, MatTableModule, MatIconModule, MatInputModule, FormsModule, MatDividerModule, MatCardModule, MatSelectModule]
})
export class PaitentmoduleComponent implements OnInit {
  /* variables*/
  isShowList: boolean = true;
  isAdd: boolean = false;
  /*end variable*/


  ngOnInit() {

    this.dataSource = [
      { paitentcode: '2241', paitentname: 'chirag', gender: 'MBBS', mobileno: 'ABC',email:'AMC@gmail.com', address: 'ABCXYZ', disease: 'Feaver', bloodgroup: 'O-', doctorid: '1', description: 'medicine' },
      { paitentcode: '2241', paitentname: 'chirag', gender: 'MBBS', mobileno: 'ABC',email:'AMC@gmail.com', address: 'ABCXYZ', disease: 'Feaver', bloodgroup: 'O-', doctorid: '1', description: 'medicine' },
      { paitentcode: '2241', paitentname: 'chirag', gender: 'MBBS', mobileno: 'ABC',email:'AMC@gmail.com', address: 'ABCXYZ', disease: 'Feaver', bloodgroup: 'O-', doctorid: '1', description: 'medicine' },
      { paitentcode: '2241', paitentname: 'chirag', gender: 'MBBS', mobileno: 'ABC',email:'AMC@gmail.com', address: 'ABCXYZ', disease: 'Feaver', bloodgroup: 'O-', doctorid: '1', description: 'medicine' },
      { paitentcode: '2241', paitentname: 'chirag', gender: 'MBBS', mobileno: 'ABC',email:'AMC@gmail.com', address: 'ABCXYZ', disease: 'Feaver', bloodgroup: 'O-', doctorid: '1', description: 'medicine' },
      { paitentcode: '2241', paitentname: 'chirag', gender: 'MBBS', mobileno: 'ABC',email:'AMC@gmail.com', address: 'ABCXYZ', disease: 'Feaver', bloodgroup: 'O-', doctorid: '1', description: 'medicine' },
      { paitentcode: '2241', paitentname: 'chirag', gender: 'MBBS', mobileno: 'ABC',email:'AMC@gmail.com', address: 'ABCXYZ', disease: 'Feaver', bloodgroup: 'O-', doctorid: '1', description: 'medicine' },
      { paitentcode: '2241', paitentname: 'chirag', gender: 'MBBS', mobileno: 'ABC',email:'AMC@gmail.com', address: 'ABCXYZ', disease: 'Feaver', bloodgroup: 'O-', doctorid: '1', description: 'medicine' },
      { paitentcode: '2241', paitentname: 'chirag', gender: 'MBBS', mobileno: 'ABC',email:'AMC@gmail.com', address: 'ABCXYZ', disease: 'Feaver', bloodgroup: 'O-', doctorid: '1', description: 'medicine' },
      { paitentcode: '2241', paitentname: 'chirag', gender: 'MBBS', mobileno: 'ABC',email:'AMC@gmail.com', address: 'ABCXYZ', disease: 'Feaver', bloodgroup: 'O-', doctorid: '1', description: 'medicine' },
      { paitentcode: '2241', paitentname: 'chirag', gender: 'MBBS', mobileno: 'ABC',email:'AMC@gmail.com', address: 'ABCXYZ', disease: 'Feaver', bloodgroup: 'O-', doctorid: '1', description: 'medicine' },
      { paitentcode: '2241', paitentname: 'chirag', gender: 'MBBS', mobileno: 'ABC',email:'AMC@gmail.com', address: 'ABCXYZ', disease: 'Feaver', bloodgroup: 'O-', doctorid: '1', description: 'medicine' },

    ]
  }


  displayedColumns: string[] = ['paitentcode', 'paitentname', 'gender', 'mobileno', 'email','address', 'disease', 'bloodgroup', 'doctorid','description','edit','delete'];
  dataSource: any;
  medicines = new FormControl('');
  medicineList: string[] = ['Adrenaline', 'Dopamine', 'paracetamol', 'Dupixent', 'Plan B', 'Lexapro', 'Nurtec', 'Entresto', 'Meloxicam','Naproxen'];
 /* constructor(public dialog: MatDialog) { }*/

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
}
