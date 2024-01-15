import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'layout', component: LayoutComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'header', component: HeaderComponent },
      //{ path: ':id', component: MuscleEditComponent }
    ]
  },
  //{
  //  path: 'dashboard',
  //  component: DashboardComponent
  //},
  //{
  //  path: 'header',
  //  component: HeaderComponent
  //},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
