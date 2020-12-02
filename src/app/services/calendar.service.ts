import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExampleEventsDetail } from 'src/assets/example-data';
import { AppEvent, AppEventDetail, AppEvents, AppEventsDetail } from 'src/assets/models/events';

@Injectable()
export class CalendarService {
  private _myEvents: Array<AppEventDetail>;

  constructor() {
    this._myEvents = JSON.parse(localStorage.getItem('myCalendar'))
    if (this._myEvents === null) {
      this._myEvents = ExampleEventsDetail;
      this._saveLocalEvents();
    }
  }

  private _saveLocalEvents(): void {
    localStorage.setItem('myCalendar', JSON.stringify(this._myEvents))
  }

  getAllEvents(): Observable<AppEvents> {
    let tempEvents: AppEvents = []
    this._myEvents.forEach(ev => {
      let tempEvent: AppEvent = {
        id: ev.id,
        title: ev.title,
        start: ev.start,
        end: ev.end,
        place: ev.place
      }
      tempEvents.push(tempEvent)
    })

    let _obs: Observable<AppEvents>
    _obs = new Observable((observer) => {
      observer.next(tempEvents)
      observer.complete()
    })
    return _obs
  }

  getEventDetailsById(id: number): Observable<AppEventDetail> {
    let _obs: Observable<AppEventDetail>
    this._myEvents.forEach(ev => {
      if (ev.id == id) {
        _obs = new Observable((observer) => {
          observer.next(ev)
          observer.complete()
        })
      }
    })
    return _obs
  }

  addEvent(event: AppEventDetail): Observable<AppEventsDetail> {
    this._myEvents.push(event);
    this._saveLocalEvents()

    let _obs: Observable<AppEventsDetail>
    _obs = new Observable((observer) => {
      observer.next(this._myEvents)
      observer.complete()
    })
    return _obs
  }

  editEvent(appEvent: AppEventDetail): Observable<AppEventsDetail> {

    for (let [i, ev] of this._myEvents.entries()) {
      if (ev.id === appEvent.id) {
        this._myEvents[i] = appEvent;
        this._saveLocalEvents();
        return;
      }
    }

    let _obs: Observable<AppEventsDetail>
    _obs = new Observable((observer) => {
      observer.next(this._myEvents)
      observer.complete()
    })
    return _obs
  }

  deleteEvent(appEvent: AppEventDetail): void {
    let index = this._myEvents.indexOf(appEvent, 0)
    delete this._myEvents[index];
    this._saveLocalEvents();
  }
}
