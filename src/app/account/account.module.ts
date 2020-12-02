import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { MeComponent } from './me/me.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../auth/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { CalendarService } from '../services/calendar.service';


@NgModule({
  declarations: [
    MeComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    AccountRoutingModule
  ],
  providers: [AuthService, CalendarService]
})
export class AccountModule { }
