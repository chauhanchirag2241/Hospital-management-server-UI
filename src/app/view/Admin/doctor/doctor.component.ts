import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { NewdoctorComponent } from './newdoctor/newdoctor.component';


@Component({
  selector: 'app-doctor',
  standalone: true,
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
  imports: [MatDialogModule,MatFormFieldModule,  MatTableModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule]
})
export class DoctorComponent implements OnInit {
  
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

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(NewdoctorComponent, {
       height: '600px', width: '1500px', 
      //data: [this.admissionById, this.isEditScreen],
      //  admissionData : this.admissionById,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
