import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jsPDF } from "jspdf";
import { ToastrService } from 'ngx-toastr';
declare var Razorpay: any;

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
  form!: FormGroup;
  totalAmount: number = 0;
  giveMedicine: any;
  paitentName: any;
  tableData: any[] = [];
  paitentId: any;
  paitentVisiteId: any;
  response: any;
  email: any;
  mobileNo: any;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router, private toastr: ToastrService) { }
  ngOnInit() {
    this.getAllPaitentForPayment();
    this.form = this.fb.group({
      medicines: this.fb.array([
        this.createMedicineControl() // Create initial medicine control
      ])
    });
  }

  get medicineControls() {
    return (this.form.get('medicines') as FormArray).controls;
  }

  createMedicineControl() {
    return this.fb.group({
      medicineId: ['', Validators.required],
      quantity: ['', Validators.required]
    });
  }


  addMedicineControl() {
    const medicineControl = this.createMedicineControl(); // Create new medicine control
    const medicinesFormArray = this.form.get('medicines') as FormArray;
    medicinesFormArray.push(medicineControl); // Push to FormArray
    medicinesFormArray.valueChanges.subscribe(_ => {
      this.calculateTotal();
    });
  }
  calculateTotal() {
    this.totalAmount = 0;
    this.medicineControls.forEach((control: any) => {
      this.totalAmount += this.calculateTotalForMedicine(control.value);
    });
    return this.totalAmount;
  }
  calculateTotalForMedicine(medicine: any): number {
    const quantity = medicine.quantity;
    const medicineId = medicine.medicineId;
    const selectedMedicine = this.medicineList.find((med:any) => med.medicineId === medicineId);
    if (selectedMedicine) {
      return quantity * selectedMedicine.amount;
    }
    return 0;
  }

  //downloadBill() {
  //  // Create a new jsPDF instance
  //  const doc = new jsPDF();

  //  // Add content to the PDF
  //  doc.text('Bill', 10, 10);
  //  doc.text('-------------------------', 10, 20);

  //  // Iterate over medicines and add them to the PDF
  //  let y = 30; // Initial y-coordinate for the content
  //  this.form.value.medicines.forEach((medicine: any) => {
  //    doc.text(`Medicine Name: ${this.getMedicineName(medicine.medicineId)}`, 10, y);
  //    doc.text(`Quantity: ${medicine.quantity}`, 10, y + 10);
  //    doc.text(`Total Amount: ${this.calculateTotalForMedicine(medicine)}`, 10, y + 20);
  //    doc.text('-------------------------', 10, y + 30);
  //    y += 40; // Increase y-coordinate for the next medicine
  //  });

  //  // Add total amount to the PDF
  //  doc.text(`Total: ${this.totalAmount}`, 10, y);

  //  // Save the PDF
  //  doc.save('bill.pdf');
  //}
  downloadBill() {
    // Create a new jsPDF instance
    const doc = new jsPDF();
    const paitentName = this.paitentName;
    // Add title
    doc.setFontSize(16);
    doc.text(`${paitentName} Medical Bill`, 10, 10);

    // Define table headers
    const headers = ['Medicine Name', 'Quantity', 'Total Amount'];

    // Define table data
    const data = this.form.value.medicines.map((medicine:any) => [
      this.getMedicineName(medicine.medicineId),
      String(medicine.quantity),
      String(this.calculateTotalForMedicine(medicine))
    ]);

    // Set table position (x, y) and cell width
    const startX = 10;
    const startY = 20;
    const cellWidth = 50;

    // Draw table headers
    let currentX = startX;
    let currentY = startY;
    headers.forEach(header => {
      doc.text(header, currentX, currentY);
      currentX += cellWidth;
    });

    // Draw table data
    data.forEach((row:any) => {
      currentY += 10; // Move to the next row
      currentX = startX; // Reset X position for each row
      row.forEach((cell:any) => {
        doc.text(cell, currentX, currentY);
        currentX += cellWidth;
      });
    });

    // Add total amount
    const totalAmount = this.totalAmount;
    doc.text(`Total: ${totalAmount}`, 100, currentY + 10);

    // Save the PDF
   
    doc.save(`${paitentName}_bill.pdf`);
    this.toastr.success("Download Success.")
  }

  storeTableData() {
    // Assuming 'form' is your FormGroup instance
    this.tableData = this.form.value.medicines.map((medicine: any) => {
      return {
        paitentId: this.paitentId,
        paitentVisiteId: this.paitentVisiteId,
        medicineId: medicine.medicineId,
        medicineName: this.getMedicineName(medicine.medicineId),
        quantity: medicine.quantity,
        amount: this.calculateTotalForMedicine(medicine)
      };
    });
    console.log('Table Data:', this.tableData);

    this.http.post<any>("https://localhost:7087/api/medicine/createBill", this.tableData)
      .subscribe((res) => {
        this.response = res;
        this.paynow();
      });
  }


  getMedicineName(medicineId: number): string {
    const selectedMedicine = this.medicineList.find((med:any) => med.medicineId === medicineId);
    return selectedMedicine ? selectedMedicine.medicineName : '';
  }

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
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
    this.giveMedicine = element.medicineNames;
    this.paitentName = element.paitentName;
    this.paitentId = element.paitentId;
    this.paitentVisiteId = element.paitentVisiteId;
    this.email = element.email;
    this.mobileNo = element.mobileNo;
  }

  getAllMedicine() {
    this.http.get<any>(`https://localhost:7087/api/medicine/GetAllMedicine`)
      .subscribe((res) => {
        this.medicineList = res;
      });
  }
  message: any = "Not yet stared";
  paymentId = "";
  error = "";
  title = 'angular-razorpay-intergration';

  options = {
    "key": "rzp_test_4CfDyVjD28HBbF",
    "amount": "200",
    "name": "Medicle Bill",
    "description": "Web Development",
    "image": "https://as1.ftcdn.net/v2/jpg/05/96/50/44/1000_F_596504439_730T1GKamBvlKUfXqfDhpe90oIIULCTz.jpg",
    "order_id": "",
    "handler": function (response: any) {
      var event = new CustomEvent("payment.success",
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );
      window.dispatchEvent(event);
    },
    "prefill": {
      "name": "",
      "email": "",
      "contact": ""
    },
    "notes": {
      "address": ""
    },
    "theme": {
      "color": "#3399cc"
    }
  };

  paynow() {
    this.paymentId = '';
    this.error = '';
    this.options.amount = (this.totalAmount * 100).toString(); //paise
    this.options.prefill.name = this.paitentName;
    this.options.prefill.email = this.email;
    this.options.prefill.contact = this.mobileNo;
    var rzp1 = new Razorpay(this.options);
    rzp1.open();
    rzp1.on('payment.failed',  (response: any) => {
      //this.message = "Payment Failed";
      // Todo - store this information in the server
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
      this.toastr.error("Payment Failed. 😒")
      //this.error = response.error.reason;
    }
    );
  }
  @HostListener('window:payment.success', ['$event'])
  onsuccessbtn() {
    console.log('done');
    this.toastr.success("Payment Success. 🤑");
    this.isShowList = true;
  }
  
}
