import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  constructor(private _authS: AuthService, private _routerS: Router, private _calS: CalendarService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this._authS.logout();
    this._routerS.navigate(['start']);
  }

  deleteAllEvents(): void {
    this._calS.deleteAllEvents();
  }
}
