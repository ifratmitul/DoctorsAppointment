import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {  map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

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
    return this.http.get(this.baseUrl+'/'+id)

  }
}
