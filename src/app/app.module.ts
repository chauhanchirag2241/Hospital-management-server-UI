import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormsModule } from '@angular/forms';

import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { DoctorComponent } from './view/Admin/doctor/doctor.component';
import { PaitentmoduleComponent } from './view/Admin/paitentmodule/paitentmodule.component';
import { PaymentComponent } from './view/Admin/payment/payment.component';
import { MedicineComponent } from './view/Admin/medicine/medicine.component';
import { LoginComponent } from './view/Auth/login/login.component';
import { RegisterComponent } from './view/Auth/register/register.component';
import { NavbarComponent } from './view/Admin/navbar/navbar.component';
import { PaitentvisitedashboardComponent } from './view/Admin/paitentvisitedashboard/paitentvisitedashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardadminComponent } from './view/Admin/dashboardadmin/dashboardadmin.component';

//import { MatTableDataSource } from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    PaitentmoduleComponent,
    PaymentComponent,
    MedicineComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    PaitentvisitedashboardComponent,
    DashboardComponent,
    DashboardadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDividerModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    HttpClientModule,
    MatRadioModule,
    //MatTableDataSource,
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
