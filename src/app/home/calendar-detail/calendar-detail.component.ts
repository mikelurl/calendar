import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { DetailService } from '../services/detail.service';

@Component({
  selector: 'app-calendar-detail',
  templateUrl: './calendar-detail.component.html',
  styleUrls: ['./calendar-detail.component.css']
})
export class CalendarDetailComponent implements OnInit {


  constructor(private detailService: DetailService) {}

  ngOnInit(): void {
  }


  closeDetail(): void {
    this.detailService.close();
  }

}
