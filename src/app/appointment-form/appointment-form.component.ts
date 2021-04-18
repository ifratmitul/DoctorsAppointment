import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from '../doctor/doctor.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {

  appointmentForm : FormGroup
  timeSlots = [];
  isSubmitted = false;


  constructor( private fb : FormBuilder, private ds : DoctorService) { }

  ngOnInit(): void {

  this.getSlot()
    this.createAppointmentForm();
  }

  createAppointmentForm(){
    this.appointmentForm = this.fb.group({
      slot: ['',[Validators.required]],
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
      reason : [null, [Validators.required]]

    })
       
    
  }

  onSubmit(){
    this.isSubmitted = !this.isSubmitted;
    
  }

  getSlot(){

    this.timeSlots = this.ds.getTimeSlots();
    console.log(this.timeSlots);
    

  }

}
