import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;
  hide = true;
  constructor(private fb: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', [Validators.required]],
     // message: ['', [Validators.required, Validators.minLength(15)]],
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      console.log('Valid?', form.valid); // true or false
      console.log('Name', form.value.name);
      console.log('password', form.value.password);
      location.pathname = ('/layout');
    }

    
    
  }
}
