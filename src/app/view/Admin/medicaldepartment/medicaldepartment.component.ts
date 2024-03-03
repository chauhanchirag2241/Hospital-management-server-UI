import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicaldepartment',
  templateUrl: './medicaldepartment.component.html',
  styleUrls: ['./medicaldepartment.component.css']
})
export class MedicaldepartmentComponent implements OnInit {
  isShowList: any = true;
  allPaitentForPayment: any;
  dataSource: any;
  medicineList: any;

  constructor(private http: HttpClient,) { }
  ngOnInit() {
    this.getAllPaitentForPayment();
  }

  displayedColumns: string[] = ['paitentName', 'status', 'addedByName', 'medicineNames', 'edit', 'delete'];
  getAllPaitentForPayment() {
    
    this.http.get<any>(`https://localhost:7087/api/medicine/GetAllPaitentForPayment`)
      .subscribe((res) => {
        this.allPaitentForPayment = res;
        this.dataSource = res;
      });
  }

  onEdit(element : any) {
    this.isShowList = false;
    this.getAllMedicine();
  }

  getAllMedicine() {
    this.http.get<any>(`https://localhost:7087/api/medicine/GetAllMedicine`)
      .subscribe((res) => {
        this.medicineList = res;
      });
  }
  
}
