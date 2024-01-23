import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';

@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    PaymentComponent
  ]
})
export class PaymentModule { }
