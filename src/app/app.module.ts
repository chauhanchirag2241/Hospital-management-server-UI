import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AdminComponent } from './Modules/admin/admin.component';
import { AuthComponent } from './Modules/auth/auth.component';
import { MatTableModule } from '@angular/material/table';


//import { MatTableDataSource } from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDividerModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    
    //MatTableDataSource,
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
