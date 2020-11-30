import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { MeComponent } from './me/me.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../auth/auth.service';


@NgModule({
  declarations: [
    MeComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    AccountRoutingModule
  ],
  providers: [AuthService]
})
export class AccountModule { }
