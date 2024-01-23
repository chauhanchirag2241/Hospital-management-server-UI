import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
declare var Razorpay: any;

@Component({
  standalone:true,
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  imports: [CommonModule, MatTableModule, MatInputModule]
  
})
export class PaymentComponent implements OnInit {
  ngOnInit(): void {
    this.dataSource = [
      { paitentname: 'chirag', email: 'AMC@gmail.com', doctor: 'ABC', amount: '5000', status: 'pending' },
      { paitentname: 'chirag', email: 'AMC@gmail.com', doctor: 'ABC', amount: '5000', status: 'pending' },
      { paitentname: 'chirag', email: 'AMC@gmail.com', doctor: 'ABC', amount: '5000', status: 'pending' },
      { paitentname: 'chirag', email: 'AMC@gmail.com', doctor: 'ABC', amount: '5000', status: 'pending' },
      { paitentname: 'chirag', email: 'AMC@gmail.com', doctor: 'ABC', amount: '5000', status: 'pending' },
      { paitentname: 'chirag', email: 'AMC@gmail.com', doctor: 'ABC', amount: '5000', status: 'pending' },
      { paitentname: 'chirag', email: 'AMC@gmail.com', doctor: 'ABC', amount: '5000', status: 'pending' },
      { paitentname: 'chirag', email: 'AMC@gmail.com', doctor: 'ABC', amount: '5000', status: 'pending' },
      ]
  }
  
  displayedColumns: string[] = ['firstname', 'studentname', 'fathername', 'emailid', 'classid', 'status', 'Download'];
  dataSource: any;

  message: any = "Not yet stared";
  paymentId = "";
  error = "";
  title = 'angular-razorpay-intergration';

  options = {
    "key": "rzp_test_4CfDyVjD28HBbF",
    "amount": "200",
    "name": "Student Fess",
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
    this.options.amount = "2500000"; //paise
    this.options.prefill.name = "Abcd";
    this.options.prefill.email = "abcd@gmail.com";
    this.options.prefill.contact = "9999999999";
    var rzp1 = new Razorpay(this.options);
    rzp1.open();
    rzp1.on('payment.failed', function (response: any) {
      //this.message = "Payment Failed";
      // Todo - store this information in the server
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
      //this.error = response.error.reason;
    }
    );
  }
  @HostListener('window:payment.success', ['$event'])
  onsuccessbtn(){
    console.log('done');
}
}
