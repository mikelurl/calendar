import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartpageComponent implements OnInit {
  isSelected : Date
  stringDate: string;

  constructor() { }

  ngOnInit(): void {
  }

  selectedDate(date: Date): void {
    this.isSelected
    this.stringDate = date.toDateString();
  }
}
