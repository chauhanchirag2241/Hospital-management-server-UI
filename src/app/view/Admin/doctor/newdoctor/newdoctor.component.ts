import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from '../doctor.component';

@Component({
  selector: 'app-newdoctor',
  templateUrl: './newdoctor.component.html',
  styleUrls: ['./newdoctor.component.css'],
  standalone: true,
  imports: [CommonModule, MatInputModule, MatIconModule, MatSelectModule, MatFormFieldModule, MatCardModule, MatDividerModule, ReactiveFormsModule]
})
export class NewdoctorComponent  {


}
