import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CalendarService } from 'src/app/services/calendar.service';
import { AppEventDetail } from 'src/assets/models/events';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit {
  private _id: number;
  eventDetails: AppEventDetail
  isEditing: boolean

  constructor(private _location: Location, private _activRoute: ActivatedRoute, private _calService: CalendarService) {
    this.isEditing = false;
  }

  ngOnInit(): void {
    this._id = +this._activRoute.snapshot.paramMap.get('id');
    this._calService.getEventDetailsById(this._id).subscribe(ev => {
      this.eventDetails = ev;
    })
  }

  routingBack(): void {
    this._location.back();
  }

  editEvent(): void {
    this.isEditing = true;
  }

  saveEvent(): void {
    this.isEditing = false;
    this.routingBack();
  }

  deleteEvent(): void {
    this._calService.deletEvent(this.eventDetails)
    this.routingBack();
  }


}
