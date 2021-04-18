import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { DoctorComponent } from './doctor/doctor.component';

import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { DoctorItemComponent } from './doctor/doctor-item/doctor-item.component';
import { HeaderComponent } from './header/header.component';
import { InputElementComponent } from './shared/input-element/input-element.component';
import { CalendarComponent } from './shared/calendar/calendar.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { ReactiveFormsModule } from '@angular/forms';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
])
@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    DoctorDetailsComponent,
    DoctorItemComponent,
    HeaderComponent,
    InputElementComponent,
    CalendarComponent,
    AppointmentFormComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    NgxSpinnerModule,
    FullCalendarModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
