import { ViewportRuler } from '@angular/cdk/scrolling';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarService } from 'src/app/services/calendar.service';
import { AppEvents } from 'src/app/services/models/events';

@Component({
  selector: 'app-cal-list',
  templateUrl: './cal-list.component.html',
  styleUrls: ['./cal-list.component.css']
})
export class CalListComponent implements OnInit {
  @Input() selectedDate: Date;

  appEvents: AppEvents;

  constructor(private _ruler: ViewportRuler, private _router: Router, private _calService: CalendarService) {
  }

  ngOnInit(): void {
    this._calService.getAllEvents().subscribe(ev => {
      this.appEvents = ev;
    })
  }

  showDetails(id: number): void {
    this._router.navigate(['calendar/event', id]);
  }

}
