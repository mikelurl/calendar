import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { DetailEventComponent } from './detail-event/detail-event.component';
import { NewEventComponent } from './new-event/new-event.component';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CalCalendarComponent } from './cal-calendar/cal-calendar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CalListComponent } from './cal-list/cal-list.component';
import { CalendarService } from '../services/calendar.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import { SpaceService } from './services/space.service';



@NgModule({
  declarations: [
    CalendarComponent,
    DetailEventComponent,
    NewEventComponent,
    CalCalendarComponent,
    CalListComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    ScrollingModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [CalendarService, SpaceService]
})
export class CalendarModule { }
