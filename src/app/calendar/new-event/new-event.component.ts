import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CalendarService } from 'src/app/services/calendar.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AppEventDetail } from 'src/app/services/models/events';


@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  eventDetailsForm = new FormGroup({
    title: new FormControl(''),
    start: new FormControl(new Date()),
    end: new FormControl(new Date()),
    place: new FormControl(''),
    participants: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private _location: Location, private _calService: CalendarService) { }

  ngOnInit(): void {

    
  }

  routingBack(): void {
    this._location.back();
  }

  addEvent(): void {
    let temp: AppEventDetail = {
      id: Date.now(),
      title: "",
      start: new Date(),
      end: new Date(),
      place: "",
      description: "",
      participants: []
    }
  
    temp = this.eventDetailsForm.getRawValue()

    this._calService.addEvent(temp);
    this.routingBack()
  }

}
