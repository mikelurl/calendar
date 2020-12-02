import { ViewportRuler } from '@angular/cdk/scrolling';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CalendarService } from 'src/app/services/calendar.service';
import { AppEvent, AppEvents } from 'src/app/services/models/events';

export interface listEventElements {
    id: number;
    startday: string;
    startmonth: string;
    starttime: string;
    endtime: string;
    title: string;
    place: string;
}

@Component({
  selector: 'app-cal-list',
  templateUrl: './cal-list.component.html',
  styleUrls: ['./cal-list.component.css']
})
export class CalListComponent implements OnInit, OnChanges {
  @Input() selectedDate: Date;
  @Input() data: AppEvents;

  stringAppEvents: Array<listEventElements>

  constructor(private _ruler: ViewportRuler, private _router: Router, private _calService: CalendarService) {
  }

  ngOnInit(): void {
    this.stringAppEvents = this._appEventsToString(this.data)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stringAppEvents = this._appEventsToString(this.data)
  }

  showDetails(id: number): void {
    this._router.navigate(['calendar/event', id]);
  }


  private _appEventsToString(appEvents: AppEvents): Array<listEventElements> {
    let array: listEventElements[]=[];
    appEvents.forEach(ev => {
      array.push(this._appEventToString(ev))
    })

    return array
  }

  private _appEventToString(appEvent: AppEvent): listEventElements {
    let startdate = new Date(appEvent.start)
    let enddate = new Date(appEvent.end)
    let element = {
      id: appEvent.id,
      startday: startdate.getDate().toString(),
      startmonth: startdate.getMonth().toString(),
      starttime: startdate.getHours().toString() + ":" + startdate.getMinutes().toString(),
      endtime: enddate.getHours().toString() + ":" + enddate.getMinutes().toString(),
      title: appEvent.title,
      place: appEvent.place
    }
    return element
  }

}
