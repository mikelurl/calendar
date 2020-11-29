import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  routingBack(): void {
    this._location.back();
  }

}
