import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {  map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  hiddenDates = [];
  slots = [];
private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }


  getDoctors(){
    return this.http.get<[]>(this.baseUrl).pipe( 
      map(res => {
        const data = [];
        
        for(var i = 0; i < res.length; i +=1){
          
          var id = res[i]['id']
          var name = res[i]['name']
          var org = res[i]['org']

          data.push({id: id, name:name, org: org})
          
        }

        return data;
      })
    )
  }


  getDoctorDetails(id:string){
    return this.http.get(this.baseUrl+'/'+id).pipe(
      map( res => {
        console.log(res);
        var dateSorter = [1,2,3,4,5,6,7]
        
        for (const item in res['availibility']){
          // this.doctorAvailableDates.push(item)
          //This switch state will sort out the date need to show in calender
          switch (item) {
            case 'mon':
             var filtered = this.FilteringCalenderDates(dateSorter, 1);
             dateSorter = filtered;
              break;
            case 'tus':
              var filtered = this.FilteringCalenderDates(dateSorter, 2);
              dateSorter = filtered;
              break;

            case 'wed':
              var filtered = this.FilteringCalenderDates(dateSorter, 3);
              dateSorter = filtered;
              break;

            case 'thu':
              var filtered = this.FilteringCalenderDates(dateSorter, 4);
              dateSorter = filtered;
              break;
            case 'fri':
              var filtered = this.FilteringCalenderDates(dateSorter, 5);
              dateSorter = filtered;
              break;
            case 'sat':
              var filtered = this.FilteringCalenderDates(dateSorter, 6);
              dateSorter = filtered;
              break;

            case 'sun':
              var filtered = this.FilteringCalenderDates(dateSorter, 7);
              dateSorter = filtered;
              break;
          
            default:
              break;
          } 

          this.slots.push({date: item, time: res['availibility'][item]});
      
         }

         this.setHiddenDates(dateSorter);
         console.log(this.hiddenDates);
         

         return res;


      })
    )

  }

  setHiddenDates(dates){

    console.log(dates);
    
    this.hiddenDates = dates;

  }

  getHiddenDates(){
    return this.hiddenDates
  }

  getTimeSlots(){
    return this.slots;
  }


    FilteringCalenderDates(arr, value){
    return arr.filter(function(ele){ 
      return ele != value; 
  });
  }
}
