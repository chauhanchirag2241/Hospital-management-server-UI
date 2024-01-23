import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Modules/admin/admin.component';
import { AuthComponent } from './Modules/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./view/Auth/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./view/Auth/register/register.module').then(m => m.RegisterModule)
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./view/Admin/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
       {
         path: 'doctor',
         loadChildren: () => import('./view/Admin/doctor/doctor.module').then(m => m.DoctorModule)
      },
      {
        path: 'paitent',
        loadChildren: () => import('./view/Admin/paitentmodule/paitentmodule.module').then(m => m.PaitentmoduleModule)
      },
      {
        path: 'payment',
        loadChildren: () => import('./view/Admin/payment/payment.module').then(m => m.PaymentModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
