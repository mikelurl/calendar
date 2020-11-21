import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { CalendarDetailComponent } from './calendar-detail/calendar-detail.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home.component';
import { MeComponent } from './me/me.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: CalendarComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'detail',
            component: CalendarDetailComponent
          }
        ]
      },
      {
        path: 'me',
        component: MeComponent,
        canActivate: [AuthGuard]
      }
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
