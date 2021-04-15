import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ErrorComponent } from './shared/error/error.component';

const routes: Routes = [
  {path:'', component:DoctorComponent},
  {path:':id', component:DoctorDetailsComponent},
  {path:'error', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
