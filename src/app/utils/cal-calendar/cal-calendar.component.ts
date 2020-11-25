import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

enum CalView{
  standard = 'standard'
}

const Weekdays = ["Mon", "Tus", "Wen", "Thu", "Fri", "Sat", "Sun"]

@Component({
  selector: 'app-cal-calendar',
  templateUrl: './cal-calendar.component.html',
  styleUrls: ['./cal-calendar.component.css']
})
export class CalCalendarComponent implements OnInit {
  @Input() view = CalView.standard;

  @Output() selected = new EventEmitter<Date>();

  private nowDate: Date;
  private selectedDate: Date;

  spanner: number[] = [];
  days: number[] = [];
  weekdays = Weekdays;

  constructor() {
    let timeElapsed = Date.now();
    this.nowDate = new Date(timeElapsed);
  }

  ngOnInit(): void {
    this.refreshSelection(this.nowDate);
  }

  today(): void {
    this.refreshSelection(this.nowDate);
  }

  prevMonth(): void {
    this.refreshSelection(new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() - 1,this.selectedDate.getDate()));
  }

  nextMonth(): void {
    this.refreshSelection(new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() + 1,this.selectedDate.getDate()));
  }

  selectDay(day: number): void {
    let date = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), day)
    this.refreshSelection(date);
  }

  selectToday(): void {
    this.refreshSelection(this.nowDate);
  }

  refreshSelection(date: Date): void {
    this.selectedDate = date; 
    this.spanner = this.getSpannerInMonth(date);
    this.days = this.getDaysInMonth(date);
    this.selected.emit(date);
  }

  isSelected(day: number): boolean {
    if(day == this.selectedDate.getDate()) return true;
    else return false;
  }

  getMonthYearString(): string {
    return this.selectedDate.toLocaleDateString(undefined, { year: 'numeric', month: 'long' });
  }

  private getSpannerInMonth(date: Date): number[] {
    let spanners: number[] = [];
    let N = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    N = Math.abs(N - 6);

    for (var i = 1; i <= N; i++) {
      spanners.push(i);
    }
    return spanners;
  }

  private getDaysInMonth(date: Date): number[] {
    let days: number[] = [];
    let N = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    for (var i = 1; i <= N; i++) {
      days.push(i);
    }
    return days;
  }
}
