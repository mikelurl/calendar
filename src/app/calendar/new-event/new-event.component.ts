import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CalendarService } from 'src/app/services/calendar.service';
import { AppEventDetail } from 'src/assets/models/events';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  constructor(private _location: Location, private _calService: CalendarService) { }

  ngOnInit(): void {
  }

  routingBack(): void {
    this._location.back();
  }

  addEvent(): void {
    let temp: AppEventDetail = {
      id: Date.now(),
      title: "Automatisch_" + (Date.now()).toString,
      start: new Date(Date.now()),
      end: new Date(Date.now()),
      place: "Internet",
      description: "Automatisches Event",
      participants: ["Me", "You", "AndI"]
    }
    this._calService.addEvent(temp);
    this.routingBack()
  }

}
