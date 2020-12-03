import { ViewportRuler } from '@angular/cdk/scrolling';
import { ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CalendarService } from 'src/app/services/calendar.service';
import { AppEvent, AppEvents } from 'src/app/services/models/events';
import { SpaceService } from '../services/space.service';

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
  
  availH: number;
  stringAppEvents: Array<listEventElements>
  
  constructor(private _router: Router, private _calService: CalendarService, private _spaceS: SpaceService, private _cdRef:ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.stringAppEvents = this._appEventsToString(this.data);
    this._spaceS.getHeight().subscribe(height => {
      this.availH = height;
      this._cdRef.detectChanges();
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stringAppEvents = this._appEventsToString(this.data);
  }

  openDetails(id: number): void {
    this._router.navigate(['calendar/event', id]);
  }

  showDate(i: number): boolean {
    if(i>=1) {
      let datenow = new Date(this.data[i].start);
      i = i-1;
      let datebefore = new Date(this.data[i].start);
  
      if(datenow.getDate() === datebefore.getDate()) return false;
      else return true;
    } else return true;

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
