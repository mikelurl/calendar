import { Component, OnInit } from '@angular/core';
import { DetailService } from '../services/detail.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  items = [1,2,3,4,5,6,7,8,9,10]
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
