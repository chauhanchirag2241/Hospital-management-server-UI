import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addmedicine',
  templateUrl: './addmedicine.component.html',
  styleUrls: ['./addmedicine.component.css']
})
export class AddmedicineComponent implements OnInit {
  /*variables*/
  isShowList = true;
  isAdd = false;
  dataSource: any;
  medicineForm!: FormGroup;
  response: any;

  constructor(public formBuilder: FormBuilder, private http: HttpClient, private toastr: ToastrService,) {

  }

  ngOnInit() {
    this.getAllMedicine();
    this.createForm();
  }
  createForm() {
    this.medicineForm = this.formBuilder.group({
      //medicineId: [''],
      medicineName: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      medicineCount: ['', [Validators.required]],
      discription: ['', Validators.required],
    
    });
  }

  onBackBtnClick() {
    this.isShowList = true;
    this.isAdd = false;
  }
  addMedicine() {

    console.log(this.medicineForm.value);
    this.http.post<any>("https://localhost:7087/api/medicine/Add", this.medicineForm.value)
        .subscribe((res) => {
          this.response = res;

          if (this.response > 0) {
            this.toastr.success("Medicine Added Successfully. 😎")
            this.onBackBtnClick();
          }
          else {
            this.toastr.error("Error While Adding Medicine. 😒😰")
          }
        });
   
  }
  onAddBtnClick() {
    this.isShowList = false;
    this.isAdd = true;
  }
  displayedColumns: string[] = ['medicineName', 'amount', 'medicineCount', 'discription', 'edit', 'delete'];
  getAllMedicine() {
    
    this.http.get<any>(`https://localhost:7087/api/medicine/GetAllMedicine`).subscribe((res) => {
      //this.dataSource = res;
      this.dataSource = new MatTableDataSource(res);
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
