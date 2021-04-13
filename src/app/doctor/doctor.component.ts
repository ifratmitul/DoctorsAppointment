import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  doctors = [];

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {

    this.getDoctorsList();
    
  }

  getDoctorsList(){

    this.doctorService.getDoctors().subscribe(res => {
      console.log(res);
      this.doctors = res
      
    }, 
    err =>{
      console.log(err);
      
    })

  }

}
