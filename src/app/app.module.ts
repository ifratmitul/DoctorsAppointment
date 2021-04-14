import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { DoctorComponent } from './doctor/doctor.component';

import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { DoctorItemComponent } from './doctor/doctor-item/doctor-item.component';
import { HeaderComponent } from './header/header.component';
import { InputElementComponent } from './shared/input-element/input-element.component';
import { CalendarComponent } from './shared/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    DoctorDetailsComponent,
    DoctorItemComponent,
    HeaderComponent,
    InputElementComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
