import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { AppEvents } from 'src/app/services/models/events';
import { SpaceService } from '../services/space.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, OnDestroy {
  sidebarIsOpen: boolean;

  isSelected: Date;
  eventList: AppEvents;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
      media: MediaMatcher, private _calS: CalendarService, private _spaceS: SpaceService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.getData();
    if(this.mobileQuery.matches){
      this._spaceS.setMobile(56)
    } else {
      this._spaceS.setMobile(0)
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  selectedDate(date: Date): void {
    this.isSelected = date
  }

  getData(): void {
    this._calS.getAllEvents().subscribe(list => {
      this.eventList = list;
    });
  }

  openSidebar(): void {
    this.sidebarIsOpen = true;
  }

  closeSidebar(): void {
    this.sidebarIsOpen = false;
    this.getData();
  }

}
