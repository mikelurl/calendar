import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { MeComponent } from './me/me.component';
import { HomeComponent } from './home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { AuthGuard } from '../auth/auth.guard';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CalendarDetailComponent } from './calendar-detail/calendar-detail.component';
import { CalCalendarComponent } from '../utils/cal-calendar/cal-calendar.component';
import { DetailService } from './services/detail.service';
import { ScrollingModule } from '@angular/cdk/scrolling'; 



@NgModule({
  declarations: [
    CalendarComponent,
    MeComponent,
    HomeComponent,
    CalendarDetailComponent,
    CalCalendarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    ScrollingModule
  ],
  providers: [AuthGuard, DetailService],
})


export class HomeModule { }
