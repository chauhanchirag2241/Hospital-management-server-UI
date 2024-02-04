import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './view/Admin/doctor/doctor.component';
import { PaitentmoduleComponent } from './view/Admin/paitentmodule/paitentmodule.component';
import { PaymentComponent } from './view/Admin/payment/payment.component';
import { LoginComponent } from './view/Auth/login/login.component';

const routes: Routes = [
 
  {
    path: 'doctor',
    component: DoctorComponent
  },
  {
    path: 'paitent',
    component: PaitentmoduleComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'login',
    component: LoginComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
