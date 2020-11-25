import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DetailService {

  private _isOpen = new BehaviorSubject<boolean>(false);
  public isOpen: Observable<boolean> = this._isOpen.asObservable();
  
  open():void {
    this._isOpen.next(true); 
  }

  close():void {
    this._isOpen.next(false); 
  }

  toggle():void {
    let oldIsOpen;
    this.isOpen.subscribe(isOpen => oldIsOpen = isOpen);
    this._isOpen.next(!oldIsOpen);
  }
}
