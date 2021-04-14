import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { DoctorComponent } from './doctor/doctor.component';

const routes: Routes = [
  {path:'', component:DoctorComponent},
  {path:':id', component:DoctorDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
