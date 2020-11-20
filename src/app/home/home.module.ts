import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { MeComponent } from './me/me.component';


@NgModule({
  declarations: [CalendarComponent, MeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
