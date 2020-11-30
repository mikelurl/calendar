import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalListComponent } from './cal-list.component';

describe('CalListComponent', () => {
  let component: CalListComponent;
  let fixture: ComponentFixture<CalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
