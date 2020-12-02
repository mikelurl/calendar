import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CalendarService } from 'src/app/services/calendar.service';
import { AppEventDetail } from 'src/app/services/models/events';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit {
  private _id: number;
  eventDetails: AppEventDetail
  isEditing: boolean

  eventDetailsForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    start: new FormControl(new Date()),
    end: new FormControl(new Date()),
    place: new FormControl(''),
    participants: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private _location: Location, private _activRoute: ActivatedRoute, private _calService: CalendarService) {
    this.isEditing = false;
  }

  ngOnInit(): void {
    this._id = +this._activRoute.snapshot.paramMap.get('id');
    this._calService.getEventDetailsById(this._id).subscribe(ev => {
      this.eventDetails = ev;
    })

    this.eventDetailsForm.patchValue(this.eventDetails)
    this.eventDetailsForm.disable();
  }

  routingBack(): void {
    this._location.back();
  }

  editEvent(): void {
    this.isEditing = true;
    this.eventDetailsForm.enable();
  }

  saveEvent(): void {
    this.isEditing = false;
    this.eventDetails = this.eventDetailsForm.getRawValue()
    this._calService.editEvent(this.eventDetails);
    this.routingBack();
  }

  deleteEvent(): void {
    this._calService.deleteEvent(this.eventDetails)
    this.routingBack();
  }


}
