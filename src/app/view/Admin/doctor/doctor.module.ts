import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { NewdoctorComponent } from './newdoctor/newdoctor.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class DoctorModule { }
