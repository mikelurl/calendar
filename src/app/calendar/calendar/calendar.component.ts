import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { CalendarService } from 'src/app/services/calendar.service';
import { AppEvents } from 'src/app/services/models/events';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, OnDestroy {
  isSelected: Date
  openSidebar: boolean
  eventList: Observable<AppEvents>

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef,
      private media: MediaMatcher, private _calS: CalendarService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.eventList = this._calS.getAllEvents();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  selectedDate(date: Date): void {
    this.isSelected = date
  }

}
