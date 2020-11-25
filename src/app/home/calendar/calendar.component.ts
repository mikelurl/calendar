import { Component, OnInit } from '@angular/core';
import { DetailService } from '../services/detail.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  isSelected : Date

  constructor(private detailService: DetailService) {
  }

  ngOnInit(): void {
  }

  sideDetailToggle(): void {
    this.detailService.toggle();
  }

  selectedDate(date: Date): void {
    this.isSelected = date
  }

}
