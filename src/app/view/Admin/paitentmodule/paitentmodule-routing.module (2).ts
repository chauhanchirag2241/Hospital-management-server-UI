import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaitentmoduleComponent } from './paitentmodule.component';

const routes: Routes = [
  {
    path: '',
    component: PaitentmoduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaitentmoduleRoutingModule { }
