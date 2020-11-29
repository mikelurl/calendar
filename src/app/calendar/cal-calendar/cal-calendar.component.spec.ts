import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalCalendarComponent } from './cal-calendar.component';

describe('CalCalendarComponent', () => {
  let component: CalCalendarComponent;
  let fixture: ComponentFixture<CalCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
