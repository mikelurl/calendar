import { ViewportRuler } from '@angular/cdk/scrolling';
import { Component, Input, OnInit } from '@angular/core';
import { ExampleEvents } from 'docs/assets/example-data';

@Component({
  selector: 'app-cal-list',
  templateUrl: './cal-list.component.html',
  styleUrls: ['./cal-list.component.css']
})
export class CalListComponent implements OnInit {
  @Input() selectedDate: Date;

  items = ExampleEvents;

  constructor(private _ruler: ViewportRuler) {
    this.items.forEach(item =>{
      this.items.push(item)
    })
  }

  ngOnInit(): void {
    console.log(this.items);
    // console.log(this._ruler.getViewportRect().height);
  }

}
