import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {

  details


  doctorAvailableDates = []
  doctorAvailability = []

  constructor(private doctorService:DoctorService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(){
    
    this.doctorService.getDoctorDetails(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(res => {
      console.log(res);
      this.details = res;     
      for (const item in res['availibility']){
            // this.doctorAvailableDates.push(item)
        this.doctorAvailability.push({date: item, time: res['availibility'][item]})
        
      }
      
    }, err => {
      console.log(err);
      
    })

    

  }

}
