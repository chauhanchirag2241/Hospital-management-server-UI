import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardadminComponent } from './view/Admin/dashboardadmin/dashboardadmin.component';
import { DoctorComponent } from './view/Admin/doctor/doctor.component';
import { HomeuiComponent } from './view/Admin/homeui/homeui.component';
import { MedicaldepartmentComponent } from './view/Admin/medicaldepartment/medicaldepartment.component';
import { PagenotfoundComponent } from './view/Admin/pagenotfound/pagenotfound.component';
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
  },
  {
    path: 'homeui',
    component: HomeuiComponent
  },
  {
    path: 'medicaldepartment',
    component: MedicaldepartmentComponent
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
