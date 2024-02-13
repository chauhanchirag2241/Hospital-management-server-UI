import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardadminComponent } from './view/Admin/dashboardadmin/dashboardadmin.component';
import { DoctorComponent } from './view/Admin/doctor/doctor.component';
import { PaitentmoduleComponent } from './view/Admin/paitentmodule/paitentmodule.component';
import { PaitentvisitedashboardComponent } from './view/Admin/paitentvisitedashboard/paitentvisitedashboard.component';
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

  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'paitentvisitedashboard',
    component: PaitentvisitedashboardComponent
  },
  {
    path: 'dashboardadmin',
    component: DashboardadminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
