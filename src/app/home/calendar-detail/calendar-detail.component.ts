import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calendar-detail',
  templateUrl: './calendar-detail.component.html',
  styleUrls: ['./calendar-detail.component.css']
})
export class CalendarDetailComponent implements OnInit {
  @Output() closeDetailEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeDetail(): void {
    this.closeDetailEvent.emit();
  }

}
